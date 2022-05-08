
# [Windows Terminal](https://docs.microsoft.com/zh-cn/windows/terminal/)


**shortcuts**
```c
{ "command":"commandName" "keys": "modifiers+key"  }
{ "command": { "action": "commandName", "argument": "value" }, "keys": "modifiers+key" }
{ "command": "openSettings", "keys": "ctrl+," },
{ "command": { "action": "openSettings", "target": "defaultsFile" }, "keys": "ctrl+alt+," }
{ "command": "duplicateTab", "keys": "ctrl+shift+d" }
{ "command": "newTab", "keys": "ctrl+shift+t" },
{ "command": { "action": "newTab", "index": 0 }, "keys": "ctrl+shift+1" },
{ "command": { "action": "switchToTab", "index": 0 }, "keys": "ctrl+alt+1" },
{ "command": { "action": "splitPane", "split": "horizontal"}, "keys": "alt+shift+-" },
{ "command": { "action": "splitPane", "split": "vertical"}, "keys": "alt+shift+plus" }
{ "command": "commandPalette", "keys": "ctrl+shift+p" }
```

**wt [options] [command ; ]**

- --maximized、-M	以最大化形式启动终端。
- --fullscreen、-F	以全屏形式启动终端。
- --title
- --profile, -p profile-name
- --startingDirectory, -d starting-directory
- new-tab	创建新选项卡。
- split-pane	-H, --horizontal、-V, --vertical	拆分新窗格。
- focus-tab	--target, -t tab-index	聚焦于特定选项卡。

**setting.json**
```c
"initialPosition":"180,150",
"initialCols": 85,
"initialRows": 21,
"copyOnSelect": true,
"copyFormatting": true,
"profiles":
    {
        "defaults":
        {
                "fontSize":15,
                "backgroundImage":"D:\\bg.png",
                "backgroundImageOpacity":0.2,
        },
}
"schemes": ["Tango Dark"],
```



# [VS Code](https://code.visualstudio.com/docs)

[awesome-vscode](https://github.com/viatsko/awesome-vscode)

## Extension

- One Dark Pro
- Chinese (Simplified) Language
- indent-rainbow
- Code Runner
- [Toggle Quotes](https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes)
- [Surround](https://marketplace.visualstudio.com/items?itemName=yatki.vscode-surround)
- [Vscode Google Translate](https://marketplace.visualstudio.com/items?itemName=funkyremi.vscode-google-translate)


## Default Keyboard Shortcuts
**Basic Editing**

| Command | Key | Command id |
| --- | --- | --- |
| Delete Line | Ctrl+Shift+K | editor.action.deleteLines |
| **Insert Line Below** | Ctrl+Enter | editor.action.insertLineAfter |
| Insert Line Above | Ctrl+Shift+Enter | editor.action.insertLineBefore |
| Move Line Down | Alt+Down | editor.action.moveLinesDownAction |
| Move Line Up | Alt+Up | editor.action.moveLinesUpAction |
| **Select current line** | Ctrl+L | expandLineSelection |
| **Insert Cursor Below** | Ctrl+Alt+Down | editor.action.insertCursorBelow |
| Insert Cursor Above | Ctrl+Alt+Up | editor.action.insertCursorAbove |
| Jump to matching bracket | Ctrl+Shift+\\ | editor.action.jumpToBracket |
| Indent Line | Ctrl+] | editor.action.indentLines |
| Outdent Line | Ctrl+[ | editor.action.outdentLines |
| Add Line Comment | Ctrl+K Ctrl+C | editor.action.addCommentLine |
| Remove Line Comment | Ctrl+K Ctrl+U | editor.action.removeCommentLine |
| Toggle Line Comment | Ctrl+/ | editor.action.commentLine |
| Toggle Block Comment | Shift+Alt+A | editor.action.blockComment |

Languages Editing

| Command | Key | Command id |
| --- | --- | --- |
| **Trigger Suggest** | Ctrl+Space | editor.action.triggerSuggest |
| **Trigger Parameter Hints** | Ctrl+Shift+Space | editor.action.triggerParameterHints |
| Format Document | Shift+Alt+F | editor.action.formatDocument |
| **Format Selection** | Ctrl+K Ctrl+F | editor.action.formatSelection |
| **Go to Definition** | F12 | editor.action.revealDefinition |
| **Quick Fix** | Ctrl+. | editor.action.quickFix |
| Trim Trailing Whitespace | Ctrl+K Ctrl+X | editor.action.trimTrailingWhitespace |
| Change Language Mode | Ctrl+K M | workbench.action.editor.changeLanguageMode |

Navigation

| Command | Key | Command id |
| --- | --- | --- |
| **Go to Line...** | Ctrl+G | workbench.action.gotoLine |
| Go to File..., Quick Open | Ctrl+P | workbench.action.quickOpen |
| Go to Next Error or Warning | F8 | editor.action.marker.nextInFiles |
| Go to Previous Error or Warning | Shift+F8 | editor.action.marker.prevInFiles |
| **Show All Commands** | Ctrl+Shift+P or F1 | workbench.action.showCommands |

**Debug**

| Command | Key | Command id |
| --- | --- | --- |
| Toggle Breakpoint | F9 | editor.debug.action.toggleBreakpoint |
| Start | F5 | workbench.action.debug.start |
| Continue | F5 | workbench.action.debug.continue |
| Start (without debugging) | Ctrl+F5 | workbench.action.debug.run |
| Pause | F6 | workbench.action.debug.pause |
| Step Into | F11 | workbench.action.debug.stepInto |


快速批量添加引号和逗号
```c
# CTRF + F => 输入下方正则 => 全部替换
(.*?): (.*)  # 选中正则
'$1': '$2', # 选中保留大小写  ^\s*(?=\r?$)\n
```


## CLI
```c
code [options][paths...]
-d --diff <file> <file>           Compare two files with each other.
-a --add <folder>                 Add folder(s) to the last active window.
-g --goto <file:line[:character]> Open a file at the path on the specified
                                line and character position.
-n --new-window                   Force to open a new window.
-r --reuse-window                 Force to open a file or folder in an
                                already opened window.
--folder-uri <uri>                Opens a window with given folder uri(s)
--file-uri <uri>                  Opens a window with given file uri(s)
-w --wait                         Wait for the files to be closed before
                                returning.
--locale <locale>                 The locale to use (e.g. en-US or zh-TW).
--user-data-dir <dir>             Specifies the directory that user data is
                                kept in. Can be used to open multiple
                                distinct instances of Code.
-h --help                         Print usage.
```


## Settings
`C:\Users\<Username>\AppData\Roaming\Code\User\settings.json`
```json
{
    "editor.fontSize": 18,
    "debug.console.fontSize": 16,
    "workbench.colorTheme": "One Dark Pro",
    "oneDarkPro.vivid": true,
    "oneDarkPro.bold": true,
    "editor.suggestSelection": "first",
    "editor.formatOnType": true,
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.linkedEditing": true,
    "editor.suggest.maxVisibleSuggestions": 10,
    "terminal.integrated.copyOnSelection": true,
    "terminal.integrated.fontSize": 15,
  
    "C_Cpp.updateChannel": "Insiders",
    "C_Cpp.default.cppStandard": "c++20",
    "C_Cpp.default.cStandard": "c11",
    "C_Cpp.default.intelliSenseMode": "msvc-x64",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "python.jediEnabled": true,
    "python.pythonPath": "D:\\Python\\python.exe",
    "files.trimTrailingWhitespace": true,
    "code-runner.runInTerminal": true,
    "code-runner.saveFileBeforeRun": true,
    "[java]": {
        "java.home":"D:\\jdk-13.0.1"
    },
    "workbench.startupEditor": "newUntitledFile",
    "update.enableWindowsBackgroundUpdates": false,
    "http.proxySupport": "off",
    "python.terminal.activateEnvironment": false,
    "explorer.confirmDelete": false,
    "cSpell.enableFiletypes": [
        "!asciidoc",
        "!go",
        "!handlebars",
        "!haskell",
        "!jade",
        "!javascriptreact",
        "!json",
        "!jsonc",
        "!less",
        "!plaintext",
        "!pug",
        "!restructuredtext",
        "!rust",
        "!scala",
        "!scss",
        "!typescript",
        "!typescriptreact",
        "!yaml",
        "!yml"
    ],
    "java.semanticHighlighting.enabled": true,
    "python.languageServer": "Jedi",
    "explorer.confirmDragAndDrop": false,
    "git.ignoreWindowsGit27Warning": true,
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
    "workbench.editorAssociations": {
        "*.ipynb": "jupyter-notebook"
    },
    "python.defaultInterpreterPath": "D:\\Python\\python.exe"
}
```


Snippets
```json
{
  // Place your snippets for python here. Each snippet is defined under a snippet name and has a prefix, body and 
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
  // same ids are connected.
  "Print to console": {
    "prefix": "main",
    "body": [
      "if __name__ == '__main__':",
      "    ${1:pass}",
    ],
    "description": "python–main"
  }
}
```


python输出中文乱码
```json
在配置文件增加：
"code-runner.runInTerminal": true

或	

code-runner.executorMap": {
....
"python": "set PYTHONIOENCODING=utf8 && python",
....
}

或

F1 键调出控制台，输入task,选择任务：配置任务运行程序,打开tasks.json文件，
"options": {
 "env":{
 "PYTHONIOENCODING": "UTF-8"
 }
}
```


# Visual Studio 2019

**shortcut**  <br />  代码对齐：Ctrl + K + D  <br />  调转代码段头/尾：Shift+HOME / Shift+END  <br />  注释选中代码段：Ctrl + K + C  <br />  取消选中代码段的注释：Ctrl + K +U  <br />  快速创建当前项目的类：Ctrl+Shift+A  <br />  F10：逐过程调试  <br />  F11：逐语句调试  <br />  F12：转到定义，到变量或函数定义的地方，与ctrl+-配合使用非常方便  <br />  Ctrl+]：匹配选中的括号（大括号、小括号都行），在多层循环+判断语句时非常方便  <br />  Ctr + Space：代码补全

寻找

| 快速寻找 | Ctrl + F |
| --- | --- |
| 快速寻找下一个结果 | Enter |
| 快速寻找上一个结果 | Shift + Enter |
| 快速寻找展开下拉式清单 | Alt + 向下键 |
| 关闭寻找 | Esc |
| 快速取代 | Ctrl + H |
| 快速取代- 取代下一个 | Alt + R |
| 快速取代- 全部取代 | Alt + A |
| 档案中寻找 | Ctrl + Shift + F |
| 档案中取代 | Ctrl + Shift + H |

程式码编辑器

| 移至全部 | Ctrl + T |
| --- | --- |
| 前往最近使用的档案 | Ctrl + T , R |
| 多插入号多个插入点 | Ctrl + Alt + click |
| 多插入号新增比对选取项目 | Shift + Alt + Ins |
| 格式化文件 | Ctrl + K , D |
| IntelliSense 建议模式 | Ctrl + Alt + 空格键 (切换) |
| 强制显示IntelliSense | Ctrl + J |
| 快速动作 | Ctrl + . |
| 程式码片段选择器 | Ctrl + K、X或?、Tab (Visual Basic) |
| 以此环绕 | Ctrl + K、S |
| 显示快速咨询 | Ctrl + K、I |
| 巡览至 | Ctrl + , |
| 巡览反白显示的参考 | Ctrl + Shift + 向上键 (上一个)  Ctrl + Shift + 向下键 (下一个) |
| 编辑器缩放 | Ctrl + Shift + > (放大)  Ctrl + Shift + < (缩小) |
| 区块选取 | 按住Alt并拖曳滑鼠Shift + Alt + 箭号按键 |
| 将行上移/下移 | Alt + 向上键 / Alt + 向下键 |
| 重复行 | Ctrl + E、V |
| 展开选取范围 | Shift + Alt + = |
| 缩小选取范围 | Shift + Alt + - |
| 移至定义 | F12 |
| 查看定义 | Alt + F12 |
| 移至定义堆叠 | Ctrl + Shift + 8 (向后)  Ctrl + Shift + 7 (向前) |
| 关闭[查看定义] 视窗 | Esc |
| 将[查看定义] 视窗升级到一般文件索引标签 | Ctrl + Alt + Home |
| 在多个[查看定义] 视窗之间巡览 | Ctrl + Alt + - and Ctrl + Alt + = |
| 在多个查看结果之间巡览 | F8和Shift + F8 |
| 在程式码编辑器视窗和[查看定义] 视窗之间切换 | Shift + Esc |
| 移至封闭区块 | Ctrl + Alt + 向上键 |
| 前往下一个/上一个问题 | Alt + PgUp / Alt + PgDn |
| 关联式导览功能表 | Alt + ` |

侦错

| 开始侦错 | F5 |
| --- | --- |
| 停止侦错 | Shift + F5 |
| 重新启动侦错 | Ctrl + Shift + F5 |
| 不进入函式 | F10 |
| 逐步执行 | F11 |
| 跳离函式 | Shift + F11 |
| 执行至游标处 | Ctrl + F10 |
| 设定Next 陈述式 | Ctrl + Shift + F10 |
| 设定和切换中断点 | F9 |
| 停用中断点 | Ctrl + F9 |
| 即时运算视窗 | Ctrl + Alt + I |
| 即时运算视窗命令模式 | 输入> |
| 即时运算视窗- 清除缓冲区 | 输入cls |
| 即时运算视窗- 列印值 | 输入?varname |



**C6031 返回值被忽略: "scanf".**

- 原因：在ANSI C中没有scanf_s(),只有scanf()，但是scanf()在读取时不检查边界，所以可能会造成内存泄露。Microsoft在VS中提供了scanf_s()，如果想继续使用scanf这个不安全的函数以下方法可以解决
- 方法一：在文件顶部添加代码：#pragma warning(disable:4996)
- 方法二：错误提示的原因在与vs中的SDL检查；关闭步骤右键单击工程文件-->属性-------->  c/c++  ------>所有选项------------> SDL检查选项改为 否
-   <br />  

**对于调试程序是弹出xxx有未经处理的异常: 0xC00000FD: Stack overflow**  <br />  解决方案：将“项目属性->链接器->系统->堆栈保留大小”设大一点,比如1000000，此项的默认值是0；

**VC++ & GCC 的差异**  <br />  **VC 可能会自动 include 一些头文件，gcc 编译提示函数找不到。**  <br />  **使用 scanf 等函数会警告 not safe(warning 4996)，VC 推荐使用 scanf_s ，但是这个不属于 C / C++ 标准，gcc 没有。**  <br />  **gcc 也没有 itoa（数字转换为字符串的函数）。**  <br />  **gcc 上，模板类继承模板类，two phase name lookup，调用父类函数会提示找不到，需要用 this-> 调用。**


# [WSL](https://docs.microsoft.com/zh-cn/windows/wsl/)
Windows Subsystem for Linux
```shell
ultra  1999

# reset passsword
passwd

# 更新和升级包
sudo apt update && sudo apt upgrade
```


**安装**
```shell
wsl --install
```

- 启用可选的 WSL 和虚拟机平台组件
- 下载并安装最新 Linux 内核
- 将 WSL 2 设置为默认值
- 下载并安装 Ubuntu Linux 分发 (可能需要重新启动)

更改默认安装的 Linux 发行版
```shell
查看可通过在线商店下载的可用 Linux 发行版列表
wsl --list --online 或 wsl -l -o

在初始安装后安装其他 Linux 发行版
wsl --install -d <Distribution Name>
```


**旧版安装**  <br />  1 启用适用于 Linux 的 Windows 子系统  <br />  管理员身份打开 PowerShell 并运行：
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
5 安装所选的 Linux 分发  <br />  Microsoft Store


Linux GUI  <br />  更新重启
```shell
wsl --update
wsl --shutdown
```

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


[**互操作性**](https://docs.microsoft.com/zh-cn/windows/wsl/filesystems)  <br />  混合 Linux 和 Windows 命令
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

Windows 与 WSL 之间的共享环境变量
```shell
WSLENV=HOME/w:GOPATH/l:TMPDIR/p …
```
标志

- /p - 在 WSL/Linux 样式路径与 Win32 路径之间转换路径。
- /l - 指示环境变量是路径列表。
- /u - 指示仅当从 Win32 运行 WSL 时，才应包含此环境变量。
- /w - 指示仅当从 WSL 运行 Win32 时，才应包含此环境变量。



**CLI**  <br />  `wsl [Argument] [Options...] [CommandLine]`

- --distribution, -d <分发版>        运行指定的分发。
- --user, -u <用户名>        以指定用户身份运行。
- --export <分发版> <文件名>
- 将分发导出到 tar 文件。
- 对于标准输出，文件名可以是 -。
- --import <分发版> <安装位置> <文件名> [选项]
- --shutdown       立即终止所有正在运行的分发和 WSL 2 轻型工具虚拟机。

- --status	显示适用于 Linux 的 Windows 子系统的状态。
- --update [--rollback]		 WSL 2 内核将更新到最新版本 [还原到 WSL 2 内核的先前版本]
- --list, -l [--all | --running]

- --set-default, -s <分发版>
- --set-default-version <版本>
- --set-version <分发版> <版本>
- --terminate, -t <分发版>       终止指定的分发。
- --unregister <分发版>        注销分发。

 <DistributionName> config --default-user <Username>



# Virtual Machine

# Hyper-V
虚拟机管理 服务 vmms
```shell
Get-VM	返回虚拟机列表
Start-VM | Stop-VM -Name <virtual machine name>	启动和关闭虚拟机
```

- 进入/退出全屏 的快捷键	Ctr + Alt + Pause/Break
- 鼠标释放快捷键			Ctr + Alt + Left ( 左方向键 )

**Hyper-V 中调整Ubuntu分辨率**

- sudo vi /etc/default/grub
- 找到GRUB_CMDLINE_LINUX_DEFAULT, 添加video=hyperv_fb:[the resolution you want]
- 示例: GRUB_CMDLINE_LINUX_DEFAULT="quiet splash video=hyperv_fb:1920x1080"
- 运行 sudo update-grub
- 重启 sudo reboot




# <windows.h>
```c
#include <windows.h>
int WINAPI WinMain(
    HINSTANCE hInstance,  // 当前窗口句柄
    HINSTANCE hPrevInstance,  // 前一个窗口句柄，Win32下为NULL（Win16留下的废物，目前已弃用）
    LPSTR lpCmdLine,  // 命令行参数
    int nCmdShow  // 窗口显示方式)
{
    // 调用API 函数MessageBox
    int nSelect = MessageBox(NULL, TEXT("你好"), TEXT("Welcome"), MB_OKCANCEL);
    if(nSelect == IDOK){
        MessageBox(NULL, TEXT("你点击了“确定”按钮"), TEXT("提示"), MB_OK);
    }else{
        MessageBox(NULL, TEXT("你点击了“取消”按钮"), TEXT("提示"), MB_OK);
    }
    return 0;
}
```
int WINAPI MessageBox( HWND hWnd, LPCTSTR lpText, LPCTSTR lpCaption, UINT uType );

- hWnd：该消息框的父窗口句柄，如果此参数为NULL，则该消息框没有拥有父窗口
- lpText：消息框的内容。LPCTSTR 是自定义数据类型，等价于 const char *。
- lpCaption：消息框的标题。
- uType：对话框的按钮样式和图标。
| 按钮 | 含义 |
| --- | --- |
| MB_OK | 默认值，有一个“确认”按钮在里面 |
| MB_YESNO | 有“是”和“否”两个按钮在里面 |
| MB_ABORTRETRYIGNORE | 有“中止”，“重试”和“跳过”三个按钮在里面 |
| MB_YESNOCANCEL | 有“是”，“否”和“取消”三个按钮在里面 |
| MB_RETRYCANCEL | 有“重试”和“取消”两个按钮在里面 |
| MB_OKCANCEL | 有“确定”和“取消”两个按钮在里面 |

```c
#define MB_OK                 0x00000000L
#define MB_OKCANCEL           0x00000001L
#define MB_ABORTRETRYIGNORE   0x00000002L
#define MB_YESNOCANCEL        0x00000003L
#define MB_YESNO              0x00000004L
#define MB_RETRYCANCEL        0x00000005L
```
| 图标 | 含义 |
| --- | --- |
| MB_ICONEXCLAMATION | 一个惊叹号出现在消息框： |
| MB_ICONWARNING | 一个惊叹号出现在消息框（同上） |
| MB_ICONINFORMATION | 一个圆圈中小写字母i组成的图标出现在消息框： |
| MB_ICONASTERISK | 一个圆圈中小写字母i组成的图标出现在消息框（同上） |
| MB_ICONQUESTION | 一个问题标记图标出现在消息框： |
| MB_ICONSTOP | 一个停止消息图标出现在消息框： |
| MB_ICONERROR | 一个停止消息图标出现在消息框（同上） |
| MB_ICONHAND | 一个停止消息图标出现在消息框（同上） |

![](http://c.biancheng.net/cpp/uploads/allimg/141108/1-14110Q0425B47.png#crop=0&crop=0&crop=1&crop=1&id=VaWk7&originHeight=38&originWidth=58&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  ![](http://c.biancheng.net/cpp/uploads/allimg/141108/1-14110Q0431R22.png#crop=0&crop=0&crop=1&crop=1&id=Dzwln&originHeight=38&originWidth=58&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  ![](http://c.biancheng.net/cpp/uploads/allimg/141108/1-14110Q043302b.png#crop=0&crop=0&crop=1&crop=1&id=ZT56s&originHeight=38&originWidth=58&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  ![](http://c.biancheng.net/cpp/uploads/allimg/141108/1-14110Q04345J6.png#crop=0&crop=0&crop=1&crop=1&id=g0Wok&originHeight=38&originWidth=58&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
```c
#define MB_ICONHAND           0x00000010L
#define MB_ICONQUESTION       0x00000020L
#define MB_ICONEXCLAMATION    0x00000030L
#define MB_ICONASTERISK       0x00000040L
```
| 返回值 | 含义 |
| --- | --- |
| IDOK | 用户按下了“确认”按钮 |
| IDCANCEL | 用户按下了“取消”按钮 |
| IDABORT | 用户按下了“中止”按钮 |
| IDRETRY | 用户按下了“重试”按钮 |
| IDIGNORE | 用户按下了“忽略”按钮 |
| IDYES | 用户按下了“是”按钮 |
| IDNO | 用户按下了“否”按钮 |

```c
#define IDOK       1
#define IDCANCEL   2
#define IDABORT    3
#define IDRETRY    4
#define IDIGNORE   5
#define IDYES      6
#define IDNO       7
```
**数据类型**
```c
typedef int                 INT;       /* 整形 */
typedef unsigned int        UINT;      /* 无符号整形 */
typedef unsigned int        *PUINT;    /* 无符号整形指针 */
typedef int                 BOOL;      /* 布尔类型 */
typedef unsigned char       BYTE;      /* 字节 */
typedef unsigned short      WORD;      /* WORD (无符号短整型) */
typedef unsigned long       DWORD;     /* DOUBLE WORD (无符号长整形)*/
typedef float               FLOAT;     /* 浮点型 */
typedef FLOAT               *PFLOAT;   /* 指向float类型指针 */
typedef BOOL near           *PBOOL;    /* 指向布尔类型指针 */
typedef BOOL far            *LPBOOL;
typedef BYTE near           *PBYTE;    /* 指向字节类型指针 */
typedef BYTE far            *LPBYTE;
typedef int near            *PINT;     /* 整形指针 */
typedef int far             *LPINT;    
typedef WORD near           *PWORD;    /* 指向WORD类型的指针 */
typedef WORD far            *LPWORD;
typedef long far            *LPLONG;   /* 指向长整形的指针 */
typedef DWORD near          *PDWORD;   /* 指向DWORD类型的指针 */
typedef DWORD far           *LPDWORD;
typedef void far            *LPVOID;   /* 指向void类型的指针 */
typedef CONST void far      *LPCVOID;  /* 指向void类型的常指针 */
```
"LP"是老式写法  <br />  定义宽字符串，需要加前缀L  <br />  wchar_t *str = L"C语言";  <br />  句柄(Handle)：不同窗口、控件、图像等都对应一个唯一的数字  <br />  消息结构体
```c
typedef struct tagMSG {
    HWND hwnd;
    UINT message;
    WPARAM wParam;
    LPARAM lParam;
    DWORD time;
    POINT pt;
} MSG;
```
