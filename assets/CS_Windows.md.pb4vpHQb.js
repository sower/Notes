import{_ as s,o as n,c as a,R as l}from"./chunks/framework.RQC-XgH8.js";const e="/Notes/assets/1643807406506-ef1f52e5-780c-409f-9afe-478db49fccce.Y_qC3CbP.png",p="/Notes/assets/1643807406716-8214f5e1-d83c-4c49-baf3-8865ee1b3b16.2FC_9jM7.png",o="/Notes/assets/1643807406796-a3f8a2f7-2af2-4b7e-9a40-ae9e26f58fdd.DNkiK1zu.png",A=JSON.parse('{"title":"Windows","description":"","frontmatter":{"title":"Windows","created_at":"2022-02-01T05:44:40.000Z","updated_at":"2023-11-05T15:46:02.000Z","word_count":1537},"headers":[],"relativePath":"CS/Windows.md","filePath":"CS/Windows.md"}'),r={name:"CS/Windows.md"},t=l(`<p><strong>Microsoft Windows</strong>（视窗操作系统）是<a href="https://zh.wikipedia.org/wiki/%E5%BE%AE%E8%BB%9F%E5%85%AC%E5%8F%B8" target="_blank" rel="noreferrer">微软公司</a>以图形用户界面为主推出的一系列专有商业软件操作系统。</p><h2 id="pc" tabindex="-1">PC <a class="header-anchor" href="#pc" aria-label="Permalink to &quot;PC&quot;">​</a></h2><p><strong>个人电脑</strong>（Personal Computer）是在大小、性能以及价位等多个方面适合于个人使用，并由最终用户直接操控的<a href="https://zh.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E8%A8%88%E7%AE%97%E6%A9%9F" target="_blank" rel="noreferrer">计算机</a>的统称。</p><h3 id="特殊地址" tabindex="-1">特殊地址 <a class="header-anchor" href="#特殊地址" aria-label="Permalink to &quot;特殊地址&quot;">​</a></h3><p><code>**C:\\Windows\\system32\\drivers\\etc**</code></p><ul><li>hosts：以表的形式存储了主机名和IP地址的映射关系 <ul><li>减少对DNS服务器的查询次数以加快访问网站的速度。</li><li>将已知的广告服务器重定向到无广告的机器（127.0.0.1）以过滤广告。</li><li>拦截一些恶意网站的请求，从而防止访问欺诈网站、感染病毒或恶意软件。</li></ul></li><li>services：记录了网络服务名、端口号、协议、别名</li></ul><p><strong>用户相关目录</strong></p><table><thead><tr><th><strong>APPDATA</strong></th><th><code>C:\\\\Users\\\\&lt;user&gt;\\\\AppData\\\\Roaming</code></th></tr></thead><tbody><tr><td><strong>DriverData</strong></td><td>C:\\Windows\\System32\\Drivers\\DriverData</td></tr><tr><td><strong>HOMEPATH</strong></td><td><code>\\\\Users\\\\&lt;user&gt;</code></td></tr><tr><td><strong>LOCALAPPDATA</strong></td><td><code>C:\\\\Users\\\\&lt;user&gt;\\\\AppData\\\\Local</code></td></tr><tr><td><strong>TEMP</strong></td><td><code>C:\\\\Users\\\\&lt;user&gt;\\\\AppData\\\\Local\\\\Temp</code></td></tr></tbody></table><p><strong>开机自启目录</strong></p><ul><li>特定用户：<code>C:\\Users\\&lt;User&gt;\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</code></li><li>所有用户：<code>C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp</code></li></ul><p><strong>任务栏</strong>：<code>C:\\Users\\&lt;User&gt;\\AppData\\Roaming\\Microsoft\\Internet Explorer\\Quick Launch\\User Pinned\\TaskBar</code></p><h2 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-label="Permalink to &quot;日志&quot;">​</a></h2><p>查看日志 eventvwr <br> 伪造日志 eventcreate <br> 日志路径 %SystemRoot%\\System32\\Winevt\\Logs</p><ul><li>系统日志 System.evtx</li><li>安全日志 Security.evtx</li><li>应用程序日志 Application.evtx</li></ul><h2 id="microsoft-windows组件" tabindex="-1"><a href="https://zh.wikipedia.org/wiki/Windows%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer">Microsoft Windows组件</a> <a class="header-anchor" href="#microsoft-windows组件" aria-label="Permalink to &quot;[Microsoft Windows组件](https://zh.wikipedia.org/wiki/Windows%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8)&quot;">​</a></h2><h2 id="uwp" tabindex="-1">UWP <a class="header-anchor" href="#uwp" aria-label="Permalink to &quot;UWP&quot;">​</a></h2><p><strong>通用Windows平台</strong>（Universal Windows Platform）是<a href="https://zh.wikipedia.org/wiki/%E5%BE%AE%E8%BD%AF" target="_blank" rel="noreferrer">微软公司</a>创建并在Windows 10中首次引入的一个同性质应用程序架构平台。目的是帮助发展Metro样式的应用程序，便于软件可以在Windows 10和Windows 10 Mobile上运行且无需重新编写。它支持使用C++、C#、VB.NET或XAML开发的Windows应用程序。</p><p>运行在App Container 的虚拟沙箱环境中，其安全性及纯净度远胜于传统的 EXE 应用。由于运行环境和网络与实际系统是隔离的，默认是不走代理的（沙盒的网络隔离特性：禁止APP访问localhost ），所以只有类似于VPN这种全局代理才能对UWP应用生效，而系统代理则无法生效。</p><p>UWP SID位置：HKEY_CURRENT_USER\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppContainer\\Mappings</p><h3 id="代理uwp应用" tabindex="-1">代理UWP应用 <a class="header-anchor" href="#代理uwp应用" aria-label="Permalink to &quot;代理UWP应用&quot;">​</a></h3><p><strong>CheckNetIsolation LoopbackExempt [operation] [-n=] [-p=]</strong> <br> 控制 AppContainer 和程序包系列环回免除，以便于应用程序开发。 <br> 操作列表: <br> -a - 向环回免除列表中添加 AppContainer 或程序包系列。 <br> -d - 从环回免除列表中删除 AppContainer 或程序包系列。 <br> -c - 清除环回免除的 AppContainer 和程序包系列的列表。 <br> -s - 显示环回免除的 AppContainer 和程序包系列的列表。</p><p>参数列表: <br> -n= - AppContainer 名称或程序包系列名称。 <br> -p= - AppContainer 或程序包系列安全标识符(SID)。</p><p><strong>常见</strong></p><blockquote><p>Name: microsoft.windows.authhost.a_8wekyb3d8bbwe SID: S-1-15-2-2750798217-1343590035-1234819260-1030354384-3318145141-3720257911-3461195215 Name: microsoft.windowscommunicationsapps_8wekyb3d8bbwe SID: S-1-15-2-2551677095-2355568638-4209445997-2436930744-3692183382-387691378-1866284433 Name: microsoft.microsoftedge_8wekyb3d8bbwe SID: S-1-15-2-3624051433-2125758914-1423191267-1740899205-1073925389-3782572162-737981194</p></blockquote><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">import</span><span style="color:#98C379;"> os</span></span>
<span class="line"><span style="color:#61AFEF;">import</span><span style="color:#98C379;"> winreg</span><span style="color:#98C379;"> as</span><span style="color:#98C379;"> wr</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">BASE_PATH</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> r&quot;Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppContainer\\Mappings&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 获得所有程序的 SID</span></span>
<span class="line"><span style="color:#61AFEF;">def</span><span style="color:#98C379;"> get_apps_sid</span><span style="color:#ABB2BF;">()</span><span style="color:#98C379;">:</span></span>
<span class="line"><span style="color:#61AFEF;">    sid_list</span><span style="color:#98C379;"> =</span><span style="color:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#61AFEF;">    with</span><span style="color:#98C379;"> wr.OpenKeyEx</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">wr.HKEY_CURRENT_USER,</span><span style="color:#98C379;"> BASE_PATH</span><span style="color:#ABB2BF;">) </span><span style="color:#98C379;">as</span><span style="color:#98C379;"> key:</span></span>
<span class="line"><span style="color:#61AFEF;">        max_index</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> wr.QueryInfoKey</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">key</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">[</span><span style="color:#D19A66;">0</span><span style="color:#98C379;">]</span></span>
<span class="line"><span style="color:#56B6C2;">        print</span><span style="color:#ABB2BF;">(key)</span></span>
<span class="line"><span style="color:#C678DD;">        for</span><span style="color:#E06C75;"> i</span><span style="color:#C678DD;"> in</span><span style="color:#ABB2BF;"> range(</span><span style="color:#61AFEF;">max_index</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#61AFEF;">            sid_list.append(wr.EnumKey(key,</span><span style="color:#98C379;"> i</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#C678DD;">    return</span><span style="color:#98C379;"> sid_list</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 开启UWP应用使用代理</span></span>
<span class="line"><span style="color:#61AFEF;">def</span><span style="color:#98C379;"> enable_all_uwp_net</span><span style="color:#ABB2BF;">()</span><span style="color:#98C379;">:</span></span>
<span class="line"><span style="color:#61AFEF;">    sid_list</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> get_apps_sid</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#E06C75;"> sid</span><span style="color:#C678DD;"> in</span><span style="color:#ABB2BF;"> sid_list:</span></span>
<span class="line"><span style="color:#61AFEF;">        os.system(</span><span style="color:#61AFEF;">&#39;CheckNetIsolation.exe loopbackexempt -a -p=&#39;</span><span style="color:#98C379;"> +</span><span style="color:#98C379;"> sid</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 关闭UWP应用使用代理</span></span>
<span class="line"><span style="color:#61AFEF;">def</span><span style="color:#98C379;"> disable_all_uwp_net</span><span style="color:#ABB2BF;">()</span><span style="color:#98C379;">:</span></span>
<span class="line"><span style="color:#61AFEF;">    sid_list</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> get_apps_sid</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#E06C75;"> sid</span><span style="color:#C678DD;"> in</span><span style="color:#ABB2BF;"> sid_list:</span></span>
<span class="line"><span style="color:#61AFEF;">        os.system(</span><span style="color:#61AFEF;">&#39;CheckNetIsolation.exe loopbackexempt -d -p=&#39;</span><span style="color:#98C379;"> +</span><span style="color:#98C379;"> sid</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="重装系统" tabindex="-1">重装系统 <a class="header-anchor" href="#重装系统" aria-label="Permalink to &quot;重装系统&quot;">​</a></h2><p>工具：<a href="https://www.wepe.com.cn/" target="_blank" rel="noreferrer">WePE</a> <br> U盘：&gt;8G</p><ol><li>将WePE安装到U盘（U盘数据会被清空），勾选DOS</li><li>将系统镜像文件（.ISO）复制到U盘</li><li>重启电脑，进入BIOS</li><li>以U盘的方式进入PE</li><li>如有必要可对C盘重新分区</li><li>找到ISO文件，进行装载，完成后自动重启</li></ol><p><strong>激活</strong> <br> 数字永久激活：自从Windows8以来，微软将OEM激活方式升级为OA 3.0，激活机制是将OEM密钥写入BIOS中，并根据硬件信息生成一组Hardware Hash（硬件哈希值），重新安装系统时无需再次输入密钥，安装后会自动激活。</p><h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><p>禁用摄像头 Win + X --&gt; 设备管理 <br> 屏幕显示百分比，壁纸，锁屏，休眠时间，电池管理，输入法设置</p><p>关闭快速访问 Windows资源管理器，点击选择“查看”选项</p><p>迁移或隐藏基础文件夹 <br> <img src="`+e+`" alt=""></p><p>配置系统变量 <br> 替换记事本 <br> 应用开机自启</p><p>diskmgmt.msc <br> EFI系统分区：基于UEFI（统一可扩展固件接口）电脑的硬盘上的分区，该分区包含了引导程序、固件以及在引导时需要使用的设备驱动程序文件。</p><h3 id="默认应用" tabindex="-1">默认应用 <a class="header-anchor" href="#默认应用" aria-label="Permalink to &quot;默认应用&quot;">​</a></h3><p><a href="https://docs.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/what-is-dism" target="_blank" rel="noreferrer">DISM</a></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">导出：</span></span>
<span class="line"><span style="color:#61AFEF;">Dism.exe</span><span style="color:#98C379;"> /Online</span><span style="color:#98C379;"> /Export-DefaultAppAssociations:C:</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">ppAssoc.xml</span></span>
<span class="line"><span style="color:#61AFEF;">导入恢复：</span></span>
<span class="line"><span style="color:#61AFEF;">Dism.exe</span><span style="color:#98C379;"> /Online</span><span style="color:#98C379;"> /Import-DefaultAppAssociations:C:</span><span style="color:#56B6C2;">\\A</span><span style="color:#98C379;">ppAssoc.xml</span></span>
<span class="line"><span style="color:#61AFEF;">显示</span></span>
<span class="line"><span style="color:#61AFEF;">Dism.exe</span><span style="color:#98C379;"> /Online</span><span style="color:#98C379;"> /Get-DefaultAppAssociations</span></span>
<span class="line"><span style="color:#61AFEF;">重置应用程序关联配置</span></span>
<span class="line"><span style="color:#61AFEF;">Dism.exe</span><span style="color:#98C379;"> /Online</span><span style="color:#98C379;"> /Remove-DefaultAppAssociations</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><a href="https://blog.csdn.net/hatmen2/article/details/84931373" target="_blank" rel="noreferrer">https://blog.csdn.net/hatmen2/article/details/84931373</a></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">param($extensioname,</span><span style="color:#E06C75;"> $vsico</span><span style="color:#98C379;">,</span><span style="color:#E06C75;"> $vspath</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> RemoveItem</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;">    param</span><span style="color:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#E06C75;">        $item</span></span>
<span class="line"><span style="color:#ABB2BF;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">Test-Path</span><span style="color:#E06C75;"> $item</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#61AFEF;">        Write-Host</span><span style="color:#98C379;"> &quot;即将删除&quot;</span><span style="color:#E06C75;">$item</span></span>
<span class="line"><span style="color:#61AFEF;">        Remove-Item</span><span style="color:#E06C75;"> $item</span><span style="color:#D19A66;"> -Recurse</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (!</span><span style="color:#E06C75;">$extensioname</span><span style="color:#ABB2BF;"> -or !</span><span style="color:#E06C75;">$vsico</span><span style="color:#ABB2BF;"> -or !</span><span style="color:#E06C75;">$vspath</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#61AFEF;">    throw</span><span style="color:#98C379;"> &quot;参数不合理&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">    Pause</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$fullExtension</span><span style="color:#ABB2BF;"> = -Join (</span><span style="color:#61AFEF;">&quot;.&quot;</span><span style="color:#61AFEF;">,</span><span style="color:#E06C75;"> $extensioname</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E06C75;">$key</span><span style="color:#ABB2BF;"> = </span><span style="color:#98C379;">&quot;vscode_&quot;</span><span style="color:#ABB2BF;"> + </span><span style="color:#E06C75;">$extensioname</span></span>
<span class="line"><span style="color:#E06C75;">$fullExtensionPath</span><span style="color:#ABB2BF;"> = Join-Path -Path HKLM:</span><span style="color:#56B6C2;">\\S</span><span style="color:#ABB2BF;">OFTWARE</span><span style="color:#56B6C2;">\\C</span><span style="color:#ABB2BF;">lasses -ChildPath </span><span style="color:#E06C75;">$fullExtension</span></span>
<span class="line"><span style="color:#E06C75;">$keyPath</span><span style="color:#ABB2BF;"> = Join-Path -Path HKLM:</span><span style="color:#56B6C2;">\\S</span><span style="color:#ABB2BF;">OFTWARE</span><span style="color:#56B6C2;">\\C</span><span style="color:#ABB2BF;">lasses -ChildPath </span><span style="color:#E06C75;">$key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">RemoveItem</span><span style="color:#D19A66;"> -item</span><span style="color:#E06C75;"> $fullExtensionPath</span></span>
<span class="line"><span style="color:#61AFEF;">RemoveItem</span><span style="color:#D19A66;"> -item</span><span style="color:#E06C75;"> $keyPath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建.css HKLM:\\SOFTWARE\\Classes\\.css</span></span>
<span class="line"><span style="color:#61AFEF;">New-Item</span><span style="color:#D19A66;"> -ErrorAction</span><span style="color:#98C379;"> Stop</span><span style="color:#D19A66;"> -itemType</span><span style="color:#98C379;"> String</span><span style="color:#E06C75;"> $fullExtensionPath</span><span style="color:#D19A66;"> -value</span><span style="color:#E06C75;"> $key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建vscode_css HKLM:\\SOFTWARE\\Classes\\vscode_css</span></span>
<span class="line"><span style="color:#61AFEF;">New-Item</span><span style="color:#D19A66;"> -ErrorAction</span><span style="color:#98C379;"> Stop</span><span style="color:#D19A66;"> -itemType</span><span style="color:#98C379;"> String</span><span style="color:#E06C75;"> $keyPath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建vscode_css子项DefaultIcon HKLM:\\SOFTWARE\\Classes\\vscode_css\\DefaultIcon</span></span>
<span class="line"><span style="color:#E06C75;">$iconPath</span><span style="color:#ABB2BF;"> = Join-Path -Path </span><span style="color:#E06C75;">$keyPath</span><span style="color:#ABB2BF;"> -ChildPath </span><span style="color:#98C379;">&quot;DefaultIcon&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">New-Item</span><span style="color:#D19A66;"> -ErrorAction</span><span style="color:#98C379;"> Stop</span><span style="color:#D19A66;"> -itemType</span><span style="color:#98C379;"> String</span><span style="color:#E06C75;"> $iconPath</span><span style="color:#D19A66;"> -Value</span><span style="color:#E06C75;">  $vsico</span><span style="color:#7F848E;font-style:italic;"> # &quot;C:\\Program Files\\Microsoft VS Code\\resources\\app\\resources\\win32\\css.ico&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建vscode_css子项shell HKLM:\\SOFTWARE\\Classes\\vscode_css\\shell</span></span>
<span class="line"><span style="color:#E06C75;">$shellPath</span><span style="color:#ABB2BF;"> = Join-Path -Path </span><span style="color:#E06C75;">$keyPath</span><span style="color:#ABB2BF;"> -ChildPath </span><span style="color:#98C379;">&quot;shell&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">New-Item</span><span style="color:#D19A66;"> -ErrorAction</span><span style="color:#98C379;"> Stop</span><span style="color:#D19A66;"> -itemType</span><span style="color:#98C379;"> String</span><span style="color:#E06C75;"> $shellPath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建shell子项open HKLM:\\SOFTWARE\\Classes\\vscode_css\\open</span></span>
<span class="line"><span style="color:#E06C75;">$openPath</span><span style="color:#ABB2BF;"> = Join-Path -Path </span><span style="color:#E06C75;">$shellPath</span><span style="color:#ABB2BF;"> -ChildPath </span><span style="color:#98C379;">&quot;open&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">New-Item</span><span style="color:#D19A66;"> -ErrorAction</span><span style="color:#98C379;"> Stop</span><span style="color:#D19A66;"> -itemType</span><span style="color:#98C379;"> String</span><span style="color:#E06C75;"> $openPath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 新建open子项command HKLM:\\SOFTWARE\\Classes\\vscode_css\\open\\command</span></span>
<span class="line"><span style="color:#E06C75;">$cmdPath</span><span style="color:#ABB2BF;"> = Join-Path -Path </span><span style="color:#E06C75;">$openPath</span><span style="color:#ABB2BF;"> -ChildPath </span><span style="color:#98C379;">&quot;command&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">New-Item</span><span style="color:#D19A66;"> -ErrorAction</span><span style="color:#98C379;"> Stop</span><span style="color:#D19A66;"> -itemType</span><span style="color:#98C379;"> String</span><span style="color:#E06C75;"> $cmdPath</span><span style="color:#D19A66;"> -Value</span><span style="color:#E06C75;"> $vspath</span><span style="color:#7F848E;font-style:italic;"> # &#39;&quot;C:\\Program Files\\Microsoft VS Code\\Code.exe&quot; &quot;%1&quot;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FileExts\\.css</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FileExts\\.css\\OpenWithList</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FileExts\\.css\\OpenWithProgids</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FileExts\\.css\\UserChoice</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Stop-process</span><span style="color:#D19A66;"> -name</span><span style="color:#98C379;"> explorer</span><span style="color:#D19A66;"> -force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># https://blog.csdn.net/a302549450/article/details/84308175</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># .\\Change_default_programs.ps1 -extensioname &quot;ps1&quot; -vsico &quot;C:\\Program Files\\Microsoft VS Code\\resources\\app\\resources\\win32\\powershell.ico&quot; -vspath &#39;&quot;C:\\Program Files\\Microsoft VS Code\\Code.exe&quot; &quot;%1&quot;&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h4 id="更改语言" tabindex="-1">更改语言 <a class="header-anchor" href="#更改语言" aria-label="Permalink to &quot;更改语言&quot;">​</a></h4><p>家庭版单语言 --&gt; 家庭版 重启 <br> <img src="`+p+`" alt=""></p><h4 id="查询windows序列号" tabindex="-1">查询Windows序列号 <a class="header-anchor" href="#查询windows序列号" aria-label="Permalink to &quot;查询Windows序列号&quot;">​</a></h4><p><strong>CLI</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 只在许可证类型为 OEM 时才有效</span></span>
<span class="line"><span style="color:#61AFEF;">wmic</span><span style="color:#98C379;"> path</span><span style="color:#98C379;"> softwarelicensingservice</span><span style="color:#98C379;"> get</span><span style="color:#98C379;"> OA3xOriginalProductKey</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>注册表 —— 备份产品密钥</strong> <br> HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform <br> BackupProductKeyDefault</p><h4 id="彻底删除" tabindex="-1">彻底删除 <a class="header-anchor" href="#彻底删除" aria-label="Permalink to &quot;彻底删除&quot;">​</a></h4><ul><li>多次覆写文件 cipher /w:</li><li>格式化某磁盘count次 format D: /P:</li></ul><h4 id="关闭windows安全中心" tabindex="-1">关闭windows安全中心 <a class="header-anchor" href="#关闭windows安全中心" aria-label="Permalink to &quot;关闭windows安全中心&quot;">​</a></h4><p><strong>永久关闭</strong></p><ol><li>打开 gpedit.msc —— 本地组策略编辑器</li><li>计算机配置 &gt; 管理模板 &gt; Windows组件 &gt; Microsoft Defender防病毒</li><li>打开 关闭Microsoft Defender防病毒，选择启用，并保持</li></ol><p><img src="`+o+'" alt=""></p>',53),c=[t];function i(y,b,d,u,m,C){return n(),a("div",null,c)}const E=s(r,[["render",i]]);export{A as __pageData,E as default};
