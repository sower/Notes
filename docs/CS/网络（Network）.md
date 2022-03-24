---
title: 网络（Network）
created_at: 2022-02-02T13:10:18.000Z
updated_at: 2022-03-03T16:03:15.000Z
word_count: 18960
---
# 网络（Network）  
## —— 网络（Network）——
**互联网**（Internet）：[20世纪](https://zh.wikipedia.org/wiki/20%E4%B8%96%E7%B4%80)末期兴起电脑网络与电脑网络之间所串连成的庞大网络系统。  <br />  万维网是一个由许多互相链接的超文本组成的系统，通过互联网访问。是互联网的一项服务

局域网（Local Area Network，LAN）：又称内网。指覆盖局部区域（如办公室或楼层）的[计算机网络](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C)。  <br />  广域网（Wide Area Network，WAN）：又称外网、公网。是连接不同地区[局域网](https://zh.wikipedia.org/wiki/%E5%B1%80%E5%9F%9F%E7%BD%91)或城域网计算机通信的远程网。

VPN（Virtual Private Network，虚拟私人网络）：一种常用于连接中、大型企业或团体与团体间的私人网络的通讯方法。它利用[隧道协议](https://zh.wikipedia.org/wiki/%E9%9A%A7%E9%81%93%E5%8D%8F%E8%AE%AE)（Tunneling Protocol）来达到发送端认证、消息保密与准确性等功能。  <br />  在公用网络上建立专用网络，进行加密通讯。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。

**(网络)代理**（Proxy）：一种特殊的网络服务，允许一个[网络终端](https://zh.wikipedia.org/w/index.php?title=%E7%BD%91%E7%BB%9C%E7%BB%88%E7%AB%AF&action=edit&redlink=1)（一般为客户端）通过这个服务与另一个网络终端（一般为服务器）进行非直接的连接。  <br />  **Wi-Fi**（wireless fidelity，无线网络/热点）一个基于[IEEE 802.11](https://zh.wikipedia.org/wiki/IEEE_802.11)标准的无线局域网技术。

| 频段 | 2.4G | 5G |
| --- | --- | --- |
| 优点 | 信号频率低，在空气或障碍物中传播时衰减较小，传播距离更远。 | 信号频宽较宽，无线环境比较干净，干扰少，网速稳定，且支持更高的无线速率。 |
| 缺点 | 信号频宽较窄，家电、无线设备大多使用2.4G频段，无线环境更加拥挤，干扰较大。 | 信号频率较高，在空气或障碍物中传播时衰减较大，覆盖距离一般比2.4G信号小。 |

**SSID**（Service Set Identifier，服务集标识符）：一个或一组基础架构模式[无线网络](https://zh.wikipedia.org/wiki/%E6%97%A0%E7%BA%BF%E7%BD%91%E7%BB%9C)的标识

- 基本服务集标识符（BSSID）：AP的数据链路层的MAC地址
- 扩展服务集定标识符（ESSID）：无线网络的名称（一个最长32字节区分大小写的字符串）



**WAP**（Wireless Access Point，无线接入点）：[电脑网络](https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%85%A6%E7%B6%B2%E7%B5%A1)中一种连接无线网络至有线网络（以太网）的设备，又称为无线基站

WPS（Wi-Fi Protected Setup，**Wi-Fi保护设置**）是一个[无线网络](https://zh.wikipedia.org/wiki/%E6%97%A0%E7%BA%BF%E7%BD%91%E7%BB%9C)安全标准，旨在让家庭用户使用无线网络时简化加密步骤。  <br />  **WPA**（Wi-Fi Protected Access，Wi-Fi访问保护）：一种保护[无线网络](https://zh.wikipedia.org/wiki/%E7%84%A1%E7%B7%9A%E7%B6%B2%E8%B7%AF)（Wi-Fi）访问安全的技术标准。

- 胖AP（FAT）：常见的无线路由器，一般具备WAN、LAN两种接口，支持地址转换（NAT）功能，有自己的管理系统、DHCP服务等，需要每台AP分别进行设置。
- 瘦AP（FIT）：本身没有管理系统，需要专门的设备（无线控制器）来统一管理、下发数据等集中管理设备，在AP数量大的情况下，及大简化了管理工作。

无线终端切换信号的规则：无线终端会设置一个阈值，根据当前链路的情况，如信号强度、信噪比以及其它的通信参数来判断当前链路的质量，并决定是否需要切断当前的AP，来寻找其它可用AP。

**漫游**：一台无线终端设备（手机、电脑等），随着位置的移动，经过两个AP的各自覆盖区域与重叠区域的过程，提供不中断的网络服务

- 有缝漫游：由多个无线路由器组成的无线网络，无线终端在各个路由器中移动时，不一定会切换到较强的无线路由器上，自动切换信号的时机取决于无线终端的本身。要么就只能手动来切换信号，切换信号时，有明显中断，可能在1s-5s左右。
- 无缝漫游：通过AC管理系统，设置RSSI阈值、强制下线、禁止接入、计算信号切换时机等条件下，才能达到快速漫游，信号切换时间在20ms左右，减少用户感知以及丢包率等。
   - 无线AP必须设置为相同的SSID。 
   - 必须采用相同的WEP或WPA加密。 
   - 无线AP与无线客户端必须处于同一VLAN、同一IP地址段。

快速漫游协议	802.11k/v/r

**以太网**（Ethernet）是一种[计算机](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA)局域网技术。  <br />  **蜂窝网络**（Cellular network），又称移动网络（mobile network）是一种[移动通信](https://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8A%A8%E9%80%9A%E4%BF%A1)硬件架构，分为模拟蜂窝网络和数字蜂窝网络。  <br />  **蓝牙**（Bluetooth），一种[无线通讯](https://zh.wikipedia.org/wiki/%E7%84%A1%E7%B7%9A%E9%80%9A%E8%A8%8A)技术标准，用来让固定与移动设备，在短距离间交换资料，以形成个人局域网（PAN）。  <br />  NFC（Near-field communication，**近距离无线通信**）是一套[通信协议](https://zh.wikipedia.org/wiki/%E9%80%9A%E8%A8%8A%E5%8D%94%E5%AE%9A)，让两个电子设备在相距几厘米之内进行通信

|  | NFC | 蓝牙 |
| --- | --- | --- |
| [RFID](https://zh.wikipedia.org/wiki/RFID)兼容 | ISO 18000-3 | active |
| 标准化机构 | ISO/IEC | Bluetooth SIG |
| 网络标准 | ISO 13157 etc. | IEEE 802.15.1 |
| 网络类型 | Point-to-point | WPAN |
| 加密 | not with RFID | available |
| 范围 | < 0.2 m | ~10 m (class 2) |
| 频率 | 13.56 MHz | 2.4-2.5 GHz |
| Bit rate | 424 kbit/s | 2.1 Mbit/s |
| 设置程序 | < 0.1 s | < 6 s |
| 功耗 | < 15mA (read) | varies with class |

**P2P**（peer-to-peer，对等式网络），又称点对点技术，是[无中心服务器](https://zh.wikipedia.org/wiki/%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96)、依靠用户群（peers）交换信息的互联网体系  <br />  减低以往网路传输中的节点，以降低资料遗失的风险。

**防火墙**（Firewall）是一个架设在互联网与企业内网之间的信息安全系统，根据企业预定的策略来监控往来的传输。

隔离网络，透过将网络划分成不同的区域（通常情况下称为ZONE），制定出不同区域之间的[访问控制](https://zh.wikipedia.org/wiki/%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6)策略来控制不同信任程度区域间传送的数据流


- 比特率（Bit rate）：单位时间内传输送或处理的比特的数量。单位为比特每秒（bit/s或bps）
- 带宽：数字信道所能传送的最高速率。b/s（bps）
- 吞吐量：单位时间内通过某个网络（或信道、接口）的实际数据量。其绝对上限值等于带宽。
- 时延：数据（一个报文或分组、甚至比特）从网络（或链路）的一段传送到另一端的时间，也称延迟。

数据在TCP层称为流（Stream），数据分组称为分段（Segment）  <br />  数据在IP层称为Datagram，数据分组称为分片（Fragment）。  <br />  UDP 中分组称为Message。
## 互联网协议套件（Internet Protocol Suite，IPS）
一个网络通信模型，以及一整个[网络传输协议](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)家族，为网际网络的基础通信架构。  <br />  常被通称为**TCP/IP协议族**（TCP/IP Protocol Suite），TCP/IP协议栈（TCP/IP Protocol Stack）,简称TCP/IP  <br />  定义了电子设备（比如计算机）如何连入因特网，以及数据如何在它们之间传输的标准。  <br />  TCP 负责应用软件和网络软件之间的通信。  <br />  IP 负责计算机之间的通信。  <br />  TCP 负责将数据分割并装入 IP 包，然后在它们到达的时候重新组合它们。  <br />  IP 负责将包发送至接受者。
## 网络结构
![](./assets/1643807418041-e22d909e-f6e6-4703-8ac8-18b51c69511d.png)  <br />  **OSI（Open System Interconnection ，开放式系统互联）**

| 分层 | 作用 | 协议 |
| --- | --- | --- |
| 物理层 | 利用传输介质为数据链路层提供物理连接，实现比特流的透明传输。（比特 Bit） | RJ45、CLOCK、IEEE802.3（中继器，集线器） |
| 数据链路层 | 将比特组装成帧和点到点的传递（帧 Frame） | PPP、FR、HDLC、VLAN、MAC（网桥，交换机） |
| 网络层 | 负责数据包从源到宿的传递和网际互连（包 Packet） | IP、ICMP、ARP、RARP、OSPF、IPX、RIP、IGRP（路由器） |
| 运输层 | 提供端到端的可靠报文传递和错误恢复（ 段Segment） | TCP、UDP、SPX |
| 会话层 | 建立、管理和终止会话（会话协议数据单元 SPDU） | NFS、SQL、NETBIOS、RPC |
| 表示层 | 对数据进行翻译、加密和压缩（表示协议数据单元 PPDU） | JPEG、MPEG、ASII |
| 应用层 | 允许访问OSI环境的手段（应用协议数据单元 APDU） | FTP、DNS、Telnet、SMTP、HTTP、WWW、NFS |

## 应用层（Application layer）
直接和应用程序接口结合，并提供常见的网络应用服务。
### HTTP
**超文本传输协议**（HyperText Transfer Protocol）是一种用于分布式、协作式和[超媒体](https://zh.wikipedia.org/wiki/%E8%B6%85%E5%AA%92%E9%AB%94)信息系统的应用层协议。  <br />  HTTP是[万维网](https://zh.wikipedia.org/wiki/%E5%85%A8%E7%90%83%E8%B3%87%E8%A8%8A%E7%B6%B2)的数据通信的基础。  <br />  特点

- 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。
- 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。
- 无连接：限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。节省传输时间。
- 无状态：对于事务处理没有记忆能力。应答较快。
- 支持B/S及C/S模式。

发展历史

| 版本 | 产生时间 | 内容 | 发展现状 |
| --- | --- | --- | --- |
| HTTP/0.9 | 1991年 | 不涉及数据包传输，规定客户端和服务器之间通信格式，只能GET请求 | 没有作为正式的标准 |
| HTTP/1.0 | 1996年 | 传输内容格式不限制，增加PUT、PATCH、HEAD、 OPTIONS、DELETE命令 | 正式作为标准 |
| HTTP/1.1 | 1997年 | 持久连接(长连接)、节约带宽、HOST域、管道机制、分块传输编码 | 2015年前使用最广泛 |
| HTTP/2 | 2015年 | 多路复用、服务器推送、头信息压缩、二进制协议等 | 逐渐覆盖市场 |

#### [HTTP 请求方法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods) (Request Method)
HTTP1.0 定义了三种请求方法：GET, POST 和 HEAD方法。  <br />  HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 方法。

| 序号 | 方法 | 描述 |
| --- | --- | --- |
| 1 | GET | 请求指定的页面信息，并返回实体主体。 |
| 2 | HEAD | 类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头 |
| 3 | POST | 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。 |
| 4 | PUT | 从客户端向服务器传送的数据取代指定的文档的内容。 |
| 5 | DELETE | 请求服务器删除指定的页面。 |
| 6 | CONNECT | HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。 |
| 7 | OPTIONS | 允许客户端查看服务器的性能。 |
| 8 | TRACE | 回显服务器收到的请求，主要用于测试或诊断。 |
| 9 | PATCH | 实体中包含一个表，表中说明与该URI所表示的原内容的区别。 |
| 10 | MOVE | 请求服务器将指定的页面移至另一个网络地址。 |
| 11 | COPY | 请求服务器将指定的页面拷贝至另一个网络地址。 |
| 12 | LINK | 请求服务器建立链接关系。 |
| 13 | UNLINK | 断开链接关系。 |
| 14 | WRAPPED | 允许客户端发送经过封装的请求。 |
| 15 | Extension-mothed | 在不改动协议的前提下，可增加另外的方法。 |

GET和POST的区别

- GET提交的数据放在URL之后，以?分割URL和传输数据，参数之间以&相连。POST把提交的数据放在HTTP包的Body中；
- GET提交的数据大小有限制（因为浏览器对URL的长度有限制），而POST方法提交的数据没有限制；
- GET方式提交数据，会带来安全问题，比如一个登录页面，通过GET方式提交数据时，用户名和密码将出现在URL上，如果页面可以被缓存或者其他人可以访问这台机器，就可以从历史记录获得该用户的账号和密码；
- GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值。
#### [HTTP ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)状态码 (Status Code)
由三个十进制数字组成，第一个十进制数字定义了状态码的类型  <br />  **HTTP状态码分类**

| 分类 | 分类描述 |
| --- | --- |
| 1** | 信息，服务器收到请求，需要请求者继续执行操作 |
| 2** | 成功，操作被成功接收并处理 |
| 3** | 重定向，需要进一步的操作以完成请求 |
| 4** | 客户端错误，请求包含语法错误或无法完成请求 |
| 5** | 服务器错误，服务器在处理请求的过程中发生了错误 |

**HTTP状态码列表**

| **状态码** | **状态码英文名称** | **中文描述** |
| --- | --- | --- |
| 100 | Continue | 继续。[客户端](http://www.dreamdu.com/webbuild/client_vs_server/)应继续其请求 |
| 101 | Switching Protocols | 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议 |
|  |  |  |
| 200 | OK | 请求成功。一般用于GET与POST请求 |
| 201 | Created | 已创建。成功请求并创建了新的资源 |
| 202 | Accepted | 已接受。已经接受请求，但未处理完成 |
| 203 | Non-Authoritative Information | 非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本 |
| 204 | No Content | 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档 |
| 205 | Reset Content | 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域 |
| 206 | Partial Content | 部分内容。服务器成功处理了部分GET请求 |
|  |  |  |
| 300 | Multiple Choices | 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择 |
| 301 | Moved Permanently | 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替 |
| 302 | Found | 临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI |
| 303 | See Other | 查看其它地址。与301类似。使用GET和POST请求查看 |
| 304 | Not Modified | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 305 | Use Proxy | 使用代理。所请求的资源必须通过代理访问 |
| 306 | Unused | 已经被废弃的HTTP状态码 |
| 307 | Temporary Redirect | 临时重定向。与302类似。使用GET请求重定向 |
|  |  |  |
| 400 | Bad Request | 客户端请求的语法错误，服务器无法理解 |
| 401 | Unauthorized | 请求要求用户的身份认证 |
| 402 | Payment Required | 保留，将来使用 |
| 403 | Forbidden | 服务器理解请求客户端的请求，但是拒绝执行此请求 |
| 404 | Not Found | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面 |
| 405 | Method Not Allowed | 客户端请求中的方法被禁止 |
| 406 | Not Acceptable | 服务器无法根据客户端请求的内容特性完成请求 |
| 407 | Proxy Authentication Required | 请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权 |
| 408 | Request Time-out | 服务器等待客户端发送的请求时间过长，超时 |
| 409 | Conflict | 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突 |
| 410 | Gone | 客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置 |
| 411 | Length Required | 服务器无法处理客户端发送的不带Content-Length的请求信息 |
| 412 | Precondition Failed | 客户端请求信息的先决条件错误 |
| 413 | Request Entity Too Large | 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息 |
| 414 | Request-URI Too Large | 请求的URI过长（URI通常为网址），服务器无法处理 |
| 415 | Unsupported Media Type | 服务器无法处理请求附带的媒体格式 |
| 416 | Requested range not satisfiable | 客户端请求的范围无效 |
| 417 | Expectation Failed | 服务器无法满足Expect的请求头信息 |
|  |  |  |
| 500 | Internal Server Error | 服务器内部错误，无法完成请求 |
| 501 | Not Implemented | 服务器不支持请求的功能，无法完成请求 |
| 502 | Bad Gateway | 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应 |
| 503 | Service Unavailable | 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中 |
| 504 | Gateway Time-out | 充当网关或代理的服务器，未及时从远端服务器获取请求 |
| 505 | HTTP Version not supported | 服务器不支持请求的HTTP协议的版本，无法完成处理 |

#### [HTTP消息](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages)结构
**客户端请求消息**

- 起始行 (start-line) ： HTTP 方法、请求目标 (request target)、HTTP 版本 (HTTP version)
- 请求头部（header）
   - General headers，例如 [Via](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Via)，适用于整个报文。
   - Request headers，例如 [User-Agent](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent)，[Accept-Type](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Type)，通过进一步的定义(例如 [Accept-Language](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language))，或者给定上下文(例如 [Referer](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer))，或者进行有条件的限制 (例如 [If-None](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None)) 来修改请求。
   - Entity headers，例如 [Content-Length](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length)，适用于请求的 body。如果请求中没有任何 body，则不会发送这样的头文件。
- [Body](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#body)	不是所有的请求都有一个 body，例如获取资源的请求，GET，HEAD，DELETE 和 OPTIONS，通常它们不需要 body。

![](./assets/1643807418142-0a6801cb-34bd-44f2-84dc-247bd1f6a749.jpeg)

**服务器响应消息**

- 状态行 (status line)
   - 协议版本，通常为 HTTP/1.1。
   - 状态码 (status code)，表明请求是成功或失败。常见的状态码是 [200](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200)，[404](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/404)，或 [302](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/302)。
   - 状态文本 (status text)。一个简短的，纯粹的信息，通过状态码的文本描述，帮助人们理解该 HTTP 消息。
- Headers
   - General headers，例如 [Via](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Via)，适用于整个报文。
   - Response headers，例如 [Vary](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Vary) 和 [Accept-Ranges](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges)，提供其它不符合状态行的关于服务器的信息。
   - Entity headers，例如 [Content-Length](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length)，适用于请求的 body。如果请求中没有任何 body，则不会发送这样的头文件。
- [Body](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Messages#body_2)	不是所有的响应都有 body，具有状态码 (如 [201](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/201) 或 [204](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/204)) 的响应，通常不会有 body。
#### [HTTP Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)
[General header（通用首部）](https://developer.mozilla.org/zh-CN/docs/Glossary/General_header)	可以应用于请求和响应中，但是不能应用于消息内容自身的 HTTP 首部 。常见包括：Date、Cache-Control 或 Connection。  <br />  [Request header（请求头）](https://developer.mozilla.org/zh-CN/docs/Glossary/Request_header)
```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```
[Response header （响应头](https://developer.mozilla.org/zh-CN/docs/Glossary/Response_header)）
```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```
[Entity headers](https://developer.mozilla.org/zh-CN/docs/Glossary/Entity_header)（[实体报头](https://developer.mozilla.org/zh-CN/docs/Glossary/Entity_header)）	描述了一个 HTTP 消息有效载荷（即关于消息主体的元数据）的 HTTP 报头。包括 [Content-Length](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Length)、[Content-Language](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language)、[Content-Encoding](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Encoding)、[Content-Type](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 和 [Expires](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires) 等。

| **Header** | **解释** | **示例** |
| --- | --- | --- |
| Accept | 指定客户端能够接收的内容类型 | Accept: text/plain, text/html |
| Accept-Charset | 浏览器可以接受的字符编码集。 | Accept-Charset: iso-8859-5 |
| Accept-Encoding | 指定浏览器可以支持的web服务器返回内容压缩编码类型。 | Accept-Encoding: compress, gzip |
| Accept-Language | 浏览器可接受的语言 | Accept-Language: en,zh |
| Accept-Ranges | 可以请求网页实体的一个或者多个子范围字段 | Accept-Ranges: bytes |
| Authorization | HTTP授权的授权证书 | Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ== |
| Cache-Control | 指定请求和响应遵循的缓存机制 | Cache-Control: no-cache |
| Connection | 是否需要持久连接。（HTTP 1.1默认是） | Connection: close |
| Cookie | HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。 | Cookie: $Version=1; Skin=new; |
| Content-Length | 请求的内容长度 | Content-Length: 348 |
| Content-Type | 请求的与实体对应的MIME信息 | Content-Type: application/x-www-form-urlencoded |
| Date | 请求发送的日期和时间 | Date: Tue, 15 Nov 2010 08:12:31 GMT |
| Expect | 请求的特定的服务器行为 | Expect: 100-continue |
| From | 发出请求的用户的Email | From: user@email.com |
| Host | 指定请求的服务器的域名和端口号 | Host: www.zcmhi.com |
| If-Match | 只有请求内容与实体相匹配才有效 | If-Match: “737060cd8c284d8af7ad3082f209582d” |
| If-Modified-Since | 如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码 | If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT |
| If-None-Match | 如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变 | If-None-Match: “737060cd8c284d8af7ad3082f209582d” |
| If-Range | 如果实体未改变，服务器发送客户端丢失的部分，否则发送整个实体。参数也为Etag | If-Range: “737060cd8c284d8af7ad3082f209582d” |
| If-Unmodified-Since | 只在实体在指定时间之后未被修改才请求成功 | If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT |
| Max-Forwards | 限制信息通过代理和网关传送的时间 | Max-Forwards: 10 |
| Pragma | 用来包含实现特定的指令 | Pragma: no-cache |
| Proxy-Authorization | 连接到代理的授权证书 | Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ== |
| Range | 只请求实体的一部分，指定范围 | Range: bytes=500-999 |
| Referer | 先前网页的地址，当前请求网页紧随其后，即来路 | Referer: http://www.zcmhi.com/archives/71.html |
| TE | 客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息 | TE: trailers,deflate;q=0.5 |
| Upgrade | 向服务器指定某种传输协议以便服务器进行转换 | Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11 |
| User-Agent | User-Agent的内容包含发出请求的用户信息 | User-Agent: Mozilla/5.0 (Linux; X11) |
| Via | 通知中间网关或代理服务器地址，通信协议 | Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1) |
| Warning | 关于消息实体的警告信息 | Warn: 199 Miscellaneous warning |

[**HTTP/1.x 的连接管理**](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x)

- 短连接：建立连接、传输数据、关闭连接（频繁建立和关闭会导致开销大）
- 长连接：通过Connection:Keep-alive请求头，保持TCP连接不断开。通过Content-Length（请求长度）或Transfer-Encoding:chunked（分段发送）来区分HTTP请求。
- HTTP 流水线
#### [HTTP security](https://infosec.mozilla.org/guidelines/web_security)
[内容安全策略( CSP )](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)：一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。

- 使用  [Content-Security-Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) HTTP头部
```html
Content-Security-Policy: <policy-directive>; <policy-directive>（一个包含了各种描述你的CSP策略指令的字符串）
// 允许内容来自信任的域名及其子域名 (域名不必须与CSP设置所在的域名相同)
Content-Security-Policy: default-src 'self' *.trusted.com
```

-    [<meta>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)  配置策略
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
```

[HTTP Public Key Pinning (HPKP)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Public_Key_Pinning)	公钥锁定（HPKP）是一种安全功能，它告诉Web客户端将特定加密公钥与某个Web服务器相关联，以降低使用伪造证书进行MITM攻击的风险。  <br />  [HTTP Strict Transport Security](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security)	一个安全功能，它告诉浏览器只能通过HTTPS访问当前资源，而不是HTTP。  <br />  [HTTP cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)

| 属性 | 描述 |
| --- | --- |
| NAME/VALUE | Cookie的名称及相对应的值，对于认证Cookie，Value值包括Web服务器所提供的访问令牌 |
| Expires | Cookie的生存期。两种存储类型：会话性与持久性。Expires属性缺省时，为会话性 |
| Domain | 指定Cookie的域名，默认是当前域名。domain设置时可以设置为自身及其父域，子域可以访问父域的Cookie，反之不能。 |
| Path | 定义了Web站点上可以访问该Cookie的目录 |
| Secure | 是否使用[HTTPS](https://baike.baidu.com/item/HTTPS/285356)安全协议发送Cookie |
| HTTPOnly | 限制Cookie仅在HTTP传输过程中被读取，一定程度上防御XSS攻击 |

### HTTPS
超文本传输安全协议（Hypertext Transfer Protocol Secure）：一种通过计算机网络进行安全通信的传输协议。

- HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。HTTPS报文中的任何东西都被加密，包括所有报头和荷载
- 提供对[网站](https://zh.wikipedia.org/wiki/%E7%B6%B2%E7%AB%99)服务器的[身份认证](https://zh.wikipedia.org/wiki/%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81)，保护交换资料的隐私与[完整性](https://zh.wikipedia.org/wiki/%E5%AE%8C%E6%95%B4%E6%80%A7)。
- HTTPS的信任基于预先安装在[操作系统](https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)中的[证书颁发机构](https://zh.wikipedia.org/wiki/%E8%AF%81%E4%B9%A6%E9%A2%81%E5%8F%91%E6%9C%BA%E6%9E%84)（CA）

HTTPS工作流程  <br />  1、TCP 三次同步握手  <br />  2、客户端验证服务器数字证书  <br />  3、DH 算法协商对称加密算法的密钥、hash 算法的密钥  <br />  4、SSL 安全加密隧道协商完成  <br />  5、网页以加密的方式传输，用协商的对称加密算法和密钥加密，保证数据机密性；用协商的hash算法进行数据完整性保护，保证数据不被篡改。

**HTTP 与 HTTPS 区别**

- HTTP 明文传输，数据都是未加密的，安全性较差，HTTPS（SSL+HTTP） 数据传输过程是加密的，安全性较好。
- 使用 HTTPS 协议需要到 CA（Certificate Authority，数字证书认证机构） 申请证书，一般免费证书较少，因而需要一定费用。证书颁发机构如：Symantec、Comodo、GoDaddy 和 GlobalSign 等。
- HTTP 页面响应速度快，主要是因为 HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包，而 HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包，所以一共是 12 个包。
- http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。
- HTTPS 其实就是建构在 SSL/TLS 之上的 HTTP 协议，所以，要比较 HTTPS 比 HTTP 要更耗费服务器资源。
### SMTP
简易邮件传输协议（Simple Mail Transfer Protocol）一个在[互联网](https://zh.wikipedia.org/wiki/%E7%B6%B2%E9%9A%9B%E7%B6%B2%E8%B7%AF)上传输电子邮件的标准。  <br />  ![](./assets/1643807418256-bd6af272-937f-46f2-a949-7118465d2a84.jpeg)  <br />  不启用SSL时端口号为25，启用SSL时端口号多为465或994
### POP
**邮局协议**（Post Office Protocol）用于支持使用[客户端](https://zh.wikipedia.org/wiki/%E5%AE%A2%E6%88%B7%E7%AB%AF)远程管理在服务器上的电子邮件。最新版本为POP3  <br />  不启用SSL时端口号为110，启用SSL时端口号多为995。
### IMAP
**因特网信息访问协议**（Internet Message Access Protocol）用来从本地邮件客户端访问远程服务器上的邮件。  <br />  不启用SSL时端口号为143，启用SSL时端口号多为993
### FTP
**文件传输协议**（File Transfer Protocol）是一个用于在[计算机网络](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C)上在客户端和服务器之间进行文件传输的协议。  <br />  FTP服务

- 端口20：用于在客户端和服务器之间传输数据流
- 端口21：用于传输控制流，并且是命令通向ftp服务器的进口。

使用模式

- 主动模式：要求客户端和服务器端同时打开并且监听一个端口以创建连接
- 被动模式：只要求服务器端产生一个监听相应端口的进程，可以绕过客户端安装了防火墙的问题。

FTP URL 格式为：`ftp://[user[:password]@]host[:port]/url-path`
### SSH
**Secure Shell**（安全外壳协议）是一种加密的[网络传输协议](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)，可在不安全的网络中为网络服务提供安全的传输环境

- 通过在网络中创建安全隧道来实现SSH客户端与服务器之间的连接
- 以非对称加密实现身份验证

协议框架

- 传输层协议（The Transport Layer Protocol）：传输层协议提供服务器认证，数据机密性，信息完整性等的支持。
- 用户认证协议（The User Authentication Protocol）：用户认证协议为服务器提供客户端的身份鉴别。
- 连接协议（The Connection Protocol）：连接协议将加密的信息隧道复用成若干个逻辑通道，提供给更高层的应用协议使用。

### DHCP
**动态主机设置协议**（Dynamic Host Configuration Protocol，动态主机组态协定）是一个用于[IP](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%99%85%E5%8D%8F%E8%AE%AE)网络的网络协议

- 用于内部网或网络服务供应商自动分配IP地址给用户
- 用于内部网管理员对所有电脑作中央管理

原理

- 使用两个[IANA](https://zh.wikipedia.org/wiki/IANA)分配的端口作为[BOOTP](https://zh.wikipedia.org/wiki/BOOTP)：[服务器端](https://zh.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF)使用67/udp，[客户端](https://zh.wikipedia.org/wiki/%E5%AE%A2%E6%88%B7%E7%AB%AF)使用68/udp。
- 四个基本过程：请求IP租约、提供IP租约、选择IP租约、确认IP租约。
- 客户在获得了一个IP地址后，就可以发送一个[ARP](https://zh.wikipedia.org/wiki/ARP)请求来避免由于DHCP服务器地址池重叠而引发的IP冲突。

### DNS
域名系统（Domain Name System）：互联网的一项服务。它作为将域名和IP地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS使用TCP和UDP端口53。

**网域（Domain Name）**：由一串用点分隔的字符组成的互联网上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的电子方位。

- 域名不区分大小写
- 每一级域名长度的限制是63个字符，域名总长度则不能超过253个字符

ICANN(因特网域名与地址管理机构，Internet Corporation for Assigned Names and Numbers)：承担域名系统管理、IP地址分配、协议参数配置，以及主服务器系统管理等职能而设立的非盈利机构。

### SOCKS
（Protocol for sessions traversal across firewall securely，防火墙安全会话转换协议 ）：用于客户端与外网服务器之间通讯的中间传递。

## 传输层（Transport Layer）
该层的协议为应用进程提供端到端的通信服务。它提供[面向连接的](https://zh.wikipedia.org/wiki/%E9%80%A3%E6%8E%A5%E5%B0%8E%E5%90%91%E5%BC%8F%E9%80%9A%E8%A8%8A)数据流支持、可靠性、流量控制、多路复用等服务。
### TCP
**传输控制协议**（Transmission Control Protocol）一种面向连接的、可靠的、基于[字节流](https://zh.wikipedia.org/wiki/%E5%AD%97%E7%AF%80%E6%B5%81)的传输层通信协议  <br />  三个阶段：

- 连接创建 (connection establishment)
   - 三次握手
- 数据传送（data transfer）
   - 超时重传（Retransmission timeout，RTO）
   - 重复累计确认（duplicate cumulative acknowledgements，DupAcks）
- 连接终止（connection termination）



**TCP数据报结构**  <br />  ![](./assets/1643807418368-bc9bdc7a-1ba9-4127-9c1a-9caa82c50548.jpeg)  <br />  序号Seq（Sequence Number）：占32位，用来标识从计算机A发送到计算机B的数据包的序号，计算机发送数据时对此进行标记。  <br />  确认号Ack（Acknowledge Number）：占32位，客户端和服务器端都可以发送，Ack = Seq + 1。

标志位：每个标志位占用1Bit，共有6个

- SYN(synchronous)： 发送/同步标志，用来建立连接。
- ACK(acknowledgement)：确认标志，表示确认收到请求。
- PSH(push) ：表示推送操作，指数据包到达接收端以后，不对其进行队列处理，而是尽可能的将数据交给应用程序处理；
- FIN(finish)：结束标志，用于结束一个TCP会话；
- RST(reset)：重置复位标志，用于复位对应的TCP连接。
- URG(urgent)：紧急标志，用于保证TCP连接不被中断，并且督促中间层设备尽快处理。



**三次握手 (Three-way Handshake)**  <br />  建立一个TCP连接时，需要客户端和服务器总共发送3个包。  <br />  目的是连接服务器指定端口，建立TCP连接，并同步连接双方的顺序号和确认号并交换 TCP信息  <br />  ![](./assets/1643807418476-ff68797c-e5b8-42f6-ae3c-fddca4aef771.png)

- 第一次握手：客户端Client发送位码为SYN＝1，随机产生消息序列号seq=x的数据包到服务器，服务器Server由SYN=1知道，客户端Client要求建立联机；
- 第二次握手：服务器Server收到请求后要确认联机信息，向客户端Client发送ack=(客户端Client请求连接时的seq)+1，SYN=1，ACK=1，产生seq=y的包，代表接收到连接请求并且向客户端再次确认；
- 第三次握手：客户端Client收到后检查ack是否正确，即第一次发送的seq+1，以及位码ACK是否为1，代表收到了服务器端发过来的确认信息。之后客户端Client会再向服务器发送ack=(服务器Server的seq+1)，ACK=1，服务器Server收到后确认ack 值与ACK=1，连接建立成功。



**四次挥手 **(four-way handshake)  <br />  ![](./assets/1643807418563-2acecf30-91bd-44ad-97f5-edfa1591e8e6.png)

**MSL(Maximum Segment Lifetime) 报文最长存活时间**

- 客户端Client进程发出连接释放报文，并且停止发送数据。其中FIN=1，顺序号为seq=m（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端Client进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。
- 服务器Server收到连接释放报文，发出确认报文，ACK=1，ack=m+1，并且带上自己的顺序号seq=n，此时，服务器Server就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端Client向服务器的方向就释放了，这时候处于半关闭状态，即客户端Client已经没有数据要发送了，但是服务器Server若发送数据，客户端Client依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。
- 客户端Client收到服务器Server的确认信息后，此时，客户端Client就进入FIN-WAIT-2（终止等待2）状态，等待服务器Server发送连接释放报文（在这之前还需要接受服务器Server发送的最后的数据）。
- 服务器Server将最后的数据发送完毕后，就向客户端发送连接释放报文，FIN=1，ack=m+1，由于在半关闭状态，服务器Server很可能又发送了一些数据，假定此时的顺序号为seq=p，此时，服务器Server就进入了LAST-ACK（最后确认）状态，等待客户端Client的确认。
- 客户端Client收到服务器Server的连接释放报文后，必须发出确认，ACK=1，ack=p+1，而自己的顺序号是seq=m+1，此时，客户端Client就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2*MSL（最长报文段寿命）的时间后，当客户端Client撤销相应的TCB（保护程序）后，才进入CLOSED状态。
- 服务器Server只要收到了客户端Client发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器Server结束TCP连接的时间要比客户端Client早一些。



**为什么连接的时候是三次握手，关闭的时候却是四次握手？**  <br />  因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四步握手。  <br />  **为什么TIME_WAIT状态需要经过2MSL(最大报文段生存时间)才能返回到CLOSE状态？**  <br />  按照前面所说，当四个报文全部发送完毕后，理论上就算是结束了。但是实际情况往往不会那么可靠，比如最后一条报文发出后丢失了，那么服务器端就不会接收到这一报文，每隔一段时间，服务器端会再次发出FIN报文，此时如果客户端已经断开了，那么就无法响应服务器的二次请求，这样服务器会继续发出FIN报文，从而变成了死循环。所以需要设置一个时间段，如果在这个时间段内接收到了服务器端的再次请求，则代表客户端发出的ACK报文没有接收成功。反之，则代表服务器端成功接收响应报文，客户端进入CLOSED状态，此次连接成功关闭。而这个时间，就规定为了2MSL，即客户端发出ACK报文到服务器端的最大时间 + 服务器没有接收到ACK报文再次发出FIN的最大时间 = 2MSL

### UDP
**用户**[**数据报**](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E6%8A%A5)**协议**（User Datagram Protocol）是一个简单的面向数据报的通信协议，提供面向事务的简单不可靠信息传送服务

**TCP & UDP**  <br />  1、TCP是面向连接的（在客户端和服务器之间传输数据之前要先建立连接），UDP是无连接的  <br />  2、TCP提供可靠的服务（无差错，不丢失，不重复，且按序到达）；UDP提供面向事务的简单的不可靠的传输。  <br />  3、UDP具有较好的实时性，工作效率比TCP高，适用于对高速传输和实时性比较高的通讯或广播通信  <br />  4、TCP连接只能是点到点的，UDP支持一对一，一对多和多对多的交互通信。  <br />  5、TCP对系统资源要求比较多，UDP对系统资源要求比较少  <br />  6、UDP程序结构更加简单  <br />  7、TCP是流模式，UDP是数据报模式
### TLS / SSL
**传输层安全性协议**（Transport Layer Security）及其前身安全套接层（Secure Sockets Layer）是一种[安全协议](https://zh.wikipedia.org/wiki/%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE)，为互联网通信提供安全及数据完整性保障。

- 采用主从式架构模型，用于在两个应用程序间透过网络创建起安全的连线，防止在交换资料时受到窃听及篡改。



**安全连接**

- 当客户端连接到支持TLS协议的服务器要求创建安全连接并列出了受支持的密码包（包括加密算法、散列算法等），握手开始。
- 服务器从该列表中决定密码包，并通知客户端。
- 服务器发回其数字证书，此证书通常包含服务器的名称、受信任的证书颁发机构（CA）和服务器的公钥。
- 客户端确认其颁发的证书的有效性。
- 为了生成会话密钥用于安全连接，客户端使用服务器的公钥加密随机生成的密钥，并将其发送到服务器，只有服务器才能使用自己的私钥解密。
- 利用随机数，双方生成用于加密和解密的对称密钥。这就是TLS协议的握手，握手完毕后的连接是安全的，直到连接（被）关闭。如果上述任何一个步骤失败，TLS握手过程就会失败，并且断开所有的连接。


## 网络层（Network Layer）
提供[路由](https://zh.wikipedia.org/wiki/%E8%B7%AF%E7%94%B1)和寻址的功能，使两终端系统能够互连且决定最佳路径，并具有一定的拥塞控制和流量控制的能力。

**路由器**（Router）是一种[电讯](https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%A8%8A)网络设备，提供路由与转送两种重要机制，可以决定数据包从来源端到目的端所经过的路由路径（host到host之间的传输路径），这个过程称为路由
### IP
**网际协议**（Internet Protocol，互联网协议）是用于[分组交换](https://zh.wikipedia.org/wiki/%E5%B0%81%E5%8C%85%E4%BA%A4%E6%8F%9B)数据网络的一种协议  <br />  IP 地址（Internet Protocol Address）：用于标识**发送**或接收[数据报](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E6%8A%A5)的设备的一串数字

- 标识设备或网络
- 寻址（location addressing）
#### IPv4
**网际协议版本4**（Internet Protocol version 4，又称互联网通信协议第四版）  <br />  一种[无连接](https://zh.wikipedia.org/wiki/%E7%84%A1%E9%80%A3%E6%8E%A5%E5%BC%8F%E9%80%9A%E8%A8%8A)的协议，操作在使用分组交换的链路层（如以太网）上。此协议会尽最大努力交付数据包，即它不保证任何数据包均能送达目的地，也不保证所有数据包均按照正确的顺序无重复地到达。

**IP 地址 ::= {< 网络号 >, < 主机号 >}**  <br />  IPv4 使用32位（4字节）地址，被分为 4 个 8 位段。  <br />  基本分类

- A 类：前 8 位表示网络 ID，后 24 位表示主机 ID；该地址分配给政府机关单位使用。
- B 类：前 16 位表示网络 ID，后 16 位表示主机 ID；该地址分配给中等规模的企业使用。
- C 类：前 24 位表示网络 ID，后 8 位表示主机 ID；该地址分配给任何需要的人使用。

两类隐藏地址

- D 类：不分网络 ID 和主机 ID；该地址用于多播。
- E 类：不分网络 ID 和主机 ID；该地址用于实验。

![](./assets/1643807418652-ce150b6b-602b-4d29-aa39-8061b41a39c5.gif)

网关（Gateway）：是转发其他服务器通信数据的服务器，接收从客户端发送来的请求时，它就像自己拥有资源的源服务器一样对请求进行处理。

**特殊用途的地址**

| [CIDR](https://zh.wikipedia.org/wiki/CIDR)地址块 | 描述 |
| --- | --- |
| 0.0.0.0/8 | 本网络（仅作为源地址时合法） |
| 10.0.0.0/8 | [专用网络](https://zh.wikipedia.org/wiki/%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C) |
| 100.64.0.0/10 | [电信级NAT](https://zh.wikipedia.org/wiki/%E7%94%B5%E4%BF%A1%E7%BA%A7NAT) |
| 127.0.0.0/8 | [环回](https://zh.wikipedia.org/wiki/Localhost) |
| 169.254.0.0/16 | [链路本地](https://zh.wikipedia.org/wiki/%E9%93%BE%E8%B7%AF%E6%9C%AC%E5%9C%B0%E5%9C%B0%E5%9D%80) |
| 172.16.0.0/12 | [专用网络](https://zh.wikipedia.org/wiki/%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C) |
| 192.0.0.0/24 | 保留（IANA） |
| 192.0.2.0/24 | TEST-NET-1，文档和示例 |
| 192.88.99.0/24 | [6to4](https://zh.wikipedia.org/wiki/6to4)中继 |
| 192.168.0.0/16 | [专用网络](https://zh.wikipedia.org/wiki/%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C) |
| 198.18.0.0/15 | 网络基准测试 |
| 198.51.100.0/24 | TEST-NET-2，文档和示例 |
| 203.0.113.0/24 | TEST-NET-3，文档和示例 |
| 224.0.0.0/4 | [多播](https://zh.wikipedia.org/wiki/%E5%A4%9A%E6%92%AD)（之前的D类网络） |
| 240.0.0.0/4 | 保留（之前的E类网络） |
| 255.255.255.255/32 | [受限广播](https://zh.wikipedia.org/wiki/%E5%8F%97%E9%99%90%E5%B9%BF%E6%92%AD) |


专用网络（**私有IP）**  <br />  不能直接与公共网络通信。需使用[网络地址转换](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2)（NAT）或者代理服务器 （proxy server）来实现

| IP地址区块 | IP数量 | [分类网络](https://zh.wikipedia.org/wiki/%E5%88%86%E7%B1%BB%E7%BD%91%E7%BB%9C) 说明 | 最大[CIDR](https://zh.wikipedia.org/wiki/%E6%97%A0%E7%B1%BB%E5%88%AB%E5%9F%9F%E9%97%B4%E8%B7%AF%E7%94%B1)区块 （[子网掩码](https://zh.wikipedia.org/wiki/%E5%AD%90%E7%BD%91#%E7%BD%91%E7%BB%9C%E6%8E%A9%E7%A0%81)） | 主机端位长 |
| --- | --- | --- | --- | --- |
| 10.0.0.0 – 10.255.255.255 | 16,777,216 | 单个A类网络 | 10.0.0.0/8 (255.0.0.0) | 24位 |
| 172.16.0.0 – 172.31.255.255 | 1,048,576 | 16个连续B类网络 | 172.16.0.0/12 (255.240.0.0) | 20位 |
| 192.168.0.0 – 192.168.255.255 | 65,536 | 256个连续C类网络 | 192.168.0.0/16 (255.255.0.0) | 16位 |

**环回地址 (Loopback Address)**  <br />  地址块127.0.0.0/8被保留作环回通信用。发送至此地址的报文被作为同一虚拟网络设备上的入站报文（环回），主要用于检查TCP/IP协议栈是否正确运行和本机对本机的链接。

无类域间路由（Classless Inter-Domain Routing，CIDR）

- 一个用于给用户分配IP地址以及在互联网上有效地路由IP数据包的对IP地址进行归类的方法。
- 基于可变长子网掩码（VLSM）来进行任意长度的前缀的分配的

NAT（Network Address Translation，[网络地址转换](https://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2)、**网络掩蔽**、IP掩蔽）

- 一种在IP数据包通过路由器或防火墙时重写来源IP地址或目的IP地址的技术。
- 实现局域网的IP地址与广域网的地址之间的相互转换，将广域网IP地址转换为大量的局域网IP地址，减少对公网IP地址的占用。



**网络地址端口转换（NAPT）**

**IP数据报格式**  <br />  ![](./assets/1643807418743-b61d00a8-91f3-43b9-8a90-54ad19d97512.jpeg)

- 版本 : 有 4（IPv4）和 6（IPv6）两个值；
- 首部长度 : 占 4 位，因此最大值为 15。值为 1 表示的是 1 个 32 位字的长度，也就是 4 字节。因为固定部分长度为 20 字节，因此该值最小为 5。如果可选字段的长度不是 4 字节的整数倍，就用尾部的填充部分来填充。
- 区分服务 : 用来获得更好的服务，一般情况下不使用。
- 总长度 : 包括首部长度和数据部分长度。
- 生存时间 ：TTL，它的存在是为了防止无法交付的数据报在互联网中不断兜圈子。以路由器跳数为单位，当 TTL 为 0 时就丢弃数据报。
- 协议 ：指出携带的数据应该上交给哪个协议进行处理，例如 ICMP、TCP、UDP 等。
- 首部检验和 ：因为数据报每经过一个路由器，都要重新计算检验和，因此检验和不包含数据部分可以减少计算的工作量。
- 标识 : 在数据报长度过长从而发生分片的情况下，相同数据报的不同分片具有相同的标识符。
- 片偏移 : 和标识符一起，用于发生分片的情况。片偏移的单位为 8 字节。

#### IPv6
地址长度为128位，16^32，8组4位十六进制地址  <br />  2001:0db8:86a3:08d3:1319:8a2e:0370:7344  <br />  可以用双冒号“::”表示一组0或多组连续的0，但只能出现一次

**IPv6 地址 = **64位的网络前缀 + 64位的主机地址  <br />  EUI-64（64-位扩展唯一标识）：主机地址通常根据物理地址自动生成

**地址分类**

- 单播（unicast）地址：标示一个网络接口。单点广播在来源和目的地间直接进行通信
- 多播（multicast）地址：组播地址。被指定到一群不同的接口，送到多播地址的数据包会被发送到所有的地址。多播地址由皆为一的字节起始，亦即：它们的前置为FF00::/8。其第二个字节的最后四个比特用以标明"范畴"。多点广播存在于单一来源和多个目的地进行通信。
- 任播（anycast）地址：像是Unicast（单点传播）与Broadcast（多点广播）的综合



**特殊地址**

- 未指定地址	::/128－所有比特皆为零的地址称作未指定地址。
- 链路本地地址	::1/128－是一种单播绕回地址。
- 唯一区域地址	fc00::/7－唯一区域地址（ULA，unique local address）只可用于本地通信
- IPv4转译地址	::ffff:x.x.x.x/96－用于IPv4映射地址。
- ···



**地址转换**  <br />  IPv4的一个地址为135.75.43.52（十六进制为0x874B2B34），  <br />  转化为0000:0000:0000:0000:0000:FFFF:874B:2B34 或者::FFFF:874B:2B34。  <br />  使用混合符号（IPv4-compatible address），则地址可以为::ffff:135.75.43.52。
### ICMP
**互联网控制消息协议**（Internet Control Message Protocol）用于[网际协议](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%99%85%E5%8D%8F%E8%AE%AE)（IP）中发送控制消息，提供可能发生在通信环境中的各种问题反馈。  <br />  ICMP报头从IP报头的第160位开始（IP首部20字节）

| Bits | 160-167 | 168-175 | 176-183 | 184-191 |
| --- | --- | --- | --- | --- |
| **160** | Type | Code | 校验码（checksum） |  |
| **192** | Rest of Header |  |  |  |


- Type - ICMP的类型,标识生成的错误报文；
- Code - 进一步划分ICMP的类型,该字段用来查找产生错误的原因.；例如，ICMP的目标不可达类型可以把这个位设为1至15等来表示不同的意思。
- Checksum - Internet校验和（RFC 1071），用于进行错误检查，该校验和是从ICMP头和以该字段替换为0的数据计算得出的。
- Rest of Header - 报头的其余部分，四字节字段，内容根据ICMP类型和代码而有所不同。

## 链路层（link layer）
**数据链路层**（Data Link Layer）
### MAC
**媒体接入控制**（Media Access Control）子层，提供寻址及媒体访问的控制方式，使得不同设备或网络上的节点可以在多点的网络上通信，而不会互相冲突

**MAC地址**（Media Access Control Address，媒体访问控制地址），也称为局域网地址（LAN Address），以太网地址（Ethernet Address）或物理地址（Physical Address），用来确认网络设备位置的地址，在网络中唯一标示一个[网卡](https://zh.wikipedia.org/wiki/%E7%BD%91%E5%8D%A1)

MAC地址共48位（6个字节），以[十六进制](https://zh.wikipedia.org/wiki/%E5%8D%81%E5%85%AD%E9%80%B2%E4%BD%8D)表示

- 第1Bit为广播地址(0)/群播地址(1)
- 第2Bit为广域地址(0)/区域地址(1)
- 前3~24位由IEEE决定如何分配给每一家制造商，且不重复
- 后24位由实际生产该网络设备的厂商自行指定且不重复

网卡（Network Adapter，网络适配器），是连接计算机和传输介质的接口，用来将计算机数据转换为能够通过传输介质传输的信号。
### ARP
**地址解析协议**（Address Resolution Protocol）是一个通过解析[网络层](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%B1%82)地址来找寻数据链路层地址的网络传输协议  <br />  **地址解析（address resolution）**：主机在发送帧前将目标IP地址转换成目标MAC地址的过程
## 网络标准
**从输入网址到获得页面的过程**

1. 浏览器查询 DNS，获取域名对应的IP地址:具体过程包括浏览器搜索自身的DNS缓存、搜索操作系统的DNS缓存、读取本地的Host文件和向本地DNS服务器进行查询等。对于向本地DNS服务器进行查询，如果要查询的域名包含在本地配置区域资源中，则返回解析结果给客户机，完成域名解析(此解析具有权威性)；如果要查询的域名不由本地DNS服务器区域解析，但该服务器已缓存了此网址映射关系，则调用这个IP地址映射，完成域名解析（此解析不具有权威性）。如果本地域名服务器并未缓存该网址映射关系，那么将根据其设置发起递归查询或者迭代查询；
2. 浏览器获得域名对应的IP地址以后，浏览器向服务器请求建立链接，发起三次握手；
3. TCP/IP链接建立起来后，浏览器向服务器发送HTTP请求；
4. 服务器接收到这个请求，并根据路径参数映射到特定的请求处理器进行处理，并将处理结果及相应的视图返回给浏览器；
5. 浏览器解析并渲染视图，若遇到对js文件、css文件及图片等静态资源的引用，则重复上述步骤并向服务器请求这些资源；
6. 浏览器根据其请求到的资源、数据渲染页面，最终向用户呈现一个完整的页面。
### 会话（Session）
跟踪是Web程序中常用的技术，用来跟踪用户的整个会话。  <br />  会话跟踪技术

- Cookie：通过在客户端记录信息确定用户身份，实际上是一小段的文本信息
- Session：通过在服务器端记录信息确定用户身份。



**cookies & session**

- cookie数据存放在客户的浏览器上，session数据放在服务器上
- cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗考虑到安全应当使用session
- session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面
- 单个cookie保存的数据<=4KB，一个站点最多保存20个Cookie。
### URI
**统一资源**[**标识**](https://zh.wikipedia.org/wiki/%E6%A0%87%E8%AF%86)**符**（Uniform Resource Identifier）：一个用于标识某一互联网资源名称的字符串  <br />  格式  <br />  `[协议名]://[用户名]:[密码]@[主机名]:[端口]/[路径]?[查询参数]#[片段ID] `

[URL](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#urls)（**U**niform **R**esource **L**ocator，**统一资源定位符**、**统一资源定位器**、**网页地址**、**网址**）  <br />  [因特网](https://zh.wikipedia.org/wiki/%E5%9B%A0%E7%89%B9%E7%BD%91)上标准的资源的地址，URI的一种常见形式

标准格式  <br />  `[协议类型]://[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID] `  <br />  完整格式  <br />  `[协议类型]://[访问资源需要的凭证信息]@[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID] `

示例：	[https://zh.wikipedia.org:443/w/index.php?title=Special:随机页面](https://zh.wikipedia.org/w/index.php?title=Special:%E9%9A%8F%E6%9C%BA%E9%A1%B5%E9%9D%A2)  <br />  语法规则：

- :port - 定义主机上的端口号（http 的默认端口号是 80）
- path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
- 锚点名称通过网页元素的id属性命名

Protocol

| 方案 | 描述 |
| --- | --- |
| data | [Data URIs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) |
| file | 指定主机上文件的名称 |
| ftp | [文件传输协议](https://developer.mozilla.org/en-US/docs/Glossary/FTP) |
| http/https | [超文本传输协议／安全的超文本传输协议](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) |
| mailto | 电子邮件地址 |
| ssh | 安全 shell |
| tel | 电话 |
| urn | 统一资源名称 |
| view-source | 资源的源代码 |
| ws/wss | （加密的） [WebSocket (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 连接 |

### [MIME](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
**媒体类型**（Multipurpose Internet Mail Extensions ）是一种标准，用来表示文档、文件或字节流的性质和格式。  <br />  通用结构
> type/subtype 由类型与子类型两个字符串中间用'/'分隔而组成。不允许空格存在。type 表示可以被分多个子类的独立类别。 


MIME类型对大小写不敏感，但是传统写法都是小写。  <br />  [**重要的MIME类型**](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types#%E9%87%8D%E8%A6%81%E7%9A%84mime%E7%B1%BB%E5%9E%8B)

- application/octet-stream	默认值，未知的应用程序文件 ，浏览器一般不会自动执行或询问执行。
- text/plain	文本文件默认值，浏览器认为是可以直接展示的
- text/css
- text/html
- text/javascript
- multipart/form-data	用于HTML表单从浏览器发送信息给服务器。
### Port
**端口**，又称协议端口（protocol port）是一种经由软件创建的服务，在一个电脑[操作系统](https://zh.wikipedia.org/wiki/%E4%BD%9C%E6%A5%AD%E7%B3%BB%E7%B5%B1)中扮演通信的端点（endpoint）。

- 标识服务器上提供特定网络服务的进程。
- 由本机地址、本机端口号、目标机地址、目标机端口号、通信协议组成的五元组，用于唯一确定正在使用的网络链接。

TCP，UDP协议使用16bits端口号来表示和区别网络中的不同应用程序，网络层协议IP使用特定的协议号（TCP 6，UDP 17）来表示和区别传输层协议。

**分类**

- 公认端口（Well Known Ports）：0——1023，它们紧密绑定（binding）于一些服务。通常这些端口的通讯明确表明了某种服务的协议。
- 注册端口（Registered Ports）：1024——49151。它们松散地绑定于一些服务
- 动态和/或私有端口（Dynamic and/or Private Ports）：49152——65535。理论上，不应为服务分配这些端口。

常见端口

| **端口号** | **名称** | **注释** |
| --- | --- | --- |
| 1 | tcpmux | TCP 端口服务多路复用 |
| 5 | rje | 远程作业入口 |
| 7 | echo | Echo 服务 |
| 9 | discard | 用于连接测试的空服务 |
| 11 | systat | 用于列举连接了的端口的系统状态 |
| 13 | daytime | 给请求主机发送日期和时间 |
| 17 | qotd | 给连接了的主机发送每日格言 |
| 18 | msp | 消息发送协议 |
| 19 | chargen | 字符生成服务；发送无止境的字符流 |
| 20 | ftp-data | FTP 数据端口 |
| 21 | ftp | 文件传输协议（FTP）端口；有时被文件服务协议（FSP）使用 |
| 22 | ssh | 安全 Shell（SSH）服务 |
| 23 | telnet | Telnet 服务 |
| 25 | smtp | 简单邮件传输协议（SMTP） |
| 37 | time | 时间协议 |
| 39 | rlp | 资源定位协议 |
| 42 | nameserver | 互联网名称服务 |
| 43 | nicname | WHOIS 目录服务 |
| 49 | tacacs | 用于基于 TCP/IP 验证和访问的终端访问控制器访问控制系统 |
| 50 | re-mail-ck | 远程邮件检查协议 |
| 53 | domain | 域名服务（如 BIND） |
| 63 | whois++ | WHOIS++，被扩展了的 WHOIS 服务 |
| 67 | bootps | 引导协议（BOOTP）服务；还被动态主机配置协议（DHCP）服务使用 |
| 68 | bootpc | Bootstrap（BOOTP）客户；还被动态主机配置协议（DHCP）客户使用 |
| 69 | tftp | 小文件传输协议（TFTP） |
| 70 | gopher | Gopher 互联网文档搜寻和检索 |
| 71 | netrjs-1 | 远程作业服务 |
| 72 | netrjs-2 | 远程作业服务 |
| 73 | netrjs-3 | 远程作业服务 |
| 73 | netrjs-4 | 远程作业服务 |
| 79 | finger | 用于用户联系信息的 Finger 服务 |
| 80 | http | 用于万维网（WWW）服务的超文本传输协议（HTTP） |
| 88 | kerberos | Kerberos 网络验证系统 |
| 95 | supdup | Telnet 协议扩展 |
| 101 | hostname | SRI-NIC 机器上的主机名服务 |
| 102 | iso-tsap | ISO 开发环境（ISODE）网络应用 |
| 105 | csnet-ns | 邮箱名称服务器；也被 CSO 名称服务器使用 |
| 107 | rtelnet | 远程 Telnet |
| 109 | pop2 | 邮局协议版本2 |
| 110 | pop3 | 邮局协议版本3 |
| 111 | sunrpc | 用于远程命令执行的远程过程调用（RPC）协议，被网络文件系统（NFS）使用 |
| 113 | auth | 验证和身份识别协议 |
| 115 | sftp | 安全文件传输协议（SFTP）服务 |
| 117 | uucp-path | Unix 到 Unix 复制协议（UUCP）路径服务 |
| 119 | nntp | 用于 USENET 讨论系统的网络新闻传输协议（NNTP） |
| 123 | ntp | 网络时间协议（NTP） |
| 137 | netbios-ns | 在红帽企业 Linux 中被 Samba 使用的 NETBIOS 名称服务 |
| 138 | netbios-dgm | 在红帽企业 Linux 中被 Samba 使用的 NETBIOS 数据报服务 |
| 139 | netbios-ssn | 在红帽企业 Linux 中被 Samba 使用的NET BIOS 会话服务 |
| 143 | imap | 互联网消息存取协议（IMAP） |
| 161 | snmp | 简单网络管理协议（SNMP） |
| 162 | snmptrap | SNMP 的陷阱 |
| 163 | cmip-man | 通用管理信息协议（CMIP） |
| 164 | cmip-agent | 通用管理信息协议（CMIP） |
| 174 | mailq | MAILQ |
| 177 | xdmcp | X 显示管理器控制协议 |
| 178 | nextstep | NeXTStep 窗口服务器 |
| 179 | bgp | 边界网络协议 |
| 191 | prospero | Cliffod Neuman 的 Prospero 服务 |
| 194 | irc | 互联网中继聊天（IRC） |
| 199 | smux | SNMP UNIX 多路复用 |
| 201 | at-rtmp | AppleTalk 选路 |
| 202 | at-nbp | AppleTalk 名称绑定 |
| 204 | at-echo | AppleTalk echo 服务 |
| 206 | at-zis | AppleTalk 区块信息 |
| 209 | qmtp | 快速邮件传输协议（QMTP） |
| 210 | z39.50 | NISO Z39.50 数据库 |
| 213 | ipx | 互联网络分组交换协议（IPX），被 Novell Netware 环境常用的数据报协议 |
| 220 | imap3 | 互联网消息存取协议版本3 |
| 245 | link | LINK |
| 347 | fatserv | Fatmen 服务器 |
| 363 | rsvp_tunnel | RSVP 隧道 |
| 369 | rpc2portmap | Coda 文件系统端口映射器 |
| 370 | codaauth2 | Coda 文件系统验证服务 |
| 372 | ulistproc | UNIX Listserv |
| 389 | ldap | 轻型目录存取协议（LDAP） |
| 427 | svrloc | 服务位置协议（SLP） |
| 434 | mobileip-agent | 可移互联网协议（IP）代理 |
| 435 | mobilip-mn | 可移互联网协议（IP）管理器 |
| 443 | https | 安全超文本传输协议（HTTP） |
| 444 | snpp | 小型网络分页协议 |
| 445 | microsoft-ds | 通过 TCP/IP 的服务器消息块（SMB） |
| 464 | kpasswd | Kerberos 口令和钥匙改换服务 |
| 468 | photuris | Photuris 会话钥匙管理协议 |
| 487 | saft | 简单不对称文件传输（SAFT）协议 |
| 488 | gss-http | 用于 HTTP 的通用安全服务（GSS） |
| 496 | pim-rp-disc | 用于协议独立的多址传播（PIM）服务的会合点发现（RP-DISC） |
| 500 | isakmp | 互联网安全关联和钥匙管理协议（ISAKMP） |
| 535 | iiop | 互联网内部对象请求代理协议（IIOP） |
| 538 | gdomap | GNUstep 分布式对象映射器（GDOMAP） |
| 546 | dhcpv6-client | 动态主机配置协议（DHCP）版本6客户 |
| 547 | dhcpv6-server | 动态主机配置协议（DHCP）版本6服务 |
| 554 | rtsp | 实时流播协议（RTSP） |
| 563 | nntps | 通过安全套接字层的网络新闻传输协议（NNTPS） |
| 565 | whoami | whoami |
| 587 | submission | 邮件消息提交代理（MSA） |
| 610 | npmp-local | 网络外设管理协议（NPMP）本地 / 分布式排队系统（DQS） |
| 611 | npmp-gui | 网络外设管理协议（NPMP）GUI / 分布式排队系统（DQS） |
| 612 | hmmp-ind | HMMP 指示 / DQS |
| 631 | ipp | 互联网打印协议（IPP） |
| 636 | ldaps | 通过安全套接字层的轻型目录访问协议（LDAPS） |
| 674 | acap | 应用程序配置存取协议（ACAP） |
| 694 | ha-cluster | 用于带有高可用性的群集的心跳服务 |
| 749 | kerberos-adm | Kerberos 版本5（v5）的“kadmin”数据库管理 |
| 750 | kerberos-iv | Kerberos 版本4（v4）服务 |
| 765 | webster | 网络词典 |
| 767 | phonebook | 网络电话簿 |
| 873 | rsync | rsync 文件传输服务 |
| 992 | telnets | 通过安全套接字层的 Telnet（TelnetS） |
| 993 | imaps | 通过安全套接字层的互联网消息存取协议（IMAPS） |
| 994 | ircs | 通过安全套接字层的互联网中继聊天（IRCS） |
| 995 | pop3s | 通过安全套接字层的邮局协议版本3（POPS3） |

## CLI
### PING
**Packet Internet Groper (因特网包探索器)**——用于测试网络连接量的程序。  <br />  Ping是工作在 TCP/IP网络体系结构中应用层的一个服务命令， 主要是向特定的目的主机发送 ICMP（Internet Control Message Protocol，因特网报文控制协议）Echo 请求报文，测试目的站是否可达及了解其有关状态。

ping用于确定本地主机是否能与另一台主机成功交换(发送与接收)数据包，再根据返回的信息，就可以推断[TCP/IP](https://baike.baidu.com/item/TCP%2FIP/214077)参数是否设置正确，以及运行是否正常、网络是否通畅等。Ping命令可以进行以下操作：

1. 通过将ICMP(Internet控制消息协议)回显数据包发送到计算机并侦听回显回复数据包来验证与一台或多台远程计算机的连接。
2. 每个发送的数据包最多等待一秒。
3. 打印已传输和接收的数据包数。

需要注意的是，Ping成功并不一定就代表[TCP/IP](https://baike.baidu.com/item/TCP%2FIP/214077)配置正确，有可能还要执行大量的本地主机与远程主机的数据包交换，才能确信TCP/IP配置的正确性。如果执行ping成功而网络仍无法使用，那么问题很可能出在网络系统的软件配置方面，ping成功只保证当前主机与目的主机间存在一条连通的物理路径  。

**ping [-t] [-a] [-n count] [-l size] [-f] [-i TTL]**  <br />  **            [-r count] [-s count] [[-j host-list] | [-k host-list]]**  <br />  **            [-w timeout] [-S srcaddr] [-c compartment] [-p]**  <br />  **            [-4] [-6] target_name**  <br />  选项:
```
-t             Ping 指定的主机，直到停止。
-a             将地址解析为主机名。
-n count       要发送的回显请求数。
-l size        发送缓冲区大小。
-f             在数据包中设置“不分段”标记(仅适用于 IPv4)。
-i TTL         生存时间。
-r count       记录计数跃点的路由(仅适用于 IPv4)。
-s count       计数跃点的时间戳(仅适用于 IPv4)。
-j host-list   与主机列表一起使用的松散源路由(仅适用于 IPv4)。
-k host-list    与主机列表一起使用的严格源路由(仅适用于 IPv4)。
-w timeout     等待每次回复的超时时间(毫秒)。
-S srcaddr     要使用的源地址。
-c compartment 路由隔离舱标识符。
-p             Ping Hyper-V 网络虚拟化提供程序地址。
-4             强制使用 IPv4。
-6             强制使用 IPv6。
```
localhost：环回地址127.0.0.1的别名, ping环回地址可以验证本地计算机是否正确配置安装TCP/IP协议。  <br />  一个网络故障的典型检测过程是从**本地主机**开始的,在大家检测localhost工作正常以后,可以开始按顺序检测本机IP地址、本地局域网相同子网主机、默认网关,最后检测目标主机的网络是否正常。

**TTL（Time To Live，IPv4包头的一个8 bit字段），指定IP包被路由器丢弃之前允许通过的最大网段数量。**

### Tracert
显示数据包到达目标主机所经过的路径（路由器），并显示到达每个节点（路由器）的时间  <br />  **tracert [-d] [-h maximum_hops] [-j host-list] [-w timeout]**  <br />  **               [-R] [-S srcaddr] [-4] [-6] target_name**  <br />  选项:
```
-d                 不将地址解析成主机名。
-h maximum_hops    搜索目标的最大跃点数。
-j host-list       与主机列表一起的松散源路由(仅适用于 IPv4)。
-w timeout         等待每个回复的超时时间(以毫秒为单位)。
-R                 跟踪往返行程路径(仅适用于 IPv6)。
-S srcaddr         要使用的源地址(仅适用于 IPv6)。
-4                 强制使用 IPv4。
-6                 强制使用 IPv6。
```
**返回结果格式**

- 最左侧的, 1, 2.,经过路由节点序号;
- 中间这三列,单位是ms,是表示我们连接到每个路由节点的速度,返回速度和多次链接反馈的平均值;
- 后面的IP,就是每个路由节点对应的IP
- *,在第7个路由节点上,返回消息是超时。



**工作原理**  <br />  通过向目标发送不同IP生存时间(TTL)值的"Internet控制消息协议(ICMP)"回应数据包，Tracert诊断程序确定到目标所采取的路由。要求路径上的每个路由器在转发数据包之前至少将数据包上的TTL递减1，数据包上的TTL减为0时,路由器应该将"ICMP已超时”的消息发回源系统。  <br />  Tracert先发送TTL为1的回应数据包，并在随后的每次发送过程将TTL递增1，直到目标响应或TTL达到最大值，从而**确定路由**。通过检查中间路由器发回的"ICMP已超时”的消息确定路由。某些路由器不经询问直接丢弃TTL过期的数据包，这在Tracert实用程序中看不到。
### pathping
**路由跟踪工具**，提供有关在源和目标之间的中间路由的延迟和网络丢包的信息，它将 ping 和 tracert 命令的功能与这两个工具所不提供的其他信息结合起来，综合了二者的功能

**pathping [-g host-list] [-h maximum_hops] [-i address] [-n]**  <br />  **                [-p period] [-q num_queries] [-w timeout]**  <br />  **                [-4] [-6] target_name**  <br />  选项:
```
-g host-list     与主机列表一起的松散源路由。
-h maximum_hops  搜索目标的最大跃点数。
-i address       使用指定的源地址。
-n               不将地址解析成主机名。
-p period        两次 Ping 之间等待的时间(以毫秒为单位)。
-q num_queries   每个跃点的查询数。
-w timeout       每次回复等待的超时时间(以毫秒为单位)。
-4               强制使用 IPv4。
-6               强制使用 IPv6。
```
### nslookup
用于解析域名，一般用来检测本机的DNS设置是否配置正确

- nslookup [-opt ...]             # 使用默认服务器的交互模式
- nslookup [-opt ...] - server    # 使用 "server" 的交互模式
- nslookup [-opt ...] host        # 仅查找使用默认服务器的 "host"
- nslookup [-opt ...] host server # 仅查找使用 "server" 的 "host"
### netstat
显示协议统计信息和当前 TCP/IP 网络连接  <br />  **NETSTAT [-a] [-b] [-e] [-f] [-n] [-o] [-p proto] [-r] [-s] [-x] [-t] [interval]**  <br />  ** -a            显示所有连接和侦听端口**。  <br />  -b           显示在创建每个连接或侦听端口时涉及的可执行程序。  <br />  **-e            显示以太网统计信息**。  <br />  -f            显示外部地址的完全限定域名(FQDN)。  <br />  **-n            以数字形式显示地址和端口号**。  <br />  -o            显示拥有的与每个连接关联的进程 ID。  <br />  -p proto      显示 proto 指定的协议的连接  <br />  -q            显示所有连接、侦听端口和绑定的非侦听 TCP 端口。  <br />  -r            显示路由表。  <br />  ** -s            显示每个协议的统计信息。**默认情况下显示 IP、IPv6、ICMP、ICMPv6、TCP、TCPv6、UDP 和 UDPv6 的统计信息;  <br />  -t            显示当前连接卸载状态。  <br />  -x            显示 NetworkDirect 连接、侦听器和共享终结点。  <br />  -y            显示所有连接的 TCP 连接模板。无法与其他选项结合使用。  <br />  interval      重新显示选定的统计信息，各个显示间暂停的间隔秒数。  <br />  Netstat是在[内核](https://baike.baidu.com/item/%E5%86%85%E6%A0%B8/108410)中访问网络连接状态及其相关信息的程序，它能提供TCP连接，TCP和UDP监听，进程内存管理的相关报告。  <br />  可以显示[路由表](https://baike.baidu.com/item/%E8%B7%AF%E7%94%B1%E8%A1%A8/2707408)、实际的网络连接以及每一个网络接口设备的状态信息，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据，一般用于检验本机各端口的网络连接情况。

查看所有端口：netstat -ano  <br />  查看指定端口：netstat -ano | findstr "808"  <br />  查看指定进程：tasklist | findstr "808"

arp -a

## 网络设备


**双工**（duplex）：二台[通信](https://zh.wikipedia.org/wiki/%E9%80%9A%E8%A8%8A)设备之间，允许有双向的资料传输

- 半双工（half-duplex）的系统允许二台设备之间的双向资料传输，但不能同时进行。
- 全双工（full-duplex）的系统允许二台设备间同时进行双向资料传输。

**时分双工**（TDD，Time-Division Duplexing）：利用[时间分隔多任务](https://zh.wikipedia.org/wiki/%E6%99%82%E9%96%93%E5%88%86%E9%9A%94%E5%A4%9A%E5%B7%A5)技术来分隔发送及接收的信号。  <br />  **频分双工**（FDD，Frequency-Division Duplexing）：利用[频率分隔多任务](https://zh.wikipedia.org/wiki/%E9%A0%BB%E7%8E%87%E5%88%86%E9%9A%94%E5%A4%9A%E5%B7%A5)技术来分隔发送及接收的信号。上传及  <br />  下载的区段之间用“频率偏移”（frequency offset）的方式分隔。

交换机（Switch）：将多个网络设备连接起来组成一个局域网。  <br />  **网络交换机**（Network switch）：一种网络硬件，通过[报文交换](https://zh.wikipedia.org/wiki/%E6%8A%A5%E6%96%87%E4%BA%A4%E6%8D%A2)接收和转发数据到目标设备，它能够在计算机网络上连接不同的设备。

**路由器**（Router）：又称网关设备，用于连接多个逻辑上分开的网络。  <br />  **中继器**（Repeater）：一个将输入信号增强放大的[模拟](https://zh.wikipedia.org/wiki/%E6%A8%A1%E6%93%AC%E4%BF%A1%E8%99%9F)设备，而不考虑输入信号种类。  <br />  **调制解调器**（Modem，modulator-demodulator）：俗称“猫”，一个将[数字信号](https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7)调变到模拟信号上进行传输，并解调收到的模拟信号以得到数字信号的电子设备。  <br />  **桥接器**（network bridge，网桥）：一种[网络](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C)设备，负责网络桥接（network bridging）。将网络的多个网段在数据链路层连接起来。

- 无线桥接（Wireless bridge）：连接两个或多个物理上或逻辑上（不同网络传输协议）分开的网络区段的硬件组件。
- 透明桥接：使用一个称为转发信息库的表来控制网段之间的帧转发。



**分组交换**（Packet switching）：一种相对于[电路交换](https://zh.wikipedia.org/wiki/%E7%94%B5%E8%B7%AF%E4%BA%A4%E6%8D%A2)的通信范例，分组（又称消息、或消息碎片）在节点间单独路由，不需要在传输前先建立通信路径。

**多路复用**（Multiplexing）：在一个[信道](https://zh.wikipedia.org/wiki/%E4%BF%A1%E9%81%93)上[传输](https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93)多路[信号](https://zh.wikipedia.org/wiki/%E4%BF%A1%E5%8F%B7)或[数据流](https://zh.wikipedia.org/w/index.php?title=%E6%95%B0%E6%8D%AE%E6%B5%81&action=edit&redlink=1)的过程和技术。

- [时分复用](https://zh.wikipedia.org/wiki/%E6%97%B6%E5%88%86%E5%A4%8D%E7%94%A8)（TDM）
- [频分复用](https://zh.wikipedia.org/wiki/%E9%A2%91%E5%88%86%E5%A4%8D%E7%94%A8)（FDM）
- [空分复用](https://zh.wikipedia.org/w/index.php?title=%E7%A9%BA%E5%88%86%E5%A4%8D%E7%94%A8&action=edit&redlink=1)（SDM）
- [码分复用](https://zh.wikipedia.org/wiki/%E7%A0%81%E5%88%86%E5%A4%9A%E5%9D%80)（CDM）
