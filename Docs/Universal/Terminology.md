


# 网络


CDN(Content Delivery Network，内容分发网络) 一种透过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、影片、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。

重定向（URL redirection）当用户浏览某个网址时，将他导向到另一个网址的技术。

Nginx（engine X）异步框架的网页服务器，用于反向代理、负载平衡器和HTTP缓存。

**SPA**（single-page application，**单页应用**）是一种[网络应用程序](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)或[网站](https://zh.wikipedia.org/wiki/%E7%B6%B2%E7%AB%99)的模型，它通过动态重写当前页面来与用户交互，而非传统的从服务器重新加载整个新页面。

这种方法避免了页面之间切换打断[用户体验](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8C)，使应用程序更像一个[桌面应用程序](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E8%BD%AF%E4%BB%B6)。在单页应用中，所有必要的代码（[HTML](https://zh.wikipedia.org/wiki/HTML)、[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)和[CSS](https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8)）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）[动态装载](https://zh.wikipedia.org/wiki/%E5%8B%95%E6%85%8B%E8%A3%9D%E8%BC%89)适当的资源并添加到页面。

**HAR**（**H**TTP **Ar**chive format，**HTTP存档格式**）是一种[JSON](https://zh.wikipedia.org/wiki/JSON)格式的[存档文件](https://zh.wikipedia.org/wiki/%E5%AD%98%E6%A1%A3%E6%96%87%E4%BB%B6)格式，多用于记录[网页浏览器](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8)与网站的交互过程。[文件扩展名](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E6%89%A9%E5%B1%95%E5%90%8D)通常为.har。  <br />  HAR格式的规范定义了一个[HTTP](https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)事务的存档格式，可用于网页浏览器导出加载网页时的详细性能数据。此格式的规范由[万维网联盟](https://zh.wikipedia.org/wiki/%E4%B8%87%E7%BB%B4%E7%BD%91%E8%81%94%E7%9B%9F)（W3C）的Web性能工作组制作。
```shell
{
    "log": {
        "version": "1.2",
        "creator": {
            "name": "shun.zheng",
            "version": "1.1.8"
        },
        "pages": [
            {
                "startedDateTime": "2015-09-06T10:02:41.663Z", // 页面开始加载的时间（格式：ISO 8601）
                "id": "http://www.ihorve.com/", // 页面唯一标示符，即页面url
                "title": "Horve后花园", // 页面标题
                "pageTimings": { // 关于页面加载时间的详细信息
                    "onContentLoad": 1720, // 可选，页面开始加载到页面内容加载完毕之间的毫秒数
                    "onLoad": 2500, // 可选，页面开始加载到页面onload之间的毫秒数
                    "comment": "" // 可选，由用户或应用程序提供的注释
                }
            }
        ],
        "entries": [ // 包含全部请求的数组，数组的每一项是一条请求的数据构成的对象，根据startedDateTime排序
            {
                "startedDateTime": "2015-09-06T10:02:41.645Z", // 请求发出的时间(ISO 8601)
                "time": 1221, // 该条请求花费的总的毫秒数
                "request": { // 请求的详细情况
                    "method": "GET", // 请求方式
                    "url": "http://www.ihorve.com/", // 请求的url
                    "httpVersion": "HTTP/1.1", // http协议版本号
                    "cookies": [], // cookie对象列表
                    "headers": [ // header信息
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.8 Safari/534.34"
                        },
                        {
                            "name": "Accept",
                            "value": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
                        }
                    ],
                    "queryString": [], // 查询参数对象的列表
                    "headersSize": -1, // 从HTTP请求消息的开始，直到（且包括）的主体之前的双CRLF的总字节数，不可用设置为-1
                    "bodySize": -1 // 消息体的粽子节数，不可用设置为-1
                },
                "response": { // 响应的详细情况
                    "status": 200, // 状态码
                    "statusText": "OK",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [], // cookie对象列表
                    "headers": [ // 响应头信息列表
                        {
                            "name": "Server",
                            "value": "nginx"
                        },
                        {
                            "name": "Date",
                            "value": "Sun, 06 Sep 2015 09:59:22 GMT"
                        },
                        {
                            "name": "Content-Type",
                            "value": "text/html; charset=UTF-8"
                        },
                        {
                            "name": "Transfer-Encoding",
                            "value": "chunked"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Keep-Alive",
                            "value": "timeout=60"
                        },
                        {
                            "name": "X-Pingback",
                            "value": "http://www.ihorve.com/xmlrpc.php"
                        },
                        {
                            "name": "Content-Encoding",
                            "value": "gzip"
                        }
                    ],
                    "redirectURL": "", // 从响应头位置重定向目标URL
                    "headersSize": -1, // 从HTTP响应消息的开始，直到（且包括）的主体之前的双CRLF的总字节数，不可用设置为-1
                    "bodySize": 65047, // 响应体的字节数
                    "content": { // 响应体的详细信息
                        "size": 65047, // 响应体的字节数
                        "mimeType": "text/html; charset=UTF-8" // 响应体的mimeType
                    }
                },
                "cache": { // 请求从浏览器缓存的信息
                    "beforeRequest": {}, // 可选，请求前缓存条目的状态
                    "afterRequest": {}, // 可选，请求后缓存条目的状态
                    "comment": ""
                },
                "timings": { // 发送请求到收到响应各阶段的时间，单位均为毫秒
                    "blocked": 0, // 可选，等待网络连接的时间
                    "dns": -1, // 可选，dns解析时间，不可用设置为-1
                    "connect": -1, // 可选，创建TCP连接的时间，不可用设置为-1
                    "send": 0, // 发送HTTP请求到服务器的时间
                    "wait": 1126, // 等待响应的时间
                    "receive": 95, // 从服务器接收或从缓存读取的时间
                    "ssl": -1 // 可选，SSL/TLS协商需要的时间，不可用设置为-1
                },
                "pageref": "http://www.ihorve.com/" // 可选，唯一，参照的父页面，如果应用不支持页面分组，可忽略此项配置
            }
        ]
    }
}
```


BI 商业智能（Business Intelligence）：一套完整的解决方案，用来将企业中现有的数据进行有效的整合，快速准确的提供报表并提出决策依据，帮助企业做出明智的业务经营决策。


# SOA


面向服务的架构（Service-Oriented Architecture，SOA）：将应用程序的不同功能单元（称为服务）进行拆分，并通过这些服务之间定义良好的接口和协议联系起来  <br />  一种计算机软件的设计模式，主要应用于不通应用组件中通过某种协议来互操作

三种主流的Web服务实现方案  <br />  REST：**表现层状态转换** (软件架构风格）  <br />  	REST (REpresentational State Transfer) 形式上应该表述为客户端通过申请资源来实现状态的转换  <br />  SOAP：简单对象访问协议   <br />  	简单对象访问协议（Simple Object Access Protocol）是一种标准化的通讯规范  <br />  XML-RPC：远程过程调用协议 （已经慢慢被SOAP取代）  <br />  	XML-RPC：一个远程过程调用（remote procedure call，RPC)的分布式计算协议，通过XML将调用函数封装，并使用HTTP协议作为传送机制

REST、SOAP、RPC、RMI、DCOM等都是SOA的一种实现

RPC 远程过程调用（面向方法）  <br />  SOAP 面向服务的架构（面向消息）  <br />  REST 资源的状态转变（面向资源）

ESB（Enterprise Service Bus，中文翻译为企业服务总线）：一个实现系统间集成和互联互通的重要技术架构  <br />  	一种消息和服务集成的中间件平台。

RESTful架构：一种[万维网](https://zh.wikipedia.org/wiki/%E4%B8%87%E7%BB%B4%E7%BD%91)[软件架构](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%9E%B6%E6%9E%84)风格，目的是便于不同软件/程序在网络中互相传递信息  <br />  符合REST原则

路径又称"终点"（endpoint），表示API的具体网址  <br />  每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应

HTTP动词

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源。




# 云计算

**云计算**（cloud computing，**网络计算**）一种基于[互联网](https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91)的计算方式，共享的软硬件资源和信息可以按需求提供给计算机各种终端和其他设备，使用服务商提供的电脑基建作计算和资源。

**SaaS**（Software as a Service，**软件即服务**）一种[软件](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6)交付模式。软件仅需通过网络，不须经过传统的安装步骤即可使用，软件及其相关的[数据](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE)集中[托管](https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E6%89%98%E7%AE%A1%E6%9C%8D%E5%8A%A1)于[云端](https://zh.wikipedia.org/wiki/%E4%BA%91%E8%AE%A1%E7%AE%97)服务。用户通常使用[精简客户端](https://zh.wikipedia.org/wiki/%E7%B2%BE%E7%B0%A1%E5%AE%A2%E6%88%B6%E7%AB%AF)，一般即经由[网页浏览器](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8)来访问、访问软件即服务。

**PaaS**（platform as a service，**平台即服务**）是一种[云计算](https://zh.wikipedia.org/wiki/%E9%9B%B2%E7%AB%AF%E9%81%8B%E7%AE%97)服务，提供运算平台与解决方案服务。在云计算的典型层级中，PaaS层介于SaaS与IaaS之间。

**IaaS**（Infrastructure as a Service，**基础设施即服务**）是提供消费者处理、储存、网络以及各种基础运算资源，以部署与执行操作系统或应用程序等各种软件。是云服务的最底层，主要提供一些基础资源

**SSL-Pinning**  <br />  **证书锁定（SSL/TLS Pinning）**：将服务器提供的SSL/TLS证书内置到移动端开发的APP客户端中，当客户端发起请求时，通过比对内置的证书和服务器端证书的内容，以确定这个连接的合法性。

- Certificate Pinning：将APP代码内置仅接受指定域名的证书，而不接受操作系统或浏览器内置的CA根证书对应的任何证书，通过这种授权方式，保障了APP与服务端通信的唯一性和安全性，因此我们移动端APP与服务端（例如API网关）之间的通信是可以保证绝对安全。但是CA签发证书都存在有效期问题，所以缺点是在证书续期后需要将证书重新内置到APP中。
- Public Key Pinning：提取证书中的公钥并内置到移动端APP中，通过与服务器对比公钥值来验证连接的合法性，公钥在证书的续期前后都可以保持不变（即密钥对不变），所以可以避免证书有效期问题。



证书锁定指纹(Hash)  <br />  获取移动端所需证书  <br />  如果采用证书锁定方式，则获取证书的摘要hash，以[infinisign.com](https://www.infinisign.com/infinisign.com)为例
```shell
## 在线读取服务器端.cer格式证书
openssl s_client -connect infinisign.com:443 -showcerts < /dev/null | openssl x509 -outform DER > infinisign.der
## 提取证书的摘要hash并查看base64格式
openssl dgst -sha256 -binary infinisign.der | openssl enc -base64
wLgBEAGmLltnXbK6pzpvPMeOCTKZ0QwrWGem6DkNf6o=
```

获取移动端所需公钥  <br />  如果采用公钥锁定方式，则获取证书公钥的摘要hash，以[infinisign.com](https://www.infinisign.com/infinisign.com)为例
```shell
## 在线读取服务器端证书的公钥
openssl x509 -pubkey -noout -in infinisign.der -inform DER | openssl rsa -outform DER -pubin -in /dev/stdin 2>/dev/null > infinisign.pubkey
## 提取证书的摘要hash并查看base64格式
openssl dgst -sha256 -binary infinisign.pubkey | openssl enc -base64
bAExy9pPp0EnzjAlYn1bsSEGvqYi1shl1OOshfH3XDA=
```


- i18n（internationalization，首末字符i和n，18为中间的字符数）国际化，支持多种语言，但是同一时间只能是英文和一种选定的语言，例如英文+中文
- L10n（localization），支持2种语言，英文和另外一种语言（例如中文）；
- g11n（globalization），简单的理解可以认为g11n = i18n + L10n。
- m17n（multilingualization）可以在同一时间支持多种语言



