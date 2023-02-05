---
title: Py Web
created_at: 2022-02-01T05:44:43.000Z
updated_at: 2023-01-15T03:14:36.000Z
word_count: 10143
---  

## PyMySQL
class pymysql.connections.Connection

- host – Host where the database server is located
- user – Username to log in as
- password – Password to use.
- database – Database to use, None to not use a particular one.
- port – MySQL port to use, default is usually OK. (default: 3306)
- bind_address – When the client has multiple network interfaces, specify the interface from which to connect to the host. Argument can be a hostname or an IP address.
- unix_socket – Optionally, you can use a unix socket rather than TCP/IP.
- read_timeout – The timeout for reading from the connection in seconds (default: None - no timeout)
- write_timeout – The timeout for writing to the connection in seconds (default: None - no timeout)
- charset – Charset you want to use.
- sql_mode – Default SQL_MODE to use.
- read_default_file – Specifies my.cnf file to read these parameters from under the [client] section.
- conv – Conversion dictionary to use instead of the default one. This is used to provide custom marshalling and unmarshalling of types. See converters.
- use_unicode – Whether or not to default to unicode strings. This option defaults to true for Py3k.
- client_flag – Custom flags to send to MySQL. Find potential values in constants.CLIENT.
- cursorclass – Custom cursor class to use.
- init_command – Initial SQL statement to run when connection is established.
- connect_timeout – Timeout before throwing an exception when connecting. (default: 10, min: 1, max: 31536000)
- ssl – A dict of arguments similar to mysql_ssl_set()’s parameters.
- read_default_group – Group to read from in the configuration file.
- compress – Not supported
- named_pipe – Not supported
- autocommit – Autocommit mode. None means use server default. (default: False)
- local_infile – Boolean to enable the use of LOAD DATA LOCAL command. (default: False)
- max_allowed_packet – Max size of packet sent to server in bytes. (default: 16MB) Only used to limit size of “LOAD LOCAL INFILE” data packet smaller than default (16KB).
- defer_connect – Don’t explicitly connect on construction - wait for connect call. (default: False)
- auth_plugin_map – A dict of plugin names to a class that processes that plugin.
- server_public_key – SHA256 authentication plugin public key value. (default: None)
- db – Alias for database. (for compatibility to MySQLdb)
- passwd – Alias for password. (for compatibility to MySQLdb)
- binary_prefix – Add _binary prefix on bytes and bytearray. (default: False)
- begin()	Begin transaction.
- close()	Send the quit message and close the socket.
- commit()	Commit changes to stable storage.
- cursor(cursor=None)	Create a new cursor to execute queries with.
- rollback()	Roll back the current transaction.
- select_db(db)

**class pymysql.cursors.Cursor(connection)**

- execute(op)     执行一个数据库的查询命令
- executemany(query, args)	Run several data against one query
- fetchone()      取得结果集的下一行
- fetchmany(size) 获取结果集的下几行
- fetchall()      获取结果集中的所有行
- rowcount()      返回数据条数或影响行数
- close()         关闭游标对象
```python
# 连接数据库
db = pymysql.connect(
    host='localhost',
    port=3310,
    user='woider',
    passwd='3243',
    db='python',
    charset='utf8'
)

# 获取游标
cursor = db.cursor()
# 查询数据
sql = "SELECT name,saving FROM trade WHERE account = '123' "
cursor.execute(sql)
for row in cursor.fetchall():
    print("Name:%s\tSaving:%.2f" % row)
print('共查找出', cursor.rowcount, '条数据')

# 插入数据
sql = "INSERT INTO trade (name, account, saving) VALUES ( '%s', '%s', %.2f )"
data = ('tom', '13512345678', 10000)
cursor.execute(sql % data)
db.commit()
print('成功插入', cursor.rowcount, '条数据')

# 事务处理
sql_1 = "UPDATE trade SET saving = saving + 1000 WHERE account = '18012345678' "
sql_2 = "UPDATE trade SET expend = expend + 1000 WHERE account = '18012345678' "
sql_3 = "UPDATE trade SET income = income + 2000 WHERE account = '18012345678' "
try:
    cursor.execute(sql_1)  # 储蓄增加1000
    cursor.execute(sql_2)  # 支出增加1000
    cursor.execute(sql_3)  # 收入增加2000
except Exception as e:
    db.rollback()  # 事务回滚
    print('事务处理失败', e)
else:
    db.commit()  # 事务提交
    print('事务处理成功', cursor.rowcount)
    
# 关闭连接
cursor.close()
db.close()
```
### mysql.connector
```python
import mysql.connector

# 建立连接
mydb = mysql.connector.connect(user='root', password='password'[, database='test'])
cursor = mydb.cursor()
# 创建user表:
cursor.execute('create table user (id varchar(20) primary key, name varchar(20))')

# 插入多行记录，注意MySQL的占位符是%s:
sql = "INSERT INTO customers (name, address) VALUES (%s, %s)"
val = [
    ('Peter', 'Lowstreet 4'),
    ('Amy', 'Apple st 652'),
]
mycursor.executemany(sql, val)
print(cursor.rowcount)

# 提交事务:
mydb.commit()

# 运行查询:
cursor.execute('select * from user where id = %s', ('1',))
values = cursor.fetchall()
print(values)
# 关闭Cursor和Connection
cursor.close()
mydb.close()
```

## [SQLAlchemy](https://www.sqlalchemy.org/)
[https://www.osgeo.cn/sqlalchemy/](https://www.osgeo.cn/sqlalchemy/)
```python
from sqlalchemy import Column, String, create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()

# 定义User对象:
class User(Base):
    # 表的名字:
    __tablename__ = 'user'
    # 表的结构:
    id = Column(String(20), primary_key=True)
    name = Column(String(20))
    
# 初始化数据库连接:
engine = create_engine('mysql+mysqlconnector://root:password@localhost:3306/test')
# 创建DBSession类型:
DBSession = sessionmaker(bind=engine)
# 创建session对象:
session = DBSession()
# 创建新User对象:
new_user = User(id='5', name='Bob')
# 添加到session:
session.add(new_user)
# 提交即保存到数据库:
session.commit()
# 关闭session:
session.close()
```

## [redis](https://github.com/andymccurdy/redis-py)
```python
import redis
redis_conn = redis.Redis(host='127.0.0.1', port= 6379, password= 'your pw', db= 0)
#连接池方式
redis_pool = redis.ConnectionPool(host='127.0.0.1', port= 6379, password= 'your pw', db= 0)
redis_conn = redis.Redis(connection_pool= redis_pool)
```

## [Flask](https://flask.palletsprojects.com/en/2.0.x/)
```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/user/<username>', methods=['GET', 'POST']))
def show_user_profile(username):
    if request.method == 'POST':
        # show the user profile for that user
        return 'User %s' % escape(username)
    else:
        ...
        
@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id

@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return 'Subpath %s' % escape(subpath)
    
@app.errorhandler(404)
def not_found(error):
    resp = make_response(render_template('error.html'), 404)
    resp.headers['X-Something'] = 'A value'
    return resp

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
```

- [Werkzeug](http://werkzeug.pocoo.org/): WSGI工具，是介于应用和服务器之间标准的接口工具。
- [Jinja](http://jinja.pocoo.org/): 模板渲染库，web 前端页面中使用的模板语言。
- [MarkupSafe](https://pypi.org/project/MarkupSafe/): 与 Jinja 配合使用，当表单页面跳转时会进行验证从而避免遭遇不信任的输入带来的攻击。
- [ItsDangerous](https://pythonhosted.org/itsdangerous/): 安全地注入数据以确保数据的完整性，通常用于保护 Flask 的 session cookie。
- [Click](https://click.palletsprojects.com/en/7.x/): 一个解析命令行的应用，它支持在 Flask 中自定义管理命令。

`<converter:variable_name>`主要类型

| 类型 | 含义 |
| --- | --- |
| string | 默认的数据类型，接受没有任何斜杠“/”的字符串 |
| int | 接受整型 |
| float | 接受浮点类型 |
| path | 和 string 类似，但是接受斜杠“/” |
| uuid | 接受 uuid 字符串 |

在你的包中或模块旁边创建一个名为 static 的文件夹  <br />  给静态文件生成 URL ，使用特殊的 static 端点名：  <br />  `url_for('static', filename='style.css')`  <br />  这个文件是应该存储在文件系统上的 static/style.css 。

**渲染模板**  <br />  使用方法 render_template()
```python
@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):   # 默认 name 为 None
    return render_template('hello.html', name=name)   # 将 name 参数传递到模板变量中
```
Flask 将会在 templates 文件夹中寻找模板
```python
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="{{ url_for('static', filename='hello.css') }}"
    />
  </head>
  <body>
  
<title>Hello From Flask</title>
{% if name %}
<!-- 如果 name 不为空则将 name 渲染出来 -->
<h1>Hello {{ name }}!</h1>
{% else %}
<!-- 如果 name 为空则打印 Hello World! -->
<h1>Hello World!</h1>
{% endif %}
</body>
</html>
```

文件上传  <br />  在 HTML 表单设置属性 enctype="multipart/form-data"
```python
from flask import request
from werkzeug import secure_filename  # 获取上传文件的文件名
@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['the_file']
        f.save('/var/www/uploads/' + secure_filename(f.filename))
    ...
```

cookies
```python
from flask import request, make_response

@app.route('/')
def index():
    # 读取 cookies 
    username = request.cookies.get('username')
    # 注意这里引用cookies字典的键值对是使用cookies.get(key)
    # 而不是cookies[key]，这是防止该字典不存在时报错"keyerror"
    # 存储 cookies 
    resp = make_response(render_template(...))
    resp.set_cookie('username', 'the username')
    return resp
```

session
```python
from flask import Flask, session, redirect, url_for, request
from markupsafe import escape

app = Flask(__name__)
# 设置密钥，保证会话安全
app.secret_key = '_5#y2L"F4Q8z\n\xec]/'
@app.route('/')
def index():
    if 'username' in session:
        return 'Logged in as %s' % escape(session['username'])
    return 'You are not logged in'
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    return '''
        <form method="post">
            <p><input type=text name=username>
            <p><input type=submit value=Login>
        </form>
    '''
@app.route('/logout')
def logout():
    # 如果用户名存在，则从会话中移除该用户名
    session.pop('username', None)
    return redirect(url_for('index'))
```

escape()可以在你不使用模板引擎的时候做转义  <br />  redirect() 函数重定向用户到其它地方  <br />  abort() 函数提前中断一个请求并带有一个错误代码。

api示例
```python
import flask
from flask import request
import json

api = flask.Flask(__name__)

# CORS
@api.after_request
def after(resp):
    # resp = make_response(resp)
    resp.headers['Access-Control-Allow-Methods'] = '*'
    resp.headers['Access-Control-Allow-Headers'] = '*'
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

# 'index'是接口路径
@api.route('/index', methods=['get'])
def index():
    res = {'msg': '成功访问首页', 'msg_code': 200}
    # json.dumps 序列化时对中文默认使用的ascii编码.想输出中文需要指定ensure_ascii=False
    return json.dumps(res, ensure_ascii=False)

# post入参访问方式1：url格式参数?id=1&name='2'
@api.route('/translate1', methods=['post'])
def translate1():
    param = flask.request.args.get('key')
    return json.dumps({'key':'value'}, ensure_ascii=False)

# post入参访问方式2：from-data（k-v）格式参数
@api.route('/translate2', methods=['post'])
def translate2():
    param = flask.request.values.get('key')
    return json.dumps({'key':'value'}, ensure_ascii=False)

# post入参访问方式3：josn格式参数
@api.route('/translate3', methods=["POST"])
def translate3():
    param = flask.request.json.get('key')
    return json.dumps({'key':'value'}, ensure_ascii=False)
if __name__ == '__main__':
    api.run(port=8888, debug=True, host='127.0.0.1')
```
[**Flask-Cors**](https://flask-cors.readthedocs.io/en/latest/#)
```python
from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
```
## [jinja](https://palletsprojects.com/)
Delimiters（分隔符）

- `{% ... %}` 语句
- `{ { ... } }` 打印模板输出的表达式
- `{# ... #} `注释
- `... ##` 行语句

Variables（变量）
```python
{{ mydict['key'] }}
{{ mylist[3] }}
{{ mylist[myintvar] }}
{{ myobj.somemethod() }}
```

**Filter（过滤器）**  <br />  用来修改变量，使用一个竖线和变量相隔。

| [abs()](https://jinja.palletsprojects.com/en/master/templates/#abs) | [float()](https://jinja.palletsprojects.com/en/master/templates/#float) | [lower()](https://jinja.palletsprojects.com/en/master/templates/#lower) | [round()](https://jinja.palletsprojects.com/en/master/templates/#round) | [tojson()](https://jinja.palletsprojects.com/en/master/templates/#tojson) |
| --- | --- | --- | --- | --- |
| [attr()](https://jinja.palletsprojects.com/en/master/templates/#attr) | [forceescape()](https://jinja.palletsprojects.com/en/master/templates/#forceescape) | [map()](https://jinja.palletsprojects.com/en/master/templates/#map) | [safe()](https://jinja.palletsprojects.com/en/master/templates/#safe) | [trim()](https://jinja.palletsprojects.com/en/master/templates/#trim) |
| [batch()](https://jinja.palletsprojects.com/en/master/templates/#batch) | [format()](https://jinja.palletsprojects.com/en/master/templates/#format) | [max()](https://jinja.palletsprojects.com/en/master/templates/#max) | [select()](https://jinja.palletsprojects.com/en/master/templates/#select) | [truncate()](https://jinja.palletsprojects.com/en/master/templates/#truncate) |
| [capitalize()](https://jinja.palletsprojects.com/en/master/templates/#capitalize) | [groupby()](https://jinja.palletsprojects.com/en/master/templates/#groupby) | [min()](https://jinja.palletsprojects.com/en/master/templates/#min) | [selectattr()](https://jinja.palletsprojects.com/en/master/templates/#selectattr) | [unique()](https://jinja.palletsprojects.com/en/master/templates/#unique) |
| [center()](https://jinja.palletsprojects.com/en/master/templates/#center) | [indent()](https://jinja.palletsprojects.com/en/master/templates/#indent) | [pprint()](https://jinja.palletsprojects.com/en/master/templates/#pprint) | [slice()](https://jinja.palletsprojects.com/en/master/templates/#slice) | [upper()](https://jinja.palletsprojects.com/en/master/templates/#upper) |
| [default()](https://jinja.palletsprojects.com/en/master/templates/#default) | [int()](https://jinja.palletsprojects.com/en/master/templates/#int) | [random()](https://jinja.palletsprojects.com/en/master/templates/#random) | [sort()](https://jinja.palletsprojects.com/en/master/templates/#sort) | [urlencode()](https://jinja.palletsprojects.com/en/master/templates/#urlencode) |
| [dictsort()](https://jinja.palletsprojects.com/en/master/templates/#dictsort) | [join()](https://jinja.palletsprojects.com/en/master/templates/#join) | [reject()](https://jinja.palletsprojects.com/en/master/templates/#reject) | [string()](https://jinja.palletsprojects.com/en/master/templates/#string) | [urlize()](https://jinja.palletsprojects.com/en/master/templates/#urlize) |
| [escape()](https://jinja.palletsprojects.com/en/master/templates/#escape) | [last()](https://jinja.palletsprojects.com/en/master/templates/#last) | [rejectattr()](https://jinja.palletsprojects.com/en/master/templates/#rejectattr) | [striptags()](https://jinja.palletsprojects.com/en/master/templates/#striptags) | [wordcount()](https://jinja.palletsprojects.com/en/master/templates/#wordcount) |
| [filesizeformat()](https://jinja.palletsprojects.com/en/master/templates/#filesizeformat) | [length()](https://jinja.palletsprojects.com/en/master/templates/#length) | [replace()](https://jinja.palletsprojects.com/en/master/templates/#replace) | [sum()](https://jinja.palletsprojects.com/en/master/templates/#sum) | [wordwrap()](https://jinja.palletsprojects.com/en/master/templates/#wordwrap) |
| [first()](https://jinja.palletsprojects.com/en/master/templates/#first) | [list()](https://jinja.palletsprojects.com/en/master/templates/#list) | [reverse()](https://jinja.palletsprojects.com/en/master/templates/#reverse) | [title()](https://jinja.palletsprojects.com/en/master/templates/#title) | [xmlattr()](https://jinja.palletsprojects.com/en/master/templates/#xmlattr) |


Tests（测试，判断）

| [boolean()](https://jinja.palletsprojects.com/en/master/templates/#boolean) | [even()](https://jinja.palletsprojects.com/en/master/templates/#even) | [integer()](https://jinja.palletsprojects.com/en/master/templates/#integer) | [ne()](https://jinja.palletsprojects.com/en/master/templates/#ne) | [string()](https://jinja.palletsprojects.com/en/master/templates/#string) |
| --- | --- | --- | --- | --- |
| [callable()](https://jinja.palletsprojects.com/en/master/templates/#callable) | [false()](https://jinja.palletsprojects.com/en/master/templates/#false) | [iterable()](https://jinja.palletsprojects.com/en/master/templates/#iterable) | [none()](https://jinja.palletsprojects.com/en/master/templates/#none) | [true()](https://jinja.palletsprojects.com/en/master/templates/#true) |
| [defined()](https://jinja.palletsprojects.com/en/master/templates/#defined) | [float()](https://jinja.palletsprojects.com/en/master/templates/#float) | [le()](https://jinja.palletsprojects.com/en/master/templates/#le) | [number()](https://jinja.palletsprojects.com/en/master/templates/#number) | [undefined()](https://jinja.palletsprojects.com/en/master/templates/#undefined) |
| [divisibleby()](https://jinja.palletsprojects.com/en/master/templates/#divisibleby) | [ge()](https://jinja.palletsprojects.com/en/master/templates/#ge) | [lower()](https://jinja.palletsprojects.com/en/master/templates/#lower) | [odd()](https://jinja.palletsprojects.com/en/master/templates/#odd) | [upper()](https://jinja.palletsprojects.com/en/master/templates/#upper) |
| [eq()](https://jinja.palletsprojects.com/en/master/templates/#eq) | [gt()](https://jinja.palletsprojects.com/en/master/templates/#gt) | [lt()](https://jinja.palletsprojects.com/en/master/templates/#lt) | [sameas()](https://jinja.palletsprojects.com/en/master/templates/#sameas) |  |
| [escaped()](https://jinja.palletsprojects.com/en/master/templates/#escaped) | [in()](https://jinja.palletsprojects.com/en/master/templates/#in) | [mapping()](https://jinja.palletsprojects.com/en/master/templates/#mapping) | [sequence()](https://jinja.palletsprojects.com/en/master/templates/#sequence) |  |


List of Control Structures
```python
{% if kenny.sick %}
    Kenny is sick.
{% elif kenny.dead %}
    You killed Kenny!  You bastard!!!
{% else %}
    Kenny looks okay --- so far
{% endif %}
```
```python
{% for user in users %}
    <li>{{ user.username|e }}</li>
{% else %}
    <li><em>no users found</em></li>
{% endfor %}
```
Whitespace Control（空格控制）  <br />  默认

- 如果末尾有换行符，则去除；
- 其他空格原样保留。

去掉Jinja2语句占据的空行
```python
app.jinja_env.trim_blocks = True
app.jinja_env.lstrip_blocks = True
```
Escaping（转义）
```python
{% raw %}
    <ul>
    {% for item in seq %}
        <li>{{ item }}</li>
    {% endfor %}
    </ul>
{% endraw %}
```
模板继承
```python
{% extends "base.html" %}
{% block content %}
    子模板的内容
{% endblock %}
```
Macros
```python
{% macro input(name, value='', type='text', size=20) -%}
    <input type="{{ type }}" name="{{ name }}" value="{{
        value|e }}" size="{{ size }}">
{%- endmacro %}
```
Call
```python
{% macro render_dialog(title, class='dialog') -%}
    <div class="{{ class }}">
        <h2>{{ title }}</h2>
        <div class="contents">
            {{ caller() }}
        </div>
    </div>
{%- endmacro %}
{% call render_dialog('Hello World') %}
    This is a simple dialog rendered by using a macro and
    a call block.
{% endcall %}
```
Filters
```python
{% filter upper %}
    This text becomes uppercase
{% endfilter %}
```
Assignments
```python
{% set navigation = [('index.html', 'Index'), ('about.html', 'About')] %}
{% set key, value = call_something() %}
```
```python
{% set navigation %}
    <li><a href="/">Index</a>
    <li><a href="/downloads">Downloads</a>
{% endset %}
```
Include
```python
{% include 'header.html' %}
{% include ['page_detailed.html', 'page.html'] %}
    Body
{% include 'footer.html' %}
```
Import
```python
{% import 'forms.html' as forms %}
<dl>
    <dt>Username</dt>
    <dd>{{ forms.input('username') }}</dd>
    <dt>Password</dt>
    <dd>{{ forms.input('password', type='password') }}</dd>
</dl>
<p>{{ forms.textarea('comment') }}</p>
```
Global Functions  <br />  range([start, ]stop[, step])  <br />  lipsum(n=5, html=True, min=20, max=100)  <br />  为模板生成一些lorem ipsum

## [Django](https://docs.djangoproject.com/zh-hans/3.0/)
python -m django --version
```python
django-admin <command> [options]
manage.py <command> [options]
py -m django <command> [options]
django-admin help <command>
    check
    compilemessages
    createcachetable
    dbshell
    diffsettings
    dumpdata
    flush
    inspectdb
    loaddata
    makemessages
    makemigrations
    migrate
    runserver
    sendtestemail
    shell
    showmigrations
    sqlflush
    sqlmigrate
    sqlsequencereset
    squashmigrations
    startapp
    startproject
    test
    testserver
```
创建项目	django-admin startproject 
```python
myProject
├── manage.py	项目的入口文件，用它来执行一些命令进行创建应用、启动项目、控制数据表迁移等。
└── myProject	主目录下的同名子目录，为项目的核心目录，包含配置文件和管理应用的文件
    ├── __init__.py	空文件，在需要的时候会引入目录下的对象。
    ├── settings.py	配置文件，里面包含对数据库的设置项、CSRF Token 的设置项、模板的设置项等全部设置。
    ├── urls.py	路由控制文件，处理客户端请求，分发到对应的视图函数去处理
    └── wsgi.py	处理请求和响应
```
配置 settings.py
```javascript
## 其它配置代码...
# 改为中文
LANGUAGE_CODE = 'zh-hans'
# 把国际时区改为中国时区（东八区）
TIME_ZONE = 'Asia/Shanghai'
## 其它配置代码...
```
创建应用	python manage.py startapp   <br />  并新建一个 urls.py
```python
myProject
    ├── manage.py
    ├── myApp
    │   ├── admin.py	控制后台管理的文件
    │   ├── apps.py	管理应用本身的文件，包括应用的名字如何命名，默认就是 myApp 
    │   ├── __init__.py
    │   ├── migrations	记录数据库变更信息的目录，Django 中自带的数据库版本控制功能就体现在这个目录
    │   │    └── __init__.py
    │   ├── models.py	创建映射类的文件
    │   ├── tests.py	编写测试代码的文件
    │   ├── views.py	创建视图函数的文件，用于处理客户端发来的请求
    │   └── urls.py	为了创建 URLconf，自建文件
```
在 myProject/settings.py 修改 INSTALLED_APPS 项，添加创建的应用名称 myApp，  <br />  **View**  <br />  编写视图
```python
# myApp/views.py
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world!")
```
映射路径
```python
# myApp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```
在根 URLconf 文件中指定我们创建的myApp.urls
```python
# myProject/urls.py
from django.contrib import admin
from django.urls import path,include
from myApp import views  # 引入视图函数

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myApp/', include('myApp.urls')), # 新增路由映射
]
```
**Model 模型**

- 编辑 models.py 文件，改变模型。
- python manage.py makemigrations	对模型的更改创建新的迁移表
- python manage.py migrate	应用迁移到数据库中



**数据迁移（Migrations）**  <br />  修改Model后，需要进行数据迁移。迁移是Django对模型所做的更改传递到数据库中的方式。  <br />  每当对数据库进行了更改（添加、修改、删除等）操作，都需要进行数据迁移。

模型是真实数据的简明描述，对应数据库的一张表，包含了存储的数据所必要的字段和行为。
```python
# myApp/models.py
from django.db import models
class Book(models.Model):
    name = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    pub_date = models.DateTimeField('date published')
```
模型是 django.db.models.Model 类的子类。每个字段都是 Field 类的实例。

为这个应用创建数据库 schema（生成 CREATE TABLE 语句）。  <br />  创建可以与 Book 对象进行交互的 Python 数据库 API。
```python
# myProject/settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myApp',# 等同'myApp.apps.MyappConfig',
]
```
```python
python manage.py makemigrations myApp
检测模型文件的修改，并且把修改的部分储存为一次迁移
python manage.py sqlmigrate myApp 0001
展示迁移命令会执行自动执行的SQL 语句
在数据库里创建新定义的模型的数据表
python manage.py migrate
```


**Template 模板**  <br />  在 myProject/myApp 里创建一个 templates 目录。Django 会在这个目录里查找模板文件。  <br />  myProject/settings.py 文件中的 TEMPLATES 配置项描述了 Django 如何载入和渲染模板。默认设置了 DjangoTemplates 后端，并设置 APP_DIRS = True。这一选项将会让 DjangoTemplates 在每个 INSTALLED_APPS 文件夹中寻找 templates 子目录。  <br />  新建模板文件 myApp/templates/myApp/detail.html，
```python
<!--myApp/templates/myApp/detail.html-->
<h1>Book List</h1>
<table>
  <tr>
    <td>书名</td>
    <td>作者</td>
    <td>出版社</td>
    <td>出版时间</td>
  </tr>
  {% for book in book_list.all %}
  <tr>
    <td>{{ book.name }}</td>
    <td>{{ book.author }}</td>
    <td>{{ book.pub_house }}</td>
    <td>{{ book.pub_date }}</td>
  </tr>
  {% endfor %}
</table>
```
对于 `{ { book.name } }` ，首先 Django 尝试对 book 对象使用字典查找（也就是使用 obj.get(str) 操作），如果失败了就尝试属性查找（也就是 obj.str 操作），最后尝试列表查找（也就是 obj[int] 操作）。  <br />  book_list.all 被解释为 Python 代码 book_list.objects.all()，将会返回一个可迭代的 Book 对象  <br />  创建视图来返回图书列表：
```python
# myApp/views.py
from django.shortcuts import render
from django.http import HttpResponse
from myApp.models import Book
def detail(request, num):
    book_list = Book.objects.order_by('-pub_date')[:num]
    context = {'book_list': book_list}
    return render(request, 'myApp/detail.html', context)
 
# 类视图
class DetailView(generic.DetailView):
    model = Book
    template_name = 'myApp/detail.html'
```
通用视图： ListView 和 DetailView  <br />  视图函数 detail 中，首先将数据库的 Book 列表按照 pub_date 时间来排序，存储到变量 book_list 中。  <br />  render() 函数返回给定模板呈现的给定文本的一个 HttpResponse 对象。  <br />  context 信息将会返回到模板 myApp/detail.html  <br />  添加新视图
```python
# myApp/urls.py
from django.urls import path
from . import views
app_name = 'myApp'  # URL names的命名空间
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:num>/', views.detail, name='detail'),
]
```
```javascript
// 模板中硬编码的URLs
<li><a href="/myApp/{{ book.id }}/"></a></li>
// 推荐
<li><a href="{% url 'myApp:detail' book.id %}"></a></li>
```
启动项目	python manage.py runserver [127.0.0.1:8000]

**后台**  <br />  python manage.py createsuperuser	创建管理员账号  <br />  Username: rain  <br />  Email address: [1493636205@qq.com](mailto:1493636205@qq.com)  <br />  Password:15675347347  <br />  在admin中注册应用
```javascript
# myApp/admin.py
from django.contrib import admin
from .models import Book
admin.site.register(Book)
```

快捷函数  <br />  django.shortcuts

- render(request, template_name, context=None, content_type=None, status=None, using=None)：将给定的模板与给定的上下文字典组合在一起，并以渲染的文本返回一个 HttpResponse 对象。
- redirect(to, *args, permanent=False, **kwargs)：将一个 HttpResponseRedirect 返回到传递的参数的适当URL。
- get_object_or_404(klass, *args, **kwargs)：在给定的模型管理器( model manager) 上调用 get() ，但它会引发 Http404 而不是模型的 DoesNotExist 异常。
- get_list_or_404(klass, *args, **kwargs)：返回给定模型管理器上 filter() 转换为列表的结果，如果结果列表为空，则引发 Http404。
### 模型（Model）

- 每个模型在Django中的存在形式为一个django.db.models.Model的子类
- 模型的每个字段（属性）代表数据表的某一列

字段名中不能有两个以上下划线在一起，因为两个下划线是Django的查询语法  <br />  字段类型

| 类型 | 说明 |
| --- | --- |
| AutoField | 一个自动增加的整数类型字段，从1开始计数。 id = models.AutoField(primary_key=True) 一个模型中只允许有一个自增字段，并且该字段必须为主键！ |
| BigAutoField | 64位整数类型自增字段 |
| BigIntegerField | 64位整数字段 |
| BinaryField | 二进制数据类型 |
| BooleanField | 布尔值类型，默认值是None |
| CharField | 字符串类型。必须接收一个max_length参数 |
| CommaSeparatedIntegerField | 逗号分隔的整数类型。必须接收一个max_length参数。常用于表示较大的金额数目，例如1,000,000元。 |
| DateField | class DateField(auto_now=False, auto_now_add=False, **options) 日期类型 auto_now：用于保存最后修改时间。 auto_now_add：用于保存创建日期 |
| DateTimeField | 日期时间类型 |
| DecimalField | 固定精度的十进制小数 max_digits：最大的位数，必须大于或等于小数点位数 。 decimal_places：小数点位数，精度。 |
| DurationField | 持续时间类型。存储一定期间的时间长度。 |
| EmailField | 邮箱类型，默认max_length最大长度254位 |
| FileField | class FileField(upload_to=None, max_length=100, **options) 上传文件类型 |
| FilePathField | 文件路径类型 |
| FloatField | 浮点数类型 |
| ImageField | 图像类型 |
| IntegerField | 整数类型 |
| GenericIPAddressField | class GenericIPAddressField(protocol='both', unpack_ipv4=False, **options)[source] IPV4或者IPV6地址 |
| NullBooleanField | 含NULL的布尔字段 |
| PositiveIntegerField | 正整数字段，0-2147483647。 |
| PositiveSmallIntegerField | 较小的正整数字段，0-32767。 |
| SlugField | 标签，用于URLs，max_length=50。 |
| SmallIntegerField | 小整数，-32768-32767。 |
| TextField | 文本内容 |
| TimeField | 时间字段 |
| URLField | 用于保存URL地址的字符串类型，默认最大长度200。 |
| UUIDField | 用于保存通用唯一识别码（Universally Unique Identifier）的字段 |

关系类型字段  <br />  class ForeignKey(to, on_delete, **options)  <br />  class ManyToManyField(to, **options)  <br />  class OneToOneField(to, on_delete, parent_link=False, **options)

字段选项  <br />  null：字段为空时，Django 会将数据库中该字段设置为 NULL。  <br />  blank：是否允许字段为空。  <br />  choices：一系列二元组，用作此字段的选项  <br />  default：字段的默认值  <br />  help_text：额外的“帮助”文本，随表单控件一同显示  <br />  primary_key：  <br />  unique：  <br />  db_column：定义当前字段在数据表内的列名。如果未指定，Django将使用字段名作为列名。  <br />  db_index：是否为该字段创建索引。  <br />  db_tablespace：用于字段索引的数据库表空间的名字，前提是当前字段设置了索引  <br />  editable：如果设为False，那么当前字段将不会在admin后台或者其它的ModelForm表单中显示，同时还会被模型验证功能跳过。  <br />  error_messages：用于自定义错误信息。参数接收字典类型的值。字典的键可以是null、 blank、 invalid、 invalid_choice、 unique和unique_for_date其中的一个。  <br />  unique_for_date：日期唯一  <br />  unique_for_month  <br />  unique_for_year  <br />  verbose_name：为字段设置一个人类可读，更加直观的别名。

查询集  <br />  class QuerySet(model=None, query=None, using=None)

| 方法名 | 解释 |
| --- | --- |
| filter() | 过滤查询对象。 |
| exclude() | 排除满足条件的对象 |
| annotate() | 使用聚合函数 |
| order_by() | 对查询集进行排序 |
| reverse() | 反向排序 |
| distinct() | 对查询集去重 |
| values() | 返回包含对象具体值的字典的QuerySet |
| values_list() | 与values()类似，返回元组 |
| dates() | 根据日期获取查询集 |
| datetimes() | 根据时间获取查询集 |
| none() | 创建空的查询集 |
| all() | 获取所有的对象 |
| union() | 并集 |
| intersection() | 交集 |
| difference() | 差集 |
| select_related() | 附带查询关联对象 |
| prefetch_related() | 预先查询 |
| extra() | 附加SQL查询 |
| defer() | 不加载指定字段 |
| only() | 只加载指定的字段 |
| using() | 选择数据库 |
| select_for_update() | 锁住选择的对象，直到事务结束。 |
| raw() | 接收一个原始的SQL查询 |

| 方法名 | 解释 |
| --- | --- |
| get() | 获取单个对象 |
| create() | 创建对象，无需save() |
| get_or_create() | 查询对象，如果没有找到就新建对象 |
| update_or_create() | 更新对象，如果没有找到就创建对象 |
| bulk_create() | 批量创建对象 |
| count() | 统计对象的个数 |
| in_bulk() | 根据主键值的列表，批量返回对象 |
| iterator() | 获取包含对象的迭代器 |
| latest() | 获取最近的对象 |
| earliest() | 获取最早的对象 |
| first() | 获取第一个对象 |
| last() | 获取最后一个对象 |
| aggregate() | 聚合操作 |
| exists() | 判断queryset中是否有对象 |
| update() | 批量更新对象 |
| delete() | 批量删除对象 |
| as_manager() | 获取管理器 |

查询参数

| 字段名 | 说明 |
| --- | --- |
| exact | 精确匹配 |
| iexact | 不区分大小写的精确匹配 |
| contains | 包含匹配 |
| icontains | 不区分大小写的包含匹配 |
| in | 在..之内的匹配 |
| gt | 大于 |
| gte | 大于等于 |
| lt | 小于 |
| lte | 小于等于 |
| startswith | 从开头匹配 |
| istartswith | 不区分大小写从开头匹配 |
| endswith | 从结尾处匹配 |
| iendswith | 不区分大小写从结尾处匹配 |
| range | 范围匹配 |
| date | 日期匹配 |
| year | 年份 |
| month | 月份 |
| day | 日期 |
| week | 第几周 |
| week_day | 周几 |
| time | 时间 |
| hour | 小时 |
| minute | 分钟 |
| second | 秒 |
| isnull | 判断是否为空 |
| regex | 区分大小写的正则匹配 |
| iregex | 不区分大小写的正则匹配 |

聚合函数

- expression：引用模型字段的一个字符串，或者一个query expression。
- output_field：表示返回值的model field，一个可选的参数。
- **extra：关键字参数可以给聚合函数生成的SQL提供额外的信息。
- Avg：class Avg(expression, output_field=FloatField(), **extra)
- Count：class Count(expression, distinct=False, **extra)
- Max：class Max(expression, output_field=None, **extra)
- Min：class Min(expression, output_field=None, **extra)
- StdDev：class StdDev(expression, sample=False, **extra)	标准差
- Sum：class Sum(expression, output_field=None, **extra)
- Variance：class Variance(expression, sample=False, **extra)	方差

视图  <br />  class HttpRequest  <br />  每当一个用户请求发送过来，Django将HTTP数据包中的相关内容，打包成为一个HttpRequest对象，并传递给每个视图函数作为第一位置参数，也就是request，供我们调用  <br />  class QueryDict  <br />  HttpRequest对象的GET和POST属性都是一个django.http.QueryDict  <br />  class HttpResponse  <br />  每个视图实例化、填充和返回一个HttpResponse对象
```python
# views.py
# 视图函数
def article_list(request):
    """处理GET请求"""
    if request.method == 'GET':
        articles = ArticlePost.objects.all()
        context = {'articles': articles}
        return render(request, 'article/list.html', context)

# 类视图
from django.views import View
class ArticleListView(View):
    """处理GET请求"""
    def get(self, request):
        articles = ArticlePost.objects.all()
        context = {'articles': articles}
        return render(request, 'article/list.html', context)
```
```python
# urls.py
# 视图函数
urlpatterns = [
    path('.../<int:id>', views.article_list, name='...'),
]
# 类视图
urlpatterns = [
    path('.../<int:pk>', views.ArticleListView.as_view(), name='...'),
]
```
模板  <br />  get_template（template_name，using = None）  <br />  使用给定的名称查找和加载模板，并返回一个Template对象  <br />  select_template（template_name_list，using = None）  <br />  Template.render(context=None, request=None)  <br />  通过给定的context对该模板进行渲染。  <br />  render_to_string(template_name, context=None, request=None, using=None)

| 标签 | 说明 |
| --- | --- |
| autoescape | 自动转义开关 |
| block | 块引用 |
| comment | 注释 |
| csrf_token | CSRF令牌 |
| cycle | 循环对象的值 |
| debug | 调试模式 |
| extends | 继承模版 |
| filter | 过滤功能 |
| firstof | 输出第一个不为False的参数 |
| for | 循环对象 |
| for … empty | 带empty说明的循环 |
| if | 条件判断 |
| ifequal | 如果等于 |
| ifnotequal | 如果不等于 |
| ifchanged | 如果有变化，则.. |
| include | 导入子模版的内容 |
| load | 加载标签和过滤器 |
| lorem | 生成无用的废话 |
| now | 当前时间 |
| regroup | 根据对象重组集合 |
| resetcycle | 重置循环 |
| spaceless | 去除空白 |
| templatetag | 转义模版标签符号 |
| url | 获取url字符串 |
| verbatim | 禁用模版引擎 |
| widthratio | 宽度比例 |
| with | 上下文变量管理器 |

### [django-rest-framework](https://github.com/encode/django-rest-framework)





## [FastAPI](https://fastapi.tiangolo.com/)
```python
from typing import Optional
from fastapi import FastAPI
import uvicorn


app = FastAPI()

@app.get("/")
def read_root():
	return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
	return {"item_id": item_id, "q": q}

if __name__ == "__main__":
    uvicorn.run(app=app, host="127.0.0.1", port=5000, log_level="info")
```
## [requests](https://github.com/psf/requests)
`requests.request(method, url, **kwargs)`  <br />  request(method, url, params=None, data=None, headers=None, cookies=None, files=None, auth=None, timeout=None, allow_redirects=True, proxies=None, hooks=None, stream=None, verify=None, cert=None, json=None)  <br />  参数:

- method -- method for the new Request object.
- url：请求服务器地址；
- params：字典或字节序列形式的请求参数（请求地址中？后面的键值对参数）；
- data：字典，字节序或文件对象；向服务器提交的数据内容；
- json：json格式的数据（与data=json.dumps(jsBody)等价）；
- headers：字典，请求头信息；
- cookies：字典或CookieJar，只从http中解析cookie；
- auth：元组，支持http认证功能；
- files：字典，向服务器上传文件；
- timeout：设定超时秒数；
- proxies：字典，设定访问代理服务器；
- allow_redirects: 开关， 表示是否允许对url进行重定向， 默认为True。
- stream: 开关， 指是否对获取内容进行立即下载， 默认为True。
- verify：开关， 用于认证SSL证书， 默认为True。
- cert： 用于设置保存本地SSL证书路径



requests.head(url, **kwargs)  <br />  requests.get(url, params=None, **kwargs)  <br />  requests.post(url, data=None, json=None, **kwargs)  <br />  requests.put(url, data=None, **kwargs)  <br />  requests.patch(url, data=None, **kwargs)  <br />  requests.delete(url, **kwargs)

**class requests.Session**

**class requests.Response**

- request
   - body
   - method
   - headers
- url
- text -- Content of the response, in unicode.
- content -- Content of the response, in bytes.
- json(**kwargs) -- Returns the json-encoded content of a respon
- status_code
- raw
- ok
- is_redirect
- headers
- cookies
- history
```python
import json
from functools import wraps

import requests


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


class CloudJson(ApiGateway):

    def __init__(self, security_key: str = None):
        super().__init__('https://json.extendsclass.com')
        if security_key:
            self.session.headers.update({"Security-key": security_key})

    @log
    def create_bin(self, api_key: str, data, private=False):
        headers = {
            "Api-key": api_key,
            "Private": "true" if private else "false"
        }
        self._post(f'/bin', data=data.encode('utf-8'), headers=headers)
        return self.response

    @log
    def obtain(self, id: str):
        self._get(f'/bin/{id}')
        return self.response

    @log
    def update(self, id: str, data):
        self._put(f'/bin/{id}', data=data.encode('utf-8'))
        return self.response

    @log
    def partially_update(self, id: str, data):
        headers = {"Content-type": "application/json-patch+json"}
        self._request('PATCH',
                      f'/bin/{id}',
                      data=data.encode('utf-8'),
                      headers=headers)
        return self.response

    @log
    def delete(self, id: str):
        self._delete(f'/bin/{id}')
        return self.response

    @log
    def bins(self, api_key: str):
        headers = {"Api-key": api_key}
        self._get('/bins', headers=headers)
        return self.response

        
# 下载大文件，一次性加载可能会导致内存爆满，可采取分块读写的方法
def download_file():
    req = requests.get("http://www.test.com/test.jpg", stream=True)
    with open(r"c:\test.jpg", "wb") as f:
        for chunk in req.iter_content(chunk_size=1024):  # 每次加载1024字节
            f.write(chunk)

if __name__ == '__main__':
    id = '659e99c04915'
    key = '7816b5a9-451c-11ec-b95c-0242ac110002'
    cj = CloudJson('ec')
    r = cj.obtain(id)
    # cj.bins(key)
```


## [aiohttp](https://github.com/aio-libs/aiohttp)
class aiohttp.ClientSession(base_url=None, *, connector=None, cookies=None, headers=None, skip_auto_headers=None, auth=None, json_serialize=json.dumps, version=aiohttp.HttpVersion11, cookie_jar=None, read_timeout=None, conn_timeout=None, timeout=sentinel, raise_for_status=False, connector_owner=True, auto_decompress=True, read_bufsize=2 ** 16, requote_redirect_url=False, trust_env=False, trace_configs=None)

coroutine async-with request(method, url, *, params=None, data=None, json=None, cookies=None, headers=None, skip_auto_headers=None, auth=None, allow_redirects=True, max_redirects=10, compress=None, chunked=None, expect100=False, raise_for_status=None, read_until_eof=True, read_bufsize=None, proxy=None, proxy_auth=None, timeout=sentinel, ssl=None, verify_ssl=None, fingerprint=None, ssl_context=None, proxy_headers=None)

coroutine async-with ws_connect(url, *, method='GET', protocols=(), timeout=10.0, receive_timeout=None, auth=None, autoclose=True, autoping=True, heartbeat=None, origin=None, params=None, headers=None, proxy=None, proxy_auth=None, ssl=None, verify_ssl=None, fingerprint=None, ssl_context=None, proxy_headers=None, compress=0, max_msg_size=4194304)

```python
async def main():
    async with aiohttp.ClientSession() as session:
        headers={'Accept': 'application/json'}
        async with session.get('http://httpbin.org/get', headers=headers) as resp:
            print(resp.status)
            print(await resp.text())

asyncio.run(main())

async with session.ws_connect('http://example.org/ws') as ws:
    async for msg in ws:
        if msg.type == aiohttp.WSMsgType.TEXT:
            if msg.data == 'close cmd':
                await ws.close()
                break
            else:
                await ws.send_str(msg.data + '/answer')
        elif msg.type == aiohttp.WSMsgType.ERROR:
            break
```
```python
class ApiGateway(object):

    def __init__(self, host: str, path_prefix: str = ""):
        self.host = host
        self.path_prefix = path_prefix
        self.session = aiohttp.ClientSession()
        self.response = None
        self.headers = {}

    @property
    def context_path(self):
        return self.host + self.path_prefix

    async def _get(self, path, **kwargs):
        self.response = await self.session.get(self.context_path + path,
                                               **kwargs)

    async def _post(self, path, data=None, **kwargs):
        self.response = await self.session.post(self.context_path + path,
                                                data=data,
                                                **kwargs)

    async def _put(self, path, data, **kwargs):
        self.response = await self.session.put(self.context_path + path,
                                               data=data,
                                               **kwargs)

    async def _delete(self, path, **kwargs):
        self.response = await self.session.delete(self.context_path + path,
                                                  **kwargs)

    async def close(self):
        await self.session.close()

async def main():
    api = ApiGateway('http://httpbin.org')
    await api._post('/post', json={'key': 'value'})
    res = await api.response.json()
    await api.close()
    print(json.dumps(res, indent=2))


asyncio.run(main())
```

## [loguru](https://github.com/Delgan/loguru)
**logger**

- `add(sink, *, level='DEBUG', format='<green>{time:YYYY-MM-DD HH:mm:ss.SSS}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>', filter=None, colorize=None, serialize=False, backtrace=True, diagnose=True, enqueue=False, catch=True, **kwargs)`
- remove(handler_id=None)
- complete()	Wait for the end of enqueued messages and asynchronous tasks scheduled by handlers
- `catch(exception=<class 'Exception'>, *, level='ERROR', reraise=False, onerror=None, exclude=None, default=None, message="An error has been caught in function '{record[function]}', process '{record[process].name}' ({record[process].id}), thread '{record[thread].name}' ({record[thread].id}):")`
- opt()	Parametrize a logging call to slightly change generated log message.
- bind()
- contextualize()
- patch()
- level()
- disable()
- enable()
- configure()
- parse()
- log()
- exception()

  <br />  severity levels

| **Level name** | **Severity value** | **Logger method** |
| --- | --- | --- |
| TRACE | 5 | [logger.trace()](https://loguru.readthedocs.io/en/stable/api/logger.html#loguru._logger.Logger.trace) |
| DEBUG | 10 | [logger.debug()](https://loguru.readthedocs.io/en/stable/api/logger.html#loguru._logger.Logger.debug) |
| INFO | 20 | [logger.info()](https://loguru.readthedocs.io/en/stable/api/logger.html#loguru._logger.Logger.info) |
| SUCCESS | 25 | [logger.success()](https://loguru.readthedocs.io/en/stable/api/logger.html#loguru._logger.Logger.success) |
| WARNING | 30 | [logger.warning()](https://loguru.readthedocs.io/en/stable/api/logger.html#loguru._logger.Logger.warning) |
| ERROR | 40 | [logger.error()](https://loguru.readthedocs.io/en/stable/api/logger.html#loguru._logger.Logger.error) |
| CRITICAL | 50 | [logger.critical()](https://loguru.readthedocs.io/en/stable/api/logger.html#loguru._logger.Logger.critical) |

  <br />  record dict

| **Key** | **Description** | **Attributes** |
| --- | --- | --- |
| elapsed | The time elapsed since the start of the program | See [datetime.timedelta](https://docs.python.org/3/library/datetime.html#datetime.timedelta) |
| exception | The formatted exception if any, None otherwise | type, value, traceback |
| extra | The dict of attributes bound by the user (see [bind()](https://loguru.readthedocs.io/en/stable/api/logger.html#loguru._logger.Logger.bind)) | None |
| file | The file where the logging call was made | name (default), path |
| function | The function from which the logging call was made | None |
| level | The severity used to log the message | name (default), no, icon |
| line | The line number in the source code | None |
| message | The logged message (not yet formatted) | None |
| module | The module where the logging call was made | None |
| name | The __name__ where the logging call was made | None |
| process | The process in which the logging call was made | name, id (default) |
| thread | The thread in which the logging call was made | name, id (default) |
| time | The aware local time when the logging call was made | See [datetime.datetime](https://docs.python.org/3/library/datetime.html#datetime.datetime) |


```python
from loguru import logger

logger.debug("That's it, beautiful and simple logging!")
logger.info("If you're using Python {}, prefer {feature} of course!", 3.6, feature="f-strings")

logger.add(sys.stderr, format="{time} {level} {message}", filter="my_module", level="INFO")
logger.add("file_1.log", rotation="500 MB", compression="zip")    # Automatically rotate too big file

# Exceptions catching within threads or main
@logger.catch
def my_function(x, y, z):
    # An error? It's caught anyway!
    return 1 / (x + y + z)
```

## [lxml](https://lxml.de/)
Class _Element(顶级基类)
```python
# =====================================
# Properties(属性)
# =====================================
attrib  # 元素属性字典
base  # 原始文档的url或None
sourceline  # 原始行数或None
tag  # tag名
tail  # 尾巴文本(存在于兄弟节点间，属于父节点的文本内容)
text  # 位于第一个子标签之前的子文本
prefix  # 命名空间前缀(XML)(详解见底部附录)
nsmap  # 命名空间与URL映射关系(XML)(详解见底部附录)
# =====================================
# Instance Methods(实例方法)(常用)
# =====================================
xpath(self, _path, namespaces=None, extensions=None, smart_strings=True, **_variables)
# 通过xpath表达式查找指定节点元素，返回指定节点元素列表或None
getparent(self)
# 查找父节点，返回找到的父节点对象或None
getprevious(self)
# 查找前一个相邻的兄弟节点元素，返回找到的节点对象或None
getnext(self)
# 查找后一个相邻的兄弟节点对象，返回找到的节点对象或None
getchildren(self)
# 返回所有直属的子节点对象
getroottree(self)
# 返回所在文档的根节点树
find(self, path, namespaces=None)
# 根据标签名或路径，返回第一个匹配到的子节点对象
findall(self, path, namespaces=None)
# 根据标签名或路径，返回全部符合要求的子节点对象
findtext(self, path, default=None, namespaces=None)
# 根据标签名或路径，返回第一个匹配到的子节点对象的text文本
clear(self)
# 重置节点对象，清除所有子节点对象，以及所有的text、tail对象
get(self, key, default=None)
# 返回节点属性key对应的值
items(self)
# 以任意顺序返回节点属性键和值
keys(self)
# 以任意顺序返回包含节点全部属性名的列表
values(self)
# 以任意顺序返回包含节点全部属性值的列表
set(self, key, value)
# 设置节点属性
```
lxml.etree
```python
object ---+
          |
   _Element ---+
               |
              ElementBase
# =====================================
Functions(函数)(常用)
# =====================================
HTML(text, parser=None, base_url=None)
# 将字符型HTML文档内容转换为节点树对象
fromstring(text, parser=None, base_url=None)
# 将字符型XML文档或文档片段转换问节点树对象
tostring(element_or_tree, encoding=None, method="xml", xml_declaration=None, pretty_print=False, with_tail=True, standalone=None, doctype=None, exclusive=False, with_commments=True, inclusive_ns_prefixes=None)
# 将节点树对象序列化为编码的字符型
tounicode(element_or_tree, method="xml", pretty_print=False, with_tail=True, doctype=None)
# 将节点树对象序列化为Unicode型
```
lxml.html
```python
object ---+ 
            | 
etree._Element ---+
                  | 
    etree.ElementBase---+ 
                        | 
         object ---+    | 
                   |    |
           HtmlMixin ---+  
                        |
                       HtmlElement
# =====================================
Functions(函数)(常用)
# =====================================
fromstring(html, base_url=None, parser=None, **kwargs)
# 将字符型html文档转换为节点树或文档树
tostring(doc, pretty_print=False, include_meta_content_type=False, encoding=None, method="html", with_tail=True, doctype=None)
# 将节点树或文档树序列化为字符型
######################################
**Class HtmlMixin**
object ---+
          |
          HtmlMixin
# =====================================
Properties(属性)
# =====================================
base_url  # 文档url
head  # <head>标签部分
body  # <body>标签部分
forms  # 返回全部form列表
label  # 元素的label标签
classes  # class属性值的集合
# =====================================
Instance Methods(实例方法)(常用)
# =====================================
drop_tag(self)
# 移除标签，但不移除其子标签和text文本，将其合并到父节点
drop_tree(self)
# 移除节点树（包含子节点和text），但不移除它的tail文本，将其合并到父节点或前一个兄弟节点
find_class(self, class_name)
# 根据class属性值查找节点元素
get_element_by_id(self, rel)
# 根据id属性值查找节点元素
set(self, key, value=None)
# 设置节点元素的属性
text_content(self)
# 返回其后代节点与其自身的全部text内容
```
爬取Bilibili排行榜
```python
import requests
from lxml import etree
url = 'https://www.bilibili.com/ranking'
header = {'User-Agent': 'Mozilla/5.0'}
response = requests.get(url=url, headers=header)
response.encoding = 'utf-8'
hot_text = response.text
tree = etree.HTML(hot_text)
rank_list = tree.xpath('//ul[@class="rank-list"]/li')
print('排名\t标题\t综合得分\t')
for num,li in enumerate(rank_list,1):
    print(num,'\t'.join(li.xpath('.//a[@class="title"]/text() | .//div[@class="pts"]/div/text()')))
```
## [Selenium](https://www.selenium.dev/)
[browser drivers](https://www.selenium.dev/zh-cn/documentation/getting_started/installing_browser_drivers/)
```python
from selenium.webdriver import Chrome
# 简单赋值
driver = Chrome(executable_path='./chromedriver')
# 或者使用上下文管理器
with Chrome() as driver:
# 打开百度
driver.get("https://www.baidu.com/")
    # 输入搜索关键字
    element = driver.find_element_by_id("kw")
    element.send_keys("selenium")
    # 点击搜索按钮
    driver.find_element_by_id("su").click()
    # 关闭
    driver.quit()
```
**package API**  <br />  **WebDriver**  <br />  chrome

- class selenium.webdriver.chrome.options.Options
- class selenium.webdriver.chrome.webdriver.WebDriver(executable_path='chromedriver', port=0, options: selenium.webdriver.chrome.options.Options = None, service_args=None, desired_capabilities=None, service_log_path=None, chrome_options=None, service: selenium.webdriver.chrome.service.Service = None, keep_alive=None)
- class selenium.webdriver.chrome.service.Service(executable_path: str, port: int = 0, service_args: List[str] = None, log_path: str = None, env: str = None)

**元素定位**  <br />  class selenium.webdriver.common.by.By

- CLASS_NAME = 'class name'
- CSS_SELECTOR = 'css selector'
- ID = 'id'
- LINK_TEXT = 'link text'
- NAME = 'name'
- PARTIAL_LINK_TEXT = 'partial link text'
- TAG_NAME = 'tag name'
- XPATH = 'xpath'

[**selenium.webdriver.common.keys**](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.keys.html#module-selenium.webdriver.common.keys)  <br />  Set of special keys codes.  <br />  [**selenium.webdriver.support.event_firing_webdriver**](https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.event_firing_webdriver.html#module-selenium.webdriver.support.event_firing_webdriver)  <br />  [**selenium.webdriver.support.abstract_event_listener**](https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.abstract_event_listener.html#module-selenium.webdriver.support.abstract_event_listener)
```python
from selenium.webdriver import Firefox
from selenium.webdriver.support.events import EventFiringWebDriver, AbstractEventListener
class MyListener(AbstractEventListener):
    def before_navigate_to(self, url, driver):
        print("Before navigate to %s" % url)
    def after_navigate_to(self, url, driver):
        print("After navigate to %s" % url)
driver = Firefox()
ef_driver = EventFiringWebDriver(driver, MyListener())
ef_driver.get("http://www.google.co.in/")
```
[操控浏览器](https://www.selenium.dev/zh-cn/documentation/webdriver/browser_manipulation/)

- current_url
- page_source
- title
- back()	后退
- forward()	前进
- refresh()	刷新
- close() 关闭单个窗口
- quit() 关闭所有窗口
- execute_async_script(script, *args)
- execute_script(script, *args)
- find_element(by='id', value=None)
- find_elements(by='id', value=None)

窗口管理

- set_window_size(480, 800)
- get_window_size()
- set_window_position(0, 0)
- get_window_position()
- maximize_window()
- minimize_window(self)
- fullscreen_window(self)
- save_screenshot('./image.png')
- get_screenshot_as_file()

窗口和标签页

- current_window_handle：获得当前窗口句柄。
- window_handles：返回所有窗口的句柄到当前会话。

**class SwitchTo**

- window(window_name)
- default_content()	跳回最外层的页面
- frame(frame_reference)	可以直接取表单的id 或name属性
- parent_frame()
```python
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
# 启动驱动程序
with webdriver.Firefox() as driver:
    # 打开网址
    driver.get("https://seleniumhq.github.io")
    # 设置等待
    wait = WebDriverWait(driver, 10)
    # 存储原始窗口的 ID
    original_window = driver.current_window_handle
    # 检查一下，我们还没有打开其他的窗口
    assert len(driver.window_handles) == 1
    # 单击在新窗口中打开的链接
    driver.find_element(By.LINK_TEXT, "new window").click()
    # 等待新窗口或标签页
    wait.until(EC.number_of_windows_to_be(2))
    # 循环执行，直到找到一个新的窗口句柄
    for window_handle in driver.window_handles:
        if window_handle != original_window:
            driver.switch_to.window(window_handle)
            break
    # 等待新标签页完成加载内容
    wait.until(EC.title_is("SeleniumHQ Browser Automation"))
    
    # 通过 id 切换框架
    driver.switch_to.frame('buttonframe')
    # 单击按钮
    driver.find_element(By.TAG_NAME, 'button').click()
```
[页面加载策略](https://www.selenium.dev/zh-cn/documentation/webdriver/page_loading_strategy/)

- normal(默认)：等待整个页面的加载（返回 load 事件）
- eager：保持等待, 直到完全加载并解析了HTML文档（返回 DOMContentLoaded 事件）
- none：仅等待至初始页面下载完成.

[**selenium.webdriver.support.wait**](https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.wait.html#module-selenium.webdriver.support.wait)  <br />  WebDriverWait(driver, timeout, poll_frequency=0.5, ignored_exceptions=None)	显性等待

- driver ：浏览器驱动。
- timeout ：最长超时时间，默认以秒为单位。
- poll_frequency ：检测的间隔（步长）时间，默认为0.5S。
- ignored_exceptions ：超时后的异常信息，默认情况下抛NoSuchElementException异常。
- until(method, message=‘’) 调用该方法提供的驱动程序作为一个参数，直到返回值为True。
- until_not(method, message=‘’) 调用该方法提供的驱动程序作为一个参数，直到返回值为False。
```python
element = WebDriverWait(driver, 5, 0.5).until(EC.presence_of_element_located((By.ID, "kw")))
```
隐性等待最大时间  <br />  driver.implicitly_wait(seconds)  <br />  **cookies**

- get_cookies()： 获得所有cookie信息。
- get_cookie(name)： 返回字典的key为“name”的cookie信息。
- add_cookie(cookie_dict) ： 添加cookie。“cookie_dict”指字典对象，必须有name 和value 值。
- delete_cookie(name,optionsString)：删除cookie信息。“name”是要删除的cookie的名称，“optionsString”是该cookie的选项，目前支持的选项包括“路径”，“域”。
- delete_all_cookies()： 删除所有cookie信息

**class WebElement()**

- tag_name
- location
- size： 返回元素的尺寸。
- text： 获取元素的文本。
- rect	元素的尺寸和坐标
- clear()	清除文本
- send_keys(*value)	模拟按键输入
- click()
- submit()
- get_property(name)
- get_attribute(name)
- is_displayed()	是否用户可见
- is_selected()
- is_enabled()

[**selenium.webdriver.common.action_chains**](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.action_chains.html#module-selenium.webdriver.common.action_chains)  <br />  **class ActionChains(**driver)

- click(on_element=None)
- click_and_hold(on_element=None)
- context_click(on_element=None)	右击
- double_click(on_element=None)
- drag_and_drop(source, target)
- drag_and_drop_by_offset(source, xoffset, yoffset)
- key_down(value, element=None)
- key_up(value, element=None)
- move_to_element(to_element)	鼠标悬停
- move_by_offset(xoffset, yoffset)
- perform()： 执行所有 ActionChains 中存储的行为；
- pause(seconds)
- release(on_element=None)
- reset_actions()
- send_keys(*keys_to_send)
- send_keys_to_element(element, *keys_to_send)
```python
# pressing ctrl+c
ActionChains(driver).key_down(Keys.CONTROL).send_keys('c').key_up(Keys.CONTROL).perform()
```
[**selenium.webdriver.common.touch_actions**](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.touch_actions.html#module-selenium.webdriver.common.touch_actions)  <br />  TouchActions(driver)

- double_tap(on_element)
- flick(xspeed, yspeed)
- flick_element(on_element, xoffset, yoffset, speed)
- long_press(on_element)
- move(xcoord, ycoord)
- perform()
- release(xcoord, ycoord)
- scroll(xoffset, yoffset)
- scroll_from_element(on_element, xoffset, yoffset)
- tap(on_element)
- tap_and_hold(xcoord, ycoord)

Others

- selenium.webdriver.common.utils
- selenium.webdriver.common.proxy
- selenium.webdriver.common.service
- selenium.webdriver.common.html5.application_cache
- selenium.webdriver.support.abstract_event_listener
- selenium.webdriver.support.color
- selenium.webdriver.support.event_firing_webdriver
- selenium.webdriver.support.expected_conditions
- selenium.webdriver.support.select
- Webdriver.remote

Chrome
```python
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from time import sleep
def find_element_wait(driver, locator, timeout=10):
    """
        显式等待，动态查找元素
    """
    return WebDriverWait(driver, timeout).until(lambda s: s.find_element(*locator))
options = webdriver.ChromeOptions()
options.binary_location = "./chrome.exe"
# 解决崩溃问题
options.add_argument('--no-sandbox')
# 控制chrome以无界面模式打开
options.add_argument('--headless')
options.add_argument('--disable-gpu')
# 去除 ‘Chrome正受到自动测试软件的控制’ 提示
options.add_experimental_option("excludeSwitches", ['enable-automation'])
# 打开谷歌浏览器
driver = webdriver.Chrome(executable_path="./chromedriver.exe",options=options)
driver.get("https://www.agefans.tv")
# 输入搜索关键字
find_element_wait(driver,('id','top_search_input')).send_keys("斗罗大陆")
find_element_wait(driver, ('class name', 'search_submit')).click()
driver.switch_to.window(driver.window_handles[-1])
find_element_wait(driver, ('link text', animate)).click()
driver.switch_to.window(driver.window_handles[-1])
find_element_wait(driver, ('partial link text', '100')).click()
driver.switch_to.window(driver.window_handles[-1])
sleep(3)
play_frame = find_element_wait(driver, ('xpath', '//*[@id="age_playfram"]'))
driver.switch_to.frame(play_frame)
e = find_element_wait(driver, ('xpath', '/html/body/div/div[4]/div[4]'))
ActionChains(driver).move_to_element_with_offset(e, 150, 0).click()\
    .send_keys(Keys.SPACE).perform()
sleep(5)
driver.quit()
```
## [Scrapy](https://scrapy.org/)
https://www.osgeo.cn/scrapy/index.html  <br />  conda install -c conda-forge scrapy  <br />  scrapy  [options] [args]  <br />  bench         Run quick benchmark test  <br />  fetch         Fetch a URL using the Scrapy downloader  <br />  genspider     Generate new spider using pre-defined templates  <br />  runspider     Run a self-contained spider (without creating a project)  <br />  settings      Get settings values  <br />  shell         Interactive scraping console  <br />  startproject  Create new project  <br />  version       Print Scrapy version  <br />  view          Open URL in browser, as seen by Scrapy  <br />  ![](https://www.runoob.com/wp-content/uploads/2018/10/8c591d54457bb033812a2b0364011e9c_articlex.png#id=GKVZl&originHeight=494&originWidth=700&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

- Scrapy Engine(引擎): 负责Spider、ItemPipeline、Downloader、Scheduler中间的通讯，信号、数据传递等。
- Scheduler(调度器): 接受引擎发送过来的Request请求，并按照一定的方式进行整理排列，入队
- Downloader（下载器）：负责下载引擎发送的所有Requests请求，并将其获取到的Responses交还
- Spider（爬虫）：处理所有Responses，从中分析提取数据，获取Item字段需要的数据，并将需要跟进的URL提交给引擎
- Item Pipeline(管道)：负责处理Spider中获取到的Item，并进行进行后期处理（详细分析、过滤、存储等）的地方。
- Downloader Middlewares（下载中间件）：可以自定义扩展下载功能的组件。
- Spider Middlewares（Spider中间件）：可以自定扩展和操作引擎和Spider中间通信的功能组件
## Pytest
https://www.osgeo.cn/pytest/contents.html  <br />  调用方法
```python
pytest [options] [file_or_dir] [file_or_dir] [...]
pytest -s 显示程序中的print/logging输出
pytest --fixtures  # 显示可用的内置方法参数
pytest --maxfail=n    # n次失败后停止
pytest -k "MyClass and not method"	#按关键字表达式运行用例
pytest test_mod.py::TestClass::test_method	#执行模块中某条指定的测试用例
pytest -m slow	#执行所有带@pytest.mark.slow装饰器的用例
```

- 测试文件以test_开头（以_test结尾也可以）
- 测试类以Test开头，并且不能带有 **init** 方法
- 测试函数以test_开头
- 断言使用基本的assert即可

自定义运行规则
```python
#pytest.ini
[pytest]
addopts =-s
testpaths = testcase  #当前目录下的testcase文件夹
python_files = test_*.py  #当前目录下,以test_开头,以.py结尾的所有文件
python_classes = Test_*  #当前目录下,以Test_开头的类
python_functions = test_*  #当前目录下,以test_开头的方法
log_cli_level = INFO    # 实时日志记录捕获的最小日志消息级别
```
**@pytest.fixture(scope='function', params=None, autouse=False, ids=None, name=None)**  <br />  scope

- function ：默认范围，则在测试结束时销毁fixture。
- class ：在课程中最后一次测试的拆卸过程中，夹具被破坏。
- module ：在模块中最后一次测试的拆卸过程中，夹具被破坏。
- package ：在拆下包装中的最后一次试验时，夹具被破坏。
- session ：夹具在测试会话结束时被销毁。
```python
import pytest
@pytest.fixture()
def user():
    print('setup -- 前置初始化')
    yield "yoyo"
    print('teardown -- 后置清理')
def test_1(user):
    assert user == "yoyo", '测试通过'
def test_2(user):
    assert user == "yuyu", '测试失败'
if __name__=='__main__':
    pytest.main(['-s', 'test_fixture.py'])
```
参数化
```python
data = [("username1", "password1"), ("username2", "password2")]
@pytest.fixture(params=data)
def get_data(request):
    print(request.param)
    return request.param
def test_login(get_data):
    print("账号：%s" % get_data[0], "密码：%s" % get_data[1])
```
[_@_pytest.mark. ](/pytest.mark. )

- skip - 始终跳过该测试用例
- skipif - 遇到特定情况跳过该测试用例
- xfail - 遇到特定情况，产生一个“期望失败”输出
- parametrize(argnames,argvalues,indirect = False,ids = None,scope = None) - 在同一个测试用例上运行多次调用(参数化数据驱动)
- filterwarnings - 为标记的测试项添加警告过滤器。

**断言**  <br />  使用assert语句进行断言  <br />  异常断言
```python
def myfunc():
    raise ValueError("Exception 123 raised")
def test_match():
    with pytest.raises(ValueError,match=r'.* 123 .*'):
        myfunc()
        
等同 @pytest.mark.xfail(raises=ValueError)
```
警示断言	pytest.warns  <br />  **插件**

- pytest-timeout	标记超时时间 @pytest.mark.timeout(60)
- pytest-html 生成html报告插件	--html=report.html

- [Functions](https://docs.pytest.org/en/latest/reference/reference.html#functions)
   - approx(expected, rel=None, abs=None, nan_ok=False)
   - fail(msg='', pytrace=True)
   - [pytest.skip](https://docs.pytest.org/en/latest/reference/reference.html#pytest-skip)
   - [pytest.importorskip](https://docs.pytest.org/en/latest/reference/reference.html#pytest-importorskip)
   - [pytest.xfail](https://docs.pytest.org/en/latest/reference/reference.html#pytest-xfail)
   - [pytest.exit](https://docs.pytest.org/en/latest/reference/reference.html#pytest-exit)
   - **main(_args=None_, _plugins=None_)**
   - **param(_*values_[, _id_][, _marks_])**
   - [pytest.raises](https://docs.pytest.org/en/latest/reference/reference.html#pytest-raises)
   - [pytest.deprecated_call](https://docs.pytest.org/en/latest/reference/reference.html#pytest-deprecated-call)
   - [pytest.register_assert_rewrite](https://docs.pytest.org/en/latest/reference/reference.html#pytest-register-assert-rewrite)
   - [pytest.warns](https://docs.pytest.org/en/latest/reference/reference.html#pytest-warns)
   - [pytest.freeze_includes](https://docs.pytest.org/en/latest/reference/reference.html#pytest-freeze-includes)
- [Marks](https://docs.pytest.org/en/latest/reference/reference.html#marks)
   - [pytest.mark.filterwarnings](https://docs.pytest.org/en/latest/reference/reference.html#pytest-mark-filterwarnings)
   - [pytest.mark.parametrize](https://docs.pytest.org/en/latest/reference/reference.html#pytest-mark-parametrize)
   - [pytest.mark.skip](https://docs.pytest.org/en/latest/reference/reference.html#pytest-mark-skip)
   - [pytest.mark.skipif](https://docs.pytest.org/en/latest/reference/reference.html#pytest-mark-skipif)
   - [pytest.mark.usefixtures](https://docs.pytest.org/en/latest/reference/reference.html#pytest-mark-usefixtures)
   - [pytest.mark.xfail](https://docs.pytest.org/en/latest/reference/reference.html#pytest-mark-xfail)
   - [pytest.__version__](https://docs.pytest.org/en/latest/reference/reference.html#pytest-version)
   - [pytest.version_tuple](https://docs.pytest.org/en/latest/reference/reference.html#pytest-version-tuple)
   - [Custom marks](https://docs.pytest.org/en/latest/reference/reference.html#custom-marks)
- [Fixtures](https://docs.pytest.org/en/latest/reference/reference.html#fixtures)
   - [@pytest.fixture](https://docs.pytest.org/en/latest/reference/reference.html#pytest-fixture)
   - [config.cache](https://docs.pytest.org/en/latest/reference/reference.html#config-cache)
   - [capsys](https://docs.pytest.org/en/latest/reference/reference.html#capsys)
   - [capsysbinary](https://docs.pytest.org/en/latest/reference/reference.html#capsysbinary)
   - [capfd](https://docs.pytest.org/en/latest/reference/reference.html#capfd)
   - [capfdbinary](https://docs.pytest.org/en/latest/reference/reference.html#capfdbinary)
   - [doctest_namespace](https://docs.pytest.org/en/latest/reference/reference.html#doctest-namespace)
   - [request](https://docs.pytest.org/en/latest/reference/reference.html#request)
   - [pytestconfig](https://docs.pytest.org/en/latest/reference/reference.html#pytestconfig)
   - [record_property](https://docs.pytest.org/en/latest/reference/reference.html#record-property)
   - [record_testsuite_property](https://docs.pytest.org/en/latest/reference/reference.html#record-testsuite-property)
   - [caplog](https://docs.pytest.org/en/latest/reference/reference.html#caplog)
   - [monkeypatch](https://docs.pytest.org/en/latest/reference/reference.html#monkeypatch)
   - [pytester](https://docs.pytest.org/en/latest/reference/reference.html#pytester)
   - [testdir](https://docs.pytest.org/en/latest/reference/reference.html#testdir)
   - [recwarn](https://docs.pytest.org/en/latest/reference/reference.html#recwarn)
   - [tmp_path](https://docs.pytest.org/en/latest/reference/reference.html#tmp-path)
   - [tmp_path_factory](https://docs.pytest.org/en/latest/reference/reference.html#tmp-path-factory)
   - [tmpdir](https://docs.pytest.org/en/latest/reference/reference.html#tmpdir)
   - [tmpdir_factory](https://docs.pytest.org/en/latest/reference/reference.html#tmpdir-factory)
- [Hooks](https://docs.pytest.org/en/latest/reference/reference.html#hooks)
   - [Bootstrapping hooks](https://docs.pytest.org/en/latest/reference/reference.html#bootstrapping-hooks)
   - [Initialization hooks](https://docs.pytest.org/en/latest/reference/reference.html#initialization-hooks)
   - [Collection hooks](https://docs.pytest.org/en/latest/reference/reference.html#collection-hooks)
   - [Test running (runtest) hooks](https://docs.pytest.org/en/latest/reference/reference.html#test-running-runtest-hooks)
   - [Reporting hooks](https://docs.pytest.org/en/latest/reference/reference.html#reporting-hooks)
   - [Debugging/Interaction hooks](https://docs.pytest.org/en/latest/reference/reference.html#debugging-interaction-hooks)
- [Objects](https://docs.pytest.org/en/latest/reference/reference.html#objects)
   - [CallInfo](https://docs.pytest.org/en/latest/reference/reference.html#callinfo)
   - [Class](https://docs.pytest.org/en/latest/reference/reference.html#class)
   - [Collector](https://docs.pytest.org/en/latest/reference/reference.html#collector)
   - [CollectReport](https://docs.pytest.org/en/latest/reference/reference.html#collectreport)
   - [Config](https://docs.pytest.org/en/latest/reference/reference.html#config)
   - [ExceptionInfo](https://docs.pytest.org/en/latest/reference/reference.html#exceptioninfo)
   - [ExitCode](https://docs.pytest.org/en/latest/reference/reference.html#exitcode)
   - [File](https://docs.pytest.org/en/latest/reference/reference.html#file)
   - [FixtureDef](https://docs.pytest.org/en/latest/reference/reference.html#fixturedef)
   - [FSCollector](https://docs.pytest.org/en/latest/reference/reference.html#fscollector)
   - [Function](https://docs.pytest.org/en/latest/reference/reference.html#function)
   - [FunctionDefinition](https://docs.pytest.org/en/latest/reference/reference.html#functiondefinition)
   - [Item](https://docs.pytest.org/en/latest/reference/reference.html#item)
   - [MarkDecorator](https://docs.pytest.org/en/latest/reference/reference.html#markdecorator)
   - [MarkGenerator](https://docs.pytest.org/en/latest/reference/reference.html#markgenerator)
   - [Mark](https://docs.pytest.org/en/latest/reference/reference.html#mark)
   - [Metafunc](https://docs.pytest.org/en/latest/reference/reference.html#metafunc)
   - [Module](https://docs.pytest.org/en/latest/reference/reference.html#module)
   - [Node](https://docs.pytest.org/en/latest/reference/reference.html#node)
   - [Parser](https://docs.pytest.org/en/latest/reference/reference.html#parser)
   - [OptionGroup](https://docs.pytest.org/en/latest/reference/reference.html#optiongroup)
   - [PytestPluginManager](https://docs.pytest.org/en/latest/reference/reference.html#pytestpluginmanager)
   - [Session](https://docs.pytest.org/en/latest/reference/reference.html#session)
   - [TestReport](https://docs.pytest.org/en/latest/reference/reference.html#testreport)
   - [_Result](https://docs.pytest.org/en/latest/reference/reference.html#result)
   - [Stash](https://docs.pytest.org/en/latest/reference/reference.html#stash)
- [Global Variables](https://docs.pytest.org/en/latest/reference/reference.html#global-variables)
- [Environment Variables](https://docs.pytest.org/en/latest/reference/reference.html#environment-variables)
- [Exceptions](https://docs.pytest.org/en/latest/reference/reference.html#exceptions)
- [Warnings](https://docs.pytest.org/en/latest/reference/reference.html#warnings)
- [Configuration Options](https://docs.pytest.org/en/latest/reference/reference.html#configuration-options)
- [Command-line Flags](https://docs.pytest.org/en/latest/reference/reference.html#command-line-flags)
