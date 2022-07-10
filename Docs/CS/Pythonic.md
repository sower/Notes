
# Pythonic
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

