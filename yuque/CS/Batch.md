<h1>—— <a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands" target="_blank">批处理</a> ——</h1>
<p>将一系列命令按一定的顺序集合为一个可执行的文本文件，其扩展名为BAT或CMD，这些命令统称批处理命令。</p>
<p><strong>强制终止</strong>：可以在键盘上按下Ctrl+C组合键来强行终止一个批处理的执行过程。</p>
<p><strong>MS-DOS</strong>（MicroSoft Disk Operating System，微软磁盘操作系统）</p>
<p><a href="https://github.com/microsoft/ms-dos" target="_blank">https://github.com/microsoft/ms-dos</a></p>
<h1>特殊符号</h1>
<p><strong>@</strong></p>
<p>关闭当前命令行回显</p>
<p>放在命令前，让执行窗口中，无论 echo 是否为打开状态，都不显示它后面这一行的命令本身。</p>
<p><strong>|</strong></p>
<p>命令管道符</p>
<p>把前一命令的输出结果当后一命令的输入参数来使用。</p>
<p><strong>||</strong></p>
<p>组合命令符</p>
<p>当一条命令失败后才执行第二条命令，当碰到执行正确的命令后，将不执行后面所有的命 令。</p>
<p><strong>&amp;，&amp;&amp;</strong></p>
<p>组合命令</p>
<p>连接多个 DOS 命令，按顺序执行。  &amp;&amp;遇到错误停止，&amp;不会</p>
<p><strong>&gt;，&gt;&gt; </strong></p>
<p>输出重定向符</p>
<p>把前面命令的输出写入到一个文件中。“&gt;”覆写内容，“&gt;&gt;”追加内容到原文件末尾</p>
<p><strong>&lt;  </strong></p>
<p>输入重定向命令</p>
<p>从文件中读入命令输入，而不是从键盘中读入</p>
<p><strong>^</strong></p>
<p>转义字符，可用于续行</p>
<p>需转义的字符：^  &gt;  &amp; |</p>
<p>,      逗号相当于空格，</p>
<p>;      分号        当命令相同时，可以将不同目标用分号隔离，执行效果不变。</p>
<p>变量的表示方法</p>
<p>%var%</p>
<p>!var!</p>
<p>第一种表示方法是普通情况下的表达法，第二种就是引用延迟的变量。</p>
<h1>运算符</h1>
<p>算数及其赋值，逻辑，按位</p>
<p>compare-op</p>
<pre><code>EQU - 等于

NEQ - 不等于

LSS - 小于

LEQ - 小于或等于

GTR - 大于

GEQ - 大于或等于
</code></pre>
<h1>IO</h1>
<ul>
<li>
<p>标准输入(Standard Input)文件：程序/脚本的输入，0</p>
</li>
<li>
<p>标准输出(Standard Out)文件(stdout)：显示在屏幕上，1</p>
</li>
<li>
<p>标准错误（stderr）文件：显示在屏幕上的任何错误消息，2</p>
</li>
</ul>
<p>重定向输出</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">DIR C:\ &gt; lists.txt 2&gt; &amp;1

</code></pre>
<p>抑制程序输出</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">Dir C:\ &gt; NUL

</code></pre>
<h1>-- Command --</h1>
<p><strong>格式说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">Notation</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">不含方括号或大括号的文本</td>
<td style="text-align:center">必须按如下所示键入项。</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">必须为其提供值的占位符。</td>
</tr>
<tr>
<td style="text-align:center">[Text inside square brackets]</td>
<td style="text-align:center">可选项。</td>
</tr>
<tr>
<td style="text-align:center">{Text inside braces}</td>
<td style="text-align:center">所需项的集合。 您必须选择一个。</td>
</tr>
<tr>
<td style="text-align:center">竖线(</td>
<td style="text-align:center">)</td>
</tr>
<tr>
<td style="text-align:center">省略(…)</td>
<td style="text-align:center">可以重复并多次使用的项。</td>
</tr>
</tbody>
</table>
<p>/ ， - 等价</p>
<p><strong>简单命令</strong></p>
<ul>
<li>
<p>ver：显示 Windows 版本</p>
</li>
<li>
<p>systeminfo：显示本地或远程机器(包括服务包级别)的操作系统配置的信息</p>
</li>
<li>
<p>help：命令名/？或 （命令名）        即可查看该命令具体用法及参数</p>
</li>
<li>
<p>cls：清屏    ESC键是清除当前命令行</p>
</li>
<li>
<p>PROMPT：更改 Windows 命令提示</p>
</li>
<li>
<p>pause：暂停，默认显示: 请按任意键继续. . .</p>
</li>
<li>
<p>exit：退出 CMD.EXE 程序(命令解释器)或当前批处理脚本。</p>
</li>
<li>
<p>title：设置命令提示窗口标题	TITLE [string]</p>
</li>
<li>
<p>color：设置默认的控制台背景，前景颜色	COLOR [attr]</p>
</li>
<li>
<p>TYPE [drive:][path]filename ：显示文本内容</p>
</li>
<li>
<p>TIME [/T | time]：显示或设置系统时间。</p>
</li>
<li>
<p>DATE [/T | date]：显示或设置日期。</p>
</li>
<li>
<p>PATH [[drive:]path[;...][;%PATH%]：为可执行文件显示或设置一个搜索路径。</p>
</li>
<li>
<p>CHCP [nnn]：显示或设置活动代码页编号。</p>
</li>
</ul>
<p>活动代码页编号：</p>
<p>65001——UTF-8</p>
<p>936——简体中文</p>
<p>950——繁体中文</p>
<p>437——美国/加拿大英语</p>
<p>932——日文</p>
<p>949——韩文</p>
<p>866——俄文</p>
<p>颜色属性由两个十六进制数字指定</p>
<pre><code>0 = 黑色       8 = 灰色

1 = 蓝色       9 = 淡蓝色

2 = 绿色       A = 淡绿色

3 = 浅绿色     B = 淡浅绿色

4 = 红色       C = 淡红色

5 = 紫色       D = 淡紫色

6 = 黄色       E = 淡黄色

7 = 白色       F = 亮白色
</code></pre>
<h1>echo</h1>
<p>回显命令</p>
<ul>
<li>
<p>ECHO [ON | OFF]</p>
</li>
<li>
<p>ECHO [message]</p>
</li>
</ul>
<p>echo off 无法关掉 echo off 这个命令本身，一般在其前面添加@，达到所有命令都不显示的目的</p>
<p>命令后接空格或特殊字符</p>
<pre data-syntax="shell"><code class="lang-shell hljs raw">echo Hello World!
echo.Hello World!
echo/Hello World! 

</code></pre>
<p>echo.</p>
<p>显示一个空行，相当于一个回车</p>
<p>.  ,  :  ;  /  [  \  ]  +  (  =</p>
<h1>rem</h1>
<p>注解</p>
<p>打开回显时，rem 后的内容会显示出来，::不会</p>
<ul>
<li>
<p>任何以冒号开头的行，都被视为标号而直接忽略其后的所有内容</p>
</li>
<li>
<p>%注释内容%</p>
</li>
</ul>
<h1>whoami</h1>
<p>显示当前登录到本地系统的用户的用户、组和特权信息</p>
<p>whoami [/upn | /fqdn | /logonid]</p>
<p>whoami {[/user] [/groups] [/priv]} [/fo ] [/nh]</p>
<p>whoami /all [/fo ] [/nh]</p>
<p>/upn	以用户主体名称（UPN）格式显示用户名。</p>
<p>/fqdn	显示采用完全限定的域名（FQDN）格式的用户名。</p>
<p>/logonid	显示当前用户的登录 ID。</p>
<p>/user	显示当前域和用户名以及安全标识符（SID）。</p>
<p>/groups	显示当前用户所属的用户组。</p>
<p>/priv	显示当前用户的安全权限。</p>
<p>/all	显示当前访问令牌中的所有信息，包括当前用户名、安全标识符（SID）、权限以及当前用户所属的组。</p>
<p>/nh	指定列标题不应显示在输出中。 这仅对表和 CSV 格式有效。</p>
<h1>mode</h1>
<p>配置系统设备</p>
<p>串行端口:          MODE COMm[:] [BAUD=b] [PARITY=p] [DATA=d] [STOP=s]</p>
<pre><code>                            [to=on|off] [xon=on|off] [odsr=on|off]

                            [octs=on|off] [dtr=on|off|hs]

                            [rts=on|off|hs|tg] [idsr=on|off]
</code></pre>
<p>设备状态:          MODE [device] [/STATUS]</p>
<p>打印重定向:        MODE LPTn[:]=COMm[:]</p>
<p>选择代码页:        MODE CON[:] CP SELECT=yyy</p>
<p>代码页状态:        MODE CON[:] CP [/STATUS]</p>
<p>显示模式:          MODE CON[:] [COLS=c] [LINES=n]</p>
<p>击键率:            MODE CON[:] [RATE=r DELAY=d]</p>
<h1>timeout</h1>
<p>这个工具接受超时参数，等候一段指定的时间(秒)或等按任意键。</p>
<p>参数列表:</p>
<pre><code>/T              指定等候的秒数。有效范围从 -1 到 99999 秒，-1 表示无限期地等待

/NOBREAK                忽略按键并等待指定的时间。

/?                      显示此帮助消息。
</code></pre>
<h1>more</h1>
<p>逐屏显示输出。</p>
<p>MORE [/E [/C] [/P] [/S] [/Tn] [+n]] &lt; [drive:][path]filename</p>
<p>command-name | MORE [/E [/C] [/P] [/S] [/Tn] [+n]]</p>
<p>MORE /E [/C] [/P] [/S] [/Tn] [+n] [files]</p>
<pre><code>[drive:][path]filename  指定要逐屏显示的文件。



command-name            指定要显示其输出的命令。



/E      启用扩展功能

/C      显示页面前先清除屏幕

/P      扩展 FormFeed 字符

/S      将多个空白行缩成一行

/Tn     将制表符扩展为 n 个空格(默认值为 8)

+n      从第 n 行开始显示第一个文件

files   要显示的文件列表。使用空格分隔列表中的文件。

        如果已启用扩展功能，则在 -- More -- 提示处 接受下列命令:

P n 显示下 n 行

S n 跳过下 n 行

F 显示下个文件

Q 退出

= 显示行号

? 显示帮助行

&lt;space&gt; 显示下一页

&lt;ret&gt; 显示下一行
</code></pre>
<h1>find</h1>
<p>FIND [/V] [/C] [/N] [/I] [/OFF[LINE]] "string" [[drive:][path]filename[ ...]]</p>
<p>/V         显示所有未包含指定字符串的行。</p>
<p>/C         仅显示包含字符串的行数。</p>
<p>/N         显示行号。</p>
<p>/I         搜索字符串时忽略大小写。</p>
<p>/OFF[LINE] 不要跳过具有脱机属性集的文件。</p>
<p>"string" 指定要搜索的文本字符串。</p>
<p>[drive:][path]filename</p>
<pre><code>         指定要搜索的文件
</code></pre>
<h1>findstr</h1>
<p>FINDSTR [/B] [/E] [/L] [/R] [/S] [/I] [/X] [/V] [/N] [/M] [/O] [/P] [/F:file]</p>
<pre><code>    [/C:string] [/G:file] [/D:dir list] [/A:color attributes] [/OFF[LINE]]

    strings [[drive:][path]filename[ ...]]
</code></pre>
<p>/B         在一行的开始配对模式。</p>
<p>/E         在一行的结尾配对模式。</p>
<p>/L         按字使用搜索字符串。</p>
<p>/R         将搜索字符串作为一般表达式使用。</p>
<p>/S         在当前目录和所有子目录中搜索匹配文件。</p>
<p>/I         指定搜索不分大小写。</p>
<p>/X         打印完全匹配的行。</p>
<p>/V         只打印不包含匹配的行。</p>
<p>/N         在匹配的每行前打印行数。</p>
<p>/M         如果文件含有匹配项，只打印其文件名。</p>
<p>/O         在每个匹配行前打印字符偏移量。</p>
<p>/P         忽略有不可打印字符的文件。</p>
<p>/OFF[LINE] 不跳过带有脱机属性集的文件。</p>
<p>/A:attr    指定有十六进位数字的颜色属性。请见 "color /?"</p>
<p>/F:file    从指定文件读文件列表 (/ 代表控制台)。</p>
<p>/C:string  使用指定字符串作为文字搜索字符串。</p>
<p>/G:file    从指定的文件获得搜索字符串。 (/ 代表控制台)。</p>
<p>/D:dir     查找以分号为分隔符的目录列表</p>
<p>strings    要查找的文字。</p>
<p>[drive:][path]filename</p>
<pre><code>         指定要查找的文件。
</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">元字符</th>
<th style="text-align:center">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">.</td>
<td style="text-align:center">通配符-任意字符</td>
</tr>
<tr>
<td style="text-align:center">*</td>
<td style="text-align:center">重复执行零次或多次出现的上一个字符或类。</td>
</tr>
<tr>
<td style="text-align:center">^</td>
<td style="text-align:center">起始行位置-行的开头。</td>
</tr>
<tr>
<td style="text-align:center">$</td>
<td style="text-align:center">结束行位置-行的末尾。</td>
</tr>
<tr>
<td style="text-align:center">[class]</td>
<td style="text-align:center">字符类-集合中的任何一个字符。</td>
</tr>
<tr>
<td style="text-align:center">[^class]</td>
<td style="text-align:center">反向类-任何一个不在集内的字符。</td>
</tr>
<tr>
<td style="text-align:center">[x-y]</td>
<td style="text-align:center">范围-指定范围内的任何字符。</td>
</tr>
<tr>
<td style="text-align:center">\x</td>
<td style="text-align:center">元字符的转义文本使用。</td>
</tr>
<tr>
<td style="text-align:center">&lt;string</td>
<td style="text-align:center">开始单词位置-单词的开头。</td>
</tr>
<tr>
<td style="text-align:center">string&gt;</td>
<td style="text-align:center">结束单词位置-单词的结尾。</td>
</tr>
</tbody>
</table>
<h1>where</h1>
<p>查找与搜索模式匹配的文件的位置</p>
<p>where [/r ] [/q] [/f] [/t] [$:|:][ ...]</p>
<p>/r	指示从指定目录开始的递归搜索。</p>
<p>/q	返回退出代码（0表示成功， 1表示失败），而不显示匹配文件的列表。</p>
<p>/f	用引号显示where命令的结果。</p>
<p>/t	显示文件大小以及每个匹配文件的上次修改日期和时间。</p>
<h1>sort</h1>
<p>SORT [/R] [/+n] [/M kilobytes] [/L locale] [/REC recordbytes]</p>
<p>[[drive1:][path1]filename1] [/T [drive2:][path2]]</p>
<p>[/O [drive3:][path3]filename3]</p>
<p>+n	从第几位开始</p>
<p>/R[EVERSE]        颠倒排列顺序，即，从 Z 到 A，再从 9 到 0</p>
<h1>goto</h1>
<p>GOTO label</p>
<p>label必须单独一行，并且以冒号开头</p>
<p>GOTO :EOF  跳转到批脚本文件的结尾。</p>
<h1>call</h1>
<p>从批处理程序调用另一个批处理程序</p>
<p>CALL [drive:][path]filename [batch-parameters]</p>
<p>如果命令扩展被启用，CALL 会如下改变:</p>
<p>CALL 命令现在将卷标当作 CALL 的目标接受。语法是:</p>
<p><strong>CALL:label arguments</strong></p>
<p>调用完程序段后，还会返回原来的地方继续执行下去</p>
<h1>shift</h1>
<p>更改批处理文件中可替换参数的位置。</p>
<p>SHIFT [/n]</p>
<h1>set</h1>
<ul>
<li>
<p>SET [variable=[string]]</p>
</li>
<li>
<p>SET /P variable=[promptString]</p>
</li>
<li>
<p>SET /A expression</p>
</li>
</ul>
<p>计算只能精确到整数，小数采用四舍五入。有效值范围是-2147483647 至 2147483647</p>
<p>&lt;nul 是 0&lt;nul 的简写，0 句柄是默认的输入句柄，nul 是空设备， 所以 &lt;nul 表示从空设备获取输入</p>
<h1>setlocal</h1>
<p>开始批处理文件中环境改动的本地化操作。在执行 SETLOCAL 之后所做的环境改动只限于批处理文件。要还原原先的设置，必须执行 ENDLOCAL。达到批处理文件结尾时，对于该批处理文件的每个尚未执行的 SETLOCAL 命令，都会有一个隐含的 ENDLOCAL 被执行。</p>
<h1>if</h1>
<p>条件处理</p>
<p>IF [NOT] ERRORLEVEL number command</p>
<p>IF [NOT] string1==string2 command</p>
<p>IF [NOT] EXIST filename command</p>
<p>NOT          指定只有条件为 false 的情况下，执行该命令。</p>
<p>ERRORLEVEL number 如果最后运行的程序返回一个等于或大于指定数字的退出代码，指定条件为 true。</p>
<p>string1==string2  如果指定的文字字符串匹配，指定条件为 true。</p>
<p>EXIST filename    如果指定的文件名存在，指定条件为 true。</p>
<p>ELSE 命令必须与 IF 命令的尾端在同一行上</p>
<pre><code>IF EXIST filename. (del filename.) ELSE echo filename. missing
</code></pre>
<p>如果命令扩展被启用，IF 会如下改变:</p>
<pre><code>IF [/I] string1 compare-op string2 command

IF CMDEXTVERSION number command

IF DEFINED variable command
</code></pre>
<p>而 /I 开关(如果指定)说明要进行的字符串比较不分大小写。</p>
<p>如果已定义环境变量，DEFINED 条件的作用跟 EXIST 的一样，除了它取得一个环境变量，返回的结果是 true。</p>
<h1>for</h1>
<p>FOR %variable IN (set) DO command [command-parameters]</p>
<p>%variable  指定一个单一字母可替换的参数。</p>
<p>(set)      指定一个或一组文件。可以使用通配符。</p>
<p>command    指定对每个文件执行的命令。</p>
<p>command-parameters</p>
<pre><code>         为特定命令指定参数或命令行开关。
</code></pre>
<p>在批处理程序中使用 FOR 命令时，指定变量请使用 %%variable</p>
<p>而不要用 %variable。变量名称是区分大小写的，所以 %i 不同于 %I.</p>
<p>如果启用命令扩展，则会支持下列 FOR 命令的其他格式:</p>
<p>FOR /D %variable IN (set) DO command [command-parameters]</p>
<pre><code>如果集中包含通配符，则指定与目录名匹配，而不与文件名匹配。
</code></pre>
<p>FOR /R [[drive:]path] %variable IN (set) DO command [command-parameters]</p>
<pre><code>检查以 [drive:]path 为根的目录树，指向每个目录中的 FOR 语句。

如果在 /R 后没有指定目录规范，则使用当前目录。如果集仅为一个单点(.)字符，

则枚举该目录树。
</code></pre>
<p>FOR /L %variable IN (start,step,end) DO command [command-parameters]</p>
<pre><code>该集表示以增量形式从开始到结束的一个数字序列。
</code></pre>
<p>FOR /F ["options"] %variable IN (file-set) DO command [command-parameters]</p>
<p>FOR /F ["options"] %variable IN ("string") DO command [command-parameters]</p>
<p>FOR /F ["options"] %variable IN ('command') DO command [command-parameters]</p>
<pre><code>或者，如果有 usebackq 选项:
</code></pre>
<p>FOR /F ["options"] %variable IN (file-set) DO command [command-parameters]</p>
<p>FOR /F ["options"] %variable IN ("string") DO command [command-parameters]</p>
<p>FOR /F ["options"] %variable IN ('command') DO command [command-parameters]</p>
<pre><code>fileset 为一个或多个文件名。继续到 fileset 中的下一个文件之前，

每份文件都被打开、读取并经过处理。处理包括读取文件，将其分成一行行的文字，

然后将每行解析成零或更多的符号。然后用已找到的符号字符串变量值调用 For 循环。

以默认方式，/F 通过每个文件的每一行中分开的第一个空白符号。跳过空白行。

你可通过指定可选 "options" 参数替代默认解析操作。这个带引号的字符串包括一个

或多个指定不同解析选项的关键字。这些关键字为:



    eol=c           - 指一个行注释字符的结尾(就一个)

    skip=n          - 指在文件开始时忽略的行数。

    delims=xxx      - 指分隔符集。这个替换了空格和制表符的

                      默认分隔符集。

    tokens=x,y,m-n  - 指每行的哪一个符号被传递到每个迭代

                      的 for 本身。这会导致额外变量名称的分配。m-n

                      格式为一个范围。通过 nth 符号指定 mth。如果

                      符号字符串中的最后一个字符星号，

                      那么额外的变量将在最后一个符号解析之后

                      分配并接受行的保留文本。

    usebackq        - 指定新语法已在下类情况中使用:

                      在作为命令执行一个后引号的字符串并且一个单

                      引号字符为文字字符串命令并允许在 file-set

                      中使用双引号扩起文件名称。



某些范例可能有助:
</code></pre>
<p>FOR /F "eol=; tokens=2,3* delims=, " %i in (myfile.txt) do <a href="/echo " class="user-login"><i>@</i>echo </a> %i %j %k </p>
<pre><code>会分析 myfile.txt 中的每一行，忽略以分号打头的那些行，将

每行中的第二个和第三个符号传递给 for 函数体，用逗号和/或

空格分隔符号。请注意，此 for 函数体的语句引用 %i 来

获得第二个符号，引用 %j 来获得第三个符号，引用 %k

来获得第三个符号后的所有剩余符号。对于带有空格的文件

名，你需要用双引号将文件名括起来。为了用这种方式来使

用双引号，还需要使用 usebackq 选项，否则，双引号会

被理解成是用作定义某个要分析的字符串的。



%i 在 for 语句中显式声明，%j 和 %k 是通过

tokens= 选项隐式声明的。可以通过 tokens= 一行

指定最多 26 个符号，只要不试图声明一个高于字母 "z" 或

"Z" 的变量。请记住，FOR 变量是单一字母、分大小写和全局的变量；

而且，不能同时使用超过 52 个。



还可以在相邻字符串上使用 FOR /F 分析逻辑，方法是，

用单引号将括号之间的 file-set 括起来。这样，该字符

串会被当作一个文件中的一个单一输入行进行解析。



最后，可以用 FOR /F 命令来分析命令的输出。方法是，将

括号之间的 file-set 变成一个反括字符串。该字符串会

被当作命令行，传递到一个子 CMD.EXE，其输出会被捕获到

内存中，并被当作文件分析。如以下例子所示:



  FOR /F "usebackq delims==" %i IN (`set`) DO @echo %i



会枚举当前环境中的环境变量名称。
</code></pre>
<h1>SHUTDOWN</h1>
<p><strong>shutdown [/i | /l | /s | /sg | /r | /g | /a | /p | /h | /e | /o] [/hybrid] [/soft] [/fw] [/f]</strong></p>
<p><strong>    [/m \computer][/t xxx][/d [p|u:]xx:yy [/c "comment"]]</strong></p>
<pre><code>/i         显示图形用户界面(GUI)这必须是第一个选项。

/l         注销。这不能与 /m 或 /d 选项一起使用。

/s         关闭计算机。

/sg        关闭计算机。在下一次启动时，如果启用了

           自动重启登录，则将自动登录并锁定上次交互用户。

           登录后，重启任何已注册的应用程序。

/r         完全关闭并重启计算机。

/g         完全关闭并重启计算机。重新启动系统后，

           如果启用了自动重启登录，则将自动登录并

           锁定上次交互用户。

           登录后，重启任何已注册的应用程序。

/a         中止系统关闭。

           这只能在超时期间使用。

           与 /fw 结合使用，以清除任何未完成的至固件的引导。

/p         关闭本地计算机，没有超时或警告。

           可以与 /d 和 /f 选项一起使用。

/h         休眠本地计算机。

           可以与 /f 选项一起使用。

/hybrid    执行计算机关闭并进行准备以快速启动。

           必须与 /s 选项一起使用。

/fw        与关闭选项结合使用，使下次启动转到

           固件用户界面。

/e         记录计算机意外关闭的原因。

/o         转到高级启动选项菜单并重新启动计算机。

           必须与 /r 选项一起使用。

/m \\computer 指定目标计算机。

/t xxx     将关闭前的超时时间设置为 xxx 秒。

           有效范围是 0-315360000 (10 年)，默认值为 30。

           如果超时时间大于 0，则默示为

           /f 参数。

/c "comment" 有关重新启动或关闭的原因的注释。

           最多允许 512 个字符。

/f         强制关闭正在运行的应用程序而不事先警告用户。

           如果为 /t 参数指定大于 0 的值，

           则默示为 /f 参数。

/d [p|u:]xx:yy  提供重新启动或关闭的原因。

           p 指示重启或关闭是计划内的。

           u 指示原因是用户定义的。

           如果未指定 p 也未指定 u，则重新启动或关闭

           是计划外的。

           xx 是主要原因编号(小于 256 的正整数)。

           yy 是次要原因编号(小于 65536 的正整数)。
</code></pre>
<h1>schtasks</h1>
<p>SCHTASKS /parameter [arguments]</p>
<p>创建、删除、查询、更改、运行和中止本地或远程系统上的计划任务</p>
<pre><code>/Create         创建新计划任务

/Delete         删除计划任务

/Query          显示所有计划任务

/Change         更改计划任务属性

/Run            按需运行计划任务

/End            中止当前正在运行的计划任务

/ShowSid        显示与计划的任务名称相应的安全标识符
</code></pre>
<p>SCHTASKS <strong>/Create</strong> [/S system [/U username [/P [password]]]]</p>
<pre><code>[/RU username [/RP password]] **/SC schedule **[/MO modifier] [/D day]

[/M months] [/I idletime] **/TN taskname /TR taskrun **[/ST starttime]

[/RI interval] [ {/ET endtime | /DU duration} [/K] [/XML xmlfile] [/V1]]

[/SD startdate] [/ED enddate] [/IT | /NP] [/Z] [/F] [/HRESULT] [/?]
</code></pre>
<pre data-syntax="shell"><code class="lang-shell hljs raw">示例：schtasks /create /tn auto_shut  /st 23:00 /sc once /tr "shutdown /s"

# 设置命令
schtasks /create /tn "TEST_OnLogon" /sc onlogon /tr "cmd.exe /c calc.exe" 
schtasks /create /tn "TEST_OnStartup" /sc onstart /ru system /tr "cmd.exe /c calc.exe" 

# 删除命令
schtasks /delete /tn "TEST_OnLogon" /f

# 查看计划任务
schtasks /QUERY /fo LIST /v

</code></pre>
<p>频率：MINUTE、 HOURLY、DAILY、WEEKLY、MONTHLY, <strong>ONCE</strong>, ONSTART, ONLOGON, ONIDLE, ONEVENT</p>
<p>如果运行的程序不带参数，可以不用加双引号</p>
<h1>start</h1>
<p>启动一个单独的窗口以运行指定的程序或命令</p>
<p>START ["title"] [/D path] [/I] [/MIN] [/MAX]</p>
<pre><code>  [/LOW | /NORMAL | /HIGH | /REALTIME | /ABOVENORMAL | /BELOWNORMAL]

  [/NODE &lt;NUMA node&gt;] [/AFFINITY &lt;hex affinity mask&gt;] [/WAIT] [/B]

  [command/program] [parameters]



"title"     在窗口标题栏中显示的标题。

path        启动目录。

B           启动应用程序，但不创建新窗口。

            应用程序已忽略 ^C 处理。除非应用程序

            启用 ^C 处理，否则 ^Break 是唯一可以中断

            该应用程序的方式。

I           新的环境将是传递

            给 cmd.exe 的原始环境，而不是当前环境。

MIN         以最小化方式启动窗口。

MAX         以最大化方式启动窗口。

LOW         在 IDLE 优先级类中启动应用程序。

NORMAL      在 NORMAL 优先级类中启动应用程序。

HIGH        在 HIGH 优先级类中启动应用程序。

REALTIME    在 REALTIME 优先级类中启动应用程序。

ABOVENORMAL 在 ABOVENORMAL 优先级类中启动应用程序。

BELOWNORMAL 在 BELOWNORMAL 优先级类中启动应用程序。

NODE        将首选非一致性内存结构(NUMA)节点指定为

            十进制整数。

AFFINITY    将处理器关联掩码指定为十六进制数字。

            进程被限制在这些处理器上运行。



            将 /AFFINITY 和 /NODE 结合使用时，会对关联掩码

            进行不同的解释。指定关联掩码，以便将零位作为起始位置(就如将 NUMA

            节点的处理器掩码向右移位一样)。

            进程被限制在指定关联掩码和 NUMA 节点之间的

            那些通用处理器上运行。

            如果没有通用处理器，则进程被限制在

            指定的 NUMA 节点上运行。

WAIT        启动应用程序并等待它终止。

command/program

            如果它是内部 cmd 命令或批文件，则

            该命令处理器是使用 cmd.exe 的 /K 开关运行的。

            这表示运行该命令之后，该窗口

            将仍然存在。



            如果它不是内部 cmd 命令或批文件，则

            它就是一个程序，并将作为一个窗口化应用程序或

            控制台应用程序运行。



parameters  这些是传递给 command/program 的参数。
</code></pre>
<h1>tasklist</h1>
<p>显示在本地或远程机器上当前运行的进程列表</p>
<p><strong>TASKLIST [/S system [/U username [/P [password]]]]</strong></p>
<p><strong>         [/M [module] | /SVC | /V] [/FI filter] [/FO format] [/NH]</strong></p>
<p>/S     system           指定连接到的远程系统</p>
<p>/U     [domain]user    指定应该在哪个用户上下文执行这个命令</p>
<p>/P     [password]       为提供的用户上下文指定密码。如果省略，则提示输入</p>
<p>/M     [module]         列出当前使用所给 exe/dll 名称的所有任务。</p>
<pre><code>                       如果没有指定模块名称，显示所有加载的模块
</code></pre>
<p>/SVC                    显示每个进程中主持的服务</p>
<p>/APPS 显示 Microsoft Store 应用及其关联的进程</p>
<p>/V                      显示详细任务信息</p>
<p>/FI    filter           显示一系列符合筛选器指定条件的任务</p>
<p>/FO    format           指定输出格式。  有效值: "TABLE"、"LIST"、"CSV"。</p>
<p>/NH                     指定列标题不应该在输出中显示。</p>
<pre><code>                       只对 "TABLE" 和 "CSV" 格式有效。
</code></pre>
<p>获取内存大于40MB的进程</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">tasklist /fi "memusage gt 40000"

</code></pre>
<h1>taskkill</h1>
<p>按照进程 ID (PID) 或映像名称终止任务</p>
<p><strong>TASKKILL [/S system [/U username [/P [password]]]]</strong></p>
<p><strong>         { [/FI filter] [/PID processid | /IM imagename] } [/T] [/F]</strong></p>
<pre><code>/S    system           指定要连接的远程系统

/U    [domain\]user    指定应该在哪个用户上下文执行这个命令

/P    [password]       为提供的用户上下文指定密码。如果忽略，提示输入。

/FI   filter           应用筛选器以选择一组任务。

                       允许使用 "*"。例如，映像名称 eq acme*

/PID  processid        指定要终止的进程的 PID。 使用 TaskList 取得 PID。

/IM   imagename        指定要终止的进程的映像名称。通配符 '*'可用来指定所有任务或映像名称。

/T                     终止指定的进程和由它启用的子进程。

/F                     指定强制终止进程。
</code></pre>
<h1>net</h1>
<p>NET</p>
<pre><code>[ ACCOUNTS | COMPUTER | CONFIG | CONTINUE | FILE | GROUP | HELP |

  HELPMSG | LOCALGROUP | PAUSE | SESSION | SHARE | START |

  STATISTICS | STOP | TIME | USE | USER | VIEW ]
</code></pre>
<p>停止和启动特定的服务</p>
<p><strong>Net stop/start [servicename]</strong></p>
<p>显示工作站或服务器的网络统计信息</p>
<p>Net statistics [WORKSTATION]</p>
<p>NET USER</p>
<p>[username [password | *] [options]] [/DOMAIN]</p>
<pre><code>     username {password | *} /ADD [options] [/DOMAIN]

     username [/DELETE] [/DOMAIN]

     username [/TIMES:{times | ALL}]

     username [/ACTIVE: {YES | NO}]
</code></pre>
<p><strong>直接改密</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">net user %username% password

</code></pre>
<h1>SC</h1>
<p>用来与服务控制管理器和服务进行通信</p>
<p>sc  [command] [service name]  ...</p>
<pre><code>    &lt;server&gt; 选项的格式为 "\\ServerName"

    可通过键入以下命令获取有关命令的更多帮助: "sc [command]"

    命令:

      query-----------查询服务的状态，或枚举服务类型的状态。

      queryex---------查询服务的扩展状态或枚举服务类型的状态。

      start-----------启动服务。

      pause-----------向服务发送 PAUSE 控制请求。

      interrogate-----向服务发送 INTERROGATE 控制请求。

      continue--------向服务发送 CONTINUE 控制请求。

      stop------------向服务发送 STOP 请求。

      config----------更改服务的配置(永久)。

      description-----更改服务的描述。

      failure---------更改失败时服务执行的操作。

      failureflag-----更改服务的失败操作标志。

      sidtype---------更改服务的服务 SID 类型。

      privs-----------更改服务的所需特权。

      managedaccount--更改服务以将服务帐户密码标记为由 LSA 管理。

      qc--------------查询服务的配置信息。

      qdescription----查询服务的描述。

      qfailure--------查询失败时服务执行的操作。

      qfailureflag----查询服务的失败操作标志。

      qsidtype--------查询服务的服务 SID 类型。

      qprivs----------查询服务的所需特权。

      qtriggerinfo----查询服务的触发器参数。

      qpreferrednode--查询服务的首选 NUMA 节点。

      qmanagedaccount-查询服务是否将帐户与 LSA 管理的密码结合使用。

      qprotection-----查询服务的进程保护级别。

      quserservice----查询用户服务模板的本地实例。

      delete ----------(从注册表中)删除服务。

      create----------创建服务(并将其添加到注册表中)。

      control---------向服务发送控制。

      sdshow----------显示服务的安全描述符。

      sdset-----------设置服务的安全描述符。

      showsid---------显示与任意名称对应的服务 SID 字符串。

      triggerinfo-----配置服务的触发器参数。

      preferrednode---设置服务的首选 NUMA 节点。

      GetDisplayName--获取服务的 DisplayName。

      GetKeyName------获取服务的 ServiceKeyName。

      EnumDepend------枚举服务依赖关系。



    以下命令不需要服务名称:

    sc &lt;server&gt; &lt;command&gt; &lt;option&gt;

      boot------------(ok | bad)指示是否应将上一次启动另存为最近一次已知的正确启动配置

      Lock------------锁定服务数据库

      QueryLock-------查询 SCManager 数据库的 LockStatus
</code></pre>
<p>QUERY 和 QUERYEX 选项:</p>
<pre><code>    如果查询命令带服务名称，将返回

    该服务的状态。其他选项不适合这种

    情况。如果查询命令不带参数或

    带下列选项之一，将枚举此服务。

type=    要枚举的服务的类型(driver, service, userservice, all)

         (默认 = service)

state=   要枚举的服务的状态 (inactive, all)

         (默认 = active)

bufsize= 枚举缓冲区的大小(以字节计)

         (默认 = 4096)

ri=      开始枚举的恢复索引号

         (默认 = 0)

group=   要枚举的服务组

         (默认 = all groups)
</code></pre>
<p>语法示例</p>
<p>sc query                - 枚举活动服务和驱动程序的状态</p>
<p>sc query eventlog       - 显示 eventlog 服务的状态</p>
<p>sc queryex eventlog     - 显示 eventlog 服务的扩展状态</p>
<p>sc query type= driver   - 仅枚举活动驱动程序</p>
<p>sc query type= service  - 仅枚举 Win32 服务</p>
<p>sc query state= all     - 枚举所有服务和驱动程序</p>
<p>sc query bufsize= 50    - 枚举缓冲区为 50 字节</p>
<p>sc query ri= 14         - 枚举时恢复索引 = 14</p>
<p>sc queryex group= ""    - 枚举不在组内的活动服务</p>
<p>sc query type= interact - 枚举所有不活动服务</p>
<p>sc query type= driver group= NDIS     - 枚举所有 NDIS 驱动程序</p>
<h1>ATTRIB</h1>
<p>显示或更改文件属性</p>
<p>ATTRIB [+R | -R] [+A | -A] [+S | -S] [+H | -H] [+O | -O] [+I | -I] [+X | -X] [+P | -P] [+U | -U]</p>
<pre><code>   [drive:][path][filename] [/S [/D]] [/L]
</code></pre>
<ul>
<li>设置属性。</li>
</ul>
<ul>
<li>清除属性。</li>
</ul>
<p>R   只读文件属性。</p>
<p>A   存档文件属性。</p>
<p>S   系统文件属性。</p>
<p>H   隐藏文件属性。</p>
<p>O   脱机属性。</p>
<p>I   无内容索引文件属性。</p>
<p>X   无清理文件属性。</p>
<p>V   完整性属性。</p>
<p>P   固定属性。</p>
<p>U   非固定属性。</p>
<p>[drive:][path][filename]</p>
<pre><code>  指定属性要处理的文件。
</code></pre>
<p>/S  处理当前文件夹及其所有子文件夹中的匹配文件。</p>
<p>/D  也处理文件夹。</p>
<p>/L  处理符号链接和符号链接目标的属性</p>
<p>隐藏文件：attrib +s +h + 文件路径</p>
<p>取消隐藏：attrib -s -h + 文件路径</p>
<h1>copy</h1>
<p>将一份或多份文件复制到另一个位置。</p>
<p>COPY [/D] [/V] [/N] [/Y | /-Y] [/Z] [/L] [/A | /B ] source [/A | /B]</p>
<pre><code> [+ source [/A | /B] [+ ...]] [destination [/A | /B]]
</code></pre>
<p>source       指定要复制的文件。</p>
<p>/A           表示一个 ASCII 文本文件。</p>
<p>/B           表示一个二进位文件。</p>
<p>/D           允许解密要创建的目标文件</p>
<p>destination  为新文件指定目录和/或文件名。</p>
<p>/V           验证新文件写入是否正确。</p>
<p>/N           复制带有非 8dot3 名称的文件时，尽可能使用短文件名。</p>
<p>/Y           不使用确认是否要覆盖现有目标文件的提示。</p>
<p>/-Y          使用确认是否要覆盖现有目标文件的提示。</p>
<p>/Z           用可重新启动模式复制已联网的文件。</p>
<p>/L           如果源是符号链接，请将链接复制到目标而不是源链接指向的实际文件。</p>
<p>命令行开关 /Y 可以在 COPYCMD 环境变量中预先设定。</p>
<h1>xcopy</h1>
<p>复制文件和目录树。</p>
<p>XCOPY source [destination] [/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W]</p>
<pre><code>                       [/C] [/I] [/Q] [/F] [/L] [/G] [/H] [/R] [/T] [/U]

                       [/K] [/N] [/O] [/X] [/Y] [/-Y] [/Z] [/B] [/J]

                       [/EXCLUDE:file1[+file2][+file3]...]
</code></pre>
<p>source       指定要复制的文件。</p>
<p>destination  指定新文件的位置和/或名称。</p>
<p>/A           仅复制有存档属性集的文件，不更改属性。</p>
<p>/M           仅复制有存档属性集的文件，并关闭存档属性。</p>
<p>/D:m-d-y     复制在指定日期或指定日期以后更改的文件。</p>
<p>/EXCLUDE:file1[+file2][+file3]...   指定含有字符串的文件列表。</p>
<p>/P           创建每个目标文件之前提示你。</p>
<p>/S           复制目录和子目录，不包括空目录。</p>
<p>/E           复制目录和子目录，包括空目录。</p>
<p>/V           验证每个新文件的大小。</p>
<p>/W           提示你在复制前按键。</p>
<p>/C           即使有错误，也继续复制。</p>
<p>/I           如果目标不存在，且要复制多个文件，则假定目标必须是目录。</p>
<p>/Q           复制时不显示文件名。</p>
<p>/F           复制时显示完整的源文件名和目标文件名。</p>
<p>/L           显示要复制的文件。</p>
<p>/G           允许将加密文件复制到不支持加密的目标。</p>
<p>/H           也复制隐藏文件和系统文件。</p>
<p>/R           覆盖只读文件。</p>
<p>/T           创建目录结构，但不复制文件。</p>
<p>/U           只复制已经存在于目标中的文件。</p>
<p>/K           复制属性。一般的 Xcopy 会重置只读属性。</p>
<p>/N           用生成的短名称复制。</p>
<p>/O           复制文件所有权和 ACL 信息。</p>
<p>/X           复制文件审核设置(隐含 /O)。</p>
<p>/Y           取消提示以确认要覆盖现有目标文件。</p>
<p>/-Y          要提示以确认要覆盖现有目标文件。</p>
<p>/Z           在可重新启动模式下复制网络文件。</p>
<p>/B           复制符号链接本身与链接目标。</p>
<p>/J           复制时不使用缓冲的 I/O。推荐复制大文件时使用</p>
<h1>del &amp; erase</h1>
<p>删除一个或多个文件。</p>
<p>DEL [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names</p>
<p>ERASE [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names</p>
<p>names         指定一个或多个文件或者目录列表，可用通配符</p>
<p>/P            删除每一个文件之前提示确认。</p>
<p>/F            强制删除只读文件。</p>
<p>/S            删除所有子目录中的指定的文件。</p>
<p>/Q            安静模式。删除全局通配符时，不要求确认</p>
<p>/A            根据属性选择要删除的文件</p>
<p>属性          R  只读文件            S  系统文件</p>
<pre><code>            H  隐藏文件            A  准备存档的文件

            I  无内容索引文件      L  重新分析点

            O  脱机文件            -  表示“否”的前缀
</code></pre>
<h1>FC</h1>
<p>比较两个文件或两个文件集并显示它们之间的不同</p>
<p>FC [/A] [/C] [/L] [/LBn] [/N] [/OFF[LINE]] [/T] [/U] [/W] [/nnnn]  [drive1:][path1]filename1 [drive2:][path2]filename2</p>
<p>FC /B [drive1:][path1]filename1 [drive2:][path2]filename2</p>
<p>/A         只显示每个不同处的第一行和最后一行。</p>
<p>/B         执行二进制比较。</p>
<p>/C         不分大小写。</p>
<p>/L         将文件作为 ASCII 文字比较。</p>
<p>/LBn       将连续不匹配的最大值设置为指定的行数。</p>
<p>/N         在 ASCII 比较上显示行数。</p>
<p>/OFF[LINE] 不要跳过带有脱机属性集的文件。</p>
<p>/T         不要将制表符扩充到空格。</p>
<p>/U         将文件作为 UNICODE 文本文件比较。</p>
<p>/W         为了比较而压缩空白(制表符和空格)。</p>
<p>/nnnn      指定不匹配处后必须连续匹配的行数</p>
<h1>目录（directory）操作</h1>
<h2>DIR</h2>
<p>显示目录中的文件和子目录列表</p>
<p>DIR [drive:][path][filename] [/A[[:]attributes]] [/B] [/C] [/D] [/L] [/N]</p>
<p>[/O[[:]sortorder]] [/P] [/Q] [/R] [/S] [/T[[:]timefield]] [/W] [/X] [/4]</p>
<p>[drive:][path][filename]</p>
<pre><code>          指定要列出的驱动器、目录和/或文件。
</code></pre>
<p>/A          显示具有指定属性的文件。</p>
<p>属性         D  目录                R  只读文件</p>
<pre><code>           H  隐藏文件            A  准备存档的文件

           S  系统文件            I  无内容索引文件

           L  重新分析点          O  脱机文件

           -  表示“否”的前缀
</code></pre>
<p>/B          使用空格式(没有标题信息或摘要)。</p>
<p>/C          在文件大小中显示千位数分隔符。这是默认值。用 /-C 来禁用分隔符显示。</p>
<p>/D          跟宽式相同，但文件是按栏分类列出的。</p>
<p>/L          用小写。</p>
<p>/N          新的长列表格式，其中文件名在最右边。</p>
<p>/O          用分类顺序列出文件。</p>
<p>排列顺序     N  按名称(字母顺序)     S  按大小(从小到大)</p>
<pre><code>           E  按扩展名(字母顺序)   D  按日期/时间(从先到后)

           G  组目录优先           -  反转顺序的前缀
</code></pre>
<p>/P          在每个信息屏幕后暂停。</p>
<p>/Q          显示文件所有者。</p>
<p>/R          显示文件的备用数据流。</p>
<p>/S          显示指定目录和所有子目录中的文件。</p>
<p>/T          控制显示或用来分类的时间字符域</p>
<p>时间段      C  创建时间</p>
<pre><code>          A  上次访问时间

          W  上次写入的时间
</code></pre>
<p>/W          用宽列表格式。</p>
<p>/X          显示为非 8dot3 文件名产生的短名称。格式是 /N 的格式，</p>
<pre><code>          短名称插在长名称前面。如果没有短名称，在其位置则

          显示空白。
</code></pre>
<p>/4          以四位数字显示年份</p>
<h2>MD / MKDIR</h2>
<p>创建目录</p>
<p>MKDIR [drive:]path</p>
<p>MD [drive:]path</p>
<h2>RD / RMDIR</h2>
<p>删除一个目录。</p>
<p>RMDIR [/S] [/Q] [drive:]path</p>
<p>RD [/S] [/Q] [drive:]path</p>
<pre><code>/S      除目录本身外，还将删除指定目录下的所有子目录和文件。用于删除目录树。

/Q      安静模式，带 /S 删除目录树时不要求确认
</code></pre>
<h2>CD / CHDIR</h2>
<p>显示当前目录名或改变当前目录。</p>
<p>CHDIR [/D] [drive:][path]</p>
<p>CHDIR [..]</p>
<p>CD [/D] [drive:][path]</p>
<p>CD [..]</p>
<p>..   指定要改成父目录。</p>
<h2>MKLINK</h2>
<p>创建符号链接</p>
<p>MKLINK [[/D] | [/H] | [/J]] Link Target</p>
<pre><code>    /D      创建目录符号链接。默认为文件符号链接。

    /H      创建硬链接而非符号链接。

    /J      创建目录联接。

    Link    指定新的符号链接名称。

    Target  指定新链接引用的路径 (相对或绝对)。
</code></pre>
<h2>tree</h2>
<p>以图形显示驱动器或路径的文件夹结构</p>
<p>TREE [drive:][path] [/F] [/A]</p>
<p>/F   显示每个文件夹中文件的名称。</p>
<p>/A   使用 ASCII 字符，而不使用扩展字符</p>
<h1>reg</h1>
<p>对注册表项中的注册表子项信息和值执行操作</p>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-add" target="_blank">reg add</a></th>
<th style="text-align:center">向注册表中添加新的子项或条目。</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-compare" target="_blank">reg compare</a></td>
<td style="text-align:center">比较指定的注册表子项或条目。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-copy" target="_blank">reg copy</a></td>
<td style="text-align:center">将注册表项复制到本地或远程计算机上的指定位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-delete" target="_blank">reg delete</a></td>
<td style="text-align:center">删除注册表中的一个或一些项。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-export" target="_blank">reg export</a></td>
<td style="text-align:center">将本地计算机的指定子项、项和值复制到文件中，以便传输到其他服务器。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-import" target="_blank">reg import</a></td>
<td style="text-align:center">将包含导出的注册表子项、项和值的文件的内容复制到本地计算机的注册表中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-load" target="_blank">reg load</a></td>
<td style="text-align:center">将保存的子项和项写入注册表中的不同子项。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-query" target="_blank">reg query</a></td>
<td style="text-align:center">返回位于注册表中指定子项下的子子项和条目的列表。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-restore" target="_blank">reg restore</a></td>
<td style="text-align:center">将保存的子项和项写入注册表。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-save" target="_blank">reg save</a></td>
<td style="text-align:center">在指定的文件中保存指定子项、项和注册表值的副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-unload" target="_blank">reg unload</a></td>
<td style="text-align:center">删除使用 reg load 操作加载的注册表部分。</td>
</tr>
</tbody>
</table>
<h1>Internet</h1>
<h2>IPCONFIG</h2>
<p>ipconfig [/allcompartments] [/? | /all |</p>
<pre><code>                             /renew [adapter] | /release [adapter] |

                             /renew6 [adapter] | /release6 [adapter] |

                             /flushdns | /displaydns | /registerdns |

                             /showclassid adapter |

                             /setclassid adapter [classid] |

                             /showclassid6 adapter |

                             /setclassid6 adapter [classid] ]
</code></pre>
<p>ipconfig：显示绑定到 TCP/IP 的每个适配器的 IP 地址、子网掩码和默认网关</p>
<p>ipconfig /all ：查看电脑网络连接信息，包括本地IP、DNS地址等。</p>
<p>ipconfig /flushdns：清除DNS解析程序缓存。</p>
<h2>RASDIAL</h2>
<pre><code>    rasdial entryname [username [password|*]] [/DOMAIN:domain]

            [/PHONE:phonenumber] [/CALLBACK:callbacknumber]

            [/PHONEBOOK:phonebookfile] [/PREFIXSUFFIX]



    rasdial [entryname] /DISCONNECT
</code></pre>
<p><strong>网络连接</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">rasdial 宽带连接名 用户名 密码

</code></pre>
<h2>netsh</h2>
<p>netsh [-a AliasFile] [-c Context] [-r RemoteMachine] [-u [DomainName]UserName] [-p Password | *]</p>
<pre><code>         [Command | -f ScriptFile]
</code></pre>
<p><strong>开热点（WIFI）</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">::开启系统承载网络模块和新建无线网络
netsh wlan set hostednetwork mode=allow ssid=wifi key=12345678 
::ssid是无限网的名称，key是密码
::开启无线网
netsh wlan start hostednetwork 
::关闭无线网
netsh wlan stop hostednetwork 
::关闭承载网络模块
netsh wlan set hostednetwork mode=disallow 
::查看热点用户密码
netsh wlan show hostednetwork setting=security

</code></pre>
<h1>函数</h1>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">:function_name
Do_something
EXIT /B 0

</code></pre>
<h1>—— 实例 ——</h1>
<h2>规定时间杀程序</h2>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">do
set bag=getobject("winmgmts:\\.\root\cimv2")
set pipe=bag.execquery("select * from win64_process where name=*QQ.exe*")
for each i in pipe
i.terminate()
nextwscript.sleep 1000
loop

</code></pre>
