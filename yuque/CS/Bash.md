<a name="Gc9CH"></a>
# —— Bash ——
Shell 是一个用 C 语言编写的程序，提供一个与用户对话的环境。这个环境只有一个命令提示符，让用户从键盘输入命令，所以又称为命令行环境（command line interface，CLI）<br />​

种类

- Bourne Shell（/usr/bin/sh或/bin/sh）
- Bourne Again Shell（/bin/bash）	Bash Official Reference Manual
- C Shell（/usr/bin/csh）
- K Shell（/usr/bin/ksh）
- Shell for Root（/sbin/sh）

​

resources

- [awesome-shell](https://github.com/alebcay/awesome-shell)
- [awesome-bash](https://github.com/awesome-lists/awesome-bash)
- [Bash-Snippets](https://github.com/alexanderepstein/Bash-Snippets)
- [awesome-dotfiles](https://github.com/webpro/awesome-dotfiles)

​

查看类型	cat /etc/shells<br />查看版本号	bash --version
```shell
#! /bin/bash
# unset any variable which system may be using
# clear the screen
# tecmint_monitor.sh  实现 Linux 系统监控


while getopts ivh name # getopts 有三个参数，分别执行安装，查看版本，帮助说明
do
        case $name in
          i)iopt=1;;
          v)vopt=1;;
          h)hopt=1;;
         *)echo "Invalid arg";;
        esac
done

# 将脚本添加到环境的目录里，通过终端就可以执行命令
if [[ ! -z $iopt ]] #如果iopt非空则执行
then
{
wd=$(pwd)
basename "$(test -L "$0" && readlink "$0" || echo "$0")" > /tmp/scriptname
#basename命令会删掉所有的前缀包括最后一个slash（‘/’）字符，然后将字符串显示出来
scriptname=$(echo -e -n $wd/ && cat /tmp/scriptname)
#scriptname就是tecmint_monitor.sh的地址
su -c "cp $scriptname /usr/bin/monitor" root && \
echo "Congratulations! Script Installed, now run monitor Command" || echo "Installation failed"
}
fi

# 查看脚本的版本，版权等信息
if [[ ! -z $vopt ]]
then
{
echo -e "tecmint_monitor version 0.1\nDesigned by Tecmint.com\nReleased Under Apache 2.0 License"
}
fi

# 帮助信息
if [[ ! -z $hopt ]]
then
{
echo -e " -i                                Install script"
echo -e " -v                                Print version information and exit"
echo -e " -h                                Print help (this information) and exit"
}
fi

# 提取信息设置变量

if [[ $# -eq 0 ]]
then
{
clear

# 设置一些好记的变量名

# unset命令用于删除已定义的shell变量（包括环境变量）和shell函数。
unset tecreset os architecture kernelrelease internalip externalip nameserver loadaverage
# 定义变量 tecreset
tecreset=$(tput sgr0)

# 查看是否可以连网
ping -c 1 www.baidu.com &> /dev/null && \
echo -e '\E[32m'"Internet: $tecreset Connected" || echo -e '\E[32m'"Internet: $tecreset Disconnected"
# '\E[32m' 将打印的信息设置为绿色
# 查看系统的类型
os=$(uname -o)
echo -e '\E[32m'"Operating System Type :" $tecreset $os

# 查看系统的版本和名称
###################################
OS=`uname -s`
REV=`uname -r`
MACH=`uname -m`

GetVersionFromFile()
{
    VERSION=`cat $1 | tr "\n" ' ' | sed s/.*VERSION.*=\ // `
}

# 查看操作系统的类型
if [ "${OS}" = "SunOS" ] ; then
    OS=Solaris
    ARCH=`uname -p`
    OSSTR="${OS} ${REV}(${ARCH} `uname -v`)"
# uname命令用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。
elif [ "${OS}" = "AIX" ] ; then
    OSSTR="${OS} `oslevel` (`oslevel -r`)"
#AIX是IBM开发的一套类UNIX操作系统
elif [ "${OS}" = "Linux" ] ; then
    KERNEL=`uname -r`
    if [ -f /etc/redhat-release ] ; then
        DIST='RedHat'
        PSUEDONAME=`cat /etc/redhat-release | sed s/.*\(// | sed s/\)//`
        REV=`cat /etc/redhat-release | sed s/.*release\ // | sed s/\ .*//`
    elif [ -f /etc/SuSE-release ] ; then
        DIST=`cat /etc/SuSE-release | tr "\n" ' '| sed s/VERSION.*//`
        REV=`cat /etc/SuSE-release | tr "\n" ' ' | sed s/.*=\ //`
    elif [ -f /etc/mandrake-release ] ; then
        DIST='Mandrake'
        PSUEDONAME=`cat /etc/mandrake-release | sed s/.*\(// | sed s/\)//`
        REV=`cat /etc/mandrake-release | sed s/.*release\ // | sed s/\ .*//`
    elif [ -f /etc/debian_version ] ; then
        DIST="Debian `cat /etc/debian_version`"
        REV=""

    fi
    if ${OSSTR} [ -f /etc/UnitedLinux-release ] ; then
        DIST="${DIST}[`cat /etc/UnitedLinux-release | tr "\n" ' ' | sed s/VERSION.*//`]"
    fi

    OSSTR="${OS} ${DIST} ${REV}(${PSUEDONAME} ${KERNEL} ${MACH})"

fi

# 监控系统的各种信息
##################################
#cat /etc/os-release | grep 'NAME\|VERSION' | grep -v 'VERSION_ID' | grep -v 'PRETTY_NAME' > /tmp/osrelease
#echo -n -e '\E[32m'"OS Name :" $tecreset  && cat /tmp/osrelease | grep -v "VERSION" | grep -v CPE_NAME | cut -f2 -d\"
#echo -n -e '\E[32m'"OS Version :" $tecreset && cat /tmp/osrelease | grep -v "NAME" | grep -v CT_VERSION | cut -f2 -d\"

查看操作系统版本
echo -e '\E[32m'"OS Version :" $tecreset $OSSTR 
# 查看系统的类型
architecture=$(uname -m)
echo -e '\E[32m'"Architecture :" $tecreset $architecture

# 查看内核的版本
kernelrelease=$(uname -r)
echo -e '\E[32m'"Kernel Release :" $tecreset $kernelrelease

# 查看主机名
echo -e '\E[32m'"Hostname :" $tecreset $HOSTNAME

# 查看内网地址
internalip=$(hostname -I)
echo -e '\E[32m'"Internal IP :" $tecreset $internalip

# 查看外网地址
externalip=$(curl -s ipecho.net/plain;echo)
echo -e '\E[32m'"External IP : $tecreset "$externalip

# 查看DNS
nameservers=$(cat /etc/resolv.conf | sed '1 d' | awk '{print $2}')
echo -e '\E[32m'"Name Servers :" $tecreset $nameservers 

# 查看登陆的用户
who>/tmp/who
echo -e '\E[32m'"Logged In users :" $tecreset && cat /tmp/who 

# 查看系统内存使用情况
free -h | grep -v + > /tmp/ramcache
echo -e '\E[32m'"Ram Usages :" $tecreset
cat /tmp/ramcache | grep -v "Swap"
echo -e '\E[32m'"Swap Usages :" $tecreset
cat /tmp/ramcache | grep -v "Mem"

# 查看磁盘使用情况
df -h| grep 'Filesystem\|/dev/sda*' > /tmp/diskusage
echo -e '\E[32m'"Disk Usages :" $tecreset 
cat /tmp/diskusage

# 查看系统的负载情况
loadaverage=$(top -n 1 -b | grep "load average:" | awk '{print $10 $11 $12}')
echo -e '\E[32m'"Load Average :" $tecreset $loadaverage

# 查看系统的运行时间
tecuptime=$(uptime | awk '{print $3,$4}' | cut -f1 -d,)
echo -e '\E[32m'"System Uptime Days/(HH:MM) :" $tecreset $tecuptime

# 删除上面使用的变量，释放资源
unset tecreset os architecture kernelrelease internalip externalip nameserver loadaverage

# 删除临时文件
rm /tmp/who /tmp/ramcache /tmp/diskusage
}
fi
shift $(($OPTIND -1))
```
​

SheBang (#!)：始终在脚本的第一行，指定由哪个解释器来执行脚本，使脚本可以直接调用执行
```shell
#!/usr/bin/python3          表示 python3 解释器所处的绝对路径
#!/usr/bin/env python3      表示从 "PATH 环境变量"中查找 python3 解释器的位置
```
​

单行注释：#<br />多行注释：EOF 可用其他符号（  ！ ‘  ）
```xml
:<<EOF
注释内容...
注释内容...
EOF
```
​

多行语句用命令的结束符——分号（;）<br />单语句跨行用反斜杠（\）<br />​

**命令的组合符**

- &&：连接多个命令，按顺序执行，遇到错误停止
- ||：按顺序执行命令，遇到执行正确的命令后停止

​

​<br />
<a name="XGY76"></a>
# 通配符扩展（Wildcard Expansion）
模式扩展（globbing）
```shell
#关闭
$ set -o noglob
# 或者
$ set -f
#打开
$ set +o noglob
# 或者
$ set +f
```
**说明**

- 通配符是先解释，再执行
- 文件名扩展在不匹配时，会原样输出
- 只适用于单层路径

​

通配符

- ~：当前用户的主目录
   - ~user：用户user的主目录
   - ~+：当前所在的目录，等同于pwd
- ？：文件路径里面的任意单个字符，不包括空字符
- *：文件路径里面的任意数量的字符，包括零个字符。（不会匹配隐藏文件）
- [...]：代表括号之中的任意一个字符
   - [^...]或[!...]——不匹配
   - 匹配连字号-，只能放在方括号内部的开头或结尾
- {...}：表示分别扩展成大括号里面的所有值，各个值之间使用逗号分隔，逗号前后不能有空格
   - {start..end[..step]}，可逆序
- $：开头的词元视为变量
- $(...)：一个命令的运行结果，该命令的所有输出都会作为返回值
- $((...))：整数运算的结果

​

​

**字符类**<br />[[:class:]]表示一个字符类，扩展成某一类特定字符之中的一个

- [[:alnum:]]：匹配任意英文字母与数字
- [[:alpha:]]：匹配任意英文字母
- [[:blank:]]：空格和 Tab 键。
- [[:cntrl:]]：ASCII 码 0-31 的不可打印字符。
- [[:digit:]]：匹配任意数字 0-9。
- [[:graph:]]：A-Z、a-z、0-9 和标点符号。
- [[:lower:]]：匹配任意小写字母 a-z。
- [[:print:]]：ASCII 码 32-127 的可打印字符。
- [[:punct:]]：标点符号（除了 A-Z、a-z、0-9 的可打印字符）。
- [[:space:]]：空格、Tab、LF（10）、VT（11）、FF（12）、CR（13）。
- [[:upper:]]：匹配任意大写字母 A-Z。
- [[:xdigit:]]：16进制字符（A-F、a-f、0-9）。

**​**

**量词语法**

- ?(pattern-list)：匹配零个或一个模式。
- *(pattern-list)：匹配零个或多个模式。
- +(pattern-list)：匹配一个或多个模式。
- @(pattern-list)：只匹配一个模式。
- !(pattern-list)：匹配零个或一个以上的模式，但不匹配单独一个的模式。

​

shopt [option] [optionname ...]	设定和取消设定 shell 选项

- -p	打印每个 shell 选项并标注它的状态。
- -s	启用(设定)每个 OPTNAME 选项
- -u	禁用(取消设定)每个 OPTNAME 选项

**optionname**

   - dotglob：让扩展结果包括隐藏文件
   - nullglob：让通配符不匹配任何文件名时，返回空字符
   - failglob：使得通配符不匹配任何文件名时，Bash 会直接报错，而不是让各个命令去处理。
   - extglob：使得 Bash 支持 ksh 的一些扩展语法。
   - nocaseglob：让通配符扩展不区分大小写。

​

​<br />
<a name="QOkr0"></a>
# 变量
使用变量时加美元符（$）<br />设置只读变量  readonly variable_name<br />unset [option] [名称 ...]	删除变量

- -f	函数
- -v	变量
- -n	引用，只取消其本身而非其指向的变量

​

变量替换

| 形式 | 说明 |
| --- | --- |
| ${var} | 变量本来的值 |
| ${var:-word} | 如果变量 var 为空或已被删除(unset)，那么返回 word |
| ${var:+word} | 如果变量 var 被定义，那么返回 word |
| ${var:=word} | 如果变量 var 为空或已被删除(unset)，将 var 的值设置为 word，并返回 |
| ${var:?message} | 如果变量 var 为空或已被删除，那么将消息 message 送到标准错误输出，并中断运行 |

命令替换：先执行命令，将输出结果暂时保存，在适当的地方输出
```shell
variable=`commands`
variable=$(commands)
```
​

env或printenv	所有环境变量<br />env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]

- -i, --ignore-environment  start with an empty environment
- -0, --null           end each output line with NUL, not newline
- -u, --unset=NAME     remove variable from the environment
- -C, --chdir=目录     将工作目录变更为指定目录

​

set	所有变量<br />​

export [-fn] [名称[=值] ...]	设置全局变量

- -f	指 shell 函数
- -n	删除每个 NAME 名称的导出属性

​

​<br />
<a name="JWtLK"></a>
## 环境变量
| 名称 | 作用 |
| --- | --- |
| HOME | 用户的主目录（也称家目录） |
| SHELL | 用户使用的 Shell 解释器名称 |
| PATH | 定义命令行解释器搜索用户执行命令的路径 |
| EDITOR | 用户默认的文本解释器 |
| RANDOM | 生成一个随机数字 |
| LANG | 系统语言、语系名称 |
| HISTSIZE | 输出的历史命令记录条数 |
| HISTFILESIZE | 保存的历史命令记录条数 |
| PS1 | Bash解释器的提示符 |
| MAIL | 邮件保存路径 |

- BASHPID：Bash 进程的进程 ID。
- BASHOPTS：当前 Shell 的参数，可以用shopt命令修改。
- DISPLAY：图形环境的显示器名字，通常是:0，表示 X Server 的第一个显示器。
- EDITOR：默认的文本编辑器。
- HOST：当前主机的名称。
- IFS：词与词之间的分隔符，默认为空格。
- LANG：字符集以及语言编码，比如zh_CN.UTF-8。
- PATH：由冒号分开的目录列表，当输入可执行程序名后，会搜索这个目录列表。
- PS1：Shell 提示符。
- PS2： 输入多行命令时，次要的 Shell 提示符。
- PWD：当前工作目录。
- RANDOM：返回一个0到32767之间的随机数。
- SHELL：Shell 的名字。
- SHELLOPTS：启动当前 Shell 的set命令的参数
- TERM：终端类型名，即终端仿真器所用的协议。
- UID：当前用户的 ID 编号。
- USER：当前用户的用户名。

​

declare [OPTION] VARIABLE=value

- -a	声明数组变量。
- -A	声明关联数组
- -f	输出所有函数定义。
- -F	输出所有函数名。
- -g	用于函数内创建全局变量
- -p	查看变量信息。
- -i	声明整数变量。
- -l	赋值时转为小写
- -u	赋值时转为大写
- -r	声明只读变量。
- -x	该变量输出为环境变量。

local 同declare，但只用于函数中<br />​

readonly [-aAf] [名称[=值] ...]

- -a      下标数组变量
- -A      关联数组标量
- -f       shell 函数

​

read - 从标准输入读取一行并将其分为不同的域<br />read [-options] [variable...]

- -t	设置了超时的秒数
- -p	指定用户输入的提示信息。
- -a	把用户的输入赋值给一个数组，从零号位置开始
- -n	只读取若干个字符作为变量值，而不是整行读取
- -d delimiter	定义字符串delimiter的第一个字符作为用户输入的结束，而不是一个换行符。
- -r	raw 模式，不允许反斜杠转义任何字符
- -s	不回显终端的任何输入
- -u fd	使用文件描述符fd作为输入
- -e        使用 Readline 获取行
- -i text   使用 TEXT 文本作为 Readline 的初始文字
<a name="eEM1x"></a>
## 字符串
用单引号或双引号，或不用引号

- 单引号：保留字符的字面含义，各种特殊字符在单引号里面，都会变为普通字符
- 双引号：可以使用美元符号$、反引号和反斜杠（\）

**methods**

- 获取字符串长度：${#string}
- 查找子字符串：${string:offset[:length]}
- 头部的模式匹配：匹配成功，就删除匹配的部分，返回剩下的部分。原始变量不会发生变化
   - ${variable#pattern}——删除最短匹配（非贪婪匹配）的部分
   - ${variable##pattern}——删除最长匹配（贪婪匹配）的部分
   - ${variable/#pattern/string}——头部匹配的部分替换成string
- 尾部的模式匹配
   - ${variable%pattern}
   - ${variable%%pattern}
   - ${variable/%pattern/string}
- 任意位置的模式匹配
   - ${variable/pattern/string}
   - ${variable//pattern/string}
- 转为大写：${varname^^}
- 转为小写：${varname,,}
| 字符 | 描述 |
| --- | --- |
| \\a | 铃声字符 |
| \\d | 格式为“日 月 年”的日期 |
| \\e | ASCII转义字符 |
| \\h | 本地主机名 |
| \\H | 完全合格的限定域主机名 |
| \\j | shell当前管理的作业数 |
| \\1 | shell终端设备名的基本名称 |
| \\n | ASCII换行字符 |
| \\r | ASCII回车 |
| \\s | shell的名称 |
| \\t | 格式为“小时:分钟:秒”的24小时制的当前时间 |
| \\T | 格式为“小时:分钟:秒”的12小时制的当前时间 |
| @ | 格式为am/pm的12小时制的当前时间 |
| \\u | 当前用户的用户名 |
| \\v | bash shell的版本 |
| \\V | bash shell的发布级别 |
| \\w | 当前工作目录 |
| \\W | 当前工作目录的基本名称 |
| ! | 该命令的bash shell历史数 |
| # | 该命令的命令数量 |
| $ | 普通用户为美元符号$，超级用户（root 用户）为# |
| \\nnn | 对应于八进制值 nnn 的字符 |
| \\ | 斜杠 |
| [ | 控制码序列的开头 |
| ] | 控制码序列的结尾 |

<a name="CaRvZ"></a>
## 数组
array_name=(value0 value1 value2 value3)<br />只支持一维数组，可不用连续的下标，且下标的范围没有限制<br />​

使用 @ 符号可以获取数组中的所有元素
```shell
# 取得数组元素的个数
length=${#array_name[@]}
# 或
length=${#array_name[*]}
# 取得数组单个元素的长度
lengthn=${#array_name[n]}
#数组拼接
array_new=(${array1[@]}  ${array2[@]})
#返回数组的成员序号
${!arr[@]}
# 或
${!arr[*]}
#提取数组成员
${array[@]:position:length}
#追加数组成员
array+=(value0 value1 ···)
```
**​**

**关联数组**
```shell
declare -A colors
colors["red"]="#ff0000"
colors["green"]="#00ff00"
colors["blue"]="#0000ff"
```


<a name="VC6h4"></a>
# 运算符
算术

| 运算符 | 说明/含义 |
| --- | --- |
| +、- | 加法（或正号）、减法（或负号） |
| *、/、% | 乘法、除法、取余（取模） |
| ** | 幂运算 |
| ++、-- | 自增、自减 |
| !、&&、&#124;&#124; | 逻辑非（取反）、逻辑与（and）、逻辑或（or） |
| <、<=、>、>= | 比较符号（小于、小于等于、大于、大于等于） |
| ==、!=、= | 比较符号（相等、不相等；对于字符串，= 也可以表示相当于） |
| <<、>> | 向左移位、向右移位 |
| ~、&#124;、 &、^ | 按位取反、按位或、按位与、按位异或 |
| =、+=、-=、*=、/=、%= | 赋值运算符 |

| 操作符/命令 | 说明 |
| --- | --- |
| [(( ))](http://c.biancheng.net/view/2480.html) | 用于整数运算，使用变量无需加上$前缀，可用$获取 (( )) 命令的结果，效率高 |
| [let](http://c.biancheng.net/view/2504.html) | 用于整数运算，和 (()) 类似。 |
| [$[]](http://c.biancheng.net/view/vip_3235.html) | 用于整数运算，不如 (()) 灵活。 |
| [expr](http://c.biancheng.net/view/vip_3236.html) | 可用于整数运算，也可以处理字符串。 |
| [bc](http://c.biancheng.net/view/vip_3237.html) | Linux下的一个计算器程序，可处理整数和小数 |

数值的进制

- number：没有任何特殊表示法的数字是十进制数（以10为底）。
- 0number：八进制数。
- 0xnumber：十六进制数。
- base#number：base进制数

​

判断语句

- test expression
   - test num1 -eq num2
- [ expression ]	注意[]和expression之间的空格
   - [ num1 -eq num2 ]
- [[ expression ]]	支持正则表达式
   - [[ str =~ regex ]]	[[ $tel =~ ^1[0-9]{10}$ ]]

​

关系

- -eq
- -ne
- -gt
- -lt
- -ge
- -le

布尔

- !
- -o   或 or
- -a   与 and
<a name="NNcFv"></a>
## 字符串
| 运算符 | 说明 |
| --- | --- |
| = | 检测两个字符串是否相等 |
| != | 检测两个字符串是否不相等 |
| -z | 检测字符串长度是否为0 |
| -n | 检测字符串长度是否不为 0 |
| $ | 检测字符串是否为空 |

str1 \> str2，\>是>的转义字符，防止>被误认为成重定向运算符。
<a name="DPHfD"></a>
## 文件检测
| 操作符 | 说明 |
| --- | --- |
| -b file | 是否是块设备文件 |
| -c file | 是否是字符设备文件 |
| -d file | 是否是目录 |
| -e file | 是否存在（包括目录） |
| -f file | 是否是普通文件（既不是目录，也不是设备文件） |
| -L file | 是否为符号链接文件 |
| -p file | 是否管道文件 |
| -s file | 是否为空（文件大小是否大于0） |
| -S file | 是否为套接字文件 |
| 文件权限判断 |  |
| -r file | 是否可读 |
| -w file | 是否可写 |
| -x file | 是否可执行 |
| -u file | 是否拥有 SUID 权限 |
| -g file | 是否拥有 SGID 权限 |
| -k file | 是否拥有 SBIT 权限 |
| 文件比较 |  |
| file1 -nt file2 | file1 的修改时间是否比 file2 的新。 |
| file1 -ot file2 | file1 的修改时间是否比 file2 的旧。 |
| file1 -ef file2 | file1 是否和 file2 的 inode号一致，即是否为同一个文件。 |



<a name="E2S3C"></a>
# IO 重定向

- 标准输入文件(stdin)，文件描述符为0
- 标准输出文件(stdout)，文件描述符为1
- 标准错误文件(stderr)，文件描述符为2

​

在 Shell 中有 9 个文件描述符， 3-8 的文件描述符默认没有打开
```shell
打开
cd /dev/fd/;ls -Al
关闭
exec 3>&-
cd /dev/fd;ls -Al;cd -
```
| 命令 | 说明 |
| --- | --- |
| command > file | 将输出重定向到 file。 |
| command < file | 将输入重定向到 file。 |
| command >> file | 将输出以追加的方式重定向到 file。 |
| n > file | 将文件描述符为 n 的文件重定向到 file。 |
| n >> file | 将文件描述符为 n 的文件以追加的方式重定向到 file。 |
| n >& m | 将输出文件 m 和 n 合并。 |
| n <& m | 将输入文件 m 和 n 合并。 |
| << tag | 将开始标记 tag 和结束标记 tag 之间的内容作为输入。 |

实现永久重定向：exec 命令<br />**​**

**Here Document **<br />一种输入多行字符串的方法，文档内部会发生变量替换和通配符扩展，但是双引号和单引号都失去语法作用，变成了普通字符<br />若不需要变量替换和通配符扩展，可以把开始标记放在单引号之中。
```shell
<< token
text
token
```
​

Here String<br />将字符串通过标准输入，传递给命令
```shell
<<< string
```
**​**

**/dev/null 文件**<br />一个特殊的文件**，**写入到它的内容都会被丢弃，即"禁止输出"
```shell
$ command > /dev/null
```
**​**

**文件包含**<br />被包含的文件不需要可执行权限
```shell
. filename   # 点号(.)和文件名中间有一空格
或
source filename
```
**​**

**xargs（eXtended ARGuments）** - build and execute command lines from standard input
```shell
somecommand |xargs -item  command
```

- -a file 从文件中读入作为sdtin
- -e flag ，有时是-E，flag必须是一个以空格分隔的标志，当xargs分析到含有flag这个标志的时候就停止。
- -p 当每次执行一个argument的时候询问一次用户。
- -n num 后面加次数，表示命令在执行的时候一次用的argument的个数，默认是用所有的。
- -t 表示先打印命令，然后再执行。
- -r no-run-if-empty 当xargs的输入为空的时候则停止xargs，不用再去执行了。
- -s num 命令行的最大字符数，指的是 xargs 后面那个命令的最大命令行字符数。
- -L num 从标准输入一次读取 num 行送给 command 命令。
- -d delim 分隔符，默认回车
- -x		exit

​

printf  format-string  [arguments...]<br />​<br />
<a name="xmKvT"></a>
# 流程控制
**条件**
```shell
if condition1
then
    command1
elif condition2 
then 
    command2
else
    commandN
fi
```
Bash 4.0之后，允许匹配多个条件，用;;&终止每个条件块
```shell
case expression in
  pattern )
    commands ;;
  pattern )
    commands ;;
  ...
  * )
    commands ;;
esac
```
**​**

**循环**
```shell
for var in item1 item2 ... itemN
do
    command
done
for (( expression1; expression2; expression3 )); do
  commands
done
```
```shell
while condition
do
    command
done
```
```shell
until condition
do
    command
done
```
```shell
select var in item1 item2 ... itemN
do
   command
done
```
控制

- break [n=1]
- continue [n=1]

n为循环得层数
<a name="EX2Nf"></a>
# 函数
函数体内直接声明的变量，属于全局变量
```shell
[ function ] fun_name [()]
{
    action;
    [return int;]
}
```
**​**

**$n** 代表对应参数<br />n=0 执行的文件名，n>=10应在 { } 内

| 特殊参数 | 说明 |
| --- | --- |
| $# | 传递到脚本的参数个数 |
| $* | 以一个单字符串显示所有向脚本传递的参数。<br />如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。 |
| $$ | 脚本运行的当前进程ID号 |
| $! | 后台运行的最后一个进程的ID号 |
| $@ | 与$*相同，但是使用时加引号，并在引号中返回每个参数。<br />如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。 |
| $- | 显示Shell使用的当前选项，与[set命令](https://www.runoob.com/linux/linux-comm-set.html)功能相同。 |
| $? | 显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。 |


<br />
<br />
<br />
<br />
<br />

