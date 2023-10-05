import{_ as e,o as a,c as o,a as t,Q as d,k as r}from"./chunks/framework.1f7d9302.js";const w=JSON.parse('{"title":"Regular expression","description":"","frontmatter":{"title":"Regular expression","created_at":"2022-01-28T14:04:35.000Z","updated_at":"2022-10-23T13:32:30.000Z","word_count":1384},"headers":[],"relativePath":"Universal/Regular expression.md","filePath":"Universal/Regular expression.md"}'),n={name:"Universal/Regular expression.md"},h=d('<p><a href="http://regexlab.com" target="_blank" rel="noreferrer">正则表达式</a>（regex） 一种从左到右匹配主体字符串的模式 <br> 一组由字母和符号组成的特殊文本，它可以用来从文本中找出满足你想要的格式的句子。</p><h2 id="元字符" tabindex="-1"><a href="https://www.runoob.com/regexp/regexp-metachar.html" target="_blank" rel="noreferrer">元字符</a> <a class="header-anchor" href="#元字符" aria-label="Permalink to &quot;[元字符](https://www.runoob.com/regexp/regexp-metachar.html)&quot;">​</a></h2><table><thead><tr><th>字符</th><th>描述</th></tr></thead><tbody><tr><td>\\</td><td>转义</td></tr><tr><td>.</td><td>通配符（wild ward） 匹配任何单个字符 (\\n、\\r 除外)</td></tr><tr><td>^</td><td>匹配字符串的开头</td></tr><tr><td>$</td><td>匹配字符串的末尾</td></tr><tr><td>*</td><td>匹配&gt;=0 次</td></tr><tr><td>+</td><td>匹配&gt;=1 次</td></tr><tr><td>?</td><td>匹配0或1次 <br> 在任何一个其他限制符 (*, +, ?, {}) 后时，为非贪婪模式</td></tr><tr><td><code>{n}</code></td><td>匹配 n 次</td></tr><tr><td><code>{n,}</code></td><td>匹配 &gt;=n 次</td></tr><tr><td><code>{n,m}</code></td><td>匹配 n-m 次</td></tr><tr><td>x|y</td><td>匹配 x 或 y</td></tr><tr><td>[xyz]</td><td>匹配所包含的任意一个字符</td></tr><tr><td>[^xyz]</td><td>匹配未包含的任意字符</td></tr></tbody></table><h2 id="分组与断言" tabindex="-1">分组与断言 <a class="header-anchor" href="#分组与断言" aria-label="Permalink to &quot;分组与断言&quot;">​</a></h2><table><thead><tr><th>分类</th><th>代码/语法</th><th>说明</th></tr></thead><tbody><tr><td>捕获</td><td>(exp)</td><td>匹配exp,并捕获文本到自动命名的组里，从0开始计数</td></tr><tr><td></td><td>(?exp)</td><td>匹配exp,并捕获文本到名称为name的组里，也可以写成(?&#39;name&#39;exp)</td></tr><tr><td></td><td>(?:exp)</td><td>匹配exp,不捕获匹配的文本，也不给此分组分配组号</td></tr><tr><td>零宽断言</td><td>(?=exp)</td><td>匹配exp前面的位置，正向肯定预查（look ahead positive assert）</td></tr><tr><td></td><td>(?&lt;=exp)</td><td>匹配exp后面的位置，反向(look behind)肯定预查</td></tr><tr><td></td><td>(?!exp)</td><td>匹配后面跟的不是exp的位置，正向否定预查(negative assert)</td></tr><tr><td></td><td>(?</td><td>匹配前面不是exp的位置，反向否定预查</td></tr><tr><td>注释</td><td>(?#comment)</td><td>注释</td></tr></tbody></table><p>零宽度断言（前后预查） <br> 先行断言和后发断言都属于非捕获簇（不捕获文本 ，也不针对组合计进行计数）。 先行断言用于判断所匹配的格式是否在另一个确定的格式之前，匹配结果不包含该确定格式（仅作为约束）。 <br> 正向肯定预查：&quot;Windows(?=7|10)&quot;能匹配&quot;Windows10&quot;中的&quot;Windows&quot;，但不能匹配&quot;Windows8&quot;中的&quot;Windows&quot; <br> 反向肯定预查：&quot;(?&lt;=7|10)Windows&quot;能匹配&quot;10Windows&quot;中的&quot;Windows&quot;，但不能匹配&quot;8Windows&quot; <br> 简写字符集</p><p>等价字符</p><table><thead><tr><th><strong>\\b</strong></th><th>匹配一个单词边界，也就是指单词和空格间的位置</th></tr></thead><tbody><tr><td><strong>\\B</strong></td><td>匹配非单词边界 <br> &#39;er\\B&#39; 能匹配 &quot;verb&quot; 中的 &#39;er&#39;，但不能匹配 &quot;never&quot; 中的 &#39;er&#39;。</td></tr><tr><td><strong>\\d</strong></td><td>匹配一个数字字符 [0-9]</td></tr><tr><td><strong>\\D</strong></td><td>匹配一个非数字字符 [^0-9]。</td></tr><tr><td><strong>\\s</strong></td><td>匹配任何空白字符 [ \\f\\n\\r\\t\\v]。</td></tr><tr><td><strong>\\S</strong></td><td>匹配任何非空白字符 [^ \\f\\n\\r\\t\\v]</td></tr><tr><td><strong>\\w</strong></td><td>匹配字母、数字、下划线 [A-Za-z0-9_]</td></tr><tr><td><strong>\\W</strong></td><td>匹配非字母、数字、下划线 [^A-Za-z0-9_]</td></tr></tbody></table><table><thead><tr><th>\\f</th><th>匹配一个换页符</th></tr></thead><tbody><tr><td>\\n</td><td>匹配一个换行符</td></tr><tr><td>\\r</td><td>匹配一个回车符</td></tr><tr><td>\\t</td><td>匹配一个制表符</td></tr><tr><td>\\v</td><td>匹配一个垂直制表符</td></tr><tr><td>\\p</td><td>匹配 CR/LF（等同于 \\r\\n），用来匹配 DOS 行终止符</td></tr></tbody></table><br>',10),s=d('<table><thead><tr><th>标志</th><th>描述</th></tr></thead><tbody><tr><td>i</td><td>忽略大小写。</td></tr><tr><td>g</td><td>全局搜索。</td></tr><tr><td>m</td><td>多行修饰符：锚点元字符 ^ $ 工作范围在每行的起始。</td></tr></tbody></table><table><thead><tr><th>表达式属性</th><th>说明</th></tr></thead><tbody><tr><td>Ignorecase</td><td>默认情况下，表达式中的字母是要区分大小写的。</td></tr><tr><td>Singleline</td><td>默认情况下，小数点 &quot;.&quot; 匹配除了换行符（\\n）以外的字符。配置为 Singleline 可使小数点可匹配包括换行符在内的所有字符。</td></tr><tr><td>Multiline</td><td>默认情况下，表达式 &quot;^&quot; 和 &quot;$&quot; 只匹配字符串的开始和结尾位置</td></tr><tr><td>Global</td><td>主要在将表达式用来替换时起作用，配置为 Global 表示替换所有的匹配。</td></tr></tbody></table><p>&quot;/The/gi&quot; =&gt; <strong>The</strong> fat cat sat on <strong>the</strong> mat. <br> 贪婪匹配与惰性匹配 (Greedy vs lazy matching) <br> 正则表达式默认采用贪婪匹配模式，会匹配尽可能长的子串。可以使用 ? 将贪婪匹配模式转化为惰性匹配模式。 <br> &quot;/(.<em>at)/&quot; =&gt; The fat cat sat on the mat <br> &quot;/(.</em>?at)/&quot; =&gt; The fat cat sat on the mat</p><h2 id="实用正则表达式" tabindex="-1">实用正则表达式 <a class="header-anchor" href="#实用正则表达式" aria-label="Permalink to &quot;实用正则表达式&quot;">​</a></h2><p>校验中文 <code>^[\\u4e00-\\u9fa5]+$</code></p><br>',6),i=r("br",null,null,-1),p=r("br",null,null,-1),l=r("br",null,null,-1),c=d('<p><code>${_name_}</code> <br> Stands for what a named group captured.</p><p>$$ <br> Stands for a single dollars ($).</p><p>$&amp; <br> Stands for what the overall expression captured.</p><p>$` <br> The substring before the beginning of what the overall expression captured in the original text.</p><p>$&#39; <br> The substring behind the end of what the overall expression captured in the original text.</p><p>$+ <br> Stands for what a group captured, which group has the max group number among those groups that have captured. <br> For example: when &quot;aaa(b+)|ccc(b+)&quot; matches &quot;aaabbb&quot; , $+ stands for $1, even though $2 has the max group number.</p><p>$_ <br> Stands for the whole original text.</p><p><strong>POSIX</strong>（Portable Operating System Interface，<strong>可移植操作系统接口</strong>）是<a href="https://zh.wikipedia.org/wiki/IEEE" target="_blank" rel="noreferrer">IEEE</a>为要在各种<a href="https://zh.wikipedia.org/wiki/UNIX" target="_blank" rel="noreferrer">UNIX</a><a href="https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F" target="_blank" rel="noreferrer">操作系统</a>上运行软件，而定义<a href="https://zh.wikipedia.org/wiki/API" target="_blank" rel="noreferrer">API</a>的一系列互相关联的标准的总称</p><h2 id="posix字符组" tabindex="-1">POSIX字符组 <a class="header-anchor" href="#posix字符组" aria-label="Permalink to &quot;POSIX字符组&quot;">​</a></h2><table><thead><tr><th>POSIX字符组</th><th>说明</th><th>ASCII环境</th><th>Unicode环境</th></tr></thead><tbody><tr><td>[:alnum:]</td><td>字母字符和数字字符</td><td>[a-zA-Z0-9]</td><td><code>[\\\\p{L&amp;}\\\\p{Nd}]</code></td></tr><tr><td>[:alpha:]</td><td>字母</td><td>[a-zA-Z]</td><td><code>\\\\p{L&amp;}</code></td></tr><tr><td>[:ascii:]</td><td>ASCII字符</td><td>[\\x00-\\x7F]</td><td><code>\\\\p{InBasicLatin}</code></td></tr><tr><td>[:blank:]</td><td>空格字符和制表符</td><td>[ \\t]</td><td><code>[\\\\p{Zs}\\\\t]</code></td></tr><tr><td>[:cntrl:]</td><td>控制字符</td><td>[\\x00-\\x1F\\x7F]</td><td><code>\\\\p{Cc}</code></td></tr><tr><td>[:digit:]</td><td>数字字符</td><td>[0-9]</td><td><code>\\\\p{Nd}</code></td></tr><tr><td>[:graph:]</td><td>空白字符之外的字符</td><td>[\\x21-\\x7E]</td><td><code>[^\\\\p{Z}\\\\p{C}]</code></td></tr><tr><td>[:lower:]</td><td>小写字母字符</td><td>[a-z]</td><td><code>\\\\p{Ll}</code></td></tr><tr><td>[:print:]</td><td>[:graph:] + [:blank:]</td><td>[\\x20-\\x7E]</td><td><code>\\\\P{C}</code></td></tr><tr><td>[:punct:]</td><td>标点符号</td><td><code>[][!&quot;#$%&amp;&#39;()*+,./:;&lt;=&gt;?@\\\\^_</code>{|}~-]`</td><td><code>[\\\\p{P}\\\\p{S}]</code></td></tr><tr><td>[:space:]</td><td>空白字符</td><td>[ \\t\\r\\n\\v\\f]</td><td><code>[\\\\p{Z}\\\\t\\\\r\\\\n\\\\v\\\\f]</code></td></tr><tr><td>[:upper:]</td><td>大写字母字符</td><td>[A-Z]</td><td><code>\\\\p{Lu}</code></td></tr><tr><td>[:word:]</td><td>字母字符</td><td>[A-Za-z0-9_]</td><td><code>[\\\\p{L}\\\\p{N}\\\\p{Pc}]</code></td></tr><tr><td>[:xdigit:]</td><td>十六进制字符</td><td>[A-Fa-f0-9]</td><td>[A-Fa-f0-9]</td></tr></tbody></table>',10);function u(b,g,_,m,x,f){return a(),o("div",null,[h,t(" ## 标志(模式修正符) 修改表达式的搜索结果 "),s,t(" ## Replace Operation $1 ~ $999 "),i,t(" Stands for what a certain group captured. If the number is larger than the max group number, DEELX will use less digitals, till the number is smaller than or equal to the max group number. "),p,t(" For example: "),l,t(' If the max group number is 20, "$999" means "$9" and common string "99", while "$15" means the 15th group. If you need "$1" and common string "5", you can use $0015 , DEELX at most recognize 3 digitals as number. '),c])}const S=e(n,[["render",u]]);export{w as __pageData,S as default};
