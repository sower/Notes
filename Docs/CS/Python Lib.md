
# [—— Moudle ——](https://docs.python.org/zh-cn/3/library/index.html)


# —— 数据类型


# [datetime--- 基本的日期和时间类型](https://docs.python.org/zh-cn/3/library/datetime.html)
**常量**

- datetime.MINYEAR——1
- datetime.MAXYEAR——9999

**类**  <br />  class **date**time.date	一个理想化的简单型日期，属性: [year](https://docs.python.org/zh-cn/3/library/datetime.html#datetime.date.year), month, and day。  <br />  class datetime.date(year, month, day)

- classmethod date.today()	返回当前的本地日期
- classmethod date.fromtimestamp(timestamp)	返回对应于 POSIX 时间戳的当地时间
- classmethod date.fromordinal(ordinal)	返回对应于预期格列高利历序号的日期
- classmethod date.fromisoformat(date_string)	返回一个对应于以 YYYY-MM-DD 格式给出的 date_string 的 date 对象

实例方法

- date.replace(year=self.year, month=self.month, day=self.day)	返回一个具有同样值的日期
- date.weekday()	返回一个整数代表星期几，星期一为0，星期天为6
- date.isoweekday()	返回一个整数代表星期几，星期一为1，星期天为7
- date.isoformat()	返回一个以 ISO 8601 格式 YYYY-MM-DD 来表示日期的字符串
- date.strftime(format)	返回一个由显式格式字符串所指明的代表日期的字符串

class datetime.**time**  <br />  一个独立于任何特定日期的理想化时间，属性：[hour](https://docs.python.org/zh-cn/3/library/datetime.html#datetime.time.hour), minute, second, microsecond 和 tzinfo

class datetime.time(hour=0, minute=0, second=0, microsecond=0, tzinfo=None, *, fold=0)

- classmethod time.fromisoformat(time_string)
- time.replace(hour=self.hour, minute=self.minute, second=self.second, microsecond=self.microsecond, tzinfo=self.tzinfo, *, fold=0)
- time.isoformat(timespec='auto')
- time.utcoffset()	如果 tzinfo 为 None，则返回 None，否则返回 self.tzinfo.utcoffset(None)
- time.dst()		如果 tzinfo 为 None，则返回 None，否则返回 self.tzinfo.dst(None)
- time.tzname()	如果 tzinfo 为 None，则返回 None，否则返回 self.tzinfo.tzname(None)

class datetime.**datetime	**日期和时间的结合。

- today()
- now(tz=None)
- utcnow()
- fromtimestamp(timestamp, tz=None)
- utcfromtimestamp(timestamp)	返回对应于 POSIX 时间戳的 UTC datetime，其中 tzinfo 值为 None
- combine(date, time, tzinfo=self.tzinfo)	返回一个新的 datetime 对象

实例方法

- datetime.date()
- datetime.time()	返回具有同样 hour, minute, second, microsecond 和 fold 值的 time 对象
- datetime.timetz()	返回具有同样 hour, minute, second, microsecond, fold 和 tzinfo 属性性的 time 对象
- datetime.astimezone(tz=None)	返回一个具有新的 tzinfo 属性 tz 的 datetime 对象，并会调整日期和时间数据使得结果对应的 UTC 时间与 self 相同，但为 tz 时区的本地时间
- datetime.timestamp()	返回对应于 datetime 实例的 POSIX 时间戳
- datetime.isoformat(sep='T', timespec='auto')	返回一个以 ISO 8601 格式表示的日期和时间字符串
- 'auto': 如果 microsecond 为 0 则与 'seconds' 相同，否则与 'microseconds' 相同。
- 'hours': 以两个数码的 HH 格式 包含 hour。
- 'minutes': 以 HH:MM 格式包含 hour 和 minute。
- 'seconds': 以 HH:MM:SS 格式包含 hour, minute 和 second。
- 'milliseconds': 包含完整时间，但将秒值的小数部分截断至微秒。 格式为 HH:MM:SS.sss
- 'microseconds': 以 HH:MM:SS.ffffff 格式包含完整时间。

class datetime.**timedelta	**表示两个 date 或者 time 的时间间隔，精确到微秒  <br />  class datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)  <br />  所有参数都是可选的并且默认为 0。 这些参数可以是整数或者浮点数，也可以是正数或者负数。

- timedelta.total_seconds()

class datetime.**timezone**	一个实现了 [tzinfo](https://docs.python.org/zh-cn/3/library/datetime.html#datetime.tzinfo) 抽象基类的子类，用于表示相对于 世界标准时间（UTC）的偏移量。  <br />  class datetime.timezone(offset, name=None)		offset 限制于 -timedelta(hours=24) 和 timedelta(hours=24) 之间  <br />  时区转换
```javascript
from datetime import datetime, timedelta, timezone
utc_8 = timezone(timedelta(hours=8))
start = datetime.fromisoformat(datetime.now().date().isoformat()).replace(tzinfo=utc_8)
end = start + timedelta(days=1, hours=3)
print(
    start.astimezone(tz=timezone.utc).isoformat(timespec='milliseconds'),
    end.astimezone(tz=timezone.utc).isoformat(),
    datetime.today().isoformat(timespec='milliseconds'),
    datetime.fromisoformat("2021-10-20T05:41:27").isoformat()
)
```
strftime(format) ：创建由一个显式格式字符串所控制的表示时间的字符串。  <br />  strptime(date_string, format)：根据表示日期和时间的字符串和相应的格式字符串来创建一个 datetime 对象。

| 指令 | 含义 |
| --- | --- |
| %a | 本地化的缩写星期中每日的名称。 |
| %A | 本地化的星期中每日的完整名称。 |
| %b | 本地化的月缩写名称。 |
| %B | 本地化的月完整名称。 |
| %c | 本地化的适当日期和时间表示。 |
| %d | 十进制数 [01,31] 表示的月中日。 |
| %H | 十进制数 [00,23] 表示的小时（24小时制）。 |
| %I | 十进制数 [01,12] 表示的小时（12小时制）。 |
| %j | 十进制数 [001,366] 表示的年中日。 |
| %m | 十进制数 [01,12] 表示的月。 |
| %M | 十进制数 [00,59] 表示的分钟。 |
| %p | 本地化的 AM 或 PM 。 |
| %S | 十进制数 [00,61] 表示的秒。 |
| %U | 十进制数 [00,53] 表示的一年中的周数（星期日作为一周的第一天）作为。在第一个星期日之前的新年中的所有日子都被认为是在第0周。 |
| %w | 十进制数 [0(星期日),6] 表示的周中日。 |
| %W | 十进制数 [00,53] 表示的一年中的周数（星期一作为一周的第一天）作为。在第一个星期一之前的新年中的所有日子被认为是在第0周。 |
| %x | 本地化的适当日期表示。 |
| %X | 本地化的适当时间表示。 |
| %y | 十进制数 [00,99] 表示的没有世纪的年份。 |
| %Y | 十进制数表示的带世纪的年份。 |
| %z | 时区偏移以格式 +HHMM 或 -HHMM 形式的 UTC/GMT 的正或负时差指示，其中H表示十进制小时数字，M表示小数分钟数字 [-23:59, +23:59] 。 |
| %Z | 时区名称（如果不存在时区，则不包含字符）。 |


str互换datetime
```javascript
>>> from datetime import datetime
>>> cday = datetime.strptime('2015-6-1 18:19:59', '%Y-%m-%d %H:%M:%S')
>>> print(cday)
2015-06-01 18:19:59

>>> now = datetime.now()
>>> print(now.strftime('%Y{y}%m{m}%d{d}').format(y='年',m='月',d='日'))
2020年10月18日
```



# [time--- 时间的访问和转换](https://docs.python.org/zh-cn/3/library/time.html)
| 从 | 到 | 使用 |
| --- | --- | --- |
| 自纪元以来的秒数 | UTC 的 [struct_time](https://docs.python.org/zh-cn/3/library/time.html#time.struct_time) | [gmtime()](https://docs.python.org/zh-cn/3/library/time.html#time.gmtime) |
| 自纪元以来的秒数 | 本地时间的 [struct_time](https://docs.python.org/zh-cn/3/library/time.html#time.struct_time) | [localtime()](https://docs.python.org/zh-cn/3/library/time.html#time.localtime) |
| UTC 的 [struct_time](https://docs.python.org/zh-cn/3/library/time.html#time.struct_time) | 自纪元以来的秒数 | [calendar.timegm()](https://docs.python.org/zh-cn/3/library/calendar.html#calendar.timegm) |
| 本地时间的 [struct_time](https://docs.python.org/zh-cn/3/library/time.html#time.struct_time) | 自纪元以来的秒数 | [mktime()](https://docs.python.org/zh-cn/3/library/time.html#time.mktime) |

**class time.struct_time**

| 索引 | 属性 | 值 |
| --- | --- | --- |
| 0 | tm_year | （例如，1993） |
| 1 | tm_mon | range [1, 12] |
| 2 | tm_mday | range [1, 31] |
| 3 | tm_hour | range [0, 23] |
| 4 | tm_min | range [0, 59] |
| 5 | tm_sec | range [0, 61] |
| 6 | tm_wday | range [0, 6] ，周一为 0 |
| 7 | tm_yday | range [1, 366] |
| 8 | tm_isdst | 0, 1 或 -1；如下所示 |
| N/A | tm_zone | 时区名称的缩写 |
| N/A | tm_gmtoff | 以秒为单位的UTC以东偏离 |

- time.sleep(secs)：暂停执行调用线程达到给定的秒数
- time.time() ：返回以浮点数表示的从 epoch 开始的秒数的时间值
- time.ctime([secs])：转换以距离初始纪元的秒数表示的时间，形式 'Sun Jun 20 23:21:05 1993' 代表本地时间
- time.strftime(format[, t])：转换一个元组或 struct_time 表示的由 gmtime() 或 localtime() 返回的时间到由 format 参数指定的字符串
- time.strptime(string[, format])：根据格式解析表示时间的字符串

# [collections--- 容器数据类型](https://docs.python.org/zh-cn/3/library/collections.html)
| [namedtuple()](https://docs.python.org/zh-cn/3/library/collections.html#collections.namedtuple) | 创建命名元组子类的工厂函数 |
| --- | --- |
| [deque](https://docs.python.org/zh-cn/3/library/collections.html#collections.deque) | 类似列表(list)的容器，实现了在两端快速添加(append)和弹出(pop) |
| [ChainMap](https://docs.python.org/zh-cn/3/library/collections.html#collections.ChainMap) | 类似字典(dict)的容器类，将多个映射集合到一个视图里面 |
| [Counter](https://docs.python.org/zh-cn/3/library/collections.html#collections.Counter) | 字典的子类，提供了可哈希对象的计数功能 |
| [OrderedDict](https://docs.python.org/zh-cn/3/library/collections.html#collections.OrderedDict) | 字典的子类，保存了他们被添加的顺序 |
| [defaultdict](https://docs.python.org/zh-cn/3/library/collections.html#collections.defaultdict) | 字典的子类，提供了一个工厂函数，为字典查询提供一个默认值 |
| [UserDict](https://docs.python.org/zh-cn/3/library/collections.html#collections.UserDict) | 封装了字典对象，简化了字典子类化 |
| [UserList](https://docs.python.org/zh-cn/3/library/collections.html#collections.UserList) | 封装了列表对象，简化了列表子类化 |
| [UserString](https://docs.python.org/zh-cn/3/library/collections.html#collections.UserString) | 封装了列表对象，简化了字符串子类化 |


## namedtuple
**namedtuple(typename, field_names, *, rename=False, defaults=None, module=None)**  <br />  元组子类，可以通过域名来获取属性值，也可以通过索引和迭代获取值。
```javascript
>>> from collections import namedtuple
>>> Point = namedtuple('Point', ['x', 'y'])
>>> p = Point(1, 2)
>>> p.x
1
>>> p.y
2
```

## deque
**class collections.deque([iterable[, maxlen]])**	双向队列

- append(x)		添加 x 到右端。
- appendleft(x)		添加 x 到左端。
- clear()		移除所有元素，使其长度为0.
- copy()		创建一份浅拷贝。
- count(x)	计算deque中个数等于 x 的元素。
- extend(iterable)	扩展deque的右侧，通过添加iterable参数中的元素。
- extendleft(iterable)		扩展deque的左侧。左添加时，在结果中iterable参数中的顺序将被反过来添加。
- index(x[, start[, stop]])	返回第 x 个元素（从 start 开始计算，在 stop 之前）。返回第一个匹配，ValueError 。
- insert(i, x) 	在位置 i 插入 x  (如果插入会导致一个限长deque超出长度 maxlen 的话，就升起一个 IndexError )
- pop()		移去并且返回一个元素，deque最右侧的那一个。如果没有元素的话，就升起 IndexError 索引错误。
- popleft()	移去并且返回一个元素，deque最左侧的那一个。如果没有元素的话，就升起 IndexError 索引错误。
- remove(value)	移去找到的第一个 value。 如果没有的话就升起 ValueError 。
- reverse()	将deque逆序排列。返回 None 。
- rotate(n=1)	向右循环移动 n 步。 如果 n 是负数，就向左循环。

如果deque不是空的，向右循环移动一步就等价于 d.appendleft(d.pop()) ， 向左循环一步就等价于 d.append(d.popleft()) 。

只读属性:	**maxlen**——Deque的最大尺寸，如果没有限定的话就是 None 。
```javascript
>>> from collections import deque
>>> d = deque('ghi')                 # make a new deque with three items
>>> for elem in d:                   # iterate over the deque's elements
...     print(elem.upper())
G
H
I
>>> d.append('j')                    # add a new entry to the right side
>>> d.appendleft('f')                # add a new entry to the left side
>>> d                                # show the representation of the deque
deque(['f', 'g', 'h', 'i', 'j'])
>>> d.pop()                          # return and remove the rightmost item
'j'
>>> d.popleft()                      # return and remove the leftmost item
'f'
>>> list(d)                          # list the contents of the deque
['g', 'h', 'i']
>>> d[0]                             # peek at leftmost item
'g'
>>> d[-1]                            # peek at rightmost item
'i'
>>> list(reversed(d))                # list the contents of a deque in reverse
['i', 'h', 'g']
>>> 'h' in d                         # search the deque
True
>>> d.extend('jkl')                  # add multiple elements at once
>>> d
deque(['g', 'h', 'i', 'j', 'k', 'l'])
>>> d.rotate(1)                      # right rotation
>>> d
deque(['l', 'g', 'h', 'i', 'j', 'k'])
>>> d.rotate(-1)                     # left rotation
>>> d
deque(['g', 'h', 'i', 'j', 'k', 'l'])
>>> deque(reversed(d))               # make a new deque in reverse order
deque(['l', 'k', 'j', 'i', 'h', 'g'])
>>> d.clear()                        # empty the deque
>>> d.pop()                          # cannot pop from an empty deque
Traceback (most recent call last):
    File "<pyshell#6>", line 1, in -toplevel-
        d.pop()
IndexError: pop from an empty deque
>>> d.extendleft('abc')              # extendleft() reverses the input order
>>> d
deque(['c', 'b', 'a'])
```

## Counter
**class collections.Counter([iterable-or-mapping])**  <br />  字典的子类，不限制键和值

- elements()：返回一个迭代器，其中每个元素将重复出现计数值所指定次。 元素会按首次出现的顺序返回。 如果一个元素的计数值<1，忽略。
```javascript
>>> c = Counter(a=4, b=2, c=0, d=-2)
>>> sorted(c.elements())
['a', 'a', 'a', 'a', 'b', 'b']
```

- most_common([n])：返回一个列表，其中包含 n 个最常见的元素及出现次数，按常见程度由高到低排序。 如果 n 被省略或为 None，返回计数器中的 所有 元素。 计数值相等的元素按首次出现的顺序排序：
```javascript
>>> Counter('abracadabra').most_common(3)
[('a', 5), ('b', 2), ('r', 2)]
```

- subtract([iterable-or-mapping])：从 迭代对象 或 映射对象 减去元素。输入和输出都可以是0或者负数。
- update([iterable-or-mapping])：从 迭代对象 计数元素或者 从另一个 映射对象 (或计数器) 添加。迭代对象 应该是序列元素，而不是一个 (key, value) 对。
```javascript
>>> c = Counter(a=3, b=1)
>>> d = Counter(a=1, b=2)
>>> c + d                       # add two counters together:  c[x] + d[x]
Counter({'a': 4, 'b': 3})
>>> c - d                       # subtract (keeping only positive counts)
Counter({'a': 2})
>>> c & d                       # intersection:  min(c[x], d[x]) 
Counter({'a': 1, 'b': 1})
>>> c | d                       # union:  max(c[x], d[x])
Counter({'a': 3, 'b': 2})
>>> c = Counter(a=2, b=-4)
>>> +c
Counter({'a': 2})
>>> -c
Counter({'b': 4})
```

## defaultdict
**class collections.defaultdict([default_factory[, ...]])**  <br />  可以一个键映射多个值的默认值字典
```javascript
>>> from collections import defaultdict
>>> dd = defaultdict(lambda: 'N/A')
>>> dd['key1'] = 'abc'
>>> dd['key1'] # key1存在
'abc'
>>> dd['key2'] # key2不存在，返回默认值
'N/A'
```
```javascript
s = [('red', 1), ('blue', 2), ('red', 3), ('blue', 4), ('red', 1), ('blue', 4)]
>>> d = defaultdict(set)
>>> for k, v in s:
...     d[k].add(v)
...
>>> sorted(d.items())
[('blue', {2, 4}), ('red', {1, 3})]
```

## OrderedDict
**class collections.OrderedDict([items])**

- popitem(last=True)：移除并返回一个 (key, value) 键值对。 如果 last 值为真，则按 LIFO 后进先出的顺序返回键值对，否则就按 FIFO 先进先出的顺序返回键值对。
- move_to_end(key, last=True)：将现有 key 移动到有序字典的任一端。 如果 last 为真值（默认）则将元素移至末尾；如果 last 为假值则将元素移至开头。如果 key 不存在则会触发 KeyError


## ChainMap
**class collections.ChainMap(*maps)**  <br />  将多个映射快速的链接到一起  <br />  支持所有常用字典方法。还有一个 maps 属性(attribute)，一个创建子上下文的方法(method)， 一个存取它们首个映射的属性(property)
```javascript
>>> a = {'x': 1, 'z': 3 }
>>> b = {'y': 2, 'z': 4 }
>>> merged = ChainMap(a, b)
>>> merged['x']
1
>>> a['x'] = 42
>>> merged['x'] # Notice change to merged dicts
42
```

# queue --- 一个同步的队列类
**class queue.Queue(maxsize=0)	FIFO**  <br />  maxsize 用于设置可以放入队列中的项目数的上限。当达到这个大小的时候，插入操作将阻塞至队列中的项目被消费掉。如果 maxsize = 0，队列尺寸为无限大。  <br />  **class queue.LifoQueue(maxsize=0)**	LIFO  <br />  **class queue.PriorityQueue(maxsize=0)**	优先级队列
```javascript
from dataclasses import dataclass, field
from typing import Any
@dataclass(order=True)
class PrioritizedItem:
    priority: int
    item: Any=field(compare=False)
```
**class queue.SimpleQueue**		无界的 FIFO 队列构造函数。简单的队列，缺少任务跟踪等高级功能  <br />  **exception queue.Empty**  <br />  **exception queue.Full**

- Queue.qsize()
- Queue.empty()
- Queue.full()
- Queue.put(item, block=True, timeout=None)
- Queue.put_nowait(item)：相当于 put(item, False) 。
- Queue.get(block=True, timeout=None)：从队列中移除并返回一个项目
- Queue.get_nowait()：相当于 get(False) 。
- Queue.task_done()：表示前面排队的任务已经被完成
- Queue.join()：阻塞至队列中所有的元素都被接收和处理完毕

# heapq --- 堆队列算法
> 堆是一个二叉树，它的每个父节点的值都只会小于或大于所有孩子节点（的值）。它使用了数组来实现：从零开始计数，对于所有的 k ，都有 heap[k] <= heap[2_k+1] 和 heap[k] <= heap[2_k+2]。

- 最小堆
- 索引从 0 开始，最小的元素总是在根结点：heap[0]
- pop 方法返回最小的项

方法

- heapq.heappush(heap, item)：将 item 的值加入 heap 中，保持堆的不变性。
- heapq.heappop(heap)：弹出并返回 heap 的最小的元素，保持堆的不变性。如果堆为空，抛出 IndexError 。
- heapq.heappushpop(heap, item)：将 item 放入堆中，然后弹出并返回 heap 的最小元素。该组合操作比先调用  heappush() 再调用 heappop() 运行起来更有效率。
- heapq.heapify(x)：将list x 转换成堆，原地，线性时间内。
- heapq.heapreplace(heap, item)：弹出并返回 heap 中最小的一项，同时推入新的 item。 堆的大小不变。 如果堆为空则引发 IndexError。
- heapq.merge(*iterables, key=None, reverse=False)：将多个已排序的输入合并为一个已排序的输出，返回已排序值的 iterator。
- heapq.nlargest(n, iterable, key=None)：从 iterable 所定义的数据集中返回前 n 个最大元素组成的列表。
- heapq.nsmallest(n, iterable, key=None)：从 iterable 所定义的数据集中返回前 n 个最小元素组成的列表。

# bisect --- 数组二分查找算法
二分（bisection）算法

- bisect.bisect_left(a, x, lo=0, hi=len(a))：在 a 中找到 x 合适的插入点以维持有序。参数 lo 和 hi 可以被用于确定需要考虑的子集；默认情况下整个列表都会被使用。如果 x 已经在 a 里存在，那么插入点会在已存在元素之前（也就是左边）。

返回的插入点 i 可以将数组 a 分成两部分。左侧是 all(val < x for val in a[lo:i]) ，右侧是 all(val >= x for val in a[i:hi]) 。

- bisect.bisect_right(a, x, lo=0, hi=len(a))
- bisect.bisect(a, x, lo=0, hi=len(a))：类似于 bisect_left()，但是返回的插入点是 a 中已存在元素 x 的右侧。
- bisect.insort_left(a, x, lo=0, hi=len(a))：将 x 插入到一个有序序列 a 里，并维持其有序。如果 a 有序的话，这相当于 a.insert(bisect.bisect_left(a, x, lo, hi), x)。要注意搜索是 O(log n) 的，插入却是 O(n) 的。
- bisect.insort_right(a, x, lo=0, hi=len(a))
- bisect.insort(a, x, lo=0, hi=len(a))：类似于 insort_left()，但是把 x 插入到 a 中已存在元素 x 的右侧。

# [re--- 正则表达式操作](https://docs.python.org/zh-cn/3/library/re.html)
```javascript
import re
Chinese = re.compile('[\u4e00-\u9fa5]')  # 中文的编码范围
if Chinese.search(q):
    return 'en-US'
return 'zh-CN'
```

- re.match(pattern, string, flags=0)：从字符串的起始位置匹配一个模式，如果起始位置匹配失败返回None
- re.fullmatch(pattern, string, flags=0)
- re.search(pattern, string, flags=0)：返回第一个成功的匹配
- re.sub(pattern, replace, string, count=0, flags=0)：替换字符串中的匹配项
- re.subn(pattern, repl, string, count=0, flags=0)：与 sub() 相同，返回一个元组 (字符串, 替换次数)
- re.compile(pattern[, flags])：返回一个re.RegexObject（ Pattern ），供 match() 和 search() 使用
- re.split(pattern, string[, maxsplit=0, flags=0])：按照能够匹配的子串将字符串分割后返回列表
- re.findall(string[, pos[, endpos]])：在字符串中找到正则表达式所匹配的所有子串，并返回一个列表
- re.finditer(pattern, string, flags=0)：和 findall 类似，找到所匹配的所有子串，并把它们作为一个迭代器返回
- re.escape(pattern)：转义 pattern 中的特殊字符。
- re.purge()：清除正则表达式缓存。
- exception re.error(msg, pattern=None, pos=None)

参数

- pattern：匹配的正则表达式
- string：要匹配的字符串。
- flags：标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等。
- replace : 替换的字符串或函数。
- count : 模式匹配后替换的最大次数，默认 0 表示替换所有的匹配。
- maxsplit：分隔次数，maxsplit=1 分隔一次，默认为 0，不限制次数。
- endpos：指定字符串的结束位置，默认为字符串的长度。
- pos ：指定字符串的起始位置，默认为 0。
| flags | 描述 |
| --- | --- |
| re.I | 忽略大小写 IGNORECASE |
| re.L | 做本地化识别（locale-aware）匹配 |
| re.M | 多行匹配 MULTILINE，影响 ^ 和 $ |
| re.S | 使 . 匹配包括换行在内的所有字符 |
| re.U | 根据Unicode字符集解析字符。这个标志影响 \\w, \\W, \\b, \\B. |
| re.X | 可分段和添加注释 |

**re.MatchObject**

- group(num=0)：匹配的整个表达式的字符串，group() 可以一次输入多个组号，在这种情况下它将返回一个包含那些组所对应值的元组。
- groups()：返回一个包含所有小组字符串的元组，从 1 到 所含的小组号。



# —— 函数式编程模块

# [itertools--- 为高效循环而创建迭代器的函数](https://docs.python.org/zh-cn/3/library/itertools.html)

## 无穷迭代器
| 迭代器 | 实参 | 结果 | 示例 |
| --- | --- | --- | --- |
| [count()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.count) | start, [step] | start, start+step, start+2*step, ... | count(10) --> 10 11 12 13 14... |
| [cycle()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.cycle) | p | p0, p1, ... plast, p0, p1, ... | cycle('ABCD') --> A B C D A B CD ... |
| [repeat()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.repeat) | elem [,n] | elem, elem, elem, ... 重复无限次或n次 | repeat(10, 3) --> 10 10 10 |


## 根据最短输入序列长度停止的迭代器
| 迭代器 | 实参 | 结果 | 示例 |
| --- | --- | --- | --- |
| [accumulate()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.accumulate) | p [,func] | p0, p0+p1, p0+p1+p2, ... | accumulate([1,2,3,4,5]) --> 1 3 610 15 |
| [chain()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.chain) | p, q, ... | p0, p1, ... plast, q0, q1, ... | chain('ABC', 'DEF') --> A B C D EF |
| [chain.from_iterable()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.chain.from_iterable) | iterable | p0, p1, ... plast, q0, q1, ... | chain.from_iterable(['ABC','DEF']) --> A B C D E F |
| [compress()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.compress) | data, selectors | (d[0] if s[0]), (d[1] if s[1]), ... | compress('ABCDEF', [1,0,1,0,1,1])--> A C E F |
| [dropwhile()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.dropwhile) | pred, seq | seq[n], seq[n+1], ... 从pred首次真值测试失败开始 | dropwhile(lambda x: x<5,[1,4,6,4,1]) --> 6 4 1 |
| [filterfalse()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.filterfalse) | pred, seq | seq中pred(x)为假值的元素，x是seq中的元素。 | filterfalse(lambda x: x%2,range(10)) --> 0 2 4 6 8 |
| [groupby()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.groupby) | iterable[, key] | 根据key(v)值分组的迭代器 |  |
| [islice()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.islice) | seq, [start,] stop [, step] | seq[start:stop:step]中的元素 | islice('ABCDEFG', 2, None) --> CD E F G |
| [starmap()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.starmap) | func, seq | func(_seq[0]), func(_seq[1]), ... | starmap(pow, [(2,5), (3,2),(10,3)]) --> 32 9 1000 |
| [takewhile()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.takewhile) | pred, seq | seq[0], seq[1], ..., 直到pred真值测试失败 | takewhile(lambda x: x<5,[1,4,6,4,1]) --> 1 4 |
| [tee()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.tee) | it, n | it1, it2, ... itn 将一个迭代器拆分为n个迭代器 |  |
| [zip_longest()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.zip_longest) | p, q, ... | (p[0], q[0]), (p[1], q[1]), ... | zip_longest('ABCD', 'xy',fillvalue='-') --> Ax By C- D- |


## 排列组合迭代器
| 迭代器 | 实参 | 结果 |
| --- | --- | --- |
| [product()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.product) | p, q, ... [repeat=1] | 笛卡尔积，相当于嵌套的for循环 |
| [permutations()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.permutations) | p[, r] | 长度r元组，所有可能的排列，无重复元素 |
| [combinations()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.combinations) | p, r | 长度r元组，有序，无重复元素 |
| [combinations_with_replacement()](https://docs.python.org/zh-cn/3/library/itertools.html?highlight=itertools#itertools.combinations_with_replacement) | p, r | 长度r元组，有序，元素可重复 |

| 例子 | 结果 |
| --- | --- |
| product('ABCD', repeat=2) | AA AB AC AD BA BB BC BD CA CB CC CD DA DB DC DD |
| permutations('ABCD', 2) | AB AC AD BA BC BD CA CB CD DA DB DC |
| combinations('ABCD', 2) | AB AC AD BC BD CD |
| combinations_with_replacement('ABCD', 2) | AA AB AC AD BB BC BD CC CD DD |


# operator --- 标准运算符替代函数
| 运算 | 语法 | 函数 |
| --- | --- | --- |
| 加法 | a + b | add(a, b) |
| 字符串拼接 | seq1 + seq2 | concat(seq1, seq2) |
| 包含测试 | obj in seq | contains(seq, obj) |
| 除法 | a / b | truediv(a, b) |
| 除法 | a // b | floordiv(a, b) |
| 按位与 | a & b | and_(a, b) |
| 按位异或 | a ^ b | xor(a, b) |
| 按位取反 | ~ a | invert(a) |
| 按位或 | a | b |
| 取幂 | a ** b | pow(a, b) |
| 标识 | a is b | is_(a, b) |
| 标识 | a is not b | is_not(a, b) |
| 索引赋值 | obj[k] = v | setitem(obj, k, v) |
| 索引删除 | del obj[k] | delitem(obj, k) |
| 索引取值 | obj[k] | getitem(obj, k) |
| 左移 | a << b | lshift(a, b) |
| 取模 | a % b | mod(a, b) |
| 乘法 | a * b | mul(a, b) |
| 矩阵乘法 | a @ b | matmul(a, b) |
| 取反（算术） | - a | neg(a) |
| 取反（逻辑） | not a | not_(a) |
| 正数 | + a | pos(a) |
| 右移 | a >> b | rshift(a, b) |
| 切片赋值 | seq[i:j] = values | setitem(seq, slice(i, j), values) |
| 切片删除 | del seq[i:j] | delitem(seq, slice(i, j)) |
| 切片取值 | seq[i:j] | getitem(seq, slice(i, j)) |
| 字符串格式化 | s % obj | mod(s, obj) |
| 减法 | a - b | sub(a, b) |
| 真值测试 | obj | truth(obj) |
| 比较 | a < b | lt(a, b) |
| 比较 | a <= b | le(a, b) |
| 相等 | a == b | eq(a, b) |
| 不等 | a != b | ne(a, b) |
| 比较 | a >= b | ge(a, b) |
| 比较 | a > b | gt(a, b) |

- operator.attrgetter(*attrs)
- operator.itemgetter(*items)
- operator.methodcaller(name, /, *args, **kwargs)

**原地运算符**  <br />  operator.**iadd**(a, b)  <br />  operator.**__iadd__**(a, b)  <br />  a = iadd(a, b) 等价于 a += b。  <br />  operator.**iand**(a, b)  <br />  operator.**__iand__**(a, b)  <br />  a = iand(a, b) 等价于 a &= b。  <br />  operator.**iconcat**(a, b)  <br />  operator.**__iconcat__**(a, b)  <br />  a = iconcat(a, b) 等价于 a += b 其中 a 和 b 为序列。  <br />  operator.**ifloordiv**(a, b)  <br />  operator.**__ifloordiv__**(a, b)  <br />  a = ifloordiv(a, b) 等价于 a //= b。  <br />  operator.**ilshift**(a, b)  <br />  operator.**__ilshift__**(a, b)  <br />  a = ilshift(a, b) 等价于 a <<= b。  <br />  operator.**imod**(a, b)  <br />  operator.**__imod__**(a, b)  <br />  a = imod(a, b) 等价于 a %= b。  <br />  operator.**imul**(a, b)  <br />  operator.**__imul__**(a, b)  <br />  a = imul(a, b) 等价于 a *= b。  <br />  operator.**imatmul**(a, b)  <br />  operator.**__imatmul__**(a, b)  <br />  a = imatmul(a, b) 等价于 a @= b。  <br />  operator.**ior**(a, b)  <br />  operator.**__ior__**(a, b)  <br />  a = ior(a, b) 等价于 a |= b。  <br />  operator.**ipow**(a, b)  <br />  operator.**__ipow__**(a, b)  <br />  a = ipow(a, b) 等价于 a **= b。  <br />  operator.**irshift**(a, b)  <br />  operator.**__irshift__**(a, b)  <br />  a = irshift(a, b) 等价于 a >>= b。  <br />  operator.**isub**(a, b)  <br />  operator.**__isub__**(a, b)  <br />  a = isub(a, b) 等价于 a -= b。  <br />  operator.**itruediv**(a, b)  <br />  operator.**__itruediv__**(a, b)  <br />  a = itruediv(a, b) 等价于 a /= b。  <br />  operator.**ixor**(a, b)  <br />  operator.**__ixor__**(a, b)  <br />  a = ixor(a, b) 等价于 a ^= b。


# [functools--- 高阶函数和可调用对象上的操作](https://docs.python.org/zh-cn/3/library/functools.html)
**@functools.cached_property(func)**：将一个类方法转换为特征属性，一次性计算该特征属性的值，然后将其缓存为实例生命周期内的普通属性。  <br />  **@functools.lru_cache(user_function)**  <br />  **@functools.lru_cache(maxsize=128, typed=False)**  <br />  **@functools.total_ordering**：给定一个声明一个或多个全比较排序方法的类，这个类装饰器实现剩余的方法  <br />  **@functools.singledispatch**：将一个函数转换为 单分派 generic function  <br />  **@functools.wraps(wrapped, assigned=WRAPPER_ASSIGNMENTS, updated=WRAPPER_UPDATES)**：用于在定义包装器函数时发起调用 update_wrapper() 作为函数装饰器

**functools.cmp_to_key(func)**  <br />  **functools.partial(func, /, *args, **keywords)**：返回一个新的部分对象，当被调用时其行为类似于 func 附带位置参数 args 和关键字参数 keywords 被调用。  <br />  **functools.reduce(function, iterable[, initializer])**  <br />  **functools.update_wrapper(wrapper, wrapped, assigned=WRAPPER_ASSIGNMENTS, updated=WRAPPER_UPDATES)**：更新一个 wrapper 函数以使其类似于 wrapped 函数

**class functools.partialmethod(func, /, *args, **keywords)**：返回一个新的 partialmethod 描述器，其行为类似 partial 但它被设计用作方法定义而非直接用作可调用对象。  <br />  **class functools.singledispatchmethod(func)**：将一个方法转换为 单分派 generic function
```python
>>> import functools
>>> int2 = functools.partial(int, base=2)
>>> int2('1000000')
64
```

# timeit --- 测量小代码片段的执行时间
**命令行界面**  <br />  **python -m timeit [-n N] [-r N] [-u U] [-s S] [-h] [statement ...]**

- -n N, --number=N		执行 '语句' 多少次
- -r N, --repeat=N		重复计时器的次数（默认为5）
- -s S, --setup=S		最初要执行一次的语句（默认为 pass ）
- -p, --process	测量进程时间，使用 time.process_time() 而不是 time.perf_counter() ，这是默认值
- -u, --unit=U		指定定时器输出的时间单位；可以选择 nsec，usec，msec或sec
- -v, --verbose	打印原始计时结果；重复更多位数精度
- -h, --help		打印一条简短的使用信息并退出
```javascript
python -m timeit "'-'.join(map(str, range(100)))"
```
**API**

- timeit.timeit(stmt='pass', setup='pass', timer=, number=1000000, globals=None)
- timeit.repeat(stmt='pass', setup='pass', timer=, repeat=5, number=1000000, globals=None)
- timeit.default_timer()	默认的计时器，总是 time.perf_counter() 。

class timeit.Timer(stmt='pass', setup='pass', timer=, globals=None)  <br />  用于小代码片段的计数执行速度的类
```javascript
// 对比使用 hasattr() 与 try/except 的开销来测试缺失与提供对象属性
>>> import timeit
>>> # attribute is missing
>>> s = """\
... try:
...     str.__bool__
... except AttributeError:
...     pass
... """
>>> timeit.timeit(stmt=s, number=100000)
0.9138244460009446
>>> s = "if hasattr(str, '__bool__'): pass"
>>> timeit.timeit(stmt=s, number=100000)
0.5829014980008651
```
```javascript
def f(x):
    return x**2
def g(x):
    return x**4
def h(x):
    return x**8
import timeit
print(timeit.timeit('[func(42) for func in (f,g,h)]', globals=globals()))
```

# pickle --- Python 对象序列化
对一个 Python 对象结构的二进制序列化和反序列化

- 封存 (pickling)：将 Python 对象及其所拥有的层次结构转化为一个字节流的过程
- 解封 (unpickling)

方法

- pickle.dump(obj, file, protocol=None, *, fix_imports=True, buffer_callback=None)
   - 将对象 obj 封存以后的对象写入已打开的 file object file
- pickle.dumps(obj, protocol=None, *, fix_imports=True, buffer_callback=None)
   - 将 obj 封存以后的对象作为 bytes 类型直接返回，而不是将其写入到文件
- pickle.load(file, *, fix_imports=True, encoding="ASCII", errors="strict", buffers=None)
   - 从已打开的 file object 文件 中读取封存后的对象，重建其中特定对象的层次结构并返回
- pickle.loads(bytes_object, *, fix_imports=True, encoding="ASCII", errors="strict", buffers=None)
   - 对于封存生成的对象 bytes_object，还原出原对象的结构并返回
```python
import pickle
<bytes>  = pickle.dumps(<object>)
<object> = pickle.loads(<bytes>)

def read_pickle_file(filename):
    with open(filename, 'rb') as file:
        return pickle.load(file)
    
def write_to_pickle_file(filename, an_object):
    with open(filename, 'wb') as file:
        pickle.dump(an_object, file)
```

class pickle.Pickler(file, protocol=None, *, fix_imports=True, buffer_callback=None)  <br />  接受一个二进制文件用于写入 pickle 数据流

- dump(obj)
- 将 obj 封存后的内容写入已打开的文件对象，该文件对象已经在构造函数中指定
- persistent_id(obj)
- 默认无动作，子类继承重载时使用
- reducer_override(self, obj)
- 可以在 Pickler 的子类中定义的特殊 reducer

class pickle.Unpickler(file, *, fix_imports=True, encoding="ASCII", errors="strict", buffers=None)  <br />  接受一个二进制文件用于读取 pickle 数据流

- load()：从构造函数中指定的文件对象里读取封存好的对象，重建其中特定对象的层次结构并返回
- persistent_load(pid)：默认抛出 UnpicklingError 异常
- find_class(module, name)：如有必要，导入 module 模块并返回其中名叫 name 的对象

**class pickle.PickleBuffer(buffer)**  <br />  缓冲区的包装器 (wrapper)，缓冲区中包含着可封存的数据

- raw()：返回该缓冲区底层内存区域的 memoryview
- release()：释放由 PickleBuffer 占用的底层缓冲区

# [json--- JSON 编码和解码器](https://docs.python.org/zh-cn/3/library/json.html)

- json.dump(obj, fp, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)
   - 将 obj 序列化为 JSON 格式化流形式
- json.load(fp, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)

- json.dumps(obj, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)
   - 将 obj 序列化为 JSON 格式的 str
- json.loads(s, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)

class json.**JSONDecoder**(*, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, strict=True, object_pairs_hook=None)  <br />  简单的JSON解码器  <br />  class json.**JSONEncoder**(*, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, sort_keys=False, indent=None, separators=None, default=None)  <br />  用于Python数据结构的可扩展JSON编码器
```python
import json
<str>    = json.dumps(<object>, ensure_ascii=True, indent=None)
<object> = json.loads(<str>)

def read_json_file(filename):
    with open(filename, encoding='utf-8') as file:
        return json.load(file)
    
def write_to_json_file(filename, an_object):
    with open(filename, 'w', encoding='utf-8') as file:
        json.dump(an_object, file, ensure_ascii=False, indent=2)
```

# csv --- CSV 文件读写
csv.reader(csvfile, dialect='excel', **fmtparams)  <br />  csv.writer(csvfile, dialect='excel', **fmtparams)
```python
import csv

def read_csv_file(filename):
    with open(filename, encoding='utf-8', newline='') as file:
        return list(csv.reader(file, delimiter=':', quoting=csv.QUOTE_NONE))        

def write_to_csv_file(filename, rows):
    with open(filename, 'w', encoding='utf-8', newline='') as file:
        writer = csv.writer(file)
        writer.writerows(rows)
```
class csv.DictReader(f, fieldnames=None, restkey=None, restval=None, dialect='excel', *args, **kwds)  <br />  class csv.DictWriter(f, fieldnames, restval='', extrasaction='raise', dialect='excel', *args, **kwds)
```python
import csv

with open('names.csv', newline='') as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
        print(row['first_name'], row['last_name'])
    
with open('names.csv', 'w', newline='') as csvfile:
    fieldnames = ['first_name', 'last_name']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerow({'first_name': 'Baked', 'last_name': 'Beans'})
```
class csv.Dialect	一个容器类，其属性包含有如何处理双引号、空白符、分隔符等的信息。  <br />  常量  <br />  csv.QUOTE_ALL	指示 writer 对象给所有字段加上引号。  <br />  Reader 对象

- csvreader.dialect	只读，供解析器使用。
- csvreader.line_num	源迭代器已经读取了的行数。

Writer 对象

- csvwriter.writerow(row)	将 row 形参写入到 writer 的文件对象，根据当前 Dialect 进行格式化
- csvwriter.writerows(rows)
- DictWriter.writeheader()	在 writer 的文件对象中，写入一行字段名称（字段名称在构造函数中指定）

# [html](https://docs.python.org/zh-cn/3/library/html.html#module-html)
html --- 超文本标记语言支持

- html.escape(s, quote=True)：将字符串中的字符`&` 、 < 和 > 转换为安全的HTML序列。
- html.unescape(s)：将字符串中的所有命名和数字字符引用 (如 >) 转换为相应的Unicode字符

html.parser --- 简单的 HTML 和 XHTML 解析器  <br />  class html.parser.HTMLParser(*, convert_charrefs=True)	一个能解析无效标记的解析器实例。
```javascript
from html.parser import HTMLParser
class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("Encountered a start tag:", tag)
    def handle_endtag(self, tag):
        print("Encountered an end tag :", tag)
    def handle_data(self, data):
        print("Encountered some data  :", data)

parser = MyHTMLParser()
parser.feed('<html><head><title>Test</title></head>'
            '<body><h1>Parse me!</h1></body></html>')
```
html.entities --- HTML 一般实体的定义

# array --- 高效的数值数组
定义了一种对象类型，可以紧凑地表示基本类型值的数组：字符、整数、浮点数等。 数组属于序列类型，其行为与列表非常相似，不同之处在于其中存储的对象类型是受限的。

| 类型码 | C 类型 | Python 类型 | 以字节表示的最小尺寸 |
| --- | --- | --- | --- |
| 'b' | signed char | int | 1 |
| 'B' | unsigned char | int | 1 |
| 'u' | Py_UNICODE | Unicode 字符 | 2 |
| 'h' | signed short | int | 2 |
| 'H' | unsigned short | int | 2 |
| 'i' | signed int | int | 2 |
| 'I' | unsigned int | int | 2 |
| 'l' | signed long | int | 4 |
| 'L' | unsigned long | int | 4 |
| 'q' | signed long long | int | 8 |
| 'Q' | unsigned long long | int | 8 |
| 'f' | float | float | 4 |
| 'd' | double | float | 8 |

**class array.array(typecode[, initializer])**：一个包含由 typecode 限制类型的条目的新数组，并由可选的 initializer 值进行初始化，该值必须为一个列表、[bytes-like object](https://docs.python.org/zh-cn/3/glossary.html#term-bytes-like-object) 或包含正确类型元素的可迭代对象。  <br />  **array.typecode**：用于创建数组的类型码字符。  <br />  **array.itemsize**：在内部表示中一个数组项的字节长度。  <br />  **array.append(x)**：添加一个值为 x 的新项到数组末尾。  <br />  **array.buffer_info()**：返回一个元组 (address, length) 以给出用于存放数组内容的缓冲区元素的当前内存地址和长度。 以字节表示的内存缓冲区大小可通过 array.buffer_info()[1] * array.itemsize 来计算。 这在使用需要内存地址的低层级（因此不够安全） I/O 接口时会很有用，例如某些 ioctl() 操作。 只要数组存在并且没有应用改变长度的操作，返回数值就是有效的。  <br />  **array.byteswap()**：“字节对调”所有数组项。 此方法只支持大小为 1, 2, 4 或 8 字节的值；对于其他值类型将引发 RuntimeError。 它适用于从不同字节序机器所生成的文件中读取数据的情况。  <br />  **array.count(x)**：返回 x 在数组中的出现次数。  <br />  **array.extend(iterable)**：将来自 iterable 的项添加到数组末尾。 如果 iterable 是另一个数组，它必须具有 完全 相同的类型码；否则将引发 TypeError。 如果 iterable 不是一个数组，则它必须为可迭代对象并且其元素必须为可添加到数组的适当类型。  <br />  **array.frombytes(s)**：添加来自字符串的项，将字符串解读为机器值的数组（相当于使用 fromfile() 方法从文件中读取数据）。  <br />  **array.fromfile(f, n)**：从 file object f 中读取 n 项（解读为机器值）并将它们添加到数组末尾。 如果可读取数据少于 n 项则将引发 EOFError，但有效的项仍然会被插入数组。 f 必须为一个真实的内置文件对象；不支持带有 read() 方法的其它对象。  <br />  **array.fromlist(list)**：添加来自 list 的项。 这等价于 for x in list: a.append(x)，区别在于如果发生类型错误，数组将不会被改变。  <br />  **array.fromunicode(s)**：使用来自给定 Unicode 字符串的数组扩展数组。 数组必须是类型为 'u' 的数组；否则将引发 ValueError。 请使用 array.frombytes(unicodestring.encode(enc)) 来将 Unicode 数据添加到其他类型的数组。  <br />  **array.index(x)**：返回最小的 i 使得 i 为 x 在数组中首次出现的序号。  <br />  **array.insert(i, x)**：将值 x 作为新项插入数组的 i 位置之前。 负值将被视为相对于数组末尾的位置。  <br />  **array.pop([i])**：从数组中移除序号为 i 的项并将其返回。 可选参数值默认为 -1，因此默认将移除并返回末尾项。  <br />  **array.remove(x)**：从数组中移除首次出现的 x。  <br />  **array.reverse()**：反转数组中各项的顺序。  <br />  **array.tobytes()**：将数组转换为一个机器值数组并返回其字节表示（即相当与通过 tofile() 方法写入到文件的字节序列。）  <br />  **array.tofile(f)**：将所有项（作为机器值）写入到 file object f。  <br />  **array.tolist()**：将数组转换为包含相同项的普通列表。  <br />  **array.tounicode()**：将数组转换为一个 Unicode 字符串。 数组必须是类型为 'u' 的数组；否则将引发 ValueError。 请使用 array.tobytes().decode(enc) 来从其他类型的数组生成 Unicode 字符串。

# [os--- 多种操作系统接口](https://docs.python.org/zh-cn/3/library/os.html)

- os.name ：获取平台名称
- os.cpu_count() ：获取系统的核心数
- os.chmod(path, mode) ： 改变权限
- os.getcwd() ：函数得到当前工作目录，即当前Python脚本工作的目录路径
- os.path.abspath($name) ：当前目录下文件或文件夹的绝对路径
- os.path.basename(path) ：返回文件名
- os.path.dirname(path) ：返回文件的上级路径
- os.path.split()  ：分离文件名和上级路径
- os.path.join()  ：合并文件名和指定路径
- os.path.splitext()  ：分离文件名与扩展名，返回的扩展名包括了'.'符号，默认只返回第一个'.后缀'和前缀。
- os.chdir($dirname)：改变工作目录到dirname
- os.listdir($path) ：返回指定目录下的所有文件和目录名
- os.mkdir($path)    创建一个目录
- os.rmdir($path)    删除一个目录
- os.rename(src, dst)  记得不能有同名文件存在
- os.path.getsize(name)    获得文件大小，如果name是目录返回0L
- os.path.isfile()   函数分别检验给出的路径是一个文件
- os.path.isdir()    函数分别检验给出的路径是一个目录
- os.path.exists()   函数用来检验给出的路径是否真地存在

执行外部shell命令

- os.system(’command‘)	无返回
- os.popen(cmd, mode='r', buffering=-1)	可读取返回

# [pathlib--- 面向对象的文件系统路径](https://docs.python.org/zh-cn/3/library/pathlib.html)

- PurePath.parent	父路径
- PurePath.name	最后路径组件的字符串
- PurePath.suffix	最后一个组件的文件扩展名
- PurePath.stem	最后一个路径组件，除去后缀
- PurePath.as_posix()	返回使用正斜杠（/）的路径字符串
- PurePath.is_absolute()	PurePath.is_relative_to(*other)	返回此路径是否相对于 other 的路径
- PurePath.joinpath(*other)	调用此方法等同于将每个 other 参数中的项目连接
- PurePath.match(pattern)	将此路径与提供的通配符风格的模式匹配
- PurePath.relative_to(*other)	计算此路径相对 other 表示路径的版本
- PurePath.with_name(name)	返回一个新的路径并修改name
- PurePath.with_stem(stem)	返回一个带有修改后 stem 的新路径
- PurePath.with_suffix(suffix)	返回一个新的路径并修改 suffix

```python
def list_file(file, path: Path, level: int = 1):
    # 标题分5级
    level += 1

    for sub_path in path.iterdir():
        # 目录以标题形式呈现，大于5级仅加粗显示
        if sub_path.is_dir():
            directory_name = f'{"#"*level} {sub_path.name}  \n' if level < 6 else f'**{sub_path.name}**  \n'
            file.write(directory_name)
            list_file(md, sub_path, level)

        # 文件以列表形式展现
        if sub_path.is_file():
            relative_path = parse.quote(sub_path.relative_to(".").as_posix())
            file.write(f'- [{sub_path.stem}]({relative_path})  \n')
            
if __name__ == '__main__':
    location = 'Documents'
    with open('README.md','w',encoding='utf-8') as md:
        md.write('# Notes  \n')
        list_file(md, Path(location))
    print('Completed!')
```
| [os](https://docs.python.org/zh-cn/3/library/os.html#module-os) 和 [os.path](https://docs.python.org/zh-cn/3/library/os.path.html#module-os.path) | [pathlib](https://docs.python.org/zh-cn/3/library/pathlib.html#module-pathlib) |
| --- | --- |
| [os.path.abspath()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.abspath) | [Path.resolve()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.resolve)  |
| [os.chmod()](https://docs.python.org/zh-cn/3/library/os.html#os.chmod) | [Path.chmod()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.chmod) |
| [os.mkdir()](https://docs.python.org/zh-cn/3/library/os.html#os.mkdir) | [Path.mkdir()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.mkdir) |
| [os.makedirs()](https://docs.python.org/zh-cn/3/library/os.html#os.makedirs) | [Path.mkdir()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.mkdir) |
| [os.rename()](https://docs.python.org/zh-cn/3/library/os.html#os.rename) | [Path.rename()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.rename) |
| [os.replace()](https://docs.python.org/zh-cn/3/library/os.html#os.replace) | [Path.replace()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.replace) |
| [os.rmdir()](https://docs.python.org/zh-cn/3/library/os.html#os.rmdir) | [Path.rmdir()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.rmdir) |
| [os.remove()](https://docs.python.org/zh-cn/3/library/os.html#os.remove), [os.unlink()](https://docs.python.org/zh-cn/3/library/os.html#os.unlink) | [Path.unlink()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.unlink) |
| [os.getcwd()](https://docs.python.org/zh-cn/3/library/os.html#os.getcwd) | [Path.cwd()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.cwd) |
| [os.path.exists()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.exists) | [Path.exists()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.exists) |
| [os.path.expanduser()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.expanduser) | [Path.expanduser()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.expanduser) 和 [Path.home()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.home) |
| [os.listdir()](https://docs.python.org/zh-cn/3/library/os.html#os.listdir) | [Path.iterdir()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.iterdir) |
| [os.path.isdir()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.isdir) | [Path.is_dir()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.is_dir) |
| [os.path.isfile()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.isfile) | [Path.is_file()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.is_file) |
| [os.path.islink()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.islink) | [Path.is_symlink()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.is_symlink) |
| [os.link()](https://docs.python.org/zh-cn/3/library/os.html#os.link) | [Path.hardlink_to()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.hardlink_to) |
| [os.symlink()](https://docs.python.org/zh-cn/3/library/os.html#os.symlink) | [Path.symlink_to()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.symlink_to) |
| [os.readlink()](https://docs.python.org/zh-cn/3/library/os.html#os.readlink) | [Path.readlink()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.readlink) |
| [os.path.relpath()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.relpath) | Path.relative_to()  |
| [os.stat()](https://docs.python.org/zh-cn/3/library/os.html#os.stat) | [Path.stat()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.stat), [Path.owner()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.owner), [Path.group()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.group) |
| [os.path.isabs()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.isabs) | [PurePath.is_absolute()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.is_absolute) |
| [os.path.join()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.join) | [PurePath.joinpath()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.joinpath) |
| [os.path.basename()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.basename) | [PurePath.name](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.name) |
| [os.path.dirname()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.dirname) | [PurePath.parent](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.parent) |
| [os.path.samefile()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.samefile) | [Path.samefile()](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.samefile) |
| [os.path.splitext()](https://docs.python.org/zh-cn/3/library/os.path.html#os.path.splitext) | [PurePath.suffix](https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.suffix) |


```python
from pathlib import Path

def listFile(path, level=0, preflag=True, flag=True, placeholder='', depth=3, hide=False):
    if level > depth:
        return
      
    # Hidden files
    if not hide and path.match('.*') or path.match('$*'):
        return
      
    if level > 1:
        placeholder += '  ' if preflag else '│ '
    symbol = '' if not level else('└─' if flag else '├─')
    print(placeholder + symbol + path.name)
    
    if path.is_dir():
        subpath = [x for x in path.iterdir()]
        num = len(subpath)
        for i in range(num):
            try:
                listFile(subpath[i], level+1, flag, i ==
                         num - 1, placeholder, depth, hide)
            except:
                print('error')
                
p = Path(r'D://')
listFile(p)
```

# [shutil--- 高阶文件操作](https://docs.python.org/zh-cn/3/library/shutil.html)

- shutil.copy(src, dst, *, follow_symlinks=True)：将文件 src 拷贝到文件或目录 dst
- shutil.copy2(src, dst, *, follow_symlinks=True)：类似于 copy()，会尝试保留文件的元数据
- shutil.copyfile(src, dst, *, follow_symlinks=True)：将名为 src 的文件的内容（不包括元数据）拷贝到名为 dst 的文件并返回 dst
- shutil.copytree(src, dst, symlinks=False, ignore=None, copy_function=copy2, ignore_dangling_symlinks=False, dirs_exist_ok=False)：将以 src 为根起点的整个目录树拷贝到名为 dst 的目录并返回目标目录
- shutil.rmtree(path, ignore_errors=False, onerror=None)：删除一个完整的目录树
- shutil.move(src, dst, copy_function=copy2)：递归地将一个文件或目录 (src) 移至另一位置 (dst) 并返回目标位置
- shutil.make_archive(base_name, format[, root_dir[, base_dir[, verbose[, dry_run[, owner[, group[, logger]]]]]]])：创建一个归档文件（例如 zip 或 tar）并返回其名称
- shutil.unpack_archive(filename[, extract_dir[, format]])：解包一个归档文件
- shutil.get_terminal_size(fallback=(columns, lines))：获取终端窗口的尺寸

# glob --- Unix 风格路径名模式扩展

- glob.glob(pathname, *, recursive=False)：返回匹配 pathname 的可能为空的路径名列表
- glob.iglob(pathname, *, recursive=False)：返回一个 iterator，它会产生与 glob() 相同的结果，但不会实际地同时保存它们
- glob.escape(pathname)：转义所有特殊字符 ('?', '*' 和 '[')

# [sys--- 系统相关的参数和函数](https://docs.python.org/zh-cn/3/library/sys.html)

- sys.argv 命令行参数List，第一个元素是程序本身路径
- sys.path 返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值
- sys.modules.keys() 返回所有已经导入的模块列表
- sys.modules 返回系统导入的模块字段，key是模块名，value是模块
- sys.exc_info() 获取当前正在处理的异常类,exc_type、exc_value、exc_traceback当前处理的异常详细信息
- sys.exit(n) 退出程序，正常退出时exit(0)
- sys.hexversion 获取Python解释程序的版本值，16进制格式如：0x020403F0
- sys.version 获取Python解释程序的版本信息
- sys.platform 返回操作系统平台名称
- sys.stdout 标准输出
- sys.stdout.write(‘aaa‘) 标准输出内容
- sys.stdout.writelines() 无换行输出
- sys.stdin 标准输入
- sys.stdin.read() 输入一行
- sys.stderr 错误输出
- sys.exc_clear() 用来清除当前线程所出现的当前的或最近的错误信息
- sys.exec_prefix 返回平台独立的python文件安装的位置
- sys.byteorder 本地字节规则的指示器，big-endian平台的值是‘big‘,little-endian平台的值是‘little‘
- sys.copyright 记录python版权相关的东西
- sys.api_version 解释器的C的API版本
- sys.version_info ‘final‘表示最终,也有‘candidate‘表示候选，表示版本级别，是否有后继的发行
- sys.getdefaultencoding() 返回当前你所用的默认的字符编码格式
- sys.getfilesystemencoding() 返回将Unicode文件名转换成系统文件名的编码的名字
- sys.builtin_module_names Python解释器导入的内建模块列表
- sys.executable Python解释程序路径
- sys.getwindowsversion() 获取Windows的版本
- sys.stdin.readline() 从标准输入读一行，sys.stdout.write(“a”) 屏幕输出a
- sys.setdefaultencoding(name) 用来设置当前默认的字符编码
```python
import sys
scripts_path = sys.argv[0]
arguments    = sys.argv[1:]
```

# [argparse](https://docs.python.org/zh-cn/3/library/argparse.html#module-argparse) --- 命令行选项、参数和子命令解析器
class **argparse.ArgumentParser**(prog=None, usage=None, description=None, epilog=None, parents=[], formatter_class=argparse.HelpFormatter, prefix_chars='-', fromfile_prefix_chars=None, argument_default=None, conflict_handler='error', add_help=True, allow_abbrev=True, exit_on_error=True)

- prog - 程序的名称（默认：sys.argv[0]）
- usage - 描述程序用途的字符串（默认值：从添加到解析器的参数生成）
- description - 在参数帮助文档之前显示的文本
- epilog - 在参数帮助文档之后显示的文本
- parents - 一个 ArgumentParser 对象的列表，它们的参数也应包含在内
- formatter_class - 用于自定义帮助文档输出格式的类
- prefix_chars - 可选参数的前缀字符集合（默认值：'-'）
- fromfile_prefix_chars - 当需要从文件中读取其他参数时，用于标识文件名的前缀字符集合
- argument_default - 参数的全局默认值
- conflict_handler - 解决冲突选项的策略
- add_help - 为解析器添加一个 -h/--help 选项（默认值： True）
- allow_abbrev - 如果缩写是无歧义的，则允许缩写长选项 （默认值：True）
- exit_on_error - 决定当错误发生时是否让 ArgumentParser 附带错误信息退出。 (默认值: True)

ArgumentParser.add_argument(name or flags...[, action][, nargs][, const][, default][, type][, choices][, required][, help][, metavar][, dest])

- name or flags - 一个命名或者一个选项字符串的列表，例如 foo 或 -f, --foo。
- action - 当参数在命令行中出现时使用的动作基本类型。
- nargs - 命令行参数应当消耗的数目。
- const - 被一些 action 和 nargs 选择所需求的常数。
- default - 当参数未在命令行中出现时使用的值。
- type - 命令行参数应当被转换成的类型。
- choices - 可用的参数的容器。
- required - 此命令行选项是否可省略
- help - 一个此选项作用的简单描述。
- metavar - 在使用方法消息中使用的参数值示例。
- dest - 被添加到 parse_args() 所返回对象上的属性名。

class** argparse.Action**(option_strings, dest, nargs=None, const=None, default=None, type=None, choices=None, required=False, help=None, metavar=None)

ArgumentParser.parse_args(args=None, namespace=None)	将参数字符串转换为对象并将其设为命名空间的属性。  <br />  ArgumentParser.add_subparsers([title][, description][, prog][, parser_class][, action][, option_string][, dest][, required][, help][, metavar])	创建子命令  <br />  ArgumentParser.add_argument_group(title=None, description=None)	创建适当的分组  <br />  ArgumentParser.add_mutually_exclusive_group(required=False)	创建一个互斥组  <br />  ArgumentParser.set_defaults(**kwargs)	解析器默认值

class argparse.FileType(mode='r', bufsize=-1, encoding=None, errors=None)
```javascript
import argparse
parser = argparse.ArgumentParser(description="calculate X to the power of Y")
group = parser.add_mutually_exclusive_group()
group.add_argument("-v", "--verbose", action="store_true")
group.add_argument("-q", "--quiet", action="store_true")
parser.add_argument("x", type=int, help="the base")
parser.add_argument("y", type=int, help="the exponent")
args = parser.parse_args()
answer = args.x**args.y
if args.quiet:
    print(answer)
elif args.verbose:
    print("{} to the power {} equals {}".format(args.x, args.y, answer))
else:
    print("{}^{} == {}".format(args.x, args.y, answer))
    
---
$ python3 prog.py --help
usage: prog.py [-h] [-v | -q] x y
calculate X to the power of Y
positional arguments:
  x              the base
  y              the exponent
optional arguments:
  -h, --help     show this help message and exit
  -v, --verbose
  -q, --quiet
```

# [urllib--- URL 处理模块](https://docs.python.org/zh-cn/3/library/urllib.html)

[urllib.request--- 用于打开 URL 的可扩展库](https://docs.python.org/zh-cn/3/library/urllib.request.html)  <br />  **urllib.request.urlopen(url, data=None, [timeout, ]*, cafile=None, capath=None, cadefault=False, context=None)**

**class urllib.request.Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)**  <br />  **···**

[urllib.parse--- Parse URLs into components](https://docs.python.org/zh-cn/3/library/urllib.parse.html)  <br />  [URL 解析](https://docs.python.org/zh-cn/3/library/urllib.parse.html#url-parsing)

- **parse.urlparse(urlstring, scheme='', allow_fragments=True)	**将一个 URL 解析为六个部分，对应于 `scheme://netloc/path;parameters?query#fragment`
- parse.urlunparse(parts)	根据 urlparse() 所返回的元组来构造一个 URL
- parse.urlsplit(urlstring, scheme='', allow_fragments=True)	类似于 urlparse()，但不会拆分来自 URL 的参数
- parse.urlunsplit(parts)	将 urlsplit() 所返回的元组中的元素合并为一个字符串形式的完整 URL
- parse.parse_qs(qs, keep_blank_values=False, strict_parsing=False, encoding='utf-8', errors='replace', max_num_fields=None, separator='&')	解析以字符串参数形式（类型为 application/x-www-form-urlencoded 的数据）给出的查询字符串
- parse.urljoin(base, url, allow_fragments=True)	通过合并一个 "基准 URL" (base) 和另一个 URL (url) 来构造一个完整 ("absolute") URL
- parse.urldefrag(url)	返回不带片段标识符的 url 修改版本

[URL 转码](https://docs.python.org/zh-cn/3/library/urllib.parse.html#url-quoting)

- parse.quote(string, safe='/', encoding=None, errors=None)	使用`%xx` 转义符替换 string 中的特殊字符。 字母、数字和`'_.-~'` 等字符一定不会被转码
- parse.quote_plus(string, safe='', encoding=None, errors=None)	类似于 quote()，但还会使用加号来替换空格
- parse.quote_from_bytes(bytes, safe='/')
- parse.unquote(string, encoding='utf-8', errors='replace')	将 %xx 转义符替换为其单字符等价物
- parse.unquote_plus(string, encoding='utf-8', errors='replace')
- parse.urlencode(query, doseq=False, safe='', encoding=None, errors=None, quote_via=quote_plus)	将一个包含有 str 或 bytes 对象的映射对象或二元组序列转换为以百分号编码的 ASCII 文本字符串
```javascript
from urllib import request, parse

print('Login to weibo.cn...')
email = input('Email: ')
passwd = input('Password: ')
login_data = parse.urlencode([
    ('username', email),
    ('password', passwd),
    ('entry', 'mweibo'),
    ('client_id', ''),
    ('savestate', '1'),
    ('ec', ''),
    ('pagerefer', 'https://passport.weibo.cn/signin/welcome?entry=mweibo&r=http%3A%2F%2Fm.weibo.cn%2F')
])
req = request.Request('https://passport.weibo.cn/sso/login')
req.add_header('Origin', 'https://passport.weibo.cn')
req.add_header('User-Agent', 'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')
req.add_header('Referer', 'https://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=http%3A%2F%2Fm.weibo.cn%2F')
with request.urlopen(req, data=login_data.encode('utf-8')) as f:
    print('Status:', f.status, f.reason)
    for k, v in f.getheaders():
        print('%s: %s' % (k, v))
    print('Data:', f.read().decode('utf-8'))
```

# [threading--- 基于线程的并行](https://docs.python.org/zh-cn/3/library/threading.html)
GIL(global interpreter lock，全局解释器锁)：使得同一个时刻只有一个线程在一个CPU上执行字节码。无法将多个线程映射到多个CPU上。

释放条件

1. 字节码执行一定行数后释放
1. 通过时间片划分
1. 遇到IO操作时会主动释放。

- threading.active_count()
   - 返回当前存活的线程类 Thread 对象
- threading.current_thread()
   - 返回当前对应调用者的控制线程的 Thread 对象
- threading.excepthook(args, /)
- threading.get_ident()
- 返回当前线程的 “线程标识符
- threading.get_native_id()
   - 返回内核分配给当前线程的原生集成线程 ID
- threading.enumerate()
   - 以列表形式返回当前所有存活的 Thread 对象
- threading.main_thread()
   - 返回主 Thread 对象
- threading.settrace(func)
   - 为所有 threading 模块开始的线程设置追踪函数
- threading.setprofile(func)
   - 为所有 threading 模块开始的线程设置性能测试函数
- threading.stack_size([size])
   - 返回创建线程时用的堆栈大小

**class threading.Thread(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)**  <br />  target 是用于 run() 方法调用的可调用对象  <br />  name 是线程名称  <br />  args 是用于调用目标函数的参数元组  <br />  kwargs 是用于调用目标函数的关键字参数字典

其他线程可以调用一个线程的 join() 方法。这会阻塞调用该方法的线程，直到被调用 join() 方法的线程终结。

- start()：开始线程活动
- run()：代表线程活动的方法
- join(timeout=None)：等待，直到线程终结
- is_alive()：返回线程是否存活
- daemon：一个表示这个线程是（True）否（False）守护线程的布尔值



**class threading.Lock**  <br />  实现原始锁对象的类

- acquire(blocking=True, timeout=-1)：可以阻塞或非阻塞地获得锁
- release()：释放一个锁
- locked()：如果获得了锁则返回真值



**class threading.RLock**  <br />  此类实现了重入锁对象

- acquire(blocking=True, timeout=-1)：可以阻塞或非阻塞地获得锁
- release()：释放锁，自减递归等级



**class threading.Condition(lock=None)**  <br />  实现条件变量对象的类

- acquire(*args)：请求底层锁
- release()：释放底层锁
- wait(timeout=None)：等待直到被通知或发生超时
- wait_for(predicate, timeout=None)：等待，直到条件计算为真
- notify(n=1)：默认唤醒一个等待这个条件的线程
- notify_all()：唤醒所有正在等待这个条件的线程



**class threading.Semaphore(value=1)**  <br />  该类实现信号量对象

- acquire(blocking=True, timeout=None)：获取一个信号量
- release()：释放一个信号量，将内部计数器的值增加1



**class threading.Event**  <br />  实现事件对象的类

- is_set()：当且仅当内部旗标为时返回 True
- set()：将内部标志设置为true
- clear()：将内部标志设置为false
- wait(timeout=None)：阻塞线程直到内部变量为true



**class threading.Timer(interval, function, args=None, kwargs=None)**  <br />  定时器，在经过 interval 秒的间隔事件后，将会用参数 args 和关键字参数 kwargs 调用 function

- cancel()：停止定时器并取消执行计时器将要执行的操作
```python
import threading
import time
exitFlag = 0
class myThread (threading.Thread):
   def __init__(self, threadID, name, counter):
      threading.Thread.__init__(self)
      self.threadID = threadID
      self.name = name
      self.counter = counter
   def run(self):
      print ("Starting " + self.name)
      print_time(self.name, self.counter, 5)
      print ("Exiting " + self.name)
      
      
def print_time(threadName, delay, counter):
   while counter:
      if exitFlag:
         threadName.exit()
      time.sleep(delay)
      print ("%s: %s" % (threadName, time.ctime(time.time())))
      counter -= 1
thread1 = myThread(1, "Thread-1", 1)
thread2 = myThread(2, "Thread-2", 2)
thread1.start()
thread2.start()
thread1.join()
thread2.join()
print ("Exiting Main Thread")
```
加锁
```python
import time
import threading
# 假定这是你的银行存款:
balance = 0
lock = threading.Lock()
def change_it(n):
    # 先存后取，结果应该为0:
    global balance
    balance = balance + n
    balance = balance - n
def run_thread(n):
    for i in range(100000):
        # 先要获取锁:
        lock.acquire()
        try:
            # 放心地改吧:
            change_it(n)
        finally:
            # 改完了一定要释放锁:
            lock.release()
t1 = threading.Thread(target=run_thread, args=(5,))
t2 = threading.Thread(target=run_thread, args=(8,))
t1.start()
t2.start()
t1.join()
t2.join()
print(balance)
```
ThreadLocal解决了参数在一个线程中各个函数之间互相传递的问题。
```javascript
import threading
# 创建全局ThreadLocal对象:
local_school = threading.local()
def process_student():
    # 获取当前线程关联的student:
    std = local_school.student
    print('Hello, %s (in %s)' % (std, threading.current_thread().name))
def process_thread(name):
    # 绑定ThreadLocal的student:
    local_school.student = name
    process_student()
t1 = threading.Thread(target=process_thread, args=('Alice',), name='Thread-A')
t2 = threading.Thread(target=process_thread, args=('Bob',), name='Thread-B')
t1.start()
t2.start()
t1.join()
t2.join()
```

# [multiprocessing--- 基于进程的并行](https://docs.python.org/zh-cn/3/library/multiprocessing.html)
**class multiprocessing.Process(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)**  <br />   Process 类拥有和 threading.Thread 等价的大部分方法。

**multiprocessing.Pipe([duplex])**  <br />  返回一对 Connection`对象 ``(conn1, conn2)` ， 分别表示管道的两端。

class multiprocessing.Queue([maxsize])  <br />  返回一个使用一个管道和少量锁和信号量实现的共享队列实例。  <br />  除了 task_done() 和 join() 之外，Queue  实现了标准库类 queue.Queue 中所有的方法  <br />  class multiprocessing.SimpleQueue  <br />  一个简化的 Queue 类的实现，很像带锁的 Pipe  <br />  class multiprocessing.JoinableQueue([maxsize])  <br />  JoinableQueue 类是 Queue 的子类，额外添加了 task_done() 和 join() 方法  <br />  multiprocessing.active_children()：返回当前进程存活的子进程的列表。  <br />  multiprocessing.cpu_count()：返回系统的CPU数量。  <br />  ...  <br />  class multiprocessing.connection.Connection  <br />  Connection 对象允许收发可以序列化的对象或字符串，可以看作面向消息的连接套接字。  <br />  **class multiprocessing.pool.Pool([processes[, initializer[, initargs[, maxtasksperchild[, context]]]]])**  <br />  一个进程池对象，它控制可以提交作业的工作进程池

- apply(func[, args[, kwds]])：使用 args 参数以及 kwds 命名参数调用 func , 它会返回结果前阻塞。
- apply_async(func[, args[, kwds[, callback[, error_callback]]]])：返回一个结果对象。
- map(func, iterable[, chunksize])：保持阻塞直到获得结果。
- map_async(func, iterable[, chunksize[, callback[, error_callback]]])：返回一个可用于获取结果的对象。
- imap(func, iterable[, chunksize])：map() 的延迟执行版本。
- imap_unordered(func, iterable[, chunksize])：通过迭代器返回的结果是任意的
- starmap(func, iterable[, chunksize])：和 map() 类似，不过 iterable 中的每一项会被解包再作为函数参数。
- starmap_async(func, iterable[, chunksize[, callback[, error_callback]]])：相当于 starmap() 与 map_async() 的结合，迭代 iterable 的每一项，解包作为 func 的参数并执行，返回用于获取结果的对象。
- close()：阻止后续任务提交到进程池，当所有任务执行完成后，工作进程会退出。
- terminate()：不必等待未完成的任务，立即停止工作进程。
- join()：等待工作进程结束。调用 join() 前必须先调用 close() 或者 terminate()

多进程
```python
from multiprocessing import Process
import os

# 子进程要执行的代码
def run_proc(name):
    print('Run child process %s (%s)...' % (name, os.getpid()))
    
if __name__=='__main__':
    print('Parent process %s.' % os.getpid())
    p = Process(target=run_proc, args=('test',))
    print('Child process will start.')
    p.start()
    p.join()
    print('Child process end.')
 
    
# linux   
import os

print('Process (%s) start...' % os.getpid())
# Only works on Unix/Linux/Mac:
pid = os.fork()
if pid == 0:
    print('I am child process (%s) and my parent is %s.' % (os.getpid(), os.getppid()))
else:
    print('I (%s) just created a child process (%s).' % (os.getpid(), pid))
```
线程池
```python
from multiprocessing.dummy import Pool
import time

def fun(s):
    print(s,'\tstarting')
    time.sleep(2)
    print(s, '\tending')
event=['a','b','c','d']
a = time.time()
p = Pool(3)
p.map(fun, event)
print(time.time()-a)
```

# [subprocess](https://docs.python.org/zh-cn/3/library/subprocess.html#module-subprocess) --- 子进程管理
subprocess.run(args, *, stdin=None, input=None, stdout=None, stderr=None, capture_output=False, shell=False, cwd=None, timeout=None, check=False, encoding=None, errors=None, text=None, env=None, universal_newlines=None, **other_popen_kwargs)  <br />  运行被 arg 描述的指令。等待指令完成，然后返回一个 CompletedProcess 实例。

class subprocess.CompletedProcess  <br />  run() 的返回值, 代表一个进程已经结束.

- args	被用作启动进程的参数
- returncode	子进程的退出状态码
- stdout	从子进程捕获到的标准输出
- stderr	捕获到的子进程的标准错误
```python
import subprocess

print('$ ping www.python.org')
r = subprocess.run(['ping', 'www.python.org'])
print('Exit code:', r.returncode)


def js_eval(e):
    # e = "'red yellow blue'.split(' ')"
    r = subprocess.run(
        ['node', '-e', f'console.log({e})'], capture_output=True)
    return eval(r.stdout.decode())

def js_call(e, func_name, *args):
    # e = "function f(a,b){return a+b;}"
    # func_name = 'f'
    r = subprocess.run(['node', '-e', f"{e} console.log({func_name+'('+','.join(args)+')'})"],
                         capture_output=True)
    return eval(r.stdout.decode())
```

# [asyncio--- 异步 I/O](https://docs.python.org/zh-cn/3/library/asyncio.html)
**获取事件循环**

| [asyncio.get_running_loop()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.get_running_loop) | 获取当前运行的事件循环 首选 函数。 |
| --- | --- |
| [asyncio.get_event_loop()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.get_event_loop) | 获得一个事件循环实例(当前或通过策略)。 |
| [asyncio.set_event_loop()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.set_event_loop) | 通过当前策略将事件循环设置当前事件循环。 |
| [asyncio.new_event_loop()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.new_event_loop) | 创建一个新的事件循环。 |

**事件循环方法集**  <br />  **生命周期**

| [loop.run_until_complete()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.run_until_complete) | 运行一个期程/任务/可等待对象直到完成。 |
| --- | --- |
| [loop.run_forever()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.run_forever) | 一直运行事件循环。 |
| [loop.stop()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.stop) | 停止事件循环。 |
| [loop.close()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.close) | 关闭事件循环。 |
| [loop.is_running()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.is_running) | 返回 True ， 如果事件循环正在运行。 |
| [loop.is_closed()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.is_closed) | 返回 True ，如果事件循环已经被关闭 。 |
| await [loop.shutdown_asyncgens()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.shutdown_asyncgens) | 关闭异步生成器。 |

**调试**

| [loop.set_debug()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.set_debug) | 开启或禁用调试模式。 |
| --- | --- |
| [loop.get_debug()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.get_debug) | 获取当前测试模式。 |

**调度回调函数**

| [loop.call_soon()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.call_soon) | 尽快调用回调。 |
| --- | --- |
| [loop.call_soon_threadsafe()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.call_soon_threadsafe) | [loop.call_soon() ](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.call_soon)  <br />  方法线程安全的变体。 |
| [loop.call_later()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.call_later) | 在给定时间 之后 调用回调函数。 |
| [loop.call_at()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.call_at) | 在 指定 时间调用回调函数。 |

**线程/进程池**

| await [loop.run_in_executor()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.run_in_executor) | 在 [concurrent.futures ](https://docs.python.org/zh-cn/3/library/concurrent.futures.html#module-concurrent.futures)  <br />  执行器中运行一个独占CPU或其它阻塞函数。 |
| --- | --- |
| [loop.set_default_executor()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.set_default_executor) | 设置 [loop.run_in_executor() ](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.run_in_executor)  <br />  默认执行器。 |

**任务与期程**

| [loop.create_future()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.create_future) | 创建一个 [Future ](https://docs.python.org/zh-cn/3/library/asyncio-future.html#asyncio.Future)  <br />  对象。 |
| --- | --- |
| [loop.create_task()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.create_task) | 将协程当作 [Task ](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.Task)  <br />  一样调度。 |
| [loop.set_task_factory()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.set_task_factory) | 设置 [loop.create_task() ](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.create_task)  <br />  使用的工厂，它将用来创建 Tasks 。 |
| [loop.get_task_factory()](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.get_task_factory) | 获取 [loop.create_task() ](https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio.loop.create_task)  <br />  使用的工厂，它用来创建 Tasks 。 |

**Tasks**  <br />  运行异步程序，创建Task对象，等待多件事运行超时的公共集

| [run()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.run) | 创建事件循环，运行一个协程，关闭事件循环。 |
| --- | --- |
| [create_task()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.create_task) | 启动一个asyncio的Task对象。 |
| await [sleep()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.sleep) | 休眠几秒。 |
| await [gather()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.gather) | 并发执行所有事件的调度和等待。 |
| await [wait_for()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.wait_for) | 有超时控制的运行。 |
| await [shield()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.shield) | 屏蔽取消操作 |
| await [wait()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.wait) | 完成情况的监控器 |
| [current_task()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.current_task) | 返回当前Task对象 |
| [all_tasks()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.all_tasks) | 返回事件循环中所有的task对象。 |
| [Task](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.Task) | Task对象 |
| [run_coroutine_threadsafe()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.run_coroutine_threadsafe) | 从其他OS线程中调度一个协程。 |
| for in [as_completed()](https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio.as_completed) | 用 for 循环监控完成情况。 |

```python
import asyncio,time

#用async修饰的函数称为一个协程对象
async def work(x):
    print('waiting:', x)
    await asyncio.sleep(x)
    return 'Done after {}s'.format(x)

start = time.time()
t = [1,5,3] #各任务所需时间
tasks = []
for i in t:
    coroutine = work(i) #创建协程对象
    tasks.append(asyncio.ensure_future(coroutine))  #放入任务列表
    
#将任务列表注册到事件循环
loop = asyncio.get_event_loop()
loop.run_until_complete(asyncio.wait(tasks))

#获取返回结果
for task in tasks:
    print('Task result:', task.result())
print('Total time:', time.time()-start)
```

# —— 开发工具

# [logging--- Python 的日志记录工具](https://docs.python.org/zh-cn/3/library/logging.html)
日志级别

| 级别 | 何时使用 | 数值 |
| --- | --- | --- |
| NOTSET |  | 0 |
| DEBUG | 细节信息，仅当诊断问题时适用。 | 10 |
| INFO | 确认程序按预期运行 | 20 |
| WARNING | 表明有已经或即将发生的意外（如：磁盘空间不足）。程序仍按预期进行 | 30 |
| ERROR | 由于严重的问题，程序的某些功能已经不能正常执行 | 40 |
| CRITICAL | 严重的错误，表明程序已不能继续执行 | 50 |

LogRecord 属性

| 属性名称 | 格式 | 描述 |
| --- | --- | --- |
| args | 不需要格式化。 | 合并到 msg 以产生 message 的包含参数的元组，或是其中的值将被用于合并的字典 |
| asctime | %(asctime)s | 表示 [LogRecord ](https://docs.python.org/zh-cn/3/library/logging.html#logging.LogRecord)  <br />  何时被创建的供人查看时间值。 默认形式为 '2003-07-08 16:49:45,896' (逗号之后为毫秒)。 |
| created | %(created)f | [LogRecord ](https://docs.python.org/zh-cn/3/library/logging.html#logging.LogRecord)  <br />  被创建的时间（即 time.time() 的返回值）。 |
| exc_info | 不需要格式化。 | 异常元组 (例如 sys.exc_info) 或  None |
| 文件名 | %(filename)s | pathname 的文件名部分。 |
| funcName | %(funcName)s | 函数名包括调用日志记录. |
| levelname | %(levelname)s | 消息文本记录级别 ('DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'). |
| levelno | %(levelno)s | 消息数字记录级别 (DEBUG, INFO, WARNING, ERROR, CRITICAL). |
| lineno | %(lineno)d | 发出日志记录调用所在的源行号（如果可用）。 |
| message | %(message)s | 记入日志的消息，即 msg % args 的结果 |
| module | %(module)s | 模块 (filename 的名称部分)。 |
| msecs | %(msecs)d | [LogRecord ](https://docs.python.org/zh-cn/3/library/logging.html#logging.LogRecord)  <br />  被创建的时间的毫秒部分。 |
| msg | 不需要格式化。 | 在原始日志记录调用中传入的格式字符串 |
| 名称 | %(name)s | 用于记录调用的日志记录器名称。 |
| pathname | %(pathname)s | 发出日志记录调用的源文件的完整路径名（如果可用）。 |
| process | %(process)d | 进程ID（如果可用） |
| processName | %(processName)s | 进程名（如果可用） |
| relativeCreated | %(relativeCreated)d | 以毫秒数表示的 LogRecord 被创建的时间，即相对于 logging 模块被加载时间的差值。 |
| stack_info | 不需要格式化。 | 当前线程中从堆栈底部起向上直到包括日志记录调用并导致创建此记录的堆栈帧的堆栈帧信息（如果可用）。 |
| thread | %(thread)d | 线程ID（如果可用） |
| threadName | %(threadName)s | 线程名（如果可用） |

**class logging.Logger		**记录器  <br />  propagate	记录到这个记录器的事件除了会发送到此记录器的所有处理程序外，还会传递给更高级别（祖先）记录器的处理器

- setLevel(level)：给记录器设置阈值
- isEnabledFor(level)指示此记录器是否将处理级别为 level 的消息
- getEffectiveLevel()：指示此记录器的有效级别
- getChild(suffix)：返回由后缀确定的，是该记录器的后代的记录器
- debug(msg, *args, **kwargs)：在此纪录器上记录 DEBUG 级别的消息
- info(msg, *args, **kwargs)：在此记录器上记录 INFO 级别的消息
- warning(msg, *args, **kwargs)：在此记录器上记录 WARNING 级别的消息
- error(msg, *args, **kwargs)：在此记录器上记录 ERROR 级别的消息
- critical(msg, *args, **kwargs)：在此记录器上记录 CRITICAL 级别的消息
- log(level, msg, *args, **kwargs)：在此记录器上记录 level 整数代表的级别的消息
- exception(msg, *args, **kwargs)：在此记录器上记录 ERROR 级别的消息。
- addFilter(filter)：将指定的过滤器 filter 添加到此记录器。
- removeFilter(filter)：从此记录器中删除指定的过滤器 filter。
- filter(record)：将此记录器的过滤器应用于记录，如果记录能被处理则返回 True。
- addHandler(hdlr)：将指定的处理器 hdlr 添加到此记录器。
- removeHandler(hdlr)：从此记录器中删除指定的处理器 hdlr。
- findCaller(stack_info=False, stacklevel=1)：查找调用源的文件名和行号，以 文件名，行号，函数名称和堆栈信息 4元素元组的形式返回。
- handle(record)：通过将记录传递给与此记录器及其祖先关联的所有处理器来处理
- makeRecord(name, level, fn, lno, msg, args, exc_info, func=None, extra=None, sinfo=None)：这是一种工厂方法，可以在子类中对其进行重写以创建专门的 LogRecord 实例。
- hasHandlers()：检查此记录器是否配置了任何处理器。

**class logging.Handler**	处理器

- **init**(level=NOTSET)：初始化 Handler 实例时，将过滤列表置为空，并且创建锁来序列化对 I/O 的访问
- createLock()：初始化一个线程锁，用来序列化对底层的 I/O 功能的访问
- acquire()：使用 createLock() 获取线程锁
- release()：使用 acquire() 来释放线程锁
- setLevel(level)：给处理器设置阈值为 level 。日志级别小于 level 将被忽略
- setFormatter(fmt)：将此处理器的 Formatter 设置为 fmt
- addFilter(filter)：将指定的过滤器 filter 添加到此处理器
- removeFilter(filter)：从此处理器中删除指定的过滤器 filter
- filter(record)：将此处理器的过滤器应用于记录，在要处理记录时返回 True
- flush()：确保所有日志记录从缓存输出
- close()：整理处理器使用的所有资源
- handle(record)：经已添加到处理器的过滤器过滤后，有条件地发出指定的日志记录
- handleError(record)：调用 emit() 期间遇到异常时，应从处理器中调用此方法
- format(record)：设置了格式器则用其对记录进行格式化
- emit(record)：执行实际记录给定日志记录所需的操作

**class logging.Formatter(fmt=None, datefmt=None, style='%')**  <br />  格式器——将 [LogRecord](https://docs.python.org/zh-cn/3/library/logging.html#logging.LogRecord) 转换为可由人或外部系统解释的字符串

- format(record)：记录的属性字典用作字符串格式化操作的参数。
- formatTime(record, datefmt=None)：由想要使用格式化时间的格式器中的 format() 调用
- formatException(exc_info)：将指定的异常信息（由 sys.exc_info() 返回的标准异常元组）格式化为字符串。
- formatStack(stack_info)：将指定的堆栈信息格式化为字符串

**class logging.Filter(name='')	过滤器被 Handlers 和 Loggers 用来实现比按层级提供更复杂的过滤操作**  <br />  [logging.handlers](https://docs.python.org/zh-cn/3/library/logging.handlers.html#module-logging.handlers)

- class logging.StreamHandler(stream=None)
- class logging.FileHandler(filename, mode='a', encoding=None, delay=False)
- HTTPHandler

[logging.config](https://docs.python.org/zh-cn/3/library/logging.config.html#module-logging.config)

- logging.config.dictConfig(config)
- logging.config.fileConfig(fname, defaults=None, disable_existing_loggers=True)
- logging.config.listen(port=DEFAULT_LOGGING_CONFIG_PORT, verify=None)：在指定的端口上启动套接字服务器，并监听新的配置
```python
import logging
from logging import StreamHandler,Formatter,FileHandler

def new_logger(name):
    #创建日志记录器
    logger = logging.getLogger(name=name)
    logger.setLevel(logging.DEBUG)
    #创建日志处理器
    handler = StreamHandler()
    handler.setLevel(logging.INFO)
    #设置处理器的日志格式化
    formatter = Formatter(fmt='[ %(asctime)s of %(name)s - %(levelname)s ] %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S')
    handler.setFormatter(formatter)
    #添加记录器的处理器
    logger.addHandler(handler)
    fileHandler = FileHandler('access.log', encoding='utf-8')
    fileHandler.setLevel(logging.DEBUG)
    fileHandler.setFormatter(Formatter(
        '< %(asctime)s > at %(lineno)s of %(name)s: %(message)s',
        '%m-%d %H:%M:%S'))
    logger.addHandler(fileHandler)
    return logger


if __name__ == '__main__':
    logger = new_logger('spider')
    logger.info('logging information')
    logger.debug('logging debug')
```
```javascript
'''
日志格式化中的扩展字段
- %(扩展字段名)s
– logger.info(msg, extra)
'''
import logging

def init_logger():
    #配置 root 记录器的基本信息（格式化、处理器）
    logging.basicConfig(format='< %(asctime)s > of %(user_id)s at %(pathname)s \
                                %(lineno)s line: %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S',
                        level=logging.INFO)


if __name__ == '__main__':
    init_logger()
    # 以root logger记录信息
    # logger =logging.getLogger()
    logging.info('hi, info!',extra={'user_id': '19'})
    logging.warning('logging warning!',extra={'user_id': '20'})
```

# [unittest--- 单元测试框架](https://docs.python.org/zh-cn/3/library/unittest.html)
继承 [unittest.TestCase](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase) 就创建了一个测试样例  <br />  方法的命名都以 test 开头

- test fixture：测试夹具，初始化和清理测试数据及环境
   - 测试前置（setUp）
   - 清理（tearDown）
- test case 测试用例
- test suite 测试套件：把需要一起执行的用例组合到一起
- test runner：运行用例并返回结果
```python
#测试方法
class MyTestCase(unittest.TestCase):
    def setUp(self):
        pass
    def tearDown(self):
        pass
    
#测试类
class MyTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        pass
  
    @classmethod
    def tearDownClass(cls):
        pass
    
#测试模块
def setUpModule():
    pass
def tearDownModule():
    pass
```
断言

| Method | Checks that |
| --- | --- |
| [assertEqual(a, b)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertEqual) | a == b |
| [assertNotEqual(a, b)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertNotEqual) | a != b |
| [assertTrue(x)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertTrue) | bool(x) is True |
| [assertFalse(x)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertFalse) | bool(x) is False |
| [assertIs(a, b)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertIs) | a is b |
| [assertIsNot(a, b)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertIsNot) | a is not b |
| [assertIsNone(x)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertIsNone) | x is None |
| [assertIsNotNone(x)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertIsNotNone) | x is not None |
| [assertIn(a, b)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertIn) | a in b |
| [assertNotIn(a, b)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertNotIn) | a not in b |
| [assertIsInstance(a, b)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertIsInstance) | isinstance(a, b) |
| [assertNotIsInstance(a, b)](https://docs.python.org/zh-cn/3/library/unittest.html#unittest.TestCase.assertNotIsInstance) | not isinstance(a, b) |

- 通过 skip 装饰器或 SkipTest 直接跳过测试
- 通过 skipIf 或 skipUnless 按条件跳过或不跳过测试
- 通过 expectedFailure 预计测试失败
```python
class MyTestCase(unittest.TestCase):
    @unittest.skip("直接跳过")
    def test_nothing(self):
        self.fail("shouldn't happen")
        
    @unittest.skipIf(mylib.__version__ < (1, 3),
                     "满足条件跳过")
    def test_format(self):
        # Tests that work for only a certain version of the library.
        pass
    
    @unittest.skipUnless(sys.platform.startswith("win"), "满足条件不跳过")
    def test_windows_support(self):
        # windows specific testing code
        pass
    
    def test_maybe_skipped(self):
        if not external_resource_available():
            self.skipTest("跳过")
        # test code that depends on the external resource
        pass
    
    @unittest.expectedFailure
    def test_fail(self):
        self.assertEqual(1, 0, "这个目前是失败的")
```
class unittest.TestSuite(tests=())

- addTest(test)
- addTests(tests)
- run(result)
- debug()
- countTestCases()

class unittest.TestLoader

生成HTMLTestRunner测试报告
```python
import HTMLTestRunner
import unittest,time

class TestStringMethods(unittest.TestCase):
    def setUp(self):
        print('== setUp ==')
    def tearDown(self):
        print('== tearDown ==')
    def test_upper(self):
        u'测试大写'
        self.assertEqual('foo'.upper(), 'FOO')
    def test_isupper(self):
        u'测试大写判断'
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())
    def test_split(self):
        u'测试字符分割'
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):
            s.split(2)
            
suite=unittest.TestSuite()
suite.addTest(TestStringMethods('test_upper'))
suite.addTest(TestStringMethods('test_isupper'))
suite.addTest(TestStringMethods('test_split'))
now = time.strftime("%Y-%m-%d %H_%M_%S",time.localtime())
filename = now+'_result.html'
with open(filename,'wb') as fp:
    runner = HTMLTestRunner.HTMLTestRunner(
        stream=fp,
        title=u'搜索功能测试报告',
        description=u'用例执行情况：')
    runner.run(suite)
```

# [pydoc](https://docs.python.org/zh-cn/3/library/pydoc.html#module-pydoc) --- 文档生成器和在线帮助系统

- python -m pydoc 模块名：在控制台查看指定模块的说明性文档
- python -m pydoc -w 模块名：生成 HTML 帮助文档
- 查看当前操作系统中所有 Python 模块的 HTML 文档信息
   - python -m pydoc -p 端口号
   - python -m pydoc -b
- python -m pydoc -k 模块名：查找模块

# [doctest](https://docs.python.org/zh-cn/3/library/doctest.html#module-doctest) --- 测试交互性的Python示例
寻找像Python交互式(>>>)代码的文本，然后执行这些代码来确保它们的确就像展示的那样正确运行

- doctest.testfile(filename, module_relative=True, name=None, package=None, globs=None, verbose=None, report=True, optionflags=0, extraglobs=None, raise_on_error=False, parser=DocTestParser(), encoding=None)
- doctest.testmod(m=None, name=None, globs=None, verbose=None, report=True, optionflags=0, extraglobs=None, raise_on_error=False, exclude_empty=False)
- doctest.run_docstring_examples(f, globs, verbose=False, name="NoName", compileflags=None, optionflags=0)
```javascript
def display(add):
    '''
    这是一个函数
    >>> display("http://c.biancheng.net/python/")
    http://c.biancheng.net/python/
    >>> display("http://c.biancheng.net/java/")
    http://c.biancheng.net/java/
    '''
    print(add)
   
   
class my_cla:
    '''
    这是一个类
    >>> myClass = my_cla()
    >>> myClass.say("http://c.biancheng.net/shell/")
    http://c.biancheng.net/shell/
    >>> myClass.say("http://c.biancheng.net")
    abc
    '''
    def say(self,add):
        '''
        这是一个类实例方法
        '''
        print(add)
        
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```
CLI
```javascript
python example.py -v
或
python -m doctest -v example.py
```

# [dataclasses](https://docs.python.org/zh-cn/3/library/dataclasses.html#module-dataclasses) --- 数据类
@dataclasses.dataclass(*, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=True, kw_only=False, slots=False)	用于将生成的 [special method](https://docs.python.org/zh-cn/3/glossary.html#term-special-method) 添加到类中
```javascript
@dataclass
class C:
    a: int       # 'a' has no default value
    b: int = 0   # assign a default value for 'b'
    
# a 和 b 都将包含在添加的 __init__() 方法中，它们将被定义为:
def __init__(self, a: int, b: int = 0):
```
dataclasses.field(*, default=MISSING, default_factory=MISSING, init=True, repr=True, hash=None, compare=True, metadata=None, kw_only=MISSING)  <br />  dataclasses.asdict(instance, *, dict_factory=dict)	将数据类 instance 转换为字典  <br />  dataclasses.astuple(instance, *, tuple_factory=tuple)	将数据类 instance 转换为元组

# smtplib ---SMTP协议客户端
class smtplib.SMTP(host='', port=0, local_hostname=None, [timeout, ]source_address=None)

- SMTP.set_debuglevel(level)
- SMTP.docmd(cmd, args='')
- SMTP.connect(host='localhost', port=0)
- SMTP.helo(name='')
- SMTP.ehlo(name='')
- SMTP.ehlo_or_helo_if_needed()
- SMTP.has_extn(name)
- SMTP.verify(address)
- SMTP.login(user, password, *, initial_response_ok=True)
- SMTP.auth(mechanism, authobject, *, initial_response_ok=True)
- SMTP.starttls(keyfile=None, certfile=None, context=None)
- SMTP.sendmail(from_addr, to_addrs, msg, mail_options=(), rcpt_options=())
- SMTP.send_message(msg, from_addr=None, to_addrs=None, mail_options=(), rcpt_options=())
- SMTP.quit()
```python
import smtplib
def prompt(prompt):
    return input(prompt).strip()
fromaddr = prompt("From: ")
toaddrs  = prompt("To: ").split()
print("Enter message, end with ^D (Unix) or ^Z (Windows):")
# Add the From: and To: headers at the start!
msg = ("From: %s\r\nTo: %s\r\n\r\n"
       % (fromaddr, ", ".join(toaddrs)))
while True:
    try:
        line = input()
    except EOFError:
        break
    if not line:
        break
    msg = msg + line
print("Message length is", len(msg))
server = smtplib.SMTP('localhost')
server.set_debuglevel(1)
server.sendmail(fromaddr, toaddrs, msg)
server.quit()
```
示例
```python
import smtplib
import email
from email.mime.text import MIMEText    # 负责构造文本
from email.mime.image import MIMEImage  # 负责构造图片
from email.mime.multipart import MIMEMultipart  # 负责将多个对象集合起来
from email.header import Header

# SMTP服务器
mail_host = "smtp.163.com"
# 发件人邮箱
mail_sender = "******@163.com"
# 邮箱授权码
mail_license = "********"
# 收件人邮箱
mail_receivers = ["******@qq.com", "******@outlook.com"]
mm = MIMEMultipart('related')
# 邮件头部内容
# 邮件主题
subject_content = """Python邮件测试"""
# 设置发送者,注意严格遵守格式,里面邮箱为发件人邮箱
mm["From"] = "sender_name<******@163.com>"
# 设置接受者,注意严格遵守格式,里面邮箱为接受者邮箱
mm["To"] = "receiver_1_name<******@qq.com>,receiver_2_name<******@outlook.com>"
# 设置邮件主题
mm["Subject"] = Header(subject_content, 'utf-8')
# 邮件正文内容
body_content = """你好，这是一个测试邮件！"""
# 构造文本
message_text = MIMEText(body_content, "plain", "utf-8")
# 向MIMEMultipart对象中添加文本对象
mm.attach(message_text)
# 二进制读取图片
image_data = open('a.jpg', 'rb')
# 设置读取获取的二进制数据
message_image = MIMEImage(image_data.read())
image_data.close()
# 添加图片文件到邮件信息当中去
mm.attach(message_image)
# 构造附件
atta = MIMEText(open('sample.xlsx', 'rb').read(), 'base64', 'utf-8')
# 设置附件信息
atta["Content-Disposition"] = 'attachment; filename="sample.xlsx"'
# 添加附件到邮件信息当中去
mm.attach(atta)
# 创建SMTP对象
stp = smtplib.SMTP()
# 设置发件人邮箱的域名和端口
stp.connect(mail_host, 25)
# 打印出和SMTP服务器交互的所有信息
stp.set_debuglevel(1)
# 登录邮箱
stp.login(mail_sender, mail_license)
# 发送邮件
stp.sendmail(mail_sender, mail_receivers, mm.as_string())
print("邮件发送成功")
# 关闭SMTP对象
stp.quit()
```
```python
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.mime.audio import MIMEAudio
from email.mime.image import MIMEImage
from email.encoders import encode_base64

class Mail():
    def __init__(self, user, pwd, host):
        self.mail_user = user
        self.mail_pwd = pwd      # 邮箱授权码
        self.mail_server = smtplib.SMTP()
        self.mail_server.connect(host, 25)
        self.mail_server.ehlo()
        self.mail_server.login(self.mail_user, self.mail_pwd)
        
    def __del__(self):
        self.mail_server.close()
        
    # 发送邮件
    def send_mail(self, recipient, subject, text, file_path=None):
        msg = MIMEMultipart()
        msg["From"] = self.mail_user
        msg["Subject"] = subject
        msg["To"] = ",".join(recipient)
        msg.attach(MIMEText(text))
        if file_path:
            msg.attach(self.get_attachment(file_path))
        self.mail_server.sendmail(self.mail_user, recipient, msg.as_string())
        print("——邮件发送成功——")
        
    # 添加邮件附件
    def get_attachment(self, file_path):
        file_name = file_path.split("\\")[-1]
        attachment = MIMEText(open(file_path, 'rb').read(), 'base64', 'utf-8')
        # attachment["Content-Type"] = 'application/octet-stream'
        attachment["Content-Disposition"] = 'attachment; filename=' + file_name
        return attachment
    
    
if __name__ == '__main__':
    title = "自动化测试报告测试"
    file_path = r"D:\Users\泷\Pictures\Camera Roll\upload-3406226_1920.jpg"
    content = """你好，这是一个测试邮件！"""
    RECIPIENT = ["yulong9@outlook.com", "remarkablerain@126.com"]
    mail = Mail("remarkablerain@126.com", "KDXTSZXYQCIBLCMY", "smtp.126.com")
    mail.send_mail(RECIPIENT, title, content, file_path)
```

# base64 --- Base16, Base32, Base64, Base85 数据编码
一种用64个字符来表示任意二进制数据的方法。

- base64.b64encode(s, altchars=None)
- 对 bytes-like object s 进行 Base64 编码，并返回编码后的 bytes
- base64.b64decode(s, altchars=None, validate=False)
- 解码 Base64 编码过的 bytes-like object 或 ASCII 字符串 s 并返回解码过的 bytes
- base64.standard_b64encode(s)
- 编码 bytes-like object s，使用标准 Base64 字母表并返回编码过的 bytes
- base64.standard_b64decode(s)
- base64.urlsafe_b64encode(s)
- 编码 bytes-like object s，使用 URL 与文件系统安全的字母表，使用 - 以及 _ 代替标准 Base64 字母表中的 + 和 /。返回编码过的 bytes。
- base64.urlsafe_b64decode(s)
- base64.b32encode(s)
- 用 Base32 编码 bytes-like object s 并返回编码过的 bytes
- base64.b32decode(s, casefold=False, map01=None)
- base64.b16encode(s)
- 用 Base16 编码 bytes-like object s 并返回编码过的 bytes
- base64.b16decode(s, casefold=False)¶
- base64.a85encode(b, *, foldspaces=False, wrapcol=0, pad=False, adobe=False)
- 用 Ascii85 编码 bytes-like object s 并返回编码过的 bytes
- base64.a85decode(b, *, foldspaces=False, adobe=False, ignorechars=b' \t\n\r\v')
```python
>>> import base64
>>> base64.b64encode(b'binary\x00string')
b'YmluYXJ5AHN0cmluZw=='
>>> base64.b64decode(b'YmluYXJ5AHN0cmluZw==')
b'binary\x00string'
```

# struct --- 将字节串解读为打包的二进制数据

- exception struct.error
- 会在多种场合下被引发的异常
- struct.pack(format, v1, v2, ...)
- 返回一个 bytes 对象，其中包含根据格式字符串 format 打包的值 v1, v2, ... 参数个数必须与格式字符串所要求的值匹配
- struct.unpack(format, buffer)
- 根据格式字符串 format 从缓冲区 buffer 解包（假定是由 pack(format, ...) 打包）
- struct.pack_into(format, buffer, offset, v1, v2, ...)
- 根据格式字符串 format 打包 v1, v2, ... 等值并将打包的字节串写入可写缓冲区 buffer 从 offset 开始的位置
- struct.unpack_from(format, buffer, offset=0)
- struct.iter_unpack(format, buffer)
- 根据格式字符串 format 以迭代方式从缓冲区 buffer 解包
- struct.calcsize(format)
- 返回与格式字符串 format 相对应的结构的大小

**class struct.Struct(format)**  <br />  返回一个新的 Struct 对象，它会根据格式字符串 format 来写入和读取二进制数据

- pack(v1, v2, ...)
- pack_into(buffer, offset, v1, v2, ...)
- unpack(buffer)
- unpack_from(buffer, offset=0)
- iter_unpack(buffer)
- format
- size
```python
>>> import struct
>>> struct.pack('>I', 10240099)  #>表示字节顺序是big-endian，也就是网络序，I表示4字节无符号整数
b'\x00\x9c@c'
>>> struct.unpack('>IH', b'\xf0\xf0\xf0\xf0\x80\x80')
(4042322160, 32896)
```

# [hashlib](https://docs.python.org/zh-cn/3/library/hashlib.html#module-hashlib) --- 安全哈希与消息摘要

- hashlib.algorithms_available
- hash.digest_size	以字节表示的结果哈希对象的大小。
- hash.block_size	以字节表示的哈希算法的内部块大小。
- hash.update(data)：用 bytes-like object 来更新哈希对象
- hash.digest()：返回当前已传给 update() 方法的数据摘要
- hash.hexdigest()	摘要会以两倍长度字符串对象的形式返回，其中仅包含十六进制数码。
- hash.copy()	返回哈希对象的副本
```javascript
import hashlib
md5 = hashlib.md5()
md5.update('how to use md5 in python hashlib?'.encode('utf-8'))
print(md5.hexdigest())
d26a53750bc40b38b65a520292f69306
```
Hmac算法：Keyed-Hashing for Message Authentication。它通过一个标准算法，在计算哈希的过程中，把key混入计算过程中。
```javascript
import hmac
message = b'Hello, world!'
key = b'secret'
h = hmac.new(key, message, digestmod='MD5')
h.hexdigest()	# 'fa4ee7d173f2d97ee79022d1a7355bcf'
```

# [secrets--- 生成管理密码的安全随机数](https://docs.python.org/zh-cn/3/library/secrets.html)

_class _secrets.**SystemRandom**  <br />  用操作系统提供的最高质量源生成随机数的类。详见 [random.SystemRandom](https://docs.python.org/zh-cn/3/library/random.html#random.SystemRandom)。  <br />  secrets.**choice**(_sequence_)  <br />  返回从非空序列中随机选取的元素。  <br />  secrets.**randbelow**(_n_)  <br />  返回 [0, _n_) 范围内的随机整数。  <br />  secrets.**randbits**(_k_)  <br />  返回 _k_ 个随机比特位的整数。

secrets.**token_bytes**([_nbytes=None_])  <br />  返回含 _nbytes_ 个字节的随机字节字符串  <br />  secrets.**token_hex**([_nbytes=None_])  <br />  返回十六进制随机文本字符串。  <br />  secrets.**token_urlsafe**([_nbytes=None_])  <br />  返回安全的 URL 随机文本字符串


# [zipfile--- 使用ZIP存档](https://docs.python.org/zh-cn/3/library/zipfile.html)

_class _zipfile.**ZipFile**(_file_, _mode='r'_, _compression=ZIP_STORED_, _allowZip64=True_, _compresslevel=None_, _*_, _strict_timestamps=True_)  <br />  打开一个 ZIP 文件，_file_ 为一个指向文件的路径

ZipFile.**close**()	关闭归档文件。  <br />  ZipFile.**getinfo**(_name_)	返回一个 [ZipInfo](https://docs.python.org/zh-cn/3/library/zipfile.html#zipfile.ZipInfo) 对象，其中包含有关归档成员 _name_ 的信息  <br />  ZipFile.**infolist**()  <br />  ZipFile.**namelist**()	返回按名称排序的归档成员列表。  <br />  ZipFile.**open**(_name_, _mode='r'_, _pwd=None_, _*_, _force_zip64=False_)	以二进制文件类对象的形式访问一个归档成员。  <br />  ZipFile.**extract**(_member_, _path=None_, _pwd=None_)  <br />  从归档中提取出一个成员放入当前工作目录  <br />  ZipFile.**extractall**(_path=None_, _members=None_, _pwd=None_)  <br />  从归档中提取出所有成员放入当前工作目录  <br />  ZipFile.**printdir**()  <br />  将归档的目录表打印到 sys.stdout。  <br />  ZipFile.**setpassword**(_pwd_)  <br />  设置 _pwd_ 为用于提取已加密文件的默认密码。  <br />  ZipFile.**read**(_name_, _pwd=None_)  <br />  返回归档中文件 _name_ 的字节数据。  <br />  ZipFile.**testzip**()  <br />  读取归档中的所有文件并检查它们的 CRC 和文件头  <br />  ZipFile.**write**(_filename_, _arcname=None_, _compress_type=None_, _compresslevel=None_)  <br />  将名为 _filename_ 的文件写入归档，给予的归档名为 _arcname_   <br />  ZipFile.**writestr**(_zinfo_or_arcname_, _data_, _compress_type=None_, _compresslevel=None_)[¶](https://docs.python.org/zh-cn/3/library/zipfile.html#zipfile.ZipFile.writestr)  <br />  将一个文件写入归档

_class _zipfile.**Path**(_root_, _at=''_)

- Path.**name	**最终的路径组成部分。
- Path.**open**(_mode='r'_, _*_, _pwd_, _**_)	在当前路径上发起调用 [ZipFile.open()](https://docs.python.org/zh-cn/3/library/zipfile.html#zipfile.ZipFile.open)。 
- Path.**iterdir**()	枚举当前目录的子目录。
- Path.**is_dir**()	如果当前上下文引用了一个目录则返回 True。
- Path.**is_file**()	如果当前上下文引用了一个文件则返回 True。
- Path.**exists**()	如果当前上下文引用了 zip 文件内的一个文件或目录则返回 True。
- Path.**read_text**(_*_, _**_)	读取当前文件为 unicode 文本
- Path.**read_bytes**()	读取当前文件为字节串。
- Path.**joinpath**(_*other_)	返回一个新的 Path 对象，其中合并了每个 _other_ 参数

```python
import psutil
import zipfile
import os

class Zip:
    # 限制解压后大小不能超过1M，文件个数不能超过10
    MAX_SIZE = 1*1024*1024
    MAX_FILE_CNT = 10

    @staticmethod
    def unzip(path, zip_file):
        file_path = path+os.sep+zip_file
        dest_dir = path
        src_file = zipfile.ZipFile(file_path, 'r')

        # 1 检查文件个数
        file_count = len(src_file.infolist())
        if file_count >= Zip.MAX_FILE_CNT:
            raise IOError(
                f'zipfile({zip_file}) contains {file_count} files exceed max file count')

        # 2 检查第一层解压文件总大小
        total_size = sum(info.file_size for info in src_file.infolist())
        if total_size >= Zip.MAX_SIZE:
            raise IOError(
                f'zipfile({zip_file}) size {total_size} exceed max limit')

        # 3 检查磁盘剩余空间
        dest_dir_partition = '/'  # 解压目录所在分区
        if total_size >= psutil.disk_usage(dest_dir_partition).free:
            raise IOError(
                f'zipfile({zip_file}) size {total_size} exceed remain target disk space')

        # 检查通过，解压所有文件
        src_file.extractall(dest_dir)
```



# [socket](https://docs.python.org/zh-cn/3/library/socket.html#module-socket) --- 底层网络接口
socket.socket(family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None)  <br />  使用给定的地址族、套接字类型和协议号创建一个新的套接字。  <br />  地址（和协议）簇

- socket.AF_UNIX
- socket.AF_INET
- socket.AF_INET6

套接字类型

- socket.SOCK_STREAM
- socket.SOCK_DGRAM
- socket.SOCK_RAW
- socket.SOCK_RDM
- socket.SOCK_SEQPACKET

**TCP**  <br />  server
```javascript
import socket,time,threading
def tcplink(sock, addr):
    print('Accept new connection from %s:%s...' % addr)
    sock.send(b'Welcome!')
    while True:
        data = sock.recv(1024).decode('utf-8')
        time.sleep(1)
        if not data or data == 'exit':
            break
        print(f'{addr[0]}:{addr[1]} > {data}')
        sock.send(input().encode('utf-8'))
    sock.close()
    print('Connection from %s:%s closed.' % addr)
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 类型，类型协议
# 监听端口:
s.bind(('127.0.0.1', 9999))
# 允许连接数
s.listen(5)
print('Waiting for connection...')
while True:
    # 接受一个新连接:
    sock, addr = s.accept()
    # 创建新线程来处理TCP连接:
    t = threading.Thread(target=tcplink, args=(sock, addr))
    t.start()
```
client
```javascript
import socket
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 建立连接:
client.connect(('127.0.0.1', 9999))
while True:
    # 接收消息:
    print('server > '+client.recv(1024).decode('utf-8'))
    # 发送数据:
    data = input()
    if not data or data == 'exit':
        client.close()
    client.send(data.encode('utf-8'))
```
**UDP**  <br />  server
```javascript
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
# 监听端口:
s.bind(('127.0.0.1', 9999))
print('Bind UDP on 9999...')
while True:
    # 接收数据:
    data, addr = s.recvfrom(1024)
    print(f'{addr[0]}:{addr[1]} > {data}')
    # 发送数据:
    s.sendto(input().encode(), addr)
```
client
```javascript
import socket
client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
print('Please input...')
while True:
    # 发送数据:
    data = input()
    if not data or data == 'exit':
        client.close()
    client.sendto(data.encode(), ('127.0.0.1', 9999))
    # 接收消息:
    print('server > ' + client.recv(1024).decode('utf-8'))
```

# [winreg](https://docs.python.org/3/library/winreg.html#module-winreg) — Windows registry access
Function

- winreg.CloseKey(hkey)
- winreg.ConnectRegistry(computer_name, key)	建立到另一台计算上上的预定义注册表句柄的连接，返回一个 handle 对象.
- winreg.CreateKey(key, sub_key)	创建或打开特定的键，返回一个 handle 对象。
- winreg.CreateKeyEx(key, sub_key, reserved=0, access=KEY_WRITE)	创建或打开特定的键
- winreg.DeleteKey(key, sub_key)	删除指定的键
- winreg.DeleteKeyEx(key, sub_key, access=KEY_WOW64_64KEY, reserved=0)	删除指定的键。
- winreg.DeleteValue(key, value)	从某个注册键中删除一个命名值项。
- winreg.EnumKey(key, index)	列举某个已经打开注册表键的子项，并返回一个字符串。
- winreg.EnumValue(key, index)	列举某个已经打开注册表键的值项，并返回一个元组。
- winreg.ExpandEnvironmentStrings(str)
- winreg.FlushKey(key)	将某个键的所有属性写入注册表。
- winreg.LoadKey(key, sub_key, file_name)	Creates a subkey under the specified key and stores registration information from a specified file into that subkey.
- winreg.OpenKey(key, sub_key, reserved=0, access=KEY_READ)
- winreg.OpenKeyEx(key, sub_key, reserved=0, access=KEY_READ)
- winreg.QueryInfoKey(key)	Returns information about a key, as a tuple.
- winreg.QueryValue(key, sub_key)	Retrieves the unnamed value for a key, as a string.
- winreg.QueryValueEx(key, value_name)
- winreg.SaveKey(key, file_name)	Saves the specified key, and all its subkeys to the specified file.
- winreg.SetValue(key, sub_key, type, value)	Associates a value with a specified key.
- winreg.SetValueEx(key, value_name, reserved, type, value)	Stores data in the value field of an open registry key.
- winreg.QueryReflectionKey(key)	Determines the reflection state for the specified key.

访问权限

- winreg.KEY_ALL_ACCESS
- winreg.KEY_WRITE：合并STANDARD_RIGHTS_WRITE，KEY_SET_VALUE和 KEY_CREATE_SUB_KEY访问权限。
- winreg.KEY_READ：结合STANDARD_RIGHTS_READ， ，KEY_QUERY_VALUE， KEY_ENUMERATE_SUB_KEYS和KEY_NOTIFY值。
```python
import os
import winreg as wr
 
BASE_PATH = r"Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings"
 
 
# 获得所有程序的 SID
def get_apps():
    app_list = []
    with wr.OpenKeyEx(wr.HKEY_CURRENT_USER, BASE_PATH) as app:
        app_nums = wr.QueryInfoKey(app)[0]
        for i in range(app_nums):
            info = [wr.EnumKey(app, i)]
            with wr.OpenKeyEx(app, info[0]) as key:
                info.extend([wr.EnumValue(key, 0)[1], wr.EnumValue(key, 1)[1]])
            app_list.append(info)
    return app_list

# 开启UWP应用使用代理
def enable_all_uwp_net():
    apps = get_apps()
    for app in apps:
        os.system('CheckNetIsolation loopbackexempt -a -p=' + app[0])
        
# 关闭UWP应用使用代理
def disable_all_uwp_net():
    apps = get_apps()
    for app in apps:
        os.system('CheckNetIsolation loopbackexempt -d -p=' + app[0])
print('sid\tDisplayName\tMoniker')
apps = get_apps()
for app in apps:
    print(*app, sep='\t')
```
需要以管理员的
```python
import winreg as wr
BASE_PATH = r"SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FolderDescriptions"
# 依次是 图片、音乐、视频、文档、下载、桌面
sid = ['{0ddd015d-b06c-45d5-8c4c-f59713854639}',
       '{a0c69a99-21c8-4671-8703-7934162fcf1d}',
       '{35286a68-3c57-41a1-bbb1-0eae73d76c95}',
       '{f42ee2d3-909f-4907-8871-4c22fc0bf756}',
       '{7d83ee9b-2244-4e70-b1f5-5393042af1e4}',
       '{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}', ]
with wr.OpenKey(wr.HKEY_LOCAL_MACHINE, BASE_PATH, access=wr.KEY_ALL_ACCESS) as fd:
    for i in sid:
        with wr.OpenKey(fd, i + r'\PropertyBag', access=wr.KEY_ALL_ACCESS) as key:
            wr.SetValueEx(key, 'ThisPCPolicy', 0, wr.REG_SZ, 'Hide')
            print(i,'passed')
```

# [ctypes](https://docs.python.org/zh-cn/3.9/library/ctypes.html#module-ctypes) --- 外部函数库
| ctypes 类型 | C 类型 | Python 数据类型 |
| --- | --- | --- |
| [c_bool](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_bool) | _Bool | bool (1) |
| [c_char](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_char) | char | 单字符字节串对象 |
| [c_wchar](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_wchar) | wchar_t | 单字符字符串 |
| [c_byte](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_byte) | char | int |
| [c_ubyte](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_ubyte) | unsigned char | int |
| [c_short](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_short) | short | int |
| [c_ushort](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_ushort) | unsigned short | int |
| [c_int](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_int) | int | int |
| [c_uint](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_uint) | unsigned int | int |
| [c_long](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_long) | long | int |
| [c_ulong](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_ulong) | unsigned long | int |
| [c_longlong](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_longlong) | __int64 或 long long | int |
| [c_ulonglong](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_ulonglong) | unsigned __int64 或 unsigned long long | int |
| [c_size_t](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_size_t) | size_t | int |
| [c_ssize_t](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_ssize_t) | ssize_t 或 Py_ssize_t | int |
| [c_float](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_float) | float | float |
| [c_double](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_double) | double | float |
| [c_longdouble](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_longdouble) | long double | float |
| [c_char_p](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_char_p) | char * (NUL terminated) | 字节串对象或 None |
| [c_wchar_p](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_wchar_p) | wchar_t * (NUL terminated) | 字符串或 None |
| [c_void_p](https://docs.python.org/zh-cn/3.9/library/ctypes.html#ctypes.c_void_p) | void * | int 或 None |

class ctypes.CDLL(name, mode=DEFAULT_MODE, handle=None, use_errno=False, use_last_error=False, winmode=0)  <br />  此类的实例即已加载的动态链接库
```javascript
gcc 原文件名.c -shared -o 新文件名.so
```
```javascript
from ctypes import *
  
# load the shared object file
adder = CDLL('./adder.so')
res_int = adder.add_int(4, 5)
print("Sum of 4 and 5 = " + str(res_int))
a = c_float(5.5)
b = c_float(4.1)
add_float = adder.add_float
add_float.restype = c_float
print( "Sum of 5.5 and 4.1 = ", str(add_float(a, b)))
```



