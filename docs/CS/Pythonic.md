---
title: Pythonic
created_at: 2022-02-20T02:15:13.000Z
updated_at: 2023-01-08T10:55:11.000Z
word_count: 4480
---
# Pythonic  
## Pythonic
> import this
> 
> The Zen of Python
> by Tim Peters
> 
> Beautiful is better than ugly.
> 优美胜于丑陋（Python 以编写优美的代码为目标）
> Explicit is better than implicit.
> 明了胜于晦涩（命名规范，风格相似）
> Simple is better than complex.
> 简洁胜于复杂（不应有复杂的内部实现）
> Complex is better than complicated.
> 复杂胜于凌乱（如果复杂不可避免，那代码间也不能有难懂的关系，保持接口简洁）
> Flat is better than nested.
> 扁平胜于嵌套（不能有太多的嵌套）
> Sparse is better than dense.
> 间隔胜于紧凑（适当的间隔，不要奢望一行代码解决问题）
> Readability counts.
> 可读性很重要
> Special cases aren't special enough to break the rules.
> Although practicality beats purity.
> 即便假借特例的实用性之名，也不可违背这些规则
> Errors should never pass silently.
> Unless explicitly silenced.
> 不要包容所有错误，除非你确定需要这样做（精准地捕获异常）
> In the face of ambiguity, refuse the temptation to guess.
> 当存在多种可能，不要尝试去猜测
> There should be one-- and preferably only one --obvious way to do it.
> 而是尽量找一种，最好是唯一一种明显的解决方案（如果不确定，就用穷举法）
> Although that way may not be obvious at first unless you're Dutch.
> 虽然这并不容易，因为你不是 Python 之父
> Now is better than never.
> Although never is often better than _right_ now.
> 做也许好过不做，但不假思索就动手还不如不做（动手之前要细思量）
> If the implementation is hard to explain, it's a bad idea.
> If the implementation is easy to explain, it may be a good idea.
> 如果你无法向人描述你的方案，那肯定不是一个好方案；反之亦然（方案测评标准）
> Namespaces are one honking great idea -- let's do more of those!
> 命名空间是一种绝妙的理念，我们应当多加利用（倡导与号召）


```python
a > b > c

a = c if c > b else b
```


**编码风格——**[**PEP 8**](https://www.python.org/dev/peps/pep-0008/)**（**Python Enhancement Proposal）

- 用4个空格缩进，不用制表符
- 一行应不超过79个字符
- 每个 import 语句只导入一个模块，每个导入应该独占一行
- 使用必要的空行可以增加代码的可读性，通常在顶级定义（如函数或类的定义）之间空两行，而方法定义之间空一行，另外在用于分隔某些功能的位置也可以空一行

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

**空格**

- 括号内不要有空格
- 不要在逗号, 分号, 冒号前面加空格, 但应该在它们后面加(行尾除外)
- 在二元操作符两边都加上一个空格
- 当’=’用于指示关键字参数或默认参数值时, 不要在其两侧使用空格

**文档字符串**  <br />  函数必须要有, 除非它外部不可见、非常短小、简单明了

- Args：文档字符串应该包含函数做什么, 以及输入和输出的详细描述
- Returns (Yields)：描述返回值的类型和语义. 如果函数返回None, 这一部分可以省略
- Raises：列出与接口有关的所有异常
```python
def fetch_bigtable_rows(big_table, keys, other_silly_variable=None):
    """Fetches rows from a Bigtable.

    Retrieves rows pertaining to the given keys from the Table instance
    represented by big_table.  Silly things may happen if
    other_silly_variable is not None.

    Args:
        big_table: An open Bigtable Table instance.
        keys: A sequence of strings representing the key of each table row
            to fetch.
        other_silly_variable: Another optional variable, that has a much
            longer name than the other args, and which does nothing.

    Returns:
        A dict mapping keys to the corresponding table row data
        fetched. Each row is represented as a tuple of strings. For
        example:

        {'Serak': ('Rigel VII', 'Preparer'),
         'Zim': ('Irk', 'Invader'),
         'Lrrr': ('Omicron Persei 8', 'Emperor')}

        If a key from the keys argument is missing from the dictionary,
        then that row was not found in the table.

    Raises:
        IOError: An error occurred accessing the bigtable.Table object.
    """
    pass
```

如果一个类不继承自其它类, 就显式继承object，嵌套类也一样。
```python
class SampleClass(object):
    """Summary of class here.

    Longer class information....
    Longer class information....

    Attributes:
        likes_spam: A boolean indicating if we like SPAM or not.
        eggs: An integer count of the eggs we have laid.
    """

    def __init__(self, likes_spam=False):
        """Inits SampleClass with blah."""
        self.likes_spam = likes_spam
        self.eggs = 0

    def public_method(self):
        """Performs operation blah."""
```

为临时代码使用**TODO注释**
```python
# TODO(kl@gmail.com): Use a "*" here for string repetition.
# TODO(Zeke) Change this to use relations.
```

pydoc以及单元测试要求模块必须是可导入的
```python
def main():
      ...
        
if __name__ == '__main__':
    main()
```



编程规范

与None作比较使用”is [not]“，不用等号  <br />  使用isinstance判断变量类型  <br />  若list成员个数可以预知，创建应预留正好容纳所有成员的空间  <br />  同一个函数/方法的所有分支返回语句必须统一为显示或隐式，不混合使用  <br />  使用单个下划线替代循环体中未使用的循环变量



Eval
```python
>>> from ast import literal_eval
>>> literal_eval('[1, 2, 3]')
[1, 2, 3]
>>> literal_eval('1 + 2')
ValueError: malformed node or string
```

Stopwatch
```python
from time import perf_counter
start_time = perf_counter()
...
duration_in_seconds = perf_counter() - start_time
```

## Format
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



## 类型注解
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


## CLI

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

### [pip](https://pip.pypa.io/en/stable/)
Python 包管理工具，提供了对Python 包的查找、下载、安装、卸载的功能。
```python
pip <command> [options]
  -V, --version
  --no-input                  Disable prompting for input.
  --proxy <proxy>             scheme://[user:passwd@]proxy.server:port.
  --retries <retries>         default 5 times
  --timeout <sec>             Set the socket timeout (default 15 seconds).
  --trusted-host <hostname>   Mark this host or host:port pair as trusted
  --cert <path>               Path to PEM-encoded CA certificate bundle. 
  --cache-dir <dir>           Store the cache data in <dir>.
  --no-cache-dir              Disable the cache.
  --disable-pip-version-check
  --no-color                  Suppress colored output.
  --use-feature <feature>     Enable new functionality

command
pip install [<pacakage> | -r requirements.txt]
pip install [-U <pacakage> | <pacakage> --upgrade]  //升级指定的包，通过使用==, >=, <=, >, < 指定一个版本号。
pip uninstall [<pacakage> | -r requirements.txt]
pip search <key>  //搜索包
pip show [-f] <pacakage>  //查看指定包的详细信息
pip list --outdated --format columns  //查看过时的包
pip freeze  //按照一定格式输出安装的包及版本信息
pip wheel <pacakage>  //打包
pip cache [dir | info | list | remove] // 查看缓存信息

// 配置
pip config [<file-option>] list
pip config [<file-option>] get command.option
pip config [<file-option>] set command.option value
pip config [<file-option>] unset command.option

// 镜像源
pip config set --global global.index-url http://mirrors.aliyun.com/pypi/simple/
pip config set --global install.trusted-host mirrors.aliyun.com
pip config set --global global.disable-pip-version-check True
```


### [venv](https://docs.python.org/zh-cn/3/library/venv.html#module-venv)
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
### conda
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





