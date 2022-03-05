


# ——超文本标记语言 (Hyper Text Markup Language)——


Tim Berners-Lee发明的一种标记语言是一套标记标签 (markup tag)  <br />  
  <br />  **HTML 基本文档**
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>网页标题</title>
  </head>
  <body>
    <p>Hello World</p>
  </body>
</html>
```



# HTML元素


标签（tag）：节点（node），元素（element），在一对尖括号里面。

- 开始标签（start tag）或开放标签（opening tag）
- 结束标签（end tag）或闭合标签（closing tag），在标签名之前加斜杠。
- 空标签：只包含属性，且没有闭合标签
- <!DOCTYPE>： 不是 HTML 标签。它为浏览器提供一项信息（声明），即 HTML 是用什么版本编写的。



**块级元素（block）**

- 默认占据一个独立的区域，在网页上会自动另起一行，占据 100% 的宽度
- 可以给块级元素设置宽高、内边距、外边距等盒模型属性；
- 块级元素可以包含块级元素和行内元素；
- 常见的块级元素有：<div>、<h1> ~ <h6>、<p>、<ul>、<ol>、<dl>、<table>、<address>

    <form> 等。

**行内元素（inline）**

- 默认与其他元素在同一行，不产生换行，只会占领自身宽高所需要的空间；
- 给行内元素设置宽高不会起作用，margin 值只对左右起作用，padding 值也只对左右起作用；
- 行内元素一般不可以包含块级元素，只能包含行内元素和文本；
- 常见的行内元素有 <a>、<b>、<label>、<span>、<img>、<em>、<strong>、<i>、<input> 等。



**属性（attribute）**  <br />  标签的额外信息，定制元素的行为。  <br />  `<img src="demo.jpg" width="500"> `

- 以名称/值对的形式出现，使用空格与标签名和其他属性分隔
- 在 HTML 元素的开始标签中规定。
- 始终被包括在引号内。双引号是最常用的
- 属性名是大小写不敏感的
- 布尔属性，即属性值是一个布尔值，只有“打开”和“关闭”两种情况。这时属性值可以省略，只要添加了属性名，就表示打开该属性。



**空格&换行**

- 标签内容的头部和尾部的空格，一律忽略不计
- 标签内容里面的多个连续空格（包含制表符\t），会被浏览器合并成一个。
- 文本里面的换行符（\n）和回车符（\r），会被替换成空格。




## 基本标签（Basic Tags）
| 标签 | 描述 |
| --- | --- |
| [<!DOCTYPE>](https://www.w3school.com.cn/tags/tag_doctype.asp)  | 定义文档类型。 |
| [<html>](https://www.w3school.com.cn/tags/tag_html.asp) | 定义 HTML 文档 |
| [<title>](https://www.w3school.com.cn/tags/tag_title.asp) | 文档的标题 |
| [<body>](https://www.w3school.com.cn/tags/tag_body.asp) | 文档的主体 |
| [<h1> to <h6>](https://www.w3school.com.cn/tags/tag_hn.asp) | Heading |
| <hgroup> | 包围多级标题组 |
| [<p>](https://www.w3school.com.cn/tags/tag_p.asp) | Paragraph |
| [<br>](https://www.w3school.com.cn/tags/tag_br.asp) | 折行 |
| [<hr>](https://www.w3school.com.cn/tags/tag_hr.asp) | horizontal line |
| [<!--...-->](https://www.w3school.com.cn/tags/tag_comment.asp) | Comment |

```html
<hgroup>
    <h1>最大的标题</h1>
    <h2> . . . </h2>
    <h3> . . . </h3>
    <h4> . . . </h4>
    <h5> . . . </h5>
    <h6>最小的标题</h6>
 </hgroup>
 
<p>这是一个段落。</p>
<br> （换行）
<hr> （水平线）
<!-- 这是注释 -->
```
`<html>`：网页的顶层容器，即标签树结构的顶层节点，根元素（root element），其他元素都是它的子元素。  <br />  一个网页只能有一个<html>标签。


## 元信息 (Metadata)
| 标签 | 描述 |
| --- | --- |
| [<head>](https://www.w3school.com.cn/tags/tag_head.asp) | 定义关于文档的信息。 |
| [<meta>](https://www.w3school.com.cn/tags/tag_meta.asp) | metadata |
| [<base>](https://www.w3school.com.cn/tags/tag_base.asp) | 定义页面中所有链接的默认地址或默认目标。 |

<head>：一个容器标签，用于放置网页的元信息。它的内容不会出现在网页上，而是为网页渲染提供额外信息。

- <meta>：设置网页的元数据。
   - charset：指定网页的编码方式	
   - name：表示元数据的名字
   - content：表示元数据的值
   - http-equiv：覆盖 HTTP 回应的头信息字段
- <link>：连接外部样式表。
- <title>：设置网页标题。
- <style>：放置内嵌的样式表。
- <script>：引入脚本。
- <noscript>：浏览器不支持脚本时，所要显示的内容。
- <base>：设置网页内部相对 URL 的计算基准。





## 文本格式化（Formatting）
| 标签 | 描述 |
| --- | --- |
| [<acronym>](https://www.w3school.com.cn/tags/tag_acronym.asp) | 定义只取首字母的缩写。 |
| [<abbr>](https://www.w3school.com.cn/tags/tag_abbr.asp) | abbreviations |
| [<address>](https://www.w3school.com.cn/tags/tag_address.asp) | 定义文档作者或拥有者的联系信息。 |
| [<b>](https://www.w3school.com.cn/tags/tag_font_style.asp) | bold |
| [<bdi>](https://www.w3school.com.cn/tags/tag_bdi.asp) | 定义文本的文本方向，使其脱离其周围文本的方向设置。 |
| [<bdo>](https://www.w3school.com.cn/tags/tag_bdo.asp) | bi-directional override |
| [<big>](https://www.w3school.com.cn/tags/tag_font_style.asp) | 定义大号文本。 |
| [<blockquote>](https://www.w3school.com.cn/tags/tag_blockquote.asp) | 定义长的引用。 |
| [<cite>](https://www.w3school.com.cn/tags/tag_phrase_elements.asp) | 定义引用(citation)。 |
| [<code>](https://www.w3school.com.cn/tags/tag_phrase_elements.asp) | 定义计算机代码文本。 |
| [<del>](https://www.w3school.com.cn/tags/tag_del.asp) | delete |
| [<dfn>](https://www.w3school.com.cn/tags/tag_phrase_elements.asp) | definition project |
| [<em>](https://www.w3school.com.cn/tags/tag_phrase_elements.asp) | emphasize |
| [<i>](https://www.w3school.com.cn/tags/tag_font_style.asp) | italics |
| [<ins>](https://www.w3school.com.cn/tags/tag_ins.asp) | insert |
| [<kbd>](https://www.w3school.com.cn/tags/tag_phrase_elements.asp) | keyboard code |
| [<mark>](https://www.w3school.com.cn/tags/tag_mark.asp) | 定义有记号的文本。 |
| [<meter>](https://www.w3school.com.cn/tags/tag_meter.asp) | 定义预定义范围内的度量。 |
| [<pre>](https://www.w3school.com.cn/tags/tag_pre.asp) | Preformatted text |
| [<progress>](https://www.w3school.com.cn/tags/tag_progress.asp) | 定义任何类型的任务的进度。 |
| [<q>](https://www.w3school.com.cn/tags/tag_q.asp) | 定义短的引用。 |
| [<rp>](https://www.w3school.com.cn/tags/tag_rp.asp) | 定义若浏览器不支持 ruby 元素显示的内容。 |
| [<rt>](https://www.w3school.com.cn/tags/tag_rt.asp) | 定义 ruby 注释的解释。 |
| [<ruby>](https://www.w3school.com.cn/tags/tag_ruby.asp) | 定义 ruby 注释。 |
| [<samp>](https://www.w3school.com.cn/tags/tag_phrase_elements.asp) | 定义计算机代码样本。 |
| [<small>](https://www.w3school.com.cn/tags/tag_font_style.asp) | 定义小号文本。 |
| [<strong>](https://www.w3school.com.cn/tags/tag_phrase_elements.asp) | 定义语气更为强烈的强调文本。 |
| [<sup>](https://www.w3school.com.cn/tags/tag_sup.asp) | superscript |
| [<sub>](https://www.w3school.com.cn/tags/tag_sub.asp) | subscript |
| [<time>](https://www.w3school.com.cn/tags/tag_time.asp) | 定义日期/时间。 |
| [<tt>](https://www.w3school.com.cn/tags/tag_font_style.asp) | 定义打字机文本。 |
| [<var>](https://www.w3school.com.cn/tags/tag_phrase_elements.asp) | variable |
| [<wbr>](https://www.w3school.com.cn/tags/tag_wbr.asp) | 定义可能的换行符。 |

```html
<b>粗体文本</b>
<code>计算机代码</code>
<em>强调文本</em>
<i>斜体文本</i>
<kbd>键盘输入</kbd> 
<pre>预格式化文本</pre>
<small>更小的文本</small>
<strong>重要的文本</strong>
 
<abbr> （缩写）
<address> （联系信息）
<bdo> （文字方向）
<blockquote> （从另一个源引用的部分）
<cite> （工作的名称）
<del> （删除的文本）
<ins> （插入的文本）
<sub> （下标文本）
<sup> （上标文本）
```


**<progress>属性**

- max：进度条的最大值，应该是一个大于0的浮点数。默认值为1。
- value：进度条的当前值。它必须是0和max属性之间的一个有效浮点数。如果省略了max属性，该值则必须在0和1之间。如果省略了value属性，则进度条会出现滚动，表明正在进行中，无法知道完成的进度。

`<progress id="file" max="100" value="70"> 70% </progress> `

**<meter>属性**

- min：范围的下限，必须小于max属性。如果省略，则默认为0。
- max：范围的上限，必须大于min属性。如果省略，则默认为1。
- value：当前值，必须在min属性和max属性之间。如果省略，则默认为0。
- low：表示“低端”的上限门槛值，必须大于min属性，小于high属性和max属性。如果省略，则等于min属性。
- high：表示“高端”的下限门槛值，必须小于max属性，大于low属性和min属性。如果省略，则等于max属性。
- optimum：指定最佳值，必须在min属性和max属性之间。
- form：关联表单的id属性。
```html
<meter id="fuel" name="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value="50">
    at 50/100
</meter>
```
​


## 链接（Links）
| 标签 | 描述 |
| --- | --- |
| [<a>](https://www.w3school.com.cn/tags/tag_a.asp) | anchor |
| [<link>](https://www.w3school.com.cn/tags/tag_link.asp) | 定义文档与外部资源的关系。 |
| [<nav>](https://www.w3school.com.cn/tags/tag_nav.asp) | navigation |
| [<script>](https://www.w3school.com.cn/tags/tag_script.asp) | 定义客户端脚本。 |
| [<noscript>](https://www.w3school.com.cn/tags/tag_noscript.asp) | 定义针对不支持客户端脚本的用户的替代内容。 |

```html
普通链接
<a href="http://www.example.com/" target="_blank">链接文本</a>
图像链接
<a href="http://www.example.com/"><img src="URL" alt="替换文本"></a>

<link rel="stylesheet" type="text/css" href="theme.css">
```
​

**<a>属性**

- href（hypertext reference）：指向URL或者锚点
- alt（alter）：替用(一般是图片显示不出的提示)
- hreflang：指向的网址所使用的语言
- title：给出链接的说明信息
- target：指定如何展示打开的链接
   - _self：当前窗口打开，这是默认值。
   - _blank：新窗口打开。
   - _parent：上层窗口打开，用于从父窗口打开的子窗口，或者<iframe>里面的链接。
   - _top：顶层窗口打开。
- rel：说明链接与当前页面的关系。
   - alternate：当前文档的另一种形式，比如翻译。
   - author：作者链接。
   - bookmark：用作书签的永久地址。
   - external：当前文档的外部参考文档。
   - help：帮助链接。
   - license：许可证链接。
   - next：系列文档的下一篇。
   - nofollow：告诉搜索引擎忽略该链接，主要用于用户提交的内容，防止有人企图通过添加链接，提高该链接的搜索排名。
   - noreferrer：打开链接时，不要将当前网址作为 HTTP 头信息的Referer字段发送出去，这样可以隐藏点击的来源。
   - noopener：打开链接时，不让链接窗口通过 JavaScript 的window.opener：引用原始窗口，这样就提高了安全性。
   - prev：系列文档的上一篇。
   - search：文档的搜索链接。
   - tag：文档的标签链接。
- referrerpolicy：用于精确设定点击链接时，浏览器发送 HTTP 头信息的Referer字段的行为。
- ping：指定一个网址，用户点击的时候，会向该网址发出一个 POST 请求，用于跟踪用户的行为。
- type：给出链接 URL 的 MIME 类型
- download：表明当前链接用于下载，只在链接与网址同源时，才会生效



**邮件链接**  <br />  打开本机默认的邮件程序，让用户向指定的地址发送邮件  <br />  `<a href="mailto:foo@bar.com?cc=test@test.com&subject=The%20subject&body=The%20body" >发送邮件</a> `  <br />  要素

- subject：主题
- cc：抄送
- bcc：密送
- body：邮件内容



**电话链接**  <br />  唤起拨号界面，可以直接拨打指定号码。  <br />  `<a href="tel:13312345678">13312345678</a> `

**<script>属性**

- type：给出脚本的类型，默认是 JavaScript 代码，可省略
- async：指定 JavaScript 代码为异步执行，不是造成阻塞效果
- defer：指定 JavaScript 代码不是立即执行，而是页面解析完成后执行。
- crossorigin：采用跨域的方式加载外部脚本，即 HTTP 请求的头信息会加上origin字段。
- integrity：给出外部脚本的哈希值，防止脚本被篡改。只有哈希值相符的外部脚本，才会执行。
- nonce：一个密码随机数，由服务器在 HTTP 头信息里面给出，每次加载脚本都不一样。
- referrerpolicy：HTTP 请求的Referer字段的处理方法。
```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```



## 样式/区块（Styles/Sections）
| 标签 | 描述 |
| --- | --- |
| [<style>](https://www.w3school.com.cn/tags/tag_style.asp) | 定义文档的样式信息。 |
| [<div>](https://www.w3school.com.cn/tags/tag_div.asp) | division |
| [<span>](https://www.w3school.com.cn/tags/tag_span.asp) | 定义文档中的节。 |
| [<header>](https://www.w3school.com.cn/tags/tag_header.asp) | 定义 section 或 page 的页眉。 |
| [<footer>](https://www.w3school.com.cn/tags/tag_footer.asp) | 定义 section 或 page 的页脚。 |
| <main> | 页面的主体内容 |
| [<section>](https://www.w3school.com.cn/tags/tag_section.asp) | 定义 section。 |
| [<article>](https://www.w3school.com.cn/tags/tag_article.asp) | 定义文章。 |
| [<aside>](https://www.w3school.com.cn/tags/tag_aside.asp) | 定义页面内容之外的内容。 |
| [<details>](https://www.w3school.com.cn/tags/tag_details.asp) | 定义元素的细节。 |
| [<dialog>](https://www.w3school.com.cn/tags/tag_dialog.asp) | 定义对话框或窗口。 |
| [<summary>](https://www.w3school.com.cn/tags/tag_summary.asp) | 为 <details> 元素定义可见的标题。 |

```html
<body>
<header>页眉</header>
<main>
  <article>
    <h1>文章标题</h1>
      <section>
        <h2>第一章</h2>
        <p>...</p>
      </section>
      <section>
        <h2>第二章</h2>
        <p>...</p>
      </section>
  </article>
</main>
<aside>侧边栏</aside>
<footer>页尾</footer>
</body>


<style type="text/css">
h1 {color:red;}
p {color:blue;}
</style>
<div>文档中的块级元素</div>
<span>文档中的内联元素</span>


<dialog open>
  <form method="dialog">
    <input type="text">
    <button type="submit" value="foo">提交</button>
  </form>
</dialog>

<details>
  <summary>这是标题</summary>
  这是一段解释文本。
</details>
```
![](./assets/1643811695749-c054d621-6156-4e0f-b82e-5464847cae8f.jpeg)  <br />  ​  <br />  

## 列表（List）
| 标签 | 描述 |
| --- | --- |
| [<ul>](https://www.w3school.com.cn/tags/tag_ul.asp) | Unordered list |
| [<ol>](https://www.w3school.com.cn/tags/tag_ol.asp) | ordered list |
| [<li>](https://www.w3school.com.cn/tags/tag_li.asp) | list items |
| [<dl>](https://www.w3school.com.cn/tags/tag_dl.asp) | description list |
| [<dt>](https://www.w3school.com.cn/tags/tag_dt.asp) | description term |
| [<dd>](https://www.w3school.com.cn/tags/tag_dd.asp) | description detail |
| [<menu>](https://www.w3school.com.cn/tags/tag_menu.asp) | 定义命令的菜单/列表。 |
| [<menuitem>](https://www.w3school.com.cn/tags/tag_menuitem.asp) | 定义用户可以从弹出菜单调用的命令/菜单项目。 |
| [<command>](https://www.w3school.com.cn/tags/tag_command.asp) | 定义命令按钮。 |

​

<ol>属性

- reversed：产生倒序的数字列表
- start：表示数字列表的起始编号
- type：指定数字编号的样式
   - a：小写字母
   - A：大写字母
   - i：小写罗马数字
   - I：大写罗马数字
   - 1：整数（默认值）

<li>value属性：定义当前列表项的编号，后面列表项会从这个值开始编号
```html
无序列表
<ul>
    <li>项目</li>
    <li>项目</li>
</ul>


有序列表
<ol>
    <li>第一项</li>
    <li>第二项</li>
</ol>


定义列表
<dl>
  <dt>CPU</dt>
  <dd>中央处理器</dd>

  <dt>Memory</dt>
  <dd>内存</dd>
</dl>
```



## 表格（Tables）
| 标签 | 描述 |
| --- | --- |
| [<table>](https://www.w3school.com.cn/tags/tag_table.asp) | 定义表格 |
| [<caption>](https://www.w3school.com.cn/tags/tag_caption.asp) | 定义表格标题。 |
| [<th>](https://www.w3school.com.cn/tags/tag_th.asp) | 定义表格中的表头单元格。 |
| [<tr>](https://www.w3school.com.cn/tags/tag_tr.asp) | table row |
| [<td>](https://www.w3school.com.cn/tags/tag_td.asp) | table data |
| [<thead>](https://www.w3school.com.cn/tags/tag_thead.asp) | 定义表格中的表头内容。 |
| [<tbody>](https://www.w3school.com.cn/tags/tag_tbody.asp) | 定义表格中的主体内容。 |
| [<tfoot>](https://www.w3school.com.cn/tags/tag_tfoot.asp) | 定义表格中的表注内容（脚注）。 |
| [<col>](https://www.w3school.com.cn/tags/tag_col.asp) | column |
| [<colgroup>](https://www.w3school.com.cn/tags/tag_colgroup.asp) | 定义表格中供格式化的列组。 |

​

<col>span属性：默认为1。如果大于1，表示该列的宽度包含连续的多列。  <br />  <th> & <td>

- colspan
- rowspan
- headers：对应<th>标签的id属性的值
- scope：表示该<th>单元格到底是栏的标题，还是列的标题。
   - row：该行的所有单元格，都与该标题单元格相关。
   - col：该列的所有单元格，都与该标题单元格相关。
   - rowgroup：多行组成的一个行组的所有单元格，都与该标题单元格相关，可以与rowspan属性配合使用。
   - colgroup：多列组成的一个列组的所有单元格，都与该标题单元格相关，可以与colspan属性配合使用。
   - auto：默认值，表示由浏览器自行决定。
```html
<table>
  <thead>... ...</thead>
  <tbody>... ...</tbody>
  <tfoot>... ...</tfoot>
</table>


<table border="1">
  <colgroup>
    <col class="c1">
    <col class="c2">
  </colgroup>
  
  <tr>
    <th id="no">学号</th><th id="names">姓名</th>
  </tr>
  <tr>
    <td headers="no">001</td><td headers="names">张三</td>
  </tr>
  <tr>
    <td headers="no">002</td><td headers="names">李四</td>
  </tr>
</table>


<table>
  <thead>
    <tr>
      <th scope="col">海报名称</th>
      <th scope="col">颜色</th>
      <th colspan="3" scope="colgroup">尺寸</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" scope="rowgroup">Zodiac</th>
      <th scope="row">Full color</th>
      <td>A2</td>
      <td>A3</td>
      <td>A4</td>
    </tr>
    <tr>
      <th scope="row">Black and white</th>
      <td>A1</td>
      <td>A2</td>
      <td>A3</td>
    </tr>
    <tr>
      <th scope="row">Sepia</th>
      <td>A3</td>
      <td>A4</td>
      <td>A5</td>
    </tr>
  </tbody>
</table>
```



## 表单（Forms）
| 标签 | 描述 |
| --- | --- |
| [<form>](https://www.w3school.com.cn/tags/tag_form.asp) | 定义供用户输入的 HTML 表单。 |
| [<input>](https://www.w3school.com.cn/tags/tag_input.asp) | 定义输入控件。 |
| [<textarea>](https://www.w3school.com.cn/tags/tag_textarea.asp) | 定义多行的文本输入控件。 |
| [<button>](https://www.w3school.com.cn/tags/tag_button.asp) | 定义按钮。 |
| [<select>](https://www.w3school.com.cn/tags/tag_select.asp) | 定义选择列表（下拉列表）。 |
| [<optgroup>](https://www.w3school.com.cn/tags/tag_optgroup.asp) | 定义选择列表中相关选项的组合。 |
| [<option>](https://www.w3school.com.cn/tags/tag_option.asp) | 定义选择列表中的选项。 |
| [<label>](https://www.w3school.com.cn/tags/tag_label.asp) | 定义 input 元素的标注。 |
| [<fieldset>](https://www.w3school.com.cn/tags/tag_fieldset.asp) | 定义围绕表单中元素的边框。 |
| [<legend>](https://www.w3school.com.cn/tags/tag_legend.asp) | 定义 fieldset 元素的标题。 |
| [<datalist>](https://www.w3school.com.cn/tags/tag_datalist.asp) | 定义下拉列表。 |
| [<keygen>](https://www.w3school.com.cn/tags/tag_keygen.asp) | 定义生成密钥。 |
| [<output>](https://www.w3school.com.cn/tags/tag_output.asp) | 定义输出的一些类型。 |

**<form>属性**

- accept-charset：服务器接受的字符编码列表，使用空格分隔，默认与网页编码相同。
- action：服务器接收数据的 URL。
- autocomplete：如果用户没有填写某个控件，浏览器是否可以自动填写该值。
   - off（不自动填写）
   - on（自动填写）
- method：提交数据的 HTTP 方法
   - post（表单数据作为 HTTP 数据体发送）
   - get（表单数据作为 URL 的查询字符串发送）
   - dialog（表单位于<dialog>内部使用）
- enctype：当method属性等于post时，该属性指定提交给服务器的 MIME 类型。
   - application/x-www-form-urlencoded（默认值）
   - multipart/form-data（文件上传的情况）
   - text/plain
- name：表单的名称，在网页中是唯一的。如果没有name属性，那么控件的值就不会作为键值对，向服务器发送。
- novalidate：布尔属性，表单提交时是否取消验证。
- target：在哪个窗口展示服务器返回的数据
   - _self（当前窗口）
   - _blank（新建窗口）
   - _parent（父窗口）
   - _top（顶层窗口）

​  <br />  
```html
<form action="https://example.com/api"
      enctype="multipart/form-data"
      method="post">
  用户名：<input type="text" name="submit-name"><br>
  文件：<input type="file" name="files"><br>
  <input type="submit" value="上传"> <input type="reset" value="清除">
</form>
```
​

**<fieldset>属性**

- disabled：布尔属性，一旦设置会使得<fieldset>内部包含的控件都不可用，都变成灰色状态。
- form：指定控件组所属的<form>，它的值等于<form>的id属性。
- name：该控件组的名称。
```html
<form>
    <fieldset>
      <legend>学生情况登记</legend>
      <p>年龄：<input type="text" name="age"></p>
      <p>性别：<input type="text" name="gender"></p>
    </fieldset>
</form>
```
​

**<label>属性**

- for：关联控件的id属性。
- form：关联表单的id属性。设置了该属性后，<label>可以放置在页面的任何位置，否则只能放在<form>内部。

​

**<input>属性**

- autofocus：布尔属性，是否在页面加载时自动获得焦点。
- disabled：布尔属性，是否禁用该控件。一旦设置，该控件将变灰，用户可以看到，但是无法操作。
- form：关联表单的id属性。设置了该属性后，控件可以放置在页面的任何位置，否则只能放在<form>内部。
- list：关联的<datalist>的id属性，设置该控件相关的数据列表
- name：控件的名称，主要用于向服务器提交数据时，控件键值对的键名。
- readonly：布尔属性，是否为只读。
- required：布尔属性，是否为必填。
- value：控件的值。
- type：控件类型



text	普通的(单行)文本输入框  <br />  search	搜索的文本输入框  <br />  url		网址的文本框  <br />  tel		电话号码的输入框  <br />  email	电子邮箱的文本输入框

- maxlength：可以输入的最大字符数，值为一个非负整数。
- minlength：可以输入的最小字符数，值为一个非负整数，且必须小于maxlength。
- pattern：用户输入必须匹配的正则表达式。如果输入不符合要求，浏览器会弹出提示，不会提交表单。
- placeholder：输入字段为空时，用于提示的示例值。
- readonly：布尔属性，表示该输入框是只读的，用户只能看，不能输入。
- size：表示输入框的显示长度有多少个字符宽，默认等于20。超过这个数字的字符，必须移动光标才能看到。
- spellcheck：是否对用户输入启用拼写检查

​

color	选择颜色的控件  <br />  date	日期的输入框(YYYY-MM-DD)  <br />  time	时间的输入框(hh:mm:ss)  <br />  month	YYYY-MM  <br />  week	yyyy-Www  <br />  datetime-local	yyyy-MM-ddThh:mm  <br />  ​

button	没有默认行为的按钮，通过脚本指定click事件的监听函数来使用。  <br />  submit	表单的提交按钮  <br />  image	将一个图像文件作为提交按钮

- formaction：提交表单数据的服务器 URL。
- formenctype：表单数据的编码类型。
- formmethod：提交表单使用的 HTTP 方法（get或post）。
- formnovalidate：表示数据提交给服务器之前，是否要忽略表单验证。
- formtarget：收到服务器返回的数据后，在哪一个窗口显示。

​

reset	重置按钮  <br />  checkbox	复选框  <br />  radio	单选框

- checked：布尔属性，表示是否默认选中当前项。
- value：用户选中该项时，提交到服务器的值，默认为on'。
```html
<fieldset>
  <legend>你的兴趣</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">编码</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">音乐</label>
  </div>
</fieldset>

<fieldset>
  <legend>性别</legend>
  <div>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">男</label>
  </div>
  <div>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">女</label>
  </div>
</fieldset>
```
​

password	密码输入框

- autocomplete：是否允许自动填充
   - on（允许自动填充）
   - off（不允许自动填充）
   - urrent-password（填入当前网站保存的密码）
   - new-password（自动生成一个随机密码）
- inputmode：允许用户输入的数据类型，
   - none（不使用系统输入法）
   - text（标准文本输入）
   - decimal（数字，包含小数）
   - numeric（数字0-9）等

file	文件选择框

- accept：允许选择的文件类型，使用逗号分隔，可以使用 MIME 类型（比如image/jpeg），也可以使用后缀名（比如.doc），还可以使用audio/*（任何音频文件）、video/*（任何视频文件）、image/*（任何图像文件）等表示法。
- capture：用于捕获图像或视频数据的源
   - user（面向用户的摄像头或麦克风）
   - environment（外接的摄像头或麦克风）。
- multiple：是否允许用户选择多个文件。

​

hidden	不显示在页面的控件，用户无法输入它的值，主要用来向服务器传递一些隐藏信息  <br />  ​

number	数字输入框，只能输入数字  <br />  range	滑块

- max：允许输入的最大数值。
- min：允许输入的最小数值。
- placeholder：用户输入为空时，显示的示例值。
- readonly：布尔属性，表示该控件是否为只读。
- step：点击向上和向下箭头时，数值每次递减的步长值。如果用户输入的值，不符合步长值的设定，浏览器会自动四舍五入到最近似的值。默认的步长值是1，如果初始的value属性设为1.5，那么点击向上箭头得到2.5，点击向下箭头得到0.5。
```html
<input type="number" id="tentacles" name="tentacles"
       min="10" max="100">
       
<input type="range" id="start" name="volume"
         min="0" max="11">
```

  <br />  **<button>	属性**

- autofocus：布尔属性，表示网页加载时，焦点就在这个按钮。
- disabled：布尔属性，表示按钮不可用，会导致按钮变灰，不可点击。
- name：按钮的名称（与value属性配合使用），将以name=value的形式，随表单一起提交到服务器。
- value：按钮的值（与name属性配合使用），将以name=value的形式，随表单一起提交到服务器。
- type：按钮的类型
   - submit（点击后将数据提交给服务器）
   - reset（将所有控件的值重置为初始值）
   - button（没有默认行为，由脚本指定按钮的行为）
- formaction：数据提交到服务器的目标 URL，会覆盖<form>元素的action属性。
- formenctype：数据提交到服务器的编码方式，会覆盖<form>元素的enctype属性。
   - application/x-www-form-urlencoded（默认值）
   - multipart/form-data（只用于文件上传）
   - text/plain。
- formmethod：数据提交到服务器使用的 HTTP 方法(post或get)。
- formnovalidate：布尔属性，数据提交到服务器时关闭本地验证，会覆盖<form>元素的novalidate属性。
- formtarget：数据提交到服务器后，展示服务器返回数据的窗口，会覆盖<form>元素的target属性。
   - _self（当前窗口）
   - _blank（新的空窗口）
   - _parent（父窗口）
   - _top（顶层窗口）
```html
<button name="search" type="submit">
  <img src="search.gif">搜索
</button>
```

  <br />  **<select>属性**

- autofocus：布尔属性，页面加载时是否自动获得焦点。
- disabled：布尔属性，是否禁用当前控件。
- form：关联表单的id属性。
- multiple：布尔属性，是否可以选择多个菜单项。默认情况下，只能选择一项。一旦设置，多数浏览器会显示一个滚动列表框。用户可能需要按住Shift或其他功能键，选中多项。
- name：控件名。
- required：布尔属性，是否为必填控件。
- size：设置了multiple属性时，页面显示时一次可见的行数，其他行需要滚动查看。
```html
<label for="pet-select">宠物：</label>

<select id="pet-select" name="pet-select">
  <option value="">--请选择一项--</option>
  <option value="dog">狗</option>
  <option value="cat">猫</option>
  <option value="others">其他</option>
</select>
```


**<option>属性**

- disabled：布尔属性，是否禁用该项。
- label：该项的说明。如果省略，则等于该项的文本内容。
- selected：布尔属性，是否为默认值。
- value：该项提交到服务器的值。如果省略，则等于该项的文本内容。
```html
<label>宠物：
  <select name="pets" multiple size="4">
    <optgroup label="四条腿的宠物">
      <option value="dog">狗</option>
      <option value="cat">猫</option>
    </optgroup>
    <optgroup label="鸟类">
      <option value="parrot">鹦鹉</option>
      <option value="thrush">画眉</option>
    </optgroup>
  </select>
</label>
```
​

**<textarea>属性**

- autofocus：布尔属性，是否自动获得焦点。
- cols：文本框的宽度，单位为字符，默认值为20。
- disabled：布尔属性，是否禁用该控件。
- form：关联表单的id属性。
- maxlength：允许输入的最大字符数。如果未指定此值，用户可以输入无限数量的字符。
- minlength：允许输入的最小字符数。
- name：控件的名称。
- placeholder：输入为空时显示的提示文本。
- readonly：布尔属性，控件是否为只读。
- required：布尔属性，控件是否为必填。
- rows：文本框的高度，单位为行。
- spellcheck：是否打开浏览器的拼写检查。
- wrap：输入的文本是否自动换行。
   - hard（浏览器自动插入换行符CR + LF，使得每行不超过控件的宽度）
   - soft（输入内容超过宽度时自动换行，但不会加入新的换行符，并且所有换行符都是CR + LR，这是默认值）
   - off（关闭自动换行，单行长度超过宽度时，会出现水平滚动条）。
```html
<textarea id="story" name="story"
          rows="5" cols="33">
这是一个很长的故事。
</textarea>
```
​

**<output>属性**

- for：关联控件的id属性，表示为该控件的操作结果。
- form：关联表单的id属性。
- name：控件的名称。
```html
<input type="number" name="a" value="10"> +
<input type="number" name="b" value="10"> =
<output name="result">20</output>
```



## 框架（Iframe）
| 标签 | 描述 |
| --- | --- |
| [<frame>](https://www.w3school.com.cn/tags/tag_frame.asp) | 定义框架集的窗口或框架。Inline frame |
| [<frameset>](https://www.w3school.com.cn/tags/tag_frameset.asp) | 定义框架集。 |
| [<noframes>](https://www.w3school.com.cn/tags/tag_noframes.asp) | 定义针对不支持框架的用户的替代内容。 |
| [<iframe>](https://www.w3school.com.cn/tags/tag_iframe.asp) | 定义内联框架。 |

​

<iframe>属性

- allowfullscreen：允许嵌入的网页全屏显示，需要全屏 API 的支持
- frameborder：是否绘制边框，0为不绘制，1为绘制（默认值）。建议在 CSS 里面设置样式。
- src：嵌入的网页的 URL。
- width：显示区域的宽度。
- height：显示区域的高度。
- importance：浏览器下载嵌入的网页的优先级
   - high	高优先级
   - low	低优先级
   - auto	由浏览器自行决定。
- name：内嵌窗口的名称，可以用于<a>、<form>、<base>的target属性。
- referrerpolicy：请求嵌入网页时，HTTP 请求的Referer字段的设置。
- loading
   - auto：浏览器的默认行为，与不使用loading属性效果相同。
   - lazy：<iframe>的懒加载，即将滚动进入视口时开始加载。
   - eager：立即加载资源，无论在页面上的位置如何。
- sandbox：设置嵌入的网页的权限
   - allow-forms：允许提交表单。
   - allow-modals：允许提示框，即允许执行window.alert()等会产生弹出提示框的 JavaScript 方法。
   - allow-popups：允许嵌入的网页使用window.open()方法弹出窗口。
   - allow-popups-to-escape-sandbox：允许弹出窗口不受沙箱的限制。
   - allow-orientation-lock：允许嵌入的网页用脚本锁定屏幕的方向，即横屏或竖屏。
   - allow-pointer-lock：允许嵌入的网页使用 Pointer Lock API，锁定鼠标的移动。
   - allow-presentation：允许嵌入的网页使用 Presentation API。
   - allow-same-origin：不打开该项限制，将使得所有加载的网页都视为跨域。
   - allow-scripts：允许嵌入的网页运行脚本（但不创建弹出窗口）。
   - allow-storage-access-by-user-activation：允许嵌入的网页通过 Storage Access API 访问父窗口的储存。
   - allow-top-navigation：允许嵌入的网页对顶级窗口进行导航。
   - allow-top-navigation-by-user-activation：允许嵌入的网页对顶级窗口进行导航，但必须由用户激活。
   - allow-downloads-without-user-activation：允许在没有用户激活的情况下，嵌入的网页启动下载。

​  <br />  
```html
<iframe src="https://www.example.com"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p><a href="https://www.example.com">点击打开嵌入页面</a></p>
</iframe>
```
​

**图片（Images）**

| 标签 | 描述 |
| --- | --- |
| [<img>](https://www.w3school.com.cn/tags/tag_img.asp) | image |
| [<map>](https://www.w3school.com.cn/tags/tag_map.asp) | 定义图像映射。 |
| [<area>](https://www.w3school.com.cn/tags/tag_area.asp) | 定义图像地图内部的区域。 |
| [<canvas>](https://www.w3school.com.cn/tags/tag_canvas.asp) | 定义图形。 |
| [<figcaption>](https://www.w3school.com.cn/tags/tag_figcaption.asp) | 定义 figure 元素的标题。 |
| [<figure>](https://www.w3school.com.cn/tags/tag_figure.asp) | 定义媒介内容的分组，以及它们的标题。 |
| <picture> | 容器标签 |

​

**<img> 属性**

- src（source）：图像的 URL 地址
- alt：为图像定义一串预备的可替换的文本
- width, height：图片默认以原始大小插入网页，单位是像素或百分比
- referrerpolicy：图片加载的 HTTP 请求，默认会带有Referer的头信息，对这个行为进行设置
- crossorigin：采用跨域的形式下载图片
   - anonymous：跨域请求不带有用户凭证（通常是 Cookie）。
   - use-credentials：跨域请求带有用户凭证。
- loading：指定图片的懒加载，即图片默认不加载
   - auto：浏览器默认行为，等同于不使用loading属性。
   - lazy：启用懒加载。
   - eager：立即加载资源，无论它在页面上的哪个位置。
- srcset：指定多张图像，适应不同像素密度的屏幕
- sizes：列出不同设备的图像显示宽度
```html
<figure>
  <img src="image.png" loading="lazy" alt="…" width="200" height="200">
  <figcaption>示例图片</figcaption>
</figure>

<img srcset="foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w"
     sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px"
     src="foo-1280.jpg">
     
<picture>
  <source media="(max-width: 500px)" srcset="cat-vertical.jpg">
  <source media="(min-width: 501px)" srcset="cat-horizontal.jpg">
  <img src="cat.jpg" alt="cat">
</picture>

<picture>
  <source type="image/svg+xml" srcset="logo.xml">
  <source type="image/webp" srcset="logo.webp"> 
  <img src="logo.png" alt="ACME Corp">
</picture>
```
​  <br />  

## 影音 (Multimedia)
| 标签 | 描述 |
| --- | --- |
| [<audio>](https://www.w3school.com.cn/tags/tag_audio.asp) | 定义声音内容。 |
| [<source>](https://www.w3school.com.cn/tags/tag_source.asp) | 定义媒介源。 |
| [<track>](https://www.w3school.com.cn/tags/tag_track.asp) | 定义用在媒体播放器中的文本轨道。 |
| [<video>](https://www.w3school.com.cn/tags/tag_video.asp) | 定义视频。 |
| [<embed>](https://www.w3school.com.cn/tags/tag_embed.asp) | 为外部应用程序（非 HTML）定义容器。 |
| [<object>](https://www.w3school.com.cn/tags/tag_object.asp) | 定义嵌入的对象。 |
| [<param>](https://www.w3school.com.cn/tags/tag_param.asp) | 定义对象的参数。 |

​

<video>属性

- src：视频文件的网址。
- controls：播放器是否显示控制栏。
- width：视频播放器的宽度，单位像素。
- height：视频播放器的高度，单位像素。
- autoplay：视频是否自动播放，该属性为布尔属性。
- loop：视频是否循环播放，该属性为布尔属性。
- muted：是否默认静音，该属性为布尔属性。
- poster：视频播放器的封面图片的 URL。
- preload：视频播放之前，是否缓冲视频文件。
   - none（不缓冲）
   - metadata（仅仅缓冲视频文件的元数据）
   - auto（可以缓冲整个文件）。
- playsinline：iPhone 的 Safari 浏览器播放视频时，会自动全屏，该属性可以禁止这种行为。该属性为布尔属性。
- crossorigin：是否采用跨域的方式加载视频。
   - anonymous（跨域请求时，不发送用户凭证，主要是 Cookie）
   - use-credentials（跨域时发送用户凭证）。
- currentTime：指定当前播放位置（双精度浮点数，单位为秒）。如果尚未开始播放，则会从这个属性指定的位置开始播放。
- duration：该属性只读，指示时间轴上的持续播放时间（总长度），值为双精度浮点数（单位为秒）。如果是流媒体，没有已知的结束时间，属性值为+Infinity。
```html
<video width="400" height="400"
       autoplay loop muted
       poster="poster.png">
</video>
```
​

<audio>属性

- autoplay：是否自动播放，布尔属性。
- controls：是否显示播放工具栏，布尔属性。如果不设置，浏览器不显示播放界面，通常用于背景音乐。
- crossorigin：是否使用跨域方式请求。
- loop：是否循环播放，布尔属性。
- muted：是否静音，布尔属性。
- preload：音频文件的缓冲设置。
- src：音频文件网址。
```html
<audio controls>
  <source src="foo.mp3" type="audio/mp3">
  <source src="foo.ogg" type="audio/ogg">
  <p>你的浏览器不支持 HTML5 音频，请直接下载<a href="foo.mp3">音频文件</a>。</p>
</audio>
```
​

<track>属性

- label：播放器显示的字幕名称，供用户选择。
- kind：字幕的类型
   - subtitles：默认，表示将原始声音成翻译外国文字，比如英文视频提供中文字幕
   - captions：表示原始声音的文字描述，通常是视频原始使用的语言，比如英文视频提供英文字幕。
- src：vtt 字幕文件的网址。
- srclang：字幕的语言，必须是有效的语言代码。
- default：是否默认打开，布尔属性。

<source>属性

- type：指定外部资源的 MIME 类型。
- src：指定源文件，用于<video>和<audio>。
- srcset：指定不同条件下加载的图像文件，用于<picture>。
- media：指定媒体查询表达式，用于<picture>。
- sizes：指定不同设备的显示大小，用于<picture>，必须跟srcset搭配使用。



<embed>属性

- height：显示高度，单位为像素，不允许百分比。
- width：显示宽度，单位为像素，不允许百分比。
- src：嵌入的资源的 URL。
- type：嵌入资源的 MIME 类型。
```html
<embed type="video/webm"
       src="/media/examples/flower.mp4"
       width="250"
       height="200">
```
​

<object>属性

- data：嵌入的资源的 URL。
- form：当前网页中相关联表单的id属性（如果有的话）。
- height：资源的显示高度，单位为像素，不能使用百分比。
- width：资源的显示宽度，单位为像素，不能使用百分比。
- type：资源的 MIME 类型。
- typemustmatch：布尔属性，表示data属性与type属性是否必须匹配。
```html
<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar">
</object>
```



# 字符
​

**码点表示法**  <br />  每个字符有一个 Unicode 号码，称为码点（code point）

- &#N;（十进制，N代表码点）
- &#xN;（十六进制，N代表码点）

​

**实体表示法（entity）**  <br />  HTML 为一些特殊字符，规定了容易记忆的名字，允许通过名字来表示它们

| 字符 | 实体 |
| --- | --- |
| < | &lt; |
| > | &gt; |
| " | &quot; |
| ' | &apos; |
| & | &amp; |
| © | &copy; |
| # | &num; |
| § | &sect; |
| ¥ | &yen; |
| $ | &dollar; |
| £ | &pound; |
| ¢ | &cent; |
| % | &percnt; |
| * | $ast; |
| @ | &commat; |
| ^ | &Hat; |
| ± | &plusmn; |
| 空格 | &nbsp; |


  <br />  


# 全局属性
​  <br />  

| 属性 | 描述 |
| --- | --- |
| [accesskey](https://www.w3school.com.cn/tags/att_standard_accesskey.asp) | 规定激活元素的快捷键。 |
| [class](https://www.w3school.com.cn/tags/att_standard_class.asp) | 规定元素的一个或多个类名（引用样式表中的类）。 |
| [contenteditable](https://www.w3school.com.cn/tags/att_global_contenteditable.asp) | 规定元素内容是否可编辑。 |
| [contextmenu](https://www.w3school.com.cn/tags/att_global_contextmenu.asp) | 规定元素的上下文菜单。上下文菜单在用户点击元素时显示。 |
| [data-*](https://www.w3school.com.cn/tags/att_global_data.asp) | 用于存储页面或应用程序的私有定制数据。 |
| [dir](https://www.w3school.com.cn/tags/att_standard_dir.asp) | 规定元素中内容的文本方向。（ltr, rtl, auto) |
| [draggable](https://www.w3school.com.cn/tags/att_global_draggable.asp) | 规定元素是否可拖动。 |
| [dropzone](https://www.w3school.com.cn/tags/att_global_dropzone.asp) | 规定在拖动被拖动数据时是否进行复制、移动或链接。 |
| [hidden](https://www.w3school.com.cn/tags/att_global_hidden.asp) | 规定元素仍未或不再相关。 |
| [id](https://www.w3school.com.cn/tags/att_standard_id.asp) | 规定元素的唯一 id。 |
| [lang](https://www.w3school.com.cn/tags/att_standard_lang.asp) | 规定元素内容的语言。 |
| [spellcheck](https://www.w3school.com.cn/tags/att_global_spellcheck.asp) | 规定是否对元素进行拼写和语法检查。 |
| [style](https://www.w3school.com.cn/tags/att_standard_style.asp) | 规定元素的行内 CSS 样式。 |
| [tabindex](https://www.w3school.com.cn/tags/att_standard_tabindex.asp) | 规定元素的 tab 键次序。 |
| [title](https://www.w3school.com.cn/tags/att_standard_title.asp) | 规定有关元素的额外信息。 |
| [translate](https://www.w3school.com.cn/tags/att_global_translate.asp) | 规定是否应该翻译元素内容。 |

​

lang属性的值，必须符合 BCP47 的标准。

- zh：中文
- zh-Hans：简体中文
- zh-Hant：繁体中文
- en：英语
- en-US：美国英语
- en-GB：英国英语
- es：西班牙语
- fr：法语




# 网页元素接口



## <a>
除了网页元素的通用接口（Node接口、Element接口、HTMLElement接口），它还继承了HTMLAnchorElement接口和HTMLHyperlinkElementUtils接口。  <br />  ​

[属性](https://wangdoc.com/javascript/elements/a.html#%E5%B1%9E%E6%80%A7)

- [URL 相关属性](https://wangdoc.com/javascript/elements/a.html#url-%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7)
- [accessKey](https://wangdoc.com/javascript/elements/a.html#accesskey-%E5%B1%9E%E6%80%A7)	读写<a>元素的快捷键
- [download](https://wangdoc.com/javascript/elements/a.html#download-%E5%B1%9E%E6%80%A7)表示当前链接不是用来浏览，而是用来下载
- [hreflang](https://wangdoc.com/javascript/elements/a.html#hreflang-%E5%B1%9E%E6%80%A7)表示链接指向的资源的语言
- [referrerPolicy 属性](https://wangdoc.com/javascript/elements/a.html#referrerpolicy-%E5%B1%9E%E6%80%A7)
- [rel](https://wangdoc.com/javascript/elements/a.html#rel-%E5%B1%9E%E6%80%A7)链接与当前文档的关系
- [tabIndex](https://wangdoc.com/javascript/elements/a.html#tabindex-%E5%B1%9E%E6%80%A7) Tab 键遍历顺序
- [target 属性](https://wangdoc.com/javascript/elements/a.html#target-%E5%B1%9E%E6%80%A7)
- [text 属性](https://wangdoc.com/javascript/elements/a.html#text-%E5%B1%9E%E6%80%A7)
- [type](https://wangdoc.com/javascript/elements/a.html#type-%E5%B1%9E%E6%80%A7)接目标的 MIME 类型

​  <br />  

## ​[<img>](https://wangdoc.com/javascript/elements/image.html)
继承了 HTMLImageElement 接口

- HTMLImageElement.src	图像的完整网址
- HTMLImageElement.currentSrc	当前正在展示的图像的网址
- HTMLImageElement.alt	读写对图片的文字说明。
- HTMLImageElement.isMap	图像是否为服务器端的图像映射的一部分。
- HTMLImageElement.useMap	图像对应的<map>元素。
- HTMLImageElement.srcset，HTMLImageElement.sizes
- [HTMLImageElement.width，HTMLImageElement.height](https://wangdoc.com/javascript/elements/image.html#htmlimageelementwidth%EF%BC%8Chtmlimageelementheight)
- [HTMLImageElement.naturalWidth，HTMLImageElement.naturalHeight](https://wangdoc.com/javascript/elements/image.html#htmlimageelementnaturalwidth%EF%BC%8Chtmlimageelementnaturalheight)
- [HTMLImageElement.complete](https://wangdoc.com/javascript/elements/image.html#htmlimageelementcomplete)
- [HTMLImageElement.crossOrigin](https://wangdoc.com/javascript/elements/image.html#htmlimageelementcrossorigin)
- [HTMLImageElement.referrerPolicy](https://wangdoc.com/javascript/elements/image.html#htmlimageelementreferrerpolicy)
- [HTMLImageElement.x，HTMLImageElement.y](https://wangdoc.com/javascript/elements/image.html#htmlimageelementx%EF%BC%8Chtmlimageelementy)

​  <br />  

## ​[<form>](https://wangdoc.com/javascript/elements/form.html)
继承了 HTMLFormElement 接口  <br />  ​

属性

- elements：返回一个类似数组的对象，成员是属于该表单的所有控件元素。该属性只读。
- length：返回一个整数，表示属于该表单的控件数量。该属性只读。
- name：字符串，表示该表单的名称。
- method：字符串，表示提交给服务器时所使用的 HTTP 方法。
- target：字符串，表示表单提交后，服务器返回的数据的展示位置。
- action：字符串，表示表单提交数据的 URL。
- enctype（或encoding）：字符串，表示表单提交数据的编码方法，可能的值有application/x-www-form-urlencoded、multipart/form-data和text/plain。
- acceptCharset：字符串，表示服务器所能接受的字符编码，多个编码格式之间使用逗号或空格分隔。
- autocomplete：字符串on或off，表示浏览器是否要对<input>控件提供自动补全。
- noValidate：布尔值，表示是否关闭表单的自动校验。

​

方法

- submit()：提交表单，但是不会触发submit事件和表单的自动校验。
- reset()：重置表单控件的值为默认值。
- checkValidity()：如果控件能够通过自动校验，返回true，否则返回false，同时触发invalid事件。




## ​[<input>](https://wangdoc.com/javascript/elements/input.html)
HTMLInputElement 接口  <br />  ​

[特征属性](https://wangdoc.com/javascript/elements/input.html#%E7%89%B9%E5%BE%81%E5%B1%9E%E6%80%A7)

- name：字符串，表示<input>节点的名称。该属性可读写。
- type：字符串，表示<input>节点的类型。该属性可读写。
- disabled：布尔值，表示<input>节点是否禁止使用。一旦被禁止使用，表单提交时不会包含该<input>节点。该属性可读写。
- autofocus：布尔值，表示页面加载时，该元素是否会自动获得焦点。该属性可读写。
- required：布尔值，表示表单提交时，该<input>元素是否必填。该属性可读写。
- value：字符串，表示该<input>节点的值。该属性可读写。
- validity：返回一个ValidityState对象，表示<input>节点的校验状态。该属性只读。
- validationMessage：字符串，表示该<input>节点的校验失败时，用户看到的报错信息。如果该节点不需要校验，或者通过校验，该属性为空字符串。该属性只读。
- willValidate：布尔值，表示表单提交时，该<input>元素是否会被校验。该属性只读。

​

[表单相关属性](https://wangdoc.com/javascript/elements/input.html#%E8%A1%A8%E5%8D%95%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7)

- form：返回<input>元素所在的表单（<form>）节点。该属性只读。
- formAction：字符串，表示表单提交时的服务器目标。该属性可读写，一旦设置了这个属性，会覆盖表单元素的action属性。
- formEncType：字符串，表示表单提交时数据的编码方式。该属性可读写，一旦设置了这个属性，会覆盖表单元素的enctype的属性。
- formMethod：字符串，表示表单提交时的 HTTP 方法。该属性可读写，一旦设置了这个属性，会覆盖表单元素的method属性。
- formNoValidate：布尔值，表示表单提交时，是否要跳过校验。该属性可读写，一旦设置了这个属性，会覆盖表单元素的formNoValidate属性。
- formTarget：字符串，表示表单提交后，服务器返回数据的打开位置。该属性可读写，一旦设置了这个属性，会覆盖表单元素的target属性

[文本输入框的特有属性](https://wangdoc.com/javascript/elements/input.html#%E6%96%87%E6%9C%AC%E8%BE%93%E5%85%A5%E6%A1%86%E7%9A%84%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7)

- autocomplete：字符串on或off，表示该<input>节点的输入内容可以被浏览器自动补全。该属性可读写。
- maxLength：整数，表示可以输入的字符串最大长度。如果设为负整数，会报错。该属性可读写。
- size：整数，表示<input>节点的显示长度。如果类型是text或password，该属性的单位是字符个数，否则单位是像素。该属性可读写。
- pattern：字符串，表示<input>节点的值应该满足的正则表达式。该属性可读写。
- placeholder：字符串，表示该<input>节点的占位符，作为对元素的提示。该字符串不能包含回车或换行。该属性可读写。
- readOnly：布尔值，表示用户是否可以修改该节点的值。该属性可读写。
- min：字符串，表示该节点的最小数值或日期，且不能大于max属性。该属性可读写。
- max：字符串，表示该节点的最大数值或日期，且不能小于min属性。该属性可读写。
- selectionStart：整数，表示选中文本的起始位置。如果没有选中文本，返回光标在<input>元素内部的位置。该属性可读写。
- selectionEnd：整数，表示选中文本的结束位置。如果没有选中文本，返回光标在<input>元素内部的位置。该属性可读写。
- selectionDirection：字符串，表示选中文本的方向。可能的值包括forward（与文字书写方向一致）、backward（与文字书写方向相反）和none（文字方向未知）。该属性可读写。

​

[复选框和单选框的特有属性](https://wangdoc.com/javascript/elements/input.html#%E5%A4%8D%E9%80%89%E6%A1%86%E5%92%8C%E5%8D%95%E9%80%89%E6%A1%86%E7%9A%84%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7)

- checked：布尔值，表示该<input>元素是否选中。该属性可读写。
- defaultChecked：布尔值，表示该<input>元素默认是否选中。该属性可读写。
- indeterminate：布尔值，表示该<input>元素是否还没有确定的状态。一旦用户点击过一次，该属性就会变成false，表示用户已经给出确定的状态了。该属性可读写。

​

[文件上传按钮的特有属性](https://wangdoc.com/javascript/elements/input.html#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E6%8C%89%E9%92%AE%E7%9A%84%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7)

- accept：字符串，表示该元素可以接受的文件类型，类型之间使用逗号分隔。该属性可读写。
- files：返回一个FileList实例对象，包含了选中上传的一组File实例对象。

​

[其他属性](https://wangdoc.com/javascript/elements/input.html#%E5%85%B6%E4%BB%96%E5%B1%9E%E6%80%A7)

- defaultValue：字符串，表示该<input>节点的原始值。
- dirName：字符串，表示文字方向。
- accessKey：字符串，表示让该<input>节点获得焦点的某个字母键。
- list：返回一个<datalist>节点，该节点必须绑定<input>元素，且<input>元素的类型必须可以输入文本，否则无效。该属性只读。
- multiple：布尔值，表示是否可以选择多个值。
- labels：返回一个NodeList实例，代表绑定当前<input>节点的<label>元素。该属性只读。
- step：字符串，表示在min属性到max属性之间，每次递增或递减时的数值或时间。
- valueAsDate：Date实例，一旦设置，该<input>元素的值会被解释为指定的日期。如果无法解析该属性的值，<input>节点的值将是null。
- valueAsNumber：浮点数，当前<input>元素的值会被解析为这个数值。

​

方法

- focus()：当前<input>元素获得焦点。
- blur()：移除<input>元素的焦点。
- select()：选中<input>元素内部的所有文本。该方法不能保证<input>获得焦点，最好先用focus()方法，再用这个方法。
- click()：模拟鼠标点击当前的<input>元素。
- setSelectionRange()：选中<input>元素内部的一段文本，但不会将焦点转移到选中的文本。
- setRangeText()：新文本替换选中的文本。
- setCustomValidity()：该方法用于自定义校验失败时的报错信息。
- checkValidity()：返回一个布尔值，表示当前节点的校验结果。
- stepDown()：将当前<input>节点的值减少一个步长。
- stepUp()：将当前<input>节点的值增加一个步长。

​  <br />  

## ​[<option>](https://wangdoc.com/javascript/elements/option.html)
HTMLOptionElement 接口  <br />  属性

- disabled：布尔值，表示该项是否可选择。
- defaultSelected：布尔值，表示该项是否默认选中。一旦设为true，该项的值就是<select>的默认值。
- form：返回<option>所在的表单元素。如果不属于任何表单，则返回null。该属性只读。
- index：整数，表示该选项在整个下拉列表里面的位置。该属性只读。
- label：字符串，表示对该选项的说明。如果该属性未设置，则返回该选项的文本内容。
- selected：布尔值，表示该选项是否选中。
- text：字符串，该选项的文本内容。
- value：字符串，该选项的值。表单提交时，上传的就是选中项的这个属性。




## ​[<video>，<audio>](https://wangdoc.com/javascript/elements/video.html)
HTMLMediaElement接口  <br />  属性

- HTMLMediaElement.audioTracks：返回一个类似数组的对象，表示媒体文件包含的音轨。
- HTMLMediaElement.autoplay：布尔值，表示媒体文件是否自动播放
- HTMLMediaElement.buffered：返回一个 TimeRanges 对象，表示浏览器缓冲的内容。
- HTMLMediaElement.controls：布尔值，表示是否显示媒体文件的控制栏
- HTMLMediaElement.controlsList：返回一个类似数组的对象，表示是否显示控制栏的某些控件。
- HTMLMediaElement.crossOrigin：字符串，表示跨域请求时是否附带用户信息（比如 Cookie）
- HTMLMediaElement.currentSrc：字符串，表示当前正在播放的媒体文件的绝对路径。该属性只读。
- HTMLMediaElement.currentTime：浮点数，表示当前播放的时间点。
- HTMLMediaElement.defaultMuted：布尔值，表示默认是否关闭音量
- HTMLMediaElement.defaultPlaybackRate：浮点数，表示默认的播放速率，默认是1.0。
- HTMLMediaElement.disableRemotePlayback：布尔值，是否允许远程回放，即远程回放的时候是否会有工具栏。
- HTMLMediaElement.duration：浮点数，表示媒体文件的时间长度（单位秒）。如果当前没有媒体文件，该属性返回0。该属性只读。
- HTMLMediaElement.ended：布尔值，表示当前媒体文件是否已经播放结束。该属性只读。
- HTMLMediaElement.error：返回最近一次报错的错误对象，如果没有报错，返回null。
- HTMLMediaElement.loop：布尔值，表示媒体文件是否会循环播放，对应 HTML 属性loop。
- HTMLMediaElement.muted：布尔值，表示音量是否关闭。
- HTMLMediaElement.networkState：当前网络状态，共有四个可能的值。0表示没有数据；1表示媒体元素处在激活状态，但是还没开始下载；2表示下载中；3表示没有找到媒体文件。
- HTMLMediaElement.paused：布尔值，表示媒体文件是否处在暂停状态。该属性只读。
- HTMLMediaElement.playbackRate：浮点数，表示媒体文件的播放速度，1.0是正常速度。如果是负数，表示向后播放。
- HTMLMediaElement.played：返回一个 TimeRanges 对象，表示播放的媒体内容。该属性只读。
- HTMLMediaElement.preload：字符串，表示应该预加载哪些内容，可能的值为none、metadata和auto。
- HTMLMediaElement.readyState：整数，表示媒体文件的准备状态，可能的值为0（没有任何数据）、1（已获取元数据）、2（可播放当前帧，但不足以播放多个帧）、3（可以播放多帧，至少为两帧）、4（可以流畅播放）。该属性只读。
- HTMLMediaElement.seekable：返回一个 TimeRanges 对象，表示一个用户可以搜索的媒体内容范围。该属性只读。
- HTMLMediaElement.seeking：布尔值，表示媒体文件是否正在寻找新位置。该属性只读。
- HTMLMediaElement.src：布尔值，表示媒体文件的 URL
- HTMLMediaElement.srcObject：返回src属性对应的媒体文件资源，可能是MediaStream、MediaSource、Blob或File对象。
- HTMLMediaElement.textTracks：返回一个类似数组的对象，包含所有文本轨道。该属性只读。
- HTMLMediaElement.videoTracks：返回一个类似数组的对象，包含多有视频轨道。该属性只读。
- HTMLMediaElement.volume：浮点数，表示音量。0.0 表示静音，1.0 表示最大音量。



方法

- HTMLMediaElement.addTextTrack()：添加文本轨道（比如字幕）到媒体文件。
- HTMLMediaElement.captureStream()：返回一个 MediaStream 对象，用来捕获当前媒体文件的流内容。
- HTMLMediaElement.canPlayType()：该方法接受一个 MIME 字符串作为参数，用来判断这种类型的媒体文件是否可以播放。
- HTMLMediaElement.fastSeek()：该方法接受一个浮点数作为参数，表示指定的时间（单位秒）。
- HTMLMediaElement.load()：重新加载媒体文件。
- HTMLMediaElement.pause()：暂停播放。该方法没有返回值。
- HTMLMediaElement.play()：开始播放。该方法返回一个 Promise 对象。



HTMLVideoElement 

- HTMLVideoElement.height：字符串，表示视频播放区域的高度（单位像素）
- HTMLVideoElement.width：字符串，表示视频播放区域的宽度（单位像素）
- HTMLVideoElement.videoHeight：该属性只读，返回一个整数，表示视频文件自身的高度（单位像素）。
- HTMLVideoElement.videoWidth：该属性只读，返回一个整数，表示视频文件自身的宽度（单位像素）。
- HTMLVideoElement.poster：字符串，表示一个图像文件的 URL，用来在无法获取视频文件时替代显示

​  <br />  

- HTMLVideoElement.getVideoPlaybackQuality()：返回一个对象，包含了当前视频回放的一些数据

​

事件

- loadstart：开始加载媒体文件时触发。
- progress：媒体文件加载过程中触发，大概是每秒触发2到8次。
- loadedmetadata：媒体文件元数据加载成功时触发。
- loadeddata：当前播放位置加载成功后触发。
- canplay：已经加载了足够的数据，可以开始播放时触发，后面可能还会请求数据。
- canplaythrough：已经加载了足够的数据，可以一直播放时触发，后面不需要继续请求数据。
- suspend：已经缓冲了足够的数据，暂时停止下载时触发。
- stalled：尝试加载数据，但是没有数据返回时触发。
- play：调用play()方法时或自动播放启动时触发。如果已经加载了足够的数据，这个事件后面会紧跟playing事件，否则会触发waiting事件。
- waiting：由于没有足够的缓存数据，无法播放或播放停止时触发。一旦缓冲数据足够开始播放，后面就会紧跟playing事件。
- playing：媒体开始播放时触发。
- timeupdate：currentTime属性变化时触发，每秒可能触发4到60次。
- pause：调用pause()方法、播放暂停时触发。
- seeking：脚本或者用户要求播放某个没有缓冲的位置，播放停止开始加载数据时触发。此时，seeking属性返回true。
- seeked：seeking属性变回false时触发。
- ended：媒体文件播放完毕时触发。
- durationchange：duration属性变化时触发。
- volumechange：音量变化时触发。
- ratechange：播放速度或默认的播放速度变化时触发。
- abort：停止加载媒体文件时触发，通常是用户主动要求停止下载。
- error：网络或其他原因导致媒体文件无法加载时触发。
- emptied：由于error或abort事件导致networkState属性变成无法获取数据时触发。




---

​  <br />  

# ​[Canvas](https://wangdoc.com/webapi/canvas.html)
一个可以用 JavaScript 操作的位图（bitmap）
```vue
<canvas id="myCanvas" width="400" height="250">
  您的浏览器不支持 Canvas
</canvas>

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
```
​  <br />  

## 绘制图形
路径

- CanvasRenderingContext2D.beginPath()：开始绘制路径。
- CanvasRenderingContext2D.closePath()：结束路径，返回到当前路径的起始点，会从当前点到起始点绘制一条直线。如果图形已经封闭，或者只有一个点，那么此方法不会产生任何效果。
- CanvasRenderingContext2D.moveTo()：设置路径的起点，即将一个新路径的起始点移动到(x，y)坐标。
- CanvasRenderingContext2D.lineTo()：使用直线从当前点连接到(x, y)坐标。
- CanvasRenderingContext2D.fill()：在路径内部填充颜色（默认为黑色）。
- CanvasRenderingContext2D.stroke()：路径线条着色（默认为黑色）。
- CanvasRenderingContext2D.fillStyle：指定路径填充的颜色和样式（默认为黑色）。
- CanvasRenderingContext2D.strokeStyle：指定路径线条的颜色和样式（默认为黑色）。



线型

- CanvasRenderingContext2D.lineWidth：指定线条的宽度，默认为1.0。
- CanvasRenderingContext2D.lineCap：指定线条末端的样式
   - butt（默认值，末端为矩形）
   - round（末端为圆形）
   - square（末端为突出的矩形，矩形宽度不变，高度为线条宽度的一半）
- CanvasRenderingContext2D.lineJoin：指定线段交点的样式
   - round（交点为扇形）
   - bevel（交点为三角形底边）
   - miter（默认值，交点为菱形)
- CanvasRenderingContext2D.miterLimit：指定交点菱形的长度，默认为10。该属性只在lineJoin属性的值等于miter时有效。
- CanvasRenderingContext2D.getLineDash()：返回一个数组，表示虚线里面线段和间距的长度。
- CanvasRenderingContext2D.setLineDash()：数组，用于指定虚线里面线段和间距的长度。

​

矩形

- CanvasRenderingContext2D.rect()：绘制矩形路径。
- CanvasRenderingContext2D.fillRect()：填充一个矩形。
- CanvasRenderingContext2D.strokeRect()：绘制矩形边框。
- CanvasRenderingContext2D.clearRect()：指定矩形区域的像素都变成透明。

​

弧线

- CanvasRenderingContext2D.arc()：通过指定圆心和半径绘制弧形。
- CanvasRenderingContext2D.arcTo()：通过指定两根切线和半径绘制弧形。

​

文本

- CanvasRenderingContext2D.fillText()：在指定位置绘制实心字符。
   - text：所要填充的字符串。
   - x：文字起点的横坐标，单位像素。
   - y：文字起点的纵坐标，单位像素。
   - maxWidth：文本的最大像素宽度。
- CanvasRenderingContext2D.strokeText()：在指定位置绘制空心字符。
- CanvasRenderingContext2D.measureText()：返回一个 TextMetrics 对象。
- CanvasRenderingContext2D.font：指定字型大小和字体，默认值为10px sans-serif。
- CanvasRenderingContext2D.textAlign：文本的对齐方式，默认值为start。
- CanvasRenderingContext2D.direction：文本的方向，默认值为inherit。
- CanvasRenderingContext2D.textBaseline：文本的垂直位置，默认值为alphabetic。

渐变色和图像填充

- CanvasRenderingContext2D.createLinearGradient()：定义线性渐变样式。
- CanvasRenderingContext2D.createRadialGradient()：定义辐射渐变样式。
- CanvasRenderingContext2D.createPattern()：定义图像填充样式。

​

阴影

- CanvasRenderingContext2D.shadowBlur：阴影的模糊程度，默认为0。
- CanvasRenderingContext2D.shadowColor：阴影的颜色，默认为black。
- CanvasRenderingContext2D.shadowOffsetX：阴影的水平位移，默认为0。
- CanvasRenderingContext2D.shadowOffsetY：阴影的垂直位移，默认为0。




## 图像处理
​

CanvasRenderingContext2D.drawImage()

- image：图像元素
- sx：图像内部的横坐标，用于映射到画布的放置点上。
- sy：图像内部的纵坐标，用于映射到画布的放置点上。
- sWidth：图像在画布上的宽度，会产生缩放效果。如果未指定，则图像不会缩放，按照实际大小占据画布的宽度。
- sHeight：图像在画布上的高度，会产生缩放效果。如果未指定，则图像不会缩放，按照实际大小占据画布的高度。
- dx：画布内部的横坐标，用于放置图像的左上角
- dy：画布内部的纵坐标，用于放置图像的右上角
- dWidth：图像在画布内部的宽度，会产生缩放效果。
- dHeight：图像在画布内部的高度，会产生缩放效果。



像素读写

- CanvasRenderingContext2D.getImageData()：将画布读取成一个 ImageData 对象
- CanvasRenderingContext2D.putImageData()：将 ImageData 对象写入画布
- CanvasRenderingContext2D.createImageData()：生成 ImageData 对象

​

CanvasRenderingContext2D.save()：将画布的当前样式保存到堆栈，相当于在内存之中产生一个样式快照。  <br />  CanvasRenderingContext2D.restore()：将画布的样式恢复到上一个保存的快照，如果没有已保存的快照，则不产生任何效果。  <br />  CanvasRenderingContext2D.canvas：指向当前CanvasRenderingContext2D对象所在的<canvas>元素  <br />  ​

图像变换

- CanvasRenderingContext2D.rotate()：图像旋转
- CanvasRenderingContext2D.scale()：图像缩放
- CanvasRenderingContext2D.translate()：图像平移
- CanvasRenderingContext2D.transform()：通过一个变换矩阵完成图像变换
- CanvasRenderingContext2D.setTransform()：取消前面的图像变换




## 元素的方法
canvas.toDataURL(type, quality)  <br />  canvas.toBlob(callback, mimeType, quality)
```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var posX = 20;
var posY = 100;

setInterval(function () {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  posX += 1;
  posY += 0.25;
  
  ctx.beginPath();
  ctx.fillStyle = 'white';
  
  ctx.arc(posX, posY, 10, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}, 30);
```
​  <br />  

# ​[SVG](https://wangdoc.com/webapi/svg.html)
 (Scalable Vector Graphics ，可伸缩矢量图形)

- 用于定义用于网络的基于矢量的图形
- 使用 XML 格式定义图形
- 放大或改变尺寸的情况下其图形质量不会有损失



`[<svg>](https://wangdoc.com/webapi/svg.html#svg%E6%A0%87%E7%AD%BE)`  <br />  一种基于 XML 语法的图像格式
```html
<svg width="100" height="100" viewBox="50 50 50 50">
  <circle id="mycircle" cx="50" cy="50" r="50" />
</svg>
```

  <br />  SVG 的 CSS 属性

-  fill：填充色 
-  stroke：描边色 
-  stroke-width：边框宽度 


  <br />  `[<circle>](https://wangdoc.com/webapi/svg.html#circle%E6%A0%87%E7%AD%BE)`  <br />  cx、cy、r属性分别为横坐标、纵坐标和半径，单位为像素
```html
<circle cx="30"  cy="50" r="25" />
```

  <br />  `[<line>](https://wangdoc.com/webapi/svg.html#line%E6%A0%87%E7%AD%BE)`
```html
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:rgb(0,0,0);stroke-width:5" />
```

  <br />  `[<polyline>](https://wangdoc.com/webapi/svg.html#polyline%E6%A0%87%E7%AD%BE)`
```html
 <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
```

  <br />  `[<rect>](https://wangdoc.com/webapi/svg.html#rect%E6%A0%87%E7%AD%BE)`
```html
  <rect x="0" y="0" height="100" width="200" style="stroke: #70d5dd; fill: #dd524b" />
```

  <br />  `[<ellipse>](https://wangdoc.com/webapi/svg.html#ellipse%E6%A0%87%E7%AD%BE)`
```html
 <ellipse cx="60" cy="60" ry="40" rx="20" stroke="black" stroke-width="5" fill="silver"/>
  cx属性和cy属性，指定了椭圆中心的横坐标和纵坐标（单位像素）；
  rx属性和ry属性，指定了椭圆横向轴和纵向轴的半径（单位像素）。
```

  <br />  `[<polygon>](https://wangdoc.com/webapi/svg.html#polygon%E6%A0%87%E7%AD%BE)`
```html
<polygon fill="green" stroke="orange" stroke-width="1" points="0,0 100,0 100,100 0,100 0,0"/>
```

  <br />  `[<path>](https://wangdoc.com/webapi/svg.html#path%E6%A0%87%E7%AD%BE)`

-  M：移动到（moveto） 
-  L：画直线到（lineto） 
-  Z：闭合路径 
```html
  <path d="
  M 18,3
  L 46,3
  L 46,40
  L 61,40
  L 32,68
  L 3,40
  L 18,40
  Z
 "></path>
```

  <br />  `<text>`
```html
 <text x="50" y="25">Hello World</text>
```

  <br />  `[<use>](https://wangdoc.com/webapi/svg.html#use%E6%A0%87%E7%AD%BE)` 复制一个形状  <br />  
  <br />  `[<g>](https://wangdoc.com/webapi/svg.html#g%E6%A0%87%E7%AD%BE)`  将多个形状组成一个组（group）
```html
   <g id="myCircle">
    <text x="25" y="20">圆形</text>
    <circle cx="50" cy="50" r="20"/>
  </g>
  
 <use href="#myCircle" x="10" y="0" fill="blue" />
```

  <br />  `[<defs>](https://wangdoc.com/webapi/svg.html#defs%E6%A0%87%E7%AD%BE)` 自定义形状，它内部的代码不会显示，仅供引用
```html
  <defs>
    <g id="myCircle">
      <text x="25" y="20">圆形</text>
      <circle cx="50" cy="50" r="20"/>
    </g>
  </defs>
```

  <br />  `[<pattern>](https://wangdoc.com/webapi/svg.html#pattern%E6%A0%87%E7%AD%BE)`	自定义一个形状，该形状可以被引用来平铺一个区域。
```html
  <defs>
    <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle fill="#bee9e8" cx="50" cy="50" r="35" />
    </pattern>
  </defs>
```

  <br />  `[<image>](https://wangdoc.com/webapi/svg.html#image%E6%A0%87%E7%AD%BE)`
```html
  <image xlink:href="path/to/image.jpg"
    width="50%" height="50%"/>
```

  <br />  `[<animate>](https://wangdoc.com/webapi/svg.html#animate%E6%A0%87%E7%AD%BE)` 产生动画效果

-  attributeName：发生动画效果的属性名。 
-  from：单次动画的初始值。 
-  to：单次动画的结束值。 
-  dur：单次动画的持续时间。 
-  repeatCount：动画的循环模式。 



```html
  <rect x="0" y="0" width="100" height="100" fill="#feac5e">
    <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
  </rect>
```
[  <br />  ](https://wangdoc.com/webapi/svg.html#animatetransform%E6%A0%87%E7%AD%BE)  <br />  `[<animateTransform>](https://wangdoc.com/webapi/svg.html#animatetransform%E6%A0%87%E7%AD%BE)`
```html
  <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
    <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 200 200" to="360 400 400" repeatCount="indefinite" />
  </rect>
```

  <br />  读取 SVG 源码
```javascript
var svgString = new XMLSerializer()
  .serializeToString(document.querySelector('svg'));
```

  <br />  SVG 图像转为 Canvas 图像
```javascript
// 将 SVG 图像指定到Image对象的src属性
var img = new Image();
var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});

var DOMURL = self.URL || self.webkitURL || self;
var url = DOMURL.createObjectURL(svg);

img.src = url;

// 当图像加载完成后，再将它绘制到<canvas>元素
img.onload = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
};
```



# 响应性设计（Responsive Web Design）
自动识别屏幕宽度、并做出相应调整的网页设计。  <br />  **允许网页宽度自动调整**  <br />  

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!-- 网页宽度默认等于屏幕宽度（width=device-width），
原始缩放比例（initial-scale=1）为1.0，即网页初始大小占屏幕面积的100%。-->
```

  <br />  **不使用绝对宽度**  <br />  
  <br />  **流动布局（fluid grid）**：各个区块的位置都是浮动的，不是固定不变的。  <br />  

```css
.main {
  float: right;
  width: 70%;
}
.leftBar {
  float: left;
  width: 25%;
}
```

  <br />  **选择加载CSS**  <br />  

```html
<link rel="stylesheet" type="text/css"
  media="screen and (min-width: 400px) and (max-device-width: 600px)"
  href="smallScreen.css" />
  <!-- 如果屏幕宽度在400像素到600像素之间，则加载smallScreen.css文件。-->

   @import url("tinyScreen.css") screen and (max-device-width: 400px);
```

  <br />  **CSS的@media规则**  <br />  

```css
@media screen and (max-device-width: 400px) {
  .column {
    float: none;
    width:auto;
  }
  #sidebar {
    display:none;
  }
}
```

  <br />  如果屏幕宽度小于400像素，则column块取消浮动（float:none）、宽度自动调节（width:auto），sidebar块不显示（display:none）


# ​[可访问性（accessibility）](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility)


Web内容对于残障用户的可阅读和可理解性，也让普通用户能更容易使用和理解（使用移动设备或低速网络等）​

- [良好的语义](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/HTML#%E8%89%AF%E5%A5%BD%E7%9A%84%E8%AF%AD%E4%B9%89)

​

**ARIA** (Accessible Rich Internet Applications) 是一组属性，用于定义使残障人士更容易访问 Web 内容和 Web 应用程序  <br />  它补充了 HTML，以便在没有其他机制时可以将应用程序中常用的交互和小部件传递给辅助技术。

[WAI-ARIA Roles](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles)  <br />  [使用 ARIA：角色、状态和属性](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques)

