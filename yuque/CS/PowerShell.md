<h1>—— <a href="https://docs.microsoft.com/zh-cn/powershell/" target="_blank">PowerShell</a> ——</h1>
<p>任务自动化和<a href="https://zh.wikipedia.org/w/index.php?title=%E7%B5%84%E6%85%8B%E7%AE%A1%E7%90%86&amp;action=edit&amp;redlink=1" target="_blank">配置管理</a>框架，由.NET Framework和.NET Core是构建的命令行界面壳层相关脚本语言组成</p>
<p>Windows PowerShell ISE是Windows PowerShell的主机应用程序</p>
<p>文件扩展名</p>
<ul>
<li>
<p>.ps1 (脚本文件)</p>
</li>
<li>
<p>.ps1xml（XML文档）</p>
</li>
<li>
<p>.psc1（控制台文件）</p>
</li>
<li>
<p>.psd1（数据文件）</p>
</li>
<li>
<p>.psm1（脚本模块）</p>
</li>
<li>
<p>.pssc（会话配置文件）</p>
</li>
<li>
<p>.cdxml (Cmdlet定义的XML文档)</p>
</li>
</ul>
<p>查看版本：$PSVersionTable.PSVersion</p>
<table>
<thead>
<tr>
<th style="text-align:center">ALT+F7</th>
<th style="text-align:center">清除命令的历史记录</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">PgUp PgDn</td>
<td style="text-align:center">显示当前会话的第一个命令和最后一个命令</td>
</tr>
<tr>
<td style="text-align:center">Esc</td>
<td style="text-align:center">清空当前命令行</td>
</tr>
<tr>
<td style="text-align:center">F2</td>
<td style="text-align:center">自动补充历史命令至指定字符</td>
</tr>
<tr>
<td style="text-align:center">F4</td>
<td style="text-align:center">删除命令行至光标右边指定字符处</td>
</tr>
<tr>
<td style="text-align:center">F7</td>
<td style="text-align:center">对话框显示命令行历史记录</td>
</tr>
<tr>
<td style="text-align:center">F8</td>
<td style="text-align:center">检索包含指定字符的命令行历史记录</td>
</tr>
<tr>
<td style="text-align:center">F9</td>
<td style="text-align:center">根据命令行的历史记录编号选择命令，历史记录编号可以通过F7查看</td>
</tr>
<tr>
<td style="text-align:center">上/下方向键</td>
<td style="text-align:center">切换命令行的历史记录</td>
</tr>
<tr>
<td style="text-align:center">Backspace</td>
<td style="text-align:center">从右删除命令行字符</td>
</tr>
<tr>
<td style="text-align:center">Ctrl+C</td>
<td style="text-align:center">取消正在执行的命令</td>
</tr>
<tr>
<td style="text-align:center">Ctrl+左/右方向键</td>
<td style="text-align:center">在单词之间移动光标</td>
</tr>
<tr>
<td style="text-align:center">Ctrl+Home</td>
<td style="text-align:center">删除光标最左端的所有字符</td>
</tr>
<tr>
<td style="text-align:center">Tab</td>
<td style="text-align:center">自动补齐命令或者文件名</td>
</tr>
</tbody>
</table>
<p>能自动识别计算机容量单位，包括KB，MB，GB，TB，PB</p>
<h1>cmdlet</h1>
<p>执行特定操作的专用.NET<a href="https://zh.wikipedia.org/wiki/%E7%B1%BB_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)" target="_blank">类</a></p>
<p>指令名称的格式都是以<a href="https://zh.wikipedia.org/wiki/%E8%BF%9E%E5%AD%97%E5%8F%B7" target="_blank">连字号</a>（-）隔开的一对动词和名词，并且通常都是单数名词</p>
<p>常见命令行解释器命令对比</p>
<table>
<thead>
<tr>
<th style="text-align:center">PowerShell</th>
<th style="text-align:center">cmd</th>
<th style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Unix_shell" target="_blank">Unix shell</a></th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Get-ChildItem</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Dir_(%E5%91%BD%E4%BB%A4)" target="_blank">dir</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Ls" target="_blank">ls</a></td>
<td style="text-align:center">列出当前或给定文件夹中的所有文件和文件夹</td>
</tr>
<tr>
<td style="text-align:center">Test-Connection</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Ping" target="_blank">ping</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Ping" target="_blank">ping</a></td>
<td style="text-align:center">从当前计算机向指定计算机发送<a href="https://zh.wikipedia.org/wiki/Ping" target="_blank">互联网控制消息协议回显请求，</a>或指示另一台计算机这样做</td>
</tr>
<tr>
<td style="text-align:center">Get-Content</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=TYPE_(DOS_command)&amp;action=edit&amp;redlink=1" target="_blank">type</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Cat_(Unix)" target="_blank">cat</a></td>
<td style="text-align:center">获取文件内容</td>
</tr>
<tr>
<td style="text-align:center">Get-Command</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Help_(command)&amp;action=edit&amp;redlink=1" target="_blank">help</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Type_(Unix)&amp;action=edit&amp;redlink=1" target="_blank">type,</a> which, compgen</td>
<td style="text-align:center">列出可用的命令</td>
</tr>
<tr>
<td style="text-align:center">Get-Help</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Help_(command)&amp;action=edit&amp;redlink=1" target="_blank">help</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Apropos_(Unix)&amp;action=edit&amp;redlink=1" target="_blank">apropos,</a> man</td>
<td style="text-align:center">在控制台上打印命令的文档</td>
</tr>
<tr>
<td style="text-align:center">Clear-Host</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Cls_(computing)&amp;action=edit&amp;redlink=1" target="_blank">cls</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Clear_(Unix)" target="_blank">clear</a></td>
<td style="text-align:center">清除屏幕</td>
</tr>
<tr>
<td style="text-align:center">Copy-Item</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Copy_(%E5%91%BD%E4%BB%A4)" target="_blank">copy,</a> xcopy, robocopy</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Cp_(Unix)" target="_blank">cp</a></td>
<td style="text-align:center">将文件和文件夹复制到另一个位置</td>
</tr>
<tr>
<td style="text-align:center">Move-Item</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Move_(command)&amp;action=edit&amp;redlink=1" target="_blank">move</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Mv_(Unix)" target="_blank">mv</a></td>
<td style="text-align:center">将文件和文件夹移动到新位置</td>
</tr>
<tr>
<td style="text-align:center">Remove-Item</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Del_(command)&amp;action=edit&amp;redlink=1" target="_blank">del,</a> erase, rmdir, rd</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Rm_(Unix)" target="_blank">rm,</a> rmdir</td>
<td style="text-align:center">删除文件或文件夹</td>
</tr>
<tr>
<td style="text-align:center">Rename-Item</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Ren_(command)&amp;action=edit&amp;redlink=1" target="_blank">ren,</a> rename</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Mv_(Unix)" target="_blank">mv</a></td>
<td style="text-align:center">重命名单个文件，文件夹，硬链接或符号链接</td>
</tr>
<tr>
<td style="text-align:center">Get-Location</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Cd_(%E5%91%BD%E4%BB%A4)" target="_blank">cd</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Pwd" target="_blank">pwd</a></td>
<td style="text-align:center">显示工作路径（当前文件夹）</td>
</tr>
<tr>
<td style="text-align:center">Pop-Location</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Pushd_and_popd&amp;action=edit&amp;redlink=1" target="_blank">popd</a></td>
<td style="text-align:center">popd</td>
<td style="text-align:center">将工作路径更改为最近推送到堆栈上的位置</td>
</tr>
<tr>
<td style="text-align:center">Push-Location</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Pushd_and_popd&amp;action=edit&amp;redlink=1" target="_blank">pushd</a></td>
<td style="text-align:center">pushd</td>
<td style="text-align:center">将工作路径存储到堆栈中</td>
</tr>
<tr>
<td style="text-align:center">Set-Location</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Cd_(%E5%91%BD%E4%BB%A4)" target="_blank">cd,</a> chdir</td>
<td style="text-align:center">cd</td>
<td style="text-align:center">改变工作路径</td>
</tr>
<tr>
<td style="text-align:center">Tee-Object</td>
<td style="text-align:center"></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Tee" target="_blank">tee</a></td>
<td style="text-align:center">将输入管道传输到文件或变量，并沿管道传递输入</td>
</tr>
<tr>
<td style="text-align:center">Write-Output</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Echo_(%E5%91%BD%E4%BB%A4)" target="_blank">echo</a></td>
<td style="text-align:center">echo</td>
<td style="text-align:center">将字符串或其他对像打印到<a href="https://zh.wikipedia.org/wiki/%E6%A8%99%E6%BA%96%E4%B8%B2%E6%B5%81" target="_blank">标准流</a></td>
</tr>
<tr>
<td style="text-align:center">Get-Process</td>
<td style="text-align:center">tlist, <a href="https://zh.wikipedia.org/w/index.php?title=Tasklist&amp;action=edit&amp;redlink=1" target="_blank">tasklist</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Ps_(Unix)" target="_blank">ps</a></td>
<td style="text-align:center">列出所有正在运行的进程</td>
</tr>
<tr>
<td style="text-align:center">Stop-Process</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Kill_(command)&amp;action=edit&amp;redlink=1" target="_blank">kill,</a> taskkill</td>
<td style="text-align:center">kill</td>
<td style="text-align:center">停止正在运行的进程</td>
</tr>
<tr>
<td style="text-align:center">Select-String</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Findstr&amp;action=edit&amp;redlink=1" target="_blank">findstr</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Find" target="_blank">find,</a> grep</td>
<td style="text-align:center">打印与模式匹配的行</td>
</tr>
<tr>
<td style="text-align:center">Set-Variable</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/w/index.php?title=Environment_variable&amp;action=edit&amp;redlink=1" target="_blank">set</a></td>
<td style="text-align:center">env, export, set, setenv</td>
<td style="text-align:center">创建或更改<a href="https://zh.wikipedia.org/wiki/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" target="_blank">环境变量的</a>内容</td>
</tr>
<tr>
<td style="text-align:center">Invoke-WebRequest</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/CURL" target="_blank">curl</a></td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/Wget" target="_blank">wget,</a> curl</td>
<td style="text-align:center">获取因特网上的网页内容</td>
</tr>
</tbody>
</table>
<p>使用*通配符来请求项目的所有内容</p>
<ul>
<li>
<p>Get-Help</p>
</li>
<li>
<p>Get-Command</p>
</li>
<li>
<p>Show-command</p>
</li>
<li>
<p>Get-Date</p>
</li>
<li>
<p>Get-Unique</p>
</li>
<li>
<p>Get-Random</p>
</li>
<li>
<p>Get-Verb</p>
</li>
<li>
<p>Out-Null</p>
</li>
<li>
<p>Start-Sleep -Seconds</p>
</li>
</ul>
<pre data-syntax="shell"><code class="lang-shell hljs raw"># 列出计算机的 IP 地址
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

</code></pre>
<p>计算机</p>
<ul>
<li>
<p>Restart-Computer</p>
</li>
<li>
<p>Rename-Computer</p>
</li>
<li>
<p>Stop-Computer</p>
</li>
<li>
<p>rundll32.exe user32.dll,LockWorkStation	锁定计算机</p>
</li>
</ul>
<p>Host</p>
<ul>
<li>
<p>Clear-Host</p>
</li>
<li>
<p>Get-Host</p>
</li>
<li>
<p>Out-Host</p>
</li>
<li>
<p>Read-Host</p>
</li>
<li>
<p>Write-Host</p>
</li>
</ul>
<p>历史记录</p>
<ul>
<li>
<p>Add-History</p>
</li>
<li>
<p>Clear-History</p>
</li>
<li>
<p>Get-History</p>
</li>
<li>
<p>Invoke-History</p>
</li>
</ul>
<p>位置</p>
<ul>
<li>
<p>Get-Location</p>
</li>
<li>
<p>Pop-Location</p>
</li>
<li>
<p>Push-Location</p>
</li>
<li>
<p>Set-Location</p>
</li>
</ul>
<p>路径</p>
<ul>
<li>
<p>Convert-Path</p>
</li>
<li>
<p>Join-Path</p>
</li>
<li>
<p>Resolve-Path</p>
</li>
<li>
<p>Split-Path</p>
</li>
<li>
<p>Test-Path</p>
</li>
</ul>
<p>文本</p>
<ul>
<li>
<p>Add-Content</p>
</li>
<li>
<p>Clear-Content</p>
</li>
<li>
<p>Get-Content</p>
</li>
<li>
<p>Set-Content</p>
</li>
<li>
<p>Get-Clipboard</p>
</li>
<li>
<p>Select-String</p>
</li>
</ul>
<p>文件</p>
<ul>
<li>
<p>Clear-Item</p>
</li>
<li>
<p>Copy-Item</p>
</li>
<li>
<p>Get-Item</p>
</li>
<li>
<p>Invoke-Item</p>
</li>
<li>
<p>Move-Item</p>
</li>
<li>
<p>New-Item</p>
</li>
<li>
<p>Remove-Item</p>
</li>
<li>
<p>Rename-Item</p>
</li>
<li>
<p>Set-Item</p>
</li>
<li>
<p>Get-ChildItem</p>
</li>
<li>
<p>Clear-RecycleBin</p>
</li>
</ul>
<p>属性</p>
<ul>
<li>
<p>Clear-ItemProperty</p>
</li>
<li>
<p>Copy-ItemProperty</p>
</li>
<li>
<p>Get-ItemProperty</p>
</li>
<li>
<p>Move-ItemProperty</p>
</li>
<li>
<p>New-ItemProperty</p>
</li>
<li>
<p>Remove-ItemProperty</p>
</li>
<li>
<p>Rename-ItemProperty</p>
</li>
<li>
<p>Set-ItemProperty</p>
</li>
</ul>
<p>格式化</p>
<ul>
<li>
<p>Format-Custom</p>
</li>
<li>
<p>Format-Hex</p>
</li>
<li>
<p>Format-List</p>
</li>
<li>
<p>Format-Table</p>
</li>
<li>
<p>Format-Wide</p>
</li>
</ul>
<p>对象</p>
<ul>
<li>
<p>Compare-Object</p>
</li>
<li>
<p>ForEach-Object</p>
</li>
<li>
<p>Group-Object</p>
</li>
<li>
<p>Measure-Object</p>
</li>
<li>
<p>New-Object</p>
</li>
<li>
<p>Select-Object</p>
</li>
<li>
<p>Sort-Object</p>
</li>
<li>
<p>Where-Object</p>
</li>
<li>
<p>Tee-Object</p>
</li>
</ul>
<p>服务</p>
<ul>
<li>
<p>Get-Service</p>
</li>
<li>
<p>Start-Service</p>
</li>
<li>
<p>Stop-Service</p>
</li>
<li>
<p>Restart-Service</p>
</li>
<li>
<p>Suspend-Service</p>
</li>
<li>
<p>Resume-Service</p>
</li>
<li>
<p>New-Service</p>
</li>
<li>
<p>Set-Service</p>
</li>
</ul>
<p><a href="https://docs.microsoft.com/zh-cn/powershell/scripting/samples/managing-processes-with-process-cmdlets" target="_blank">进程</a></p>
<ul>
<li>
<p>Debug-Process</p>
</li>
<li>
<p>Get-Process</p>
</li>
<li>
<p>Start-Process</p>
</li>
<li>
<p>Stop-Process</p>
</li>
<li>
<p>Wait-Process</p>
</li>
</ul>
<p></p>
<p>任务</p>
<ul>
<li>
<p>Get-Job</p>
</li>
<li>
<p>Receive-Job</p>
</li>
<li>
<p>Remove-Job</p>
</li>
<li>
<p>Start-Job</p>
</li>
<li>
<p>Stop-Job</p>
</li>
<li>
<p>Wait-Job</p>
</li>
</ul>
<p>虚拟机</p>
<ul>
<li>
<p>Checkpoint-VM</p>
</li>
<li>
<p>Compare-VM</p>
</li>
<li>
<p>Debug-VM</p>
</li>
<li>
<p>Export-VM</p>
</li>
<li>
<p>Get-VM</p>
</li>
<li>
<p>Import-VM</p>
</li>
<li>
<p>Measure-VM</p>
</li>
<li>
<p>Move-VM</p>
</li>
<li>
<p>New-VM</p>
</li>
<li>
<p>Remove-VM</p>
</li>
<li>
<p>Rename-VM</p>
</li>
<li>
<p>Repair-VM</p>
</li>
<li>
<p>Restart-VM</p>
</li>
<li>
<p>Resume-VM</p>
</li>
<li>
<p>Save-VM</p>
</li>
<li>
<p>Set-VM</p>
</li>
<li>
<p>Start-VM</p>
</li>
<li>
<p>Stop-VM</p>
</li>
<li>
<p>Suspend-VM</p>
</li>
<li>
<p>Wait-VM</p>
</li>
</ul>
<p>事务</p>
<ul>
<li>
<p>Complete-Transaction</p>
</li>
<li>
<p>Get-Transaction</p>
</li>
<li>
<p>Start-Transaction</p>
</li>
<li>
<p>Undo-Transaction</p>
</li>
<li>
<p>Use-Transaction</p>
</li>
</ul>
<p>别名</p>
<ul>
<li>
<p>Export-Alias</p>
</li>
<li>
<p>Get-Alias</p>
</li>
<li>
<p>Import-Alias</p>
</li>
<li>
<p>New-Alias</p>
</li>
<li>
<p>Set-Alias</p>
</li>
<li>
<p>Remove-Alias</p>
</li>
</ul>
<p>变量</p>
<ul>
<li>
<p>Clear-Variable</p>
</li>
<li>
<p>Get-Variable</p>
</li>
<li>
<p>New-Variable</p>
</li>
<li>
<p>Remove-Variable</p>
</li>
<li>
<p>Set-Variable</p>
</li>
</ul>
<p>Get-NetTCPConnection	端口信息</p>
<p>Get-WmiObject win32_service | select PathName	查看服务信息</p>
<p>to do	 加粗标记——常用</p>
<h2><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/?view=powershell-7" target="_blank">Microsoft.PowerShell.Core</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/add-history?view=powershell-7" target="_blank">Add-History</a></th>
<th style="text-align:center">Appends entries to the session history.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/clear-history?view=powershell-7" target="_blank">Clear-History</a></td>
<td style="text-align:center">Deletes entries from the PowerShell session command history.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/clear-host?view=powershell-7" target="_blank">Clear-Host</a></td>
<td style="text-align:center">Clears the display in the host program.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/connect-pssession?view=powershell-7" target="_blank">Connect-PSSession</a></td>
<td style="text-align:center">Reconnects to disconnected sessions.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/debug-job?view=powershell-7" target="_blank">Debug-Job</a></td>
<td style="text-align:center">Debugs a running background, remote, or PowerShell Workflow job.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/disable-experimentalfeature?view=powershell-7" target="_blank">Disable-ExperimentalFeature</a></td>
<td style="text-align:center">Disable an experimental feature on startup of new instance of PowerShell.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/disable-psremoting?view=powershell-7" target="_blank">Disable-PSRemoting</a></td>
<td style="text-align:center">Prevents PowerShell endpoints from receiving remote connections.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/disable-pssessionconfiguration?view=powershell-7" target="_blank">Disable-PSSessionConfiguration</a></td>
<td style="text-align:center">Disables session configurations on the local computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/disconnect-pssession?view=powershell-7" target="_blank">Disconnect-PSSession</a></td>
<td style="text-align:center">Disconnects from a session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enable-experimentalfeature?view=powershell-7" target="_blank">Enable-ExperimentalFeature</a></td>
<td style="text-align:center">Enable an experimental feature on startup of new instance of PowerShell.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enable-psremoting?view=powershell-7" target="_blank">Enable-PSRemoting</a></td>
<td style="text-align:center">Configures the computer to receive remote commands.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enable-pssessionconfiguration?view=powershell-7" target="_blank">Enable-PSSessionConfiguration</a></td>
<td style="text-align:center">Enables the session configurations on the local computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enter-pshostprocess?view=powershell-7" target="_blank">Enter-PSHostProcess</a></td>
<td style="text-align:center">Connects to and enters into an interactive session with a local process.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/enter-pssession?view=powershell-7" target="_blank">Enter-PSSession</a></td>
<td style="text-align:center">Starts an interactive session with a remote computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/exit-pshostprocess?view=powershell-7" target="_blank">Exit-PSHostProcess</a></td>
<td style="text-align:center">Closes an interactive session with a local process.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/exit-pssession?view=powershell-7" target="_blank">Exit-PSSession</a></td>
<td style="text-align:center">Ends an interactive session with a remote computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/export-modulemember?view=powershell-7" target="_blank">Export-ModuleMember</a></td>
<td style="text-align:center">Specifies the module members that are exported.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/foreach-object?view=powershell-7" target="_blank">ForEach-Object</a></td>
<td style="text-align:center">Performs an operation against each item in a collection of input objects.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-command?view=powershell-7" target="_blank">Get-Command</a></td>
<td style="text-align:center">Gets all commands.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-experimentalfeature?view=powershell-7" target="_blank">Get-ExperimentalFeature</a></td>
<td style="text-align:center">Gets experimental features.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-help?view=powershell-7" target="_blank">Get-Help</a></td>
<td style="text-align:center">Displays information about PowerShell commands and concepts.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-history?view=powershell-7" target="_blank">Get-History</a></td>
<td style="text-align:center">Gets a list of the commands entered during the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-job?view=powershell-7" target="_blank">Get-Job</a></td>
<td style="text-align:center">Gets PowerShell background jobs that are running in the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-module?view=powershell-7" target="_blank">Get-Module</a></td>
<td style="text-align:center">List the modules imported in the current session or that can be imported from the PSModulePath.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-pshostprocessinfo?view=powershell-7" target="_blank">Get-PSHostProcessInfo</a></td>
<td style="text-align:center">Gets process information about the PowerShell host.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-pssession?view=powershell-7" target="_blank">Get-PSSession</a></td>
<td style="text-align:center">Gets the PowerShell sessions on local and remote computers.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-pssessioncapability?view=powershell-7" target="_blank">Get-PSSessionCapability</a></td>
<td style="text-align:center">Gets the capabilities of a specific user on a constrained session configuration.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-pssessionconfiguration?view=powershell-7" target="_blank">Get-PSSessionConfiguration</a></td>
<td style="text-align:center">Gets the registered session configurations on the computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/import-module?view=powershell-7" target="_blank">Import-Module</a></td>
<td style="text-align:center">Adds modules to the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/invoke-command?view=powershell-7" target="_blank">Invoke-Command</a></td>
<td style="text-align:center">Runs commands on local and remote computers.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/invoke-history?view=powershell-7" target="_blank">Invoke-History</a></td>
<td style="text-align:center">Runs commands from the session history.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-module?view=powershell-7" target="_blank">New-Module</a></td>
<td style="text-align:center">Creates a new dynamic module that exists only in memory.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-modulemanifest?view=powershell-7" target="_blank">New-ModuleManifest</a></td>
<td style="text-align:center">Creates a new module manifest.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-psrolecapabilityfile?view=powershell-7" target="_blank">New-PSRoleCapabilityFile</a></td>
<td style="text-align:center">Creates a file that defines a set of capabilities to be exposed through a session configuration.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-pssession?view=powershell-7" target="_blank">New-PSSession</a></td>
<td style="text-align:center">Creates a persistent connection to a local or remote computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-pssessionconfigurationfile?view=powershell-7" target="_blank">New-PSSessionConfigurationFile</a></td>
<td style="text-align:center">Creates a file that defines a session configuration.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-pssessionoption?view=powershell-7" target="_blank">New-PSSessionOption</a></td>
<td style="text-align:center">Creates an object that contains advanced options for a PSSession.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/new-pstransportoption?view=powershell-7" target="_blank">New-PSTransportOption</a></td>
<td style="text-align:center">Creates an object that contains advanced options for a session configuration.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/out-default?view=powershell-7" target="_blank">Out-Default</a></td>
<td style="text-align:center">Sends the output to the default formatter and to the default output cmdlet.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/out-host?view=powershell-7" target="_blank">Out-Host</a></td>
<td style="text-align:center">Sends output to the command line.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/out-null?view=powershell-7" target="_blank">Out-Null</a></td>
<td style="text-align:center">Hides the output instead of sending it down the pipeline or displaying it.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/receive-job?view=powershell-7" target="_blank">Receive-Job</a></td>
<td style="text-align:center">Gets the results of the PowerShell background jobs in the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/receive-pssession?view=powershell-7" target="_blank">Receive-PSSession</a></td>
<td style="text-align:center">Gets results of commands in disconnected sessions</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/register-argumentcompleter?view=powershell-7" target="_blank">Register-ArgumentCompleter</a></td>
<td style="text-align:center">Registers a custom argument completer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/register-pssessionconfiguration?view=powershell-7" target="_blank">Register-PSSessionConfiguration</a></td>
<td style="text-align:center">Creates and registers a new session configuration.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/remove-job?view=powershell-7" target="_blank">Remove-Job</a></td>
<td style="text-align:center">Deletes a PowerShell background job.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/remove-module?view=powershell-7" target="_blank">Remove-Module</a></td>
<td style="text-align:center">Removes modules from the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/remove-pssession?view=powershell-7" target="_blank">Remove-PSSession</a></td>
<td style="text-align:center">Closes one or more PowerShell sessions (PSSessions).</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/save-help?view=powershell-7" target="_blank">Save-Help</a></td>
<td style="text-align:center">Downloads and saves the newest help files to a file system directory.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/set-psdebug?view=powershell-7" target="_blank">Set-PSDebug</a></td>
<td style="text-align:center">Turns script debugging features on and off, sets the trace level, and toggles strict mode.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/set-pssessionconfiguration?view=powershell-7" target="_blank">Set-PSSessionConfiguration</a></td>
<td style="text-align:center">Changes the properties of a registered session configuration.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/set-strictmode?view=powershell-7" target="_blank">Set-StrictMode</a></td>
<td style="text-align:center">Establishes and enforces coding rules in expressions, scripts, and script blocks.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/start-job?view=powershell-7" target="_blank">Start-Job</a></td>
<td style="text-align:center">Starts a PowerShell background job.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/stop-job?view=powershell-7" target="_blank">Stop-Job</a></td>
<td style="text-align:center">Stops a PowerShell background job.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/test-modulemanifest?view=powershell-7" target="_blank">Test-ModuleManifest</a></td>
<td style="text-align:center">Verifies that a module manifest file accurately describes the contents of a module.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/test-pssessionconfigurationfile?view=powershell-7" target="_blank">Test-PSSessionConfigurationFile</a></td>
<td style="text-align:center">Verifies the keys and values in a session configuration file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/unregister-pssessionconfiguration?view=powershell-7" target="_blank">Unregister-PSSessionConfiguration</a></td>
<td style="text-align:center">Deletes registered session configurations from the computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/update-help?view=powershell-7" target="_blank">Update-Help</a></td>
<td style="text-align:center">Downloads and installs the newest help files on your computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/wait-job?view=powershell-7" target="_blank">Wait-Job</a></td>
<td style="text-align:center">Suppresses the command prompt until one or all of the PowerShell background jobs running in the session are completed.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/where-object?view=powershell-7" target="_blank">Where-Object</a></td>
<td style="text-align:center">Selects objects from a collection based on their property values.</td>
</tr>
</tbody>
</table>
<h2><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/?view=powershell-7#microsoft-powershell-management" target="_blank">Microsoft.PowerShell.Management</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/add-content?view=powershell-7" target="_blank">Add-Content</a></th>
<th style="text-align:center">Adds content to the specified items, such as adding words to a file.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/clear-content?view=powershell-7" target="_blank">Clear-Content</a></td>
<td style="text-align:center">Deletes the contents of an item, but does not delete the item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/clear-item?view=powershell-7" target="_blank">Clear-Item</a></td>
<td style="text-align:center">Clears the contents of an item, but does not delete the item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/clear-itemproperty?view=powershell-7" target="_blank">Clear-ItemProperty</a></td>
<td style="text-align:center">Clears the value of a property but does not delete the property.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/clear-recyclebin?view=powershell-7" target="_blank">Clear-RecycleBin</a></td>
<td style="text-align:center">Clears the contents of a recycle bin.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/convert-path?view=powershell-7" target="_blank">Convert-Path</a></td>
<td style="text-align:center">Converts a path from a PowerShell path to a PowerShell provider path.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/copy-item?view=powershell-7" target="_blank">Copy-Item</a></td>
<td style="text-align:center">Copies an item from one location to another.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/copy-itemproperty?view=powershell-7" target="_blank">Copy-ItemProperty</a></td>
<td style="text-align:center">Copies a property and value from a specified location to another location.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/debug-process?view=powershell-7" target="_blank">Debug-Process</a></td>
<td style="text-align:center">Debugs one or more processes running on the local computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-childitem?view=powershell-7" target="_blank">Get-ChildItem</a></td>
<td style="text-align:center">Gets the items and child items in one or more specified locations.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-clipboard?view=powershell-7" target="_blank">Get-Clipboard</a></td>
<td style="text-align:center">Gets the contents of the clipboard.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-computerinfo?view=powershell-7" target="_blank">Get-ComputerInfo</a></td>
<td style="text-align:center">Gets a consolidated object of system and operating system properties.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-content?view=powershell-7" target="_blank">Get-Content</a></td>
<td style="text-align:center">Gets the content of the item at the specified location.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-hotfix?view=powershell-7" target="_blank">Get-HotFix</a></td>
<td style="text-align:center">Gets the hotfixes that are installed on local or remote computers.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-item?view=powershell-7" target="_blank">Get-Item</a></td>
<td style="text-align:center">Gets the item at the specified location.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-itemproperty?view=powershell-7" target="_blank">Get-ItemProperty</a></td>
<td style="text-align:center">Gets the properties of a specified item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-itempropertyvalue?view=powershell-7" target="_blank">Get-ItemPropertyValue</a></td>
<td style="text-align:center">Gets the value for one or more properties of a specified item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-location?view=powershell-7" target="_blank">Get-Location</a></td>
<td style="text-align:center">Gets information about the current working location or a location stack.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-process?view=powershell-7" target="_blank">Get-Process</a></td>
<td style="text-align:center">Gets the processes that are running on the local computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-psdrive?view=powershell-7" target="_blank">Get-PSDrive</a></td>
<td style="text-align:center">Gets drives in the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-psprovider?view=powershell-7" target="_blank">Get-PSProvider</a></td>
<td style="text-align:center">Gets information about the specified PowerShell provider.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-service?view=powershell-7" target="_blank">Get-Service</a></td>
<td style="text-align:center">Gets the services on the computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-timezone?view=powershell-7" target="_blank">Get-TimeZone</a></td>
<td style="text-align:center">Gets the current time zone or a list of available time zones.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/invoke-item?view=powershell-7" target="_blank">Invoke-Item</a></td>
<td style="text-align:center">Performs the default action on the specified item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/join-path?view=powershell-7" target="_blank">Join-Path</a></td>
<td style="text-align:center">Combines a path and a child path into a single path.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/move-item?view=powershell-7" target="_blank">Move-Item</a></td>
<td style="text-align:center">Moves an item from one location to another.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/move-itemproperty?view=powershell-7" target="_blank">Move-ItemProperty</a></td>
<td style="text-align:center">Moves a property from one location to another.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/new-item?view=powershell-7" target="_blank">New-Item</a></td>
<td style="text-align:center">Creates a new item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/new-itemproperty?view=powershell-7" target="_blank">New-ItemProperty</a></td>
<td style="text-align:center">Creates a new property for an item and sets its value.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/new-psdrive?view=powershell-7" target="_blank">New-PSDrive</a></td>
<td style="text-align:center">Creates temporary and persistent mapped network drives.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/new-service?view=powershell-7" target="_blank">New-Service</a></td>
<td style="text-align:center">Creates a new Windows service.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/pop-location?view=powershell-7" target="_blank">Pop-Location</a></td>
<td style="text-align:center">Changes the current location to the location most recently pushed onto the stack.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/push-location?view=powershell-7" target="_blank">Push-Location</a></td>
<td style="text-align:center">Adds the current location to the top of a location stack.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7" target="_blank">Remove-Item</a></td>
<td style="text-align:center">Deletes the specified items.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/remove-itemproperty?view=powershell-7" target="_blank">Remove-ItemProperty</a></td>
<td style="text-align:center">Deletes the property and its value from an item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/remove-psdrive?view=powershell-7" target="_blank">Remove-PSDrive</a></td>
<td style="text-align:center">Deletes temporary PowerShell drives and disconnects mapped network drives.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/remove-service?view=powershell-7" target="_blank">Remove-Service</a></td>
<td style="text-align:center">Removes a Windows service.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/rename-computer?view=powershell-7" target="_blank">Rename-Computer</a></td>
<td style="text-align:center">Renames a computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/rename-item?view=powershell-7" target="_blank">Rename-Item</a></td>
<td style="text-align:center">Renames an item in a PowerShell provider namespace.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/rename-itemproperty?view=powershell-7" target="_blank">Rename-ItemProperty</a></td>
<td style="text-align:center">Renames a property of an item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/resolve-path?view=powershell-7" target="_blank">Resolve-Path</a></td>
<td style="text-align:center">Resolves the wildcard characters in a path, and displays the path contents.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/restart-computer?view=powershell-7" target="_blank">Restart-Computer</a></td>
<td style="text-align:center">Restarts the operating system on local and remote computers.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/restart-service?view=powershell-7" target="_blank">Restart-Service</a></td>
<td style="text-align:center">Stops and then starts one or more services.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/resume-service?view=powershell-7" target="_blank">Resume-Service</a></td>
<td style="text-align:center">Resumes one or more suspended (paused) services.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-clipboard?view=powershell-7" target="_blank">Set-Clipboard</a></td>
<td style="text-align:center">Sets the contents of the clipboard.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-content?view=powershell-7" target="_blank">Set-Content</a></td>
<td style="text-align:center">Writes new content or replaces existing content in a file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-item?view=powershell-7" target="_blank">Set-Item</a></td>
<td style="text-align:center">Changes the value of an item to the value specified in the command.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-itemproperty?view=powershell-7" target="_blank">Set-ItemProperty</a></td>
<td style="text-align:center">Creates or changes the value of a property of an item.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-location?view=powershell-7" target="_blank">Set-Location</a></td>
<td style="text-align:center">Sets the current working location to a specified location.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-service?view=powershell-7" target="_blank">Set-Service</a></td>
<td style="text-align:center">Starts, stops, and suspends a service, and changes its properties.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/set-timezone?view=powershell-7" target="_blank">Set-TimeZone</a></td>
<td style="text-align:center">Sets the system time zone to a specified time zone.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/split-path?view=powershell-7" target="_blank">Split-Path</a></td>
<td style="text-align:center">Returns the specified part of a path.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/start-process?view=powershell-7" target="_blank">Start-Process</a></td>
<td style="text-align:center">Starts one or more processes on the local computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/start-service?view=powershell-7" target="_blank">Start-Service</a></td>
<td style="text-align:center">Starts one or more stopped services.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-computer?view=powershell-7" target="_blank">Stop-Computer</a></td>
<td style="text-align:center">Stops (shuts down) local and remote computers.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-process?view=powershell-7" target="_blank">Stop-Process</a></td>
<td style="text-align:center">Stops one or more running processes.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-service?view=powershell-7" target="_blank">Stop-Service</a></td>
<td style="text-align:center">Stops one or more running services.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/suspend-service?view=powershell-7" target="_blank">Suspend-Service</a></td>
<td style="text-align:center">Suspends (pauses) one or more running services.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/test-connection?view=powershell-7" target="_blank">Test-Connection</a></td>
<td style="text-align:center">Sends ICMP echo request packets, or pings, to one or more computers.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/test-path?view=powershell-7" target="_blank">Test-Path</a></td>
<td style="text-align:center">Determines whether all elements of a path exist.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/wait-process?view=powershell-7" target="_blank">Wait-Process</a></td>
<td style="text-align:center">Waits for the processes to be stopped before accepting more input.</td>
</tr>
</tbody>
</table>
<h2><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/?view=powershell-7#microsoft-powershell-utility" target="_blank">Microsoft.PowerShell.Utility</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/add-member?view=powershell-7" target="_blank">Add-Member</a></th>
<th style="text-align:center">Adds custom properties and methods to an instance of a PowerShell object.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/add-type?view=powershell-7" target="_blank">Add-Type</a></td>
<td style="text-align:center">Adds a Microsoft .NET Core class to a PowerShell session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/clear-variable?view=powershell-7" target="_blank">Clear-Variable</a></td>
<td style="text-align:center">Deletes the value of a variable.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/compare-object?view=powershell-7" target="_blank">Compare-Object</a></td>
<td style="text-align:center">Compares two sets of objects.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-csv?view=powershell-7" target="_blank">ConvertFrom-Csv</a></td>
<td style="text-align:center">Converts object properties in comma-separated value (CSV) format into CSV versions of the original objects.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-json?view=powershell-7" target="_blank">ConvertFrom-Json</a></td>
<td style="text-align:center">Converts a JSON-formatted string to a custom object or a hash table.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-markdown?view=powershell-7" target="_blank">ConvertFrom-Markdown</a></td>
<td style="text-align:center">Convert the contents of a string or a file to a MarkdownInfo object.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-sddlstring?view=powershell-7" target="_blank">ConvertFrom-SddlString</a></td>
<td style="text-align:center">Converts a SDDL string to a custom object.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-stringdata?view=powershell-7" target="_blank">ConvertFrom-StringData</a></td>
<td style="text-align:center">Converts a string containing one or more key and value pairs to a hash table.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-csv?view=powershell-7" target="_blank">ConvertTo-Csv</a></td>
<td style="text-align:center">Converts .NET objects into a series of character-separated value (CSV) strings.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-html?view=powershell-7" target="_blank">ConvertTo-Html</a></td>
<td style="text-align:center">Converts .NET objects into HTML that can be displayed in a Web browser.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-json?view=powershell-7" target="_blank">ConvertTo-Json</a></td>
<td style="text-align:center">Converts an object to a JSON-formatted string.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-xml?view=powershell-7" target="_blank">ConvertTo-Xml</a></td>
<td style="text-align:center">Creates an XML-based representation of an object.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/debug-runspace?view=powershell-7" target="_blank">Debug-Runspace</a></td>
<td style="text-align:center">Starts an interactive debugging session with a runspace.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/disable-psbreakpoint?view=powershell-7" target="_blank">Disable-PSBreakpoint</a></td>
<td style="text-align:center">Disables the breakpoints in the current console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/disable-runspacedebug?view=powershell-7" target="_blank">Disable-RunspaceDebug</a></td>
<td style="text-align:center">Disables debugging on one or more runspaces, and releases any pending debugger stop.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/enable-psbreakpoint?view=powershell-7" target="_blank">Enable-PSBreakpoint</a></td>
<td style="text-align:center">Enables the breakpoints in the current console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/enable-runspacedebug?view=powershell-7" target="_blank">Enable-RunspaceDebug</a></td>
<td style="text-align:center">Enables debugging on runspaces where any breakpoint is preserved until a debugger is attached.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-alias?view=powershell-7" target="_blank">Export-Alias</a></td>
<td style="text-align:center">Exports information about currently defined aliases to a file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-clixml?view=powershell-7" target="_blank">Export-Clixml</a></td>
<td style="text-align:center">Creates an XML-based representation of an object or objects and stores it in a file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-csv?view=powershell-7" target="_blank">Export-Csv</a></td>
<td style="text-align:center">Converts objects into a series of comma-separated value (CSV) strings and saves the strings to a file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-formatdata?view=powershell-7" target="_blank">Export-FormatData</a></td>
<td style="text-align:center">Saves formatting data from the current session in a formatting file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/export-pssession?view=powershell-7" target="_blank">Export-PSSession</a></td>
<td style="text-align:center">Exports commands from another session and saves them in a PowerShell module.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-custom?view=powershell-7" target="_blank">Format-Custom</a></td>
<td style="text-align:center">Uses a customized view to format the output.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-hex?view=powershell-7" target="_blank">Format-Hex</a></td>
<td style="text-align:center">Displays a file or other input as hexadecimal.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-list?view=powershell-7" target="_blank">Format-List</a></td>
<td style="text-align:center">Formats the output as a list of properties in which each property appears on a new line.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-table?view=powershell-7" target="_blank">Format-Table</a></td>
<td style="text-align:center">Formats the output as a table.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/format-wide?view=powershell-7" target="_blank">Format-Wide</a></td>
<td style="text-align:center">Formats objects as a wide table that displays only one property of each object.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-alias?view=powershell-7" target="_blank">Get-Alias</a></td>
<td style="text-align:center">Gets the aliases for the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-culture?view=powershell-7" target="_blank">Get-Culture</a></td>
<td style="text-align:center">Gets the current culture set in the operating system.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-date?view=powershell-7" target="_blank">Get-Date</a></td>
<td style="text-align:center">Gets the current date and time.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-error?view=powershell-7" target="_blank">Get-Error</a></td>
<td style="text-align:center">Gets and displays the most recent error messages from the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-event?view=powershell-7" target="_blank">Get-Event</a></td>
<td style="text-align:center">Gets the events in the event queue.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-eventsubscriber?view=powershell-7" target="_blank">Get-EventSubscriber</a></td>
<td style="text-align:center">Gets the event subscribers in the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7" target="_blank">Get-FileHash</a></td>
<td style="text-align:center">Computes the hash value for a file by using a specified hash algorithm.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-formatdata?view=powershell-7" target="_blank">Get-FormatData</a></td>
<td style="text-align:center">Gets the formatting data in the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-host?view=powershell-7" target="_blank">Get-Host</a></td>
<td style="text-align:center">Gets an object that represents the current host program.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-markdownoption?view=powershell-7" target="_blank">Get-MarkdownOption</a></td>
<td style="text-align:center">Returns the current colors and styles used for rendering Markdown content in the console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-member?view=powershell-7" target="_blank">Get-Member</a></td>
<td style="text-align:center">Gets the properties and methods of objects.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-psbreakpoint?view=powershell-7" target="_blank">Get-PSBreakpoint</a></td>
<td style="text-align:center">Gets the breakpoints that are set in the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-pscallstack?view=powershell-7" target="_blank">Get-PSCallStack</a></td>
<td style="text-align:center">Displays the current call stack.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-random?view=powershell-7" target="_blank">Get-Random</a></td>
<td style="text-align:center">Gets a random number, or selects objects randomly from a collection.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-runspace?view=powershell-7" target="_blank">Get-Runspace</a></td>
<td style="text-align:center">Gets active runspaces within a PowerShell host process.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-runspacedebug?view=powershell-7" target="_blank">Get-RunspaceDebug</a></td>
<td style="text-align:center">Shows runspace debugging options.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-tracesource?view=powershell-7" target="_blank">Get-TraceSource</a></td>
<td style="text-align:center">Gets PowerShell components that are instrumented for tracing.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-typedata?view=powershell-7" target="_blank">Get-TypeData</a></td>
<td style="text-align:center">Gets the extended type data in the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-uiculture?view=powershell-7" target="_blank">Get-UICulture</a></td>
<td style="text-align:center">Gets the current UI culture settings in the operating system.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-unique?view=powershell-7" target="_blank">Get-Unique</a></td>
<td style="text-align:center">Returns unique items from a sorted list.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-uptime?view=powershell-7" target="_blank">Get-Uptime</a></td>
<td style="text-align:center">Get the TimeSpan since last boot.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-variable?view=powershell-7" target="_blank">Get-Variable</a></td>
<td style="text-align:center">Gets the variables in the current console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/get-verb?view=powershell-7" target="_blank">Get-Verb</a></td>
<td style="text-align:center">Gets approved PowerShell verbs.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/group-object?view=powershell-7" target="_blank">Group-Object</a></td>
<td style="text-align:center">Groups objects that contain the same value for specified properties.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-alias?view=powershell-7" target="_blank">Import-Alias</a></td>
<td style="text-align:center">Imports an alias list from a file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-clixml?view=powershell-7" target="_blank">Import-Clixml</a></td>
<td style="text-align:center">Imports a CLIXML file and creates corresponding objects in PowerShell.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-csv?view=powershell-7" target="_blank">Import-Csv</a></td>
<td style="text-align:center">Creates table-like custom objects from the items in a comma-separated value (CSV) file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-localizeddata?view=powershell-7" target="_blank">Import-LocalizedData</a></td>
<td style="text-align:center">Imports language-specific data into scripts and functions based on the UI culture that is selected for the operating system.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-powershelldatafile?view=powershell-7" target="_blank">Import-PowerShellDataFile</a></td>
<td style="text-align:center">Imports values from a .PSD1 file without invoking its contents.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/import-pssession?view=powershell-7" target="_blank">Import-PSSession</a></td>
<td style="text-align:center">Imports commands from another session into the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-expression?view=powershell-7" target="_blank">Invoke-Expression</a></td>
<td style="text-align:center">Runs commands or expressions on the local computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7" target="_blank">Invoke-RestMethod</a></td>
<td style="text-align:center">Sends an HTTP or HTTPS request to a RESTful web service.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-webrequest?view=powershell-7" target="_blank">Invoke-WebRequest</a></td>
<td style="text-align:center">Gets content from a web page on the internet.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/join-string?view=powershell-7" target="_blank">Join-String</a></td>
<td style="text-align:center">Combines objects from the pipeline into a single string.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/measure-command?view=powershell-7" target="_blank">Measure-Command</a></td>
<td style="text-align:center">Measures the time it takes to run script blocks and cmdlets.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/measure-object?view=powershell-7" target="_blank">Measure-Object</a></td>
<td style="text-align:center">Calculates the numeric properties of objects, and the characters, words, and lines in string objects, such as files of text.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-alias?view=powershell-7" target="_blank">New-Alias</a></td>
<td style="text-align:center">Creates a new alias.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-event?view=powershell-7" target="_blank">New-Event</a></td>
<td style="text-align:center">Creates a new event.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-guid?view=powershell-7" target="_blank">New-Guid</a></td>
<td style="text-align:center">Creates a GUID.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-object?view=powershell-7" target="_blank">New-Object</a></td>
<td style="text-align:center">Creates an instance of a Microsoft .NET Framework or COM object.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-temporaryfile?view=powershell-7" target="_blank">New-TemporaryFile</a></td>
<td style="text-align:center">Creates a temporary file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-timespan?view=powershell-7" target="_blank">New-TimeSpan</a></td>
<td style="text-align:center">Creates a TimeSpan object.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/new-variable?view=powershell-7" target="_blank">New-Variable</a></td>
<td style="text-align:center">Creates a new variable.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-file?view=powershell-7" target="_blank">Out-File</a></td>
<td style="text-align:center">Sends output to a file.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-gridview?view=powershell-7" target="_blank">Out-GridView</a></td>
<td style="text-align:center">Sends output to an interactive table in a separate window.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-printer?view=powershell-7" target="_blank">Out-Printer</a></td>
<td style="text-align:center">Sends output to a printer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-string?view=powershell-7" target="_blank">Out-String</a></td>
<td style="text-align:center">Outputs input objects as a strings.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/read-host?view=powershell-7" target="_blank">Read-Host</a></td>
<td style="text-align:center">Reads a line of input from the console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/register-engineevent?view=powershell-7" target="_blank">Register-EngineEvent</a></td>
<td style="text-align:center">Subscribes to events that are generated by the PowerShell engine and by the New-Event cmdlet.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/register-objectevent?view=powershell-7" target="_blank">Register-ObjectEvent</a></td>
<td style="text-align:center">Subscribes to the events that are generated by a Microsoft .NET Framework object.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-alias?view=powershell-7" target="_blank">Remove-Alias</a></td>
<td style="text-align:center">Remove an alias from the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-event?view=powershell-7" target="_blank">Remove-Event</a></td>
<td style="text-align:center">Deletes events from the event queue.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-psbreakpoint?view=powershell-7" target="_blank">Remove-PSBreakpoint</a></td>
<td style="text-align:center">Deletes breakpoints from the current console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-typedata?view=powershell-7" target="_blank">Remove-TypeData</a></td>
<td style="text-align:center">Deletes extended types from the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/remove-variable?view=powershell-7" target="_blank">Remove-Variable</a></td>
<td style="text-align:center">Deletes a variable and its value.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/select-object?view=powershell-7" target="_blank">Select-Object</a></td>
<td style="text-align:center">Selects objects or object properties.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/select-string?view=powershell-7" target="_blank">Select-String</a></td>
<td style="text-align:center">Finds text in strings and files.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/select-xml?view=powershell-7" target="_blank">Select-Xml</a></td>
<td style="text-align:center">Finds text in an XML string or document.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/send-mailmessage?view=powershell-7" target="_blank">Send-MailMessage</a></td>
<td style="text-align:center">Sends an email message.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-7" target="_blank">Set-Alias</a></td>
<td style="text-align:center">Creates or changes an alias for a cmdlet or other command in the current PowerShell session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-date?view=powershell-7" target="_blank">Set-Date</a></td>
<td style="text-align:center">Changes the system time on the computer to a time that you specify.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-markdownoption?view=powershell-7" target="_blank">Set-MarkdownOption</a></td>
<td style="text-align:center">Sets the colors and styles used for rendering Markdown content in the console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-psbreakpoint?view=powershell-7" target="_blank">Set-PSBreakpoint</a></td>
<td style="text-align:center">Sets a breakpoint on a line, command, or variable.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-tracesource?view=powershell-7" target="_blank">Set-TraceSource</a></td>
<td style="text-align:center">Configures, starts, and stops a trace of PowerShell components.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/set-variable?view=powershell-7" target="_blank">Set-Variable</a></td>
<td style="text-align:center">Sets the value of a variable. Creates the variable if one with the requested name does not exist.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/show-command?view=powershell-7" target="_blank">Show-Command</a></td>
<td style="text-align:center">Displays PowerShell command information in a graphical window.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/show-markdown?view=powershell-7" target="_blank">Show-Markdown</a></td>
<td style="text-align:center">Shows a Markdown file or string in the console in a friendly way using VT100 escape sequences or in a browser using HTML.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/sort-object?view=powershell-7" target="_blank">Sort-Object</a></td>
<td style="text-align:center">Sorts objects by property values.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/start-sleep?view=powershell-7" target="_blank">Start-Sleep</a></td>
<td style="text-align:center">Suspends the activity in a script or session for the specified period of time.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/tee-object?view=powershell-7" target="_blank">Tee-Object</a></td>
<td style="text-align:center">Saves command output in a file or variable and also sends it down the pipeline.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/test-json?view=powershell-7" target="_blank">Test-Json</a></td>
<td style="text-align:center">Tests whether a string is a valid JSON document</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/trace-command?view=powershell-7" target="_blank">Trace-Command</a></td>
<td style="text-align:center">Configures and starts a trace of the specified expression or command.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/unblock-file?view=powershell-7" target="_blank">Unblock-File</a></td>
<td style="text-align:center">Unblocks files that were downloaded from the Internet.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/unregister-event?view=powershell-7" target="_blank">Unregister-Event</a></td>
<td style="text-align:center">Cancels an event subscription.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/update-formatdata?view=powershell-7" target="_blank">Update-FormatData</a></td>
<td style="text-align:center">Updates the formatting data in the current session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/update-list?view=powershell-7" target="_blank">Update-List</a></td>
<td style="text-align:center">Adds items to and removes items from a property value that contains a collection of objects.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/update-typedata?view=powershell-7" target="_blank">Update-TypeData</a></td>
<td style="text-align:center">Updates the extended type data in the session.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/wait-debugger?view=powershell-7" target="_blank">Wait-Debugger</a></td>
<td style="text-align:center">Stops a script in the debugger before running the next statement in the script.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/wait-event?view=powershell-7" target="_blank">Wait-Event</a></td>
<td style="text-align:center">Waits until a particular event is raised before continuing to run.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-debug?view=powershell-7" target="_blank">Write-Debug</a></td>
<td style="text-align:center">Writes a debug message to the console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-error?view=powershell-7" target="_blank">Write-Error</a></td>
<td style="text-align:center">Writes an object to the error stream.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-host?view=powershell-7" target="_blank">Write-Host</a></td>
<td style="text-align:center">Writes customized output to a host.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-information?view=powershell-7" target="_blank">Write-Information</a></td>
<td style="text-align:center">Specifies how PowerShell handles information stream data for a command.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-output?view=powershell-7" target="_blank">Write-Output</a></td>
<td style="text-align:center">Sends the specified objects to the next command in the pipeline. If the command is the last command in the pipeline, the objects are displayed in the console.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-progress?view=powershell-7" target="_blank">Write-Progress</a></td>
<td style="text-align:center">Displays a progress bar within a PowerShell command window.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-verbose?view=powershell-7" target="_blank">Write-Verbose</a></td>
<td style="text-align:center">Writes text to the verbose message stream.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/write-warning?view=powershell-7" target="_blank">Write-Warning</a></td>
<td style="text-align:center">Writes a warning message.</td>
</tr>
</tbody>
</table>
<h2><a href="https://docs.microsoft.com/en-us/powershell/module/appx/?view=win10-ps" target="_blank">Appx</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/add-appxpackage?view=win10-ps" target="_blank">Add-AppxPackage</a></th>
<th style="text-align:center">Adds a signed app package to a user account.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/add-appxvolume?view=win10-ps" target="_blank">Add-AppxVolume</a></td>
<td style="text-align:center">Adds an appx volume to the Package Manager.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/dismount-appxvolume?view=win10-ps" target="_blank">Dismount-AppxVolume</a></td>
<td style="text-align:center">Dismounts an appx volume.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/get-appxdefaultvolume?view=win10-ps" target="_blank">Get-AppxDefaultVolume</a></td>
<td style="text-align:center">Gets the default appx volume.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/get-appxlasterror?view=win10-ps" target="_blank">Get-AppxLastError</a></td>
<td style="text-align:center">Get the last error reported in the app package installation logs.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/get-appxlog?view=win10-ps" target="_blank">Get-AppxLog</a></td>
<td style="text-align:center">Gets an app package installation log.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/get-appxpackage?view=win10-ps" target="_blank">Get-AppxPackage</a></td>
<td style="text-align:center">Gets a list of the app packages that are installed in a user profile.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/get-appxpackagemanifest?view=win10-ps" target="_blank">Get-AppxPackageManifest</a></td>
<td style="text-align:center">Gets the manifest of an app package.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/get-appxvolume?view=win10-ps" target="_blank">Get-AppxVolume</a></td>
<td style="text-align:center">Gets appx volumes for the computer.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/get-nonremovableappspolicy?view=win10-ps" target="_blank">Get-NonRemovableAppsPolicy</a></td>
<td style="text-align:center">Returns the a list of the app packages that are installed and configured as non-removable apps.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/invoke-commandindesktoppackage?view=win10-ps" target="_blank">Invoke-CommandInDesktopPackage</a></td>
<td style="text-align:center">Runs a command in the context of a specified app package.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/mount-appxvolume?view=win10-ps" target="_blank">Mount-AppxVolume</a></td>
<td style="text-align:center">Mounts an appx volume.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/move-appxpackage?view=win10-ps" target="_blank">Move-AppxPackage</a></td>
<td style="text-align:center">Moves a package from its current location to another appx volume.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/remove-appxpackage?view=win10-ps" target="_blank">Remove-AppxPackage</a></td>
<td style="text-align:center">Removes an app package from one or more user accounts.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/remove-appxvolume?view=win10-ps" target="_blank">Remove-AppxVolume</a></td>
<td style="text-align:center">Removes an appx volume.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/set-appxdefaultvolume?view=win10-ps" target="_blank">Set-AppxDefaultVolume</a></td>
<td style="text-align:center">Specifies a default appx volume.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/appx/set-nonremovableappspolicy?view=win10-ps" target="_blank">Set-NonRemovableAppsPolicy</a></td>
<td style="text-align:center">Sets an app packages as non-removable (can not be uninstalled).</td>
</tr>
</tbody>
</table>
<p><strong>Others</strong></p>
<ul>
<li>
<p>PackageManagement</p>
</li>
<li>
<p>PowerShellGet</p>
</li>
<li>
<p>PSReadLine</p>
</li>
</ul>
<p><strong>注释</strong></p>
<ul>
<li>
<p>单行注释：#</p>
</li>
<li>
<p>多行注释：&lt;#	...	#&gt;</p>
</li>
</ul>
<h1>变量</h1>
<p>无需声明义，可直接使用</p>
<p>以 $  符号开头或在{}内，不区分大小写，包含空格和特殊字符</p>
<p>默认值 <a href="https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-null" target="_blank">$null</a></p>
<p><strong>全部变量 </strong>$global: variable = </p>
<p><strong>局部变量 </strong>$variable = </p>
<p>脚本变量$script: variable = </p>
<p>变量赋值或修改</p>
<p>$a = 123</p>
<p>Set-Variable s ”test“</p>
<p>获取变量值</p>
<p>get-variable var   #获取单个变量值</p>
<p>get-variable var*  #获取多个变量值</p>
<p>清空变量值</p>
<p>clear-variable var</p>
<p>remove-variable var</p>
<p><div data-type="math" data-display="inline" data-text="var%3D"></div>null</p>
<p>变量类型</p>
<p>$var.GetType()</p>
<p><strong>自动变量</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">变量</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$$</td>
<td style="text-align:center">会话接收到的最后一行中的最后一个令牌。</td>
</tr>
<tr>
<td style="text-align:center">$?</td>
<td style="text-align:center">最后一个操作的执行状态。如果没有错误，则返回True，否则返回False。</td>
</tr>
<tr>
<td style="text-align:center">$^</td>
<td style="text-align:center">会话接收到的最后一行中的第一个令牌。</td>
</tr>
<tr>
<td style="text-align:center">$_</td>
<td style="text-align:center">此变量充当$PSItem，它在管道对象中包含当前对象。</td>
</tr>
<tr>
<td style="text-align:center">$args</td>
<td style="text-align:center">此变量包含未声明参数的值的数组，这些值传递给脚本，函数或脚本块。</td>
</tr>
<tr>
<td style="text-align:center">$ConsoleFileName</td>
<td style="text-align:center">此变量用于表示控制台文件的路径，该文件最近在会话中使用。</td>
</tr>
<tr>
<td style="text-align:center">$Error</td>
<td style="text-align:center">此变量用于包含代表最新错误的错误对象数组。</td>
</tr>
<tr>
<td style="text-align:center">$Event</td>
<td style="text-align:center">包含PSEventArgs的对象(正在处理的事件的对象)</td>
</tr>
<tr>
<td style="text-align:center">$EventSubscriber</td>
<td style="text-align:center">包含PSEventSubscriber的对象(正在处理的事件的事件订阅者)</td>
</tr>
<tr>
<td style="text-align:center">$EventArgs</td>
<td style="text-align:center">此变量用于包含一个对象，该对象表示第一个事件的参数。</td>
</tr>
<tr>
<td style="text-align:center">$false</td>
<td style="text-align:center">此变量用于表示False。</td>
</tr>
<tr>
<td style="text-align:center">$foreach</td>
<td style="text-align:center">此变量用于包含ForEach循环的枚举数。仅在执行ForEach循环时存在</td>
</tr>
<tr>
<td style="text-align:center">$Home</td>
<td style="text-align:center">此变量用于表示用户主目录的完整路径</td>
</tr>
<tr>
<td style="text-align:center">$input</td>
<td style="text-align:center">包含一个枚举器，枚举传递给该函数的所有输入。仅适用于脚本块和功能。</td>
</tr>
<tr>
<td style="text-align:center">$Host</td>
<td style="text-align:center">此变量包含一个对象，该对象显示Windows PowerShell的当前主机应用程序。</td>
</tr>
<tr>
<td style="text-align:center">$IsLinux</td>
<td style="text-align:center">如果当前会话在Linux操作系统上运行，则此变量值为<div data-type="math" data-display="inline" data-text="True%EF%BC%8C%E5%90%A6%E5%88%99%E4%B8%BA"></div>False。</td>
</tr>
<tr>
<td style="text-align:center">$IsWindows</td>
<td style="text-align:center">如果当前会话在Windows操作系统上运行，则此变量值为<div data-type="math" data-display="inline" data-text="True%EF%BC%8C%E5%90%A6%E5%88%99%E4%B8%BA"></div>False。</td>
</tr>
<tr>
<td style="text-align:center">$IsMacOS</td>
<td style="text-align:center">如果当前会话在MacOS操作系统上运行，则此变量值为<div data-type="math" data-display="inline" data-text="True%EF%BC%8C%E5%90%A6%E5%88%99%E4%B8%BA"></div>False。</td>
</tr>
<tr>
<td style="text-align:center">$null</td>
<td style="text-align:center">此变量用于表示null值或空值。可以使用它来表示脚本和命令中缺少或未定义的值。</td>
</tr>
<tr>
<td style="text-align:center">$PID</td>
<td style="text-align:center">此变量显示进程的PID，该进程正在托管当前PowerShell的会话。</td>
</tr>
<tr>
<td style="text-align:center">$PSItem</td>
<td style="text-align:center">此变量充当$_，它在管道对象中包含当前对象。</td>
</tr>
<tr>
<td style="text-align:center">$PSHome</td>
<td style="text-align:center">此变量表示Windows PowerShell安装目录的完整路径。</td>
</tr>
<tr>
<td style="text-align:center">$PSVersionTable</td>
<td style="text-align:center">表示只读哈希表，显示有关当前会话中运行的PowerShell版本的详细信息。</td>
</tr>
<tr>
<td style="text-align:center">$PWD</td>
<td style="text-align:center">此变量用于包含路径对象，该路径对象显示当前目录的完整路径。</td>
</tr>
<tr>
<td style="text-align:center">$ShellId</td>
<td style="text-align:center">此变量用于表示当前Shell的标识符。</td>
</tr>
</tbody>
</table>
<p><strong>环境变量</strong></p>
<p>所有环境变量的记录保存在env: 虚拟驱动</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">ls env:	查看所有环境变量
$env:windir	
$env:TestVar="This is my environment variable"	创建或更新
del $env:TestVar	

更新生效
[environment]::SetEnvironmentvariable("Path", ";c:\powershellscript", "User")
[environment]::GetEnvironmentvariable("Path", "User")

</code></pre>
<p><strong>强制指定变量类型</strong></p>
<p>[type] $var = value</p>
<p>变量类型</p>
<p>[int] 、[long]、[string] 、[char] 、[bool] 、[byte] 、[double] 、[decimal] 、[single]</p>
<p>[array] ：数组对象</p>
<p>[xml] ：XML对象</p>
<p>[hashtable] ：哈希表对象，类似于一个字典对象</p>
<p></p>
<p><strong>常量</strong></p>
<p>New-Variable num -Value 100 -Force -Option readonly	只读变量，可删除</p>
<p>new-variable num -Value "strong" -Option constant	常量</p>
<p></p>
<h2><a href="https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-string-substitutions" target="_blank">字符串</a></h2>
<p>System.String</p>
<p>方法</p>
<ul>
<li>
<p>SubString()</p>
</li>
<li>
<p>replace()</p>
</li>
</ul>
<p>运算符</p>
<ul>
<li>
<p>+  连接</p>
</li>
<li>
<p>*  重复</p>
</li>
<li>
<p>-f   设置字符串格式</p>
</li>
<li>
<p>-replace   替换运算符</p>
</li>
<li>
<p>-match   正则表达式匹配</p>
</li>
<li>
<p>-like       通配符匹配</p>
</li>
<li>
<p>-Join </p>
</li>
<li>
<p>-Split </p>
</li>
<li>
<p>-Split (&lt;String[]&gt;)</p>
</li>
<li>
<p> -Split [,[,""]]</p>
</li>
<li>
<p> -Split {} [,]</p>
</li>
</ul>
<p>变量替换	在字符串中指定变量</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">$message = "Hello, $first $last."

$message = "Time: $($directory.CreationTime)"

$message = "Date: $(Get-Date)"

</code></pre>
<p>格式字符串</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw"># .NET string format string
[string]::Format('Hello, {0} {1}.',$first,$last)

# PowerShell format string
'Hello, {0} {1}.' -f $first, $last

</code></pre>
<h2><a href="https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-arrays" target="_blank">数组</a></h2>
<ul>
<li>
<p>创建：$arrName = @(value1, value2, value3, ..... ,ValueN)</p>
</li>
<li>
<p>使用：<div data-type="math" data-display="inline" data-text="arrName%5B0%5D%C2%A0%EF%BC%8C"></div>arrName[-n]，<div data-type="math" data-display="inline" data-text="arrName%5Bn..m%5D%EF%BC%8C"></div>arrName.Length</p>
</li>
<li>
<p>添加元素：$arrName += value</p>
</li>
<li>
<p>空数组：$variable_name = @()</p>
</li>
</ul>
<p>属性</p>
<ul>
<li>count</li>
</ul>
<p>对象数组</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">$data = @(
    [pscustomobject]@{FirstName='Kevin';LastName='Marquette'}
    [pscustomobject]@{FirstName='John'; LastName='Doe'}
)

</code></pre>
<p>强类型数组	[int[]] $numbers = 1,2,3</p>
<p>泛型列表	$mylist = [System.Collections.Generic.List[string]]::new()</p>
<p></p>
<h2><a href="https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-hashtable" target="_blank">哈希表</a></h2>
<p>System.Collections.Hashtable</p>
<p>创建[有序]字典：</p>
<p>$variable_name = [ordered] @{ &lt; key1&gt; =  ;  ..... ; &lt; keyN&gt; = ;}</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">$hash = @{ ID = 1; Shape = "Square"; Color = "Blue"}

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

</code></pre>
<h2><a href="https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-pscustomobject" target="_blank">PSCustomObject</a></h2>
<p>创建</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">$myObject = [PSCustomObject]@{
    Name     = 'Kevin'
    Language = 'PowerShell'
    State    = 'Texas'
}

# 访问
$myObject.Name  
$myObject.'Name'

</code></pre>
<p></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw"># 添加属性
$myObject | Add-Member -MemberType NoteProperty -Name 'ID' -Value 'KevinMarquette'

删除属性
$myObject.psobject.properties.remove('ID')

枚举属性名称
$myObject | Get-Member -MemberType NoteProperty | Select -ExpandProperty Name

</code></pre>
<h1>运算符</h1>
<p>算术运算符</p>
<ul>
<li>
<p>+   加、串联</p>
</li>
<li>
<p>-    减</p>
</li>
<li>
<p>*    乘</p>
</li>
<li>
<p>/    除</p>
</li>
<li>
<p>%   模</p>
</li>
</ul>
<p>赋值运算符</p>
<p>=   +=    -=    *=    /=   %=</p>
<p>逻辑运算符</p>
<ul>
<li>
<p>! ， not  非</p>
</li>
<li>
<p>and  且</p>
</li>
<li>
<p>or   或</p>
</li>
</ul>
<p>比较运算符（可在运算符前加上 i 或者 c ，以指定是否区分大小写）</p>
<table>
<thead>
<tr>
<th style="text-align:center">-eq</th>
<th style="text-align:center">等于</th>
<th style="text-align:center">1 -eq 1</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-ne</td>
<td style="text-align:center">不等于</td>
<td style="text-align:center">1 -ne 2</td>
</tr>
<tr>
<td style="text-align:center">-lt</td>
<td style="text-align:center">小于</td>
<td style="text-align:center">1 -lt 2</td>
</tr>
<tr>
<td style="text-align:center">-le</td>
<td style="text-align:center">小于或等于</td>
<td style="text-align:center">1 -le 2</td>
</tr>
<tr>
<td style="text-align:center">-gt</td>
<td style="text-align:center">大于</td>
<td style="text-align:center">2 -gt 1</td>
</tr>
<tr>
<td style="text-align:center">-ge</td>
<td style="text-align:center">大于或等于</td>
<td style="text-align:center">2 -ge 1</td>
</tr>
<tr>
<td style="text-align:center">-Like</td>
<td style="text-align:center">使用 * 通配符进行匹配</td>
<td style="text-align:center">"file.doc" -like "f*.do?"</td>
</tr>
<tr>
<td style="text-align:center">-NotLike</td>
<td style="text-align:center">不使用 * 通配符进行匹配</td>
<td style="text-align:center">"file.doc" -notlike "p*.doc"</td>
</tr>
<tr>
<td style="text-align:center">-Contains</td>
<td style="text-align:center">确定集合中是否包含指定的值</td>
<td style="text-align:center">1,2,3 -contains 1</td>
</tr>
<tr>
<td style="text-align:center">-NotContains</td>
<td style="text-align:center">确定集合是否不包含特定值</td>
<td style="text-align:center">1,2,3 -notcontains 4</td>
</tr>
<tr>
<td style="text-align:center">-Match</td>
<td style="text-align:center">匹配指定的正则表达式</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-NotMatch</td>
<td style="text-align:center">不匹配指定的正则表达式</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-In</td>
<td style="text-align:center">确定指定的值是否在集合中</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-NotIn</td>
<td style="text-align:center">确定指定的值是否不在集合中</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-Replace</td>
<td style="text-align:center">替换指定的值</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<p>调用运算符</p>
<ul>
<li>
<p>&amp;  调用脚本块或者命令/函数的名称</p>
</li>
<li>
<p>::  静态方法调用</p>
</li>
<li></li>
</ul>
<p>其他运算符</p>
<ul>
<li>
<p>, 数组构造函数</p>
</li>
<li>
<p>..  范围运算符</p>
</li>
<li>
<p>-is  类型鉴别器</p>
</li>
<li>
<p>-as   类型转换器</p>
</li>
<li>
<p>-band  二进制与</p>
</li>
<li>
<p>-bor     二进制或</p>
</li>
<li>
<p>-bnot    二进制非</p>
</li>
</ul>
<p>命令解析顺序</p>
<p>别名（alias）-&gt;  函数-&gt;   cmdlet -&gt;   脚本  -&gt;   可执行文件  -&gt;    正常文件</p>
<p></p>
<h1><a href="https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-if" target="_blank">流程控制</a></h1>
<p><strong>条件</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">if ( Test-Path -Path $Path -PathType Leaf )
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

</code></pre>
<pre data-syntax="shell"><code class="lang-shell hljs raw">Switch (&lt;test-expression&gt;)  
    &lt;condition&gt; { Code of Block-1 ; break }  
    default {Code of Block ; break }

</code></pre>
<p><strong>循环</strong></p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">for (&lt;Initialization&gt;; &lt;Condition or Test_expression&gt;; &lt;Repeat&gt;)  
{  
   Statement
}

</code></pre>
<pre data-syntax="shell"><code class="lang-shell hljs raw">Foreach($&lt;item&gt; in $&lt;collection&gt;)  
{  
     Statement
}

</code></pre>
<pre data-syntax="shell"><code class="lang-shell hljs raw">while(test_expression)  
{  
     Statement
}

Do{
    Statement
} while(test_expression)

do ... until 同 do ... while

</code></pre>
<p>控制</p>
<ul>
<li>
<p>break</p>
</li>
<li>
<p>continue</p>
</li>
</ul>
<h1>函数</h1>
<pre data-syntax="shell"><code class="lang-shell hljs raw">function &lt;function-name&gt;  
{  
    statement
    [return]
}

function [&lt;scope:&gt;]&lt;name&gt; [([type]$parameter1[,[type]$parameter2])]  
{  
  param([type]$parameter1 [,[type]$parameter2])  
  dynamicparam {&lt;statement list&gt;}  
  begin {&lt;statement list&gt;}  
  process {&lt;statement list&gt;}  
  end {&lt;statement list&gt;}  
}

</code></pre>
<p></p>
<h1><a href="https://docs.microsoft.com/zh-cn/powershell/scripting/learn/deep-dives/everything-about-exceptions" target="_blank">异常</a></h1>
<p></p>
<p><strong>抛出异常：Throw  字符串|异常|ErrorRecord</strong></p>
<p></p>
<p>捕获异常</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">try   
{  
    Statement
}
catch [ [&lt;error type&gt;] *]   
{  
    Statement
}
finally  
{  
    Statement
}

</code></pre>
<h1>Script</h1>
<p><a href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1" target="_blank">执行策略</a></p>
<p>Powershell默认为禁止脚本执行</p>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-credential?view=powershell-7.1" target="_blank">Get-Credential</a></th>
<th style="text-align:center">Gets a credential object based on a user name and password.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.1" target="_blank">Set-ExecutionPolicy</a></td>
<td style="text-align:center">Sets the PowerShell execution policies for Windows computers.</td>
</tr>
</tbody>
</table>
<pre data-syntax="shell"><code class="lang-shell hljs raw">Set-ExecutionPolicy
   [-ExecutionPolicy] {Unrestricted | RemoteSigned | AllSigned | Restricted | Default | Bypass | Undefined}
   [[-Scope] {Process | CurrentUser | LocalMachine | UserPolicy | MachinePolicy}]
   [-Force]
   [-WhatIf]
   [-Confirm]
   [&lt;CommonParameters&gt;]

</code></pre>
<pre data-syntax="shell"><code class="lang-shell hljs raw"># 虚拟机开关
$op = Read-Host "Open or close VM Please input y or n："

if($op -eq 'y'){
	start-service vmms
	start-sleep -s 3
	get-vm | start-vm
	'VM is running'
} 
else{
	get-vm | stop-vm
	start-sleep -s 5
	stop-service vmms
	'VM had been cloesd'
}

</code></pre>
<p><a href="https://www.pstips.net/powershell-online-tutorials" target="_blank">https://www.pstips.net/powershell-online-tutorials</a></p>
