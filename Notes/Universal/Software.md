

# —— 软件（Software）——
**软件**是一系列按照特定顺序组织的[电脑](https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%85%A6)数据和指令，是电脑中的非有形部分

**使用许可**

- [专有软件](https://zh.wikipedia.org/wiki/%E4%B8%93%E6%9C%89%E8%BD%AF%E4%BB%B6)：此类授权通常不允许用户随意的复制、研究、修改或散布该软件。
- [自由软件](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E8%BB%9F%E9%AB%94)：此类授权正好与专属软件相反，赋予用户复制、研究、修改和散布该软件的权利，并提供源码供用户自由使用，仅给予些许的其它限制。以[Linux](https://zh.wikipedia.org/wiki/Linux)、[Firefox](https://zh.wikipedia.org/wiki/Firefox)和[OpenOffice](https://zh.wikipedia.org/wiki/OpenOffice)可做为此类软件的代表。
- [共享软件](https://zh.wikipedia.org/wiki/%E5%85%B1%E4%BA%AB%E8%BB%9F%E9%AB%94)：通常可免费的获取并使用其试用版，但在功能或使用期间上受到限制。开发者会鼓励用户付费以获取功能完整的商业版本。
- [免费软件](https://zh.wikipedia.org/wiki/%E5%85%8D%E8%B2%BB%E8%BB%9F%E9%AB%94)：可免费的获取和散布，但并不提供源码，也无法修改。
- [公共软件](https://zh.wikipedia.org/wiki/%E5%85%AC%E6%9C%89%E9%A0%98%E5%9F%9F)：原作者已放弃权利，[著作权](https://zh.wikipedia.org/wiki/%E8%91%97%E4%BD%9C%E6%AC%8A)过期，或作者已不可考的软件。使用上无任何限制。

**绿色软件**（portable software，**便携软件**）一类小型[软件](https://zh.wikipedia.org/wiki/%E8%BB%9F%E9%AB%94)，多数为[免费软件](https://zh.wikipedia.org/wiki/%E5%85%8D%E8%B2%BB%E8%BB%9F%E9%AB%94)，最大特点是软件无需安装便可使用，可存放于可移除式存储媒体中，移除后也不会将任何纪录（[注册表](https://zh.wikipedia.org/wiki/%E6%B3%A8%E5%86%8C%E8%A1%A8)消息等）留在本机电脑上。



# 软件架构（Software Architecture）
软件的基本结构


## 分层架构（Layered architecture）
将软件分成若干个水平层，每一层都有清晰的角色和分工，不需要知道其他层的细节。层与层之间通过接口通信。

- 表现层（presentation）：用户界面，负责视觉和用户互动
- 业务层（business）：实现业务逻辑
- 持久层（persistence）：提供数据，SQL 语句就放在这一层
- 数据库（database） ：保存数据

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016090303.png#crop=0&crop=0&crop=1&crop=1&id=d7Goo&originHeight=511&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

##   <br />  


## 事件驱动架构（event-driven architecture）
通过事件进行通信的软件架构。  <br />  事件（event）是状态发生变化时，软件发出的通知。

- 事件队列（event queue）：接收事件的入口
- 分发器（event mediator）：将不同的事件分发到不同的业务逻辑单元
- 事件通道（event channel）：分发器与处理器之间的联系渠道
- 事件处理器（event processor）：实现业务逻辑，处理完成后会发出事件，触发下一步操作

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016090304.png#crop=0&crop=0&crop=1&crop=1&id=JUJDi&originHeight=578&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

##   <br />  

##   <br />  

## 微核架构（microkernel architecture）
又称为"插件架构"（plug-in architecture），软件的内核相对较小，主要功能和业务逻辑都通过插件实现。  <br />  内核（core）通常只包含系统运行的最小功能。插件则是互相独立的，插件之间的通信，应该减少到最低，避免出现互相依赖的问题。  <br />  ![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016090306.png#crop=0&crop=0&crop=1&crop=1&id=eAuUP&originHeight=487&originWidth=722&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

##   <br />  

##   <br />  

## 微服务架构（microservices architecture）
是服务导向架构（service-oriented architecture，缩写 SOA）的升级。  <br />  每一个服务就是一个独立的部署单元（separately deployed unit）。这些单元都是分布式的，互相解耦，通过远程通信协议（比如REST、SOAP）联系  <br />  ![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016090307.png#crop=0&crop=0&crop=1&crop=1&id=kXDwk&originHeight=460&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  实现模式。

- RESTful API 模式：服务通过 API 提供，云服务就属于这一类
- RESTful 应用模式：服务通过传统的网络协议或者应用协议提供，背后通常是一个多功能的应用程序，常见于企业内部
- 集中消息模式：采用消息代理（message broker），可以实现消息队列、负载均衡、统一日志和异常处理，缺点是会出现单点失败，消息代理可能要做成集群

##   <br />  

## 云结构（cloud architecture）
主要解决扩展性和并发的问题，是最容易扩展的架构

- 处理单元（processing unit）：实现业务逻辑
- 虚拟中间件（virtualized middleware）：负责通信、保持sessions、数据复制、分布式处理、处理单元的部署。
- 消息中间件（Messaging Grid）：管理用户请求和session，当一个请求进来以后，决定分配给哪一个处理单元。
- 数据中间件（Data Grid）：将数据复制到每一个处理单元，即数据同步。保证某个处理单元都得到同样的数据。
- 处理中间件（Processing Grid）：可选，如果一个请求涉及不同类型的处理单元，该中间件负责协调处理单元
- 部署中间件（Deployment Manager）：负责处理单元的启动和关闭，监控负载和响应时间，当负载增加，就新启动处理单元，负载减少，就关闭处理单元。

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016090311.png#crop=0&crop=0&crop=1&crop=1&id=cVtlo&originHeight=402&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)





# 开源协议

**知识共享许可协议**  <br />  创用**CC**许可（**C**reative **C**ommons license）是一种[公共著作权许可协议](https://zh.wikipedia.org/w/index.php?title=%E5%85%AC%E5%85%B1%E7%89%88%E6%9D%83%E6%8E%88%E6%AC%8A%E6%A2%9D%E6%AC%BE&action=edit&redlink=1)，其允许分发受著作权保护的作品。一个创作共享许可用于一个作者想给他人分享，使用，甚至创作派生作品的权利。

| 标志 | 权利 | 备注 |
| --- | --- | --- |
| [![image.png](./assets/1651321228013-87b608cf-7a43-496f-b169-06c78447d0d4.png) | **署名**（Attribution，**by**） | 您（用户）可以复制、发行、展览、表演、放映、广播或通过信息网络传播本作品；您必须按照作者或者许可人指定的方式对作品进行署名。 |
| [![image.png](./assets/1651321227978-a9d06ba2-d0d0-4691-80fb-5a4133b1496b.png)  <br />  （**S**hare**A**like，**sa**） | 您可以自由复制、散布、展示及演出本作品；若您改变、转变或更改本作品，仅在遵守与本作品相同的许可条款下，您才能散布由本作品产生的派生作品。 |
| [![image.png](./assets/1651321227985-f31fccec-826b-40f6-ac8d-a04ee1fe5d94.png)  <br />  目的而使用本作品。 |
| [![image.png](./assets/1651321227980-f08630fb-3237-446c-b7e0-105f708ff968.png) | 您可以自由复制、散布、展示及演出本作品；您不得改变、转变或更改本作品。 |


公共领域（public domain）：如果一种开源许可证没有任何使用条件，保留作者信息都不需要，等同于放弃版权了  <br />  宽松式许可证（permissive license）：最基本的类型，对用户几乎没有限制。用户可以修改代码后闭源。  <br />  Copyleft 许可证

- 如果分发二进制格式，必须提供源码
- 修改后的源码，必须与修改前保持许可证一致
- 不得在原始许可证以外，附加其他限制


**GNU GPL（GNU General Public License，GNU通用公共许可证）**  <br />  只要软件中包含了遵循 GPL 协议的产品或代码，该软件就必须也遵循 GPL 许可协议，也就是必须开源免费，不能闭源收费，因此这个协议并不适合商用软件。

| 特点 | 说明 |
| --- | --- |
| 复制自由 | 允许把软件复制到任何人的电脑中，并且不限制复制的数量。 |
| 传播自由 | 允许软件以各种形式进行传播。 |
| 收费传播 | 允许在各种媒介上出售该软件，但必须提前让买家知道这个软件是可以免费获得的；因此，一般来讲，开源软件都是通过为用户提供有偿服务的形式来盈利的。 |
| 修改自由 | 允许开发人员增加或删除软件的功能，但软件修改后必须依然基于GPL许可协议授权。 |

  <br />  **BSD（Berkeley Software Distribution，伯克利软件发布版）协议**

- 如果再发布的软件中包含源代码，则源代码必须继续遵循 BSD 许可协议。
- 如果再发布的软件中只有二进制程序，则需要在相关文档或版权文件中声明原始代码遵循了 BSD 协议。
- 不允许用原始软件的名字、作者名字或机构名称进行市场推广。

**Apache 许可证版本（Apache License Version）协议**

- 该软件及其衍生品必须继续使用 Apache 许可协议。
- 如果修改了程序源代码，需要在文档中进行声明。
- 若软件是基于他人的源代码编写而成的，则需要保留原始代码的协议、商标、专利声明及其他原作者声明的内容信息。
- 如果再发布的软件中有声明文件，则需在此文件中标注 Apache 许可协议及其他许可协议。

**MIT（Massachusetts Institute of Technology）协议**  <br />  目前限制最少的开源许可协议之一（比 BSD 和 Apache 的限制都少），只要程序的开发者在修改后的源代码中保留原作者的许可信息即可，因此普遍被商业软件所使用。

**GUN LGPL（GNU Lesser General Public License，GNU 宽通用公共许可证）**  <br />  LGPL 是 GPL 的一个衍生版本，也被称为 GPL V2，该协议主要是为类库设计的开源协议。  <br />  ![](http://c.biancheng.net/uploads/allimg/190328/1-1Z32QI643931.gif#crop=0&crop=0&crop=1&crop=1&id=xyaa4&originHeight=605&originWidth=1000&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
