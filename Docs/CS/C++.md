
# —— C++ ——
C++ 是一种静态类型的、编译式的、通用的、大小写敏感的、不规则的编程语言，支持过程化编程、面向对象编程和泛型编程。  <br />  C++ 被认为是一种**中级**语言，它综合了高级语言和低级语言的特点。  <br />  C++ 是由 Bjarne Stroustrup 于 1979 年在新泽西州美利山贝尔实验室开始设计开发的。C++ 进一步扩充和完善了 C 语言，最初命名为C with class，后来在 1983 年更名为 C++。  <br />  静态类型的编程语言是在编译时执行类型检查，而不是在运行时执行类型检查

## 相比C新特性
**类型**

- 宽字符类型 wchar_t
```cpp
typedef short int wchar_t;
```

- 布尔类型 bool (true,fasle) : 1byte



**运算符**：&（引用，reference），&&（右值引用，用于为临时对象[延长生存期](https://zh.cppreference.com/w/cpp/language/reference_initialization#.E4.B8.B4.E6.97.B6.E9.87.8F.E7.94.9F.E5.AD.98.E6.9C.9F)）  <br />  引用 vs 指针

- 不存在空引用。引用必须连接到一块合法的内存。
- 一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象。
- 引用必须在创建时被初始化。指针可以在任何时间被初始化。



**函数**

- 可设置默认参数
- 函数重载
- 内联函数（inline function）
- 变长实参

C++ 会在程序的编译阶段对函数的函数名进行“再次重命名”，例如：  <br />  void Swap(int a, int b) 会被重命名为_Swap_int_int；  <br />  void Swap(float x, float y) 会被重命名为_Swap_float_float。  <br />  C 语言的标准对它们进行编译，两个函数的函数名都是_Swap。

**流程控制**

- if constexpr()
- if ( ; )
- Range-based for loop
```cpp
for(type rangeVarriable : Array)
    statement;
```


**强制类型转换**

- const_cast (expr): 修改（增删）类型的 const / volatile 属性。目标类型必须与源类型相同
- dynamic_cast (expr): 运行时执行转换，验证转换的有效性。如果转换未执行，则转换失败，表达式 expr 被判定为 null。type 必须是类的指针、类的引用或者 void*，如果 type 是类指针类型，那么 expr 也必须是一个指针，如果 type 是一个引用，那个 expr 也必须是一个引用。
- reinterpret_cast (expr): 可将某种指针改为其他类型的指针。可把一个指针与一个整数互转
- static_cast (expr): 执行非动态转换，不保证转换的安全性，用来把一个基类指针转换为派生类指针。

## [运算符优先级](https://zh.cppreference.com/w/cpp/language/operator_precedence)  <br />    <br />  
| 优先级 | 运算符 | 描述 | 结合性 |
| --- | --- | --- | --- |
| 1 | :: | [作用域解析](https://zh.cppreference.com/w/cpp/language/identifiers#.E6.9C.89.E9.99.90.E5.AE.9A.E7.9A.84.E6.A0.87.E8.AF.86.E7.AC.A6) | 从左到右 |
| 2 | a++   a-- | 后缀[自增与自减](https://zh.cppreference.com/w/cpp/language/operator_incdec) |  |
|  | _type_()   _type_{} | [函数风格转型](https://zh.cppreference.com/w/cpp/language/explicit_cast) |  |
|  | a() | [函数调用](https://zh.cppreference.com/w/cpp/language/operator_other#.E5.86.85.E5.BB.BA.E7.9A.84.E5.87.BD.E6.95.B0.E8.B0.83.E7.94.A8.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
|  | a[] | [下标](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E4.B8.8B.E6.A0.87.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
|  | .   -> | [成员访问](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E6.88.90.E5.91.98.E8.AE.BF.E9.97.AE.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
| 3 | ++a   --a | 前缀[自增与自减](https://zh.cppreference.com/w/cpp/language/operator_incdec) | 从右到左 |
|  | +a   -a | 一元[加与减](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E4.B8.80.E5.85.83.E7.AE.97.E6.9C.AF.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
|  | !   ~ | [逻辑非](https://zh.cppreference.com/w/cpp/language/operator_logical)和[逐位非](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E6.8C.89.E4.BD.8D.E9.80.BB.E8.BE.91.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
|  | (_type_) | [C 风格转型](https://zh.cppreference.com/w/cpp/language/explicit_cast) |  |
|  | *a | [间接](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E9.97.B4.E6.8E.A5.E8.BF.90.E7.AE.97.E7.AC.A6)（解引用） |  |
|  | &a | [取址](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E5.8F.96.E5.9C.B0.E5.9D.80.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
|  | sizeof | [取大小](https://zh.cppreference.com/w/cpp/language/sizeof)[[注 1]](https://zh.cppreference.com/w/cpp/language/operator_precedence#cite_note-1) |  |
|  | co_await | await 表达式 (C++20) |  |
|  | new   new[] | [动态内存分配](https://zh.cppreference.com/w/cpp/language/new) |  |
|  | delete   delete[] | [动态内存分配](https://zh.cppreference.com/w/cpp/language/delete) |  |
| 4 | .*   ->* | [成员指针](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E6.88.90.E5.91.98.E6.8C.87.E9.92.88.E8.AE.BF.E9.97.AE.E8.BF.90.E7.AE.97.E7.AC.A6) | 从左到右 |
| 5 | a*b   a/b   a%b | [乘法、除法与余数](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E4.B9.98.E6.B3.95.E6.80.A7.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
| 6 | a+b   a-b | [加法与减法](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E5.8A.A0.E6.B3.95.E6.80.A7.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
| 7 | <<   >> | 逐位[左移与右移](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E7.A7.BB.E4.BD.8D.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
| 8 | <=> | [三路比较运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison#.E4.B8.89.E8.B7.AF.E6.AF.94.E8.BE.83)(C++20 起) |  |
| 9 | <   <= | 分别为 < 与 ≤ 的[关系运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison) |  |
|  | >   >= | 分别为 > 与 ≥ 的[关系运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison) |  |
| 10 | ==   != | 分别为 = 与 ≠ 的[关系运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison) |  |
| 11 | a&b | [逐位与](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E6.8C.89.E4.BD.8D.E9.80.BB.E8.BE.91.E8.BF.90.E7.AE.97.E7.AC.A6) |  |
| 12 | ^ | [逐位异或](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E6.8C.89.E4.BD.8D.E9.80.BB.E8.BE.91.E8.BF.90.E7.AE.97.E7.AC.A6)（互斥或） |  |
| 13 | &#124; | [逐位或](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E6.8C.89.E4.BD.8D.E9.80.BB.E8.BE.91.E8.BF.90.E7.AE.97.E7.AC.A6)（可兼或） |  |
| 14 | && | [逻辑与](https://zh.cppreference.com/w/cpp/language/operator_logical) |  |
| 15 | &#124;&#124; | [逻辑或](https://zh.cppreference.com/w/cpp/language/operator_logical) |  |
| 16 | a?b:c | [三元条件](https://zh.cppreference.com/w/cpp/language/operator_other#.E6.9D.A1.E4.BB.B6.E8.BF.90.E7.AE.97.E7.AC.A6)[[注 2]](https://zh.cppreference.com/w/cpp/language/operator_precedence#cite_note-2) | 从右到左 |
|  | throw | [throw 运算符](https://zh.cppreference.com/w/cpp/language/throw) |  |
|  | co_yield | yield 表达式 (C++20) |  |
|  | = | [直接赋值](https://zh.cppreference.com/w/cpp/language/operator_assignment#.E5.86.85.E5.BB.BA.E7.9A.84.E7.9B.B4.E6.8E.A5.E8.B5.8B.E5.80.BC)（C++ 类默认提供） |  |
|  | +=   -= | 以和及差[复合赋值](https://zh.cppreference.com/w/cpp/language/operator_assignment#.E5.86.85.E5.BB.BA.E7.9A.84.E5.A4.8D.E5.90.88.E8.B5.8B.E5.80.BC) |  |
|  | *=   /=   %= | 以积、商及余数[复合赋值](https://zh.cppreference.com/w/cpp/language/operator_assignment#.E5.86.85.E5.BB.BA.E7.9A.84.E5.A4.8D.E5.90.88.E8.B5.8B.E5.80.BC) |  |
|  | <<=   >>= | 以逐位左移及右移[复合赋值](https://zh.cppreference.com/w/cpp/language/operator_assignment#.E5.86.85.E5.BB.BA.E7.9A.84.E5.A4.8D.E5.90.88.E8.B5.8B.E5.80.BC) |  |
|  | &=   ^=   &#124;= | 以逐位与、异或及或[复合赋值](https://zh.cppreference.com/w/cpp/language/operator_assignment#.E5.86.85.E5.BB.BA.E7.9A.84.E5.A4.8D.E5.90.88.E8.B5.8B.E5.80.BC) |  |
| 17 | , | [逗号](https://zh.cppreference.com/w/cpp/language/operator_other#.E5.86.85.E5.BB.BA.E7.9A.84.E9.80.97.E5.8F.B7.E8.BF.90.E7.AE.97.E7.AC.A6) | 从左到右 |


[sizeof...](https://zh.cppreference.com/w/cpp/language/sizeof...) 查询[形参包](https://zh.cppreference.com/w/cpp/language/parameter_pack)的大小  <br />  [typeid](https://zh.cppreference.com/w/cpp/language/typeid) 查询类型的类型信息	`typeid(type | expression).name()`  <br />  [noexcept](https://zh.cppreference.com/w/cpp/language/noexcept) 查询表达式是否能抛出异常，返回 bool 类型  <br />  [alignof](https://zh.cppreference.com/w/cpp/language/alignof) 查询类型的对齐要求	alignof(type)


# [C++ 关键字](https://zh.cppreference.com/mwiki/index.php?title=cpp/keyword&variant=zh-hans)
| [alignas](https://zh.cppreference.com/w/cpp/keyword/alignas) (C++11 起)  <br />  [alignof](https://zh.cppreference.com/w/cpp/keyword/alignof) (C++11 起)  <br />  [and](https://zh.cppreference.com/w/cpp/keyword/and)  <br />  [and_eq](https://zh.cppreference.com/w/cpp/keyword/and_eq)  <br />  [asm](https://zh.cppreference.com/w/cpp/keyword/asm)  <br />  [atomic_cancel](https://zh.cppreference.com/w/cpp/language/transactional_memory) (TM TS)  <br />  [atomic_commit](https://zh.cppreference.com/w/cpp/language/transactional_memory) (TM TS)  <br />  [atomic_noexcept](https://zh.cppreference.com/w/cpp/language/transactional_memory) (TM TS)  <br />  [auto](https://zh.cppreference.com/w/cpp/keyword/auto)(1)  <br />  [bitand](https://zh.cppreference.com/w/cpp/keyword/bitand)  <br />  [bitor](https://zh.cppreference.com/w/cpp/keyword/bitor)  <br />  [bool](https://zh.cppreference.com/w/cpp/keyword/bool)  <br />  [break](https://zh.cppreference.com/w/cpp/keyword/break)  <br />  [case](https://zh.cppreference.com/w/cpp/keyword/case)  <br />  [catch](https://zh.cppreference.com/w/cpp/keyword/catch)  <br />  [char](https://zh.cppreference.com/w/cpp/keyword/char)  <br />  [char8_t](https://zh.cppreference.com/w/cpp/keyword/char8_t) (C++20 起)  <br />  [char16_t](https://zh.cppreference.com/w/cpp/keyword/char16_t) (C++11 起)  <br />  [char32_t](https://zh.cppreference.com/w/cpp/keyword/char32_t) (C++11 起)  <br />  [class](https://zh.cppreference.com/w/cpp/keyword/class)(1)  <br />  [compl](https://zh.cppreference.com/w/cpp/keyword/compl)  <br />  [concept](https://zh.cppreference.com/w/cpp/keyword/concept) (C++20 起)  <br />  [const](https://zh.cppreference.com/w/cpp/keyword/const)  <br />  [consteval](https://zh.cppreference.com/w/cpp/keyword/consteval) (C++20 起)  <br />  [constexpr](https://zh.cppreference.com/w/cpp/keyword/constexpr) (C++11 起)  <br />  [constinit](https://zh.cppreference.com/w/cpp/keyword/constinit) (C++20 起)  <br />  [const_cast](https://zh.cppreference.com/w/cpp/keyword/const_cast)  <br />  [continue](https://zh.cppreference.com/w/cpp/keyword/continue)  <br />  [co_await](https://zh.cppreference.com/w/cpp/keyword/co_await) (C++20 起)  <br />  [co_return](https://zh.cppreference.com/w/cpp/keyword/co_return) (C++20 起)  <br />  [co_yield](https://zh.cppreference.com/w/cpp/keyword/co_yield) (C++20 起)  <br />  [decltype](https://zh.cppreference.com/w/cpp/keyword/decltype) (C++11 起) | [default](https://zh.cppreference.com/w/cpp/keyword/default)(1)  <br />  [delete](https://zh.cppreference.com/w/cpp/keyword/delete)(1)  <br />  [do](https://zh.cppreference.com/w/cpp/keyword/do)  <br />  [double](https://zh.cppreference.com/w/cpp/keyword/double)  <br />  [dynamic_cast](https://zh.cppreference.com/w/cpp/keyword/dynamic_cast)  <br />  [else](https://zh.cppreference.com/w/cpp/keyword/else)  <br />  [enum](https://zh.cppreference.com/w/cpp/keyword/enum)  <br />  [explicit](https://zh.cppreference.com/w/cpp/keyword/explicit)  <br />  [export](https://zh.cppreference.com/w/cpp/keyword/export)(1)(3)  <br />  [extern](https://zh.cppreference.com/w/cpp/keyword/extern)(1)  <br />  [false](https://zh.cppreference.com/w/cpp/keyword/false)  <br />  [float](https://zh.cppreference.com/w/cpp/keyword/float)  <br />  [for](https://zh.cppreference.com/w/cpp/keyword/for)  <br />  [friend](https://zh.cppreference.com/w/cpp/keyword/friend)  <br />  [goto](https://zh.cppreference.com/w/cpp/keyword/goto)  <br />  [if](https://zh.cppreference.com/w/cpp/keyword/if)  <br />  [inline](https://zh.cppreference.com/w/cpp/keyword/inline)(1)  <br />  [int](https://zh.cppreference.com/w/cpp/keyword/int)  <br />  [long](https://zh.cppreference.com/w/cpp/keyword/long)  <br />  [mutable](https://zh.cppreference.com/w/cpp/keyword/mutable)(1)  <br />  [namespace](https://zh.cppreference.com/w/cpp/keyword/namespace)  <br />  [new](https://zh.cppreference.com/w/cpp/keyword/new)  <br />  [noexcept](https://zh.cppreference.com/w/cpp/keyword/noexcept) (C++11 起)  <br />  [not](https://zh.cppreference.com/w/cpp/keyword/not)  <br />  [not_eq](https://zh.cppreference.com/w/cpp/keyword/not_eq)  <br />  [nullptr](https://zh.cppreference.com/w/cpp/keyword/nullptr) (C++11 起)  <br />  [operator](https://zh.cppreference.com/w/cpp/keyword/operator)  <br />  [or](https://zh.cppreference.com/w/cpp/keyword/or)  <br />  [or_eq](https://zh.cppreference.com/w/cpp/keyword/or_eq)  <br />  [private](https://zh.cppreference.com/w/cpp/keyword/private)  <br />  [protected](https://zh.cppreference.com/w/cpp/keyword/protected)  <br />  [public](https://zh.cppreference.com/w/cpp/keyword/public)  <br />  [reflexpr](https://zh.cppreference.com/mwiki/index.php?title=cpp/keyword/reflexpr&action=edit&redlink=1) (反射 TS) | [register](https://zh.cppreference.com/w/cpp/keyword/register)(2)  <br />  [reinterpret_cast](https://zh.cppreference.com/w/cpp/keyword/reinterpret_cast)  <br />  [requires](https://zh.cppreference.com/w/cpp/keyword/requires) (C++20 起)  <br />  [return](https://zh.cppreference.com/w/cpp/keyword/return)  <br />  [short](https://zh.cppreference.com/w/cpp/keyword/short)  <br />  [signed](https://zh.cppreference.com/w/cpp/keyword/signed)  <br />  [sizeof](https://zh.cppreference.com/w/cpp/keyword/sizeof)(1)  <br />  [static](https://zh.cppreference.com/w/cpp/keyword/static)  <br />  [static_assert](https://zh.cppreference.com/w/cpp/keyword/static_assert) (C++11 起)  <br />  [static_cast](https://zh.cppreference.com/w/cpp/keyword/static_cast)  <br />  [struct](https://zh.cppreference.com/w/cpp/keyword/struct)(1)  <br />  [switch](https://zh.cppreference.com/w/cpp/keyword/switch)  <br />  [synchronized](https://zh.cppreference.com/w/cpp/language/transactional_memory) (TM TS)  <br />  [template](https://zh.cppreference.com/w/cpp/keyword/template)  <br />  [this](https://zh.cppreference.com/w/cpp/keyword/this)  <br />  [thread_local](https://zh.cppreference.com/w/cpp/keyword/thread_local) (C++11 起)  <br />  [throw](https://zh.cppreference.com/w/cpp/keyword/throw)  <br />  [true](https://zh.cppreference.com/w/cpp/keyword/true)  <br />  [try](https://zh.cppreference.com/w/cpp/keyword/try)  <br />  [typedef](https://zh.cppreference.com/w/cpp/keyword/typedef)  <br />  [typeid](https://zh.cppreference.com/w/cpp/keyword/typeid)  <br />  [typename](https://zh.cppreference.com/w/cpp/keyword/typename)  <br />  [union](https://zh.cppreference.com/w/cpp/keyword/union)  <br />  [unsigned](https://zh.cppreference.com/w/cpp/keyword/unsigned)  <br />  [using](https://zh.cppreference.com/w/cpp/keyword/using)(1)  <br />  [virtual](https://zh.cppreference.com/w/cpp/keyword/virtual)  <br />  [void](https://zh.cppreference.com/w/cpp/keyword/void)  <br />  [volatile](https://zh.cppreference.com/w/cpp/keyword/volatile)  <br />  [wchar_t](https://zh.cppreference.com/w/cpp/keyword/wchar_t)  <br />  [while](https://zh.cppreference.com/w/cpp/keyword/while)  <br />  [xor](https://zh.cppreference.com/w/cpp/keyword/xor)  <br />  [xor_eq](https://zh.cppreference.com/w/cpp/keyword/xor_eq) |
| --- | --- | --- |




# ——基本语法——
**输入输出**  <br />  `cout << "Value of str is : " << str << endl;`  <br />  `cin >> name >> age;`  <br />  标准错误流（cerr）	<< 	非缓冲  <br />  标准日志流（clog）缓冲

**速度**

- Windows > Linux
- Windows：C使用printf耗时 > C不解除绑定耗时 > C++解除绑定耗时 > C语言printf耗时
- Linux： C不解除绑定耗时> C使用printf耗时 = C语言printf耗时 > C++解除绑定耗时



**原因：**为了保证混用 cin 与 scanf 能保持同步且不出错，设置了一个缓冲区，防止指针错误造成乱码，因此cin会牺牲一些效率

**解除**

- iso::sync_with_stdio（false）：C++为了兼容C，保证程序在使用 printf 和 cout 时不发生混乱，将输出流绑到了一起，默认iso::sync_with_stdio(true)，即开启。
- cin.tie(0)，cout.tie(0)：解除的是C运行库层面的对数据传输的绑定,stdin和stdout在更底层的操作系统层面有绑定，没有解除，cin.tie(NULL)，cout.tie(NULL)是继续松绑C传输的效率。



**模板**
```cpp
#include<iostream>
namespace IO
{
    inline char nc() {
        static char buf[100000], *p1 = buf, *p2 = buf;
        return p1 == p2 && (p2 = (p1 = buf) + fread(buf, 1, 100000, stdin), p1 == p2) ? EOF : *p1++;
    }
    template<typename T>
    inline T read() {
        char ch = nc(); 
        T sum = 0;
        while (!(ch >= '0'&&ch <= '9'))
        {
            ch = nc();
            if (ch == EOF)  return EOF;
        }
        while (ch >= '0'&&ch <= '9')
        {
            sum = sum * 10 + ch - 48;
            ch = nc();
            if (ch == EOF)  return EOF;
        }
        return sum;
    }
}
using namespace IO;
  
int main(){
    long long tmp=read<long long>();    //输入方式
    std::cout<<tmp<<std::endl;
  
    while(tmp = read<long long>()!=EOF){} //循环判断EOF的方式
    return 0;
}
```


**命名空间（namespace）**  <br />  命名空间可嵌套，不连续，或无名（unnamed）空间
```cpp
namespace namespace_name {
   // 代码声明
}

// 使用标准库命名空间
using namespace std;
```


**using**

- using 声明：using std::cout;
- using 指令：using  namespace std;
- 类型别名：using type alias



**初始化列表 **[**initializer_list**](https://zh.cppreference.com/w/cpp/utility/initializer_list)  <br />  template< class T >  <br />  class initializer_list;  <br />  一个访问 const T 类型对象数组的轻量代理对象

| 容量 |  |
| --- | --- |
| [size](https://zh.cppreference.com/w/cpp/utility/initializer_list/size) | 返回 initializer_list 中的元素数目 (公开成员函数) |
| 迭代器 |  |
| [begin](https://zh.cppreference.com/w/cpp/utility/initializer_list/begin) | 返回指向首元素的指针 (公开成员函数) |
| [end](https://zh.cppreference.com/w/cpp/utility/initializer_list/end) | 返回指向末元素后一位置的指针 |


## Lambda 表达式
```cpp
[capture] | (parameters) | mutable | exception | -> return-type | {body}
```
e.g.：[](int x, int y){ return x < y ; }
> []      // 沒有定义任何变量。使用未定义变量会引发错误。
> [x, &y] // x以传值方式传入（默认），y以引用方式传入。
> [&]     // 任何被使用到的外部变量都隐式地以引用方式加以引用。
> [=]     // 任何被使用到的外部变量都隐式地以传值方式加以引用。
> [&, x]  // x显式地以传值方式加以引用。其余变量以引用方式加以引用。
> [=, &z] // z显式地以引用方式加以引用。其余变量以传值方式加以引用。

lambda 表达式可以直接使用 this 指针，对于[]的形式须显式传入
```cpp
[this]() { this->someFunc(); }();
```

## [string](https://zh.cppreference.com/w/cpp/string/basic_string)类

#### 成员函数
| [(构造函数)](https://zh.cppreference.com/w/cpp/string/basic_string/basic_string) | 构造 basic_string  (公开成员函数) |
| --- | --- |
| (析构函数) | 销毁字符串，若使用内部存储则解分配它  (公开成员函数) |
| [operator=](https://zh.cppreference.com/w/cpp/string/basic_string/operator%3D) | 为字符串赋值  (公开成员函数) |
| [assign](https://zh.cppreference.com/w/cpp/string/basic_string/assign) | 赋值字符给字符串  (公开成员函数) |
| [get_allocator](https://zh.cppreference.com/w/cpp/string/basic_string/get_allocator) | 返回关联的分配器  (公开成员函数) |
| 元素访问 |  |
| [at](https://zh.cppreference.com/w/cpp/string/basic_string/at) | 访问指定字符，有边界检查  (公开成员函数) |
| [operator[]](https://zh.cppreference.com/w/cpp/string/basic_string/operator_at) | 访问指定字符  (公开成员函数) |
| [front ](https://zh.cppreference.com/w/cpp/string/basic_string/front)  <br />  (C++11) | 访问首字符  (公开成员函数) |
| [back ](https://zh.cppreference.com/w/cpp/string/basic_string/back)  <br />  (C++11) | 访问最后的字符  (公开成员函数) |
| [data](https://zh.cppreference.com/w/cpp/string/basic_string/data) | 返回指向字符串首字符的指针  (公开成员函数) |
| [c_str](https://zh.cppreference.com/w/cpp/string/basic_string/c_str) | 返回字符串的不可修改的 C 字符数组版本  (公开成员函数) |
| [operator basic_string_view ](https://zh.cppreference.com/w/cpp/string/basic_string/operator_basic_string_view)  <br />  (C++17) | 返回到整个字符串的不可修改的 basic_string_view  (公开成员函数) |
| 迭代器 |  |
| [begin ](https://zh.cppreference.com/w/cpp/string/basic_string/begin)  <br />   cbegin (C++11) | 返回指向起始的迭代器  (公开成员函数) |
| [end ](https://zh.cppreference.com/w/cpp/string/basic_string/end)  <br />   cend (C++11) | 返回指向末尾的迭代器  (公开成员函数) |
| [rbegin ](https://zh.cppreference.com/w/cpp/string/basic_string/rbegin)  <br />   crbegin (C++11) | 返回指向起始的逆向迭代器  (公开成员函数) |
| [rend ](https://zh.cppreference.com/w/cpp/string/basic_string/rend)  <br />   crend (C++11) | 返回指向末尾的逆向迭代器  (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/string/basic_string/empty) | 检查字符串是否为空  (公开成员函数) |
| [sizelength](https://zh.cppreference.com/w/cpp/string/basic_string/size) | 返回字符数  (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/string/basic_string/max_size) | 返回字符数的最大值  (公开成员函数) |
| [reserve](https://zh.cppreference.com/w/cpp/string/basic_string/reserve) | 保留存储  (公开成员函数) |
| [capacity](https://zh.cppreference.com/w/cpp/string/basic_string/capacity) | 返回当前对象分配的存储空间能保存的字符数量  (公开成员函数) |
| [shrink_to_fit ](https://zh.cppreference.com/w/cpp/string/basic_string/shrink_to_fit)  <br />  (C++11) | 通过释放不使用内存减少内存使用  (公开成员函数) |
| 操作 |  |
| [clear](https://zh.cppreference.com/w/cpp/string/basic_string/clear) | 清除内容  (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/string/basic_string/insert) | 插入字符  (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/string/basic_string/erase) | 移除字符  (公开成员函数) |
| [push_back](https://zh.cppreference.com/w/cpp/string/basic_string/push_back) | 后附字符到结尾  (公开成员函数) |
| [pop_back ](https://zh.cppreference.com/w/cpp/string/basic_string/pop_back)  <br />  (C++11) | 移除末尾字符  (公开成员函数) |
| [append](https://zh.cppreference.com/w/cpp/string/basic_string/append) | 后附字符到结尾  (公开成员函数) |
| [operator+=](https://zh.cppreference.com/w/cpp/string/basic_string/operator%2B%3D) | 后附字符到结尾  (公开成员函数) |
| [compare](https://zh.cppreference.com/w/cpp/string/basic_string/compare) | 比较二个字符串  (公开成员函数) |
| [starts_with ](https://zh.cppreference.com/w/cpp/string/basic_string/starts_with)  <br />  (C++20) | 检查 string 是否始于给定前缀  (公开成员函数) |
| [ends_with ](https://zh.cppreference.com/w/cpp/string/basic_string/ends_with)  <br />  (C++20) | 检查 string 是否终于给定后缀  (公开成员函数) |
| [replace](https://zh.cppreference.com/w/cpp/string/basic_string/replace) | 替换字符串的指定部分  (公开成员函数) |
| [substr](https://zh.cppreference.com/w/cpp/string/basic_string/substr) | 返回子串  (公开成员函数) |
| [copy](https://zh.cppreference.com/w/cpp/string/basic_string/copy) | 复制字符  (公开成员函数) |
| [resize](https://zh.cppreference.com/w/cpp/string/basic_string/resize) | 更改存储的字符数  (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/string/basic_string/swap) | 交换内容  (公开成员函数) |
| 查找 |  |
| [find](https://zh.cppreference.com/w/cpp/string/basic_string/find) | 于字符串中寻找字符  (公开成员函数) |
| [rfind](https://zh.cppreference.com/w/cpp/string/basic_string/rfind) | 寻找子串的最后一次出现  (公开成员函数) |
| [find_first_of](https://zh.cppreference.com/w/cpp/string/basic_string/find_first_of) | 寻找字符的首次出现  (公开成员函数) |
| [find_first_not_of](https://zh.cppreference.com/w/cpp/string/basic_string/find_first_not_of) | 寻找字符的首次缺失  (公开成员函数) |
| [find_last_of](https://zh.cppreference.com/w/cpp/string/basic_string/find_last_of) | 寻找字符的最后一次出现  (公开成员函数) |
| [find_last_not_of](https://zh.cppreference.com/w/cpp/string/basic_string/find_last_not_of) | 寻找字符的最后一次缺失  (公开成员函数) |
| 常量 |  |
| [npos ](https://zh.cppreference.com/w/cpp/string/basic_string/npos)  <br />  [静态] | 特殊值。准确含义依赖语境  (公开静态成员常量) |


#### 非成员函数
| [operator+](https://zh.cppreference.com/w/cpp/string/basic_string/operator%2B) | 连接两个字符串或者一个字符串和一个字符  (函数模板) |
| --- | --- |
| [operator==，](https://zh.cppreference.com/w/cpp/string/basic_string/operator_cmp)  <br />  !=，<，>，<=，>= | 以字典序比较两个字符串  (函数模板) |
| [std::swap(std::basic_string)](https://zh.cppreference.com/w/cpp/string/basic_string/swap2) | 特化 [std::swap ](https://zh.cppreference.com/w/cpp/algorithm/swap)  <br />  算法  (函数模板) |
| [erase(std::basic_string) ](https://zh.cppreference.com/w/cpp/string/basic_string/erase2)  <br />  erase_if(std::basic_string) (C++20) | 擦除所有满足特定判别标准的元素  (函数模板) |
| 输入/输出 |  |
| [operator<>](https://zh.cppreference.com/w/cpp/string/basic_string/operator_ltltgtgt) | 执行字符串的流输入与输出  (函数模板) |
| [getline](https://zh.cppreference.com/w/cpp/string/basic_string/getline) | 从 I/O 流读取数据到字符串  (函数模板) |

**字面量**

| 定义于内联命名空间 std::literals::string_literals |  |
| --- | --- |
| [operator""s ](https://zh.cppreference.com/w/cpp/string/basic_string/operator%22%22s)  <br />  (C++14) | 转换字符数组字面量为 basic_string  (函数) |

原始字符串字面量（raw string literal)  <br />  `R " [d-char-sequence](···)[d-char-sequence] "`  <br />  可选分隔符序列 <= 16个字符，前后一致




# OOP


## 类（Class）
default：class-private	, struct-public

**构造函数 Constructor**

- 与类名相同且无返回类型的成员函数，用于初始化对象
- 类无显式（explicit）声明，编译器自动提供无参的

**- Default constructor 默认构造函数**

- 类名 ( ) ;
- 类名 :: 类名 ( ) 函数体
- 类名() = delete ;
- 类名() = default ;
- 类名 :: 类名 ( ) = default ;

constructor initializer 初始化列表：推荐，初始化const类型数据成员的唯一方法，初始顺序与声明次序相同
```cpp
ClassName （parameterList）[：datafield（value），···]  { }
```


**- Copy constructor 拷贝构造函数**

- 类名 ( const 类名 & )
- 类名 ( const 类名 & ) = default;
- 类名 ( const 类名 & ) = delete;
```cpp
ClassName （[const] ClassName&）{ }  //参数>1，要有默认值
```

- shallow copy：相当于引用，指向对象地址
- deep copy：指向对象内容



**- Move constructors 移动构造函数**

- 类名 ( 类名 && )
- class_name ( 类名 && ) = default;
- class_name ( 类名 && ) = delete;



**- Convert constructor 转换构造函数**  <br />  不以说明符 **explicit** 声明且可以单个参数调用的构造函数
```cpp
struct A
{
    A(int) { }      // 转换构造函数
    A(int, int) { } // 转换构造函数
    operator bool() const { return true; }
};
 
struct B
{
    explicit B(int) { }
    explicit B(int, int) { }
    explicit operator bool() const { return true; }
};
 
int main()
{
    A a1 = 1;      // OK：复制初始化选择 A::A(int)
    A a2(2);       // OK：直接初始化选择 A::A(int)
    A a3 {4, 5};   // OK：直接列表初始化选择 A::A(int, int)
    A a4 = {4, 5}; // OK：复制列表初始化选择 A::A(int, int)
    A a5 = (A)1;   // OK：显式转型进行 static_cast
    if (a1) ;      // OK：A::operator bool()
    bool na1 = a1; // OK：复制初始化选择 A::operator bool()
    bool na2 = static_cast<bool>(a1); // OK：static_cast 进行直接初始化
 
//  B b1 = 1;      // 错误：复制初始化不考虑 B::B(int)
    B b2(2);       // OK：直接初始化选择 B::B(int)
    B b3 {4, 5};   // OK：直接列表初始化选择 B::B(int, int)
//  B b4 = {4, 5}; // 错误：复制列表初始化不考虑 B::B(int,int)
    B b5 = (B)1;   // OK：显式转型进行 static_cast
    if (b2) ;      // OK：B::operator bool()
//  bool nb1 = b2; // 错误：复制初始化不考虑 B::operator bool()
    bool nb2 = static_cast<bool>(b2); // OK：static_cast 进行直接初始化
}
```


**Destructor 析构函数**：自动释放对象所分配的资源

- ~ 类名 ();
- virtual ~ 类名 ();
- 声明说明符序列(可选) ~ 类名 () = default;
- 声明说明符序列(可选) ~ 类名 () = delete;
```cpp
#include <iostream>
 
using namespace std;
 
class Line
{
   public:
      int getLength( void );
      Line( int len );             // 构造函数
     Line( const Line &obj);      // 拷贝构造函数
     ~Line();                     // 析构函数
 
   private:
      int *ptr;
};
 
// 成员函数定义，包括构造函数
Line::Line(int len)
{
    cout << "调用构造函数" << endl;
    // 为指针分配内存
    ptr = new int;
    *ptr = len;
}
 
Line::Line(const Line &obj)
{
    cout << "调用拷贝构造函数并为指针 ptr 分配内存" << endl;
    ptr = new int;
    *ptr = *obj.ptr; // 拷贝值
}
 
Line::~Line(void)
{
    cout << "释放内存" << endl;
    delete ptr;
}
int Line::getLength( void )
{
    return *ptr;
}
 
void display(Line obj)
{
   cout << "line 大小 : " << obj.getLength() <<endl;
}
 
// 程序的主函数
int main( )
{
   Line line1(10);
 
   Line line2 = line1; // 调用了拷贝构造函数
 
   display(line1);
   display(line2);
 
   return 0;
}
```


**this 指针**  <br />  一个[纯右值](https://zh.cppreference.com/w/cpp/language/value_category)表达式，其值是对其调用成员函数的对象的地址
```cpp
class T
{
    int x;
 
    void foo()
    {
        x = 6;       // 等同于 this->x = 6;
        this->x = 5; // 显式使用 this->
    }
 
    void foo() const
    {
//        x = 7; // 错误：*this 是常量
    }
 
    void foo(int x) // 形参 x 遮蔽拥有相同名字的成员
    {
        this->x = x; // 无限定的 x 代表形参，需要用‘this->’消歧义
    }
 
    int y;
    T(int x) : x(x), // 用形参 x 初始化成员 x
               y(this->x) // 用成员 x 初始化成员 y
    {}
 
    T& operator= ( const T& b )
    {
        x = b.x;
        return *this; // 许多重载运算符都返回 *this
    }
};
```

## 继承
```cpp
class <派生类名>:<继承方式1><基类名1>,<继承方式2><基类名2>,…
{
    <派生类类体>
};
```
| 访问 | public | protected | private |
| --- | --- | --- | --- |
| 同一个类 | yes | yes | yes |
| 派生类 | yes | yes | no |
| 外部的类 | yes | no | no |

一个派生类继承了所有的基类方法（基类的构造函数、析构函数和拷贝构造函数、重载运算符、友元函数 除外）
```cpp
#include <iostream>
 
using namespace std;
 
// 基类 Shape
class Shape 
{
   public:
      void setWidth(int w)
      {
         width = w;
      }
      void setHeight(int h)
      {
         height = h;
      }
   protected:
      int width;
      int height;
};
 
// 基类 PaintCost
class PaintCost 
{
   public:
      int getCost(int area)
      {
         return area * 70;
      }
};
 
// 派生类
class Rectangle: public Shape, public PaintCost
{
   public:
      int getArea()
      { 
         return (width * height); 
      }
};
 
int main(void)
{
   Rectangle Rect;
   int area;
 
   Rect.setWidth(5);
   Rect.setHeight(7);
 
   area = Rect.getArea();
   
   // 输出对象的面积：Total area: 35
   cout << "Total area: " << Rect.getArea() << endl;
 
   // 输出总花费：Total paint cost: $2450
   cout << "Total paint cost: $" << Rect.getCost(area) << endl;
 
   return 0;
}
```

using声明可改变成员在派生类中的访问限制
```cpp
class Base {
 protected:
     int d;
};
class Derived : public Base {
 public:
    using Base::d; // 令 Base 的受保护成员 d 为 Derived 的公开成员
    using Base::Base; // 继承父类的全部构造函数 (C++11)
};
```


**friend 友元**  <br />  友元声明出现于[类体](https://zh.cppreference.com/w/cpp/language/class)内，并向一个函数或另一个类授予对包含友元声明的类的私有及受保护成员的访问权


## 多态
**虚函数**
```cpp
virtual [return_type] function( );   //只适用于成员函数
virtual [return_type] function( )=0;  //纯虚函数
```
override 虚函数覆盖
```cpp
struct A
{
    virtual void foo();
    void bar();
};
 
struct B : A
{
    void foo() const override; // 错误：B::foo 不覆盖 A::foo
                               // （签名不匹配）
    void foo() override; // OK：B::foo 覆盖 A::foo
    void bar() override; // 错误：A::bar 非虚
};
```

final：指定某个[虚函数](https://zh.cppreference.com/w/cpp/language/virtual)不能在子类中被覆盖，或某个类不能被子类继承
```cpp
struct Base
{
    virtual void foo();
};
 
struct A : Base
{
    void foo() final; // Base::foo 被覆盖而 A::foo 是最终覆盖函数
    void bar() final; // 错误： bar 不能为 final 因为它非虚
};
 
struct B final : A // struct B 为 final
{
    void foo() override; // 错误：foo 不能被覆盖，因为它在 A 中是 final
};
 
struct C : B // 错误：B 为 final
{
};
```

## 操作符重载
可重载的运算符

| 双目算术运算符 | + (加)，-(减)，*(乘)，/(除)，% (取模) |
| --- | --- |
| 关系运算符 | ==(等于)，!= (不等于)，< (小于)，> (大于>，<=(小于等于)，>=(大于等于) |
| 逻辑运算符 | &#124;&#124;(逻辑或)，&&(逻辑与)，!(逻辑非) |
| 单目运算符 | + (正)，-(负)，*(指针)，&(取地址) |
| 自增自减运算符 | ++(自增)，--(自减) |
| 位运算符 | &#124; (按位或)，& (按位与)，~(按位取反)，^(按位异或),，<< (左移)，>>(右移) |
| 赋值运算符 | =, +=, -=, *=, /= , % = , &=, &#124;=, ^=, <<=, >>= |
| 空间申请与释放 | new, delete, new[ ] , delete[] |
| 其他运算符 | **()**(函数调用)，**->**(成员访问)，**,**(逗号)，**[]**(下标) |


```cpp
#include <iostream>
using namespace std;
 
class Check
{
  private:
    int i;
  public:
    Check(): i(0) {  }
    Check operator ++ ()
    {
        Check temp;
        temp.i = ++i;
        return temp;
    }
 
    // 括号中插入 int 表示后缀
    Check operator ++ (int)
    {
        Check temp;
        temp.i = i++;
        return temp;
    }
 
    void Display()
    { cout << "i = "<< i <<endl; }
};
 
int main()
{
    Check obj, obj1;    
    obj.Display(); 
    obj1.Display();
 
    // 调用运算符函数，然后将 obj 的值赋给 obj1
    obj1 = ++obj;
    obj.Display();
    obj1.Display();
 
    // 将 obj 赋值给 obj1, 然后再调用运算符函数
    obj1 = obj++;
    obj.Display();
    obj1.Display();
 
    return 0;
}
```

嵌套类（nested class）  <br />  嵌套类中的声明能使用外围类的所有成员，遵循非静态成员的[常规使用规则](https://zh.cppreference.com/w/cpp/language/data_members#.E7.94.A8.E6.B3.95)



# 模板 Template
模板是泛型编程的基础，泛型编程即以一种独立于任何特定类型的方式编写代码。
```cpp
template <typename [| class] typeParameter>
```
可使用 default type， 非类型参数 nontype paremeter
```cpp
template <typename T = int , char c, ···>  [const T value]
```
e.g.
```cpp
#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include <stdexcept>
 
using namespace std;
 
template <class T>
class Stack { 
  private: 
    vector<T> elems;     // 元素 
 
  public: 
    void push(T const&);      // 入栈
    void pop();               // 出栈
    T top() const;            // 返回栈顶元素
    bool empty() const
    {       
        return elems.empty(); // 如果为空则返回真。
    } 
}; 
 
template <class T>
void Stack<T>::push (T const& elem) 
{ 
    // 追加传入元素的副本
    elems.push_back(elem);    
} 
 
template <class T>
void Stack<T>::pop () 
{ 
    if (elems.empty()) 
    { 
        throw out_of_range("Stack<>::pop(): empty stack"); 
    }
    // 删除最后一个元素
    elems.pop_back();         
} 
 
template <class T>
T Stack<T>::top () const 
{ 
    if (elems.empty()) 
    { 
        throw out_of_range("Stack<>::top(): empty stack"); 
    }
    // 返回最后一个元素的副本 
    return elems.back();      
} 
 
int main() 
{ 
    try 
    { 
        Stack<int>         intStack;  // int 类型的栈 
        Stack<string> stringStack;    // string 类型的栈 
 
        // 操作 int 类型的栈 
        intStack.push(7); 
        cout << intStack.top() <<endl; 
 
        // 操作 string 类型的栈 
        stringStack.push("hello"); 
        cout << stringStack.top() << std::endl; 
        stringStack.pop(); 
        stringStack.pop(); 
    } 
    catch (exception const& ex) 
    { 
        cerr << "Exception: " << ex.what() <<endl; 
        return -1;
    } 
}
```

# 异常 Exception
```cpp
// 抛出异常
throw list [| "exception specification"];
// 捕获异常
try
{
   // 保护代码
}
catch( [const ExceptionName&] e )
{
   // catch 块
   [cerr << e.what() <<endl;)]
}
···
```
| 异常 | 描述 |
| --- | --- |
| std::exception | 该异常是所有标准 C++ 异常的父类。 |
| std::bad_alloc | 该异常可以通过 new 抛出。 |
| std::bad_cast | 该异常可以通过 dynamic_cast 抛出。 |
| std::bad_exception | 这在处理 C++ 程序中无法预期的异常时非常有用。 |
| std::bad_typeid | 该异常可以通过 typeid 抛出。 |
| std::logic_error | 理论上可以通过读取代码来检测到的异常。 |
| std::domain_error | 当使用了一个无效的数学域时，会抛出该异常。 |
| std::invalid_argument | 当使用了无效的参数时，会抛出该异常。 |
| std::length_error | 当创建了太长的 std::string 时，会抛出该异常。 |
| std::out_of_range | 该异常可以通过方法抛出，例如 std::vector 和 std::bitset<>::operator。 |
| std::runtime_error | 理论上不可以通过读取代码来检测到的异常。 |
| std::overflow_error | 当发生数学上溢时，会抛出该异常。 |
| std::range_error | 当尝试存储超出范围的值时，会抛出该异常。 |
| std::underflow_error | 当发生数学下溢时，会抛出该异常。 |



**自定义异常**
```cpp
#include <iostream>
#include <exception>
using namespace std;
 
struct MyException : public exception
{
  const char * what () const throw ()
  {
    return "C++ Exception";
  }
};
 
int main()
{
  try
  {
    throw MyException();
  }
  catch(MyException& e)
  {
    std::cout << "MyException caught" << std::endl;
    std::cout << e.what() << std::endl;
  }
  catch(std::exception& e)
  {
    //其他的错误
  }
}
```

---


MFC(Microsoft Foundation Classes)：微软公司提供的一个类库（class libraries），以C++类的形式封装了Windows的API，并且包含一个应用程序框架，以减少应用程序开发人员的工作量。其中包含的类包含大量Windows句柄封装类和很多Windows的内建控件和组件的封装类。

**STL**(Standard Template Library)分为容器(containers)、迭代器(iterators)、空间配置器(allocator)、配接器(adapters)、算法(algorithms)、仿函数(functors)六部分。

**序列式容器**

- 向量(vector) 连续存储的元素
- 列表(list) 由节点组成的双向链表，每个结点包含着一个元素
- 双端队列(deque) 连续存储的指向不同元素的指针所组成的数组



**适配器容器**

- 栈(stack) 后进先出(LIFO)的值的排列 
- 队列(queue) 先进先出(FIFO)的值的排列 
- 优先队列(priority_queue) 元素的次序是由作用于所存储的值对上的某种谓词决定的的一种队列 



**关联式容器**

- 集合(set) 由节点组成的红黑树，每个节点都包含着一个元素，节点之间以某种作用于元素队的谓词排列，不同的元素拥有不同的次序 
- 多重集合(multiset) 允许存在两个次序相等的元素的集合 
- 映射(map) 由{键，值}对组成的集合，以某种作用于键对上的谓词排列 
- 多重映射(multimap) 允许键对有相等的次序的映射 



**对**(pair) 和map类似，但只有一对键值   <br />  **智能指针**(auto_ptr) 将一个用new开辟内存的指针赋给auto_ptr，会自动回收空间   <br />  **空间配置器(allocator)**：对operator new & delete 包装实现内存分配。

**动态多维数组**
```cpp
vector<vector<int>>v (n, vector<int>(m));
int **p = new int*[n];  
for (int i = 0; i < n; ++i)
    p[i] = new int[m];
```


**自定义排序容器**
```cpp
//自定义排序
struct si
{
    char s[9];
    int r;
    friend bool operator < (si a, si b)  //友函数
    {
        return  a.r > b.r;
    }
};
priority_queue<si>v;
/***  自定义仿函数  ***/
struct cmp
{
	bool operator()(int a, int b)  //重载 () 运算符
	{
		return a > b;
	}
};
priority_queue<int,vector<int>,cmp>p;
//自定义排序Set
struct T
{                                               
    int id,value;
    bool operator<(const T &t) const    //重载小于运算符
    { 
        return this->value != t.value ? this->value > t.value : this->id < t.id;
    }
};
set<T> s;
```


**仿函数(functor)：**模仿函数的类，使用方式如同函数。本质是类中重载括弧运算符operator()

无序容器自定义哈希函数和比较规则
```cpp
#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;
class Person {
public:
    Person(string name, int age) :name(name), age(age) {};
    string getName() const;
    int getAge() const;
private:
    string name;
    int age;
};
string Person::getName() const {
    return this->name;
}
int Person::getAge() const {
    return this->age;
}
//自定义哈希函数
class hash_fun {
public:
    int operator()(const Person &A) const {
        return A.getAge();
    }
};
//重载 == 运算符，myset 可以继续使用默认的 equal_to<key> 规则
bool operator==(const Person &A, const Person &B) {
    return (A.getAge() == B.getAge());
}
//完全自定义比较规则，弃用 equal_to<key>
class mycmp {
public:
    bool operator()(const Person &A, const Person &B) const {
        return (A.getName() == B.getName()) && (A.getAge() == B.getAge());
    }
};
int main()
{
    //使用自定义的 hash_fun 哈希函数，比较规则仍选择默认的 equal_to<key>,前提是必须重载 == 运算符
    std::unordered_set<Person, hash_fun> myset1{ {"zhangsan", 40},{"zhangsan", 40},{"lisi", 40},{"lisi", 30} };
    //使用自定义的 hash_fun 哈希函数，以及自定义的 mycmp 比较规则
    std::unordered_set<Person, hash_fun, mycmp> myset2{ {"zhangsan", 40},{"zhangsan", 40},{"lisi", 40},{"lisi", 30} };
   
    cout << "myset1:" << endl;
    for (auto iter = myset1.begin(); iter != myset1.end(); ++iter) {
        cout << iter->getName() << " " << iter->getAge() << endl;
    }
    cout << "myset2:" << endl;
    for (auto iter = myset2.begin(); iter != myset2.end(); ++iter) {
        cout << iter->getName() << " " << iter->getAge() << endl;
    }
    return 0;
}
```

排序速度：sort（functor）> qsort > sort（function）

循环定义：`#define _for(i, a, b) for(int i = (a); i < (b);++i)`

**容器内容输出**
```cpp
template<typename T>
ostream& operator<<(ostream& os, const vector<T>& v)
{
    for(auto& x:v)
        os << x << " ";
    return os;
}
int main()
{
    vector<int> a{1, 3, 5, 7, 9};
    cout << a;
}
```

# —— [Standard Library](https://zh.cppreference.com/w/cpp/header) ——

# IOStream
| [std::cin](https://zh.cppreference.com/w/cpp/io/cin) | 标准输入 | [std::wcin](https://zh.cppreference.com/w/cpp/io/cin) | 标准输入 |
| --- | --- | --- | --- |
| [std::cout](https://zh.cppreference.com/w/cpp/io/cout) | 标准输出 | [std::wcout](https://zh.cppreference.com/w/cpp/io/cout) | 标准输出 |
| [std::cerr](https://zh.cppreference.com/w/cpp/io/cerr) | 标准错误 | [std::wcerr](https://zh.cppreference.com/w/cpp/io/cerr) | 标准错误 |
| [std::clog](https://zh.cppreference.com/w/cpp/io/clog) | 标准日志 | [std::wclog](https://zh.cppreference.com/w/cpp/io/clog) | 标准日志 |

[ios_base](https://zh.cppreference.com/w/cpp/io/ios_base)

| 格式化 |  |
| --- | --- |
| [flags](https://zh.cppreference.com/w/cpp/io/ios_base/flags) | 管理格式标志 (公开成员函数) |
| [setf](https://zh.cppreference.com/w/cpp/io/ios_base/setf) | 设置特定格式标志 (公开成员函数) |
| [unsetf](https://zh.cppreference.com/w/cpp/io/ios_base/unsetf) | 清除特定格式的标志 (公开成员函数) |
| [precision](https://zh.cppreference.com/w/cpp/io/ios_base/precision) | 管理浮点操作的精度 (公开成员函数) |
| [width](https://zh.cppreference.com/w/cpp/io/ios_base/width) | 管理域的宽度 (公开成员函数) |
| 本地环境 |  |
| [imbue](https://zh.cppreference.com/w/cpp/io/ios_base/imbue) | 设置本地环境 (公开成员函数) |
| [getloc](https://zh.cppreference.com/w/cpp/io/ios_base/getloc) | 返回当前本地环境 (公开成员函数) |
| 内部可扩展数组 |  |
| [xalloc ](https://zh.cppreference.com/w/cpp/io/ios_base/xalloc)  <br />  [静态] | 返回能安全用作 pword() 和 iword() 下标的程序范围内独有的整数 (公开静态成员函数) |
| [iword](https://zh.cppreference.com/w/cpp/io/ios_base/iword) | 如果有必要的话，调整私有存储的大小，并且访问位于提供的下标的long元素 |
| [pword](https://zh.cppreference.com/w/cpp/io/ios_base/pword) | 若需要则重置私有存储的大小，并访问位于指定下标的 void* 元素 |
| 杂项 |  |
| [register_callback](https://zh.cppreference.com/w/cpp/io/ios_base/register_callback) | 注册事件回调函数 (公开成员函数) |
| [sync_with_stdio ](https://zh.cppreference.com/w/cpp/io/ios_base/sync_with_stdio)  <br />  [静态] | 设置C++和C的IO库是否可以互操作 |

**openmode 流打开模式类型**

| 常量 | 解释 |
| --- | --- |
| [app](https://zh.cppreference.com/w/cpp/io/ios_base/openmode) | 每次写入前寻位到流结尾 |
| [binary](https://zh.cppreference.com/w/cpp/io/ios_base/openmode) | 以[二进制模式打](https://zh.cppreference.com/w/cpp/io/c#.E4.BA.8C.E8.BF.9B.E5.88.B6.E4.B8.8E.E6.96.87.E6.9C.AC.E6.A8.A1.E5.BC.8F)  <br />  开 |
| [in](https://zh.cppreference.com/w/cpp/io/ios_base/openmode) | 为读打开 |
| [out](https://zh.cppreference.com/w/cpp/io/ios_base/openmode) | 为写打开 |
| [trunc](https://zh.cppreference.com/w/cpp/io/ios_base/openmode) | 在打开时舍弃流的内容 |
| [ate](https://zh.cppreference.com/w/cpp/io/ios_base/openmode) | 打开后立即寻位到流结尾 |

[**fmtflags**](https://zh.cppreference.com/w/cpp/io/ios_base/fmtflags)** 格式化标志类型**  <br />  **···**  <br />  [**iostate**](https://zh.cppreference.com/w/cpp/io/ios_base/iostate)** 流状态类型**

| 常量 | 解释 |
| --- | --- |
| [goodbit](https://zh.cppreference.com/w/cpp/io/ios_base/iostate) | 无错误 |
| [badbit](https://zh.cppreference.com/w/cpp/io/ios_base/iostate) | 不可恢复的流错误 |
| [failbit](https://zh.cppreference.com/w/cpp/io/ios_base/iostate) | 输入/输出操作失败（格式化或提取错误） |
| [eofbit](https://zh.cppreference.com/w/cpp/io/ios_base/iostate) | 关联的输出序列已抵达文件尾 |

[**seekdir**](https://zh.cppreference.com/w/cpp/io/ios_base/seekdir)** 寻位方向类型**

| 常量 | 解释 |
| --- | --- |
| [beg](https://zh.cppreference.com/w/cpp/io/ios_base/seekdir) | 流的开始 |
| [end](https://zh.cppreference.com/w/cpp/io/ios_base/seekdir) | 流的结尾 |
| [cur](https://zh.cppreference.com/w/cpp/io/ios_base/seekdir) | 流位置指示器的当前位置 |

[basic_ios](https://zh.cppreference.com/w/cpp/io/basic_ios)

| 状态函数 |  |
| --- | --- |
| [good](https://zh.cppreference.com/w/cpp/io/basic_ios/good) | 检查是否没有发生错误，例如是否可执行I/O操作 (公开成员函数) |
| [eof](https://zh.cppreference.com/w/cpp/io/basic_ios/eof) | 检查是否到达了文件末尾 (公开成员函数) |
| [fail](https://zh.cppreference.com/w/cpp/io/basic_ios/fail) | 检查是否发生了可恢复的错误 (公开成员函数) |
| [bad](https://zh.cppreference.com/w/cpp/io/basic_ios/bad) | 检查是否已发生不可恢复的错误 (公开成员函数) |
| [operator!](https://zh.cppreference.com/w/cpp/io/basic_ios/operator!) | 检查是否有错误发生（[fail() ](https://zh.cppreference.com/w/cpp/io/basic_ios/fail)  <br />  的同义词） (公开成员函数) |
| [operator bool](https://zh.cppreference.com/w/cpp/io/basic_ios/operator_bool) | 检查是否没有发生错误 (公开成员函数) |
| [rdstate](https://zh.cppreference.com/w/cpp/io/basic_ios/rdstate) | 返回状态标志 (公开成员函数) |
| [setstate](https://zh.cppreference.com/w/cpp/io/basic_ios/setstate) | 设置状态标志 (公开成员函数) |
| [clear](https://zh.cppreference.com/w/cpp/io/basic_ios/clear) | 修改状态标志 (公开成员函数) |
| 格式化 |  |
| [copyfmt](https://zh.cppreference.com/w/cpp/io/basic_ios/copyfmt) | 复制格式化信息 (公开成员函数) |
| [fill](https://zh.cppreference.com/w/cpp/io/basic_ios/fill) | 管理填充字符 (公开成员函数) |
| 杂项 |  |
| [exceptions](https://zh.cppreference.com/w/cpp/io/basic_ios/exceptions) | 管理异常掩码 (公开成员函数) |
| [imbue](https://zh.cppreference.com/w/cpp/io/basic_ios/imbue) | 设置本地环境 (公开成员函数) |
| [rdbuf](https://zh.cppreference.com/w/cpp/io/basic_ios/rdbuf) | 管理相关的流缓冲区 (公开成员函数) |
| [tie](https://zh.cppreference.com/w/cpp/io/basic_ios/tie) | 管理绑定的流 (公开成员函数) |
| [narrow](https://zh.cppreference.com/w/cpp/io/basic_ios/narrow) | 窄化字符 (公开成员函数) |
| [widen](https://zh.cppreference.com/w/cpp/io/basic_ios/widen) | 拓宽字符 (公开成员函数) |

**受保护成员函数**

| [init](https://zh.cppreference.com/w/cpp/io/basic_ios/init) | 初始化一个默认构造的std::basic_ios (受保护成员函数) |
| --- | --- |
| [move ](https://zh.cppreference.com/w/cpp/io/basic_ios/move)  <br />  (C++11) | 从另一 std::basic_ios 移动，除了 rdbuf (受保护成员函数) |
| [swap ](https://zh.cppreference.com/w/cpp/io/basic_ios/swap)  <br />  (C++11) | 与另一 std::basic_ios 交换，除了 rdbuf (受保护成员函数) |
| [set_rdbuf](https://zh.cppreference.com/w/cpp/io/basic_ios/set_rdbuf) | 替换 rdbuf 而不清除其错误状态 |

[basic_istream](https://zh.cppreference.com/w/cpp/io/basic_istream)

| 无格式输入 |  |
| --- | --- |
| [get](https://zh.cppreference.com/w/cpp/io/basic_istream/get) | 从流中读并取走（移除类似指针向下一个元素移动）一个字符 (公开成员函数) |
| [peek](https://zh.cppreference.com/w/cpp/io/basic_istream/peek) | 仅读出但不取走（不移除类似指针并未移动）一个字符 (公开成员函数) |
| [unget](https://zh.cppreference.com/w/cpp/io/basic_istream/unget) | 撤销流中刚取走（移除，类似指针向后退回一个位置）的字符 (公开成员函数) |
| [putback](https://zh.cppreference.com/w/cpp/io/basic_istream/putback) | 往输入流中退回一个字符 (公开成员函数) |
| [getline](https://zh.cppreference.com/w/cpp/io/basic_istream/getline) | 一直读并取走字符，直至找到给定字符 (公开成员函数) |
| [ignore](https://zh.cppreference.com/w/cpp/io/basic_istream/ignore) | 读且取走并舍弃字符，直至发现给定字符 (公开成员函数) |
| [read](https://zh.cppreference.com/w/cpp/io/basic_istream/read) | 读并取走一块字符 (公开成员函数) |
| [readsome](https://zh.cppreference.com/w/cpp/io/basic_istream/readsome) | 读并取走已经可用的字符块 (公开成员函数) |
| [gcount](https://zh.cppreference.com/w/cpp/io/basic_istream/gcount) | 返回上次无格式输出操作所取走的字符数量 (公开成员函数) |
| 寻位 |  |
| [tellg](https://zh.cppreference.com/w/cpp/io/basic_istream/tellg) | 返回输入位置指示器 (公开成员函数) |
| [seekg](https://zh.cppreference.com/w/cpp/io/basic_istream/seekg) | 设置输入位置指示器 |

[basic_ostream](https://zh.cppreference.com/w/cpp/io/basic_ostream)

| 无格式输出 |  |
| --- | --- |
| [put](https://zh.cppreference.com/w/cpp/io/basic_ostream/put) | 插入字符 (公开成员函数) |
| [write](https://zh.cppreference.com/w/cpp/io/basic_ostream/write) | 插入字符块 (公开成员函数) |
| 寻位 |  |
| [tellp](https://zh.cppreference.com/w/cpp/io/basic_ostream/tellp) | 返回输出位置指示器 (公开成员函数) |
| [seekp](https://zh.cppreference.com/w/cpp/io/basic_ostream/seekp) | 设置输出位置指示器 |


## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/iomanip)
| 流操纵算子 | 作  用 |
| --- | --- |
| *dec | 以十进制形式输出整数 |
| hex | 以十六进制形式输出整数 |
| oct | 以八进制形式输出整数 |
| fixed | 以普通小数形式输出浮点数 |
| scientific | 以科学计数法形式输出浮点数 |
| left | 左对齐，即在宽度不足时将填充字符添加到右边 |
| *right | 右对齐，即在宽度不足时将填充字符添加到左边 |
| setbase(b) | 设置输出整数时的进制，b=8、10 或 16 |
| setw(w) | 指定输出宽度为 w 个字符，或输人字符串时读入 w 个字符 |
| setfill(c) | 在指定输出宽度的情况下，输出的宽度不足时用字符 c 填充（默认用空格填充） |
| setprecision(n) | 设置输出浮点数的精度为 n |
| setiosflags(flag) | 将某个输出格式标志置为 1 |
| resetiosflags(flag) | 将某个输出格式标志置为 0 |
| boolapha | 把 true 和 false 输出为字符串 |
| *noboolalpha | 把 true 和 false 输出为 0、1 |
| showbase | 输出表示数值的进制的前缀 |
| *noshowbase | 不输出表示数值的进制.的前缀 |
| showpoint | 总是输出小数点 |
| *noshowpoint | 只有当小数部分存在时才显示小数点 |
| showpos | 在非负数值中显示 + |
| *noshowpos | 在非负数值中不显示 + |
| *skipws | 输入时跳过空白字符 |
| noskipws | 输入时不跳过空白字符 |
| uppercase | 十六进制数中使用 A~E。若输出前缀，则前缀输出 0X，科学计数法中输出 E |
| *nouppercase | 十六进制数中使用 a~e。若输出前缀，则前缀输出 0x，科学计数法中输出 e。 |
| internal | 数值的符号（正负号）在指定宽度内左对齐，数值右对 齐，中间由填充字符填充。 |

| 标 志 | 作 用 |
| --- | --- |
| ios::left | 输出数据在本域宽范围内向左对齐 |
| ios::right | 输出数据在本域宽范围内向右对齐 |
| ios::internal | 数值的符号位在域宽内左对齐，数值右对齐，中间由填充字符填充 |
| ios::dec | 设置整数的基数为 10 |
| ios::oct | 设置整数的基数为 8 |
| ios::hex | 设置整数的基数为 16 |
| ios::showbase | 强制输出整数的基数（八进制数以 0 开头，十六进制数以 0x 打头） |
| ios::showpoint | 强制输出浮点数的小点和尾数 0 |
| ios::uppercase | 在以科学记数法格式 E 和以十六进制输出字母时以大写表示 |
| ios::showpos | 对正数显示“+”号 |
| ios::scientific | 浮点数以科学记数法格式输出 |
| ios::fixed | 浮点数以定点格式（小数形式）输出 |
| ios::unitbuf | 每次输出之后刷新所有的流 |
| ios::stdio | 每次输出之后清除 stdout, stderr |


## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/fstream)
| 文件操作 |  |
| --- | --- |
| [is_open](https://zh.cppreference.com/w/cpp/io/basic_fstream/is_open) | 检查流是否有关联文件 (公开成员函数) |
| [open](https://zh.cppreference.com/w/cpp/io/basic_fstream/open) | 打开文件，并将它与流关联 (公开成员函数) |
| [close](https://zh.cppreference.com/w/cpp/io/basic_fstream/close) | 关闭关联文件 |

**void open(const char _filename, ios::openmode mode);_

## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/sstream)
| [basic_stringbuf](https://zh.cppreference.com/w/cpp/io/basic_stringbuf) | 实现原生字元串设备 (类模板) |
| --- | --- |
| [basic_istringstream](https://zh.cppreference.com/w/cpp/io/basic_istringstream) | 实现高层字元串流输入操作 (类模板) |
| [basic_ostringstream](https://zh.cppreference.com/w/cpp/io/basic_ostringstream) | 实现高层字元串流输出操作 (类模板) |
| [basic_stringstream](https://zh.cppreference.com/w/cpp/io/basic_stringstream) | 实现高层字元串流输入/输出操作 |

```cpp
string str = "hello world I am very happy!";
stringstream ss(str);
while (ss)
{
	string substr;
	ss >> substr;
	cout << substr << endl;
}
```

## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/string)
| [getline](https://zh.cppreference.com/w/cpp/string/basic_string/getline) | 从I/O流读取数据到字元串 (函数模板) |
| --- | --- |
| 数值转换 |  |
| [stoi ](https://zh.cppreference.com/w/cpp/string/basic_string/stol)  <br />   stol  stoll | 转换字元串为有符号整数 (函数) |
| [stoul ](https://zh.cppreference.com/w/cpp/string/basic_string/stoul)  <br />   stoull | 转换字元串为无符号整数 (函数) |
| [stof ](https://zh.cppreference.com/w/cpp/string/basic_string/stof)  <br />   stod  stold | 转换字元串为浮点值 (函数) |
| [to_string](https://zh.cppreference.com/w/cpp/string/basic_string/to_string) | 转换整数或浮点值为string (函数) |
| [to_wstring](https://zh.cppreference.com/w/cpp/string/basic_string/to_wstring) | 转换整数或浮点值为wstring (函数) |


# 容器库

## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/vector)
**动态数组的顺序容器：**快速查找，尾端快速插入与删除  <br />  **template <class T，class Allocator = std:: allocator < T >> class vector ;**  <br />  **成员函数**

| [(构造函数)](https://zh.cppreference.com/w/cpp/container/vector/vector) | 构造vector (公开成员函数) |
| --- | --- |
| [(析构函数)](https://zh.cppreference.com/w/cpp/container/vector/~vector) | 析构vector (公开成员函数) |
| [operator=](https://zh.cppreference.com/w/cpp/container/vector/operator%3D) | 赋值给容器 (公开成员函数) |
| [assign](https://zh.cppreference.com/w/cpp/container/vector/assign) | 将值赋给容器 (公开成员函数) |
| [get_allocator](https://zh.cppreference.com/w/cpp/container/vector/get_allocator) | 返回相关的分配器 (公开成员函数) |
| 元素访问 |  |
| [at](https://zh.cppreference.com/w/cpp/container/vector/at) | 访问指定的元素，同时进行越界检查 (公开成员函数) |
| [operator[]](https://zh.cppreference.com/w/cpp/container/vector/operator_at) | 访问指定的元素 (公开成员函数) |
| [front](https://zh.cppreference.com/w/cpp/container/vector/front) | 访问第一个元素 (公开成员函数) |
| [back](https://zh.cppreference.com/w/cpp/container/vector/back) | 访问最后一个元素 (公开成员函数) |
| [data](https://zh.cppreference.com/w/cpp/container/vector/data) | 返回指向内存中数组第一个元素的指针 (公开成员函数) |
| 迭代器 |  |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/vector/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/vector/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| [rbegincrbegin](https://zh.cppreference.com/w/cpp/container/vector/rbegin) | 返回指向容器最后元素的逆向迭代器 (公开成员函数) |
| [rendcrend](https://zh.cppreference.com/w/cpp/container/vector/rend) | 返回指向前端的逆向迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/vector/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/vector/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/vector/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| [reserve](https://zh.cppreference.com/w/cpp/container/vector/reserve) | 预留存储空间 (公开成员函数) |
| [capacity](https://zh.cppreference.com/w/cpp/container/vector/capacity) | 返回当前存储空间能够容纳的元素数 (公开成员函数) |
| [shrink_to_fit ](https://zh.cppreference.com/w/cpp/container/vector/shrink_to_fit)  <br />  (C++11) | 通过释放未使用的内存减少内存的使用 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/vector/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/vector/insert) | 插入元素 (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/vector/emplace)  <br />  (C++11) | 原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/vector/erase) | 擦除元素 (公开成员函数) |
| [push_back](https://zh.cppreference.com/w/cpp/container/vector/push_back) | 将元素添加到容器末尾 (公开成员函数) |
| [emplace_back ](https://zh.cppreference.com/w/cpp/container/vector/emplace_back)  <br />  (C++11) | 在容器末尾就地构造元素 (公开成员函数) |
| [pop_back](https://zh.cppreference.com/w/cpp/container/vector/pop_back) | 移除末元素 (公开成员函数) |
| [resize](https://zh.cppreference.com/w/cpp/container/vector/resize) | 改变容器中可存储元素的个数 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/vector/swap) | 交换内容 |


## [array](https://zh.cppreference.com/w/cpp/header/array)
静态的连续数组  <br />  template < class T,[std:: size_t](http://zh.cppreference.com/w/cpp/types/size_t) N> struct array ;

| 元素访问 |  |
| --- | --- |
| [at](https://zh.cppreference.com/w/cpp/container/array/at) | 访问指定的元素，同时进行越界检查 (公开成员函数) |
| [operator[]](https://zh.cppreference.com/w/cpp/container/array/operator_at) | 访问指定的元素 (公开成员函数) |
| [front](https://zh.cppreference.com/w/cpp/container/array/front) | 访问第一个元素 (公开成员函数) |
| [back](https://zh.cppreference.com/w/cpp/container/array/back) | 访问最后一个元素 (公开成员函数) |
| [data](https://zh.cppreference.com/w/cpp/container/array/data) | 返回指向内存中数组第一个元素的指针 (公开成员函数) |
| 迭代器 |  |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/array/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/array/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| [rbegincrbegin](https://zh.cppreference.com/w/cpp/container/array/rbegin) | 返回指向容器最后元素的逆向迭代器 (公开成员函数) |
| [rendcrend](https://zh.cppreference.com/w/cpp/container/array/rend) | 返回指向前端的逆向迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/array/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/array/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/array/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 操作 |  |
| [fill](https://zh.cppreference.com/w/cpp/container/array/fill) | 以指定值填充容器 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/array/swap) | 交换内容 |


## [<deque>](https://zh.cppreference.com/w/cpp/header/deque)
**double-ended queue ，双端队列**，头尾快速插入与删除  <br />  template <class T, class Allocator = [std:: allocator](http://zh.cppreference.com/w/cpp/memory/allocator) < T >> class deque ;  <br />  **成员函数**

| [(构造函数)](https://zh.cppreference.com/w/cpp/container/deque/deque) | 构造deque (公开成员函数) |
| --- | --- |
| [(析构函数)](https://zh.cppreference.com/w/cpp/container/deque/~deque) | 析构deque (公开成员函数) |
| [operator=](https://zh.cppreference.com/w/cpp/container/deque/operator%3D) | 赋值给容器 (公开成员函数) |
| [assign](https://zh.cppreference.com/w/cpp/container/deque/assign) | 将值赋给容器 (公开成员函数) |
| [get_allocator](https://zh.cppreference.com/w/cpp/container/deque/get_allocator) | 返回相关的分配器 (公开成员函数) |
| 元素访问 |  |
| [at](https://zh.cppreference.com/w/cpp/container/deque/at) | 访问指定的元素，同时进行越界检查 (公开成员函数) |
| [operator[]](https://zh.cppreference.com/w/cpp/container/deque/operator_at) | 访问指定的元素 (公开成员函数) |
| [front](https://zh.cppreference.com/w/cpp/container/deque/front) | 访问第一个元素 (公开成员函数) |
| [back](https://zh.cppreference.com/w/cpp/container/deque/back) | 访问最后一个元素 (公开成员函数) |
| 迭代器 |  |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/deque/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/deque/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| [rbegincrbegin](https://zh.cppreference.com/w/cpp/container/deque/rbegin) | 返回指向容器最后元素的逆向迭代器 (公开成员函数) |
| [rendcrend](https://zh.cppreference.com/w/cpp/container/deque/rend) | 返回指向前端的逆向迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/deque/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/deque/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/deque/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| [shrink_to_fit ](https://zh.cppreference.com/w/cpp/container/deque/shrink_to_fit)  <br />  (C++11) | 通过释放未使用的内存减少内存的使用 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/deque/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/deque/insert) | 插入元素 (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/deque/emplace)  <br />  (C++11) | 原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/deque/erase) | 擦除元素 (公开成员函数) |
| [push_back](https://zh.cppreference.com/w/cpp/container/deque/push_back) | 将元素添加到容器末尾 (公开成员函数) |
| [emplace_back ](https://zh.cppreference.com/w/cpp/container/deque/emplace_back)  <br />  (C++11) | 在容器末尾就地构造元素 (公开成员函数) |
| [pop_back](https://zh.cppreference.com/w/cpp/container/deque/pop_back) | 移除末元素 (公开成员函数) |
| [push_front](https://zh.cppreference.com/w/cpp/container/deque/push_front) | 插入元素到容器起始 (公开成员函数) |
| [emplace_front ](https://zh.cppreference.com/w/cpp/container/deque/emplace_front)  <br />  (C++11) | 在容器头部就地构造元素 (公开成员函数) |
| [pop_front](https://zh.cppreference.com/w/cpp/container/deque/pop_front) | 移除首元素 (公开成员函数) |
| [resize](https://zh.cppreference.com/w/cpp/container/deque/resize) | 改变容器中可存储元素的个数 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/deque/swap) | 交换内容 |


## [<list>](https://zh.cppreference.com/w/cpp/header/list)
**双向链表**，快速插入与删除，不支持快速随机访问。  <br />  template <class T,  class Allocator = [std:: allocator](http://zh.cppreference.com/w/cpp/memory/allocator) < T >> class list ;  <br />  **成员函数**

| [(构造函数)](https://zh.cppreference.com/w/cpp/container/list/list) | 构造list (公开成员函数) |
| --- | --- |
| [(析构函数)](https://zh.cppreference.com/w/cpp/container/list/~list) | 析构list (公开成员函数) |
| [operator=](https://zh.cppreference.com/w/cpp/container/list/operator%3D) | 赋值给容器 (公开成员函数) |
| [assign](https://zh.cppreference.com/w/cpp/container/list/assign) | 将值赋给容器 (公开成员函数) |
| [get_allocator](https://zh.cppreference.com/w/cpp/container/list/get_allocator) | 返回相关的分配器 (公开成员函数) |
| 元素访问 |  |
| [front](https://zh.cppreference.com/w/cpp/container/list/front) | 访问第一个元素 (公开成员函数) |
| [back](https://zh.cppreference.com/w/cpp/container/list/back) | 访问最后一个元素 (公开成员函数) |
| 迭代器 |  |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/list/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/list/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| [rbegincrbegin](https://zh.cppreference.com/w/cpp/container/list/rbegin) | 返回指向容器最后元素的逆向迭代器 (公开成员函数) |
| [rendcrend](https://zh.cppreference.com/w/cpp/container/list/rend) | 返回指向前端的逆向迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/list/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/list/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/list/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/list/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/list/insert) | 插入元素 (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/list/emplace)  <br />  (C++11) | 原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/list/erase) | 擦除元素 (公开成员函数) |
| [push_back](https://zh.cppreference.com/w/cpp/container/list/push_back) | 将元素添加到容器末尾 (公开成员函数) |
| [emplace_back ](https://zh.cppreference.com/w/cpp/container/list/emplace_back)  <br />  (C++11) | 在容器末尾就地构造元素 (公开成员函数) |
| [pop_back](https://zh.cppreference.com/w/cpp/container/list/pop_back) | 移除末元素 (公开成员函数) |
| [push_front](https://zh.cppreference.com/w/cpp/container/list/push_front) | 插入元素到容器起始 (公开成员函数) |
| [emplace_front ](https://zh.cppreference.com/w/cpp/container/list/emplace_front)  <br />  (C++11) | 在容器头部就地构造元素 (公开成员函数) |
| [pop_front](https://zh.cppreference.com/w/cpp/container/list/pop_front) | 移除首元素 (公开成员函数) |
| [resize](https://zh.cppreference.com/w/cpp/container/list/resize) | 改变容器中可存储元素的个数 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/list/swap) | 交换内容 (公开成员函数) |
| 操作 |  |
| [merge](https://zh.cppreference.com/w/cpp/container/list/merge) | 合并二个已排序列表 (公开成员函数) |
| [splice](https://zh.cppreference.com/w/cpp/container/list/splice) | 从另一个list中移动元素 (公开成员函数) |
| [removeremove_if](https://zh.cppreference.com/w/cpp/container/list/remove) | 移除满足特定标准的元素 (公开成员函数) |
| [reverse](https://zh.cppreference.com/w/cpp/container/list/reverse) | 将该链表的所有元素的顺序反转 (公开成员函数) |
| [unique](https://zh.cppreference.com/w/cpp/container/list/unique) | 删除连续的重复元素 (公开成员函数) |
| [sort](https://zh.cppreference.com/w/cpp/container/list/sort) | 对元素进行排序 |


## [<forward_list>](https://zh.cppreference.com/w/cpp/header/forward_list)
**正向单链表**，快速插入与删除，不支持快速随机访问。  <br />  template <class T, class Allocator = [std:: allocator](http://zh.cppreference.com/w/cpp/memory/allocator) < T >> class forward_list ;  <br />  **成员函数**

| [(构造函数)](https://zh.cppreference.com/w/cpp/container/forward_list/forward_list) | 构造forward_list (公开成员函数) |
| --- | --- |
| [(析构函数)](https://zh.cppreference.com/w/cpp/container/forward_list/~forward_list) | 析构forward_list (公开成员函数) |
| [operator=](https://zh.cppreference.com/w/cpp/container/forward_list/operator%3D) | 赋值给容器 (公开成员函数) |
| [assign](https://zh.cppreference.com/w/cpp/container/forward_list/assign) | 将值赋给容器 (公开成员函数) |
| [get_allocator](https://zh.cppreference.com/w/cpp/container/forward_list/get_allocator) | 返回相关的分配器 (公开成员函数) |
| 元素访问 |  |
| [front](https://zh.cppreference.com/w/cpp/container/forward_list/front) | 访问第一个元素 (公开成员函数) |
| 迭代器 |  |
| [before_begin ](https://zh.cppreference.com/w/cpp/container/forward_list/before_begin)  <br />  cbefore_begin | 返回指向第一个元素之前迭代器 (公开成员函数) |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/forward_list/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/forward_list/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/forward_list/empty) | 检查容器是否为空 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/forward_list/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/forward_list/clear) | 清除内容 (公开成员函数) |
| [insert_after](https://zh.cppreference.com/w/cpp/container/forward_list/insert_after) | 在某个元素后插入新元素 (公开成员函数) |
| [emplace_after](https://zh.cppreference.com/w/cpp/container/forward_list/emplace_after) | 在元素后原位构造元素 (公开成员函数) |
| [erase_after](https://zh.cppreference.com/w/cpp/container/forward_list/erase_after) | 擦除元素后的元素 (公开成员函数) |
| [push_front](https://zh.cppreference.com/w/cpp/container/forward_list/push_front) | 插入元素到容器起始 (公开成员函数) |
| [emplace_front](https://zh.cppreference.com/w/cpp/container/forward_list/emplace_front) | 在容器头部就地构造元素 (公开成员函数) |
| [pop_front](https://zh.cppreference.com/w/cpp/container/forward_list/pop_front) | 移除首元素 (公开成员函数) |
| [resize](https://zh.cppreference.com/w/cpp/container/forward_list/resize) | 改变容器中可存储元素的个数 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/forward_list/swap) | 交换内容 (公开成员函数) |
| 操作 |  |
| [merge](https://zh.cppreference.com/w/cpp/container/forward_list/merge) | 合并二个已排序列表 (公开成员函数) |
| [splice_after](https://zh.cppreference.com/w/cpp/container/forward_list/splice_after) | 从另一forward_list移动元素 (公开成员函数) |
| [remove ](https://zh.cppreference.com/w/cpp/container/forward_list/remove)  <br />  remove_if | 移除满足特定标准的元素 (公开成员函数) |
| [reverse](https://zh.cppreference.com/w/cpp/container/forward_list/reverse) | 将该链表的所有元素的顺序反转 (公开成员函数) |
| [unique](https://zh.cppreference.com/w/cpp/container/forward_list/unique) | 删除连续的重复元素 (公开成员函数) |
| [sort](https://zh.cppreference.com/w/cpp/container/forward_list/sort) | 对元素进行排序 |


## [<stack>](https://zh.cppreference.com/w/cpp/header/stack)
**LIFO**  <br />  **template <class T,  class Container = std:: deque < T >> class stack ;**

| 元素访问 |  |
| --- | --- |
| [top](https://zh.cppreference.com/w/cpp/container/stack/top) | 访问栈顶元素 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/stack/empty) | 检查底层的容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/stack/size) | 返回容纳的元素数 (公开成员函数) |
| 修改器 |  |
| [push](https://zh.cppreference.com/w/cpp/container/stack/push) | 向栈顶插入元素 (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/stack/emplace)  <br />  (C++11) | 于顶原位构造元素 (公开成员函数) |
| [pop](https://zh.cppreference.com/w/cpp/container/stack/pop) | 删除栈顶元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/stack/swap) | 交换内容 |


## [<queue>](https://zh.cppreference.com/w/cpp/header/queue)
**FIFO**  <br />  **template <class T, class Container = **[**std:: deque**](http://zh.cppreference.com/w/cpp/container/deque)** < T >> class queue ;**

| 元素访问 |  |
| --- | --- |
| [front](https://zh.cppreference.com/w/cpp/container/queue/front) | 访问第一个元素 (公开成员函数) |
| [back](https://zh.cppreference.com/w/cpp/container/queue/back) | 访问最后一个元素 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/queue/empty) | 检查底层的容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/queue/size) | 返回容纳的元素数 (公开成员函数) |
| 修改器 |  |
| [push](https://zh.cppreference.com/w/cpp/container/queue/push) | 向队列尾部插入元素 (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/queue/emplace)  <br />  (C++11) | 于尾部原位构造元素 (公开成员函数) |
| [pop](https://zh.cppreference.com/w/cpp/container/queue/pop) | 删除栈顶元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/queue/swap) | 交换内容 |


## [priority_queue](https://zh.cppreference.com/w/cpp/container/priority_queue)
template<class T, class Container = [std::vector](http://zh.cppreference.com/w/cpp/container/vector), class Compare = std::less> class priority_queue;

| 元素访问 |  |
| --- | --- |
| [top](https://zh.cppreference.com/w/cpp/container/priority_queue/top) | 访问栈顶元素 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/priority_queue/empty) | 检查底层的容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/priority_queue/size) | 返回容纳的元素数 (公开成员函数) |
| 修改器 |  |
| [push](https://zh.cppreference.com/w/cpp/container/priority_queue/push) | 插入元素，并对底层容器排序 (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/priority_queue/emplace)  <br />  (C++11) | 原位构造元素并排序底层容器 (公开成员函数) |
| [pop](https://zh.cppreference.com/w/cpp/container/priority_queue/pop) | 删除栈顶元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/priority_queue/swap) | 交换内容 |


## [<set>](https://zh.cppreference.com/w/cpp/header/set)
template <class Key,  class Compare = [std:: less](http://zh.cppreference.com/w/cpp/utility/functional/less) < Key > , class Allocator = std:: allocator < Key >> class set ;

| 迭代器 |  |
| --- | --- |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/set/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/set/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| [rbegincrbegin](https://zh.cppreference.com/w/cpp/container/set/rbegin) | 返回指向容器最后元素的逆向迭代器 (公开成员函数) |
| [rendcrend](https://zh.cppreference.com/w/cpp/container/set/rend) | 返回指向前端的逆向迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/set/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/set/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/set/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/set/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/set/insert) | 插入元素或结点 (C++17起) (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/set/emplace)  <br />  (C++11) | 原位构造元素 (公开成员函数) |
| [emplace_hint ](https://zh.cppreference.com/w/cpp/container/set/emplace_hint)  <br />  (C++11) | 使用提示原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/set/erase) | 擦除元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/set/swap) | 交换内容 (公开成员函数) |
| [extract ](https://zh.cppreference.com/w/cpp/container/set/extract)  <br />  (C++17) | 从另一容器释出结点 (公开成员函数) |
| [merge ](https://zh.cppreference.com/w/cpp/container/set/merge)  <br />  (C++17) | 从另一容器接合结点 (公开成员函数) |
| 查找 |  |
| [count](https://zh.cppreference.com/w/cpp/container/set/count) | 返回匹配特定键的元素数量 (公开成员函数) |
| [find](https://zh.cppreference.com/w/cpp/container/set/find) | 寻找带有特定键的元素 (公开成员函数) |
| [contains ](https://zh.cppreference.com/w/cpp/container/set/contains)  <br />  (C++20) | 检查容器是否含有带特定关键的元素 (公开成员函数) |
| [equal_range](https://zh.cppreference.com/w/cpp/container/set/equal_range) | 返回匹配特定键的元素范围 (公开成员函数) |
| [lower_bound](https://zh.cppreference.com/w/cpp/container/set/lower_bound) | 返回指向首个不小于给定键的元素的迭代器 (公开成员函数) |
| [upper_bound](https://zh.cppreference.com/w/cpp/container/set/upper_bound) | 返回指向首个大于给定键的元素的迭代器 (公开成员函数) |
| 观察器 |  |
| [key_comp](https://zh.cppreference.com/w/cpp/container/set/key_comp) | 返回用于比较键的函数 (公开成员函数) |
| [value_comp](https://zh.cppreference.com/w/cpp/container/set/value_comp) | 返回用于在value_type类型的对象中比较键的函数 |


## [multiset](https://zh.cppreference.com/w/cpp/container/multiset)
template <  class Key, class Compare = [std:: less](http://zh.cppreference.com/w/cpp/utility/functional/less) < Key > ,  class Allocator = std:: allocator < Key >> class multiset ;

| 迭代器 |  |
| --- | --- |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/multiset/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/multiset/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| [rbegincrbegin](https://zh.cppreference.com/w/cpp/container/multiset/rbegin) | 返回指向容器最后元素的逆向迭代器 (公开成员函数) |
| [rendcrend](https://zh.cppreference.com/w/cpp/container/multiset/rend) | 返回指向前端的逆向迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/multiset/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/multiset/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/multiset/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/multiset/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/multiset/insert) | 插入元素或结点 (C++17起) (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/multiset/emplace)  <br />  (C++11) | 原位构造元素 (公开成员函数) |
| [emplace_hint ](https://zh.cppreference.com/w/cpp/container/multiset/emplace_hint)  <br />  (C++11) | 使用提示原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/multiset/erase) | 擦除元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/multiset/swap) | 交换内容 (公开成员函数) |
| [extract ](https://zh.cppreference.com/w/cpp/container/multiset/extract)  <br />  (C++17) | 从另一容器释出结点 (公开成员函数) |
| [merge ](https://zh.cppreference.com/w/cpp/container/multiset/merge)  <br />  (C++17) | 从另一容器接合结点 (公开成员函数) |
| 查找 |  |
| [count](https://zh.cppreference.com/w/cpp/container/multiset/count) | 返回匹配特定键的元素数量 (公开成员函数) |
| [find](https://zh.cppreference.com/w/cpp/container/multiset/find) | 寻找带有特定键的元素 (公开成员函数) |
| [contains ](https://zh.cppreference.com/w/cpp/container/multiset/contains)  <br />  (C++20) | 检查容器是否含有带特定关键的元素 (公开成员函数) |
| [equal_range](https://zh.cppreference.com/w/cpp/container/multiset/equal_range) | 返回匹配特定键的元素范围 (公开成员函数) |
| [lower_bound](https://zh.cppreference.com/w/cpp/container/multiset/lower_bound) | 返回指向首个不小于给定键的元素的迭代器 (公开成员函数) |
| [upper_bound](https://zh.cppreference.com/w/cpp/container/multiset/upper_bound) | 返回指向首个大于给定键的元素的迭代器 (公开成员函数) |
| 观察器 |  |
| [key_comp](https://zh.cppreference.com/w/cpp/container/multiset/key_comp) | 返回用于比较键的函数 (公开成员函数) |
| [value_comp](https://zh.cppreference.com/w/cpp/container/multiset/value_comp) | 返回用于在value_type类型的对象中比较键的函数 |


## [<map>](https://zh.cppreference.com/w/cpp/header/map)
template <class Key,class T, class Compare = [std:: less](http://zh.cppreference.com/w/cpp/utility/functional/less) < Key > ,class Allocator = std:: allocator < std:: pair < const Key, T > >> class map ;

| 元素访问 |  |
| --- | --- |
| [at ](https://zh.cppreference.com/w/cpp/container/map/at)  <br />  (C++11) | 访问指定的元素，同时进行越界检查 (公开成员函数) |
| [operator[]](https://zh.cppreference.com/w/cpp/container/map/operator_at) | 访问或插入指定的元素 (公开成员函数) |
| 迭代器 |  |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/map/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/map/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| [rbegincrbegin](https://zh.cppreference.com/w/cpp/container/map/rbegin) | 返回指向容器最后元素的逆向迭代器 (公开成员函数) |
| [rendcrend](https://zh.cppreference.com/w/cpp/container/map/rend) | 返回指向前端的逆向迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/map/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/map/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/map/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/map/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/map/insert) | 插入元素或结点 (C++17起) (公开成员函数) |
| [insert_or_assign ](https://zh.cppreference.com/w/cpp/container/map/insert_or_assign)  <br />  (C++17) | 插入元素，或若关键已存在则赋值给当前元素 (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/map/emplace)  <br />  (C++11) | 原位构造元素 (公开成员函数) |
| [emplace_hint ](https://zh.cppreference.com/w/cpp/container/map/emplace_hint)  <br />  (C++11) | 使用提示原位构造元素 (公开成员函数) |
| [try_emplace ](https://zh.cppreference.com/w/cpp/container/map/try_emplace)  <br />  (C++17) | 若键不存在则原位插入，若键存在则不做任何事 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/map/erase) | 擦除元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/map/swap) | 交换内容 (公开成员函数) |
| [extract ](https://zh.cppreference.com/w/cpp/container/map/extract)  <br />  (C++17) | 从另一容器释出结点 (公开成员函数) |
| [merge ](https://zh.cppreference.com/w/cpp/container/map/merge)  <br />  (C++17) | 从另一容器接合结点 (公开成员函数) |
| 查找 |  |
| [count](https://zh.cppreference.com/w/cpp/container/map/count) | 返回匹配特定键的元素数量 (公开成员函数) |
| [find](https://zh.cppreference.com/w/cpp/container/map/find) | 寻找带有特定键的元素 (公开成员函数) |
| [contains ](https://zh.cppreference.com/w/cpp/container/map/contains)  <br />  (C++20) | 检查容器是否含有带特定关键的元素 (公开成员函数) |
| [equal_range](https://zh.cppreference.com/w/cpp/container/map/equal_range) | 返回匹配特定键的元素范围 (公开成员函数) |
| [lower_bound](https://zh.cppreference.com/w/cpp/container/map/lower_bound) | 返回指向首个不小于给定键的元素的迭代器 (公开成员函数) |
| [upper_bound](https://zh.cppreference.com/w/cpp/container/map/upper_bound) | 返回指向首个大于给定键的元素的迭代器 (公开成员函数) |
| 观察器 |  |
| [key_comp](https://zh.cppreference.com/w/cpp/container/map/key_comp) | 返回用于比较键的函数 (公开成员函数) |
| [value_comp](https://zh.cppreference.com/w/cpp/container/map/value_comp) | 返回用于在value_type类型的对象中比较键的函数 |

emplace()、emplace_hint()的执行效率比insert()高

## [multimap](https://zh.cppreference.com/w/cpp/container/multimap)
template <class Key,  class T,  class Compare = [std:: less](http://zh.cppreference.com/w/cpp/utility/functional/less) < Key > , class Allocator = std:: allocator < std:: pair < const Key, T > >> class multimap ;

| 迭代器 |  |
| --- | --- |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/multimap/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/multimap/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| [rbegincrbegin](https://zh.cppreference.com/w/cpp/container/multimap/rbegin) | 返回指向容器最后元素的逆向迭代器 (公开成员函数) |
| [rendcrend](https://zh.cppreference.com/w/cpp/container/multimap/rend) | 返回指向前端的逆向迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/multimap/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/multimap/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/multimap/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/multimap/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/multimap/insert) | 插入元素或结点 (C++17起) (公开成员函数) |
| [emplace ](https://zh.cppreference.com/w/cpp/container/multimap/emplace)  <br />  (C++11) | 原位构造元素 (公开成员函数) |
| [emplace_hint ](https://zh.cppreference.com/w/cpp/container/multimap/emplace_hint)  <br />  (C++11) | 使用提示原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/multimap/erase) | 擦除元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/multimap/swap) | 交换内容 (公开成员函数) |
| [extract ](https://zh.cppreference.com/w/cpp/container/multimap/extract)  <br />  (C++17) | 从另一容器释出结点 (公开成员函数) |
| [merge ](https://zh.cppreference.com/w/cpp/container/multimap/merge)  <br />  (C++17) | 从另一容器接合结点 (公开成员函数) |
| 查找 |  |
| [count](https://zh.cppreference.com/w/cpp/container/multimap/count) | 返回匹配特定键的元素数量 (公开成员函数) |
| [find](https://zh.cppreference.com/w/cpp/container/multimap/find) | 寻找带有特定键的元素 (公开成员函数) |
| [contains ](https://zh.cppreference.com/w/cpp/container/multimap/contains)  <br />  (C++20) | 检查容器是否含有带特定关键的元素 (公开成员函数) |
| [equal_range](https://zh.cppreference.com/w/cpp/container/multimap/equal_range) | 返回匹配特定键的元素范围 (公开成员函数) |
| [lower_bound](https://zh.cppreference.com/w/cpp/container/multimap/lower_bound) | 返回指向首个不小于给定键的元素的迭代器 (公开成员函数) |
| [upper_bound](https://zh.cppreference.com/w/cpp/container/multimap/upper_bound) | 返回指向首个大于给定键的元素的迭代器 (公开成员函数) |
| 观察器 |  |
| [key_comp](https://zh.cppreference.com/w/cpp/container/multimap/key_comp) | 返回用于比较键的函数 (公开成员函数) |
| [value_comp](https://zh.cppreference.com/w/cpp/container/multimap/value_comp) | 返回用于在value_type类型的对象中比较键的函数 |


## [<unordered_set>](https://zh.cppreference.com/w/cpp/header/unordered_set)

### unordered_set
template <  <br />  class Key,  <br />  class Hash = [std:: hash](http://zh.cppreference.com/w/cpp/utility/hash) < Key > ,  <br />  class KeyEqual = [std:: equal_to](http://zh.cppreference.com/w/cpp/utility/functional/equal_to) < Key > ,  <br />  class Allocator = [std:: allocator](http://zh.cppreference.com/w/cpp/memory/allocator) < Key >
> class unordered_set ;

| 迭代器 |  |
| --- | --- |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/unordered_set/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/unordered_set/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/unordered_set/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/unordered_set/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/unordered_set/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/unordered_set/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/unordered_set/insert) | 插入元素或结点 (C++17起) (公开成员函数) |
| [emplace](https://zh.cppreference.com/w/cpp/container/unordered_set/emplace) | 原位构造元素 (公开成员函数) |
| [emplace_hint](https://zh.cppreference.com/w/cpp/container/unordered_set/emplace_hint) | 使用提示原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/unordered_set/erase) | 擦除元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/unordered_set/swap) | 交换内容 (公开成员函数) |
| [extract ](https://zh.cppreference.com/w/cpp/container/unordered_set/extract)  <br />  (C++17) | 从另一容器释出结点 (公开成员函数) |
| [merge ](https://zh.cppreference.com/w/cpp/container/unordered_set/merge)  <br />  (C++17) | 从另一容器接合结点 (公开成员函数) |
| 查找 |  |
| [count](https://zh.cppreference.com/w/cpp/container/unordered_set/count) | 返回匹配特定键的元素数量 (公开成员函数) |
| [find](https://zh.cppreference.com/w/cpp/container/unordered_set/find) | 寻找带有特定键的元素 (公开成员函数) |
| [contains ](https://zh.cppreference.com/w/cpp/container/unordered_set/contains)  <br />  (C++20) | 检查容器是否含有带特定关键的元素 (公开成员函数) |
| [equal_range](https://zh.cppreference.com/w/cpp/container/unordered_set/equal_range) | 返回匹配特定键的元素范围 (公开成员函数) |
| 桶介面 |  |
| [begin (size_type) ](https://zh.cppreference.com/w/cpp/container/unordered_set/begin2)  <br />  cbegin (size_type) | 返回一个迭代器，指向指定的桶的开始 (公开成员函数) |
| [end (size_type) ](https://zh.cppreference.com/w/cpp/container/unordered_set/end2)  <br />  cend (size_type) | 返回一个迭代器，指向指定的桶的末尾 (公开成员函数) |
| [bucket_count](https://zh.cppreference.com/w/cpp/container/unordered_set/bucket_count) | 返回桶数 (公开成员函数) |
| [max_bucket_count](https://zh.cppreference.com/w/cpp/container/unordered_set/max_bucket_count) | 返回桶的最大数量 (公开成员函数) |
| [bucket_size](https://zh.cppreference.com/w/cpp/container/unordered_set/bucket_size) | 返回在特定的桶中的元素数量 (公开成员函数) |
| [bucket](https://zh.cppreference.com/w/cpp/container/unordered_set/bucket) | 返回带有特定键的桶 (公开成员函数) |
| 哈希策略 |  |
| [load_factor](https://zh.cppreference.com/w/cpp/container/unordered_set/load_factor) | 返回每个桶的平均元素数量 (公开成员函数) |
| [max_load_factor](https://zh.cppreference.com/w/cpp/container/unordered_set/max_load_factor) | 管理每个桶的平均元素数量的最大值 (公开成员函数) |
| [rehash](https://zh.cppreference.com/w/cpp/container/unordered_set/rehash) | 为至少为指定数量的桶预留存储空间。 会重新生成哈希表。 |
| [reserve](https://zh.cppreference.com/w/cpp/container/unordered_set/reserve) | 为至少为指定数量的元素预留存储空间。 会重新生成哈希表。 |
| 观察器 |  |
| [hash_function](https://zh.cppreference.com/w/cpp/container/unordered_set/hash_function) | 返回用于对关键哈希的函数 (公开成员函数) |
| [key_eq](https://zh.cppreference.com/w/cpp/container/unordered_set/key_eq) | 返回用于比较键的相等性的函数 |


### unordered_multiset
template <  <br />      class Key,  <br />      class Hash = [std:: hash](http://zh.cppreference.com/w/cpp/utility/hash) < Key > ,  <br />      class KeyEqual = [std:: equal_to](http://zh.cppreference.com/w/cpp/utility/functional/equal_to) < Key > ,  <br />      class Allocator = [std:: allocator](http://zh.cppreference.com/w/cpp/memory/allocator) < Key >  <br />  > class unordered_multiset ;

| 迭代器 |  |
| --- | --- |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/unordered_multiset/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/unordered_multiset/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/unordered_multiset/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/unordered_multiset/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/unordered_multiset/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/unordered_multiset/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/unordered_multiset/insert) | 插入元素或结点 (C++17起) (公开成员函数) |
| [emplace](https://zh.cppreference.com/w/cpp/container/unordered_multiset/emplace) | 原位构造元素 (公开成员函数) |
| [emplace_hint](https://zh.cppreference.com/w/cpp/container/unordered_multiset/emplace_hint) | 使用提示原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/unordered_multiset/erase) | 擦除元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/unordered_multiset/swap) | 交换内容 (公开成员函数) |
| [extract ](https://zh.cppreference.com/w/cpp/container/unordered_multiset/extract)  <br />  (C++17) | 从另一容器释出结点 (公开成员函数) |
| [merge ](https://zh.cppreference.com/w/cpp/container/unordered_multiset/merge)  <br />  (C++17) | 从另一容器接合结点 (公开成员函数) |
| 查找 |  |
| [count](https://zh.cppreference.com/w/cpp/container/unordered_multiset/count) | 返回匹配特定键的元素数量 (公开成员函数) |
| [find](https://zh.cppreference.com/w/cpp/container/unordered_multiset/find) | 寻找带有特定键的元素 (公开成员函数) |
| [contains ](https://zh.cppreference.com/w/cpp/container/unordered_multiset/contains)  <br />  (C++20) | 检查容器是否含有带特定关键的元素 (公开成员函数) |
| [equal_range](https://zh.cppreference.com/w/cpp/container/unordered_multiset/equal_range) | 返回匹配特定键的元素范围 (公开成员函数) |
| 桶介面 |  |
| [begin (size_type) ](https://zh.cppreference.com/w/cpp/container/unordered_multiset/begin2)  <br />  cbegin (size_type) | 返回一个迭代器，指向指定的桶的开始 (公开成员函数) |
| [end (size_type) ](https://zh.cppreference.com/w/cpp/container/unordered_multiset/end2)  <br />  cend (size_type) | 返回一个迭代器，指向指定的桶的末尾 (公开成员函数) |
| [bucket_count](https://zh.cppreference.com/w/cpp/container/unordered_multiset/bucket_count) | 返回桶数 (公开成员函数) |
| [max_bucket_count](https://zh.cppreference.com/w/cpp/container/unordered_multiset/max_bucket_count) | 返回桶的最大数量 (公开成员函数) |
| [bucket_size](https://zh.cppreference.com/w/cpp/container/unordered_multiset/bucket_size) | 返回在特定的桶中的元素数量 (公开成员函数) |
| [bucket](https://zh.cppreference.com/w/cpp/container/unordered_multiset/bucket) | 返回带有特定键的桶 (公开成员函数) |
| 哈希策略 |  |
| [load_factor](https://zh.cppreference.com/w/cpp/container/unordered_multiset/load_factor) | 返回每个桶的平均元素数量 (公开成员函数) |
| [max_load_factor](https://zh.cppreference.com/w/cpp/container/unordered_multiset/max_load_factor) | 管理每个桶的平均元素数量的最大值 (公开成员函数) |
| [rehash](https://zh.cppreference.com/w/cpp/container/unordered_multiset/rehash) | 为至少为指定数量的桶预留存储空间。 这会重新生成哈希表。 (公开成员函数) |
| [reserve](https://zh.cppreference.com/w/cpp/container/unordered_multiset/reserve) | 为至少为指定数量的元素预留存储空间。 这会重新生成哈希表。 (公开成员函数) |
| 观察器 |  |
| [hash_function](https://zh.cppreference.com/w/cpp/container/unordered_multiset/hash_function) | 返回用于对关键哈希的函数 (公开成员函数) |
| [key_eq](https://zh.cppreference.com/w/cpp/container/unordered_multiset/key_eq) | 返回用于比较键的相等性的函数 |


## [<unordered_map>](https://zh.cppreference.com/w/cpp/header/unordered_map)

### **unordered_map**
template <  <br />      class Key,  <br />      class T,  <br />      class Hash = [std:: hash](http://zh.cppreference.com/w/cpp/utility/hash) < Key > ,  <br />      class KeyEqual = [std:: equal_to](http://zh.cppreference.com/w/cpp/utility/functional/equal_to) < Key > ,  <br />      class Allocator = [std:: allocator](http://zh.cppreference.com/w/cpp/memory/allocator) < [std:: pair](http://zh.cppreference.com/w/cpp/utility/pair) < const Key, T > >  <br />  > class unordered_map ;

| 迭代器 |  |
| --- | --- |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/unordered_map/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/unordered_map/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| 容量 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/unordered_map/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/unordered_map/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/unordered_map/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/unordered_map/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/unordered_map/insert) | 插入元素或结点 (C++17起) (公开成员函数) |
| [insert_or_assign ](https://zh.cppreference.com/w/cpp/container/unordered_map/insert_or_assign)  <br />  (C++17) | 插入元素，或若关键已存在则赋值给当前元素 (公开成员函数) |
| [emplace](https://zh.cppreference.com/w/cpp/container/unordered_map/emplace) | 原位构造元素 (公开成员函数) |
| [emplace_hint](https://zh.cppreference.com/w/cpp/container/unordered_map/emplace_hint) | 使用提示原位构造元素 (公开成员函数) |
| [try_emplace ](https://zh.cppreference.com/w/cpp/container/unordered_map/try_emplace)  <br />  (C++17) | 若键不存在则原位插入，若键存在则不做任何事 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/unordered_map/erase) | 擦除元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/unordered_map/swap) | 交换内容 (公开成员函数) |
| [extract ](https://zh.cppreference.com/w/cpp/container/unordered_map/extract)  <br />  (C++17) | 从另一容器释出结点 (公开成员函数) |
| [merge ](https://zh.cppreference.com/w/cpp/container/unordered_map/merge)  <br />  (C++17) | 从另一容器接合结点 (公开成员函数) |
| 查找 |  |
| [at](https://zh.cppreference.com/w/cpp/container/unordered_map/at) | 访问指定的元素，同时进行越界检查 (公开成员函数) |
| [operator[]](https://zh.cppreference.com/w/cpp/container/unordered_map/operator_at) | 访问或插入指定的元素 (公开成员函数) |
| [count](https://zh.cppreference.com/w/cpp/container/unordered_map/count) | 返回匹配特定键的元素数量 (公开成员函数) |
| [find](https://zh.cppreference.com/w/cpp/container/unordered_map/find) | 寻找带有特定键的元素 (公开成员函数) |
| [contains ](https://zh.cppreference.com/w/cpp/container/unordered_map/contains)  <br />  (C++20) | 检查容器是否含有带特定关键的元素 (公开成员函数) |
| [equal_range](https://zh.cppreference.com/w/cpp/container/unordered_map/equal_range) | 返回匹配特定键的元素范围 (公开成员函数) |
| 桶介面 |  |
| [begin (size_type) ](https://zh.cppreference.com/w/cpp/container/unordered_map/begin2)  <br />  cbegin (size_type) | 返回一个迭代器，指向指定的桶的开始 (公开成员函数) |
| [end (size_type) ](https://zh.cppreference.com/w/cpp/container/unordered_map/end2)  <br />  cend (size_type) | 返回一个迭代器，指向指定的桶的末尾 (公开成员函数) |
| [bucket_count](https://zh.cppreference.com/w/cpp/container/unordered_map/bucket_count) | 返回桶数 (公开成员函数) |
| [max_bucket_count](https://zh.cppreference.com/w/cpp/container/unordered_map/max_bucket_count) | 返回桶的最大数量 (公开成员函数) |
| [bucket_size](https://zh.cppreference.com/w/cpp/container/unordered_map/bucket_size) | 返回在特定的桶中的元素数量 (公开成员函数) |
| [bucket](https://zh.cppreference.com/w/cpp/container/unordered_map/bucket) | 返回带有特定键的桶 (公开成员函数) |
| 哈希策略 |  |
| [load_factor](https://zh.cppreference.com/w/cpp/container/unordered_map/load_factor) | 返回每个桶的平均元素数量 (公开成员函数) |
| [max_load_factor](https://zh.cppreference.com/w/cpp/container/unordered_map/max_load_factor) | 管理每个桶的平均元素数量的最大值 (公开成员函数) |
| [rehash](https://zh.cppreference.com/w/cpp/container/unordered_map/rehash) | 为至少为指定数量的桶预留存储空间。 这会重新生成哈希表。 (公开成员函数) |
| [reserve](https://zh.cppreference.com/w/cpp/container/unordered_map/reserve) | 为至少为指定数量的元素预留存储空间。 这会重新生成哈希表。 (公开成员函数) |
| 观察器 |  |
| [hash_function](https://zh.cppreference.com/w/cpp/container/unordered_map/hash_function) | 返回用于对关键哈希的函数 (公开成员函数) |
| [key_eq](https://zh.cppreference.com/w/cpp/container/unordered_map/key_eq) | 返回用于比较键的相等性的函数 |


### unordered_multimap
template <  <br />      class Key,  <br />      class T,  <br />      class Hash = [std:: hash](http://zh.cppreference.com/w/cpp/utility/hash) < Key > ,  <br />      class KeyEqual = [std:: equal_to](http://zh.cppreference.com/w/cpp/utility/functional/equal_to) < Key > ,  <br />      class Allocator = [std:: allocator](http://zh.cppreference.com/w/cpp/memory/allocator) < [std:: pair](http://zh.cppreference.com/w/cpp/utility/pair) < const Key, T > >  <br />  > class unordered_multimap ;

| 迭代器 |  |
| --- | --- |
| [begincbegin](https://zh.cppreference.com/w/cpp/container/unordered_multimap/begin) | 返回指向容器第一个元素的迭代器 (公开成员函数) |
| [endcend](https://zh.cppreference.com/w/cpp/container/unordered_multimap/end) | 返回指向容器尾端的迭代器 (公开成员函数) |
| 容器 |  |
| [empty](https://zh.cppreference.com/w/cpp/container/unordered_multimap/empty) | 检查容器是否为空 (公开成员函数) |
| [size](https://zh.cppreference.com/w/cpp/container/unordered_multimap/size) | 返回容纳的元素数 (公开成员函数) |
| [max_size](https://zh.cppreference.com/w/cpp/container/unordered_multimap/max_size) | 返回可容纳的最大元素数 (公开成员函数) |
| 修改器 |  |
| [clear](https://zh.cppreference.com/w/cpp/container/unordered_multimap/clear) | 清除内容 (公开成员函数) |
| [insert](https://zh.cppreference.com/w/cpp/container/unordered_multimap/insert) | 插入元素或结点 (C++17起) (公开成员函数) |
| [emplace](https://zh.cppreference.com/w/cpp/container/unordered_multimap/emplace) | 原位构造元素 (公开成员函数) |
| [emplace_hint](https://zh.cppreference.com/w/cpp/container/unordered_multimap/emplace_hint) | 使用提示原位构造元素 (公开成员函数) |
| [erase](https://zh.cppreference.com/w/cpp/container/unordered_multimap/erase) | 擦除元素 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/container/unordered_multimap/swap) | 交换内容 (公开成员函数) |
| [extract ](https://zh.cppreference.com/w/cpp/container/unordered_multimap/extract)  <br />  (C++17) | 从另一容器释出结点 (公开成员函数) |
| [merge ](https://zh.cppreference.com/w/cpp/container/unordered_multimap/merge)  <br />  (C++17) | 从另一容器接合结点 (公开成员函数) |
| 查找 |  |
| [count](https://zh.cppreference.com/w/cpp/container/unordered_multimap/count) | 返回匹配特定键的元素数量 (公开成员函数) |
| [find](https://zh.cppreference.com/w/cpp/container/unordered_multimap/find) | 寻找带有特定键的元素 (公开成员函数) |
| [contains ](https://zh.cppreference.com/w/cpp/container/unordered_multimap/contains)  <br />  (C++20) | 检查容器是否含有带特定关键的元素 (公开成员函数) |
| [equal_range](https://zh.cppreference.com/w/cpp/container/unordered_multimap/equal_range) | 返回匹配特定键的元素范围 (公开成员函数) |
| 桶介面 |  |
| [begin (size_type) ](https://zh.cppreference.com/w/cpp/container/unordered_map/begin2)  <br />  cbegin (size_type) | 返回一个迭代器，指向指定的桶的开始 (公开成员函数) |
| [end (size_type) ](https://zh.cppreference.com/w/cpp/container/unordered_map/end2)  <br />  cend (size_type) | 返回一个迭代器，指向指定的桶的末尾 (公开成员函数) |
| [bucket_count](https://zh.cppreference.com/w/cpp/container/unordered_multimap/bucket_count) | 返回桶数 (公开成员函数) |
| [max_bucket_count](https://zh.cppreference.com/w/cpp/container/unordered_multimap/max_bucket_count) | 返回桶的最大数量 (公开成员函数) |
| [bucket_size](https://zh.cppreference.com/w/cpp/container/unordered_multimap/bucket_size) | 返回在特定的桶中的元素数量 (公开成员函数) |
| [bucket](https://zh.cppreference.com/w/cpp/container/unordered_multimap/bucket) | 返回带有特定键的桶 (公开成员函数) |
| 哈希策略 |  |
| [load_factor](https://zh.cppreference.com/w/cpp/container/unordered_multimap/load_factor) | 返回每个桶的平均元素数量 (公开成员函数) |
| [max_load_factor](https://zh.cppreference.com/w/cpp/container/unordered_multimap/max_load_factor) | 管理每个桶的平均元素数量的最大值 (公开成员函数) |
| [rehash](https://zh.cppreference.com/w/cpp/container/unordered_multimap/rehash) | 为至少为指定数量的桶预留存储空间。 这会重新生成哈希表。 (公开成员函数) |
| [reserve](https://zh.cppreference.com/w/cpp/container/unordered_multimap/reserve) | 为至少为指定数量的元素预留存储空间。 这会重新生成哈希表。 (公开成员函数) |
| 观察器 |  |
| [hash_function](https://zh.cppreference.com/w/cpp/container/unordered_multimap/hash_function) | 返回用于对关键哈希的函数 (公开成员函数) |
| [key_eq](https://zh.cppreference.com/w/cpp/container/unordered_multimap/key_eq) | 返回用于比较键的相等性的函数 |


## [<tuple>](https://zh.cppreference.com/mwiki/index.php?title=cpp/header/tuple&variant=zh-hans)
| 函数 |  |
| --- | --- |
| [make_tuple](https://zh.cppreference.com/w/cpp/utility/tuple/make_tuple) | 创建一个 tuple 对象，其类型根据各实参类型定义 (函数模板) |
| [tie](https://zh.cppreference.com/w/cpp/utility/tuple/tie) | 创建左值引用的 tuple，或将 tuple 解包为独立对象 (函数模板) |
| [forward_as_tuple](https://zh.cppreference.com/w/cpp/utility/tuple/forward_as_tuple) | 创建[转发引用的](https://zh.cppreference.com/w/cpp/language/reference#.E8.BD.AC.E5.8F.91.E5.BC.95.E7.94.A8)  <br />   tuple (函数模板) |
| [tuple_cat](https://zh.cppreference.com/w/cpp/utility/tuple/tuple_cat) | 通过连接任意数量的元组来创建一个tuple (函数模板) |
| [std::get(std::tuple)](https://zh.cppreference.com/w/cpp/utility/tuple/get) | 元组式访问指定的元素 |
| [std::swap(std::tuple) ](https://zh.cppreference.com/w/cpp/utility/tuple/swap2)  <br />  (C++11) | 特化 [std::swap ](https://zh.cppreference.com/w/cpp/algorithm/swap)  <br />  算法 (函数模板) |
| [apply ](https://zh.cppreference.com/w/cpp/utility/apply)  <br />  (C++17) | 以一个实参的元组来调用函数 (函数模板) |
| [make_from_tuple ](https://zh.cppreference.com/w/cpp/utility/make_from_tuple)  <br />  (C++17) | 以一个实参元组构造对象 |


## [<valarray>](https://zh.cppreference.com/w/cpp/header/valarray)
| [valarray](https://zh.cppreference.com/w/cpp/numeric/valarray) | 数值数组和数组切片 (类模板) |
| --- | --- |
| [slice](https://zh.cppreference.com/w/cpp/numeric/valarray/slice) | valarray的BLAS式切片：起始下标、长度、跨度 (类) |
| [slice_array](https://zh.cppreference.com/w/cpp/numeric/valarray/slice_array) | 到valarray应用slice后的子集的代理 (类模板) |
| [gslice](https://zh.cppreference.com/w/cpp/numeric/valarray/gslice) | valarray的通用切片：起始下标、长度集、步幅集 (类) |
| [gslice_array](https://zh.cppreference.com/w/cpp/numeric/valarray/gslice_array) | valarray应用gslice后的子集的代理 (类模板) |
| [mask_array](https://zh.cppreference.com/w/cpp/numeric/valarray/mask_array) | 到应用布尔掩码 operator[]后的valarray子集的代理 (类模板) |
| [indirect_array](https://zh.cppreference.com/w/cpp/numeric/valarray/indirect_array) | 到应用间接operator[]后的valarray子集的代理 |

template < class T >  <br />  class valarray ;  <br />  **valarray**表示并操作值数组的类。支持逐元素数学运算与多种形式的广义下标运算符、切片及间接访问。

| [swap](https://zh.cppreference.com/w/cpp/numeric/valarray/swap) | 与另一valarray交换 (公开成员函数) |
| --- | --- |
| [size](https://zh.cppreference.com/w/cpp/numeric/valarray/size) | 返回valarray的大小 (公开成员函数) |
| [resize](https://zh.cppreference.com/w/cpp/numeric/valarray/resize) | 更改valarray的大小 (公开成员函数) |
| [sum](https://zh.cppreference.com/w/cpp/numeric/valarray/sum) | 计算所有元素的和 (公开成员函数) |
| [min](https://zh.cppreference.com/w/cpp/numeric/valarray/min) | 返回最小元素 (公开成员函数) |
| [max](https://zh.cppreference.com/w/cpp/numeric/valarray/max) | 返回最大的元素 (公开成员函数) |
| [shift](https://zh.cppreference.com/w/cpp/numeric/valarray/shift) | 以填入零的方式移动valarray的元素 (公开成员函数) |
| [cshift](https://zh.cppreference.com/w/cpp/numeric/valarray/cshift) | 循环移动valarray的元素 (公开成员函数) |
| [apply](https://zh.cppreference.com/w/cpp/numeric/valarray/apply) | 将函数应用到valarray的每个元素 |

**slice( std::size_t start, std::size_t size, std::size_t stride );**  <br />  **gslice ( std:: size_t start, const std:: valarray < std:: size_t > & sizes,**  <br />  **                           const std:: valarray < std:: size_t > & strides ) ;**


## [<algorithm>](https://zh.cppreference.com/w/cpp/algorithm)

### 不修改序列的操作
| [for_each](https://zh.cppreference.com/w/cpp/algorithm/for_each) | 应用函数到范围中的元素 (函数模板) |
| --- | --- |
| [for_each_n ](https://zh.cppreference.com/w/cpp/algorithm/for_each_n)  <br />  (C++17) | 应用一个函数对象到序列的前n个元素 (函数模板) |
| [count ](https://zh.cppreference.com/w/cpp/algorithm/count)  <br />  count_if | 返回满足指定判别标准的元素数 (函数模板) |
| [mismatch](https://zh.cppreference.com/w/cpp/algorithm/mismatch) | 寻找两个范围出现不同的首个位置 (函数模板) |
| [find ](https://zh.cppreference.com/w/cpp/algorithm/find)  <br />  find_if find_if_not | 寻找首个满足特定判别标准的元素 (函数模板) |
| [find_end](https://zh.cppreference.com/w/cpp/algorithm/find_end) | 在特定范围中寻找最后出现的元素序列 (函数模板) |
| [find_first_of](https://zh.cppreference.com/w/cpp/algorithm/find_first_of) | 搜索元素集合中的任意元素 (函数模板) |
| [adjacent_find](https://zh.cppreference.com/w/cpp/algorithm/adjacent_find) | 查找首对相邻的相同（或满足给定谓词的）元素 (函数模板) |
| [search](https://zh.cppreference.com/w/cpp/algorithm/search) | 搜索一个元素范围 (函数模板) |
| [search_n](https://zh.cppreference.com/w/cpp/algorithm/search_n) | 在范围中搜索一定量的某个元素的连续副本 (函数模板) |


### 修改序列的操作
| [copy ](https://zh.cppreference.com/w/cpp/algorithm/copy)  <br />  copy_if | 将某一范围的元素复制到一个新的位置 (函数模板) |
| --- | --- |
| [copy_n ](https://zh.cppreference.com/w/cpp/algorithm/copy_n)  <br />  (C++11) | 将一定数目的元素复制到一个新的位置 (函数模板) |
| [copy_backward](https://zh.cppreference.com/w/cpp/algorithm/copy_backward) | 按从后往前的顺序复制一个范围内的元素 (函数模板) |
| [move ](https://zh.cppreference.com/w/cpp/algorithm/move)  <br />  (C++11) | 将某一范围的元素移动到一个新的位置 (函数模板) |
| [move_backward ](https://zh.cppreference.com/w/cpp/algorithm/move_backward)  <br />  (C++11) | 按从后往前的顺序移动某一范围的元素到新的位置 (函数模板) |
| [fill](https://zh.cppreference.com/w/cpp/algorithm/fill) | 将一个给定值复制赋值给一个范围内的每个元素 (函数模板) |
| [fill_n](https://zh.cppreference.com/w/cpp/algorithm/fill_n) | 将一个给定值复制赋值给一个范围内的N个元素 (函数模板) |
| [transform](https://zh.cppreference.com/w/cpp/algorithm/transform) | 将一个函数应用于某一范围的各个元素，并在目标范围存储结果 (函数模板) |
| [generate](https://zh.cppreference.com/w/cpp/algorithm/generate) | 将相继的函数调用结果赋值给一个范围中的每个元素 (函数模板) |
| [generate_n](https://zh.cppreference.com/w/cpp/algorithm/generate_n) | 将相继的函数调用结果赋值给一个范围中的N个元素 (函数模板) |
| [remove ](https://zh.cppreference.com/w/cpp/algorithm/remove)  <br />  remove_if | 移除满足特定判别标准的元素 (函数模板) |
| [remove_copy ](https://zh.cppreference.com/w/cpp/algorithm/remove_copy)  <br />  remove_copy_if | 复制一个范围的元素，忽略满足特定判别标准的元素 (函数模板) |
| [replace ](https://zh.cppreference.com/w/cpp/algorithm/replace)  <br />  replace_if | 将所有满足特定判别标准的值替换为另一个值 (函数模板) |
| [replace_copy ](https://zh.cppreference.com/w/cpp/algorithm/replace_copy)  <br />  replace_copy_if | 复制一个范围内的元素，并将满足特定判别标准的元素替换为另一个值 (函数模板) |
| [swap](https://zh.cppreference.com/w/cpp/algorithm/swap) | 交换两个对象的值 (函数模板) |
| [swap_ranges](https://zh.cppreference.com/w/cpp/algorithm/swap_ranges) | 交换两个范围的元素 (函数模板) |
| [iter_swap](https://zh.cppreference.com/w/cpp/algorithm/iter_swap) | 交换两个迭代器所指向的元素 (函数模板) |
| [reverse](https://zh.cppreference.com/w/cpp/algorithm/reverse) | 逆转范围中的元素顺序 (函数模板) |
| [reverse_copy](https://zh.cppreference.com/w/cpp/algorithm/reverse_copy) | 创建一个范围的逆向副本 (函数模板) |
| [shift_left ](https://zh.cppreference.com/w/cpp/algorithm/shift)  <br />  shift_right | 迁移范围中的元素 (函数模板) |
| [rotate](https://zh.cppreference.com/w/cpp/algorithm/rotate) | 旋转范围中的元素顺序 (函数模板) |
| [rotate_copy](https://zh.cppreference.com/w/cpp/algorithm/rotate_copy) | 复制并旋转元素范围 (函数模板) |
| [random_shuffle ](https://zh.cppreference.com/w/cpp/algorithm/random_shuffle)  <br />  shuffle | 随机重排范围中的元素 (函数模板) |
| [sample ](https://zh.cppreference.com/w/cpp/algorithm/sample)  <br />  (C++17) | 从一个序列中随机选择n个元素 (函数模板) |
| [unique](https://zh.cppreference.com/w/cpp/algorithm/unique) | 移除范围内的连续重复元素 (函数模板) |
| [unique_copy](https://zh.cppreference.com/w/cpp/algorithm/unique_copy) | 创建某范围的不含连续重复元素的副本 (函数模板) |

**replace_if(s.begin(), s.end(), [](char c) {return !isalpha(c); },' ');**  <br />  **transform(s.begin(), s.end(), s.begin(), ::tolower);**

### 划分操作
| [is_partitioned ](https://zh.cppreference.com/w/cpp/algorithm/is_partitioned)  <br />  (C++11) | 判断范围是否已按给定的谓词划分 (函数模板) |
| --- | --- |
| [partition](https://zh.cppreference.com/w/cpp/algorithm/partition) | 将范围中的元素分为两组 (函数模板) |
| [partition_copy ](https://zh.cppreference.com/w/cpp/algorithm/partition_copy)  <br />  (C++11) | 复制一个范围，将各元素分为两组 (函数模板) |
| [stable_partition](https://zh.cppreference.com/w/cpp/algorithm/stable_partition) | 将元素分为两组，同时保留其相对顺序 (函数模板) |
| [partition_point ](https://zh.cppreference.com/w/cpp/algorithm/partition_point)  <br />  (C++11) | 定位已划分范围的划分点 |


### 排序操作
| [is_sorted ](https://zh.cppreference.com/w/cpp/algorithm/is_sorted)  <br />  (C++11) | 检查范围是否已按升序排列 (函数模板) |
| --- | --- |
| [is_sorted_until ](https://zh.cppreference.com/w/cpp/algorithm/is_sorted_until)  <br />  (C++11) | 找出最大的已排序子范围 (函数模板) |
| [sort](https://zh.cppreference.com/w/cpp/algorithm/sort) | 将范围按升序排序 (函数模板) |
| [partial_sort](https://zh.cppreference.com/w/cpp/algorithm/partial_sort) | 排序一个范围的前N个元素 (函数模板) |
| [partial_sort_copy](https://zh.cppreference.com/w/cpp/algorithm/partial_sort_copy) | 对范围内的元素进行复制并部分排序 (函数模板) |
| [stable_sort](https://zh.cppreference.com/w/cpp/algorithm/stable_sort) | 将范围内的元素排序，同时保持相等的元素之间的顺序 (函数模板) |
| [nth_element](https://zh.cppreference.com/w/cpp/algorithm/nth_element) | 将给定的范围部分排序，确保其按给定元素划分 |


### 二分搜索操作（已排序）
| [lower_bound](https://zh.cppreference.com/w/cpp/algorithm/lower_bound) | 返回指向第一个不小于给定值的元素的迭代器 (函数模板) |
| --- | --- |
| [upper_bound](https://zh.cppreference.com/w/cpp/algorithm/upper_bound) | 返回指向第一个大于给定值的元素的迭代器 (函数模板) |
| [binary_search](https://zh.cppreference.com/w/cpp/algorithm/binary_search) | 确定元素是否存在于某范围中 (函数模板) |
| [equal_range](https://zh.cppreference.com/w/cpp/algorithm/equal_range) | 返回匹配特定键值的元素范围 |


### 集合操作（已排序）
| [merge](https://zh.cppreference.com/w/cpp/algorithm/merge) | 归并两个已排序的范围 (函数模板) |
| --- | --- |
| [inplace_merge](https://zh.cppreference.com/w/cpp/algorithm/inplace_merge) | 就地归并两个有序范围 (函数模板) |
| [includes](https://zh.cppreference.com/w/cpp/algorithm/includes) | 若一个集合是另一个的子集则返回true (函数模板) |
| [set_difference](https://zh.cppreference.com/w/cpp/algorithm/set_difference) | 计算两个集合的差集 (函数模板) |
| [set_intersection](https://zh.cppreference.com/w/cpp/algorithm/set_intersection) | 计算两个集合的交集 (函数模板) |
| [set_symmetric_difference](https://zh.cppreference.com/w/cpp/algorithm/set_symmetric_difference) | 计算两个集合的对称差 (函数模板) |
| [set_union](https://zh.cppreference.com/w/cpp/algorithm/set_union) | 计算两个集合的并集 |

**vector v;**  <br />  **set_union(v1.begin(), v1.end(),v2.begin(), v2.end(),back_inserter(v));**

### 堆操作
| [is_heap](https://zh.cppreference.com/w/cpp/algorithm/is_heap) | 检查给定范围是否为一个最大堆 (函数模板) |
| --- | --- |
| [is_heap_until ](https://zh.cppreference.com/w/cpp/algorithm/is_heap_until)  <br />  (C++11) | 查找能成为最大堆的最大子范围 (函数模板) |
| [make_heap](https://zh.cppreference.com/w/cpp/algorithm/make_heap) | 从一个元素范围创建出一个最大堆 (函数模板) |
| [push_heap](https://zh.cppreference.com/w/cpp/algorithm/push_heap) | 将一个元素加入到一个最大堆 (函数模板) |
| [pop_heap](https://zh.cppreference.com/w/cpp/algorithm/pop_heap) | 从最大堆中移除最大元素 (函数模板) |
| [sort_heap](https://zh.cppreference.com/w/cpp/algorithm/sort_heap) | 将一个最大堆变成一个按升序排序的元素范围 |


### 最小/最大操作
| [max](https://zh.cppreference.com/w/cpp/algorithm/max) | 返回各给定值中的较大者 (函数模板) |
| --- | --- |
| [max_element](https://zh.cppreference.com/w/cpp/algorithm/max_element) | 返回范围内的最大元素 (函数模板) |
| [min](https://zh.cppreference.com/w/cpp/algorithm/min) | 返回各给定值中的较小者 (函数模板) |
| [min_element](https://zh.cppreference.com/w/cpp/algorithm/min_element) | 返回范围内的最小元素 (函数模板) |
| [minmax ](https://zh.cppreference.com/w/cpp/algorithm/minmax)  <br />  (C++11) | 返回两个元素的较小和较大者 (函数模板) |
| [minmax_element ](https://zh.cppreference.com/w/cpp/algorithm/minmax_element)  <br />  (C++11) | 返回范围内的最小元素和最大元素 (函数模板) |
| [clamp ](https://zh.cppreference.com/w/cpp/algorithm/clamp)  <br />  (C++17) | 在一对边界值间夹逼一个值 |


### 比较操作
| [equal](https://zh.cppreference.com/w/cpp/algorithm/equal) | 确定两个元素集合是否是相同的 (函数模板) |
| --- | --- |
| [lexicographical_compare](https://zh.cppreference.com/w/cpp/algorithm/lexicographical_compare) | 当一个范围按字典顺序小于另一个范围时，返回true (函数模板) |
| [lexicographical_compare_three_way ](https://zh.cppreference.com/w/cpp/algorithm/lexicographical_compare_three_way)  <br />  (C++20) | 用三路比较比较两个范围 |


### 排列操作
| [is_permutation ](https://zh.cppreference.com/w/cpp/algorithm/is_permutation)  <br />  (C++11) | 判断一个序列是否为另一个序列的排列 (函数模板) |
| --- | --- |
| [next_permutation](https://zh.cppreference.com/w/cpp/algorithm/next_permutation) | 产生某个元素范围的按字典顺序的下一个较大的排列 (函数模板) |
| [prev_permutation](https://zh.cppreference.com/w/cpp/algorithm/prev_permutation) | 产生某个元素范围的按字典顺序的下一个较小的排列 |


## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/numeric)
**数值运算**

| [iota ](https://zh.cppreference.com/w/cpp/algorithm/iota)  <br />  (C++11) | 用从起始值开始连续递增的值填充一个范围 (函数模板) |
| --- | --- |
| [accumulate](https://zh.cppreference.com/w/cpp/algorithm/accumulate) | 对一个范围内的元素求和 (函数模板) |
| [reduce ](https://zh.cppreference.com/w/cpp/algorithm/reduce)  <br />  (C++17) | 类似[std::accumulate，](https://zh.cppreference.com/w/cpp/algorithm/accumulate)  <br />  但不依序执行 (函数模板) |
| [transform_reduce ](https://zh.cppreference.com/w/cpp/algorithm/transform_reduce)  <br />  (C++17) | 应用一个函数对象，然后以乱序规约 (函数模板) |
| [inner_product](https://zh.cppreference.com/w/cpp/algorithm/inner_product) | 计算两个范围的元素的内积 (函数模板) |
| [adjacent_difference](https://zh.cppreference.com/w/cpp/algorithm/adjacent_difference) | 计算范围内各相邻元素之间的差 (函数模板) |
| [partial_sum](https://zh.cppreference.com/w/cpp/algorithm/partial_sum) | 计算范围内元素的部分和 (函数模板) |
| [inclusive_scan ](https://zh.cppreference.com/w/cpp/algorithm/inclusive_scan)  <br />  (C++17) | 类似[std::partial_sum，](https://zh.cppreference.com/w/cpp/algorithm/partial_sum)  <br />  第i个和中包含第i个输入 (函数模板) |
| [exclusive_scan ](https://zh.cppreference.com/w/cpp/algorithm/exclusive_scan)  <br />  (C++17) | 类似[std::partial_sum，](https://zh.cppreference.com/w/cpp/algorithm/partial_sum)  <br />  第i个和中排除第i个输入 (函数模板) |
| [transform_inclusive_scan ](https://zh.cppreference.com/w/cpp/algorithm/transform_inclusive_scan)  <br />  (C++17) | 应用一个函数对象，然后进行包含扫描 (函数模板) |
| [transform_exclusive_scan ](https://zh.cppreference.com/w/cpp/algorithm/transform_exclusive_scan)  <br />  (C++17) | 应用一个函数对象，然后进行排除扫描 (函数模板) |
| [gcd ](https://zh.cppreference.com/w/cpp/numeric/gcd)  <br />  (C++17) | 返回二个整数最大公约数的constexpr函数模板 (函数模板) |
| [lcm ](https://zh.cppreference.com/w/cpp/numeric/lcm)  <br />  (C++17) | 返回二个整数最小公倍数的constexpr函数模板 (函数模板) |
| [midpoint ](https://zh.cppreference.com/w/cpp/numeric/midpoint)  <br />  (C++20) | 两个数值或指针间的中点 |


## [<functional>](https://zh.cppreference.com/mwiki/index.php?title=cpp/header/functional&variant=zh-cn)

### 类
| [function ](https://zh.cppreference.com/w/cpp/utility/functional/function)  <br />  (C++11) | 包装具有指定函数调用签名的任意类型的可调用对象 (类模板) |
| --- | --- |
| [mem_fn ](https://zh.cppreference.com/w/cpp/utility/functional/mem_fn)  <br />  (C++11) | 从成员指针创建出函数对象 (函数模板) |
| [bad_function_call ](https://zh.cppreference.com/w/cpp/utility/functional/bad_function_call)  <br />  (C++11) | 调用空的 [std::function ](https://zh.cppreference.com/w/cpp/utility/functional/function)  <br />  时抛出的异常 (类) |
| [is_bind_expression ](https://zh.cppreference.com/w/cpp/utility/functional/is_bind_expression)  <br />  (C++11) | 指示对象为 std::bind 表达式，或能被用作这种表达式 (类模板) |
| [is_placeholder ](https://zh.cppreference.com/w/cpp/utility/functional/is_placeholder)  <br />  (C++11) | 表明一个对象是标准占位符，或者可以用作标准占位符 (类模板) |
| [reference_wrapper ](https://zh.cppreference.com/w/cpp/utility/functional/reference_wrapper)  <br />  (C++11) | [可复制构造 (CopyConstructible) 且](https://zh.cppreference.com/w/cpp/named_req/CopyConstructible)  <br />  可复制赋值 (CopyAssignable) 的引用包装器 |


### 函数
| [bind ](https://zh.cppreference.com/w/cpp/utility/functional/bind)  <br />  (C++11) | 绑定一或多个实参到函数对象 (函数模板) |
| --- | --- |
| [refcref ](https://zh.cppreference.com/w/cpp/utility/functional/ref)  <br />  (C11)(C11) | 创建具有从其实参推导的类型的 [std::reference_wrapper ](https://zh.cppreference.com/w/cpp/utility/functional/reference_wrapper)  <br />  (函数模板) |
| [invoke ](https://zh.cppreference.com/w/cpp/utility/functional/invoke)  <br />  (C++17) | 以给定实参调用任意[可调用 (Callable) 对](https://zh.cppreference.com/w/cpp/named_req/Callable)  <br />  象 |


### 函数对象
| 算术运算 |  |
| --- | --- |
| [plus](https://zh.cppreference.com/w/cpp/utility/functional/plus) | 实现 x + y 的函数对象 (类模板) |
| [minus](https://zh.cppreference.com/w/cpp/utility/functional/minus) | 实现 x - y 的函数对象 (类模板) |
| [multiplies](https://zh.cppreference.com/w/cpp/utility/functional/multiplies) | 实现 x * y 的函数对象 (类模板) |
| [divides](https://zh.cppreference.com/w/cpp/utility/functional/divides) | 实现 x / y 的函数对象 (类模板) |
| [modulus](https://zh.cppreference.com/w/cpp/utility/functional/modulus) | 实现 x % y 的函数对象 (类模板) |
| [negate](https://zh.cppreference.com/w/cpp/utility/functional/negate) | 实现 -x 的函数对象 |

| 比较 |  |
| --- | --- |
| [equal_to](https://zh.cppreference.com/w/cpp/utility/functional/equal_to) | 实现 x == y 的函数对象 (类模板) |
| [not_equal_to](https://zh.cppreference.com/w/cpp/utility/functional/not_equal_to) | 实现 x != y 的函数对象 (类模板) |
| [greater](https://zh.cppreference.com/w/cpp/utility/functional/greater) | 实现 x > y 的函数对象 (类模板) |
| [less](https://zh.cppreference.com/w/cpp/utility/functional/less) | 实现 x < y 的函数对象 (类模板) |
| [greater_equal](https://zh.cppreference.com/w/cpp/utility/functional/greater_equal) | 实现 x >= y 的函数对象 (类模板) |
| [less_equal](https://zh.cppreference.com/w/cpp/utility/functional/less_equal) | 实现 x <= y 的函数对象 |

| 概念制约的比较 |  |
| --- | --- |
| [ranges::equal_to ](https://zh.cppreference.com/w/cpp/utility/functional/ranges/equal_to)  <br />  (C++20) | 实现 x == y 的函数对象 (类) |
| [ranges::not_equal_to ](https://zh.cppreference.com/w/cpp/utility/functional/ranges/not_equal_to)  <br />  (C++20) | 实现 x != y 的函数对象 (类) |
| [ranges::greater ](https://zh.cppreference.com/w/cpp/utility/functional/ranges/greater)  <br />  (C++20) | 实现 x > y 的函数对象 (类) |
| [ranges::less ](https://zh.cppreference.com/w/cpp/utility/functional/ranges/less)  <br />  (C++20) | 实现 x < y 的函数对象 (类) |
| [ranges::greater_equal ](https://zh.cppreference.com/w/cpp/utility/functional/ranges/greater_equal)  <br />  (C++20) | 实现 x >= y 的函数对象 (类) |
| [ranges::less_equal ](https://zh.cppreference.com/w/cpp/utility/functional/ranges/less_equal)  <br />  (C++20) | 实现 x <= y 的函数对象 |

| 逻辑运算 |  |
| --- | --- |
| [logical_and](https://zh.cppreference.com/w/cpp/utility/functional/logical_and) | 实现 x && y 的函数对象 (类模板) |
| [logical_or](https://zh.cppreference.com/w/cpp/utility/functional/logical_or) | 实现 x |
| [logical_not](https://zh.cppreference.com/w/cpp/utility/functional/logical_not) | 实现 !x 的函数对象 |

| 逐位运算 |  |
| --- | --- |
| [bit_and](https://zh.cppreference.com/w/cpp/utility/functional/bit_and) | 实现 x & y 的函数对象 (类模板) |
| [bit_or](https://zh.cppreference.com/w/cpp/utility/functional/bit_or) | 实现 x |
| [bit_xor](https://zh.cppreference.com/w/cpp/utility/functional/bit_xor) | 实现 x ^ y 的函数对象 (类模板) |
| [bit_not ](https://zh.cppreference.com/w/cpp/utility/functional/bit_not)  <br />  (C++14) | 实现 ~x 的函数对象 |

| 取反器 |  |
| --- | --- |
| [not_fn ](https://zh.cppreference.com/w/cpp/utility/functional/not_fn)  <br />  (C++17) | 创建返回其保有的函数对象的结果之补的函数对象 |

| 搜索器 |  |
| --- | --- |
| [default_searcher ](https://zh.cppreference.com/w/cpp/utility/functional/default_searcher)  <br />  (C++17) | 标准 C++ 库搜索算法实现 (类模板) |
| [boyer_moore_searcher ](https://zh.cppreference.com/w/cpp/utility/functional/boyer_moore_searcher)  <br />  (C++17) | Boyer-Moore 搜索算法实现 (类模板) |
| [boyer_moore_horspool_searcher ](https://zh.cppreference.com/w/cpp/utility/functional/boyer_moore_horspool_searcher)  <br />  (C++17) | Boyer-Moore-Horspool 搜索算法实现 |


## [<utility>](https://zh.cppreference.com/mwiki/index.php?title=cpp/header/utility&variant=zh-cn)
| [rel_ops](https://zh.cppreference.com/w/cpp/utility/rel_ops/operator_cmp) | 提供自动的比较运算符 |
| --- | --- |

| 类 |  |
| --- | --- |
| [pair](https://zh.cppreference.com/w/cpp/utility/pair) | 实现二元组，即一对值 (类模板) |
| [integer_sequence ](https://zh.cppreference.com/w/cpp/utility/integer_sequence)  <br />  (C++14) | 实现编译时整数数列 |

| 函数 |  |
| --- | --- |
| [swap](https://zh.cppreference.com/w/cpp/algorithm/swap) | 交换两个对象的值 (函数模板) |
| [exchange ](https://zh.cppreference.com/w/cpp/utility/exchange)  <br />  (C++14) | 将实参替换为一个新值，并返回其先前值 (函数模板) |
| [forward ](https://zh.cppreference.com/w/cpp/utility/forward)  <br />  (C++11) | 转发一个函数实参 (函数模板) |
| [move ](https://zh.cppreference.com/w/cpp/utility/move)  <br />  (C++11) | 获得右值引用 (函数模板) |
| [move_if_noexcept ](https://zh.cppreference.com/w/cpp/utility/move_if_noexcept)  <br />  (C++11) | 若移动构造函数不抛出则获得右值引用 (函数模板) |
| [as_const ](https://zh.cppreference.com/w/cpp/utility/as_const)  <br />  (C++17) | 获得到其实参的 const 引用 (函数模板) |
| [declval ](https://zh.cppreference.com/w/cpp/utility/declval)  <br />  (C++11) | 获取到其实参的引用，用于不求值语境中 (函数模板) |
| [make_pair](https://zh.cppreference.com/w/cpp/utility/pair/make_pair) | 创建一个 pair 对象，其类型根据各实参类型定义 |


## [<iterator>](https://zh.cppreference.com/w/cpp/header/iterator)
| 迭代器概念 |  |
| --- | --- |
| [readable](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/readable&action=edit&redlink=1) | 指定类型通过应用运算符 * 可读 |
| [writable](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/writable&action=edit&redlink=1) | 指定可向迭代器所引用的对象写入值 |
| [weakly_incrementable](https://zh.cppreference.com/w/cpp/iterator/weakly_incrementable) | 指定 [semiregular ](https://zh.cppreference.com/w/cpp/concepts/semiregular)  <br />  类型能以前后自增运算符自增 |
| [incrementable](https://zh.cppreference.com/w/cpp/iterator/incrementable) | 指定 [weakly_incrementable ](https://zh.cppreference.com/w/cpp/iterator/weakly_incrementable)  <br />  类型上的自增操作保持相等性，而且该类型为 equality_comparable |
| [input_or_output_iterator](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/input_or_output_iterator&action=edit&redlink=1) | 指定该类型对象可以自增且可以解引用 |
| [sentinel_for](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/sentinel_for&action=edit&redlink=1) | 指定类型为某个 [input_or_output_iterator ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/input_or_output_iterator&action=edit&redlink=1)  <br />  类型的哨位类型 |
| [sized_sentinel_for](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/sized_sentinel_for&action=edit&redlink=1) | 指定可对一个迭代器和一个哨位应用 - 运算符，以在常数时间计算其距离 |
| [input_iterator](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/input_iterator&action=edit&redlink=1) | 指定类型为输入迭代器，即可读取其所引用的值，且可前/后自增 |
| [output_iterator](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/output_iterator&action=edit&redlink=1) | 指定类型为给定的值类型的输出迭代器，即可向其写入该类型的值，且可前/后自增 |
| [forward_iterator](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/forward_iterator&action=edit&redlink=1) | 指定 [input_iterator ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/input_iterator&action=edit&redlink=1)  <br />  为向前迭代器，支持相等比较与多趟操作 |
| [bidirectional_iterator](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/bidirectional_iterator&action=edit&redlink=1) | 指定 [forward_iterator ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/forward_iterator&action=edit&redlink=1)  <br />  为双向迭代器，支持向后移动 |
| [random_access_iterator](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/random_access_iterator&action=edit&redlink=1) | 指定 [bidirectional_iterator ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/bidirectional_iterator&action=edit&redlink=1)  <br />  为随机访问迭代器，支持常数时间内的前进和下标访问 |
| [contiguous_iteartor](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/contiguous_iteartor&action=edit&redlink=1) | 指定 [random_access_iterator ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/random_access_iterator&action=edit&redlink=1)  <br />  为连续迭代器，指代内存中连续相接的元素 |

| 原语 |  |
| --- | --- |
| [iterator_traits](https://zh.cppreference.com/w/cpp/iterator/iterator_traits) | 为迭代器各项性质提供统一接口 (类模板) |
| [input_iterator_tag ](https://zh.cppreference.com/w/cpp/iterator/iterator_tags)  <br />  output_iterator_tag forward_iterator_tag bidirectional_iterator_tag random_access_iterator_tag contiguous_iterator_tag | 用于指示迭代器类别的空类类型 (类) |
| 适配器 |  |
| [reverse_iterator](https://zh.cppreference.com/w/cpp/iterator/reverse_iterator) | 逆序遍历的迭代器适配器 (类模板) |
| [move_iterator ](https://zh.cppreference.com/w/cpp/iterator/move_iterator)  <br />  (C++11) | 解引用结果为右值引用的迭代器适配器 (类模板) |
| [move_sentinel ](https://zh.cppreference.com/w/cpp/iterator/move_sentinel)  <br />  (C++20) | 用于 [std::move_iterator ](https://zh.cppreference.com/w/cpp/iterator/move_iterator)  <br />  的哨位适配器 (类模板) |
| [common_iterator ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/common_iterator&action=edit&redlink=1)  <br />  (C++20) | 适配一个迭代器类型及其哨位为一个公共迭代器类型 (类模板) |
| [default_sentinel_t ](https://zh.cppreference.com/w/cpp/iterator/default_sentinel_t)  <br />  (C++20) | 用于知晓其边界的迭代器的默认哨位 (类) |
| [counted_iterator ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/counted_iterator&action=edit&redlink=1)  <br />  (C++20) | 对到范围结尾距离进行跟踪的迭代器适配器 (类模板) |
| [unreachable_sentinel_t ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/unreachable_sentinel_t&action=edit&redlink=1)  <br />  (C++20) | 始终与任何 [weakly_incrementable ](https://zh.cppreference.com/w/cpp/iterator/weakly_incrementable)  <br />  类型比较都不相等的哨位 (类) |
| [back_insert_iterator](https://zh.cppreference.com/w/cpp/iterator/back_insert_iterator) | 用于在容器尾部插入的迭代器适配器 (类模板) |
| [front_insert_iterator](https://zh.cppreference.com/w/cpp/iterator/front_insert_iterator) | 用于在容器头部插入的迭代器适配器 (类模板) |
| [insert_iterator](https://zh.cppreference.com/w/cpp/iterator/insert_iterator) | 用于插入容器的迭代器适配器 (类模板) |
| 流迭代器 |  |
| [istream_iterator](https://zh.cppreference.com/w/cpp/iterator/istream_iterator) | 从 [std::basic_istream ](https://zh.cppreference.com/w/cpp/io/basic_istream)  <br />  读取的输入迭代器 (类模板) |
| [ostream_iterator](https://zh.cppreference.com/w/cpp/iterator/ostream_iterator) | 写入 [std::basic_ostream ](https://zh.cppreference.com/w/cpp/io/basic_ostream)  <br />  的输出迭代器 (类模板) |
| [istreambuf_iterator](https://zh.cppreference.com/w/cpp/iterator/istreambuf_iterator) | 从 [std::basic_streambuf ](https://zh.cppreference.com/w/cpp/io/basic_streambuf)  <br />  读取的输入迭代器 (类模板) |
| [ostreambuf_iterator](https://zh.cppreference.com/w/cpp/iterator/ostreambuf_iterator) | 写入 [std::basic_streambuf ](https://zh.cppreference.com/w/cpp/io/basic_streambuf)  <br />  的输出迭代器 (类模板) |
| 定制点对象 |  |
| 定义于命名空间 std::ranges |  |
| [iter_move](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/ranges/iter_move&action=edit&redlink=1) | 将解引用迭代器的结果转型为其关联的右值引用类型 (定制点对象) |
| [iter_swap](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/ranges/iter_swap&action=edit&redlink=1) | 交换两个可解引用对象所引用的值 (定制点对象) |

| 函数 |  |
| --- | --- |
| 适配器 |  |
| [make_reverse_iterator ](https://zh.cppreference.com/w/cpp/iterator/make_reverse_iterator)  <br />  (C++14) | 创建拥有从实参推出的类型的 [std::reverse_iterator ](https://zh.cppreference.com/w/cpp/iterator/reverse_iterator)  <br />  (函数模板) |
| [make_move_iterator ](https://zh.cppreference.com/w/cpp/iterator/make_move_iterator)  <br />  (C++11) | 创建拥有从实参推出的类型的 [std::move_iterator ](https://zh.cppreference.com/w/cpp/iterator/move_iterator)  <br />  (函数模板) |
| [front_inserter](https://zh.cppreference.com/w/cpp/iterator/front_inserter) | 创建拥有从实参推出的类型的 [std::front_insert_iterator ](https://zh.cppreference.com/w/cpp/iterator/front_insert_iterator)  <br />  (函数模板) |
| [back_inserter](https://zh.cppreference.com/w/cpp/iterator/back_inserter) | 创建拥有从实参推出的类型的 [std::back_insert_iterator ](https://zh.cppreference.com/w/cpp/iterator/back_insert_iterator)  <br />  (函数模板) |
| [inserter](https://zh.cppreference.com/w/cpp/iterator/inserter) | 创建拥有从实参推出的类型的 [std::insert_iterator](https://zh.cppreference.com/w/cpp/iterator/insert_iterator) |
| 操作 |  |
| [advance](https://zh.cppreference.com/w/cpp/iterator/advance) | 令迭代器前进给定的距离 (函数模板) |
| [distance](https://zh.cppreference.com/w/cpp/iterator/distance) | 返回两个迭代器间的距离 (函数模板) |
| [next ](https://zh.cppreference.com/w/cpp/iterator/next)  <br />  (C++11) | 令迭代器自增 (函数模板) |
| [prev ](https://zh.cppreference.com/w/cpp/iterator/prev)  <br />  (C++11) | 令迭代器自减 (函数模板) |
| [ranges::advance ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/ranges/advance&action=edit&redlink=1)  <br />  (C++20) | 令迭代器前进给定的距离或到给定的边界 (niebloid) |
| [ranges::distance ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/ranges/distance&action=edit&redlink=1)  <br />  (C++20) | 返回迭代器与哨位间的距离，或范围起始与结尾间的距离 (niebloid) |
| [ranges::next ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/ranges/next&action=edit&redlink=1)  <br />  (C++20) | 自增迭代器给定的距离或到边界 (niebloid) |
| [ranges::prev ](https://zh.cppreference.com/mwiki/index.php?title=cpp/iterator/ranges/prev&action=edit&redlink=1)  <br />  (C++20) | 自减迭代器给定的距离或到边界 (niebloid) |
| 范围访问 |  |
| [begin ](https://zh.cppreference.com/w/cpp/iterator/begin)  <br />  cbegin | 返回指向容器或数组起始的迭代器 (函数模板) |
| [end ](https://zh.cppreference.com/w/cpp/iterator/end)  <br />  cend | 返回指向容器或数组结尾的迭代器 (函数模板) |
| [rbegin ](https://zh.cppreference.com/w/cpp/iterator/rbegin)  <br />  crbegin | 返回指向一个容器或数组的逆向迭代器 (函数模板) |
| [rend ](https://zh.cppreference.com/w/cpp/iterator/rend)  <br />  crend | 返回容器或数组的逆向尾迭代器 (函数模板) |
| [size ](https://zh.cppreference.com/w/cpp/iterator/size)  <br />   ssize | 返回容器或数组的大小 (函数模板) |
| [empty ](https://zh.cppreference.com/w/cpp/iterator/empty)  <br />  (C++17) | 检查容器是否为空 (函数模板) |
| [data ](https://zh.cppreference.com/w/cpp/iterator/data)  <br />  (C++17) | 获得指向底层数组的指针 |


# 动态内存
| 函数 |  |
| --- | --- |
| [operator newoperator new[]](https://zh.cppreference.com/w/cpp/memory/new/operator_new) | 分配函数 (函数) |
| [operator deleteoperator delete[]](https://zh.cppreference.com/w/cpp/memory/new/operator_delete) | 解分配函数 (函数) |
| [get_new_handler ](https://zh.cppreference.com/w/cpp/memory/new/get_new_handler)  <br />  (C++11) | 获得当前的new处理函数 (函数) |
| [set_new_handler](https://zh.cppreference.com/w/cpp/memory/new/set_new_handler) | 注册一个new处理函数 (函数) |
| [launder ](https://zh.cppreference.com/w/cpp/utility/launder)  <br />  (C++17) | 指针优化屏障 (函数模板) |
| 类 |  |
| [bad_alloc](https://zh.cppreference.com/w/cpp/memory/new/bad_alloc) | 内存分配失败时抛出的异常 (类) |
| [bad_array_new_length ](https://zh.cppreference.com/w/cpp/memory/new/bad_array_new_length)  <br />  (C++11) | 在分配有非法长度的数组时抛出的异常 (类) |
| [nothrow_t](https://zh.cppreference.com/w/cpp/memory/new/nothrow_t) | 用于选择不抛出分配函数的标签类型 (类) |
| [align_val_t ](https://zh.cppreference.com/w/cpp/memory/new/align_val_t)  <br />  (C++17) | 用于向带对齐分配及解分配函数传递对齐值的类型 (类) |
| [destroying_delete_t ](https://zh.cppreference.com/w/cpp/memory/new/destroying_delete_t)  <br />  (C++20) | 用于鉴别operator delete的销毁删除重载的标签类型 (类) |
| 类型 |  |
| [new_handler](https://zh.cppreference.com/w/cpp/memory/new/new_handler) | new处理函数的函数指针类型 (typedef) |
| 对象 |  |
| [nothrow](https://zh.cppreference.com/w/cpp/memory/new/nothrow) | 用于选择不抛出分配函数的nothrow_t类型对象 (常量) |
| [hardware_destructive_interference_size ](https://zh.cppreference.com/w/cpp/thread/hardware_destructive_interference_size)  <br />  hardware_constructive_interference_size | 避免假共享的最小偏移 促使真共享的最大偏移 |



### 智能指针
| [unique_ptr ](https://zh.cppreference.com/w/cpp/memory/unique_ptr)  <br />  (C++11) | 拥有独有对象所有权语义的智能指针 (类模板) |
| --- | --- |
| [shared_ptr ](https://zh.cppreference.com/w/cpp/memory/shared_ptr)  <br />  (C++11) | 拥有共享对象所有权语义的智能指针 (类模板) |
| [weak_ptr ](https://zh.cppreference.com/w/cpp/memory/weak_ptr)  <br />  (C++11) | 到 [std::shared_ptr ](https://zh.cppreference.com/w/cpp/memory/shared_ptr)  <br />  所管理对象的弱引用 |


### 未初始化存储
| [uninitialized_copy](https://zh.cppreference.com/w/cpp/memory/uninitialized_copy) | 将范围内的对象复制到未初始化的内存区域 (函数模板) |
| --- | --- |
| [uninitialized_copy_n ](https://zh.cppreference.com/w/cpp/memory/uninitialized_copy_n)  <br />  (C++11) | 将指定数量的对象复制到未初始化的内存区域 (函数模板) |
| [uninitialized_fill](https://zh.cppreference.com/w/cpp/memory/uninitialized_fill) | 复制一个对象到以范围定义的未初始化内存区域 (函数模板) |
| [uninitialized_fill_n](https://zh.cppreference.com/w/cpp/memory/uninitialized_fill_n) | 复制一个对象到以起点和计数定义的未初始化内存区域 (函数模板) |
| [uninitialized_move ](https://zh.cppreference.com/w/cpp/memory/uninitialized_move)  <br />  (C++17) | 移动一个范围的对象到未初始化的内存区域 (函数模板) |
| [uninitialized_move_n ](https://zh.cppreference.com/w/cpp/memory/uninitialized_move_n)  <br />  (C++17) | 移动一定数量对象到未初始化内存区域 (函数模板) |
| [uninitialized_default_construct ](https://zh.cppreference.com/w/cpp/memory/uninitialized_default_construct)  <br />  (C++17) | 在范围所定义的未初始化的内存区域以[默认初始化构](https://zh.cppreference.com/w/cpp/language/default_initialization)  <br />  造对象 (函数模板) |
| [uninitialized_default_construct_n ](https://zh.cppreference.com/w/cpp/memory/uninitialized_default_construct_n)  <br />  (C++17) | 在起始和计数所定义的未初始化内存区域用[默认初始化构](https://zh.cppreference.com/w/cpp/language/default_initialization)  <br />  造对象 (函数模板) |
| [uninitialized_value_construct ](https://zh.cppreference.com/w/cpp/memory/uninitialized_value_construct)  <br />  (C++17) | 在范围所定义的未初始化内存中用[值初始化构](https://zh.cppreference.com/w/cpp/language/value_initialization)  <br />  造对象 (函数模板) |
| [uninitialized_value_construct_n ](https://zh.cppreference.com/w/cpp/memory/uninitialized_value_construct_n)  <br />  (C++17) | 在起始和计数所定义的未初始化内存区域以[值初始化构](https://zh.cppreference.com/w/cpp/language/value_initialization)  <br />  造对象 (函数模板) |
| [destroy_at ](https://zh.cppreference.com/w/cpp/memory/destroy_at)  <br />  (C++17) | 销毁在给定地址的对象 (函数模板) |
| [destroy ](https://zh.cppreference.com/w/cpp/memory/destroy)  <br />  (C++17) | 销毁一个范围中的对象 (函数模板) |
| [destroy_n ](https://zh.cppreference.com/w/cpp/memory/destroy_n)  <br />  (C++17) | 销毁范围中一定数量的对象 |


### 分配器
| [allocator](https://zh.cppreference.com/w/cpp/memory/allocator) | 默认的分配器 (类模板) |
| --- | --- |
| [allocator_traits ](https://zh.cppreference.com/w/cpp/memory/allocator_traits)  <br />  (C++11) | 提供关于分配器类型的信息 (类模板) |
| [allocator_arg_t ](https://zh.cppreference.com/w/cpp/memory/allocator_arg_t)  <br />  (C++11) | 标签类型，用于选择具分配器的构造函数重载 (类) |
| [allocator_arg ](https://zh.cppreference.com/w/cpp/memory/allocator_arg)  <br />  (C++11) | 用于选择具分配器的构造函数的 [std::allocator_arg_t ](https://zh.cppreference.com/w/cpp/memory/allocator_arg_t)  <br />  对象 (常量) |
| [uses_allocator ](https://zh.cppreference.com/w/cpp/memory/uses_allocator)  <br />  (C++11) | 检查指定的类型是否支持使用分配器的构造 |


# 数值

## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/random)
| 均匀随机位生成器要求 |  |
| --- | --- |
| [uniform_random_bit_generator ](https://zh.cppreference.com/w/cpp/numeric/random/uniform_random_bit_generator)  <br />  (C++20) | 指定类型具备作为均匀随机位生成器的资格 (概念) |
| 随机数引擎 |  |
| [linear_congruential_engine ](https://zh.cppreference.com/w/cpp/numeric/random/linear_congruential_engine)  <br />  (C++11) | 实现[线性同余演](https://en.wikipedia.org/wiki/Linear_congruential_generator)  <br />  算法 (类模板) |
| [mersenne_twister_engine ](https://zh.cppreference.com/w/cpp/numeric/random/mersenne_twister_engine)  <br />  (C++11) | 实现[梅森缠绕器演](https://en.wikipedia.org/wiki/Mersenne_twister)  <br />  算法 (类模板) |
| [subtract_with_carry_engine ](https://zh.cppreference.com/w/cpp/numeric/random/subtract_with_carry_engine)  <br />  (C++11) | 实现带进位减（一种[延迟斐波那契）](https://en.wikipedia.org/wiki/Lagged_Fibonacci_generator)  <br />  演算法 (类模板) |
| 随机数引擎适配器 |  |
| [discard_block_engine ](https://zh.cppreference.com/w/cpp/numeric/random/discard_block_engine)  <br />  (C++11) | 舍弃随机数引擎的某些输出 (类模板) |
| [independent_bits_engine ](https://zh.cppreference.com/w/cpp/numeric/random/independent_bits_engine)  <br />  (C++11) | 将一个随机数引擎的输出打包为指定位数的块 (类模板) |
| [shuffle_order_engine ](https://zh.cppreference.com/w/cpp/numeric/random/shuffle_order_engine)  <br />  (C++11) | 以不同顺序发送一个随机数引擎的输出 |

| 非确定随机数 |  |
| --- | --- |
| [random_device ](https://zh.cppreference.com/w/cpp/numeric/random/random_device)  <br />  (C++11) | 使用硬体熵源的非确定随机数生成器 (类) |
| 均匀分布 |  |
| [uniform_int_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/uniform_int_distribution)  <br />  (C++11) | 产生在一个范围上均匀分布的整数值 (类模板) |
| [uniform_real_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/uniform_real_distribution)  <br />  (C++11) | 产生在一个范围上均匀分布的实数值 (类模板) |
| 伯努利分布 |  |
| [bernoulli_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/bernoulli_distribution)  <br />  (C++11) | 产生[伯努利分布上](https://en.wikipedia.org/wiki/Bernoulli_distribution)  <br />  的bool值。 (类) |
| [binomial_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/binomial_distribution)  <br />  (C++11) | 产生[二项分布上](https://en.wikipedia.org/wiki/Binomial_distribution)  <br />  的整数值。 (类模板) |
| [negative_binomial_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/negative_binomial_distribution)  <br />  (C++11) | 产生[负二项分布上](https://en.wikipedia.org/wiki/Negative_binomial_distribution)  <br />  的整数值。 (类模板) |
| [geometric_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/geometric_distribution)  <br />  (C++11) | 产生[几何分布上](https://en.wikipedia.org/wiki/Geometric_distribution)  <br />  的整数值。 (类模板) |
| 泊松分布 |  |
| [poisson_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/poisson_distribution)  <br />  (C++11) | 产生[泊松分布上](https://en.wikipedia.org/wiki/Poisson_distribution)  <br />  的整数值。 (类模板) |
| [exponential_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/exponential_distribution)  <br />  (C++11) | 产生[指数分布上](https://en.wikipedia.org/wiki/Exponential_distribution)  <br />  的实数值。 (类模板) |
| [gamma_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/gamma_distribution)  <br />  (C++11) | 产生[Γ分布上](https://en.wikipedia.org/wiki/Gamma_distribution)  <br />  的实数值 (类模板) |
| [weibull_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/weibull_distribution)  <br />  (C++11) | 产生[威布尔分布上](https://en.wikipedia.org/wiki/Weibull_distribution)  <br />  的实数值。 (类模板) |
| [extreme_value_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/extreme_value_distribution)  <br />  (C++11) | 产生[极值分布上](https://en.wikipedia.org/wiki/Generalized_extreme_value_distribution)  <br />  的实数值。 (类模板) |
| 正态分布 |  |
| [normal_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/normal_distribution)  <br />  (C++11) | 产生[标准正态（高斯）分布上](https://en.wikipedia.org/wiki/Normal_distribution)  <br />  的实数值。 (类模板) |
| [lognormal_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/lognormal_distribution)  <br />  (C++11) | 产生[对数正态分布上](https://en.wikipedia.org/wiki/Lognormal_distribution)  <br />  的实数值。 (类模板) |
| [chi_squared_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/chi_squared_distribution)  <br />  (C++11) | 产生[χ 2分布上上](https://en.wikipedia.org/wiki/Chi-squared_distribution)  <br />  的实数值。 (类模板) |
| [cauchy_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/cauchy_distribution)  <br />  (C++11) | 产生[柯西分布上](https://en.wikipedia.org/wiki/Cauchy_distribution)  <br />  的实数值。 (类模板) |
| [fisher_f_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/fisher_f_distribution)  <br />  (C++11) | 产生[费舍尔F分布上](https://en.wikipedia.org/wiki/F-distribution)  <br />  的实数值。 (类模板) |
| [student_t_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/student_t_distribution)  <br />  (C++11) | 产生[学生t分布上](https://en.wikipedia.org/wiki/Student%27s_t-distribution)  <br />  的实数值。 (类模板) |
| 采样分布 |  |
| [discrete_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/discrete_distribution)  <br />  (C++11) | 产生离散分布上的随机整数。 (类模板) |
| [piecewise_constant_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/piecewise_constant_distribution)  <br />  (C++11) | 产生分布在常子区间上的实数值。 (类模板) |
| [piecewise_linear_distribution ](https://zh.cppreference.com/w/cpp/numeric/random/piecewise_linear_distribution)  <br />  (C++11) | 产生分布在定义的子区间上的实数值。 (类模板) |
| 工具 |  |
| [generate_canonical ](https://zh.cppreference.com/w/cpp/numeric/random/generate_canonical)  <br />  (C++11) | 给定精度的均匀分布在[0, 1)上的实数值 (函数模板) |
| [seed_seq ](https://zh.cppreference.com/w/cpp/numeric/random/seed_seq)  <br />  (C++11) | 通用的消除偏差的混淆种子序列生成器 (类) |


## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/complex)
| [real](https://zh.cppreference.com/w/cpp/numeric/complex/real2) | 返回实部 (函数模板) |
| --- | --- |
| [imag](https://zh.cppreference.com/w/cpp/numeric/complex/imag2) | 返回虚部 (函数模板) |
| [abs (std::complex)](https://zh.cppreference.com/w/cpp/numeric/complex/abs) | 返回复数的模 (函数模板) |
| [arg](https://zh.cppreference.com/w/cpp/numeric/complex/arg) | 返回辐角 (函数模板) |
| [norm](https://zh.cppreference.com/w/cpp/numeric/complex/norm) | 返回模(范数)的平方 (函数模板) |
| [conj](https://zh.cppreference.com/w/cpp/numeric/complex/conj) | 返回复共轭 (函数模板) |
| [proj ](https://zh.cppreference.com/w/cpp/numeric/complex/proj)  <br />  (C++11) | 返回到黎曼球上的投影 (函数模板) |
| [polar](https://zh.cppreference.com/w/cpp/numeric/complex/polar) | 从模和辐角构造复数 |


## [  <br />    <br />  ](https://zh.cppreference.com/mwiki/index.php?title=cpp/header/ratio&variant=zh-hans)
| 算术 |  |
| --- | --- |
| [ratio_add ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_add)  <br />  (C++11) | 在编译时相加两个 ratio 对象 (别名模板) |
| [ratio_subtract ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_subtract)  <br />  (C++11) | 在编译时相减两个 ratio 对象 (别名模板) |
| [ratio_multiply ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_multiply)  <br />  (C++11) | 在编译时相乘两个 ratio 对象 (别名模板) |
| [ratio_divide ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_divide)  <br />  (C++11) | 在编译时相除两个 ratio 对象 |

| 比较 |  |
| --- | --- |
| [ratio_equal ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_equal)  <br />  (C++11) | 在编译时比较两个 ratio 对象的相等性 (类模板) |
| [ratio_not_equal ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_not_equal)  <br />  (C++11) | 在编译时比较两个 ratio 对象的不相等性 (类模板) |
| [ratio_less ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_less)  <br />  (C++11) | 在编译时比较两个 ratio 对象的小于关系 (类模板) |
| [ratio_less_equal ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_less_equal)  <br />  (C++11) | 在编译时比较两个 ratio 对象的小于或等于关系 (类模板) |
| [ratio_greater ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_greater)  <br />  (C++11) | 在编译时比较两个 ratio 对象的大于关系 (类模板) |
| [ratio_greater_equal ](https://zh.cppreference.com/w/cpp/numeric/ratio/ratio_greater_equal)  <br />  (C++11) | 在编译时比较两个 ratio 对象的大于或等于关系 |


## [  <br />    <br />  ](https://zh.cppreference.com/mwiki/index.php?title=cpp/header/chrono&variant=zh-hans)
**类**

| [duration ](https://zh.cppreference.com/w/cpp/chrono/duration)  <br />  (C++11) | 时间区间 (类模板) |
| --- | --- |
| [system_clock ](https://zh.cppreference.com/w/cpp/chrono/system_clock)  <br />  (C++11) | 来自系统范畴实时时钟的挂钟时间 (类) |
| [steady_clock ](https://zh.cppreference.com/w/cpp/chrono/steady_clock)  <br />  (C++11) | 决不会调整的单调时钟 (类) |
| [high_resolution_clock ](https://zh.cppreference.com/w/cpp/chrono/high_resolution_clock)  <br />  (C++11) | 拥有可用的最短嘀嗒周期的时钟 (类) |
| [time_point ](https://zh.cppreference.com/w/cpp/chrono/time_point)  <br />  (C++11) | 时间中的点 (类模板) |
| [treat_as_floating_point](https://zh.cppreference.com/w/cpp/chrono/treat_as_floating_point) | 指示时长可转换为拥有不同嘀嗒周期的时长 (类模板) |
| [duration_values](https://zh.cppreference.com/w/cpp/chrono/duration_values) | 构造给定类型的嘀嗒计数的零、最小及最大值 |


# 异常

## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/exception)
| 类 |  |
| --- | --- |
| [exception](https://zh.cppreference.com/w/cpp/error/exception) | 标准库组件抛出的各种异常的基类 (类) |
| [nested_exception ](https://zh.cppreference.com/w/cpp/error/nested_exception)  <br />  (C++11) | 用于捕获并存储当前异常的混入类型 (类) |
| [bad_exception](https://zh.cppreference.com/w/cpp/error/bad_exception) | 当[std::current_exception无](https://zh.cppreference.com/w/cpp/error/current_exception)  <br />  法复制异常对象时抛出的异常 (类) |
| typedef |  |
| [terminate_handler](https://zh.cppreference.com/w/cpp/error/terminate_handler) | [std::terminate所](https://zh.cppreference.com/w/cpp/error/terminate)  <br />  调用的函数类型 (typedef) |
| [exception_ptr ](https://zh.cppreference.com/w/cpp/error/exception_ptr)  <br />  (C++11) | 用于处理异常对象的共享指针类型 (typedef) |
| 函数 |  |
| [uncaught_exceptions](https://zh.cppreference.com/w/cpp/error/uncaught_exception) | 检查当前是否正在进行异常处理 (函数) |
| [make_exception_ptr ](https://zh.cppreference.com/w/cpp/error/make_exception_ptr)  <br />  (C++11) | 从异常对象创建一个[std::exception_ptr ](https://zh.cppreference.com/w/cpp/error/exception_ptr)  <br />  (函数模板) |
| [current_exception ](https://zh.cppreference.com/w/cpp/error/current_exception)  <br />  (C++11) | 捕获当前异常到[std::exception_ptr之](https://zh.cppreference.com/w/cpp/error/exception_ptr)  <br />  中 (函数) |
| [rethrow_exception ](https://zh.cppreference.com/w/cpp/error/rethrow_exception)  <br />  (C++11) | 从一个[std::exception_ptr抛](https://zh.cppreference.com/w/cpp/error/exception_ptr)  <br />  出异常 (函数) |
| [throw_with_nested ](https://zh.cppreference.com/w/cpp/error/throw_with_nested)  <br />  (C++11) | 抛出实参，带上混入的[std::nested_exception ](https://zh.cppreference.com/w/cpp/error/nested_exception)  <br />  (函数模板) |
| [rethrow_if_nested ](https://zh.cppreference.com/w/cpp/error/rethrow_if_nested)  <br />  (C++11) | 抛出[std::nested_exception中](https://zh.cppreference.com/w/cpp/error/nested_exception)  <br />  的异常 (函数模板) |
| [terminate](https://zh.cppreference.com/w/cpp/error/terminate) | 异常处理失败时调用的函数 (函数) |
| [get_terminate ](https://zh.cppreference.com/w/cpp/error/get_terminate)  <br />  (C++11) | 获得当前的terminate_handler (函数) |
| [set_terminate](https://zh.cppreference.com/w/cpp/error/set_terminate) | 更改将被[std::terminate调](https://zh.cppreference.com/w/cpp/error/terminate)  <br />  用的函数 |


## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/stdexcept)
| [logic_error](https://zh.cppreference.com/w/cpp/error/logic_error) | 指示违背逻辑前条件或类不变式的异常类 (类) |
| --- | --- |
| [invalid_argument](https://zh.cppreference.com/w/cpp/error/invalid_argument) | 报告无效实参的异常类 (类) |
| [domain_error](https://zh.cppreference.com/w/cpp/error/domain_error) | 报告定义域错误的异常类 (类) |
| [length_error](https://zh.cppreference.com/w/cpp/error/length_error) | 报告试图超出最大允许大小的异常类 (类) |
| [out_of_range](https://zh.cppreference.com/w/cpp/error/out_of_range) | 报告实参处于预期范围之外的异常类 (类) |
| [runtime_error](https://zh.cppreference.com/w/cpp/error/runtime_error) | 指示只可于运行时检测的条件的异常类 (类) |
| [range_error](https://zh.cppreference.com/w/cpp/error/range_error) | 报告内部计算中值域错误的异常类 (类) |
| [overflow_error](https://zh.cppreference.com/w/cpp/error/overflow_error) | 报告算术上溢的异常类 (类) |
| [underflow_error](https://zh.cppreference.com/w/cpp/error/underflow_error) | 报告算术下溢的异常类 |


## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/regex)
| 类型 |  |
| --- | --- |
| 定义于命名空间 std::regex_constants |  |
| [syntax_option_type ](https://zh.cppreference.com/w/cpp/regex/syntax_option_type)  <br />  (C++11) | 控制正则表达式行为的通用选项 (typedef) |
| [match_flag_type ](https://zh.cppreference.com/w/cpp/regex/match_flag_type)  <br />  (C++11) | 特定于匹配的选项 (typedef) |
| [error_type ](https://zh.cppreference.com/w/cpp/regex/error_type)  <br />  (C++11) | 描述不同类型的匹配错误 |

**类**

| [basic_regex ](https://zh.cppreference.com/w/cpp/regex/basic_regex)  <br />  (C++11) | 正则表达式对象 (类模板) |
| --- | --- |
| [sub_match ](https://zh.cppreference.com/w/cpp/regex/sub_match)  <br />  (C++11) | 标识子表达式所匹配的字元序列 (类模板) |
| [match_results ](https://zh.cppreference.com/w/cpp/regex/match_results)  <br />  (C++11) | 标识一个正则表达式匹配，包含所有子表达式匹配 (类模板) |
| [regex_iterator ](https://zh.cppreference.com/w/cpp/regex/regex_iterator)  <br />  (C++11) | 迭代一个字元序列中的所有正则表达式匹配 (类模板) |
| [regex_token_iterator ](https://zh.cppreference.com/w/cpp/regex/regex_token_iterator)  <br />  (C++11) | 迭代给定字元串中的所有正则表达式匹配中的指定子表达式，或迭代未匹配的子字元串 (类模板) |
| [regex_error ](https://zh.cppreference.com/w/cpp/regex/regex_error)  <br />  (C++11) | 报告正则表达式库生成的错误 (类) |
| [regex_traits ](https://zh.cppreference.com/w/cpp/regex/regex_traits)  <br />  (C++11) | 提供正则表达式库所需的关于字元类型的元信息 (类模板) |

**函数**

| 演算法 |  |
| --- | --- |
| [regex_match ](https://zh.cppreference.com/w/cpp/regex/regex_match)  <br />  (C++11) | 尝试匹配一个正则表达式到整个字元序列 (函数模板) |
| [regex_search ](https://zh.cppreference.com/w/cpp/regex/regex_search)  <br />  (C++11) | 尝试匹配一个正则表达式到字元序列的任何部分 (函数模板) |
| [regex_replace ](https://zh.cppreference.com/w/cpp/regex/regex_replace)  <br />  (C++11) | 以格式化的替换文本来替换正则表达式匹配的出现位置 |


# 线程

**class  **[**thread**](https://zh.cppreference.com/w/cpp/thread/thread)  <br />  线程在构造关联的线程对象时立即开始执行（等待任何OS调度延迟），从提供给作为[构造函数参数](https://zh.cppreference.com/w/cpp/thread/thread/thread)的顶层函数开始

| 观察器 |  |
| --- | --- |
| [joinable](https://zh.cppreference.com/w/cpp/thread/thread/joinable) | 检查线程是否可合并，即潜在地运行于平行环境中 (公开成员函数) |
| [get_id](https://zh.cppreference.com/w/cpp/thread/thread/get_id) | 返回线程的 id (公开成员函数) |
| [native_handle](https://zh.cppreference.com/w/cpp/thread/thread/native_handle) | 返回底层实现定义的线程句柄 (公开成员函数) |
| [hardware_concurrency ](https://zh.cppreference.com/w/cpp/thread/thread/hardware_concurrency)  <br />  [静态] | 返回实现支持的并发线程数 (公开静态成员函数) |
| 操作 |  |
| [join](https://zh.cppreference.com/w/cpp/thread/thread/join) | 等待线程完成其执行 (公开成员函数) |
| [detach](https://zh.cppreference.com/w/cpp/thread/thread/detach) | 容许线程从线程句柄独立开来执行 (公开成员函数) |
| [swap](https://zh.cppreference.com/w/cpp/thread/thread/swap) | 交换二个 thread 对象 |

| 函数 |  |
| --- | --- |
| [std::swap (std::thread) ](https://zh.cppreference.com/w/cpp/thread/thread/swap2)  <br />  (C++11) | 特化[std::swap演](https://zh.cppreference.com/w/cpp/algorithm/swap)  <br />  算法 (函数模板) |
| [std::hash ](https://zh.cppreference.com/w/cpp/thread/thread/id/hash)  <br />  std::thread::id | 特化[std::hash ](https://zh.cppreference.com/w/cpp/utility/hash)  <br />  (类模板特化) |
| 命名空间 |  |
| this_thread | 提供访问当前执行线程的函数 |
| 函数 |  |
| 定义于命名空间 std::this_thread |  |
| [yield ](https://zh.cppreference.com/w/cpp/thread/yield)  <br />  (C++11) | 建议实现重新调度各执行线程 (函数) |
| [get_id ](https://zh.cppreference.com/w/cpp/thread/get_id)  <br />  (C++11) | 返回当前线程的线程id (函数) |
| [sleep_for ](https://zh.cppreference.com/w/cpp/thread/sleep_for)  <br />  (C++11) | 使当前线程的执行停止指定的时间段 (函数) |
| [sleep_until ](https://zh.cppreference.com/w/cpp/thread/sleep_until)  <br />  (C++11) | 使当前线程的执行停止直到指定的时间点 |


## [  <br />    <br />  ](https://zh.cppreference.com/w/cpp/header/atomic)
| 类 |  |
| --- | --- |
| [atomic ](https://zh.cppreference.com/w/cpp/atomic/atomic)  <br />  (C++11) | atomic 类模板及其针对布尔、整型和指针类型的特化 (类模板) |
| [atomic_ref ](https://zh.cppreference.com/w/cpp/atomic/atomic_ref)  <br />  (C++20) | 提供非原子对象上的原子操作 (类模板) |
| [atomic_flag ](https://zh.cppreference.com/w/cpp/atomic/atomic_flag)  <br />  (C++11) | 免锁的布尔原子类型 (类) |
| [memory_order ](https://zh.cppreference.com/w/cpp/atomic/memory_order)  <br />  (C++11) | 为给定的原子操作定义内存顺序制约 |

| 函数 |  |
| --- | --- |
| [atomic_is_lock_free ](https://zh.cppreference.com/w/cpp/atomic/atomic_is_lock_free)  <br />  (C++11) | 检查对该原子类型的操作是否是无锁的 (函数模板) |
| [atomic_store ](https://zh.cppreference.com/w/cpp/atomic/atomic_store)  <br />  atomic_store_explicit | 原子地以非原子实参替换原子对象的值 (函数模板) |
| [atomic_load ](https://zh.cppreference.com/w/cpp/atomic/atomic_load)  <br />  atomic_load_explicit | 原子地获得存储于原子对象的值 (函数模板) |
| [atomic_exchange ](https://zh.cppreference.com/w/cpp/atomic/atomic_exchange)  <br />  atomic_exchange_explicit | 原子地以非原子实参的值替换原子对象的值，并返回该原子对象的旧值 (函数模板) |
| [atomic_compare_exchange_weak ](https://zh.cppreference.com/w/cpp/atomic/atomic_compare_exchange)  <br />  atomic_compare_exchange_weak_explicit atomic_compare_exchange_strong atomic_compare_exchange_strong_explicit | 原子地比较原子对象和非原子实参的值，若相等则进行 atomic_exchange，若不相等则进行 atomic_load (函数模板) |
| [atomic_fetch_add ](https://zh.cppreference.com/w/cpp/atomic/atomic_fetch_add)  <br />  atomic_fetch_add_explicit | 将非原子值加到原子对象，并获得原子对象的先前值 (函数模板) |
| [atomic_fetch_sub ](https://zh.cppreference.com/w/cpp/atomic/atomic_fetch_sub)  <br />  atomic_fetch_sub_explicit | 从原子对象减去非原子值，并获得原子对象的先前值 (函数模板) |
| [atomic_fetch_and ](https://zh.cppreference.com/w/cpp/atomic/atomic_fetch_and)  <br />  atomic_fetch_and_explicit | 将原子对象替换为与非原子实参逻辑与的结果，并获得原子对象的先前值 (函数模板) |
| [atomic_fetch_or ](https://zh.cppreference.com/w/cpp/atomic/atomic_fetch_or)  <br />  atomic_fetch_or_explicit | 将原子对象替换为与非原子实参逻辑或的结果，并获得原子对象的先前值 (函数模板) |
| [atomic_fetch_xor ](https://zh.cppreference.com/w/cpp/atomic/atomic_fetch_xor)  <br />  atomic_fetch_xor_explicit | 将原子对象替换为与非原子实参逻辑异或的结果，并获得原子对象的先前值 (函数模板) |
| [atomic_flag_test_and_set ](https://zh.cppreference.com/w/cpp/atomic/atomic_flag_test_and_set)  <br />  atomic_flag_test_and_set_explicit | 原子地设置标志为 true 并返回其先前值 (函数) |
| [atomic_flag_clear ](https://zh.cppreference.com/w/cpp/atomic/atomic_flag_clear)  <br />  atomic_flag_clear_explicit | 原子地设置标志值为 false (函数) |
| [atomic_init ](https://zh.cppreference.com/w/cpp/atomic/atomic_init)  <br />  (C++11) | 对默认构造的原子对象进行非原子初始化 (函数模板) |
| [kill_dependency ](https://zh.cppreference.com/w/cpp/atomic/kill_dependency)  <br />  (C++11) | 从 [std::memory_order_consume ](https://zh.cppreference.com/w/cpp/atomic/memory_order)  <br />  依赖树移除指定对象 (函数模板) |
| [atomic_thread_fence ](https://zh.cppreference.com/w/cpp/atomic/atomic_thread_fence)  <br />  (C++11) | 通用的依赖内存顺序的栅栏同步原语 (函数) |
| [atomic_signal_fence ](https://zh.cppreference.com/w/cpp/atomic/atomic_signal_fence)  <br />  (C++11) | 线程与执行于同一线程的信号处理函数间的栅栏 (函数) |
| 预处理器宏 |  |
| [ATOMIC_VAR_INIT ](https://zh.cppreference.com/w/cpp/atomic/ATOMIC_VAR_INIT)  <br />  (C++11) | 静态存储期的原子对象的常量初始化 (宏函数) |
| [ATOMIC_FLAG_INIT ](https://zh.cppreference.com/w/cpp/atomic/ATOMIC_FLAG_INIT)  <br />  (C++11) | 将 [std::atomic_flag ](https://zh.cppreference.com/w/cpp/atomic/atomic_flag)  <br />  初始化为 false |


## [ ](https://zh.cppreference.com/w/cpp/header/mutex)
[

](https://zh.cppreference.com/mwiki/index.php?title=cpp/header/future&variant=zh-cn)

| 类 |  |
| --- | --- |
| [promise ](https://zh.cppreference.com/w/cpp/thread/promise)  <br />  (C++11) | 存储一个值以进行异步获取 (类模板) |
| [packaged_task ](https://zh.cppreference.com/w/cpp/thread/packaged_task)  <br />  (C++11) | 打包一个函数，存储其返回值以进行异步获取 (类模板) |
| [future ](https://zh.cppreference.com/w/cpp/thread/future)  <br />  (C++11) | 等待被异步设置的值 (类模板) |
| [shared_future ](https://zh.cppreference.com/w/cpp/thread/shared_future)  <br />  (C++11) | 等待被异步设置的值（可能为其他 future 所引用） (类模板) |
| [launch ](https://zh.cppreference.com/w/cpp/thread/launch)  <br />  (C++11) | 指定 [std::async ](https://zh.cppreference.com/w/cpp/thread/async)  <br />  所用的运行策略 (枚举) |
| [future_status ](https://zh.cppreference.com/w/cpp/thread/future_status)  <br />  (C++11) | 指定在 [std::future ](https://zh.cppreference.com/w/cpp/thread/future)  <br />  和 std::shared_future 上的定时等待的结果 (枚举) |
| [future_error ](https://zh.cppreference.com/w/cpp/thread/future_error)  <br />  (C++11) | 报告与 future 或 promise 有关的错误 (类) |
| [future_errc ](https://zh.cppreference.com/w/cpp/thread/future_errc)  <br />  (C++11) | 鉴别 future 错误码 (枚举) |
| [std::uses_allocator](https://zh.cppreference.com/w/cpp/thread/promise/uses_allocator)  <br />  std::promise (C++11) | 特化 [std::uses_allocator ](https://zh.cppreference.com/w/cpp/memory/uses_allocator)  <br />  类型特征 (类模板特化) |
| [std::uses_allocator](https://zh.cppreference.com/w/cpp/thread/packaged_task/uses_allocator) | 特化 [std::uses_allocator ](https://zh.cppreference.com/w/cpp/memory/uses_allocator)  <br />  类型特征 (类模板特化) |
| 函数 |  |
| [async ](https://zh.cppreference.com/w/cpp/thread/async)  <br />  (C++11) | 异步运行一个函数（有可能在新线程中执行），并返回保有其结果的 [std::future ](https://zh.cppreference.com/w/cpp/thread/future)  <br />  (函数模板) |
| [future_category ](https://zh.cppreference.com/w/cpp/thread/future_category)  <br />  (C++11) | 鉴别 future 错误类别 (函数) |
| [std::swap(std::promise) ](https://zh.cppreference.com/w/cpp/thread/promise/swap2)  <br />  (C++11) | 特化 [std::swap ](https://zh.cppreference.com/w/cpp/algorithm/swap)  <br />  算法 (函数模板) |
| [std::swap(std::packaged_task) ](https://zh.cppreference.com/w/cpp/thread/packaged_task/swap2)  <br />  (C++11) | 特化 [std::swap ](https://zh.cppreference.com/w/cpp/algorithm/swap)  <br />  算法 |


# [编译器支持](https://zh.cppreference.com/w/cpp/compiler_support)
**GCC （更新于 2020-01 ）**

- C++11 核心语言支持状况（ 4.8.1 起完成，除了无编译器实现的 n2670 ）
- C++14 核心语言支持状况（ 5.1 起完成）
- C++17 核心语言支持状况（ 7.1 起完成）
- C++20 核心语言支持状况
- C++11 库支持状况（ 5.1 起完成）
- C++14 库支持状况（ 5.1 起完成）
- C++17 库支持状况
- C++20 库支持状况
- 技术规范支持状况

**Clang++ （更新于 2020-01 ）**

- C++11 核心语言支持状况（ 3.3 起完成）
- C++11 库支持状况（ 2012-07-29 起完成）
- C++14 核心语言支持状况（ 3.4 起完成）
- C++14 库支持状况（ 3.5 起完成）
- 技术规范支持状况
- C++17 核心语言支持状况（ 5.0 起完成）
- C++17 库支持状况
- C++20 核心语言支持状况
- C++20 库支持状况
- 核心语言缺陷报告状况
