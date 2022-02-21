
<br />

<a name="29327766"></a>
# —— C ——

<br />
<br />C 语言是一种通用的高级语言，最初是由 Dennis Ritchie 在贝尔实验室为开发 UNIX 操作系统而设计的。<br />
<br />C 语言最开始是于 1972 年在 DEC PDP-11 计算机上被首次实现。<br />
<br />1978 年，布莱恩·柯林汉（Brian Kernighan）和丹尼斯·里奇（Dennis Ritchie）制作了 C 的第一个公开可用的描述(K&R 标准)。<br />
<br />
<br />

<a name="b6003d0f"></a>
# --基本语法--

<br />
<br />
<br />每个 C 程序都至少有一个函数，即主函数 int main( int argc, char *argv[] )<br />
<br />每个语句必须以分号结束，它表明一个逻辑实体的结束。<br />
<br />**标识符**<br />
<br />用来标识变量、函数，或任何其他用户自定义项目的名称。一个标识符以字母 A-Z 或 a-z 或下划线 _ 开始，后跟零个或多个字母、下划线和数字（0-9）。<br />
<br />C 是**区分大小写**的编程语言。<br />
<br />
<br />**注释**<br />

```c
// 单行注释

/* 
 多行注释
 多行注释
 多行注释
 */
```

<br />
<br />

<a name="185f7bf6"></a>
# 数据类型


-  基本类型：整型（int）、字符型（char）、浮点型（float，double）、枚举型（enum） 
-  构造类型：数组类型、结构体类型（struct)、共用体类型(union) 、函数类型 
-  指针类型 
-  空类型：void
| 类型 | 存储大小 | 值范围 |
| --- | --- | --- |
| char | 1 字节 | -128 - 127 或 0 - 255 |
| unsigned char | 1 字节 | 0 - 255 |
| signed char | 1 字节 | -128 - 127 |
| int | 2 或 4 字节 | -2,147,483,648 - 2,147,483,647 |
| unsigned int | 2 或 4 字节 | 0 - 4,294,967,295 |
| short | 2 字节 | -32,768 - 32,767 |
| unsigned short | 2 字节 | 0 - 65,535 |
| long | 4 字节 | -2,147,483,648 - 2,147,483,647 |
| unsigned long | 4 字节 | 0 - 4,294,967,295 |
| float | 4 字节 | 1.2E-38 到 3.4E+38 (精确到6 位小数) |
| double | 8 字节 | 2.3E-308 到 1.7E+308  (精确到15 位小数) |
| long double | 16 字节 | 3.4E-4932 到 1.1E+4932  (精确到19 位小数) |


<br />
<br />**void类型**<br />

-  函数返回为空 
-  函数参数为空 
-  指针指向 void


<br />
<br />**常量：**固定值，在程序执行期间不会改变，又叫做字面量。<br />

-  整型 ：十进制、八进制(前缀 0)或十六进制(前缀 0x)的常量，可以带一个后缀 U（无符号整数，unsigned） 和 L（长整数，long），前缀后缀大小不敏感 
-  实型 ：小数形式（1. ，.1均可）或指数形式（e|E 后为整数） 
-  字符 ：一对单引号括（‘ ’）起的一个字符，或转义字符 
-  字符串：一对双引号（“ ”）起的若干个字符，以‘\0'为结束符


<br />**转义字符表**

| 转义序列 | 含义 | 转义序列 | 含义 |
| --- | --- | --- | --- |
| \\ | \\ 字符 | \\n | 换行符 |
| ' | ' 字符 | \\r | 回车 |
| " | " 字符 | \\t | 水平制表符 |
| ? | ? 字符 | \\v | 垂直制表符 |
| \\a | 警报铃声 | \\ooo | 一到三位的八进制数 |
| \\b | 退格键 | \\xhh . . . | 一个或多个数字的十六进制数 |
| \\f | 换页符 |  |  |


<br />
<br />**右值（rvalue）：**存储在内存中某些地址的数值，不能对其进行赋值的表达式。只可以出现在赋值号的右边<br />
<br />
<br />**数组**​<br />
<br />用来存储一系列数据，可以存储一个固定大小的相同类型元素的顺序集合。<br />
<br />**数组声明**<br />

```c
type arrayName [ arraySize ];

// 多维数组声明
type name[size1][size2]...[sizeN];
```

<br />
<br />
<br />**字符串**：实质是使用 null 字符 '\0' 终止的一维字符数组<br />
<br />
<br />**枚举 (enumeration)**<br />

```c
enum　枚举名　{枚举元素1,枚举元素2,……};
```

<br />
<br />

<a name="a3P1d"></a>
# 流程控制

<br />C 语言把任何**非零**和非空的值假定为 true，把零或 null 假定为 false。<br />
<br />**条件**​<br />
<br />**三元运算符：   expresion ? statement1 : statement2 ;**​<br />
<br />**if-else**<br />

```cpp
if(boolean_expression 1)
{
   /* 当布尔表达式 1 为真时执行 */
}
[else if( boolean_expression 2)
{
   /* 当布尔表达式 2 为真时执行 */
}
···
else 
{
   /* 当上面条件都不为真时执行 */
}]
```

<br />
<br />**switch-case**<br />

```cpp
switch(expression)
{
    case constant-expression  :
       statement;
       break; /* 可选的 */
    [case constant-expression  :
       statement;
       break; /* 可选的 */
      ···
    /* 您可以有任意数量的 case 语句 */
    default : /* 可选的 */
       statement;]
}
```

<br />
<br />
<br />**循环**​<br />
<br />**while**<br />

```c
while(condition)
{
   statement;
}
```

<br />
<br />**do-while**<br />

```c
do
{
   statement;

}while( condition );
```

<br />
<br />**for**<br />

```cpp
for ( init; condition; increment )
{
   statement;
}
```

<br />
<br />
<br />**控制语句**<br />

-  break：终止（跳出）循环或 switch 语句 
-  continue：停止本次循环迭代，直接开始下次循环迭代 
-  goto  label：跳转到到被标记的语句


<br />
<br />

<a name="43430a90"></a>
# 函数（Function）

<br />
<br />**函数定义**<br />

```c
return_type function_name( parameter list )
{
   body of the function
}
```

<br />
<br />函数**声明 | 原型（declaration | prototype）**：告诉编译器函数名称及如何调用函数，函数的实际主体可以单独定义。<br />

```c
return_type function_name( parameter list );
```

<br />
<br />**函数签名（signature）：函数名，参数的个数、数据类型、顺序**​<br />
<br />e.g.<br />

```c
#include <stdio.h>
 
/* 函数声明 */
int max(int a, int b);
 
int main ()
{
    /* 调用函数来获取最大值 */
    int ret = max(100, 200);
 
   printf( "Max value is : %d\n", ret );
   return 0;
}
 
/* 函数返回两个数中较大的那个数 */
int max(int a, int b) 
{
   return a>b ? a : b;
}
```

<br />
<br />
<br />

<a name="a56e2331"></a>
# 指针（Point）

<br />
<br />**指针**：一个变量，其值为某个变量的地址。 （4 Byte）<br />

```c
type *point_name;
```

<br />每一个变量都有一个内存位置，每一个内存位置都定义了可使用连字号（&）运算符访问的地址，它表示了在内存中的一个地址。<br />
<br />
<br />悬空（dangling)指针：内存被释放的指针<br />内存泄漏（memory leak)：释放空内存<br />
<br />**函数指针**<br />

```c
fun_return_type (*fun_ptr)( parameter list ) = [&] fun_name;
```

<br />
<br />**回调函数**：一个通过函数指针调用的函数。<br />
<br />
<br />

<a name="fbf46319"></a>
# 结构体 & 联合体

<br />
<br />**位域**<br />

```c
// 结构内声明位域
struct
{
  type [member_name] : width ;
};
```

<br />

-  type：只能为 int(整型)，unsigned int(无符号整型)，signed int(有符号整型) 三种类型 
-  width：必须小于或等于指定类型的位宽度。



```c
#include <stdio.h>
 
struct
{
  unsigned int age : 3;
} Age;
 
int main( )
{
   Age.age = 7;
   printf( "Sizeof( Age ) : %d\n", sizeof(Age) );
   printf( "Age.age : %d\n", Age.age );
 
   Age.age = 8; // 二进制表示为 1000 有四位，超出
   printf( "Age.age : %d\n", Age.age );
 
   return 0;
}
```

<br />
<br />

<a name="ZpQQe"></a>
# IO

<br />FILE *fopen( const char * filename, const char * mode )<br />打开文件出错时，返回一个空指针（ NULL）

| 打开方式 | 说明 |
| --- | --- |
| "r" | 以“只读”方式打开文件。只允许读取，不允许写入。文件必须存在，否则打开失败。 |
| "w" | 以“写入”方式打开文件。如果文件不存在，那么创建一个新文件；如果文件存在，那么清空文件内容（相当于删除原文件，再创建一个新文件）。 |
| "a" | 以“追加”方式打开文件。如果文件不存在，那么创建一个新文件；如果文件存在，那么将写入的数据追加到文件的末尾（文件原有的内容保留）。 |
| "r+" | 以“读写”方式打开文件。既可以读取也可以写入，也就是随意更新文件。文件必须存在，否则打开失败。 |
| "w+" | 以“写入/更新”方式打开文件，相当于w和r+叠加的效果。既可以读取也可以写入，也就是随意更新文件。如果文件不存在，那么创建一个新文件；如果文件存在，那么清空文件内容（相当于删除原文件，再创建一个新文件）。 |
| "a+" | 以“追加/更新”方式打开文件，相当于a和r+叠加的效果。既可以读取也可以写入，也就是随意更新文件。如果文件不存在，那么创建一个新文件；如果文件存在，那么将写入的数据追加到文件的末尾（文件原有的内容保留）。 |
|  |  |
| "t" | 文本文件。如果不写，默认为"t"。 |
| "b" | 二进制文件。 |


<br />
<br />int fclose(FILE *fp);<br />
<br />
<br />
<br />

<a name="becce13b"></a>
# 预处理器（Preprocessor）

<br />
<br />预处理器：一些指令，指示编译器在实际编译之前所需完成的预处理。

-  以井号（#）开头，只有空格字符可以出现在预处理指令之前。 
-  预处理指令语句，结尾无分号（;）。
| 指令 | 描述 |
| --- | --- |
| #define | 定义宏 |
| #include | 包含一个源代码文件 |
| #undef | 取消已定义的宏 |
| #ifdef | 如果宏已经定义，则返回真 |
| #ifndef | 如果宏没有定义，则返回真 |
| #if | 如果给定条件为真，则编译下面代码 |
| #else | #if 的替代方案 |
| #elif | 如果前面的 #if 给定条件不为真，当前条件为真，则编译下面代码 |
| #endif | 结束一个 #if……#else 条件编译块 |
| #error | 当遇到标准错误时，输出错误消息 |
| #pragma | 使用标准化方法，向编译器发布特殊的命令到编译器中 |


<br />
<br />**预定义宏**

| 宏 | 描述 |
| --- | --- |
| __DATE__ | 当前日期，一个以 "MMM DD YYYY" 格式表示的字符常量。 |
| __TIME__ | 当前时间，一个以 "HH:MM:SS" 格式表示的字符常量。 |
| __FILE__ | 这会包含当前文件名，一个字符串常量。 |
| __LINE__ | 这会包含当前行号，一个十进制常量。 |
| __STDC__ | 当编译器以 ANSI 标准编译时，则定义为 1。 |


<br />
<br />

```c
typedef  type  alias
```

<br />
<br />typedef 是由编译器执行解释的<br />#define 语句是由预编译器进行处理的。<br />
<br />
<br />
<br />**宏运算符**<br />

-  **延续运算符（\） **
-  **字符串常量化运算符（#）**：把一个宏的参数转换为字符串常量 
- ** 标记粘贴运算符（##）**：合并两个参数。它允许在宏定义中两个独立的标记被合并为一个标记。 
- ** defined() 运算符 **
- ** #@x  ->  H(x) ~ 'x' **



```c
#include <stdio.h>

#define tokenpaster(n) \
    printf("token" #n " = %d", token##n)

int main(void)
{
    int token34 = 40;
    tokenpaster(34);  // 输出 token34 = 40
    return 0;
}
```

<br />
<br />
<br />

<a name="2db41159"></a>
# 可变参数 (Variadic)

<br />
<br />[** <stdarg.h>**](https://zh.cppreference.com/w/c/variadic)​

| [va_start](https://zh.cppreference.com/w/c/variadic/va_start) | 令函数得以访问可变参数 (宏函数) |
| --- | --- |
| [va_arg](https://zh.cppreference.com/w/c/variadic/va_arg) | 访问下一个函数可变参数 (宏函数) |
| [va_copy ](https://zh.cppreference.com/w/c/variadic/va_copy)<br />(C99) | 创造函数可变参数的副本 (宏函数) |
| [va_end](https://zh.cppreference.com/w/c/variadic/va_end) | 结束函数可变参数的行程 (宏函数) |


<br />
<br />[**va_list**](https://zh.cppreference.com/w/c/variadic/va_list)：保有 va_start 、 va_arg 、 va_end 及 va_copy 所需信息<br />

```c
#include <stdio.h>
#include <stdarg.h>
 
double average(int num,...)
{
 
    va_list valist;
    double sum = 0.0;
 
    /* 为 num 个参数初始化 valist */
    va_start(valist, num);
 
    /* 访问所有赋给 valist 的参数 */
    for (int i = 0; i < num; i++)
    {
       sum += va_arg(valist, int);
    }
    /* 清理为 valist 保留的内存 */
    va_end(valist);
 
    return sum/num;
}
 
int main()
{
   printf("Average of 2, 3, 4, 5 = %f\n", average(4, 2,3,4,5));
   printf("Average of 5, 10, 15 = %f\n", average(3, 5,10,15));
}
```

<br />
<br />
<br />

<a name="6a8bef7b"></a>
# 错误处理

<br />
<br />发生错误时，大多数的 C 或 UNIX 函数调用返回 1 或 NULL，同时会设置一个全局变量的错误代码 errno，表示在函数调用期间发生了错误。<br />
<br />一般在程序初始化时，把 errno 设置为 0值，表示程序中没有错误。<br />
<br />void perror( const char *s );<br />
<br />打印当前存储于系统变量 [errno](https://zh.cppreference.com/w/c/error/errno) 的错误码到 stderr ，即显示您传给它的字符串，后跟一个冒号、一个空格和当前 errno 值的文本表示形式。<br />
<br />char* strerror( int errnum );	返回一个指针，指针指向当前 errno 值的文本表示形式。<br />
<br />errno_t strerror_s( char *buf, rsize_t bufsz, errno_t errnum );<br />
<br />[size_t](http://zh.cppreference.com/w/c/types/size_t) strerrorlen_s( errno_t errnum );<br />

```c
#include <stdio.h>
#include <errno.h>
#include <string.h>
 
extern int errno ;
 
int main ()
{
    FILE * pf;
   int errnum;
   pf = fopen ("unexist.txt", "rb");
   if (pf == NULL)
   {
      errnum = errno;
      fprintf(stderr, "错误号: %d\n", errno);
      perror("通过 perror 输出错误");
      fprintf(stderr, "打开文件错误: %s\n", strerror( errnum ));
   }
   else
   {
      fclose (pf);
   }
   return 0;
}
/* 输出结果：
 错误号: 2
 通过 perror 输出错误: No such file or directory
 打开文件错误: No such file or directory
*/
```

<br />
<br />
<br />通常情况下，程序成功执行完一个操作正常退出的时候会带有值 EXIT_SUCCESS（宏， 0）<br />如果程序中存在一种错误情况，当您退出程序时，会带有状态值 EXIT_FAILURE（ -1）<br />
<br />

<a name="a225ce07"></a>
# 信号处理

<br />
<br />信号是由操作系统传给进程的中断，会提早终止一个程序。在操作系统上，一般通过按 Ctrl+C 产生中断。<br />
<br />[**<signal.h>**](https://zh.cppreference.com/w/c/program)<br />**信号管理函数**

| [signal](https://zh.cppreference.com/w/c/program/signal) | 为特定的信号设置信号处理函数 (函数) |
| --- | --- |
| [raise](https://zh.cppreference.com/w/c/program/raise) | 运行特定信号的信号处理函数 (函数) |
| [sig_atomic_t](https://zh.cppreference.com/w/c/program/sig_atomic_t) | 用于从异步信号处理函数访问原子实体的整数类型 (typedef) |
| [SIG_DFLSIG_IGN](https://zh.cppreference.com/w/c/program/SIG_strategies) | 定义信号处理策略 (宏常量) |
| [SIG_ERR](https://zh.cppreference.com/w/c/program/SIG_ERR) | 遇到错误 |


<br />
<br />捕获突发事件
```cpp
void (*signal (int sig, void (*func)(int)))(int);
```

<br />
<br />生成信号函数
```cpp
int raise (signal sig);
```



| 信号 | 描述 |
| --- | --- |
| SIGABRT | 程序的异常终止，如调用 abort。 |
| SIGFPE | 错误的算术运算，比如除以零或导致溢出的操作。 |
| SIGILL | 检测非法指令。 |
| SIGINT | 接收到交互注意信号。 |
| SIGSEGV | 非法访问内存。 |
| SIGTERM | 发送到程序的终止请求。 |


<br />
<br />e.g<br />

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

void signalHandler(int signum)
{
    printf("Interrupt signal (%d) received.\n", signum);
    
    // 终止程序
    exit(signum);
}

int main()
{
    int i = 0;
    // 注册信号 SIGINT 和信号处理程序
    signal(SIGINT, signalHandler);

    while (++i)
    {
        printf("Going to sleep....\n");
        if (i == 3)
        {
            raise(SIGINT);
        }
        sleep(1);
    }
    return 0;
}
```

<br />
<br />
<br />
<br />

<a name="022a84f4"></a>
# 运算符优先级
| 类别 | 运算符 | 结合性 |
| --- | --- | --- |
| 后缀 | () [] -> . ++ - - | 从左到右 |
| 一元 | + - ! ~ ++ - - (type)* & sizeof | 从右到左 |
| 乘除 | * / % | 从左到右 |
| 加减 | + - | 从左到右 |
| 移位 | << >> | 从左到右 |
| 关系 | < <= > >= | 从左到右 |
| 相等 | == != | 从左到右 |
| 位与 AND | & | 从左到右 |
| 位异或 XOR | ^ | 从左到右 |
| 位或 OR |  |  |
| 逻辑与 AND | && | 从左到右 |
| 逻辑或 OR |  |  |
| 条件 | ?: | 从右到左 |
| 赋值 | = += -= *= /= %=>>= <<= &= ^= | = |
| 逗号 | , | 从左到右 |


<br />**短路求值**​<br />

<a name="cfb5f18c"></a>
# 关键字


| [auto](https://zh.cppreference.com/w/c/keyword/auto)<br />[break](https://zh.cppreference.com/w/c/keyword/break)<br />[case](https://zh.cppreference.com/w/c/keyword/case)<br />[char](https://zh.cppreference.com/w/c/keyword/char)<br />[const](https://zh.cppreference.com/w/c/keyword/const)<br />[continue](https://zh.cppreference.com/w/c/keyword/continue)<br />[default](https://zh.cppreference.com/w/c/keyword/default)<br />[do](https://zh.cppreference.com/w/c/keyword/do)<br />[double](https://zh.cppreference.com/w/c/keyword/double)<br />[else](https://zh.cppreference.com/w/c/keyword/else)<br />[enum](https://zh.cppreference.com/w/c/keyword/enum)<br />[extern](https://zh.cppreference.com/w/c/keyword/extern) | [float](https://zh.cppreference.com/w/c/keyword/float)<br />[for](https://zh.cppreference.com/w/c/keyword/for)<br />[goto](https://zh.cppreference.com/w/c/keyword/goto)<br />[if](https://zh.cppreference.com/w/c/keyword/if)<br />[inline](https://zh.cppreference.com/w/c/keyword/inline) (C99 起)<br />[int](https://zh.cppreference.com/w/c/keyword/int)<br />[long](https://zh.cppreference.com/w/c/keyword/long)<br />[register](https://zh.cppreference.com/w/c/keyword/register)<br />[restrict](https://zh.cppreference.com/w/c/keyword/restrict) (C99 起)<br />[return](https://zh.cppreference.com/w/c/keyword/return)<br />[short](https://zh.cppreference.com/w/c/keyword/short) | [signed](https://zh.cppreference.com/w/c/keyword/signed)<br />[sizeof](https://zh.cppreference.com/w/c/keyword/sizeof)<br />[static](https://zh.cppreference.com/w/c/keyword/static)<br />[struct](https://zh.cppreference.com/w/c/keyword/struct)<br />[switch](https://zh.cppreference.com/w/c/keyword/switch)<br />[typedef](https://zh.cppreference.com/w/c/keyword/typedef)<br />[union](https://zh.cppreference.com/w/c/keyword/union)<br />[unsigned](https://zh.cppreference.com/w/c/keyword/unsigned)<br />[void](https://zh.cppreference.com/w/c/keyword/void)<br />[volatile](https://zh.cppreference.com/w/c/keyword/volatile)<br />[while](https://zh.cppreference.com/w/c/keyword/while) | [_Alignas](https://zh.cppreference.com/w/c/keyword/_Alignas) (C11 起)<br />[_Alignof](https://zh.cppreference.com/w/c/keyword/_Alignof) (C11 起)<br />[_Atomic](https://zh.cppreference.com/w/c/keyword/_Atomic) (C11 起)<br />[_Bool](https://zh.cppreference.com/w/c/keyword/_Bool) (C99 起)<br />[_Complex](https://zh.cppreference.com/w/c/keyword/_Complex) (C99 起)<br />[_Generic](https://zh.cppreference.com/w/c/keyword/_Generic) (C11 起)<br />[_Imaginary](https://zh.cppreference.com/w/c/keyword/_Imaginary) (C99 起)<br />[_Noreturn](https://zh.cppreference.com/w/c/keyword/_Noreturn) (C11 起)<br />[_Static_assert](https://zh.cppreference.com/w/c/keyword/_Static_assert) (C11 起)<br />[_Thread_local](https://zh.cppreference.com/w/c/keyword/_Thread_local) (C11 起) |
| --- | --- | --- | --- |



<a name="a5684d0a"></a>
# --[头文件](https://zh.cppreference.com/w/c/header)--

<br />
<br />头文件是扩展名为 **.h** 的文件，包含了 C 函数声明和宏定义，被多个源文件中引用共享。<br />
<br />**#include **：用于引用系统头文件，在系统目录的标准列表中搜索名为 file 的文件。<br />**#include "file"**：用于引用用户头文件，在包含当前文件的目录中搜索名为 file 的文件。<br />
<br />

<a name="95a2bf18"></a>
## [<stdio.h> ](https://zh.cppreference.com/w/c/io)

<br />**无格式输入/输出 （窄字符）**

| [fgetc ](https://zh.cppreference.com/w/c/io/fgetc)<br />getc | 从文件流获取一个字符 (函数) |
| --- | --- |
| [fgets](https://zh.cppreference.com/w/c/io/fgets) | 从文件流获取一个字符串 (函数) |
| [fputcputc](https://zh.cppreference.com/w/c/io/fputc) | 将一个字符写入文件流 (函数) |
| [fputs](https://zh.cppreference.com/w/c/io/fputs) | 将一个字符串写入文件流 (函数) |
| [getchar](https://zh.cppreference.com/w/c/io/getchar) | 从 stdin 读取一个字符 (函数) |
| [gets_s ](https://zh.cppreference.com/w/c/io/gets)<br />(C11 起) | 从 stdin 读取一个字符串 (函数) |
| [putchar](https://zh.cppreference.com/w/c/io/putchar) | 将一个字符写入 stdout (函数) |
| [puts](https://zh.cppreference.com/w/c/io/puts) | 将一个字符串写入 stdout (函数) |
| [ungetc](https://zh.cppreference.com/w/c/io/ungetc) | 将一个字符送回文件流 (函数) |


<br />


| [scanf ](https://zh.cppreference.com/w/c/io/fscanf)<br />fscanf sscanf scanf_s fscanf_s sscanf_s (C11)(C11)(C11) | 从stdin、文件流或缓冲区读取格式化输入 (函数) |
| --- | --- |
| [vscanf ](https://zh.cppreference.com/w/c/io/vfscanf)<br />vfscanfvsscanfvscanf_svfscanf_svsscanf_s (C99)(C99)(C99)(C11)(C11)(C11) | 从 stdin 、文件流或缓冲区读取格式化输入 使用可变参数列表 (函数) |
| [printf ](https://zh.cppreference.com/w/c/io/fprintf)<br />fprintfsprintfsnprintfprintf_sfprintf_ssprintf_ssnprintf_s (C99)(C11)(C11)(C11)(C11) | 打印格式化输出到 stdout 、文件流或缓冲区 (函数) |
| [vprintf ](https://zh.cppreference.com/w/c/io/vfprintf)<br />vfprintfvsprintfvsnprintfvprintf_svfprintf_svsprintf_svsnprintf_s (C99)(C11)(C11)(C11)(C11) | 打印格式化输出到stdout、文件流或缓冲区 使用可变参数列表 |


<br />
<br />
<br />**printf() 格式输出**

%[flag][width][.precision]type

| 修饰符（优先级） |  | 含义 |
| --- | --- | --- |
| flag | - | 左对齐 |
|  | + | 显示正负号 |
|  | 空格 | 显示负号，正号留空 |
|  | # | 对于八进制（%o）和十六进制（%x / %X）整数，输出时添加前缀；对于小数（%f / %e / %g），强制输出小数点 |
|  | 0 | 用0代替空格填充字段宽度 |
| width |  | 最小字段宽度 |
| .precision |  | 精度 |




|   | short | int | long | unsigned short | unsigned int | unsigned long |
| --- | --- | --- | --- | --- | --- | --- |
| 八进制 | -- | -- | -- | %ho | %o | %lo |
| 十进制 | %hd | %d | %ld | %hu | %u | %lu |
| 十六进制 | -- | -- | -- | %hx 或 %hX | %x 或 %X | %lx 或 %lX |

​<br />

| 格式控制符 | 说明 |
| --- | --- |
| %c | 输出一个单一的字符 |
| %hd、%d、%ld | 以十进制、有符号的形式输出 short、int、long 类型的整数 |
| %hu、%u、%lu | 以十进制、无符号的形式输出 short、int、long 类型的整数 |
| %ho、%o、%lo | 以八进制、不带前缀、无符号的形式输出 short、int、long 类型的整数 |
| %#ho、%#o、%#lo | 以八进制、带前缀、无符号的形式输出 short、int、long 类型的整数 |
| %hx、%x、%lx %hX、%X、%lX | 以十六进制、不带前缀、无符号的形式输出 short、int、long 类型的整数。如果 x 小写，那么输出的十六进制数字也小写；如果 X 大写，那么输出的十六进制数字也大写。 |
| %#hx、%#x、%#lx %#hX、%#X、%#lX | 以十六进制、带前缀、无符号的形式输出 short、int、long 类型的整数。如果 x 小写，那么输出的十六进制数字和前缀都小写； |
| %f、%lf | 以十进制的形式输出 float、double 类型的小数 |
| %e、%le %E、%lE | 以指数的形式输出 float、double 类型的小数。如果 e 小写，那么输出结果中的 e 也小写；如果 E 大写，那么输出结果中的 E 也大写。 |
| %g、%lg %G、%lG | 以十进制和指数中较短的形式输出 float、double 类型的小数，并且小数部分的最后不会添加多余的 0。如果 g 小写，那么当以指数形式输出时 e 也小写； |
| %s | 输出一个字符串 |


<br />
<br />
<br />
<br />int sprintf( char *restrict buffer, const char *restrict format, ... );<br />

```cpp
char str[100];
int data = 1024;
sprintf(str, "%d", data); //将data转换为字符串
sprintf(str, "0x%X", data);//获取data的十六进制
const char* s1 = "Hello";
const char* s2 = "World";
sprintf(str, "%s %s", s1, s2);//连接字符串s1和s2
```

<br />
<br />int snprintf( char *restrict buffer, int bufsz, const char *restrict format, ... );<br />是sprintf函数的更加安全版本，考虑到字符串的字节数，防止了字符串溢出。最多从源串中拷贝n－1个字符到目标串中，然后再在后面加一个0。所以如果目标串的大小为n 的话，将不会溢出。<br />
<br />
<br />int sscanf( const char *restrict buffer, const char *restrict format, ... );<br />

```cpp
 const char* s = "http://www.baidu.com:1234";
 char protocol[32], host[128], port[8];
 sscanf(s, "%[^:]://%[^:]:%[1-9]", protocol, host, port);  //解析网址
```

<br />

-  [] ：表示范围,%[1-9]表示只读取1-9这几个数字 %[a-z]表示只读取a-z小写字母，类似地 %[A-Z]只读取大写字母 
-  ^ ： 表示不取，如：%[^1]表示读取除'1'以外的所有字符 %[^/]表示除/以外的所有字符 
-  , ：范围可以用","相连接 如%[1-9,a-z]表示同时取1-9数字和a-z小写字母 
-  原则：从第一个在指定范围内的数字开始读取，到第一个不在范围内的数字结束%s 可以看成%[] 的一个特例 %[^ ](%E6%B3%A8%E6%84%8F%5E%E5%90%8E%E9%9D%A2%E6%9C%89%E4%B8%80%E4%B8%AA%E7%A9%BA%E6%A0%BC%EF%BC%81)​


<br />
<br />**文件访问**

| [fopen ](https://zh.cppreference.com/w/c/io/fopen)<br />fopen_s (C11) | 打开文件 (函数) |
| --- | --- |
| [freopen ](https://zh.cppreference.com/w/c/io/freopen)<br />freopen_s (C11) | 以不同名称打开既存的文件流 (函数) |
| [fclose](https://zh.cppreference.com/w/c/io/fclose) | 关闭文件 (函数) |
| [fflush](https://zh.cppreference.com/w/c/io/fflush) | 将输出流与实际文件同步 (函数) |
| [setbuf](https://zh.cppreference.com/w/c/io/setbuf) | 为文件流设置缓冲区 (函数) |
| [setvbuf](https://zh.cppreference.com/w/c/io/setvbuf) | 为文件流设置缓冲区和其大小 (函数) |
| 定义于头文件 <wchar.h> |  |
| [fwide ](https://zh.cppreference.com/w/c/io/fwide)<br />(C95) | 将文件流在宽字符I/O和窄字符I/O间切换 (函数) |
| 直接输入/输出 |  |
| [fread](https://zh.cppreference.com/w/c/io/fread) | 从文件读取 (函数) |
| [fwrite](https://zh.cppreference.com/w/c/io/fwrite) | 写入到文件 |


<br />
<br />**文件位置**

| [ftell](https://zh.cppreference.com/w/c/io/ftell) | 返回当前的文件位置指示值 (函数) |
| --- | --- |
| [fgetpos](https://zh.cppreference.com/w/c/io/fgetpos) | 获取文件位置指示器 (函数) |
| [fseek](https://zh.cppreference.com/w/c/io/fseek) | 将文件位置指示符移动到文件中的指定位置 (函数) |
| [fsetpos](https://zh.cppreference.com/w/c/io/fsetpos) | 将文件位置指示器移动到文件中的指定位置 (函数) |
| [rewind](https://zh.cppreference.com/w/c/io/rewind) | 将文件位置指示器移动到文件首 |


<br />
<br />**文件操作**

| [remove](https://zh.cppreference.com/w/c/io/remove) | 删除文件 (函数) |
| --- | --- |
| [rename](https://zh.cppreference.com/w/c/io/rename) | 重命名文件 (函数) |
| [tmpfile ](https://zh.cppreference.com/w/c/io/tmpfile)<br />tmpfile_s (C11) | 返回指向临时文件的指针 (函数) |
| [tmpnam ](https://zh.cppreference.com/w/c/io/tmpnam)<br />tmpnam_s (C11) | 返回唯一的文件名 |


<br />
<br />**错误处理**

| [clearerr](https://zh.cppreference.com/w/c/io/clearerr) | 清除错误 (函数) |
| --- | --- |
| [feof](https://zh.cppreference.com/w/c/io/feof) | 检查文件结尾 (函数) |
| [ferror](https://zh.cppreference.com/w/c/io/ferror) | 检查文件错误 (函数) |
| [perror](https://zh.cppreference.com/w/c/io/perror) | 显示对应当前错误的字符串到 stderr |


<br />
<br />
<br />**宏**

| stdin stdout stderr | 与标准输入流关联的 FILE_ 类型表达式 与标准输出流关联的 FILE_ 类型表达式 与标准错误输出流关联的 FILE* 类型表达式 (宏常量) |
| --- | --- |
| EOF | int类型的负值整数常量表达式 (宏常量) |
| FOPEN_MAX | 能同时打开的文件数 (宏常量) |
| FILENAME_MAX | 保有最长受支持文件名所需的字符数组大小 (宏常量) |
| BUFSIZ | setbuf()所用的缓冲区大小 (宏常量) |
| _IOFBF _IOLBF _IONBF | 指示全缓冲 I/O 的 setvbuf() 参数 指示行缓冲 I/O 的 setvbuf() 参数 指示无缓冲 I/O 的 setvbuf() 参数 (宏常量) |
| SEEK_SET SEEK_CUR SEEK_END | 指示从文件首开始寻位的 fseek() 参数 指示从文件当前位置开始寻位的 fseek()参数 指示从文件尾开始寻位的 fseek() 参数 (宏常量) |
| TMP_MAX TMP_MAX_S (C11) | [tmpnam ](https://zh.cppreference.com/w/c/io/tmpnam)<br />所能生成的最大独有文件数 tmpnam_s 所能生成的最大独有文件数 (宏常量) |
| L_tmpnam L_tmpnam_s (C11) | 保有 [tmpnam ](https://zh.cppreference.com/w/c/io/tmpnam)<br />结果所需的数组大小 保有 tmpnam_s 结果所需的数组大小 (宏常量) |


<br />

<a name="X0fNq"></a>
## ​[<cstdlib>](https://zh.cppreference.com/w/cpp/header/cstdlib)

<br />**类型**

| [div_t](https://zh.cppreference.com/w/cpp/numeric/math/div) | struct div_t {  int quot ;  int rem ;  } ; |
| --- | --- |
| [ldiv_t](https://zh.cppreference.com/w/cpp/numeric/math/div) | 结构体类型 |
| [lldiv_t ](https://zh.cppreference.com/w/cpp/numeric/math/div)<br />(C++11) | 结构体类型 |
| [size_t](https://zh.cppreference.com/w/cpp/types/size_t) | [sizeof运](https://zh.cppreference.com/w/cpp/language/sizeof)<br />算符返回的无符号整数类型 (typedef) |


<br />**函数**

| 进程式控制制 |  |
| --- | --- |
| [abort](https://zh.cppreference.com/w/cpp/utility/program/abort) | 导致非正常的程序终止（不进行清理） (函数) |
| [exit](https://zh.cppreference.com/w/cpp/utility/program/exit) | 导致正常的程序终止并进行清理 (函数) |
| [quick_exit ](https://zh.cppreference.com/w/cpp/utility/program/quick_exit)<br />(C++11) | 导致快速程序终止，不进行完全的清理 (函数) |
| [_Exit ](https://zh.cppreference.com/w/cpp/utility/program/_Exit)<br />(C++11) | 导致正常的程序终止，不进行清理 (函数) |
| [atexit](https://zh.cppreference.com/w/cpp/utility/program/atexit) | 注册将于调用[std::exit()时](https://zh.cppreference.com/w/cpp/utility/program/exit)<br />被调用的函数 (函数) |
| [at_quick_exit ](https://zh.cppreference.com/w/cpp/utility/program/at_quick_exit)<br />(C++11) | 注册将于调用[quick_exit时](https://zh.cppreference.com/w/cpp/utility/program/quick_exit)<br />被调用的函数 (函数) |
| [system](https://zh.cppreference.com/w/cpp/utility/program/system) | 调用宿主环境的命令处理器 (函数) |
| [getenv](https://zh.cppreference.com/w/cpp/utility/program/getenv) | 访问环境变数列表 (函数) |
| 内存管理 |  |
| [malloc](https://zh.cppreference.com/w/cpp/memory/c/malloc) | 分配内存 (函数) |
| [aligned_alloc ](https://zh.cppreference.com/w/cpp/memory/c/aligned_alloc)<br />(C++17) | 分配对齐的内存 (函数) |
| [calloc](https://zh.cppreference.com/w/cpp/memory/c/calloc) | 分配并清零内存 (函数) |
| [realloc](https://zh.cppreference.com/w/cpp/memory/c/realloc) | 扩张先前分配的内存块 (函数) |
| [free](https://zh.cppreference.com/w/cpp/memory/c/free) | 解分配先前分配的内存 (函数) |
| 数值字元串转换 |  |
| [atof](https://zh.cppreference.com/w/cpp/string/byte/atof) | 转换位元组字元串为浮点值 (函数) |
| [atoi ](https://zh.cppreference.com/w/cpp/string/byte/atoi)<br /> atol  atoll | 转换位元组字元串为整数值 (函数) |
| [strtol ](https://zh.cppreference.com/w/cpp/string/byte/strtol)<br /> strtoll | 转换位元组字元串为整数值 (函数) |
| [strtoul ](https://zh.cppreference.com/w/cpp/string/byte/strtoul)<br /> strtoull | 转换位元组字元串为无符号整数值 (函数) |
| [strtof ](https://zh.cppreference.com/w/cpp/string/byte/strtof)<br /> strtod  strtold | 转换位元组字元串为浮点值 (函数) |
| 宽字元串操作 |  |
| [mblen](https://zh.cppreference.com/w/cpp/string/multibyte/mblen) | 返回下一个多位元组字元中的位元组数 (函数) |
| [mbtowc](https://zh.cppreference.com/w/cpp/string/multibyte/mbtowc) | 将下一个多位元组字元转换成宽字元 (函数) |
| [wctomb](https://zh.cppreference.com/w/cpp/string/multibyte/wctomb) | 转换宽字元为其多位元组表示 (函数) |
| [mbstowcs](https://zh.cppreference.com/w/cpp/string/multibyte/mbstowcs) | 转换窄多位元组字元串为宽字元串 (函数) |
| [wcstombs](https://zh.cppreference.com/w/cpp/string/multibyte/wcstombs) | 转换宽字元串为窄多位元组字元串 (函数) |
| 杂项演算法与数学 |  |
| [rand](https://zh.cppreference.com/w/cpp/numeric/random/rand) | 生成伪随机数 (函数) |
| [srand](https://zh.cppreference.com/w/cpp/numeric/random/srand) | 初始化伪随机数生成器 void srand ( unsigned seed ) ; |
| [abs (int)labsllabs ](https://zh.cppreference.com/w/cpp/numeric/math/abs)<br />(C++11) | 计算整数值的绝对值（ |
| [div (int)ldivlldiv ](https://zh.cppreference.com/w/cpp/numeric/math/div)<br />(C++11) | 计算整数除法的商和余数 |


<br />
<br />void **qsort** ( void * ptr, size_t count, size_t size, int ( * comp ) ( const void * , const void * ) ) ;<br />​<br />
> ptr	-	指向要排序的数组的指针
> count	-	数组元素数
> size	-	数组中元素的大小，以位元组表示
> comp	-	比较函数。若首个参数小于第二个，则返回负整数值，若首个参数大于第二个，则返回正整数值，若两参数相等，则返回零。



void *** bsearch **( const void * key, const void * ptr, size_t count, size_t size，int ( * comp ) ( const void * , const void * ) ) ;

> key	-	指向要搜索的元素的指针
> ptr	-	指向要检验的数组的指针
> count	-	数组中元素的数量
> size	-	数组中每个元素的大小，以位元组表示
> comp	-	比较函数。若首个参数小于第二个，则返回负整数值，若首个参数大于第二个，则返回正整数值，若两参数相等，则返回零。作为首参数传递key，作为第二参数传递来自数组的元素。


<br />随机数发生器的初始化函数。<br />

```javascript
void srand(unsigned seed);
```

<br />
<br />**用法:** 它初始化随机种子，会提供一个种子，这个种子会对应一个随机数，如果使用相同的种子后面的 rand() 函数会出现一样的随机数，如: srand(1); 直接使用 1 来初始化种子。不过为了防止随机数每次重复，常常使用系统时间来初始化，即使用 time函数来获得系统时间，它的返回值为从 00:00:00 GMT, January 1, 1970 到现在所持续的秒数，然后将time_t型数据转化为(unsigned)型再传给srand函数，即: srand((unsigned) time(&t)); 还有一个经常用法，不需要定义time_t型t变量,即: srand((unsigned) time(NULL)); 直接传入一个空指针，因为你的程序中往往并不需要经过参数获得的数据。
<a name="d41d8cd9-1"></a>
## 

<br />[<ctime>](https://zh.cppreference.com/w/cpp/header/ctime)<br />**宏常量	CLOCKS_PER_SEC**	每秒的处理器始时钟嘀嗒数<br />
<br />**类型**

| [clock_t](https://zh.cppreference.com/w/cpp/chrono/c/clock_t) | 进程运行时间 (typedef) |
| --- | --- |
| [size_t](https://zh.cppreference.com/w/cpp/types/size_t) | [sizeof运](https://zh.cppreference.com/w/cpp/language/sizeof)<br />算符返回的无符号整数类型 (typedef) |
| [time_t](https://zh.cppreference.com/w/cpp/chrono/c/time_t) | 从纪元起的时间类型 (typedef) |
| [tm](https://zh.cppreference.com/w/cpp/chrono/c/tm) | 日历时间类型 (类) |
| [timespec ](https://zh.cppreference.com/w/cpp/chrono/c/timespec)<br />(C++17 起) | 以秒和纳秒表示的时间 (结构体) |


<br />
<br />**struct tm ;**

| int tm_sec | [0, 60] |
| --- | --- |
| int tm_min | 时后之分– [0, 59] (公开成员对象) |
| int tm_hour | 自午夜起之时– [0, 23] (公开成员对象) |
| int tm_mday | 月之日– [1, 31] (公开成员对象) |
| int tm_mon | 自一月起之月– [0, 11] (公开成员对象) |
| int tm_year | 自1900起之年 (公开成员对象) |
| int tm_wday | 自星期日起之日– [0, 6] (公开成员对象) |
| int tm_yday | 自一月1日起之日– [0, 365] (公开成员对象) |
| int tm_isdst | 夏令时标志。值若夏令时有效则为正，若无效则为零，若无可用信息则为负 |


<br />


| 时间操纵 |  |
| --- | --- |
| [clock](https://zh.cppreference.com/w/cpp/chrono/c/clock) | 返回自程序启动时起的原始处理器时钟时间 (函数) |
| [time](https://zh.cppreference.com/w/cpp/chrono/c/time) | 返回自纪元起计的系统当前时间[std:: time_t ](http://zh.cppreference.com/w/cpp/chrono/c/time_t)<br />time ( std:: time_t * arg ) ; |
| [difftime](https://zh.cppreference.com/w/cpp/chrono/c/difftime) | 计算时间之间的差double difftime ( [std:: time_t ](http://zh.cppreference.com/w/cpp/chrono/c/time_t)<br />time_end, std:: time_t time_beg ) ; |
| [timespec_get ](https://zh.cppreference.com/w/cpp/chrono/c/timespec_get)<br />(C++17 起) | 返回基于给定时间基底的日历时间 int timespec_get( [std::timespec*](http://zh.cppreference.com/w/cpp/chrono/c/timespec)<br /> ts, int base) |
| 格式转换 |  |
| [ctime](https://zh.cppreference.com/w/cpp/chrono/c/ctime) | char _ ctime ( const _[_std:: time_t _](http://zh.cppreference.com/w/cpp/chrono/c/time_t)<br /> time ) ; |
| [asctime](https://zh.cppreference.com/w/cpp/chrono/c/asctime) | 转换tm对象为文本表示char _ asctime ( const _[_std:: tm _](http://zh.cppreference.com/w/cpp/chrono/c/tm)<br /> time_ptr ) ; |
| [strftime](https://zh.cppreference.com/w/cpp/chrono/c/strftime) | 转换tm对象到自定义的文本表示 (函数) |
| [wcsftime](https://zh.cppreference.com/w/cpp/chrono/c/wcsftime) | 转换tm对象为定制的宽字元串文本表示 (函数) |
| [gmtime](https://zh.cppreference.com/w/cpp/chrono/c/gmtime) | 转换纪元起时间为以协调世界时表示的日历时间 (函数) |
| [localtime](https://zh.cppreference.com/w/cpp/chrono/c/localtime) | 转换纪元起时间为以本地时间表示的日历时间 (函数) |
| [mktime](https://zh.cppreference.com/w/cpp/chrono/c/mktime) | 转换日历时间为纪元起的时间 (函数) |


<br />


| 基本运算 |  |
| --- | --- |
| [abs (float)fabsfabsffabsl ](https://zh.cppreference.com/w/cpp/numeric/math/fabs)<br />(C11)(C11) | 浮点值的绝对值（ |
| [fmodfmodffmodl ](https://zh.cppreference.com/w/cpp/numeric/math/fmod)<br />(C11)(C11) | 浮点除法运算的余数 (函数) |
| [remainderremainderfremainderl ](https://zh.cppreference.com/w/cpp/numeric/math/remainder)<br />(C11)(C11)(C++11) | 除法运算的有符号余数 (函数) |
| [remquoremquofremquol ](https://zh.cppreference.com/w/cpp/numeric/math/remquo)<br />(C11)(C11)(C++11) | 除法运算的有符号余数和最后三个二进制位 (函数) |
| [fmafmaffmal ](https://zh.cppreference.com/w/cpp/numeric/math/fma)<br />(C11)(C11)(C++11) | 混合的乘加运算 (函数) |
| [fmaxfmaxffmaxl ](https://zh.cppreference.com/w/cpp/numeric/math/fmax)<br />(C11)(C11)(C++11) | 两个浮点值的较大者 (函数) |
| [fminfminffminl ](https://zh.cppreference.com/w/cpp/numeric/math/fmin)<br />(C11)(C11)(C++11) | 两个浮点值的较小者 (函数) |
| [fdimfdimffdiml ](https://zh.cppreference.com/w/cpp/numeric/math/fdim)<br />(C11)(C11)(C++11) | 两个浮点值的正数差（max(0, xy)） (函数) |
| [nannanfnanl ](https://zh.cppreference.com/w/cpp/numeric/math/nan)<br />(C11)(C11)(C++11) | 非数（NaN） (函数) |
| 线性插值 |  |
| [lerp ](https://zh.cppreference.com/w/cpp/numeric/lerp)<br />(C++20) | 线性插值函数 (函数) |
| 指数函数 |  |
| [expexpfexpl ](https://zh.cppreference.com/w/cpp/numeric/math/exp)<br />(C11)(C11) | 返回e的给定次幂（e x） (函数) |
| [exp2exp2fexp2l ](https://zh.cppreference.com/w/cpp/numeric/math/exp2)<br />(C11)(C11)(C++11) | 返回2的给定次幂（2 x） (函数) |
| [expm1expm1fexpm1l ](https://zh.cppreference.com/w/cpp/numeric/math/expm1)<br />(C11)(C11)(C++11) | 返回e的给定次幂减一（e x -1） (函数) |
| [loglogflogl ](https://zh.cppreference.com/w/cpp/numeric/math/log)<br />(C11)(C11) | 计算自然（以e为底）对数（ln(x)） (函数) |
| [log10log10flog10l ](https://zh.cppreference.com/w/cpp/numeric/math/log10)<br />(C11)(C11) | 计算常用（以10为底）对数（log 10 (x)） (函数) |
| [log2log2flog2l ](https://zh.cppreference.com/w/cpp/numeric/math/log2)<br />(C11)(C11)(C++11) | 给定数值的以2为底的对数（log 2 (x)） (函数) |
| [log1plog1pflog1pl ](https://zh.cppreference.com/w/cpp/numeric/math/log1p)<br />(C11)(C11)(C++11) | 1加上给定数值的自然（以e为底）对数（ln(1+x)） (函数) |
| 幂函数 |  |
| [powpowfpowl ](https://zh.cppreference.com/w/cpp/numeric/math/pow)<br />(C11)(C11) | 求某数的给定次幂（x y） (函数) |
| [sqrtsqrtfsqrtl ](https://zh.cppreference.com/w/cpp/numeric/math/sqrt)<br />(C11)(C11) | 计算平方根（√ x） (函数) |
| [cbrtcbrtfcbrtl ](https://zh.cppreference.com/w/cpp/numeric/math/cbrt)<br />(C11)(C11)(C++11) | 计算立方根（3 √ x） (函数) |
| [hypothypotfhypotl ](https://zh.cppreference.com/w/cpp/numeric/math/hypot)<br />(C11)(C11)(C++11) | 计算两个给定数的平方和的平方根（√ x2 +y2） (函数) |
| 三角函数 |  |
| [sinsinfsinl ](https://zh.cppreference.com/w/cpp/numeric/math/sin)<br />(C11)(C11) | 计算正弦（sin(x)） (函数) |
| [coscosfcosl ](https://zh.cppreference.com/w/cpp/numeric/math/cos)<br />(C11)(C11) | 计算余弦（cos(x)） (函数) |
| [tantanftanl ](https://zh.cppreference.com/w/cpp/numeric/math/tan)<br />(C11)(C11) | 计算正切（tan(x)） (函数) |
| [asinasinfasinl ](https://zh.cppreference.com/w/cpp/numeric/math/asin)<br />(C11)(C11) | 计算反正弦（arcsin(x)） (函数) |
| [acosacosfacosl ](https://zh.cppreference.com/w/cpp/numeric/math/acos)<br />(C11)(C11) | 计算反余弦（arccos(x)） (函数) |
| [atanatanfatanl ](https://zh.cppreference.com/w/cpp/numeric/math/atan)<br />(C11)(C11) | 计算反正切（arctan(x)） (函数) |
| [atan2atan2fatan2l ](https://zh.cppreference.com/w/cpp/numeric/math/atan2)<br />(C11)(C11) | 反正切，用符号确定象限 (函数) |
| 双曲函数 |  |
| [sinhsinhfsinhl ](https://zh.cppreference.com/w/cpp/numeric/math/sinh)<br />(C11)(C11) | 计算双曲正弦（sh(x)） (函数) |
| [coshcoshfcoshl ](https://zh.cppreference.com/w/cpp/numeric/math/cosh)<br />(C11)(C11) | 计算双曲余弦（ch(x)） (函数) |
| [tanhtanhftanhl ](https://zh.cppreference.com/w/cpp/numeric/math/tanh)<br />(C11)(C11) | 双曲正切 (函数) |
| [asinhasinhfasinhl ](https://zh.cppreference.com/w/cpp/numeric/math/asinh)<br />(C11)(C11)(C++11) | 计算反双曲正弦（arsinh(x)） (函数) |
| [acoshacoshfacoshl ](https://zh.cppreference.com/w/cpp/numeric/math/acosh)<br />(C11)(C11)(C++11) | 计算反双曲余弦（arcosh(x)） (函数) |
| [atanhatanhfatanhl ](https://zh.cppreference.com/w/cpp/numeric/math/atanh)<br />(C11)(C11)(C++11) | 计算反双曲正切（artanh(x)） (函数) |
| 误差与伽马函数 |  |
| [erferfferfl ](https://zh.cppreference.com/w/cpp/numeric/math/erf)<br />(C11)(C11)(C++11) | 误差函数 (函数) |
| [erfcerfcferfcl ](https://zh.cppreference.com/w/cpp/numeric/math/erfc)<br />(C11)(C11)(C++11) | 补误差函数 (函数) |
| [tgammatgammaftgammal ](https://zh.cppreference.com/w/cpp/numeric/math/tgamma)<br />(C11)(C11)(C++11) | gamma函数 (函数) |
| [lgammalgammaflgammal ](https://zh.cppreference.com/w/cpp/numeric/math/lgamma)<br />(C11)(C11)(C++11) | gamma函数的自然对数 (函数) |
| 临近整数的浮点运算 |  |
| [ceilceilfceill ](https://zh.cppreference.com/w/cpp/numeric/math/ceil)<br />(C11)(C11) | 不小于给定值的最接近整数值 (函数) |
| [floorfloorffloorl ](https://zh.cppreference.com/w/cpp/numeric/math/floor)<br />(C11)(C11) | 不大于给定值的最接近整数 (函数) |
| [trunctruncftruncl ](https://zh.cppreference.com/w/cpp/numeric/math/trunc)<br />(C11)(C11)(C++11) | 绝对值不大于给定值的最接近整数 (函数) |
| [roundroundfroundllroundlroundflroundlllroundllroundfllroundl ](https://zh.cppreference.com/w/cpp/numeric/math/round)<br />(C11)(C11)(C11)(C11)(C11)(C11)(C11)(C11)(C ++11) | 最接近整数，中间情况下向远离零舍入 (函数) |
| [nearbyintnearbyintfnearbyintl ](https://zh.cppreference.com/w/cpp/numeric/math/nearbyint)<br />(C11)(C11)(C++11) | 使用当前舍入模式的最接近整数 (函数) |
| [rintrintfrintllrintlrintflrintlllrintllrintfllrintl ](https://zh.cppreference.com/w/cpp/numeric/math/rint)<br />(C11)(C11)(C11)(C11)(C11)(C11)(C11)(C11)(C ++11) | 使用当前舍入模式的最接近整数 若结果有别则有异常 (函数) |
| 浮点操纵函数 |  |
| [frexpfrexpffrexpl ](https://zh.cppreference.com/w/cpp/numeric/math/frexp)<br />(C11)(C11) | 将数分解为有效数字和2的幂次 (函数) |
| [ldexpldexpfldexpl ](https://zh.cppreference.com/w/cpp/numeric/math/ldexp)<br />(C11)(C11) | 将数乘以2的幂次 (函数) |
| [modfmodffmodfl ](https://zh.cppreference.com/w/cpp/numeric/math/modf)<br />(C11)(C11) | 分解数为整数和小数部分 (函数) |
| [scalbnscalbnfscalbnlscalblnscalblnfscalblnl ](https://zh.cppreference.com/w/cpp/numeric/math/scalbn)<br />(C11)(C11)(C11)(C11)(C11)(C11) | 将数乘以[FLT_RADIX的](https://zh.cppreference.com/w/cpp/types/climits)<br />幂次 (函数) |
| [ilogbilogbfilogbl ](https://zh.cppreference.com/w/cpp/numeric/math/ilogb)<br />(C11)(C11)(C++11) | 提取数的指数 (函数) |
| [logblogbflogbl ](https://zh.cppreference.com/w/cpp/numeric/math/logb)<br />(C11)(C11)(C++11) | 提取数的指数 (函数) |
| [nextafternextafterfnextafterlnexttowardnexttowardfnexttowardl ](https://zh.cppreference.com/w/cpp/numeric/math/nextafter)<br />(C11)(C11)(C11)(C11)(C11)(C11) | 趋向给定值的下个可表示浮点值 (函数) |
| [copysigncopysignfcopysignl ](https://zh.cppreference.com/w/cpp/numeric/math/copysign)<br />(C11)(C11)(C++11) | 复制浮点值的符号 (函数) |
| 分类与比较 |  |
| [fpclassify ](https://zh.cppreference.com/w/cpp/numeric/math/fpclassify)<br />(C++11) | 归类给定的浮点值 (函数) |
| [isfinite ](https://zh.cppreference.com/w/cpp/numeric/math/isfinite)<br />(C++11) | 检查给定数是否拥有有限值 (函数) |
| [isinf ](https://zh.cppreference.com/w/cpp/numeric/math/isinf)<br />(C++11) | 检查给定数是否为无限 (函数) |
| [isnan ](https://zh.cppreference.com/w/cpp/numeric/math/isnan)<br />(C++11) | 检查给定的数是否NaN (函数) |
| [isnormal ](https://zh.cppreference.com/w/cpp/numeric/math/isnormal)<br />(C++11) | 检查给定数是否正规 (函数) |
| [signbit ](https://zh.cppreference.com/w/cpp/numeric/math/signbit)<br />(C++11) | 检查给定数是否为负 (函数) |
| [isgreater ](https://zh.cppreference.com/w/cpp/numeric/math/isgreater)<br />(C++11) | 检查第一个浮点实参是否大于第二个 (函数) |
| [isgreaterequal ](https://zh.cppreference.com/w/cpp/numeric/math/isgreaterequal)<br />(C++11) | 检查第一个浮点实参是否大于或等于第二个 |


<br />


| 函数 |  |
| --- | --- |
| [isalnum](https://zh.cppreference.com/w/cpp/string/byte/isalnum) | 检查字元是否为字母或数字 (函数) |
| [isalpha](https://zh.cppreference.com/w/cpp/string/byte/isalpha) | 检查字元是否为字母 (函数) |
| [islower](https://zh.cppreference.com/w/cpp/string/byte/islower) | 检查字元是否为小写 (函数) |
| [isupper](https://zh.cppreference.com/w/cpp/string/byte/isupper) | 检查字元是否为大写字元 (函数) |
| [isdigit](https://zh.cppreference.com/w/cpp/string/byte/isdigit) | 检查字元是否为数字 (函数) |
| [isxdigit](https://zh.cppreference.com/w/cpp/string/byte/isxdigit) | 检查字元是为十六进制字元 (函数) |
| [iscntrl](https://zh.cppreference.com/w/cpp/string/byte/iscntrl) | 检查字元是否为控制字元 (函数) |
| [isgraph](https://zh.cppreference.com/w/cpp/string/byte/isgraph) | 检查字元是否为图形字元 (函数) |
| [isspace](https://zh.cppreference.com/w/cpp/string/byte/isspace) | 检查字元是否为空白间隔字元 (函数) |
| [isblank ](https://zh.cppreference.com/w/cpp/string/byte/isblank)<br />(C++11) | 检查字元是否为空白字元 (函数) |
| [isprint](https://zh.cppreference.com/w/cpp/string/byte/isprint) | 检查字元是否为列印字元 (函数) |
| [ispunct](https://zh.cppreference.com/w/cpp/string/byte/ispunct) | 检查字元是否为标点符 (函数) |
| [tolower](https://zh.cppreference.com/w/cpp/string/byte/tolower) | 转换字元为小写 (函数) |
| [toupper](https://zh.cppreference.com/w/cpp/string/byte/toupper) | 转换字元为大写 (函数) |


<br />
<br />**transform(s[i].begin(), s[i].end(), s[i].begin(), ::tolower);**<br />​

| 字元串操纵 |  |
| --- | --- |
| [strcpy](https://zh.cppreference.com/w/cpp/string/byte/strcpy) | 复制一个字元串给另一个 (函数) |
| [strncpy](https://zh.cppreference.com/w/cpp/string/byte/strncpy) | 复制来自一个字元串的一定量字元给另一个 (函数) |
| [strcat](https://zh.cppreference.com/w/cpp/string/byte/strcat) | 连接两个字元串 (函数) |
| [strncat](https://zh.cppreference.com/w/cpp/string/byte/strncat) | 连接两个字元串的一定量字元 (函数) |
| [strxfrm](https://zh.cppreference.com/w/cpp/string/byte/strxfrm) | 变换字元串，使得strcmp会返回与strcoll相同的结果 (函数) |
| 字元串检验 |  |
| [strlen](https://zh.cppreference.com/w/cpp/string/byte/strlen) | 返回给定字元串的长度 (函数) |
| [strcmp](https://zh.cppreference.com/w/cpp/string/byte/strcmp) | 比较两个字元串 (函数) |
| [strncmp](https://zh.cppreference.com/w/cpp/string/byte/strncmp) | 比较两个字元串的一定量字元 (函数) |
| [strcoll](https://zh.cppreference.com/w/cpp/string/byte/strcoll) | 按照当前本地环境比较两个字元串 (函数) |
| [strchr](https://zh.cppreference.com/w/cpp/string/byte/strchr) | 寻找字元的首次出现 (函数) |
| [strrchr](https://zh.cppreference.com/w/cpp/string/byte/strrchr) | 寻找字元的最后出现 (函数) |
| [strspn](https://zh.cppreference.com/w/cpp/string/byte/strspn) | 返回仅由另一位元组字元串中找到的字元组成的最大起始段的长度 (函数) |
| [strcspn](https://zh.cppreference.com/w/cpp/string/byte/strcspn) | 返回仅由另一位元组字元串中找不到的字元组成的最大起始段的长度 (函数) |
| [strpbrk](https://zh.cppreference.com/w/cpp/string/byte/strpbrk) | 寻找任何来自分隔符集合的字元的首个位置 (函数) |
| [strstr](https://zh.cppreference.com/w/cpp/string/byte/strstr) | 寻找字元子串的首次出现 (函数) |
| [strtok](https://zh.cppreference.com/w/cpp/string/byte/strtok) | 寻找位元组字元串中的下个记号 (函数) |
| 字元数组操纵 |  |
| [memchr](https://zh.cppreference.com/w/cpp/string/byte/memchr) | 在数组中搜索字元的首次出现[const] void _ memchr ( const void _ ptr, int ch, [std:: size_t ](http://zh.cppreference.com/w/cpp/types/size_t)<br />count ) ; |
| [memcmp](https://zh.cppreference.com/w/cpp/string/byte/memcmp) | 比较两个缓冲区 int memcmp( const void_ lhs, const void_ rhs,std::size_t count ); |
| [memset](https://zh.cppreference.com/w/cpp/string/byte/memset) | 以一个字元填充缓冲区 void _ memset ( void _ dest, int ch, std:: size_t count ) ; |
| [memcpy](https://zh.cppreference.com/w/cpp/string/byte/memcpy) | 复制一个缓冲区到另一个void _ memcpy ( void _ dest, const void * src, [std:: size_t ](http://zh.cppreference.com/w/cpp/types/size_t)<br />count ) ; |
| [memmove](https://zh.cppreference.com/w/cpp/string/byte/memmove) | 移动一个缓冲区到另一个void _ memmove ( void _ dest, const void * src, [std:: size_t ](http://zh.cppreference.com/w/cpp/types/size_t)<br />count ) ; |
| 杂项 |  |
| [strerror](https://zh.cppreference.com/w/cpp/string/byte/strerror) | 返回给定错误码的文本版本 |


<br />
<br />

<a name="0712fc4f"></a>
## [<limits.h>](https://zh.cppreference.com/w/c/types/limits)
| CHAR_BIT | 字节位数 (宏常量) |
| --- | --- |
| MB_LEN_MAX | 多字节字符的最大字节数 (宏常量) |
| CHAR_MIN | char 的最小值 (宏常量) |
| CHAR_MAX | char 的最大值 (宏常量) |
| SCHAR_MIN SHRT_MIN INT_MIN LONG_MIN LLONG_MIN (C99) | 分别为 signed char 、 short 、 int 、 long 和 long long的最小值 (宏常量) |
| SCHAR_MAX SHRT_MAX INT_MAX LONG_MAX LLONG_MAX (C99) | 分别为 signed char 、 short 、 int 、 long 和 long long的最大值 (宏常量) |
| UCHAR_MAX USHRT_MAX UINT_MAX ULONG_MAX ULLONG_MAX (C99) | 分别为 unsigned char 、 unsigned short 、 unsigned int 、 unsigned long 和 unsigned long long 的最大值 |


<br />


| FLT_RADIX | 用于表示所有三种浮点数类型的底（整数基） (宏常量) |
| --- | --- |
| DECIMAL_DIG (C99) | 将 long double转换成十进制小数，再转回 long double 而保持同一值，至少需要 DECIMAL_DIG 位小数：此乃 long double 序列化/反序列化所需的十进制精度 (宏常量) |
| FLT_DECIMAL_DIGDBL_DECIMAL_DIGLDBL_DECIMAL_DIG (C11) | 将 float/double/long double 转换成十进制小数再转换回同一值，至少需要 FLT_DECIMAL_DIG/DBL_DECIMAL_DIG/LDBL_DECIMAL_DIG 位小数：此乃浮点值序列化/反序列化所需的十进制精度。标准定义至少为 6 、 10 、 10 ， 而 IEEE float 为 9 ， IEEE double 为 17 。（见 C++ 模仿 [max_digits10 ](https://zh.cppreference.com/w/cpp/types/numeric_limits/max_digits10)<br />） (宏常量) |
| FLT_MIN DBL_MIN LDBL_MIN | 分别为 float 、 double 及 long double 的最小正规正值 (宏常量) |
| FLT_TRUE_MIN DBL_TRUE_MIN LDBL_TRUE_MIN (C11) | 分别为 float 、 double 和 long double 的最小正值 (宏常量) |
| FLT_MAX DBL_MAX LDBL_MAX | 分别为 float 、 double 和 long double 的最大有限正值 (宏常量) |
| FLT_EPSILONDBL_EPSILONLDBL_EPSILON | 分别为 1.0 与下一个可表示的float 、 double 和 long double 值之差 (宏常量) |
| FLT_DIGDBL_DIGLDBL_DIG | 保证能从文本转换为 float/double/long double 再转换回文本，而不会发生改变或上溢出的十进制位数（细节见 C++ 模仿 [digits10 ](https://zh.cppreference.com/w/cpp/types/numeric_limits/digits10)<br />） (宏常量) |
| FLT_MANT_DIGDBL_MANT_DIGLDBL_MANT_DIG | 分别为 float 、 double 和 long double 所能表示而不损失精度的，浮点尾数中的 FLT_RADIX 底位数 (宏常量) |
| FLT_MIN_EXPDBL_MIN_EXPLDBL_MIN_EXP | 分别为对应 float 、 double 和 long double 的最小负整数，使得 FLT_RADIX 的该数减一次幂为正规 (宏常量) |
| FLT_MIN_10_EXPDBL_MIN_10_EXPLDBL_MIN_10_EXP | 分别为对应 float 、 double 和 long double 的最小负整数，使得 10 的该数减一次幂为正规的 (宏常量) |
| FLT_MAX_EXPDBL_MAX_EXPLDBL_MAX_EXP | 分别为能够使 FLT_RADIX 的该整数减一次幂为可表示的有限的 float、double 与 long double 的最大正整数 (宏常量) |
| FLT_MAX_10_EXPDBL_MAX_10_EXPLDBL_MAX_10_EXP | 分别为能够使 10 的该整数减一次幂为可表示的有限的 float、double 与 long double 的最大正整数 (宏常量) |
| [FLT_ROUNDS](https://zh.cppreference.com/w/c/types/limits/FLT_ROUNDS) | 浮点算术的舍入模式，等于 float_round_style (宏常量) |
| [FLT_EVAL_METHOD ](https://zh.cppreference.com/w/c/types/limits/FLT_EVAL_METHOD)<br />(C99) | 中间结果所用的扩展精度： 0 表示不使用， 1 表示用 double 替代 float ， 2 表示使用 long double (宏常量) |
| FLT_HAS_SUBNORMDBL_HAS_SUBNORMLDBL_HAS_SUBNORM (C11) | 类型是否支持非正规（[非正规）](https://en.wikipedia.org/wiki/Denormal_number)<br />数： -1 为不确定， 0 为不支持， 1 为支持 (宏常量) |


<br />
<br />[assert](https://zh.cppreference.com/w/cpp/error/assert)<br />

```cpp
#ifdef NDEBUG
#define assert(condition) ((void)0)
#else
#define assert(condition) /*implementation defined*/
#endif
```

<br />
<br />
<br />

<a name="08b14789"></a>
## [<stdbool.h>](https://zh.cppreference.com/w/c/types/boolean)
C 编程语言从 C99 开始支持以内建类型 _Bool 进行的布尔运算

| 宏名称 | 展开成 |
| --- | --- |
| bool | _Bool |
| true | 整数常量 1 |
| false | 整数常量 0 |
| __bool_true_false_are_defined | 整数常量 1 |


<br />
<br />

<a name="681e39b2"></a>
## <conio.h>
Console Input/Output（控制台输入[输出](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E8%BE%93%E5%87%BA/5885826)），定义了通过控制台进行数据输入和输出的函数，主要是一些用户通过按键盘产生的对应操作。<br />
<br />**屏幕操作函数**

1.  clrscr()		清除字符窗口函数 
2.  window()	字符窗口函数 
3.  gotoxy(int x, int y)	光标定位函数 
4.  clreol() 	清除光标行尾字符函数 
5.  insline() 	插入空行函数 
6.  delline() 	删除一行函数 
7.  gettext() 	拷进文字函数 
8.  puttext() 	拷出文字函数 
9.  movetext() 	移动文字函数


<br />**字符属性函数**

10.  textmode() 	文本模式函数 
11.  highvideo()	高亮度函数	// 适用于cprintf() , cputs() 
12.  lowvideo() 		低亮度函数 
13.  normvideo();	正常显示 
14.  textcolor() 		文本颜色函数 
15.  textattr(int newattr) 	文本属性函数 
16.  textbackground() 	文本背景函数


<br />**屏显状态函数**

17.  wherex() 	光标处x坐标函数 
18.  wherey() 	光标处y坐标函数 
19.  gettextinfo() 	获取文本窗口信息函数


<br />**不回显函数getch()**<br />**回显函数getche()**​<br />函数用途：从控制台读取一个字符	（当用户按下某个字符时，函数自动读取，无需按回车）<br />函数原型：int getch(void)，阻塞函数（函数不返回，无法不进行下一步操作）<br />返回值：读取的字符<br />
<br />
<br />**int kbhit(void);**<br />用于非阻塞地响应键盘输入事件，即“键盘敲击”(keyboard hit)。<br />功能及返回值： 检查当前是否有键盘输入，若有则返回一个非0值，否则返回0。<br />
<br />
<br />

<a name="GCC"></a>
# GCC
GNU Compiler Collection，GNU 编译器套件<br />
<br />支持编译C、C++、 Go、Objective-C，Objective-C ++，Fortran，Ada，D 和 BRIG（HSAIL）等程序<br />
<br />
<br />**gcc [-E|-S|-c] [infile,] [-o outfile]**

| 指令选项 | 功 能 |
| --- | --- |
| -E（大写） | 预处理指定的源文件，不进行编译。 |
| -S（大写） | 编译指定的源文件，但是不进行汇编。 |
| -c | 编译、汇编指定的源文件，但是不进行链接。 |
| -o | 指定生成文件的文件名。 |
| -llibrary（-I library） | 其中 library 表示要搜索的库文件的名称。该选项用于手动指定链接环节中程序可以调用的库文件。建议 -l 和库文件名之间不使用空格，比如 -lstdc++。 |
| -ansi | 对于 C 语言程序来说，其等价于 -std=c90； 对于 C++ 程序来说，其等价于 -std=c++98。 |
| -std= | 手动指令编程语言所遵循的标准，例如 c89、c90、c98、c11 等。 |



```
编译（Compilation）
g++ -S demo.i

汇编（Assembly）
g++ -c demo.s

链接（Linking）
g++ demo.o

最终可执行文件 a.out

以上合成一步
g++ demo.cpp -save-temps
```
