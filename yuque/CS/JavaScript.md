<h1>—— <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference" target="_blank">Javascript</a> ——</h1>
<p>1995年，Brendan Eich设计出了一门跨平台、面向对象的脚本语言，它能使网页可交互。</p>
<p>ECMAScript标准：ECMA（European Computer Manufacturers Association）组织定制了JavaScript语言的标准</p>
<p>脚本语言（script language）：不具备开发操作系统的能力，而是用来编写控制其他大型应用程序（比如浏览器）的“脚本”</p>
<p>一切皆对象，对象为引用值</p>
<p>注释</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 单行注释（single-line comment）

/* 多行注释
（multiple-line comment）*/

</code></pre>
<h1>Strict mode</h1>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">'use strict';

</code></pre>
<ul>
<li>
<p>变量必须声明后再使用</p>
</li>
<li>
<p>禁止使用 with 语句</p>
</li>
<li>
<p>只读属性不可写</p>
</li>
<li>
<p>只设置了取值器的属性不可写</p>
</li>
<li>
<p>eval、arguments 不可用作标识名</p>
</li>
<li>
<p>禁止八进制的前缀0表示法</p>
</li>
<li>
<p>禁止删除变量，只能删除属性delete global[prop]</p>
</li>
<li>
<p>eval不会在它的外层作用域引入变量</p>
</li>
<li>
<p>arguments不会自动反映函数参数的变化</p>
</li>
<li>
<p>函数不能有重名的参数</p>
</li>
<li>
<p>函数内部不得使用fn.caller、fn.arguments</p>
</li>
<li>
<p>禁止使用 arguments.callee、arguments.caller</p>
</li>
<li>
<p>禁止this指向全局对象</p>
</li>
<li>
<p>增加了保留字</p>
</li>
</ul>
<h1><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E5%85%B3%E9%94%AE%E5%AD%97" target="_blank">关键字</a></h1>
<ul>
<li>
<p>break</p>
</li>
<li>
<p>case</p>
</li>
<li>
<p>catch</p>
</li>
<li>
<p>class</p>
</li>
<li>
<p>const</p>
</li>
<li>
<p>continue</p>
</li>
<li>
<p>debugger</p>
</li>
<li>
<p>default</p>
</li>
<li>
<p>delete</p>
</li>
<li>
<p>do</p>
</li>
<li>
<p>else</p>
</li>
<li>
<p>export</p>
</li>
<li>
<p>extends</p>
</li>
<li>
<p>finally</p>
</li>
<li>
<p>for</p>
</li>
<li>
<p>function</p>
</li>
<li>
<p>if</p>
</li>
<li>
<p>import</p>
</li>
<li>
<p>in</p>
</li>
<li>
<p>instanceof</p>
</li>
<li>
<p>new</p>
</li>
<li>
<p>return</p>
</li>
<li>
<p>super</p>
</li>
<li>
<p>switch</p>
</li>
<li>
<p>this</p>
</li>
<li>
<p>throw</p>
</li>
<li>
<p>try</p>
</li>
<li>
<p>typeof</p>
</li>
<li>
<p>var</p>
</li>
<li>
<p>void</p>
</li>
<li>
<p>while</p>
</li>
<li>
<p>with</p>
</li>
<li>
<p>yield</p>
</li>
</ul>
<p>严格模式和非严格模式中均不能使用</p>
<ul>
<li>enum</li>
</ul>
<p>严格模式中被当成保留关键字</p>
<ul>
<li>
<p>implements</p>
</li>
<li>
<p>interface</p>
</li>
<li>
<p>let</p>
</li>
<li>
<p>package</p>
</li>
<li>
<p>private</p>
</li>
<li>
<p>protected</p>
</li>
<li>
<p>public</p>
</li>
<li>
<p>static</p>
</li>
</ul>
<p>模块代码中被当成保留关键字：</p>
<ul>
<li>await</li>
</ul>
<p>之前版本中的ECMAScript（1到3）中的保留关键字：</p>
<ul>
<li>
<p>abstract</p>
</li>
<li>
<p>boolean</p>
</li>
<li>
<p>byte</p>
</li>
<li>
<p>char</p>
</li>
<li>
<p>double</p>
</li>
<li>
<p>final</p>
</li>
<li>
<p>float</p>
</li>
<li>
<p>goto</p>
</li>
<li>
<p>int</p>
</li>
<li>
<p>long</p>
</li>
<li>
<p>native</p>
</li>
<li>
<p>short</p>
</li>
<li>
<p>synchronized</p>
</li>
<li>
<p>transient</p>
</li>
<li>
<p>volatile</p>
</li>
</ul>
<p>直接量null、true和false同样不能被当成标识使用</p>
<h1>变量</h1>
<p>标识符（Identifier）：大小写英文、数字、$、_ 的组合，且不能用数字开头。</p>
<p>声明</p>
<ul>
<li>
<p>var：声明一个变量，可选初始化一个值。</p>
</li>
<li>
<p>let：声明一个块作用域的局部变量，可选初始化一个值。</p>
</li>
<li>
<p>const：声明一个块作用域的只读常量。</p>
</li>
</ul>
<p><strong>Hoisting (提升）</strong>： JavaScript 将所有声明提升到当前作用域顶部，提升后的变量将返回 undefined 值。</p>
<p>用 let 或 const 声明的不会被赋予初始值</p>
<p>只有函数声明会被提升到顶部，而函数表达式不会被提升</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">/* 函数声明 */

foo(); // "bar"

function foo() {
  console.log("bar");
}


/* 函数表达式 */

baz(); // 类型错误：baz 不是一个函数

var baz = function() {
  console.log("bar2");
};

</code></pre>
<h1>数据类型</h1>
<p>原始数据类型（<a href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive" target="_blank">Primitive data types</a>）一种既非对象也无方法的数据。共有7种：string，number，bigint，boolean，null（空值），undefined（未定义），symbol</p>
<p>除了 null 和 undefined之外，所有基本类型都有其对应的包装对象</p>
<ul>
<li>
<p>String</p>
</li>
<li>
<p>Number</p>
</li>
<li>
<p>BigInt</p>
</li>
<li>
<p>Boolean</p>
</li>
<li>
<p>Symbol</p>
</li>
</ul>
<p>对象类型（Object types）</p>
<h2><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank">Number</a></h2>
<p>整数</p>
<ul>
<li>
<p>二进制整数以0b（或0B）开头，只能包含数字0和1。</p>
</li>
<li>
<p>八进制的整数以 0O或0o 开头，只能包括数字0-7。</p>
</li>
<li>
<p>十六进制整数以 0x或0X 开头，可以包含数字（0-9）和字母 a~f 或 A~F。</p>
</li>
</ul>
<p>浮点数：[(+|-)][digits][.digits][(E|e)[(+|-)]digits]</p>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_constructor_number.asp" target="_blank">constructor</a></td>
<td style="text-align:center">返回对创建此对象的 Number 函数的引用。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_max_value.asp" target="_blank">MAX_VALUE</a></td>
<td style="text-align:center">可表示的最大的数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_min_value.asp" target="_blank">MIN_VALUE</a></td>
<td style="text-align:center">可表示的最小的数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_nan_number.asp" target="_blank">NaN</a></td>
<td style="text-align:center">非数字值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_negative_infinity.asp" target="_blank">NEGATIVE_INFINITY</a></td>
<td style="text-align:center">负无穷大，溢出时返回该值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_positive_infinity.asp" target="_blank">POSITIVE_INFINITY</a></td>
<td style="text-align:center">正无穷大，溢出时返回该值。</td>
</tr>
<tr>
<td style="text-align:center">EPSILON</td>
<td style="text-align:center">极小的常量，表示 1 与大于 1 的最小浮点数之间的差</td>
</tr>
<tr>
<td style="text-align:center">MIN_SAFE_INTEGER</td>
<td style="text-align:center">最小的安全整数 (-(2^53 - 1))</td>
</tr>
<tr>
<td style="text-align:center">MAX_SAFE_INTEGER</td>
<td style="text-align:center">最大的安全整数（2^53 - 1）</td>
</tr>
</tbody>
</table>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">NaN === NaN; // false

isNaN(NaN); // true

</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat" target="_blank">Number.parseFloat()</a></td>
<td style="text-align:center">把字符串参数解析成浮点数</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt" target="_blank">Number.parseInt()</a></td>
<td style="text-align:center">把字符串解析成特定基数对应的整型数字</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" target="_blank">Number.isFinite()</a></td>
<td style="text-align:center">判断传递的值是否为有限数字。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger" target="_blank">Number.isInteger()</a></td>
<td style="text-align:center">判断传递的值是否为整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" target="_blank">Number.isNaN()</a></td>
<td style="text-align:center">判断传递的值是否为 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN" target="_blank">NaN.</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger" target="_blank">Number.isSafeInteger()</a></td>
<td style="text-align:center">判断传递的值是否为安全整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_tostring_number.asp" target="_blank">toString</a></td>
<td style="text-align:center">把数字转换为字符串，使用指定的基数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_tolocalestring_number.asp" target="_blank">toLocaleString</a></td>
<td style="text-align:center">把数字转换为字符串，使用本地数字格式顺序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_tofixed.asp" target="_blank">toFixed</a></td>
<td style="text-align:center">把数字转换为字符串，结果的小数点后有指定位数的数字。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toexponential.asp" target="_blank">toExponential</a></td>
<td style="text-align:center">把对象的值转换为指数计数法。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toprecision.asp" target="_blank">toPrecision</a></td>
<td style="text-align:center">把数字格式化为指定的长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_valueof_number.asp" target="_blank">valueOf</a></td>
<td style="text-align:center">返回一个 Number 对象的基本数字值。</td>
</tr>
</tbody>
</table>
<p>自定义方法</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">Number.prototype.add = function (x) {
  return this + x;
};

8['add'](2) // 10
(8).add(2)

</code></pre>
<h3>BigInt</h3>
<p>表示整数，没有位数的限制，任何位数的整数都可以精确表示</p>
<p>可以使用各种进制表示，都要加上<strong>后缀n</strong></p>
<p>不能使用正号（+），为了不破坏 asm.js 就规定+1n会报错</p>
<p>BigInt.prototype.toString()</p>
<p>BigInt.prototype.valueOf()</p>
<p>BigInt.prototype.toLocaleString()</p>
<p>BigInt.asUintN(width, BigInt)： 给定的 BigInt 转为 0 到 2^width - 1 之间对应的值。</p>
<p>BigInt.asIntN(width, BigInt)：给定的 BigInt 转为 -2^width - 1 到 2^width - 1 - 1 之间对应的值。</p>
<p>BigInt.parseInt(string[, radix])：将一个字符串转换成指定进制的 BigInt。</p>
<h2>String</h2>
<p>字符串：以单引号'或双引号"括起来的任意文本，不可变的（immutable）</p>
<p>Unicode 表示法</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true

</code></pre>
<p>多行模板字符串</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">` Hi ${expression}.
 What's up? `

</code></pre>
<p>标签模板（tagged template）  函数调用的一种特殊形式</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">alert`hello`
// 等同于
alert(['hello'])

String.raw`Hi\\n` === "Hi\\\\n" // true

</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">constructor</td>
<td style="text-align:center">对创建该对象的函数的引用</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_length_string.asp" target="_blank">length</a></td>
<td style="text-align:center">字符串的长度</td>
</tr>
<tr>
<td style="text-align:center">prototype</td>
<td style="text-align:center">允许您向对象添加属性和方法</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" target="_blank">charAt,</a> charCodeAt, codePointAt</td>
<td style="text-align:center">返回字符串指定位置的字符或者字符编码。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf" target="_blank">indexOf,</a> lastIndexOf</td>
<td style="text-align:center">分别返回字符串中指定子串的位置或最后位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith" target="_blank">startsWith,</a> endsWith, includes</td>
<td style="text-align:center">返回字符串是否以指定字符串开始、结束或包含指定字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat" target="_blank">concat</a></td>
<td style="text-align:center">连接两个字符串并返回新的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode" target="_blank">fromCharCode,</a> fromCodePoint</td>
<td style="text-align:center">从指定的Unicode值序列构造一个字符串。String类方法</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">split</a></td>
<td style="text-align:center">通过将字符串分离成一个个子串来把一个String对象分裂到一个字符串数组中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank">slice</a></td>
<td style="text-align:center">从一个字符串提取片段并作为新字符串返回。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring" target="_blank">substring,</a> substr</td>
<td style="text-align:center">分别通过指定起始和结束位置，起始位置和长度来返回字符串的指定子集。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" target="_blank">match,</a> replace, search</td>
<td style="text-align:center">通过正则表达式来工作.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase" target="_blank">toLowerCase,</a> toUpperCase</td>
<td style="text-align:center">分别返回字符串的小写表示和大写表示。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize" target="_blank">normalize</a></td>
<td style="text-align:center">按照指定的一种 Unicode 正规形式将当前字符串正规化。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat" target="_blank">repeat</a></td>
<td style="text-align:center">将字符串内容重复指定次数后返回。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trim" target="_blank">trim</a></td>
<td style="text-align:center">去掉字符串开头和结尾的空白字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://wangdoc.com/es6/string-methods.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Apadstart%EF%BC%8Cpadend" target="_blank">padStart()，padEnd()</a></td>
<td style="text-align:center">字符串补全长度的功能</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://wangdoc.com/es6/string-methods.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Atrimstart%EF%BC%8Ctrimend" target="_blank">trimStart()，trimEnd()</a></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://wangdoc.com/es6/string-methods.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Amatchall" target="_blank">matchAll()</a></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://wangdoc.com/es6/string-methods.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95%EF%BC%9Areplaceall" target="_blank">replaceAll()</a></td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-charcodeat" target="_blank">charCodeAt()</a></td>
<td style="text-align:center">返回在指定的位置的字符的 Unicode 编码。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-fromcharcode" target="_blank">fromCharCode()</a></td>
<td style="text-align:center">将 Unicode 编码转为字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-substr" target="_blank">substr()</a></td>
<td style="text-align:center">从起始索引号提取字符串中指定数目的字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-substring" target="_blank">substring()</a></td>
<td style="text-align:center">提取字符串中两个指定的索引号之间的字符。</td>
</tr>
</tbody>
</table>
<p><strong>HTML 包装方法</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-anchor" target="_blank">anchor()</a></td>
<td style="text-align:center">创建 HTML 锚。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-big" target="_blank">big()</a></td>
<td style="text-align:center">用大号字体显示字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-blink" target="_blank">blink()</a></td>
<td style="text-align:center">显示闪动字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-bold" target="_blank">bold()</a></td>
<td style="text-align:center">使用粗体显示字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-fixed" target="_blank">fixed()</a></td>
<td style="text-align:center">以打字机文本显示字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-fontcolor" target="_blank">fontcolor()</a></td>
<td style="text-align:center">使用指定的颜色来显示字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-fontsize" target="_blank">fontsize()</a></td>
<td style="text-align:center">使用指定的尺寸来显示字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-italics" target="_blank">italics()</a></td>
<td style="text-align:center">使用斜体显示字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-link" target="_blank">link()</a></td>
<td style="text-align:center">将字符串显示为链接。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-small" target="_blank">small()</a></td>
<td style="text-align:center">使用小字号来显示字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-strike" target="_blank">strike()</a></td>
<td style="text-align:center">用于显示加删除线的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-sub" target="_blank">sub()</a></td>
<td style="text-align:center">把字符串显示为下标。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-sup" target="_blank">sup()</a></td>
<td style="text-align:center">把字符串显示为上标。</td>
</tr>
</tbody>
</table>
<h2>Boolean</h2>
<p>true，false</p>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_constructor_boolean.asp" target="_blank">constructor</a></td>
<td style="text-align:center">返回对创建此对象的 Boolean 函数的引用</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_prototype_boolean.asp" target="_blank">prototype</a></td>
<td style="text-align:center">使您有能力向对象添加属性和方法。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp" target="_blank">toSource()</a></td>
<td style="text-align:center">返回该对象的源代码。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toString_boolean.asp" target="_blank">toString()</a></td>
<td style="text-align:center">把逻辑值转换为字符串，并返回结果。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_valueOf_boolean.asp" target="_blank">valueOf()</a></td>
<td style="text-align:center">返回 Boolean 对象的原始值。</td>
</tr>
</tbody>
</table>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">Boolean(undefined) // false
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

</code></pre>
<h2>Array</h2>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">var arr = [1, 2, 3.14, 'Hello', null, true];  // 推荐
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

</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_constructor_array.asp" target="_blank">constructor</a></td>
<td style="text-align:center">返回对创建此对象的数组函数的引用。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_length_array.asp" target="_blank">length</a></td>
<td style="text-align:center">设置或返回数组中元素的数目。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_prototype_array.asp" target="_blank">prototype</a></td>
<td style="text-align:center">使您有能力向对象添加属性和方法。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-concat-array" target="_blank">concat()</a></td>
<td style="text-align:center">连接两个或更多的数组，并返回结果。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-copywithin" target="_blank">copyWithin()</a></td>
<td style="text-align:center">从数组的指定位置拷贝元素到数组的另一个指定位置中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-entries" target="_blank">entries()</a></td>
<td style="text-align:center">返回数组的可迭代对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-every" target="_blank">every()</a></td>
<td style="text-align:center">检测数值元素的每个元素是否都符合条件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-fill" target="_blank">fill()</a></td>
<td style="text-align:center">使用一个固定值来填充数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-filter" target="_blank">filter()</a></td>
<td style="text-align:center">检测数值元素，并返回符合条件所有元素的数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-find" target="_blank">find()</a></td>
<td style="text-align:center">返回符合传入测试（函数）条件的数组元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-findindex" target="_blank">findIndex()</a></td>
<td style="text-align:center">返回符合传入测试（函数）条件的数组元素索引。</td>
</tr>
<tr>
<td style="text-align:center">flat()</td>
<td style="text-align:center">将嵌套的数组“拉平”，变成一维的数组</td>
</tr>
<tr>
<td style="text-align:center">flatMap()</td>
<td style="text-align:center">对原数组的每个成员执行一个函数</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-foreach" target="_blank">forEach()</a></td>
<td style="text-align:center">数组每个元素都执行一次回调函数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-from" target="_blank">from()</a></td>
<td style="text-align:center">通过给定的对象中创建一个数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-includes" target="_blank">includes()</a></td>
<td style="text-align:center">判断一个数组是否包含一个指定的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-indexof-array" target="_blank">indexOf()</a></td>
<td style="text-align:center">搜索数组中的元素，并返回它所在的位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-isarray" target="_blank">isArray()</a></td>
<td style="text-align:center">判断对象是否为数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-join" target="_blank">join()</a></td>
<td style="text-align:center">把数组的所有元素放入一个字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-keys" target="_blank">keys()</a></td>
<td style="text-align:center">返回数组的可迭代对象，包含原始数组的键(key)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-lastindexof-array" target="_blank">lastIndexOf()</a></td>
<td style="text-align:center">搜索数组中的元素，并返回它最后出现的位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-map" target="_blank">map()</a></td>
<td style="text-align:center">通过指定函数处理数组的每个元素，并返回处理后的数组。</td>
</tr>
<tr>
<td style="text-align:center">of()</td>
<td style="text-align:center">将一组值，转换为数组</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-pop" target="_blank">pop()</a></td>
<td style="text-align:center">删除数组的最后一个元素并返回删除的元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-push" target="_blank">push()</a></td>
<td style="text-align:center">向数组的末尾添加一个或更多元素，并返回新的长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-reduce" target="_blank">reduce()</a></td>
<td style="text-align:center">将数组元素计算为一个值（从左到右）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-reduceright" target="_blank">reduceRight()</a></td>
<td style="text-align:center">将数组元素计算为一个值（从右到左）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-reverse" target="_blank">reverse()</a></td>
<td style="text-align:center">反转数组的元素顺序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-shift" target="_blank">shift()</a></td>
<td style="text-align:center">删除并返回数组的第一个元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-slice-array" target="_blank">slice()</a></td>
<td style="text-align:center">选取数组的一部分，并返回一个新数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-some" target="_blank">some()</a></td>
<td style="text-align:center">检测数组元素中是否有元素符合指定条件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-sort" target="_blank">sort()</a></td>
<td style="text-align:center">对数组的元素进行排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-splice" target="_blank">splice()</a></td>
<td style="text-align:center">从数组中添加或删除元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-tostring-array" target="_blank">toString()</a></td>
<td style="text-align:center">把数组转换为字符串，并返回结果。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-unshift" target="_blank">unshift()</a></td>
<td style="text-align:center">向数组的开头添加一个或更多元素，并返回新的长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_jsref_jsref-valueof-array" target="_blank">valueOf()</a></td>
<td style="text-align:center">返回数组对象的原始值。</td>
</tr>
</tbody>
</table>
<p>排序示例</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let origin = [...];
let list = origin.slice(0);
list.sort((x,y)=&gt;{return x[0]!=y[0]?x[0]-y[0]:x[1]&gt;y[1]?1:-1;});
console.log( origin.toString()==list.toString() );

</code></pre>
<p>array.forEach(function(currentValue [, index, arr]) [, thisValue])</p>
<h2>Date</h2>
<p>以国际标准时间（UTC）1970年1月1日00:00:00作为时间的零点，可以表示的时间范围是前后各1亿天（单位为毫秒）</p>
<p>Date对象月份值从0开始</p>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_constructor_date.asp" target="_blank">constructor</a></td>
<td style="text-align:center">返回对创建此对象的 Date 函数的引用。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_prototype_date.asp" target="_blank">prototype</a></td>
<td style="text-align:center">使您有能力向对象添加属性和方法。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_Date.asp" target="_blank">Date()</a></td>
<td style="text-align:center">返回当日的日期和时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getDate.asp" target="_blank">getDate()</a></td>
<td style="text-align:center">从 Date 对象返回一个月中的某一天 (1 ~ 31)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getDay.asp" target="_blank">getDay()</a></td>
<td style="text-align:center">从 Date 对象返回一周中的某一天 (0 ~ 6)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getMonth.asp" target="_blank">getMonth()</a></td>
<td style="text-align:center">从 Date 对象返回月份 (0 ~ 11)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getFullYear.asp" target="_blank">getFullYear()</a></td>
<td style="text-align:center">从 Date 对象以四位数字返回年份。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getHours.asp" target="_blank">getHours()</a></td>
<td style="text-align:center">返回 Date 对象的小时 (0 ~ 23)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getMinutes.asp" target="_blank">getMinutes()</a></td>
<td style="text-align:center">返回 Date 对象的分钟 (0 ~ 59)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getSeconds.asp" target="_blank">getSeconds()</a></td>
<td style="text-align:center">返回 Date 对象的秒数 (0 ~ 59)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp" target="_blank">getMilliseconds()</a></td>
<td style="text-align:center">返回 Date 对象的毫秒(0 ~ 999)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getTime.asp" target="_blank">getTime()</a></td>
<td style="text-align:center">返回 1970 年 1 月 1 日至今的毫秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp" target="_blank">getTimezoneOffset()</a></td>
<td style="text-align:center">返回本地时间与格林威治标准时间 (GMT) 的分钟差。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getUTCDate.asp" target="_blank">getUTCDate()</a></td>
<td style="text-align:center">根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getUTCDay.asp" target="_blank">getUTCDay()</a></td>
<td style="text-align:center">根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getUTCMonth.asp" target="_blank">getUTCMonth()</a></td>
<td style="text-align:center">根据世界时从 Date 对象返回月份 (0 ~ 11)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getUTCFullYear.asp" target="_blank">getUTCFullYear()</a></td>
<td style="text-align:center">根据世界时从 Date 对象返回四位数的年份。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getUTCHours.asp" target="_blank">getUTCHours()</a></td>
<td style="text-align:center">根据世界时返回 Date 对象的小时 (0 ~ 23)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getUTCMinutes.asp" target="_blank">getUTCMinutes()</a></td>
<td style="text-align:center">根据世界时返回 Date 对象的分钟 (0 ~ 59)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getUTCSeconds.asp" target="_blank">getUTCSeconds()</a></td>
<td style="text-align:center">根据世界时返回 Date 对象的秒钟 (0 ~ 59)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getUTCMilliseconds.asp" target="_blank">getUTCMilliseconds()</a></td>
<td style="text-align:center">根据世界时返回 Date 对象的毫秒(0 ~ 999)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_parse.asp" target="_blank">parse()</a></td>
<td style="text-align:center">返回1970年1月1日午夜到指定日期（字符串）的毫秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setDate.asp" target="_blank">setDate()</a></td>
<td style="text-align:center">设置 Date 对象中月的某一天 (1 ~ 31)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setMonth.asp" target="_blank">setMonth()</a></td>
<td style="text-align:center">设置 Date 对象中月份 (0 ~ 11)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setFullYear.asp" target="_blank">setFullYear()</a></td>
<td style="text-align:center">设置 Date 对象中的年份（四位数字）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setHours.asp" target="_blank">setHours()</a></td>
<td style="text-align:center">设置 Date 对象中的小时 (0 ~ 23)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setMinutes.asp" target="_blank">setMinutes()</a></td>
<td style="text-align:center">设置 Date 对象中的分钟 (0 ~ 59)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setSeconds.asp" target="_blank">setSeconds()</a></td>
<td style="text-align:center">设置 Date 对象中的秒钟 (0 ~ 59)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp" target="_blank">setMilliseconds()</a></td>
<td style="text-align:center">设置 Date 对象中的毫秒 (0 ~ 999)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setTime.asp" target="_blank">setTime()</a></td>
<td style="text-align:center">以毫秒设置 Date 对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setUTCDate.asp" target="_blank">setUTCDate()</a></td>
<td style="text-align:center">根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setUTCMonth.asp" target="_blank">setUTCMonth()</a></td>
<td style="text-align:center">根据世界时设置 Date 对象中的月份 (0 ~ 11)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setUTCFullYear.asp" target="_blank">setUTCFullYear()</a></td>
<td style="text-align:center">根据世界时设置 Date 对象中的年份（四位数字）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setutchours.asp" target="_blank">setUTCHours()</a></td>
<td style="text-align:center">根据世界时设置 Date 对象中的小时 (0 ~ 23)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setUTCMinutes.asp" target="_blank">setUTCMinutes()</a></td>
<td style="text-align:center">根据世界时设置 Date 对象中的分钟 (0 ~ 59)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setUTCSeconds.asp" target="_blank">setUTCSeconds()</a></td>
<td style="text-align:center">根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_setUTCMilliseconds.asp" target="_blank">setUTCMilliseconds()</a></td>
<td style="text-align:center">根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp" target="_blank">toSource()</a></td>
<td style="text-align:center">返回该对象的源代码。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toString_date.asp" target="_blank">toString()</a></td>
<td style="text-align:center">把 Date 对象转换为字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toTimeString.asp" target="_blank">toTimeString()</a></td>
<td style="text-align:center">把 Date 对象的时间部分转换为字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toDateString.asp" target="_blank">toDateString()</a></td>
<td style="text-align:center">把 Date 对象的日期部分转换为字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toUTCString.asp" target="_blank">toUTCString()</a></td>
<td style="text-align:center">根据世界时，把 Date 对象转换为字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toLocaleString.asp" target="_blank">toLocaleString()</a></td>
<td style="text-align:center">根据本地时间格式，把 Date 对象转换为字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp" target="_blank">toLocaleTimeString()</a></td>
<td style="text-align:center">根据本地时间格式，把 Date 对象的时间部分转换为字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp" target="_blank">toLocaleDateString()</a></td>
<td style="text-align:center">根据本地时间格式，把 Date 对象的日期部分转换为字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_utc.asp" target="_blank">UTC()</a></td>
<td style="text-align:center">根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_valueOf_date.asp" target="_blank">valueOf()</a></td>
<td style="text-align:center">返回 Date 对象的原始值。</td>
</tr>
</tbody>
</table>
<h2>RegExp</h2>
<ul>
<li>
<p>直接量语法：/pattern/flags</p>
</li>
<li>
<p>创建 RegExp 对象的语法：new RegExp(pattern, flags);</p>
</li>
</ul>
<p>pattern ：一个字符串，指定了正则表达式的模式或其他正则表达式。</p>
<p>flags ：一个可选的字符串，包含修饰符</p>
<table>
<thead>
<tr>
<th style="text-align:center">修饰符</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_regexp_i.asp" target="_blank">i</a></td>
<td style="text-align:center">不区分大小写搜索</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_regexp_g.asp" target="_blank">g</a></td>
<td style="text-align:center">全局搜索</td>
</tr>
<tr>
<td style="text-align:center">m</td>
<td style="text-align:center">多行搜索</td>
</tr>
<tr>
<td style="text-align:center">u</td>
<td style="text-align:center">Unicode 模式，用来正确处理大于\uFFFF的 Unicode 字符</td>
</tr>
<tr>
<td style="text-align:center">y</td>
<td style="text-align:center">粘连”（sticky）修饰符</td>
</tr>
<tr>
<td style="text-align:center">s</td>
<td style="text-align:center">允许 . 匹配换行符</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_regexp_global.asp" target="_blank">global</a></td>
<td style="text-align:center">RegExp 对象是否具有标志 g。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_regexp_ignorecase.asp" target="_blank">ignoreCase</a></td>
<td style="text-align:center">RegExp 对象是否具有标志 i。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_lastindex_regexp.asp" target="_blank">lastIndex</a></td>
<td style="text-align:center">一个整数，标示开始下一次匹配的字符位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_multiline_regexp.asp" target="_blank">multiline</a></td>
<td style="text-align:center">RegExp 对象是否具有标志 m。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_source_regexp.asp" target="_blank">source</a></td>
<td style="text-align:center">正则表达式的源文本。</td>
</tr>
<tr>
<td style="text-align:center">flags</td>
<td style="text-align:center">包含了已经设置的所有修饰符，按字母排序</td>
</tr>
<tr>
<td style="text-align:center">unicode</td>
<td style="text-align:center">是否设置了u修饰符</td>
</tr>
<tr>
<td style="text-align:center">sticky</td>
<td style="text-align:center">是否设置了y修饰符</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" target="_blank">exec</a></td>
<td style="text-align:center">查找匹配的RegExp方法，返回一个数组（未匹配到则返回 null）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" target="_blank">test</a></td>
<td style="text-align:center">测试是否匹配的RegExp方法，返回 true 或 false。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" target="_blank">match</a></td>
<td style="text-align:center">一个在字符串中执行查找匹配的String方法，它返回一个数组或 null</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll" target="_blank">matchAll</a></td>
<td style="text-align:center">查找所有匹配的String方法，返回一个迭代器（iterator）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search" target="_blank">search</a></td>
<td style="text-align:center">一个在字符串中测试匹配的String方法，返回匹配到的位置索引，或-1。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">replace</a></td>
<td style="text-align:center">使用替换字符串替换掉匹配到的子字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">split</a></td>
<td style="text-align:center">分隔一个字符串</td>
</tr>
</tbody>
</table>
<p>具名组匹配（Named Capture Groups）</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const RE_DATE = /(?&lt;year&gt;\d{4})-(?&lt;month&gt;\d{2})-(?&lt;day&gt;\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31

let re = /(?&lt;year&gt;\d{4})-(?&lt;month&gt;\d{2})-(?&lt;day&gt;\d{2})/u;
'2015-01-02'.replace(re, '$&lt;day&gt;/$&lt;month&gt;/$&lt;year&gt;')
// '02/01/2015'

// 在正则表达式内部引用某个“具名组匹配”  使用\k&lt;组名&gt;
const RE_TWICE = /^(?&lt;word&gt;[a-z]+)!\k&lt;word&gt;!\1$/;
RE_TWICE.test('abc!abc!abc') // true
RE_TWICE.test('abc!abc!ab') // false

</code></pre>
<p>\p{...} \P{...}	匹配符合 Unicode 某种属性的所有字符</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 匹配所有空格
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

</code></pre>
<h2>Object</h2>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">var obj = {}  // 推荐
var obj = new Object()

function isObject(value) {
  return value === Object(value);    // Object()函数
}

isObject([]) // true
isObject(true) // false

</code></pre>
<p><strong>属性描述对象（attributes object）</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">{
  value: undefined,	属性值
  writable: true,		否可写
  enumerable: true,	是否可遍历
  configurable: true,	可配置性
  get: undefined,		属性的取值函数（getter）
  set: undefined		属性的存值函数（setter）
}

</code></pre>
<p><strong>静态方法</strong></p>
<ul>
<li>
<p>遍历对象的属性</p>
</li>
<li>
<p>Object.keys()	返回可枚举的自身的（而不是继承的）所有属性名</p>
</li>
<li>
<p>Object.getOwnPropertyNames()	返回所有自身的（而不是继承的）属性名</p>
</li>
<li>
<p>Object.values()：返回对象自身的（不含继承的）所有可遍历（enumerable）属性的键值</p>
</li>
<li>
<p>Object.entries()：返回对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。</p>
</li>
<li>
<p>Object.fromEntries()：Object.entries()的逆操作，用于将一个键值对数组转为对象</p>
</li>
<li>
<p>对象属性模型的方法</p>
</li>
<li>
<p>Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。</p>
</li>
<li>
<p>Object.getOwnPropertyDescriptors()：返回指定对象所有自身属性（非继承属性）的描述对象</p>
</li>
<li>
<p>Object.defineProperty(object, propertyName, attributesObject)：通过描述对象，定义某个属性。</p>
</li>
<li>
<p>Object.defineProperties()：通过描述对象，定义多个属性。</p>
</li>
<li>
<p>控制对象状态的方法</p>
</li>
<li>
<p>Object.preventExtensions()：防止对象扩展，使对象无法再添加新的属性</p>
</li>
<li>
<p>Object.isExtensible()：判断对象是否可扩展。</p>
</li>
<li>
<p>Object.seal()：禁止对象配置。使对象既无法添加新属性，也无法删除旧属性。实质是把属性的configurable设为false</p>
</li>
<li>
<p>Object.isSealed()：判断一个对象是否可配置。</p>
</li>
<li>
<p>Object.freeze()：冻结一个对象。使对象无法添加或删除属性、也无法改变属性的值，对象实际上变成了常量。</p>
</li>
<li>
<p>Object.isFrozen()：判断一个对象是否被冻结。</p>
</li>
</ul>
<p>方法局限性</p>
<p>可以通过改变原型对象，来为对象增加属性。</p>
<p>只能冻结属性指向的对象，而不能冻结对象本身的内容</p>
<ul>
<li>
<p>原型链相关方法</p>
</li>
<li>
<p>Object.create()：指定原型对象和属性，返回一个新的对象。</p>
</li>
<li>
<p>Object.getPrototypeOf()：获取对象的Prototype对象。</p>
</li>
<li>
<p>Object.setPrototypeOf(a, b)	将对象a的原型，设置为对象b</p>
</li>
<li>
<p>Object.is()：比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致</p>
</li>
<li>
<p>Object.assign()：对象合并，将源对象（source）的所有可枚举属性，复制（浅拷贝，同名属性的替换）到目标对象（target）</p>
</li>
</ul>
<p><strong>实例方法	</strong>定义在Object原型对象Object.prototype上的方法</p>
<ul>
<li>
<p>Object.prototype.valueOf()：返回当前对象对应的值。</p>
</li>
<li>
<p>Object.prototype.toString()：返回当前对象对应的字符串形式。</p>
</li>
<li>
<p>Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。</p>
</li>
<li>
<p>Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。</p>
</li>
<li>
<p>Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。</p>
</li>
<li>
<p>Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。</p>
</li>
<li>
<p>Object.prototype.<strong>proto</strong>：用来读取或设置当前对象的原型对象（prototype），浏览器特有</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">+0 === -0 //true
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

</code></pre>
<p><strong>存取器（accessor）</strong></p>
<p>取值函数get不能接受参数，存值函数set只能接受一个参数</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 写法一：属性p的configurable和enumerable都为false
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

</code></pre>
<p>原型链”（prototype chain）：对象到原型，再到原型的原型……</p>
<p>Object.prototype  --&gt;  null</p>
<p>prototype</p>
<p>constructor：默认指向prototype对象所在的构造函数。</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function P() {}
var p = new P();

p.constructor === P // true
p.constructor === P.prototype.constructor // true
p.hasOwnProperty('constructor') // false

</code></pre>
<h1>OOP</h1>
<p>构造函数</p>
<ul>
<li>
<p>函数内使用了this关键字，代表了所要生成的对象实例。</p>
</li>
<li>
<p>生成对象须使用new命令。</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function Student(name, grade) {
    this.name = name;
    this.grade = grade || 0; // 默认值为0
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    };
}

var s = new Student('jack');

//为对象构造器添加新属性
Student.prototype.nationality = "English";

</code></pre>
<p>如果构造函数内部有return语句，且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，返回this对象。</p>
<p><strong>new 命令的原理</strong></p>
<ol>
<li>
<p>创建一个空对象，作为将要返回的对象实例。</p>
</li>
<li>
<p>将这个空对象的原型，指向构造函数的prototype属性。</p>
</li>
<li>
<p>将这个空对象赋值给函数内部的this关键字。</p>
</li>
<li>
<p>开始执行构造函数内部的代码。</p>
</li>
</ol>
<p>new.target	如果当前函数是new命令调用，new.target指向当前函数，否则为undefined</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function f() {
  if (!new.target) {
    throw new Error('请使用 new 命令调用！');
  }
  // ...
}

f() // Uncaught Error: 请使用 new 命令调用！

</code></pre>
<p>创建对象</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">birth = 1990;

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

</code></pre>
<p>访问属性</p>
<ul>
<li>
<p>objectName.property           // person.age</p>
</li>
<li>
<p>objectName["property"]       // person["age"]</p>
</li>
<li>
<p>objectName[expression]       // x = "age"; person[x]</p>
</li>
</ul>
<p>访问属性方法没有使用 ()，则将返回其定义</p>
<p>对象的拷贝</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">var extend = function (to, from) {
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

</code></pre>
<h2>class</h2>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">class Point {
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

</code></pre>
<h2>继承</h2>
<p><strong>自定义原型继承</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

</code></pre>
<p>class继承</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">class Foo {
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

</code></pre>
<p>JavaScript 属性值的继承是在运行时通过检索对象的原型链来实现的。因为对象只有一个原型与之关联，所以 JavaScript 无法动态地从多个原型链中继承。</p>
<p><strong>Mixin（混入）</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function M1() {
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

</code></pre>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function mix(...mixins) {
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
      &amp;&amp; key !== 'prototype'
      &amp;&amp; key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}


class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}

</code></pre>
<p><strong>singleton</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 类实现
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

</code></pre>
<h1>流程控制</h1>
<ul>
<li>
<p>if - else</p>
</li>
<li>
<p>switch {case}</p>
</li>
<li>
<p>while  |  do···while</p>
</li>
<li>
<p>for ([initialExpression]; [condition]; [incrementExpression])</p>
</li>
<li>
<p>for (variable in object)	循环一个对象所有可枚举的属性</p>
</li>
<li>
<p>for (variable of object)    （遍历iterable类型的集合）</p>
</li>
<li>
<p>break | continue [label]</p>
</li>
<li>
<p>with (对象) {语句;}</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">var obj = {
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

</code></pre>
<h2><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank">解构（Destructuring）赋值</a></h2>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let [x, , y] = [1, 2, 3];
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
const copy = { ...original, c: 3 }; // copy =&gt; { a: 1, b: 2, c: 3 }
// rest 赋值运算符
const { a, ...noA } = copy; // noA =&gt; { b: 2, c: 3 }

// 给新的变量名赋值
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

// 给新的变量命名并提供默认值
var {a:aa = 10, b:bb = 5} = {a: 3};

</code></pre>
<p>只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">//fibs是一个 Generator 函数，原生具有 Iterator 接口
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

</code></pre>
<h1>异常</h1>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">try {
     供测试的代码块
     throw expression; // 抛出异常
}
[catch [e] {
     处理错误的代码块
} 
finally {
     无论 try / catch 结果如何都执行的代码块
}] 

</code></pre>
<p><strong>Error 对象属性</strong></p>
<ul>
<li>
<p>name	设置或返回错误名</p>
</li>
<li>
<p>message	设置或返回错误消息（一条字符串）</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">错误名</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">EvalError</td>
<td style="text-align:center">已在 eval() 函数中发生的错误</td>
</tr>
<tr>
<td style="text-align:center">RangeError</td>
<td style="text-align:center">已发生超出数字范围的错误</td>
</tr>
<tr>
<td style="text-align:center">ReferenceError</td>
<td style="text-align:center">已发生非法引用</td>
</tr>
<tr>
<td style="text-align:center">SyntaxError</td>
<td style="text-align:center">已发生语法错误</td>
</tr>
<tr>
<td style="text-align:center">TypeError</td>
<td style="text-align:center">已发生类型错误</td>
</tr>
<tr>
<td style="text-align:center">URIError</td>
<td style="text-align:center">在 encodeURI() 中已发生的错误</td>
</tr>
</tbody>
</table>
<p>自定义错误</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;


new UserError('这是自定义的错误！');

</code></pre>
<h1>Function</h1>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 函数声明（Function Declaration）
function [functionName](parameters) {
   //Code
}

// 函数表达式（Function Expression）
[var | let] functionName = function (parameters) {
   //Code
}

</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">属性/方法</th>
<th style="text-align:center"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">name</td>
<td style="text-align:center">函数名</td>
</tr>
<tr>
<td style="text-align:center">length</td>
<td style="text-align:center">没有指定默认值的参数个数</td>
</tr>
<tr>
<td style="text-align:center">toString()</td>
<td style="text-align:center">返回一个字符串，内容是函数的源码</td>
</tr>
<tr>
<td style="text-align:center">arguments</td>
<td style="text-align:center">调用时函数的参数</td>
</tr>
<tr>
<td style="text-align:center">caller</td>
<td style="text-align:center">调用当前函数的那个函数</td>
</tr>
</tbody>
</table>
<p>关键字arguments，它只在函数内部起作用，并且指向当前函数的调用者传入的所有参数。</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    var i, sum = 0;
    for (i = 0; i &lt; arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

</code></pre>
<p>默认参数</p>
<p><strong>可变参数</strong></p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">function foo(a, b, ...rest) {
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

</code></pre>
<h2>绑定 this</h2>
<p>指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数</p>
<ul>
<li>
<p>Function.prototype.call(thisValue, arg1, arg2, ...)：方法分别接受参数。</p>
</li>
<li>
<p>Function.prototype.apply(thisValue, [arg1, arg2, ...])： 方法接受数组形式的参数。</p>
</li>
<li>
<p>Function.prototype.bind() ：将函数体内的this绑定到某个对象，然后返回一个新函数</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">var counter = {
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

</code></pre>
<p><strong>自调用函数</strong></p>
<p>立即调用的函数表达式（Immediately-Invoked Function Expression，IIFE）</p>
<p>圆括号()是一种运算符，跟在函数名之后，表示调用该函数</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">(function () {
    var x = "Hello!!";      //调用自身
})();

</code></pre>
<h2>闭包（closure）</h2>
<p>有权访问父作用域的函数，即使在父函数关闭之后</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();    // 计数器目前是 3 

</code></pre>
<h2>Arrow Function（箭头函数）</h2>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const x = (x, y) =&gt; { return x * y };  
// const x = (x, y) =&gt; x * y    如果函数是单个语句，则只能省略 return 关键字和大括号。

</code></pre>
<p>PS</p>
<ul>
<li>
<p>函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。</p>
</li>
<li>
<p>不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。</p>
</li>
<li>
<p>不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。</p>
</li>
<li>
<p>不可以使用yield命令</p>
</li>
</ul>
<h2>Iterator</h2>
<p>必须暴露一个属性作为“默认迭代器”，且使用特殊的 Symbol.iterator 作为键。这个默认迭代器属性必须引用一个迭代器工厂函数，调用这个工厂函数必须返回一个新迭代器。</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let num = 1;
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

</code></pre>
<p>实现可迭代接口（Iterable）</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">class Counter {
    constructor(limit) {
        this.limit = limit;
    }
    [Symbol.iterator]() {
        let count = 1,
            limit = this.limit;
        return {
            next() {
                if (count &lt;= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true, value: undefined };
                }
            }
        };
    }
}

</code></pre>
<h2>Generator</h2>
<p>function关键字与函数名之间有一个星号</p>
<p>函数体内部使用yield表达式，定义不同的内部状态</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">gen = function* () {
  yield 1;
  yield 2;
  yield 3;
}

var myIterable = {};
myIterable[Symbol.iterator] = gen;
[...myIterable] // [1, 2, 3]

</code></pre>
<p>Generator.prototype.return()	返回给定的值，并且终结遍历 Generator 函数</p>
<p>async函数：将 Generator 函数的星号（*）替换成async，将yield替换成await</p>
<ul>
<li>
<p>返回一个 Promise 对象。</p>
</li>
<li>
<p>内部return语句返回的值，会成为then方法回调函数的参数。</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 指定 50 毫秒以后，输出hello world
function timeout(ms) {
  return new Promise((resolve) =&gt; {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);

</code></pre>
<ul>
<li>for await...of</li>
</ul>
<h2>Math</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_e.asp" target="_blank">E</a></td>
<td style="text-align:center">返回算术常量 e，即自然对数的底数（约等于2.718）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_ln2.asp" target="_blank">LN2</a></td>
<td style="text-align:center">返回 2 的自然对数（约等于0.693）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_ln10.asp" target="_blank">LN10</a></td>
<td style="text-align:center">返回 10 的自然对数（约等于2.302）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_log2e.asp" target="_blank">LOG2E</a></td>
<td style="text-align:center">返回以 2 为底的 e 的对数（约等于 1.414）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_log10e.asp" target="_blank">LOG10E</a></td>
<td style="text-align:center">返回以 10 为底的 e 的对数（约等于0.434）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_pi.asp" target="_blank">PI</a></td>
<td style="text-align:center">返回圆周率（约等于3.14159）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp" target="_blank">SQRT1_2</a></td>
<td style="text-align:center">返回返回 2 的平方根的倒数（约等于 0.707）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_sqrt2.asp" target="_blank">SQRT2</a></td>
<td style="text-align:center">返回 2 的平方根（约等于 1.414）。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs" target="_blank">abs()</a></td>
<td style="text-align:center">绝对值</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin" target="_blank">sin(),</a> cos(), tan()</td>
<td style="text-align:center">标准三角函数;参数为弧度</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asin" target="_blank">asin(),</a> acos(), atan(), atan2()</td>
<td style="text-align:center">反三角函数; 返回值为弧度</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh" target="_blank">sinh(),</a> cosh(), tanh()</td>
<td style="text-align:center">双曲三角函数; 参数为弧度.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh" target="_blank">asinh(),</a> acosh(), atanh()</td>
<td style="text-align:center">反双曲三角函数;返回值为弧度.</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow" target="_blank">pow(),</a> exp(), expm1(), log10(), log1p(), log2()</td>
<td style="text-align:center">指数与对数函数</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" target="_blank">floor(),</a> ceil()</td>
<td style="text-align:center">返回小于等于参数的最大整数；返回大于等于参数的最小整数</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank">min(),</a> max()</td>
<td style="text-align:center">返回一个以逗号间隔的数字参数列表中的较小或较大值(分别地)</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank">random()</a></td>
<td style="text-align:center">返回0和1之间的随机数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">round(),</a> fround(), trunc(),</td>
<td style="text-align:center">四舍五入和截断函数</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt" target="_blank">sqrt(),</a> cbrt(), hypot()</td>
<td style="text-align:center">平方根，立方根，所有参数平方和的平方根  两个参数平方和的平方根</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sign" target="_blank">sign()</a></td>
<td style="text-align:center">数字的符号, 说明数字是否为正、负、零。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32" target="_blank">clz32(),</a> imul()</td>
<td style="text-align:center">在32位2进制表示中，开头的0的数量. 返回传入的两个参数相乘结果的类C的32位表现形式</td>
</tr>
</tbody>
</table>
<h2>顶层函数（全局函数）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_decodeURI.asp" target="_blank">decodeURI()</a></td>
<td style="text-align:center">解码某个编码的 URI。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_decodeURIComponent.asp" target="_blank">decodeURIComponent()</a></td>
<td style="text-align:center">解码一个编码的 URI 组件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_encodeuri.asp" target="_blank">encodeURI()</a></td>
<td style="text-align:center">把字符串编码为 URI。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_encodeURIComponent.asp" target="_blank">encodeURIComponent()</a></td>
<td style="text-align:center">把字符串编码为 URI 组件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_escape.asp" target="_blank">escape()</a></td>
<td style="text-align:center">对字符串进行编码。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_eval.asp" target="_blank">eval()</a></td>
<td style="text-align:center">计算 JavaScript 字符串，并把它作为脚本代码来执行。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/uneval" target="_blank">uneval()</a></td>
<td style="text-align:center">创建的一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">Object的</a>源代码的字符串表示</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_getClass.asp" target="_blank">getClass()</a></td>
<td style="text-align:center">返回一个 JavaObject 的 JavaClass。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_isFinite.asp" target="_blank">isFinite()</a></td>
<td style="text-align:center">检查某个值是否为有穷大的数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_isNaN.asp" target="_blank">isNaN()</a></td>
<td style="text-align:center">检查某个值是否是数字。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_number.asp" target="_blank">Number()</a></td>
<td style="text-align:center">把对象的值转换为数字。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_parseFloat.asp" target="_blank">parseFloat()</a></td>
<td style="text-align:center">解析一个字符串并返回一个浮点数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_parseInt.asp" target="_blank">parseInt()</a></td>
<td style="text-align:center">解析一个字符串并返回一个整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_string.asp" target="_blank">String()</a></td>
<td style="text-align:center">把对象的值转换为字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_unescape.asp" target="_blank">unescape()</a></td>
<td style="text-align:center">对由 escape() 编码的字符串进行解码。</td>
</tr>
</tbody>
</table>
<h2>顶层属性（全局属性）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_infinity.asp" target="_blank">Infinity</a></td>
<td style="text-align:center">代表正的无穷大的数值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_java.asp" target="_blank">java</a></td>
<td style="text-align:center">代表 java.* 包层级的一个 JavaPackage。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_nan.asp" target="_blank">NaN</a></td>
<td style="text-align:center">指示某个值是不是数字值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_Packages.asp" target="_blank">Packages</a></td>
<td style="text-align:center">根 JavaPackage 对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/jsref/jsref_undefined.asp" target="_blank">undefined</a></td>
<td style="text-align:center">指示未定义的值。</td>
</tr>
</tbody>
</table>
<h2>console</h2>
<table>
<thead>
<tr>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">assert()</td>
<td style="text-align:center">第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。</td>
</tr>
<tr>
<td style="text-align:center">clear()</td>
<td style="text-align:center">清除当前控制台的所有输出，将光标回置到第一行。</td>
</tr>
<tr>
<td style="text-align:center">count()</td>
<td style="text-align:center">用于计数，输出它被调用了多少次。</td>
</tr>
<tr>
<td style="text-align:center">countReset()</td>
<td style="text-align:center">重置指定标签的计数器值</td>
</tr>
<tr>
<td style="text-align:center">debug()</td>
<td style="text-align:center">打印一条 "debug" 级别的消息</td>
</tr>
<tr>
<td style="text-align:center">dir()</td>
<td style="text-align:center">显示一个由特定的 Javascript 对象列表组成的可交互列表</td>
</tr>
<tr>
<td style="text-align:center">dirxml()</td>
<td style="text-align:center">打印 XML/HTML 元素表示的指定对象，否则显示 JavaScript 对象视图</td>
</tr>
<tr>
<td style="text-align:center">error()</td>
<td style="text-align:center">输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈。</td>
</tr>
<tr>
<td style="text-align:center">group()</td>
<td style="text-align:center">用于将显示的信息分组，可以把信息进行折叠和展开。</td>
</tr>
<tr>
<td style="text-align:center">groupCollapsed()</td>
<td style="text-align:center">与console.group方法很类似，唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的。</td>
</tr>
<tr>
<td style="text-align:center">groupEnd()</td>
<td style="text-align:center">结束内联分组</td>
</tr>
<tr>
<td style="text-align:center">info()</td>
<td style="text-align:center">console.log 别名，输出信息</td>
</tr>
<tr>
<td style="text-align:center">log()</td>
<td style="text-align:center">输出信息</td>
</tr>
<tr>
<td style="text-align:center">table()</td>
<td style="text-align:center">将复合类型的数据转为表格显示。</td>
</tr>
<tr>
<td style="text-align:center">time()</td>
<td style="text-align:center">计时开始</td>
</tr>
<tr>
<td style="text-align:center">timeEnd()</td>
<td style="text-align:center">计时结束</td>
</tr>
<tr>
<td style="text-align:center">trace()</td>
<td style="text-align:center">追踪函数的调用过程</td>
</tr>
<tr>
<td style="text-align:center">warn()</td>
<td style="text-align:center">输出警告信息</td>
</tr>
</tbody>
</table>
<h1>异步</h1>
<h2>定时器（Timer）</h2>
<p>向任务队列添加定时任务</p>
<ul>
<li>
<p>setTimeout(func|code, delay=0)：指定某个函数或某段代码，在多少毫秒之后执行。返回一个整数，表示定时器的编号，可用来取消这个定时器</p>
</li>
<li>
<p>setInterval（）：指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行</p>
</li>
</ul>
<p>——</p>
<ul>
<li>
<p>clearTimeout(TimerID)：取消对应的定时器</p>
</li>
<li>
<p>clearInterval(TimerID)</p>
</li>
</ul>
<h2>Promise</h2>
<p>起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

</code></pre>
<p>状态</p>
<ul>
<li>
<p>pending：初始的状态，即正在执行</p>
</li>
<li>
<p>fulfilled：成功的完成了操作。</p>
</li>
<li>
<p>rejected：失败，没有完成操作。</p>
</li>
<li>
<p>settled： fulfilled 或 rejected 二者中的任意一个状态</p>
</li>
</ul>
<p><strong>方法</strong></p>
<ul>
<li>
<p>Promise.prototype.then()：为 Promise 实例添加状态改变时的回调函数</p>
</li>
<li>
<p>Promise.prototype.catch()：指定发生错误时的回调函数</p>
</li>
<li>
<p>Promise.prototype.finally()</p>
</li>
<li>
<p>Promise.all()：将多个 Promise 实例，包装成一个新的 Promise 实例</p>
</li>
<li>
<p>Promise.race()</p>
</li>
<li>
<p>Promise.allSettled()</p>
</li>
<li>
<p>Promise.any()</p>
</li>
<li>
<p>Promise.resolve()</p>
</li>
<li>
<p>Promise.reject()</p>
</li>
<li>
<p>Promise.try()</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 传统写法
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

</code></pre>
<h1>Symbol</h1>
<p>ES6 引入了一种新的原始数据类型，表示独一无二的值。通过Symbol函数生成</p>
<p>可以显式转为字符串</p>
<p>Symbol.keyFor()：返回一个已登记的 Symbol 类型值的key</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">Symbol("bar") === Symbol("bar")
// false


Symbol.for("bar") === Symbol.for("bar")
// true


let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined

</code></pre>
<p><a href="https://wangdoc.com/es6/symbol.html#%E5%86%85%E7%BD%AE%E7%9A%84-symbol-%E5%80%BC" target="_blank">内置的 Symbol 值</a></p>
<ul>
<li>
<p>Symbol.hasInstance</p>
</li>
<li>
<p>Symbol.isConcatSpreadable	表示该对象用于Array.prototype.concat()时，是否可以展开</p>
</li>
<li>
<p>Symbol.species	指向一个构造函数。创建衍生对象时，会使用该属性</p>
</li>
<li>
<p>Symbol.match	当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值</p>
</li>
<li>
<p>Symbol.replace	当该对象被String.prototype.replace方法调用时，会返回该方法的返回值</p>
</li>
<li>
<p>Symbol.search</p>
</li>
<li>
<p>Symbol.split</p>
</li>
<li>
<p>Symbol.iterator	指向该对象的默认遍历器方法</p>
</li>
<li>
<p>Symbol.toPrimitive	对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值</p>
</li>
<li>
<p>Symbol.toStringTag</p>
</li>
<li>
<p>Symbol.unscopables	该对象指定了使用with关键字时，哪些属性会被with环境排除</p>
</li>
</ul>
<h1>Set</h1>
<ul>
<li>
<p>Set.prototype.constructor：构造函数，默认就是Set函数。</p>
</li>
<li>
<p>Set.prototype.size：返回Set实例的成员总数。</p>
</li>
</ul>
<p>——</p>
<ul>
<li>
<p>Set.prototype.add(value)：添加某个值，返回 Set 结构本身。</p>
</li>
<li>
<p>Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。</p>
</li>
<li>
<p>Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。</p>
</li>
<li>
<p>Set.prototype.clear()：清除所有成员，没有返回值。</p>
</li>
<li>
<p>Set.prototype.keys()：返回键名的遍历器</p>
</li>
<li>
<p>Set.prototype.values()：返回键值的遍历器</p>
</li>
<li>
<p>Set.prototype.entries()：返回键值对的遍历器</p>
</li>
<li>
<p>Set.prototype.forEach()：使用回调函数遍历每个成员</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
// 去除数组的重复成员
[...new Set(array)]

// 并集
let union = new Set([...a, ...b]);
// 交集
let intersect = new Set([...a].filter(x =&gt; b.has(x)));
// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x =&gt; !b.has(x)));

</code></pre>
<p><strong>WeakSet</strong></p>
<p>成员只能是对象（弱引用）</p>
<p>不能遍历</p>
<ul>
<li>
<p>WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。</p>
</li>
<li>
<p>WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。</p>
</li>
<li>
<p>WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。</p>
</li>
</ul>
<h1>Map</h1>
<ul>
<li>size 属性</li>
</ul>
<p>——</p>
<ul>
<li>
<p>Map.prototype.set(key, value)</p>
</li>
<li>
<p>Map.prototype.get(key)</p>
</li>
<li>
<p>Map.prototype.has(key)</p>
</li>
<li>
<p>Map.prototype.delete(key)</p>
</li>
<li>
<p>Map.prototype.clear()</p>
</li>
<li>
<p>Map.prototype.keys()：返回键名的遍历器。</p>
</li>
<li>
<p>Map.prototype.values()：返回键值的遍历器。</p>
</li>
<li>
<p>Map.prototype.entries()：返回所有成员的遍历器。</p>
</li>
<li>
<p>Map.prototype.forEach()：遍历 Map 的所有成员。</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">const map = new Map([
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

</code></pre>
<p><strong>WeakMap</strong></p>
<p>键所对应的对象，可能会在将来消失。有助于防止内存泄漏</p>
<p>method：get()、set()、has()、delete()</p>
<h1><a href="cs_web_https:_wangdoc.com_es6_proxy" target="_blank">Proxy</a></h1>
<p>用于修改某些操作的默认行为，对外界的访问进行过滤和改写，属于一种“元编程”（meta programming）</p>
<p><strong>new Proxy(target, handler)</strong></p>
<ul>
<li>
<p>get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。</p>
</li>
<li>
<p>set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。</p>
</li>
<li>
<p>has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。</p>
</li>
<li>
<p>deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。</p>
</li>
<li>
<p>ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。</p>
</li>
<li>
<p>getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。</p>
</li>
<li>
<p>defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。</p>
</li>
<li>
<p>preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。</p>
</li>
<li>
<p>getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。</p>
</li>
<li>
<p>isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。</p>
</li>
<li>
<p>setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。</p>
</li>
<li>
<p>apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。</p>
</li>
<li>
<p>construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。</p>
</li>
<li>
<p>Proxy.revocable()：返回一个可取消的 Proxy 实例</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">//只要读写的属性名的第一个字符是下划线，一律抛错，从而达到禁止读写内部属性的目的
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

</code></pre>
<h1><a href="cs_web_https:_wangdoc.com_es6_reflect" target="_blank">Reflect</a></h1>
<p>大部分与Object对象的同名方法的作用都是相同的，而且它与Proxy对象的方法是一一对应的</p>
<ul>
<li>
<p>Reflect.apply(target, thisArg, args)</p>
</li>
<li>
<p>Reflect.construct(target, args)</p>
</li>
<li>
<p>Reflect.get(target, name, receiver)</p>
</li>
<li>
<p>Reflect.set(target, name, value, receiver)</p>
</li>
<li>
<p>Reflect.defineProperty(target, name, desc)</p>
</li>
<li>
<p>Reflect.deleteProperty(target, name)</p>
</li>
<li>
<p>Reflect.has(target, name)</p>
</li>
<li>
<p>Reflect.ownKeys(target)</p>
</li>
<li>
<p>Reflect.isExtensible(target)</p>
</li>
<li>
<p>Reflect.preventExtensions(target)</p>
</li>
<li>
<p>Reflect.getOwnPropertyDescriptor(target, name)</p>
</li>
<li>
<p>Reflect.getPrototypeOf(target)</p>
</li>
<li>
<p>Reflect.setPrototypeOf(target, prototype)</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">/* 每一个Proxy对象的拦截操作（get、delete、has），内部都调用对应的Reflect方法，保证原生行为能够正常执行。
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

</code></pre>
<h1><a href="cs_web_https:_wangdoc.com_es6_module" target="_blank">Module</a></h1>
<p>export</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// profile.js

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

</code></pre>
<p>import</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// main.js

import { lastName as surname } from './profile.js';
import * from './profile.js';

import(specifier)    // 支持动态加载模块

</code></pre>
<h1>运算符</h1>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" target="_blank">赋值运算符(assignment operator)</a></p>
<table>
<thead>
<tr>
<th style="text-align:center">名字</th>
<th style="text-align:center">简写的操作符</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment" target="_blank">赋值(Assignment)</a></td>
<td style="text-align:center">x = y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment" target="_blank">加法赋值(Addition assignment)</a></td>
<td style="text-align:center">x += y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Subtraction_assignment" target="_blank">减法赋值(Subtraction assignment)</a></td>
<td style="text-align:center">x -= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Multiplication_assignment" target="_blank">乘法赋值(Multiplication assignment)</a></td>
<td style="text-align:center">x *= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Division_assignment" target="_blank">除法赋值(Division assignment)</a></td>
<td style="text-align:center">x /= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Remainder_assignment" target="_blank">求余赋值(Remainder assignment)</a></td>
<td style="text-align:center">x %= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Exponentiation_assignment" target="_blank">求幂赋值(Exponentiation assignment)</a></td>
<td style="text-align:center">x **= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Left_shift_assignment" target="_blank">左移位赋值(Left shift assignment)</a></td>
<td style="text-align:center">x &lt;&lt;= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Right_shift_assignment" target="_blank">右移位赋值(Right shift assignment)</a></td>
<td style="text-align:center">x &gt;&gt;= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Unsigned_right_shift_assignment" target="_blank">无符号右移位赋值(Unsigned right shift assignment)</a></td>
<td style="text-align:center">x &gt;&gt;&gt;= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_AND_assignment" target="_blank">按位与赋值(Bitwise AND assignment)</a></td>
<td style="text-align:center">x &amp;= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_XOR_assignment" target="_blank">按位异或赋值(Bitwise XOR assignment)</a></td>
<td style="text-align:center">x ^= y</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Bitwise_OR_assignment" target="_blank">按位或赋值(Bitwise OR assignment)</a></td>
<td style="text-align:center">x</td>
</tr>
</tbody>
</table>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank">比较运算符(Comparison operators)</a></p>
<table>
<thead>
<tr>
<th style="text-align:center">运算符</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality" target="_blank">等于 Equal </a>(==)</td>
<td style="text-align:center">如果两边操作数相等时返回true。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality" target="_blank">不等于 Not equal </a>(!=)</td>
<td style="text-align:center">如果两边操作数不相等时返回true</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity" target="_blank">全等 Strict equal </a>(===)</td>
<td style="text-align:center">两边操作数相等且类型相同时返回true。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity" target="_blank">不全等 Strict not equal </a>(!==)</td>
<td style="text-align:center">两边操作数不相等或类型不同时返回true。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator" target="_blank">大于 Greater than </a>(&gt;)</td>
<td style="text-align:center">左边的操作数大于右边的操作数返回true</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator" target="_blank">大于等于 Greater than or equal </a>(&gt;=)</td>
<td style="text-align:center">左边的操作数大于或等于右边的操作数返回true</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator" target="_blank">小于 Less than </a>(&lt;)</td>
<td style="text-align:center">左边的操作数小于右边的操作数返回true</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator" target="_blank">小于等于 Less than or equal </a>(&lt;=)</td>
<td style="text-align:center">左边的操作数小于或等于右边的操作数返回true</td>
</tr>
</tbody>
</table>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E7%AE%97%E6%9C%AF%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank">算数运算符(Arithmetic operators)</a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank">位运算符(Bitwise operators)</a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank">逻辑运算符(Logical operators)</a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank">字符串运算符(String operators)</a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_operator" target="_blank">条件（三元）运算符(Conditional operator)</a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#comma_operator" target="_blank">逗号运算符(Comma operator)</a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#delete" target="_blank">一元运算符(Unary operators)</a></p>
<ul>
<li>
<p>delete：属性或者元素会变成 undefined，成功会返回true</p>
</li>
<li>
<p>typeof operand</p>
</li>
<li>
<p>void (expression)</p>
</li>
</ul>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E5%85%B3%E7%B3%BB%E6%93%8D%E4%BD%9C%E7%AC%A6" target="_blank">关系运算符(Relational operator)</a></p>
<ul>
<li>
<p>propNameOrNumber in objectName</p>
</li>
<li>
<p>objectName instanceof objectType</p>
</li>
</ul>
<h2>优先级</h2>
<table>
<thead>
<tr>
<th style="text-align:center">Operator type</th>
<th style="text-align:center">Individual operators</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">member</td>
<td style="text-align:center">. []</td>
</tr>
<tr>
<td style="text-align:center">call / create instance</td>
<td style="text-align:center">() new</td>
</tr>
<tr>
<td style="text-align:center">negation/increment</td>
<td style="text-align:center">! ~ - + ++ -- typeof void delete</td>
</tr>
<tr>
<td style="text-align:center">multiply/divide</td>
<td style="text-align:center">* / %</td>
</tr>
<tr>
<td style="text-align:center">addition/subtraction</td>
<td style="text-align:center">+ -</td>
</tr>
<tr>
<td style="text-align:center">bitwise shift</td>
<td style="text-align:center">&lt;&lt; &gt;&gt; &gt;&gt;&gt;</td>
</tr>
<tr>
<td style="text-align:center">relational</td>
<td style="text-align:center">&lt; &lt;= &gt; &gt;= in instanceof</td>
</tr>
<tr>
<td style="text-align:center">equality</td>
<td style="text-align:center">== != === !==</td>
</tr>
<tr>
<td style="text-align:center">bitwise-and</td>
<td style="text-align:center">&amp;</td>
</tr>
<tr>
<td style="text-align:center">bitwise-xor</td>
<td style="text-align:center">^</td>
</tr>
<tr>
<td style="text-align:center">bitwise-or</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">logical-and</td>
<td style="text-align:center">&amp;&amp;</td>
</tr>
<tr>
<td style="text-align:center">logical-or</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">conditional</td>
<td style="text-align:center">?:</td>
</tr>
<tr>
<td style="text-align:center">assignment</td>
<td style="text-align:center">= += -= *= /= %= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;= &amp;= ^=</td>
</tr>
<tr>
<td style="text-align:center">comma</td>
<td style="text-align:center">,</td>
</tr>
</tbody>
</table>
<p><strong>链判断运算符 （?.）</strong></p>
<ul>
<li>
<p>obj?.prop // 对象属性</p>
</li>
<li>
<p>obj?.[expr] // 同上</p>
</li>
<li>
<p>func?.(...args) // 函数或对象方法的调用</p>
</li>
<li>
<p>短路机制</p>
</li>
</ul>
<p><strong>Null 判断运算符  ??</strong></p>
<p>行为类似||，运算符左侧的值为null或undefined时，才会返回右侧的值</p>
<p><strong>JS Event Loop 事件循环机制</strong></p>
<p>任务执行顺序：</p>
<ol>
<li>
<p>同步任务；</p>
</li>
<li>
<p>微任务队列（promise.then、process.nextTick(node)）；</p>
</li>
<li>
<p>宏任务队列（script、setTimeOut、setInterval）</p>
</li>
</ol>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">setImmediate(console.log, 1);
setTimeout(console.log, 1, 2);
/****************** microTask 分割线 ********************/
Promise.resolve(3).then(console.log); // microTask 分割线
/****************** 下次 event loop tick 分割线 ********************/
process.nextTick(console.log, 4);
/****************** 同步任务和异步任务的分割线 ********************/
console.log(5);
// 打印 5 4 3 2 1 或者 5 4 3 1 2

</code></pre>
<p><strong>函数防抖（debounce）</strong></p>
<p>指触发事件后在规定时间内函数只能执行一次，如果在规定时间内又触发了事件，则会重新计算函数执行时间。</p>
<p>应用场景</p>
<ul>
<li>
<p>搜索框搜索输入。只需用户最后一次输入完，再发送请求</p>
</li>
<li>
<p>窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">// 规定延迟时间（delay）内只执行最开始触发的函数
let canRun = true;
document.addEventListener('scroll', function(){
    // 判断是否已空闲，如果在执行中，则直接return
    if(!canRun) return;
    canRun = false;
    setTimeout(() =&gt; {
        console.log("函数节流");
        canRun = true;
    }, 300);
});

</code></pre>
<p><strong>函数节流（throttle）</strong></p>
<p>限制一个函数在规定时间内只能执行一次。</p>
<p>应用场景</p>
<ul>
<li>
<p>滚动加载，加载更多或滚到底部监听</p>
</li>
<li>
<p>谷歌搜索框，搜索联想功能</p>
</li>
</ul>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">let timer = false;
document.addEventListener('scroll', function(){
    clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
    timer = setTimeout(function(){
        console.log("函数防抖");
    }, 300);
});

</code></pre>
<h1>JSON</h1>
<p>JavaScript Object Notation：一种数据交换的文本格式</p>
<p>2002年，道格拉斯·克罗克福特（Douglas Crockford）发明的超轻量级的数据交换格式</p>
<p><strong>规定</strong></p>
<ol>
<li>
<p>复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。</p>
</li>
<li>
<p>原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。</p>
</li>
<li>
<p>字符串必须使用双引号表示，不能使用单引号。</p>
</li>
<li>
<p>对象的键名必须放在双引号里面。</p>
</li>
<li>
<p>数组或对象最后一个成员的后面，不能加逗号。</p>
</li>
</ol>
<p>序列化：JSON.stringify(object [```]);</p>
<p>反序列化：JSON.parse()</p>
<pre data-syntax="javascript"><code class="lang-javascript hljs raw">var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}

</code></pre>
