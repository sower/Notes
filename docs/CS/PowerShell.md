---
title: PowerShell
created_at: 2022-02-01T05:44:40.000Z
updated_at: 2022-10-25T12:33:18.000Z
word_count: 6950
---  
## —— [PowerShell](https://docs.microsoft.com/zh-cn/powershell/) ——
任务自动化和[配置管理](https://zh.wikipedia.org/w/index.php?title=%E7%B5%84%E6%85%8B%E7%AE%A1%E7%90%86&action=edit&redlink=1)框架，由.NET Framework和.NET Core是构建的命令行界面壳层相关脚本语言组成

Windows PowerShell ISE是Windows PowerShell的主机应用程序  <br />  文件扩展名

- .ps1 (脚本文件)
- .ps1xml（XML文档）
- .psc1（控制台文件）
- .psd1（数据文件）
- .psm1（脚本模块）
- .pssc（会话配置文件）
- .cdxml (Cmdlet定义的XML文档)

查看版本：$PSVersionTable.PSVersion

| ALT+F7 | 清除命令的历史记录 |
| --- | --- |
| PgUp PgDn | 显示当前会话的第一个命令和最后一个命令 |
| Esc | 清空当前命令行 |
| F2 | 自动补充历史命令至指定字符 |
| F4 | 删除命令行至光标右边指定字符处 |
| F7 | 对话框显示命令行历史记录 |
| F8 | 检索包含指定字符的命令行历史记录 |
| F9 | 根据命令行的历史记录编号选择命令，历史记录编号可以通过F7查看 |
| 上/下方向键 | 切换命令行的历史记录 |
| Backspace | 从右删除命令行字符 |
| Ctrl+C | 取消正在执行的命令 |
| Ctrl+左/右方向键 | 在单词之间移动光标 |
| Ctrl+Home | 删除光标最左端的所有字符 |
| Tab | 自动补齐命令或者文件名 |

能自动识别计算机容量单位，包括KB，MB，GB，TB，PB

## cmdlet
执行特定操作的专用.NET[类](https://zh.wikipedia.org/wiki/%E7%B1%BB_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))  <br />  指令名称的格式都是以[连字号](https://zh.wikipedia.org/wiki/%E8%BF%9E%E5%AD%97%E5%8F%B7)（-）隔开的一对动词和名词，并且通常都是单数名词

常见命令行解释器命令对比

| **PowerShell** | **cmd** | [Unix shell](https://zh.wikipedia.org/wiki/Unix_shell) | **描述** |
| --- | --- | --- | --- |
| Get-ChildItem | [dir](https://zh.wikipedia.org/wiki/Dir_(%E5%91%BD%E4%BB%A4)) | [ls](https://zh.wikipedia.org/wiki/Ls) | 列出当前或给定文件夹中的所有文件和文件夹 |
| Test-Connection | [ping](https://zh.wikipedia.org/wiki/Ping) | [ping](https://zh.wikipedia.org/wiki/Ping) | 从当前计算机向指定计算机发送[互联网控制消息协议回显请求](https://zh.wikipedia.org/wiki/Ping)，或指示另一台计算机这样做 |
| Get-Content | [type](https://zh.wikipedia.org/w/index.php?title=TYPE_(DOS_command)&action=edit&redlink=1) | [cat](https://zh.wikipedia.org/wiki/Cat_(Unix)) | 获取文件内容 |
| Get-Command | [help](https://zh.wikipedia.org/w/index.php?title=Help_(command)&action=edit&redlink=1) | [type](https://zh.wikipedia.org/w/index.php?title=Type_(Unix)&action=edit&redlink=1), [which](https://zh.wikipedia.org/w/index.php?title=Which_(command)&action=edit&redlink=1), [compgen](https://zh.wikipedia.org/w/index.php?title=Compgen_(Unix)&action=edit&redlink=1) | 列出可用的命令 |
| Get-Help | [help](https://zh.wikipedia.org/w/index.php?title=Help_(command)&action=edit&redlink=1) | [apropos](https://zh.wikipedia.org/w/index.php?title=Apropos_(Unix)&action=edit&redlink=1), [man](https://zh.wikipedia.org/wiki/%E6%89%8B%E5%86%8C%E9%A1%B5) | 在控制台上打印命令的文档 |
| Clear-Host | [cls](https://zh.wikipedia.org/w/index.php?title=Cls_(computing)&action=edit&redlink=1) | [clear](https://zh.wikipedia.org/wiki/Clear_(Unix)) | 清除屏幕 |
| Copy-Item | [copy](https://zh.wikipedia.org/wiki/Copy_(%E5%91%BD%E4%BB%A4)), [xcopy](https://zh.wikipedia.org/w/index.php?title=Xcopy&action=edit&redlink=1), [robocopy](https://zh.wikipedia.org/w/index.php?title=Robocopy&action=edit&redlink=1) | [cp](https://zh.wikipedia.org/wiki/Cp_(Unix)) | 将文件和文件夹复制到另一个位置 |
| Move-Item | [move](https://zh.wikipedia.org/w/index.php?title=Move_(command)&action=edit&redlink=1) | [mv](https://zh.wikipedia.org/wiki/Mv_(Unix)) | 将文件和文件夹移动到新位置 |
| Remove-Item | [del](https://zh.wikipedia.org/w/index.php?title=Del_(command)&action=edit&redlink=1), [erase](https://zh.wikipedia.org/w/index.php?title=Del_(command)&action=edit&redlink=1), [rmdir](https://zh.wikipedia.org/wiki/Rmdir), [rd](https://zh.wikipedia.org/wiki/Rmdir) | [rm](https://zh.wikipedia.org/wiki/Rm_(Unix)), rmdir | 删除文件或文件夹 |
| Rename-Item | [ren](https://zh.wikipedia.org/w/index.php?title=Ren_(command)&action=edit&redlink=1), rename | [mv](https://zh.wikipedia.org/wiki/Mv_(Unix)) | 重命名单个文件，文件夹，硬链接或符号链接 |
| Get-Location | [cd](https://zh.wikipedia.org/wiki/Cd_(%E5%91%BD%E4%BB%A4)) | [pwd](https://zh.wikipedia.org/wiki/Pwd) | 显示工作路径（当前文件夹） |
| Pop-Location | [popd](https://zh.wikipedia.org/w/index.php?title=Pushd_and_popd&action=edit&redlink=1) | popd | 将工作路径更改为最近推送到堆栈上的位置 |
| Push-Location | [pushd](https://zh.wikipedia.org/w/index.php?title=Pushd_and_popd&action=edit&redlink=1) | pushd | 将工作路径存储到堆栈中 |
| Set-Location | [cd](https://zh.wikipedia.org/wiki/Cd_(%E5%91%BD%E4%BB%A4)), [chdir](https://zh.wikipedia.org/wiki/Cd_(%E5%91%BD%E4%BB%A4)) | cd | 改变工作路径 |
| Tee-Object |   <br />   | [tee](https://zh.wikipedia.org/wiki/Tee) | 将输入管道传输到文件或变量，并沿管道传递输入 |
| Write-Output | [echo](https://zh.wikipedia.org/wiki/Echo_(%E5%91%BD%E4%BB%A4)) | echo | 将字符串或其他对像打印到[标准流](https://zh.wikipedia.org/wiki/%E6%A8%99%E6%BA%96%E4%B8%B2%E6%B5%81) |
| Get-Process | tlist,[tasklist](https://zh.wikipedia.org/w/index.php?title=Tasklist&action=edit&redlink=1) | [ps](https://zh.wikipedia.org/wiki/Ps_(Unix)) | 列出所有正在运行的进程 |
| Stop-Process | [kill](https://zh.wikipedia.org/w/index.php?title=Kill_(command)&action=edit&redlink=1),[taskkill](https://zh.wikipedia.org/wiki/Kill_(%E5%91%BD%E4%BB%A4)) | kill | 停止正在运行的进程 |
| Select-String | [findstr](https://zh.wikipedia.org/w/index.php?title=Findstr&action=edit&redlink=1) | [find](https://zh.wikipedia.org/wiki/Find), [grep](https://zh.wikipedia.org/wiki/Grep) | 打印与模式匹配的行 |
| Set-Variable | [set](https://zh.wikipedia.org/w/index.php?title=Environment_variable&action=edit&redlink=1) | env, export, set, setenv | 创建或更改[环境变量](https://zh.wikipedia.org/wiki/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)的内容 |
| Invoke-WebRequest | [curl](https://zh.wikipedia.org/wiki/CURL) | [wget](https://zh.wikipedia.org/wiki/Wget), curl | 获取因特网上的网页内容 |

使用`*`通配符来请求项目的所有内容

- Get-Help
- Get-Command
- Show-command
- Get-Date
- Get-Unique
- Get-Random
- Get-Verb
- Out-Null
- Start-Sleep -Seconds

```powershell
# 列出计算机的 IP 地址
Get-CimInstance -Class Win32_NetworkAdapterConfiguration -Filter IPEnabled=$true | Select-Object -ExpandProperty IPAddress
# Ping 计算机
Get-CimInstance -Class Win32_PingStatus -Filter "Address='127.0.0.1'"


# 设置IP
1.导入模块
Import-Module NetTCPIP
Import-Module DnsClient

2.设置IP地址，InterfaceIndex 可以用”Get-NetIPConfiguration”获得
New-NetIPAddress -InterfaceIndex 8 -IpAddress 192.168.1.2 -PrefixLength 24 -DefalutGateway 192.168.1.1

3.设置DNS服务器地址
Set-DNSClientServerAddress -InterfaceIndex 8 -ServerAddress ("192.168.1.3","192.168.1.4")



# 日期转秒数
[int] (Get-Date (Get-Date).ToUniversalTime() -uformat "%s")

# 秒数转日期
Get-Date ([timezone]::CurrentTimeZone.ToLocalTime(([datetime]'1/1/1970').AddSeconds(1664810878))) -uformat "%Y-%m-%d %H:%M:%S"
```


计算机

- [Restart-Computer](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/restart-computer?view=powershell-7)
- Rename-Computer
- [Stop-Computer](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-computer?view=powershell-7)
- rundll32.exe user32.dll,LockWorkStation	锁定计算机

Host

- Clear-Host
- [Get-Host](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-host?view=powershell-7)
- [Out-Host](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/out-host?view=powershell-7)
- [Read-Host](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/read-host?view=powershell-7)
- [Write-Host](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/write-host?view=powershell-7)

历史记录

- [Add-History](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/add-history?view=powershell-7)
- [Clear-History](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/clear-history?view=powershell-7)
- [Get-History](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/get-history?view=powershell-7)
- Invoke-History

位置

- [Get-Location](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-location?view=powershell-7.2)
- [Pop-Location](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/pop-location?view=powershell-7.2)
- [Push-Location](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/push-location?view=powershell-7.2)
- [Set-Location](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-location?view=powershell-7.2)

路径

- [Convert-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/convert-path?view=powershell-7)
- [Join-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/join-path?view=powershell-7)
- [Resolve-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/resolve-path?view=powershell-7)
- [Split-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/split-path?view=powershell-7)
- [Test-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/test-path?view=powershell-7)

文本

- [Add-Content](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/add-content?view=powershell-7.2)
- [Clear-Content](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/clear-content?view=powershell-7.2)
- [Get-Content](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-content?view=powershell-7.2)
- [Set-Content](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-content?view=powershell-7.2)
- [Get-Clipboard](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-clipboard?view=powershell-7)
- [Set-Clipboard](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-clipboard?view=powershell-7)
- Select-String

文件

- [Clear-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/clear-item?view=powershell-7)
- [Copy-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/copy-item?view=powershell-7)
- [Get-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/get-item?view=powershell-7)
- [Invoke-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/invoke-item?view=powershell-7)
- [Move-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/move-item?view=powershell-7)
- [New-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/new-item?view=powershell-7)
- [Remove-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/remove-item?view=powershell-7)
- [Rename-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/rename-item?view=powershell-7)
- [Set-Item](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Management/set-item?view=powershell-7)
- [Get-ChildItem](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-childitem?view=powershell-7)
- Clear-RecycleBin

属性

- [Clear-ItemProperty](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/clear-itemproperty?view=powershell-7.2)
- [Copy-ItemProperty](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/copy-itemproperty?view=powershell-7.2)
- [Get-ItemProperty](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-itemproperty?view=powershell-7.2)
- [Move-ItemProperty](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/move-itemproperty?view=powershell-7.2)
- [New-ItemProperty](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-itemproperty?view=powershell-7.2)
- [Remove-ItemProperty](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-itemproperty?view=powershell-7.2)
- [Rename-ItemProperty](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/rename-itemproperty?view=powershell-7.2)
- [Set-ItemProperty](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-itemproperty?view=powershell-7.2)

PSDrive

- [Get-PSDrive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-psdrive?view=powershell-7.2)
- [New-PSDrive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-psdrive?view=powershell-7.2)
- [Remove-PSDrive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-psdrive?view=powershell-7.2)

格式化

- Format-Custom
- [Format-Hex](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/format-hex?view=powershell-7)
- [Format-List](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/format-list?view=powershell-7)
- [Format-Table](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/format-table?view=powershell-7)
- [Format-Wide](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/format-wide?view=powershell-7)

对象

- [Compare-Object](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/compare-object?view=powershell-7)
- [ForEach-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/foreach-object?view=powershell-7)
- [Group-Object](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/group-object?view=powershell-7)
- [Measure-Object](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/measure-object?view=powershell-7)
- [New-Object](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/new-object?view=powershell-7)
- [Select-Object](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/select-object?view=powershell-7)
- [Sort-Object](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/sort-object?view=powershell-7)
- [Where-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/where-object?view=powershell-7)
- Tee-Object

服务

- Get-Service
- Start-Service
- Stop-Service
- Restart-Service
- Suspend-Service
- Resume-Service
- New-Service
- Set-Service

[进程](https://docs.microsoft.com/zh-cn/powershell/scripting/samples/managing-processes-with-process-cmdlets)

- [Debug-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/debug-process?view=powershell-7)
- [Get-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-process?view=powershell-7)
- [Start-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/start-process?view=powershell-7)
- [Stop-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-process?view=powershell-7)
- [Wait-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/wait-process?view=powershell-7)

   <br />  [任务](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs)

- [Get-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-job?view=powershell-7)
- [Receive-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/receive-job?view=powershell-7)
- [Remove-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/remove-job?view=powershell-7)
- [Start-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/start-job?view=powershell-7)
- [Stop-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/stop-job?view=powershell-7)
- [Wait-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/wait-job?view=powershell-7)

虚拟机

- Checkpoint-VM
- Compare-VM
- Debug-VM
- Export-VM
- Get-VM
- Import-VM
- Measure-VM
- Move-VM
- New-VM
- Remove-VM
- Rename-VM
- Repair-VM
- Restart-VM
- Resume-VM
- Save-VM
- Set-VM
- Start-VM
- Stop-VM
- Suspend-VM
- Wait-VM

事务

- Complete-Transaction
- [Get-Transaction](https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Management/get-transaction?view=powershell-5.1)
- [Start-Transaction](https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Management/start-transaction?view=powershell-5.1)
- [Undo-Transaction](https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Management/undo-transaction?view=powershell-5.1)
- [Use-Transaction](https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Management/use-transaction?view=powershell-5.1)

别名

- [Export-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-alias?view=powershell-7)
- Get-Alias
- [Import-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-alias?view=powershell-7)
- [New-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-alias?view=powershell-7)
- [Set-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-7)
- [Remove-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-alias?view=powershell-7)

变量

- Clear-Variable
- [Get-Variable](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/get-variable?view=powershell-7)
- [New-Variable](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/new-variable?view=powershell-7)
- [Remove-Variable](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/remove-variable?view=powershell-7)
- [Set-Variable](https://docs.microsoft.com/zh-cn/powershell/module/Microsoft.PowerShell.Utility/set-variable?view=powershell-7)

Get-NetTCPConnection	端口信息  <br />  Get-WmiObject win32_service | select PathName	查看服务信息

### [Microsoft.PowerShell.Core](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/?view=powershell-7)
| [Add-History](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/add-history?view=powershell-7) | Appends entries to the session history. |
| --- | --- |
| [**Clear-History**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/clear-history?view=powershell-7) | Deletes entries from the PowerShell session command history. |
| [Clear-Host](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/clear-host?view=powershell-7) | Clears the display in the host program. |
| [Connect-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/connect-pssession?view=powershell-7) | Reconnects to disconnected sessions. |
| [Debug-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/debug-job?view=powershell-7) | Debugs a running background, remote, or PowerShell Workflow job. |
| [Disable-ExperimentalFeature](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/disable-experimentalfeature?view=powershell-7) | Disable an experimental feature on startup of new instance of PowerShell. |
| [Disable-PSRemoting](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/disable-psremoting?view=powershell-7) | Prevents PowerShell endpoints from receiving remote connections. |
| [Disable-PSSessionConfiguration](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/disable-pssessionconfiguration?view=powershell-7) | Disables session configurations on the local computer. |
| [Disconnect-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/disconnect-pssession?view=powershell-7) | Disconnects from a session. |
| [Enable-ExperimentalFeature](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enable-experimentalfeature?view=powershell-7) | Enable an experimental feature on startup of new instance of PowerShell. |
| [Enable-PSRemoting](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enable-psremoting?view=powershell-7) | Configures the computer to receive remote commands. |
| [Enable-PSSessionConfiguration](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enable-pssessionconfiguration?view=powershell-7) | Enables the session configurations on the local computer. |
| [Enter-PSHostProcess](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enter-pshostprocess?view=powershell-7) | Connects to and enters into an interactive session with a local process. |
| [Enter-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enter-pssession?view=powershell-7) | Starts an interactive session with a remote computer. |
| [Exit-PSHostProcess](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/exit-pshostprocess?view=powershell-7) | Closes an interactive session with a local process. |
| [Exit-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/exit-pssession?view=powershell-7) | Ends an interactive session with a remote computer. |
| [Export-ModuleMember](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/export-modulemember?view=powershell-7) | Specifies the module members that are exported. |
| [**ForEach-Object**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/foreach-object?view=powershell-7) | Performs an operation against each item in a collection of input objects. |
| [**Get-Command**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-command?view=powershell-7) | Gets all commands. |
| [Get-ExperimentalFeature](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-experimentalfeature?view=powershell-7) | Gets experimental features. |
| [**Get-Help**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-help?view=powershell-7) | Displays information about PowerShell commands and concepts. |
| [Get-History](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-history?view=powershell-7) | Gets a list of the commands entered during the current session. |
| [Get-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-job?view=powershell-7) | Gets PowerShell background jobs that are running in the current session. |
| [Get-Module](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-module?view=powershell-7) | List the modules imported in the current session or that can be imported from the PSModulePath. |
| [Get-PSHostProcessInfo](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-pshostprocessinfo?view=powershell-7) | Gets process information about the PowerShell host. |
| [Get-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-pssession?view=powershell-7) | Gets the PowerShell sessions on local and remote computers. |
| [Get-PSSessionCapability](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-pssessioncapability?view=powershell-7) | Gets the capabilities of a specific user on a constrained session configuration. |
| [Get-PSSessionConfiguration](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-pssessionconfiguration?view=powershell-7) | Gets the registered session configurations on the computer. |
| [Import-Module](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/import-module?view=powershell-7) | Adds modules to the current session. |
| [Invoke-Command](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/invoke-command?view=powershell-7) | Runs commands on local and remote computers. |
| [Invoke-History](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/invoke-history?view=powershell-7) | Runs commands from the session history. |
| [New-Module](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-module?view=powershell-7) | Creates a new dynamic module that exists only in memory. |
| [New-ModuleManifest](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-modulemanifest?view=powershell-7) | Creates a new module manifest. |
| [New-PSRoleCapabilityFile](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-psrolecapabilityfile?view=powershell-7) | Creates a file that defines a set of capabilities to be exposed through a session configuration. |
| [New-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-pssession?view=powershell-7) | Creates a persistent connection to a local or remote computer. |
| [New-PSSessionConfigurationFile](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-pssessionconfigurationfile?view=powershell-7) | Creates a file that defines a session configuration. |
| [New-PSSessionOption](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-pssessionoption?view=powershell-7) | Creates an object that contains advanced options for a PSSession. |
| [New-PSTransportOption](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-pstransportoption?view=powershell-7) | Creates an object that contains advanced options for a session configuration. |
| [Out-Default](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/out-default?view=powershell-7) | Sends the output to the default formatter and to the default output cmdlet. |
| [**Out-Host**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/out-host?view=powershell-7) | Sends output to the command line. |
| [**Out-Null**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/out-null?view=powershell-7) | Hides the output instead of sending it down the pipeline or displaying it. |
| [Receive-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/receive-job?view=powershell-7) | Gets the results of the PowerShell background jobs in the current session. |
| [Receive-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/receive-pssession?view=powershell-7) | Gets results of commands in disconnected sessions |
| [Register-ArgumentCompleter](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/register-argumentcompleter?view=powershell-7) | Registers a custom argument completer. |
| [Register-PSSessionConfiguration](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/register-pssessionconfiguration?view=powershell-7) | Creates and registers a new session configuration. |
| [Remove-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/remove-job?view=powershell-7) | Deletes a PowerShell background job. |
| [Remove-Module](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/remove-module?view=powershell-7) | Removes modules from the current session. |
| [Remove-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/remove-pssession?view=powershell-7) | Closes one or more PowerShell sessions (PSSessions). |
| [Save-Help](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/save-help?view=powershell-7) | Downloads and saves the newest help files to a file system directory. |
| [Set-PSDebug](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/set-psdebug?view=powershell-7) | Turns script debugging features on and off, sets the trace level, and toggles strict mode. |
| [Set-PSSessionConfiguration](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/set-pssessionconfiguration?view=powershell-7) | Changes the properties of a registered session configuration. |
| [Set-StrictMode](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/set-strictmode?view=powershell-7) | Establishes and enforces coding rules in expressions, scripts, and script blocks. |
| [Start-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/start-job?view=powershell-7) | Starts a PowerShell background job. |
| [Stop-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/stop-job?view=powershell-7) | Stops a PowerShell background job. |
| [Test-ModuleManifest](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/test-modulemanifest?view=powershell-7) | Verifies that a module manifest file accurately describes the contents of a module. |
| [Test-PSSessionConfigurationFile](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/test-pssessionconfigurationfile?view=powershell-7) | Verifies the keys and values in a session configuration file. |
| [Unregister-PSSessionConfiguration](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/unregister-pssessionconfiguration?view=powershell-7) | Deletes registered session configurations from the computer. |
| [Update-Help](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/update-help?view=powershell-7) | Downloads and installs the newest help files on your computer. |
| [Wait-Job](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/wait-job?view=powershell-7) | Suppresses the command prompt until one or all of the PowerShell background jobs running in the session are completed. |
| [**Where-Object**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/where-object?view=powershell-7) | Selects objects from a collection based on their property values. |

### [Microsoft.PowerShell.Management](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/?view=powershell-7#microsoft-powershell-management)
| [Add-Content](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/add-content?view=powershell-7) | Adds content to the specified items, such as adding words to a file. |
| --- | --- |
| [Clear-Content](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/clear-content?view=powershell-7) | Deletes the contents of an item, but does not delete the item. |
| [Clear-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/clear-item?view=powershell-7) | Clears the contents of an item, but does not delete the item. |
| [Clear-ItemProperty](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/clear-itemproperty?view=powershell-7) | Clears the value of a property but does not delete the property. |
| [Clear-RecycleBin](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/clear-recyclebin?view=powershell-7) | Clears the contents of a recycle bin. |
| [Convert-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/convert-path?view=powershell-7) | Converts a path from a PowerShell path to a PowerShell provider path. |
| [Copy-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/copy-item?view=powershell-7) | Copies an item from one location to another. |
| [Copy-ItemProperty](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/copy-itemproperty?view=powershell-7) | Copies a property and value from a specified location to another location. |
| [Debug-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/debug-process?view=powershell-7) | Debugs one or more processes running on the local computer. |
| [Get-ChildItem](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-childitem?view=powershell-7) | Gets the items and child items in one or more specified locations. |
| [**Get-Clipboard**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-clipboard?view=powershell-7) | Gets the contents of the clipboard. |
| [Get-ComputerInfo](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-computerinfo?view=powershell-7) | Gets a consolidated object of system and operating system properties. |
| [**Get-Content**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-content?view=powershell-7) | Gets the content of the item at the specified location. |
| [Get-HotFix](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-hotfix?view=powershell-7) | Gets the hotfixes that are installed on local or remote computers. |
| [Get-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-item?view=powershell-7) | Gets the item at the specified location. |
| [Get-ItemProperty](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-itemproperty?view=powershell-7) | Gets the properties of a specified item. |
| [Get-ItemPropertyValue](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-itempropertyvalue?view=powershell-7) | Gets the value for one or more properties of a specified item. |
| [Get-Location](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-location?view=powershell-7) | Gets information about the current working location or a location stack. |
| [Get-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-process?view=powershell-7) | Gets the processes that are running on the local computer. |
| [Get-PSDrive](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-psdrive?view=powershell-7) | Gets drives in the current session. |
| [Get-PSProvider](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-psprovider?view=powershell-7) | Gets information about the specified PowerShell provider. |
| [Get-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-service?view=powershell-7) | Gets the services on the computer. |
| [Get-TimeZone](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-timezone?view=powershell-7) | Gets the current time zone or a list of available time zones. |
| [Invoke-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/invoke-item?view=powershell-7) | Performs the default action on the specified item. |
| [Join-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/join-path?view=powershell-7) | Combines a path and a child path into a single path. |
| [Move-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/move-item?view=powershell-7) | Moves an item from one location to another. |
| [Move-ItemProperty](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/move-itemproperty?view=powershell-7) | Moves a property from one location to another. |
| [New-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/new-item?view=powershell-7) | Creates a new item. |
| [New-ItemProperty](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/new-itemproperty?view=powershell-7) | Creates a new property for an item and sets its value. |
| [New-PSDrive](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/new-psdrive?view=powershell-7) | Creates temporary and persistent mapped network drives. |
| [New-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/new-service?view=powershell-7) | Creates a new Windows service. |
| [Pop-Location](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/pop-location?view=powershell-7) | Changes the current location to the location most recently pushed onto the stack. |
| [Push-Location](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/push-location?view=powershell-7) | Adds the current location to the top of a location stack. |
| [Remove-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7) | Deletes the specified items. |
| [Remove-ItemProperty](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/remove-itemproperty?view=powershell-7) | Deletes the property and its value from an item. |
| [Remove-PSDrive](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/remove-psdrive?view=powershell-7) | Deletes temporary PowerShell drives and disconnects mapped network drives. |
| [Remove-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/remove-service?view=powershell-7) | Removes a Windows service. |
| [Rename-Computer](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/rename-computer?view=powershell-7) | Renames a computer. |
| [Rename-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/rename-item?view=powershell-7) | Renames an item in a PowerShell provider namespace. |
| [Rename-ItemProperty](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/rename-itemproperty?view=powershell-7) | Renames a property of an item. |
| [Resolve-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/resolve-path?view=powershell-7) | Resolves the wildcard characters in a path, and displays the path contents. |
| [Restart-Computer](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/restart-computer?view=powershell-7) | Restarts the operating system on local and remote computers. |
| [Restart-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/restart-service?view=powershell-7) | Stops and then starts one or more services. |
| [Resume-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/resume-service?view=powershell-7) | Resumes one or more suspended (paused) services. |
| [Set-Clipboard](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-clipboard?view=powershell-7) | Sets the contents of the clipboard. |
| [Set-Content](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-content?view=powershell-7) | Writes new content or replaces existing content in a file. |
| [Set-Item](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-item?view=powershell-7) | Changes the value of an item to the value specified in the command. |
| [Set-ItemProperty](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-itemproperty?view=powershell-7) | Creates or changes the value of a property of an item. |
| [Set-Location](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-location?view=powershell-7) | Sets the current working location to a specified location. |
| [Set-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-service?view=powershell-7) | Starts, stops, and suspends a service, and changes its properties. |
| [Set-TimeZone](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-timezone?view=powershell-7) | Sets the system time zone to a specified time zone. |
| [Split-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/split-path?view=powershell-7) | Returns the specified part of a path. |
| [Start-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/start-process?view=powershell-7) | Starts one or more processes on the local computer. |
| [Start-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/start-service?view=powershell-7) | Starts one or more stopped services. |
| [Stop-Computer](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-computer?view=powershell-7) | Stops (shuts down) local and remote computers. |
| [Stop-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-process?view=powershell-7) | Stops one or more running processes. |
| [Stop-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-service?view=powershell-7) | Stops one or more running services. |
| [Suspend-Service](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/suspend-service?view=powershell-7) | Suspends (pauses) one or more running services. |
| [Test-Connection](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/test-connection?view=powershell-7) | Sends ICMP echo request packets, or pings, to one or more computers. |
| [Test-Path](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/test-path?view=powershell-7) | Determines whether all elements of a path exist. |
| [Wait-Process](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/wait-process?view=powershell-7) | Waits for the processes to be stopped before accepting more input. |

### [Microsoft.PowerShell.Utility](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/?view=powershell-7#microsoft-powershell-utility)
| [Add-Member](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/add-member?view=powershell-7) | Adds custom properties and methods to an instance of a PowerShell object. |
| --- | --- |
| [Add-Type](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/add-type?view=powershell-7) | Adds a Microsoft .NET Core class to a PowerShell session. |
| [Clear-Variable](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/clear-variable?view=powershell-7) | Deletes the value of a variable. |
| [Compare-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/compare-object?view=powershell-7) | Compares two sets of objects. |
| [ConvertFrom-Csv](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-csv?view=powershell-7) | Converts object properties in comma-separated value (CSV) format into CSV versions of the original objects. |
| [ConvertFrom-Json](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-json?view=powershell-7) | Converts a JSON-formatted string to a custom object or a hash table. |
| [ConvertFrom-Markdown](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-markdown?view=powershell-7) | Convert the contents of a string or a file to a MarkdownInfo object. |
| [ConvertFrom-SddlString](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-sddlstring?view=powershell-7) | Converts a SDDL string to a custom object. |
| [ConvertFrom-StringData](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-stringdata?view=powershell-7) | Converts a string containing one or more key and value pairs to a hash table. |
| [ConvertTo-Csv](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-csv?view=powershell-7) | Converts .NET objects into a series of character-separated value (CSV) strings. |
| [ConvertTo-Html](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-html?view=powershell-7) | Converts .NET objects into HTML that can be displayed in a Web browser. |
| [ConvertTo-Json](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-json?view=powershell-7) | Converts an object to a JSON-formatted string. |
| [ConvertTo-Xml](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-xml?view=powershell-7) | Creates an XML-based representation of an object. |
| [Debug-Runspace](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/debug-runspace?view=powershell-7) | Starts an interactive debugging session with a runspace. |
| [Disable-PSBreakpoint](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/disable-psbreakpoint?view=powershell-7) | Disables the breakpoints in the current console. |
| [Disable-RunspaceDebug](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/disable-runspacedebug?view=powershell-7) | Disables debugging on one or more runspaces, and releases any pending debugger stop. |
| [Enable-PSBreakpoint](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/enable-psbreakpoint?view=powershell-7) | Enables the breakpoints in the current console. |
| [Enable-RunspaceDebug](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/enable-runspacedebug?view=powershell-7) | Enables debugging on runspaces where any breakpoint is preserved until a debugger is attached. |
| [Export-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-alias?view=powershell-7) | Exports information about currently defined aliases to a file. |
| [Export-Clixml](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-clixml?view=powershell-7) | Creates an XML-based representation of an object or objects and stores it in a file. |
| [Export-Csv](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-csv?view=powershell-7) | Converts objects into a series of comma-separated value (CSV) strings and saves the strings to a file. |
| [Export-FormatData](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-formatdata?view=powershell-7) | Saves formatting data from the current session in a formatting file. |
| [Export-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-pssession?view=powershell-7) | Exports commands from another session and saves them in a PowerShell module. |
| [Format-Custom](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-custom?view=powershell-7) | Uses a customized view to format the output. |
| [Format-Hex](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-hex?view=powershell-7) | Displays a file or other input as hexadecimal. |
| [Format-List](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-list?view=powershell-7) | Formats the output as a list of properties in which each property appears on a new line. |
| [Format-Table](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-table?view=powershell-7) | Formats the output as a table. |
| [Format-Wide](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-wide?view=powershell-7) | Formats objects as a wide table that displays only one property of each object. |
| [Get-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-alias?view=powershell-7) | Gets the aliases for the current session. |
| [Get-Culture](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-culture?view=powershell-7) | Gets the current culture set in the operating system. |
| [Get-Date](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-date?view=powershell-7) | Gets the current date and time. |
| [Get-Error](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-error?view=powershell-7) | Gets and displays the most recent error messages from the current session. |
| [Get-Event](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-event?view=powershell-7) | Gets the events in the event queue. |
| [Get-EventSubscriber](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-eventsubscriber?view=powershell-7) | Gets the event subscribers in the current session. |
| [Get-FileHash](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7) | Computes the hash value for a file by using a specified hash algorithm. |
| [Get-FormatData](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-formatdata?view=powershell-7) | Gets the formatting data in the current session. |
| [Get-Host](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-host?view=powershell-7) | Gets an object that represents the current host program. |
| [Get-MarkdownOption](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-markdownoption?view=powershell-7) | Returns the current colors and styles used for rendering Markdown content in the console. |
| [Get-Member](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-member?view=powershell-7) | Gets the properties and methods of objects. |
| [Get-PSBreakpoint](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-psbreakpoint?view=powershell-7) | Gets the breakpoints that are set in the current session. |
| [Get-PSCallStack](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-pscallstack?view=powershell-7) | Displays the current call stack. |
| [Get-Random](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-random?view=powershell-7) | Gets a random number, or selects objects randomly from a collection. |
| [Get-Runspace](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-runspace?view=powershell-7) | Gets active runspaces within a PowerShell host process. |
| [Get-RunspaceDebug](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-runspacedebug?view=powershell-7) | Shows runspace debugging options. |
| [Get-TraceSource](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-tracesource?view=powershell-7) | Gets PowerShell components that are instrumented for tracing. |
| [Get-TypeData](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-typedata?view=powershell-7) | Gets the extended type data in the current session. |
| [Get-UICulture](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-uiculture?view=powershell-7) | Gets the current UI culture settings in the operating system. |
| [Get-Unique](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-unique?view=powershell-7) | Returns unique items from a sorted list. |
| [Get-Uptime](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-uptime?view=powershell-7) | Get the TimeSpan since last boot. |
| [Get-Variable](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-variable?view=powershell-7) | Gets the variables in the current console. |
| [Get-Verb](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-verb?view=powershell-7) | Gets approved PowerShell verbs. |
| [Group-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/group-object?view=powershell-7) | Groups objects that contain the same value for specified properties. |
| [Import-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-alias?view=powershell-7) | Imports an alias list from a file. |
| [Import-Clixml](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-clixml?view=powershell-7) | Imports a CLIXML file and creates corresponding objects in PowerShell. |
| [Import-Csv](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-csv?view=powershell-7) | Creates table-like custom objects from the items in a comma-separated value (CSV) file. |
| [Import-LocalizedData](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-localizeddata?view=powershell-7) | Imports language-specific data into scripts and functions based on the UI culture that is selected for the operating system. |
| [Import-PowerShellDataFile](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-powershelldatafile?view=powershell-7) | Imports values from a .PSD1 file without invoking its contents. |
| [Import-PSSession](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-pssession?view=powershell-7) | Imports commands from another session into the current session. |
| [Invoke-Expression](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-expression?view=powershell-7) | Runs commands or expressions on the local computer. |
| [Invoke-RestMethod](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7) | Sends an HTTP or HTTPS request to a RESTful web service. |
| [Invoke-WebRequest](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-webrequest?view=powershell-7) | Gets content from a web page on the internet. |
| [Join-String](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/join-string?view=powershell-7) | Combines objects from the pipeline into a single string. |
| [Measure-Command](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/measure-command?view=powershell-7) | Measures the time it takes to run script blocks and cmdlets. |
| [Measure-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/measure-object?view=powershell-7) | Calculates the numeric properties of objects, and the characters, words, and lines in string objects, such as files of text. |
| [New-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-alias?view=powershell-7) | Creates a new alias. |
| [New-Event](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-event?view=powershell-7) | Creates a new event. |
| [New-Guid](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-guid?view=powershell-7) | Creates a GUID. |
| [New-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-object?view=powershell-7) | Creates an instance of a Microsoft .NET Framework or COM object. |
| [New-TemporaryFile](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-temporaryfile?view=powershell-7) | Creates a temporary file. |
| [New-TimeSpan](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-timespan?view=powershell-7) | Creates a TimeSpan object. |
| [New-Variable](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-variable?view=powershell-7) | Creates a new variable. |
| [Out-File](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-file?view=powershell-7) | Sends output to a file. |
| [Out-GridView](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-gridview?view=powershell-7) | Sends output to an interactive table in a separate window. |
| [Out-Printer](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-printer?view=powershell-7) | Sends output to a printer. |
| [Out-String](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-string?view=powershell-7) | Outputs input objects as a strings. |
| [Read-Host](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/read-host?view=powershell-7) | Reads a line of input from the console. |
| [Register-EngineEvent](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/register-engineevent?view=powershell-7) | Subscribes to events that are generated by the PowerShell engine and by the New-Event cmdlet. |
| [Register-ObjectEvent](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/register-objectevent?view=powershell-7) | Subscribes to the events that are generated by a Microsoft .NET Framework object. |
| [Remove-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-alias?view=powershell-7) | Remove an alias from the current session. |
| [Remove-Event](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-event?view=powershell-7) | Deletes events from the event queue. |
| [Remove-PSBreakpoint](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-psbreakpoint?view=powershell-7) | Deletes breakpoints from the current console. |
| [Remove-TypeData](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-typedata?view=powershell-7) | Deletes extended types from the current session. |
| [Remove-Variable](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-variable?view=powershell-7) | Deletes a variable and its value. |
| [Select-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/select-object?view=powershell-7) | Selects objects or object properties. |
| [Select-String](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/select-string?view=powershell-7) | Finds text in strings and files. |
| [Select-Xml](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/select-xml?view=powershell-7) | Finds text in an XML string or document. |
| [Send-MailMessage](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/send-mailmessage?view=powershell-7) | Sends an email message. |
| [Set-Alias](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-7) | Creates or changes an alias for a cmdlet or other command in the current PowerShell session. |
| [Set-Date](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-date?view=powershell-7) | Changes the system time on the computer to a time that you specify. |
| [Set-MarkdownOption](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-markdownoption?view=powershell-7) | Sets the colors and styles used for rendering Markdown content in the console. |
| [Set-PSBreakpoint](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-psbreakpoint?view=powershell-7) | Sets a breakpoint on a line, command, or variable. |
| [Set-TraceSource](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-tracesource?view=powershell-7) | Configures, starts, and stops a trace of PowerShell components. |
| [Set-Variable](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-variable?view=powershell-7) | Sets the value of a variable. Creates the variable if one with the requested name does not exist. |
| [Show-Command](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/show-command?view=powershell-7) | Displays PowerShell command information in a graphical window. |
| [Show-Markdown](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/show-markdown?view=powershell-7) | Shows a Markdown file or string in the console in a friendly way using VT100 escape sequences or in a browser using HTML. |
| [Sort-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/sort-object?view=powershell-7) | Sorts objects by property values. |
| [Start-Sleep](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/start-sleep?view=powershell-7) | Suspends the activity in a script or session for the specified period of time. |
| [Tee-Object](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/tee-object?view=powershell-7) | Saves command output in a file or variable and also sends it down the pipeline. |
| [Test-Json](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/test-json?view=powershell-7) | Tests whether a string is a valid JSON document |
| [Trace-Command](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/trace-command?view=powershell-7) | Configures and starts a trace of the specified expression or command. |
| [Unblock-File](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/unblock-file?view=powershell-7) | Unblocks files that were downloaded from the Internet. |
| [Unregister-Event](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/unregister-event?view=powershell-7) | Cancels an event subscription. |
| [Update-FormatData](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/update-formatdata?view=powershell-7) | Updates the formatting data in the current session. |
| [Update-List](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/update-list?view=powershell-7) | Adds items to and removes items from a property value that contains a collection of objects. |
| [Update-TypeData](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/update-typedata?view=powershell-7) | Updates the extended type data in the session. |
| [Wait-Debugger](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/wait-debugger?view=powershell-7) | Stops a script in the debugger before running the next statement in the script. |
| [Wait-Event](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/wait-event?view=powershell-7) | Waits until a particular event is raised before continuing to run. |
| [Write-Debug](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-debug?view=powershell-7) | Writes a debug message to the console. |
| [Write-Error](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-error?view=powershell-7) | Writes an object to the error stream. |
| [Write-Host](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-host?view=powershell-7) | Writes customized output to a host. |
| [Write-Information](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-information?view=powershell-7) | Specifies how PowerShell handles information stream data for a command. |
| [Write-Output](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-output?view=powershell-7) | Sends the specified objects to the next command in the pipeline. If the command is the last command in the pipeline, the objects are displayed in the console. |
| [Write-Progress](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-progress?view=powershell-7) | Displays a progress bar within a PowerShell command window. |
| [Write-Verbose](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-verbose?view=powershell-7) | Writes text to the verbose message stream. |
| [Write-Warning](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-warning?view=powershell-7) | Writes a warning message. |

### [Appx](https://docs.microsoft.com/en-us/powershell/module/appx/?view=win10-ps)
| [Add-AppxPackage](https://docs.microsoft.com/en-us/powershell/module/appx/add-appxpackage?view=win10-ps) | Adds a signed app package to a user account. |
| --- | --- |
| [Add-AppxVolume](https://docs.microsoft.com/en-us/powershell/module/appx/add-appxvolume?view=win10-ps) | Adds an appx volume to the Package Manager. |
| [Dismount-AppxVolume](https://docs.microsoft.com/en-us/powershell/module/appx/dismount-appxvolume?view=win10-ps) | Dismounts an appx volume. |
| [Get-AppxDefaultVolume](https://docs.microsoft.com/en-us/powershell/module/appx/get-appxdefaultvolume?view=win10-ps) | Gets the default appx volume. |
| [Get-AppxLastError](https://docs.microsoft.com/en-us/powershell/module/appx/get-appxlasterror?view=win10-ps) | Get the last error reported in the app package installation logs. |
| [Get-AppxLog](https://docs.microsoft.com/en-us/powershell/module/appx/get-appxlog?view=win10-ps) | Gets an app package installation log. |
| [Get-AppxPackage](https://docs.microsoft.com/en-us/powershell/module/appx/get-appxpackage?view=win10-ps) | Gets a list of the app packages that are installed in a user profile. |
| [Get-AppxPackageManifest](https://docs.microsoft.com/en-us/powershell/module/appx/get-appxpackagemanifest?view=win10-ps) | Gets the manifest of an app package. |
| [Get-AppxVolume](https://docs.microsoft.com/en-us/powershell/module/appx/get-appxvolume?view=win10-ps) | Gets appx volumes for the computer. |
| [Get-NonRemovableAppsPolicy](https://docs.microsoft.com/en-us/powershell/module/appx/get-nonremovableappspolicy?view=win10-ps) | Returns the a list of the app packages that are installed and configured as non-removable apps. |
| [Invoke-CommandInDesktopPackage](https://docs.microsoft.com/en-us/powershell/module/appx/invoke-commandindesktoppackage?view=win10-ps) | Runs a command in the context of a specified app package. |
| [Mount-AppxVolume](https://docs.microsoft.com/en-us/powershell/module/appx/mount-appxvolume?view=win10-ps) | Mounts an appx volume. |
| [Move-AppxPackage](https://docs.microsoft.com/en-us/powershell/module/appx/move-appxpackage?view=win10-ps) | Moves a package from its current location to another appx volume. |
| [Remove-AppxPackage](https://docs.microsoft.com/en-us/powershell/module/appx/remove-appxpackage?view=win10-ps) | Removes an app package from one or more user accounts. |
| [Remove-AppxVolume](https://docs.microsoft.com/en-us/powershell/module/appx/remove-appxvolume?view=win10-ps) | Removes an appx volume. |
| [Set-AppxDefaultVolume](https://docs.microsoft.com/en-us/powershell/module/appx/set-appxdefaultvolume?view=win10-ps) | Specifies a default appx volume. |
| [Set-NonRemovableAppsPolicy](https://docs.microsoft.com/en-us/powershell/module/appx/set-nonremovableappspolicy?view=win10-ps) | Sets an app packages as non-removable (can not be uninstalled). |

**Others**

- [PackageManagement](https://docs.microsoft.com/zh-cn/powershell/module/packagemanagement/?view=powershell-7#packagemanagement)
- [PowerShellGet](https://docs.microsoft.com/zh-cn/powershell/module/powershellget/?view=powershell-7#powershellget)
- [PSReadLine](https://docs.microsoft.com/zh-cn/powershell/module/psreadline/?view=powershell-7#psreadline)

  <br />  

---

## [Syntax](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about)
语法关系图 表示法
```powershell
<command-name> -<Required Parameter Name> <Required Parameter Value>
[-<Optional Parameter Name> <Optional Parameter Value>]
[-<Optional Switch Parameters>]
[-<Optional Parameter Name>] <Required Parameter Value>
```
语法大写为可读性，但不区分大小写。

## [Keywords](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_language_keywords)
| Keyword | Reference |
| --- | --- |
| Begin | [about_Functions](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions?view=powershell-7.2)  <br />  , [about_Functions_Advanced](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced?view=powershell-7.2) |
| Break | [about_Break](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_break?view=powershell-7.2)  <br />  , [about_Trap](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_trap?view=powershell-7.2) |
| Catch | [about_Try_Catch_Finally](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally?view=powershell-7.2) |
| Class | [about_Classes](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_classes?view=powershell-7.2) |
| Continue | [about_Continue](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_continue?view=powershell-7.2)  <br />  , [about_Trap](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_trap?view=powershell-7.2) |
| Data | [about_Data_Sections](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_data_sections?view=powershell-7.2) |
| Define | Reserved for future use |
| Do | [about_Do](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_do?view=powershell-7.2)  <br />  , [about_While](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_while?view=powershell-7.2) |
| DynamicParam | [about_Functions_Advanced_Parameters](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_parameters?view=powershell-7.2) |
| Else | [about_If](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_if?view=powershell-7.2) |
| Elseif | [about_If](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_if?view=powershell-7.2) |
| End | [about_Functions](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions?view=powershell-7.2)  <br />  , [about_Functions_Advanced_Methods](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_methods?view=powershell-7.2) |
| Enum | [about_Enum](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_enum?view=powershell-7.2) |
| Exit | [Described in this topic](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_language_keywords?view=powershell-7.2#exit) |
| Filter | [about_Functions](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions?view=powershell-7.2) |
| Finally | [about_Try_Catch_Finally](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally?view=powershell-7.2) |
| For | [about_For](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_for?view=powershell-7.2) |
| ForEach | [about_ForEach](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_foreach?view=powershell-7.2) |
| From | Reserved for future use |
| Function | [about_Functions](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions?view=powershell-7.2)  <br />  , [about_Functions_Advanced](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced?view=powershell-7.2) |
| Hidden | [about_Hidden](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_hidden?view=powershell-7.2) |
| If | [about_If](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_if?view=powershell-7.2) |
| In | [about_ForEach](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_foreach?view=powershell-7.2) |
| Param | [about_Functions](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions?view=powershell-7.2) |
| Process | [about_Functions](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions?view=powershell-7.2)  <br />  , [about_Functions_Advanced](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced?view=powershell-7.2) |
| Return | [about_Return](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_return?view=powershell-7.2) |
| Static | [about_Classes](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_classes?view=powershell-7.2) |
| Switch | [about_Switch](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_switch?view=powershell-7.2) |
| Throw | [about_Throw](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_throw?view=powershell-7.2)  <br />  , [about_Functions_Advanced_Methods](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_methods?view=powershell-7.2) |
| Trap | [about_Trap](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_trap?view=powershell-7.2)  <br />  , [about_Break](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_break?view=powershell-7.2)  <br />  , [about_Try_Catch_Finally](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally?view=powershell-7.2) |
| Try | [about_Try_Catch_Finally](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally?view=powershell-7.2) |
| Until | [about_Do](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_do?view=powershell-7.2) |
| Using | [about_Using](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_using?view=powershell-7.2)  <br />  , [about_Classes](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_classes?view=powershell-7.2) |
| Var | Reserved for future use |
| While | [about_While](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_while?view=powershell-7.2)  <br />  , [about_Do](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_do?view=powershell-7.2) |


**注释**

- 单行注释：`#`
- 多行注释：`<#	...	#>`
## [变量](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_variables)
无需声明，直接使用  <br />  以`$`符号开头或在`{}`内，不区分大小写，包含空格和特殊字符  <br />  默认值 [$null](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-null)

**全局变量 **`$global: variable = `  <br />  **局部变量 **`$variable = `  <br />  脚本变量`$script: variable = `

变量赋值或修改  <br />  `$a = 123`  <br />  `Set-Variable s "test"`  <br />  获取变量值  <br />  `get-variable var`   #获取单个变量值  <br />  `get-variable var*`  #获取多个变量值  <br />  清空变量值  <br />  `clear-variable var`  <br />  `remove-variable var`  <br />  `$var=$null`  <br />  变量类型  <br />  `$var.GetType()`

[**自动变量**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_automatic_variables)

| 变量 | 描述 |
| --- | --- |
| $$ | 会话接收到的最后一行中的最后一个令牌。 |
| $? | 最后一个操作的执行状态。如果没有错误，则返回True，否则返回False。 |
| $^ | 会话接收到的最后一行中的第一个令牌。 |
| $_ | 此变量充当$PSItem，它在管道对象中包含当前对象。 |
| $args | 此变量包含未声明参数的值的数组，这些值传递给脚本，函数或脚本块。 |
| $ConsoleFileName | 此变量用于表示控制台文件的路径，该文件最近在会话中使用。 |
| $Error | 此变量用于包含代表最新错误的错误对象数组。 |
| $Event | 包含PSEventArgs的对象(正在处理的事件的对象) |
| $EventSubscriber | 包含PSEventSubscriber的对象(正在处理的事件的事件订阅者) |
| $EventArgs | 此变量用于包含一个对象，该对象表示第一个事件的参数。 |
| $false | 此变量用于表示False。 |
| $foreach | 此变量用于包含ForEach循环的枚举数。仅在执行ForEach循环时存在 |
| $Home | 此变量用于表示用户主目录的完整路径 |
| $input | 包含一个枚举器，枚举传递给该函数的所有输入。仅适用于脚本块和功能。 |
| $Host | 此变量包含一个对象，该对象显示Windows PowerShell的当前主机应用程序。 |
| $IsLinux | 如果当前会话在Linux操作系统上运行，则此变量值为$True，否则为$False。 |
| $IsWindows | 如果当前会话在Windows操作系统上运行，则此变量值为$True，否则为$False。 |
| $IsMacOS | 如果当前会话在MacOS操作系统上运行，则此变量值为$True，否则为$False。 |
| $null | 此变量用于表示null值或空值。可以使用它来表示脚本和命令中缺少或未定义的值。 |
| $PID | 此变量显示进程的PID，该进程正在托管当前PowerShell的会话。 |
| $PSItem | 此变量充当$_，它在管道对象中包含当前对象。 |
| $PSHome | 此变量表示Windows PowerShell安装目录的完整路径。 |
| $PSVersionTable | 表示只读哈希表，显示有关当前会话中运行的PowerShell版本的详细信息。 |
| $PWD | 此变量用于包含路径对象，该路径对象显示当前目录的完整路径。 |
| $ShellId | 此变量用于表示当前Shell的标识符。 |

[**环境变量**](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_environment_variables)  <br />  所有环境变量的记录保存在`env:` 虚拟驱动
```shell
# 查看所有环境变量
ls env:

# 显示环境变量的值
$Env:<variable-name>

# 创建或更新
$Env:<variable-name> = "<new-value>"

del $env:TestVar	

# 环境变量进行持久更
$path = [Environment]::GetEnvironmentVariable('PSModulePath', 'Machine')
$newpath = $path + ';C:\Program Files\<WindowsPowerShell>\Modules'
[Environment]::SetEnvironmentVariable("PSModulePath", $newpath, 'Machine')
```


**强制指定变量类型**  <br />  `[type] $var = value`

变量类型  <br />  [int] 、[long]、[string] 、[char] 、[bool] 、[byte] 、[double] 、[decimal] 、[single]  <br />  [array] ：数组对象  <br />  [xml] ：XML对象  <br />  [hashtable] ：哈希表对象，类似于一个字典对象

**常量**  <br />  `New-Variable num -Value 100 -Force -Option readonly`	只读变量，可删除  <br />  `new-variable num -Value "strong" -Option constant`	常量

Booleans: `$false`, `$true`
### [字符串](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-string-substitutions)
System.String  <br />  方法

- SubString()
- replace()

运算符

- +  连接
- *  重复
- -f   设置字符串格式
- -replace   替换运算符
- -match   正则表达式匹配
- -like       通配符匹配

- -Join 
- -Split `<String> `
   - `-Split (<String[]>)`
   - `<String> -Split <Delimiter>[,<Max-substrings>[,"<Options>"]] `
   - `<String> -Split {<ScriptBlock>} [,<Max-substrings>]`

变量替换	在字符串中指定变量
```shell
$message = "Hello, $first $last."
$message = "Time: $($directory.CreationTime)"
$message = "Date: $(Get-Date)"
```
格式字符串
```shell
# .NET string format string
[string]::Format('Hello, {0} {1}.',$first,$last)

# PowerShell format string
'Hello, {0} {1}.' -f $first, $last
```
### [数组](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-arrays)

- 创建：`$arrName = @(value1, value2, value3, ..... ,ValueN)`
- 使用：`$arrName[0] ，$arrName[-n]，$arrName[n..m]，$arrName.Length`
- 添加元素：`$arrName += value`
- 空数组：`$variable_name = @()`

属性

- count

对象数组
```shell
$data = @(
    [pscustomobject]@{FirstName='Kevin';LastName='Marquette'}
    [pscustomobject]@{FirstName='John'; LastName='Doe'}
)
```
强类型数组	`[int[]] $numbers = 1,2,3`  <br />  泛型列表	`$mylist = [System.Collections.Generic.List[string]]::new()`
### [哈希表](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-hashtable)
System.Collections.Hashtable  <br />  创建[有序]字典：`$variable_name = [ordered] @{ < key1> =  ;  ..... ; < keyN> = ;}`
```shell
$hash = @{ ID = 1; Shape = "Square"; Color = "Blue"}

write-host("Print all hashtable keys")
$hash.keys

write-host("Print all hashtable values")
$hash.values

write-host("Get ID")
$hash["ID"]

write-host("Get Shape")
$hash.Number

write-host("print Size")
$hash.Count

write-host("Add key-value")
$hash["Updated"] = "Now"
$hash.Add("Created","Now")

write-host("print Size")
$hash.Count

write-host("Remove key-value")
$hash.Remove("Updated")

write-host("sort by key")
$hash.GetEnumerator() | Sort-Object -Property key
```
### [PSCustomObject](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-pscustomobject)
创建
```shell
$myObject = [PSCustomObject]@{
    Name     = 'Kevin'
    Language = 'PowerShell'
    State    = 'Texas'
}

# 访问
$myObject.Name  
$myObject.'Name'
```
```shell
# 添加属性
$myObject | Add-Member -MemberType NoteProperty -Name 'ID' -Value 'KevinMarquette'

删除属性
$myObject.psobject.properties.remove('ID')

枚举属性名称
$myObject | Get-Member -MemberType NoteProperty | Select -ExpandProperty Name
```
## [运算符](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arithmetic_operators)
**算术**运算符

- +   加、串联
- -    减
- *    乘
- /    除
- %   模

**赋值**运算符	=   +=    -=    *=    /=   %=

[**逻辑**运算符](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logical_operators)

- ! ， -not  非
- -and  且
- -or   或
- -xor 异或



[**比较**运算符](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_comparison_operators)（可在运算符前加上 `i` 或者 `c` ，以指定是否区分大小写）

| -eq | 等于 | 1 -eq 1 |
| --- | --- | --- |
| -ne | 不等于 | 1 -ne 2 |
| -lt | 小于 | 1 -lt 2 |
| -le | 小于或等于 | 1 -le 2 |
| -gt | 大于 | 2 -gt 1 |
| -ge | 大于或等于 | 2 -ge 1 |
| -Like | 使用 * 通配符进行匹配 | "file.doc" -like "f*.do?" |
| -NotLike | 不使用 * 通配符进行匹配 | "file.doc" -notlike "p*.doc" |
| -Contains | 确定集合中是否包含指定的值 | 1,2,3 -contains 1 |
| -NotContains | 确定集合是否不包含特定值 | 1,2,3 -notcontains 4 |
| -Match | 匹配指定的正则表达式 |   <br />   |
| -NotMatch | 不匹配指定的正则表达式 |   <br />   |
| -In | 确定指定的值是否在集合中 |   <br />   |
| -NotIn | 确定指定的值是否不在集合中 |   <br />   |
| -Replace | 替换指定的值 |   <br />   |

**调用**运算符

- `&` 调用脚本块或者命令/函数的名称 
- `::`  静态方法调用   
   - `[DateTime]::Now`  #返回当前时间

其他运算符

- , 数组构造函数
- ..  范围运算符
- -is  类型鉴别器
- -as   类型转换器
- -band  二进制与
- -bor     二进制或
- -bnot    二进制非

命令解析顺序  <br />  别名（alias）->  函数->   cmdlet ->   脚本  ->   可执行文件  ->    正常文件

## [流程控制](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-if)
**条件**
```shell
if ( Test-Path -Path $Path -PathType Leaf )
{
    Move-Item -Path $Path -Destination $archivePath
}
elseif ( Test-Path -Path $Path )
{
    Write-Warning "A file was required but a directory was found instead."
}
else
{
    Write-Warning "$path could not be found."
}
```
```shell
Switch (<test-expression>)  
    <condition> { Code of Block-1 ; break }  
    default {Code of Block ; break }
```
**循环**
```shell
for (<Initialization>; <Condition or Test_expression>; <Repeat>)  
{  
   Statement
}
```
```shell
Foreach($<item> in $<collection>)  
{  
     Statement
}
```
```powershell
while(test_expression)  
{  
     Statement
}
Do{
    Statement
} while(test_expression)

# do ... until 同 do ... while
```
控制

- break
- continue
## [函数](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions)
```powershell
<#
.<help keyword>
<help content>
#>
function <function-name>  
{  
  # function logic
  statement
  [return]
}

function [<scope:>]<name> [([type]$parameter1[,[type]$parameter2])]  
{  
  param([type]$parameter1 [,[type]$parameter2])  
  dynamicparam {<statement list>}  
  begin {<statement list>}  
  process {<statement list>}  
  end {<statement list>}  
}
```
## [异常](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-exceptions)
**抛出异常：Throw  字符串|异常|ErrorRecord**  <br />  捕获异常
```shell
try   
{  
    Statement
}
catch [ [<error type>] *]   
{  
    Statement
}
finally  
{  
    Statement
}
```
## Script
[执行策略](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1)  <br />  Powershell默认为禁止脚本执行

| [Get-Credential](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-credential?view=powershell-7.1) | Gets a credential object based on a user name and password. |
| --- | --- |
| [Set-ExecutionPolicy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.1) | Sets the PowerShell execution policies for Windows computers. |

```shell
Set-ExecutionPolicy
   [-ExecutionPolicy] {Unrestricted | RemoteSigned | AllSigned | Restricted | Default | Bypass | Undefined}
   [[-Scope] {Process | CurrentUser | LocalMachine | UserPolicy | MachinePolicy}]
   [-Force]
   [-WhatIf]
   [-Confirm]
   [<CommonParameters>]
```


```shell
function Test-MrErrorHandling {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory,
                   ValueFromPipeline,
                   ValueFromPipelineByPropertyName)]
        [string[]]$ComputerName
    )

    PROCESS {
        foreach ($Computer in $ComputerName) {
            try {
                Test-WSMan -ComputerName $Computer -ErrorAction Stop
            }
            catch {
                Write-Warning -Message "Unable to connect to Computer: $Computer"
            }
        }
    }
}
```



## [Moudle](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_modules)
模块是包含 PowerShell 成员的包，例如 cmdlet、提供程序、函数、工作流、变量和别名。

**构成**

- 文件夹
- 清单文件：一种 PowerShell 数据文件 (`.psd1`) ，用于描述模块的内容并确定如何处理模块
- 模块文件：脚本和存储它的目录必须使用相同的名称

```powershell
# 查找已导入到会话中的模块
Get-Module
Get-Module -Name xxx -list

# 在模块中查找命令
Get-Command -Module <module-name>

# 将 PSModulePath 位置中的模块导入到当前会话
Import-Module <module-name>

# 默认模块位置
$env:PSModulePath -split ';'

# 添加默认模块位置
$Env:PSModulePath = $Env:PSModulePath + ";<path>"

# 安装模块
Install-Module -Name  <module-name>

# 从会话中删除模块
Remove-Module <module-name>
```

**自定义模块**  <br />  1在默认模块位置，新建一个模块目录，并创建同名的模块`psm1`文件
```powershell
function ConvertFrom-Unicode {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory,
                   ValueFromPipeline,
                   ValueFromPipelineByPropertyName)]
        [string[]]$sourceStrs
    )
    
    $str = $sourceStrs -join ' '
	
	$matchEvaluator={
		param($v)
		[char][int]($v.Value.replace('\u','0x'))
	}
	
	$readableStr = [regex]::Replace($str,'\\u[0-9-a-f]{4}',$matchEvaluator)
	Set-Clipboard $readableStr
	write-host $readableStr
	start-sleep 3
}

function ConvertTo-Unicode {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory,
                   ValueFromPipeline,
                   ValueFromPipelineByPropertyName)]
        [string[]]$sourceStrs
    )
    
    $str = $sourceStrs -join ' '   
	$ustr = ""
	for($i = 0; $i -lt $str.Length; $i++){
		if([int]$str[$i] -gt 32 -and [int]$str[$i] -lt 127){
			$ustr += $str[$i]
		}
		else{
			$ustr += [System.String]::Format("\u{0:x4}", [int]$str[$i])
		}
	}
	Set-Clipboard $ustr
	write-host $ustr
	start-sleep 3
}

Export-ModuleMember -Function ConvertFrom-Unicode,ConvertTo-Unicode
```
2 生成模块的`psd1`清单文件  <br />  `New-ModuleManifest -Path '.\xxx.psd1' -Author 'Someone' -RootModule .\xxx.psm1 -Description 'This is a template module.'`
```powershell
#
# 模块“xxx”的模块清单
#
# 生成者: Someone
#
# 生成时间: 2022/3/21
@{

# 与此清单关联的脚本模块或二进制模块文件。
RootModule = '.\xxx.psm1'

# 此模块的版本号。
ModuleVersion = '1.0'

# 支持的 PSEditions
# CompatiblePSEditions = @()

# 用于唯一标识此模块的 ID
GUID = 'b6da06b9-2a4f-4ed7-9107-dbf74b4fcbd5'

# 此模块的作者
Author = 'Someone'

# 此模块所属的公司或供应商
CompanyName = 'Unkonwn'

# 此模块的版权声明
Copyright = '(c) 2022 Someone。保留所有权利。'

# 此模块所提供功能的说明
Description = 'This is a template module.'

# 此模块要求的 Windows PowerShell 引擎的最低版本
# PowerShellVersion = ''

# 此模块要求的 Windows PowerShell 主机的名称
# PowerShellHostName = ''

# 此模块要求的 Windows PowerShell 主机的最低版本
# PowerShellHostVersion = ''

# 此模块要求使用的最低 Microsoft .NET Framework 版本。此先决条件仅对 PowerShell Desktop 版本有效。
# DotNetFrameworkVersion = ''

# 此模块要求使用的最低公共语言运行时(CLR)版本。此先决条件仅对 PowerShell Desktop 版本有效。
# CLRVersion = ''

# 此模块要求的处理器体系结构(无、X86、Amd64)
# ProcessorArchitecture = ''

# 必须在导入此模块之前先导入全局环境中的模块
# RequiredModules = @()

# 导入此模块之前必须加载的程序集
# RequiredAssemblies = @()

# 导入此模块之前运行在调用方环境中的脚本文件(.ps1)。
# ScriptsToProcess = @()

# 导入此模块时要加载的类型文件(.ps1xml)
# TypesToProcess = @()

# 导入此模块时要加载的格式文件(.ps1xml)
# FormatsToProcess = @()

# 将作为 RootModule/ModuleToProcess 中所指定模块的嵌套模块导入的模块
# NestedModules = @()

# 要从此模块中导出的函数。为了获得最佳性能，请不要使用通配符，不要删除该条目。如果没有要导出的函数，请使用空数组。
FunctionsToExport = ''

# 要从此模块中导出的 cmdlet。为了获得最佳性能，请不要使用通配符，不要删除该条目。如果没有要导出的 cmdlet，请使用空数组。
CmdletsToExport = '*'

# 要从此模块中导出的变量
VariablesToExport = '*'

# 要从此模块中导出的别名。为了获得最佳性能，请不要使用通配符，不要删除该条目。如果没有要导出的别名，请使用空数组。
AliasesToExport = '*'

# 要从此模块导出的 DSC 资源
# DscResourcesToExport = @()

# 与此模块一起打包的所有模块的列表
# ModuleList = @()

# 与此模块一起打包的所有文件的列表
# FileList = @()

# 要传递到 RootModule/ModuleToProcess 中指定的模块的专用数据。这还可能包含 PSData 哈希表以及 PowerShell 使用的其他模块元数据。
PrivateData = @{

    PSData = @{

        # 应用于此模块的标记。这些标记有助于在联机库中执行模块发现。
        # Tags = @()

        # 指向此模块的许可证的 URL。
        # LicenseUri = ''

        # 指向此项目的主网站的 URL。
        # ProjectUri = ''

        # 指向表示此模块的图标的 URL。
        # IconUri = ''

        # 此模块的 ReleaseNotes
        # ReleaseNotes = ''

    } # PSData 哈希表末尾

} # PrivateData 哈希表末尾

# 此模块的 HelpInfo URI
# HelpInfoURI = ''

# 从此模块中导出的命令的默认前缀。可以使用 Import-Module -Prefix 覆盖默认前缀。
# DefaultCommandPrefix = ''

}
```


## Resource

- [PowerShell](https://github.com/PowerShell/PowerShell)	office source code
- [awesome-powershell](https://github.com/janikvonrotz/awesome-powershell)
- [Sophia-Script-for-Windows](https://github.com/farag2/Sophia-Script-for-Windows)
- [oh-my-posh](https://github.com/JanDeDobbeleer/oh-my-posh)	A prompt theme engine for any shell
- [https://www.pstips.net/powershell-online-tutorials](https://www.pstips.net/powershell-online-tutorials)
