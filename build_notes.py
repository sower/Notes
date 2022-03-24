# coding: utf-8

import asyncio
import logging as log
import os
import re
import sys
from urllib import parse

import aiohttp
import yaml

from yuque import write_to_json_file

log.basicConfig(level=log.INFO)
sidebar = []
# "id", "slug","cover","description",
doc_property = [
    "title",
    "created_at",
    "updated_at",
    "word_count",
]
export_dir = './docs'


class ExportMD:

    def __init__(self):
        self.is_action = False
        self.namespace, self.Token = self.get_UserInfo()
        self.headers = {
            "Content-Type": "application/json",
            "User-Agent": "ExportMD",
            "X-Auth-Token": self.Token
        }
        self.repo = {}
        self.docs_id = set()

    # 用户信息
    def get_UserInfo(self):
        if len(sys.argv) == 3:
            self.is_action = True
            return sys.argv[1:]

        with open("info.txt") as f:
            namespace, token = f.read().split(' ')
            userinfo = [namespace, token]
            return userinfo

    # 发送请求
    async def req(self, session, api) -> dict:
        url = "https://www.yuque.com/api/v2" + api
        # log.info(url)
        async with session.get(url, headers=self.headers) as resp:
            result = await resp.json()
            return result

    # 获取所有知识库
    async def getRepo(self):
        api = f"/users/{self.namespace}/repos"
        async with aiohttp.ClientSession() as session:
            result = await self.req(session, api)
            for repo in result.get('data'):
                self.repo[repo['name']] = str(repo['id'])

    def getLocalRepo(self):
        return list(
            filter(lambda item: item.find('.') == -1, os.listdir(export_dir)))

    # 选择知识库
    def selectRepo(self):
        print('=== 知识库列表 ===')
        repos = list(self.repo.keys())
        for index, repo_name in enumerate(repos, start=1):
            print(f'{index} - {repo_name}')

        if self.is_action:
            return self.getLocalRepo()

        select = input('''
			请输入知识库名对应序号，多个请以空格分开
			默认为导入docs下的内容，全选请输入 0:
        ''').strip()
        if len(select) == 0:
            return self.getLocalRepo()
        if select == '0':
            return repos
        return [
            repos[int(index) - 1] for index in select.split(" ")
            if 0 < int(index) <= len(repos)
        ]

    # 获取一个知识库的文档列表目录结构
    async def get_dirs(self, repo_name, file):
        api = f"/repos/{self.repo[repo_name]}"
        async with aiohttp.ClientSession() as session:
            result = await self.req(session, api)
            toc = result['data']["toc_yml"]
            if toc is None:
                log.info(f'{repo_name} have nothing')
                return
            blocks = yaml.load(toc, Loader=yaml.FullLoader)
            for block in blocks:
                title, level = block.get('title'), block.get('level')
                if title is None:
                    continue

                item = {
                    "text": title,
                    "level": level + 3,
                    "link": f"/{repo_name}/{title}"
                }

                self.docs_id.add(block["doc_id"])
                title_level = (level + 3) * '#' if level < 3 else ''
                link = title
                if block["type"] == "DOC":
                    path = parse.quote(f"{export_dir}/{repo_name}/{title}.md")

                    sidebar[-1]['items'].append(item)

                    link = f'[{title}]({path})'
                file.write(f"{'  '*level}- {title_level} {link}  \n")

    # 获取一个知识库的文档列表
    async def get_docs(self, repo_id):
        api = f"/repos/{repo_id}/docs"
        async with aiohttp.ClientSession() as session:
            result = await self.req(session, api)
            docs = {}
            for doc in result.get('data'):
                if doc['id'] not in self.docs_id:
                    continue
                self.docs_id.discard(doc['id'])
                title = doc['title']
                slug = doc['slug']
                docs[slug] = title
            return docs

    async def get_doc_data(self, repo_id, slug):
        api = f"/repos/{repo_id}/docs/{slug}"
        async with aiohttp.ClientSession() as session:
            result = await self.req(session, api)
            return result['data']

    # 创建文件夹
    def mkDir(self, dir):
        if not os.path.exists(dir):
            os.makedirs(dir)

    # 构建前辅文
    def build_frontmatter(self, data: dict):
        frontmatter = ['---']

        # 获取文档属性
        for property in doc_property:
            frontmatter.append(f'{property}: {data[property]}')
        frontmatter.append('---')
        frontmatter.append(f"# {data['title']}  \n")
        return '\n'.join(frontmatter)

    # 获取文章并执行保存
    async def download_md(self, repo_id, slug, repo_name, title):
        """
        :param repo_id: 知识库id
        :param slug: 文章id
        :param repo_name: 知识库名称
        :param title: 文章名称
        :return: none
        """

        data = await self.get_doc_data(repo_id, slug)

        # 获取正文 Markdown 源代码
        body = data.get('body')
        new_body, image_list = await self.to_local_image_src(body)

        if image_list:
            # 图片保存位置: ./docs/<repo_name>/assets/<filename>
            image_dir = os.path.join(export_dir, repo_name, "assets")
            self.mkDir(image_dir)
            async with aiohttp.ClientSession() as session:
                await asyncio.gather(
                    *(self.download_image(session, image_info, image_dir)
                      for image_info in image_list))

        body_with_frontmatter = self.build_frontmatter(data) + new_body
        self.save_doc(repo_name, title, body_with_frontmatter)

        log.info(f"{title}导出成功！")

    # 将md里的图片地址替换成本地的图片地址
    async def to_local_image_src(self, body):
        pattern = r"!\[(?P<img_name>.*?)\]" \
                  r"\((?P<img_src>https:\/\/cdn\.nlark\.com\/yuque.*\/(?P<slug>\d+)\/(?P<filename>.*?\.[a-zA-z]+)).*\)"
        repl = r"![\g<img_name>](./assets/\g<filename>)"
        images = [_.groupdict() for _ in re.finditer(pattern, body)]
        new_body = re.sub(pattern, repl, body)
        return new_body, images

    # 下载图片
    async def download_image(self, session, image_info: dict, save_dir: str):
        img_src = image_info['img_src']
        filename = image_info["filename"]

        async with session.get(img_src) as resp:
            with open(os.path.join(save_dir, filename), 'wb') as f:
                f.write(await resp.read())

    # 保存文章
    def save_doc(self, repo_name, title, body):
        # 将不能作为文件名的字符进行编码
        def check_safe_path(path: str):
            for char in r'/\<>?:"|*':
                path = path.replace(char, parse.quote_plus(char))
            return path

        # 去除无效内容，优化显示
        no_anchor_body = re.sub('<a name="\w{3,}"></a>\\n', '#', body)
        no_empty_title_body = re.sub('#+\s{2,}', '', no_anchor_body)
        new_body = no_empty_title_body.replace('<br />', '  <br />  ')

        repo_name = check_safe_path(repo_name)
        title = check_safe_path(title)
        save_path = f"{export_dir}/{repo_name}/{title}.md"
        with open(save_path, "w", encoding="utf-8") as f:
            f.write(new_body)

    async def run(self):
        await self.getRepo()
        repo_name_list = self.selectRepo()
        repo_name_list.sort(key=lambda x: x)
        self.mkDir(export_dir)  # 创建用于存储知识库文章的文件夹

        with open('README.md', 'w', encoding='utf-8') as md:
            md.write('# Notes  \n')
            for repo_name in repo_name_list:
                first = {"text": repo_name, "collapsible": True, "items": []}
                sidebar.append(first)
                md.write(f'## {repo_name}  \n')
                await self.get_dirs(repo_name, md)
                md.write('\n  <br />  \n')

        # 遍历所选知识库
        for repo_name in repo_name_list:

            dir_path = export_dir + "/" + repo_name.replace("/", "%2F")
            dir_path.replace("//", "/")
            self.mkDir(dir_path)

            repo_id = self.repo[repo_name]
            docs = await self.get_docs(repo_id)

            await asyncio.gather(
                *(self.download_md(repo_id, slug, repo_name, title)
                  for slug, title in docs.items()))

        log.info("\n导出完成！")
        log.info(f"已导出到：{os.path.realpath(export_dir)}")


def update_contents():
    with open("README.md", 'r', encoding='utf-8') as rf:
        with open(f"{export_dir}/Contents.md", 'w', encoding='utf-8') as wf:
            wf.write(rf.read().replace(export_dir, ''))


if __name__ == '__main__':
    export = ExportMD()
    # asyncio.run(export.run())
    loop = asyncio.get_event_loop()
    loop.run_until_complete(export.run())
    write_to_json_file(r'sidebar.json', sidebar)
    update_contents()
