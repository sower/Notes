
| 计算机基本部件 |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 输入设备 | 键盘 | 鼠标 | 扫描仪 | 数码绘图板 | 触摸板 | 轨迹球 | 麦克风 | 摄像头 |
| 输出设备 | 显示器 | 音箱 | 打印机 | 耳机 | 扬声器 | 投影仪 |  |  |
| 存储设备 | 固态硬盘 | 移动硬盘 | CD | DVD | 软盘 | 闪存 | 磁带机 |  |
| 机箱内的设备 | 中央处理器 | 随机存取存储器 | 显示卡 | 声卡 | 主板 | 电源供应器 | 硬盘 |  |
| 接口 | 串行端口 | 并行端口 | USB | Firewire | PS/2 | RJ-45 | VGA | DVI |
|  | TRS | S/PDIF | HDMI |  |  |  |  |  |



硬件加速：在计算机中通过把计算量非常大的工作分配给专门的硬件来处理以减轻中央处理器的工作量之技术。

驱动程序（driver）：一个允许高端（High level）电脑软件（computer software）与硬件（hardware）交互的程序，这种程序创建了一个硬件与硬件，或硬件与软件沟通的接口，经由主板上的总线（bus）或其它沟通子系统（subsystem）与硬件形成连接的机制，这样的机制使得硬件设备（device）上的资料交换成为可能。

CPU （Central Processing Unit，中央处理器）：功能主要是解释计算机指令以及处理计算机软件中的数据。

- x86：泛指一系列英特尔公司用于开发处理器的指令集架构，IA-32（Intel Architecture, 32-bit）一般情形下指代32位的架构

由于以“86”作为结尾，包括Intel 8086、80186、80286、80386以及80486，因此其架构被称为“x86”。

- x86-64（64-bit extended，x64，AMD64）：是一个处理器的指令集架构，基于x86架构的64位拓展，向后兼容于16位及32位的x86架构。x64于1999年由AMD设计。其后也为英特尔所采用，现时英特尔称之为“Intel 64”
- ARM架构：一个精简指令集（RISC）处理器架构家族，其广泛地使用在许多嵌入式系统设计。

适用于移动通信领域，符合其主要设计目标为低成本、高性能、低耗电的特性。


# 内存储器（Memory）
用于暂时存放CPU中的运算数据，以及与硬盘等[外部存储器](https://baike.baidu.com/item/%E5%A4%96%E9%83%A8%E5%AD%98%E5%82%A8%E5%99%A8)交换的数据

- 易失性（volatile）：断电后会丢失存储信息，如RAM
- 非易失性（nonvolatile）：如ROM，顺序（Serial）存储器

存储器以二进制计算容量，基本单位是[Byte](https://zh.wikipedia.org/wiki/Byte)

- 1 Kilobyte(KB) =1024B
- 1 Megabyte(MB)
- 1 Gigabyte(GB)
- 1 Terabyte(TB)
- 1 Petabyte(PB)
- 1 Exabyte(EB)
- 1 Zettabyte(ZB)
- 1 Yottabyte(YB)



**ROM（Read-Only Memory，只读存储器）**

- 固定ROM：掩模编程（mask programming）
- 可编程ROM
   - PROM：一次可编程（programmable），熔丝或反熔丝
   - EPROM：光可擦除（Erasable）编程
   - EEPROM：电（Electrically）可擦除
   - FLASH（闪存）

**RAM（Random-Access Memory，随机存储器）**

- SRAM：（Static）存储单元类似于锁存器，有0，1两个稳态
- DRAM：（Dynamic）用电容器存储电荷来保存0或1，需要定时刷新

硬盘（Hard Disk Drive）

- 固态硬盘（SSD）采用闪存颗粒来存储
- 机械硬盘（HDD）采用磁性碟片来存储


显卡（Video card，Graphics card，显示接口卡  <br />  [显示适配器](https://baike.baidu.com/item/%E6%98%BE%E7%A4%BA%E9%80%82%E9%85%8D%E5%99%A8)（Video adapter）：将计算机系统所需要的显示信息进行转换驱动电脑，并提供逐行或隔行扫描信号，控制电脑的正确显示，是连接显示器和个人电脑主板的重要组件，是“人机对话”的重要设备之一。

构成

- 显示芯片 GPU，（Graphic Processing Unit，图形处理器）
- 显存，显示内存：暂时储存显示芯片要处理的数据和处理完毕的数据。

分类

- 集成显卡是将显示芯片、显存及其相关电路都集成在主板上，与其融为一体；
- 独立显卡是指将显示芯片、显存及其相关电路单独做在一块电路板上，自成一体而作为一块独立的板卡存在，它需占用主板的扩展插槽（ISA、PCI、AGP或PCI-E)。

NVIDIA  <br />  GeForce Experience  <br />  1.及时更新英伟达显卡的驱动程序；  <br />  2.根据你的显卡优化适配的游戏选项。  <br />  Nvidia® Geforce® Experience™：一款专为游戏玩家设计的软件，它可以帮助Nvidia显卡用户快速升级驱动、优化游戏设置、截取游戏画面。在出货搭载Nvidia显卡的机台中，该软件随显卡驱动一并安装。


**总线**  <br />  构成计算机系统的其他高速功能部件

- 内部总线：CPU内部连接各寄存器及运算部件之间的总线。
- 系统总线：CPU同计算
- I/O总线：中、低速I/O计算机系统的互连机构，是多个系统功能部件之间进行数据传送的公共通路。



# USB
Universal Serial Bus（[通用串行总线](https://baike.baidu.com/item/%E9%80%9A%E7%94%A8%E4%B8%B2%E8%A1%8C%E6%80%BB%E7%BA%BF/8635470)）：一个[外部总线](https://baike.baidu.com/item/%E5%A4%96%E9%83%A8%E6%80%BB%E7%BA%BF)标准，用于规范电脑与[外部设备](https://baike.baidu.com/item/%E5%A4%96%E9%83%A8%E8%AE%BE%E5%A4%87)的连接和通讯

| USB版本 |  |  | **标志** | 传输速率 | 理论速度 |
| --- | --- | --- | --- | --- | --- |
| 官方版本名 |  | 官方市场代号 |  |  |  |
| USB 2.0 | LowSpeed | 低速  <br />  Low Speed |   <br />   | 1.5Mbps | 0.1875MB/s |
|  | FullSpeed | 全速  <br />  Full Speed | 12Mbps | 1.5MB/s |  |
|  | HiSpeed | 高速  <br />  Hi-Speed |   <br />   | 480Mbps | 60MB/s |
| USB 3.2 | Gen 1 | 超高速USB5Gbps  <br />  SuperSpeed USB |   <br />   | 5Gbps | 500MB/s |
|  | Gen 2 | 超高速USB 10Gbps  <br />  SuperSpeed USB 10Gbps |   <br />   | 10Gbps | 1212.12MB/s |
|  | Gen 2x2 | 超高速USB 20Gbps  <br />  SuperSpeed USB 20Gbps |   <br />   | 20Gbps | 2424.24MB/s |
| USB 4 |  |  |   <br />   | 40Gbps | 5GB/s |


标准的[USB](https://zh.wikipedia.org/wiki/USB)使用主从式的架构，USB主机端（即电脑）是“主”，而USB周边设备是“从”。只有USB服务器可以调度该链接的设置与资料传输。USB周边设备不能够自行引导资料传输，只能回应服务器的指令

**OTG**  <br />  **USB On-The-Go**，是[USB 2.0](https://zh.wikipedia.org/wiki/USB_2.0)规格的补充标准。它可使USB设备（如播放器或手机）从USB周边设备变为USB主机，与其他USB设备连接通信


HDMI（High Definition Multimedia Interface，高清多媒体界面）是一种全数字化影像和声音发送接口，可以发送未压缩的音频及视频信号。
