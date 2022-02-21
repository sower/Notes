<h1>—— <a href="https://nodejs.org/en/docs/" target="_blank">Node.js</a> ——</h1>
<p>2009年，Ryan正式推出了基于JavaScript语言和V8引擎的开源Web服务器项目Node.js。</p>
<p><a href="https://nodejs.org/api/repl.html#repl_repl" target="_blank">REPL</a>(Read Eval Print Loop，交互式解释器)</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">node [options] [V8 options] [script.js | -e "script" | - ] [arguments]
node inspect [script.js | -e "script" | &lt;host&gt;:&lt;port&gt;] …

-c, --check                 syntax check script without executing
-i, --interactive
-p, --print "script"
-r, --require module

</code></pre>
<p>从命令行接收参数</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// app.js
process.argv.forEach((val, index) =&gt; {
  console.log(`${index}: ${val}`)
})
const args = process.argv.slice(2)
args[0]


// command line
node app.js joe
0: .\node.exe
1: .\app.js
2: joe

</code></pre>
<h1><a href="https://nodejs.org/api/" target="_blank">API</a></h1>
<ul>
<li>
<p>Assertion testing</p>
</li>
<li>
<p>Async_context</p>
</li>
<li>
<p>Async hooks</p>
</li>
<li>
<p>Buffer</p>
</li>
<li>
<p>C++ addons</p>
</li>
<li>
<p>C/C++ addons with Node-API</p>
</li>
<li>
<p>C++ embedder API</p>
</li>
<li>
<p>Child processes</p>
</li>
<li>
<p>Cluster</p>
</li>
<li>
<p>Command-line options</p>
</li>
<li>
<p>Console</p>
</li>
<li>
<p>Crypto</p>
</li>
<li>
<p>Debugger</p>
</li>
<li>
<p>Deprecated APIs</p>
</li>
<li>
<p>Diagnostics Channel</p>
</li>
<li>
<p>DNS</p>
</li>
<li>
<p>Domain</p>
</li>
<li>
<p>Errors</p>
</li>
<li>
<p>Events	事件触发器</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) =&gt; {
  console.log(a, b, this);
  // 打印: a b {}
});
myEmitter.emit('event', 'a', 'b');    // 触发事件

</code></pre>
<ul>
<li>File system</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const fs = require('fs')

fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) =&gt; {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

fs.writeFile('/Users/joe/test.txt', 'content', err =&gt; {
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

</code></pre>
<ul>
<li>
<p>Globals</p>
</li>
<li>
<p>HTTP</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 创建http服务
const http = require('http')

const port = 3000

const server = http.createServer((req, res) =&gt; {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n')
})

server.listen(port, () =&gt; {
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

const req = https.request(options, res =&gt; {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d =&gt; {
    process.stdout.write(d)
  })
})

req.on('error', error =&gt; {
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

const req = https.request(options, res =&gt; {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d =&gt; {
    process.stdout.write(d)
  })
})

req.write(data)
req.end()

</code></pre>
<ul>
<li>
<p>HTTP/2</p>
</li>
<li>
<p>HTTPS</p>
</li>
<li>
<p>Inspector</p>
</li>
<li>
<p>Internationalization</p>
</li>
<li>
<p>Modules: CommonJS modules</p>
</li>
<li>
<p>Modules: ECMAScript modules</p>
</li>
<li>
<p>Modules: module API</p>
</li>
<li>
<p>Modules: Packages</p>
</li>
<li>
<p>Net</p>
</li>
<li>
<p>OS</p>
</li>
<li>
<p>Path</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const notes = '/users/joe/notes.txt'

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt

</code></pre>
<ul>
<li>
<p>Performance hooks</p>
</li>
<li>
<p>Policies</p>
</li>
<li>
<p>Process</p>
</li>
<li>
<p>Punycode</p>
</li>
<li>
<p>Query strings</p>
</li>
<li>
<p>Readline</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name =&gt; {
  console.log(`Hi ${name}!`)
  readline.close()
})


</code></pre>
<ul>
<li>
<p>REPL</p>
</li>
<li>
<p>Report</p>
</li>
<li>
<p>Stream</p>
</li>
<li>
<p>String decoder</p>
</li>
<li>
<p>Timers</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">setImmediate(console.log, 1);
setTimeout(console.log, 1, 2);
/****************** microTask 分割线 ********************/
Promise.resolve(3).then(console.log); // microTask 分割线
/****************** 下次 event loop tick 分割线 ********************/
process.nextTick(console.log, 4);
/****************** 同步任务和异步任务的分割线 ********************/
console.log(5);
// 打印 5 4 3 2 1 或者 5 4 3 1 2

</code></pre>
<ul>
<li>
<p>TLS/SSL</p>
</li>
<li>
<p>Trace events</p>
</li>
<li>
<p>TTY</p>
</li>
<li>
<p>UDP/datagram</p>
</li>
<li>
<p>URL</p>
</li>
<li>
<p>Utilities</p>
</li>
<li>
<p>V8</p>
</li>
<li>
<p>VM</p>
</li>
<li>
<p>WASI</p>
</li>
<li>
<p>Web Crypto API</p>
</li>
<li>
<p>Web Streams API</p>
</li>
<li>
<p>Worker threads</p>
</li>
<li>
<p>Zlib</p>
</li>
</ul>
<p><a href="https://www.yuque.com/sunluyong/node" target="_blank">极简 Node.js 入门教程</a></p>
<h1><a href="https://docs.npmjs.com/" target="_blank">npm</a></h1>
<p>npm（Node Package Manager）是Node.js默认的、用JavaScript编写的软件包管理系统。</p>
<p><strong><a href="https://docs.npmjs.com/cli/v7/commands" target="_blank">CLI</a></strong></p>
<ul>
<li>
<p>npm cache</p>
</li>
<li>
<p>npm cache clean</p>
</li>
<li>
<p>aliases: npm cache clear, npm cache rm</p>
</li>
<li>
<p>npm ci	Install a project with a clean slate</p>
</li>
<li>
<p>npm config	Manage the npm configuration files</p>
</li>
<li>
<p>npm config set = [= ...]</p>
</li>
<li>
<p>npm config get [ [ ...]]</p>
</li>
<li>
<p>npm config delete  [ ...]</p>
</li>
<li>
<p>npm config list [--json]</p>
</li>
<li>
<p>npm config edit</p>
</li>
<li>
<p>npm set = [= ...]</p>
</li>
<li>
<p>npm get [ [ ...]]</p>
</li>
<li>
<p>alias: c</p>
</li>
<li>
<p>npm init	Create a package.json file</p>
</li>
<li>
<p>npm install	Install a package</p>
</li>
<li>
<p>aliases: npm i, npm add</p>
</li>
<li>
<p>[-P|--save-prod|-D|--save-dev|-O|--save-optional|--save-peer] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]</p>
</li>
<li>
<p>-P, --save-prod: Package will appear in your dependencies. default</p>
</li>
<li>
<p>-D, --save-dev: Package will appear in your devDependencies.</p>
</li>
<li>
<p>npm docs	Docs for a package in a web browser maybe</p>
</li>
<li>
<p>npm install-ci-test	Install a project with a clean slate and run tests</p>
</li>
<li>
<p>npm install-test	Install package(s) and run tests</p>
</li>
<li>
<p>npm link	Symlink a package folder</p>
</li>
<li>
<p>npm ls	List installed packages</p>
</li>
<li>
<p>--depth=0</p>
</li>
<li>
<p>npm search	Search for packages</p>
</li>
<li>
<p>[-l|--long] [--json] [--parseable] [--no-description] [search terms ...]</p>
</li>
<li>
<p>aliases: s, se, find</p>
</li>
<li>
<p>npm run-script	Run arbitrary package scripts</p>
</li>
<li>
<p>npm run-script  [--if-present] [--silent] [-- ]</p>
</li>
<li>
<p>npm test	Test a package</p>
</li>
<li>
<p>npm uninstall	Remove a package</p>
</li>
<li>
<p>[&lt;@scope&gt;/][@]... [-S|--save|--no-save]</p>
</li>
<li>
<p>aliases: remove, rm, r, un, unlink</p>
</li>
<li>
<p>npm view	View registry info</p>
</li>
<li>
<p>npm view [&lt;@scope&gt;/][@] [[.]...]<br />
aliases: info, show, v</p>
</li>
<li>
<p>npx	Run a command from an npm package</p>
</li>
<li>
<p>npm help 		npm  -h</p>
</li>
</ul>
<p>淘宝镜像</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">npm install -g cnpm --registry=https://registry.npm.taobao.org

</code></pre>
<p><a href="https://docs.npmjs.com/cli/v7/configuring-npm" target="_blank">Configuring npm</a></p>
<ul>
<li>
<p>.npmrc	The npm config files</p>
</li>
<li>
<p>npm-shrinkwrap.json	A publishable lockfile</p>
</li>
<li>
<p>package.json	Specifics of npm's package.json handling</p>
</li>
</ul>
<pre data-syntax="json"><code class="lang-json hljs raw">{
  "name": "navigation",
  "version": "0.1.0",
  "private": true,
  // 支持ES6 模块使用
  "type": "module",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "ant-design-vue": "^2.2.1",
    "axios": "^0.22.0",
    "vue": "^3.0.0",
    "vue-i18n": "^9.1.7",
    "vue-router": "^4.0.0-0",
    "vuex": "^4.0.0-0"
  },
  "devDependencies": {
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0"
  }
}

</code></pre>
<ul>
<li>
<p>package-lock.json	A manifestation of the manifest</p>
</li>
<li>
<p>dependencies 和 devDependencies ：模块的依赖和开发环境依赖</p>
</li>
<li>
<p>peerDependencies	模块需要与宿主模块共享依赖（可能会用到某个模块，但不安装）</p>
</li>
<li>
<p>x.y.z  使用精确版本号</p>
</li>
<li>
<ul>
<li>
<pre><code>任意版本，第一次安装会使用模块最新版本
</code></pre>
</li>
</ul>
</li>
<li>
<p>^x.y.z	x 位锁死，y、z 位使用最新版本</p>
</li>
<li>
<p>~x.y.z	x、y 锁定，z 位使用最新版本</p>
</li>
<li>
<p>main 	标识模块的默认入口文件</p>
</li>
</ul>
<h2><a href="https://github.com/npm/npx" target="_blank">npx</a></h2>
<p>Execute binaries from npm packages.</p>
<p>npx [options] [@version] [command-arg]...</p>
<p>npx [options] [-p|--package ]...  [command-arg]...</p>
<p>npx [options] -c ''</p>
<p>npx --shell-auto-fallback [shell]</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">Options:
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

</code></pre>
<h1>Module</h1>
<p>暴露模块	module.exports = variable;</p>
<p>引入模块	var foo = require('other_module');</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) =&gt; {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () =&gt; {
    console.log(`Server running at http://${hostname}:${port}/`);
});

</code></pre>
<p>.mjs文件总是以 ES6 模块加载</p>
<p>.cjs文件总是以 CommonJS 模块加载</p>
<h1><a href="https://github.com/axios/axios" target="_blank">Axios</a></h1>
<p>一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。</p>
<p>在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。</p>
<pre data-syntax="html"><code class="lang-html hljs raw">使用 cdn:
&lt;script src="https://unpkg.com/axios/dist/axios.min.js"&gt;&lt;/script&gt;
或
&lt;script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"&gt;&lt;/script&gt;

</code></pre>
<p>示例</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const axios = require('axios');

axios.get('/user', { params: { ID: 12345 } })
    .then(response =&gt; console.log(response))
    .catch(error =&gt; console.log(error))
    .then(function () {
        // always executed
    });

//  use async/await
async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

</code></pre>
<p><strong><a href="https://axios-http.com/zh/docs/api_intro" target="_blank">Axios API</a></strong></p>
<ul>
<li>
<p>axios(config)</p>
</li>
<li>
<p>axios(url[, config])</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function getUserAccount() {
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

</code></pre>
<ul>
<li>
<p>axios.request(config)</p>
</li>
<li>
<p>axios.get(url[, config])</p>
</li>
<li>
<p>axios.delete(url[, config])</p>
</li>
<li>
<p>axios.head(url[, config])</p>
</li>
<li>
<p>axios.options(url[, config])</p>
</li>
<li>
<p>axios.post(url[, data[, config]])</p>
</li>
<li>
<p>axios.put(url[, data[, config]])</p>
</li>
<li>
<p>axios.patch(url[, data[, config]])</p>
</li>
</ul>
<p><strong>axios.create([config])</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

</code></pre>
<p><a href="https://axios-http.com/zh/docs/req_config" target="_blank">请求配置</a></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">{
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
  data: 'Country=Brasil&amp;City=Belo Horizonte',

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
    return status &gt;= 200 &amp;&amp; status &lt; 300; // 默认值
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

</code></pre>
<p><a href="https://axios-http.com/zh/docs/res_schema" target="_blank">响应结构</a></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">{
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

</code></pre>
<p><a href="https://axios-http.com/zh/docs/config_defaults" target="_blank">默认配置</a></p>
<ul>
<li>全局 axios 默认值</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

</code></pre>
<ul>
<li>自定义实例默认值</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 创建实例时配置默认值
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 创建实例后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

</code></pre>
<p><a href="https://axios-http.com/zh/docs/interceptors" target="_blank">拦截器</a></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 添加请求拦截器
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

</code></pre>
<p><a href="https://axios-http.com/zh/docs/handling_errors" target="_blank">错误处理</a></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">axios.get('/user/12345')
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

</code></pre>
<p><a href="https://axios-http.com/zh/docs/cancellation" target="_blank">取消请求</a></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const CancelToken = axios.CancelToken;
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

</code></pre>
<p><a href="https://axios-http.com/zh/docs/urlencoded" target="_blank">请求体编码</a></p>
<p>Jsonp 请求</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">axios.jsonp = (url) =&gt; {
    if(!url){
        console.error('请传入一个url参数')
        return;
    }
    return new Promise((resolve,reject) =&gt; {
        window.jsonCallBack =(result) =&gt; {
            resolve(result)
        }
        var JSONP=document.createElement("script");
        JSONP.type="text/javascript";
        JSONP.src=`${url}&amp;callback=jsonCallBack`;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() =&gt; {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        },500)
    })
} 

axios.jsonp('http://xxxxx:8080/set_session_jsonp?callback=demo')
    .then(response =&gt; console.log(response))
    .catch(error =&gt; console.log(error));

</code></pre>
<h1>Koa</h1>
<p>app.use(middleware)：注册中间件</p>
<p>app.listen(port)</p>
<p>app.context：全应用共享的环境信息</p>
<ul>
<li>
<p>ctx.request： koa 封装的 request 对象，中间件应该尽量使用</p>
</li>
<li>
<p>ctx.req：Node.js 原生的 request 对象</p>
</li>
<li>
<p>ctx.response：koa 封装的 response 对象，中间件应该尽量使用</p>
</li>
<li>
<p>ctx.res：Node.js 原生的 response 对象</p>
</li>
<li>
<p>ctx.state：koa 推荐的命名空间，用于通过中间件传递信息到前端视图</p>
</li>
<li>
<p>ctx.app：对应用实例 app 的引用</p>
</li>
<li>
<p>ctx.cookies：cookie 操作对象</p>
</li>
<li>
<p>ctx.throw：通过 http status 抛出错误，让 koa 可以正确处理</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx =&gt; {
  ctx.body = 'Hello Koa';
});

app.use(async (ctx, next) =&gt; {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.listen(3000);

</code></pre>
<h1><a href="https://github.com/vercel/serve" target="_blank">serve</a></h1>
<p>serve -s dist</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) =&gt; {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
})

server.listen(3000, () =&gt; {
  console.log('Running at http://localhost:3000');
});


</code></pre>
<h1><a href="https://webpack.js.org/" target="_blank">Webpack</a></h1>
<p>模块打包器。将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，也能转换(transform)、打包(bundle)或包裹(package)任何资源(resource or asset)。</p>
<p>chunk</p>
<p>bundle</p>
<p>配置</p>
<p><strong>入口[entry]</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">module.exports = {
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

</code></pre>
<p><strong>出口[output]</strong></p>
<h1><a href="https://nodemailer.com/" target="_blank">Nodemailer</a></h1>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">"use strict";
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
    from: '"Fred Foo 👻" &lt;foo@example.com&gt;', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "&lt;b&gt;Hello world?&lt;/b&gt;", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: &lt;b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com&gt;

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);


</code></pre>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let message = {
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
    html: 'Embedded image: &lt;img src="cid:unique@nodemailer.com"/&gt;',
    attachments: [{
        filename: 'image.png',
        path: '/path/to/file',
        cid: 'unique@nodemailer.com' //same cid value as in the html img src
    }]
}

</code></pre>
<h1><a href="https://github.com/puppeteer/puppeteer" target="_blank">puppeteer</a></h1>
<p><a href="https://github.com/transitive-bullshit/awesome-puppeteer" target="_blank">awesome-puppeteer</a></p>
<p>提供了一个高级 API 来通过 <a href="http://puppeteerjs.com/(https://chromedevtools.github.io/devtools-protocol/)" target="_blank">DevTools</a> 协议控制 Chromium 或 Chrome。默认以 headless 模式运行</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const puppeteer = require('puppeteer');

(async () =&gt; {
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
(async () =&gt; {
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
  const dimensions = await page.evaluate(() =&gt; {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });

    console.log('Dimensions:', dimensions);
  await browser.close();
})();

</code></pre>
<p><strong>puppeteer.launch([options])</strong></p>
<ul>
<li>
<p>options </p>
</li>
<li>
<p>ignoreHTTPSErrors  是否在导航期间忽略 HTTPS 错误. 默认是 false。</p>
</li>
<li>
<p>headless  是否以 无头模式 运行浏览器。默认是 true，除非 devtools 选项是 true。</p>
</li>
<li>
<p>executablePath  可运行 Chromium 或 Chrome 可执行文件的路径，而不是绑定的 Chromium。如果 executablePath 是一个相对路径，那么他相对于 当前工作路径 解析。</p>
</li>
<li>
<p>slowMo  将 Puppeteer 操作减少指定的毫秒数。这样你就可以看清发生了什么，这很有用。</p>
</li>
<li>
<p>defaultViewport &lt;?Object&gt; 为每个页面设置一个默认视口大小。默认是 800x600。如果为 null 的话就禁用视图口。</p>
</li>
<li>
<p>width  页面宽度像素。</p>
</li>
<li>
<p>height  页面高度像素。</p>
</li>
<li>
<p>deviceScaleFactor  设置设备的缩放（可以认为是 dpr）。默认是 1。</p>
</li>
<li>
<p>isMobile  是否在页面中设置了 meta viewport 标签。默认是 false。</p>
</li>
<li>
<p>hasTouch 指定viewport是否支持触摸事件。默认是 false。</p>
</li>
<li>
<p>isLandscape  指定视口是否处于横向模式。默认是 false。</p>
</li>
<li>
<p>args &lt;Array&gt; 传递给浏览器实例的其他参数。 这些参数可以参考 这里。</p>
</li>
<li>
<p>ignoreDefaultArgs &lt;(boolean|&lt;Array&gt;)&gt; 如果是 true，那就不要使用 puppeteer.defaultArgs()。 如果给出了数组，则过滤掉给定的默认参数。这个选项请谨慎使用。默认为 false。</p>
</li>
<li>
<p>handleSIGINT  Ctrl-C 关闭浏览器进程。默认是 true。</p>
</li>
<li>
<p>handleSIGTERM  关闭 SIGTERM 上的浏览器进程。默认是 true。</p>
</li>
<li>
<p>handleSIGHUP  关闭 SIGHUP 上的浏览器进程。默认是 true.</p>
</li>
<li>
<p>timeout  等待浏览器实例启动的最长时间（以毫秒为单位）。默认是 30000 (30 秒). 通过 0 来禁用超时。</p>
</li>
<li>
<p>dumpio  是否将浏览器进程标准输出和标准错误输入到 process.stdout 和 process.stderr 中。默认是 false。</p>
</li>
<li>
<p>userDataDir  用户数据目录 路径。</p>
</li>
<li>
<p>env </p>
</li>
<li>
<p>devtools  是否为每个选项卡自动打开DevTools面板。如果这个选项是 true，headless 选项将会设置成 false。</p>
</li>
<li>
<p>pipe  通过管道而不是WebSocket连接到浏览器。默认是 false。</p>
</li>
<li>
<p>returns: &lt;Promise&gt; 浏览器实例支持 Promise。</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-puppeteer" target="_blank">class: Puppeteer</a></strong></p>
<ul>
<li>
<p>puppeteer.clearCustomQueryHandlers()</p>
</li>
<li>
<p>puppeteer.connect(options)</p>
</li>
<li>
<p>puppeteer.createBrowserFetcher([options])</p>
</li>
<li>
<p>puppeteer.customQueryHandlerNames()</p>
</li>
<li>
<p>puppeteer.defaultArgs([options])</p>
</li>
<li>
<p>puppeteer.devices</p>
</li>
<li>
<p>puppeteer.errors</p>
</li>
<li>
<p>puppeteer.executablePath()</p>
</li>
<li>
<p>puppeteer.launch([options])</p>
</li>
<li>
<p>puppeteer.networkConditions</p>
</li>
<li>
<p>puppeteer.product</p>
</li>
<li>
<p>puppeteer.registerCustomQueryHandler(name, queryHandler)</p>
</li>
<li>
<p>puppeteer.unregisterCustomQueryHandler(name)</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-browserfetcher" target="_blank">class: BrowserFetcher</a></strong></p>
<ul>
<li>
<p>browserFetcher.canDownload(revision)</p>
</li>
<li>
<p>browserFetcher.download(revision[, progressCallback])</p>
</li>
<li>
<p>browserFetcher.host()</p>
</li>
<li>
<p>browserFetcher.localRevisions()</p>
</li>
<li>
<p>browserFetcher.platform()</p>
</li>
<li>
<p>browserFetcher.product()</p>
</li>
<li>
<p>browserFetcher.remove(revision)</p>
</li>
<li>
<p>browserFetcher.revisionInfo(revision)</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-browser" target="_blank">class: Browser</a></strong></p>
<ul>
<li>
<p>event: 'disconnected'</p>
</li>
<li>
<p>event: 'targetchanged'</p>
</li>
<li>
<p>event: 'targetcreated'</p>
</li>
<li>
<p>event: 'targetdestroyed'</p>
</li>
<li>
<p>browser.browserContexts()</p>
</li>
<li>
<p>browser.close()</p>
</li>
<li>
<p>browser.createIncognitoBrowserContext()</p>
</li>
<li>
<p>browser.defaultBrowserContext()</p>
</li>
<li>
<p>browser.disconnect()</p>
</li>
<li>
<p>browser.isConnected()</p>
</li>
<li>
<p>browser.newPage()</p>
</li>
<li>
<p>browser.pages()</p>
</li>
<li>
<p>browser.process()</p>
</li>
<li>
<p>browser.target()</p>
</li>
<li>
<p>browser.targets()</p>
</li>
<li>
<p>browser.userAgent()</p>
</li>
<li>
<p>browser.version()</p>
</li>
<li>
<p>browser.waitForTarget(predicate[, options])</p>
</li>
<li>
<p>browser.wsEndpoint()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-browsercontext" target="_blank">class: BrowserContext</a></strong></p>
<ul>
<li>
<p>event: 'targetchanged'</p>
</li>
<li>
<p>event: 'targetcreated'</p>
</li>
<li>
<p>event: 'targetdestroyed'</p>
</li>
<li>
<p>browserContext.browser()</p>
</li>
<li>
<p>browserContext.clearPermissionOverrides()</p>
</li>
<li>
<p>browserContext.close()</p>
</li>
<li>
<p>browserContext.isIncognito()</p>
</li>
<li>
<p>browserContext.newPage()</p>
</li>
<li>
<p>browserContext.overridePermissions(origin, permissions)</p>
</li>
<li>
<p>browserContext.pages()</p>
</li>
<li>
<p>browserContext.targets()</p>
</li>
<li>
<p>browserContext.waitForTarget(predicate[, options])</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-page" target="_blank">class: Page</a></strong></p>
<ul>
<li>
<p>event: 'close'</p>
</li>
<li>
<p>event: 'console'</p>
</li>
<li>
<p>event: 'dialog'</p>
</li>
<li>
<p>event: 'domcontentloaded'</p>
</li>
<li>
<p>event: 'error'</p>
</li>
<li>
<p>event: 'frameattached'</p>
</li>
<li>
<p>event: 'framedetached'</p>
</li>
<li>
<p>event: 'framenavigated'</p>
</li>
<li>
<p>event: 'load'</p>
</li>
<li>
<p>event: 'metrics'</p>
</li>
<li>
<p>event: 'pageerror'</p>
</li>
<li>
<p>event: 'popup'</p>
</li>
<li>
<p>event: 'request'</p>
</li>
<li>
<p>event: 'requestfailed'</p>
</li>
<li>
<p>event: 'requestfinished'</p>
</li>
<li>
<p>event: 'response'</p>
</li>
<li>
<p>event: 'workercreated'</p>
</li>
<li>
<p>event: 'workerdestroyed'</p>
</li>
<li>
<p>page.$(selector)</p>
</li>
<li>
<p>page.$$(selector)</p>
</li>
<li>
<p>page.$$eval(selector, pageFunction[, ...args])</p>
</li>
<li>
<p>page.$eval(selector, pageFunction[, ...args])</p>
</li>
<li>
<p>page.$x(expression)</p>
</li>
<li>
<p>page.accessibility</p>
</li>
<li>
<p>page.addScriptTag(options)</p>
</li>
<li>
<p>page.addStyleTag(options)</p>
</li>
<li>
<p>page.authenticate(credentials)</p>
</li>
<li>
<p>page.bringToFront()</p>
</li>
<li>
<p>page.browser()</p>
</li>
<li>
<p>page.browserContext()</p>
</li>
<li>
<p>page.click(selector[, options])</p>
</li>
<li>
<p>page.close([options])</p>
</li>
<li>
<p>page.content()</p>
</li>
<li>
<p>page.cookies([...urls])</p>
</li>
<li>
<p>page.coverage</p>
</li>
<li>
<p>page.deleteCookie(...cookies)</p>
</li>
<li>
<p>page.emulate(options)</p>
</li>
<li>
<p>page.emulateIdleState(overrides)</p>
</li>
<li>
<p>page.emulateMediaFeatures(features)</p>
</li>
<li>
<p>page.emulateMediaType(type)</p>
</li>
<li>
<p>page.emulateNetworkConditions(networkConditions)</p>
</li>
<li>
<p>page.emulateTimezone(timezoneId)</p>
</li>
<li>
<p>page.emulateVisionDeficiency(type)</p>
</li>
<li>
<p>page.evaluate(pageFunction[, ...args])</p>
</li>
<li>
<p>page.evaluateHandle(pageFunction[, ...args])</p>
</li>
<li>
<p>page.evaluateOnNewDocument(pageFunction[, ...args])</p>
</li>
<li>
<p>page.exposeFunction(name, puppeteerFunction)</p>
</li>
<li>
<p>page.focus(selector)</p>
</li>
<li>
<p>page.frames()</p>
</li>
<li>
<p>page.goBack([options])</p>
</li>
<li>
<p>page.goForward([options])</p>
</li>
<li>
<p>page.goto(url[, options])</p>
</li>
<li>
<p>page.hover(selector)</p>
</li>
<li>
<p>page.isClosed()</p>
</li>
<li>
<p>page.isJavaScriptEnabled()</p>
</li>
<li>
<p>page.keyboard</p>
</li>
<li>
<p>page.mainFrame()</p>
</li>
<li>
<p>page.metrics()</p>
</li>
<li>
<p>page.mouse</p>
</li>
<li>
<p>page.pdf([options])</p>
</li>
<li>
<p>page.queryObjects(prototypeHandle)</p>
</li>
<li>
<p>page.reload([options])</p>
</li>
<li>
<p>page.screenshot([options])</p>
</li>
<li>
<p>page.select(selector, ...values)</p>
</li>
<li>
<p>page.setBypassCSP(enabled)</p>
</li>
<li>
<p>page.setCacheEnabled([enabled])</p>
</li>
<li>
<p>page.setContent(html[, options])</p>
</li>
<li>
<p>page.setCookie(...cookies)</p>
</li>
<li>
<p>page.setDefaultNavigationTimeout(timeout)</p>
</li>
<li>
<p>page.setDefaultTimeout(timeout)</p>
</li>
<li>
<p>page.setExtraHTTPHeaders(headers)</p>
</li>
<li>
<p>page.setGeolocation(options)</p>
</li>
<li>
<p>page.setJavaScriptEnabled(enabled)</p>
</li>
<li>
<p>page.setOfflineMode(enabled)</p>
</li>
<li>
<p>page.setRequestInterception(value)</p>
</li>
<li>
<p>page.setUserAgent(userAgent)</p>
</li>
<li>
<p>page.setViewport(viewport)</p>
</li>
<li>
<p>page.tap(selector)</p>
</li>
<li>
<p>page.target()</p>
</li>
<li>
<p>page.title()</p>
</li>
<li>
<p>page.touchscreen</p>
</li>
<li>
<p>page.tracing</p>
</li>
<li>
<p>page.type(selector, text[, options])</p>
</li>
<li>
<p>page.url()</p>
</li>
<li>
<p>page.viewport()</p>
</li>
<li>
<p>page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])</p>
</li>
<li>
<p>page.waitForFileChooser([options])</p>
</li>
<li>
<p>page.waitForFunction(pageFunction[, options[, ...args]])</p>
</li>
<li>
<p>page.waitForNavigation([options])</p>
</li>
<li>
<p>page.waitForRequest(urlOrPredicate[, options])</p>
</li>
<li>
<p>page.waitForResponse(urlOrPredicate[, options])</p>
</li>
<li>
<p>page.waitForSelector(selector[, options])</p>
</li>
<li>
<p>page.waitForTimeout(milliseconds)</p>
</li>
<li>
<p>page.waitForXPath(xpath[, options])</p>
</li>
<li>
<p>page.workers()</p>
</li>
<li>
<p>GeolocationOptions</p>
</li>
<li>
<p>WaitTimeoutOptions</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-webworker" target="_blank">class: WebWorker</a></strong></p>
<ul>
<li>
<p>webWorker.evaluate(pageFunction[, ...args])</p>
</li>
<li>
<p>webWorker.evaluateHandle(pageFunction[, ...args])</p>
</li>
<li>
<p>webWorker.executionContext()</p>
</li>
<li>
<p>webWorker.url()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-accessibility" target="_blank">class: Accessibility</a></strong></p>
<ul>
<li>accessibility.snapshot([options])</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-keyboard" target="_blank">class: Keyboard</a></strong></p>
<ul>
<li>
<p>keyboard.down(key[, options])</p>
</li>
<li>
<p>keyboard.press(key[, options])</p>
</li>
<li>
<p>keyboard.sendCharacter(char)</p>
</li>
<li>
<p>keyboard.type(text[, options])</p>
</li>
<li>
<p>keyboard.up(key)</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-mouse" target="_blank">class: Mouse</a></strong></p>
<ul>
<li>
<p>mouse.click(x, y[, options])</p>
</li>
<li>
<p>mouse.down([options])</p>
</li>
<li>
<p>mouse.move(x, y[, options])</p>
</li>
<li>
<p>mouse.up([options])</p>
</li>
<li>
<p>mouse.wheel([options])</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-touchscreen" target="_blank">class: Touchscreen</a></strong></p>
<ul>
<li>touchscreen.tap(x, y)</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-tracing" target="_blank">class: Tracing</a></strong></p>
<ul>
<li>
<p>tracing.start([options])</p>
</li>
<li>
<p>tracing.stop()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-filechooser" target="_blank">class: FileChooser</a></strong></p>
<ul>
<li>
<p>fileChooser.accept(filePaths)</p>
</li>
<li>
<p>fileChooser.cancel()</p>
</li>
<li>
<p>fileChooser.isMultiple()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-dialog" target="_blank">class: Dialog</a></strong></p>
<ul>
<li>
<p>dialog.accept([promptText])</p>
</li>
<li>
<p>dialog.defaultValue()</p>
</li>
<li>
<p>dialog.dismiss()</p>
</li>
<li>
<p>dialog.message()</p>
</li>
<li>
<p>dialog.type()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-consolemessage" target="_blank">class: ConsoleMessage</a></strong></p>
<ul>
<li>
<p>consoleMessage.args()</p>
</li>
<li>
<p>consoleMessage.location()</p>
</li>
<li>
<p>consoleMessage.stackTrace()</p>
</li>
<li>
<p>consoleMessage.text()</p>
</li>
<li>
<p>consoleMessage.type()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-frame" target="_blank">class: Frame</a></strong></p>
<ul>
<li>
<p>frame.$(selector)</p>
</li>
<li>
<p>frame.$$(selector)</p>
</li>
<li>
<p>frame.$$eval(selector, pageFunction[, ...args])</p>
</li>
<li>
<p>frame.$eval(selector, pageFunction[, ...args])</p>
</li>
<li>
<p>frame.$x(expression)</p>
</li>
<li>
<p>frame.addScriptTag(options)</p>
</li>
<li>
<p>frame.addStyleTag(options)</p>
</li>
<li>
<p>frame.childFrames()</p>
</li>
<li>
<p>frame.click(selector[, options])</p>
</li>
<li>
<p>frame.content()</p>
</li>
<li>
<p>frame.evaluate(pageFunction[, ...args])</p>
</li>
<li>
<p>frame.evaluateHandle(pageFunction[, ...args])</p>
</li>
<li>
<p>frame.executionContext()</p>
</li>
<li>
<p>frame.focus(selector)</p>
</li>
<li>
<p>frame.goto(url[, options])</p>
</li>
<li>
<p>frame.hover(selector)</p>
</li>
<li>
<p>frame.isDetached()</p>
</li>
<li>
<p>frame.name()</p>
</li>
<li>
<p>frame.parentFrame()</p>
</li>
<li>
<p>frame.select(selector, ...values)</p>
</li>
<li>
<p>frame.setContent(html[, options])</p>
</li>
<li>
<p>frame.tap(selector)</p>
</li>
<li>
<p>frame.title()</p>
</li>
<li>
<p>frame.type(selector, text[, options])</p>
</li>
<li>
<p>frame.url()</p>
</li>
<li>
<p>frame.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])</p>
</li>
<li>
<p>frame.waitForFunction(pageFunction[, options[, ...args]])</p>
</li>
<li>
<p>frame.waitForNavigation([options])</p>
</li>
<li>
<p>frame.waitForSelector(selector[, options])</p>
</li>
<li>
<p>frame.waitForTimeout(milliseconds)</p>
</li>
<li>
<p>frame.waitForXPath(xpath[, options])</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-executioncontext" target="_blank">class: ExecutionContext</a></strong></p>
<ul>
<li>
<p>executionContext.evaluate(pageFunction[, ...args])</p>
</li>
<li>
<p>executionContext.evaluateHandle(pageFunction[, ...args])</p>
</li>
<li>
<p>executionContext.frame()</p>
</li>
<li>
<p>executionContext.queryObjects(prototypeHandle)</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-jshandle" target="_blank">class: JSHandle</a></strong></p>
<ul>
<li>
<p>jsHandle.asElement()</p>
</li>
<li>
<p>jsHandle.dispose()</p>
</li>
<li>
<p>jsHandle.evaluate(pageFunction[, ...args])</p>
</li>
<li>
<p>jsHandle.evaluateHandle(pageFunction[, ...args])</p>
</li>
<li>
<p>jsHandle.executionContext()</p>
</li>
<li>
<p>jsHandle.getProperties()</p>
</li>
<li>
<p>jsHandle.getProperty(propertyName)</p>
</li>
<li>
<p>jsHandle.jsonValue()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-elementhandle" target="_blank">class: ElementHandle</a></strong></p>
<ul>
<li>
<p>elementHandle.$(selector)</p>
</li>
<li>
<p>elementHandle.$$(selector)</p>
</li>
<li>
<p>elementHandle.$$eval(selector, pageFunction[, ...args])</p>
</li>
<li>
<p>elementHandle.$eval(selector, pageFunction[, ...args])</p>
</li>
<li>
<p>elementHandle.$x(expression)</p>
</li>
<li>
<p>elementHandle.asElement()</p>
</li>
<li>
<p>elementHandle.boundingBox()</p>
</li>
<li>
<p>elementHandle.boxModel()</p>
</li>
<li>
<p>elementHandle.click([options])</p>
</li>
<li>
<p>elementHandle.contentFrame()</p>
</li>
<li>
<p>elementHandle.dispose()</p>
</li>
<li>
<p>elementHandle.evaluate(pageFunction[, ...args])</p>
</li>
<li>
<p>elementHandle.evaluateHandle(pageFunction[, ...args])</p>
</li>
<li>
<p>elementHandle.executionContext()</p>
</li>
<li>
<p>elementHandle.focus()</p>
</li>
<li>
<p>elementHandle.getProperties()</p>
</li>
<li>
<p>elementHandle.getProperty(propertyName)</p>
</li>
<li>
<p>elementHandle.hover()</p>
</li>
<li>
<p>elementHandle.isIntersectingViewport()</p>
</li>
<li>
<p>elementHandle.jsonValue()</p>
</li>
<li>
<p>elementHandle.press(key[, options])</p>
</li>
<li>
<p>elementHandle.screenshot([options])</p>
</li>
<li>
<p>elementHandle.select(...values)</p>
</li>
<li>
<p>elementHandle.tap()</p>
</li>
<li>
<p>elementHandle.toString()</p>
</li>
<li>
<p>elementHandle.type(text[, options])</p>
</li>
<li>
<p>elementHandle.uploadFile(...filePaths)</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-httprequest" target="_blank">class: HTTPRequest</a></strong></p>
<ul>
<li>
<p>httpRequest.abort([errorCode])</p>
</li>
<li>
<p>httpRequest.continue([overrides])</p>
</li>
<li>
<p>httpRequest.failure()</p>
</li>
<li>
<p>httpRequest.frame()</p>
</li>
<li>
<p>httpRequest.headers()</p>
</li>
<li>
<p>httpRequest.isNavigationRequest()</p>
</li>
<li>
<p>httpRequest.method()</p>
</li>
<li>
<p>httpRequest.postData()</p>
</li>
<li>
<p>httpRequest.redirectChain()</p>
</li>
<li>
<p>httpRequest.resourceType()</p>
</li>
<li>
<p>httpRequest.respond(response)</p>
</li>
<li>
<p>httpRequest.response()</p>
</li>
<li>
<p>httpRequest.url()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-httpresponse" target="_blank">class: HTTPResponse</a></strong></p>
<ul>
<li>
<p>httpResponse.buffer()</p>
</li>
<li>
<p>httpResponse.frame()</p>
</li>
<li>
<p>httpResponse.fromCache()</p>
</li>
<li>
<p>httpResponse.fromServiceWorker()</p>
</li>
<li>
<p>httpResponse.headers()</p>
</li>
<li>
<p>httpResponse.json()</p>
</li>
<li>
<p>httpResponse.ok()</p>
</li>
<li>
<p>httpResponse.remoteAddress()</p>
</li>
<li>
<p>httpResponse.request()</p>
</li>
<li>
<p>httpResponse.securityDetails()</p>
</li>
<li>
<p>httpResponse.status()</p>
</li>
<li>
<p>httpResponse.statusText()</p>
</li>
<li>
<p>httpResponse.text()</p>
</li>
<li>
<p>httpResponse.url()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-securitydetails" target="_blank">class: SecurityDetails</a></strong></p>
<ul>
<li>
<p>securityDetails.issuer()</p>
</li>
<li>
<p>securityDetails.protocol()</p>
</li>
<li>
<p>securityDetails.subjectAlternativeNames()</p>
</li>
<li>
<p>securityDetails.subjectName()</p>
</li>
<li>
<p>securityDetails.validFrom()</p>
</li>
<li>
<p>securityDetails.validTo()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-target" target="_blank">class: Target</a></strong></p>
<ul>
<li>
<p>target.browser()</p>
</li>
<li>
<p>target.browserContext()</p>
</li>
<li>
<p>target.createCDPSession()</p>
</li>
<li>
<p>target.opener()</p>
</li>
<li>
<p>target.page()</p>
</li>
<li>
<p>target.type()</p>
</li>
<li>
<p>target.url()</p>
</li>
<li>
<p>target.worker()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-cdpsession" target="_blank">class: CDPSession</a></strong></p>
<ul>
<li>
<p>cdpSession.detach()</p>
</li>
<li>
<p>cdpSession.send(method[, ...paramArgs])</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-coverage" target="_blank">class: Coverage</a></strong></p>
<ul>
<li>
<p>coverage.startCSSCoverage([options])</p>
</li>
<li>
<p>coverage.startJSCoverage([options])</p>
</li>
<li>
<p>coverage.stopCSSCoverage()</p>
</li>
<li>
<p>coverage.stopJSCoverage()</p>
</li>
</ul>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-timeouterror" target="_blank">class: TimeoutError</a></strong></p>
<p><strong><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#class-eventemitter" target="_blank">class: EventEmitter</a></strong></p>
<p><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteraddlistenerevent-handler" target="_blank">eventEmitter.addListener(event, handler)</a></p>
<p><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteremitevent-eventdata" target="_blank">eventEmitter.emit(event, [eventData])</a></p>
<p><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitterlistenercountevent" target="_blank">eventEmitter.listenerCount(event)</a></p>
<p><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteroffevent-handler" target="_blank">eventEmitter.off(event, handler)</a></p>
<p><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteronevent-handler" target="_blank">eventEmitter.on(event, handler)</a></p>
<p><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitteronceevent-handler" target="_blank">eventEmitter.once(event, handler)</a></p>
<p><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitterremovealllistenersevent" target="_blank">eventEmitter.removeAllListeners([event])</a></p>
<p><a href="https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md#eventemitterremovelistenerevent-handler" target="_blank">eventEmitter.removeListener(event, handler)</a></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let page = await browser.newPage();
await page.goto(url);
let btn = await page.waitForSelector('#btn');
//在点击按钮之前，事先定义一个 Promise，用于返回新 tab 的 Page 对象
const newPagePromise = new Promise(res =&gt; 
  browser.once('targetcreated', 
    target =&gt; res(target.page())
  )
);
await btn.click();
//点击按钮后，等待新tab对象
let newPage = await newPagePromise;

</code></pre>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const puppeteer = require('puppeteer');

(async () =&gt; {
    const browser = await puppeteer.launch({
        headless: false, slowMo: 100,
        defaultViewport: { width: 1280, height: 720 }
    });
    const page = await browser.newPage();
    // await page.emulate(iPhone);
    await page.goto('https://dev.vitalerter.com', { waitUntil: ['load'] });
    await (await page.$('#UserName')).type('sds');
    await (await page.$('#Password')).type('123');
    let btn = await page.$('#signIn');
    await btn.click();
    await page.waitForNavigation();

    await (await page.$('#residents-tab')).click();
    await page.waitForTimeout(3000);
    await (await page.$('.flaticon-hr')).click();
    let options = await page.$$('.checkmark');
    await options[3].click();
    let rz = await page.$('.rz-pointer-min');
    let position = await rz.boundingBox();

    await page.mouse.move(position.x, position.y);
    await page.mouse.down();
    await page.mouse.move(position.x + 15, position.y);
    await page.waitForTimeout(2000);
    await page.mouse.move(position.x - 35, position.y);
    await page.mouse.up();

    await rz.click();
    for (let i = 0; i &lt; ' World'.length; i++) 
        await page.keyboard.press('ArrowLeft');

    await browser.close();
})();

</code></pre>
<h1><a href="https://github.com/facebook/jest/labels/good%20first%20issue" target="_blank">Jest</a></h1>
<p>UI</p>
<p><a href="https://github.com/saadeghi/daisyui" target="_blank">daisyui</a>	Tailwind Components</p>
<p><a href="https://github.com/tailwindlabs/tailwindcss" target="_blank">tailwindcss</a></p>
<p><a href="https://github.com/chartjs/Chart.js" target="_blank">Chart.js</a></p>
<p><a href="https://github.com/apache/echarts" target="_blank">echarts</a></p>
<p><a href="https://github.com/juliangarnier/anime" target="_blank">anime</a></p>
<p>toast</p>
<ul>
<li>
<p>popper-core</p>
</li>
<li>
<p>tippyjs	complete tooltip, popover, dropdown, and menu solution</p>
</li>
<li>
<p>iziToast</p>
</li>
</ul>
<p>CSS</p>
<ul>
<li>
<p>bulma Modern CSS framework based on Flexbox</p>
</li>
<li>
<p>normalize.css</p>
</li>
<li>
<p>Hover</p>
</li>
<li>
<p>hint.css</p>
</li>
</ul>
<p>Presentation</p>
<ul>
<li>
<p>impress.js	倒鸭子式</p>
</li>
<li>
<p>reveal.js	HTML Presentation Framework</p>
</li>
<li>
<p>fullPage.js</p>
</li>
</ul>
<p>screenfull.js</p>
<p>tools</p>
<p><a href="https://github.com/iamkun/dayjs" target="_blank">Day.js</a></p>
<p><a href="https://github.com/soldair/node-qrcode" target="_blank">node-qrcode</a></p>
<p><a href="https://github.com/i18next/i18next" target="_blank">i18next</a></p>
<p><a href="https://clipboardjs.com/" target="_blank">Clipboard.js</a></p>
<ul>
<li>
<p>lodash	delivering modularity, performance &amp; extras</p>
</li>
<li>
<p>Sortable	reorderable drag-and-drop lists</p>
</li>
<li>
<p>color	color conversion and manipulation</p>
</li>
</ul>
<p><a href="https://github.com/SheetJS/sheetjs" target="_blank">sheetjs</a></p>
<p><a href="https://github.com/bilibili/flv.js" target="_blank">flv.js</a></p>
<p><a href="https://github.com/ustbhuangyi/better-scroll" target="_blank">better-scroll</a></p>
<p><a href="https://github.com/cypress-io/cypress" target="_blank">cypress</a></p>
<p><a href="https://github.com/markedjs/marked" target="_blank">marked</a>	A markdown parser and compiler</p>
<p><a href="https://github.com/Stuk/jszip" target="_blank">jszip</a>	creating, reading and editing .zip files</p>
<p><a href="https://github.com/sorrycc/awesome-javascript" target="_blank">awesome-javascript</a></p>
<p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">awesome-nodejs</a></p>
<p><a href="https://github.com/sindresorhus/awesome-electron" target="_blank">awesome-electron</a></p>
<h1>—— <a href="https://github.com/Microsoft/TypeScript" target="_blank">TypeScript</a> ——</h1>
<p>由微软开发的自由和开源的编程语言，JavaScript 的一个超集，提供了类型系统和对 ES6 的支持。</p>
<p>TypeScript 增加了代码的可读性和可维护性</p>
<ul>
<li>
<p>类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了</p>
</li>
<li>
<p>可以在编译阶段就发现大部分错误，这总比在运行时候出错好</p>
</li>
<li>
<p>增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、代码重构等</p>
</li>
</ul>
<p>TypeScript 非常包容</p>
<ul>
<li>
<p>TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可</p>
</li>
<li>
<p>即使不显式的定义类型，也能够自动做出类型推论</p>
</li>
<li>
<p>TypeScript 的类型系统是图灵完备的，可以定义从简单到复杂的几乎一切类型</p>
</li>
<li>
<p>即使 TypeScript 编译报错，也可以生成 JavaScript 文件</p>
</li>
<li>
<p>兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取</p>
</li>
</ul>
<p>安装</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">npm install -g typescript

tsc test.ts  //将 TypeScript 转换为 JavaScript 代码

</code></pre>
<p>约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀</p>
<p>tsc [options] [file...]</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">-h, --help	Print this message.
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

</code></pre>
<p>原始数据类型（<a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank">Primitive data types</a>）一种既非对象也无方法的数据。共有7种：string，number，bigint，boolean，null，undefined，symbol</p>
<p>除了 null 和 undefined之外，所有基本类型都有其对应的包装对象</p>
<ul>
<li>
<p>String</p>
</li>
<li>
<p>Number</p>
</li>
<li>
<p>BigInt</p>
</li>
<li>
<p>Boolean</p>
</li>
<li>
<p>Symbol</p>
</li>
</ul>
<p><strong>对象类型（Object types）</strong></p>
<p>空值（Void）</p>
<p>任意值（Any）	表示允许赋值为任意类型</p>
<p>undefined 和 null 是所有类型的子类型</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function alertName(): void {
    alert('Typescript');
}

let unusable: void = undefined;
let n: null = null;

let u: undefined;
let num: number = u;

let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

</code></pre>
<p><strong>类型推论（Type Inference）</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let myFavoriteNumber = 'seven';
// 等价
let myFavoriteNumber: string = 'seven';

let myFavoriteNumber;
// 等价
let myFavoriteNumber: any;

</code></pre>
<p><strong>联合类型（Union Types）</strong>：取值可以为多种类型中的一种</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

</code></pre>
<p>当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时，只能访问此联合类型的所有类型里共有的属性或方法</p>
<p><strong>接口（Interfaces）</strong>：定义对象的类型</p>
<ul>
<li>
<p>确定属性和可选属性的类型都必须是任意属性的类型的子集</p>
</li>
<li>
<p>只能定义一个任意属性。(在任意属性中使用联合类型)</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">interface Person {
    readonly id: number;    // 只读属性
    name: string;
    age?: number;    // 可选属性
    [propName: string]: any;    // 任意属性
}

// 约束了 tom 的形状必须和接口 Person 一致
let tom: Person = {
    name: 'Tom',
    gender: 'male'
};

</code></pre>
<p><strong>数组类型</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let fibonacci: number[] = [1, 1, 2, 3, 5];

let fibonacci: Array&lt;number&gt; = [1, 1, 2, 3, 5];

interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}

</code></pre>
<p><strong>函数</strong></p>
<ul>
<li>
<p>可选参数	用 ? 表示可选的参数，可选参数必须接在必需参数后面</p>
</li>
<li>
<p>参数默认值	TypeScript 会将添加了默认值的参数识别为可选参数</p>
</li>
<li>
<p>剩余参数</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 函数声明（Function Declaration）
function sum(x: number, y?: number, z: number = 0, ...rest: any[]): number {
    return x + y;
}

// 函数表达式
let mySum: (x: number, y: number) =&gt; number = function (x: number, y: number): number {
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

</code></pre>
<p><strong>重载</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 函数定义
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

</code></pre>
<p><strong>类型断言（Type Assertion）</strong>	指定一个值的类型</p>
<ul>
<li>
<p>值 as 类型</p>
</li>
<li>
<p>&lt;类型&gt;值</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">interface Cat {
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

</code></pre>
<p>用途</p>
<ul>
<li>
<p>将一个联合类型断言为其中一个类型</p>
</li>
<li>
<p>将一个父类断言为更加具体的子类</p>
</li>
<li>
<p>将任何一个类型断言为 any</p>
</li>
<li>
<p>将 any 断言为一个具体的类型</p>
</li>
</ul>
<p><strong>声明文件</strong></p>
<ul>
<li>
<p>declare var 声明全局变量</p>
</li>
<li>
<p>declare function 声明全局方法</p>
</li>
<li>
<p>declare class 声明全局类</p>
</li>
<li>
<p>declare enum 声明全局枚举类型</p>
</li>
<li>
<p>declare namespace 声明（含有子属性的）全局对象</p>
</li>
<li>
<p>interface 和 type 声明全局类型</p>
</li>
<li>
<p>export 导出变量</p>
</li>
<li>
<p>export namespace 导出（含有子属性的）对象</p>
</li>
<li>
<p>export default ES6 默认导出</p>
</li>
<li>
<p>export = commonjs 导出模块</p>
</li>
<li>
<p>export as namespace UMD 库声明全局变量</p>
</li>
<li>
<p>declare global 扩展全局变量</p>
</li>
<li>
<p>declare module 扩展模块</p>
</li>
<li>
<p>///  三斜线指令</p>
</li>
</ul>
<p><strong>类型别名</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">type Name = string;
type NameResolver = () =&gt; string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

</code></pre>
<p><strong>字符串字面量类型</strong></p>
<p>约束取值只能是某几个字符串中的一个</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'

</code></pre>
<p><strong>元组</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let tom: [string, number] = ['Tom', 25];

</code></pre>
<p><strong>枚举（Enum）</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

</code></pre>
<p><strong>class</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">abstract class Animal {
  readonly name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

</code></pre>
<p><strong>interface</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">interface Alarm {
    alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

</code></pre>
<p><strong>泛型（Generics）</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function swap&lt;T, U&gt;(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]


// 泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {
    console.log(arg.length);
    return arg;
}


// 泛型接口
interface CreateArrayFunc&lt;T&gt; {
    (length: number, value: T): Array&lt;T&gt;;
}

let createArray: CreateArrayFunc&lt;any&gt;;
createArray = function&lt;T&gt;(length: number, value: T): Array&lt;T&gt; {
    let result: T[] = [];
    for (let i = 0; i &lt; length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']


// 泛型默认参数
function createArray&lt;T = string&gt;(length: number, value: T): Array&lt;T&gt; {
    let result: T[] = [];
    for (let i = 0; i &lt; length; i++) {
        result[i] = value;
    }
    return result;
}

</code></pre>
<p><strong>声明合并</strong></p>
<p>定义了两个相同名字的函数、接口或类，会合并成一个类型</p>
<p>合并的属性的类型必须是唯一的</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">interface Alarm {
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

</code></pre>
<p><a href="https://ts.xcatliu.com/" target="_blank">TypeScript 入门教程</a></p>
