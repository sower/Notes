---
title: Command
created_at: 2022-02-12T02:31:37.000Z
updated_at: 2023-01-08T11:14:20.000Z
word_count: 15079
---
# Command  
## —— [Command ](https://linuxcommandlibrary.com/)——

内建命令： 一些比较简单的 Linux 系统命令是写在 bash 源码的 builtins 里面的，由 shell 程序识别并在 shell 程序内部完成运行，通常在 Linux 系统加载运行时 shell 就被加载并驻留在系统内存中。而且解析内部命令 shell 不需要创建子进程，因此其执行速度比外部命令快。比如：history、cd、exit 等。  <br />  外部命令： Linux 系统中的实用程序部分，因为实用程序的功能通常都比较强大，程序量也很大，在系统加载时并不随系统一起被加载到内存中，而是在需要时才将其调入内存。虽然其不包含在 shell 中，但是其命令执行过程是由 shell 程序控制的。外部命令是在 Bash 之外额外安装的，通常放在/bin，/usr/bin，/sbin，/usr/sbin 等。比如：ls、vi 等。

**获取帮助**

- `whatis [-k] <command>`	简要说明命令的作用
- `man [-k] <command>`		Manual pages
- `<command> --help | -h`



**查询命令路径**

- `which <command>`	查找并显示给定命令的绝对路径
- `whereis <command>` 	将相关的文件都查找出来
- `type <command>`**	显示命令类型的信息**
   - -a	查看命令的所有定义
   - -t	返回命令的类型：别名（alias），关键词（keyword），函数（function），内置命令（builtin）和文件（file）

  <br />  **查看系统信息**  <br />  查看Linux内核版本  <br />  cat /proc/version  <br />  uname -a  <br />  Linux系统版本	lsb_release -a  <br />  系统的位数	file /bin/ss  <br />  CPU信息	cat /proc/cpuinfo	lscpu  <br />  shell	cat /etc/shells


uname	print system information  <br />  uname [OPTION]...

- -a, --all
- -s, --kernel-name        输出内核名称
- -n, --nodename           输出网络节点上的主机名
- -r, --kernel-release     输出内核发行号
- -v, --kernel-version     输出内核版本
- -m, --machine            输出主机的硬件架构名称
- -p, --processor          输出处理器类型（不可移植）
- -i, --hardware-platform  输出硬件平台或（不可移植）
- -o, --operating-system   输出操作系统名称


history [-c] [-d offset] [n]  <br />  history -anrw [filename]

- -c           清空历史列表。
- -d offset    根据offset删除记录。如果为负数则表示从结尾向前offset位置的记录。
- -a           将当前终端的历史记录行添加到历史记录文件。
- -n           将尚未从历史文件中读取的历史行追加到当前历史列表中。
- -r           读取历史文件，并将其内容附加到历史列表中。
- -w           将当前历史记录列表附加到历史记录文件中并且附加它们到历史列表中。

相关环境变量
```shell
HISTTIMEFORMAT="%Y-%m-%d %H:%M:%S  `whoami` "

# 历史命令记录数
HISTSIZE=1000

# 记录历史的文件的大小
HISTFILESIZE=450

# 指定不同终端执行的命令都存储在同一个文件中
HISTFILE=/root/.commandline_warrior

# 多个终端同时操作时，避免命令覆盖，采用追加方式
shopt -s histappend

# 忽略重复命令
HISTCONTROL=ignoredups

# ~/.bash_history 记录的是前一次登陆所运行过的命令
# 本次登陆所运行的命令都被缓存在内存中，当退出后，才会记录到 .bash_history 中
```


### 常用


**echo [option]  message**  <br />  输出一行文本

- -n	取消换行
- -e	解释引号（双引号和单引号）里面的特殊字符



**clear 清屏**

exit - cause normal process termination  <br />  exit [n]

date  <br />  cal

time [options] COMMAND [arguments]	测量指令执行时所需消耗的时间

halt	poweroff	reboot  <br />  shutdown [OPTIONS...] [TIME] [WALL...]

- -H, --halt
- -P, --poweroff
- -r, --reboot
- -c Cancel
- -h [n | hh:mm]	n分钟后关机


sync - Synchronize cached writes to persistent storage  <br />  sync [OPTION] [FILE]

- -d, --data	sync only file data, no unneeded metadata
- -f, --file-system	sync the file systems that contain the files

alias [-p] [名称[=值] ... ]  <br />  -p        以可重用的格式打印所有的已定义的别名  <br />  unalias [-a] 名称 [名称 ...]  <br />  -a        删除所有的别名定义

IFS（内部字段分隔符，Internal Field Separator），修改分隔标志

### 文件管理
**cd - Change Directory **  <br />  cd [路径]

| 特殊符号 | 作 用 |
| --- | --- |
| ~ | 代表当前登录用户的主目录 |
| ~用户名 | 表示切换至指定用户的主目录 |
| - | 代表上次所在目录 |
| . | 代表当前目录 |
| .. | 代表上级目录 |



**ls - list directory contents**  <br />  **ls [OPTION]  [FILE]**

| 选项 | 功能 |
| --- | --- |
| -a | 显示全部的文件，包括隐藏文件（开头为 . 的文件） |
| -A | 显示全部的文件，连同隐藏文件，但不包括 . 与 .. 这两个目录。 |
| -d | 仅列出目录本身 |
| -f | ls 默认会以文件名排序，使用 -f 选项会直接列出结果，而不进行排序。 |
| -F | 在文件或目录名后加上文件类型的指示符号（* 代表可运行文件，/ 代表目录，= 代表 [socket](http://c.biancheng.net/socket/) 文件，&#124; 代表 FIFO 文件） |
| -h | 以人们易读的方式显示文件或目录大小，如 1KB、234MB、2GB 等。 |
| -i | 显示 inode 节点信息。 |
| -l | 使用长格式列出文件和目录信息。 |
| -n | 以 UID 和 GID 分别代替文件用户名和群组名显示出来。 |
| -r | 倒序 |
| -R | 连同子目录内容一起列出来 |
| -S | 以文件容量大小排序 |
| -t | 以时间排序 |
| --color=never  <br />  --color=always  <br />  --color=auto | never 表示不依据文件特性给予颜色显示。  <br />  always 表示显示颜色，ls 默认采用这种方式。  <br />  auto 表示让系统自行依据配置来判断是否给予颜色。 |
| --full-time | 以完整时间模式 （包含年、月、日、时、分）输出 |
| --time=`{atime,ctime}` | 输出 access 时间或改变权限属性时间（ctime），而不是内容变更时间。 |

**ll = 'ls -alF'**

**tree**  <br />  以树状图列出目录的内容

- -a 显示所有文件和目录。
- -A 使用ASNI绘图字符显示树状图而非以ASCII字符组合。
- -C 在文件和目录清单加上色彩，便于区分各种类型。
- -d 显示目录名称而非内容。
- -D 列出文件或目录的更改时间。
- -f 在每个文件或目录之前，显示完整的相对路径名称。
- -F 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上"*","/","=","@","|"号。
- -g 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。
- -i 不以阶梯状列出文件或目录名称。
- -L level 限制目录显示层级。
- -l 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。
- -n 不在文件和目录清单加上色彩。
- -p 列出权限标示。
- -s 列出文件或目录大小



**mkdir - make directories**  <br />  mkdir [OPTION]... DIRECTORY...

- -m, --mode=MODE 手动配置所创建目录的权限
- -p, --parents 递归创建所有目录
- -v, --verbose



**rmdir - remove empty directories **  <br />  rmdir [OPTION]... DIRECTORY...

- --ignore-fail-on-non-empty
- -p, --parents 递归所有目录
- -v, --verbose



**rm   - remove files or directories**  <br />  **rm [选项] 文件**

- -f, --force 忽略不存在的文件，从不给出提示。
- -i, --interactive 进行交互式删除
- -r, -R, --recursive
- -d, --dir remove empty directories



**cp - **copy files and directories  <br />  cp [选项] 源文件 目标文件

- -a, --archive	  same as -dR --preserve=all
- -P, --no-dereference  never follow symbolic links in SOURCE
- -i --interactive
- -l, --link	hard link files instead of copying
- -L, --dereference	always follow symbolic links in SOURCE
- -s, --symbolic-link	make symbolic links instead of copying
- -R, -r, --recursive
- -u, --update



**mv  - **move (rename)  <br />  mv [选项] 源文件 目标文件

- -f, --force
- -i, --interactive
- -n, --no-clobber   do not overwrite an existing file
- -v：显示文件或目录的移动过程；
- -u, --update



**touch	**change file timestamps  <br />  touch [选项] 文件名

- -a：只修改文件的访问时间；
- -c：仅修改文件的时间参数（3 个时间参数都改变），如果文件不存在，则不建立新文件。
- -d, --date=STRING
- -m：只修改文件的数据修改时间。
- -r, --reference=FILE
- -t：命令后面可以跟欲修订的时间，而不用目前的时间，时间书写格式为 YYMMDDhhmm。

file	查看文件类型

**ln	设置文件连接**  <br />  ln [选项] 源文件 目标文件

- -s：建立软链接文件。如果不加 "-s" 选项，则建立硬链接文件；
- -f：强制。如果目标文件已经存在，则删除目标文件后再建立链接文件；

locate	find files by name  <br />  通过查询 /var/lib/mlocate/mlocate.db 数据库来检索信息  <br />  locate [OPTION]... PATTERN

- -A, --all
- -b, --basename
- -c, --count
- -d, --database DBPATH
- -e, --existing
- -i, --ignore-case
- -p, --ignore-spaces
- -r, --regexp REGEXP



**find	查找文件**  <br />  `find path -option [ -print ] [ -exec -ok command ] {} \;`

- -name name, -iname name : 文件名称符合 name 的文件。iname 会忽略大小写
- -size n : 文件大小 是 n 单位，b 代表 512 位元组的区块，c 表示字元数，k 表示 kilo bytes，w 是二个位元组。
- -type : 文件类型
- -regex： 正则
- -atime 访问时间 (单位是天，分钟单位则是-amin，以下类似）
- -mtime 修改时间 （内容被修改）
- -ctime 变化时间 （元数据或权限变化）


### 文本处理


**cat - **concatenate	tac 倒序  <br />  cat [选项] [文件]

- -b, --number-nonblank 对非空输出行编号
- -n, --number 对输出的所有行编号,由1开始对所有输出的行数编号
- -s, --squeeze-blank 有连续两行以上的空白行，就代换为一行的空白行
- -A, --show-all 等价于 -vET
- -e 等价于 -vE
- -t 等价于-vT
- -v, --show-nonprinting 使用 ^ 和 M- 引用，除了 LFD 和 TAB 之外tml
- -T, --show-tabs 将跳格字符显示为 ^I
- -E, --show-ends 在每行结束处显示$
- -u (被忽略)



**nl	**number lines of files  <br />  nl [参数] [file]

- -b : 指定添加行号的方式
   - -b a：表示无论是否为空行，同样列出行号("cat -n"就是这种方式)
   - -b t：只列出非空行的编号并列出（默认为这种方式）
- -n : 设置行号的样式
   -  -n ln：在行号字段最左端显示
   -  -n rn：在行号字段最右边显示，且不加 0
   -  -n rz：在行号字段最右边显示，且加 0
- -w ：行号字段占用的位数(默认为 6 位)



**more [option] [-num ] [+/pattern] [file ... ]**  <br />  分页查看文件

- +n 从笫n行开始显示
- -n 定义屏幕大小为n行
- +/pattern 在每个档案显示前搜寻该字串(pattern)，然后从该字串前两行之后开始显示
- -c 从顶部清屏，然后显示
- -d 提示“Press space to continue，’q’ to quit(按空格键继续，按q键退出)”，禁用响铃功能
- -l 忽略Ctrl+l(换页)字符
- -p 通过清除窗口而不是滚屏来对文件进行换页，与-c选项相似
- -s 把连续的多个空行显示为一行
- -u 把文件内容中的下画线去掉



**less**

- -N	显示每行的行号。
- -e	当文件显示结束后，自动离开。

**交互模式下**

- /pattern	向下匹配搜索
- ?pattern	向上匹配搜索
- n	重复前一个搜索
- N	反向重复前一个搜索
- &pattern        只显示匹配的行
- g	Go to first line in file (or line N).
- G	Go to last line in file (or line N).
- p	Go to beginning of file (or N percent into file)



**head [参数]  [文件]**

- -c, --bytes=[-]NUM
- -n, --lines=[-]NUM
- -q, --quiet, --silent	隐藏文件名
- -v --verbose	显示文件名



**tail [参数]  [文件]**

- -f, --follow`[={name|descriptor}]`  循环读取
- -c, --bytes=[+]NUM
- -n, --lines=[+]NUM
- --pid=PID 与-f合用，表示在进程ID，PID死掉之后结束
- -s, --sleep-interval=S 与-f合用，表示在每次反复的间隔休眠S秒



**sort**

- -b, --ignore-leading-blanks
- -t, --field-separator=SEP
- -k, --key=KEYDEF
- -c --check
- -d --dictionary-order
- -f --ignore-case
- -i --ignore-nonprinting
- -h  --human-numeric-sort
- -M --month-sort
- -n --numeric-sort
- -o, --output=FILE
- -r --reverse
- -R：--random-sort
- -s, --stable
- -u, --unique



**grep - global regular expressions print		查找文本**  <br />  grep [OPTIONS] PATTERN [FILE...]  <br />  grep [OPTIONS] -e PATTERN ... [FILE...]		egrep  <br />  grep [OPTIONS] -f FILE ... [FILE...]

- -c --count
- -i --ignore-case
- -l, --files-with-matches
- -L, --files-without-match
- -n, --line-number
- -v --invert-match
- -w --word-regexp
- -r --recursive
- -R, --dereference-recursive

Context control:  <br />  -B, --before-context=NUM  print NUM lines of leading context  <br />  -A, --after-context=NUM   print NUM lines of trailing context  <br />  -C, --context=NUM         print NUM lines of output context  <br />  -NUM                      same as --context=NUM

**sed - stream editor **for filtering and transforming text  <br />  一种流编辑器，一次处理一行内容。处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用sed 命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。然后读入下行，执行下一个循环。如果没有使诸如‘D’ 的特殊命令，那会在两个循环之间清空模式空间，但不会清空保留空间。这样不断重复，直到文件末尾。文件内容并没有改变，除非你使用重定向存储输出或-i。  <br />  `sed [options] '[地址定界] command' file(s)`

| 选项 | 含义 |
| --- | --- |
| -e script | 多点编辑，允许在同一行里执行多条命令 |
| -f file | 指定script文件来处理输入的文本文件 |
| -n | 屏蔽启动输出，只打印匹配到的行 |
| -i | 此选项会直接修改源文件 |
| -r | --regexp-extended |

地址定界

- 默认对全文进行处理
- 单地址：
   - #：指定的行
   - /pattern/：被此处模式所能够匹配到的每一行
- 地址范围：
   - #,- #,+- /pat1/,/pat2/
   - #,/pat1/
- ~：步进
   - sed -n** '1~2p' ** 只打印奇数行 （1~2 从第1行，一次加2行）

command

- a\ 在当前行下面Append text
- i\ 在当前行上面Insert text
- c\ 把选定的行改为新的文本。
- y/inchars/outchars/	一对一的映射替换
- d D	删除选择的(第一)行。
- s/regexp/replacement/ 替换指定字符
- g G 获得内存缓冲区的内容，并替代/追加当前模板块中的文本
- l 列表不能打印字符的清单。
- n 读取下一个输入行，用下一个命令处理新的行而不是用第一个命令。
- N 追加下一个输入行到模板块后面并在二者间嵌入一个新行，改变当前行号码。
- p P打印模板块的(第一)行
- q 退出Sed
- h H 拷贝/追加模板块的内容到内存中的缓冲区
- r file	从file中读行
- w W	file	写并追加模板块到(第一行)file末尾
- !	取反
- =	打印当前行号码。 
- #	把注释扩展到下一个换行符以前。 



sed替换标记

- g	行内全面替换。 
- p	打印行。 
- w	把行写入一个文件。 
- x	互换模板块中的文本和缓冲区中的文本
- \n 子串匹配标记
- & 已匹配字符串标记
```shell
sed -n -e '1~2=' -e '1~2p' test.txt
```

awk  Alfred Aho，Peter Weinberger 和 Brian Kernighan 创造  <br />  awk [选项] '脚本命令' 文件名  <br />  `awk 'BEGIN{ commands } pattern{ commands } END{ commands }'`

| 选项 | 含义 |
| --- | --- |
| -F fs | 指定以 fs 作为输入行的分隔符，awk 命令默认分隔符为空格或制表符。 |
| -f file | 从脚本文件中读取 awk 脚本指令，以取代直接在命令行中输入指令。 |
| -v var=val | 在执行处理过程之前，设置一个变量 var，并给其设备初始值为 val。 |

**数据字段变量**

- $0 代表整个文本行；
- $1 代表文本行中的第 1 个数据字段；
- $2 代表文本行中的第 2 个数据字段；
- $n 代表文本行中的第 n 个数据字段。



**cut	**remove sections from each line of files  <br />  显示每行从开头算起 n1 到 n2 的文字  <br />  cut  file [option] [n1,n2]

- -b ：以字节为单位进行分割。这些字节位置将忽略多字节字符边界，除非也指定了 -n 标志。
- -c ：以字符为单位进行分割。
- -d ：自定义分隔符，默认为制表符。
- -f ：与-d一起使用，指定显示哪个区域。
- -n ：取消分割多字节字符。仅和 -b 标志一起使用

N      N'th byte, character or field, counted from 1  <br />  N-     from N'th byte, character or field, to end of line  <br />  N-M    from N'th to M'th (included) byte, character or field  <br />  -M     from first to M'th (included) byte, character or field

**wc	**print  newline, word, and byte counts for each file  <br />  wc [-clw] [FILE]

- -c, --bytes
- -m, --chars
- -l --lines ：显示行数。
- -w --words：显示字数。
- -L, --max-line-length



**uniq	**report or omit repeated lines  <br />  uniq [-cdu] [-f<栏位>] [-s<字符位置>] [-w<字符位置>] [INPUT [OUTPUT]]

- -c --count：在每列旁边显示该行重复出现的次数。
- -d --repeated ：显示重复出现的行列。
- -u --unique ：显示出一次的行列。
- -i, --ignore-case
- -f, --skip-fields=N：忽略比较指定的栏位。
- -s, --skip-chars=N：忽略比较指定的字符。
- -w, --check-chars=N：指定要比较的字符



**tr	**translate or delete characters  <br />  tr [OPTION] …SET1[SET2]

- -c, --complement：反选设定字符。也就是符合 SET1 的部份不做处理，不符合的剩余部份才进行转换
- -d, --delete：删除指令字符
- -s, --squeeze-repeats：缩减连续重复的字符成指定的单个字符
- -t, --truncate-set1：削减 SET1 指定范围，使之与 SET2 设定长度相等



**join	**join lines of two files on a common field  <br />  join [option]... file1 file2

- -t	指定分隔符，默认为空格
- -i, --ignore-case
- -1	指明第一个文件要用哪个字段来对比，默认对比第一个字段
- -2	指明第二个文件要用哪个字段来对比，默认对比第一个字段

paste	merge lines of files  <br />  paste [option] file...

- -d, --delimiters=LIST
- -s, --serial：不合并到一行，每个文件为一行



**tee**  <br />  读取标准输入的数据，并将其内容输出成文件  <br />  tee [-ai] [文件...]

- -a --append 　附加到既有文件的后面，而非覆盖它．
- -i --ignore-interrupts 　忽略中断信号。



**col	**filter reverse line feeds from input  <br />  col [-bfhpx] [-l num]

- -b 过滤掉所有的控制字符，包括RLF和HRLF。
- -f 滤除RLF字符，但允许将HRLF字符呈现出来。
- -x		将Tab转换为空格
- -h	将空格转换为Tab（默认选项）
- -l<缓冲区列数> 预设的内存缓冲区有128列，您可以自行指定缓冲区的大小


### 权限管理

chgrp - change group  <br />  chgrp [OPTION]... GROUP FILE

- -c, --changes 当发生改变时输出调试信息
- -R, --recursive
- -f 不显示错误信息
- -v 显示详细的处理信息
- --dereference 作用于符号链接的指向，而不是符号链接本身
- --no-dereference 作用于符号链接本身

chown - change owner  <br />  chown [OPTION]... [OWNER][:[GROUP]] FILE

- -c, --changes
- -R, --recursive

chmod - change mode  <br />  chmod [-R]... MODE[,MODE]... FILE  <br />  ![](./assets/1644633126373-54dbce11-9d0c-4956-b786-b247b71881a1.gif)

**umask**  <br />  查看系统默认权限中准备丢弃的权限

- 文件最高权限为666
- 目录最高权限为777

文件（或目录）的初始权限 = 文件（或目录）的最大默认权限 - umask权限
```shell
if [ $UID -gt 199]&&[ "'id -gn'" = "'id -un'" ]; then
    umask 002
    #如果UID大于199（普通用户），则使用此umask值
else
    umask 022
    #如果UID小于199（超级用户），则使用此umask值
fi
```

getfacl  get file access control lists 查看文件或目录当前设定的 ACL 权限信息  <br />  getfacl [-aceEsRLPtpndvh] file  <br />  setfacl 选项 文件名

| 选项 | 功能 |
| --- | --- |
| -m 参数 | 设定 ACL 权限。如果是给予用户 ACL 权限，参数则使用 "u:用户名:权限" 的格式，例如 setfacl -m u:st:rx /project 表示设定 st 用户对 project 目录具有 rx 权限；如果是给予组 ACL 权限，参数则使用 "g:组名:权限" 格式，例如 setfacl -m g:tgroup:rx /project 表示设定群组 tgroup 对 project 目录具有 rx 权限。 |
| -x 参数 | 删除指定用户（参数使用 u:用户名）或群组（参数使用 g:群组名）的 ACL 权限，例如 setfacl -x u:st /project 表示删除 st 用户对 project 目录的 ACL 权限。 |
| -b | 删除所有的 ACL 权限，例如 setfacl -b /project 表示删除有关 project 目录的所有 ACL 权限。 |
| -d | 设定默认 ACL 权限，命令格式为 "setfacl -m d:u:用户名:权限 文件名"（如果是群组，则使用 d:g:群组名:权限），只对目录生效，指目录中新建立的文件拥有此默认权限，例如 setfacl -m d:u:st:rx /project 表示 st 用户对 project 目录中新建立的文件拥有 rx 权限。 |
| -R | 递归设定 ACL 权限，指设定的 ACL 权限会对目录下的所有子文件生效，命令格式为 "setfacl -m u:用户名:权限 -R 文件名"（群组使用 g:群组名:权限），例如 setfacl -m u:st:rx -R /project 表示 st 用户对已存在于 project 目录中的子文件和子目录拥有 rx 权限。 |
| -k | 删除默认 ACL 权限。 |


chattr - change file attributes on a Linux file system  <br />  chattr [+-=] [属性] 文件或目录名

- + 表示给文件或目录添加属性
- - 表示移除文件或目录拥有的某些属性
- = 表示给文件或目录设定一些属性

| 属性选项 | 功能 |
| --- | --- |
| i | 如果对文件设置 i 属性，那么不允许对文件进行删除、改名，也不能添加和修改数据； 如果对目录设置 i 属性，那么只能修改目录下文件中的数据，但不允许建立和删除文件； |
| a | 如果对文件设置 a 属性，那么只能在文件中増加数据，但是不能删除和修改数据； 如果对目录设置 a 属性，那么只允许在目录中建立和修改文件，但是不允许删除文件； |
| u | 设置此属性的文件或目录，在删除时，其内容会被保存，以保证后期能够恢复，常用来防止意外删除文件或目录。 |
| s | 和 u 相反，删除文件或目录时，会被彻底删除（直接从硬盘上删除，然后用 0 填充所占用的区域），不可恢复。 |


list file attributes on a Linux second extended file system  <br />  lsattr [选项] 文件或目录名

- -a：后面不带文件或目录名，表示显示所有文件和目录（包括隐藏文件和目录）
- -d：如果目标是目录，只会列出目录本身的隐藏属性，而不会列出所含文件或子目录的隐藏属性信息；
- -R：和 -d 恰好相反，作用于目录时，会连同子目录的隐藏信息数据也一并显示出来。


### 打包压缩

tar [必要参数] [选择参数] [文件]

- -A, --catenate, --concatenate   追加 tar 文件至归档
- -c, --create               创建一个新归档
- -d, --diff, --compare      找出归档和文件系统的差异
- -r, --append               追加文件至归档结尾
- -t, --list                 列出归档内容
- -u, --update               仅追加比归档中副本更新的文件
- -x, --extract, --get       从归档中解出文件
- -f, --file=ARCHIVE         使用归档文件或 ARCHIVE 设备
- -v, --verbose              详细地列出处理的文件

压缩

-  -a, --auto-compress 使用归档后缀名来决定压缩程序
-  -j, --bzip2 通过 bzip2 过滤归档
-  -z, --gzip, --gunzip, --ungzip 通过 gzip 过滤归档
-  --zstd 通过 zstd 过滤归档
-  -Z, --compress, --uncompress 通过 compress 过滤归档


**.tar文件格式**  <br />  解包：tar xvf FileName.tar  <br />  打包：tar cvf FileName.tar DirName  <br />  **.gz文件格式**  <br />  解压1：gunzip FileName.gz  <br />  解压2：gzip -d FileName.gz  <br />  压缩：gzip FileName  <br />  **.tar.gz 和 .tgz**  <br />  解压：tar zxvf FileName.tar.gz  <br />  压缩：tar zcvf FileName.tar.gz DirName  <br />  **.bz2文件格式**  <br />  解压1：bzip2 -d FileName.bz2  <br />  解压2：bunzip2 FileName.bz2  <br />  压缩： bzip2 -z FileName  <br />  **.tar.bz2文件格式**  <br />  解压：tar jxvf FileName.tar.bz2  <br />  压缩：tar jcvf FileName.tar.bz2 DirName  <br />  **.Z文件格式**  <br />  解压：uncompress FileName.Z  <br />  压缩：compress FileName  <br />  **.tar.Z文件格式**  <br />  解压：tar Zxvf FileName.tar.Z  <br />  压缩：tar Zcvf FileName.tar.Z DirName  <br />  **.zip文件格式**  <br />  解压：unzip FileName.zip  <br />  压缩：zip FileName.zip DirName  <br />  **.rar**  <br />  解压：rar x FileName.rar  <br />  压缩：rar a FileName.rar DirName


`zip [options][-b <目录>] [-t <日期时间>][-<压缩效率>][压缩文件][文件...] [-xi <样式>]`

- -r	递归压缩目录，及将制定目录下的所有文件以及子目录全部压缩。
- -m	将文件压缩之后，删除原始文件，相当于把文件移到压缩文件中。
- -v	显示详细的压缩过程信息。
- -q	在压缩的时候不显示命令的执行过程。
- -压缩级别	压缩级别是从 1~9 的数字，-1 代表压缩速度更快，-9 代表压缩效果更好。
- -u	更新压缩文件，即往压缩文件中添加新文件。
- -b <目录> 指定暂时存放文件的目录
- -d 从压缩文件内删除指定的文件
- -i <样式> 只压缩符合条件的文件
- -x <样式> 压缩时排除符合条件的文件
- -S 包含系统和隐藏文件
- -t<日期时间> 把压缩文件的日期设成指定的日期

`unzip [-cflptuvz][-agCjLMnoqsVX][-P <密码>][.zip文件][文件][-d <目录>][-x <文件>]`

- -d 目录名	将压缩文件解压到指定目录下。
- -n	解压时并不覆盖已经存在的文件。
- -o	解压时覆盖已经存在的文件，并且无需用户确认。
- -v	查看压缩文件的详细信息
- -t	测试压缩文件有无损坏，但并不解压。
- -l 显示压缩文件内所包含的文件
- -c 将解压缩的结果显示到屏幕上，并对字符做适当的转换
- -x 文件列表	解压文件，但不包含文件列表中指定的文件。


gzip [选项] 源文件

| 选项 | 含义 |
| --- | --- |
| -c | 将压缩数据输出到标准输出中，并保留源文件。 |
| -d | 对压缩文件进行解压缩。 |
| -r | 递归压缩指定目录下以及子目录下的所有文件。 |
| -v | 对于每个压缩和解压缩的文件，显示相应的文件名和压缩比。 |
| -l | 对每一个压缩文件，显示以下字段： 压缩文件的大小； 未压缩文件的大小； 压缩比； 未压缩文件的名称。 |
| -数字 | 用于指定压缩等级，-1 压缩等级最低，压缩比最差；-9 压缩比最高。默认压缩比是 -6。 |

gunzip [选项] 文件

| 选项 | 含义 |
| --- | --- |
| -r | 递归处理，解压缩指定目录下以及子目录下的所有文件。 |
| -c | 把解压缩后的文件输出到标准输出设备。 |
| -f | 强制解压缩文件，不理会文件是否已存在等情况。 |
| -l | 列出压缩文件内容。 |
| -v | 显示命令执行过程。 |
| -t | 测试压缩文件是否正常，但不对其做解压缩操作。 |


### 系统管理

w 或 who 命令都可以查看服务器上目前已登录的用户信息  <br />  w - Show who is logged on and what they are doing  <br />  w [options] [user]

- -h, --no-header     do not print header
- -u, --no-current    ignore current process username
- -s, --short         short format
- -f, --from          show remote hostname field
- -o, --old-style     old style output
- -i, --ip-addr       display IP address instead of hostname

| 标题 | 含义 |
| --- | --- |
| USER | 登录到系统的用户。 |
| TTY | 登录终端。 |
| FROM | 表示用户从哪里登陆进来，一般显示远程登陆主机的 IP 地址或者主机名。 |
| LOGIN@ | 用户登陆的日期和时间。 |
| IDLE | 表示某个程序上次从终端开始执行到现在所持续的时间。 |
| JCPU | 和该终端连接的所有进程占用的 CPU 运算时间 |
| PCPU | 当前进程所占用的 CPU 运算时间。 |
| WHAT | 当前用户正在执行的进程名称和选项 |


who - show who is logged on  <br />  who [OPTION]... [ FILE | ARG1 ARG2 ]

- -a, --all             等于-b -d --login -p -r -t -T -u 选项的组合
- -b, --boot            上次系统启动时间
- -d, --dead            显示已死的进程
- -H, --heading 输出头部的标题列
- -l，--login           显示系统登录进程
- -p, --process 显示由 init 进程衍生的活动进程
- -q, --count           列出所有已登录用户的登录名与用户数量
- -r, --runlevel        显示当前的运行级别
- -s, --short           只显示名称、线路和时间(默认)
- -T, -w, --mesg        用+，- 或 ? 标注用户消息状态
- -u, --users           列出已登录的用户

last, lastb - show a listing of last logged in users  <br />  last [options] [username...] [tty...]

- -<数字>              显示行数
- -a, --hostlast       最后一列显示主机名
- -d, --dns            将 IP 号转换回主机名
- -F, --file <文件>    用指定文件代替 /var/log/wtmp
- -F, --fulltimes      打印完整的登录和注销时间和日期
- -i, --ip             以数字和点的形式显示 IP 号
- -n, --limit <数字>   要显示的行数
- -R, --nohostname     不显示主机名字段
- -s, --since <时间>   显示从指定时间起的行
- -t, --until <时间>   显示到指定时间为止的行
- -p, --present <时间> 显示在指定时间谁在场(present)
- -w, --fullnames      显示完整的用户名和域名
- -x, --system         显示系统关机项和运行级别更改

lastlog - 报告所有用户的最近登录情况，或者指定用户的最近登录情况  <br />  lastlog [选项]  <br />  -b, --before DAYS             仅打印早于 DAYS 的最近登录记录  <br />  -C, --clear                   清除一个用户的最近登录记录(须配合 -u 使用)  <br />  -S, --set                     设置最近登录记录为当前时间(须配合 -u 使用)  <br />  -t, --time DAYS               仅打印晚于 DAYS 的最近登录记录  <br />  -u, --user LOGIN              打印 LOGIN 用户的最近登录记录

ps - process status  <br />  ps [options]

- a：显示一个终端的所有进程，除会话引线外；
- u：显示进程的归属用户及内存的使用情况；
- x：显示没有控制终端的进程；
- -l：Long format
- -e：Select all processes
   - ps aux		查看系统中所有的进程；
   - ps -le		查看系统中所有的进程，进程的父进程的 PID 和进程优先级；

进程状态

- -D：不可被唤醒的睡眠状态，通常用于 I/O 情况。
- -R：该进程正在运行。
- -S：该进程处于睡眠状态，可被唤醒。
- -T：停止状态，可能是在后台暂停或进程处于除错状态。
- -Z：僵尸进程。进程已经中止，但是部分程序还在内存当中。
- -<：高优先级（以下状态在 BSD 格式中出现）。
- -N：低优先级。
- -L：被锁入内存。
- -s：包含子进程。
- -l：多线程（小写 L）。
- -+：位于后台。


pstree - display a tree of processes  <br />  pstree [选项] [PID或用户名]

- -a, --arguments     显示命令行参数
- -c, --compact-not   不要对完全相同的子树进行压缩
- -h, --highlight-all 高亮显示当前进程和其所有祖先
- -n, --numeric-sort  按照 PID 对输出进行排序
- -p, --show-pids     显示 PID；隐含启用 -c 选项
- -u, --uid-changes   显示用户 ID（UID）的变化

top - display Linux processes

- -d 3：指定 top 命令每隔几秒更新
- -b：使用批处理模式输出。
- -n 次数：指定 top 命令执行的次数。
- -p PID：仅查看指定 ID 的进程；
- -s：使 top 命令在安全模式中运行，避免在交互模式中出现错误；
- -u 用户名：只监听某个用户的进程；

交互模式下

- P：以CPU使用率排序，默认此项
- M：以内存的使用率排序
- N：以PID排序
- q：退出top

lsof - list open files

- -i select IPv[46] files
- -F [f] select fields
- -l list UID numbers		显示用户ID而不是用户名
- -s list file size
- -p s   exclude(^)|select PIDs	列出某个 PID 进程打开的文件
- -i i   select by IPv[46] address: [46][proto][@host|addr][:svc_list|port_list]
- -s p:s  exclude(^)|select protocol (p = TCP|UDP) states by name(s).
- -u s   exclude(^)|select login|UID set s	列出某个用户的进程打开的文件

nice  <br />  给要启动的进程赋予 NI 值，不能修改已运行进程的 NI 值。  <br />  nice [-n NI值] 命令	 NI 值范围 -20~19

renice [优先级] PID

kill - send a signal to a process  <br />  `kill [options] <pid> [...]`

- -s sig SIG 是信号名称
- -n sig SIG 是信号编号

| 信号编号 | 信号名 | 含义 |
| --- | --- | --- |
| 0 | EXIT | 程序退出时收到该信息。 |
| 1 | HUP | 挂掉电话线或终端连接的挂起信号，这个信号也会造成某些进程在没有终止的情况下重新初始化。 |
| 2 | INT | 表示结束进程，但并不是强制性的，即"Ctrl+C" |
| 3 | QUIT | 退出。 |
| 9 | KILL | 杀死进程，即强制结束进程。 |
| 11 | SEGV | 段错误。 |
| 15 | TERM | 正常结束进程，是 kill 命令的默认信号。 |


killall - kill processes by name  <br />  killall [选项] [信号] 进程名

- -i,--interactive    在杀死进程前要求确认
- -I,--ignore-case    匹配进程名时忽略大小写
- -g,--process-group  杀死进程组而不是进程
- -y,--younger-than   杀死比指定<时间>年轻的进程
- -o,--older-than     杀死比指定<时间>年老的进程
- -r,--regexp         将 "进程名" 视为扩展正则表达式
- -s,--signal 信号    发送指定 "信号" 而不是 SIGTERM
- -u,--user 用户      仅杀死指定 "用户" 的进程
- -v,--verbose        报告信号是否成功送出
- -q,--quiet

pgrep, pkill - look up or signal processes based on name and other attributes  <br />  pkill [options] 

- -, --signal     signal to send (either number or name)
- -e, --echo                display what is killed
- -c, --count               count of matching processes
- -f, --full                use full process name to match
- -i, --ignore-case         match case insensitively
- -n, --newest              select most recently started
- -o, --oldest              select least recently started
- -P, --parent `<PPID,...>`   match only child processes of the given parent
- -s, --session `<SID,...>`   match session IDs
- -t, --terminal `<tty,...>`  match by controlling terminal
- -U, --uid `<ID,...>`        match by real IDs

trap  <br />  trap [command] [SIGINT]

把命令放入后台的方法：在命令后面加入 空格 &  <br />  **命令执行过裎中按 Ctrl+Z 快捷键，命令在后台处于暂停状态**

"+"：最近一个放入后台的工作，也是工作恢复时默认恢复的工作  <br />  "-"：倒数第二个放入后台的工作  <br />  第三个以后的工作就没有"+-"标志了

jobs [选项]  <br />  查看当前终端放入后台的工作

| 选项 | 含义 |
| --- | --- |
| -l（L 的小写） | 列出进程的 PID 号。 |
| -n | 只列出上次发出通知后改变了状态的进程。 |
| -p | 只列出进程的 PID 号。 |
| -r | 只列出运行中的进程。 |
| -s | 只列出已停止的进程。 |


fg: - Foreground  <br />  fg %工作号	（% 可有可无）

bg - Background  <br />  bg ％工作号

sleep - delay for a specified amount of time  <br />  sleep number[smhd]  <br />  s 为秒，m 为 分钟，h 为小时，d 为日数

nohup - No HangUP  <br />  让后台工作在离开操作终端时，也能够正确地在后台执行  <br />  nohup [命令] &


at [选项] [时间]

| 选项 | 含义 |
| --- | --- |
| -m | 当 at 工作完成后，无论命令是否输出，都用 E-mail 通知执行 at 命令的用户。 |
| -c 工作标识号 | 显示该 at 工作的实际内容。 |
| -t 时间 | 在指定时间提交工作并执行，时间格式为 [[CC]YY]MMDDhhmm。 |
| -d | 删除某个工作，需要提供相应的工作标识号（ID），同 atrm 命令的作用相同。 |
| -l | 列出当前所有等待运行的工作，和 atq 命令具有相同的额作用。 |
| -f 脚本文件 | 指定所要提交的脚本文件。 |

| 格式 | 用法 |
| --- | --- |
| HH:MM | 比如 04:00 AM。如果时间已过，则它会在第二天的同一时间执行。 |
| Midnight（midnight） | 代表 12:00 AM（也就是 00:00）。 |
| Noon（noon） | 代表 12:00 PM（相当于 12:00）。 |
| Teatime（teatime） | 代表 4:00 PM（相当于 16:00）。 |
| 英文月名 日期 年份 | 比如 January 15 2018 表示 2018 年 1 月 15 号，年份可有可无。 |
| MMDDYY、MM/DD/YY、MM.DD.YY | 比如 011518 表示 2018 年 1 月 15 号。 |
| now+时间 | 以 minutes、hours、days 或 weeks 为单位，例如 now+5 days 表示命令在 5 天之后的此时此刻执行。 |


atq  <br />  查看当前等待运行的工作  <br />  atrm [工作号]  <br />  用于删除指定的工作

**crontab**

- /etc/crontab	配置文件
- /etc/cron.allow
- /etc/cron.deny

crontab [选项] [file]  <br />  循环执行定时任务

| 选项 | 功能 |
| --- | --- |
| -u user | 用来设定某个用户的 crontab 服务 |
| -e | 编辑某个用户的 crontab 文件内容 |
| -l | 显示某用户的 crontab 文件内容 |
| -r | 从 /var/spool/cron 删除某用户的 crontab 文件 |
| -i | 在删除用户的 crontab 文件时，给确认提示。 |

**{秒数} {分钟} {小时} {日期} {月份} {星期} {年份(可为空)}**

| 字段 | 允许值 | 允许的特殊字符 |
| --- | --- | --- |
| 秒 | 0-59 | , - * / |
| 分 | 0-59 | , - * / |
| 小时 | 0-23 | , - * / |
| 日期 | 1-31 | , - * ? / L W C |
| 月份 | 1-12 或 JAN-DEC | , - * / |
| 星期 | 1-7 或 SUN-SAT | , - * ? / L C # |
| 年（可为空） | 留空, 1970-2099 | , - * / |


| 特殊符号 | 含义 |
| --- | --- |
| ***（星号）** | 代表任何时间。比如第一个"*"就代表一小时中每分钟都执行一次 |
| **,（逗号）** | 代表不连续的时间。比如"0 8，12***命令"代表每天的 8 点、12 点都执行一次命令。 |
| **-（中杠）** | 代表连续的时间范围。比如"0 5 ** 1-6命令"，代表在周一到周六的凌晨 5 点 0 分执行命令。 |
| **/（正斜线）** | 代表每隔多久执行一次。比如"*/10命令"，代表每隔 10 分钟就执行一次命令。 |
| **?** | 只在日期域和星期域中使用，用来指定“非明确的值”。 |
| **L** | Last，即最后一天 |
| **W** | 平日(Mon-Fri)，仅用于指定日期的最近工作日 |
| **#** | 指定具体的周数，"#“前面代表星期，”#"后面代表本月第几周，比如"5#3"表示本月第三周的星期四 |


e.g 1
```shell
# 进入编辑界面
crontab -e
# 每隔 5 分钟就向 /tmp/test 文件中写入一行“11”
*/5 * * * * /bin/echo "11" >> /tmp/test
```
e.g 2
```shell
在/etc/crontab 中加入
* * * * * root run-parts /root/cron/
#让系统每分钟都执行一次/root/cron/目录中的脚本，脚本执行者是root用户
```

anacron [选项] [工作名]  <br />  以 1 天、1周、1个月为检测周期，判断是否有定时任务在关机之后没有执行。如果有，anacron 会在特定的时间重新执行这些定时任务。  <br />  /etc/anacrontab

| 选项 | 功能 |
| --- | --- |
| -f | 强制执行相关工作，忽略时间戳。 |
| -u | 更新 /var/spool/anacron/cron.{daily，weekly，monthly} 文件中的时间戳为当前日期，但不执行任何工作。 |
| -s | 依据 /etc/anacrontab 文件中设定的延迟时间顺序执行工作，在前一个工作未完成前，不会开始下一个工作。 |
| -n | 立即执行 /etc/anacrontab 中所有的工作，忽略所有的延迟时间。 |
| -q | 禁止将信息输出到标准错误，常和 -d 选项合用。 |


vmstat - Virtual Meomory Statistics（虚拟内存统计）  <br />  监控 CPU 使用、进程状态、内存使用、虚拟内存使用、硬盘输入/输出状态等信息  <br />  vmstat [-a] [刷新延时 刷新次数]  <br />  vmstat [选项]

- -a ：用 inact/active（活跃与否） 来取代 buff/cache 的内存输出信息

| 选项 | 含义 |
| --- | --- |
| -fs | -f：显示从启动到目前为止，系统复制（fork）的程序数，此信息是从 /proc/stat 中的 processes 字段中取得的。 -s：将从启动到目前为止，由一些事件导致的内存变化情况列表说明。 |
| -S 单位 | 令输出的数据显示单位，例如用 K/M 取代 bytes 的容量。 |
| -d | 列出硬盘有关读写总量的统计表。 |
| -p 分区设备文件名 | 查看硬盘分区的读写情况。 |

| 字段 | 含义 |
| --- | --- |
| procs | 进程信息字段： -r：等待运行的进程数，数量越大，系统越繁忙。 -b：不可被唤醒的进程数量，数量越大，系统越繁忙。 |
| memory | 内存信息字段： -swpd：虚拟内存的使用情况，单位为 KB。 -free：空闲的内存容量，单位为 KB。 -buff：缓冲的内存容量，单位为 KB。 -cache：缓存的内存容量，单位为 KB。 |
| swap | 交换分区信息字段： -si：从磁盘中交换到内存中数据的数量，单位为 KB。 -so：从内存中交换到磁盘中数据的数量，单位为 KB。 这两个数越大，表明数据需要经常在磁盘和内存之间进行交换，系统性能越差。 |
| io | 磁盘读/写信息字段： -bi：从块设备中读入的数据的总量，单位是块。 -bo：写到块设备的数据的总量，单位是块。 这两个数越大，代表系统的 I/O 越繁忙。 |
| system | 系统信息字段： -in：每秒被中断的进程次数。 -cs：每秒进行的事件切换次数。 这两个数越大，代表系统与接口设备的通信越繁忙。 |
| cpu | CPU信息字段： -us：非内核进程消耗 CPU 运算时间的百分比。 -sy：内核进程消耗 CPU 运算时间的百分比。 -id：空闲 CPU 的百分比。 -wa：等待 I/O 所消耗的 CPU 百分比。 -st：被虚拟机所盗用的 CPU 百分比。 |


dmesg - diagnostic message  <br />  开机信息文件 /var/log/dmesg

free  <br />  显示系统内存状态，包括系统物理内存、虚拟内存（swap 交换分区）、共享内存和系统缓存的使用情况  <br />  free [选项]

| 选项 | 含义 |
| --- | --- |
| -b | 以 Byte（字节）为单位，显示内存使用情况。 |
| -k | 以 KB 为单位，显示内存使用情况，默认选项 |
| -m | 以 MB 为单位，显示内存使用情况。 |
| -g | 以 GB 为单位，显示内存使用情况。 |
| -t | 在输出的最终结果中，输出内存和 swap 分区的总量。 |
| -o | 不显示系统缓冲区这一列。 |
| -s 间隔秒数 | 根据指定的间隔时间，持续显示内存使用情况。 |


### 用户（组）

id - print real and effective user and group IDs  <br />  id [OPTION]... [USER]

whoami ——打印当前执行操作的用户名  <br />  who am i ——打印登陆当前 Linux 系统的用户名

su - Swith user  <br />  su [选项] 用户名

- -：切换为指定用户的身份和此用户的环境（包括 PATH 变量、MAIL 变量等），使用 - 选项省略用户名，默认会切换为 root 用户。
- -l：同 - 的使用类似，也就是在切换用户身份的同时，完整切换工作环境，但后面需要添加欲切换的使用者账号。
- -p：表示切换为指定用户的身份，但不改变当前的工作环境（不使用切换用户的配置文件）。
- -m：和 -p 一样；
- -c, --command COMMAND
- -s, --shell SHELL

sudoedit — execute a command as another user  <br />  sudo [option]

- -b, --background              在后台运行命令
- -u  ：后面可以接欲切换的用户名，若无此项则代表切换身份为 root 。
- -e, --edit                    编辑文件而非执行命令
- -g, --group=group             以指定的用户组或 ID 执行命令
- -u, --user=user               以指定用户或 ID 运行命令(或编辑文件)
- -H, --set-home                将 HOME 变量设为目标用户的主目录。

useradd 只创建用户，不会创建用户密码和工作目录，创建完了需要使用 passwd  去设置新用户的密码。  <br />  adduser 在创建用户的同时，会创建工作目录和密码（提示你设置）  <br />  useradd [选项] 用户名

| 选项 | 含义 |
| --- | --- |
| -u UID | 手工指定用户的 UID，注意 UID 的范围（不要小于 500）。 |
| -d 主目录 | 手工指定用户的主目录。主目录必须写绝对路径，而且如果需要手工指定主目录，则一定要注意权限； |
| -c 用户说明 | 手工指定/etc/passwd文件中各用户信息中第 5 个字段的描述性内容，可随意配置； |
| -g 组名 | 手工指定用户的初始组。一般以和用户名相同的组作为用户的初始组，在创建用户时会默认建立初始组。一旦手动指定，则系统将不会在创建此默认的初始组目录。 |
| -G 组名 | 指定用户的附加组。我们把用户加入其他组，一般都使用附加组； |
| -s shell | 手工指定用户的登录 Shell，默认是 /bin/bash； |
| -e 曰期 | 指定用户的失效曰期（ "YYYY-MM-DD"）。即/etc/shadow 文件的第八个字段； |
| -o | 允许创建的用户的 UID 相同 |
| -m | 建立用户时强制建立用户的家目录。在建立系统用户时，该选项是默认的； |
| -r | 创建系统用户，也就是 UID 在 1~499 之间，供系统程序使用的用户。由于系统用户主要用于运行系统所需服务的权限配置，因此系统用户的创建默认不会创建主目录。 |

userdel [-r] 用户名

- -r ：删除用户的家目录。

usermod [选项] 用户名

- -c 用户说明：修改用户的说明信息，即修改 /etc/passwd 文件目标用户信息的第 5 个字段；
- -d 主目录：修改用户的主目录，即修改 /etc/passwd 文件中目标用户信息的第 6 个字段，需要注意的是，主目录必须写绝对路径；
- -e 日期：修改用户的失效曰期，格式为 "YYYY-MM-DD"，即修改 /etc/shadow 文件目标用户密码信息的第 8 个字段；
- -g 组名：修改用户的初始组，即修改 /etc/passwd 文件目标用户信息的第 4 个字段（GID）；
- -u UID：修改用户的UID，即修改 /etc/passwd 文件目标用户信息的第 3 个字段（UID）；
- -G 组名：修改用户的附加组，把用户加入其他用户组，即修改 /etc/group 文件；
- -l 用户名：修改用户名称；
- -L：临时锁定用户（Lock）；
- -U：解锁用户（Unlock），和 -L 对应；
- -s shell：修改用户的登录 Shell，默认是 /bin/bash。

passwd [选项] 用户名

- -S：查询用户密码的状态，也就是 /etc/shadow 文件中此用户密码的内容。仅 root 用户可用；
- -l：暂时锁定用户，该选项会在 /etc/shadow 文件中指定用户的加密密码串前添加 "!"，使密码失效。仅 root 用户可用；
- -u：解锁用户，和 -l 选项相对应，也是只能 root 用户使用；
- --stdin：可以将通过管道符输出的数据作为用户的密码。主要在批量添加用户时使用；
- -n 天数：设置该用户修改密码后，多长时间不能再次修改密码，也就是修改 /etc/shadow 文件中各行密码的第 4 个字段；
- -x 天数：设置该用户的密码有效期，对应 /etc/shadow 文件中各行密码的第 5 个字段；
- -w 天数：设置用户密码过期前的警告天数，对于 /etc/shadow 文件中各行密码的第 6 个字段；
- -i 日期：设置用户密码失效日期，对应 /etc/shadow 文件中各行密码的第 7 个字段。

chage [选项] 用户名

- -l：列出用户的详细密码状态;
- -d 日期：修改 /etc/shadow 文件中指定用户密码信息的第 3 个字段，也就是最后一次修改密码的日期，格式为 YYYY-MM-DD；
- -m 天数：修改密码最短保留的天数，也就是 /etc/shadow 文件中的第 4 个字段；
- -M 天数：修改密码的有效期，也就是 /etc/shadow 文件中的第 5 个字段；
- -W 天数：修改密码到期前的警告天数，也就是 /etc/shadow 文件中的第 6 个字段；
- -i 天数：修改密码过期后的宽限天数，也就是 /etc/shadow 文件中的第 7 个字段；
- -E 日期：修改账号失效日期，格式为 YYYY-MM-DD，也就是 /etc/shadow 文件中的第 8 个字段。

gruop [用户名]  <br />  显示用户所在组

groupadd [选项] 组名

- -g GID：指定组 ID；
- -r：创建系统群组。

groupmod [选现] 组名

- -g GID：修改组 ID；
- -n 新组名：修改组名；

groupdel 组名

gpasswd 选项 组名  <br />  给群组设置一个群组管理员

| 选项 | 功能 |
| --- | --- |
|  | 选项为空时，表示给群组设置密码，仅 root 用户可用。 |
| -A user1,... | 将群组的控制权交给 user1,... 等用户管理 |
| -M user1,... | 将 user1,... 加入到此群组中，仅 root 用户可用。 |
| -r | 移除群组的密码，仅 root 用户可用。 |
| -R | 让群组的密码失效，仅 root 用户可用。 |
| -a user | 将 user 用户加入到群组中。 |
| -d user | 将 user 用户从群组中移除。 |

newgrp 组名  <br />  从用户的附加组中选择一个群组，作为用户新的初始组


### 网络
ip addr

hostname

- -a, --alias            alias names
- -A, --all-fqdns        all long host names (FQDNs)
- -d, --domain           DNS domain name
- -i, --ip-address       addresses for the host name
- -I, --all-ip-addresses all addresses for the host

ifconfig [-v] [-a] [-s] [interface]

- -a     display all interfaces which are currently available, even if down
- -s     display a short list
- -v     be more verbose for some error conditions

禁用网卡设备  <br />  ifdown	网卡设备名  <br />  启用网卡设备  <br />  ifup	网卡设备名

netstat 选项

- -a：列出系统中所有网络连接，包括已经连接的网络服务、监听的网络服务和 Socket 套接字；
- -t：列出 TCP 数据；
- -u：列出 UDF 数据；
- -l：列出正在监听的网络服务（不包含已经连接的网络服务）；
- -n：用端口号来显示而不用服务名；
- -p：列出该服务的进程 ID (PID)；
- -r：列出路由列表

查看路由状态  <br />  route -n  <br />  临时设定（或删除）网关  <br />  route [add | del] default gw 192.168.1.1

nslookup [主机名或IP]  <br />  进行域名与IP地址解析

ping [选项] ip或域名  <br />  探测指定IP或域名的网络状况

- -c：指定ping包的次数

traceroute [选项] IP或域名  <br />  路由跟踪命令

- -n：使用IP，不使用域名，速度更快

DNS查询	host domain  <br />  反向DNS查询	host IP

ufw - program for managing a netfilter firewall  <br />  ufw COMMAND  <br />  Commands:  <br />  enable                          enables the firewall  <br />  disable                         disables the firewall  <br />  default ARG                     set default policy  <br />  logging LEVEL                   set logging to LEVEL  <br />  allow ARGS                      add allow rule  <br />  deny ARGS                       add deny rule  <br />  reject ARGS                     add reject rule  <br />  limit ARGS                      add limit rule  <br />  delete RULE|NUM                 delete RULE  <br />  insert NUM RULE                 insert RULE at NUM  <br />  route RULE                      add route RULE  <br />  route delete RULE|NUM           delete route RULE  <br />  route insert NUM RULE           insert route RULE at NUM  <br />  reload                          reload firewall  <br />  reset                           reset firewall  <br />  status                          show firewall status  <br />  status numbered                 show firewall status as numbered list of RULES  <br />  status verbose                  show verbose firewall status  <br />  show ARG                        show firewall report


Wget - The non-interactive network downloader  <br />  一个GPL许可证下的自由软件，支持HTTP和FTP协议，支持代理服务器和断点续传功能，能够自动递归远程主机的目录，找到合乎条件的文件并将其下载到本地硬盘上  <br />  wget [option]... [URL]...

- -b,  --background                启动后转入后台
- -o,  --output-file=文件          将日志信息写入 FILE
- -q,  --quiet                     安静模式 (无信息输出)
- -v,  --verbose                   详尽的输出 (此为默认值)
- -i,  --input-file=文件           下载本地或外部 <文件> 中的 URL
- -t,  --tries=数字                设置重试次数为 <数字> (0 代表无限制)
- -nc, --no-clobber                不要下载已存在将被覆盖的文件
- -N,  --timestamping              只获取比本地文件新的文件
- -r,  --recursive                 指定递归下载

[curl](https://github.com/curl/curl) - transfer a URL	客户端（client）的 URL 工具  <br />  `curl [options...] <url>`

-   -O, --remote-name Write output to a file named as the remote file 
-  -o, --output `<file>` Write to file instead of stdout 
-  -i, --include Include protocol response headers in the output 
-  -I, --head Show document info only 
-  -v, --verbose Make the operation more talkative 
-  --trace `<file>` Write a debug trace to FILE 
-  -H, --header `<header/@file>` Pass custom header(s) to server 
-  -X, --request `<command>` Specify request command to use 
-  -d, --data `<data>` HTTP POST data 
-  -F, --form `<name=content>` Specify multipart MIME data 
-  -A, --user-agent `<name>` Send User-Agent `<name>` to server 
-  -b, --cookie `<data|filename>` Send cookies from string/file 
-  -c, --cookie-jar `<filename>` Write cookies to `<filename>` after operation 
-  -e, --referer `<URL>` Referrer URL 

-  -k, --insecure Allow insecure server connections when using SSL 
-  --limit-rate `<speed>` Limit transfer speed to RATE 
-  -x, --proxy [protocol://]host[:port] Use this proxy 
-  -m, --max-time `<seconds>` Maximum time allowed for the transfer 
-  -G, --get Put the post data in the URL and use GET 
-  -L, --location Follow redirects 



rsync 远程同步（remote sync）  <br />  检查发送方和接收方已有的文件，仅传输有变动的部分  <br />  `rsync [OPTION]... SRC [SRC]... [USER@]HOST:DEST`


### 文件系统管理


**df - disk free 可用容量**  <br />  df [选项] [目录或文件名]

| 选项 | 作用 |
| --- | --- |
| -a | 显示所有文件系统信息，包括系统特有的 /proc、/sysfs 等文件系统； |
| -m | 以 MB 为单位显示容量； |
| -k | 以 KB 为单位显示容量，默认以 KB 为单位； |
| -h | 使用人们习惯的 KB、MB 或 GB 等单位自行显示容量； |
| -T | 显示该分区的文件系统名称； |
| -i | 不用硬盘容量显示，而是以含有 inode 的数量来显示。 |

**du - Disk usage**  <br />  du [选项] [目录或文件名]

- -a：显示每个子文件的磁盘占用量。默认只统计子目录的磁盘占用量
- -h：使用习惯单位显示磁盘占用量，如 KB、MB 或 GB 等；
- -s：统计总磁盘占用量，而不列出子目录和子文件的磁盘占用量

mount	挂载磁盘到目录树

- -l：显示已加载的文件系统列表；
- -h：显示帮助信息并退出；
- -v：详细信息；
- -n：加载没有写入文件“/etc/mtab”中的文件系统；
- -r：将文件系统加载为只读模式；
- -a：加载文件“/etc/fstab”中描述的所有文件系统。
| 选项 | 功能 |
| --- | --- |
| rw/ro | 是否对挂载的文件系统拥有读写权限，rw 为默认值，表示拥有读写权限；ro 表示只读权限。 |
| async/sync | 此文件系统是否使用同步写入（sync）或异步（async）的内存机制，默认为异步 async。 |
| dev/nodev | 是否允许从该文件系统的 block 文件中提取数据，为了保证数据安装，默认是 nodev。 |
| auto/noauto | 是否允许此文件系统被以 mount -a 的方式进行自动挂载，默认是 auto。 |
| suid/nosuid | 设定文件系统是否拥有 SetUID 和 SetGID 权限，默认是拥有。 |
| exec/noexec | 设定在文件系统中是否允许执行可执行文件，默认是允许。 |
| user/nouser | 设定此文件系统是否允许让普通用户使用 mount 执行实现挂载，默认是不允许（nouser），仅有 root 可以。 |
| defaults | 定义默认值，相当于 rw、suid、dev、exec、auto、nouser、async 这 7 个选项。 |
| remount | 重新挂载已挂载的文件系统，一般用于指定修改特殊权限。 |


umount [directory | device]

fsck - File system check  <br />  fsck [选项] 分区设备文件名

| 选项 | 功能 |
| --- | --- |
| -a | 自动修复文件系统，没有任何提示信息。 |
| -r | 采取互动的修复模式，在修改文件前会进行询问，让用户得以确认并决定处理方式。 |
| -A | 按照 /etc/fstab 配置文件的内容，检查文件内罗列的全部文件系统。 |
| -t 文件系统类型 | 指定要检查的文件系统类型。 |
| -C | 显示检查分区的进度条。 |
| -f | 强制检测，一般 fsck 命令如果没有发现分区有问题，则是不会检测的。如果强制检测，那么不管是否发现问题，都会检测。 |
| -y | 自动修复，和 -a 作用一致，不过有些文件系统只支持 -y。 |


dumpe2fs [-h] 文件名  <br />  查看文件系统的详细信息

- -h ：仅列出 superblock（超级块）的数据信息

parted 硬盘设备文件名

| parted交互命令 | 说 明 |
| --- | --- |
| check NUMBER | 做一次简单的文件系统检测 |
| cp [FROM-DEVICE] FROM-NUMBER TO-NUMBER | 复制文件系统到另一个分区 |
| help [COMMAND] | 显示所有的命令帮助 |
| mklabel,mktable LABEL-TYPE | 创建新的磁盘卷标（分区表） |
| mkfs NUMBER FS-TYPE | 在分区上建立文件系统 |
| mkpart PART-TYPE [FS-TYPE] START END | 创建一个分区 |
| mkpartfs PART-TYPE FS-TYPE START END | 创建分区，并建立文件系统 |
| move NUMBER START END | 移动分区 |
| name NUMBER NAME | 给分区命名 |
| print [devices | free |
| quit | 退出 |
| rescue START END | 修复丢失的分区 |
| resize NUMBER START END | 修改分区大小 |
| rm NUMBER | 删除分区 |
| select DEVICE | 选择需要编辑的设备 |
| set NUMBER FLAG STATE | 改变分区标记 |
| toggle [NUMBER [FLAG]] | 切换分区表的状态 |
| unit UNIT | 设置默认的单位 |
| Version | 显示版本 |


mkfs - Make file system  <br />  mkfs [-t 文件系统格式] 分区设备文件名

- t 文件系统格式：用于指定格式化的文件系统，如 ext3、ext4；

quotacheck [-avugfM] 文件系统

| 选项 | 功能 |
| --- | --- |
| -a | 扫瞄所有在 /etc/mtab 中，含有 quota 支持的 filesystem，加上此参数后，后边的文件系统可以不写； |
| -u | 针对使用者扫瞄文件与目录的使用情况，会创建 aquota.user |
| -g | 针对群组扫瞄文件与目录的使用情况，会创建 aquota.group |
| -v | 显示扫瞄的详细过程； |
| -f | 强制扫瞄文件系统，并写入新的 quota 记录文件 |
| -M | 强制以读写的方式扫瞄文件系统，只有在特殊情况下才会使用。 |



