
[正则表达式](http://regexlab.com)（regex）	一种从左到右匹配主体字符串的模式  <br />  一组由字母和符号组成的特殊文本，它可以用来从文本中找出满足你想要的格式的句子。


# [元字符](https://www.runoob.com/regexp/regexp-metachar.html)
| 字符 | 描述 |
| --- | --- |
| **\\** | 转义 |
| **.** | 通配符（wild ward） 匹配任何单个字符 (\\n、\\r 除外) |
| **^** | 匹配字符串的开头 |
| **$** | 匹配字符串的末尾 |
| ***** | 匹配>=0 次 |
| **+** | 匹配>=1 次 |
| **?** | 匹配0或1次  <br />  在任何一个其他限制符 (*, +, ?, {}) 后时，为非贪婪模式 |
| **{n}** | 匹配 n 次 |
| **{n,}** | 匹配 >=n 次 |
| **{n,m}** | 匹配 n-m 次 |
| **x&#124;y** | 匹配 x 或 y |
| **[xyz]** | 匹配所包含的任意一个字符 |
| **[^xyz]** | 匹配未包含的任意字符 |


# 分组与断言
| 分类 | 代码/语法 | 说明 |
| --- | --- | --- |
| 捕获 | (exp) | 匹配exp,并捕获文本到自动命名的组里，从0开始计数 |
|  | (?exp) | 匹配exp,并捕获文本到名称为name的组里，也可以写成(?'name'exp) |
|  | (?:exp) | 匹配exp,不捕获匹配的文本，也不给此分组分配组号 |
| 零宽断言 | (?=exp) | 匹配exp前面的位置，正向肯定预查（look ahead positive assert） |
|  | (?<=exp) | 匹配exp后面的位置，反向(look behind)肯定预查 |
|  | (?!exp) | 匹配后面跟的不是exp的位置，正向否定预查(negative assert) |
|  | (? | 匹配前面不是exp的位置，反向否定预查 |
| 注释 | (?#comment) | 注释 |

零宽度断言（前后预查）  <br />  先行断言和后发断言都属于非捕获簇（不捕获文本 ，也不针对组合计进行计数）。 先行断言用于判断所匹配的格式是否在另一个确定的格式之前，匹配结果不包含该确定格式（仅作为约束）。  <br />  正向肯定预查："Windows(?=7|10)"能匹配"Windows10"中的"Windows"，但不能匹配"Windows8"中的"Windows"  <br />  反向肯定预查："(?<=7|10)Windows"能匹配"10Windows"中的"Windows"，但不能匹配"8Windows"  <br />  简写字符集


| **\\b** | 匹配一个单词边界，也就是指单词和空格间的位置 |
| --- | --- |
| **\\B** | 匹配非单词边界  <br />  'er\\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。 |
| **\\d** | 匹配一个数字字符 [0-9] |
| **\\D** | 匹配一个非数字字符 [^0-9]。 |
| **\\s** | 匹配任何空白字符 [ \\f\\n\\r\\t\\v]。 |
| **\\S** | 匹配任何非空白字符 [^ \\f\\n\\r\\t\\v] |
| **\\w** | 匹配字母、数字、下划线 [A-Za-z0-9_] |
| **\\W** | 匹配非字母、数字、下划线 [^A-Za-z0-9_] |

| \\f | 匹配一个换页符 |
| --- | --- |
| \\n | 匹配一个换行符 |
| \\r | 匹配一个回车符 |
| \\t | 匹配一个制表符 |
| \\v | 匹配一个垂直制表符 |
| \\p | 匹配 CR/LF（等同于 \\r\\n），用来匹配 DOS 行终止符 |

  <br />  

# 标志(模式修正符)
修改表达式的搜索结果

| 标志 | 描述 |
| --- | --- |
| i | 忽略大小写。 |
| g | 全局搜索。 |
| m | 多行修饰符：锚点元字符 ^ $ 工作范围在每行的起始。 |

| 表达式属性 | 说明 |
| --- | --- |
| Ignorecase | 默认情况下，表达式中的字母是要区分大小写的。 |
| Singleline | 默认情况下，小数点 "." 匹配除了换行符（\\n）以外的字符。配置为 Singleline 可使小数点可匹配包括换行符在内的所有字符。 |
| Multiline | 默认情况下，表达式 "^" 和 "$" 只匹配字符串的开始 ① 和结尾 ④ 位置。如：  <br />  ①xxxxxxxxx②\\n  <br />  ③xxxxxxxxx④  <br />  配置为 Multiline 可以使 "^" 匹配 ① 外，还可以匹配换行符之后，下一行开始前 ③ 的位置，使 "$"匹配 ④ 外，还可以匹配换行符之前，一行结束 ② 的位置。 |
| Global | 主要在将表达式用来替换时起作用，配置为 Global 表示替换所有的匹配。 |

"/The/gi" => **The** fat cat sat on **the** mat.  <br />  贪婪匹配与惰性匹配 (Greedy vs lazy matching)  <br />  正则表达式默认采用贪婪匹配模式，会匹配尽可能长的子串。可以使用 ? 将贪婪匹配模式转化为惰性匹配模式。  <br />  "/(.*at)/" => The fat cat sat on the mat   <br />  "/(.*?at)/" => The fat cat sat on the mat


# Replace Operation
$1 ~ $999  <br />  Stands for what a certain group captured. If the number is larger than the max group number, DEELX will use less digitals, till the number is smaller than or equal to the max group number.  <br />  For example:  <br />  If the max group number is 20, "$999" means "$9" and common string "99", while "$15" means the 15th group. If you need "$1" and common string "5", you can use $0015 , DEELX at most recognize 3 digitals as number.

---

${_name_}  <br />  Stands for what a named group captured.

---

$$  <br />  Stands for a single dollars ($).

---

$&  <br />  Stands for what the overall expression captured.

---

$`  <br />  The substring before the beginning of what the overall expression captured in the original text.

---

$'  <br />  The substring behind the end of what the overall expression captured in the original text.

---

$+  <br />  Stands for what a group captured, which group has the max group number among those groups that have captured.  <br />  For example: when "aaa(b+)|ccc(b+)" matches "aaabbb" , $+ stands for $1, even though $2 has the max group number.

---

$_  <br />  Stands for the whole original text.

**POSIX**（Portable Operating System Interface，**可移植操作系统接口**）是[IEEE](https://zh.wikipedia.org/wiki/IEEE)为要在各种[UNIX](https://zh.wikipedia.org/wiki/UNIX)[操作系统](https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)上运行软件，而定义[API](https://zh.wikipedia.org/wiki/API)的一系列互相关联的标准的总称

# POSIX字符组
| POSIX字符组 | 说明 | ASCII环境 | Unicode环境 |
| --- | --- | --- | --- |
| [:alnum:] | 字母字符和数字字符 | [a-zA-Z0-9] | [\\p{L&}\\p{Nd}] |
| [:alpha:] | 字母 | [a-zA-Z] | \\p{L&} |
| [:ascii:] | ASCII字符 | [\\x00-\\x7F] | \\p{InBasicLatin} |
| [:blank:] | 空格字符和制表符 | [ \\t] | [\\p{Zs}\\t] |
| [:cntrl:] | 控制字符 | [\\x00-\\x1F\\x7F] | \\p{Cc} |
| [:digit:] | 数字字符 | [0-9] | \\p{Nd} |
| [:graph:] | 空白字符之外的字符 | [\\x21-\\x7E] | [^\\p{Z}\\p{C}] |
| [:lower:] | 小写字母字符 | [a-z] | \\p{Ll} |
| [:print:] | [:graph:] + [:blank:] | [\\x20-\\x7E] | \\P{C} |
| [:punct:] | 标点符号 | [][!"#$%&'()*+,./:;<=>?@\\^_`{&#124;}~-] | [\\p{P}\\p{S}] |
| [:space:] | 空白字符 | [ \\t\\r\\n\\v\\f] | [\\p{Z}\\t\\r\\n\\v\\f] |
| [:upper:] | 大写字母字符 | [A-Z] | \\p{Lu} |
| [:word:] | 字母字符 | [A-Za-z0-9_] | [\\p{L}\\p{N}\\p{Pc}] |
| [:xdigit:] | 十六进制字符 | [A-Fa-f0-9] | [A-Fa-f0-9] |

