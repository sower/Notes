<h1><a href="https://docs.microsoft.com/en-us/windows/win32/sysinfo/registry" target="_blank">注册表（Registry）</a></h1>
<p><a href="https://zh.wikipedia.org/wiki/Microsoft_Windows" target="_blank">Microsoft Windows</a>操作系统和其应用程序中的一个重要的层次型数据库，用于存储系统和应用程序的设置信息。</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807407595-929cdb27-5f38-43eb-93b4-582aad457566.png" alt class="align-none" /></p>
<p><strong>5个根键（HKEY）</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">HKEY_CLASSES_ROOT</td>
<td style="text-align:center">存储Windows可识别的文件类型的详细列表，以及相关联的程序。</td>
</tr>
<tr>
<td style="text-align:center">HKEY_CURRENT_USER</td>
<td style="text-align:center">存储当前用户设置的信息。</td>
</tr>
<tr>
<td style="text-align:center">HKEY_LOCAL_MACHINE</td>
<td style="text-align:center">包括安装在计算机上的硬件和软件的信息。</td>
</tr>
<tr>
<td style="text-align:center">HKEY_USERS</td>
<td style="text-align:center">包含使用计算机的用户的信息。</td>
</tr>
<tr>
<td style="text-align:center">HKEY_CURRENT_CONFIG</td>
<td style="text-align:center">这个分支包含计算机当前的硬件配置信息。</td>
</tr>
</tbody>
</table>
<p><strong>常见数据类型</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">显示类型</th>
<th style="text-align:center">数据类型</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">REG_SZ</td>
<td style="text-align:center"><a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E7%AC%A6%E4%B8%B2" target="_blank">字符串</a></td>
<td style="text-align:center">文本字符串</td>
</tr>
<tr>
<td style="text-align:center">REG_BINARY</td>
<td style="text-align:center">二进制数</td>
<td style="text-align:center">不定长度的二进制值，以十六进制显示</td>
</tr>
<tr>
<td style="text-align:center">REG_DWORD</td>
<td style="text-align:center">双字</td>
<td style="text-align:center">一个 32 位的二进制值，显示为 8 位的十六进制值</td>
</tr>
<tr>
<td style="text-align:center">REG_MULTI_SZ</td>
<td style="text-align:center">多字符串</td>
<td style="text-align:center">含有多个文本值的字符串，此名来源于字符串间用 nul 分隔、结尾两个 nul</td>
</tr>
<tr>
<td style="text-align:center">REG_EXPAND_SZ</td>
<td style="text-align:center">可扩展字符串</td>
<td style="text-align:center">含有环境变量的字符串</td>
</tr>
</tbody>
</table>
<p>Value Types</p>
<table>
<thead>
<tr>
<th style="text-align:center">Value</th>
<th style="text-align:center">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">REG_BINARY</td>
<td style="text-align:center">Binary data in any form.</td>
</tr>
<tr>
<td style="text-align:center">REG_DWORD</td>
<td style="text-align:center">A 32-bit number.</td>
</tr>
<tr>
<td style="text-align:center">REG_DWORD_LITTLE_ENDIAN</td>
<td style="text-align:center">A 32-bit number in little-endian format.</td>
</tr>
<tr>
<td style="text-align:center">REG_DWORD_BIG_ENDIAN</td>
<td style="text-align:center">A 32-bit number in big-endian format.</td>
</tr>
<tr>
<td style="text-align:center">REG_EXPAND_SZ</td>
<td style="text-align:center">A null-terminated string that contains unexpanded references to environment variables (for example, "%PATH%").</td>
</tr>
<tr>
<td style="text-align:center">REG_LINK</td>
<td style="text-align:center">A null-terminated Unicode string that contains the target path of a symbolic link.</td>
</tr>
<tr>
<td style="text-align:center">REG_MULTI_SZ</td>
<td style="text-align:center">A sequence of null-terminated strings, terminated by an empty string (\0).</td>
</tr>
<tr>
<td style="text-align:center">REG_NONE</td>
<td style="text-align:center">No defined value type.</td>
</tr>
<tr>
<td style="text-align:center">REG_QWORD</td>
<td style="text-align:center">A 64-bit number.</td>
</tr>
<tr>
<td style="text-align:center">REG_QWORD_LITTLE_ENDIAN</td>
<td style="text-align:center">A 64-bit number in little-endian format.</td>
</tr>
<tr>
<td style="text-align:center">REG_SZ</td>
<td style="text-align:center">A null-terminated string.</td>
</tr>
</tbody>
</table>
<p>Access Rights</p>
<h2>注册表基础操作</h2>
<h3>- 打开方法</h3>
<p><strong>注册表的路径："C:\WINDOWS\regedit.exe"</strong></p>
<ul>
<li>
<p>直接在资源管理器地址栏输入路径，双击打开；</p>
</li>
<li>
<p>打开开始菜单，找到Windows 管理工具，点击向下可找到注册表编辑器，点击打开；</p>
</li>
<li>
<p>打开运行对话框（ 快捷键 Win + R ），键入 regedit 即可打开；</p>
</li>
<li>
<p>在搜索栏输入注册表（ 快捷键 Win + S / Q ），如下图。</p>
</li>
</ul>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807407679-efcf381a-a0c0-4e5d-a6f7-e2cfcc9dec17.png" alt class="align-none" /></p>
<p><strong>- 备份与还原</strong>：在注册表编辑器界面，点击左上角的文件，有 导入 与 导出 ，即对应 还原 与 备份 。</p>
<p><strong>- 精准定位</strong>：选择你要找的根键，右击选择查找（快捷键 Ctrl + F）</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807407764-f5bd3c59-fb55-4803-a218-1a1f1fd1ec01.png" alt class="align-none" /></p>
<h2>组策略编辑器</h2>
<blockquote>
<p>组策略编辑器是Windows核心的功能之一，具有非常实用的许多功能，如可以修改Windows的桌面、开始菜单、登录方式、组件、网络及IE浏览器等。组策略设置的实质是修改注册表中的配置，它使用了更完善的管理组织方法，可以对各种对象中的设置进行管理和配置，远比手工修改注册表方便灵活。</p>
</blockquote>
<p>组策略编辑器是介于控制面板和注册表之间的一种修改系统、设置程序的工具。平时像一些常用的系统、外观、网络设置等我们可通过控制面板修改，但通过控制面板能修改的东西太少；因此，一些用户使用修改注册表的方法来设置，但注册表涉及内容又太多，修改不太方便。而组策略正好介于二者之间，涉及的内容比控制面板中的多，安全性和控制面板一样非常高，且条理性、可操作性也比注册表强。</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807407854-3d458faf-b2ce-4d7d-b313-fa357fc45cc6.png" alt class="align-none" /></p>
<p>打开方式同注册表，在运行对话框，键入 <strong>gpedit.msc </strong>并回车，或在搜索栏输入组策略点击打开。</p>
<p><strong>PS：</strong>Win10家庭版中并不包含组策略，只有更高级的专业版、企业版、教育版等才有。但网上也有一些办法可以不用升级的Win10家庭版也能使用组策略编辑器功能，请自寻搜索。</p>
<h2>一些个性化修改</h2>
<p>通过修改注册表，你可做很多事，下面简单介绍几种，以此为例。</p>
<p><strong>PS:修改注册表有风险，如果对注册表不是很熟悉强烈建议在修改前备份注册表，或者创建系统还原点，避免因误操作导致的未知问题。</strong></p>
<h3>- 取消锁屏</h3>
<p>每次开机后，电脑先显示锁屏界面，必须通过触摸、键盘或者用鼠标拖动的方式进入登入界面，而锁屏界面是可跳过的。</p>
<p></p>
<ul>
<li>注册表法（适用所有Win10版本，主要针对没有组策略编辑器的Win10家庭版）</li>
</ul>
<ol>
<li>
<p>打开注册表，依次定位到\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows；</p>
</li>
<li>
<p>鼠标右键单击Windows项，选择新建项，将其命名为Personalization；</p>
</li>
<li>
<p>建好后定位到Personalization处，在右边窗口空白处点击鼠标右键，选择新建-DWORD(32位)值，并将其命名为NoLockScreen；</p>
</li>
<li>
<p>双击该值打开编辑对话框，将数值数据更改为1，保存退出注册表编辑器即可。</p>
</li>
<li>
<p>如果想要保留锁屏，将数值数据更改为0。</p>
</li>
</ol>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807407939-8eb7cf66-9d38-4601-9eb2-21f5f022ee76.png" alt class="align-none" /></p>
<ul>
<li>组策略法（适用有组策略编辑器的Win10专业版/企业版/教育版）</li>
</ul>
<ol>
<li>
<p>打开组策略，依次展开计算机配置 - 管理模板 - 控制面板，定位到 个性化 并双击，然后在右边栏中找到 不显示锁屏 项并双击，打开详细的配置窗口。默认的为未配置，选择 已启用 即可。</p>
</li>
<li>
<p>如果想要保留锁屏，选择  未配置 或 已禁用 即可。</p>
</li>
</ol>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807408117-ac7da844-2cb1-4967-93ce-797ef665879d.png" alt class="align-none" /></p>
<p>经过上述任一操作后，设置中的锁屏界面会不能使用。此后，每次开机时也不会出现锁屏界面，而直接进入登入界面，使开机更快一步，节约时间。现在，你可按快捷键Win + L进行锁屏，试试看是否也是进入到登入界面。</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807408229-54f6570a-0f6d-477b-b985-989856ca0bf3.png" alt class="align-none" /></p>
<h3>- 关闭时间线(Timeline)</h3>
<blockquote>
<p>通过时间线，用户能够跳转到任意一个时间点查看当时的工作状态，类似于一个以时间顺序排列的系统快照，防止忘记保存文件、系统崩溃等情况造成用户的损失。</p>
</blockquote>
<p>虽然时间线的功能强大，但是并不适用于所有用户。比如一些重要文件我们在查看后理应销毁的，但是在过了一段时间后竟然能够在时间线中看到重要文件的信息，这就不太好了。</p>
<p>时间线的打开<strong>快捷键 Win+ Tab</strong>，下图是已关闭的时间线</p>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807408355-ea3b37a8-5406-4900-a226-e7979a068381.png" alt class="align-none" /></p>
<ul>
<li>注册表法</li>
</ul>
<ol>
<li>
<p>打开注册表编辑器，定位至 HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\System ；</p>
</li>
<li>
<p>选中System项，在右侧窗口中点击右键，选择“新建 - DWORD(32位)值 ，命名为EnableActivityFeed ，数值数据按默认的 0 即可。</p>
</li>
<li>
<p>若想恢复，只需把EnableActivityFeed的数值修改为 1 ，或直接删除该值即可。</p>
</li>
</ol>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807408575-4d9be8ba-9d6c-45c4-9b1a-7975f5ba5dd8.png" alt class="align-none" /></p>
<ul>
<li>组策略法</li>
</ul>
<ol>
<li>
<p>打开组策略编辑器，定位至 计算机配置 - 管理模板 - 系统 - OS策略 。然后在右侧窗口中找到 启用活动源（ActivityFeed） 配置项；</p>
</li>
<li>
<p>双击该项打开 启用活动源 配置窗口，修改为“已禁用”。</p>
</li>
<li>
<p>若想恢复，只需把 启用活动源 配置为 未配置 或 已启用 即可。</p>
</li>
</ol>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807408659-d7becea1-5c6d-46a2-afd4-928f9babaacb.png" alt class="align-none" /></p>
<h3>- 去除桌面图标快捷方式箭头</h3>
<p>一些朋友不喜欢Windows系统中快捷方式图标，下面介绍去除方法：</p>
<ol>
<li>
<p>打开注册表编辑器后定位 HKEY_CLASSES_ROOT\lnkfile ；</p>
</li>
<li>
<p>删除 lnkfile 子项中的 IsShortcut 字符串值项（IsShortcut 项是用来控制是否显示普通应用程序和数据文件快捷方式中小箭头）；</p>
</li>
</ol>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807408775-0dc41acc-5226-4505-a2cd-95d1b2123253.png" alt class="align-none" /></p>
<ol>
<li>退出注册表编辑器，重启EXPLORER.EXE进程（快捷键 Ctrl + Shift + Esc 打开任务管理器，如图找到资源管理器，右下角点击重新启动）后，现在你的桌面上图标快捷方式箭头已经没有了。</li>
</ol>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807408873-38cad598-3eaf-4929-bc9b-ab0072b619aa.png" alt class="align-none" /></p>
<p>此外也可以通过运行对话框实现，结果与上面一致，并将步骤简化为一步，输入下列代码并回车即可。</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">cmd /k reg delete "HKEY_CLASSES_ROOT\lnkfile" /v IsShortcut /f &amp; taskkill /f /im explorer.exe &amp; start explorer.exe

</code></pre>
<p><strong>PS</strong>：不建议去除桌面图标快捷方式箭头，可能会导致某些问题。</p>
<p>（Win + X 无效，便携式谷歌浏览器固定到任务栏打不开，）</p>
<h3>- 去除此电脑首页的六个文件夹</h3>
<ol>
<li>
<p>定位到HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FolderDescriptions</p>
</li>
<li>
<p>视频 文件夹的项 {35286a68-3c57-41a1-bbb1-0eae73d76c95} ，我们可以通过该项右侧窗口中Name的数据值来判断是否是我们需要的项， 视频 对应的是英文名Local Videos</p>
</li>
<li>
<p>接着展开进入它的子项 PropertyBag ，双击右侧窗口中的 ThisPCPolicy ，将其数据数值由Show改为Hide，最后确定即可。</p>
</li>
</ol>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/5360088/1643807408950-2ce15be1-e414-4d80-87f8-cf76d928bffd.png" alt class="align-none" /></p>
<p>其它同理，对应的信息如下：</p>
<p>图片文件夹：{0ddd015d-b06c-45d5-8c4c-f59713854639}＼PropertyBag</p>
<p>音乐文件夹：{a0c69a99-21c8-4671-8703-7934162fcf1d}＼PropertyBag</p>
<p>视频文件夹：{35286a68-3c57-41a1-bbb1-0eae73d76c95}＼PropertyBag</p>
<p>文档文件夹：{f42ee2d3-909f-4907-8871-4c22fc0bf756}＼PropertyBag</p>
<p>下载文件夹：{7d83ee9b-2244-4e70-b1f5-5393042af1e4}＼PropertyBag</p>
<p>桌面文件夹：{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}＼PropertyBag</p>
<p><strong>PS</strong>：若桌面文件夹对应的PropertyBag项内可能没有 ThisPCPolicy ，可手动新建一个 字符串值 将其命名为 ThisPCPolicy，并赋予Hide值就行。</p>
<p>计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace</p>
<ul>
<li>
<p>[下载]    {088e3905-0323-4b02-9826-5d99428e115f}</p>
</li>
<li>
<p>[3D 对象]    {0DB7E03F-FC29-4DC6-9020-FF41B59E513A}</p>
</li>
<li>
<p>[图片]    {24ad3ad4-a569-4530-98e1-ab02f9417aa8}</p>
</li>
<li>
<p>[音乐]    {3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}</p>
</li>
<li>
<p>[桌面]    {B4BFCC3A-DB2C-424C-B029-7FE99A87C641}</p>
</li>
<li>
<p>[文档]    {d3162b92-9365-467a-956b-92703aca08af}</p>
</li>
<li>
<p>[视频]    {f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}</p>
</li>
</ul>
<h3>- 修改系统字体</h3>
<p>或者可以复制下面的代码到txt文本，然后把文件名的后缀改成reg（注意：代码里面的 SimSun 与 SimSun.ttc 既是你要改的字体名字。这里的SimSun是宋体的，如果你要改宋体直接复制就好了。）</p>
<p>Windows Registry Editor Version 5.00</p>
<p>[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionFonts]</p>
<p>"Microsoft YaHei &amp; Microsoft YaHei UI (TrueType)"="simsun.ttc"</p>
<p>[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionFontSubstitutes]</p>
<p>"Microsoft YaHei"="SimSun"</p>
<p>"Microsoft YaHei UI"="SimSun"</p>
<p>然后双击运行，如下图，完成后重启即可。</p>
<p>如果你要还原原来的字体就复制下面的代码，同上面的步骤操作即可：</p>
<p>Windows Registry Editor Version 5.00</p>
<p>[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionFonts]</p>
<p>"Microsoft YaHei &amp; Microsoft YaHei UI (TrueType)"="msyh.ttc"</p>
<p>[HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindows NTCurrentVersionFontSubstitutes]</p>
<p>"Microsoft YaHei"=-</p>
<p>"Microsoft YaHei UI"=-</p>
<p>关闭SuperFetch服务</p>
<p>无论是通过什么方式关闭，它都会在Windows 10较大更新时再次默默启动</p>
<p>SuperFetch是Windows中一种预读服务，在启动的时候加载软件数据信息，缩短我们启动软件的等待时间。适用配件较好的电脑</p>
<p>Hkey_LOCAL_MACHINESYSTEMCurrentControlSetServicesSysMain</p>
<p>先在左侧新建个名为Superfetch的项，之后在右侧再新建个名为Start的DWORD（32位）值，并将其数值数据修改成3。</p>
<p>再定位到Hkey_LOCAL_MACHINESYSTEMCurrentControlSetServicesTimeBrokerSvc</p>
<p>将右侧的Start选项的数值数据也修改成3。</p>
<p>重新启动电脑，就可以，让它不再拼命的使用内存和处理器资源，使电脑出现开机卡顿等问题了。</p>
<p>找到下面路径关闭 Prefetch</p>
<p>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\PrefetchParameters</p>
<p>修改这两个的值</p>
<p>EnablePrefetcher 数值改成 1</p>
<p>EnableSuperfetch 数值改成 1</p>
<p>数值的含义，有兴趣看看</p>
<p>0 = Disabled</p>
<p>1 = Application launch prefetching enabled</p>
<p>2 = Boot prefetching enabled</p>
<p>3 = Applaunch and Boot enabled (Optimal and Default)</p>
<p>继续找到下面路径关闭同步</p>
<p>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services</p>
<p>修改下面几个的值</p>
<p>OneSyncSvc、OneSyncSvc_Session1、UserDataSvc、UserDataSvc_Session1、UnistoreSvc、UnistoreSvc1</p>
<p>将 start 值改为 4</p>
