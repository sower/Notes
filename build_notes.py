# coding: utf-8

import re
import os
import aiohttp
import asyncio
from urllib import parse


class ExportMD:
    def __init__(self):
        self.namespace, self.Token = self.get_UserInfo()
        self.headers = {
            "Content-Type": "application/json",
            "User-Agent": "ExportMD",
            "X-Auth-Token": self.Token
        }
        self.repo = {}
        self.export_dir = './Notes'

    # 用户信息
    def get_UserInfo(self):
        f_name = ".userinfo"
        if os.path.isfile(f_name):
            with open(f_name, encoding="utf-8") as f:
                userinfo = f.read().split("&")
        else:
            with open("info.txt") as f:
                namespace, token = f.read().split(' ')
                userinfo = [namespace, token]
                return userinfo

    # 发送请求
    async def req(self, session, api):
        url = "https://www.yuque.com/api/v2" + api
        # print(url)
        async with session.get(url, headers=self.headers) as resp:
            result = await resp.json()
            return result

    # 获取所有知识库
    async def getRepo(self):
        api = f"/users/{self.namespace}/repos"
        async with aiohttp.ClientSession() as session:
            result = await self.req(session, api)
            for repo in result.get('data'):
                repo_id = str(repo['id'])
                repo_name = repo['name']
                self.repo[repo_name] = repo_id

    # 选择知识库
    def selectRepo(self):
        print('=== 知识库列表 ===')
        repos = list(self.repo.keys())
        for index, repo_name in enumerate(repos, start=1):
            print(index, repo_name)
        select = input('''
			请输入知识库名对应序号，多个请以空格分开
			默认为导入Notes下的内容，全选请输入 0: 
        ''').strip()
        if len(select) == 0:
            return os.listdir(self.export_dir)
        if select == '0':
            return repos
        return [repos[int(index)-1] for index in select.split(" ") if 0 < int(index) <= len(repos)]

    # 获取一个知识库的文档列表目录
    async def get_dirs(self, repo_name, file):
        api = f"/repos/{self.repo[repo_name]}"
        async with aiohttp.ClientSession() as session:
            result = await self.req(session, api)
            toc = result['data']["toc_yml"]
            if toc is None:
                print(repo_name, 'have nothing')
                return
            blocks = toc.split('\n- ')[1:]
            for block in blocks:
                title, level = '', 0
                for pair in block.split('\n  ')[1:10]:
                    k, v = pair.split(': ', 1)
                    if(k == 'title'):
                        title = v
                    if(k == 'level'):
                        level += int(v)
                title_level = (level+3)*'#' if level < 3 else ''
                path = parse.quote(f"{self.export_dir}/{repo_name}/{title}.md")
                file.write(
                    f"{'  '*level}- {title_level} [{title}]({path})  \n")

    # 获取一个知识库的文档列表
    async def get_docs(self, repo_id):
        api = f"/repos/{repo_id}/docs"
        async with aiohttp.ClientSession() as session:
            result = await self.req(session, api)
            docs = {}
            for doc in result.get('data'):
                title = doc['title']
                slug = doc['slug']
                docs[slug] = title
            return docs

    # 获取正文 Markdown 源代码
    async def get_body(self, repo_id, slug):
        api = f"/repos/{repo_id}/docs/{slug}"
        async with aiohttp.ClientSession() as session:
            result = await self.req(session, api)
            body = result['data']['body']

            return body

    # 创建文件夹
    def mkDir(self, dir):
        isExists = os.path.exists(dir)
        if not isExists:
            os.makedirs(dir)

    # 获取文章并执行保存
    async def download_md(self, repo_id, slug, repo_name, title):
        """
        :param repo_id: 知识库id
        :param slug: 文章id
        :param repo_name: 知识库名称
        :param title: 文章名称
        :return: none
        """
        body = await self.get_body(repo_id, slug)
        new_body, image_list = await self.to_local_image_src(body)

        if image_list:
            # 图片保存位置: ./Notes/<repo_name>/assets/<filename>
            image_dir = os.path.join(self.export_dir, repo_name, "assets")
            self.mkDir(image_dir)
            async with aiohttp.ClientSession() as session:
                await asyncio.gather(
                    *(self.download_image(session, image_info, image_dir) for image_info in image_list)
                )

        self.save_doc(repo_name, title, new_body)

        print(f"{title}导出成功！")

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
        no_anchor_body = re.sub('<a name="\w{5}"></a>', '', body)
        no_empty_title_body = re.sub('#+\s{2,}', '', no_anchor_body)
        new_body = no_empty_title_body.replace('<br />', '  <br />  ')

        repo_name = check_safe_path(repo_name)
        title = check_safe_path(title)
        save_path = f"{self.export_dir}/{repo_name}/{title}.md"
        with open(save_path, "w", encoding="utf-8") as f:
            f.write(new_body)

    async def run(self):
        await self.getRepo()
        repo_name_list = self.selectRepo()

        self.mkDir(self.export_dir)  # 创建用于存储知识库文章的文件夹

        with open('README.md', 'w', encoding='utf-8') as md:
            md.write('# Notes  \n')
            for repo_name in repo_name_list:
                md.write(f'## {repo_name}  \n')
                await self.get_dirs(repo_name, md)
                md.write('\n  <br />  \n')

        # 遍历所选知识库
        for repo_name in repo_name_list:

            dir_path = self.export_dir + "/" + repo_name.replace("/", "%2F")
            dir_path.replace("//", "/")
            self.mkDir(dir_path)

            repo_id = self.repo[repo_name]
            docs = await self.get_docs(repo_id)

            await asyncio.gather(
                *(self.download_md(repo_id, slug, repo_name, title) for slug, title in docs.items())
            )

        print("\n导出完成！")
        print(f"已导出到：{os.path.realpath(self.export_dir)}")


if __name__ == '__main__':
    export = ExportMD()
    loop = asyncio.get_event_loop()
    loop.run_until_complete(export.run())
