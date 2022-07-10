
# —— 操作系统（Operating System） ——
操作系统：一组主管并控制[计算机](https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E8%AE%A1%E7%AE%97%E6%9C%BA)操作、运用和运行硬件、软件资源和提供公共服务来组织用户交互的相互关联的系统软件程序，同时也是计算机系统的内核与基石。

**功能**

- 进程管理（Processing management）
- 内存管理（Memory management）
- 文件系统（File system）：将资料以目录或文件的型式存储
- 网络通信（Networking）
- 安全机制（Security）
- 用户界面（User interface）
- 驱动程序（Device drivers）：与硬件交互的电脑软件

内核（Kernel）是一个用来管理[软件](https://zh.wikipedia.org/wiki/%E8%BB%9F%E9%AB%94)发出的资料I/O（输入与输出）要求的电脑程序，将这些要求转译为资料处理的指令并交由中央处理器（CPU）及电脑中其他电子组件进行处理  <br />  [计算机](https://zh.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E8%A8%88%E7%AE%97%E6%A9%9F)集群（computer cluster）是一组松散或紧密连接在一起工作的计算机  <br />  分布式系统（Distributed system）是一组[电脑](https://zh.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E8%A8%88%E7%AE%97%E6%A9%9F)，透过网络相互连接传递消息与通信后并协调它们的行为而形成的系统。

# 进程 线程


**进程（process）** 程序的基本执行实体

- 整批系统环境，进程称为工作（jobs）。
- 分时系统环境，进程称为用户程序（user progams）或任务（tasks）。

**状态（state）**

- 新生（new）
- 运行（running）
- 等待（waiting）：亦称“阻塞”（blocked）
- 就绪（ready）：排班中，等待CPU。
- 结束（terminated）：完成运行。

**进程间通信的方式**

- Inter-Process Communication进程间传递信号或者数据
- 管道（pipe）	效率较低
```shell
# 匿名管道 - 传输数据是单向的，只能用于存在父子关系的进程间通信
ps auxf | grep mysql
# 有名管道
echo "hello" > myPipe
cat < myPipe
```

- 信号（Signal）：异步通信机制	如用户使用ctrl+c产生SIGINT程序终止信号
- 消息队列（Message）：kafka等	保存在内核中的消息链表	通信不及时，并且有大小限制
- 共享内存（share memory）：不常用，不适用于并发
- 信号量（Semaphore）：不常用
   - P 操作，这个操作会把信号量减去 -1，相减后如果信号量 < 0，则表明资源已被占用，进程需阻塞等待；相减后如果信号量 >= 0，则表明还有资源可使用，进程可正常继续执行。
   - V 操作，这个操作会把信号量加上 1，相加后如果信号量 <= 0，则表明当前有阻塞中的进程，于是会将该进程唤醒运行；相加后如果信号量 > 0，则表明当前没有阻塞中的进程；
- 套接字（socket）：常用，跨网络与不同主机上的进程之间通信，如web应用



**线程（thread）**是[操作系统](https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)能够进行运算调度的最小单位，进程中的实际运作单位  <br />  基本状态

- 产生（spawn）
- 阻塞（block）
- 非阻塞（unblock）
- 结束（finish）

线程同步的方式

- 互斥量（锁）：通过互斥机制防止多个线程同时访问公共资源（获得锁之后才能操作）。
- 信号量（Semphare）：控制同一个时刻多个线程访问同一个资源的线程数。
- 事件（信号）：通过通知的方式保持多个线程同步。

[进程调度的准则](http://www.chengxuchu.com/#/%E9%9D%A2%E8%AF%95%E5%9F%BA%E5%9C%B0/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F?id=110-%e8%bf%9b%e7%a8%8b%e8%b0%83%e5%ba%a6%e7%9a%84%e5%87%86%e5%88%99)

- CPU利用率：如何调度可以使CPU的利用率达到最大
- 系统吞吐率：系统吞吐量表示单位时间内CPU完成作业的数量
- 响应时间：调度策略要尽量保证响应时间在用户接受的范围内
- 周转时间：周转时间是作业从开始到完成的所需的时间，尽量使这个时间较小。

概念

- 并发：一个时间段内，x个程序在同一个cpu运行，就可以描述为x并发。
- 并行：在任意时刻点上，有多个程序同时运行在多个cpu上。并行数量和cpu数量一致。
- 同步：指代码调用IO操作时，必须等待IO操作完成才返回的调用方式。
- 异步：指代码调用IO操作时，不必等IO操作完成就返回的调用方式。
- 阻塞：指调用函数的时候当前线程被挂起。
- 非阻塞：指调用函数的时候当前线程不会被挂起，会立即返回。




# 内存管理机制

分页机制

- 程序的逻辑地址划分为固定大小的页（Page）。
- 物理地址划分为同样大小的帧（Frame）。
- 通过页表对应逻辑地址和物理地址。

分段机制

- 分段是为了满足代码的一些逻辑需求。例如防止栈区和堆区互相影响。
- 把一段数据共享、数据保护、动态链接等。
- 通过段表实现逻辑地址和物理地址的映射关系。
- 每个段内部是连续内存分配，段和段之间是离散分配的。
- 通过段号、段长和起始地址。

虚拟内存

- 将内存中暂时不需要的内容放到硬盘上。
- 局部性原理，程序运行的时候只有部分必要信息装入内存。
- 系统提供了比实际内存大得多的容量，称之为虚拟内存。



**CLI**(comand-Line Interface，命令行界面）  <br />  GUI (Graphical User Interface ，图形用户界面)	采用图形方式显示的[计算机](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA)操作用户界面。  <br />  SDK（Software Development Kit，**软件开发工具包**）一般是一些被软件工程师用于为特定的[软件包](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E5%8C%85)、软件框架、硬件平台、操作系统等创建应用软件的开发工具的集合。  <br />  API (Application Programming Interface，应用程序编程接口)  <br />  一种[计算](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97)接口，它定义多个软件中介之间的交互，以及可以进行的调用（call）或请求（request）的种类，如何进行调用或发出请求，应使用的数据格式，应遵循的惯例等。




