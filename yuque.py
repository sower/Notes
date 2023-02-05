import json
from datetime import date, datetime
from functools import wraps
import warnings

warnings.filterwarnings("ignore")

import requests
import yaml


def log(func):

    @wraps(func)
    def wrapper(self, *args, **kwargs):
        print('running', func.__name__)

        try:
            res = func(self, *args, **kwargs)
            request = res.request
            print(f'send -> {request.method} {res.url}')
            print(f'request headers: {request.headers}')
            if request.body:
                print(f'request body: {request.body}')
            print(f'recevie <- {res.status_code}')
            print(f'response headers: {res.headers}')
        except Exception as exception:
            print("request error: ", exception)

        if not res.ok:
            print('request failed: ', self.response.text)
        else:
            if self.response.headers['Content-Type'].find('json') > 0:
                print("response result:",
                      json.dumps(res.json(), indent=2, ensure_ascii=False))
            else:
                print('response result:', self.response.text)
        return res

    return wrapper


class ApiGateway(object):

    def __init__(self, host: str, path_prefix: str = ""):
        self.host = host
        self.path_prefix = path_prefix
        self.session = requests.Session()
        # self.session.proxies = {"https": None, "http": None}
        self.session.verify = False
        self.response = None
        self.update_headers()

    @property
    def context_path(self):
        return self.host + self.path_prefix

    def update_headers(self):
        self.session.headers = {}

    def _request(self, method, path, **kwargs):
        if not hasattr(self.session, method):
            raise ValueError(f"don't have {method}")
        request_method = getattr(self.session, method)
        request_method(self.context_path + path, **kwargs)

    def _get(self, path, **kwargs):
        self.response = self.session.get(self.context_path + path, **kwargs)

    def _post(self, path, data=None, json=None, **kwargs):
        self.response = self.session.post(self.context_path + path, data, json,
                                          **kwargs)

    def _put(self, path, data, **kwargs):
        self.response = self.session.put(self.context_path + path, data,
                                         **kwargs)

    def _delete(self, path, **kwargs):
        self.response = self.session.delete(self.context_path + path, **kwargs)

    def __del__(self):
        self.session.close()


class Yuque(ApiGateway):

    def __init__(self):
        super().__init__('https://www.yuque.com', '/api/v2')
        self.namespace, self.Token = self.get_UserInfo()
        self.session.headers = {
            "Content-Type": "application/json",
            "User-Agent": "ExportMD",
            "X-Auth-Token": self.Token
        }
        self.repo = {}
        self.export_dir = './docs'

    # 用户信息
    def get_UserInfo(self):
        with open("info.txt") as f:
            namespace, token = f.read().split(' ')
            userinfo = [namespace, token]
            return userinfo

    # 获取所有知识库
    @log
    def get_repo(self):
        self._get(f"/users/{self.namespace}/repos")
        return self.response

    # 获取一个知识库的文档列表目录
    @log
    def get_dirs(self, repo_id: str):
        self._get(f"/repos/{repo_id}")
        return self.response

    # 获取一个知识库的文档列表
    @log
    def get_docs(self, repo_id: str):
        self._get(f"/repos/{repo_id}/docs")
        return self.response

    # 获取正文 Markdown 源代码
    @log
    def get_doc_md(self, repo_id: str, slug: str):
        self._get(f"/repos/{repo_id}/docs/{slug}?raw=2")
        return self.response


class TimeEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.strftime('%Y-%m-%d %H:%M:%S')
        elif isinstance(obj, date):
            return obj.strftime('%Y-%m-%d')
        else:
            return json.JSONEncoder.default(self, obj)


def trans(content):
    data = yaml.load(content, Loader=yaml.FullLoader)
    print("toc:",
          json.dumps(data, indent=1, ensure_ascii=False, cls=TimeEncoder))


def write_to_json_file(filename, an_object):
    with open(filename, 'w', encoding='utf-8') as file:
        json.dump(an_object, file, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    yq = Yuque()
    yq.get_repo()

    # res = yq.get_dirs('24638227')
    # toc = res.json()['data']["toc_yml"]
    # trans(toc)
