---
title: Microsoft
created_at: 2022-02-01T05:44:33.000Z
updated_at: 2023-11-05T14:39:44.000Z
word_count: 3139
---  
## —— [Microsoft dev env](https://learn.microsoft.com/en-us/windows/dev-environment/) ——

## [Windows Terminal](https://docs.microsoft.com/zh-cn/windows/terminal/)


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



## [WinGet](https://github.com/microsoft/winget-cli)
Windows Package Manager

| Command | Description |
| --- | --- |
| [info](https://learn.microsoft.com/en-us/windows/package-manager/winget/info) | Displays metadata about the system (version numbers, architecture, log location, etc). Helpful for troubleshooting. |
| [install](https://learn.microsoft.com/en-us/windows/package-manager/winget/install) | Installs the specified application. |
| [show](https://learn.microsoft.com/en-us/windows/package-manager/winget/show) | Displays details for the specified application. |
| [source](https://learn.microsoft.com/en-us/windows/package-manager/winget/source) | Adds, removes, and updates the Windows Package Manager repositories accessed by the **winget** tool. |
| [search](https://learn.microsoft.com/en-us/windows/package-manager/winget/search) | Searches for an application. |
| [list](https://learn.microsoft.com/en-us/windows/package-manager/winget/list) | Display installed packages. |
| [upgrade](https://learn.microsoft.com/en-us/windows/package-manager/winget/upgrade) | Upgrades the given package. |
| [uninstall](https://learn.microsoft.com/en-us/windows/package-manager/winget/uninstall) | Uninstalls the given package. |
| [hash](https://learn.microsoft.com/en-us/windows/package-manager/winget/hash) | Generates the SHA256 hash for the installer. |
| [validate](https://learn.microsoft.com/en-us/windows/package-manager/winget/validate) | Validates a manifest file for submission to the Windows Package Manager repository. |
| [settings](https://learn.microsoft.com/en-us/windows/package-manager/winget/settings) | Open settings. |
| [features](https://learn.microsoft.com/en-us/windows/package-manager/winget/features) | Shows the status of experimental features. |
| [export](https://learn.microsoft.com/en-us/windows/package-manager/winget/export) | Exports a list of the installed packages. |
| [import](https://learn.microsoft.com/en-us/windows/package-manager/winget/import) | Installs all the packages in a file. |
| [pin](https://learn.microsoft.com/en-us/windows/package-manager/winget/pinning) | Manage package pins. |
| [configure](https://learn.microsoft.com/en-us/windows/package-manager/winget/configure) | Configures the system into a desired state. |


```
winget list --upgrade-available
```




## [VS Code](https://code.visualstudio.com/docs)

[awesome-vscode](https://github.com/viatsko/awesome-vscode)
### Extension
extensions : `%USERPROFILE%\.vscode\extensions`

- One Dark Pro
- Chinese (Simplified) Language
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- Tabnine AI
- [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- Code Runner
- [Toggle Quotes](https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes)
- [Surround](https://marketplace.visualstudio.com/items?itemName=yatki.vscode-surround)
- [Vscode Google Translate](https://marketplace.visualstudio.com/items?itemName=funkyremi.vscode-google-translate)
- [Text Power Tools](https://marketplace.visualstudio.com/items?itemName=qcz.text-power-tools)
- [vscode-theme-vitesse](https://github.com/antfu/vscode-theme-vitesse)
- [vscode-spell-checker](https://github.com/streetsidesoftware/vscode-spell-checker)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [vscode-gitlens](https://github.com/gitkraken/vscode-gitlens)
- file-icons
- EditorConfig
- [thunder-client-support](https://github.com/rangav/thunder-client-support)

### [Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings)
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

### CLI
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

### Settings

[vscode-settings](https://github.com/antfu/vscode-settings)

`%APPDATA%\Code`  <br />  `C:\Users\<Username>\AppData\Roaming\Code\User\settings.json`
```json
{
  "[python]": {
    "editor.formatOnType": true
  },
  "cSpell.allowCompoundWords": true,
  "cSpell.language": "en,en-US",
  "debug.console.fontSize": 16,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "editor.fontSize": 18,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.guides.bracketPairs": "active",
  "editor.inlineSuggest.enabled": true,
  "editor.linkedEditing": true,
  "editor.suggest.maxVisibleSuggestions": 10,
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "errorLens.enabledDiagnosticLevels": [
    "warning",
    "error"
  ],
  "errorLens.excludeBySource": [
    "cSpell",
    "Grammarly",
    "eslint"
  ],
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.quiet": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5"
  ],
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.simpleDialog.enable": true,
  "files.trimTrailingWhitespace": true,
  "git.enableSmartCommit": true,
  "git.ignoreMissingGitWarning": true,
  "git.untrackedChanges": "separate",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "oneDarkPro.bold": true,
  "oneDarkPro.vivid": true,
  "python.formatting.provider": "yapf",
  "python.formatting.yapfArgs": [
	"--style",
	"{column_limit: 79}"
  ],
  "python.linting.enabled": true,
  "python.linting.lintOnSave": true,
  "python.linting.maxNumberOfProblems": 100,
  "python.jediEnabled": true,
  "python.languageServer": "Pylance",
  "search.exclude": {
    "**/.git": true,
    "**/.github": true,
    "**/.nuxt": true,
    "**/.output": true,
    "**/.pnpm": true,
    "**/.vscode": true,
    "**/.yarn": true,
    "**/bower_components": true,
    "**/dist/**": true,
    "**/logs": true,
    "**/node_modules": true,
    "**/out/**": true,
    "**/package-lock.json": true,
    "**/pnpm-lock.yaml": true,
    "**/tmp": true,
    "**/yarn.lock": true
  },
  "tabnine.experimentalAutoImports": true,
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.detectLocale": "off",
  "terminal.integrated.fontSize": 15,
  "terminal.integrated.tabs.enabled": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "update.enableWindowsBackgroundUpdates": false,
  "volar.codeLens.pugTools": false,
  "volar.codeLens.scriptSetupTools": true,
  "volar.completion.preferredAttrNameCase": "pascal",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "workbench.activityBar.visible": true,
  "workbench.colorTheme": "One Dark Pro",
  "workbench.editor.closeOnFileDelete": true,
  "workbench.editor.enablePreview": false,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.limit.enabled": true,
  "workbench.editor.limit.perEditorGroup": true,
  "workbench.editor.limit.value": 5,
  "workbench.editor.wrapTabs": true,
  "workbench.editorAssociations": {
    "*.ipynb": "jupyter-notebook"
  },
  "workbench.iconTheme": "file-icons",
  "workbench.list.smoothScrolling": true,
  "workbench.productIconTheme": "icons-carbon",
  "workbench.startupEditor": "newUntitledFile"
}
```


[Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
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


## [WSL](https://docs.microsoft.com/zh-cn/windows/wsl/)

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

- 使用 Linux 文件系统根目录：`\wsl$\Ubuntu-18.04\home<user name>\Project`
- 而不使用 Windows 文件系统根目录：`/mnt/c/Users//Project$ 或 C:\Users<user name>\Project`

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



## Virtual Machine
## Hyper-V
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

  <br />  



## **—— **IntelliJ IDEA** ——**

### [Shortcuts](https://www.jetbrains.com/help/idea/reference-keymap-win-default.html)

**Live Templates**
> File | Settings | Editor | Live Templates

fori	for循环  <br />  sout	System.out  <br />  .var	生成变量

insert	插入/改写模式


**IntelliJ IDEA's top keyboard shortcuts**

| [Search Everywhere](https://www.jetbrains.com/help/idea/searching-everywhere.html) | Double Shift |
| --- | --- |
| [Find Action...](https://www.jetbrains.com/help/idea/searching-everywhere.html#search_actions) | Ctrl+Shift+A |
| [Show Project window](https://www.jetbrains.com/help/idea/project-tool-window.html) | Alt+1 |
| [Rebuild](https://www.jetbrains.com/help/idea/compiling-applications.html) | Ctrl+Shift+F9 |
| [Show Intention Actions](https://www.jetbrains.com/help/idea/intention-actions.html#apply-intention-actions) | Alt+Enter |
| [Recent Files](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#recent_files) | Ctrl+E |
| [Find Usages](https://www.jetbrains.com/help/idea/find-highlight-usages.html#find-usages) | Alt+F7 |
| [Select In...](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#navigate_in_project_view) | Alt+F1 |
| [Settings...](https://www.jetbrains.com/help/idea/configure-project-settings.html) | Ctrl+Alt+S |
| [Generate...](https://www.jetbrains.com/help/idea/generating-code.html) | Alt+Insert |
| [Run Anything](https://www.jetbrains.com/help/idea/running-applications.html) | Double Ctrl |
| [Debug...](https://www.jetbrains.com/help/idea/starting-the-debugger-session.html) | Alt+Shift+F9 |
| [View Breakpoints...](https://www.jetbrains.com/help/idea/using-breakpoints.html) | Ctrl+Shift+F8 |
| [Attach to Process...](https://www.jetbrains.com/help/idea/attaching-to-local-process.html) | Ctrl+Alt+F5 |
| [VCS Operations Popup...](https://www.jetbrains.com/help/idea/version-control-integration.html) | Alt+` |
| [Refactor This...](https://www.jetbrains.com/help/idea/refactoring-source-code.html) | Ctrl+Alt+Shift+T |
| [Reformat Code](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html) | Ctrl+Alt+L |



**Basic editing**

| Paste as Plain Text | Ctrl+Alt+Shift+V |
| --- | --- |
| Paste from History... | Ctrl+Shift+V |
| Duplicate Line or Selection | Ctrl+D |
| Copy Paths | Ctrl+Shift+C |
| Copy Reference | Ctrl+Alt+Shift+C |
| Save All | Ctrl+S |
| Undo | Ctrl+Z |
| Redo | Ctrl+Shift+Z |
| Start New Line | Shift+Enter |
| Start New Line Before Current | Ctrl+Alt+Enter |
| Delete Line | Ctrl+Y |
| Toggle Case | Ctrl+Shift+U |
| Scratch File | Ctrl+Alt+Shift+Insert |
| Open Source in New Window | Shift+F4 |

**Caret navigation**

|   <br />   |   <br />   |
| --- | --- |
| Move Caret to Previous Word | Ctrl+Left |
| Move Caret to Next Word | Ctrl+Right |
| Move Caret to Line Start | Home |
| Move Caret to Line End | End |
| Move Caret to Matching Brace | Ctrl+Shift+M |
| Move Caret to Code Block Start | Ctrl+[ |
| Move Caret to Code Block End | Ctrl+] |
| Next Method | Alt+Down |
| Previous Method | Alt+Up |
| Move Caret to Page Top | Ctrl+Page Up |
| Move Caret to Page Bottom | Ctrl+Page Down |
| Page Up | Page Up |
| Page Down | Page Down |
| Move Caret to Text Start | Ctrl+Home |
| Move Caret to Text End | Ctrl+End |

**Select text**

|   <br />   |   <br />   |
| --- | --- |
| Select All | Ctrl+A |
| Left with Selection | Shift+Left |
| Right with Selection | Shift+Right |
| Move Caret to Previous Word with Selection | Ctrl+Shift+Left |
| Move Caret to Next Word with Selection | Ctrl+Shift+Right |
| Move Caret to Line Start with Selection | Shift+Home |
| Move Caret to Line End with Selection | Shift+End |
| Up with Selection | Shift+Up |
| Down with Selection | Shift+Down |
| Move Caret to Code Block Start with Selection | Ctrl+Shift+[ |
| Move Caret to Code Block End with Selection | Ctrl+Shift+] |
| Move Caret to Page Top with Selection | Ctrl+Shift+Page Up |
| Move Caret to Page Bottom with Selection | Ctrl+Shift+Page Down |
| Page Up with Selection | Shift+Page Up |
| Page Down with Selection | Shift+Page Down |
| Move Caret to Text Start with Selection | Ctrl+Shift+Home |
| Move Caret to Text End with Selection | Ctrl+Shift+End |
| Extend Selection | Ctrl+W |
| Shrink Selection | Ctrl+Shift+W |

**Multiple carets and selection ranges**

|   <br />   |   <br />   |
| --- | --- |
| [Add/Remove Caret](https://www.jetbrains.com/help/idea/multicursor.html#add-carets-at-selected-locations) | Alt+Shift+Click |
| [Toggle Column Selection Mode](https://www.jetbrains.com/help/idea/multicursor.html#column_selection) | Alt+Shift+Insert |
| [Clone Caret Above](https://www.jetbrains.com/help/idea/multicursor.html#add-carets-above-or-below-the-current-caret) | Double Ctrl + Up |
| [Clone Caret Below](https://www.jetbrains.com/help/idea/multicursor.html#add-carets-above-or-below-the-current-caret) | Double Ctrl + Down |
| [Add Caret to Each Line in Selection](https://www.jetbrains.com/help/idea/multicursor.html#add-carets-to-the-end-of-each-line-in-the-selected-region) | Alt+Shift+G |
| [Add Selection for Next Occurrence](https://www.jetbrains.com/help/idea/multicursor.html#multiple_words) | Alt+J |
| [Select All Occurrences](https://www.jetbrains.com/help/idea/multicursor.html#multiple_words) | Ctrl+Alt+Shift+J |
| [Deselect Last Occurrence](https://www.jetbrains.com/help/idea/multicursor.html#multiple_words) | Alt+Shift+J |
| [Create Rectangular Selection](https://www.jetbrains.com/help/idea/multicursor.html#use-mouse-to-select-rectangular-fragments-of-text-in-normal-selection-mode) | Alt+Shift+Middle-Click |
| [Drag to Create Rectangular Selection](https://www.jetbrains.com/help/idea/multicursor.html#use-mouse-to-select-rectangular-fragments-of-text-in-normal-selection-mode) | Alt+Click |
| [Drag to Create Multiple Rectangular Selections](https://www.jetbrains.com/help/idea/multicursor.html#use-mouse-to-select-rectangular-fragments-of-text-in-normal-selection-mode) | Ctrl+Alt+Shift+Click |

**Coding assistance**

|   <br />   |   <br />   |
| --- | --- |
| [Show Intention Actions](https://www.jetbrains.com/help/idea/intention-actions.html#apply-intention-actions) | Alt+Enter |
| [Basic Completion](https://www.jetbrains.com/help/idea/auto-completing-code.html#basic_completion) | Ctrl+Space |
| Type-Matching Completion | Ctrl+Shift+Space |
| Second Basic Completion | Ctrl+Alt+Space |
| Complete Current Statement | Ctrl+Shift+Enter |
| Reformat Code | Ctrl+Alt+L |
| [Parameter Info](https://www.jetbrains.com/help/idea/viewing-reference-information.html#view-parameter-info) | Ctrl+P |
| [Quick Documentation](https://www.jetbrains.com/help/idea/viewing-reference-information.html#inline-quick-documentation) | Ctrl+Q |
| Move Statement Up | Ctrl+Shift+Up |
| Move Statement Down | Ctrl+Shift+Down |
| Move Element Left | Ctrl+Alt+Shift+Left |
| Move Statement Right | Ctrl+Alt+Shift+Right |
| Move Line Up | Alt+Shift+Up |
| Move Line Down | Alt+Shift+Down |
| Comment with Line Comment | Ctrl+/ |
| Comment with Block Comment | Ctrl+Shift+/ |
| Generate... | Alt+Insert |

**Context navigation**

|   <br />   |   <br />   |
| --- | --- |
| Next Method | Alt+Down |
| Previous Method | Alt+Up |
| [Go to Line/Column...](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#find_line) | Ctrl+G |
| [Switcher](https://www.jetbrains.com/help/idea/using-code-editor.html#ws_editor_switch_between_tabs) | Ctrl+Tab |
| [Select In...](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#navigate_in_project_view) | Alt+F1 |
| [Recent Files](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#recent_files) | Ctrl+E |
| Last Edit Location | Ctrl+Shift+Backspace |
| Back | Ctrl+Alt+Left |
| Forward | Ctrl+Alt+Right |
| Select Next Tab | Alt+Right |
| Select Previous Tab | Alt+Left |
| Toggle Anonymous Bookmark | F11 |
| Toggle Bookmark with Digit | Ctrl+Shift+[digit] |
| Toggle Bookmark with Mnemonic | Ctrl+F11 |
| Show All Bookmarks | Shift+F11 |
| Go to Bookmark with Digit | Ctrl+[digit] |
| Show Mnemonic Bookmarks | N/A |
| Go to Next Bookmark | N/A |
| Go to Previous Bookmark | N/A |
| Show Bookmarks window | N/A |
| Show Structure window | Alt+7 |
| Show Find window | Alt+3 |
| Next Occurrence | Ctrl+Alt+Down |
| Previous Occurrence | Ctrl+Alt+Up |

**Find everything**

|   <br />   |   <br />   |
| --- | --- |
| Search Everywhere | Double Shift |
| [Find...](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-file.html#find_in_file) | Ctrl+F |
| [Find Next / Move to Next Occurrence](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-file.html#find_in_file) | F3 |
| [Find Previous / Move to Previous Occurrence](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-file.html#find_in_file) | Shift+F3 |
| [Replace...](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-file.html#replace_search_string) | Ctrl+R |
| [Find in Files...](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-project.html#find_in_project) | Ctrl+Shift+F |
| [Replace in Files...](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-project.html#replace_search_string_in_project) | Ctrl+Shift+R |
| Next Occurrence of the Word at Caret | Ctrl+F3 |
| Go to File... | Ctrl+Shift+N |
| File Structure | Ctrl+F12 |
| Go to Symbol... | Ctrl+Alt+Shift+N |
| [Find Action...](https://www.jetbrains.com/help/idea/searching-everywhere.html#search_actions) | Ctrl+Shift+A |

**Navigate from symbols**

|   <br />   |   <br />   |
| --- | --- |
| [Find Usages](https://www.jetbrains.com/help/idea/find-highlight-usages.html#find-usages) | Alt+F7 |
| Go to Declaration or Usages | Ctrl+B |
| Go to Type Declaration | Ctrl+Shift+B |
| Show Usages | Ctrl+Alt+F7 |
| [Go to Super Method](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#go_to_implementation) | Ctrl+U |
| [Go to Implementation(s)](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#go_to_implementation) | Ctrl+Alt+B |
| [Highlight Usages in File](https://www.jetbrains.com/help/idea/find-highlight-usages.html#usages_in_file) | Ctrl+Shift+F7 |

**Code analysis**

|   <br />   |   <br />   |
| --- | --- |
| [Show Intention Actions](https://www.jetbrains.com/help/idea/intention-actions.html#apply-intention-actions) | Alt+Enter |
| Error Description | Ctrl+F1 |
| [Next Highlighted Error](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#navigate-errors-warnings) | F2 |
| [Previous Highlighted Error](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#navigate-errors-warnings) | Shift+F2 |
| [Run Inspection by Name...](https://www.jetbrains.com/help/idea/running-inspections.html#run-inspections-manually) | Ctrl+Alt+Shift+I |
| Show Problems window | Alt+6 |

**Run and debug**

|   <br />   |   <br />   |
| --- | --- |
| Run Anything | Double Ctrl |
| Run context configuration | Shift+F10 |
| Run... | Alt+Shift+F10 |
| Debug context configuration | Shift+F9 |
| Debug... | Alt+Shift+F9 |
| Attach to Process... | Ctrl+Alt+F5 |
| Stop | Ctrl+F2 |
| Resume Program | F9 |
| Stop Background Processes... | Ctrl+Shift+F2 |
| Step Over | F8 |
| Force Step Over | Alt+Shift+F8 |
| Step Into | F7 |
| Smart Step Into | Shift+F7 |
| Force Step Into | Alt+Shift+F7 |
| Step Out | Shift+F8 |
| Run To Cursor | Alt+F9 |
| Force Run To Cursor | Ctrl+Alt+F9 |
| Show Execution Point | Alt+F10 |
| Evaluate Expression... | Alt+F8 |
| Quick Evaluate Expression | Ctrl+Alt+F8 |
| Toggle Line Breakpoint | Ctrl+F8 |
| Toggle Temporary Line Breakpoint | Ctrl+Alt+Shift+F8 |
| View Breakpoints... | Ctrl+Shift+F8 |
| Edit Breakpoint | Ctrl+Shift+F8 |
| Show Run window | Alt+4 |
| Show Debug window | Alt+5 |
| Show Services window | Alt+8 |

**Refactorings**

|   <br />   |   <br />   |
| --- | --- |
| Refactor This... | Ctrl+Alt+Shift+T |
| Rename... | Shift+F6 |
| Change Signature... | Ctrl+F6 |
| Inline... | Ctrl+Alt+N |
| Move... | F6 |
| Extract Method... | Ctrl+Alt+M |
| Introduce Field... | Ctrl+Alt+F |
| Introduce Parameter... | Ctrl+Alt+P |
| Introduce Variable... | Ctrl+Alt+V |
| Safe Delete... | Alt+Delete |

**Global VCS actions**

|   <br />   |   <br />   |
| --- | --- |
| VCS Operations Popup... | Alt+` |
| Commit... | Ctrl+K |
| Update Project | Ctrl+T |
| Rollback | Ctrl+Alt+Z |
| Push... | Ctrl+Shift+K |
| Next Change | Ctrl+Alt+Shift+Down |
| Previous Change | Ctrl+Alt+Shift+Up |
| Show Version Control window | Alt+9 |
| Show Commit window | Alt+0 |

**Tool windows**

|   <br />   |   <br />   |
| --- | --- |
| Hide Active Tool Window | Shift+Escape |
| Hide All Tool Windows | Ctrl+Shift+F12 |
| Jump to Last Tool Window | F12 |
| Stretch to Left | Ctrl+Alt+Shift+Left |
| Stretch to Right | Ctrl+Alt+Shift+Right |
| Stretch to Top | Ctrl+Alt+Shift+Up |
| Stretch to Bottom | Ctrl+Alt+Shift+Down |
| Show Project window | Alt+1 |
| Show Bookmarks window | N/A |
| Show Find window | Alt+3 |
| Show Run window | Alt+4 |
| Show Debug window | Alt+5 |
| Show Problems window | Alt+6 |
| Show Structure window | Alt+7 |
| Show Services window | Alt+8 |
| Show Version Control window | Alt+9 |
| Show Commit window | Alt+0 |
| Show Terminal window | Alt+F12 |


### Settings
方法分隔符  <br />  Settings -> Editor -> General -> Appearance  <br />  勾选 show method separators

忽略大小写字母  <br />  Settings -> Editor -> General -> Code Completion  <br />  关闭 Match case

多行显示Tab  <br />  Editor Tabs  <br />  勾选 Show tabs in one row

编码字符集  <br />  Settings -> Editor -> General -> File Encodings

Google style  <br />  [intellij-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)  <br />  Settings -> Editor -> General -> Code Style | Java

filr
```java
/**
 * @description
 *
## * @author ${USER}
 * @date ${YEAR}/${MONTH}/${DAY}
 **/
```


### plugin

- Maven Helper	依赖分析
- Tabnine	基于 AI 的代码提示
- Rainbow Brackets	彩虹括号
- One Dark theme
- google-java-format
- Alibaba Java Coding Guidelines
- String Manipulation
- CamelCase	Shift + Alt + U
- GsonFormat	JSON转类对象
- SequenceDiagram	调用时序图

- JPA
- Mapstruct

- Docer Savior	批量导出接口信息+文档信息到Postman或Markdown
- Doc View		单个接口文档生成

- Key Promoter X	快捷键
- Statistic	项目信息统计
- Translation	翻译插件



### [CLI](https://www.jetbrains.com/help/idea/working-with-the-ide-features-from-command-line.html)
```shell
idea64.exe [project_dir]
idea64.exe [-l|--line line] [project_dir|--temp-project] file[:line]
idea64.exe diff <left> <right>
idea64.exe merge <local> <remote> [base] <merged>
```

