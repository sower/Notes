<a name="PB3PP"></a>
# —— 操作系统（Operating System） ——
操作系统：一组主管并控制[计算机](https://zh.wikipedia.org/wiki/%E7%94%B5%E5%AD%90%E8%AE%A1%E7%AE%97%E6%9C%BA)操作、运用和运行硬件、软件资源和提供公共服务来组织用户交互的相互关联的系统软件程序，同时也是计算机系统的内核与基石。<br />**​**

**功能**

- 进程管理（Processing management）
- 内存管理（Memory management）
- 文件系统（File system）：将资料以目录或文件的型式存储
- 网络通信（Networking）
- 安全机制（Security）
- 用户界面（User interface）
- 驱动程序（Device drivers）：与硬件交互的电脑软件

​

内核（Kernel）是一个用来管理[软件](https://zh.wikipedia.org/wiki/%E8%BB%9F%E9%AB%94)发出的资料I/O（输入与输出）要求的电脑程序，将这些要求转译为资料处理的指令并交由中央处理器（CPU）及电脑中其他电子组件进行处理<br />[计算机](https://zh.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E8%A8%88%E7%AE%97%E6%A9%9F)集群（computer cluster）是一组松散或紧密连接在一起工作的计算机<br />分布式系统（Distributed system）是一组[电脑](https://zh.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E8%A8%88%E7%AE%97%E6%A9%9F)，透过网络相互连接传递消息与通信后并协调它们的行为而形成的系统。
<a name="fV0Zk"></a>
# 进程 线程
**​**

**进程（process）** 程序的基本执行实体

- 整批系统环境，进程称为工作（jobs）。
- 分时系统环境，进程称为用户程序（user progams）或任务（tasks）。

​

**状态（state）**

- 新生（new）
- 运行（running）
- 等待（waiting）：亦称“阻塞”（blocked）
- 就绪（ready）：排班中，等待CPU。
- 结束（terminated）：完成运行。

​

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

**​**

**线程（thread）**是[操作系统](https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)能够进行运算调度的最小单位，进程中的实际运作单位<br />基本状态

- 产生（spawn）
- 阻塞（block）
- 非阻塞（unblock）
- 结束（finish）

​

线程同步的方式

- 互斥量（锁）：通过互斥机制防止多个线程同时访问公共资源（获得锁之后才能操作）。
- 信号量（Semphare）：控制同一个时刻多个线程访问同一个资源的线程数。
- 事件（信号）：通过通知的方式保持多个线程同步。

​

[进程调度的准则](http://www.chengxuchu.com/#/%E9%9D%A2%E8%AF%95%E5%9F%BA%E5%9C%B0/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F?id=110-%e8%bf%9b%e7%a8%8b%e8%b0%83%e5%ba%a6%e7%9a%84%e5%87%86%e5%88%99)

- CPU利用率：如何调度可以使CPU的利用率达到最大
- 系统吞吐率：系统吞吐量表示单位时间内CPU完成作业的数量
- 响应时间：调度策略要尽量保证响应时间在用户接受的范围内
- 周转时间：周转时间是作业从开始到完成的所需的时间，尽量使这个时间较小。

​

概念

- 并发：一个时间段内，x个程序在同一个cpu运行，就可以描述为x并发。
- 并行：在任意时刻点上，有多个程序同时运行在多个cpu上。并行数量和cpu数量一致。
- 同步：指代码调用IO操作时，必须等待IO操作完成才返回的调用方式。
- 异步：指代码调用IO操作时，不必等IO操作完成就返回的调用方式。
- 阻塞：指调用函数的时候当前线程被挂起。
- 非阻塞：指调用函数的时候当前线程不会被挂起，会立即返回。

​

​

​<br />
<a name="W0GZq"></a>
# 内存管理机制
​

分页机制

- 程序的逻辑地址划分为固定大小的页（Page）。
- 物理地址划分为同样大小的帧（Frame）。
- 通过页表对应逻辑地址和物理地址。

​

分段机制

- 分段是为了满足代码的一些逻辑需求。例如防止栈区和堆区互相影响。
- 把一段数据共享、数据保护、动态链接等。
- 通过段表实现逻辑地址和物理地址的映射关系。
- 每个段内部是连续内存分配，段和段之间是离散分配的。
- 通过段号、段长和起始地址。

​

虚拟内存

- 将内存中暂时不需要的内容放到硬盘上。
- 局部性原理，程序运行的时候只有部分必要信息装入内存。
- 系统提供了比实际内存大得多的容量，称之为虚拟内存。

**​**

**​**

**CLI**(comand-Line Interface，命令行界面）<br />GUI (Graphical User Interface ，图形用户界面)	采用图形方式显示的[计算机](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA)操作用户界面。<br />SDK（Software Development Kit，**软件开发工具包**）一般是一些被软件工程师用于为特定的[软件包](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E5%8C%85)、软件框架、硬件平台、操作系统等创建应用软件的开发工具的集合。<br />API (Application Programming Interface，应用程序编程接口)<br />一种[计算](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97)接口，它定义多个软件中介之间的交互，以及可以进行的调用（call）或请求（request）的种类，如何进行调用或发出请求，应使用的数据格式，应遵循的惯例等。<br />​<br />
<a name="MsvFx"></a>
# [WSL](https://docs.microsoft.com/zh-cn/windows/wsl/)
Windows Subsystem for Linux
```shell
ultra  1999
```
重置密码
```shell
passwd
```
更新和升级包
```shell
sudo apt update && sudo apt upgrade
```
**​**

**安装**
```shell
wsl --install
```

- 启用可选的 WSL 和虚拟机平台组件
- 下载并安装最新 Linux 内核
- 将 WSL 2 设置为默认值
- 下载并安装 Ubuntu Linux 分发 (可能需要重新启动)

​

更改默认安装的 Linux 发行版
```shell
查看可通过在线商店下载的可用 Linux 发行版列表
wsl --list --online 或 wsl -l -o
在初始安装后安装其他 Linux 发行版
wsl --install -d <Distribution Name>
```
**​**

**旧版安装**<br />1 启用适用于 Linux 的 Windows 子系统<br />管理员身份打开 PowerShell 并运行：
```shell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
2 启用虚拟机功能
```shell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
3 下载 Linux 内核更新包

- 适用于 x64 计算机的 WSL2 Linux 内核更新包

4 将 WSL 2 设置为默认版本
```shell
wsl --set-default-version 2
```
5 安装所选的 Linux 分发<br />Microsoft Store<br />​

Linux GUI<br />更新重启
```shell
wsl --update
wsl --shutdown
```
​

建议不要跨操作系统使用文件

- 使用 Linux 文件系统根目录：\wsl$\Ubuntu-18.04\home<user name>\Project
- 而不使用 Windows 文件系统根目录：/mnt/c/Users//Project$ 或 C:\Users<user name>\Project

访问主文件夹的 Windows 路径
```shell
cd ~ 
explorer.exe .
# \\wsl$\Ubuntu\root

# /mnt 文件夹下装载的本地驱动器
cd /mnt/<drive letter>/

# 主目录
wsl ~
```
**​**

[**互操作性**](https://docs.microsoft.com/zh-cn/windows/wsl/filesystems)<br />混合 Linux 和 Windows 命令
```shell
# in powershell
wsl ls -la | findstr "git"
C:\temp> dir | wsl grep git
# 列出 /proc/cpuinfo Linux 文件系统路径中的文件
C:\temp> wsl ls -la /proc/cpuinfo
# 列出 C:\Program Files Windows 文件系统路径中的文件
C:\temp> wsl ls -la "/mnt/c/Program Files"

# 从 Linux 运行 Windows 工具
notepad.exe C:\\temp\\foo.txt
ipconfig.exe | grep IPv4 | cut -d: -f2
ls -la | findstr.exe foo.txt
```
禁用互操作性
```shell
# root 身份运行
 
# 禁用针对单个 WSL 会话运行 Windows 工具的功能
echo 0 > /proc/sys/fs/binfmt_misc/WSLInterop

# 重新启用 Windows 二进制文件
echo 1 > /proc/sys/fs/binfmt_misc/WSLInterop
```
​

Windows 与 WSL 之间的共享环境变量
```shell
WSLENV=HOME/w:GOPATH/l:TMPDIR/p …
```
标志

- /p - 在 WSL/Linux 样式路径与 Win32 路径之间转换路径。
- /l - 指示环境变量是路径列表。
- /u - 指示仅当从 Win32 运行 WSL 时，才应包含此环境变量。
- /w - 指示仅当从 WSL 运行 Win32 时，才应包含此环境变量。

**​**

**CLI**<br />`wsl [Argument] [Options...] [CommandLine]`

- --distribution, -d <分发版>        运行指定的分发。
- --user, -u <用户名>        以指定用户身份运行。
- --export <分发版> <文件名>
- 将分发导出到 tar 文件。
- 对于标准输出，文件名可以是 -。
- --import <分发版> <安装位置> <文件名> [选项]
- --shutdown       立即终止所有正在运行的分发和 WSL 2 轻型工具虚拟机。

​<br />

- --status	显示适用于 Linux 的 Windows 子系统的状态。
- --update [--rollback]		 WSL 2 内核将更新到最新版本 [还原到 WSL 2 内核的先前版本]
- --list, -l [--all | --running]

​<br />

- --set-default, -s <分发版>
- --set-default-version <版本>
- --set-version <分发版> <版本>
- --terminate, -t <分发版>       终止指定的分发。
- --unregister <分发版>        注销分发。

​

 <DistributionName> config --default-user <Username><br />​

​<br />
<a name="on4kG"></a>
# Virtual Machine
<a name="YI3Hs"></a>
# Hyper-V
虚拟机管理 服务 vmms
```shell
Get-VM	返回虚拟机列表
Start-VM | Stop-VM -Name <virtual machine name>	启动和关闭虚拟机
```

- 进入/退出全屏 的快捷键	Ctr + Alt + Pause/Break
- 鼠标释放快捷键			Ctr + Alt + Left ( 左方向键 )

**​**

**2019.9.25 Create Virtual Machine（Hyper-V） - Ubuntu 18.04TLS**<br />Ubuntu 18.04.5 LTS<br />设备名称	VM<br />内存	2.7 GiB<br />图形Ilvmpipe (LLVM 10.0.0, 256 bits)<br />GNOME 3.28.2<br />系统类型	64位<br />虚拟化	Microsoft<br />磁盘	31.6 GB<br />内存	4.8 GiB<br />Disk Capacity	32.2 GB<br />OS Name	Ubuntu 20.04.1 LTS<br />OS Type	64位<br />GNOME Version	3.36.3<br />Windowing System	x11
<a name="s8l8x"></a>
## FQA
**Hyper-V 中调整Ubuntu分辨率**

- sudo vi /etc/default/grub
- 找到GRUB_CMDLINE_LINUX_DEFAULT, 添加video=hyperv_fb:[the resolution you want]
- 示例: GRUB_CMDLINE_LINUX_DEFAULT="quiet splash video=hyperv_fb:1920x1080"
- 运行 sudo update-grub
- 重启 sudo reboot

**Ubuntu 18.04 SSH 无法远程登录**

1. 安装 openssh：sudo apt-get install openssh-server
1. 配置文件——允许以 root 用户通过 ssh 登录
1. sudo vi /etc/ssh/sshd_config
1. 将	PermitRootLogin prohibit-password  改成  PermitRootLogin yes
1. 重启：sudo service ssh restart

**bash shell可以TAB 补全和 Python 解释器中代码输入的历史记录**<br />**~/.pythonrc **
```shell
import rlcompleter, readline
readline.parse_and_bind('tab: complete')
history_file = os.path.expanduser('~/.python_history')
readline.read_history_file(history_file)
import atexit
atexit.register(readline.write_history_file, history_file)
```
** ~/.bashrc **
```shell
export PYTHONSTARTUP=~/.pythonrc
```
**source ~/.bashrc**
