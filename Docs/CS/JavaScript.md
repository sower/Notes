
# —— [Javascript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference) ——
1995年，Brendan Eich设计出了一门跨平台、面向对象的脚本语言，它能使网页可交互。  <br />  ECMAScript标准：ECMA（European Computer Manufacturers Association）组织定制了JavaScript语言的标准  <br />  脚本语言（script language）：不具备开发操作系统的能力，而是用来编写控制其他大型应用程序（比如浏览器）的“脚本”

一切皆对象，对象为引用值

**注释**
```javascript
// 单行注释（single-line comment）

/* 多行注释
（multiple-line comment）*/
```

# Strict mode
```javascript
'use strict';
```

- 变量必须声明后再使用
- 禁止使用 with 语句
- 只读属性不可写
- 只设置了取值器的属性不可写
- eval、arguments 不可用作标识名
- 禁止八进制的前缀0表示法
- 禁止删除变量，只能删除属性delete global[prop]
- eval不会在它的外层作用域引入变量
- arguments不会自动反映函数参数的变化
- 函数不能有重名的参数
- 函数内部不得使用fn.caller、fn.arguments
- 禁止使用 arguments.callee、arguments.caller
- 禁止this指向全局对象
- 增加了保留字

# [关键字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E5%85%B3%E9%94%AE%E5%AD%97)

- [break](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/break)
- [case](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch)
- [catch](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)
- [class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class)
- [const](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)
- [continue](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/continue)
- [debugger](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/debugger)
- [default](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/default)
- [delete](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)
- [do](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while)
- [else](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [export](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)
- [extends](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class)
- [finally](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)
- [for](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for)
- [function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [if](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
- [in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in)
- [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
- [new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [return](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/return)
- [super](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)
- [switch](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch)
- [this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
- [throw](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw)
- [try](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)
- [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)
- [var](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)
- [void](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void)
- [while](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/while)
- [with](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with)
- [yield](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield)

严格模式和非严格模式中均不能使用

- enum

严格模式中被当成保留关键字

- implements
- interface
- let
- package
- private
- protected
- public
- static

模块代码中被当成保留关键字：

- await

之前版本中的ECMAScript（1到3）中的保留关键字：

- abstract
- boolean
- byte
- char
- double
- final
- float
- goto
- int
- long
- native
- short
- synchronized
- transient
- volatile

直接量null、true和false同样不能被当成标识使用

# 变量
标识符（Identifier）：大小写英文、数字、$、_ 的组合，且不能用数字开头。  <br />  声明

- [var](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)：声明一个变量，可选初始化一个值。
- [let](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)：声明一个块作用域的局部变量，可选初始化一个值。
- [const](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)：声明一个块作用域的只读常量。



**Hoisting (提升）**： JavaScript 将所有声明提升到当前作用域顶部，提升后的变量将返回 undefined 值。  <br />  用 let 或 const 声明的不会被赋予初始值  <br />  只有函数声明会被提升到顶部，而函数表达式不会被提升
```javascript
/* 函数声明 */
foo(); // "bar"
function foo() {
  console.log("bar");
}

/* 函数表达式 */
baz(); // 类型错误：baz 不是一个函数
var baz = function() {
  console.log("bar2");
};
```

# 数据类型
原始数据类型（[Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)）一种既非[对象](https://developer.mozilla.org/en-US/docs/Glossary/object)也无[方法](https://developer.mozilla.org/en-US/docs/Glossary/method)的数据。共有7种：[string](https://developer.mozilla.org/en-US/docs/Glossary/string)，[number](https://developer.mozilla.org/en-US/docs/Glossary/number)，[bigint](https://developer.mozilla.org/en-US/docs/Glossary/bigint)，[boolean](https://developer.mozilla.org/en-US/docs/Glossary/boolean)，[null](https://developer.mozilla.org/en-US/docs/Glossary/null)（空值），[undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined)（未定义），[symbol](https://developer.mozilla.org/en-US/docs/Glossary/symbol)

除了 null 和 undefined之外，所有基本类型都有其对应的包装对象

- String
- Number
- BigInt
- Boolean
- Symbol

对象类型（Object types）

## [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
整数

- 二进制整数以0b（或0B）开头，只能包含数字0和1。
- 八进制的整数以 0O或0o 开头，只能包括数字0-7。
- 十六进制整数以 0x或0X 开头，可以包含数字（0-9）和字母 a~f 或 A~F。

浮点数：`[(+|-)][digits][.digits][(E|e)[(+|-)]digits]`

| 属性 | 描述 |
| --- | --- |
| [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_number.asp) | 返回对创建此对象的 Number 函数的引用。 |
| [MAX_VALUE](https://www.w3school.com.cn/jsref/jsref_max_value.asp) | 可表示的最大的数。 |
| [MIN_VALUE](https://www.w3school.com.cn/jsref/jsref_min_value.asp) | 可表示的最小的数。 |
| [NaN](https://www.w3school.com.cn/jsref/jsref_nan_number.asp) | 非数字值。 |
| [NEGATIVE_INFINITY](https://www.w3school.com.cn/jsref/jsref_negative_infinity.asp) | 负无穷大，溢出时返回该值。 |
| [POSITIVE_INFINITY](https://www.w3school.com.cn/jsref/jsref_positive_infinity.asp) | 正无穷大，溢出时返回该值。 |
| EPSILON | 极小的常量，表示 1 与大于 1 的最小浮点数之间的差 |
| MIN_SAFE_INTEGER | 最小的安全整数 (-(2^53 - 1)) |
| MAX_SAFE_INTEGER | 最大的安全整数（2^53 - 1） |

```javascript
NaN === NaN; // false
isNaN(NaN); // true
```
| 方法 | 描述 |
| --- | --- |
| [Number.parseFloat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) | 把字符串参数解析成浮点数 |
| [Number.parseInt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) | 把字符串解析成特定基数对应的整型数字 |
| [Number.isFinite()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) | 判断传递的值是否为有限数字。 |
| [Number.isInteger()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) | 判断传递的值是否为整数。 |
| [Number.isNaN()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) | 判断传递的值是否为 [NaN.](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) |
| [Number.isSafeInteger()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) | 判断传递的值是否为安全整数。 |
| [toString](https://www.w3school.com.cn/jsref/jsref_tostring_number.asp) | 把数字转换为字符串，使用指定的基数。 |
| [toLocaleString](https://www.w3school.com.cn/jsref/jsref_tolocalestring_number.asp) | 把数字转换为字符串，使用本地数字格式顺序。 |
| [toFixed](https://www.w3school.com.cn/jsref/jsref_tofixed.asp) | 把数字转换为字符串，结果的小数点后有指定位数的数字。 |
| [toExponential](https://www.w3school.com.cn/jsref/jsref_toexponential.asp) | 把对象的值转换为指数计数法。 |
| [toPrecision](https://www.w3school.com.cn/jsref/jsref_toprecision.asp) | 把数字格式化为指定的长度。 |
| [valueOf](https://www.w3school.com.cn/jsref/jsref_valueof_number.asp) | 返回一个 Number 对象的基本数字值。 |

自定义方法
```javascript
Number.prototype.add = function (x) {
  return this + x;
};

8['add'](2) // 10
(8).add(2)
```

### BigInt
表示整数，没有位数的限制，任何位数的整数都可以精确表示  <br />  可以使用各种进制表示，都要加上**后缀n**  <br />  不能使用正号（+），为了不破坏 asm.js 就规定+1n会报错

- BigInt.prototype.toString()
- BigInt.prototype.valueOf()
- BigInt.prototype.toLocaleString()
- BigInt.asUintN(width, BigInt)： 给定的 BigInt 转为 0 到 2^width - 1 之间对应的值。
- BigInt.asIntN(width, BigInt)：给定的 BigInt 转为 -2^width - 1 到 2^width - 1 - 1 之间对应的值。
- BigInt.parseInt(string[, radix])：将一个字符串转换成指定进制的 BigInt。

## String
字符串：以单引号'或双引号"括起来的任意文本，不可变的（immutable）  <br />  Unicode 表示法
```javascript
"\u{20BB7}"
// "𠮷"
"\u{41}\u{42}\u{43}"
// "ABC"
let hello = 123;
hell\u{6F} // 123
'\u{1F680}' === '\uD83D\uDE80'
// true
```
多行模板字符串
```javascript
` Hi ${expression}.
 What's up? `
```
标签模板（tagged template）  函数调用的一种特殊形式
```javascript
alert`hello`
// 等同于
alert(['hello'])

String.raw`Hi\\n` === "Hi\\\\n" // true
```
| 属性 | 描述 |
| --- | --- |
| constructor | 对创建该对象的函数的引用 |
| [length](https://www.w3school.com.cn/jsref/jsref_length_string.asp) | 字符串的长度 |
| prototype | 允许您向对象添加属性和方法 |

| 方法 | 描述 |
| --- | --- |
| [charAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt), [charCodeAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt), [codePointAt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) | 返回字符串指定位置的字符或者字符编码。 |
| [indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), [lastIndexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) | 分别返回字符串中指定子串的位置或最后位置。 |
| [startsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [endsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes) | 返回字符串是否以指定字符串开始、结束或包含指定字符串。 |
| [concat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat) | 连接两个字符串并返回新的字符串。 |
| [fromCharCode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode), [fromCodePoint](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint) | 从指定的Unicode值序列构造一个字符串。String类方法 |
| [split](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) | 通过将字符串分离成一个个子串来把一个String对象分裂到一个字符串数组中。 |
| [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice) | 从一个字符串提取片段并作为新字符串返回。 |
| [substring](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring), [substr](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr) | 分别通过指定起始和结束位置，起始位置和长度来返回字符串的指定子集。 |
| [match](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match), [replace](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [search](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) | 通过正则表达式来工作. |
| [toLowerCase](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase), [toUpperCase](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) | 分别返回字符串的小写表示和大写表示。 |
| [normalize](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) | 按照指定的一种 Unicode 正规形式将当前字符串正规化。 |
| [repeat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) | 将字符串内容重复指定次数后返回。 |
| [trim](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trim) | 去掉字符串开头和结尾的空白字符。 |
| [padStart()，padEnd()](https://wangdoc.com/es6/string-methods.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Apadstart%EF%BC%8Cpadend) | 字符串补全长度的功能 |
| [trimStart()，trimEnd()](https://wangdoc.com/es6/string-methods.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Atrimstart%EF%BC%8Ctrimend) |  |
| [matchAll()](https://wangdoc.com/es6/string-methods.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Amatchall) |  |
| [replaceAll()](https://wangdoc.com/es6/string-methods.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Areplaceall) |  |

| 方法 | 描述 |
| --- | --- |
| [charCodeAt()](https://www.runoob.com/jsref/jsref-charcodeat.html) | 返回在指定的位置的字符的 Unicode 编码。 |
| [fromCharCode()](https://www.runoob.com/jsref/jsref-fromcharcode.html) | 将 Unicode 编码转为字符。 |
| [substr()](https://www.runoob.com/jsref/jsref-substr.html) | 从起始索引号提取字符串中指定数目的字符。 |
| [substring()](https://www.runoob.com/jsref/jsref-substring.html) | 提取字符串中两个指定的索引号之间的字符。 |

**HTML 包装方法**

| 方法 | 描述 |
| --- | --- |
| [anchor()](https://www.runoob.com/jsref/jsref-anchor.html) | 创建 HTML 锚。 |
| [big()](https://www.runoob.com/jsref/jsref-big.html) | 用大号字体显示字符串。 |
| [blink()](https://www.runoob.com/jsref/jsref-blink.html) | 显示闪动字符串。 |
| [bold()](https://www.runoob.com/jsref/jsref-bold.html) | 使用粗体显示字符串。 |
| [fixed()](https://www.runoob.com/jsref/jsref-fixed.html) | 以打字机文本显示字符串。 |
| [fontcolor()](https://www.runoob.com/jsref/jsref-fontcolor.html) | 使用指定的颜色来显示字符串。 |
| [fontsize()](https://www.runoob.com/jsref/jsref-fontsize.html) | 使用指定的尺寸来显示字符串。 |
| [italics()](https://www.runoob.com/jsref/jsref-italics.html) | 使用斜体显示字符串。 |
| [link()](https://www.runoob.com/jsref/jsref-link.html) | 将字符串显示为链接。 |
| [small()](https://www.runoob.com/jsref/jsref-small.html) | 使用小字号来显示字符串。 |
| [strike()](https://www.runoob.com/jsref/jsref-strike.html) | 用于显示加删除线的字符串。 |
| [sub()](https://www.runoob.com/jsref/jsref-sub.html) | 把字符串显示为下标。 |
| [sup()](https://www.runoob.com/jsref/jsref-sup.html) | 把字符串显示为上标。 |


## Boolean
true，false

| 属性 | 描述 |
| --- | --- |
| [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_boolean.asp) | 返回对创建此对象的 Boolean 函数的引用 |
| [prototype](https://www.w3school.com.cn/jsref/jsref_prototype_boolean.asp) | 使您有能力向对象添加属性和方法。 |

| 方法 | 描述 |
| --- | --- |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp) | 返回该对象的源代码。 |
| [toString()](https://www.w3school.com.cn/jsref/jsref_toString_boolean.asp) | 把逻辑值转换为字符串，并返回结果。 |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueOf_boolean.asp) | 返回 Boolean 对象的原始值。 |

```javascript
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false
Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true
```

## Array
```javascript
var arr = [1, 2, 3.14, 'Hello', null, true];  // 推荐
var arr = new Array(1, 2, 3.14, 'Hello', null, true);

var myList = ['home', , 'school', , ]; 
//等同
var myList = ['home', undefined, 'school']; 


var arr = new Array(arrayLength);
var arr = Array(arrayLength);
// 等同
var arr = [];
arr.length = arrayLength;


console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
```
| 属性 | 描述 |
| --- | --- |
| [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_array.asp) | 返回对创建此对象的数组函数的引用。 |
| [length](https://www.w3school.com.cn/jsref/jsref_length_array.asp) | 设置或返回数组中元素的数目。 |
| [prototype](https://www.w3school.com.cn/jsref/jsref_prototype_array.asp) | 使您有能力向对象添加属性和方法。 |

| 方法 | 描述 |
| --- | --- |
| [concat()](https://www.runoob.com/jsref/jsref-concat-array.html) | 连接两个或更多的数组，并返回结果。 |
| [copyWithin()](https://www.runoob.com/jsref/jsref-copywithin.html) | 从数组的指定位置拷贝元素到数组的另一个指定位置中。 |
| [entries()](https://www.runoob.com/jsref/jsref-entries.html) | 返回数组的可迭代对象。 |
| [every()](https://www.runoob.com/jsref/jsref-every.html) | 检测数值元素的每个元素是否都符合条件。 |
| [fill()](https://www.runoob.com/jsref/jsref-fill.html) | 使用一个固定值来填充数组。 |
| [filter()](https://www.runoob.com/jsref/jsref-filter.html) | 检测数值元素，并返回符合条件所有元素的数组。 |
| [find()](https://www.runoob.com/jsref/jsref-find.html) | 返回符合传入测试（函数）条件的数组元素。 |
| [findIndex()](https://www.runoob.com/jsref/jsref-findindex.html) | 返回符合传入测试（函数）条件的数组元素索引。 |
| flat() | 将嵌套的数组“拉平”，变成一维的数组 |
| flatMap() | 对原数组的每个成员执行一个函数 |
| [forEach()](https://www.runoob.com/jsref/jsref-foreach.html) | 数组每个元素都执行一次回调函数。 |
| [from()](https://www.runoob.com/jsref/jsref-from.html) | 通过给定的对象中创建一个数组。 |
| [includes()](https://www.runoob.com/jsref/jsref-includes.html) | 判断一个数组是否包含一个指定的值。 |
| [indexOf()](https://www.runoob.com/jsref/jsref-indexof-array.html) | 搜索数组中的元素，并返回它所在的位置。 |
| [isArray()](https://www.runoob.com/jsref/jsref-isarray.html) | 判断对象是否为数组。 |
| [join()](https://www.runoob.com/jsref/jsref-join.html) | 把数组的所有元素放入一个字符串。 |
| [keys()](https://www.runoob.com/jsref/jsref-keys.html) | 返回数组的可迭代对象，包含原始数组的键(key)。 |
| [lastIndexOf()](https://www.runoob.com/jsref/jsref-lastindexof-array.html) | 搜索数组中的元素，并返回它最后出现的位置。 |
| [map()](https://www.runoob.com/jsref/jsref-map.html) | 通过指定函数处理数组的每个元素，并返回处理后的数组。 |
| of() | 将一组值，转换为数组 |
| [pop()](https://www.runoob.com/jsref/jsref-pop.html) | 删除数组的最后一个元素并返回删除的元素。 |
| [push()](https://www.runoob.com/jsref/jsref-push.html) | 向数组的末尾添加一个或更多元素，并返回新的长度。 |
| [reduce()](https://www.runoob.com/jsref/jsref-reduce.html) | 将数组元素计算为一个值（从左到右）。 |
| [reduceRight()](https://www.runoob.com/jsref/jsref-reduceright.html) | 将数组元素计算为一个值（从右到左）。 |
| [reverse()](https://www.runoob.com/jsref/jsref-reverse.html) | 反转数组的元素顺序。 |
| [shift()](https://www.runoob.com/jsref/jsref-shift.html) | 删除并返回数组的第一个元素。 |
| [slice()](https://www.runoob.com/jsref/jsref-slice-array.html) | 选取数组的一部分，并返回一个新数组。 |
| [some()](https://www.runoob.com/jsref/jsref-some.html) | 检测数组元素中是否有元素符合指定条件。 |
| [sort()](https://www.runoob.com/jsref/jsref-sort.html) | 对数组的元素进行排序。 |
| [splice()](https://www.runoob.com/jsref/jsref-splice.html) | 从数组中添加或删除元素。 |
| [toString()](https://www.runoob.com/jsref/jsref-tostring-array.html) | 把数组转换为字符串，并返回结果。 |
| [unshift()](https://www.runoob.com/jsref/jsref-unshift.html) | 向数组的开头添加一个或更多元素，并返回新的长度。 |
| [valueOf()](https://www.runoob.com/jsref/jsref-valueof-array.html) | 返回数组对象的原始值。 |

排序示例
```javascript
let origin = [...];
let list = origin.slice(0);
list.sort((x,y)=>{return x[0]!=y[0]?x[0]-y[0]:x[1]>y[1]?1:-1;});
console.log( origin.toString()==list.toString() );
```
array.forEach(function(currentValue [, index, arr]) [, thisValue])

## Date
以国际标准时间（UTC）1970年1月1日00:00:00作为时间的零点，可以表示的时间范围是前后各1亿天（单位为毫秒）  <br />  Date对象月份值从0开始

| 属性 | 描述 |
| --- | --- |
| [constructor](https://www.w3school.com.cn/jsref/jsref_constructor_date.asp) | 返回对创建此对象的 Date 函数的引用。 |
| [prototype](https://www.w3school.com.cn/jsref/jsref_prototype_date.asp) | 使您有能力向对象添加属性和方法。 |

| 方法 | 描述 |
| --- | --- |
| [Date()](https://www.w3school.com.cn/jsref/jsref_Date.asp) | 返回当日的日期和时间。 |
| [getDate()](https://www.w3school.com.cn/jsref/jsref_getDate.asp) | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。 |
| [getDay()](https://www.w3school.com.cn/jsref/jsref_getDay.asp) | 从 Date 对象返回一周中的某一天 (0 ~ 6)。 |
| [getMonth()](https://www.w3school.com.cn/jsref/jsref_getMonth.asp) | 从 Date 对象返回月份 (0 ~ 11)。 |
| [getFullYear()](https://www.w3school.com.cn/jsref/jsref_getFullYear.asp) | 从 Date 对象以四位数字返回年份。 |
| [getHours()](https://www.w3school.com.cn/jsref/jsref_getHours.asp) | 返回 Date 对象的小时 (0 ~ 23)。 |
| [getMinutes()](https://www.w3school.com.cn/jsref/jsref_getMinutes.asp) | 返回 Date 对象的分钟 (0 ~ 59)。 |
| [getSeconds()](https://www.w3school.com.cn/jsref/jsref_getSeconds.asp) | 返回 Date 对象的秒数 (0 ~ 59)。 |
| [getMilliseconds()](https://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp) | 返回 Date 对象的毫秒(0 ~ 999)。 |
| [getTime()](https://www.w3school.com.cn/jsref/jsref_getTime.asp) | 返回 1970 年 1 月 1 日至今的毫秒数。 |
| [getTimezoneOffset()](https://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp) | 返回本地时间与格林威治标准时间 (GMT) 的分钟差。 |
| [getUTCDate()](https://www.w3school.com.cn/jsref/jsref_getUTCDate.asp) | 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。 |
| [getUTCDay()](https://www.w3school.com.cn/jsref/jsref_getUTCDay.asp) | 根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。 |
| [getUTCMonth()](https://www.w3school.com.cn/jsref/jsref_getUTCMonth.asp) | 根据世界时从 Date 对象返回月份 (0 ~ 11)。 |
| [getUTCFullYear()](https://www.w3school.com.cn/jsref/jsref_getUTCFullYear.asp) | 根据世界时从 Date 对象返回四位数的年份。 |
| [getUTCHours()](https://www.w3school.com.cn/jsref/jsref_getUTCHours.asp) | 根据世界时返回 Date 对象的小时 (0 ~ 23)。 |
| [getUTCMinutes()](https://www.w3school.com.cn/jsref/jsref_getUTCMinutes.asp) | 根据世界时返回 Date 对象的分钟 (0 ~ 59)。 |
| [getUTCSeconds()](https://www.w3school.com.cn/jsref/jsref_getUTCSeconds.asp) | 根据世界时返回 Date 对象的秒钟 (0 ~ 59)。 |
| [getUTCMilliseconds()](https://www.w3school.com.cn/jsref/jsref_getUTCMilliseconds.asp) | 根据世界时返回 Date 对象的毫秒(0 ~ 999)。 |
| [parse()](https://www.w3school.com.cn/jsref/jsref_parse.asp) | 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。 |
| [setDate()](https://www.w3school.com.cn/jsref/jsref_setDate.asp) | 设置 Date 对象中月的某一天 (1 ~ 31)。 |
| [setMonth()](https://www.w3school.com.cn/jsref/jsref_setMonth.asp) | 设置 Date 对象中月份 (0 ~ 11)。 |
| [setFullYear()](https://www.w3school.com.cn/jsref/jsref_setFullYear.asp) | 设置 Date 对象中的年份（四位数字）。 |
| [setHours()](https://www.w3school.com.cn/jsref/jsref_setHours.asp) | 设置 Date 对象中的小时 (0 ~ 23)。 |
| [setMinutes()](https://www.w3school.com.cn/jsref/jsref_setMinutes.asp) | 设置 Date 对象中的分钟 (0 ~ 59)。 |
| [setSeconds()](https://www.w3school.com.cn/jsref/jsref_setSeconds.asp) | 设置 Date 对象中的秒钟 (0 ~ 59)。 |
| [setMilliseconds()](https://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp) | 设置 Date 对象中的毫秒 (0 ~ 999)。 |
| [setTime()](https://www.w3school.com.cn/jsref/jsref_setTime.asp) | 以毫秒设置 Date 对象。 |
| [setUTCDate()](https://www.w3school.com.cn/jsref/jsref_setUTCDate.asp) | 根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。 |
| [setUTCMonth()](https://www.w3school.com.cn/jsref/jsref_setUTCMonth.asp) | 根据世界时设置 Date 对象中的月份 (0 ~ 11)。 |
| [setUTCFullYear()](https://www.w3school.com.cn/jsref/jsref_setUTCFullYear.asp) | 根据世界时设置 Date 对象中的年份（四位数字）。 |
| [setUTCHours()](https://www.w3school.com.cn/jsref/jsref_setutchours.asp) | 根据世界时设置 Date 对象中的小时 (0 ~ 23)。 |
| [setUTCMinutes()](https://www.w3school.com.cn/jsref/jsref_setUTCMinutes.asp) | 根据世界时设置 Date 对象中的分钟 (0 ~ 59)。 |
| [setUTCSeconds()](https://www.w3school.com.cn/jsref/jsref_setUTCSeconds.asp) | 根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。 |
| [setUTCMilliseconds()](https://www.w3school.com.cn/jsref/jsref_setUTCMilliseconds.asp) | 根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。 |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp) | 返回该对象的源代码。 |
| [toString()](https://www.w3school.com.cn/jsref/jsref_toString_date.asp) | 把 Date 对象转换为字符串。 |
| [toTimeString()](https://www.w3school.com.cn/jsref/jsref_toTimeString.asp) | 把 Date 对象的时间部分转换为字符串。 |
| [toDateString()](https://www.w3school.com.cn/jsref/jsref_toDateString.asp) | 把 Date 对象的日期部分转换为字符串。 |
| [toUTCString()](https://www.w3school.com.cn/jsref/jsref_toUTCString.asp) | 根据世界时，把 Date 对象转换为字符串。 |
| [toLocaleString()](https://www.w3school.com.cn/jsref/jsref_toLocaleString.asp) | 根据本地时间格式，把 Date 对象转换为字符串。 |
| [toLocaleTimeString()](https://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp) | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。 |
| [toLocaleDateString()](https://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp) | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。 |
| [UTC()](https://www.w3school.com.cn/jsref/jsref_utc.asp) | 根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。 |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueOf_date.asp) | 返回 Date 对象的原始值。 |


## RegExp

- 直接量语法：/pattern/flags
- 创建 RegExp 对象的语法：new RegExp(pattern, flags);

pattern ：一个字符串，指定了正则表达式的模式或其他正则表达式。  <br />  flags ：一个可选的字符串，包含修饰符

| 修饰符 | 描述 |
| --- | --- |
| [i](https://www.w3school.com.cn/jsref/jsref_regexp_i.asp) | 不区分大小写搜索 |
| [g](https://www.w3school.com.cn/jsref/jsref_regexp_g.asp) | 全局搜索 |
| m | 多行搜索 |
| u | Unicode 模式，用来正确处理大于\\uFFFF的 Unicode 字符 |
| y | 粘连”（sticky）修饰符 |
| s | 允许 . 匹配换行符 |

| 属性 | 描述 |
| --- | --- |
| [global](https://www.w3school.com.cn/jsref/jsref_regexp_global.asp) | RegExp 对象是否具有标志 g。 |
| [ignoreCase](https://www.w3school.com.cn/jsref/jsref_regexp_ignorecase.asp) | RegExp 对象是否具有标志 i。 |
| [lastIndex](https://www.w3school.com.cn/jsref/jsref_lastindex_regexp.asp) | 一个整数，标示开始下一次匹配的字符位置。 |
| [multiline](https://www.w3school.com.cn/jsref/jsref_multiline_regexp.asp) | RegExp 对象是否具有标志 m。 |
| [source](https://www.w3school.com.cn/jsref/jsref_source_regexp.asp) | 正则表达式的源文本。 |
| flags | 包含了已经设置的所有修饰符，按字母排序 |
| unicode | 是否设置了u修饰符 |
| sticky | 是否设置了y修饰符 |

| 方法 | 描述 |
| --- | --- |
| [exec](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) | 查找匹配的RegExp方法，返回一个数组（未匹配到则返回 null）。 |
| [test](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) | 测试是否匹配的RegExp方法，返回 true 或 false。 |
| [match](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) | 一个在字符串中执行查找匹配的String方法，它返回一个数组或 null |
| [matchAll](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) | 查找所有匹配的String方法，返回一个迭代器（iterator）。 |
| [search](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) | 一个在字符串中测试匹配的String方法，返回匹配到的位置索引，或-1。 |
| [replace](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) | 使用替换字符串替换掉匹配到的子字符串。 |
| [split](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) | 分隔一个字符串 |

具名组匹配（Named Capture Groups）
```javascript
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31

let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
'2015-01-02'.replace(re, '$<day>/$<month>/$<year>')
// '02/01/2015'

// 在正则表达式内部引用某个“具名组匹配”  使用\k<组名>
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>!\1$/;
RE_TWICE.test('abc!abc!abc') // true
RE_TWICE.test('abc!abc!ab') // false
```
\p{...} \P{...}	匹配符合 Unicode 某种属性的所有字符
```javascript
// 匹配所有空格
\p{White_Space}

// 匹配各种文字的所有字母，等同于 Unicode 版的 \w
[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

// 匹配各种文字的所有非字母的字符，等同于 Unicode 版的 \W
[^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

// 匹配 Emoji
/\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu

// 匹配所有的箭头字符
const regexArrows = /^\p{Block=Arrows}+$/u;
regexArrows.test('←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩') // true
```

## Object
```javascript
var obj = {}  // 推荐
var obj = new Object()

function isObject(value) {
  return value === Object(value);    // Object()函数
}

isObject([]) // true
isObject(true) // false
```
**属性描述对象（attributes object）**
```javascript
{
  value: undefined,	属性值
  writable: true,		否可写
  enumerable: true,	是否可遍历
  configurable: true,	可配置性
  get: undefined,		属性的取值函数（getter）
  set: undefined		属性的存值函数（setter）
}
```
**静态方法**

- **静态方法**
- 遍历对象的属性
   - Object.keys()	返回可枚举的自身的（而不是继承的）所有属性名
   - Object.getOwnPropertyNames()	返回所有自身的（而不是继承的）属性名
   - Object.values()：返回对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
   - Object.entries()：返回对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
   - Object.fromEntries()：Object.entries()的逆操作，用于将一个键值对数组转为对象

- 对象属性模型的方法
   - Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
   - Object.getOwnPropertyDescriptors()：返回指定对象所有自身属性（非继承属性）的描述对象
   - Object.defineProperty(object, propertyName, attributesObject)：通过描述对象，定义某个属性。
   - Object.defineProperties()：通过描述对象，定义多个属性。

- 控制对象状态的方法
   - Object.preventExtensions()：防止对象扩展，使对象无法再添加新的属性
   - Object.isExtensible()：判断对象是否可扩展。
   - Object.seal()：禁止对象配置。使对象既无法添加新属性，也无法删除旧属性。实质是把属性的configurable设为false
   - Object.isSealed()：判断一个对象是否可配置。
   - Object.freeze()：冻结一个对象。使对象无法添加或删除属性、也无法改变属性的值，对象实际上变成了常量。
   - Object.isFrozen()：判断一个对象是否被冻结。

方法局限性

   - 可以通过改变原型对象，来为对象增加属性。
   - 只能冻结属性指向的对象，而不能冻结对象本身的内容

- 原型链相关方法
   - Object.create()：指定原型对象和属性，返回一个新的对象。
   - Object.getPrototypeOf()：获取对象的Prototype对象。
   - Object.setPrototypeOf(a, b)	将对象a的原型，设置为对象b

- Object.is()：比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
- Object.assign()：对象合并，将源对象（source）的所有可枚举属性，复制（浅拷贝，同名属性的替换）到目标对象（target）



**实例方法	**定义在Object原型对象Object.prototype上的方法

- Object.prototype.valueOf()：返回当前对象对应的值。
- Object.prototype.toString()：返回当前对象对应的字符串形式。
- Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
- Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
- Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
- Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。
- Object.prototype.**proto**：用来读取或设置当前对象的原型对象（prototype），浏览器特有
```javascript
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true


var obj = new Object();
obj.valueOf = function () {
  return 2;
};

1 + obj // 3


obj.toString = function () {
  return 'hello';
};

obj + ' ' + 'world' // "hello world"
```
**存取器（accessor）**  <br />  取值函数get不能接受参数，存值函数set只能接受一个参数
```javascript
// 写法一：属性p的configurable和enumerable都为false
var obj = Object.defineProperty({}, 'p', {
  get: function () {
    return 'getter';
  },
  set: function (value) {
    console.log('setter: ' + value);
  }
});

// 写法二：属性p的configurable和enumerable都为true，更常用
var obj = {
  get p() {
    return 'getter';
  },
  set p(value) {
    console.log('setter: ' + value);
  }
};


obj.p // "getter"
obj.p = 123 // "setter: 123"
```
原型链”（prototype chain）：对象到原型，再到原型的原型……  <br />  Object.prototype  -->  null

prototype  <br />  constructor：默认指向prototype对象所在的构造函数。
```javascript
function P() {}
var p = new P();
p.constructor === P // true
p.constructor === P.prototype.constructor // true
p.hasOwnProperty('constructor') // false
```

# OOP
构造函数

- 函数内使用了`this`关键字，代表了所要生成的对象实例。
- 生成对象须使用`new`命令。
```javascript
function Student(name, grade) {
    this.name = name;
    this.grade = grade || 0; // 默认值为0
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    };
}

var s = new Student('jack');
//为对象构造器添加新属性
Student.prototype.nationality = "English";
```
如果构造函数内部有return语句，且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，返回this对象。

**new 命令的原理**

1. 创建一个空对象，作为将要返回的对象实例。
2. 将这个空对象的原型，指向构造函数的prototype属性。
3. 将这个空对象赋值给函数内部的this关键字。
4. 开始执行构造函数内部的代码。

new.target	如果当前函数是new命令调用，new.target指向当前函数，否则为undefined
```javascript
function f() {
  if (!new.target) {
    throw new Error('请使用 new 命令调用！');
  }
  // ...
}

f() // Uncaught Error: 请使用 new 命令调用！
```
创建对象
```javascript
birth = 1990;

// 字面量法——推荐
var person = {
    firstName:"Bill",
    ['last' + 'Name']:"Gates",
    birth,
    tags: ['js', 'web', 'mobile'],
    'has-Car': true   // 属性名包含特殊字符，必用''括起来
    fullName : function() {
        return this.firstName + " " + this.lastName;
  }
  age(){
      return new Date().getFullYear() - this.birth;
  }
};

// 通过new
var person = new Object();
person.firstName = "Bill";
person.lastName = "Gates";
person.age = 50;
```
访问属性

- objectName.property           // person.age
- objectName["property"]       // person["age"]
- objectName[expression]       // x = "age"; person[x]

访问属性方法没有使用 ()，则将返回其定义

对象的拷贝
```javascript
var extend = function (to, from) {
  for (var property in from) {
    if (!from.hasOwnProperty(property)) continue;
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from, property)
    );
  }
  return to;
}

// ES2017
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```

## class
```javascript
class Point {
  constructor() {
    // ...
  }
  toString() {
    // ...
  }
  toValue() {
    // ...
  }
}

// 等同于
Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```

## 继承
**自定义原型继承**
```javascript
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
```
class继承
```javascript
class Foo {
    constructor(name, grade) {
        super(name);   // 必须用super调用父类的构造方法!
        this.grade = grade;
    }
    static classMethod() {
        return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

Bar.classMethod() // "hello, too"
```
JavaScript 属性值的继承是在运行时通过检索对象的原型链来实现的。因为对象只有一个原型与之关联，所以 JavaScript 无法动态地从多个原型链中继承。

**Mixin（混入）**
```javascript
function M1() {
  this.hello = 'hello';
}

function M2() {
  this.world = 'world';
}

function S() {
  M1.call(this);
  M2.call(this);
}

// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
s.hello // 'hello'
s.world // 'world'
```
```javascript
function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}


class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}
```
**singleton**
```javascript
// 类实现
class Singleton {
    constructor () {
        this.name = 'benz';
    }
    
    static getInstance () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

let a = Singleton.getInstance();
let b = Singleton.getInstance();

console.log(a === b)      // true


// 闭包实现
var Singleton = (function () {
    var instance;
    
    var SingletonTemp = function () {
        this.name = 'benz';
    };
    
    return function () {
        if (!instance) {
            instance = new SingletonTemp();
        }
        return instance;
    }
})();

let c = = new Singleton();
```

# 流程控制

- if - else
- switch {case}
- while  |  do···while
- for ([initialExpression]; [condition]; [incrementExpression])
- for (variable in object)	循环一个对象所有可枚举的属性
- for (variable of object)    （遍历iterable类型的集合）
- break | continue [label]
- ~~with (对象) {语句;}~~
```javascript
var obj = {
  p1: 1,
  p2: 2,
};

with (obj) {
  p1 = 4;
  p2 = 5;
  p3 = 6;
}

// 等同于
obj.p1 = 4;
obj.p2 = 5;
obj.p3 // undefined
p3 // 6
```

## [解构（Destructuring）赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
```javascript
let [x, , y] = [1, 2, 3];
x // 1
y // 3

const [a, b] = 'js'

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

//指定默认值
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
let [x = 1, y = x] = [2];    // x=2; y=2

// 交换变量
[a, b] = [b, a];

//变量必须与属性同名，才能取到正确的值
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
var {name, address: {city, zip}} = person;
name; // '小明'
city; // 'Beijing'
zip; // undefined
address; // Uncaught ReferenceError: address is not defined

const original = { a: 1, b: 2 };
// 浅拷贝
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }
// rest 赋值运算符
const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

// 给新的变量名赋值
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

// 给新的变量命名并提供默认值
var {a:aa = 10, b:bb = 5} = {a: 3};
```
只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
```javascript
//fibs是一个 Generator 函数，原生具有 Iterator 接口
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5
```

# 异常
```javascript
try {
     供测试的代码块
     throw expression; // 抛出异常
}
[catch [e] {
     处理错误的代码块
} 
finally {
     无论 try / catch 结果如何都执行的代码块
}]
```
**Error 对象属性**

- name	设置或返回错误名
- message	设置或返回错误消息（一条字符串）
| 错误名 | 描述 |
| --- | --- |
| EvalError | 已在 eval() 函数中发生的错误 |
| RangeError | 已发生超出数字范围的错误 |
| ReferenceError | 已发生非法引用 |
| SyntaxError | 已发生语法错误 |
| TypeError | 已发生类型错误 |
| URIError | 在 encodeURI() 中已发生的错误 |

自定义错误
```javascript
function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

new UserError('这是自定义的错误！');
```

# Function
```javascript
// 函数声明（Function Declaration）
function [functionName](parameters) {
   //Code
}

// 函数表达式（Function Expression）
[var | let] functionName = function (parameters) {
   //Code
}
```
| 属性/方法 |  |
| --- | --- |
| name | 函数名 |
| length | 没有指定默认值的参数个数 |
| toString() | 返回一个字符串，内容是函数的源码 |
| arguments | 调用时函数的参数 |
| caller | 调用当前函数的那个函数 |

关键字arguments，它只在函数内部起作用，并且指向当前函数的调用者传入的所有参数。
```javascript
x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
```

默认参数  <br />  **可变参数**
```javascript
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []
```

## 绑定 this
指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数

- Function.prototype.call(thisValue, arg1, arg2, ...)：方法分别接受参数。
- Function.prototype.apply(thisValue, [arg1, arg2, ...])： 方法接受数组形式的参数。
- Function.prototype.bind() ：将函数体内的this绑定到某个对象，然后返回一个新函数
```javascript
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var obj = {
  count: 100
};

var func = counter.inc.bind(obj);
func();
obj.count // 101
```
**自调用函数**  <br />  立即调用的函数表达式（Immediately-Invoked Function Expression，IIFE）  <br />  圆括号()是一种运算符，跟在函数名之后，表示调用该函数
```javascript
(function () {
    var x = "Hello!!";      //调用自身
})();
```

## 闭包（closure）
有权访问父作用域的函数，即使在父函数关闭之后
```javascript
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();    // 计数器目前是 3
```

## Arrow Function（箭头函数）
```javascript
const x = (x, y) => { return x * y };  
// const x = (x, y) => x * y    如果函数是单个语句，则只能省略 return 关键字和大括号。
```
PS

- 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
- 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- 不可以使用yield命令

## Iterator
必须暴露一个属性作为“默认迭代器”，且使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂函数，调用这个工厂函数必须返回一个新迭代器。
```javascript
let num = 1;
console.log(num[Symbol.iterator]); // undefined

// 可迭代对象
let arr = ['foo', 'bar'];
// 迭代器工厂函数
console.log(arr[Symbol.iterator]); // f values() { [native code] }
// 迭代器
let iter = arr[Symbol.iterator]();
console.log(iter); // ArrayIterator {}
// 执行迭代
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: true, value: undefined }
```
实现可迭代接口（Iterable）
```javascript
class Counter {
    constructor(limit) {
        this.limit = limit;
    }
    [Symbol.iterator]() {
        let count = 1,
            limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true, value: undefined };
                }
            }
        };
    }
}
```

## Generator
function关键字与函数名之间有一个星号  <br />  函数体内部使用yield表达式，定义不同的内部状态
```javascript
gen = function* () {
  yield 1;
  yield 2;
  yield 3;
}

var myIterable = {};
myIterable[Symbol.iterator] = gen;
[...myIterable] // [1, 2, 3]
```
Generator.prototype.return()	返回给定的值，并且终结遍历 Generator 函数

async函数：将 Generator 函数的星号（*）替换成async，将yield替换成await

- 返回一个 Promise 对象。
- 内部return语句返回的值，会成为then方法回调函数的参数。
```javascript
// 指定 50 毫秒以后，输出hello world
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}
asyncPrint('hello world', 50);
```

- [for await...of](https://wangdoc.com/es6/async-iterator.html#for-awaitof)


## Math
| 属性 | 描述 |
| --- | --- |
| [E](https://www.w3school.com.cn/jsref/jsref_e.asp) | 返回算术常量 e，即自然对数的底数（约等于2.718）。 |
| [LN2](https://www.w3school.com.cn/jsref/jsref_ln2.asp) | 返回 2 的自然对数（约等于0.693）。 |
| [LN10](https://www.w3school.com.cn/jsref/jsref_ln10.asp) | 返回 10 的自然对数（约等于2.302）。 |
| [LOG2E](https://www.w3school.com.cn/jsref/jsref_log2e.asp) | 返回以 2 为底的 e 的对数（约等于 1.414）。 |
| [LOG10E](https://www.w3school.com.cn/jsref/jsref_log10e.asp) | 返回以 10 为底的 e 的对数（约等于0.434）。 |
| [PI](https://www.w3school.com.cn/jsref/jsref_pi.asp) | 返回圆周率（约等于3.14159）。 |
| [SQRT1_2](https://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp) | 返回返回 2 的平方根的倒数（约等于 0.707）。 |
| [SQRT2](https://www.w3school.com.cn/jsref/jsref_sqrt2.asp) | 返回 2 的平方根（约等于 1.414）。 |

| 方法 | 描述 |
| --- | --- |
| [abs()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) | 绝对值 |
| [sin()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin), [cos()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), [tan()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tan) | 标准三角函数;参数为弧度 |
| [asin()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asin), [acos()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acos), [atan()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan), [atan2()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2) | 反三角函数; 返回值为弧度 |
| [sinh()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh), [cosh()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh), [tanh()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh) | 双曲三角函数; 参数为弧度. |
| [asinh()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh), [acosh()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh), [atanh()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh) | 反双曲三角函数;返回值为弧度. |
| [pow()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow), [exp()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp), [expm1()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1), [log10()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log10), [log1p()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p), [log2()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log2) | 指数与对数函数 |
| [floor()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [ceil()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) | 返回小于等于参数的最大整数；返回大于等于参数的最小整数 |
| [min()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min), [max()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max) | 返回一个以逗号间隔的数字参数列表中的较小或较大值(分别地) |
| [random()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random) | 返回0和1之间的随机数。 |
| [round()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round), [fround()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/fround), [trunc()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc), | 四舍五入和截断函数 |
| [sqrt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), [cbrt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt), [hypot()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot) | 平方根，立方根，所有参数平方和的平方根   <br />  两个参数平方和的平方根 |
| [sign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) | 数字的符号, 说明数字是否为正、负、零。 |
| [clz32()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32),  <br />  [imul()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32) | 在32位2进制表示中，开头的0的数量.  <br />  返回传入的两个参数相乘结果的类C的32位_表现形式_ |


## 顶层函数（全局函数）
| 函数 | 描述 |
| --- | --- |
| [decodeURI()](https://www.w3school.com.cn/jsref/jsref_decodeURI.asp) | 解码某个编码的 URI。 |
| [decodeURIComponent()](https://www.w3school.com.cn/jsref/jsref_decodeURIComponent.asp) | 解码一个编码的 URI 组件。 |
| [encodeURI()](https://www.w3school.com.cn/jsref/jsref_encodeuri.asp) | 把字符串编码为 URI。 |
| [encodeURIComponent()](https://www.w3school.com.cn/jsref/jsref_encodeURIComponent.asp) | 把字符串编码为 URI 组件。 |
| [escape()](https://www.w3school.com.cn/jsref/jsref_escape.asp) | 对字符串进行编码。 |
| [eval()](https://www.w3school.com.cn/jsref/jsref_eval.asp) | 计算 JavaScript 字符串，并把它作为脚本代码来执行。 |
| [uneval()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/uneval) | 创建的一个Object的源代码的字符串表示 |
| [getClass()](https://www.w3school.com.cn/jsref/jsref_getClass.asp) | 返回一个 JavaObject 的 JavaClass。 |
| [isFinite()](https://www.w3school.com.cn/jsref/jsref_isFinite.asp) | 检查某个值是否为有穷大的数。 |
| [isNaN()](https://www.w3school.com.cn/jsref/jsref_isNaN.asp) | 检查某个值是否是数字。 |
| [Number()](https://www.w3school.com.cn/jsref/jsref_number.asp) | 把对象的值转换为数字。 |
| [parseFloat()](https://www.w3school.com.cn/jsref/jsref_parseFloat.asp) | 解析一个字符串并返回一个浮点数。 |
| [parseInt()](https://www.w3school.com.cn/jsref/jsref_parseInt.asp) | 解析一个字符串并返回一个整数。 |
| [String()](https://www.w3school.com.cn/jsref/jsref_string.asp) | 把对象的值转换为字符串。 |
| [unescape()](https://www.w3school.com.cn/jsref/jsref_unescape.asp) | 对由 escape() 编码的字符串进行解码。 |


## 顶层属性（全局属性）
| 方法 | 描述 |
| --- | --- |
| [Infinity](https://www.w3school.com.cn/jsref/jsref_infinity.asp) | 代表正的无穷大的数值。 |
| [java](https://www.w3school.com.cn/jsref/jsref_java.asp) | 代表 java.* 包层级的一个 JavaPackage。 |
| [NaN](https://www.w3school.com.cn/jsref/jsref_nan.asp) | 指示某个值是不是数字值。 |
| [Packages](https://www.w3school.com.cn/jsref/jsref_Packages.asp) | 根 JavaPackage 对象。 |
| [undefined](https://www.w3school.com.cn/jsref/jsref_undefined.asp) | 指示未定义的值。 |


## console
| 方法 | 描述 |
| --- | --- |
| assert() | 第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。 |
| clear() | 清除当前控制台的所有输出，将光标回置到第一行。 |
| count() | 用于计数，输出它被调用了多少次。 |
| countReset() | 重置指定标签的计数器值 |
| debug() | 打印一条 "debug" 级别的消息 |
| dir() | 显示一个由特定的 Javascript 对象列表组成的可交互列表 |
| dirxml() | 打印 XML/HTML 元素表示的指定对象，否则显示 JavaScript 对象视图 |
| error() | 输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈。 |
| group() | 用于将显示的信息分组，可以把信息进行折叠和展开。 |
| groupCollapsed() | 与console.group方法很类似，唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的。 |
| groupEnd() | 结束内联分组 |
| info() | console.log 别名，输出信息 |
| log() | 输出信息 |
| table() | 将复合类型的数据转为表格显示。 |
| time() | 计时开始 |
| timeEnd() | 计时结束 |
| trace() | 追踪函数的调用过程 |
| warn() | 输出警告信息 |


# 异步

## 定时器（Timer）
向任务队列添加定时任务

- setTimeout(func|code, delay=0)：指定某个函数或某段代码，在多少毫秒之后执行。返回一个整数，表示定时器的编号，可用来取消这个定时器
- setInterval（）：指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行

——

- clearTimeout(TimerID)：取消对应的定时器
- clearInterval(TimerID)

## Promise
起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。
```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```
状态

- pending：初始的状态，即正在执行
- fulfilled：成功的完成了操作。
- rejected：失败，没有完成操作。
- settled： fulfilled 或 rejected 二者中的任意一个状态



**方法**

- Promise.prototype.then()：为 Promise 实例添加状态改变时的回调函数
- Promise.prototype.catch()：指定发生错误时的回调函数
- Promise.prototype.finally()
- Promise.all()：将多个 Promise 实例，包装成一个新的 Promise 实例
- Promise.race()
- Promise.allSettled()
- Promise.any()
- Promise.resolve()
- Promise.reject()
- Promise.try()
```javascript
// 传统写法
step1(function (value1) {
  step2(value1, function(value2) {
    step3(value2, function(value3) {
      step4(value3, function(value4) {
        // ...
      });
    });
  });
});

// Promise 的写法
(new Promise(step1))
  .then(step2)
  .then(step3)
  .then(step4);
```

# Symbol
ES6 引入了一种新的原始数据类型，表示独一无二的值。通过Symbol函数生成  <br />  可以显式转为字符串  <br />  Symbol.keyFor()：返回一个已登记的 Symbol 类型值的key
```javascript
Symbol("bar") === Symbol("bar")
// false

Symbol.for("bar") === Symbol.for("bar")
// true

let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```
[内置的 Symbol 值](https://wangdoc.com/es6/symbol.html#%E5%86%85%E7%BD%AE%E7%9A%84-symbol-%E5%80%BC)

- [Symbol.hasInstance](https://wangdoc.com/es6/symbol.html#symbolhasinstance)
- [Symbol.isConcatSpreadable](https://wangdoc.com/es6/symbol.html#symbolisconcatspreadable)	表示该对象用于Array.prototype.concat()时，是否可以展开
- [Symbol.species](https://wangdoc.com/es6/symbol.html#symbolspecies)	指向一个构造函数。创建衍生对象时，会使用该属性
- [Symbol.match](https://wangdoc.com/es6/symbol.html#symbolmatch)	当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值
- [Symbol.replace](https://wangdoc.com/es6/symbol.html#symbolreplace)	当该对象被String.prototype.replace方法调用时，会返回该方法的返回值
- [Symbol.search](https://wangdoc.com/es6/symbol.html#symbolsearch)	
- [Symbol.split](https://wangdoc.com/es6/symbol.html#symbolsplit)
- [Symbol.iterator](https://wangdoc.com/es6/symbol.html#symboliterator)	指向该对象的默认遍历器方法
- [Symbol.toPrimitive](https://wangdoc.com/es6/symbol.html#symboltoprimitive)	对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值
- [Symbol.toStringTag](https://wangdoc.com/es6/symbol.html#symboltostringtag)
- [Symbol.unscopables](https://wangdoc.com/es6/symbol.html#symbolunscopables)	该对象指定了使用with关键字时，哪些属性会被with环境排除

# Set

- Set.prototype.constructor：构造函数，默认就是Set函数。
- Set.prototype.size：返回Set实例的成员总数。

——

- Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
- Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
- Set.prototype.clear()：清除所有成员，没有返回值。
- Set.prototype.keys()：返回键名的遍历器
- Set.prototype.values()：返回键值的遍历器
- Set.prototype.entries()：返回键值对的遍历器
- Set.prototype.forEach()：使用回调函数遍历每个成员
```javascript
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3

// 去除数组的重复成员
[...new Set(array)]

// 并集
let union = new Set([...a, ...b]);
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
```


**WeakSet**  <br />  成员只能是对象（弱引用）  <br />  不能遍历

- WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
- WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
- WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

# Map

- size 属性

——

- Map.prototype.set(key, value)
- Map.prototype.get(key)
- Map.prototype.has(key)
- Map.prototype.delete(key)
- Map.prototype.clear()
- Map.prototype.keys()：返回键名的遍历器。
- Map.prototype.values()：返回键值的遍历器。
- Map.prototype.entries()：返回所有成员的遍历器。
- Map.prototype.forEach()：遍历 Map 的所有成员。
```javascript
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]

for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}

map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});
// 对象转为 Map
let map = new Map(Object.entries(obj));
```


**WeakMap**  <br />  键所对应的对象，可能会在将来消失。有助于防止内存泄漏  <br />  method：get()、set()、has()、delete()

# Proxy
用于修改某些操作的默认行为，对外界的访问进行过滤和改写，属于一种“元编程”（meta programming）  <br />  **new Proxy(target, handler)**

- get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
- set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
- has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
- deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
- ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
- defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
- getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
- isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
- setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
- Proxy.revocable()：返回一个可取消的 Proxy 实例
```javascript
//只要读写的属性名的第一个字符是下划线，一律抛错，从而达到禁止读写内部属性的目的
const handler = {
  get (target, key) {
    invariant(key, 'get');
    return target[key];
  },
  set (target, key, value) {
    invariant(key, 'set');
    target[key] = value;
    return true;
  }
};
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}
const target = {};
const proxy = new Proxy(target, handler);
proxy._prop = 'c'
// Error: Invalid attempt to set private "_prop" property
```

# Reflect
大部分与Object对象的同名方法的作用都是相同的，而且它与Proxy对象的方法是一一对应的

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)
```javascript
/* 每一个Proxy对象的拦截操作（get、delete、has），内部都调用对应的Reflect方法，保证原生行为能够正常执行。
添加的工作，就是将每一个操作输出一行日志 */
var loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
});
```

# Module
export
```javascript
// profile.js

export function area(radius) {
  return Math.PI * radius * radius;
}

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

export default：指定默认输出

// 接口改名
export { foo as myFoo } from 'my_module';

// 整体输出
export * from 'my_module';
```
import
```javascript
// main.js
import { lastName as surname } from './profile.js';
import * from './profile.js';

import(specifier)    // 支持动态加载模块
```

# 运算符
[赋值运算符(assignment operator)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

| 名字 | 简写的操作符 |
| --- | --- |
| [赋值(Assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment) | x = y |
| [加法赋值(Addition assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment) | x += y |
| [减法赋值(Subtraction assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Subtraction_assignment) | x -= y |
| [乘法赋值(Multiplication assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Multiplication_assignment) | x *= y |
| [除法赋值(Division assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Division_assignment) | x /= y |
| [求余赋值(Remainder assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Remainder_assignment) | x %= y |
| [求幂赋值(Exponentiation assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Exponentiation_assignment) | x **= y |
| [左移位赋值(Left shift assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Left_shift_assignment) | x <<= y |
| [右移位赋值(Right shift assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Right_shift_assignment) | x >>= y |
| [无符号右移位赋值(Unsigned right shift assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Unsigned_right_shift_assignment) | x >>>= y |
| [按位与赋值(Bitwise AND assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_AND_assignment) | x &= y |
| [按位异或赋值(Bitwise XOR assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_XOR_assignment) | x ^= y |
| [按位或赋值(Bitwise OR assignment)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_OR_assignment) | x |

[比较运算符(Comparison operators)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6)

| 运算符 | 描述 |
| --- | --- |
| [等于 Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality) (==) | 如果两边操作数相等时返回true。 |
| [不等于 Not equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality) (!=) | 如果两边操作数不相等时返回true |
| [全等 Strict equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) (===) | 两边操作数相等且类型相同时返回true。 |
| [不全等 Strict not equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity) (!==) | 两边操作数不相等或类型不同时返回true。 |
| [大于 Greater than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator) (>) | 左边的操作数大于右边的操作数返回true |
| [大于等于 Greater than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator) (>=) | 左边的操作数大于或等于右边的操作数返回true |
| [小于 Less than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator) (<) | 左边的操作数小于右边的操作数返回true |
| [小于等于 Less than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator) (<=) | 左边的操作数小于或等于右边的操作数返回true |

[算数运算符(Arithmetic operators)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E7%AE%97%E6%9C%AF%E8%BF%90%E7%AE%97%E7%AC%A6)  <br />  [位运算符(Bitwise operators)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6)  <br />  [逻辑运算符(Logical operators)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6)  <br />  [字符串运算符(String operators)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%90%E7%AE%97%E7%AC%A6)  <br />  [条件（三元）运算符(Conditional operator)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_operator)  <br />  [逗号运算符(Comma operator)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#comma_operator)  <br />  [一元运算符(Unary operators)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#delete)

- delete：属性或者元素会变成 undefined，成功会返回true
- typeof operand
- void (expression)

[关系运算符(Relational operator)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E5%85%B3%E7%B3%BB%E6%93%8D%E4%BD%9C%E7%AC%A6)

- propNameOrNumber in objectName
- objectName instanceof objectType

## 优先级
| Operator type | Individual operators |
| --- | --- |
| member | . [] |
| call / create instance | () new |
| negation/increment | ! ~ - + ++ -- typeof void delete |
| multiply/divide | * / % |
| addition/subtraction | + - |
| bitwise shift | << >> >>> |
| relational | < <= > >= in instanceof |
| equality | == != === !== |
| bitwise-and | & |
| bitwise-xor | ^ |
| bitwise-or | &#124; |
| logical-and | && |
| logical-or | &#124;&#124; |
| conditional | ?: |
| assignment | = += -= *= /= %= <<= >>= >>>= &= ^= &#124;= |
| comma | , |

**链判断运算符 （?.）**

- obj?.prop // 对象属性
- obj?.[expr] // 同上
- func?.(...args) // 函数或对象方法的调用
- 短路机制



**Null 判断运算符  ??**  <br />  行为类似||，运算符左侧的值为null或undefined时，才会返回右侧的值


# Others
**JS Event Loop 事件循环机制**  <br />  任务执行顺序：

1. 同步任务；
2. 微任务队列（promise.then、process.nextTick(node)）；
3. 宏任务队列（script、setTimeOut、setInterval）
```javascript
setImmediate(console.log, 1);
setTimeout(console.log, 1, 2);
/****************** microTask 分割线 ********************/
Promise.resolve(3).then(console.log); // microTask 分割线
/****************** 下次 event loop tick 分割线 ********************/
process.nextTick(console.log, 4);
/****************** 同步任务和异步任务的分割线 ********************/
console.log(5);
// 打印 5 4 3 2 1 或者 5 4 3 1 2
```


**函数防抖（debounce）**  <br />  指触发事件后在规定时间内函数只能执行一次，如果在规定时间内又触发了事件，则会重新计算函数执行时间。  <br />  应用场景

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
```javascript
// 规定延迟时间（delay）内只执行最开始触发的函数
let canRun = true;
document.addEventListener('scroll', function(){
    // 判断是否已空闲，如果在执行中，则直接return
    if(!canRun) return;
    canRun = false;
    setTimeout(() => {
        console.log("函数节流");
        canRun = true;
    }, 300);
});
```


**函数节流（throttle）**  <br />  限制一个函数在规定时间内只能执行一次。  <br />  应用场景

- 滚动加载，加载更多或滚到底部监听
- 谷歌搜索框，搜索联想功能
```javascript
let timer = false;
document.addEventListener('scroll', function(){
    clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
    timer = setTimeout(function(){
        console.log("函数防抖");
    }, 300);
});
```



# JSON
JavaScript Object Notation：一种数据交换的文本格式  <br />  2002年，道格拉斯·克罗克福特（Douglas Crockford）发明的超轻量级的数据交换格式  <br />  **规定**

1. 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
2. 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。
3. 字符串必须使用双引号表示，不能使用单引号。
4. 对象的键名必须放在双引号里面。
5. 数组或对象最后一个成员的后面，不能加逗号。

序列化：JSON.stringify(object [```]);  <br />  反序列化：JSON.parse()
```javascript
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}
```
