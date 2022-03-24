
# —— [Node.js](https://nodejs.org/en/docs/) ——
2009年，Ryan正式推出了基于JavaScript语言和V8引擎的开源Web服务器项目Node.js。

[REPL](https://nodejs.org/api/repl.html#repl_repl)(Read Eval Print Loop，交互式解释器)
```javascript
node [options] [V8 options] [script.js | -e "script" | - ] [arguments]
node inspect [script.js | -e "script" | <host>:<port>] …

-c, --check                 syntax check script without executing
-i, --interactive
-p, --print "script"
-r, --require module
```
从命令行接收参数
```javascript
// app.js
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})
const args = process.argv.slice(2)
args[0]

// command line
node app.js joe
0: .\node.exe
1: .\app.js
2: joe
```

# [API](https://nodejs.org/api/)

- [Assertion testing](https://nodejs.org/api/assert.html)
- [Async_context](https://nodejs.org/api/async_context.html)
- [Async hooks](https://nodejs.org/api/async_hooks.html)
- [Buffer](https://nodejs.org/api/buffer.html)
- [C++ addons](https://nodejs.org/api/addons.html)
- [C/C++ addons with Node-API](https://nodejs.org/api/n-api.html)
- [C++ embedder API](https://nodejs.org/api/embedding.html)
- [Child processes](https://nodejs.org/api/child_process.html)
- [Cluster](https://nodejs.org/api/cluster.html)
- [Command-line options](https://nodejs.org/api/cli.html)
- [Console](https://nodejs.org/api/console.html)
- [Crypto](https://nodejs.org/api/crypto.html)
- [Debugger](https://nodejs.org/api/debugger.html)
- [Deprecated APIs](https://nodejs.org/api/deprecations.html)
- [Diagnostics Channel](https://nodejs.org/api/diagnostics_channel.html)
- [DNS](https://nodejs.org/api/dns.html)
- [Domain](https://nodejs.org/api/domain.html)
- [Errors](https://nodejs.org/api/errors.html)
- [Events](https://nodejs.org/api/events.html)	事件触发器
```javascript
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // 打印: a b {}
});

myEmitter.emit('event', 'a', 'b');    // 触发事件
```

- [File system](https://nodejs.org/api/fs.html)
```javascript
const fs = require('fs')
fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
fs.writeFile('/Users/joe/test.txt', 'content', err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})

// 同步版本
try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8')
  console.log(data)
  
  fs.writeFileSync('/Users/joe/test.txt', 'content')
  //文件写入成功。
} catch (err) {
  console.error(err)
}
```

- [Globals](https://nodejs.org/api/globals.html)
- [HTTP](https://nodejs.org/api/http.html)
```javascript
// 创建http服务
const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n')
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})


// 发送 HTTP 请求
const https = require('https')
// --get
const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

//  --post
const data = JSON.stringify({
  todo: '做点事情'
})

const options = {
  hostname: 'nodejs.cn',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.write(data)
req.end()
```

- [HTTP/2](https://nodejs.org/api/http2.html)
- [HTTPS](https://nodejs.org/api/https.html)
- [Inspector](https://nodejs.org/api/inspector.html)
- [Internationalization](https://nodejs.org/api/intl.html)
- [Modules: CommonJS modules](https://nodejs.org/api/modules.html)
- [Modules: ECMAScript modules](https://nodejs.org/api/esm.html)
- [Modules: module API](https://nodejs.org/api/module.html)
- [Modules: Packages](https://nodejs.org/api/packages.html)
- [Net](https://nodejs.org/api/net.html)
- [OS](https://nodejs.org/api/os.html)
- [Path](https://nodejs.org/api/path.html)
```javascript
const notes = '/users/joe/notes.txt'
path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt
```

- [Performance hooks](https://nodejs.org/api/perf_hooks.html)
- [Policies](https://nodejs.org/api/policy.html)
- [Process](https://nodejs.org/api/process.html)
- [Punycode](https://nodejs.org/api/punycode.html)
- [Query strings](https://nodejs.org/api/querystring.html)
- [Readline](https://nodejs.org/api/readline.html)
```javascript
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})
```

- [REPL](https://nodejs.org/api/repl.html)
- [Report](https://nodejs.org/api/report.html)
- [Stream](https://nodejs.org/api/stream.html)
- [String decoder](https://nodejs.org/api/string_decoder.html)
- [Timers](https://nodejs.org/api/timers.html)
```javascript
setImmediate(console.log, 1);
setTimeout(console.log, 1, 2);
/****************** microTask 分割线 ********************/
Promise.resolve(3).then(console.log); // microTask 分割线
/****************** 下次 event loop tick 分割线 ********************/
process.nextTick(console.log, 4);
/****************** 同步任务和异步任务的分割线 ********************/
console.log(5);
// 打印 5 4 3 2 1 或者 5 4 3 1 2
```

- [TLS/SSL](https://nodejs.org/api/tls.html)
- [Trace events](https://nodejs.org/api/tracing.html)
- [TTY](https://nodejs.org/api/tty.html)
- [UDP/datagram](https://nodejs.org/api/dgram.html)
- [URL](https://nodejs.org/api/url.html)
- [Utilities](https://nodejs.org/api/util.html)
- [V8](https://nodejs.org/api/v8.html)
- [VM](https://nodejs.org/api/vm.html)
- [WASI](https://nodejs.org/api/wasi.html)
- [Web Crypto API](https://nodejs.org/api/webcrypto.html)
- [Web Streams API](https://nodejs.org/api/webstreams.html)
- [Worker threads](https://nodejs.org/api/worker_threads.html)
- [Zlib](https://nodejs.org/api/zlib.html)

# [npm](https://docs.npmjs.com/)
npm（Node Package Manager）是Node.js默认的、用JavaScript编写的软件包管理系统。  <br />  [**CLI**](https://docs.npmjs.com/cli/v7/commands)

- [npm cache](https://docs.npmjs.com/cli/v7/commands/npm-cache)
   - npm cache clean
   - aliases: npm cache clear, npm cache rm
- [npm ci](https://docs.npmjs.com/cli/v7/commands/npm-ci)	Install a project with a clean slate
- [npm config](https://docs.npmjs.com/cli/v7/commands/npm-config)	Manage the npm configuration files
   - npm config set <key>=<value> [<key>=<value> ...]
   - npm config get [<key> [<key> ...]]
   - npm config delete <key> [<key> ...]
   - npm config list [--json]
   - npm config edit
   - npm set <key>=<value> [<key>=<value> ...]
   - npm get [<key> [<key> ...]]
   - alias: c
- [npm init](https://docs.npmjs.com/cli/v7/commands/npm-init)	Create a package.json file
- [npm install](https://docs.npmjs.com/cli/v7/commands/npm-install)	Install a package
   - aliases: npm i, npmadd
   -  [-P|--save-prod|-D|--save-dev|-O|--save-optional|--save-peer] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
   - -P, --save-prod: Package will appear in your dependencies. default
   - -D, --save-dev: Package will appear in your devDependencies.
- [npm docs](https://docs.npmjs.com/cli/v7/commands/npm-docs)	Docs for a package in a web browser maybe
- [npm install-ci-test](https://docs.npmjs.com/cli/v7/commands/npm-install-ci-test)	Install a project with a clean slate and run tests
- [npm install-test](https://docs.npmjs.com/cli/v7/commands/npm-install-test)	Install package(s) and run tests
- [npm link](https://docs.npmjs.com/cli/v7/commands/npm-link)	Symlink a package folder
- [npm ls](https://docs.npmjs.com/cli/v7/commands/npm-ls)	List installed packages
   - --depth=0
- [npm search](https://docs.npmjs.com/cli/v7/commands/npm-search)	Search for packages
   - [-l|--long] [--json] [--parseable] [--no-description] [search terms ...]
   - aliases: s, se, find
- [npm run-script](https://docs.npmjs.com/cli/v7/commands/npm-run-script)	Run arbitrary package scripts
   - npm run-script <command> [--if-present] [--silent] [-- <args>]
- [npm test](https://docs.npmjs.com/cli/v7/commands/npm-test)	Test a package
- [npm uninstall](https://docs.npmjs.com/cli/v7/commands/npm-uninstall)	Remove a package
   - [<@scope>/]<pkg>[@<version>]... [-S|--save|--no-save]
   - aliases: remove, rm, r, un, unlink
- [npm view](https://docs.npmjs.com/cli/v7/commands/npm-view)	View registry info
   - npm view [<@scope>/]<name>[@<version>] [<field>[.<subfield>]...] aliases: info, show, v
- [npx](https://docs.npmjs.com/cli/v7/commands/npx)	Run a command from an npm package
- npm help <command>		npm <command> -h

淘宝镜像
```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
[Configuring npm](https://docs.npmjs.com/cli/v7/configuring-npm)

- [.npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)	The npm config files
- [npm-shrinkwrap.json](https://docs.npmjs.com/cli/v7/configuring-npm/npm-shrinkwrap-json)	A publishable lockfile
- [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)	Specifics of npm's package.json handling
```json
{
  "name": "navigation",
  "version": "0.1.0",
  "private": true,
  // 支持ES6 模块使用
  "type": "module",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "ant-design-vue": "^2.2.1",
    "axios": "^0.22.0",
    "vue": "^3.0.0",
    "vue-i18n": "^9.1.7",
    "vue-router": "^4.0.0-0",
    "vuex": "^4.0.0-0"
  },
  "devDependencies": {
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0"
  }
}
```

- [package-lock.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json)	A manifestation of the manifest

- dependencies 和 devDependencies ：模块的依赖和开发环境依赖
- peerDependencies	模块需要与宿主模块共享依赖（可能会用到某个模块，但不安装）
   - x.y.z 使用精确版本号
   - * 	任意版本，第一次安装会使用模块最新版本
   - ^x.y.z	x 位锁死，y、z 位使用最新版本
   - ~x.y.z	x、y 锁定，z 位使用最新版本
- main 	标识模块的默认入口文件

## [npx](https://github.com/npm/npx)
Execute binaries from npm packages.  <br />  npx [options] [@version] [command-arg]...  <br />  npx [options] [-p|--package ]...  [command-arg]...  <br />  npx [options] -c ''  <br />  npx --shell-auto-fallback [shell]
```javascript
Options:
  --package, -p          Package to be installed.                       [string]
  --cache                Location of the npm cache.                     [string]
  --always-spawn         Always spawn a child process to execute the command.
                                                                       [boolean]
  --no-install           Skip installation if a package is missing.    [boolean]
  --userconfig           Path to user npmrc.                            [string]
  --call, -c             Execute string as if inside `npm run-script`.  [string]
  --shell, -s            Shell to execute the command with, if any.
                                                       [string] [default: false]
  --shell-auto-fallback  Generate shell code to use npx as the "command not
                         found" fallback.
                                   [string] [choices: "", "bash", "fish", "zsh"]
  --ignore-existing      Ignores existing binaries in $PATH, or in the local
                         project. This forces npx to do a temporary install and
                         use the latest version.                       [boolean]
  --quiet, -q            Suppress output from npx itself. Subcommands will not
                         be affected.                                  [boolean]
  --npm                  npm binary to use for internal operations.
  [string] [default: "D:\Portable\Programming\node-v14.15.4-win-x64\node_modules
                                                           \npm\bin\npm-cli.js"]
  --node-arg, -n         Extra node argument when calling a node binary.[string]
```

# Module
暴露模块	module.exports = variable;  <br />  引入模块	var foo = require('other_module');
```javascript
'use strict';
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```
.mjs文件总是以 ES6 模块加载  <br />  .cjs文件总是以 CommonJS 模块加载

# [Axios](https://github.com/axios/axios)
一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。  <br />  在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。
```html
使用 cdn:
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
或
<script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"></script>
```
示例
```javascript
const axios = require('axios');

axios.get('/user', { params: { ID: 12345 } })
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .then(function () {
        // always executed
    });

//  use async/await
async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
```
[**Axios API**](https://axios-http.com/zh/docs/api_intro)

- axios(config)
- axios(url[, config])
```javascript
function getUserAccount() {
  // Send a GET request (default method)
  return axios('/user/12345');
}

function setName() {
    // Send a POST request
    axios({
      method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
}

// 发起多个并发请求
Promise.all([getUserAccount(), setName()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```

- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.options(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])
- axios.patch(url[, data[, config]])

**axios.create([config])**
```javascript
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```
[请求配置](https://axios-http.com/zh/docs/req_config)
```javascript
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认值

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用与 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // 你可以修改请求头。
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理

    return data;
  }],

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是与请求一起发送的 URL 参数
  // 必须是一个简单对象或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer`是可选方法，主要用于序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求体被发送的数据
  // 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
  // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属: FormData, File, Blob
  // - Node 专属: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // 发送请求体数据的可选语法
  // 请求方式 post
  // 只有 value 会被发送，key 则不会
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` 指定请求超时的毫秒数。
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 1000, // 默认值是 `0` (永不超时)

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，这使测试更加容易。
  // 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。
  adapter: function (config) {
    /* ... */
  },

  // `auth` HTTP Basic Auth
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示浏览器将要响应的数据类型
  // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 浏览器专属：'blob'
  responseType: 'json', // 默认值

  // `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)
  // 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // 默认值

  // `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // 默认值

  // `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认值

  // `onUploadProgress` 允许为上传处理进度事件
  // 浏览器专属
  onUploadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  // 浏览器专属
  onDownloadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数
  maxContentLength: 2000,

  // `maxBodyLength`（仅Node）定义允许的http请求内容的最大字节数
  maxBodyLength: 2000,

  // `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
  // 则promise 将会 resolved，否则是 rejected。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },

  // `maxRedirects` 定义了在node.js中要遵循的最大重定向数。
  // 如果设置为0，则不会进行重定向
  maxRedirects: 5, // 默认值

  // `socketPath` 定义了在node.js中使用的UNIX套接字。
  // e.g. '/var/run/docker.sock' 发送请求到 docker 守护进程。
  // 只能指定 `socketPath` 或 `proxy` 。
  // 若都指定，这使用 `socketPath` 。
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定义了代理服务器的主机名，端口和协议。
  // 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。
  // 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。
  // `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。
  // 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。
  // 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // see https://axios-http.com/zh/docs/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indicates whether or not the response body should be decompressed 
  // automatically. If set to `true` will also remove the 'content-encoding' header 
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // 默认值

}
```
[响应结构](https://axios-http.com/zh/docs/res_schema)
```javascript
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 是服务器响应头
  // 所有的 header 名称都是小写，而且可以使用方括号语法访问
  // 例如: `response.headers['content-type']`
  headers: {},

  // `config` 是 `axios` 请求的配置信息
  config: {},

  // `request` 是生成此响应的请求
  // 在node.js中它是最后一个ClientRequest实例 (in redirects)，
  // 在浏览器中则是 XMLHttpRequest 实例
  request: {}
}
```
[默认配置](https://axios-http.com/zh/docs/config_defaults)

- 全局 axios 默认值
```javascript
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

- 自定义实例默认值
```javascript
// 创建实例时配置默认值
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 创建实例后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```
[拦截器](https://axios-http.com/zh/docs/interceptors)
```javascript
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  
//  移除拦截器
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```
[错误处理](https://axios-http.com/zh/docs/handling_errors)
```javascript
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 请求已经成功发起，但没有收到响应
      // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
      // 而在node.js中是 http.ClientRequest 的实例
      console.log(error.request);
    } else {
      // 发送请求时出了点问题
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```
[取消请求](https://axios-http.com/zh/docs/cancellation)
```javascript
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});
axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})
// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
```
[请求体编码](https://axios-http.com/zh/docs/urlencoded)

Jsonp 请求
```javascript
axios.jsonp = (url) => {
    if(!url){
        console.error('请传入一个url参数')
        return;
    }
    return new Promise((resolve,reject) => {
        window.jsonCallBack =(result) => {
            resolve(result)
        }
        var JSONP=document.createElement("script");
        JSONP.type="text/javascript";
        JSONP.src=`${url}&callback=jsonCallBack`;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        },500)
    })
} 

axios.jsonp('http://xxxxx:8080/set_session_jsonp?callback=demo')
    .then(response => console.log(response))
    .catch(error => console.log(error));
```

# Koa
app.use(middleware)：注册中间件  <br />  app.listen(port)  <br />  app.context：全应用共享的环境信息

- ctx.request： koa 封装的 request 对象，中间件应该尽量使用
- ctx.req：Node.js 原生的 request 对象
- ctx.response：koa 封装的 response 对象，中间件应该尽量使用
- ctx.res：Node.js 原生的 response 对象
- ctx.state：koa 推荐的命名空间，用于通过中间件传递信息到前端视图
- ctx.app：对应用实例 app 的引用
- ctx.cookies：cookie 操作对象
- ctx.throw：通过 http status 抛出错误，让 koa 可以正确处理
```javascript
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.listen(3000);
```

# [serve](https://github.com/vercel/serve)
serve -s dist
```javascript
const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});
```

# [Webpack](https://webpack.js.org/)
模块打包器。将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，也能转换(transform)、打包(bundle)或包裹(package)任何资源(resource or asset)。

chunk  <br />  bundle

配置  <br />  **入口[entry]**
```javascript
module.exports = {
  entry: './index.js'
};


module.exports = {
  entry: {
    pageA: './pageA.js',
    pageB: ['./fileA.js', './fileB.js']
  },
  
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: 'https://cdn.antfin.com'
  },
  
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
```
**出口[output]**

# [Nodemailer](https://nodemailer.com/)
```javascript
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
```
```javascript
let message = {
    ...
    attachments: [
        {   // utf-8 string as an attachment
            filename: 'text1.txt',
            content: 'hello world!'
        },
        {   // binary buffer as an attachment
            filename: 'text2.txt',
            content: new Buffer('hello world!','utf-8')
        },
        {   // file on disk as an attachment
            filename: 'text3.txt',
            path: '/path/to/file.txt' // stream this file
        },
        {   // filename and content type is derived from path
            path: '/path/to/file.txt'
        },
        {   // stream as an attachment
            filename: 'text4.txt',
            content: fs.createReadStream('file.txt')
        },
        {   // define custom content type for the attachment
            filename: 'text.bin',
            content: 'hello world!',
            contentType: 'text/plain'
        },
        {   // use URL as an attachment
            filename: 'license.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
        },
        {   // encoded string as an attachment
            filename: 'text1.txt',
            content: 'aGVsbG8gd29ybGQh',
            encoding: 'base64'
        },
        {   // data uri as an attachment
            path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
        },
        {
            // use pregenerated MIME node
            raw: 'Content-Type: text/plain\r\n' +
                 'Content-Disposition: attachment;\r\n' +
                 '\r\n' +
                 'Hello world!'
        }
    ]
}

// EMBEDDED IMAGES
let message = {
    ...
    html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
    attachments: [{
        filename: 'image.png',
        path: '/path/to/file',
        cid: 'unique@nodemailer.com' //same cid value as in the html img src
    }]
}
```

# [puppeteer](https://github.com/puppeteer/puppeteer)
[awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer)  <br />  提供了一个高级 API 来通过 [DevTools](http://puppeteerjs.com/(https://chromedevtools.github.io/devtools-protocol/)) 协议控制 Chromium 或 Chrome。默认以 headless 模式运行
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({
      path: 'example.png',
      type: 'png',
      fullPage: true //边滚动边截图
    // clip: {x: 0, y: 0, width: 1920, height: 800}
    });
    
  await browser.close();
})();



const iPhoneXR = puppeteer.devices['iPhone XR'];
(async () => {
  const browser = await puppeteer.launch({
        headless: false,   //有浏览器界面启动
        slowMo: 100,       //放慢浏览器执行速度，方便测试观察
        args: [            //启动 Chrome 的参数
            '–no-sandbox',
            '--window-size=1280,960'
        ],
    });
  const page = await browser.newPage();
  await page.emulate(iPhoneXR);
  await page.goto('https://www.baidu.com', { waitUntil: ['load'] });
  const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });

    console.log('Dimensions:', dimensions);
  await browser.close();
})();
```
**puppeteer.launch([options])**

- options <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> 在浏览器上设置的一组可配置选项。 有以下字段：
   - ignoreHTTPSErrors <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 是否在导航期间忽略 HTTPS 错误. 默认是 false。
   - headless <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 是否以 [无头模式](https://developers.google.com/web/updates/2017/04/headless-chrome) 运行浏览器。默认是 true，除非 devtools 选项是 true。
   - executablePath <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)> 可运行 Chromium 或 Chrome 可执行文件的路径，而不是绑定的 Chromium。如果 executablePath 是一个相对路径，那么他相对于 [当前工作路径](https://nodejs.org/api/process.html#process_process_cwd) 解析。
   - slowMo <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> 将 Puppeteer 操作减少指定的毫秒数。这样你就可以看清发生了什么，这很有用。
   - defaultViewport <?[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> 为每个页面设置一个默认视口大小。默认是 800x600。如果为 null 的话就禁用视图口。
      - width <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> 页面宽度像素。
      - height <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> 页面高度像素。
      - deviceScaleFactor <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> 设置设备的缩放（可以认为是 dpr）。默认是 1。
      - isMobile <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 是否在页面中设置了 meta viewport 标签。默认是 false。
      - hasTouch<[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 指定viewport是否支持触摸事件。默认是 false。
      - isLandscape <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 指定视口是否处于横向模式。默认是 false。
   - args <[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)>> 传递给浏览器实例的其他参数。 这些参数可以参考 [这里](http://peter.sh/experiments/chromium-command-line-switches/)。
   - ignoreDefaultArgs <([boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)|<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)>>)> 如果是 true，那就不要使用 [puppeteer.defaultArgs()](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v8.0.0&show=api-puppeteerdefaultargs-options)。 如果给出了数组，则过滤掉给定的默认参数。这个选项请谨慎使用。默认为 false。
   - handleSIGINT <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> Ctrl-C 关闭浏览器进程。默认是 true。
   - handleSIGTERM <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 关闭 SIGTERM 上的浏览器进程。默认是 true。
   - handleSIGHUP <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 关闭 SIGHUP 上的浏览器进程。默认是 true.
   - timeout <[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)> 等待浏览器实例启动的最长时间（以毫秒为单位）。默认是 30000 (30 秒). 通过 0 来禁用超时。
   - dumpio <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 是否将浏览器进程标准输出和标准错误输入到 process.stdout 和 process.stderr 中。默认是 false。
   - userDataDir <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)> [用户数据目录](https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md) 路径。
   - env <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> 指定浏览器可见的环境变量。默认是 process.env。
   - devtools <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 是否为每个选项卡自动打开DevTools面板。如果这个选项是 true，headless 选项将会设置成 false。
   - pipe <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)> 通过管道而不是WebSocket连接到浏览器。默认是 false。
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Browser](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v8.0.0&show=api-class-browser)>> 浏览器实例支持 Promise。

[class: Puppeteer](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-puppeteer)

- [puppeteer.clearCustomQueryHandlers()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerclearcustomqueryhandlers)
- [puppeteer.connect(options)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerconnectoptions)
- [puppeteer.createBrowserFetcher([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteercreatebrowserfetcheroptions)
- [puppeteer.customQueryHandlerNames()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteercustomqueryhandlernames)
- [puppeteer.defaultArgs([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerdefaultargsoptions)
- [puppeteer.devices](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerdevices)
- [puppeteer.errors](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteererrors)
- [puppeteer.executablePath()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerexecutablepath)
- [puppeteer.launch([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerlaunchoptions)
- [puppeteer.networkConditions](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteernetworkconditions)
- [puppeteer.product](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerproduct)
- [puppeteer.registerCustomQueryHandler(name, queryHandler)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerregistercustomqueryhandlername-queryhandler)
- [puppeteer.unregisterCustomQueryHandler(name)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#puppeteerunregistercustomqueryhandlername)

[class: BrowserFetcher](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-browserfetcher)

- [browserFetcher.canDownload(revision)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserfetchercandownloadrevision)
- [browserFetcher.download(revision[, progressCallback])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserfetcherdownloadrevision-progresscallback)
- [browserFetcher.host()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserfetcherhost)
- [browserFetcher.localRevisions()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserfetcherlocalrevisions)
- [browserFetcher.platform()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserfetcherplatform)
- [browserFetcher.product()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserfetcherproduct)
- [browserFetcher.remove(revision)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserfetcherremoverevision)
- [browserFetcher.revisionInfo(revision)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserfetcherrevisioninforevision)

[class: Browser](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-browser)

- [event: 'disconnected'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-disconnected)
- [event: 'targetchanged'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-targetchanged)
- [event: 'targetcreated'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-targetcreated)
- [event: 'targetdestroyed'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-targetdestroyed)
- [browser.browserContexts()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserbrowsercontexts)
- [browser.close()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserclose)
- [browser.createIncognitoBrowserContext()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercreateincognitobrowsercontext)
- [browser.defaultBrowserContext()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserdefaultbrowsercontext)
- [browser.disconnect()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserdisconnect)
- [browser.isConnected()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserisconnected)
- [browser.newPage()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsernewpage)
- [browser.pages()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserpages)
- [browser.process()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserprocess)
- [browser.target()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsertarget)
- [browser.targets()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsertargets)
- [browser.userAgent()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browseruseragent)
- [browser.version()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserversion)
- [browser.waitForTarget(predicate[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserwaitfortargetpredicate-options)
- [browser.wsEndpoint()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browserwsendpoint)

[class: BrowserContext](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-browsercontext)

- [event: 'targetchanged'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-targetchanged-1)
- [event: 'targetcreated'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-targetcreated-1)
- [event: 'targetdestroyed'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-targetdestroyed-1)
- [browserContext.browser()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontextbrowser)
- [browserContext.clearPermissionOverrides()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontextclearpermissionoverrides)
- [browserContext.close()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontextclose)
- [browserContext.isIncognito()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontextisincognito)
- [browserContext.newPage()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontextnewpage)
- [browserContext.overridePermissions(origin, permissions)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontextoverridepermissionsorigin-permissions)
- [browserContext.pages()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontextpages)
- [browserContext.targets()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontexttargets)
- [browserContext.waitForTarget(predicate[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#browsercontextwaitfortargetpredicate-options)

[class: Page](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-page)

- [event: 'close'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-close)
- [event: 'console'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-console)
- [event: 'dialog'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-dialog)
- [event: 'domcontentloaded'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-domcontentloaded)
- [event: 'error'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-error)
- [event: 'frameattached'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-frameattached)
- [event: 'framedetached'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-framedetached)
- [event: 'framenavigated'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-framenavigated)
- [event: 'load'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-load)
- [event: 'metrics'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-metrics)
- [event: 'pageerror'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-pageerror)
- [event: 'popup'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-popup)
- [event: 'request'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-request)
- [event: 'requestfailed'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-requestfailed)
- [event: 'requestfinished'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-requestfinished)
- [event: 'response'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-response)
- [event: 'workercreated'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-workercreated)
- [event: 'workerdestroyed'](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#event-workerdestroyed)
- [page.$(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageselector)
- [page.$$(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageselector-1)
- [page.$$eval(selector, pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageevalselector-pagefunction-args)
- [page.$eval(selector, pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageevalselector-pagefunction-args-1)
- [page.$x(expression)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagexexpression)
- [page.accessibility](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageaccessibility)
- [page.addScriptTag(options)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageaddscripttagoptions)
- [page.addStyleTag(options)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageaddstyletagoptions)
- [page.authenticate(credentials)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageauthenticatecredentials)
- [page.bringToFront()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagebringtofront)
- [page.browser()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagebrowser)
- [page.browserContext()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagebrowsercontext)
- [page.click(selector[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageclickselector-options)
- [page.close([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagecloseoptions)
- [page.content()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagecontent)
- [page.cookies([...urls])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagecookiesurls)
- [page.coverage](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagecoverage)
- [page.deleteCookie(...cookies)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagedeletecookiecookies)
- [page.emulate(options)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageemulateoptions)
- [page.emulateIdleState(overrides)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageemulateidlestateoverrides)
- [page.emulateMediaFeatures(features)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageemulatemediafeaturesfeatures)
- [page.emulateMediaType(type)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageemulatemediatypetype)
- [page.emulateNetworkConditions(networkConditions)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageemulatenetworkconditionsnetworkconditions)
- [page.emulateTimezone(timezoneId)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageemulatetimezonetimezoneid)
- [page.emulateVisionDeficiency(type)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageemulatevisiondeficiencytype)
- [page.evaluate(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageevaluatepagefunction-args)
- [page.evaluateHandle(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageevaluatehandlepagefunction-args)
- [page.evaluateOnNewDocument(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageevaluateonnewdocumentpagefunction-args)
- [page.exposeFunction(name, puppeteerFunction)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageexposefunctionname-puppeteerfunction)
- [page.focus(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagefocusselector)
- [page.frames()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageframes)
- [page.goBack([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagegobackoptions)
- [page.goForward([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagegoforwardoptions)
- [page.goto(url[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagegotourl-options)
- [page.hover(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagehoverselector)
- [page.isClosed()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageisclosed)
- [page.isJavaScriptEnabled()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageisjavascriptenabled)
- [page.keyboard](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagekeyboard)
- [page.mainFrame()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagemainframe)
- [page.metrics()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagemetrics)
- [page.mouse](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagemouse)
- [page.pdf([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagepdfoptions)
- [page.queryObjects(prototypeHandle)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagequeryobjectsprototypehandle)
- [page.reload([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagereloadoptions)
- [page.screenshot([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagescreenshotoptions)
- [page.select(selector, ...values)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageselectselector-values)
- [page.setBypassCSP(enabled)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetbypasscspenabled)
- [page.setCacheEnabled([enabled])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetcacheenabledenabled)
- [page.setContent(html[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetcontenthtml-options)
- [page.setCookie(...cookies)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetcookiecookies)
- [page.setDefaultNavigationTimeout(timeout)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetdefaultnavigationtimeouttimeout)
- [page.setDefaultTimeout(timeout)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetdefaulttimeouttimeout)
- [page.setExtraHTTPHeaders(headers)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetextrahttpheadersheaders)
- [page.setGeolocation(options)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetgeolocationoptions)
- [page.setJavaScriptEnabled(enabled)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetjavascriptenabledenabled)
- [page.setOfflineMode(enabled)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetofflinemodeenabled)
- [page.setRequestInterception(value)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetrequestinterceptionvalue)
- [page.setUserAgent(userAgent)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetuseragentuseragent)
- [page.setViewport(viewport)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagesetviewportviewport)
- [page.tap(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagetapselector)
- [page.target()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagetarget)
- [page.title()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagetitle)
- [page.touchscreen](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagetouchscreen)
- [page.tracing](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagetracing)
- [page.type(selector, text[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagetypeselector-text-options)
- [page.url()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageurl)
- [page.viewport()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageviewport)
- [page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitforselectororfunctionortimeout-options-args)
- [page.waitForFileChooser([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitforfilechooseroptions)
- [page.waitForFunction(pageFunction[, options[, ...args]])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitforfunctionpagefunction-options-args)
- [page.waitForNavigation([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitfornavigationoptions)
- [page.waitForRequest(urlOrPredicate[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitforrequesturlorpredicate-options)
- [page.waitForResponse(urlOrPredicate[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitforresponseurlorpredicate-options)
- [page.waitForSelector(selector[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitforselectorselector-options)
- [page.waitForTimeout(milliseconds)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitfortimeoutmilliseconds)
- [page.waitForXPath(xpath[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pagewaitforxpathxpath-options)
- [page.workers()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#pageworkers)
- [GeolocationOptions](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#geolocationoptions)
- [WaitTimeoutOptions](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#waittimeoutoptions)

[class: WebWorker](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-webworker)

- [webWorker.evaluate(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#webworkerevaluatepagefunction-args)
- [webWorker.evaluateHandle(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#webworkerevaluatehandlepagefunction-args)
- [webWorker.executionContext()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#webworkerexecutioncontext)
- [webWorker.url()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#webworkerurl)

[class: Accessibility](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-accessibility)

- [accessibility.snapshot([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#accessibilitysnapshotoptions)

[class: Keyboard](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-keyboard)

- [keyboard.down(key[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#keyboarddownkey-options)
- [keyboard.press(key[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#keyboardpresskey-options)
- [keyboard.sendCharacter(char)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#keyboardsendcharacterchar)
- [keyboard.type(text[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#keyboardtypetext-options)
- [keyboard.up(key)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#keyboardupkey)

[class: Mouse](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-mouse)

- [mouse.click(x, y[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#mouseclickx-y-options)
- [mouse.down([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#mousedownoptions)
- [mouse.move(x, y[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#mousemovex-y-options)
- [mouse.up([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#mouseupoptions)
- [mouse.wheel([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#mousewheeloptions)

[class: Touchscreen](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-touchscreen)

- [touchscreen.tap(x, y)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#touchscreentapx-y)

[class: Tracing](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-tracing)

- [tracing.start([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#tracingstartoptions)
- [tracing.stop()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#tracingstop)

[class: FileChooser](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-filechooser)

- [fileChooser.accept(filePaths)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#filechooseracceptfilepaths)
- [fileChooser.cancel()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#filechoosercancel)
- [fileChooser.isMultiple()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#filechooserismultiple)

[class: Dialog](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-dialog)

- [dialog.accept([promptText])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#dialogacceptprompttext)
- [dialog.defaultValue()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#dialogdefaultvalue)
- [dialog.dismiss()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#dialogdismiss)
- [dialog.message()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#dialogmessage)
- [dialog.type()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#dialogtype)

[class: ConsoleMessage](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-consolemessage)

- [consoleMessage.args()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#consolemessageargs)
- [consoleMessage.location()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#consolemessagelocation)
- [consoleMessage.stackTrace()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#consolemessagestacktrace)
- [consoleMessage.text()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#consolemessagetext)
- [consoleMessage.type()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#consolemessagetype)

[class: Frame](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-frame)

- [frame.$(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameselector)
- [frame.$$(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameselector-1)
- [frame.$$eval(selector, pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameevalselector-pagefunction-args)
- [frame.$eval(selector, pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameevalselector-pagefunction-args-1)
- [frame.$x(expression)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framexexpression)
- [frame.addScriptTag(options)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameaddscripttagoptions)
- [frame.addStyleTag(options)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameaddstyletagoptions)
- [frame.childFrames()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framechildframes)
- [frame.click(selector[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameclickselector-options)
- [frame.content()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framecontent)
- [frame.evaluate(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameevaluatepagefunction-args)
- [frame.evaluateHandle(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameevaluatehandlepagefunction-args)
- [frame.executionContext()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameexecutioncontext)
- [frame.focus(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framefocusselector)
- [frame.goto(url[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framegotourl-options)
- [frame.hover(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framehoverselector)
- [frame.isDetached()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameisdetached)
- [frame.name()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framename)
- [frame.parentFrame()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameparentframe)
- [frame.select(selector, ...values)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameselectselector-values)
- [frame.setContent(html[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framesetcontenthtml-options)
- [frame.tap(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frametapselector)
- [frame.title()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frametitle)
- [frame.type(selector, text[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frametypeselector-text-options)
- [frame.url()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#frameurl)
- [frame.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framewaitforselectororfunctionortimeout-options-args)
- [frame.waitForFunction(pageFunction[, options[, ...args]])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framewaitforfunctionpagefunction-options-args)
- [frame.waitForNavigation([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framewaitfornavigationoptions)
- [frame.waitForSelector(selector[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framewaitforselectorselector-options)
- [frame.waitForTimeout(milliseconds)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framewaitfortimeoutmilliseconds)
- [frame.waitForXPath(xpath[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#framewaitforxpathxpath-options)

[class: ExecutionContext](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-executioncontext)

- [executionContext.evaluate(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#executioncontextevaluatepagefunction-args)
- [executionContext.evaluateHandle(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#executioncontextevaluatehandlepagefunction-args)
- [executionContext.frame()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#executioncontextframe)
- [executionContext.queryObjects(prototypeHandle)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#executioncontextqueryobjectsprototypehandle)

[class: JSHandle](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-jshandle)

- [jsHandle.asElement()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#jshandleaselement)
- [jsHandle.dispose()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#jshandledispose)
- [jsHandle.evaluate(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#jshandleevaluatepagefunction-args)
- [jsHandle.evaluateHandle(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#jshandleevaluatehandlepagefunction-args)
- [jsHandle.executionContext()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#jshandleexecutioncontext)
- [jsHandle.getProperties()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#jshandlegetproperties)
- [jsHandle.getProperty(propertyName)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#jshandlegetpropertypropertyname)
- [jsHandle.jsonValue()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#jshandlejsonvalue)

[class: ElementHandle](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-elementhandle)

- [elementHandle.$(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleselector)
- [elementHandle.$$(selector)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleselector-1)
- [elementHandle.$$eval(selector, pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleevalselector-pagefunction-args)
- [elementHandle.$eval(selector, pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleevalselector-pagefunction-args-1)
- [elementHandle.$x(expression)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlexexpression)
- [elementHandle.asElement()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleaselement)
- [elementHandle.boundingBox()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleboundingbox)
- [elementHandle.boxModel()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleboxmodel)
- [elementHandle.click([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleclickoptions)
- [elementHandle.contentFrame()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlecontentframe)
- [elementHandle.dispose()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandledispose)
- [elementHandle.evaluate(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleevaluatepagefunction-args)
- [elementHandle.evaluateHandle(pageFunction[, ...args])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleevaluatehandlepagefunction-args)
- [elementHandle.executionContext()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleexecutioncontext)
- [elementHandle.focus()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlefocus)
- [elementHandle.getProperties()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlegetproperties)
- [elementHandle.getProperty(propertyName)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlegetpropertypropertyname)
- [elementHandle.hover()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlehover)
- [elementHandle.isIntersectingViewport()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleisintersectingviewport)
- [elementHandle.jsonValue()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlejsonvalue)
- [elementHandle.press(key[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlepresskey-options)
- [elementHandle.screenshot([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandlescreenshotoptions)
- [elementHandle.select(...values)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleselectvalues)
- [elementHandle.tap()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandletap)
- [elementHandle.toString()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandletostring)
- [elementHandle.type(text[, options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandletypetext-options)
- [elementHandle.uploadFile(...filePaths)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#elementhandleuploadfilefilepaths)

[class: HTTPRequest](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-httprequest)

- [httpRequest.abort([errorCode])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestaborterrorcode)
- [httpRequest.continue([overrides])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestcontinueoverrides)
- [httpRequest.failure()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestfailure)
- [httpRequest.frame()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestframe)
- [httpRequest.headers()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestheaders)
- [httpRequest.isNavigationRequest()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestisnavigationrequest)
- [httpRequest.method()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestmethod)
- [httpRequest.postData()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestpostdata)
- [httpRequest.redirectChain()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestredirectchain)
- [httpRequest.resourceType()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestresourcetype)
- [httpRequest.respond(response)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestrespondresponse)
- [httpRequest.response()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequestresponse)
- [httpRequest.url()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httprequesturl)

[class: HTTPResponse](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-httpresponse)

- [httpResponse.buffer()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponsebuffer)
- [httpResponse.frame()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponseframe)
- [httpResponse.fromCache()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponsefromcache)
- [httpResponse.fromServiceWorker()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponsefromserviceworker)
- [httpResponse.headers()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponseheaders)
- [httpResponse.json()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponsejson)
- [httpResponse.ok()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponseok)
- [httpResponse.remoteAddress()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponseremoteaddress)
- [httpResponse.request()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponserequest)
- [httpResponse.securityDetails()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponsesecuritydetails)
- [httpResponse.status()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponsestatus)
- [httpResponse.statusText()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponsestatustext)
- [httpResponse.text()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponsetext)
- [httpResponse.url()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#httpresponseurl)

[class: SecurityDetails](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-securitydetails)

- [securityDetails.issuer()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#securitydetailsissuer)
- [securityDetails.protocol()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#securitydetailsprotocol)
- [securityDetails.subjectAlternativeNames()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#securitydetailssubjectalternativenames)
- [securityDetails.subjectName()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#securitydetailssubjectname)
- [securityDetails.validFrom()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#securitydetailsvalidfrom)
- [securityDetails.validTo()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#securitydetailsvalidto)

[class: Target](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-target)

- [target.browser()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#targetbrowser)
- [target.browserContext()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#targetbrowsercontext)
- [target.createCDPSession()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#targetcreatecdpsession)
- [target.opener()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#targetopener)
- [target.page()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#targetpage)
- [target.type()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#targettype)
- [target.url()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#targeturl)
- [target.worker()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#targetworker)

[class: CDPSession](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-cdpsession)

- [cdpSession.detach()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#cdpsessiondetach)
- [cdpSession.send(method[, ...paramArgs])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#cdpsessionsendmethod-paramargs)

[class: Coverage](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-coverage)

- [coverage.startCSSCoverage([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#coveragestartcsscoverageoptions)
- [coverage.startJSCoverage([options])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#coveragestartjscoverageoptions)
- [coverage.stopCSSCoverage()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#coveragestopcsscoverage)
- [coverage.stopJSCoverage()](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#coveragestopjscoverage)

[class: TimeoutError](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-timeouterror)  <br />  [class: EventEmitter](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-eventemitter)  <br />  [eventEmitter.addListener(event, handler)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteraddlistenerevent-handler)  <br />  [eventEmitter.emit(event, [eventData])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteremitevent-eventdata)  <br />  [eventEmitter.listenerCount(event)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitterlistenercountevent)  <br />  [eventEmitter.off(event, handler)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteroffevent-handler)  <br />  [eventEmitter.on(event, handler)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteronevent-handler)  <br />  [eventEmitter.once(event, handler)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteronceevent-handler)  <br />  [eventEmitter.removeAllListeners([event])](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitterremovealllistenersevent)  <br />  [eventEmitter.removeListener(event, handler)](https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitterremovelistenerevent-handler)
```javascript
let page = await browser.newPage();
await page.goto(url);
let btn = await page.waitForSelector('#btn');
//在点击按钮之前，事先定义一个 Promise，用于返回新 tab 的 Page 对象
const newPagePromise = new Promise(res => 
  browser.once('targetcreated', 
    target => res(target.page())
  )
);
await btn.click();
//点击按钮后，等待新tab对象
let newPage = await newPagePromise;
```
```javascript
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false, slowMo: 100,
        defaultViewport: { width: 1280, height: 720 }
    });
    const page = await browser.newPage();
    // await page.emulate(iPhone);
    await page.goto('https://dev.exmaple.com', { waitUntil: ['load'] });
    await (await page.$('#UserName')).type('sds');
    await (await page.$('#Password')).type('***');
    let btn = await page.$('#signIn');
    await btn.click();
    await page.waitForNavigation();

    await (await page.$('#residents-tab')).click();
    await page.waitForTimeout(3000);
    await (await page.$('.flaticon-hr')).click();
    let options = await page.$$('.checkmark');
    await options[3].click();
    let rz = await page.$('.rz-pointer-min');
    let position = await rz.boundingBox();

    await page.mouse.move(position.x, position.y);
    await page.mouse.down();
    await page.mouse.move(position.x + 15, position.y);
    await page.waitForTimeout(2000);
    await page.mouse.move(position.x - 35, position.y);
    await page.mouse.up();

    await rz.click();
    for (let i = 0; i < ' World'.length; i++) 
        await page.keyboard.press('ArrowLeft');

    await browser.close();
})();
```

# [Jest](https://github.com/facebook/jest/labels/good%20first%20issue)
**UI**  <br />  [daisyui](https://github.com/saadeghi/daisyui)	Tailwind Components  <br />  [tailwindcss](https://github.com/tailwindlabs/tailwindcss)

[Chart.js](https://github.com/chartjs/Chart.js)  <br />  [echarts](https://github.com/apache/echarts)

[anime](https://github.com/juliangarnier/anime)

toast

- [popper-core](https://github.com/popperjs/popper-core)
- [tippyjs](https://github.com/atomiks/tippyjs)	complete tooltip, popover, dropdown, and menu solution
- [iziToast](https://github.com/marcelodolza/iziToast)



CSS

- [bulma](https://github.com/jgthms/bulma) Modern CSS framework based on Flexbox
- [normalize.css](https://github.com/necolas/normalize.css)
- [Hover](https://github.com/IanLunn/Hover)
- [hint.css](https://github.com/chinchang/hint.css)



Presentation 

- [impress.js](https://github.com/impress/impress.js)	倒鸭子式
- [reveal.js](https://github.com/hakimel/reveal.js)	HTML Presentation Framework
- [fullPage.js](https://github.com/alvarotrigo/fullPage.js)

 screenfull.js

tools  <br />  [Day.js](https://github.com/iamkun/dayjs)  <br />  [node-qrcode](https://github.com/soldair/node-qrcode)

[i18next](https://github.com/i18next/i18next)  <br />  [Clipboard.js](https://clipboardjs.com/)

- [lodash](https://github.com/lodash/lodash)	delivering modularity, performance & extras

- [Sortable](https://github.com/SortableJS/Sortable)	reorderable drag-and-drop lists
- [color](https://github.com/Qix-/color)	color conversion and manipulation

[sheetjs](https://github.com/SheetJS/sheetjs)  <br />  [flv.js](https://github.com/bilibili/flv.js)  <br />  [better-scroll](https://github.com/ustbhuangyi/better-scroll)  <br />  [cypress](https://github.com/cypress-io/cypress)  <br />  [marked](https://github.com/markedjs/marked)	A markdown parser and compiler  <br />  [jszip](https://github.com/Stuk/jszip)	creating, reading and editing .zip files


[awesome-javascript](https://github.com/sorrycc/awesome-javascript)  <br />  [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)  <br />  [awesome-electron](https://github.com/sindresorhus/awesome-electron)




# —— [TypeScript](https://github.com/Microsoft/TypeScript) ——
由微软开发的自由和开源的编程语言，JavaScript 的一个超集，提供了类型系统和对 ES6 的支持。

TypeScript 增加了代码的可读性和可维护性

- 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
- 可以在编译阶段就发现大部分错误，这总比在运行时候出错好
- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、代码重构等

TypeScript 非常包容

- TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
- 即使不显式的定义类型，也能够自动做出类型推论
- TypeScript 的类型系统是图灵完备的，可以定义从简单到复杂的几乎一切类型
- 即使 TypeScript 编译报错，也可以生成 JavaScript 文件
- 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取

安装
```javascript
npm install -g typescript
tsc test.ts  //将 TypeScript 转换为 JavaScript 代码
```
约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀

tsc [options] [file...]
```javascript
-h, --help	Print this message.
-w, --watch	Watch input files.
--pretty	Stylize errors and messages using color and context (experimental).
--all	Show all compiler options.
-v, --version	Print the compiler's version.
--init	Initializes a TypeScript project and creates a tsconfig.json file.
-p FILE OR DIRECTORY, --project FILE OR DIRECTORY	Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
-b, --build	Build one or more projects and their dependencies, if out of date
-t VERSION, --target VERSION	Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'.
-m KIND, --module	KIND	Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.
--lib	Specify library files to be included in the compilation.
--allowJs	Allow javascript files to be compiled.
--jsx KIND	Specify JSX code generation: 'preserve', 'react-native', or 'react'.
-d, --declaration	Generates corresponding '.d.ts' file.
```

**对象类型（Object types）**  <br />  空值（Void）  <br />  任意值（Any）	表示允许赋值为任意类型  <br />  undefined 和 null 是所有类型的子类型
```javascript
function alertName(): void {
    alert('Typescript');
}
let unusable: void = undefined;
let n: null = null;
let u: undefined;
let num: number = u;
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```
**类型推论（Type Inference）**
```javascript
let myFavoriteNumber = 'seven';
// 等价
let myFavoriteNumber: string = 'seven';
let myFavoriteNumber;
// 等价
let myFavoriteNumber: any;
```
**联合类型（Union Types）**：取值可以为多种类型中的一种
```javascript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```
当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时，只能访问此联合类型的所有类型里共有的属性或方法

**接口（Interfaces）**：定义对象的类型

- 确定属性和可选属性的类型都必须是任意属性的类型的子集
- 只能定义一个任意属性。(在任意属性中使用联合类型)
```javascript
interface Person {
    readonly id: number;    // 只读属性
    name: string;
    age?: number;    // 可选属性
    [propName: string]: any;    // 任意属性
}
// 约束了 tom 的形状必须和接口 Person 一致
let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```


**数组类型**
```javascript
let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```


**函数**

- 可选参数	用 ? 表示可选的参数，可选参数必须接在必需参数后面
- 参数默认值	TypeScript 会将添加了默认值的参数识别为可选参数
- 剩余参数
```javascript
// 函数声明（Function Declaration）
function sum(x: number, y?: number, z: number = 0, ...rest: any[]): number {
    return x + y;
}
// 函数表达式
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```


**重载**
```javascript
// 函数定义
function reverse(x: number): number;
function reverse(x: string): string;
// 函数实现
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
**类型断言（Type Assertion）**	指定一个值的类型

- 值 as 类型
- <类型>值
```javascript
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
```
用途

- 将一个联合类型断言为其中一个类型
- 将一个父类断言为更加具体的子类
- 将任何一个类型断言为 any
- 将 any 断言为一个具体的类型



**声明文件**

- [declare var](https://ts.xcatliu.com/basics/declaration-files.html#declare-var) 声明全局变量
- [declare function](https://ts.xcatliu.com/basics/declaration-files.html#declare-function) 声明全局方法
- [declare class](https://ts.xcatliu.com/basics/declaration-files.html#declare-class) 声明全局类
- [declare enum](https://ts.xcatliu.com/basics/declaration-files.html#declare-enum) 声明全局枚举类型
- [declare namespace](https://ts.xcatliu.com/basics/declaration-files.html#declare-namespace) 声明（含有子属性的）全局对象
- [interface 和 type](https://ts.xcatliu.com/basics/declaration-files.html#interface-%E5%92%8C-type) 声明全局类型
- [export](https://ts.xcatliu.com/basics/declaration-files.html#export) 导出变量
- [export namespace](https://ts.xcatliu.com/basics/declaration-files.html#export-namespace) 导出（含有子属性的）对象
- [export default](https://ts.xcatliu.com/basics/declaration-files.html#export-default) ES6 默认导出
- [export =](https://ts.xcatliu.com/basics/declaration-files.html#export-1) commonjs 导出模块
- [export as namespace](https://ts.xcatliu.com/basics/declaration-files.html#export-as-namespace) UMD 库声明全局变量
- [declare global](https://ts.xcatliu.com/basics/declaration-files.html#declare-global) 扩展全局变量
- [declare module](https://ts.xcatliu.com/basics/declaration-files.html#declare-module) 扩展模块
- [/// <reference />](https://ts.xcatliu.com/basics/declaration-files.html#san-xie-xian-zhi-ling) 三斜线指令

**类型别名**
```javascript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```
**字符串字面量类型**  <br />  约束取值只能是某几个字符串中的一个
```javascript
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'
```
**元组**
```javascript
let tom: [string, number] = ['Tom', 25];
```
**枚举（Enum）**
```javascript
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
```
**class**
```javascript
abstract class Animal {
  readonly name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
```
**interface**
```javascript
interface Alarm {
    alert(): void;
}
class Door {
}
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
```
**泛型（Generics）**
```javascript
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
// 泛型约束
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// 泛型接口
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
// 泛型默认参数
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
```
**声明合并**  <br />  定义了两个相同名字的函数、接口或类，会合并成一个类型  <br />  合并的属性的类型必须是唯一的
```javascript
interface Alarm {
    price: number;
    alert(s: string): string;
}
interface Alarm {
    weight: number;
    alert(s: string, n: number): string;
}
// 相当于
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}
```


[TypeScript 入门教程](https://ts.xcatliu.com/)
