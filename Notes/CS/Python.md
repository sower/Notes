
# —— Python ——
Python是Guido van Rossum在1989年圣诞节期间编写的一个脚本语言。  <br />  Python是一种广泛使用的解释型、高级编程、通用型编程语言。Python支持多种编程范式，包括面向对象、结构化、指令式、函数式和反射式编程。它拥有动态类型系统和垃圾回收功能，能够自动管理内存使用，拥有一个巨大而广泛的标准库。  <br />  Python源代码遵循 GPL(GNU General Public License)协议



# Syntax

格式

- 注释以#开头
- 缩进是语法的一部分
- 在非 [], {}, 或 () 中的多行语句，需要使用反斜杠(/)
- 同一行中使用多条语句，语句之间使用分号(;)分割

如果不使用默认编码(utf-8)，文件的第一行要写成特殊的注释
```python
# -*- coding: encoding -*-
```

docstring（文档字符串）：一种特殊类型的注释，位于一个函数或类定义之后，或一个文件的开头，其功能是对定义的说明  <br />  用三个引号、单引号或者双引号括起来
```python
class Test:
    '''测试 docstring 的类
    '''
    def __init__(self):
        '''Test类初始化对象,不需要任何参数
        '''
        self.num = 10
        
t = Test()
help(t)
```


**变量**

- 变量无需声明，变量在使用前必须赋值，赋值后该变量才会被创建
- 在局部作用域需要修改全局变量时，需要使用关键字global
- 组合数据类型，如果局部变量未真实创建，则是全局变量

**赋值**
```python
target1 = target2 = ···= expression
target1, target2, ···= expression1 ,expression2,···
target1, *target2 = matching - length - iterable
```


在交互模式（interactive mode）中，最后被输出的表达式结果被赋值给变量 _


### Format
%  [keyname] [flags] [width] [.prec] typecode
```javascript
a, b = 5, 10
print('%d * %d = %d' % (a, b, a * b))
print('{0} * {1} = {2}'.format(a, b, a * b))
print(f'{a:.1f} * {b} = {a * b}')    # 格式化字符串字面值
```

位置及关键字参数可以任意的结合
```python
>>> print('The story of {0}, {1}, and {other}.'.format('Bill', 'Manfred',other='Georg'))
The story of Bill, Manfred, and Georg.
>>> table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
>>> print('Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; '
...       'Dcab: {0[Dcab]:d}'.format(table))
print('Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table))  # 等同
Jack: 4098; Sjoerd: 4127; Dcab: 8637678
```

General Options
```python
{<el>:<10}                                     # '<el>      '
{<el>:^10}                                     # '   <el>   '
{<el>:>10}                                     # '      <el>'
{<el>:.<10}                                    # '<el>......'
{<el>:0}                                       # '<el>'
```
Strings
```python
{'abcde'!r:10}                                 # "'abcde'   "	'!r' calls object's repr() method
{'abcde':10.3}                                 # 'abc       '
{'abcde':.3}                                   # 'abc'
```
Numbers
```python
{ 123456:10,}                                  # '   123,456'
{ 123456:10_}                                  # '   123_456'
{ 123456:+10}                                  # '   +123456'
{-123456:=10}                                  # '-   123456'
{ 123456: }                                    # ' 123456'
{-123456: }                                    # '-123456'
```
Floats
```python
{1.23456:10.3}                                 # '      1.23'
{1.23456:10.3f}                                # '     1.235'
{1.23456:10.3e}                                # ' 1.235e+00'
{1.23456:10.3%}                                # '  123.456%'
```
Ints
```python
{90:c}                                   # 'Z'
{90:b}                                   # '1011010'
{90:X}                                   # '5A'
```

# 命名规则（Naming convention）

## 关键字
| **方法** | **描述** |
| --- | --- |
| and | 逻辑运算符。 |
| as | 创建别名。 |
| assert | 用于调试。 |
| async | 修饰一个异步函数 |
| await | 等同yield from |
| break | 跳出循环。 |
| class | 定义类。 |
| continue | 继续循环的下一个迭代。 |
| def | 定义函数。 |
| del | 删除对象。 |
| elif | 在条件语句中使用，等同于 else if。 |
| else | 用于条件语句。 |
| except | 处理异常，发生异常时如何执行。 |
| False | 布尔值，比较运算的结果。 |
| finally | 处理异常，无论是否存在异常，都将执行一段代码。 |
| for | 创建 for 循环。 |
| from | 导入模块的特定部分。 |
| global | 声明全局变量。 |
| if | 写一个条件语句。 |
| import | 导入模块。 |
| in | 检查列表、元组等集合中是否存在某个值。 |
| is | 测试两个变量是否相等。 |
| lambda | 创建匿名函数。 |
| None | 表示 null 值。 |
| nonlocal | 声明非局部变量。 |
| not | 逻辑运算符。 |
| or | 逻辑运算符。 |
| pass | null 语句，什么都不做 |
| raise | 产生异常。 |
| return | 退出函数并返回值。 |
| True | 布尔值，比较运算的结果。 |
| try | 编写 try...except 语句。 |
| while | 创建 while 循环。 |
| with | 用于简化异常处理。 |
| yield | 结束函数，返回生成器。 |

global 修饰变量后标识该变量是全局变量，可以用在任何地方，即使之前未定义该变量  <br />  nonlocal 修饰变量后标识该变量是上一级函数中的局部变量，只能用于嵌套函数中，需要外层函数中定义了相应的局部变量，否则会发生错误
```python
gcount = 0
 
def global_test():
    global  gcount
    gcount += 1
    print (gcount)
    
    
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter
```

标识符：以字母或下划线开头，只能包含字母数字和下划线，区分大小写

## 命名约定
| **Type** | **Public** | **Internal** |
| --- | --- | --- |
| Modules | lower_with_under | _lower_with_under |
| Packages | lower_with_under |   |
| Classes | CapWords | _CapWords |
| Exceptions | CapWords |   |
| Functions | lower_with_under() | _lower_with_under() |
| Global/Class Constants | CAPS_WITH_UNDER | _CAPS_WITH_UNDER |
| Global/Class Variables | lower_with_under | _lower_with_under |
| Instance Variables | lower_with_under | _lower_with_under (protected) or __lower_with_under (private) |
| Method Names | lower_with_under() | _lower_with_under() (protected) or __lower_with_under() (private) |
| Function/Method Parameters | lower_with_under |   |
| Local Variables | lower_with_under |   |

- _spam（单下划线开头）：弱“内部使用”标识，表示不能直接访问的类属性，其无法通过 from...import* 的方式导入
- spam_（单下划线结尾）：为了避免与python关键字的命名冲突。
- __spam（双下划线开头）：类的私有名称，比如在类SpamEggs内，__spam将变成_SpamEggs__spam。
- __spam__（双下划线开头双下划线结尾）：指那些包含在用户控制的名字空间中的“魔术”对象或特性，比如__name__、__doc__、__init__、__import__、__file__等。



# 数据类型

- immutable：Number（数字）、String（字符串）、Tuple（元组）；
- mutable：List（列表）、Dictionary（字典）、Set（集合）。

**hashable -- 可哈希**：一个对象的哈希值如果在其生命周期内绝不改变  <br />  不可变序列类型实现对 [hash()](https://docs.python.org/zh-cn/3/library/functions.html#hash) 内置函数的支持


**None**：NoneType 类型的唯一值，常用于表示缺少值  <br />  **bool：True，False**


## 二进制序列

- **bytes**：由单个字节构成的不可变序列，表示 bytes 字面值的语法与字符串字面值的大致相同，只是添加了一个 b 前缀
   - class bytes([source[, encoding[, errors]]])
- **bytearray**： bytes 对象的可变对应物，没有专属的字面值语法，通过调用构造器来创建
- **memoryview **内存视图：允许 Python 代码访问一个对象的内部数据，只要该对象支持 [缓冲区协议](https://docs.python.org/zh-cn/3/c-api/buffer.html#bufferobjects) 而无需进行拷贝
```python
>>> v = memoryview(b'abcefg')
>>> v[1]
98
>>> v[-1]
103
>>> v[1:4]
<memory at 0x7f3ddc9f4350>
>>> bytes(v[1:4])
b'bce'
```
  <br />  

## Number (数)

- int (长整型）：无溢出
- float (浮点数)： 1.23、3E-2
- complex (复数)：1 + 2.2j，complex(a,b)

**常量：正无穷float('inf') ，负无穷float('-inf') ，非数float('nan')**

**int**

- **int.bit_length()：**返回以二进制表示一个整数所需要的位数，不包括符号位和前面的零
- **int.to_bytes(length, byteorder, *, signed=False)：**返回表示一个整数的字节数组
- **int.as_integer_ratio()：**返回一对整数，其比率正好等于原整数并且分母为正数
- **classmethod int.from_bytes(bytes, byteorder, *, signed=False)：**返回由给定字节数组所表示的整数

**float**

- **float.as_integer_ratio()：**将一个float用分数表示出来，返回Tuple(Numerator，enominator)
- **float.is_integer()：**判断一个float型数字是否是整数，返回布尔值。
- **float.hex()：**以十六进制字符串的形式返回一个浮点数表示
- **classmethod float.fromhex(s)：**返回以十六进制字符串 s 表示的浮点数的类方法


## Str (字符串)
由 Unicode 码位构成的不可变 [序列](https://docs.python.org/zh-cn/3/library/stdtypes.html#typesseq)

- 单引号和双引号使用完全相同，反斜杠可以用来转义
- 使用三引号('''或""")可以指定一个多行字符串。
- 按字面意义级联字符串，如"this " "is " "string"会被自动转换为this is string。
- 没有单独的字符类型，一个字符就是长度为 1 的字符串。

字符串前缀

- b	byte
- u	unicode
- r	raw string，不识别转义
- f	format，格式化字符串	f'{var} {{raw big parantheses}}'
| 方法 | 描述 |
| --- | --- |
| [capitalize()](https://www.w3school.com.cn/python/ref_string_capitalize.asp) | 把首字符转换为大写。 |
| [casefold()](https://www.w3school.com.cn/python/ref_string_casefold.asp) | 把字符串转换为小写。 |
| [center()](https://www.w3school.com.cn/python/ref_string_center.asp) | 返回居中的字符串。 |
| [count()](https://www.w3school.com.cn/python/ref_string_count.asp) | 返回指定值在字符串中出现的次数。 |
| [encode()](https://www.w3school.com.cn/python/ref_string_encode.asp) | 返回字符串的编码版本。 |
| [endswith()](https://www.w3school.com.cn/python/ref_string_endswith.asp) | 如果字符串以指定值结尾，则返回 true。 |
| [expandtabs()](https://www.w3school.com.cn/python/ref_string_expandtabs.asp) | 设置字符串的 tab 尺寸。 |
| [find()](https://www.w3school.com.cn/python/ref_string_find.asp) | 在字符串中搜索指定的值并返回它被找到的位置。 |
| [format()](https://www.w3school.com.cn/python/ref_string_format.asp) | 格式化字符串中的指定值。 |
| format_map() | 格式化字符串中的指定值。 |
| [index()](https://www.w3school.com.cn/python/ref_string_index.asp) | 在字符串中搜索指定的值并返回它被找到的位置。 |
| [isalnum()](https://www.w3school.com.cn/python/ref_string_isalnum.asp) | 如果字符串中的所有字符都是字母数字，则返回 True。 |
| [isalpha()](https://www.w3school.com.cn/python/ref_string_isalpha.asp) | 如果字符串中的所有字符都在字母表中，则返回 True。 |
| [isdecimal()](https://www.w3school.com.cn/python/ref_string_isdecimal.asp) | 如果字符串中的所有字符都是小数，则返回 True。 |
| [isdigit()](https://www.w3school.com.cn/python/ref_string_isdigit.asp) | 如果字符串中的所有字符都是数字，则返回 True。 |
| [isidentifier()](https://www.w3school.com.cn/python/ref_string_isidentifier.asp) | 如果字符串是标识符，则返回 True。 |
| [islower()](https://www.w3school.com.cn/python/ref_string_islower.asp) | 如果字符串中的所有字符都是小写，则返回 True。 |
| [isnumeric()](https://www.w3school.com.cn/python/ref_string_isnumeric.asp) | 如果字符串中的所有字符都是数，则返回 True。 |
| [isprintable()](https://www.w3school.com.cn/python/ref_string_isprintable.asp) | 如果字符串中的所有字符都是可打印的，则返回 True。 |
| [isspace()](https://www.w3school.com.cn/python/ref_string_isspace.asp) | 如果字符串中的所有字符都是空白字符，则返回 True。 |
| [istitle()](https://www.w3school.com.cn/python/ref_string_istitle.asp) | 如果字符串遵循标题规则，则返回 True。 |
| [isupper()](https://www.w3school.com.cn/python/ref_string_isupper.asp) | 如果字符串中的所有字符都是大写，则返回 True。 |
| [join()](https://www.w3school.com.cn/python/ref_string_join.asp) | 把可迭代对象的元素连接到字符串的末尾。 |
| [ljust()](https://www.w3school.com.cn/python/ref_string_ljust.asp) | 返回字符串的左对齐版本。 |
| [lower()](https://www.w3school.com.cn/python/ref_string_lower.asp) | 把字符串转换为小写。 |
| [lstrip()](https://www.w3school.com.cn/python/ref_string_lstrip.asp) | 返回字符串的左修剪版本。 |
| maketrans() | 返回在转换中使用的转换表。 |
| [partition()](https://www.w3school.com.cn/python/ref_string_partition.asp) | 返回元组，其中的字符串被分为三部分。 |
| [replace()](https://www.w3school.com.cn/python/ref_string_replace.asp) | 返回字符串，其中指定的值被替换为指定的值。 |
| [rfind()](https://www.w3school.com.cn/python/ref_string_rfind.asp) | 在字符串中搜索指定的值，并返回它被找到的最后位置。 |
| [rindex()](https://www.w3school.com.cn/python/ref_string_rindex.asp) | 在字符串中搜索指定的值，并返回它被找到的最后位置。 |
| [rjust()](https://www.w3school.com.cn/python/ref_string_rjust.asp) | 返回字符串的右对齐版本。 |
| [rpartition()](https://www.w3school.com.cn/python/ref_string_rpartition.asp) | 返回元组，其中字符串分为三部分。 |
| [rsplit()](https://www.w3school.com.cn/python/ref_string_rsplit.asp) | 在指定的分隔符处拆分字符串，并返回列表。 |
| [rstrip()](https://www.w3school.com.cn/python/ref_string_rstrip.asp) | 返回字符串的右边修剪版本。 |
| [split()](https://www.w3school.com.cn/python/ref_string_split.asp) | 在指定的分隔符处拆分字符串，并返回列表。 |
| [splitlines()](https://www.w3school.com.cn/python/ref_string_splitlines.asp) | 在换行符处拆分字符串并返回列表。 |
| [startswith()](https://www.w3school.com.cn/python/ref_string_startswith.asp) | 如果以指定值开头的字符串，则返回 true。 |
| [strip()](https://www.w3school.com.cn/python/ref_string_strip.asp) | 返回字符串的剪裁版本。 |
| [swapcase()](https://www.w3school.com.cn/python/ref_string_swapcase.asp) | 切换大小写，小写成为大写，反之亦然。 |
| [title()](https://www.w3school.com.cn/python/ref_string_title.asp) | 把每个单词的首字符转换为大写。 |
| translate() | 返回被转换的字符串。 |
| [upper()](https://www.w3school.com.cn/python/ref_string_upper.asp) | 把字符串转换为大写。 |
| [zfill()](https://www.w3school.com.cn/python/ref_string_zfill.asp) | 在字符串的开头填充指定数量的 0 值。 |

```python
trantab = str.maketrans('hare', '3542')   # 制作翻译表
str1 = str.translate(trantab,'2')
```

### string

- ascii_lowercase：小写字母 'abcdefghijklmnopqrstuvwxyz'。
- ascii_uppercase：大写字母 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'。
- ascii_letters：ascii_lowercase 和 ascii_uppercase 常量的拼连。
- digits：字符串 '0123456789'。
- hexdigits：字符串 '0123456789abcdefABCDEF'。
- octdigits：字符串 '01234567'。
- punctuation：由在 C 区域设置中被视为标点符号的 ASCII 字符所组成的字符串: !"#$%&'()*+,-./:;<=>?@[]^_`{|}~.
- whitespace：空白符号的 ASCII 字符组成的字符串。 包括空格、制表、换行、回车、进纸和纵向制表符。
- printable：可打印符号的 ASCII 字符组成的字符串。 digits, ascii_letters, punctuation 和 whitespace 的总和。

**string.capwords(s, sep=None)	**首字母大写

**class string.Formatter**

- format(format_string, /, *args, **kwargs)
- vformat(format_string, args, kwargs)
- parse(format_string)：循环遍历 format_string 并返回一个由可迭代对象组成的元组 (literal_text, field_name, format_spec, conversion)
- get_field(field_name, args, kwargs)
- check_unused_args(used_args, args, kwargs)
- format_field(value, format_spec)
- convert_field(value, conversion)

**class string.Template(template)**  <br />  substitute(mapping={}, /, **kwds)：执行模板替换，返回一个新字符串  <br />  safe_substitute(mapping={}, /, **kwds)
```python
>>> from string import Template
>>> s = Template('$who likes $what')
>>> s.substitute(who='tim', what='kung pao')
'tim likes kung pao'
```

## List（列表）
列表：写在方括号 [ ] 之间、用逗号分隔开的元素列表。元素的类型可以不同，可以嵌套。

**创建 n*m 列表：**`a = [ [None] * m for _ in range(n) ]`

**列表方法**

| 方法 | 描述 |
| --- | --- |
| [list.append(obj)](https://www.runoob.com/python3/python3-att-list-append.html) | 在列表末尾添加新的对象 |
| [list.count(obj)](https://www.runoob.com/python3/python3-att-list-count.html) | 统计某个元素在列表中出现的次数 |
| [list.extend(seq)](https://www.runoob.com/python3/python3-att-list-extend.html) | 在列表末尾一次性追加另一个序列中的多个值 |
| [list.index(obj)](https://www.runoob.com/python3/python3-att-list-index.html) | 从列表中找出某个值第一个匹配项的索引位置 |
| [list.insert(index, obj)](https://www.runoob.com/python3/python3-att-list-insert.html) | 将对象插入列表 |
| [list.pop([index=-1])](https://www.runoob.com/python3/python3-att-list-pop.html) | 移除列表中的一个元素（默认最后一个元素），并且返回该元素的值 |
| [list.remove(obj)](https://www.runoob.com/python3/python3-att-list-remove.html) | 移除列表中某个值的第一个匹配项 |
| [list.reverse()](https://www.runoob.com/python3/python3-att-list-reverse.html) | 反向列表中元素 |
| [list.sort( key=None, reverse=False)](https://www.runoob.com/python3/python3-att-list-sort.html) | 对原列表进行排序 |
| [list.clear()](https://www.runoob.com/python3/python3-att-list-clear.html) | 清空列表 |
| [list.copy()](https://www.runoob.com/python3/python3-att-list-copy.html) | 复制列表 |

```python
L.sort(key=lambda x:(-x[i],x[j]))		# operator.itemgetter() 优于 lambda
flatter_list     = list(itertools.chain.from_iterable(<list>))
product_of_elems = functools.reduce(lambda out, el: out * el, <collection>)
```



## Tuple（元组）
与列表类似，不同之处在于元组的元素不能修改。元组写在小括号（ ）里，元素之间用逗号隔开。  <br />  tuple可以包含可变的对象
```python
tup1 = ()    # 空元组
tup2 = (20,) # 一个元素，需要在元素后添加逗号
tup3 = 1, 2, 
```


## Set（集合）
由具有唯一性的 [hashable](https://docs.python.org/zh-cn/3/glossary.html#term-hashable) 对象所组成的无序多项集  <br />  frozenset：不可变并且为 hashable --- 其内容在被创建后不能再改变

注意：创建一个空集合必须用 set() ，{ } 是用来创建一个空字典。

**集合方法**

| 方法 | 描述 |
| --- | --- |
| [add()](https://www.w3school.com.cn/python/ref_set_add.asp) | 向集合添加元素。 |
| [clear()](https://www.w3school.com.cn/python/ref_set_clear.asp) | 删除集合中的所有元素。 |
| [copy()](https://www.w3school.com.cn/python/ref_set_copy.asp) | 返回集合的副本。 |
| [difference()](https://www.w3school.com.cn/python/ref_set_difference.asp) | 返回包含两个或更多集合之间差异的集合。 |
| [difference_update()](https://www.w3school.com.cn/python/ref_set_difference_update.asp) | 删除此集合中也包含在另一个指定集合中的项目。 |
| [discard()](https://www.w3school.com.cn/python/ref_set_discard.asp) | 删除指定项目。 |
| [intersection()](https://www.w3school.com.cn/python/ref_set_intersection.asp) | 返回为两个其他集合的交集的集合。 |
| [intersection_update()](https://www.w3school.com.cn/python/ref_set_intersection_update.asp) | 删除此集合中不存在于其他指定集合中的项目。 |
| [isdisjoint()](https://www.w3school.com.cn/python/ref_set_isdisjoint.asp) | 返回两个集合是否有交集。 |
| [issubset()](https://www.w3school.com.cn/python/ref_set_issubset.asp) | 返回另一个集合是否包含此集合。 |
| [issuperset()](https://www.w3school.com.cn/python/ref_set_issuperset.asp) | 返回此集合是否包含另一个集合。 |
| [pop()](https://www.w3school.com.cn/python/ref_set_pop.asp) | 从集合中删除一个元素。 |
| [remove()](https://www.w3school.com.cn/python/ref_set_remove.asp) | 删除指定元素。 |
| [symmetric_difference()](https://www.w3school.com.cn/python/ref_set_symmetric_difference.asp) | 返回具有两组集合的对称差集的集合。 |
| [symmetric_difference_update()](https://www.w3school.com.cn/python/ref_set_symmetric_difference_update.asp) | 插入此集合和另一个集合的对称差集。 |
| [union()](https://www.w3school.com.cn/python/ref_set_union.asp) | 返回包含集合并集的集合。 |
| [update()](https://www.w3school.com.cn/python/ref_set_update.asp) | 用此集合和其他集合的并集来更新集合。 |

运算

- **交集 & **: `**x&y**`，包括同时在集合 x 和y中的共同元素。
- **并集 |** : `**x|y**`，包括集合 x 和 y 中所有元素。
- **差集 -** : `**x-y**`，包括在集合 x 中但不在集合 y 中的元素。
- **补集 ^** : `**x^y**`，包括集合 x 和 y 的非共同元素


## Dictionary（字典）
字典是一种映射类型，一种可变容器模型，且可存储任意类型对象。字典用 { } 标识，它是一个无序的 键(key) : 值(value) 的集合。

| 方法 | 描述 |
| --- | --- |
| [clear()](https://www.w3school.com.cn/python/ref_dictionary_clear.asp) | 删除字典中的所有元素 |
| [copy()](https://www.w3school.com.cn/python/ref_dictionary_copy.asp) | 返回字典的副本 |
| [fromkeys()](https://www.w3school.com.cn/python/ref_dictionary_fromkeys.asp) | 返回拥有指定键和值的字典 |
| [get()](https://www.w3school.com.cn/python/ref_dictionary_get.asp) | 返回指定键的值 |
| [items()](https://www.w3school.com.cn/python/ref_dictionary_items.asp) | 返回包含每个键值对的元组的列表 |
| [keys()](https://www.w3school.com.cn/python/ref_dictionary_keys.asp) | 返回包含字典键的列表 |
| [pop()](https://www.w3school.com.cn/python/ref_dictionary_pop.asp) | 删除拥有指定键的元素 |
| [popitem()](https://www.w3school.com.cn/python/ref_dictionary_popitem.asp) | 删除最后插入的键值对 |
| [setdefault()](https://www.w3school.com.cn/python/ref_dictionary_setdefault.asp) | 返回指定键的值。如果该键不存在，则插入具有指定值的键。 |
| [update()](https://www.w3school.com.cn/python/ref_dictionary_update.asp) | 使用指定的键值对字典进行更新 |
| [values()](https://www.w3school.com.cn/python/ref_dictionary_values.asp) | 返回字典中所有值的列表 |

对字典排序
```python
D = sorted(d.items(), key=lambda x:(x[1],x[0]]), [reverse = False])
```

## 类型转换
| [int(x [,base](https://www.runoob.com/python3/python-func-int.html)=10[])](https://www.runoob.com/python3/python-func-int.html) | 将x转换为一个整数 |
| --- | --- |
| [float(x)](https://www.runoob.com/python3/python-func-float.html) | 将x转换到一个浮点数 |
| [complex(real [,imag])](https://www.runoob.com/python3/python-func-complex.html) | 创建一个复数 |
| [str(x)](https://www.runoob.com/python3/python-func-str.html) | 将对象 x 转换为字符串 |
| [repr(x)](https://www.runoob.com/python3/python-func-repr.html) | 将对象 x 转换为表达式字符串 |
| [eval(str)](https://www.runoob.com/python3/python-func-eval.html) | 用来计算在字符串中的有效Python表达式,并返回一个对象 |
| [tuple(s)](https://www.runoob.com/python3/python3-func-tuple.html) | 将序列 s 转换为一个元组 |
| [list(s)](https://www.runoob.com/python3/python3-att-list-list.html) | 将序列 s 转换为一个列表 |
| [set(s)](https://www.runoob.com/python3/python-func-set.html) | 转换为可变集合 |
| [dict(d)](https://www.runoob.com/python3/python-func-dict.html) | 创建一个字典。d 必须是一个 (key, value)元组序列。 |
| [frozenset(s)](https://www.runoob.com/python3/python-func-frozenset.html) | 转换为不可变集合 |
| [chr(int)](https://www.runoob.com/python3/python-func-chr.html) | 将一个整数转换为一个字符 |
| [ord(](https://www.runoob.com/python3/python-func-ord.html)str[)](https://www.runoob.com/python3/python-func-ord.html) | 将一个字符转换为它的整数值 |
| [bin()](https://www.w3school.com.cn/python/ref_func_bin.asp) | 返回数的二进制形式的字符串，以‘0b’开头 |
| [hex(x)](https://www.runoob.com/python3/python-func-hex.html) | 将一个整数转换为一个十六进制字符串 |
| [oct(x)](https://www.runoob.com/python3/python-func-oct.html) | 将一个整数转换为一个八进制字符串 |
| [bool()](https://www.w3school.com.cn/python/ref_func_bool.asp) | 返回指定对象的布尔值。 |


## [enum](https://docs.python.org/zh-cn/3/library/enum.html#module-enum)
基类

- class enum.Enum：创建枚举常量
- class enum.IntEnum：创建属于 int 的子类的枚举常量。
- class enum.IntFlag：创建可使用按位运算符进行组合而不会丢失其 IntFlag 成员资格的枚举常量。
- class enum.Flag：创建枚举常量 可使用按位运算符进行组合而不会丢失其 Flag 成员资格的枚举常量。

**enum.unique()**：此 Enum 类装饰器可确保只将一个名称绑定到任意一个值。  <br />  **class enum.auto**：实例会被替换为一个可用作 Enum 成员的正确值。
```python
from enum import Enum
>>> class Color(Enum):
...     RED = 1
...     GREEN = 2
...     BLUE = 3
...
>>> print(Color.RED)
Color.RED
>>> print(repr(Color.RED))
<Color.RED: 1>
>>> member = Color.RED
>>> member.name
'RED'
>>> member.value
1
```

## [decimal](https://docs.python.org/zh-cn/3/library/decimal.html#module-decimal)
**class decimal.Decimal(value="0", context=None)**  <br />  为快速正确舍入的十进制浮点运算提供支持
```python
>>> from decimal import *
>>> getcontext().prec = 6
>>> Decimal(1) / Decimal(7)
Decimal('0.142857')
>>> getcontext().prec = 28
>>> Decimal(1) / Decimal(7)
Decimal('0.1428571428571428571428571429')
```
```python
>>> data = list(map(Decimal, '1.34 1.87 3.45 2.35 1.00 0.03 9.25'.split()))
>>> max(data)
Decimal('9.25')
>>> min(data)
Decimal('0.03')
>>> sorted(data)
[Decimal('0.03'), Decimal('1.00'), Decimal('1.34'), Decimal('1.87'),
 Decimal('2.35'), Decimal('3.45'), Decimal('9.25')]
>>> sum(data)
Decimal('19.29')
>>> a,b,c = data[:3]
>>> str(a)
'1.34'
>>> float(a)
1.34
>>> round(a, 1)
Decimal('1.3')
>>> int(a)
1
>>> a * 5
Decimal('6.70')
>>> a * b
Decimal('2.5058')
>>> c % a
Decimal('0.77')
```

## [fractions](https://docs.python.org/zh-cn/3/library/fractions.html#module-fractions)

- class fractions.Fraction(numerator=0, denominator=1)
- class fractions.Fraction(other_fraction)
- class fractions.Fraction(float)
- class fractions.Fraction(decimal)
- class fractions.Fraction(string)
```python
>>> from fractions import Fraction
>>> Fraction(16, -10)
Fraction(-8, 5)
>>> Fraction(123)
Fraction(123, 1)
>>> Fraction()
Fraction(0, 1)
>>> Fraction('3/7')
Fraction(3, 7)
>>> Fraction(' -3/7 ')
Fraction(-3, 7)
>>> Fraction('1.414213 \t\n')
Fraction(1414213, 1000000)
>>> Fraction('-.125')
Fraction(-1, 8)
>>> Fraction('7e-6')
Fraction(7, 1000000)
>>> Fraction(2.25)
Fraction(9, 4)
>>> Fraction(1.1)
Fraction(2476979795053773, 2251799813685248)
>>> from decimal import Decimal
>>> Fraction(Decimal('1.1'))
Fraction(11, 10)
```

# 运算符
**算数运算符**

| 运算符 | 描述 |
| --- | --- |
| + | 加 或 序列的拼接 |
| - | 减 |
| * | 乘 或 序列的多次拼接 |
| / | 除 |
| % | 取模 |
| ** | 幂 |
| // | 取整除 - 向下取整，与分母分子的数据类型有关 |

**逻辑运算符**

| 运算符 | 逻辑表达式 | 描述 |
| --- | --- | --- |
| and | x and y | if x is false, then x, else y |
| or | x or y | if x is false, then y, else x |
| not | not x | if x is false, then True, else False |

**成员运算符**

| 运算符 | 描述 |
| --- | --- |
| in | 如果在指定的序列中找到值返回 True，否则返回 False。 |
| not in | 如果在指定的序列中没有找到值返回 True，否则返回 False。 |

**身份运算符**

| 运算符 | 描述 | 实例 |
| --- | --- | --- |
| is | 判断两个标识符是不是引用自一个对象 | x is y, 类似 id(x) == id(y) |
| is not | 判断两个标识符是不是引用自不同对象 | x is not y ， 类似 id(a) != id(b) |

注： id() 函数用于获取对象内存地址。身份运算符用于比较两个对象的存储单元

## 运算符优先级
| 运算符 | 描述 |
| --- | --- |
| ** | 指数 (最高优先级) |
| ~ + - | 按位翻转, 一元加号和减号 (最后两个的方法名为 +@ 和 -@) |
| * / % // | 乘，除，取模和取整除 |
| + - | 加法减法 |
| >> << | 右移，左移运算符 |
| & | 位 'AND' |
| ^ &#124; | 位运算符 |
| <= < > >= | 比较运算符 |
| <> == != | 等于运算符 |
| = %= /= //= -= += *= **= | 赋值运算符 |
| is is not | 身份运算符 |
| in not in | 成员运算符 |
| not and or | 逻辑运算符 |


# 流程控制

## 条件
```python
if condition_1:
    statement_block_1
[elif condition_2:
    statement_block_2
...
else:
    statement_block_3]
```

模式匹配
```python
match subject:
    case <pattern_1> [if condition]:
        <action_1>
    [case <pattern_2>:
        <action_2>
    case _:
        <action_wildcard>]
```

## 循环
正常结束（未使用break）时，会执行else语句
```python
while condition:
     statement_block_1
[else:
     statement_block_2]
```
```python
for <variable> in <sequence>:
    statement_block_1
[else:
    statement_block_2]
```

- pass：空语句，一般用做占位语句，保持程序结构的完整性
- break
- continue


## 序列遍历
单序列 + 索引
```python
>>> for i, v in enumerate(['tic', 'tac', 'toe']):
...     print(i, v)
...
0 tic
1 tac
2 toe
```
多序列
```python
>>> questions = ['name', 'quest', 'favorite color']
>>> answers = ['lancelot', 'the holy grail', 'blue']
>>> for q, a in zip(questions, answers):
...     print(f'What is your {q}?  It is {a}.')
...
What is your name?  It is lancelot.
What is your quest?  It is the holy grail.
What is your favorite color?  It is blue.
```
zip() 将字典”反转”为 (值，键) 元组序列

## 生成式 Comprehensions
```python
<list> = [i+1 for i in range(10)]                         # [1, 2, ..., 10]
<set>  = {i for i in range(10) if i > 5}                  # {6, 7, 8, 9}
<generator> = (i+5 for i in range(10))                    # (5, 6, ..., 14)
<dict> = {i: i*2 for i in range(10)}                      # {0: 0, 1: 2, ..., 9: 18}
```

## 迭代器 Iterator
可迭代对象(Iterable)：定义了返回一个迭代器的__iter__方法，或定义了支持下标索引的__getitem__方法的对象  <br />  迭代器：定义了__next__方法的对象  <br />  list、dict、str等是Iterable但不是Iterator，可以通过iter()函数获得一个Iterator对象。
```python
>>> from collections import Iterator
>>> isinstance((x for x in range(10)), Iterator)
True
>>> isinstance('abc', Iterator)
False
```
嵌套迭代
```python
from collections import Iterable

def flatten(items, ignore_types=(str, bytes)):
    for x in items:
        if isinstance(x, Iterable) and not isinstance(x, ignore_types):
            yield from flatten(x)
        else:
            yield x
            
            
items = [1, 2, [3, 4, [5, 6], 7], 8]
# Produces 1 2 3 4 5 6 7 8
for x in flatten(items):
    print(x)
```
StopIteration 异常：标识迭代的完成，防止出现无限循环的情况。  <br />  在 __next__() 方法中可以设置在完成指定循环次数后触发 StopIteration 异常来结束迭代


## 生成器 Generator
一次生成一个值的特殊类型函数。一种特殊的迭代器，只能对其迭代一次。  <br />  半协程（semicoroutine）是特殊的、能力更弱的协程。
```python
>>> g = (x * x for x in range(10))
>>> g  #<generator object <genexpr> at 0x0000024EAE1FBA48>
>>> next(g)
0
>>> for n in g:
...     print(n)

def intNum():
    print("开始执行")
    for i in range(5):
        yield i           #函数定义中包含yield关键字
        print("继续执行")
num = intNum()
```

## 协程 Coroutine
微线程，推广了协作式多任务的子程序，允许执行被挂起与被恢复。
```python
# 生产者与消费者模式
def consumer():
    while True:
        p = yield
        print('消费产品 %d' % p)
        
def product(c):
    c.send(None)
    for i in range(5):
        print('生产产品 %d' % i)
        c.send(i)
    c.close()
    
    
c = consumer()
product(c)
```

# Function
定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，在缩进块中编写函数体，返回值用return语句返回。
```python
def function_name ( parameter1[: agr_annotations],...) [-> retrun_annotations]:
        suite
```

- 默认 return None。
- 函数可以同时返回多个值，实质是一个tuple。
- 注解（annotation）以dict形式存储  function.__annotation__

**- 位置参数**  <br />  **- 默认参数**  <br />  默认参数应该使用不可变对象  <br />  **- 可变参数**  <br />  *args 是可变参数，args接收的是一个tuple；  <br />  既可以直接传入：func(1, 2, 3)，又可以先组装list或tuple，再通过_args传入：func(_(1, 2, 3))。  <br />  **- 关键字参数**  <br />  **kw 是关键字参数，kw接收的是一个dict。  <br />  既可以直接传入：func(a=1, b=2)，又可以先组装dict，再通过**kw传入：func(**{'a': 1, 'b': 2})。  <br />  **- 命名的关键字参数**  <br />  限制调用者可以传入的参数名，同时可以提供默认值。  <br />  定义命名的关键字参数在没有可变参数的情况下不要忘了写分隔符 *，否则定义的将是位置参数。

参数定义的顺序：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。  <br />  对于任意函数，都可以通过类似 func(*args, **kw) 的形式调用它，无论它的参数是如何定义的。

**特殊属性**

| 属性 | 意义 |  |
| --- | --- | --- |
| __doc__ | 该函数的文档字符串，没有则为 None；不会被子类继承。 | 可写 |
| [__name__](https://docs.python.org/zh-cn/3/library/stdtypes.html#definition.__name__) | 该函数的名称。 | 可写 |
| [__qualname__](https://docs.python.org/zh-cn/3/library/stdtypes.html#definition.__qualname__) | 该函数的 [qualified name](https://docs.python.org/zh-cn/3/glossary.html#term-qualified-name) | 可写 |
| __module__ | 该函数所属模块的名称，没有则为 None。 | 可写 |
| __defaults__ | 由具有默认值的参数的默认参数值组成的元组，如无任何参数具有默认值则为 None。 | 可写 |
| __code__ | 表示编译后的函数体的代码对象。 | 可写 |
| __globals__ | 对存放该函数中全局变量的字典的引用 --- 函数所属模块的全局命名空间。 | 只读 |
| [__dict__](https://docs.python.org/zh-cn/3/library/stdtypes.html#object.__dict__) | 命名空间支持的函数属性。 | 可写 |
| __closure__ | None 或包含该函数可用变量的绑定的单元的元组。有关 cell_contents 属性的详情见下。 | 只读 |
| __annotations__ | 包含参数标注的字典。字典的键是参数名，如存在返回标注则为 'return'。 | 可写 |
| __kwdefaults__ | 仅包含关键字参数默认值的字典。 | 可写 |


## 匿名函数 lambda
lambda的主体是一个表达式，而不是一个代码块
```python
lambda [arg1 [,arg2,.....argn]]:expression
```

## 闭包 Closure
嵌套函数，返回函数
```python
# 闭包函数，exponent 称为自由变量
def nth_power(exponent):
    def exponent_of(base):
        return base ** exponent
    return exponent_of # 返回值是 exponent_of 函数

square = nth_power(2) # 计算一个数的平方
cube = nth_power(3) # 计算一个数的立方
print(square(2))  # 计算 2 的平方
print(cube(2)) # 计算 2 的立方

#查看 __closure__属性，记录着自由变量的地址
print(square.__closure__)
```

## 装饰器 Decorator
在代码运行期间动态增加功能的方式，本质是是一个返回函数的高阶函数
```python
import time
def log_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print('ready-->')
        beg = time.time()
        res = func(*args, **kwargs)
        print('use time:{}'.format(time.time()-beg))
        return res
    return wrapper

@log_time                        '''等同mysleep = log_time(mysleep)'''
def mysleep():
    print('mysleep...')
    time.sleep(1)
    
mysleep()


# 使用类编写装饰器，传递参数可通过类的初始化
class LogTime:
    def __call__(self, func):
        def wrapper(*args, **kwargs):
            print('ready-->')
            beg = time.time()
            res = func(*args, **kwargs)
            print('use time:{}'.format(time.time()-beg))
            return res
        return wrapper
    
@LogTime()  # 需要初始化装饰类的实例
def mysleep():
    print('mysleep...')
    time.sleep(1)
    
mysleep()
```
:::warning
应该用functools.wraps定义函数装饰器，否则导致__name__, __doc__等内部属性混乱
:::



# 异常处理
**捕获异常**
```python
try:
      suite
except [<exception> [as value] ...]:     
      pass
[···
else:
      pass
finally:
      pass    ]


# Exception Object
arguments = <name>.args
exc_type  = <name>.__class__
filename  = <name>.__traceback__.tb_frame.f_code.co_filename
func_name = <name>.__traceback__.tb_frame.f_code.co_name
line      = linecache.getline(filename, <name>.__traceback__.tb_lineno)
error_msg = ''.join(traceback.format_exception(exc_type, <name>, <name>.__traceback__))
```

raise 唯一的一个参数指定了要被抛出的异常，且必须是一个异常的实例或异常的类
```python
raise instance [ | class]   [from  (other_ex | None)]

raise NameError('HiThere')
```

assert（断言）用于判断一个表达式，在表达式条件为 false 的时候触发异常
```python
assert expression [, arguments]
# 等价于：
if not expression:
    raise AssertionError(arguments)
```



## [内置异常](https://docs.python.org/zh-cn/3/library/exceptions.html)
```python
BaseException
 +-- SystemExit
 +-- KeyboardInterrupt
 +-- GeneratorExit
 +-- Exception
      +-- StopIteration
      +-- StopAsyncIteration
      +-- ArithmeticError
      |    +-- FloatingPointError
      |    +-- OverflowError
      |    +-- ZeroDivisionError
      +-- AssertionError
      +-- AttributeError
      +-- BufferError
      +-- EOFError
      +-- ImportError
      |    +-- ModuleNotFoundError
      +-- LookupError
      |    +-- IndexError
      |    +-- KeyError
      +-- MemoryError
      +-- NameError
      |    +-- UnboundLocalError
      +-- OSError
      |    +-- BlockingIOError
      |    +-- ChildProcessError
      |    +-- ConnectionError
      |    |    +-- BrokenPipeError
      |    |    +-- ConnectionAbortedError
      |    |    +-- ConnectionRefusedError
      |    |    +-- ConnectionResetError
      |    +-- FileExistsError
      |    +-- FileNotFoundError
      |    +-- InterruptedError
      |    +-- IsADirectoryError
      |    +-- NotADirectoryError
      |    +-- PermissionError
      |    +-- ProcessLookupError
      |    +-- TimeoutError
      +-- ReferenceError
      +-- RuntimeError
      |    +-- NotImplementedError
      |    +-- RecursionError
      +-- SyntaxError
      |    +-- IndentationError
      |         +-- TabError
      +-- SystemError
      +-- TypeError
      +-- ValueError
      |    +-- UnicodeError
      |         +-- UnicodeDecodeError
      |         +-- UnicodeEncodeError
      |         +-- UnicodeTranslateError
      +-- Warning
           +-- DeprecationWarning
           +-- PendingDeprecationWarning
           +-- RuntimeWarning
           +-- SyntaxWarning
           +-- UserWarning
           +-- FutureWarning
           +-- ImportWarning
           +-- UnicodeWarning
           +-- BytesWarning
           +-- ResourceWarning
```

自定义异常
```python
class Error(Exception):
    """Base class for exceptions in this module."""
    pass

class InputError(Error):
    """Exception raised for errors in the input.
    
    Attributes:
        expression -- input expression in which the error occurred
        message -- explanation of the error
    """
    
    def __init__(self, expression, message):
        self.expression = expression
        self.message = message
```


# OOP

## 类（class)
```python
class ClassName [(Object)]:
    <statement-1>
    .
    .
    .
    <statement-N>
```

- 任何类，最终都可以追溯到根类object
- 类有一个名为 __init__() 的特殊方法（**构造方法**），该方法在类实例化时会自动调用
- 类的方法必须有一个额外的**第一个参数名称**，按照惯例它的名称是 self，代表的是类的实例

**类的私有属性/方法**  <br />  __private_attrs：双下划线开头，声明该属性/方法为私有，不能在类的外部被使用或直接访问。  <br />  self.__private_attrs  <br />  实际上python内部将__private_attrs更改为_ClassName_private_attrs

## 继承（Inheritance）
支持多继承：多个父类中有同名的类方法时，根据子类继承父类的前后次序决定，即排在前面父类中的类方法会覆盖排在后面父类中的同名类方法。
```python
class DerivedClassName(Base1, Base2 ...):
    <statement-1>
    .
    .
    .
    <statement-N>
```

**MRO**（Method Resolution Order，方法解析顺序）   <br />  C3算法，使用的是拓扑排序，在一个有向无环图中

- 保持继承拓扑图的一致性。
- 保证局部优先原则（如A继承C，C继承B，那么A读取父类方法，应该优先使用C的方法）。
- 保证单调性原则（即子类不改变父类的方法搜索顺序）。
```python
class A(object):
    pass


class B(object):
    pass


class C(object):
    pass


class D(A, C):
    pass


class E(B, A):
    pass


class F(D, E):
    pass


print(F.__mro__)
# (<class '__main__.F'>, <class '__main__.D'>, <class '__main__.E'>, <class '__main__.B'>, <class '__main__.A'>, <class '__main__.C'>, <class 'object'>)
```

Python 中所有的方法实际上都是 virtual 方法
```python
# 类定义
class People:
    # 定义类属性或类变量
    age = 0
    # 定义私有属性，类外部无法直接进行访问
    __weight = 0
    
    #定义构造方法
    def __init__(self, n, a, w):
        self.name = n    # 实例属性或实例变量
        self.age = a
        self.__weight = w
        
    #定义实例方法
    def speak(self):
        print("%s 说: 我 %d 岁。" % (self.name, self.age))
        
    #至少一个参数，通常命名为 cls，Python 会自动将类本身绑定给 cls 参数
    @classmethod
    def run(cls):
        print(f"调用类方法 run() 可以使用类访问类变量",cls.age)
        
    @staticmethod
    def sleep():
        print("调用静态方法 sleep(), 只能通过类名访问类变量", People.age)
 
 
#单继承示例
class Student(people):
    grade = ''
    
    def __init__(self,n,a,w,g):
        #调用父类的构造函数，等同 super().__init__(n,a,w)
        people.__init__(self,n,a,w)
        self.grade = g
        
    #覆写父类的方法
    def speak(self):
        print("%s 说: 我 %d 岁了，我在读 %d 年级"%(self.name,self.age,self.grade))
 
 
s = Student('ken',10,60,3)
s.speak()                           # ken 说: 我 10 岁了，我在读 3 年级
```
classmethod与staticmethod

- 都可以通过Class.method()的方式使用。
- classmethod第一个参数是class，可以应用类变量。
- staticmethod和普通函数一样，只不过它放在类中。

@property：将一个方法变成属性调用的
```python
//  birth是可读写属性，age是一个只读属性
class Student(object):
    
    @property
    def birth(self):
        return self._birth
    
    @birth.setter
    def birth(self, value):
        self._birth = value
        
    @property
    def age(self):
        return 2015 - self._birth
```


**__slots__**：限制该class实例能添加的属性。仅对当前类实例起作用，对继承的子类是不起作用
```python
class Student(object):
    __slots__ = ('name', 'age') # 用tuple定义允许绑定的属性名称
```


## 魔法方法

- **__new__(cls[, ...])：负责创建类实例的静态方法，优先 __init__() 初始化方法被调用；**
- **__init__ : 在实例 (通过 __new__()) 被创建之后，初始化对象**
- **__del__ : 实例将被销毁时调用**
- **__repr__ : 输出一个对象的“官方”字符串表示**
- **__str__ : 格式良好的字符串表示**
- **__setitem__ : 按照索引赋值**
- **__getitem__: 按照索引获取值**
- **__len__: 获得长度**
- **__cmp__: 比较运算**
- **__call__: 函数调用**
- **__add__: 加运算**
- **__sub__: 减运算**
- **__mul__: 乘运算**
- **__truediv__: 除运算**
- **__mod__: 求余运算**
- **__pow__: 乘方**
- ···

**比较运算符**

- object.**__lt__**(_self_, _other_)
- object.**__le__**(_self_, _other_)
- object.**__eq__**(_self_, _other_)
- object.**__ne__**(_self_, _other_)
- object.**__gt__**(_self_, _other_)
- object.**__ge__**(_self_, _other_)



**属性访问**

- __getattr__：在实例中找不到属性时调用。
- __getattribute__：无论是否找到属性均调用。
- __setattr__：对属性赋值时调用。
- __delattr__：删除属性时调用。

运算符重载
```python
class Vector:
    def __init__(self, x, y):
        self.__x = x
        self.__y = y
        
    @property
    def x(self):
        return self.__x
    
    @property
    def y(self):
        return self.__y
 
   def __str__(self):
      return 'Vector (%d, %d)' % (self.a, self.b)
   
   # 算数运算符
   def __add__(self,other):
      return Vector(self.a + other.a, self.b + other.b)
      
   # 反算数运算符
   def __radd__(self,other):
      return Vector(self.a + other.a, self.b + other.b)
      
   # 增量赋值符
   def __iadd__(self,other):
     return Vector(self.a + other.a, self.b + other.b)
     
   # 一元运算符  
   def __neg__(self):
        return Vector(-self.x, -self.y)
        
   # 实现__hash__ 必须同时实现 __eq__   
   def __hash__(self):
        return hash((self.__x, self.__y))
    
   # 比较运算符
   def __eq__(self, other):
        return self.__x == other.__x and self.__y == other.__y 
 
v1 = Vector(2,10)
v2 = Vector(5,-2)
print (v1 + v2)
```

## Duck Types
A duck type is an implicit type that prescribes a set of special methods. Any object that has those methods defined is considered a member of that duck type.

**Comparable**

- If eq() method is not overridden, it returns 'id(self) == id(other)', which is the same as 'self is other'.
```python
class MyComparable:
    def __init__(self, a):
        self.a = a
        
    def __eq__(self, other):
        if isinstance(other, type(self)):
            return self.a == other.a
        return NotImplemented
```
**Hashable**

- Hashable object needs both hash() and eq() methods and its hash value should never change.
```python
class MyHashable:
    def __init__(self, a):
        self._a = a
        
    @property
    def a(self):
        return self._a
    
    def __eq__(self, other):
        if isinstance(other, type(self)):
            return self.a == other.a
        return NotImplemented
    
    def __hash__(self):
        return hash(self.a)
```
**Sortable**

- With total_ordering decorator, you only need to provide eq() and one of lt(), gt(), le() or ge() special methods.
```python
from functools import total_ordering

@total_ordering
class MySortable:
    def __init__(self, a):
        self.a = a
        
    def __eq__(self, other):
        if isinstance(other, type(self)):
            return self.a == other.a
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, type(self)):
            return self.a < other.a
        return NotImplemented
```
**Iterator**

- Any object that has methods next() and iter() is an iterator.
- Next() should return next item or raise StopIteration.
- Iter() should return 'self'.
```python
class Counter:
    def __init__(self):
        self.i = 0
        
    def __next__(self):
        self.i += 1
        if self.i > 100000: # 退出循环的条件
            raise StopIteration()
        return self.i # 返回下一个值
    
    def __iter__(self):
        return self
```
**Callable**

- All functions and classes have a call() method, hence are callable.
- When this cheatsheet uses '' as an argument, it actually means ''.
```python
class Counter:
    def __init__(self):
        self.i = 0
    def __call__(self):
        self.i += 1
        return self.i
        
>>> counter = Counter()
>>> counter(), counter(), counter()
(1, 2, 3)
```
**Context Manager**

- Enter() should lock the resources and optionally return an object.
- Exit() should release the resources.
- Any exception that happens inside the with block is passed to the exit() method.
- If it wishes to suppress the exception it must return a true value.
```python
class MyOpen:
    def __init__(self, filename):
        self.filename = filename
        
    def __enter__(self):
        self.file = open(self.filename)
        return self.file
    
    def __exit__(self, exc_type, exception, traceback):
        self.file.close()
        
        
>>> with open('test.txt', 'w') as file:
...     file.write('Hello World!')
>>> with MyOpen('test.txt') as file:
...     print(file.read())
Hello World!
```
库方法
```python
from contextlib import contextmanager
class Query(object):
    def __init__(self, name):
        self.name = name
    def query(self):
        print('Query info about %s...' % self.name)
@contextmanager
def create_query(name):
    print('Begin')
    q = Query(name)
    yield q
    print('End')
    
with create_query('Bob') as q:
    q.query()
```

## [collections.abc](https://docs.python.org/zh-cn/3/library/collections.abc.html#module-collections.abc) --- 容器的抽象基类
| 抽象基类 | 继承自 | 抽象方法 | Mixin 方法 |
| --- | --- | --- | --- |
| [Container](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Container) |  | __contains__ |  |
| [Hashable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Hashable) |  | __hash__ |  |
| [Iterable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Iterable) |  | __iter__ |  |
| [Iterator](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Iterator) | [Iterable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Iterable) | __next__ | __iter__ |
| [Reversible](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Reversible) | [Iterable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Iterable) | __reversed__ |  |
| [Generator](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Generator) | [Iterator](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Iterator) | send, throw | close, __iter__, __next__ |
| [Sized](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Sized) |  | __len__ |  |
| [Callable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Callable) |  | __call__ |  |
| [Collection](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Collection) | [Sized,](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Sized)  <br />   Iterable, Container | __contains__, __iter__, __len__ |  |
| [Sequence](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Sequence) | [Reversible,](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Reversible)  <br />   Collection | __getitem__, __len__ | __contains__, __iter__, __reversed__, index, and count |
| [MutableSequence](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.MutableSequence) | [Sequence](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Sequence) | __getitem__, __setitem__, __delitem__, __len__, insert | 继承自 [Sequence](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Sequence) 的方法，以及 append, reverse, extend, pop, remove，和 __iadd__ |
| [ByteString](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.ByteString) | [Sequence](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Sequence) | __getitem__, __len__ | 继承自 [Sequence](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Sequence) 的方法 |
| [Set](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Set) | [Collection](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Collection) | __contains__, __iter__, __len__ | __le__, __lt__, __eq__, __ne__, __gt__, __ge__, __and__, __or__, __sub__, __xor__, and isdisjoint |
| [MutableSet](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.MutableSet) | [Set](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Set) | __contains__, __iter__, __len__, add, discard | 继承自 [Set](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Set) 的方法以及 clear, pop, remove, __ior__, __iand__, __ixor__，和 __isub__ |
| [Mapping](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Mapping) | [Collection](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Collection) | __getitem__, __iter__, __len__ | __contains__, keys, items, values, get, __eq__, and __ne__ |
| [MutableMapping](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.MutableMapping) | [Mapping](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Mapping) | __getitem__, __setitem__, __delitem__, __iter__, __len__ | 继承自 [Mapping](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Mapping) 的方法以及 pop, popitem, clear, update，和 setdefault |
| [MappingView](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.MappingView) | [Sized](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Sized) |  | __len__ |
| [ItemsView](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.ItemsView) | [MappingView,](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.MappingView)  <br />   Set |  | __contains__, __iter__ |
| [KeysView](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.KeysView) | [MappingView,](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.MappingView)  <br />   Set |  | __contains__, __iter__ |
| [ValuesView](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.ValuesView) | [MappingView,](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.MappingView)  <br />   Collection |  | __contains__, __iter__ |
| [Awaitable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Awaitable) |  | __await__ |  |
| [Coroutine](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Coroutine) | [Awaitable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Awaitable) | send, throw | close |
| [AsyncIterable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.AsyncIterable) |  | __aiter__ |  |
| [AsyncIterator](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.AsyncIterator) | [AsyncIterable](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.AsyncIterable) | __anext__ | __aiter__ |
| [AsyncGenerator](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.AsyncGenerator) | [AsyncIterator](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.AsyncIterator) | asend, athrow | aclose, __aiter__, __anext__ |

```python
class D:                                 # No inheritance
    def __init__(self): ...              # Extra method not required by the ABC
    def __getitem__(self, index):  ...   # Abstract method
    def __len__(self):  ...              # Abstract method
    def count(self, value): ...          # Mixin method
    def index(self, value): ...          # Mixin method
    
    
Sequence.register(D)                     # Register instead of inherit

>>> issubclass(D, Sequence)
True
>>> isinstance(D(), Sequence)
True
```


## 自省（Introspection）
Variables
```python
<list> = dir()                             # Names of local variables (incl. functions).
<dict> = vars()                            # Dict of local variables. Also locals().
<dict> = globals()                         # Dict of global variables.
```
Attributes
```python
<list> = dir(<object>)                     # Names of object's attributes (incl. methods).
<dict> = vars(<object>)                    # Dict of object's fields. Also <obj>.__dict__.
<bool> = hasattr(<object>, '<attr_name>')  # Checks if getattr() raises an error.
value  = getattr(<object>, '<attr_name>')  # Raises AttributeError if attribute is missing.
setattr(<object>, '<attr_name>', value)    # Only works on objects with __dict__ attribute.
delattr(<object>, '<attr_name>')           # Equivalent to `del <object>.<attr_name>`.
```
Parameters
```python
from inspect import signature
<sig>        = signature(<function>)
no_of_params = len(<sig>.parameters)
param_names  = list(<sig>.parameters.keys())
param_kinds  = [a.kind for a in <sig>.parameters.values()]
```


## 元类（MetaClass）
创建类的类。可以对类内部的定义（包括类属性和类方法）进行动态的修改  <br />  类用于创建类实例；元类用于创建类。 即：元类 -> 类 -> 类实例

**type(object, bases, dict)**

- object：类的名称
- bases：存储的是该类的父类的元组
- dict：类内定义的属性或者方法

条件

- 必须显式继承自 type 类；
- 类中需要定义并实现 __new__() 方法并返回该类的一个实例对象（使用元类创建类时， __new__() 方法会自动被执行，用来修改新建的类）
```python
# 定义一个元类
class Meta(type):
    # cls代表动态修改的类
    # name代表动态修改的类名
    # bases代表被动态修改的类的所有父类
    # attr代表被动态修改的类的所有属性、方法组成的字典
    def __new__(cls, name, bases, attrs):
        # 动态为该类添加一个name属性
        attrs['name'] = "元子"
        attrs['say'] = lambda self: print("调用 say() 实例方法")
        return super().__new__(cls,name,bases,attrs)
    
#指定元类
class Boy(object, metaclass=Meta):
    pass


boy = Boy()
print(boy.name)
boy.say()
```

单例模式
```python
class Singleton:
      def __new__(cls,*args,**kwargs):
          if not hasattr(cls, '_instance'):
              _instance = super().__new__(cls,*args,**kwargs)
              cls._instance = _instance
          return cls._instance
    
    
  class MyClass(Singleton):
      pass
    
    
  c1 = MyClass()
  c2 = MyClass()
  print(c1 is c2)
```



# File
**open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)**

- file: 文件路径（相对或者绝对路径）
- mode: 文件打开模式
- buffering: 设置缓冲
- encoding: 一般使用utf8
- errors: 报错级别
- newline: 区分换行符
- closefd: 传入的file参数类型
- opener



**mode**

| 字符 | 意义 |
| --- | --- |
| 'r' | 读取（默认） |
| 'w' | 写入，并先截断文件 |
| 'x' | 排它性创建，如果文件已存在则失败 |
| 'a' | 写入，如果文件存在则在末尾追加 |
| 'b' | 二进制模式 |
| 't' | 文本模式（默认） |
| '+' | 打开用于更新（读取与写入） |

| 方法 | 描述 |
| --- | --- |
| [close()](https://www.w3school.com.cn/python/ref_file_close.asp) | 关闭文件。 |
| detach() | 从缓冲区返回分离的原始流（raw stream）。 |
| [fileno()](https://www.w3school.com.cn/python/ref_file_fileno.asp) | 从操作系统的角度返回表示流的数字。 |
| [flush()](https://www.w3school.com.cn/python/ref_file_flush.asp) | 刷新内部缓冲区。 |
| [isatty()](https://www.w3school.com.cn/python/ref_file_isatty.asp) | 返回文件流是否是交互式的。 |
| [read()](https://www.w3school.com.cn/python/ref_file_read.asp) | 返回文件内容。 |
| [readable()](https://www.w3school.com.cn/python/ref_file_readable.asp) | 返回是否能够读取文件流。 |
| [readline()](https://www.w3school.com.cn/python/ref_file_readline.asp) | 返回文件中的一行。 |
| [readlines()](https://www.w3school.com.cn/python/ref_file_readlines.asp) | 返回文件中的行列表。 |
| [seek()](https://www.w3school.com.cn/python/ref_file_seek.asp) | 更改文件位置。 |
| [seekable()](https://www.w3school.com.cn/python/ref_file_seekable.asp) | 返回文件是否允许我们更改文件位置。 |
| [tell()](https://www.w3school.com.cn/python/ref_file_tell.asp) | 返回当前的文件位置。 |
| [truncate()](https://www.w3school.com.cn/python/ref_file_truncate.asp) | 把文件调整为指定的大小。 |
| [writeable()](https://www.w3school.com.cn/python/ref_file_writeable.asp) | 返回是否能够写入文件。 |
| [write()](https://www.w3school.com.cn/python/ref_file_write.asp) | 把指定的字符串写入文件。 |
| [writelines()](https://www.w3school.com.cn/python/ref_file_writelines.asp) | 把字符串列表写入文件。 |

使用 with 关键字，在结束后自动关闭文件
```python
>>> with open('/tmp/foo.txt', 'r') as f:
...     read_data = f.read()
>>> f.closed
True
```


**f.seek(offset, from_what) **  <br />  from_what 的值, 如果是 0 表示开头, 如果是 1 表示当前位置, 2 表示文件的结尾

- seek(x,0) ： 从起始位置即文件首行首字符开始移动 x 个字符
- seek(-x,2)：表示从文件的结尾往前移动x个字符


# Module & Package
一个模块：一个包含Python定义和语句的文件，即一个.py文件

**模块导入： import [package.]module*	[as alias]**  <br />  **from [package.]module import name [as alias]**  <br />  全导入： from module import *		(不推荐)

每个模块都有一个__name__属性，当其值是'__main__'时，表明该模块自身在运行，否则是被引入。

包 ：按目录来组织模块的方法，一种通过用“带点号的模块名”来构造 Python 模块命名空间的方法  <br />  每一个包目录下面必须有一个__init__.py，可以是空文件  <br />   __init__.py 代码定义了一个名为 __all__ 的列表，它是 from package import * 时导入的模块名列表  <br />  __pycache__ 目录里缓存了每个模块的编译后版本，名称为 module.version.pyc

- 常规包：通常以一个包含 __init__.py 文件的目录形式实现。 当一个常规包被导入时，这个 __init__.py 文件会隐式地被执行，它所定义的对象会被绑定到该包命名空间中的名称。
```python
parent/
    __init__.py
    one/
        __init__.py
    two/
        __init__.py
    three/
        __init__.py
```

- 命名空间包：由多个 部分 构成的，每个部分为父包增加一个子包。 各个部分可能处于文件系统的不同位置。

# 类型注解
提供给编辑器进行类型检查的机会，对 Python 程序的运行不会产生任何影响。  <br />  [typing](https://docs.python.org/zh-cn/3/library/typing.html#module-typing) --- 类型提示支持

**变量注解**
```python
a: int = 3
b: float = 3.14
c: str = 'abc'
d: bool = False
```
**函数注解**
```python
def add(first: int, second: float = 5.5) -> NoReturn:    # 无返回值，非None
    return first + second
```
**容器类型**
```python
from typing import List, Dict, Tuple    # Python 3.9+ 无需导入
# 参数1: 元素为 int 的列表
# 参数2: 键为字符串，值为 int 的字典
# 返回值: 包含两个元素的元组
def mix(scores: List[int], ages: Dict[str, int]) -> Tuple[int, int]:
    return (0, 0)
```
**类型别名**
```python
from typing import Tuple

# 类型别名
Vector2D = Tuple[int, int]

def foo(vector: Vector2D):
    print(vector)
foo(vector=(1, 2))
# Output: (1, 2)



from typing import NewType
from typing import Tuple

# 创建新类型
Vector3D = NewType('Vector3D', Tuple[int, int, int])
def bar(vector: Vector3D):
    print(vector)
    
# 传入参数必须是 Vector3D 的“实例”
v_3d = Vector3D((4, 5, 6))
bar(vector=v_3d)
```

typing.[**Any**](https://docs.python.org/zh-cn/3/library/typing.html#typing.Any)	不受限的特殊类型，所有类型都与 Any 兼容  <br />  typing.**NoReturn**	标记没有返回值的函数的特殊类型  <br />  typing.**Union**	参数必须是某种类型，且至少有一个
```python
Union[int, str] == int | str
```
typing.**Optional**	可选类型。
```python
Optional[X] = X | None = Union[X, None]
```
typing.**Callable	**可调类型； Callable[[int], str] 是把（int）转为 str 的函数。  <br />  typing.**Literal**	表示类型检查器对应变量或函数参数的值等价于给定字面量（或多个字面量之一）的类型  <br />  typing.**ClassVar**	标记类变量的特殊类型构造器。  <br />  typing.**Final**	不能再次赋值或在子类中重写的特殊类型构造器  <br />  class typing.**Generic**		用于泛型类型的抽象基类。  <br />  class typing.**TypeVar**	类型变量。
```python
T = TypeVar('T')  # Can be anything
A = TypeVar('A', str, bytes)  # Must be str or bytes
```
typing.**AnyStr	** AnyStr = TypeVar('AnyStr', str, bytes)  <br />  class typing.**Protocol**(Generic)	Protocol 类的基类。  <br />  typing.**cast**(typ, val)	把值强制转换为类型。  <br />  _@_typing. **overload	**修饰支持多个不同参数类型组合的函数或方法。  <br />  _@_typing. **final	**被装饰的方法不能被覆盖，且被装饰的类不能作为子类的装饰器  <br />  内省辅助器  <br />  typing.**get_type_hints**(obj, globalns=None, localns=None, include_extras=False)	返回函数、方法、模块、类对象的类型提示的字典  <br />  typing.**get_args**(tp)  <br />  typing.**get_origin**(tp)	为泛型类型与特殊类型形式提供了基本的内省功能。

# [内置函数](https://docs.python.org/zh-cn/3/library/functions.html)
| **函数** | **描述** |
| --- | --- |
| [abs()](https://www.w3school.com.cn/python/ref_func_abs.asp) | 返回数的绝对值 |
| [all()](https://www.w3school.com.cn/python/ref_func_all.asp) | 如果可迭代对象中的所有项均为 true，则返回 True。 |
| [any()](https://www.w3school.com.cn/python/ref_func_any.asp) | 如果可迭代对象中的任何项为 true，则返回 True。 |
| [ascii()](https://www.w3school.com.cn/python/ref_func_ascii.asp) | 返回对象的可读版本。用转义字符替换 none-ascii 字符。 |
| [aiter()](https://docs.python.org/zh-cn/3/library/functions.html#aiter) | 返回 [asynchronous iterable](https://docs.python.org/zh-cn/3/glossary.html#term-asynchronous-iterable) 的 [asynchronous iterator](https://docs.python.org/zh-cn/3/glossary.html#term-asynchronous-iterator) 。相当于调用 x.__aiter__() |
| [anext()](https://docs.python.org/zh-cn/3/library/functions.html#anext) | 当进入 await 状态时，从给定 [asynchronous iterator](https://docs.python.org/zh-cn/3/glossary.html#term-asynchronous-iterator) 返回下一数据项，迭代完毕则返回 _default_ |
| [bin()](https://www.w3school.com.cn/python/ref_func_bin.asp) | 返回数的二进制版本。 |
| [bool()](https://www.w3school.com.cn/python/ref_func_bool.asp) | 返回指定对象的布尔值。 |
| [bytearray()](https://www.w3school.com.cn/python/ref_func_bytearray.asp) | 返回字节数组。 |
| [bytes()](https://www.w3school.com.cn/python/ref_func_bytes.asp) | 返回字节对象。 |
| [callable()](https://www.w3school.com.cn/python/ref_func_callable.asp) | 如果指定的对象是可调用的，则返回 True，否则返回 False。 |
| [chr()](https://www.w3school.com.cn/python/ref_func_chr.asp) | 返回指定 Unicode 代码中的字符。 |
| @classmethod | 把方法转换为类方法。 |
| [compile()](https://www.w3school.com.cn/python/ref_func_compile.asp) | 把指定的源作为对象返回，准备执行。 |
| [complex()](https://www.w3school.com.cn/python/ref_func_complex.asp) | 返回复数。 |
| [delattr()](https://www.w3school.com.cn/python/ref_func_delattr.asp) | 从指定的对象中删除指定的属性（属性或方法）。 |
| [dict()](https://www.w3school.com.cn/python/ref_func_dict.asp) | 返回字典（数组）。 |
| [dir()](https://www.w3school.com.cn/python/ref_func_dir.asp) | 返回指定对象的属性和方法的列表。 |
| [divmod()](https://www.w3school.com.cn/python/ref_func_divmod.asp) | 当参数1除以参数2时，返回商和余数。 |
| [enumerate()](https://www.w3school.com.cn/python/ref_func_enumerate.asp) | 获取集合（例如元组）并将其作为枚举对象返回。 |
| [eval()](https://www.w3school.com.cn/python/ref_func_eval.asp) | 评估并执行表达式。 |
| [exec()](https://www.w3school.com.cn/python/ref_func_exec.asp) | 执行指定的代码（或对象）。 |
| [filter()](https://www.w3school.com.cn/python/ref_func_filter.asp) | 使用过滤器函数排除可迭代对象中的项目。 |
| [float()](https://www.w3school.com.cn/python/ref_func_float.asp) | 返回浮点数。 |
| [format()](https://www.w3school.com.cn/python/ref_func_format.asp) | 格式化指定值。 |
| [frozenset()](https://www.w3school.com.cn/python/ref_func_frozenset.asp) | 返回 frozenset 对象。 |
| [getattr()](https://www.w3school.com.cn/python/ref_func_getattr.asp) | 返回指定属性的值（属性或方法）。 |
| [globals()](https://www.w3school.com.cn/python/ref_func_globals.asp) | 以字典返回当前全局符号表。 |
| [hasattr()](https://www.w3school.com.cn/python/ref_func_hasattr.asp) | 如果指定的对象拥有指定的属性（属性/方法），则返回 True。 |
| hash() | 返回指定对象的哈希值。 |
| help() | 执行内建的帮助系统。 |
| [hex()](https://www.w3school.com.cn/python/ref_func_hex.asp) | 把数字转换为十六进制值。 |
| [id()](https://www.w3school.com.cn/python/ref_func_id.asp) | 返回对象的 id。 |
| [input()](https://www.w3school.com.cn/python/ref_func_input.asp) | 允许用户输入。 |
| [int()](https://www.w3school.com.cn/python/ref_func_int.asp) | 返回整数。 |
| [isinstance()](https://www.w3school.com.cn/python/ref_func_isinstance.asp) | 如果指定的对象是指定对象的实例，则返回 True。 |
| [issubclass()](https://www.w3school.com.cn/python/ref_func_issubclass.asp) | 如果指定的类是指定对象的子类，则返回 True。 |
| [iter()](https://www.w3school.com.cn/python/ref_func_iter.asp) | 返回迭代器对象。 |
| [len()](https://www.w3school.com.cn/python/ref_func_len.asp) | 返回对象的长度。 |
| [list()](https://www.w3school.com.cn/python/ref_func_list.asp) | 返回列表。 |
| [locals()](https://www.w3school.com.cn/python/ref_func_locals.asp) | 返回当前本地符号表的更新字典。 |
| [map()](https://www.w3school.com.cn/python/ref_func_map.asp) | 返回指定的迭代器，其中指定的函数应用于每个项目。 |
| [max()](https://www.w3school.com.cn/python/ref_func_max.asp) | 返回可迭代对象中的最大项目。 |
| [memoryview()](https://www.w3school.com.cn/python/ref_func_memoryview.asp) | 返回内存视图（memory view）对象。 |
| [min()](https://www.w3school.com.cn/python/ref_func_min.asp) | 返回可迭代对象中的最小项目。 |
| [next()](https://www.w3school.com.cn/python/ref_func_next.asp) | 返回可迭代对象中的下一项。 |
| [object()](https://www.w3school.com.cn/python/ref_func_object.asp) | 返回新对象。 |
| [oct()](https://www.w3school.com.cn/python/ref_func_oct.asp) | 把数转换为八进制。 |
| [open()](https://www.w3school.com.cn/python/ref_func_open.asp) | 打开文件并返回文件对象。 |
| [ord()](https://www.w3school.com.cn/python/ref_func_ord.asp) | 转换表示指定字符的 Unicode 的整数。 |
| [pow()](https://www.w3school.com.cn/python/ref_func_pow.asp) | 返回 x 的 y 次幂的值。 |
| [print()](https://www.w3school.com.cn/python/ref_func_print.asp) | 打印标准输出设备。 |
| property() | 获取、设置、删除属性。 |
| [range()](https://www.w3school.com.cn/python/ref_func_range.asp) | 返回数字序列，从 0 开始且以 1 为增量（默认地）。 |
| repr() | 返回对象的可读版本。 |
| [reversed()](https://www.w3school.com.cn/python/ref_func_reversed.asp) | 返回反转的迭代器。 |
| [round()](https://www.w3school.com.cn/python/ref_func_round.asp) | 对数进行舍入。 |
| [set()](https://www.w3school.com.cn/python/ref_func_set.asp) | 返回新的集合对象。 |
| [setattr()](https://www.w3school.com.cn/python/ref_func_setattr.asp) | 设置对象的属性（属性/方法）。 |
| [slice()](https://www.w3school.com.cn/python/ref_func_slice.asp) | 返回 slice 对象。 |
| [sorted()](https://www.w3school.com.cn/python/ref_func_sorted.asp) | 返回排序列表。 |
| @staticmethod() | 把方法转换为静态方法。 |
| [str()](https://www.w3school.com.cn/python/ref_func_str.asp) | 返回字符串对象。 |
| [sum()](https://www.w3school.com.cn/python/ref_func_sum.asp) | 对迭代器的项目进行求和。 |
| [super()](https://www.w3school.com.cn/python/ref_func_super.asp) | 返回表示父类的对象。 |
| [tuple()](https://www.w3school.com.cn/python/ref_func_tuple.asp) | 返回元组。 |
| [type()](https://www.w3school.com.cn/python/ref_func_type.asp) | 返回对象的类型。 |
| [vars()](https://www.w3school.com.cn/python/ref_func_vars.asp) | 返回对象的 __dict__ 属性。 |
| [zip()](https://www.w3school.com.cn/python/ref_func_zip.asp) | 从两个或多个迭代器返回一个迭代器 |

**input([prompt])——返回str**

**print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)**

- objects -- 复数，表示可以一次输出多个对象。输出多个对象时，需要用 , 分隔。
- sep -- 用来间隔多个对象，默认值是一个空格。
- end -- 用来设定以什么结尾。默认值是换行符 \n
- file -- 要写入的文件对象。
- flush -- 输出是否被缓存通常决定于 file，但如果 flush 关键字参数为 True，流会被强制刷新。

**del var ...**

**def range( [strat,] stop[, step=1] )**  <br />  class range(stop)  <br />  class range(start, stop[, step])


## [copy](https://docs.python.org/zh-cn/3/library/copy.html#module-copy)
**概念**

- 直接赋值：对象的引用（别名）。
- 浅拷贝(copy)：拷贝父对象，不会拷贝对象的内部的子对象。
- 深拷贝(deepcopy)： copy 模块的 deepcopy 方法，完全拷贝了父对象及其子对象。

方法

- copy.copy(x)：返回 x 的浅层复制。
- copy.deepcopy(x[, memo])：返回 x 的深层复制。
- exception copy.error：针对模块特定错误引发。

## [math](https://docs.python.org/zh-cn/3/library/math.html#module-math)
| 函数 | 返回值 ( 描述 ) |
| --- | --- |
| abs(x) | 返回数字的绝对值，如abs(-10) 返回 10 |
| ceil(x) | 向上取整，如math.ceil(4.1) 返回 5 |
| comb(n,k) | 二项式系数：n! / (k! * (n - k)!) |
| copysign(x, y) | 返回一个基于 x 的绝对值和 y 的符号的浮点数 |
| exp(x) | 返回e的x次幂，如math.exp(1) 返回2.718281828459045 |
| fabs(x) | 返回数字的绝对值，如math.fabs(-10) 返回10.0 |
| factorial(x) | 返回 x 的阶乘 |
| floor(x) | 向下取整，如math.floor(4.9)返回 4 |
| frexp(x) | 返回 x 的尾数和指数作为对`(m, e)`  <br />  ，即 x == m * 2**e |
| fsum(iterable) | 返回迭代中的精确浮点值 |
| gcd(a, b) | 返回整数 a 和 b 的最大公约数，gcd(0, 0) 返回 0 |
| isclose(a, b, *, rel_tol=1e-09, abs_tol=0.0) | 若 a 和 b 的值比较接近则返回 True，否则返回 False |
| ldexp(x, i) | 返回 x * (2**i) |
| log(x[, base]) | 取对数，默认base=math.e |
| log10(x)，log2(x) | 更准确 |
| max(x1, x2,...) | 返回给定参数的最大值，参数可以为序列。 |
| min(x1, x2,...) | 返回给定参数的最小值，参数可以为序列。 |
| modf(x) | 返回x的整数部分与小数部分，两部分的数值符号与x相同，整数部分以浮点型表示。 |
| pow(x, y [,z]) | pow(x,y) %z |
| perm(n, k=None) | 返回不重复且无顺序地从 n 项中选择 k 项的方式总数，n! / (n - k)! |
| prod(iterable, *, start=1) | 累积 |
| round(x [,n]) | 返回浮点数x的四舍五入值，n代表舍入到小数点后的位数。 |
| sqrt(x) | 开平方 |
| divmod(x,y) | 返回Tuple（x/y，x%y) |
| trunc(x) | 返回 Real 值 x 截断为 Integral |

**常数**

- math.pi： π = 3.141592...，精确到可用精度。
- math.e： e = 2.718281...，精确到可用精度。
- math.tau：τ = 6.283185...，精确到可用精度。Tau = 2π
- math.inf：浮点正无穷大。 （负无穷大-math.inf ）即 float('inf')
- math.nan：浮点“非数字”（NaN）值。 即 float('nan')

**三角函数**

| 函数 | 描述 |
| --- | --- |
| acos(x) | 返回x的反余弦弧度值。 |
| asin(x) | 返回x的反正弦弧度值。 |
| atan(x) | 返回x的反正切弧度值。 |
| atan2(y, x) | 返回给定的 X 及 Y 坐标值的反正切值。 |
| cos(x) | 返回x的弧度的余弦值。 |
| dist(p, q) | 返回 p 与 q 两点之间的欧几里得距离 |
| hypot(x, y) | 返回欧几里德范数 sqrt(x_x + y_y)。 |
| sin(x) | 返回的x弧度的正弦值。 |
| tan(x) | 返回x弧度的正切值。 |
| degrees(x) | 将弧度转换为角度,如degrees(math.pi/2) ， 返回90.0 |
| radians(x) | 将角度转换为弧度 |


## [statistics](https://docs.python.org/zh-cn/3/library/statistics.html#module-statistics)
| [mean()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.mean) | 数据的算术平均数（“平均数”）。 |
| --- | --- |
| [fmean()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.fmean) | 快速的，浮点算数平均数。 |
| [geometric_mean()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.geometric_mean) | 数据的几何平均数 |
| [harmonic_mean()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.harmonic_mean) | 数据的调和均值 |
| [median()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.median) | 数据的中位数（中间值） |
| [median_low()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.median_low) | 数据的低中位数 |
| [median_high()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.median_high) | 数据的高中位数 |
| [median_grouped()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.median_grouped) | 分组数据的中位数，即第50个百分点。 |
| [mode()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.mode) | 离散的或标称的数据的单模（最常见的值）。 |
| [multimode()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.multimode) | 离散的或标称的数据的模式列表（最常见的值）。 |
| [quantiles()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.quantiles) | 将数据以相等的概率分为多个间隔。 |

| [pstdev()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.pstdev) | 数据的总体标准差 |
| --- | --- |
| [pvariance()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.pvariance) | 数据的总体方差 |
| [stdev()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.stdev) | 数据的样本标准差 |
| [variance()](https://docs.python.org/zh-cn/3/library/statistics.html#statistics.variance) | 数据的样本方差 |


## [random](https://docs.python.org/zh-cn/3/library/random.html?highlight=%E7%94%9F%E6%88%90%E5%99%A8#module-random)
seed(a=None, version=2)：初始化随机数生成器  <br />  getstate()：返回捕获生成器当前内部状态的对象  <br />  setstate(state)：state 是从 getstate() 获得的，并且 setstate() 将生成器的内部状态恢复到 getstate() 被调用时的状态  <br />  getrandbits(k)：返回带有 k 位随机的Python整数

randrange(start, stop[, step])：从 range(start, stop, step) 返回一个随机选择的元素  <br />  randint(a, b)：返回随机整数 N 满足 a <= N <= b  <br />  choice(seq)：从非空序列 seq 返回一个随机元素  <br />  choices(population, weights=None, _, cum_weights=None, k=1)：从_population*中选择替换，返回大小为 k 的元素列表  <br />  shuffle(x[, random])：将序列 x 随机打乱位置  <br />  sample(population, k)：返回从总体序列或集合中选择的唯一元素的 k 长度列表  <br />  random()：返回 [0.0, 1.0) 范围内的下一个随机浮点数  <br />  uniform(a, b)：返回一个随机浮点数 N ，当 a <= b 时 a <= N <= b ，当 b < a 时 b <= N <= a  <br />  triangular(low, high, mode)：返回一个随机浮点数 N ，使得 low <= N <= high 并在这些边界之间使用指定的 mode  <br />  betavariate(alpha, beta)：Beta 分布  <br />  expovariate(lambd)：指数分布  <br />  gammavariate(alpha, beta)：Gamma 分布  <br />  gauss(mu, sigma)：高斯分布  <br />  lognormvariate(mu, sigma)：对数正态分布  <br />  normalvariate(mu, sigma)：正态分布  <br />  vonmisesvariate(mu, kappa)：冯·米塞斯（von Mises）分布  <br />  paretovariate(alpha)：帕累托分布  <br />  weibullvariate(alpha, beta)：威布尔分布  <br />  **class random.Random([seed])**


# CLI

`python [-bBdEhiIOqsSuvVWx?] [-c 'command' | -m module-name | script | - ] [args]`

程序

- python.exe	   运行时，会弹出一个黑色的控制台窗口
- pythonw.exe	无窗口的Python可执行程序，即运行时，没有窗口，代码在后台执行。用于运行GUI（窗口程序），会忽略程序中向控制台输出的信息



**文件**

- .py
- .pyw	用来运行开发的纯图形界面程序的，
- .pyc	由.py文件经过编译后生成的字节码文件，其加载速度相对于.py快些，还可实现源码隐藏
- .pyo	优化编译后的程序（相比于.pyc文件更小），也可以提高加载速度

第一次执行代码的时，Python解释器把编译的字节码放在__pycache__文件夹中，这样以后再次运行的话，如果被调用的模块未发生改变，那就跳过编译，直接去__pycache__文件夹中去运行相关的*.pyc文件，缩短时间。


## pip
Python 包管理工具，提供了对Python 包的查找、下载、安装、卸载的功能。
```python
pip --version

pip --help
pip install [<pacakage> | -r requirements.txt]
pip install [-U <pacakage> | <pacakage> --upgrade]  //升级指定的包，通过使用==, >=, <=, >, < 指定一个版本号。
pip uninstall [<pacakage> | -r requirements.txt]
pip search <key>  //搜索包
pip show <pacakage>  //显示安装包信息
pip show -f <pacakage>  //查看指定包的详细信息
pip list  //列出已安装的包
pip list -o  //查看可升级的包
pip freeze  //按照一定格式输出安装的包及版本信息
pip wheel <包名>  //打包
```

## [venv](https://docs.python.org/zh-cn/3/library/venv.html#module-venv)
**虚拟环境（virtualenv）**是 Python 多版本管理的利器，可以使每个项目环境与其他项目独立开来，保持环境的干净，解决包冲突问题。
```python
venv [-h] [--system-site-packages] [--symlinks | --copies] [--clear]
            [--upgrade] [--without-pip] [--prompt PROMPT]
            ENV_DIR [ENV_DIR ...]
        
Creates virtual Python environments in one or more target directories.

positional arguments:
  ENV_DIR               A directory to create the environment in.

optional arguments:
  -h, --help            show this help message and exit
  --system-site-packages
                        Give the virtual environment access to the system
                        site-packages dir.
  --symlinks            Try to use symlinks rather than copies, when symlinks
                        are not the default for the platform.
  --copies              Try to use copies rather than symlinks, even when
                        symlinks are the default for the platform.
  --clear               Delete the contents of the environment directory if it
                        already exists, before environment creation.
  --upgrade             Upgrade the environment directory to use this version
                        of Python, assuming Python has been upgraded in-place.
  --without-pip         Skips installing or upgrading pip in the virtual
                        environment (pip is bootstrapped by default)
  --prompt PROMPT       Provides an alternative prompt prefix for this
                        environment.
```
创建虚拟环境  <br />  **python -m venv  venv_name**

激活虚拟环境
```python
在Posix标准平台下
$ source <venv>/bin/activate
在Windows cmd下
C:> <venv>/Scripts/activate.bat
在Windows PowerShell下
C:> <venv>/Scripts/Activate.ps1
```

## conda
```python
clean        Remove unused packages and caches.
config       Modify configuration values in .condarc. This is modeled after the git config command. Writes to the
             user .condarc file (C:\Users\Hyle\.condarc) by default.
create       Create a new conda environment from a list of specified packages.
help         Displays a list of available conda commands and their help strings.
info         Display information about current conda install.
init         Initialize conda for shell interaction. [Experimental]
install      Installs a list of packages into a specified conda environment.
list         List linked packages in a conda environment.
package      Low-level conda package utility. (EXPERIMENTAL)
remove       Remove a list of packages from a specified conda environment.
uninstall    Alias for conda remove.
run          Run an executable in a conda environment. [Experimental]
search       Search for packages and display associated information. The input is a MatchSpec, a query language
             for conda packages. See examples below.
update       Updates conda packages to the latest compatible version.
upgrade      Alias for conda update.
```
管理包
```python
conda update [-n myenv] --all   # updates all packages
conda install <package> ...
conda install <package=ver>
conda remove <package>
conda search <package> # 可以进行模糊查询
conda list [-r]  # 列出所有包
conda clean --packages  //删除从不使用的包
conda clean -a   // 删除索引缓存、锁定文件、未使用过的包和tar包。
```
```python
# Update Anaconda
conda update conda
conda update anaconda=VersionNumber(2019.10)
```
[metapackages](https://conda.io/projects/conda/en/latest/glossary.html#metapackage)

| Task | Conda | Pip |
| --- | --- | --- |
| Install a package | conda install $PACKAGE_NAME | pip install $PACKAGE_NAME |
| Update a package | conda update --name $ENVIRONMENT_NAME $PACKAGE_NAME | pip install --upgrade $PACKAGE_NAME |
| Update package manager | conda update conda | Linux/macOS: pip install -U pip   <br />  Win: python -m pip install -U pip |
| Uninstall a package | conda remove --name $ENVIRONMENT_NAME $PACKAGE_NAME | pip uninstall $PACKAGE_NAME |
| Create an environment | conda create --name $ENVIRONMENT_NAME python | X |
| Activate an environment | conda activate $ENVIRONMENT_NAME* | X |
| Deactivate an environment | conda deactivate | X |
| Search available packages | conda search $SEARCH_TERM | pip search $SEARCH_TERM |
| Install package from specific source | conda install --channel $URL $PACKAGE_NAME | pip install --index-url $URL $PACKAGE_NAME |
| List installed packages | conda list --name $ENVIRONMENT_NAME | pip list |
| Create requirements file | conda list --export | pip freeze |
| List all environments | conda info --envs | X |
| Install other package manager | conda install pip | pip install conda |
| Install Python | conda install python=x.x | X |
| Update Python | conda update python* | X |


# Appendix
[python-cheatsheet](https://github.com/gto76/python-cheatsheet)
