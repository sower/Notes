
# Android SDK
**配置环境变量**
```javascript
变量名：ANDROID_HOME
变量值：D:\android-sdk-windows //SDK的实际安装路径

变量名：Path
变量值：%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools
```


## 命令行工具 cmdline-tools

### [apkanalyzer](https://developer.android.google.cn/studio/command-line/apkanalyzer?hl=zh-cn)
用于在构建流程完成后深入分析您的 APK 组成。
```shell
apkanalyzer [--human-readable] subject verb [options] apk-file [apk-file2]
```
subject 查询的内容

- apk：分析 APK 文件属性，如应用 ID、版本代码和版本名称。
- files：分析 APK 文件内的文件。
- manifest：分析 APK 文件内的清单的内容。
- dex：分析 APK 文件内的 DEX 文件。
- resources：查看文本、图像和字符串资源。

verb

| 查看 APK 文件属性 | 说明 |
| --- | --- |
| apk summary _apk-file_ | 输出应用 ID、版本代码和版本名称。 |
| apk file-size _apk-file_ | 输出 APK 的总文件大小。 |
| apk download-size _apk-file_ | 输出 APK 的下载大小估计值。 |
| apk features [--not-required] _apk-file_ | 输出 APK 用来触发 [Play 商店过滤](https://developer.android.google.cn/google/play/filters?hl=zh-cn#manifest-filters)的功能 |
| apk compare [_options_] _apk-fileapk-file2_ | 比较 _apk-file_ 和 _apk-file2_ 的大小 |
| 查看 APK 文件系统 | 说明 |
| files list _apk-file_ | 列出 APK 中的所有文件 |
| files cat --file _pathapk-file_ | 输出文件内容 |
| 查看清单中的信息 | 说明 |
| manifest print _apk-file_ | 以 XML 格式输出 APK 清单。 |
| manifest application-id _apk-file_ | 输出应用 ID 值。 |
| manifest version-name _apk-file_ | 输出版本名称值。 |
| manifest version-code _apk-file_ | 输出版本代码值。 |
| manifest min-sdk _apk-file_ | 输出最低 SDK 版本。 |
| manifest target-sdk _apk-file_ | 输出目标 SDK 版本。 |
| manifest permissions _apk-file_ | 输出权限列表。 |
| manifest debuggable _apk-file_ | 输出应用是否可调试。 |
| 访问 DEX 文件信息 | 说明 |
| dex list _apk-file_ | 输出 APK 中的 DEX 文件列表。 |
| dex references [--files _path_] [--files _path2_] _apk-file_ | 输出指定 DEX 文件中的方法引用数 |


### [avdmanager](https://developer.android.google.cn/studio/command-line/avdmanager?hl=zh-cn)
创建和管理 Android 虚拟设备 (AVD)。
```shell
avdmanager [global options] command [command options]
```
全局选项

- -s 	静默模式：仅输出错误
- -h 	使用帮助
- -v 	详细模式：输出错误、警告和参考性消息。


### [sdkmanager](https://developer.android.google.cn/studio/command-line/sdkmanager?hl=zh-cn)
查看、安装、更新和卸载 Android SDK 的软件包。  <br />  **列出已安装和可用的软件包**
```shell
sdkmanager --list [options] \
           [--channel=channel_id] // Channels: 0 (stable), 1 (beta), 2 (dev), or 3 (canary)
```
**安装软件包**
```shell
sdkmanager packages [options]
```
**更新所有已安装的软件包**
```shell
sdkmanager --update [options]
```


### [Emulator](https://developer.android.google.cn/studio/run/emulator-commandline?hl=zh-cn)
**emulator -help-datadir**  <br />  系统目录：包含模拟器用于模拟操作系统的 Android 系统映像  <br />  `Android/sdk/system-images/android-**apiLevel**/variant/arch/`  <br />  AVD 数据目录（内容目录）特定于单个 AVD 实例，包含 AVD 的所有可修改数据  <br />  `~/.android/avd/**name**.avd/`

```javascript
emulator -avd avd_name [ {-option [value]} … ]
```
emulator -list-avds

| 快速启动 |  |
| --- | --- |
| -no-snapshot-load | 执行冷启动，并在退出时保存模拟器状态。 |
| -no-snapshot-save | 如果可能，执行快速启动，但在退出时不保存模拟器状态。 |
| -no-snapshot | 彻底停用[快速启动](https://developer.android.google.cn/studio/run/emulator?hl=zh-cn#quickboot)功能 - 它不会加载或保存模拟器状态。 |
| 磁盘映像和内存 |  |
| -memory **_size_** | 指定物理 RAM 大小，范围为 128 MB - 4096 MB |
| -sdcard **_filepath_** | 指定 SD 卡分区映像文件的文件名和路径 |
| -wipe-data | 删除用户数据并从初始数据文件中复制数据。 |
| 网络 |  |
| -dns-server **_servers_** | 使用指定的 DNS 服务器 |
| -http-proxy **_proxy_** | 通过指定的 HTTP/HTTPS 代理进行所有 TCP 连接 |


-net**speed** delay / speed  <br />  将网络延迟模拟设置为以下 **delay** 值之一（以毫秒为单位）：

- gsm - GSM/CSD（最小值 150，最大值 550）。
- hscsd - HSCSD（最小值 80，最大值 400）。
- gprs - GPRS（最小值 35，最大值 200）。
- edge - EDGE/EGPRS（最小值 80，最大值 400）。
- umts - UMTS/3G（最小值 35，最大值 200）。
- hsdpa - HSDPA（最小值 0，最大值 0）。
- lte - LTE（最小值 0，最大值 0）。
- evdo - EVDO（最小值 0，最大值 0）。
- none - 无延迟时间，默认值（最小值 0，最大值 0）。
- num - 指定确切的延迟时间。
- min:max - 分别指定最小延迟时间和最大延迟时间。

设置网络速度模拟。使用以下 **speed** 值（以 kbps 为单位）之一，指定最大网络上传和下载速度：

- gsm - GSM/CSD（上传：14.4，下载：14.4）。
- hscsd - HSCSD（上传：14.4，下载：57.6）。
- gprs - GPRS（上传：28.8，下载：57.6）。
- edge - EDGE/EGPRS（上传：473.6，下载：473.6）。
- umts - UMTS/3G（上传：384.0，下载：384.0）。
- hsdpa - HSDPA（上传：5760.0，下载：13,980.0）。
- lte - LTE（上传：58,000，下载：173,000）。
- evdo - EVDO（上传：75,000，下载：280,000）。
- full - 无限制，默认值（上传：0.0，下载：0.0）。
- num - 指定上传和下载速度。
- up:down - 分别指定上传速度和下载速度。



## 构建工具 build-tools

### [aapt2](https://developer.android.google.cn/studio/command-line/aapt2?hl=zh-cn) (Android Asset Packaging Tool)
解析 Android 资源，为其编制索引，然后将其编译为针对 Android 平台优化过的二进制格式，最后将编译后的资源打包到单个输出中。

增量编译

- [编译](https://developer.android.google.cn/studio/command-line/aapt2?hl=zh-cn#compile)：将资源文件编译为二进制格式。

`aapt2 compile path-to-input-files [options] -o output-directory/ `

- [链接](https://developer.android.google.cn/studio/command-line/aapt2?hl=zh-cn#link)：合并所有已编译的文件并将它们打包到一个软件包中。

`aapt2 link path-to-input-files [options] -o outputdirectory/outputfilename.apk --manifest AndroidManifest.xml `

转储  <br />  aapt2 dump sub-command filename.apk [options]

| 子命令 | 说明 |
| --- | --- |
| apc | 输出在编译期间生成的 AAPT2 容器（APC）的内容。 |
| badging | 输出从 APK 的清单中提取的信息。 |
| configurations | 输出 APK 中的资源使用的每项配置。 |
| packagename | 输出 APK 的软件包名称。 |
| permissions | 输出从 APK 的清单提取的权限。 |
| strings | 输出 APK 的资源表字符串池的内容。 |
| styleparents | 输出 APK 中使用的样式的父项。 |
| resources | 输出 APK 的资源表的内容。 |
| xmlstrings | 输出 APK 的已编译 xml 中的字符串。 |
| xmltree | 输出 APK 的已编译 xml 树。 |

**appt**  <br />  查看，创建， 更新ZIP格式的文档附件(zip, jar, apk)，也可将资源文件编译成[二进制文件](https://baike.baidu.com/item/%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6/996661)，即Android资源打包工具
```shell
# 查看apk包的packageName、versionCode、applicationLabel、launcherActivity、permission等各种详细信息
aapt dump badging <xxx.apk> 
# 查看权限
aapt dump permissions <file_path.apk>
# 列出压缩文件(zip,jar,apk)中的目录内容
aapt list [-v] [-a] file.{zip,jar,apk}
# 从压缩文件中删除文件
aapt remove [-v] file.{zip,jar,apk} file1 [file2 ...]
# 往压缩文件中添加文件
aapt add [-v] file.{zip,jar,apk} file1 [file2 ...]
```


### [apksigner](https://developer.android.google.cn/studio/command-line/apksigner?hl=zh-cn)
为 APK 签名，并检查签名能否在给定 APK 支持的所有平台版本上成功通过验证。

**为 APK 签名**
```shell
apksigner sign --ks keystore.jks |
  --key key.pk8 --cert cert.x509.pem
  [signer_options] app-name.apk
```
**验证 APK 签名**
```shell
apksigner verify [options] app-name.apk
```

[zipalign](https://developer.android.google.cn/studio/command-line/zipalign?hl=zh-cn)  <br />  确保所有未压缩数据的开头均相对于文件开头部分执行特定的对齐，从而优化 APK 文件。



## 平台工具 platform-tools

### [adb](https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn)
安卓调试桥 (Android Debug Bridge)：一个通用命令行工具，其允许您与模拟器实例或连接的 Android 设备进行通信

组件：

- 客户端：用于发送命令。客户端在开发机器上运行。您可以通过发出 adb 命令从命令行终端调用客户端。
- 守护程序 (adbd)：用于在设备上运行命令。守护程序在每个设备上作为后台进程运行。
- 服务器：用于管理客户端与守护程序之间的通信。服务器在开发机器上作为后台进程运行。

运行原理：PC 端的 adb server 与手机端的守护进程 adbd 建立连接，然后 PC 端的 adb client 通过端口 5037与 adb server通信（转发指令），，adbd 接收命令后解析运行。

**启用 adb 调试**

- USB 连接
1. 显示开发者选项：转到**设置 > 关于手机**，然后点按 **build（软件版本）号**七次。
2. 返回上一屏幕，在底部可以找到**开发者选项，**启用 **USB 调试**
- 使用WiFi连接
```shell
# 监听端口 5555 上的 TCP/IP 连接，后续可拔掉连接目标设备的 USB 线
adb tcpip 5555  
#通过 IP 地址连接到设备
adb connect <ip:port>
adb disconnect <device-ip-address>
# root时，在设备的的终端模拟器输入
su setprop service.adb.tcp.port 5555
```

- WLAN 连接	Android 11（及更高版本）
1. 启用**开发者选项**下的**无线调试**选项。
2. 选择**使用配对码配对设备**。记下设备上显示的配对码、IP 地址和端口号
3. 运行 `adb pair _ipaddr_:_port_`
4. 当系统提示时，输入您在第 3 步中获得的配对码。系统会显示一条消息，表明您的设备已成功配对。
5. 运行 `adb connect <ip:port>`


#### 基础指令
将命令发送至特定设备  <br />  **adb [-d|-e|-s ] **

- -d 指定当前唯一通过USB 连接的Android 设备为命令目标
- -e 指定当前唯一运行的模拟器为命令目标
- -s  指定相应serialNumber 号的设备/模拟器为命令目标
- command 为所需对设备执行的命令

adb version	adb 版本信息  <br />  **adb devices [-l]**	adb 连接设备  <br />  adb start-server  <br />  adb kill-server

指定adb server 的网络端口port （默认5037）启动服务  <br />  adb -P  start-server

**文件传输**
```shell
adb push <local> <remote> #从本地复制文件到设备
adb pull <remote> <local> #从设备复制文件到本地
```
截屏录屏
```shell
adb exec-out screencap -p > sc.png	截屏到电脑
adb shell screencap /sdcard/screen.png	截屏
adb shell screenrecord /sdcard/demo.mp4	录屏
```
音频不与视频文件一起录制，Ctrl + C 停止

| 选项 | 说明 |
| --- | --- |
| --size widthxheight | 设置视频大小：1280x720 |
| --bit-rate rate | 设置视频的视频比特率（以 MB/秒为单位）。默认值为 4Mbps |
| --time-limit time | 设置最大录制时长（以秒为单位）。默认值和最大值均为 180（3 分钟）。 |
| --rotate | 将输出旋转 90 度。此功能处于实验阶段。 |
| --verbose | 在命令行屏幕显示日志信息。 |

启动
```shell
adb reboot	重启
adb reboot bootloader	重启手机到fastboot模式
adb reboot recovery 重启手机到recovery模式
```
SD卡的路径 /mnt/sdcard/


#### 系统属性
adb get-serialno	获取序列号  <br />  adb shell cat /sys/class/net/wlan0/address	MAC地址  <br />  adb shell cat /proc/cpuinfo	CPU信息  <br />  adb shell settings get secure android_id

**Window manager**  <br />  wm command

- size [reset|WxH|WdpxHdp]	屏幕分辨率
- density [reset|DENSITY]	屏幕密度
- overscan [reset|LEFT,TOP,RIGHT,BOTTOM]
- scaling [off|auto]
- dismiss-keyguard

`adb shell getprop [属性名`]    List  Android system property

| 属性名 | 含义 |
| --- | --- |
| ro.build.version.sdk | SDK 版本 |
| ro.build.version.release | Android 系统版本 |
| ro.build.version.security_patch | Android 安全补丁程序级别 |
| ro.product.model | 型号 |
| ro.product.brand | 品牌 |
| ro.product.name | 设备名 |
| ro.product.board | 处理器型号 |
| ro.product.cpu.abi | CPU类型(ABI) |
| ro.product.cpu.abilist | CPU 支持的 abi 列表 |
| persist.sys.isUsbOtgEnabled | 是否支持 OTG |
| dalvik.vm.heapsize | 每个应用程序的内存上限 |
| ro.sf.lcd_density | 屏幕密度 |


[**dumpsys**](https://developer.android.google.cn/studio/command-line/dumpsys?hl=zh-cn)  <br />  一种在 Android 设备上运行的工具，可提供有关系统服务的信息。
```shell
adb shell dumpsys [-t timeout] [--help | -l | --skip services | service [arguments] | -c | -h]
```
| 选项 | 说明 |
| --- | --- |
| -t timeout | 指定超时期限（秒）。如果未指定，默认值为 10 秒。 |
| --help | 输出 dumpsys 工具的帮助文本。 |
| -l | 输出可与 dumpsys 配合使用的系统服务的完整列表。 |
| --skip services | 指定您不希望包含在输出中的 services。 |
| service [arguments] | 指定您希望输出的 service。某些服务可能允许您传递可选 arguments。 |
| -c | 指定某些服务时，附加此选项能以计算机可读的格式输出数据。 |
| -h | 对于某些服务，附加此选项可查看该服务的帮助文本和其他选项。 |

**测试界面性能**
```shell
adb shell dumpsys gfxinfo package-name framestats
```
**检查网络诊断信息**
```shell
adb shell dumpsys netstats detail
adb shell dumpsys package com.example.myapp | grep userId
```
**查看内存分配**
```shell
获取过去三小时内应用的内存占用情况统计信息
adb shell dumpsys procstats --hours 3

应用内存在不同类型的 RAM 分配之间的划分情况
adb shell dumpsys meminfo package_name|pid [-d]
```

adb shell service list

| 服务 | 类名 | 功能 |
| --- | --- | --- |
| activity | ActivityManagerService | AMS相关信息 |
| package | PackageManagerService | PMS相关信息 |
| window | WindowManagerService | WMS相关信息 |
| input | InputManagerService | IMS相关信息 |
| power | PowerManagerService | PMS相关信息 |
| procstats | ProcessStatsService | 进程统计 |
| battery | BatteryService | 电池信息 |
| alarm | AlarmManagerService | 闹钟信息 |
| meminfo | MemBinder | 内存 |

`**adb shell dumpsys window windows | findstr mFocusedApp**`**	**获取当前包名和启动名



#### 应用管理
adb install [-lrtsdg] 

| 参数 | 含义 |
| --- | --- |
| -l | 将应用安装到保护目录 /mnt/asec |
| -r | 允许覆盖安装 |
| -t | 允许安装 AndroidManifest.xml 里 application 指定 android:testOnly="true" 的应用 |
| -s | 将应用安装到 sdcard |
| -d | 允许降级覆盖安装 |
| -g | 授予所有运行时权限 |

adb uninstall [-k]   <br />  k：卸载应用但保留数据和缓存目录

**package manager (pm)**  <br />  adb shell pm command

- list packages [options] filter	输出所有软件包
   - -f 显示应用关联的 apk 文件
   - -d 只显示 disabled 的应用
   - -e 只显示 enabled 的应用
   - -s 只显示系统应用
   - -3 只显示第三方应用
   - -i 显示应用的 installer
   - -u 包含已卸载应用
   - `<FILTER>` 包名包含 `<FILTER>`字符串
- list permission-groups	输出所有已知的权限组。
   - -g：按组进行整理。
   - -f：输出所有信息。
   - -s：简短摘要。
   - -d：仅列出危险权限。
   - -u：仅列出用户将看到的权限。
- list permissions [options] group	输出所有已知的权限
- list instrumentation [options]	列出所有测试软件包
- list features	输出系统的所有功能。
- list libraries	输出当前设备支持的所有库。
- list users	输出系统中的所有用户。
- path package	输出给定 package 的 APK 的路径。
- install [options] path	将软件包（通过 path 指定）安装到系统
- uninstall [options] package	从系统中移除软件包。
- clear package	删除与软件包关联的所有数据。
- enable package_or_component	启用给定的软件包或组件
- disable package_or_component	停用给定的软件包或组件
- disable-user [options] package_or_component 
- grant package_name permission	向应用授予权限
- revoke package_name permission	从应用撤消权限
- set-install-location location	更改默认安装位置
   - 0 [auto]：让系统决定最合适的位置
   - 1 [internal]：在内部设备存储上安装
   - 2 [external]：在外部介质上安装
- get-install-location 返回当前安装位置
- set-permission-enforced permission [true | false] 	是否应强制执行指定权限。
- trim-caches desired_free_space	减少缓存文件以达到给定的可用空间。
- create-user user_name	创建具有给定 user_name 的新用户，从而输出该用户的新用户标识符。
- remove-user user_id	移除具有给定 user_id 的用户，从而删除与该用户关联的所有数据。
- get-max-users	输出设备支持的最大用户数。
| command | 用途 |
| --- | --- |
| list packages [_options_] _filter_ | 输出所有软件包 |
| list permission-groups | 输出所有已知的权限组。 |
| list permissions [_options_] _group_ | 输出所有已知的权限 |
| list instrumentation [_options_] | 列出所有测试软件包 |
| list features | 输出系统的所有功能。 |
| list libraries | 输出当前设备支持的所有库。 |
| list users | 输出系统中的所有用户。 |
| path _package_ | 输出给定 _package_ 的 APK 的路径。 |
| install [_options_] _path_ | 将软件包（通过 _path_ 指定）安装到系统 |
| uninstall [_options_] _package_ | 从系统中移除软件包。 |
| clear _package_ | 删除与软件包关联的所有数据。 |
| enable _package_or_component_ | 启用给定的软件包或组件 |
| disable _package_or_component_ | 停用给定的软件包或组件 |
| disable-user [_options_] _package_or_component_ |  |
| grant _package_namepermission_ | 向应用授予权限 |
| revoke _package_namepermission_ | 从应用撤消权限 |
| set-install-location _location_ | 更改默认安装位置 |
| get-install-location | 返回当前安装位置。返回值如下：  <br />  0 [auto]：让系统决定最合适的位置  <br />  1 [internal]：在内部设备存储上安装  <br />  2 [external]：在外部介质上安装 |
| set-permission-enforced _permission_ [true &#124; false] | 指定是否应强制执行指定权限。 |
| trim-caches _desired_free_space_ | 减少缓存文件以达到给定的可用空间。 |
| create-user _user_name_ | 创建具有给定 _user_name_ 的新用户，从而输出该用户的新用户标识符。 |
| remove-user _user_id_ | 移除具有给定 _user_id_ 的用户，从而删除与该用户关联的所有数据。 |
| get-max-users | 输出设备支持的最大用户数。 |


adb shell pm list packages [option] [--user USER_ID] [FILTER]

| 参数 | 显示列表 |
| --- | --- |
| 无 | 所有应用 |
| -f | 显示应用关联的 apk 文件 |
| -d | 只显示 disabled 的应用 |
| -e | 只显示 enabled 的应用 |
| -s | 只显示系统应用 |
| -3 | 只显示第三方应用 |
| -i | 显示应用的 installer |
| -u | 包含已卸载应用 |
| `<FILTER>` | 包名包含 `<FILTER>` 字符串 |


**activity manager (am)**  <br />  adb shell am [subcommand] [options]

| command | 用途 |
| --- | --- |
| start [options] `<INTENT>` | 启动 `<INTENT>`指定的 Activity |
| startservice [options] `<INTENT>` | 启动 `<INTENT>`指定的 Service |
| stopservice |  |
| broadcast [options] `<INTENT>` | 发送 `<INTENT>`指定的广播 |
| force-stop `<packages>` | 停止 `<packages>`相关的进程 |
| kill [_options_] _package_ |  |
| kill-all | 终止所有后台进程 |
| instrument [_options_] _component_ | 使用 [Instrumentation](https://developer.android.google.cn/reference/android/app/Instrumentation?hl=zh-cn)实例启动监控 |
| profile start _processfile_ | 启动 _process_ 的性能剖析器，将结果写入 _file_。 |
| profile stop _process_ | 停止 _process_ 的性能剖析器。 |
| dumpheap [_options_] _processfile_ | 转储 _process_ 的堆，写入 _file_。 |
| set-debug-app [_options_] _package_ | 设置要调试的应用 _package_。 |
| clear-debug-app | 清除之前使用 set-debug-app 设置的待调试软件包。 |
| monitor [_options_] | 开始监控崩溃或 ANR。 |
| screen-compat {on &#124; off} _package_ | 控制 _package_ 的[屏幕兼容性](https://developer.android.google.cn/guide/practices/screen-compat-mode?hl=zh-cn)模式。 |
| display-size [reset &#124; _width_x_height_] | 替换设备显示尺寸。此命令支持使用大屏设备模仿小屏幕分辨率（反之亦然） |
| display-density _dpi_ | 替换设备显示密度。此命令支持使用低密度屏幕在高密度屏幕环境上进行测试（反之亦然） |
| to-uri _intent_ | 以 URI 的形式输出给定的 intent 规范 |
| to-intent-uri _intent_ | 以 intent: URI 的形式输出给定的 intent 规范 |


`adb shell am start [-D] [-W] [-P <FILE>] [--start-profiler <FILE>]`  <br />  ` [--sampling INTERVAL] [-R COUNT] [-S] [--opengl-trace]`  <br />  ` [--user <USER_ID> | current] <INTENT>`

- -D：启用调试功能。
- -W：等待启动完成。
- --start-profiler _file_：启动性能剖析器并将结果发送至 _file_。
- -P _file_：类似于 --start-profiler，但当应用进入空闲状态时剖析停止。
- -R _count_：重复启动 Activity _count_ 次。在每次重复前，将完成顶层 Activity。
- -S：在启动 Activity 前，强行停止目标应用。
- --opengl-trace：启用 OpenGL 函数的跟踪。
- --user _user_id_ | current：指定要作为哪个用户运行；如果未指定，则作为当前用户运行。


系统预定义广播

| action | 触发时机 |
| --- | --- |
| android.net.conn.CONNECTIVITY_CHANGE | 网络连接发生变化 |
| android.intent.action.SCREEN_ON | 屏幕点亮 |
| android.intent.action.SCREEN_OFF | 屏幕熄灭 |
| android.intent.action.BATTERY_LOW | 电量低，会弹出电量低提示框 |
| android.intent.action.BATTERY_OKAY | 电量恢复了 |
| android.intent.action.BOOT_COMPLETED | 设备启动完毕 |
| android.intent.action.DEVICE_STORAGE_LOW | 存储空间过低 |
| android.intent.action.DEVICE_STORAGE_OK | 存储空间恢复 |
| android.intent.action.PACKAGE_ADDED | 安装了新的应用 |
| android.net.wifi.STATE_CHANGE | WiFi连接状态发生变化 |
| android.net.wifi.WIFI_STATE_CHANGED | WiFi状态变为启用/关闭/正在启动/正在关闭/未知 |
| android.intent.action.BATTERY_CHANGED | 电池电量发生变化 |
| android.intent.action.INPUT_METHOD_CHANGED | 系统输入法发生变化 |
| android.intent.action.ACTION_POWER_CONNECTED | 外部电源连接 |
| android.intent.action.ACTION_POWER_DISCONNECTED | 外部电源断开连接 |
| android.intent.action.DREAMING_STARTED | 系统开始休眠 |
| android.intent.action.DREAMING_STOPPED | 系统停止休眠 |
| android.intent.action.WALLPAPER_CHANGED | 壁纸发生变化 |
| android.intent.action.HEADSET_PLUG | 插入耳机 |
| android.intent.action.MEDIA_UNMOUNTED | 卸载外部介质 |
| android.intent.action.MEDIA_MOUNTED | 挂载外部介质 |
| android.os.action.POWER_SAVE_MODE_CHANGED | 省电模式开启 |



**device policy manager (dpm，设备政策管理器)**

| 命令 | 说明 |
| --- | --- |
| set-active-admin [options] component | 将 component 设为活动管理。 |
| set-profile-owner [options] component | 将 component 设为活动管理，并将其软件包设为现有用户的个人资料所有者 |
| set-device-owner [options] component | 将 component 设为活动管理，并将其软件包设为设备所有者 |
| remove-active-admin [options] component | 停用活动管理 |
| force-network-logs | 强制系统让任何现有网络日志随时可供 DPC 检索 |
| force-security-logs | 强制系统向 DPC 提供任何现有安全日志 |


#### 模拟操作
```shell
adb shell input [<source>] <command> [<arg>...]
sources
      mouse
      keyboard
      joystick
      touchnavigation
      touchpad
      trackball
      stylus
      dpad
      gesture
      touchscreen
      gamepad
      
The commands and default sources are:
      text <string> (Default: touchscreen)	输入信息
      keyevent [--longpress] <key code number or name> ... (Default: keyboard)	屏幕按键
      tap <x> <y> (Default: touchscreen)		屏幕点击
      swipe <x1> <y1> <x2> <y2> [duration(ms)] (Default: touchscreen)	手势滑动
      press (Default: trackball)
      roll <dx> <dy> (Default: trackball)
```

模拟**长按（long press）**  <br />  adb shell input swipe 100 500 100 500 500

| keycode | 含义 |
| --- | --- |
| 3 | HOME 键 |
| 4 | 返回键 |
| 5 | 打开拨号应用 |
| 6 | 挂断电话 |
| 24 | 增加音量 |
| 25 | 降低音量 |
| 26 | 电源键 |
| 27 | 拍照（需要在相机应用里） |
| 64 | 打开浏览器 |
| 82 | 菜单键 |
| 85 | 播放/暂停 |
| 86 | 停止播放 |
| 87 | 播放下一首 |
| 88 | 播放上一首 |
| 122 | 移动光标到行首或列表顶部 |
| 123 | 移动光标到行末或列表底部 |
| 126 | 恢复播放 |
| 127 | 暂停播放 |
| 164 | 静音 |
| 176 | 打开系统设置 |
| 187 | 切换应用 |
| 207 | 打开联系人 |
| 208 | 打开日历 |
| 209 | 打开音乐 |
| 210 | 打开计算器 |
| 220 | 降低屏幕亮度 |
| 221 | 提高屏幕亮度 |
| 223 | 系统休眠 |
| 224 | 点亮屏幕 |
| 231 | 打开语音助手 |
| 276 | 如果没有 wakelock 则让系统休眠 |



[**perfetto**](https://developer.android.google.cn/studio/command-line/perfetto?hl=zh-cn)  <br />  收集性能跟踪数据

- 使用 ftrace 收集内核信息
- 使用 atrace 收集服务和应用中的用户空间注释
- 使用 heapprofd 收集服务和应用的本地内存使用情况信息



- **轻量模式：**只能选择一部分数据源，具体来说就是 atrace 和 ftrace。但此模式可提供类似于 [systrace](https://developer.android.google.cn/topic/performance/tracing/command-line?hl=zh-cn) 的接口。
```shell
adb shell perfetto [ --time TIMESPEC ] [ --buffer SIZE ] [ --size SIZE ]
             [ ATRACE_CAT | FTRACE_GROUP/FTRACE_NAME | FTRACE_GROUP/* ]...
```

- **普通模式**：从协议缓冲区获取其配置，并且可以让您使用 atrace 和 ftrace 之外的数据源，从而更加充分地利用 perfetto 的功能。
```shell
adb shell perfetto [ --txt ] --config CONFIG_FILE
```
| 选项 | 说明 |
| --- | --- |
| --background &#124; -d | Perfetto 立即退出命令行界面，并继续在后台记录您的跟踪数据。 |
| --out **_OUT_FILE_** &#124; -o **_OUT_FILE_** | 为输出跟踪文件或 stdout 指定所需的路径。perfetto 将输出内容写入上述标记所述的文件。输出格式将用 [AOSPtrace.proto](https://android.googlesource.com/platform/external/perfetto/+/refs/tags/android-q-preview-5/protos/perfetto/trace/trace.proto) 中定义的格式编译。 |
| --dropbox **_TAG_** | 使用您指定的标签通过 [DropBoxManager API](https://developer.android.google.cn/reference/android/os/DropBoxManager.html?hl=zh-cn) 来上传您的跟踪数据。 |
| --no-guardrails | 在测试中启用 --dropbox 标记时，停用防止资源过多使用的保护措施。 |
| --reset-guardrails | 重置 guardrails 的持久状态并退出（用于测试）。 |
| --query | 查询服务状态，并将其输出为用户可读的文本。 |
| --query-raw | 与“--query”类似，但会输出 tracing_service_state.proto. 的原始 proto 编码字节。 |
| --help &#124; -h | 输出 perfetto 工具的帮助文本。 |


**root**  <br />  adb [root | unroot]
```shell
# 查看连接过的 WiFi 密码
adb shell "su -c 'cat /data/misc/wifi/*.conf'"
# 开启/关闭 WiFi
adb shell svc wifi [enable | disable]
# 启用/禁用 SELinux
adb shell setenforce [1 | 0]
# 启用/禁用 dm_verity
adb [enable-verity | disable-verity]
```

dm-verity是Device mapper架构下的一种目标设备类型，通过它来保障设备或设备分区的完整性  <br />  Device Mapper为Linux内核提供了一个从逻辑设备到物理设备的映射框架，用于定制资源的管理策略
```shell
global options:
 -a         listen on all network interfaces, not just localhost
 -d         use USB device (error if multiple devices connected)
 -e         use TCP/IP device (error if multiple TCP/IP devices available)
 -s SERIAL  use device with given serial (overrides $ANDROID_SERIAL)
 -t ID      use device with given transport id
 -H         name of adb server host [default=localhost]
 -P         port of adb server [default=5037]
 -L SOCKET  listen on given socket for adb server [default=tcp:localhost:5037]
general commands:
 devices [-l]             list connected devices (-l for long output)
 help                     show this help message
 version                  show version num
networking:
 connect HOST[:PORT]      connect to a device via TCP/IP
 disconnect [[HOST]:PORT] disconnect from given TCP/IP device, or all
 forward --list           list all forward socket connections
 forward [--no-rebind] LOCAL REMOTE
     forward socket connection using:
       tcp:<port> (<local> may be "tcp:0" to pick any open port)
       localabstract:<unix domain socket name>
       localreserved:<unix domain socket name>
       localfilesystem:<unix domain socket name>
       dev:<character device name>
       jdwp:<process pid> (remote only)
       acceptfd:<fd> (listen only)
 forward --remove LOCAL   remove specific forward socket connection
 forward --remove-all     remove all forward socket connections
 ppp TTY [PARAMETER...]   run PPP over USB
 reverse --list           list all reverse socket connections from device
 reverse [--no-rebind] REMOTE LOCAL
     reverse socket connection using:
       tcp:<port> (<remote> may be "tcp:0" to pick any open port)
       localabstract:<unix domain socket name>
       localreserved:<unix domain socket name>
       localfilesystem:<unix domain socket name>
 reverse --remove REMOTE  remove specific reverse socket connection
 reverse --remove-all     remove all reverse socket connections from device
file transfer
 push [--sync] LOCAL... REMOTE
     copy local files/directories to device
     --sync: only push files that are newer on the host than the device
 pull [-a] REMOTE... LOCAL
     copy files/dirs from device
     -a: preserve file timestamp and mode
 sync [all|data|odm|oem|product|system|system_ext|vendor]
     sync a local build from $ANDROID_PRODUCT_OUT to the device (default all)
     -l: list files that would be copied, but don't copy them
shell
 shell [-e ESCAPE] [-n] [-Tt] [-x] [COMMAND...]
     run remote shell command (interactive shell if no command given)
     -e: choose escape character, or "none"; default '~'
     -n: don't read from stdin
     -T: disable pty allocation
     -t: allocate a pty if on a tty (-tt: force pty allocation)
     -x: disable remote exit codes and stdout/stderr separation
 emu COMMAND              run emulator console command
 install [-lrtsdg] [--instant] PACKAGE
     push a single package to the device and install it
 install-multiple [-lrtsdpg] [--instant] PACKAGE...
     push multiple APKs to the device for a single package and install them
 install-multi-package [-lrtsdpg] [--instant] PACKAGE...
     push one or more packages to the device and install them atomically
     -r: replace existing application
     -t: allow test packages
     -d: allow version code downgrade (debuggable packages only)
     -p: partial application install (install-multiple only)
     -g: grant all runtime permissions
     --abi ABI: override platform's default ABI
     --instant: cause the app to be installed as an ephemeral install app
     --no-streaming: always push APK to device and invoke Package Manager as separate steps
     --streaming: force streaming APK directly into Package Manager
     --fastdeploy: use fast deploy
     --no-fastdeploy: prevent use of fast deploy
     --force-agent: force update of deployment agent when using fast deploy
     --date-check-agent: update deployment agent when local version is newer and using fast deploy
     --version-check-agent: update deployment agent when local version has different version code and using fast deploy
     (See also `adb shell pm help` for more options.)
 uninstall [-k] PACKAGE
     remove this app package from the device
     '-k': keep the data and cache directories
debugging:
 bugreport [PATH]
     write bugreport to given PATH [default=bugreport.zip];
     if PATH is a directory, the bug report is saved in that directory.
     devices that don't support zipped bug reports output to stdout.
 jdwp                     list pids of processes hosting a JDWP transport
 logcat                   show device log (logcat --help for more)
security:
 disable-verity           disable dm-verity checking on userdebug builds
 enable-verity            re-enable dm-verity checking on userdebug builds
 keygen FILE
     generate adb public/private key; private key stored in FILE,
scripting:
 wait-for[-TRANSPORT]-STATE
     wait for device to be in the given state
     STATE: device, recovery, rescue, sideload, bootloader, or disconnect
     TRANSPORT: usb, local, or any [default=any]
 get-state                print offline | bootloader | device
 get-serialno             print <serial-number>
 get-devpath              print <device-path>
 remount [-R]
      remount partitions read-write. if a reboot is required, -R will
      will automatically reboot the device.
 reboot [bootloader|recovery|sideload|sideload-auto-reboot]
     reboot the device; defaults to booting system image but
     supports bootloader and recovery too. sideload reboots
     into recovery and automatically starts sideload mode,
     sideload-auto-reboot is the same but reboots after sideloading.
 sideload OTAPACKAGE      sideload the given full OTA package
 root                     restart adbd with root permissions
 unroot                   restart adbd without root permissions
 usb                      restart adbd listening on USB
 tcpip PORT               restart adbd listening on TCP on PORT
internal debugging:
 start-server             ensure that there is a server running
 kill-server              kill the server if it is running
 reconnect                kick connection from host side to force reconnect
 reconnect device         kick connection from device side to force reconnect
 reconnect offline        reset offline/unauthorized devices to force reconnect
```


### [logcat](https://developer.android.google.cn/studio/command-line/logcat?hl=zh-cn)
通过 adb 调用，用于查看应用和系统日志。

Android 日志

- 底层的 Linux 内核日志	/proc/kmsg
- Android 的日志	/dev/log

命令格式：`[adb] logcat [<option>] ... [<filter-spec>] ...`

优先级（priority）

- V —— Verbose（最低，输出得最多）
- D —— Debug
- I —— Info
- W —— Warning
- E —— Error
- F —— Fatal
- S —— Silent（最高，不输出）



**输出格式**  <br />  `-v <format>`

- brief：显示优先级、标记以及发出消息的进程的 PID。
- long：显示所有元数据字段，并使用空白行分隔消息。
- process：仅显示 PID。
- raw：显示不包含其他元数据字段的原始日志消息。
- tag：仅显示优先级和标记。
- thread:：旧版格式，显示优先级、PID 以及发出消息的线程的 TID。
- threadtime（默认值）：显示日期、调用时间、优先级、标记、PID 以及发出消息的线程的 TID。
- time：显示日期、调用时间、优先级、标记以及发出消息的进程的 PID。



**格式修饰符**

- color：使用不同的颜色来显示每个优先级。
- descriptive：显示日志缓冲区事件说明。此修饰符仅影响事件日志缓冲区消息，不会对其他非二进制文件缓冲区产生任何影响。事件说明取自 event-log-tags 数据库。
- epoch：显示自 1970 年 1 月 1 日以来的时间（以秒为单位）。
- monotonic：显示自上次启动以来的时间（以 CPU 秒为单位）。
- printable：确保所有二进制日志记录内容都进行了转义。
- uid：如果访问控制允许，则显示 UID 或记录的进程的 Android ID。
- usec：显示精确到微秒的时间。
- UTC：显示 UTC 时间。
- year：将年份添加到显示的时间。
- zone：将本地时区添加到显示的时间。



**备用日志缓冲区**  <br />  `-b <buffer>`

- radio：查看包含无线装置/电话相关消息的缓冲区。
- events：查看已经过解译的二进制系统事件缓冲区消息。
- main：查看主日志缓冲区（默认），不包含系统和崩溃日志消息。
- system：查看系统日志缓冲区（默认）。
- crash：查看崩溃日志缓冲区（默认）。
- all：查看所有缓冲区。
- default：报告 main、system 和 crash 缓冲区



### fastboot
将平台或其他系统映像刷写到设备上
```shell
fastboot [ <option> ] <command>
commands:
  devices                                  list all connected devices
  reboot                                   reboot device normally
  reboot-bootloader                        reboot device into bootloader
  flashall                                 flash boot + recovery + system
  flash <partition> [ <filename> ]         write a file to a flash partition
  erase <partition>                        erase a flash partition
  getvar <variable>                        display a bootloader variable
  update <filename>                        reflash device from update.zip
  boot <kernel> [ <ramdisk> ]              download and boot kernel
  flash:raw boot <kernel> [ <ramdisk> ]    create bootimage and flash it
options:
  -w                                       erase userdata and cache
  -s <serial number>                       specify device serial number
  -p <product>                             specify product name
  -c <cmdline>                             override kernel commandline
  -i <vendor id>                           specify a custom USB vendor id
  -b <base_addr>                           specify a custom kernel base address
  -n <page size>                           specify the nand page size. default: 2
```


**Android系统分区**

- hboot——系统开机引导类似电脑BIOS，这块刷错手机就会变成砖
- radio——通讯模块、基带、WIFI、Bluetooth等衔接硬件的驱动软件
- recovery——系统故障时负责恢复
- boot——Linux嵌入式系统内核
- system——系统文件、应用
- cache——系统运行时产生的缓存
- userdata——用户使用APP产生的缓存数据


# 刷机
重装手机系统

- fastboot，一种线刷，使用USB数据线连接手机的一种刷机模式。线刷更可靠，安全。
- recovery，一种卡刷，将刷机包放在sd卡上，然后在recovery中刷机的模式



**主流Android手机进入Fastboot的方式：关机状态下，同时长按【音量-】+【电源键】**

步骤

1. 进入Fastboot，解锁手机 Bootloader
2. 刷入第三方 Recovery（TWRP.img，TeamWin Recovery Project）
3. 安装Magisk.apk，需科学上网，App内下载Magisk.zip
4. 通过第三方 Recovery 刷入Magisk，获取Root

加锁：fastboot oem lock

BootLoader（引导程序）：在操作系统内核运行之前运行。可以初始化硬件设备、建立内存空间映射图，从而将系统的软硬件环境带到一个合适状态，以便为最终调用操作系统内核准备好正确的环境。

**Xposed框架(Xposed Framework)**：一套开源的、在Android高权限模式下运行的框架服务，可以在不修改[APK](https://baike.baidu.com/item/APK)文件的情况下影响程序运行(修改系统)的框架服务，基于它可以制作出许多功能强大的模块，且在功能不冲突的情况下同时运作  <br />  一个针对Android平台的动态劫持项目，通过替换/system/bin/app_process程序控制zygote进程，使得app_process在启动过程中会加载XposedBridge.jar这个jar包，从而完成对Zygote进程及其创建的Dalvik虚拟机的劫持。

Magisk：通过启动时在 boot 中创建钩子，把 /data/magisk.img 挂载到 /magisk，构建出一个在 system 基础上能够自定义替换，增加以及删除的文件系统，所有操作都在启动的时候完成，实际上并没有对 /system 分区进行修改（即 systemless 接口，以不触动 /system 的方式修改 /system）  <br />  ![](./assets/1643807401160-46fbfb24-73a6-4334-9416-1a4b3d9e2378.png)



# Monkey
向系统发送伪随机的用户事件（如按键、手势、触摸屏等输入），以随机且可重复的方式对应用进行压力测试。

Monkey程序由Android系统自带，使用Java语言写成，在Android文件系统中的路径：`/system/framework/monkey.jar`；  <br />  Monkey.jar程序是由一个名为“monkey”的Shell脚本来启动执行，shell脚本的路径：/system/bin/monkey；
```shell
monkey [options] <event-count>

# 启动您的应用并向其发送 500 个伪随机事件：
adb shell monkey -p your.package.name -v 500
```


| 类别 | 选项 | 说明 |
| --- | --- | --- |
| 常规 | --help | 输出简单的使用指南。 |
|  | -v | 命令行上的每个 -v 都会增加详细程度级别 |
| 事件 | -s `<seed>` | 伪随机数生成器的种子值。如果您使用相同的种子值重新运行 Monkey，它将会生成相同的事件序列。 |
|  | --throttle `<milliseconds>` | 在事件之间插入固定的延迟时间 |
|  | --pct-touch `<percent>` | 调整轻触事件所占百分比。（轻触事件是指屏幕上的单个位置上的按下/释放事件。） |
|  | --pct-motion `<percent>` | 调整动作事件所占百分比。（动作事件包括屏幕上某个位置的按下事件，一系列伪随机动作和一个释放事件。） |
|  | --pct-trackball `<percent>` | 调整轨迹球事件所占百分比。（轨迹球事件包括一个或多个随机动作，有时后跟点击。） |
|  | --pct-nav `<percent>` | 调整“基本”导航事件所占百分比。（导航事件包括向上/向下/向左/向右，作为方向输入设备的输入。） |
|  | --pct-majornav `<percent>` | 调整“主要”导航事件所占百分比。（这些导航事件通常会导致界面中的操作，例如 5 方向键的中间按钮、返回键或菜单键。） |
|  | --pct-syskeys `<percent>` | 调整“系统”按键事件所占百分比。（这些按键通常预留供系统使用，例如“主屏幕”、“返回”、“发起通话”、“结束通话”或“音量控件”。） |
|  | --pct-appswitch `<percent>` | 调整 Activity 启动次数所占百分比。Monkey 会以随机间隔发起 startActivity() 调用，以最大限度地覆盖软件包中的所有 Activity。 |
|  | --pct-anyevent `<percent>` | 调整其他类型事件所占百分比。这包括所有其他类型的事件，例如按键、设备上的其他不太常用的按钮等等。 |
| 约束条件 | -p `<allowed-package-name>` | 仅允许系统访问这些软件包内的 Activity。如果未指定任何软件包，Monkey 将允许系统启动所有软件包中的 Activity。要指定多个软件包，请多次使用 -p 选项，每个软件包对应一个 -p 选项。 |
|  | -c `<main-category>` | 仅允许系统访问其中一个指定类别中所列的 Activity。如果没有指定任何类别，Monkey 会选择 Intent.CATEGORY_LAUNCHER 或 Intent.CATEGORY_MONKEY 类别所列的 Activity。要指定多个类别，请多次使用 -c 选项，每个类别对应一个 -c 选项。 |
| 调试 | --dbg-no-events | 初始启动到测试 Activity，但不会生成任何其他事件。为了获得最佳结果，请结合使用 -v、一个或多个软件包约束条件以及非零限制，以使 Monkey 运行 30 秒或更长时间。这提供了一个环境，您可以在其中监控应用调用的软件包转换操作。 |
|  | --hprof | 如果设置此选项，则会在 Monkey 事件序列之前和之后立即生成分析报告。这将在 data/misc 下生成大型（约为 5Mb）文件，因此请谨慎使用。 |
|  | --ignore-crashes | 通常，当应用崩溃或遇到任何类型的未处理异常时，Monkey 将会停止。如果指定此选项，Monkey 会继续向系统发送事件，直到计数完成为止。 |
|  | --ignore-timeouts | 通常，当应用遇到任何类型的超时错误（例如“应用无响应”对话框）时，Monkey 将会停止。如果指定此选项，Monkey 会继续向系统发送事件，直到计数完成为止。 |
|  | --ignore-security-exceptions | 通常，当应用遇到任何类型的权限错误（例如，如果它尝试启动需要特定权限的 Activity）时，Monkey 将会停止。 |
|  | --kill-process-after-error | 通常，当 Monkey 因出错而停止运行时，出现故障的应用将保持运行状态。设置此选项后，它将会指示系统停止发生错误的进程。 |
|  | --monitor-native-crashes | 监视并报告 Android 系统原生代码中发生的崩溃。如果设置了 --kill-process-after-error，系统将会停止。 |
|  | --wait-dbg | 阻止 Monkey 执行，直到为其连接了调试程序。 |



# monkeyrunner
monkeyrunner 工具提供了一个 API，用于编写可从 Android 代码外部控制 Android 设备或模拟器的程序。

- [MonkeyRunner](https://developer.android.google.cn/tools/help/MonkeyRunner?hl=zh-cn)：一个包含用于 monkeyrunner 程序的实用程序方法的类。提供了用于将 monkeyrunner 连接到设备或模拟器的方法。它还提供了用于为 monkeyrunner 程序创建界面以及显示内置帮助的方法。
- [MonkeyDevice](https://developer.android.google.cn/tools/help/MonkeyDevice?hl=zh-cn)：代表设备或模拟器。此类提供了用于安装和卸载软件包、启动 Activity 以及向应用发送键盘或轻触事件的方法。您也可以使用这个类来运行测试软件包。
- [MonkeyImage](https://developer.android.google.cn/tools/help/MonkeyImage?hl=zh-cn)：代表屏幕截图。此类提供了用于截屏、将位图转换为各种格式、比较两个 MonkeyImage 对象以及将图片写入文件的方法。

示例
```python
# Imports the monkeyrunner modules used by this program
from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice

# Connects to the current device, returning a MonkeyDevice object
device = MonkeyRunner.waitForConnection()

# Installs the Android package. Notice that this method returns a boolean, so you can test
# to see if the installation worked.
device.installPackage('myproject/bin/MyApplication.apk')

# sets a variable with the package's internal name
package = 'com.example.android.myapplication'

# sets a variable with the name of an Activity in the package
activity = 'com.example.android.myapplication.MainActivity'

# sets the name of the component to start
runComponent = package + '/' + activity

# Runs the component
device.startActivity(component=runComponent)

# Presses the Menu button
device.press('KEYCODE_MENU', MonkeyDevice.DOWN_AND_UP)

# Takes a screenshot
result = device.takeSnapshot()

# Writes the screenshot to a file
result.writeToFile('myproject/shot1.png','png')
```



[http://appium.io/docs/cn/about-appium/intro/](http://appium.io/docs/cn/about-appium/intro/)

# [appium](https://github.com/appium/appium)
一个开源工具，用于自动化 iOS 手机、 Android 手机和 Windows 桌面平台上的原生、移动 Web 和混合应用。  <br />  Appium 的核心一个是暴露 REST API 的 WEB 服务器(Node.js)。它接受来自客户端的连接，监听命令并在移动设备上执行，答复 HTTP 响应来描述执行结果。
```javascript
$ npm install -g appium
$ appium
```

[appium-doctor](https://github.com/appium/appium-doctor)	Tool to verify appium installation
```javascript
// Install
npm install appium-doctor -g
Usage
appium-doctor.js [options, defaults: --ios --android]
Options:
  --ios       Check iOS setup                             [boolean]
  --android   Check Android setup                         [boolean]
  --dev       Check dev setup                             [boolean]
  --debug     Show debug messages                         [boolean]
  --yes       Always respond yes                          [boolean]
  --no        Always respond no                           [boolean]
  --demo      Run appium-doctor demo (for dev).           [boolean]
  -h, --help  Show help                                   [boolean]
```

[Appium Desktop](https://github.com/appium/appium-desktop)  <br />  Appium server arguments

| Flag | Default | Description |
| --- | --- | --- |
| --shell | null | Enter REPL mode |
| --allow-cors | false | Turn on CORS compatibility mode, which will allow connections to the Appium server from within websites hosted on any domain. Be careful when enabling this feature, since there is a potential security risk if you visit a website that uses a cross-domain request to initiate or introspect sessions on your running Appium server. |
| --ipa | null | (IOS-only) abs path to compiled .ipa file |
| -a, --address | 0.0.0.0 | IP Address to listen on |
| -p, --port | 4723 | port to listen on |
| -pa, --base-path | /wd/hub | Initial path segment where the Appium/WebDriver API will be hosted. Every endpoint will be behind this segment. |
| -ca, --callback-address | null | callback IP Address (default: same as --address) |
| -cp, --callback-port | null | callback port (default: same as port) |
| -bp, --bootstrap-port | 4724 | (Android-only) port to use on device to talk to Appium |
| -r, --backend-retries | 3 | (iOS-only) How many times to retry launching Instruments before saying it crashed or timed out |
| --session-override | false | Enables session override (clobbering) |
| -l, --pre-launch | false | Pre-launch the application before allowing the first session (Requires --app and, for Android, --app-pkg and --app-activity) |
| -g, --log | null | Also send log output to this file |
| --log-level | debug | Set the server log level for console and logfile (specified as console-level:logfile-level, with both being the same if only one value is supplied). Possible values are debug, info, warn, error, which are progressively less verbose. |
| --log-timestamp | false | Show timestamps in console output |
| --local-timezone | false | Use local timezone for timestamps |
| --log-no-colors | false | Do not use colors in console output |
| -G, --webhook | null | Also send log output to this HTTP listener |
| --safari | false | (IOS-Only) Use the safari app |
| --default-device, -dd | false | (IOS-Simulator-only) use the default simulator that instruments launches on its own |
| --force-iphone | false | (IOS-only) Use the iPhone Simulator no matter what the app wants |
| --force-ipad | false | (IOS-only) Use the iPad Simulator no matter what the app wants |
| --tracetemplate | null | (IOS-only) .tracetemplate file to use with Instruments |
| --instruments | null | (IOS-only) path to instruments binary |
| --nodeconfig | null | Configuration JSON file to register appium with selenium grid |
| -ra, --robot-address | 0.0.0.0 | IP Address of robot |
| -rp, --robot-port | -1 | port for robot |
| --chromedriver-port | 9515 | Port upon which ChromeDriver will run |
| --chromedriver-executable | null | ChromeDriver executable full path |
| --show-config | false | Show info about the appium server configuration and exit |
| --no-perms-check | false | Bypass Appium's checks to ensure we can read/write necessary files |
| --strict-caps | false | Cause sessions to fail if desired caps are sent in that Appium does not recognize as valid for the selected device |
| --isolate-sim-device | false | Xcode 6 has a bug on some platforms where a certain simulator can only be launched without error if all other simulator devices are first deleted. This option causes Appium to delete all devices other than the one being used by Appium. Note that this is a permanent deletion, and you are responsible for using simctl or xcode to manage the categories of devices used with Appium. |
| --tmp | null | Absolute path to directory Appium can use to manage temporary files, like built-in iOS apps it needs to move around. On *nix/Mac defaults to /tmp, on Windows defaults to C:\\Windows\\Temp |
| --trace-dir | null | Absolute path to directory Appium use to save ios instruments traces, defaults to /appium-instruments |
| --debug-log-spacing | false | Add exaggerated spacing in logs to help with visual inspection |
| --suppress-adb-kill-server | false | (Android-only) If set, prevents Appium from killing the adb server instance |
| --async-trace | false | Add long stack traces to log entries. Recommended for debugging only. |
| --webkit-debug-proxy-port | 27753 | (IOS-only) Local port used for communication with ios-webkit-debug-proxy |
| -dc, --default-capabilities | {} | Set the default desired capabilities, which will be set on each session unless overridden by received capabilities. |
| --reboot | false | - (Android-only) reboot emulator after each session and kill it at the end |
| --relaxed-security | false | Disable additional security checks, so it is possible to use some advanced features, provided by drivers supporting this option. Only enable it if all the clients are in the trusted network and it is not the case if a client could potentially break out of the session sandbox. Can override enabling of specific features with --deny-insecure. See also the [security doc](https://appium.io/docs/en/writing-running-appium/security/index.html) |
| --allow-insecure | [] | Allow a list of features which are considered insecure and must be turned on explicitly by system administrators. Feature names are documented by the relevant server/driver. Should be a comma-separated list, or a path to a filename containing one feature name per line. Features listed in --deny-insecure will override anything listed here. Does not make sense to use in conjunction with --relaxed-security. See also the [security doc](https://appium.io/docs/en/writing-running-appium/security/index.html) |
| --deny-insecure | [] | Specify a list of features which will never be allowed to run, even if --relaxed-security is turned on, and even if feature names are listed with --allow-insecure. Should be a comma-separated list, or a path to a filename containing one feature name per line. See also the [security doc](https://appium.io/docs/en/writing-running-appium/security/index.html) |
| --log-filters | null | Specify a full path to a JSON file containing one or more log filtering rules. This feature is useful for cases when it is necessary to obfuscate sensitive information, which may be present in server log records, like passwords or access tokens. The format of each rule is described in https://github.com/appium/appium-support/blob/master/lib/log-internal.js. An exception will be thrown on server startup if any of the rules has issues. |


**预期能力（Desired Capabilities）**

[Appium 服务器初始化参数（Capability）](https://github.com/appium/appium/blob/master/docs/cn/writing-running-appium/caps.md)

| 键 | 描述 | 值 |
| --- | --- | --- |
| automationName | 自动化测试的引擎 | Appium （默认）或者 Selendroid |
| platformName | 使用的手机操作系统 | iOS, Android, 或者 FirefoxOS |
| platformVersion | 手机操作系统的版本 | 例如 7.1, 4.4 |
| deviceName | 使用的手机或模拟器类型 | iPhone Simulator, iPad Simulator, iPhone Retina 4-inch, Android Emulator, Galaxy S4, 等等 |
| app | 本地绝对路径_或_远程 http URL 所指向的一个安装包（.ipa,.apk,或 .zip 文件）。Appium 将其安装到合适的设备上。请注意，如果您指定了 appPackage 和 appActivity 参数，Android 则不需要此参数了。该参数也与 browserName 不兼容。 | /abs/path/to/my.apk 或 http://myapp.com/app.ipa |
| browserName | 做自动化时使用的浏览器名字。如果是一个应用则只需填写个空的字符串 | 'Safari' 对应 iOS，'Chrome', 'Chromium', 或 'Browser' 则对应 Android |
| newCommandTimeout | 用于客户端在退出或者结束 session 之前，Appium 等待客户端发送一条新命令所花费的时间（秒为单位） | 例如 60 |
| language | (Sim/Emu-only) 为模拟器设置语言 | 例如 fr |
| locale | (Sim/Emu-only) 为模拟器设置所在区域 | 例如 fr_CA |
| udid | 连接真机的唯一设备号 | 例如 1ae203187fc012g |
| orientation | (Sim/Emu-only) 模拟器当前的方向 | 竖屏 或 横屏 |
| autoWebview | 直接转换到 Webview 上下文（context）。默认值为 false | true, false |
| noReset | 在当前 session 下不会重置应用的状态。默认值为 false | true, false |
| fullReset | (iOS)删除所有的模拟器文件夹。(Android) 要清除 app 里的数据，请将应用卸载才能达到重置应用的效果。在 Android, 在 session 完成之后也会将应用卸载掉。默认值为 false | true, false |



**Appium 引擎**

- Android —— uiautomator2
- IOS —— xcuitest

`pip install Appium-Python-Client`

需要先运行appium服务
```python
from appium import webdriver

desired_caps = {
    "platformName": "Android",
    "platformVersion": "5.1.1",
    "deviceName": "BAHBBDB651228049",
    "appPackage": "me.weishu.exp",
    "appActivity": "me.weishu.exp.ui.MainActivity"
}

desired_caps['autoGrantPermissions'] = True  # 自动获取权限
desired_caps["noReset"] = True  # 不用每次重置

# 输入中文设置
# desired_caps ['unicodekeyboard'] = True
# desired_caps ['resetkeyboard'] True

driver = webdriver.Remote("http://127.0.0.1:4723/wd/hub", desired_caps)
print(driver.current_activity,driver.current_package)
driver.quit()
```
```javascript
adb shell getprop ro.build.version.release	版本号
adb shell dumpsys window windows | findstr mFocusedApp	包名/界面
aapt dump badging < apk > | findstr launchable-activity	启动页面
```

基本操作  <br />  quit()  <br />  start_activity(package，activity)	启动app  <br />  current_package	获取包名  <br />  current_activity	界面名  <br />  launch_app()  <br />  close_app()  <br />  terminate_app()  <br />  activate_app()  <br />  query_app_state()  <br />  install_app(app_path)  <br />  remove_app("包名")  <br />  is_app_installed()  <br />  reset()  <br />  background_app(seconds)	将应用置于后台  <br />  implicitly_wait(seconds)  <br />  元素定位

**普通方式的定位**

- driver.find_element_by_accessibility_id() 	content-desc
- driver.find_element_by_id() 	resource-id
- driver.find_element_by_name() 	text
- driver.find_element_by_xpath() 	xpath

element改为elements是找所有满足的条件，返回数组。  <br />  MobileBy** 的定位方式**  <br />  from appium.webdriver.common.mobileby import MobileBy

- self.driver.find_element(MobileBy.ID,"")
- self.driver.find_element(MobileBy.XPATH,"")
- self.driver.find_element(MobileBy.ACCESSIBILITY_ID,"")
- self.driver.find_element(MobileBy.NAME,"")



**元素的常用方法**

- 点击方法：element.click()
- 输入操作：element.send_keys(string)
- 设置元素的值：element.set_value(string)
- 清除操作：element.clear()
- 是否可见：element.is_displayed
- 是否可用：element.enabled()
- 是否被选中：element.is_selected()
- 获取属性值：element.get_attribute(name)
- driver.swipe(start_x,start_y,end_x,end_y,duration=None)
- driver.drag_and_drop(origin_el,des_el)
- driver.scroll(origin_el,des_el)



**元素常用的属性**

- 获取元素文本：element.text
- 获取元素坐标：element.location
- 获取元素尺寸（高和宽）：element.size

driver.get_window_size()	获取手机分辨率  <br />  driver.get_screenshot_as_file()	截图  <br />  driver.network_connection	获取手机网络（1：飞行模式 2：只开wifi 4：只开流量 6：网络全开）  <br />  driver.set_network_connection(connection_type)	设置网络  <br />  driver.press_keycode(keycode,metastate=None)	发送键到设备  <br />  driver.open_notifications()	点击通知消息


模拟操作  <br />  **TouchAction(driver)**

- tap(element=None,x=None,y=None,count =1)	轻敲
- press(el=None,x=None,y=None)按下
- release(el=None,x=None,y=None)	抬起
- wait(mseconds)	释放
- long_press(el=None,x=None,y=None,duration=1000)	长按
- move_to(x=None,y=None)	移动

**webview**  <br />  webview页面class属性值= android.webkit.webview  <br />  获取所有contexts包括原生页面和webview  <br />  driver.contexts  <br />  获取当前context  <br />  driver.current_context  <br />  进入webview页面  <br />  driver. switch_to. context()

toast  <br />  启动参数中添加一个参数  <br />  automationName": "Uiautomator2" #获取toast  <br />  操作触发toast出现的元素  <br />  获取toast，借助selenium中显式等待WebDriverWait类

小程序  <br />  获取小程序在微信中的进程

1. adb shell
2. dumpsus activity top | grep ACTIVITY	# pid
3. ps pid

得到微信小程序进程 com.tencent.mm:appbrand0  <br />  启动参数中添加微信小程序进程  <br />  `"chromeOptions": {"androidProcess": "com. tencent. mm: appbzango"}`

appium的ChromeDriver目录：appium\node_modules\appium-chromedriver\chromedriver\win  <br />  `'chromeOptions': {'androidProcess': 'com.vitalerter'},`

Webview debug  <br />  adb 连接 手机或模拟器  <br />  chrome://inspect  <br />  对于内核版本不一致需要vpn



# [Auto.js](https://hyb1996.github.io/AutoJs-Docs/#/)
基于 JavaScript 语言运行在Android平台上的脚本框架，使用[Rhino 1.7.7.2](https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/Rhino)作为脚本引擎，支持ES5与部分ES6特性  <br />  工作原理是基于辅助服务AccessibilityService  <br />  [Auto.js-VSCodeExt](https://github.com/hyb1996/Auto.js-VSCode-Extension)

- Start Server: 启动插件服务。确保手机和电脑在同一区域网的情况下，在Auto.js的侧拉菜单中使用连接电脑功能连接。
- Stop Server: 停止插件服务。
- Run 运行当前编辑器的脚本。如果有多个设备连接，则在所有设备运行。
- Rerun 停止当前文件对应的脚本并重新运行。如果有多个设备连接，则在所有设备重新运行。
- Stop 停止当前文件对应的脚本。如果有多个设备连接，则在所有设备停止。
- StopAll 停止所有正在运行的脚本。如果有多个设备连接，则在所有设备运行所有脚本。
- Save 保存当前文件到手机的脚本默认目录（文件名会加上前缀remote)。如果有多个设备连接，则在所有设备保存。
- RunOnDevice: 弹出设备菜单并在指定设备运行脚本。
- SaveToDevice: 弹出设备菜单并在指定设备保存脚本。
- New Project（新建项目）：选择一个空文件夹（或者在文件管理器中新建一个空文件夹），将会自动创建一个项目
- Run Project（运行项目）：运行一个项目，需要Auto.js 4.0.4Alpha5以上支持
- Save Project（保存项目）：保存一个项目，需要Auto.js 4.0.4Alpha5以上支持



# [scrcpy](https://github.com/Genymobile/scrcpy)
特点

- 轻量 (原生，仅显示设备屏幕)
- 性能 (30~60fps)
- 质量 (分辨率可达 1920×1080 或更高)
- 低延迟 (35~70ms)
- 快速启动 (最快 1 秒内即可显示第一帧)
- 无侵入性 (不会在设备上遗留任何程序)

确保设备已[开启 adb 调试](https://developer.android.com/studio/command-line/adb.html#Enabling)后，运行scrcpy

Option

-  --always-on-top
-  -b, --bit-rate value
-  --codec-options key[:type]=value[,...]
-  --crop width:height:x:y
-  --disable-screensaver
-  --display id
-  --encoder name
-  --force-adb-forward
-  --forward-all-clicks
-  -f, --fullscreen
-  --legacy-paste
-  --lock-video-orientation value	锁定屏幕方向
-  --max-fps value
-  -m, --max-size value
-  -n, --no-control
-  -N, --no-display
-  --no-key-repeat
-  --no-mipmaps
-  -p, --port port[:port]
-  --prefer-text
-  --push-target path
-  -r, --record file.mp4
-  --record-format format
-  --render-driver name
-  --render-expired-frames
-  --rotation value
-  -s, --serial serial
-  --shortcut-mod key[+...]][,...]

 Specify the modifiers to use for scrcpy shortcuts.  <br />   Possible keys are "lctrl", "rctrl", "lalt", "ralt", "lsuper" and "rsuper".

-  -S, --turn-screen-off
-  -t, --show-touches
-  -V, --verbosity value	Set the log level (debug, info, warn or error).
-  -w, --stay-awake
-  --window-borderless
-  --window-title text
-  --window-x value
-  --window-y value
-  --window-width value
-  --window-height value



**快捷键**  <br />  MOD 是快捷键的修饰键， 默认是 (左) Alt 或 (左) Super

| 操作 | 快捷键 |
| --- | --- |
| 全屏 | MOD+f |
| 向左旋转屏幕 | MOD+← _(左箭头)_ |
| 向右旋转屏幕 | MOD+→ _(右箭头)_ |
| 将窗口大小重置为1:1 (匹配像素) | MOD+g |
| 将窗口大小重置为消除黑边 | MOD+w &#124; _双击_ |
| 点按 主屏幕 | MOD+h &#124; _鼠标中键_ |
| 点按 返回 | MOD+b &#124; _鼠标右键_ |
| 点按 切换应用 | MOD+s |
| 点按 菜单 (解锁屏幕) | MOD+m |
| 点按 音量+ | MOD+↑ _(上箭头)_ |
| 点按 音量- | MOD+↓ _(下箭头)_ |
| 点按 电源 | MOD+p |
| 打开屏幕 | _鼠标右键_ |
| 关闭设备屏幕 (但继续在电脑上显示) | MOD+o |
| 打开设备屏幕 | MOD+Shift+o |
| 旋转设备屏幕 | MOD+r |
| 展开通知面板 | MOD+n |
| 收起通知面板 | MOD+Shift+n |
| 复制到剪贴板³ | MOD+c |
| 剪切到剪贴板³ | MOD+x |
| 同步剪贴板并粘贴³ | MOD+v |
| 注入电脑剪贴板文本 | MOD+Shift+v |
| 打开/关闭FPS显示 (在 stdout) | MOD+i |
| 捏拉缩放 | Ctrl+_按住并移动鼠标_ |



