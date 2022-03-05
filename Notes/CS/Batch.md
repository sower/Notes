
# —— [批处理](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands) ——
将一系列命令按一定的顺序集合为一个可执行的文本文件，其扩展名为BAT或CMD，这些命令统称批处理命令。  <br />  **​**

**强制终止**：可以在键盘上按下Ctrl+C组合键来强行终止一个批处理的执行过程。  <br />  **MS-DOS**（MicroSoft Disk Operating System，微软磁盘操作系统）  <br />  [https://github.com/microsoft/ms-dos](https://github.com/microsoft/ms-dos)  <br />  ​  <br />  

# 特殊符号
**@**  <br />  关闭当前命令行回显  <br />  放在命令前，让执行窗口中，无论 echo 是否为打开状态，都不显示它后面这一行的命令本身。  <br />  ​

**|**  <br />  命令管道符  <br />  把前一命令的输出结果当后一命令的输入参数来使用。  <br />  ​

**||**  <br />  组合命令符  <br />  当一条命令失败后才执行第二条命令，当碰到执行正确的命令后，将不执行后面所有的命令。  <br />  ​

**&，&&**  <br />  组合命令  <br />  连接多个 DOS 命令，按顺序执行。  &&遇到错误停止，&不会  <br />  ​

**>，>> **  <br />  输出重定向符  <br />  把前面命令的输出写入到一个文件中。“>”覆写内容，“>>”追加内容到原文件末尾  <br />  ​

**<  **  <br />  输入重定向命令  <br />  从文件中读入命令输入，而不是从键盘中读入  <br />  ​

**^**  <br />  转义字符，可用于续行  <br />  需转义的字符：^  >  & |  <br />  ​

,      逗号相当于空格，  <br />  ;      分号        当命令相同时，可以将不同目标用分号隔离，执行效果不变。  <br />  ​

变量的表示方法

- `%var%` 普通情况下的表达法
- `!var!` 引用延迟的变量

​  <br />  

# 运算符
算数及其赋值，逻辑，按位  <br />  **compare-op**
```
EQU - 等于
NEQ - 不等于
LSS - 小于
LEQ - 小于或等于
GTR - 大于
GEQ - 大于或等于
```

# IO

- 标准输入(Standard Input)文件：程序/脚本的输入，0
- 标准输出(Standard Out)文件(stdout)：显示在屏幕上，1
- 标准错误（stderr）文件：显示在屏幕上的任何错误消息，2

​

重定向输出
```javascript
DIR C:\ > lists.txt 2> &1
```
​

抑制程序输出
```javascript
Dir C:\ > NUL
```



# —— Command ——
**格式说明**

| Notation | 说明 |
| --- | --- |
| 不含方括号或大括号的文本 | 必须按如下所示键入项。 |
| <Text inside angle brackets> | 必须为其提供值的占位符。 |
| [Text inside square brackets] | 可选项。 |
| {Text inside braces} | 所需项的集合。 须选择一个。 |
| 竖线(&#124;) | 互斥项的分隔符。 须选择一个。 |
| 省略(…) | 可以重复并多次使用的项。 |

/ ， - 等价  <br />  ​  <br />  

# 简单命令

- ver：显示 Windows 版本
- systeminfo：显示本地或远程机器(包括服务包级别)的操作系统配置的信息
- help：命令名/？或 （命令名）        即可查看该命令具体用法及参数
- cls：清屏    ESC键是清除当前命令行
- PROMPT：更改 Windows 命令提示
- pause：暂停，默认显示: 请按任意键继续. . .
- exit：退出 CMD.EXE 程序(命令解释器)或当前批处理脚本。
- title：设置命令提示窗口标题	TITLE [string]
- color：设置默认的控制台背景，前景颜色	COLOR [attr]
- TYPE [drive:][path]filename ：显示文本内容
- TIME [/T | time]：显示或设置系统时间。
- DATE [/T | date]：显示或设置日期。
- PATH [[drive:]path[;...][;%PATH%]：为可执行文件显示或设置一个搜索路径。
- CHCP [nnn]：显示或设置活动代码页编号。

​

活动代码页编号：  <br />  65001——UTF-8  <br />  936——简体中文  <br />  950——繁体中文  <br />  437——美国/加拿大英语  <br />  932——日文  <br />  949——韩文  <br />  866——俄文  <br />  ​

颜色属性由两个十六进制数字指定
```
0 = 黑色       8 = 灰色
1 = 蓝色       9 = 淡蓝色
2 = 绿色       A = 淡绿色
3 = 浅绿色     B = 淡浅绿色
4 = 红色       C = 淡红色
5 = 紫色       D = 淡紫色
6 = 黄色       E = 淡黄色
7 = 白色       F = 亮白色
```

# echo
回显命令

- ECHO [ON | OFF]
- ECHO [message]

echo off 无法关掉 echo off 这个命令本身，一般在其前面添加@，达到所有命令都不显示的目的  <br />  命令后接空格或特殊字符
```shell
echo Hello World!
echo.Hello World!
echo/Hello World!
```
`echo.`显示一个空行，相当于一个回车  <br />  ​

.  ,  :  ;  /  [  \  ]  +  (  =

# rem
注解  <br />  打开回显时，rem 后的内容会显示出来，`::`不会

- 任何以冒号开头的行，都被视为标号而直接忽略其后的所有内容
- %注释内容%

# whoami
显示当前登录到本地系统的用户的用户、组和特权信息  <br />  whoami [/upn | /fqdn | /logonid]  <br />  whoami {[/user] [/groups] [/priv]} [/fo ] [/nh]  <br />  whoami /all [/fo ] [/nh]

- /upn	以用户主体名称（UPN）格式显示用户名。
- /fqdn	显示采用完全限定的域名（FQDN）格式的用户名。
- /logonid	显示当前用户的登录 ID。
- /user	显示当前域和用户名以及安全标识符（SID）。
- /groups	显示当前用户所属的用户组。
- /priv	显示当前用户的安全权限。
- /all	显示当前访问令牌中的所有信息，包括当前用户名、安全标识符（SID）、权限以及当前用户所属的组。
- /nh	指定列标题不应显示在输出中。 这仅对表和 CSV 格式有效。

# mode
配置系统设备  <br />  
  <br />  设备状态:          MODE [device] [/STATUS]  <br />  打印重定向:        MODE LPTn[:]=COMm[:]  <br />  选择代码页:        MODE CON[:] CP SELECT=yyy  <br />  代码页状态:        MODE CON[:] CP [/STATUS]  <br />  显示模式:          MODE CON[:] [COLS=c] [LINES=n]  <br />  击键率:            MODE CON[:] [RATE=r DELAY=d]

# timeout
这个工具接受超时参数，等候一段指定的时间(秒)或等按任意键。  <br />  参数列表:

- /T              指定等候的秒数。有效范围从 -1 到 99999 秒，-1 表示无限期地等待
- /NOBREAK                忽略按键并等待指定的时间。
- /?                      显示此帮助消息。

# more
逐屏显示输出
```
MORE [/E [/C] [/P] [/S] [/Tn] [+n]] < [drive:][path]filename
command-name | MORE [/E [/C] [/P] [/S] [/Tn] [+n]]
MORE /E [/C] [/P] [/S] [/Tn] [+n] [files]

    [drive:][path]filename  指定要逐屏显示的文件。

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
    <space> 显示下一页
    <ret> 显示下一行
```

# find
FIND [/V] [/C] [/N] [/I] [/OFF[LINE]] "string" [[drive:][path]filename[ ...]]

- /V         显示所有未包含指定字符串的行。
- /C         仅显示包含字符串的行数。
- /N         显示行号。
- /I         搜索字符串时忽略大小写。
- /OFF[LINE] 不要跳过具有脱机属性集的文件。
- "string" 指定要搜索的文本字符串。
- [drive:][path]filename




# findstr
FINDSTR [/B] [/E] [/L] [/R] [/S] [/I] [/X] [/V] [/N] [/M] [/O] [/P] [/F:file]  <br />   [/C:string] [/G:file] [/D:dir list] [/A:color attributes] [/OFF[LINE]]  <br />   strings [[drive:][path]filename[ ...]]  <br />  ​

 /B 在一行的开始配对模式。  <br />   /E 在一行的结尾配对模式。  <br />   /L 按字使用搜索字符串。  <br />   /R 将搜索字符串作为一般表达式使用。  <br />   /S 在当前目录和所有子目录中搜索匹配文件。  <br />   /I 指定搜索不分大小写。  <br />   /X 打印完全匹配的行。  <br />   /V 只打印不包含匹配的行。  <br />   /N 在匹配的每行前打印行数。  <br />   /M 如果文件含有匹配项，只打印其文件名。  <br />   /O 在每个匹配行前打印字符偏移量。  <br />   /P 忽略有不可打印字符的文件。  <br />   /OFF[LINE] 不跳过带有脱机属性集的文件。  <br />   /A:attr 指定有十六进位数字的颜色属性。请见 "color /?"  <br />   /F:file 从指定文件读文件列表 (/ 代表控制台)。  <br />   /C:string 使用指定字符串作为文字搜索字符串。  <br />   /G:file 从指定的文件获得搜索字符串。 (/ 代表控制台)。  <br />   /D:dir 查找以分号为分隔符的目录列表  <br />   strings 要查找的文字。  <br />   [drive:][path]filename  <br />   指定要查找的文件。

| 元字符 | 值 |
| --- | --- |
| . | 通配符-任意字符 |
| * | 重复执行零次或多次出现的上一个字符或类。 |
| ^ | 起始行位置-行的开头。 |
| $ | 结束行位置-行的末尾。 |
| [class] | 字符类-集合中的任何一个字符。 |
| [^class] | 反向类-任何一个不在集内的字符。 |
| [x-y] | 范围-指定范围内的任何字符。 |
| \\x | 元字符的转义文本使用。 |
| <string | 开始单词位置-单词的开头。 |
| string> | 结束单词位置-单词的结尾。 |


# where
查找与搜索模式匹配的文件的位置  <br />  where [/r ] [/q] [/f] [/t] [$:|:][ ...]  <br />  /r	指示从指定目录开始的递归搜索。  <br />  /q	返回退出代码（0表示成功， 1表示失败），而不显示匹配文件的列表。  <br />  /f	用引号显示where命令的结果。  <br />  /t	显示文件大小以及每个匹配文件的上次修改日期和时间。

# sort
SORT [/R] [/+n] [/M kilobytes] [/L locale] [/REC recordbytes]  <br />  [[drive1:][path1]filename1] [/T [drive2:][path2]]  <br />  [/O [drive3:][path3]filename3]  <br />  +n	从第几位开始  <br />  /R[EVERSE]        颠倒排列顺序，即，从 Z 到 A，再从 9 到 0

# goto
GOTO label  <br />  label必须单独一行，并且以冒号开头  <br />  GOTO :EOF  跳转到批脚本文件的结尾。

# call
从批处理程序调用另一个批处理程序  <br />  CALL [drive:][path]filename [batch-parameters]  <br />  如果命令扩展被启用，CALL 会如下改变:  <br />  CALL 命令现在将卷标当作 CALL 的目标接受。语法是:  <br />  **CALL:label arguments**  <br />  调用完程序段后，还会返回原来的地方继续执行下去

# shift
更改批处理文件中可替换参数的位置。  <br />  SHIFT [/n]

# set

- SET [variable=[string]]
- SET /P variable=[promptString]
- SET /A expression

计算只能精确到整数，小数采用四舍五入。有效值范围是-2147483647 至 2147483647  <br />  <nul 是 0<nul 的简写，0 句柄是默认的输入句柄，nul 是空设备， 所以 <nul 表示从空设备获取输入

# setlocal
开始批处理文件中环境改动的本地化操作。在执行 SETLOCAL 之后所做的环境改动只限于批处理文件。要还原原先的设置，必须执行 ENDLOCAL。达到批处理文件结尾时，对于该批处理文件的每个尚未执行的 SETLOCAL 命令，都会有一个隐含的 ENDLOCAL 被执行。

# if
条件处理  <br />  IF [NOT] ERRORLEVEL number command  <br />  IF [NOT] string1==string2 command  <br />  IF [NOT] EXIST filename command  <br />  NOT          指定只有条件为 false 的情况下，执行该命令。  <br />  ERRORLEVEL number 如果最后运行的程序返回一个等于或大于指定数字的退出代码，指定条件为 true。  <br />  string1==string2  如果指定的文字字符串匹配，指定条件为 true。  <br />  EXIST filename    如果指定的文件名存在，指定条件为 true。  <br />  ELSE 命令必须与 IF 命令的尾端在同一行上
```
IF EXIST filename. (del filename.) ELSE echo filename. missing
```
如果命令扩展被启用，IF 会如下改变:
```
IF [/I] string1 compare-op string2 command
IF CMDEXTVERSION number command
IF DEFINED variable command
```
而 /I 开关(如果指定)说明要进行的字符串比较不分大小写。  <br />  如果已定义环境变量，DEFINED 条件的作用跟 EXIST 的一样，除了它取得一个环境变量，返回的结果是 true。

# for
FOR %variable IN (set) DO command [command-parameters]

-  %variable 指定一个单一字母可替换的参数。
-  (set) 指定一个或一组文件。可以使用通配符。
-  command 指定对每个文件执行的命令。
-  command-parameters	为特定命令指定参数或命令行开关。

​

在批处理程序中使用 FOR 命令时，指定变量请使用 %%variable，而不要用 %variable。变量名称是区分大小写的，所以 %i 不同于 %I.  <br />  ​

如果启用命令扩展，则会支持下列 FOR 命令的其他格式:  <br />  `FOR /D %variable IN (set) DO command [command-parameters]`​  <br />   如果集中包含通配符，则指定与目录名匹配，而不与文件名匹配。  <br />  ​

`FOR /R [[drive:]path] %variable IN (set) DO command [command-parameters]`  <br />   检查以 [drive:]path 为根的目录树，指向每个目录中的 FOR 语句。  <br />   如果在 /R 后没有指定目录规范，则使用当前目录。如果集仅为一个单点(.)字符，  <br />   则枚举该目录树。  <br />  ​

`FOR /L %variable IN (start,step,end) DO command [command-parameters]`  <br />   该集表示以增量形式从开始到结束的一个数字序列。  <br />  ​

FOR /F ["options"] %variable IN (file-set) DO command [command-parameters]  <br />  FOR /F ["options"] %variable IN ("string") DO command [command-parameters]  <br />  FOR /F ["options"] %variable IN ('command') DO command [command-parameters]  <br />   fileset 为一个或多个文件名。继续到 fileset 中的下一个文件之前，每份文件都被打开、读取并经过处理。处理包括读取文件，将其分成一行行的文字，然后将每行解析成零或更多的符号。然后用已找到的符号字符串变量值调用 For 循环。  <br />  
  <br />  范例:  <br />  `FOR /F "eol=; tokens=2,3* delims=, " %i in (myfile.txt) do @echo %i %j %k`  <br />   会分析 myfile.txt 中的每一行，忽略以分号打头的那些行，将每行中的第二个和第三个符号传递给 for 函数体，用逗号和/或 空格分隔符号。请注意，此 for 函数体的语句引用 %i 来 获得第二个符号，引用 %j 来获得第三个符号，引用 %k 来获得第三个符号后的所有剩余符号。对于带有空格的文件 名，你需要用双引号将文件名括起来。为了用这种方式来使用双引号，还需要使用 usebackq 选项，否则，双引号会被理解成是用作定义某个要分析的字符串的。  <br />  ​  <br />  

# SHUTDOWN
**shutdown [/i | /l | /s | /sg | /r | /g | /a | /p | /h | /e | /o] [/hybrid] [/soft] [/fw] [/f]**  <br />  **    [/m \computer][/t xxx][/d [p|u:]xx:yy [/c "comment"]]**
```
/i         显示图形用户界面(GUI)这必须是第一个选项。
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
```

# schtasks
SCHTASKS /parameter [arguments]  <br />  创建、删除、查询、更改、运行和中止本地或远程系统上的计划任务
```
/Create         创建新计划任务
/Delete         删除计划任务
/Query          显示所有计划任务
/Change         更改计划任务属性
/Run            按需运行计划任务
/End            中止当前正在运行的计划任务
/ShowSid        显示与计划的任务名称相应的安全标识符
```
SCHTASKS **/Create** [/S system [/U username [/P [password]]]]  <br />   [/RU username [/RP password]] **/SC schedule **[/MO modifier] [/D day]  <br />   [/M months] [/I idletime] **/TN taskname /TR taskrun **[/ST starttime]  <br />   [/RI interval] [ {/ET endtime | /DU duration} [/K] [/XML xmlfile] [/V1]]  <br />   [/SD startdate] [/ED enddate] [/IT | /NP] [/Z] [/F] [/HRESULT] [/?]
```shell
示例：schtasks /create /tn auto_shut  /st 23:00 /sc once /tr "shutdown /s"
# 设置命令
schtasks /create /tn "TEST_OnLogon" /sc onlogon /tr "cmd.exe /c calc.exe" 
schtasks /create /tn "TEST_OnStartup" /sc onstart /ru system /tr "cmd.exe /c calc.exe" 
# 删除命令
schtasks /delete /tn "TEST_OnLogon" /f
# 查看计划任务
schtasks /QUERY /fo LIST /v
```
频率：MINUTE、 HOURLY、DAILY、WEEKLY、MONTHLY, **ONCE**, ONSTART, ONLOGON, ONIDLE, ONEVENT  <br />  如果运行的程序不带参数，可以不用加双引号

# start
启动一个单独的窗口以运行指定的程序或命令
```
START ["title"] [/D path] [/I] [/MIN] [/MAX] 
      [/LOW | /NORMAL | /HIGH | /REALTIME | /ABOVENORMAL | /BELOWNORMAL]
      [/NODE <NUMA node>] [/AFFINITY <hex affinity mask>] [/WAIT] [/B]
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

    WAIT        启动应用程序并等待它终止。
    parameters  这些是传递给 command/program 的参数。
```

# tasklist
显示在本地或远程机器上当前运行的进程列表  <br />  **TASKLIST [/S system [/U username [/P [password]]]]**  <br />  ** [/M [module] | /SVC | /V] [/FI filter] [/FO format] [/NH]**  <br />  ​

 /S system 指定连接到的远程系统  <br />   /U [domain\]user 指定应该在哪个用户上下文执行这个命令  <br />   /P [password] 为提供的用户上下文指定密码。如果省略，则提示输入  <br />   /M [module] 列出当前使用所给 exe/dll 名称的所有任务。  <br />   如果没有指定模块名称，显示所有加载的模块  <br />   /SVC 显示每个进程中主持的服务  <br />   /APPS 显示 Microsoft Store 应用及其关联的进程  <br />   /V 显示详细任务信息  <br />   /FI filter 显示一系列符合筛选器指定条件的任务  <br />   /FO format 指定输出格式。 有效值: "TABLE"、"LIST"、"CSV"。  <br />   /NH 指定列标题不应该在输出中显示。  <br />  
  <br />  获取内存大于40MB的进程
```javascript
tasklist /fi "memusage gt 40000"
```

# taskkill
按照进程 ID (PID) 或映像名称终止任务  <br />  **TASKKILL [/S system [/U username [/P [password]]]]**  <br />  ** { [/FI filter] [/PID processid | /IM imagename] } [/T] [/F]**  <br />  ​

 /S system 指定要连接的远程系统  <br />   /U [domain\]user 指定应该在哪个用户上下文执行这个命令  <br />   /P [password] 为提供的用户上下文指定密码。如果忽略，提示输入。  <br />   /FI filter 应用筛选器以选择一组任务。  <br />   允许使用 "*"。例如，映像名称 eq acme*  <br />   /PID processid 指定要终止的进程的 PID。 使用 TaskList 取得 PID。  <br />   /IM imagename 指定要终止的进程的映像名称。通配符 '*'可用来指定所有任务或映像名称。  <br />   /T 终止指定的进程和由它启用的子进程。  <br />   /F 指定强制终止进程。

# net
NET  <br />   [ ACCOUNTS | COMPUTER | CONFIG | CONTINUE | FILE | GROUP | HELP |  <br />   HELPMSG | LOCALGROUP | PAUSE | SESSION | SHARE | START |  <br />   STATISTICS | STOP | TIME | USE | USER | VIEW ]  <br />  ​

停止和启动特定的服务  <br />  `**Net stop/start [servicename]**`  <br />  **​**

显示工作站或服务器的网络统计信息  <br />  `Net statistics [WORKSTATION]`  <br />  ​

NET USER  <br />  [username [password | *] [options]] [/DOMAIN]  <br />   username {password | *} /ADD [options] [/DOMAIN]  <br />   username [/DELETE] [/DOMAIN]  <br />   username [/TIMES:{times | ALL}]  <br />   username [/ACTIVE: {YES | NO}]  <br />  ​

**直接改密**
```javascript
net user %username% password
```

# SC
用来与服务控制管理器和服务进行通信  <br />  sc <server> [command] [service name] <option1> <option2>...  <br />  ​

 <server> 选项的格式为 "\\ServerName"  <br />   可通过键入以下命令获取有关命令的更多帮助: "sc [command]"  <br />   命令:  <br />   query-----------查询服务的状态，或枚举服务类型的状态。  <br />   queryex---------查询服务的扩展状态或枚举服务类型的状态。  <br />   start-----------启动服务。  <br />   pause-----------向服务发送 PAUSE 控制请求。  <br />   interrogate-----向服务发送 INTERROGATE 控制请求。  <br />   continue--------向服务发送 CONTINUE 控制请求。  <br />   stop------------向服务发送 STOP 请求。  <br />   config----------更改服务的配置(永久)。  <br />   description-----更改服务的描述。  <br />   failure---------更改失败时服务执行的操作。  <br />   failureflag-----更改服务的失败操作标志。  <br />   sidtype---------更改服务的服务 SID 类型。  <br />   privs-----------更改服务的所需特权。  <br />   managedaccount--更改服务以将服务帐户密码标记为由 LSA 管理。  <br />   qc--------------查询服务的配置信息。  <br />   qdescription----查询服务的描述。  <br />   qfailure--------查询失败时服务执行的操作。  <br />   qfailureflag----查询服务的失败操作标志。  <br />   qsidtype--------查询服务的服务 SID 类型。  <br />   qprivs----------查询服务的所需特权。  <br />   qtriggerinfo----查询服务的触发器参数。  <br />   qpreferrednode--查询服务的首选 NUMA 节点。  <br />   qmanagedaccount-查询服务是否将帐户与 LSA 管理的密码结合使用。  <br />   qprotection-----查询服务的进程保护级别。  <br />   quserservice----查询用户服务模板的本地实例。  <br />   delete ----------(从注册表中)删除服务。  <br />   create----------创建服务(并将其添加到注册表中)。  <br />   control---------向服务发送控制。  <br />   sdshow----------显示服务的安全描述符。  <br />   sdset-----------设置服务的安全描述符。  <br />   showsid---------显示与任意名称对应的服务 SID 字符串。  <br />   triggerinfo-----配置服务的触发器参数。  <br />   preferrednode---设置服务的首选 NUMA 节点。  <br />   GetDisplayName--获取服务的 DisplayName。  <br />   GetKeyName------获取服务的 ServiceKeyName。  <br />   EnumDepend------枚举服务依赖关系。  <br />  ​

 以下命令不需要服务名称:  <br />   sc <server> <command> <option>  <br />   boot------------(ok | bad)指示是否应将上一次启动另存为最近一次已知的正确启动配置  <br />   Lock------------锁定服务数据库  <br />   QueryLock-------查询 SCManager 数据库的 LockStatus  <br />  ​

QUERY 和 QUERYEX 选项:  <br />   如果查询命令带服务名称，将返回  <br />   该服务的状态。其他选项不适合这种  <br />   情况。如果查询命令不带参数或  <br />   带下列选项之一，将枚举此服务。  <br />   type= 要枚举的服务的类型(driver, service, userservice, all)  <br />   (默认 = service)  <br />   state= 要枚举的服务的状态 (inactive, all)  <br />   (默认 = active)  <br />   bufsize= 枚举缓冲区的大小(以字节计)  <br />   (默认 = 4096)  <br />   ri= 开始枚举的恢复索引号  <br />   (默认 = 0)  <br />   group= 要枚举的服务组  <br />   (默认 = all groups)  <br />  ​

语法示例  <br />  sc query - 枚举活动服务和驱动程序的状态  <br />  sc query eventlog - 显示 eventlog 服务的状态  <br />  sc queryex eventlog - 显示 eventlog 服务的扩展状态  <br />  sc query type= driver - 仅枚举活动驱动程序  <br />  sc query type= service - 仅枚举 Win32 服务  <br />  sc query state= all - 枚举所有服务和驱动程序  <br />  sc query bufsize= 50 - 枚举缓冲区为 50 字节  <br />  sc query ri= 14 - 枚举时恢复索引 = 14  <br />  sc queryex group= "" - 枚举不在组内的活动服务  <br />  sc query type= interact - 枚举所有不活动服务  <br />  sc query type= driver group= NDIS - 枚举所有 NDIS 驱动程序

# ATTRIB
显示或更改文件属性  <br />  ATTRIB [+R | -R] [+A | -A] [+S | -S] [+H | -H] [+O | -O] [+I | -I] [+X | -X] [+P | -P] [+U | -U]  <br />   [drive:][path][filename] [/S [/D]] [/L]

-  + 设置属性。
-  - 清除属性。
- R   只读文件属性。
- A   存档文件属性。
- S   系统文件属性。
- H   隐藏文件属性。
- O   脱机属性。
- I   无内容索引文件属性。
- X   无清理文件属性。
- V   完整性属性。
- P   固定属性。
- U   非固定属性。
- /S  处理当前文件夹及其所有子文件夹中的匹配文件。
- /D  也处理文件夹。
- /L  处理符号链接和符号链接目标的属性

​

隐藏文件：attrib +s +h + 文件路径  <br />  取消隐藏：attrib -s -h + 文件路径

# copy
将一份或多份文件复制到另一个位置。  <br />  COPY [/D] [/V] [/N] [/Y | /-Y] [/Z] [/L] [/A | /B ] source [/A | /B]  <br />   [+ source [/A | /B] [+ ...]] [destination [/A | /B]]  <br />  ​

 source 指定要复制的文件。  <br />   /A 表示一个 ASCII 文本文件。  <br />   /B 表示一个二进位文件。  <br />   /D 允许解密要创建的目标文件  <br />   destination 为新文件指定目录和/或文件名。  <br />   /V 验证新文件写入是否正确。  <br />   /N 复制带有非 8dot3 名称的文件时，尽可能使用短文件名。  <br />   /Y 不使用确认是否要覆盖现有目标文件的提示。  <br />   /-Y 使用确认是否要覆盖现有目标文件的提示。  <br />   /Z 用可重新启动模式复制已联网的文件。  <br />   /L 如果源是符号链接，请将链接复制到目标而不是源链接指向的实际文件。

# xcopy
复制文件和目录树。  <br />  XCOPY source [destination] [/A | /M] [/D[:date]] [/P] [/S [/E]] [/V] [/W]  <br />   [/C] [/I] [/Q] [/F] [/L] [/G] [/H] [/R] [/T] [/U]  <br />   [/K] [/N] [/O] [/X] [/Y] [/-Y] [/Z] [/B] [/J]  <br />   [/EXCLUDE:file1[+file2][+file3]...]  <br />  ​

source       指定要复制的文件。  <br />  destination  指定新文件的位置和/或名称。  <br />  /A           仅复制有存档属性集的文件，不更改属性。  <br />  /M           仅复制有存档属性集的文件，并关闭存档属性。  <br />  /D:m-d-y     复制在指定日期或指定日期以后更改的文件。  <br />  /EXCLUDE:file1[+file2][+file3]...   指定含有字符串的文件列表。  <br />  /P           创建每个目标文件之前提示你。  <br />  /S           复制目录和子目录，不包括空目录。  <br />  /E           复制目录和子目录，包括空目录。  <br />  /V           验证每个新文件的大小。  <br />  /W           提示你在复制前按键。  <br />  /C           即使有错误，也继续复制。  <br />  /I           如果目标不存在，且要复制多个文件，则假定目标必须是目录。  <br />  /Q           复制时不显示文件名。  <br />  /F           复制时显示完整的源文件名和目标文件名。  <br />  /L           显示要复制的文件。  <br />  /G           允许将加密文件复制到不支持加密的目标。  <br />  /H           也复制隐藏文件和系统文件。  <br />  /R           覆盖只读文件。  <br />  /T           创建目录结构，但不复制文件。  <br />  /U           只复制已经存在于目标中的文件。  <br />  /K           复制属性。一般的 Xcopy 会重置只读属性。  <br />  /N           用生成的短名称复制。  <br />  /O           复制文件所有权和 ACL 信息。  <br />  /X           复制文件审核设置(隐含 /O)。  <br />  /Y           取消提示以确认要覆盖现有目标文件。  <br />  /-Y          要提示以确认要覆盖现有目标文件。  <br />  /Z           在可重新启动模式下复制网络文件。  <br />  /B           复制符号链接本身与链接目标。  <br />  /J           复制时不使用缓冲的 I/O。推荐复制大文件时使用

# del & erase
删除一个或多个文件。  <br />  DEL [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names  <br />  ERASE [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names  <br />  names         指定一个或多个文件或者目录列表，可用通配符  <br />  /P            删除每一个文件之前提示确认。  <br />  /F            强制删除只读文件。  <br />  /S            删除所有子目录中的指定的文件。  <br />  /Q            安静模式。删除全局通配符时，不要求确认  <br />  /A            根据属性选择要删除的文件  <br />   属性 R 只读文件 S 系统文件  <br />   H 隐藏文件 A 准备存档的文件  <br />   I 无内容索引文件 L 重新分析点  <br />   O 脱机文件 - 表示“否”的前缀

# FC
比较两个文件或两个文件集并显示它们之间的不同  <br />  FC [/A] [/C] [/L] [/LBn] [/N] [/OFF[LINE]] [/T] [/U] [/W] [/nnnn]  [drive1:][path1]filename1 [drive2:][path2]filename2  <br />  FC /B [drive1:][path1]filename1 [drive2:][path2]filename2  <br />  /A         只显示每个不同处的第一行和最后一行。  <br />  /B         执行二进制比较。  <br />  /C         不分大小写。  <br />  /L         将文件作为 ASCII 文字比较。  <br />  /LBn       将连续不匹配的最大值设置为指定的行数。  <br />  /N         在 ASCII 比较上显示行数。  <br />  /OFF[LINE] 不要跳过带有脱机属性集的文件。  <br />  /T         不要将制表符扩充到空格。  <br />  /U         将文件作为 UNICODE 文本文件比较。  <br />  /W         为了比较而压缩空白(制表符和空格)。  <br />  /nnnn      指定不匹配处后必须连续匹配的行数  <br />  ​  <br />  

# 目录（directory）操作

## DIR
显示目录中的文件和子目录列表  <br />  DIR [drive:][path][filename] [/A[[:]attributes]] [/B] [/C] [/D] [/L] [/N]  <br />   [/O[[:]sortorder]] [/P] [/Q] [/R] [/S] [/T[[:]timefield]] [/W] [/X] [/4]  <br />  
  <br />   /A 显示具有指定属性的文件。 属性 D 目录 R 只读文件  <br />   H 隐藏文件 A 准备存档的文件  <br />   S 系统文件 I 无内容索引文件  <br />   L 重新分析点 O 脱机文件 - 表示“否”的前缀  <br />   /B 使用空格式(没有标题信息或摘要)。  <br />   /C 在文件大小中显示千位数分隔符。这是默认值。用 /-C 来禁用分隔符显示。  <br />   /D 跟宽式相同，但文件是按栏分类列出的。  <br />   /L 用小写。  <br />   /N 新的长列表格式，其中文件名在最右边。  <br />   /O 用分类顺序列出文件。排列顺序 N 按名称(字母顺序) S 按大小(从小到大)  <br />   E 按扩展名(字母顺序) D 按日期/时间(从先到后)  <br />   G 组目录优先 - 反转顺序的前缀  <br />   /P 在每个信息屏幕后暂停。  <br />   /Q 显示文件所有者。  <br />   /R 显示文件的备用数据流。  <br />   /S 显示指定目录和所有子目录中的文件。  <br />   /T 控制显示或用来分类的时间字符域时间段 C 创建时间  <br />   A 上次访问时间  <br />   W 上次写入的时间  <br />   /W 用宽列表格式。  <br />   /4 以四位数字显示年份

## MD / MKDIR
创建目录  <br />  MKDIR [drive:]path  <br />  MD [drive:]path

## RD / RMDIR
删除一个目录。  <br />  RMDIR [/S] [/Q] [drive:]path  <br />  RD [/S] [/Q] [drive:]path  <br />  /S      除目录本身外，还将删除指定目录下的所有子目录和文件。用于删除目录树。  <br />  /Q      安静模式，带 /S 删除目录树时不要求确认

## CD / CHDIR
显示当前目录名或改变当前目录。  <br />  CHDIR [/D] [drive:][path]  <br />  CHDIR [..]  <br />  CD [/D] [drive:][path]  <br />  CD [..]  <br />  ..   指定要改成父目录。

## MKLINK
创建符号链接  <br />  MKLINK [[/D] | [/H] | [/J]] Link Target

-  /D 创建目录符号链接。默认为文件符号链接。
-  /H 创建硬链接而非符号链接。
-  /J 创建目录联接。
-  Link 指定新的符号链接名称。
-  Target 指定新链接引用的路径 (相对或绝对)。

## tree
以图形显示驱动器或路径的文件夹结构  <br />  TREE [drive:][path] [/F] [/A]  <br />  /F   显示每个文件夹中文件的名称。  <br />  /A   使用 ASCII 字符，而不使用扩展字符

# reg
对注册表项中的注册表子项信息和值执行操作

| [reg add](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-add) | 向注册表中添加新的子项或条目。 |
| --- | --- |
| [reg compare](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-compare) | 比较指定的注册表子项或条目。 |
| [reg copy](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-copy) | 将注册表项复制到本地或远程计算机上的指定位置。 |
| [reg delete](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-delete) | 删除注册表中的一个或一些项。 |
| [reg export](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-export) | 将本地计算机的指定子项、项和值复制到文件中，以便传输到其他服务器。 |
| [reg import](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-import) | 将包含导出的注册表子项、项和值的文件的内容复制到本地计算机的注册表中。 |
| [reg load](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-load) | 将保存的子项和项写入注册表中的不同子项。 |
| [reg query](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-query) | 返回位于注册表中指定子项下的子子项和条目的列表。 |
| [reg restore](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-restore) | 将保存的子项和项写入注册表。 |
| [reg save](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-save) | 在指定的文件中保存指定子项、项和注册表值的副本。 |
| [reg unload](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/reg-unload) | 删除使用 reg load 操作加载的注册表部分。 |


# Internet

## IPCONFIG
ipconfig [/allcompartments] [/? | /all |/renew [adapter] | /release [adapter] |  <br />                               /renew6 [adapter] | /release6 [adapter] |  <br />                               /flushdns | /displaydns | /registerdns |  <br />                               /showclassid adapter |  <br />                               /setclassid adapter [classid] |  <br />                               /showclassid6 adapter |  <br />                               /setclassid6 adapter [classid] ]  <br />  ​

ipconfig：显示绑定到 TCP/IP 的每个适配器的 IP 地址、子网掩码和默认网关  <br />  ipconfig /all ：查看电脑网络连接信息，包括本地IP、DNS地址等。  <br />  ipconfig /flushdns：清除DNS解析程序缓存。

## RASDIAL
rasdial entryname [username [password|*]] [/DOMAIN:domain]  <br />              [/PHONE:phonenumber] [/CALLBACK:callbacknumber]  <br />              [/PHONEBOOK:phonebookfile] [/PREFIXSUFFIX]  <br />      rasdial [entryname] /DISCONNECT  <br />  ​

**网络连接**
```javascript
rasdial 宽带连接名 用户名 密码
```

## netsh
netsh [-a AliasFile] [-c Context] [-r RemoteMachine] [-u [DomainName]UserName] [-p Password | *]  <br />  [Command | -f ScriptFile]  <br />  ​

**开热点（WIFI）**
```javascript
::开启系统承载网络模块和新建无线网络
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
```



# 函数
```javascript
:function_name
Do_something
EXIT /B 0
```



# —— 实例 ——

## 规定时间杀程序
```javascript
do
set bag=getobject("winmgmts:\\.\root\cimv2")
set pipe=bag.execquery("select * from win64_process where name=*QQ.exe*")
for each i in pipe
i.terminate()
nextwscript.sleep 1000
loop
```
