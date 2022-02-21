<h1>—— 层叠样式表 (Cascading Style Sheets) ——</h1>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank">CSS</a></strong>：一种 样式表 语言，用来描述 HTML 或 XML文档的呈现</p>
<p>样式规则语法</p>
<pre data-syntax="css"><code class="lang-css hljs raw">style-rule ::=
    selectors-list {
      properties-list
    }
    
    
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
    
    
/* Comment */

</code></pre>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax" target="_blank">值定义语法</a></p>
<ul>
<li>
<p>声明（declaration）： 一个属性与值的键值对</p>
</li>
<li>
<p>属性（ property）：一个标识符，用可读的名称来表示其特性。</p>
</li>
<li>
<p>值（value）：描述了浏览器引擎如何处理该特性</p>
</li>
</ul>
<p>如果值为若干单词，则要给值加引号</p>
<h1>选择器（Selector）</h1>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#simple_selectors" target="_blank">基本选择器</a></p>
<ul>
<li>
<p>通配选择器 <em>, ns|</em>, <em>|</em>, |*</p>
</li>
<li>
<p>元素选择器 elementname(元素名称)</p>
</li>
<li>
<p>类选择器 .classname(类名)</p>
</li>
<li>
<p>ID 选择器 #idname(ID 名)</p>
</li>
<li>
<p>属性选择器 [属性=值]</p>
</li>
</ul>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E5%88%86%E7%BB%84%E9%80%89%E6%8B%A9%E5%99%A8" target="_blank">分组选择器</a></p>
<p><strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list" target="_blank">选择器列表</a> A, B</strong>	同时选择A 和 B元素。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#combinators" target="_blank">组合选择器</a></p>
<ul>
<li>相邻兄弟选择器 A + B</li>
</ul>
<p>指定A和B选择的元素具有相同的父元素，并且B选择的元素在水平方向上紧随A选择的元素。</p>
<ul>
<li>普通兄弟选择器 A ~ B</li>
</ul>
<p>指定由A和B选择的元素共享相同的父元素，并指定A选择的元素在B选择的元素之前（但不一定紧接在B之前）。</p>
<ul>
<li>子选择器 A &gt; B</li>
</ul>
<p>指定B选择的元素是A选择的元素的直接子元素。</p>
<ul>
<li>后代选择器 A B</li>
</ul>
<p>指定B选择的元素是A选择的元素的后代，但不一定是直接子代。</p>
<p><strong>An+B of S</strong></p>
<p>:nth-chid(even)	偶数节点</p>
<p>:nth-child(3n+1 of li.important) 第4，7...个 li.important节点</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes" target="_blank">伪类</a> (Pseudo-classes)：添加到选择器的关键字，指定要选择的元素的特殊状态。</p>
<pre data-syntax="css"><code class="lang-css hljs raw">selector:pseudo-class {
  property: value;
}

</code></pre>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements" target="_blank">伪元素</a>：一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。</p>
<pre data-syntax="css"><code class="lang-css hljs raw">selector::pseudo-element {
  property: value;
}

</code></pre>
<h1>样式</h1>
<p>外部样式表</p>
<pre data-syntax="css"><code class="lang-css hljs raw">&lt;head&gt;
&lt;link rel="stylesheet" type="text/css" href="mystyle.css" /&gt;
&lt;/head&gt;

</code></pre>
<p>不要在属性值与单位之间留有空格</p>
<p>内部样式表</p>
<pre data-syntax="css"><code class="lang-css hljs raw">&lt;head&gt;
&lt;style type="text/css"&gt;
  hr {color: sienna;}
  p {margin-left: 20px;}
  body {background-image: url("images/back40.gif");}
&lt;/style&gt;
&lt;/head&gt;

</code></pre>
<p>内联样式</p>
<pre data-syntax="css"><code class="lang-css hljs raw">&lt;p style="color: sienna; margin-left: 20px"&gt;
This is a paragraph
&lt;/p&gt;

</code></pre>
<p>如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。</p>
<h1>层叠 继承 优先级</h1>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#%E5%B1%82%E5%8F%A0" target="_blank">层叠</a>：当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。</p>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/CSS/inheritance" target="_blank">继承</a></strong></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#%E6%8E%A7%E5%88%B6%E7%BB%A7%E6%89%BF" target="_blank">控制继承</a></p>
<ul>
<li>
<p>inherit：设置该属性会使子元素属性和父元素相同。即 "开启继承".</p>
</li>
<li>
<p>initial：设置属性值和浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 inherit 。</p>
</li>
<li>
<p>unset：将属性重置为自然值，如果属性是自然继承那么就是 inherit，否则和 initial一样</p>
</li>
</ul>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity" target="_blank">优先级</a></strong></p>
<ul>
<li>
<p>内联样式 &gt; ID 选择器 &gt; 类选择器 = 属性选择器 = 伪类选择器 &gt; 标签选择器 = 伪元素选择器</p>
</li>
<li>
<p>属性后插有 !important 的属性拥有最高优先级</p>
</li>
<li>
<p>计算选择符中 ID 选择器的个数（a），类选择器、属性选择器以及伪类选择器的个数之和（b），标签选择器和伪元素选择器的个数之和（c），按 a、b、c 的顺序依次比较大小，大的则优先级高，相等则比较下一个。若都相等，按照"就近原则"。</p>
</li>
</ul>
<h1><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule" target="_blank">@ 规则</a></h1>
<p>@charset：定义样式表使用的字符集.</p>
<p>@import：引入一个外部样式表.</p>
<p>@namespace：考虑XML命名空间。</p>
<p>嵌套@规则：可以作为样式表里的一个语句，也可以用在条件规则组里</p>
<p>@media：如果满足媒介查询的条件则条件规则组里的规则生效。</p>
<p>@page：描述打印文档时布局的变化.</p>
<p>@font-face：描述将下载的外部的字体。</p>
<p>@keyframes：描述 CSS 动画的中间步骤 .</p>
<p>@supports：如果满足给定条件则条件规则组里的规则生效。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank">响应式设计</a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Media_queries" target="_blank">媒体查询</a>：根据各种设备特征和参数的值或者是否存在来调整网站或应用。</p>
<pre data-syntax="css"><code class="lang-css hljs raw">@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}

媒体类型
    all
    print
    screen
    speech
    
媒体特征规则
min-width、max-width和width
朝向orientation：竖放（portrait mode）和横放（landscape mode）

</code></pre>
<p>viewport是严格等于浏览器的窗口。在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。</p>
<p>物理像素(physical pixel)	显示器(手机屏幕)上最小的物理显示单元，每个像素可以根据操作系统设置自己的颜色和亮度</p>
<p>设备独立像素(density-independent pixel)	可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(如CSS像素)，然后由相关系统转换为物理像素。</p>
<p>设备像素比(device pixel ratio)	定义了物理像素和设备独立像素的对应关系</p>
<pre data-syntax="css"><code class="lang-css hljs raw">设备像素比 = 物理像素 / 设备独立像素

</code></pre>
<p>rem布局</p>
<pre data-syntax="css"><code class="lang-css hljs raw">· 媒体查询，在不同分辨率下给 html 的 font-size 赋值
@media screen and (min-width: 640px) {
    html {
            font-size: 200px;
        }
}


// · js 动态计算赋值
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth&gt;=640){    // iPhone 5
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

1rem = 100px
width: 0.55rem;
height: 0.37rem;

</code></pre>
<h1>布局 Layout</h1>
<h2>正常布局流（Normal flow）</h2>
<p>一个<a href="https://wiki.developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements" target="_blank">块级元素</a>的内容宽度是其父元素的100%，其高度与其内容高度一致。内联元素的height width与内容一致。</p>
<p>块级元素按照基于其父元素的<a href="https://wiki.developer.mozilla.org/en-US/docs/Web/CSS/writing-mode" target="_blank">书写顺序</a>(默认值: horizontal-tb)的块流动方向(block flow direction)放置 --- 每个块级元素会在上一个元素下面另起一行，它们会被设置好的margin 分隔</p>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model" target="_blank">盒模型</a></strong></p>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E5%9D%97%E7%BA%A7%E7%9B%92%E5%AD%90%EF%BC%88block_box%EF%BC%89_%E5%92%8C_%E5%86%85%E8%81%94%E7%9B%92%E5%AD%90%EF%BC%88inline_box%EF%BC%89" target="_blank">块级盒子（Block box）</a></strong></p>
<ul>
<li>
<p>盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间</p>
</li>
<li>
<p>每个盒子都会换行</p>
</li>
<li>
<p>width 和 height 属性可以发挥作用</p>
</li>
<li>
<p>内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”</p>
</li>
</ul>
<p><strong><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E5%9D%97%E7%BA%A7%E7%9B%92%E5%AD%90%EF%BC%88block_box%EF%BC%89_%E5%92%8C_%E5%86%85%E8%81%94%E7%9B%92%E5%AD%90%EF%BC%88inline_box%EF%BC%89" target="_blank">内联盒子（Inline box）</a></strong></p>
<ul>
<li>
<p>盒子不会产生换行。</p>
</li>
<li>
<p>width 和 height 属性将不起作用。</p>
</li>
<li>
<p>垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。</p>
</li>
<li>
<p>水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">Property</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_class_display.asp" target="_blank">display</a></td>
<td style="text-align:center">Specifies how an element should be displayed</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_class_visibility.asp" target="_blank">visibility</a></td>
<td style="text-align:center">Specifies whether or not an element should be visible</td>
</tr>
</tbody>
</table>
<h2><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank">弹性盒子（Flexbox）</a></h2>
<p><img src="https://developer.mozilla.org/files/3739/flex_terms.png" alt class="align-none" /></p>
<p><strong><a href="cs_web_http:_www.ruanyifeng.com_blog_2015_07_flex-grammar" target="_blank">flex</a></strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">.box {
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

.item {
  order: &lt;integer&gt;;
  flex-grow: &lt;number&gt;; /* default 0 */
  flex-shrink: &lt;number&gt;; /* default 1 */
  flex-basis: &lt;length&gt; | auto; /* default auto */
  flex: none | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ]
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

</code></pre>
<h2><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids" target="_blank">网格（Grid）</a></h2>
<p>一个用于web的二维布局系统</p>
<p><a href="cs_web_http:_www.ruanyifeng.com_blog_2019_03_grid-layout-tutorial" target="_blank">grid</a>    CSS网格指南</p>
<pre data-syntax="css"><code class="lang-css hljs raw">.container {
  display: grid;
  /* fr（fraction ，"片段"）*/ 
  grid-template-rows: 1fr 1fr minmax(100px, 1fr);
  grid-template-columns: repeat(auto-fill, 100px);
  gap: &lt;row-gap&gt; &lt;column-gap&gt;;
  grid-template-areas: "header header header"
                     "main main sidebar"
                     "footer footer footer";
  grid-template: &lt;grid-template-columns&gt; &lt;grid-template-rows&gt; &lt;grid-template-areas&gt;;
  grid-auto-flow: row dense;
  /* 设置单元格内容*/ 
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  place-items: &lt;align-items&gt; &lt;justify-items&gt;;
  /* 设置整体内容区域*/ 
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
  place-content: &lt;align-content&gt; &lt;justify-content&gt;
  grid: &lt;grid-template&gt; grid-auto-rows、grid-auto-columns、grid-auto-flow
}

.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  
  grid-column: &lt;start-line&gt; / &lt;end-line&gt;;
  grid-row: &lt;start-line&gt; / &lt;end-line&gt;;
  grid-area: &lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;;
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
  place-self: &lt;align-self&gt; &lt;justify-self&gt;;
}

</code></pre>
<h2><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Floats" target="_blank">浮动（Floats）</a></h2>
<p>float</p>
<ul>
<li>
<p>left - The element floats to the left of its container</p>
</li>
<li>
<p>right - The element floats to the right of its container</p>
</li>
<li>
<p>none - The element does not float. This is default</p>
</li>
<li>
<p>inherit - The element inherits the float value of its parent</p>
</li>
</ul>
<p>clear</p>
<ul>
<li>
<p>none - The element is not pushed below left or right floated elements. This is default</p>
</li>
<li>
<p>left - The element is pushed below left floated elements</p>
</li>
<li>
<p>right - The element is pushed below right floated elements</p>
</li>
<li>
<p>both - The element is pushed below both left and right floated elements</p>
</li>
<li>
<p>inherit - The element inherits the clear value from its parent</p>
</li>
</ul>
<p><strong>清除浮动</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">.clearfix::after {
  content: '';
  display: table;
  clear: both;
  height: 0;
  visibility: hidden;
}

</code></pre>
<h2>定位<a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Positioning" target="_blank">（Positioning）</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">Property</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_pos_bottom.asp" target="_blank">bottom</a></td>
<td style="text-align:center">Sets the bottom margin edge for a positioned box</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_pos_clip.asp" target="_blank">clip</a></td>
<td style="text-align:center">Clips an absolutely positioned element</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_pos_left.asp" target="_blank">left</a></td>
<td style="text-align:center">Sets the left margin edge for a positioned box</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_class_position.asp" target="_blank">position</a></td>
<td style="text-align:center">Specifies the type of positioning for an element</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_pos_right.asp" target="_blank">right</a></td>
<td style="text-align:center">Sets the right margin edge for a positioned box</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_pos_top.asp" target="_blank">top</a></td>
<td style="text-align:center">Sets the top margin edge for a positioned box</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_pos_z-index.asp" target="_blank">z-index</a></td>
<td style="text-align:center">Sets the stack order of an element</td>
</tr>
</tbody>
</table>
<p><strong>Position</strong></p>
<ul>
<li>
<p>静态定位(Static)：元素默认的属性——将元素放在文档布局流的默认位置</p>
</li>
<li>
<p>相对定位(Relative)：相对于元素在正常的文档流中的位置移动它</p>
</li>
<li>
<p>绝对定位(Absolute)：元素完全从页面的正常布局流(normal layout flow)中移出，类似将它单独放在一个图层中。可以将元素相对于页面的  元素边缘固定，或者相对于该元素的最近被定位祖先元素(nearest positioned ancestor element)。</p>
</li>
<li>
<p>固定定位(Fixed)：将一个元素相对浏览器视口固定</p>
</li>
<li>
<p>粘性定位(Sticky)：元素先保持和position: static一样的定位，当它的相对视口位置(offset from the viewport)达到某一个预设值时，他就会像position: fixed一样定位。</p>
</li>
</ul>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout" target="_blank">多列布局（Multiple-column Layout）</a></p>
<table>
<thead>
<tr>
<th style="text-align:center">Property</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-count.asp" target="_blank">column-count</a></td>
<td style="text-align:center">Specifies the number of columns an element should be divided into</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-fill.asp" target="_blank">column-fill</a></td>
<td style="text-align:center">Specifies how to fill columns</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-gap.asp" target="_blank">column-gap</a></td>
<td style="text-align:center">Specifies the gap between the columns</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-rule.asp" target="_blank">column-rule</a></td>
<td style="text-align:center">A shorthand property for setting all the column-rule-* properties</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp" target="_blank">column-rule-color</a></td>
<td style="text-align:center">Specifies the color of the rule between columns</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-rule-style.asp" target="_blank">column-rule-style</a></td>
<td style="text-align:center">Specifies the style of the rule between columns</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp" target="_blank">column-rule-width</a></td>
<td style="text-align:center">Specifies the width of the rule between columns</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-span.asp" target="_blank">column-span</a></td>
<td style="text-align:center">Specifies how many columns an element should span across</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_column-width.asp" target="_blank">column-width</a></td>
<td style="text-align:center">Specifies a suggested, optimal width for the columns</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_columns.asp" target="_blank">columns</a></td>
<td style="text-align:center">A shorthand property for setting column-width and column-count</td>
</tr>
</tbody>
</table>
<h1>FC(Formatting Context，格式化上下文)</h1>
<p>BFC(Block Formatting Context，<a href="https://developer.mozilla.org/zh-CN/docs/CSS/block_formatting_context" target="_blank">块格式化</a>上下文）：块级元素的渲染显示规则。容器里面的子元素不会影响到外面的元素，</p>
<p>触发条件</p>
<ul>
<li>
<p>根元素、body</p>
</li>
<li>
<p>浮动元素：float: left/right/inherit</p>
</li>
<li>
<p>绝对定位元素：position: absolute/fixed</p>
</li>
<li>
<p>display： display: inline-block、table-cell/table-caption、flex/inline-flex</p>
</li>
<li>
<p>溢出元素 overflow: hidden/scroll/auto/inherit</p>
</li>
</ul>
<p>IFC(Inline Formatting Context，行内格式化上下文）</p>
<p>FFC(Flex Formatting Context，弹性盒子格式化上下文)</p>
<p>GFC(GridLayout Formatting Context，网格盒子格式化上下文)</p>
<h1>排版（Typography）</h1>
<h2>居中显示</h2>
<p>单行文本</p>
<pre data-syntax="css"><code class="lang-css hljs raw">/* 父元素*/
div {
  text-align: center;//水平居中
  light-height: [heightValue];//垂直居中
}

</code></pre>
<p>多行文本</p>
<pre data-syntax="css"><code class="lang-css hljs raw">/* 父元素*/
div {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

</code></pre>
<p>盒子</p>
<p>table-cell + inline-block</p>
<pre data-syntax="css"><code class="lang-css hljs raw">.parent {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.child{
  display: inline-block;
  vertical-align:middle;
}

</code></pre>
<p>position + 负margin</p>
<pre data-syntax="css"><code class="lang-css hljs raw">.parent {
  position: relative;
}

.child {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px; /* 子元素高度的一半*/
  margin-left: -50px;/* 子元素宽度的一半*/
}

</code></pre>
<p>position + margin: auto</p>
<pre data-syntax="css"><code class="lang-css hljs raw">.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

</code></pre>
<p>flex</p>
<pre data-syntax="css"><code class="lang-css hljs raw">.demo {
  display: flex;
  align-items: center;
  justify-content: center;
}

</code></pre>
<h2>常用样式</h2>
<p><strong>文本省略号</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw"> /* 单行文本 */
p {
  width: 100px; /* 必须设置宽度 */
  overflow: hidden; /* 溢出隐藏 */
  white-space: nowrap; /* 强制文本在一行显示 */
  text-overflow: ellipsis; /* 文字隐藏的方式：以省略号的方式隐藏 */
}

 /* 多行文本 */
p {
  display: -webkit-box; /* 弹性盒模型 */
  -webkit-box-orient: vertical; /* 规定元素的排列方式：垂直排列 */
  -webkit-line-clamp: 2; /* 文字的行数 需要显示几行值就为几 */
  overflow: hidden; /* 溢出隐藏 */
  text-overflow: ellipsis; /* 文字隐藏的方式：以省略号的方式隐藏 */
}

</code></pre>
<p><strong>三角形</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">div {
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: #aaa transparent transparent transparent;
}

</code></pre>
<p>椭圆</p>
<pre data-syntax="css"><code class="lang-css hljs raw">.circle {
    width: 200px;     /* 长轴 */
    height: 100px;    /* 短轴 */
    background-color: #FFB5BF;
    border-radius: 50%;  
}

</code></pre>
<p><strong>icon 图标</strong></p>
<p><strong>使用类名</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">/* 引入 css 文件 */ 
&lt;link rel="stylesheet" type="text/css" href="./iconfont.css"&gt;

/* 挑选相应图标并获取类名，应用于页面 */ 
&lt;i class="iconfont icon-xxx"&gt;&lt;/i&gt;

</code></pre>
<p><strong>字体编码</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">/* 拷贝项目下面生成的 font-face， 并定义使用 iconfont 的样式 */
@font-face {
  font-family: 'iconfont';
  src: url('iconfont.eot');
  src: url('iconfont.eot?#iefix') format('embedded-opentype'),
  url('iconfont.woff') format('woff'),
  url('iconfont.ttf') format('truetype'),
  url('iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

/* 挑选相应图标并获取字体编码，应用于页面 */
&lt;i class="iconfont"&gt;&amp;#x33;&lt;/i&gt;

</code></pre>
<p><strong>Symbol 方式</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">/* 引入项目下面生成的 symbol 代码 */
&lt;script src="./iconfont.js"&gt;&lt;/script&gt;

/* 加入通用 css 代码 */
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}

/* 挑选相应图标并获取类名，应用于页面 */
&lt;svg class="icon" aria-hidden="true"&gt;
  &lt;use xlink:href="#icon-xxx"&gt;&lt;/use&gt;
&lt;/svg&gt;

</code></pre>
<p><strong>滚动条样式</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 16px;
    height: 16px;
    background-color: #F5F5F5;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}

</code></pre>
<p><strong>cursor 光标</strong></p>
<p>定义了鼠标指针放在一个元素边界范围内时所用的光标形状</p>
<ul>
<li>
<p>default：默认光标（通常是一个箭头）</p>
</li>
<li>
<p>auto：默认。浏览器设置的光标。</p>
</li>
<li>
<p>crosshair：光标呈现为十字线。</p>
</li>
<li>
<p>pointer：光标呈现为指示链接的指针（一只手）</p>
</li>
<li>
<p>move：此光标指示某对象可被移动。</p>
</li>
<li>
<p>e-resize：此光标指示矩形框的边缘可被向右（东）移动。</p>
</li>
<li>
<p>ne-resize：此光标指示矩形框的边缘可被向上及向右移动（北/东）。</p>
</li>
<li>
<p>nw-resize：此光标指示矩形框的边缘可被向上及向左移动（北/西）。</p>
</li>
<li>
<p>n-resize：此光标指示矩形框的边缘可被向上（北）移动。</p>
</li>
<li>
<p>se-resize：此光标指示矩形框的边缘可被向下及向右移动（南/东）。</p>
</li>
<li>
<p>sw-resize：此光标指示矩形框的边缘可被向下及向左移动（南/西）。</p>
</li>
<li>
<p>s-resize：此光标指示矩形框的边缘可被向下移动（南）。</p>
</li>
<li>
<p>w-resize：此光标指示矩形框的边缘可被向左移动（西）。</p>
</li>
<li>
<p>text：此光标指示文本。</p>
</li>
<li>
<p>wait：此光标指示程序正忙（通常是一只表或沙漏）。</p>
</li>
<li>
<p>help：此光标指示可用的帮助（通常是一个问号或一个气球）。</p>
</li>
<li>
<p>url() 需使用的自定义光标的 URL。</p>
</li>
</ul>
<h1>变量</h1>
<pre data-syntax="css"><code class="lang-css hljs raw">:root {
  --main-color: red    /* 声明变量 */
}

#foo {
  background-color: var(--main-color);    /* 使用变量 */
}

</code></pre>
<p>var() = var(  [,  ]?)</p>
<p>搭配JS</p>
<pre data-syntax="css"><code class="lang-css hljs raw">/* CSS部分 */
:root {
  --main-color: red
}

/* JS部分 */
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--main-color');
console.log(mainColor);  --&gt; 'red'
root.style.setProperty('--main-color', 'blue')

</code></pre>
<h1><a href="https://cssreference.io/" target="_blank">Reference</a></h1>
<h2>动画 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations" target="_blank">Animations</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_keyframes.asp" target="_blank">@keyframes</a></td>
<td style="text-align:center">规定动画。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation.asp" target="_blank">animation</a></td>
<td style="text-align:center">所有动画属性的简写属性，除了 animation-play-state 属性。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation-name.asp" target="_blank">animation-name</a></td>
<td style="text-align:center">规定 <a href="/keyframes " class="user-login"><i>@</i>keyframes </a> 动画的名称。 </td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation-duration.asp" target="_blank">animation-duration</a></td>
<td style="text-align:center">规定动画完成一个周期所花费的秒或毫秒。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation-timing-function.asp" target="_blank">animation-timing-function</a></td>
<td style="text-align:center">规定动画的速度曲线。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation-delay.asp" target="_blank">animation-delay</a></td>
<td style="text-align:center">规定动画何时开始。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation-iteration-count.asp" target="_blank">animation-iteration-count</a></td>
<td style="text-align:center">规定动画被播放的次数。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation-direction.asp" target="_blank">animation-direction</a></td>
<td style="text-align:center">规定动画是否在下一周期逆向地播放。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation-play-state.asp" target="_blank">animation-play-state</a></td>
<td style="text-align:center">规定动画是否正在运行或暂停。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_animation-fill-mode.asp" target="_blank">animation-fill-mode</a></td>
<td style="text-align:center">规定对象动画时间之外的状态。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<pre data-syntax="css"><code class="lang-css hljs raw">@keyframes color-animation {
    from {
      background-color: #FFB5BF;
    }
    to {
      background-color: #94E8FF;
    }
}

.box {
    animation: color-animation 2s ease-in;
    animation-fill-mode: forwards;
}

</code></pre>
<h2>背景属性（Background）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background.asp" target="_blank">background</a></td>
<td style="text-align:center">在一个声明中设置所有的背景属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background-attachment.asp" target="_blank">background-attachment</a></td>
<td style="text-align:center">设置背景图像是否固定或者随着页面的其余部分滚动。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background-color.asp" target="_blank">background-color</a></td>
<td style="text-align:center">设置元素的背景颜色。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background-image.asp" target="_blank">background-image</a></td>
<td style="text-align:center">设置元素的背景图像。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background-position.asp" target="_blank">background-position</a></td>
<td style="text-align:center">设置背景图像的开始位置。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background-repeat.asp" target="_blank">background-repeat</a></td>
<td style="text-align:center">设置是否及如何重复背景图像。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background-clip.asp" target="_blank">background-clip</a></td>
<td style="text-align:center">规定背景的绘制区域。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background-origin.asp" target="_blank">background-origin</a></td>
<td style="text-align:center">规定背景图片的定位区域。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_background-size.asp" target="_blank">background-size</a></td>
<td style="text-align:center">规定背景图片的尺寸。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<p><strong>background-repeat 背景平铺</strong></p>
<ul>
<li>
<p>repeat：默认值</p>
</li>
<li>
<p>no-repeat</p>
</li>
<li>
<p>repeat-x</p>
</li>
<li>
<p>repeat-y</p>
</li>
<li>
<p>round：图像间设置间距，确保不被截断</p>
</li>
<li>
<p>space：调整图像大小，确保不被截断</p>
</li>
</ul>
<p>background-attachment</p>
<ul>
<li>
<p>fixed：固定，不随页面滚动条而滚动</p>
</li>
<li>
<p>scroll：默认，随页面内容滚动</p>
</li>
</ul>
<h2>内边距属性（Padding）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_padding.asp" target="_blank">padding</a></td>
<td style="text-align:center">在一个声明中设置所有内边距属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_padding-bottom.asp" target="_blank">padding-bottom</a></td>
<td style="text-align:center">设置元素的下内边距。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_padding-left.asp" target="_blank">padding-left</a></td>
<td style="text-align:center">设置元素的左内边距。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_padding-right.asp" target="_blank">padding-right</a></td>
<td style="text-align:center">设置元素的右内边距。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_padding-top.asp" target="_blank">padding-top</a></td>
<td style="text-align:center">设置元素的上内边距。</td>
<td style="text-align:center">1</td>
</tr>
</tbody>
</table>
<h2>外边距属性（Margin）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_margin.asp" target="_blank">margin</a></td>
<td style="text-align:center">在一个声明中设置所有外边距属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_margin-bottom.asp" target="_blank">margin-bottom</a></td>
<td style="text-align:center">设置元素的下外边距。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_margin-left.asp" target="_blank">margin-left</a></td>
<td style="text-align:center">设置元素的左外边距。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_margin-right.asp" target="_blank">margin-right</a></td>
<td style="text-align:center">设置元素的右外边距。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_margin-top.asp" target="_blank">margin-top</a></td>
<td style="text-align:center">设置元素的上外边距。</td>
<td style="text-align:center">1</td>
</tr>
</tbody>
</table>
<h2>边框属性（Border 和 Outline）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border.asp" target="_blank">border</a></td>
<td style="text-align:center">在一个声明中设置所有的边框属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-bottom.asp" target="_blank">border-bottom</a></td>
<td style="text-align:center">在一个声明中设置所有的下边框属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-bottom_color.asp" target="_blank">border-bottom-color</a></td>
<td style="text-align:center">设置下边框的颜色。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-bottom_style.asp" target="_blank">border-bottom-style</a></td>
<td style="text-align:center">设置下边框的样式。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-bottom_width.asp" target="_blank">border-bottom-width</a></td>
<td style="text-align:center">设置下边框的宽度。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-color.asp" target="_blank">border-color</a></td>
<td style="text-align:center">设置四条边框的颜色。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-left.asp" target="_blank">border-left</a></td>
<td style="text-align:center">在一个声明中设置所有的左边框属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-left_color.asp" target="_blank">border-left-color</a></td>
<td style="text-align:center">设置左边框的颜色。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-left_style.asp" target="_blank">border-left-style</a></td>
<td style="text-align:center">设置左边框的样式。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-left_width.asp" target="_blank">border-left-width</a></td>
<td style="text-align:center">设置左边框的宽度。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-right.asp" target="_blank">border-right</a></td>
<td style="text-align:center">在一个声明中设置所有的右边框属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-right_color.asp" target="_blank">border-right-color</a></td>
<td style="text-align:center">设置右边框的颜色。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-right_style.asp" target="_blank">border-right-style</a></td>
<td style="text-align:center">设置右边框的样式。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-right_width.asp" target="_blank">border-right-width</a></td>
<td style="text-align:center">设置右边框的宽度。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-style.asp" target="_blank">border-style</a></td>
<td style="text-align:center">设置四条边框的样式。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-top.asp" target="_blank">border-top</a></td>
<td style="text-align:center">在一个声明中设置所有的上边框属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-top_color.asp" target="_blank">border-top-color</a></td>
<td style="text-align:center">设置上边框的颜色。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-top_style.asp" target="_blank">border-top-style</a></td>
<td style="text-align:center">设置上边框的样式。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-top_width.asp" target="_blank">border-top-width</a></td>
<td style="text-align:center">设置上边框的宽度。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-width.asp" target="_blank">border-width</a></td>
<td style="text-align:center">设置四条边框的宽度。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_outline.asp" target="_blank">outline</a></td>
<td style="text-align:center">在一个声明中设置所有的轮廓属性。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_outline-color.asp" target="_blank">outline-color</a></td>
<td style="text-align:center">设置轮廓的颜色。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_outline-style.asp" target="_blank">outline-style</a></td>
<td style="text-align:center">设置轮廓的样式。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_outline-width.asp" target="_blank">outline-width</a></td>
<td style="text-align:center">设置轮廓的宽度。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-bottom-left-radius.asp" target="_blank">border-bottom-left-radius</a></td>
<td style="text-align:center">定义边框左下角的形状。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-bottom-right-radius.asp" target="_blank">border-bottom-right-radius</a></td>
<td style="text-align:center">定义边框右下角的形状。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-image.asp" target="_blank">border-image</a></td>
<td style="text-align:center">简写属性，设置所有 border-image-* 属性。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-image-outset.asp" target="_blank">border-image-outset</a></td>
<td style="text-align:center">规定边框图像区域超出边框的量。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-image-repeat.asp" target="_blank">border-image-repeat</a></td>
<td style="text-align:center">图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-image-slice.asp" target="_blank">border-image-slice</a></td>
<td style="text-align:center">规定图像边框的向内偏移。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-image-source.asp" target="_blank">border-image-source</a></td>
<td style="text-align:center">规定用作边框的图片。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-image-width.asp" target="_blank">border-image-width</a></td>
<td style="text-align:center">规定图片边框的宽度。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-radius.asp" target="_blank">border-radius</a></td>
<td style="text-align:center">简写属性，设置所有四个 border-*-radius 属性。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-top-left-radius.asp" target="_blank">border-top-left-radius</a></td>
<td style="text-align:center">定义边框左上角的形状。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_border-top-right-radius.asp" target="_blank">border-top-right-radius</a></td>
<td style="text-align:center">定义边框右下角的形状。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">box-decoration-break</td>
<td style="text-align:center"></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-shadow.asp" target="_blank">box-shadow</a></td>
<td style="text-align:center">向方框添加一个或多个阴影。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<p>盒模型相关的属性</p>
<p><img src="http://c.biancheng.net/uploads/allimg/181112/1-1Q112150JE20.gif" alt class="align-none" /></p>
<h2>Box 属性</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_overflow-x.asp" target="_blank">overflow-x</a></td>
<td style="text-align:center">如果内容溢出了元素内容区域，是否对内容的左/右边缘进行裁剪。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_overflow-y.asp" target="_blank">overflow-y</a></td>
<td style="text-align:center">如果内容溢出了元素内容区域，是否对内容的上/下边缘进行裁剪。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_overflow-style.asp" target="_blank">overflow-style</a></td>
<td style="text-align:center">规定溢出元素的首选滚动方法。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_rotation.asp" target="_blank">rotation</a></td>
<td style="text-align:center">围绕由 rotation-point 属性定义的点对元素进行旋转。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_rotation-point.asp" target="_blank">rotation-point</a></td>
<td style="text-align:center">定义距离上左边框边缘的偏移点。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>颜色 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Color" target="_blank">Color</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">color-profile</td>
<td style="text-align:center">允许使用源的颜色配置文件的默认以外的规范。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_opacity.asp" target="_blank">opacity</a></td>
<td style="text-align:center">规定元素的不透明级别。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">rendering-intent</td>
<td style="text-align:center">允许使用颜色配置文件渲染意图的默认以外的规范。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>尺寸属性（Dimension）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_dim_height.asp" target="_blank">height</a></td>
<td style="text-align:center">设置元素高度。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_dim_max-height.asp" target="_blank">max-height</a></td>
<td style="text-align:center">设置元素的最大高度。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_dim_max-width.asp" target="_blank">max-width</a></td>
<td style="text-align:center">设置元素的最大宽度。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_dim_min-height.asp" target="_blank">min-height</a></td>
<td style="text-align:center">设置元素的最小高度。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_dim_min-width.asp" target="_blank">min-width</a></td>
<td style="text-align:center">设置元素的最小宽度。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_dim_width.asp" target="_blank">width</a></td>
<td style="text-align:center">设置元素的宽度。</td>
<td style="text-align:center">1</td>
</tr>
</tbody>
</table>
<h2>定位属性（Positioning）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_pos_bottom.asp" target="_blank">bottom</a></td>
<td style="text-align:center">设置定位元素下外边距边界与其包含块下边界之间的偏移。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_class_clear.asp" target="_blank">clear</a></td>
<td style="text-align:center">规定元素的哪一侧不允许其他浮动元素。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_pos_clip.asp" target="_blank">clip</a></td>
<td style="text-align:center">剪裁绝对定位元素。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_class_cursor.asp" target="_blank">cursor</a></td>
<td style="text-align:center">规定要显示的光标的类型（形状）。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_class_display.asp" target="_blank">display</a></td>
<td style="text-align:center">规定元素应该生成的框的类型。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_class_float.asp" target="_blank">float</a></td>
<td style="text-align:center">规定框是否应该浮动。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_pos_left.asp" target="_blank">left</a></td>
<td style="text-align:center">设置定位元素左外边距边界与其包含块左边界之间的偏移。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_pos_overflow.asp" target="_blank">overflow</a></td>
<td style="text-align:center">规定当内容溢出元素框时发生的事情。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_class_position.asp" target="_blank">position</a></td>
<td style="text-align:center">规定元素的定位类型。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_pos_right.asp" target="_blank">right</a></td>
<td style="text-align:center">设置定位元素右外边距边界与其包含块右边界之间的偏移。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_pos_top.asp" target="_blank">top</a></td>
<td style="text-align:center">设置定位元素的上外边距边界与其包含块上边界之间的偏移。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp" target="_blank">vertical-align</a></td>
<td style="text-align:center">设置元素的垂直对齐方式。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_class_visibility.asp" target="_blank">visibility</a></td>
<td style="text-align:center">规定元素是否可见。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_pos_z-index.asp" target="_blank">z-index</a></td>
<td style="text-align:center">设置元素的堆叠顺序。</td>
<td style="text-align:center">2</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">position值</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">absolute</td>
<td style="text-align:center">生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。</td>
</tr>
<tr>
<td style="text-align:center">fixed</td>
<td style="text-align:center">生成绝对定位的元素，相对于浏览器窗口进行定位。 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。</td>
</tr>
<tr>
<td style="text-align:center">relative</td>
<td style="text-align:center">生成相对定位的元素，相对于其正常位置进行定位。 因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。</td>
</tr>
<tr>
<td style="text-align:center">static</td>
<td style="text-align:center">默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。</td>
</tr>
<tr>
<td style="text-align:center">inherit</td>
<td style="text-align:center">规定应该从父元素继承 position 属性的值。</td>
</tr>
</tbody>
</table>
<h2>可伸缩框属性（Flexible Box）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-align.asp" target="_blank">box-align</a></td>
<td style="text-align:center">规定如何对齐框的子元素。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-direction.asp" target="_blank">box-direction</a></td>
<td style="text-align:center">规定框的子元素的显示方向。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-flex.asp" target="_blank">box-flex</a></td>
<td style="text-align:center">规定框的子元素是否可伸缩。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-flex-group.asp" target="_blank">box-flex-group</a></td>
<td style="text-align:center">将可伸缩元素分配到柔性分组。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-lines.asp" target="_blank">box-lines</a></td>
<td style="text-align:center">规定当超出父元素框的空间时，是否换行显示。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-ordinal-group.asp" target="_blank">box-ordinal-group</a></td>
<td style="text-align:center">规定框的子元素的显示次序。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-orient.asp" target="_blank">box-orient</a></td>
<td style="text-align:center">规定框的子元素是否应水平或垂直排列。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-pack.asp" target="_blank">box-pack</a></td>
<td style="text-align:center">规定水平框中的水平位置或者垂直框中的垂直位置。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>字体 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Fonts" target="_blank">Fonts</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_font_font.asp" target="_blank">font</a></td>
<td style="text-align:center">在一个声明中设置所有字体属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_font_font-family.asp" target="_blank">font-family</a></td>
<td style="text-align:center">规定文本的字体系列。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_font_font-size.asp" target="_blank">font-size</a></td>
<td style="text-align:center">规定文本的字体尺寸。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_font_font-size-adjust.asp" target="_blank">font-size-adjust</a></td>
<td style="text-align:center">为元素规定 aspect 值。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_font_font-stretch.asp" target="_blank">font-stretch</a></td>
<td style="text-align:center">收缩或拉伸当前的字体系列。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_font_font-style.asp" target="_blank">font-style</a></td>
<td style="text-align:center">规定文本的字体样式。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_font_font-variant.asp" target="_blank">font-variant</a></td>
<td style="text-align:center">规定是否以小型大写字母的字体显示文本。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_font_weight.asp" target="_blank">font-weight</a></td>
<td style="text-align:center">规定字体的粗细。</td>
<td style="text-align:center">1</td>
</tr>
</tbody>
</table>
<h2>文本 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Text" target="_blank">Text</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_color.asp" target="_blank">color</a></td>
<td style="text-align:center">设置文本的颜色。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_direction.asp" target="_blank">direction</a></td>
<td style="text-align:center">规定文本的方向 / 书写方向。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp" target="_blank">letter-spacing</a></td>
<td style="text-align:center">设置字符间距。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_dim_line-height.asp" target="_blank">line-height</a></td>
<td style="text-align:center">设置行高。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_text-align.asp" target="_blank">text-align</a></td>
<td style="text-align:center">规定文本的水平对齐方式。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_text-decoration.asp" target="_blank">text-decoration</a></td>
<td style="text-align:center">规定添加到文本的装饰效果。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_text-indent.asp" target="_blank">text-indent</a></td>
<td style="text-align:center">规定文本块首行的缩进。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center">text-shadow</td>
<td style="text-align:center">规定添加到文本的阴影效果。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_text-transform.asp" target="_blank">text-transform</a></td>
<td style="text-align:center">控制文本的大小写。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_unicode-bidi.asp" target="_blank">unicode-bidi</a></td>
<td style="text-align:center">设置文本方向。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_white-space.asp" target="_blank">white-space</a></td>
<td style="text-align:center">规定如何处理元素中的空白。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text_word-spacing.asp" target="_blank">word-spacing</a></td>
<td style="text-align:center">设置单词间距。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_hanging-punctuation.asp" target="_blank">hanging-punctuation</a></td>
<td style="text-align:center">规定标点字符是否位于线框之外。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_punctuation-trim.asp" target="_blank">punctuation-trim</a></td>
<td style="text-align:center">规定是否对标点字符进行修剪。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">text-align-last</td>
<td style="text-align:center">设置如何对齐最后一行或紧挨着强制换行符之前的行。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text-emphasis.asp" target="_blank">text-emphasis</a></td>
<td style="text-align:center">向元素的文本应用重点标记以及重点标记的前景色。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text-justify.asp" target="_blank">text-justify</a></td>
<td style="text-align:center">规定当 text-align 设置为 "justify" 时所使用的对齐方法。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text-outline.asp" target="_blank">text-outline</a></td>
<td style="text-align:center">规定文本的轮廓。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text-overflow.asp" target="_blank">text-overflow</a></td>
<td style="text-align:center">规定当文本溢出包含元素时发生的事情。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text-shadow.asp" target="_blank">text-shadow</a></td>
<td style="text-align:center">向文本添加阴影。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_text-wrap.asp" target="_blank">text-wrap</a></td>
<td style="text-align:center">规定文本的换行规则。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_word-break.asp" target="_blank">word-break</a></td>
<td style="text-align:center">规定非中日韩文本的换行规则。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_word-wrap.asp" target="_blank">word-wrap</a></td>
<td style="text-align:center">允许对长的不可分割的单词进行分割并换行到下一行。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>Hyperlink 属性</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_target.asp" target="_blank">target</a></td>
<td style="text-align:center">简写属性，设置target-name、target-new以及target-position属性。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_target-name.asp" target="_blank">target-name</a></td>
<td style="text-align:center">规定在何处打开链接（链接的目标）。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_target-new.asp" target="_blank">target-new</a></td>
<td style="text-align:center">规定目标链接在新窗口还是在已有窗口的新标签页中打开。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_target-position.asp" target="_blank">target-position</a></td>
<td style="text-align:center">规定在何处放置新的目标链接。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>列表属性（List）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_list-style.asp" target="_blank">list-style</a></td>
<td style="text-align:center">在一个声明中设置所有的列表属性。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_list-style-image.asp" target="_blank">list-style-image</a></td>
<td style="text-align:center">将图象设置为列表项标记。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_list-style-position.asp" target="_blank">list-style-position</a></td>
<td style="text-align:center">设置列表项标记的放置位置。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_list-style-type.asp" target="_blank">list-style-type</a></td>
<td style="text-align:center">设置列表项标记的类型。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center">marker-offset</td>
<td style="text-align:center"></td>
<td style="text-align:center">2</td>
</tr>
</tbody>
</table>
<h2>表格属性（Table）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_tab_border-collapse.asp" target="_blank">border-collapse</a></td>
<td style="text-align:center">规定是否合并表格边框。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_tab_border-spacing.asp" target="_blank">border-spacing</a></td>
<td style="text-align:center">规定相邻单元格边框之间的距离。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_tab_caption-side.asp" target="_blank">caption-side</a></td>
<td style="text-align:center">规定表格标题的位置。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_tab_empty-cells.asp" target="_blank">empty-cells</a></td>
<td style="text-align:center">规定是否显示表格中的空单元格上的边框和背景。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_tab_table-layout.asp" target="_blank">table-layout</a></td>
<td style="text-align:center">设置用于表格的布局算法。</td>
<td style="text-align:center">2</td>
</tr>
</tbody>
</table>
<h2>Overflow</h2>
<table>
<thead>
<tr>
<th style="text-align:center">Property</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/pr_pos_overflow.asp" target="_blank">overflow</a></td>
<td style="text-align:center">Specifies what happens if content overflows an element's box</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_overflow-x.asp" target="_blank">overflow-x</a></td>
<td style="text-align:center">Specifies what to do with the left/right edges of the content if it overflows the element's content area</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/css3_pr_overflow-y.asp" target="_blank">overflow-y</a></td>
<td style="text-align:center">Specifies what to do with the top/bottom edges of the content if it overflows the element's content area</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>visible - Default. The overflow is not clipped. The content renders outside the element's box</p>
</li>
<li>
<p>hidden - The overflow is clipped, and the rest of the content will be invisible</p>
</li>
<li>
<p>scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content</p>
</li>
<li>
<p>auto - Similar to scroll, but it adds scrollbars only when necessary</p>
</li>
</ul>
<h2>转换 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transforms" target="_blank">Transforms</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_transform.asp" target="_blank">transform</a></td>
<td style="text-align:center">向元素应用 2D 或 3D 转换。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_transform-origin.asp" target="_blank">transform-origin</a></td>
<td style="text-align:center">允许你改变被转换元素的位置。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_transform-style.asp" target="_blank">transform-style</a></td>
<td style="text-align:center">规定被嵌套元素如何在 3D 空间中显示。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_perspective.asp" target="_blank">perspective</a></td>
<td style="text-align:center">规定 3D 元素的透视效果。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_perspective-origin.asp" target="_blank">perspective-origin</a></td>
<td style="text-align:center">规定 3D 元素的底部位置。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_backface-visibility.asp" target="_blank">backface-visibility</a></td>
<td style="text-align:center">定义元素在不面对屏幕时是否可见。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>过渡属性（<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions" target="_blank">Transition</a>）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_transition.asp" target="_blank">transition</a></td>
<td style="text-align:center">简写属性，用于在一个属性中设置四个过渡属性。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_transition-property.asp" target="_blank">transition-property</a></td>
<td style="text-align:center">规定应用过渡的 CSS 属性的名称。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_transition-duration.asp" target="_blank">transition-duration</a></td>
<td style="text-align:center">定义过渡效果花费的时间。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_transition-timing-function.asp" target="_blank">transition-timing-function</a></td>
<td style="text-align:center">规定过渡效果的时间曲线。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_transition-delay.asp" target="_blank">transition-delay</a></td>
<td style="text-align:center">规定过渡效果何时开始。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>多列属性（Multi-column）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-count.asp" target="_blank">column-count</a></td>
<td style="text-align:center">规定元素应该被分隔的列数。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-fill.asp" target="_blank">column-fill</a></td>
<td style="text-align:center">规定如何填充列。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-gap.asp" target="_blank">column-gap</a></td>
<td style="text-align:center">规定列之间的间隔。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-rule.asp" target="_blank">column-rule</a></td>
<td style="text-align:center">设置所有 column-rule-* 属性的简写属性。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-rule-color.asp" target="_blank">column-rule-color</a></td>
<td style="text-align:center">规定列之间规则的颜色。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-rule-style.asp" target="_blank">column-rule-style</a></td>
<td style="text-align:center">规定列之间规则的样式。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-rule-width.asp" target="_blank">column-rule-width</a></td>
<td style="text-align:center">规定列之间规则的宽度。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-span.asp" target="_blank">column-span</a></td>
<td style="text-align:center">规定元素应该横跨的列数。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_column-width.asp" target="_blank">column-width</a></td>
<td style="text-align:center">规定列的宽度。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_columns.asp" target="_blank">columns</a></td>
<td style="text-align:center">规定设置 column-width 和 column-count 的简写属性。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>Paged Media 属性</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">fit</td>
<td style="text-align:center">示意如何对width和height属性均不是auto的被替换元素进行缩放。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">fit-position</td>
<td style="text-align:center">定义盒内对象的对齐方式。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">image-orientation</td>
<td style="text-align:center">规定用户代理应用于图像的顺时针方向旋转。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">page</td>
<td style="text-align:center">规定元素应该被显示的页面特定类型。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">size</td>
<td style="text-align:center">规定页面内容包含框的尺寸和方向。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>Content for Paged Media 属性</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">bookmark-label</td>
<td style="text-align:center">规定书签的标记。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">bookmark-level</td>
<td style="text-align:center">规定书签的级别。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">bookmark-target</td>
<td style="text-align:center">规定书签链接的目标。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">float-offset</td>
<td style="text-align:center">将元素放在 float 属性通常放置的位置的相反方向。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">hyphenate-after</td>
<td style="text-align:center">规定连字单词中连字符之后的最小字符数。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">hyphenate-before</td>
<td style="text-align:center">规定连字单词中连字符之前的最小字符数。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">hyphenate-character</td>
<td style="text-align:center">规定当发生断字时显示的字符串。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">hyphenate-lines</td>
<td style="text-align:center">指示元素中连续断字连线的最大数。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">hyphenate-resource</td>
<td style="text-align:center">规定帮助浏览器确定断字点的外部资源（逗号分隔的列表）。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">hyphens</td>
<td style="text-align:center">设置如何对单词进行拆分，以改善段落的布局。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">image-resolution</td>
<td style="text-align:center">规定图像的正确分辨率。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">marks</td>
<td style="text-align:center">向文档添加裁切标记或十字标记。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">string-set</td>
<td style="text-align:center"></td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>内容生成（Generated Content）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_gen_content.asp" target="_blank">content</a></td>
<td style="text-align:center">与 :before 以及 :after 伪元素配合使用，来插入生成内容。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_gen_counter-increment.asp" target="_blank">counter-increment</a></td>
<td style="text-align:center">递增或递减一个或多个计数器。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_gen_counter-reset.asp" target="_blank">counter-reset</a></td>
<td style="text-align:center">创建或重置一个或多个计数器。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_gen_quotes.asp" target="_blank">quotes</a></td>
<td style="text-align:center">设置嵌套引用的引号类型。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center">crop</td>
<td style="text-align:center">允许被替换元素仅仅是对象的矩形区域，而不是整个对象。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">move-to</td>
<td style="text-align:center">从流中删除元素，然后在文档中后面的点上重新插入。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">page-policy</td>
<td style="text-align:center">确定元素基于页面的 occurrence 应用于计数器还是字符串值。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>打印属性（Print）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">orphans</td>
<td style="text-align:center">设置当元素内部发生分页时必须在页面底部保留的最少行数。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_print_page-break-after.asp" target="_blank">page-break-after</a></td>
<td style="text-align:center">设置元素后的分页行为。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_print_page-break-before.asp" target="_blank">page-break-before</a></td>
<td style="text-align:center">设置元素前的分页行为。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_print_page-break-inside.asp" target="_blank">page-break-inside</a></td>
<td style="text-align:center">设置元素内部的分页行为。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center">widows</td>
<td style="text-align:center">设置当元素内部发生分页时必须在页面顶部保留的最少行数。</td>
<td style="text-align:center">2</td>
</tr>
</tbody>
</table>
<h2>Marquee</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">marquee-direction</td>
<td style="text-align:center">设置移动内容的方向。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">marquee-play-count</td>
<td style="text-align:center">设置内容移动多少次。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">marquee-speed</td>
<td style="text-align:center">设置内容滚动得多快。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center">marquee-style</td>
<td style="text-align:center">设置移动内容的样式。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h2>用户界面属性（User-interface）</h2>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_appearance.asp" target="_blank">appearance</a></td>
<td style="text-align:center">允许您将元素设置为标准用户界面元素的外观</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_box-sizing.asp" target="_blank">box-sizing</a></td>
<td style="text-align:center">允许您以确切的方式定义适应某个区域的具体内容。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_icon.asp" target="_blank">icon</a></td>
<td style="text-align:center">为创作者提供使用图标化等价物来设置元素样式的能力。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_nav-down.asp" target="_blank">nav-down</a></td>
<td style="text-align:center">规定在使用 arrow-down 导航键时向何处导航。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_nav-index.asp" target="_blank">nav-index</a></td>
<td style="text-align:center">设置元素的 tab 键控制次序。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_nav-left.asp" target="_blank">nav-left</a></td>
<td style="text-align:center">规定在使用 arrow-left 导航键时向何处导航。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_nav-right.asp" target="_blank">nav-right</a></td>
<td style="text-align:center">规定在使用 arrow-right 导航键时向何处导航。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_nav-up.asp" target="_blank">nav-up</a></td>
<td style="text-align:center">规定在使用 arrow-up 导航键时向何处导航。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_outline-offset.asp" target="_blank">outline-offset</a></td>
<td style="text-align:center">对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/pr_resize.asp" target="_blank">resize</a></td>
<td style="text-align:center">规定是否可由用户对元素的尺寸进行调整。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h1><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors" target="_blank">选择器</a></h1>
<table>
<thead>
<tr>
<th style="text-align:center">选择器</th>
<th style="text-align:center">例子</th>
<th style="text-align:center">例子描述</th>
<th style="text-align:center">CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_class.asp" target="_blank">.class</a></td>
<td style="text-align:center">.intro</td>
<td style="text-align:center">选择 class="intro" 的所有元素。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_id.asp" target="_blank">#id</a></td>
<td style="text-align:center">#firstname</td>
<td style="text-align:center">选择 id="firstname" 的所有元素。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_all.asp" target="_blank">*</a></td>
<td style="text-align:center">*</td>
<td style="text-align:center">选择所有元素。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_element.asp" target="_blank">element</a></td>
<td style="text-align:center">p</td>
<td style="text-align:center">选择所有 <p> 元素。</p></td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_element_comma.asp" target="_blank">element,element</a></td>
<td style="text-align:center">div,p</td>
<td style="text-align:center">选择所有 <div> 元素和所有 <p> 元素。</p></div></td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_element_element.asp" target="_blank">element element</a></td>
<td style="text-align:center">div p</td>
<td style="text-align:center">选择 <div> 元素内部的所有 <p> 元素。</p></div></td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_element_gt.asp" target="_blank">element&gt;element</a></td>
<td style="text-align:center">div&gt;p</td>
<td style="text-align:center">选择父元素为 <div> 元素的所有 <p> 元素。</p></div></td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_element_plus.asp" target="_blank">element+element</a></td>
<td style="text-align:center">div+p</td>
<td style="text-align:center">选择紧接在 <div> 元素之后的所有 <p> 元素。</p></div></td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_attribute.asp" target="_blank">[attribute]</a></td>
<td style="text-align:center">[target]</td>
<td style="text-align:center">选择带有 target 属性所有元素。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_attribute_value.asp" target="_blank">[attribute=value]</a></td>
<td style="text-align:center">[target=_blank]</td>
<td style="text-align:center">选择 target="_blank" 的所有元素。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp" target="_blank">[attribute~=value]</a></td>
<td style="text-align:center">[title~=flower]</td>
<td style="text-align:center">选择 title 属性包含单词 "flower" 的所有元素。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center">[[attribute</td>
<td style="text-align:center">=value]](<a href="https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp" target="_blank">https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp</a>)</td>
<td style="text-align:center">[lang</td>
<td style="text-align:center">=en]</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_link.asp" target="_blank">:link</a></td>
<td style="text-align:center">a:link</td>
<td style="text-align:center">选择所有未被访问的链接。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_visited.asp" target="_blank">:visited</a></td>
<td style="text-align:center">a:visited</td>
<td style="text-align:center">选择所有已被访问的链接。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_active.asp" target="_blank">:active</a></td>
<td style="text-align:center">a:active</td>
<td style="text-align:center">选择活动链接。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_hover.asp" target="_blank">:hover</a></td>
<td style="text-align:center">a:hover</td>
<td style="text-align:center">选择鼠标指针位于其上的链接。</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_focus.asp" target="_blank">:focus</a></td>
<td style="text-align:center">input:focus</td>
<td style="text-align:center">选择获得焦点的 input 元素。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_first-letter.asp" target="_blank">:first-letter</a></td>
<td style="text-align:center">p:first-letter</td>
<td style="text-align:center">选择每个 <p> 元素的首字母。</p></td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_first-line.asp" target="_blank">:first-line</a></td>
<td style="text-align:center">p:first-line</td>
<td style="text-align:center">选择每个 <p> 元素的首行。</p></td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_first-child.asp" target="_blank">:first-child</a></td>
<td style="text-align:center">p:first-child</td>
<td style="text-align:center">选择属于父元素的第一个子元素的每个 <p> 元素。</p></td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_before.asp" target="_blank">:before</a></td>
<td style="text-align:center">p:before</td>
<td style="text-align:center">在每个 <p> 元素的内容之前插入内容。</p></td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_after.asp" target="_blank">:after</a></td>
<td style="text-align:center">p:after</td>
<td style="text-align:center">在每个 <p> 元素的内容之后插入内容。</p></td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_lang.asp" target="_blank">:lang(language)</a></td>
<td style="text-align:center">p:lang(it)</td>
<td style="text-align:center">选择带有以 "it" 开头的 lang 属性值的每个 <p> 元素。</p></td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_gen_sibling.asp" target="_blank">element1~element2</a></td>
<td style="text-align:center">p~ul</td>
<td style="text-align:center">选择前面有 <p> 元素的每个 <ul> 元素。</ul></p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_attr_begin.asp" target="_blank">[attribute^=value]</a></td>
<td style="text-align:center">a[src^="https"]</td>
<td style="text-align:center">选择其 src 属性值以 "https" 开头的每个 <a> 元素。</a></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_attr_end.asp" target="_blank">[attribute$=value]</a></td>
<td style="text-align:center">a[src$=".pdf"]</td>
<td style="text-align:center">选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。</a></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_attr_contain.asp" target="_blank">[attribute*=value]</a></td>
<td style="text-align:center">a[src*="abc"]</td>
<td style="text-align:center">选择其 src 属性中包含 "abc" 子串的每个 <a> 元素。</a></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_first-of-type.asp" target="_blank">:first-of-type</a></td>
<td style="text-align:center">p:first-of-type</td>
<td style="text-align:center">选择属于其父元素的首个 <p> 元素的每个 </p><p> 元素。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_last-of-type.asp" target="_blank">:last-of-type</a></td>
<td style="text-align:center">p:last-of-type</td>
<td style="text-align:center">选择属于其父元素的最后 <p> 元素的每个 </p><p> 元素。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_only-of-type.asp" target="_blank">:only-of-type</a></td>
<td style="text-align:center">p:only-of-type</td>
<td style="text-align:center">选择属于其父元素唯一的 <p> 元素的每个 </p><p> 元素。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_only-child.asp" target="_blank">:only-child</a></td>
<td style="text-align:center">p:only-child</td>
<td style="text-align:center">选择属于其父元素的唯一子元素的每个 <p> 元素。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_nth-child.asp" target="_blank">:nth-child(n)</a></td>
<td style="text-align:center">p:nth-child(2)</td>
<td style="text-align:center">选择属于其父元素的第二个子元素的每个 <p> 元素。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_nth-last-child.asp" target="_blank">:nth-last-child(n)</a></td>
<td style="text-align:center">p:nth-last-child(2)</td>
<td style="text-align:center">同上，从最后一个子元素开始计数。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_nth-of-type.asp" target="_blank">:nth-of-type(n)</a></td>
<td style="text-align:center">p:nth-of-type(2)</td>
<td style="text-align:center">选择属于其父元素第二个 <p> 元素的每个 </p><p> 元素。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp" target="_blank">:nth-last-of-type(n)</a></td>
<td style="text-align:center">p:nth-last-of-type(2)</td>
<td style="text-align:center">同上，但是从最后一个子元素开始计数。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_last-child.asp" target="_blank">:last-child</a></td>
<td style="text-align:center">p:last-child</td>
<td style="text-align:center">选择属于其父元素最后一个子元素每个 <p> 元素。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_root.asp" target="_blank">:root</a></td>
<td style="text-align:center">:root</td>
<td style="text-align:center">选择文档的根元素。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_empty.asp" target="_blank">:empty</a></td>
<td style="text-align:center">p:empty</td>
<td style="text-align:center">选择没有子元素的每个 <p> 元素（包括文本节点）。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_target.asp" target="_blank">:target</a></td>
<td style="text-align:center">#news:target</td>
<td style="text-align:center">选择当前活动的 #news 元素。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_enabled.asp" target="_blank">:enabled</a></td>
<td style="text-align:center">input:enabled</td>
<td style="text-align:center">选择每个启用的 <input /> 元素。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_disabled.asp" target="_blank">:disabled</a></td>
<td style="text-align:center">input:disabled</td>
<td style="text-align:center">选择每个禁用的 <input /> 元素</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_checked.asp" target="_blank">:checked</a></td>
<td style="text-align:center">input:checked</td>
<td style="text-align:center">选择每个被选中的 <input /> 元素。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_not.asp" target="_blank">:not(selector)</a></td>
<td style="text-align:center">:not(p)</td>
<td style="text-align:center">选择非 <p> 元素的每个元素。</p></td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/cssref/selector_selection.asp" target="_blank">::selection</a></td>
<td style="text-align:center">::selection</td>
<td style="text-align:center">选择被用户选取的元素部分。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_sel-out-of-range" target="_blank">:out-of-range</a></td>
<td style="text-align:center">:out-of-range</td>
<td style="text-align:center">匹配值在指定区间之外的input元素</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_sel-in-range" target="_blank">:in-range</a></td>
<td style="text-align:center">:in-range</td>
<td style="text-align:center">匹配值在指定区间之内的input元素</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_sel-read-write" target="_blank">:read-write</a></td>
<td style="text-align:center">:read-write</td>
<td style="text-align:center">用于匹配可读及可写的元素</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_sel-read-only" target="_blank">:read-only</a></td>
<td style="text-align:center">:read-only</td>
<td style="text-align:center">用于匹配设置 "readonly"（只读） 属性的元素</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_sel-optional" target="_blank">:optional</a></td>
<td style="text-align:center">:optional</td>
<td style="text-align:center">用于匹配可选的输入元素</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_sel-required" target="_blank">:required</a></td>
<td style="text-align:center">:required</td>
<td style="text-align:center">用于匹配设置了 "required" 属性的元素</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_sel-valid" target="_blank">:valid</a></td>
<td style="text-align:center">:valid</td>
<td style="text-align:center">用于匹配输入值为合法的元素</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_sel-invalid" target="_blank">:invalid</a></td>
<td style="text-align:center">:invalid</td>
<td style="text-align:center">用于匹配输入值为非法的元素</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">Selector</th>
<th style="text-align:center">Example</th>
<th style="text-align:center">Example description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_class.asp" target="_blank">.class</a></td>
<td style="text-align:center">.intro</td>
<td style="text-align:center">Selects all elements with class="intro"</td>
</tr>
<tr>
<td style="text-align:center">.class1.class2</td>
<td style="text-align:center">.name1.name2</td>
<td style="text-align:center">Selects all elements with both name1 and name2 set within its class attribute</td>
</tr>
<tr>
<td style="text-align:center">.class1 .class2</td>
<td style="text-align:center">.name1 .name2</td>
<td style="text-align:center">Selects all elements with name2 that is a descendant of an element with name1</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_id.asp" target="_blank">#id</a></td>
<td style="text-align:center">#firstname</td>
<td style="text-align:center">Selects the element with id="firstname"</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_all.asp" target="_blank">*</a></td>
<td style="text-align:center">*</td>
<td style="text-align:center">Selects all elements</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_element.asp" target="_blank">element</a></td>
<td style="text-align:center">p</td>
<td style="text-align:center">Selects all <p> elements</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_element_class.asp" target="_blank">element.class</a></td>
<td style="text-align:center">p.intro</td>
<td style="text-align:center">Selects all <p> elements with class="intro"</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_element_comma.asp" target="_blank">element,element</a></td>
<td style="text-align:center">div, p</td>
<td style="text-align:center">Selects all <div> elements and all <p> elements</p></div></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_element_element.asp" target="_blank">element element</a></td>
<td style="text-align:center">div p</td>
<td style="text-align:center">Selects all <p> elements inside <div> elements</div></p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_element_gt.asp" target="_blank">element&gt;element</a></td>
<td style="text-align:center">div &gt; p</td>
<td style="text-align:center">Selects all <p> elements where the parent is a <div> element</div></p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_element_pluss.asp" target="_blank">element+element</a></td>
<td style="text-align:center">div + p</td>
<td style="text-align:center">Selects the first <p> element that is placed immediately after <div> elements</div></p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_gen_sibling.asp" target="_blank">element1~element2</a></td>
<td style="text-align:center">p ~ ul</td>
<td style="text-align:center">Selects every <ul> element that is preceded by a <p> element</p></ul></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_attribute.asp" target="_blank">[attribute]</a></td>
<td style="text-align:center">[target]</td>
<td style="text-align:center">Selects all elements with a target attribute</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_attribute_value.asp" target="_blank">[attribute=value]</a></td>
<td style="text-align:center">[target=_blank]</td>
<td style="text-align:center">Selects all elements with target="_blank"</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_attribute_value_contains.asp" target="_blank">[attribute~=value]</a></td>
<td style="text-align:center">[title~=flower]</td>
<td style="text-align:center">Selects all elements with a title attribute containing the word "flower"</td>
</tr>
<tr>
<td style="text-align:center">[[attribute</td>
<td style="text-align:center">=value]](<a href="https://www.w3schools.com/cssref/sel_attribute_value_lang.asp" target="_blank">https://www.w3schools.com/cssref/sel_attribute_value_lang.asp</a>)</td>
<td style="text-align:center">[lang</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_attr_begin.asp" target="_blank">[attribute^=value]</a></td>
<td style="text-align:center">a[href^="https"]</td>
<td style="text-align:center">Selects every <a> element whose href attribute value begins with "https"</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_attr_end.asp" target="_blank">[attribute$=value]</a></td>
<td style="text-align:center">a[href$=".pdf"]</td>
<td style="text-align:center">Selects every <a> element whose href attribute value ends with ".pdf"</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_attr_contain.asp" target="_blank">[attribute*=value]</a></td>
<td style="text-align:center">a[href*="w3schools"]</td>
<td style="text-align:center">Selects every <a> element whose href attribute value contains the substring "w3schools"</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_active.asp" target="_blank">:active</a></td>
<td style="text-align:center">a:active</td>
<td style="text-align:center">Selects the active link</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_after.asp" target="_blank">::after</a></td>
<td style="text-align:center">p::after</td>
<td style="text-align:center">Insert something after the content of each <p> element</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_before.asp" target="_blank">::before</a></td>
<td style="text-align:center">p::before</td>
<td style="text-align:center">Insert something before the content of each <p> element</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_checked.asp" target="_blank">:checked</a></td>
<td style="text-align:center">input:checked</td>
<td style="text-align:center">Selects every checked <input /> element</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_default.asp" target="_blank">:default</a></td>
<td style="text-align:center">input:default</td>
<td style="text-align:center">Selects the default <input /> element</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_disabled.asp" target="_blank">:disabled</a></td>
<td style="text-align:center">input:disabled</td>
<td style="text-align:center">Selects every disabled <input /> element</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_empty.asp" target="_blank">:empty</a></td>
<td style="text-align:center">p:empty</td>
<td style="text-align:center">Selects every <p> element that has no children (including text nodes)</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_enabled.asp" target="_blank">:enabled</a></td>
<td style="text-align:center">input:enabled</td>
<td style="text-align:center">Selects every enabled <input /> element</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_firstchild.asp" target="_blank">:first-child</a></td>
<td style="text-align:center">p:first-child</td>
<td style="text-align:center">Selects every <p> element that is the first child of its parent</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_firstletter.asp" target="_blank">::first-letter</a></td>
<td style="text-align:center">p::first-letter</td>
<td style="text-align:center">Selects the first letter of every <p> element</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_firstline.asp" target="_blank">::first-line</a></td>
<td style="text-align:center">p::first-line</td>
<td style="text-align:center">Selects the first line of every <p> element</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_first-of-type.asp" target="_blank">:first-of-type</a></td>
<td style="text-align:center">p:first-of-type</td>
<td style="text-align:center">Selects every <p> element that is the first </p><p> element of its parent</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_focus.asp" target="_blank">:focus</a></td>
<td style="text-align:center">input:focus</td>
<td style="text-align:center">Selects the input element which has focus</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_fullscreen.asp" target="_blank">:fullscreen</a></td>
<td style="text-align:center">:fullscreen</td>
<td style="text-align:center">Selects the element that is in full-screen mode</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_hover.asp" target="_blank">:hover</a></td>
<td style="text-align:center">a:hover</td>
<td style="text-align:center">Selects links on mouse over</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_in-range.asp" target="_blank">:in-range</a></td>
<td style="text-align:center">input:in-range</td>
<td style="text-align:center">Selects input elements with a value within a specified range</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_indeterminate.asp" target="_blank">:indeterminate</a></td>
<td style="text-align:center">input:indeterminate</td>
<td style="text-align:center">Selects input elements that are in an indeterminate state</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_invalid.asp" target="_blank">:invalid</a></td>
<td style="text-align:center">input:invalid</td>
<td style="text-align:center">Selects all input elements with an invalid value</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_lang.asp" target="_blank">:lang(language)</a></td>
<td style="text-align:center">p:lang(it)</td>
<td style="text-align:center">Selects every <p> element with a lang attribute equal to "it" (Italian)</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_last-child.asp" target="_blank">:last-child</a></td>
<td style="text-align:center">p:last-child</td>
<td style="text-align:center">Selects every <p> element that is the last child of its parent</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_last-of-type.asp" target="_blank">:last-of-type</a></td>
<td style="text-align:center">p:last-of-type</td>
<td style="text-align:center">Selects every <p> element that is the last </p><p> element of its parent</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_link.asp" target="_blank">:link</a></td>
<td style="text-align:center">a:link</td>
<td style="text-align:center">Selects all unvisited links</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_marker.asp" target="_blank">::marker</a></td>
<td style="text-align:center">::marker</td>
<td style="text-align:center">Selects the markers of list items</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_not.asp" target="_blank">:not(selector)</a></td>
<td style="text-align:center">:not(p)</td>
<td style="text-align:center">Selects every element that is not a <p> element</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_nth-child.asp" target="_blank">:nth-child(n)</a></td>
<td style="text-align:center">p:nth-child(2)</td>
<td style="text-align:center">Selects every <p> element that is the second child of its parent</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_nth-last-child.asp" target="_blank">:nth-last-child(n)</a></td>
<td style="text-align:center">p:nth-last-child(2)</td>
<td style="text-align:center">Selects every <p> element that is the second child of its parent, counting from the last child</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_nth-last-of-type.asp" target="_blank">:nth-last-of-type(n)</a></td>
<td style="text-align:center">p:nth-last-of-type(2)</td>
<td style="text-align:center">Selects every <p> element that is the second </p><p> element of its parent, counting from the last child</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_nth-of-type.asp" target="_blank">:nth-of-type(n)</a></td>
<td style="text-align:center">p:nth-of-type(2)</td>
<td style="text-align:center">Selects every <p> element that is the second </p><p> element of its parent</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_only-of-type.asp" target="_blank">:only-of-type</a></td>
<td style="text-align:center">p:only-of-type</td>
<td style="text-align:center">Selects every <p> element that is the only </p><p> element of its parent</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_only-child.asp" target="_blank">:only-child</a></td>
<td style="text-align:center">p:only-child</td>
<td style="text-align:center">Selects every <p> element that is the only child of its parent</p></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_optional.asp" target="_blank">:optional</a></td>
<td style="text-align:center">input:optional</td>
<td style="text-align:center">Selects input elements with no "required" attribute</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_out-of-range.asp" target="_blank">:out-of-range</a></td>
<td style="text-align:center">input:out-of-range</td>
<td style="text-align:center">Selects input elements with a value outside a specified range</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_placeholder.asp" target="_blank">::placeholder</a></td>
<td style="text-align:center">input::placeholder</td>
<td style="text-align:center">Selects input elements with the "placeholder" attribute specified</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_read-only.asp" target="_blank">:read-only</a></td>
<td style="text-align:center">input:read-only</td>
<td style="text-align:center">Selects input elements with the "readonly" attribute specified</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_read-write.asp" target="_blank">:read-write</a></td>
<td style="text-align:center">input:read-write</td>
<td style="text-align:center">Selects input elements with the "readonly" attribute NOT specified</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_required.asp" target="_blank">:required</a></td>
<td style="text-align:center">input:required</td>
<td style="text-align:center">Selects input elements with the "required" attribute specified</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_root.asp" target="_blank">:root</a></td>
<td style="text-align:center">:root</td>
<td style="text-align:center">Selects the document's root element</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_selection.asp" target="_blank">::selection</a></td>
<td style="text-align:center">::selection</td>
<td style="text-align:center">Selects the portion of an element that is selected by a user</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_target.asp" target="_blank">:target</a></td>
<td style="text-align:center">#news:target</td>
<td style="text-align:center">Selects the current active #news element (clicked on a URL containing that anchor name)</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_valid.asp" target="_blank">:valid</a></td>
<td style="text-align:center">input:valid</td>
<td style="text-align:center">Selects all input elements with a valid value</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3schools.com/cssref/sel_visited.asp" target="_blank">:visited</a></td>
<td style="text-align:center">a:visited</td>
<td style="text-align:center">Selects all visited links</td>
</tr>
</tbody>
</table>
<h1>函数</h1>
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">CSS 版本</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-attr" target="_blank">attr()</a></td>
<td style="text-align:center">返回选择元素的属性值。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-calc" target="_blank">calc()</a></td>
<td style="text-align:center">允许计算 CSS 的属性值，比如动态计算长度值。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-cubic-bezier" target="_blank">cubic-bezier()</a></td>
<td style="text-align:center">定义了一个贝塞尔曲线(Cubic Bezier)。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-hsl" target="_blank">hsl()</a></td>
<td style="text-align:center">使用色相、饱和度、亮度来定义颜色。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-hsla" target="_blank">hsla()</a></td>
<td style="text-align:center">使用色相、饱和度、亮度、透明度来定义颜色。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-linear-gradient" target="_blank">linear-gradient()</a></td>
<td style="text-align:center">创建一个线性渐变的图像</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-radial-gradient" target="_blank">radial-gradient()</a></td>
<td style="text-align:center">用径向渐变创建图像。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-repeating-linear-gradient" target="_blank">repeating-linear-gradient()</a></td>
<td style="text-align:center">用重复的线性渐变创建图像。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-repeating-radial-gradient" target="_blank">repeating-radial-gradient()</a></td>
<td style="text-align:center">类似 radial-gradient()，用重复的径向渐变创建图像。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-rgb-css" target="_blank">rgb()</a></td>
<td style="text-align:center">使用红(R)、绿(G)、蓝(B)三个颜色的叠加来生成各式各样的颜色。</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-rgba" target="_blank">rgba()</a></td>
<td style="text-align:center">使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。</td>
<td style="text-align:center">3</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_cssref_func-var" target="_blank">var()</a></td>
<td style="text-align:center">用于插入自定义的属性值。</td>
<td style="text-align:center">3</td>
</tr>
</tbody>
</table>
<h1>单位</h1>
<h2>相对长度</h2>
<p>相对长度单位指定了一个长度相对于另一个长度的属性。对于不同的设备相对长度更适用。</p>
<table>
<thead>
<tr>
<th style="text-align:center">单位</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">em</td>
<td style="text-align:center">相对于应用在当前元素的字体尺寸，一般浏览器字体大小默认为16px</td>
</tr>
<tr>
<td style="text-align:center">ex</td>
<td style="text-align:center">依赖于英文字母小 x 的高度</td>
</tr>
<tr>
<td style="text-align:center">ch</td>
<td style="text-align:center">数字 0 的宽度</td>
</tr>
<tr>
<td style="text-align:center">rem</td>
<td style="text-align:center">root em，相对于根元素字体大小；作用于根元素时，相对于其出初始字体大小。</td>
</tr>
<tr>
<td style="text-align:center">vw</td>
<td style="text-align:center">viewpoint width，视窗宽度，1vw=视窗宽度的1%</td>
</tr>
<tr>
<td style="text-align:center">vh</td>
<td style="text-align:center">viewpoint height，视窗高度，1vh=视窗高度的1%</td>
</tr>
<tr>
<td style="text-align:center">vmin</td>
<td style="text-align:center">vw和vh中较小的那个。</td>
</tr>
<tr>
<td style="text-align:center">vmax</td>
<td style="text-align:center">vw和vh中较大的那个。</td>
</tr>
<tr>
<td style="text-align:center">%</td>
<td style="text-align:center">百分比</td>
</tr>
</tbody>
</table>
<h2>绝对长度</h2>
<p>绝对长度单位是一个固定的值，它反应一个真实的物理尺寸。绝对长度单位视输出介质而定，不依赖于环境（显示器、分辨率、操作系统等）。</p>
<table>
<thead>
<tr>
<th style="text-align:center">单位</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">cm</td>
<td style="text-align:center">厘米</td>
</tr>
<tr>
<td style="text-align:center">mm</td>
<td style="text-align:center">毫米</td>
</tr>
<tr>
<td style="text-align:center">in</td>
<td style="text-align:center">英寸 (1in = 96px = 2.54cm)</td>
</tr>
<tr>
<td style="text-align:center">px</td>
<td style="text-align:center">像素 (1px = 1/96 in)</td>
</tr>
<tr>
<td style="text-align:center">pt</td>
<td style="text-align:center">磅（point），1pt = 1/12 <em> 1pc = 1/72 </em> 1in</td>
</tr>
<tr>
<td style="text-align:center">pc</td>
<td style="text-align:center">十二点活字（pica），印刷的专用单位 1pc = 12pt = 1/6 in</td>
</tr>
</tbody>
</table>
<h2>颜色</h2>
<table>
<thead>
<tr>
<th style="text-align:center">单位</th>
<th style="text-align:center">样式</th>
<th style="text-align:center">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">十六进制</td>
<td style="text-align:center">#RRGGBB</td>
<td style="text-align:center">#ff0000</td>
</tr>
<tr>
<td style="text-align:center">RGB</td>
<td style="text-align:center">rgb(红，绿，蓝)</td>
<td style="text-align:center">rgb(0,0,255) rgb(0％，0％，100％)</td>
</tr>
<tr>
<td style="text-align:center">RGBA</td>
<td style="text-align:center">rgba(红，绿，蓝，alpha)</td>
<td style="text-align:center">rgba(255,0,0,0.5)</td>
</tr>
<tr>
<td style="text-align:center">HSL</td>
<td style="text-align:center">hsl(色调，饱和度，明度)</td>
<td style="text-align:center">hsl(120,65%,75%)</td>
</tr>
<tr>
<td style="text-align:center">HSLA</td>
<td style="text-align:center">hsla(色调，饱和度，亮度，α)</td>
<td style="text-align:center">hsla(120,65%,75%,0.3)</td>
</tr>
</tbody>
</table>
<h2>字体</h2>
<ul>
<li>
<p>衬线字体（Serif）- 在每个字母的边缘都有一个小的笔触。它们营造出一种形式感和优雅感。</p>
</li>
<li>
<p>无衬线字体（Sans-serif）- 字体线条简洁（没有小笔画）。它们营造出现代而简约的外观。</p>
</li>
<li>
<p>等宽字体（Monospace）- 这里所有字母都有相同的固定宽度。它们创造出机械式的外观。</p>
</li>
<li>
<p>草书字体（Cursive）- 模仿了人类的笔迹。</p>
</li>
<li>
<p>幻想字体（Fantasy）- 是装饰性/俏皮的字体。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">通用字体族</th>
<th style="text-align:center">字体名称实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Serif</td>
<td style="text-align:center">Times New Roman Georgia Garamond</td>
</tr>
<tr>
<td style="text-align:center">Sans-serif</td>
<td style="text-align:center">Arial Verdana Helvetica</td>
</tr>
<tr>
<td style="text-align:center">Monospace</td>
<td style="text-align:center">Courier New Lucida Console Monaco</td>
</tr>
<tr>
<td style="text-align:center">Cursive</td>
<td style="text-align:center">Brush Script MT Lucida Handwriting</td>
</tr>
<tr>
<td style="text-align:center">Fantasy</td>
<td style="text-align:center">Copperplate Papyrus</td>
</tr>
</tbody>
</table>
<h2><a href="https://www.bemcss.com/#" target="_blank">CSS命名规范-BEM</a></h2>
<p>Block（模块）、Element（元素）、Modifier（修饰符）</p>
<p>命名规矩：block-name__element-name--modifier-name</p>
<h1>——  Sass (Syntactically Awesome Stylesheets)   ——</h1>
<p>最初由 Hampton Catlin 设计并由 Natalie Weizenbaum 开发的层叠样式表语言</p>
<p>是一个 CSS 预处理器，CSS 扩展语言，帮助减少 CSS 重复的代码，节省开发时间。</p>
<p>Sass 文件后缀为 .scss。</p>
<p><strong>NPM 安装</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">npm install -g sass

</code></pre>
<p><strong>test.scss</strong></p>
<pre data-syntax="css"><code class="lang-css hljs raw">/* 定义变量与值 */
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

/* 使用变量 */
body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}

</code></pre>
<p>将 .scss 文件转化的 css 代码</p>
<pre data-syntax="css"><code class="lang-css hljs raw">命令行输入 sass test.scss [test.css]

</code></pre>
<p>变量</p>
<p>$variablename: value;</p>
<p>用 !global 关键词来设置变量是全局的</p>
<p><strong>嵌套</strong></p>
<p>标签</p>
<pre data-syntax="css"><code class="lang-css hljs raw">//sass
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
}

//css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}

</code></pre>
<p>属性</p>
<pre data-syntax="css"><code class="lang-css hljs raw">//sass
font: {
  family: Helvetica, sans-serif;
  size: 18px;
  weight: bold;
}

//css
font-family: Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;

</code></pre>
<p>指令</p>
<ul>
<li>
<p><a href="/import " class="user-login"><i>@</i>import </a> filename; </p>
</li>
<li>
<p><a href="/mixin " class="user-login"><i>@</i>mixin </a> ：定义一个可以在整个样式表中重复使用的样式。 </p>
</li>
<li>
<p><a href="/include " class="user-login"><i>@</i>include </a> ：将混入（mixin）引入到文档中。 </p>
</li>
<li>
<p><a href="/extend " class="user-login"><i>@</i>extend </a> ：样式从另一选择器继承 </p>
</li>
</ul>
<p><strong>函数</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="cs_web_https:_www.runoob.com_sass_sass-string-func" target="_blank">Sass 字符串相关函数</a></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_sass_sass-numeric-func" target="_blank">Sass 数字相关函数</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_sass_sass-list-func" target="_blank">Sass 列表(List)相关函数</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_sass_sass-map-func" target="_blank">Sass 映射(Map)相关函数</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_sass_sass-selector-func" target="_blank">Sass 选择器相关函数</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_sass_sass-introspection-func" target="_blank">Sass Introspection 相关函数</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_web_https:_www.runoob.com_sass_sass-color-func" target="_blank">Sass 颜色相关函数</a></td>
</tr>
</tbody>
</table>
<h1>Bootstrap4</h1>
<pre data-syntax="css"><code class="lang-css hljs raw">&lt;!-- 新 Bootstrap4 核心 CSS 文件 --&gt;
&lt;link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css"&gt;
 
&lt;!-- jQuery文件。务必在bootstrap.min.js 之前引入 --&gt;
&lt;script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"&gt;&lt;/script&gt;
 
&lt;!-- bootstrap.bundle.min.js 用于弹窗、提示、下拉菜单，包含了 popper.min.js --&gt;
&lt;script src="https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js"&gt;&lt;/script&gt;
 
&lt;!-- 最新的 Bootstrap4 核心 JavaScript 文件 --&gt;
&lt;script src="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js"&gt;&lt;/script&gt;

</code></pre>
<p>容器类：</p>
<ul>
<li>
<p>.container 类用于固定宽度并支持响应式布局的容器。</p>
</li>
<li>
<p>.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。</p>
</li>
</ul>
<p><strong>网格系统</strong></p>
<p>一套响应式、移动设备优先的流式网格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列。</p>
<p><strong>网格类</strong></p>
<ul>
<li>
<p>.col- 针对所有设备</p>
</li>
<li>
<p>.col-sm- 平板 - 屏幕宽度等于或大于 576px</p>
</li>
<li>
<p>.col-md- 桌面显示器 - 屏幕宽度等于或大于 768px)</p>
</li>
<li>
<p>.col-lg- 大桌面显示器 - 屏幕宽度等于或大于 992px)</p>
</li>
<li>
<p>.col-xl- 超大桌面显示器 - 屏幕宽度等于或大于 1200px)</p>
</li>
</ul>
<p>偏移列通过 offset-<em>-</em> 类来设置</p>
<p>默认的 <strong>font-size</strong> 为 16px, line-height 为 1.5。</p>
<p>默认的 <strong>font-family</strong> 为 "Helvetica Neue", Helvetica, Arial, sans-serif。</p>
<p>此外，所有的 <strong><p></p></strong> 元素 margin-top: 0 、 margin-bottom: 1rem (16px)。</p>
<pre data-syntax="css"><code class="lang-css hljs raw">&lt;div class="container"&gt;
  &lt;h1&gt;h1 Bootstrap 标题 (2.5rem = 40px)&lt;/h1&gt;
  &lt;h2&gt;h2 Bootstrap 标题 (2rem = 32px)&lt;/h2&gt;
  &lt;h3&gt;h3 Bootstrap 标题 (1.75rem = 28px)&lt;/h3&gt;
  &lt;h4&gt;h4 Bootstrap 标题 (1.5rem = 24px)&lt;/h4&gt;
  &lt;h5&gt;h5 Bootstrap 标题 (1.25rem = 20px)&lt;/h5&gt;
  &lt;h6&gt;h6 Bootstrap 标题 (1rem = 16px)&lt;/h6&gt;
&lt;/div&gt;

</code></pre>
