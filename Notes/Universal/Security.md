​

​

resource

- [Web安全](https://websec.readthedocs.io/zh/latest/)
- [awesome-security](https://github.com/sbilly/awesome-security)
- [awesome-web-security](https://github.com/qazbnm456/awesome-web-security)




# 认证机制
​  <br />  

## SSO
单点登录(SingleSignOn)：通过用户的一次性鉴别登录。当用户在身份认证服务器上登录一次以后，即可获得访问单点登录系统中其他关联系统和应用软件的权限

常见流程

1. 用户(User)向服务提供商(Service Provider)发起请求
1. SP重定向User至SSO身份校验服务(Identity Provider)
1. User通过IP登录
1. IP返回凭证给User
1. User将凭证发给SP
1. SP返回受保护的资源给用户




## ​[JWT](https://jwt.io/)
Json web token：在网络应用环境间传递声明的一种基于JSON的开放标准
```http
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```


构成

- header：声明的类型和加密使用的算法

`{ "alg": "HS256", "typ": "JWT" } `

- payload：载荷，用来存放实际需要传递的数据
```http
# 7个官方字段，供选用
iss (issuer)：签发人
exp (expiration time)：过期时间
sub (subject)：主题
aud (audience)：受众
nbf (Not Before)：生效时间
iat (Issued At)：签发时间
jti (JWT ID)：编号
```

- signature：对前两部分的签名，防止数据篡改

`HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secret) `

**使用方式**  <br />  客户端收到服务器返回的 JWT，可以储存在 Cookie 或 localStorage。  <br />  客户端每次与服务器通信，吧JWT放在 HTTP 请求的头信息Authorization字段里面。  <br />  `Authorization: Bearer <token> `

特点  <br />  （1）JWT 默认是不加密，但也是可以加密的。生成原始 Token 以后，可以用密钥再加密一次。  <br />  （2）JWT 不加密的情况下，不能将秘密数据写入 JWT。  <br />  （3）JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。  <br />  （4）JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。  <br />  （5）JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。  <br />  （6）为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用 HTTPS 协议传输。

​  <br />  

## OAuth
**开放授权**：一个关于授权（authorization）的开放网络标准。在客户端与服务端之间，设置了一个授权层（authorization layer）

授权方式

- 授权码模式（authorization code）：功能最完整、流程最严密的授权模式。通过客户端的后台服务器，与服务端的认证服务器进行互动
- 简化模式（implicit）：不通过第三方应用程序的服务器，直接在浏览器中向认证服务器申请令牌
- 密码模式（resource owner password credentials）：用户向客户端提供自己的用户名和密码
- 客户端模式（client credentials）：客户端以自己的名义，而不是以用户的名义，向服务端进行认证。

​

更新令牌  <br />  网站颁发令牌的时候，一次性颁发两个令牌，一个用于获取数据，另一个用于获取新的令牌（refresh token 字段）。令牌到期前，用户使用 refresh token 发一个请求，去更新令牌。

​

SAML (Security Assertion Markup Language，安全断言标记语言) 一种xXML格式的语言，使用XML格式交互，来完成SSO的功能。  <br />  涉及角色：服务提供者(SP)、认证服务(IDP)、用户(Client)  <br />  流程

1. Client访问受保护的资源
1. SP生成认证请求SAML返回给Client
1. Client提交请求到IDP
1. IDP返回认证请求
1. Client登陆IDP
1. 认证成功后，IDP生成私钥签名标识了权限的SAML，返回给Client
1. Client提交SAML给SP
1. SP读取SAML，确定请求合法，返回资源



​

2FA  <br />  双因素认证（Two-factor authentication ）

TOTP 的全称是"基于时间的一次性密码"（Time-based One-time Password）。

​

​  <br />  

# 漏洞攻防
​

**代码注入**（Code injection）是一种肇因于处理非法资料的电脑臭虫应用。  <br />  ​  <br />  

# SQL注入


**按技巧分类**

- **盲注**
   - 布尔盲注：只能从应用返回中推断语句执行后的布尔值
   - 时间盲注：应用没有明确的回显，只能使用特定的时间函数来判断
- 报错注入：应用会显示全部或者部分的报错信息
- 堆叠注入：有的应用可以加入 ; 后一次执行多条语句




## XSS
**跨站脚本**（Cross-site scripting）是一种网站应用程序的安全漏洞攻击，是[代码注入](https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5)的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了[HTML](https://zh.wikipedia.org/wiki/HTML)以及用户端[脚本语言](https://zh.wikipedia.org/wiki/%E8%85%B3%E6%9C%AC%E8%AA%9E%E8%A8%80)。  <br />  ​

分类

- **反射型：**通常出现在搜索等功能中，需要被攻击者点击对应的链接才能触发，且受到XSS Auditor、NoScript等防御手段的影响较大
- **储存型：**把攻击载荷存入服务器的数据库中，造成持久化的攻击。

​

**危害**

- 窃取Cookie。
- 监听用户行为，比如输入账号密码后直接发送到黑客服务器。
- 修改 DOM 伪造登录表单。
- 在页面中生成浮窗广告。



​

**内容安全策略**（**Content Security Policy**，**CSP**）是一种[计算机安全](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%AE%89%E5%85%A8)标准，旨在防御[跨站脚本](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC)、[点击劫持](https://zh.wikipedia.org/wiki/%E7%82%B9%E5%87%BB%E5%8A%AB%E6%8C%81)等[代码注入](https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5)攻击，阻止恶意内容在受信[网页](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5)环境中执行。


## CSRF
**跨站请求伪造**（Cross-site request forgery） 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。

防御

- 令牌同步模式（Synchronizer token pattern，STP）：当用户发送请求时，服务器端应用将令牌（token，一个保密且唯一的值）嵌入HTML表格，并发送给客户端。客户端提交HTML表格时候，会将令牌发送到服务端，令牌的验证是由服务端实行的。
- 验证 Referer/Content-Type
- 对于用户修改删除等操作最好都使用POST操作
- 避免全站通用的Cookie，严格设置Cookie的域


## SSRF​
服务端请求伪造（Server Side Request Forgery）：攻击者在未能取得服务器所有权限时，利用服务器漏洞以服务器的身份发送一条构造好的请求给服务器所在内网。  <br />  ​

**防御方式**

- 过滤返回的信息
- 统一错误信息
- 限制请求的端口
- 禁止不常用的协议
- 对DNS Rebinding，考虑使用DNS缓存或者Host白名单



​

DoS（Denial of Service）指拒绝服务，是一种常用来使服务器或网络瘫痪的网络攻击手段。

分布式拒绝服务（DDoS，Distributed Denial of Service） 攻击：利用足够数量的傀儡计算机产生数量巨大的攻击数据包，对网络上的一台或多台目标实施DDoS攻击，成倍地提高威力，从而耗尽受害目标的资源，迫使目标失去提供正常服务的能力。

**访问控制系统实现的安全级别**  <br />  分为四组七个等级：D、C（C1、C2）、B（B1、B2、B3）和A（1），安全级别从左到右逐步提高，各级间向下兼容。

- D级别：对系统提供最小的安全防护。系统的访问控制没有限制，无需登陆系统就可以访问数据
- C级别：自由选择性安全保护，在设计上有自我保护和审计功能，可对主体行为进行审计与约束
   - C1级 选择性保护级（Discrtionary Security Protection）：实现自主安全防护，对用户和数据的分离，保护或限制用户权限的传播。
   - C2级：具有访问控制环境的权力，能够实现受控安全保护、个人帐户管理、审计和资源隔离。
- B级别：提供强制性安全保护和多级安全。强制防护是指定义及保持标记的完整性，信息资源的拥有者不具有更改自身的权限，系统数据完全处于访问控制管理的监督下。
   - B1级 标识安全保护（Labeled Security Protection）。
   - B2级 结构保护级别（Security Protection）：要求访问控制的所有对象都有安全标签以实现低级别的用户不能访问敏感信息，对于设备、端口等也应标注安全级别。
   - B3级 安全域保护级别（Security Domain）：使用安装硬件的方式来加强域的安全，比如用内存管理硬件来防止无授权访问。
- A级别 验证设计级（Verity Design）：最高的安全级别，安全的设计必须给出形式化设计说明和验证，需要有严格的数学推导过程，同时应该包含秘密信道和可信分布的分析




# Reverse 逆向


[reverse-engineering](https://github.com/wtsxDev/reverse-engineering)

**web**

- [Review_Reverse](https://github.com/lateautumn4lin/Review_Reverse)
- [Crack-JS](https://github.com/xianyucoder/Crack-JS)



_Android tools_

- [Android Studio](http://developer.android.com/sdk/index.html)
- [APKtool](http://ibotpeaches.github.io/Apktool/)
- [dex2jar](https://github.com/pxb1988/dex2jar)
- [Bytecode Viewer](https://bytecodeviewer.com/)
- [IDA Pro](https://www.hex-rays.com/products/ida/index.shtml)
- [JaDx](https://github.com/skylot/jadx)



