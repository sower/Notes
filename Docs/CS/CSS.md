
# —— 层叠样式表 (Cascading Style Sheets) ——
[**CSS**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)：一种 样式表 语言，用来描述 HTML 或 XML文档的呈现  <br />  样式规则语法
```css
style-rule ::=
    selectors-list {
      properties-list
    }
    
    
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]
properties-list ::=
    [property : value] [; properties-list]
    
    
/* Comment */
```

[值定义语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax)

- 声明（declaration）： 一个属性与值的键值对
- 属性（ property）：一个标识符，用可读的名称来表示其特性。
- 值（value）：描述了浏览器引擎如何处理该特性

如果值为若干单词，则要给值加引号


# 选择器（Selector）
[基本选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#simple_selectors)

- [通用选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)（[Universal selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)）
   - `ns|*`	会匹配ns命名空间下的所有元素
   - `*|*`	会匹配所有命名空间下的所有元素
   - `|*`	会匹配所有没有命名空间的元素
- [元素选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors)（[Type selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors)） `elementname`(元素名称)
- [类选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors)（[Class selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors)）	`.classname`(类名)
- [ID 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors)（[ID selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors)） `#idname`(ID 名)
- [属性选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)（[Attribute selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)） `[attr=value]`

[分组选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E5%88%86%E7%BB%84%E9%80%89%E6%8B%A9%E5%99%A8)  <br />  [**选择器列表**](https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list)** **`A, B`	同时选择A 和 B元素。

[组合器（Combinators）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#%E7%BB%84%E5%90%88%E5%99%A8%EF%BC%88combinators%EF%BC%89)

- 相邻兄弟选择器 `A + B`

指定A和B选择的元素具有相同的父元素，并且B选择的元素在水平方向上紧随A选择的元素。

- 普通兄弟选择器 `A ~ B`

指定由A和B选择的元素共享相同的父元素，并指定A选择的元素在B选择的元素之前（但不一定紧接在B之前）。

- 子选择器 `A > B`

指定B选择的元素是A选择的元素的直接子元素。

- 后代选择器 `A B`

指定B选择的元素是A选择的元素的后代，但不一定是直接子代。  <br />  **An+B of S**  <br />  `:nth-chid(even)`	偶数节点  <br />  `:nth-child(3n+1 of li.important)`第4，7...个 li.important节点

[伪选择器（Pseudo）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#%E4%BC%AA%E9%80%89%E6%8B%A9%E5%99%A8%EF%BC%88pseudo%EF%BC%89)

- [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes) (Pseudo-classes)：添加到选择器的关键字，指定要选择的元素的特殊状态。
```css
selector:pseudo-class {
  property: value;
}
```

- [伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)：一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。
```css
selector::pseudo-element {
  property: value;
}
```


# 样式
外部样式表
```css
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```
不要在属性值与单位之间留有空格

内部样式表
```css
<head>
<style type="text/css">
  hr {color: sienna;}
  p {margin-left: 20px;}
  body {background-image: url("images/back40.gif");}
</style>
</head>
```
内联样式
```css
<p style="color: sienna; margin-left: 20px">
This is a paragraph
</p>
```
如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。

# 层叠 继承 优先级
[层叠](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#%E5%B1%82%E5%8F%A0)：当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

[**继承**](https://developer.mozilla.org/zh-CN/docs/CSS/inheritance)  <br />  [控制继承](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#%E6%8E%A7%E5%88%B6%E7%BB%A7%E6%89%BF)

- inherit：设置该属性会使子元素属性和父元素相同。即 "开启继承".
- initial：设置属性值和浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 inherit 。
- unset：将属性重置为自然值，如果属性是自然继承那么就是 inherit，否则和 initial一样



[**优先级**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)

- 内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
- 属性后插有 `!important` 的属性拥有最高优先级
- 计算选择符中 ID 选择器的个数（a），类选择器、属性选择器以及伪类选择器的个数之和（b），标签选择器和伪元素选择器的个数之和（c），按 a、b、c 的顺序依次比较大小，大的则优先级高，相等则比较下一个。若都相等，按照"就近原则"。

# [@ 规则](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule)
@charset：定义样式表使用的字符集.  <br />  @import：引入一个外部样式表.  <br />  @namespace：考虑XML命名空间。  <br />  嵌套@规则：可以作为样式表里的一个语句，也可以用在条件规则组里  <br />  @media：如果满足媒介查询的条件则条件规则组里的规则生效。  <br />  @page：描述打印文档时布局的变化.  <br />  @font-face：描述将下载的外部的字体。  <br />  @keyframes：描述 CSS 动画的中间步骤 .  <br />  @supports：如果满足给定条件则条件规则组里的规则生效。

[响应式设计](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)  <br />  [媒体查询](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Media_queries)：根据各种设备特征和参数的值或者是否存在来调整网站或应用。
```css
@media media-type and (media-feature-rule) {
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
```
viewport是严格等于浏览器的窗口。在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。

物理像素(physical pixel)	显示器(手机屏幕)上最小的物理显示单元，每个像素可以根据操作系统设置自己的颜色和亮度  <br />  设备独立像素(density-independent pixel)	可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(如CSS像素)，然后由相关系统转换为物理像素。  <br />  设备像素比(device pixel ratio)	定义了物理像素和设备独立像素的对应关系
```css
设备像素比 = 物理像素 / 设备独立像素
```

rem布局
```css
媒体查询，在不同分辨率下给 html 的 font-size 赋值
@media screen and (min-width: 640px) {
    html {
            font-size: 200px;
        }
}

// js 动态计算赋值
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){    // iPhone 5
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
```


# 布局 Layout

## 正常布局流（Normal flow）
一个[块级元素](https://wiki.developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)的内容宽度是其父元素的100%，其高度与其内容高度一致。内联元素的height width与内容一致。  <br />  块级元素按照基于其父元素的[书写顺序](https://wiki.developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)(默认值: horizontal-tb)的块流动方向(block flow direction)放置 --- 每个块级元素会在上一个元素下面另起一行，它们会被设置好的margin 分隔

[**盒模型**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model)  <br />  [**块级盒子（Block box）**](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E5%9D%97%E7%BA%A7%E7%9B%92%E5%AD%90%EF%BC%88block_box%EF%BC%89_%E5%92%8C_%E5%86%85%E8%81%94%E7%9B%92%E5%AD%90%EF%BC%88inline_box%EF%BC%89)

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间
- 每个盒子都会换行
- width 和 height 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

[**内联盒子（Inline box）**](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E5%9D%97%E7%BA%A7%E7%9B%92%E5%AD%90%EF%BC%88block_box%EF%BC%89_%E5%92%8C_%E5%86%85%E8%81%94%E7%9B%92%E5%AD%90%EF%BC%88inline_box%EF%BC%89)

- 盒子不会产生换行。
- width 和 height 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。
| Property | Description |
| --- | --- |
| [display](https://www.w3schools.com/cssref/pr_class_display.asp) | Specifies how an element should be displayed |
| [visibility](https://www.w3schools.com/cssref/pr_class_visibility.asp) | Specifies whether or not an element should be visible |


## [弹性盒子（Flexbox）](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox)
![](https://developer.mozilla.org/files/3739/flex_terms.png#crop=0&crop=0&crop=1&crop=1&id=otrAP&originHeight=333&originWidth=563&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  **flex**
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  flex-flow: <flex-direction> || <flex-wrap>;
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
.item {
  order: <integer>;
  flex-grow: <number>; /* default 0 */
  flex-shrink: <number>; /* default 1 */
  flex-basis: <length> | auto; /* default auto */
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

## [网格（Grid）](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids)
一个用于web的二维布局系统  <br />  grid    CSS网格指南
```css
.container {
  display: grid;
  /* fr（fraction ，"片段"）*/ 
  grid-template-rows: 1fr 1fr minmax(100px, 1fr);
  grid-template-columns: repeat(auto-fill, 100px);
  gap: <row-gap> <column-gap>;
  grid-template-areas: "header header header"
                     "main main sidebar"
                     "footer footer footer";
  grid-template: <grid-template-columns> <grid-template-rows> <grid-template-areas>;
  grid-auto-flow: row dense;
  /* 设置单元格内容*/ 
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  place-items: <align-items> <justify-items>;
  /* 设置整体内容区域*/ 
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
  place-content: <align-content> <justify-content>
  grid: <grid-template> grid-auto-rows、grid-auto-columns、grid-auto-flow
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
  place-self: <align-self> <justify-self>;
}
```

## [浮动（Floats）](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Floats)
float

- left - The element floats to the left of its container
- right - The element floats to the right of its container
- none - The element does not float. This is default
- inherit - The element inherits the float value of its parent

clear

- none - The element is not pushed below left or right floated elements. This is default
- left - The element is pushed below left floated elements
- right - The element is pushed below right floated elements
- both - The element is pushed below both left and right floated elements
- inherit - The element inherits the clear value from its parent

**清除浮动**
```css
.clearfix::after {
  content: '';
  display: table;
  clear: both;
  height: 0;
  visibility: hidden;
}
```

## 定位[（Positioning）](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Positioning)
| Property | Description |
| --- | --- |
| [bottom](https://www.w3schools.com/cssref/pr_pos_bottom.asp) | Sets the bottom margin edge for a positioned box |
| [clip](https://www.w3schools.com/cssref/pr_pos_clip.asp) | Clips an absolutely positioned element |
| [left](https://www.w3schools.com/cssref/pr_pos_left.asp) | Sets the left margin edge for a positioned box |
| [position](https://www.w3schools.com/cssref/pr_class_position.asp) | Specifies the type of positioning for an element |
| [right](https://www.w3schools.com/cssref/pr_pos_right.asp) | Sets the right margin edge for a positioned box |
| [top](https://www.w3schools.com/cssref/pr_pos_top.asp) | Sets the top margin edge for a positioned box |
| [z-index](https://www.w3schools.com/cssref/pr_pos_z-index.asp) | Sets the stack order of an element |

**Position**

- 静态定位(Static)：元素默认的属性——将元素放在文档布局流的默认位置
- 相对定位(Relative)：相对于元素在正常的文档流中的位置移动它
- 绝对定位(Absolute)：元素完全从页面的正常布局流(normal layout flow)中移出，类似将它单独放在一个图层中。可以将元素相对于页面的  元素边缘固定，或者相对于该元素的最近被定位祖先元素(nearest positioned ancestor element)。
- 固定定位(Fixed)：将一个元素相对浏览器视口固定
- 粘性定位(Sticky)：元素先保持和position: static一样的定位，当它的相对视口位置(offset from the viewport)达到某一个预设值时，他就会像position: fixed一样定位。

[多列布局（Multiple-column Layout）](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)

| Property | Description |
| --- | --- |
| [column-count](https://www.w3schools.com/cssref/css3_pr_column-count.asp) | Specifies the number of columns an element should be divided into |
| [column-fill](https://www.w3schools.com/cssref/css3_pr_column-fill.asp) | Specifies how to fill columns |
| [column-gap](https://www.w3schools.com/cssref/css3_pr_column-gap.asp) | Specifies the gap between the columns |
| [column-rule](https://www.w3schools.com/cssref/css3_pr_column-rule.asp) | A shorthand property for setting all the column-rule-* properties |
| [column-rule-color](https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp) | Specifies the color of the rule between columns |
| [column-rule-style](https://www.w3schools.com/cssref/css3_pr_column-rule-style.asp) | Specifies the style of the rule between columns |
| [column-rule-width](https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp) | Specifies the width of the rule between columns |
| [column-span](https://www.w3schools.com/cssref/css3_pr_column-span.asp) | Specifies how many columns an element should span across |
| [column-width](https://www.w3schools.com/cssref/css3_pr_column-width.asp) | Specifies a suggested, optimal width for the columns |
| [columns](https://www.w3schools.com/cssref/css3_pr_columns.asp) | A shorthand property for setting column-width and column-count |


# FC(Formatting Context，格式化上下文)
BFC(Block Formatting Context，[块格式化](https://developer.mozilla.org/zh-CN/docs/CSS/block_formatting_context)上下文）：块级元素的渲染显示规则。容器里面的子元素不会影响到外面的元素

触发条件

- 根元素、body
- 浮动元素：float: left/right/inherit
- 绝对定位元素：position: absolute/fixed
- display： display: inline-block、table-cell/table-caption、flex/inline-flex
- 溢出元素 overflow: hidden/scroll/auto/inherit

IFC(Inline Formatting Context，行内格式化上下文）  <br />  FFC(Flex Formatting Context，弹性盒子格式化上下文)  <br />  GFC(GridLayout Formatting Context，网格盒子格式化上下文)

# 排版（Typography）

## 居中显示
单行文本
```css
/* 父元素*/
div {
  text-align: center;//水平居中
  light-height: [heightValue];//垂直居中
}
```
多行文本
```css
/* 父元素*/
div {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```
盒子  <br />  table-cell + inline-block
```css
.parent {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.child{
  display: inline-block;
  vertical-align:middle;
}
```
position + 负margin
```css
.parent {
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
```
position + margin: auto
```css
.parent {
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
```
flex
```css
.demo {
  display: flex;
  align-items: center;
  justify-content: center;
}
```


## 常用样式
**文本省略号**
```css
/* 单行文本 */
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
```
**三角形**
```css
div {
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: #aaa transparent transparent transparent;
}
```
椭圆
```css
.circle {
    width: 200px;     /* 长轴 */
    height: 100px;    /* 短轴 */
    background-color: #FFB5BF;
    border-radius: 50%;  
}
```
**icon 图标**  <br />  **使用类名**
```css
/* 引入 css 文件 */ 
<link rel="stylesheet" type="text/css" href="./iconfont.css">
/* 挑选相应图标并获取类名，应用于页面 */ 
<i class="iconfont icon-xxx"></i>
```
**字体编码**
```css
/* 拷贝项目下面生成的 font-face， 并定义使用 iconfont 的样式 */
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
<i class="iconfont">&#x33;</i>
```
**Symbol 方式**
```css
/* 引入项目下面生成的 symbol 代码 */
<script src="./iconfont.js"></script>
/* 加入通用 css 代码 */
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
/* 挑选相应图标并获取类名，应用于页面 */
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xxx"></use>
</svg>
```
**滚动条样式**
```css
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
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
```
**cursor 光标**  <br />  定义了鼠标指针放在一个元素边界范围内时所用的光标形状

- default：默认光标（通常是一个箭头）
- auto：默认。浏览器设置的光标。
- crosshair：光标呈现为十字线。
- pointer：光标呈现为指示链接的指针（一只手）
- move：此光标指示某对象可被移动。
- e-resize：此光标指示矩形框的边缘可被向右（东）移动。
- ne-resize：此光标指示矩形框的边缘可被向上及向右移动（北/东）。
- nw-resize：此光标指示矩形框的边缘可被向上及向左移动（北/西）。
- n-resize：此光标指示矩形框的边缘可被向上（北）移动。
- se-resize：此光标指示矩形框的边缘可被向下及向右移动（南/东）。
- sw-resize：此光标指示矩形框的边缘可被向下及向左移动（南/西）。
- s-resize：此光标指示矩形框的边缘可被向下移动（南）。
- w-resize：此光标指示矩形框的边缘可被向左移动（西）。
- text：此光标指示文本。
- wait：此光标指示程序正忙（通常是一只表或沙漏）。
- help：此光标指示可用的帮助（通常是一个问号或一个气球）。
- url() 需使用的自定义光标的 URL。

# 变量
```css
:root {
  --main-color: red    /* 声明变量 */
}
#foo {
  background-color: var(--main-color);    /* 使用变量 */
}
```

`var() = var( <custom-property-name> [, <declaration-value> ]?)`

搭配JS
```css
/* CSS部分 */
:root {
  --main-color: red
}
/* JS部分 */
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--main-color');
console.log(mainColor);  --> 'red'
root.style.setProperty('--main-color', 'blue')
```

# [Reference](https://cssreference.io/)

## 动画 [Animations](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)
| 属性 | 描述 |
| --- | --- |
| [@keyframes](https://www.w3school.com.cn/cssref/pr_keyframes.asp) | 规定动画。 |
| [animation](https://www.w3school.com.cn/cssref/pr_animation.asp) | 所有动画属性的简写属性，除了 animation-play-state 属性。 |
| [animation-name](https://www.w3school.com.cn/cssref/pr_animation-name.asp) | 规定 _@_keyframes 动画的名称。  |
| [animation-duration](https://www.w3school.com.cn/cssref/pr_animation-duration.asp) | 规定动画完成一个周期所花费的秒或毫秒。 |
| [animation-timing-function](https://www.w3school.com.cn/cssref/pr_animation-timing-function.asp) | 规定动画的速度曲线。 |
| [animation-delay](https://www.w3school.com.cn/cssref/pr_animation-delay.asp) | 规定动画何时开始。 |
| [animation-iteration-count](https://www.w3school.com.cn/cssref/pr_animation-iteration-count.asp) | 规定动画被播放的次数。 |
| [animation-direction](https://www.w3school.com.cn/cssref/pr_animation-direction.asp) | 规定动画是否在下一周期逆向地播放。 |
| [animation-play-state](https://www.w3school.com.cn/cssref/pr_animation-play-state.asp) | 规定动画是否正在运行或暂停。 |
| [animation-fill-mode](https://www.w3school.com.cn/cssref/pr_animation-fill-mode.asp) | 规定对象动画时间之外的状态。 |

```css
@keyframes color-animation {
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
```


## 背景属性（Background）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [background](https://www.w3school.com.cn/cssref/pr_background.asp) | 在一个声明中设置所有的背景属性。 | 1 |
| [background-attachment](https://www.w3school.com.cn/cssref/pr_background-attachment.asp) | 设置背景图像是否固定或者随着页面的其余部分滚动。 | 1 |
| [background-color](https://www.w3school.com.cn/cssref/pr_background-color.asp) | 设置元素的背景颜色。 | 1 |
| [background-image](https://www.w3school.com.cn/cssref/pr_background-image.asp) | 设置元素的背景图像。 | 1 |
| [background-position](https://www.w3school.com.cn/cssref/pr_background-position.asp) | 设置背景图像的开始位置。 | 1 |
| [background-repeat](https://www.w3school.com.cn/cssref/pr_background-repeat.asp) | 设置是否及如何重复背景图像。 | 1 |
| [background-clip](https://www.w3school.com.cn/cssref/pr_background-clip.asp) | 规定背景的绘制区域。 | 3 |
| [background-origin](https://www.w3school.com.cn/cssref/pr_background-origin.asp) | 规定背景图片的定位区域。 | 3 |
| [background-size](https://www.w3school.com.cn/cssref/pr_background-size.asp) | 规定背景图片的尺寸。 | 3 |

**background-repeat 背景平铺**

- repeat：默认值
- no-repeat
- repeat-x
- repeat-y
- round：图像间设置间距，确保不被截断
- space：调整图像大小，确保不被截断

background-attachment

- fixed：固定，不随页面滚动条而滚动
- scroll：默认，随页面内容滚动


## 内边距属性（Padding）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [padding](https://www.w3school.com.cn/cssref/pr_padding.asp) | 在一个声明中设置所有内边距属性。 | 1 |
| [padding-bottom](https://www.w3school.com.cn/cssref/pr_padding-bottom.asp) | 设置元素的下内边距。 | 1 |
| [padding-left](https://www.w3school.com.cn/cssref/pr_padding-left.asp) | 设置元素的左内边距。 | 1 |
| [padding-right](https://www.w3school.com.cn/cssref/pr_padding-right.asp) | 设置元素的右内边距。 | 1 |
| [padding-top](https://www.w3school.com.cn/cssref/pr_padding-top.asp) | 设置元素的上内边距。 | 1 |


## 外边距属性（Margin）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [margin](https://www.w3school.com.cn/cssref/pr_margin.asp) | 在一个声明中设置所有外边距属性。 | 1 |
| [margin-bottom](https://www.w3school.com.cn/cssref/pr_margin-bottom.asp) | 设置元素的下外边距。 | 1 |
| [margin-left](https://www.w3school.com.cn/cssref/pr_margin-left.asp) | 设置元素的左外边距。 | 1 |
| [margin-right](https://www.w3school.com.cn/cssref/pr_margin-right.asp) | 设置元素的右外边距。 | 1 |
| [margin-top](https://www.w3school.com.cn/cssref/pr_margin-top.asp) | 设置元素的上外边距。 | 1 |


## 边框属性（Border 和 Outline）
| 属性 | 描述 |
| --- | --- |
| [border](https://www.w3school.com.cn/cssref/pr_border.asp) | 在一个声明中设置所有的边框属性。 |
| [border-bottom](https://www.w3school.com.cn/cssref/pr_border-bottom.asp) | 在一个声明中设置所有的下边框属性。 |
| [border-bottom-color](https://www.w3school.com.cn/cssref/pr_border-bottom_color.asp) | 设置下边框的颜色。 |
| [border-bottom-style](https://www.w3school.com.cn/cssref/pr_border-bottom_style.asp) | 设置下边框的样式。 |
| [border-bottom-width](https://www.w3school.com.cn/cssref/pr_border-bottom_width.asp) | 设置下边框的宽度。 |
| [border-color](https://www.w3school.com.cn/cssref/pr_border-color.asp) | 设置四条边框的颜色。 |
| [border-left](https://www.w3school.com.cn/cssref/pr_border-left.asp) | 在一个声明中设置所有的左边框属性。 |
| [border-left-color](https://www.w3school.com.cn/cssref/pr_border-left_color.asp) | 设置左边框的颜色。 |
| [border-left-style](https://www.w3school.com.cn/cssref/pr_border-left_style.asp) | 设置左边框的样式。 |
| [border-left-width](https://www.w3school.com.cn/cssref/pr_border-left_width.asp) | 设置左边框的宽度。 |
| [border-right](https://www.w3school.com.cn/cssref/pr_border-right.asp) | 在一个声明中设置所有的右边框属性。 |
| [border-right-color](https://www.w3school.com.cn/cssref/pr_border-right_color.asp) | 设置右边框的颜色。 |
| [border-right-style](https://www.w3school.com.cn/cssref/pr_border-right_style.asp) | 设置右边框的样式。 |
| [border-right-width](https://www.w3school.com.cn/cssref/pr_border-right_width.asp) | 设置右边框的宽度。 |
| [border-style](https://www.w3school.com.cn/cssref/pr_border-style.asp) | 设置四条边框的样式。 |
| [border-top](https://www.w3school.com.cn/cssref/pr_border-top.asp) | 在一个声明中设置所有的上边框属性。 |
| [border-top-color](https://www.w3school.com.cn/cssref/pr_border-top_color.asp) | 设置上边框的颜色。 |
| [border-top-style](https://www.w3school.com.cn/cssref/pr_border-top_style.asp) | 设置上边框的样式。 |
| [border-top-width](https://www.w3school.com.cn/cssref/pr_border-top_width.asp) | 设置上边框的宽度。 |
| [border-width](https://www.w3school.com.cn/cssref/pr_border-width.asp) | 设置四条边框的宽度。 |
| [outline](https://www.w3school.com.cn/cssref/pr_outline.asp) | 在一个声明中设置所有的轮廓属性。 |
| [outline-color](https://www.w3school.com.cn/cssref/pr_outline-color.asp) | 设置轮廓的颜色。 |
| [outline-style](https://www.w3school.com.cn/cssref/pr_outline-style.asp) | 设置轮廓的样式。 |
| [outline-width](https://www.w3school.com.cn/cssref/pr_outline-width.asp) | 设置轮廓的宽度。 |
| [border-bottom-left-radius](https://www.w3school.com.cn/cssref/pr_border-bottom-left-radius.asp) | 定义边框左下角的形状。 |
| [border-bottom-right-radius](https://www.w3school.com.cn/cssref/pr_border-bottom-right-radius.asp) | 定义边框右下角的形状。 |
| [border-image](https://www.w3school.com.cn/cssref/pr_border-image.asp) | 简写属性，设置所有 border-image-* 属性。 |
| [border-image-outset](https://www.w3school.com.cn/cssref/pr_border-image-outset.asp) | 规定边框图像区域超出边框的量。 |
| [border-image-repeat](https://www.w3school.com.cn/cssref/pr_border-image-repeat.asp) | 图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。 |
| [border-image-slice](https://www.w3school.com.cn/cssref/pr_border-image-slice.asp) | 规定图像边框的向内偏移。 |
| [border-image-source](https://www.w3school.com.cn/cssref/pr_border-image-source.asp) | 规定用作边框的图片。 |
| [border-image-width](https://www.w3school.com.cn/cssref/pr_border-image-width.asp) | 规定图片边框的宽度。 |
| [border-radius](https://www.w3school.com.cn/cssref/pr_border-radius.asp) | 简写属性，设置所有四个 border-*-radius 属性。 |
| [border-top-left-radius](https://www.w3school.com.cn/cssref/pr_border-top-left-radius.asp) | 定义边框左上角的形状。 |
| [border-top-right-radius](https://www.w3school.com.cn/cssref/pr_border-top-right-radius.asp) | 定义边框右下角的形状。 |
| box-decoration-break |  |
| [box-shadow](https://www.w3school.com.cn/cssref/pr_box-shadow.asp) | 向方框添加一个或多个阴影。 |

盒模型相关的属性  <br />  ![](http://c.biancheng.net/uploads/allimg/181112/1-1Q112150JE20.gif#crop=0&crop=0&crop=1&crop=1&id=KkaSY&originHeight=473&originWidth=700&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## Box 属性
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [overflow-x](https://www.w3school.com.cn/cssref/pr_overflow-x.asp) | 如果内容溢出了元素内容区域，是否对内容的左/右边缘进行裁剪。 | 3 |
| [overflow-y](https://www.w3school.com.cn/cssref/pr_overflow-y.asp) | 如果内容溢出了元素内容区域，是否对内容的上/下边缘进行裁剪。 | 3 |
| [overflow-style](https://www.w3school.com.cn/cssref/pr_overflow-style.asp) | 规定溢出元素的首选滚动方法。 | 3 |
| [rotation](https://www.w3school.com.cn/cssref/pr_rotation.asp) | 围绕由 rotation-point 属性定义的点对元素进行旋转。 | 3 |
| [rotation-point](https://www.w3school.com.cn/cssref/pr_rotation-point.asp) | 定义距离上左边框边缘的偏移点。 | 3 |


## 颜色 [Color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Color)
| 属性 | 描述 | CSS |
| --- | --- | --- |
| color-profile | 允许使用源的颜色配置文件的默认以外的规范。 | 3 |
| [opacity](https://www.w3school.com.cn/cssref/pr_opacity.asp) | 规定元素的不透明级别。 | 3 |
| rendering-intent | 允许使用颜色配置文件渲染意图的默认以外的规范。 | 3 |


## 尺寸属性（Dimension）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [height](https://www.w3school.com.cn/cssref/pr_dim_height.asp) | 设置元素高度。 | 1 |
| [max-height](https://www.w3school.com.cn/cssref/pr_dim_max-height.asp) | 设置元素的最大高度。 | 2 |
| [max-width](https://www.w3school.com.cn/cssref/pr_dim_max-width.asp) | 设置元素的最大宽度。 | 2 |
| [min-height](https://www.w3school.com.cn/cssref/pr_dim_min-height.asp) | 设置元素的最小高度。 | 2 |
| [min-width](https://www.w3school.com.cn/cssref/pr_dim_min-width.asp) | 设置元素的最小宽度。 | 2 |
| [width](https://www.w3school.com.cn/cssref/pr_dim_width.asp) | 设置元素的宽度。 | 1 |


## 定位属性（Positioning）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [bottom](https://www.w3school.com.cn/cssref/pr_pos_bottom.asp) | 设置定位元素下外边距边界与其包含块下边界之间的偏移。 | 2 |
| [clear](https://www.w3school.com.cn/cssref/pr_class_clear.asp) | 规定元素的哪一侧不允许其他浮动元素。 | 1 |
| [clip](https://www.w3school.com.cn/cssref/pr_pos_clip.asp) | 剪裁绝对定位元素。 | 2 |
| [cursor](https://www.w3school.com.cn/cssref/pr_class_cursor.asp) | 规定要显示的光标的类型（形状）。 | 2 |
| [display](https://www.w3school.com.cn/cssref/pr_class_display.asp) | 规定元素应该生成的框的类型。 | 1 |
| [float](https://www.w3school.com.cn/cssref/pr_class_float.asp) | 规定框是否应该浮动。 | 1 |
| [left](https://www.w3school.com.cn/cssref/pr_pos_left.asp) | 设置定位元素左外边距边界与其包含块左边界之间的偏移。 | 2 |
| [overflow](https://www.w3school.com.cn/cssref/pr_pos_overflow.asp) | 规定当内容溢出元素框时发生的事情。 | 2 |
| [position](https://www.w3school.com.cn/cssref/pr_class_position.asp) | 规定元素的定位类型。 | 2 |
| [right](https://www.w3school.com.cn/cssref/pr_pos_right.asp) | 设置定位元素右外边距边界与其包含块右边界之间的偏移。 | 2 |
| [top](https://www.w3school.com.cn/cssref/pr_pos_top.asp) | 设置定位元素的上外边距边界与其包含块上边界之间的偏移。 | 2 |
| [vertical-align](https://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp) | 设置元素的垂直对齐方式。 | 1 |
| [visibility](https://www.w3school.com.cn/cssref/pr_class_visibility.asp) | 规定元素是否可见。 | 2 |
| [z-index](https://www.w3school.com.cn/cssref/pr_pos_z-index.asp) | 设置元素的堆叠顺序。 | 2 |

| position值 | 描述 |
| --- | --- |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| fixed | 生成绝对定位的元素，相对于浏览器窗口进行定位。 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。 因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
| static | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 |
| inherit | 规定应该从父元素继承 position 属性的值。 |


## 可伸缩框属性（Flexible Box）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [box-align](https://www.w3school.com.cn/cssref/pr_box-align.asp) | 规定如何对齐框的子元素。 | 3 |
| [box-direction](https://www.w3school.com.cn/cssref/pr_box-direction.asp) | 规定框的子元素的显示方向。 | 3 |
| [box-flex](https://www.w3school.com.cn/cssref/pr_box-flex.asp) | 规定框的子元素是否可伸缩。 | 3 |
| [box-flex-group](https://www.w3school.com.cn/cssref/pr_box-flex-group.asp) | 将可伸缩元素分配到柔性分组。 | 3 |
| [box-lines](https://www.w3school.com.cn/cssref/pr_box-lines.asp) | 规定当超出父元素框的空间时，是否换行显示。 | 3 |
| [box-ordinal-group](https://www.w3school.com.cn/cssref/pr_box-ordinal-group.asp) | 规定框的子元素的显示次序。 | 3 |
| [box-orient](https://www.w3school.com.cn/cssref/pr_box-orient.asp) | 规定框的子元素是否应水平或垂直排列。 | 3 |
| [box-pack](https://www.w3school.com.cn/cssref/pr_box-pack.asp) | 规定水平框中的水平位置或者垂直框中的垂直位置。 | 3 |


## 字体 [Fonts](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Fonts)
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [font](https://www.w3school.com.cn/cssref/pr_font_font.asp) | 在一个声明中设置所有字体属性。 | 1 |
| [font-family](https://www.w3school.com.cn/cssref/pr_font_font-family.asp) | 规定文本的字体系列。 | 1 |
| [font-size](https://www.w3school.com.cn/cssref/pr_font_font-size.asp) | 规定文本的字体尺寸。 | 1 |
| [font-size-adjust](https://www.w3school.com.cn/cssref/pr_font_font-size-adjust.asp) | 为元素规定 aspect 值。 | 2 |
| [font-stretch](https://www.w3school.com.cn/cssref/pr_font_font-stretch.asp) | 收缩或拉伸当前的字体系列。 | 2 |
| [font-style](https://www.w3school.com.cn/cssref/pr_font_font-style.asp) | 规定文本的字体样式。 | 1 |
| [font-variant](https://www.w3school.com.cn/cssref/pr_font_font-variant.asp) | 规定是否以小型大写字母的字体显示文本。 | 1 |
| [font-weight](https://www.w3school.com.cn/cssref/pr_font_weight.asp) | 规定字体的粗细。 | 1 |


## 文本 [Text](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Text)
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [color](https://www.w3school.com.cn/cssref/pr_text_color.asp) | 设置文本的颜色。 | 1 |
| [direction](https://www.w3school.com.cn/cssref/pr_text_direction.asp) | 规定文本的方向 / 书写方向。 | 2 |
| [letter-spacing](https://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp) | 设置字符间距。 | 1 |
| [line-height](https://www.w3school.com.cn/cssref/pr_dim_line-height.asp) | 设置行高。 | 1 |
| [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | 规定文本的水平对齐方式。 | 1 |
| [text-decoration](https://www.w3school.com.cn/cssref/pr_text_text-decoration.asp) | 规定添加到文本的装饰效果。 | 1 |
| [text-indent](https://www.w3school.com.cn/cssref/pr_text_text-indent.asp) | 规定文本块首行的缩进。 | 1 |
| text-shadow | 规定添加到文本的阴影效果。 | 2 |
| [text-transform](https://www.w3school.com.cn/cssref/pr_text_text-transform.asp) | 控制文本的大小写。 | 1 |
| [unicode-bidi](https://www.w3school.com.cn/cssref/pr_unicode-bidi.asp) | 设置文本方向。 | 2 |
| [white-space](https://www.w3school.com.cn/cssref/pr_text_white-space.asp) | 规定如何处理元素中的空白。 | 1 |
| [word-spacing](https://www.w3school.com.cn/cssref/pr_text_word-spacing.asp) | 设置单词间距。 | 1 |
| [hanging-punctuation](https://www.w3school.com.cn/cssref/pr_hanging-punctuation.asp) | 规定标点字符是否位于线框之外。 | 3 |
| [punctuation-trim](https://www.w3school.com.cn/cssref/pr_punctuation-trim.asp) | 规定是否对标点字符进行修剪。 | 3 |
| text-align-last | 设置如何对齐最后一行或紧挨着强制换行符之前的行。 | 3 |
| [text-emphasis](https://www.w3school.com.cn/cssref/pr_text-emphasis.asp) | 向元素的文本应用重点标记以及重点标记的前景色。 | 3 |
| [text-justify](https://www.w3school.com.cn/cssref/pr_text-justify.asp) | 规定当 text-align 设置为 "justify" 时所使用的对齐方法。 | 3 |
| [text-outline](https://www.w3school.com.cn/cssref/pr_text-outline.asp) | 规定文本的轮廓。 | 3 |
| [text-overflow](https://www.w3school.com.cn/cssref/pr_text-overflow.asp) | 规定当文本溢出包含元素时发生的事情。 | 3 |
| [text-shadow](https://www.w3school.com.cn/cssref/pr_text-shadow.asp) | 向文本添加阴影。 | 3 |
| [text-wrap](https://www.w3school.com.cn/cssref/pr_text-wrap.asp) | 规定文本的换行规则。 | 3 |
| [word-break](https://www.w3school.com.cn/cssref/pr_word-break.asp) | 规定非中日韩文本的换行规则。 | 3 |
| [word-wrap](https://www.w3school.com.cn/cssref/pr_word-wrap.asp) | 允许对长的不可分割的单词进行分割并换行到下一行。 | 3 |


## Hyperlink 属性
| 属性 | 描述 |
| --- | --- |
| [target](https://www.w3school.com.cn/cssref/pr_target.asp) | 简写属性，设置target-name、target-new以及target-position属性。 |
| [target-name](https://www.w3school.com.cn/cssref/pr_target-name.asp) | 规定在何处打开链接（链接的目标）。 |
| [target-new](https://www.w3school.com.cn/cssref/pr_target-new.asp) | 规定目标链接在新窗口还是在已有窗口的新标签页中打开。 |
| [target-position](https://www.w3school.com.cn/cssref/pr_target-position.asp) | 规定在何处放置新的目标链接。 |


## 列表属性（List）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [list-style](https://www.w3school.com.cn/cssref/pr_list-style.asp) | 在一个声明中设置所有的列表属性。 | 1 |
| [list-style-image](https://www.w3school.com.cn/cssref/pr_list-style-image.asp) | 将图象设置为列表项标记。 | 1 |
| [list-style-position](https://www.w3school.com.cn/cssref/pr_list-style-position.asp) | 设置列表项标记的放置位置。 | 1 |
| [list-style-type](https://www.w3school.com.cn/cssref/pr_list-style-type.asp) | 设置列表项标记的类型。 | 1 |
| marker-offset |  | 2 |


## 表格属性（Table）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [border-collapse](https://www.w3school.com.cn/cssref/pr_tab_border-collapse.asp) | 规定是否合并表格边框。 | 2 |
| [border-spacing](https://www.w3school.com.cn/cssref/pr_tab_border-spacing.asp) | 规定相邻单元格边框之间的距离。 | 2 |
| [caption-side](https://www.w3school.com.cn/cssref/pr_tab_caption-side.asp) | 规定表格标题的位置。 | 2 |
| [empty-cells](https://www.w3school.com.cn/cssref/pr_tab_empty-cells.asp) | 规定是否显示表格中的空单元格上的边框和背景。 | 2 |
| [table-layout](https://www.w3school.com.cn/cssref/pr_tab_table-layout.asp) | 设置用于表格的布局算法。 | 2 |


## Overflow
| Property | Description |
| --- | --- |
| [overflow](https://www.w3schools.com/cssref/pr_pos_overflow.asp) | Specifies what happens if content overflows an element's box |
| [overflow-x](https://www.w3schools.com/cssref/css3_pr_overflow-x.asp) | Specifies what to do with the left/right edges of the content if it overflows the element's content area |
| [overflow-y](https://www.w3schools.com/cssref/css3_pr_overflow-y.asp) | Specifies what to do with the top/bottom edges of the content if it overflows the element's content area |

- visible - Default. The overflow is not clipped. The content renders outside the element's box
- hidden - The overflow is clipped, and the rest of the content will be invisible
- scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
- auto - Similar to scroll, but it adds scrollbars only when necessary

## 转换 [Transforms](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transforms)
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [transform](https://www.w3school.com.cn/cssref/pr_transform.asp) | 向元素应用 2D 或 3D 转换。 | 3 |
| [transform-origin](https://www.w3school.com.cn/cssref/pr_transform-origin.asp) | 允许你改变被转换元素的位置。 | 3 |
| [transform-style](https://www.w3school.com.cn/cssref/pr_transform-style.asp) | 规定被嵌套元素如何在 3D 空间中显示。 | 3 |
| [perspective](https://www.w3school.com.cn/cssref/pr_perspective.asp) | 规定 3D 元素的透视效果。 | 3 |
| [perspective-origin](https://www.w3school.com.cn/cssref/pr_perspective-origin.asp) | 规定 3D 元素的底部位置。 | 3 |
| [backface-visibility](https://www.w3school.com.cn/cssref/pr_backface-visibility.asp) | 定义元素在不面对屏幕时是否可见。 | 3 |


## 过渡属性（[Transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions)）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [transition](https://www.w3school.com.cn/cssref/pr_transition.asp) | 简写属性，用于在一个属性中设置四个过渡属性。 | 3 |
| [transition-property](https://www.w3school.com.cn/cssref/pr_transition-property.asp) | 规定应用过渡的 CSS 属性的名称。 | 3 |
| [transition-duration](https://www.w3school.com.cn/cssref/pr_transition-duration.asp) | 定义过渡效果花费的时间。 | 3 |
| [transition-timing-function](https://www.w3school.com.cn/cssref/pr_transition-timing-function.asp) | 规定过渡效果的时间曲线。 | 3 |
| [transition-delay](https://www.w3school.com.cn/cssref/pr_transition-delay.asp) | 规定过渡效果何时开始。 | 3 |


## 多列属性（Multi-column）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [column-count](https://www.w3school.com.cn/cssref/pr_column-count.asp) | 规定元素应该被分隔的列数。 | 3 |
| [column-fill](https://www.w3school.com.cn/cssref/pr_column-fill.asp) | 规定如何填充列。 | 3 |
| [column-gap](https://www.w3school.com.cn/cssref/pr_column-gap.asp) | 规定列之间的间隔。 | 3 |
| [column-rule](https://www.w3school.com.cn/cssref/pr_column-rule.asp) | 设置所有 column-rule-* 属性的简写属性。 | 3 |
| [column-rule-color](https://www.w3school.com.cn/cssref/pr_column-rule-color.asp) | 规定列之间规则的颜色。 | 3 |
| [column-rule-style](https://www.w3school.com.cn/cssref/pr_column-rule-style.asp) | 规定列之间规则的样式。 | 3 |
| [column-rule-width](https://www.w3school.com.cn/cssref/pr_column-rule-width.asp) | 规定列之间规则的宽度。 | 3 |
| [column-span](https://www.w3school.com.cn/cssref/pr_column-span.asp) | 规定元素应该横跨的列数。 | 3 |
| [column-width](https://www.w3school.com.cn/cssref/pr_column-width.asp) | 规定列的宽度。 | 3 |
| [columns](https://www.w3school.com.cn/cssref/pr_columns.asp) | 规定设置 column-width 和 column-count 的简写属性。 | 3 |


## Paged Media 属性
| 属性 | 描述 | CSS |
| --- | --- | --- |
| fit | 示意如何对width和height属性均不是auto的被替换元素进行缩放。 | 3 |
| fit-position | 定义盒内对象的对齐方式。 | 3 |
| image-orientation | 规定用户代理应用于图像的顺时针方向旋转。 | 3 |
| page | 规定元素应该被显示的页面特定类型。 | 3 |
| size | 规定页面内容包含框的尺寸和方向。 | 3 |


## Content for Paged Media 属性
| 属性 | 描述 | CSS |
| --- | --- | --- |
| bookmark-label | 规定书签的标记。 | 3 |
| bookmark-level | 规定书签的级别。 | 3 |
| bookmark-target | 规定书签链接的目标。 | 3 |
| float-offset | 将元素放在 float 属性通常放置的位置的相反方向。 | 3 |
| hyphenate-after | 规定连字单词中连字符之后的最小字符数。 | 3 |
| hyphenate-before | 规定连字单词中连字符之前的最小字符数。 | 3 |
| hyphenate-character | 规定当发生断字时显示的字符串。 | 3 |
| hyphenate-lines | 指示元素中连续断字连线的最大数。 | 3 |
| hyphenate-resource | 规定帮助浏览器确定断字点的外部资源（逗号分隔的列表）。 | 3 |
| hyphens | 设置如何对单词进行拆分，以改善段落的布局。 | 3 |
| image-resolution | 规定图像的正确分辨率。 | 3 |
| marks | 向文档添加裁切标记或十字标记。 | 3 |
| string-set |  | 3 |


## 内容生成（Generated Content）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [content](https://www.w3school.com.cn/cssref/pr_gen_content.asp) | 与 :before 以及 :after 伪元素配合使用，来插入生成内容。 | 2 |
| [counter-increment](https://www.w3school.com.cn/cssref/pr_gen_counter-increment.asp) | 递增或递减一个或多个计数器。 | 2 |
| [counter-reset](https://www.w3school.com.cn/cssref/pr_gen_counter-reset.asp) | 创建或重置一个或多个计数器。 | 2 |
| [quotes](https://www.w3school.com.cn/cssref/pr_gen_quotes.asp) | 设置嵌套引用的引号类型。 | 2 |
| crop | 允许被替换元素仅仅是对象的矩形区域，而不是整个对象。 | 3 |
| move-to | 从流中删除元素，然后在文档中后面的点上重新插入。 | 3 |
| page-policy | 确定元素基于页面的 occurrence 应用于计数器还是字符串值。 | 3 |


## 打印属性（Print）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| orphans | 设置当元素内部发生分页时必须在页面底部保留的最少行数。 | 2 |
| [page-break-after](https://www.w3school.com.cn/cssref/pr_print_page-break-after.asp) | 设置元素后的分页行为。 | 2 |
| [page-break-before](https://www.w3school.com.cn/cssref/pr_print_page-break-before.asp) | 设置元素前的分页行为。 | 2 |
| [page-break-inside](https://www.w3school.com.cn/cssref/pr_print_page-break-inside.asp) | 设置元素内部的分页行为。 | 2 |
| widows | 设置当元素内部发生分页时必须在页面顶部保留的最少行数。 | 2 |


## Marquee
| 属性 | 描述 | CSS |
| --- | --- | --- |
| marquee-direction | 设置移动内容的方向。 | 3 |
| marquee-play-count | 设置内容移动多少次。 | 3 |
| marquee-speed | 设置内容滚动得多快。 | 3 |
| marquee-style | 设置移动内容的样式。 | 3 |


## 用户界面属性（User-interface）
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [appearance](https://www.w3school.com.cn/cssref/pr_appearance.asp) | 允许您将元素设置为标准用户界面元素的外观 | 3 |
| [box-sizing](https://www.w3school.com.cn/cssref/pr_box-sizing.asp) | 允许您以确切的方式定义适应某个区域的具体内容。 | 3 |
| [icon](https://www.w3school.com.cn/cssref/pr_icon.asp) | 为创作者提供使用图标化等价物来设置元素样式的能力。 | 3 |
| [nav-down](https://www.w3school.com.cn/cssref/pr_nav-down.asp) | 规定在使用 arrow-down 导航键时向何处导航。 | 3 |
| [nav-index](https://www.w3school.com.cn/cssref/pr_nav-index.asp) | 设置元素的 tab 键控制次序。 | 3 |
| [nav-left](https://www.w3school.com.cn/cssref/pr_nav-left.asp) | 规定在使用 arrow-left 导航键时向何处导航。 | 3 |
| [nav-right](https://www.w3school.com.cn/cssref/pr_nav-right.asp) | 规定在使用 arrow-right 导航键时向何处导航。 | 3 |
| [nav-up](https://www.w3school.com.cn/cssref/pr_nav-up.asp) | 规定在使用 arrow-up 导航键时向何处导航。 | 3 |
| [outline-offset](https://www.w3school.com.cn/cssref/pr_outline-offset.asp) | 对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。 | 3 |
| [resize](https://www.w3school.com.cn/cssref/pr_resize.asp) | 规定是否可由用户对元素的尺寸进行调整。 | 3 |


# [选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
| 选择器 | 例子 | 例子描述 |
| --- | --- | --- |
| [.class](https://www.w3school.com.cn/cssref/selector_class.asp) | .intro | 选择 class="intro" 的所有元素。 |
| [#id](https://www.w3school.com.cn/cssref/selector_id.asp) | #firstname | 选择 id="firstname" 的所有元素。 |
| [*](https://www.w3school.com.cn/cssref/selector_all.asp) | * | 选择所有元素。 |
| [element](https://www.w3school.com.cn/cssref/selector_element.asp) | p | 选择所有 `<p>`元素 |
| [element,element](https://www.w3school.com.cn/cssref/selector_element_comma.asp) | div,p | 选择所有 `<div>`元素和所有 `<p>`元素 |
| [elementelement](https://www.w3school.com.cn/cssref/selector_element_element.asp) | div p | 选择 `<div>`元素内部的所有 `<p>`元素。 |
| [element>element](https://www.w3school.com.cn/cssref/selector_element_gt.asp) | div>p | 选择父元素为 `<div>`元素的所有 `<p>`元素。 |
| [element+element](https://www.w3school.com.cn/cssref/selector_element_plus.asp) | div+p | 选择紧接在 `<div>`元素之后的所有 `<p>`元素。 |
| [[attribute]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | [target] | 选择带有 target 属性所有元素。 |
| [[attribute=value]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | [target=_blank] | 选择 target="_blank" 的所有元素。 |
| [[attribute~=value]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | [title~=flower] | 选择 title 属性包含单词 "flower" 的所有元素。 |
| [[attribute&#124;=value]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | [lang&#124;=en] | 选择 lang 属性值以 "en" 开头的所有元素。 |
| [:link](https://www.w3school.com.cn/cssref/selector_link.asp) | a:link | 选择所有未被访问的链接。 |
| [:visited](https://www.w3school.com.cn/cssref/selector_visited.asp) | a:visited | 选择所有已被访问的链接。 |
| [:active](https://www.w3school.com.cn/cssref/selector_active.asp) | a:active | 选择活动链接。 |
| [:hover](https://www.w3school.com.cn/cssref/selector_hover.asp) | a:hover | 选择鼠标指针位于其上的链接。 |
| [:focus](https://www.w3school.com.cn/cssref/selector_focus.asp) | input:focus | 选择获得焦点的 input 元素。 |
| [:first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp) | p:first-letter | 选择每个 `<p>`元素的首字母。 |
| [:first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp) | p:first-line | 选择每个 `<p>`元素的首行。 |
| [:first-child](https://www.w3school.com.cn/cssref/selector_first-child.asp) | p:first-child | 选择属于父元素的第一个子元素的每个 `<p>`元素。 |
| [:before](https://www.w3school.com.cn/cssref/selector_before.asp) | p:before | 在每个 `<p>`元素的内容之前插入内容。 |
| [:after](https://www.w3school.com.cn/cssref/selector_after.asp) | p:after | 在每个 `<p>`元素的内容之后插入内容。 |
| [:lang(language)](https://www.w3school.com.cn/cssref/selector_lang.asp) | p:lang(it) | 选择带有以 "it" 开头的 lang 属性值的每个 `<p>`元素。 |
| [element1~element2](https://www.w3school.com.cn/cssref/selector_gen_sibling.asp) | p~ul | 选择前面有 `<p>`元素的每个 `<ul>`元素。 |
| [[attribute^=value]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | a[src^="https"] | 选择其 src 属性值以 "https" 开头的每个 `<a>`元素。 |
| [[attribute$=value]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | a[src$=".pdf"] | 选择其 src 属性以 ".pdf" 结尾的所有 `<a>`元素。 |
| [[attribute*=value]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | a[src*="abc"] | 选择其 src 属性中包含 "abc" 子串的每个 `<a>`元素。 |
| [:first-of-type](https://www.w3school.com.cn/cssref/selector_first-of-type.asp) | p:first-of-type | 选择属于其父元素的首个 `<p>`元素的每个 `<p>`元素。 |
| [:last-of-type](https://www.w3school.com.cn/cssref/selector_last-of-type.asp) | p:last-of-type | 选择属于其父元素的最后 `<p>`元素的每个 `<p>`元素。 |
| [:only-of-type](https://www.w3school.com.cn/cssref/selector_only-of-type.asp) | p:only-of-type | 选择属于其父元素唯一的 `<p>`元素的每个 `<p>`元素。 |
| [:only-child](https://www.w3school.com.cn/cssref/selector_only-child.asp) | p:only-child | 选择属于其父元素的唯一子元素的每个 `<p>`元素。 |
| [:nth-child(n)](https://www.w3school.com.cn/cssref/selector_nth-child.asp) | p:nth-child(2) | 选择属于其父元素的第二个子元素的每个 `<p>`元素。 |
| [:nth-last-child(n)](https://www.w3school.com.cn/cssref/selector_nth-last-child.asp) | p:nth-last-child(2) | 同上，从最后一个子元素开始计数。 |
| [:nth-of-type(n)](https://www.w3school.com.cn/cssref/selector_nth-of-type.asp) | p:nth-of-type(2) | 选择属于其父元素第二个 `<p>`元素的每个 `<p>`元素。 |
| [:nth-last-of-type(n)](https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。 |
| [:last-child](https://www.w3school.com.cn/cssref/selector_last-child.asp) | p:last-child | 选择属于其父元素最后一个子元素每个 `<p>`元素。 |
| [:root](https://www.w3school.com.cn/cssref/selector_root.asp) | :root | 选择文档的根元素。 |
| [:empty](https://www.w3school.com.cn/cssref/selector_empty.asp) | p:empty | 选择没有子元素的每个 `<p>`元素（包括文本节点）。 |
| [:target](https://www.w3school.com.cn/cssref/selector_target.asp) | #news:target | 选择当前活动的 #news 元素。 |
| [:enabled](https://www.w3school.com.cn/cssref/selector_enabled.asp) | input:enabled | 选择每个启用的  元素。 |
| [:disabled](https://www.w3school.com.cn/cssref/selector_disabled.asp) | input:disabled | 选择每个禁用的  元素 |
| [:checked](https://www.w3school.com.cn/cssref/selector_checked.asp) | input:checked | 选择每个被选中的  元素。 |
| [:not(selector)](https://www.w3school.com.cn/cssref/selector_not.asp) | :not(p) | 选择非 `<p>`元素的每个元素。 |
| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp) | ::selection | 选择被用户选取的元素部分。 |
| [:out-of-range](https://www.runoob.com/cssref/sel-out-of-range.html) | :out-of-range | 匹配值在指定区间之外的input元素 |
| [:in-range](https://www.runoob.com/cssref/sel-in-range.html) | :in-range | 匹配值在指定区间之内的input元素 |
| [:read-write](https://www.runoob.com/cssref/sel-read-write.html) | :read-write | 用于匹配可读及可写的元素 |
| [:read-only](https://www.runoob.com/cssref/sel-read-only.html) | :read-only | 用于匹配设置 "readonly"（只读） 属性的元素 |
| [:optional](https://www.runoob.com/cssref/sel-optional.html) | :optional | 用于匹配可选的输入元素 |
| [:required](https://www.runoob.com/cssref/sel-required.html) | :required | 用于匹配设置了 "required" 属性的元素 |
| [:valid](https://www.runoob.com/cssref/sel-valid.html) | :valid | 用于匹配输入值为合法的元素 |
| [:invalid](https://www.runoob.com/cssref/sel-invalid.html) | :invalid | 用于匹配输入值为非法的元素 |


# 函数
| 函数 | 描述 |
| --- | --- |
| [attr()](https://www.runoob.com/cssref/func-attr.html) | 返回选择元素的属性值。 |
| [calc()](https://www.runoob.com/cssref/func-calc.html) | 允许计算 CSS 的属性值，比如动态计算长度值。 |
| [cubic-bezier()](https://www.runoob.com/cssref/func-cubic-bezier.html) | 定义了一个贝塞尔曲线(Cubic Bezier)。 |
| [hsl()](https://www.runoob.com/cssref/func-hsl.html) | 使用色相、饱和度、亮度来定义颜色。 |
| [hsla()](https://www.runoob.com/cssref/func-hsla.html) | 使用色相、饱和度、亮度、透明度来定义颜色。 |
| [linear-gradient()](https://www.runoob.com/cssref/func-linear-gradient.html) | 创建一个线性渐变的图像 |
| [radial-gradient()](https://www.runoob.com/cssref/func-radial-gradient.html) | 用径向渐变创建图像。 |
| [repeating-linear-gradient()](https://www.runoob.com/cssref/func-repeating-linear-gradient.html) | 用重复的线性渐变创建图像。 |
| [repeating-radial-gradient()](https://www.runoob.com/cssref/func-repeating-radial-gradient.html) | 类似 radial-gradient()，用重复的径向渐变创建图像。 |
| [rgb()](https://www.runoob.com/cssref/func-rgb-css.html) | 使用红(R)、绿(G)、蓝(B)三个颜色的叠加来生成各式各样的颜色。 |
| [rgba()](https://www.runoob.com/cssref/func-rgba.html) | 使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。 |
| [var()](https://www.runoob.com/cssref/func-var.html) | 用于插入自定义的属性值。 |


# 单位

## 相对长度
相对长度单位指定了一个长度相对于另一个长度的属性。对于不同的设备相对长度更适用。

| 单位 | 描述 |
| --- | --- |
| em | 相对于应用在当前元素的字体尺寸，一般浏览器字体大小默认为16px |
| ex | 依赖于英文字母小 x 的高度 |
| ch | 数字 0 的宽度 |
| rem | root em，相对于根元素字体大小；作用于根元素时，相对于其出初始字体大小。 |
| vw | viewpoint width，视窗宽度，1vw=视窗宽度的1% |
| vh | viewpoint height，视窗高度，1vh=视窗高度的1% |
| vmin | vw和vh中较小的那个。 |
| vmax | vw和vh中较大的那个。 |
| % | 百分比 |


## 绝对长度
绝对长度单位是一个固定的值，它反应一个真实的物理尺寸。绝对长度单位视输出介质而定，不依赖于环境（显示器、分辨率、操作系统等）。

| 单位 | 描述 |
| --- | --- |
| cm | 厘米 |
| mm | 毫米 |
| in | 英寸 (1in = 96px = 2.54cm) |
| px | 像素 (1px = 1/96 in) |
| pt | 磅（point），1pt = 1/12 * 1pc = 1/72 * 1in |
| pc | 十二点活字（pica），印刷的专用单位  <br />  1pc = 12pt = 1/6 in |


## 颜色
| 单位 | 样式 | 实例 |
| --- | --- | --- |
| 十六进制 | #RRGGBB | #ff0000 |
| RGB | rgb(红，绿，蓝) | rgb(0,0,255) rgb(0％，0％，100％) |
| RGBA | rgba(红，绿，蓝，alpha) | rgba(255,0,0,0.5) |
| HSL | hsl(色调，饱和度，明度) | hsl(120,65%,75%) |
| HSLA | hsla(色调，饱和度，亮度，α) | hsla(120,65%,75%,0.3) |


## 字体

- 衬线字体（Serif）- 在每个字母的边缘都有一个小的笔触。它们营造出一种形式感和优雅感。
- 无衬线字体（Sans-serif）- 字体线条简洁（没有小笔画）。它们营造出现代而简约的外观。
- 等宽字体（Monospace）- 这里所有字母都有相同的固定宽度。它们创造出机械式的外观。
- 草书字体（Cursive）- 模仿了人类的笔迹。
- 幻想字体（Fantasy）- 是装饰性/俏皮的字体。
| 通用字体族 | 字体名称实例 |
| --- | --- |
| Serif | Times New Roman  <br />  Georgia  <br />  Garamond |
| Sans-serif | Arial  <br />  Verdana  <br />  Helvetica |
| Monospace | Courier New  <br />  Lucida Console  <br />  Monaco |
| Cursive | Brush Script MT  <br />  Lucida Handwriting |
| Fantasy | Copperplate  <br />  Papyrus |


## [CSS命名规范-BEM](https://www.bemcss.com/#)
Block（模块）、Element（元素）、Modifier（修饰符）  <br />  命名规矩：block-name__element-name--modifier-name


# ——  Sass (Syntactically Awesome Stylesheets)   ——
最初由 Hampton Catlin 设计并由 Natalie Weizenbaum 开发的层叠样式表语言  <br />  是一个 CSS 预处理器，CSS 扩展语言，帮助减少 CSS 重复的代码，节省开发时间。  <br />  Sass 文件后缀为 .scss。

**NPM 安装**
```css
npm install -g sass
```
**test.scss**
```css
/* 定义变量与值 */
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;
/* 使用变量 */
body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}
```
将 .scss 文件转化的 css 代码
```css
命令行输入 sass test.scss [test.css]
```
变量  <br />  `$variablename: value;`  <br />  用` !global `关键词来设置变量是全局的  <br />  **嵌套**  <br />  标签
```css
//sass
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
}
//css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
```
属性
```css
//sass
font: {
  family: Helvetica, sans-serif;
  size: 18px;
  weight: bold;
}
//css
font-family: Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;
```
指令

- _@_import  filename; 
- _@_mixin  ：定义一个可以在整个样式表中重复使用的样式。 
- _@_include  ：将混入（mixin）引入到文档中。 
- _@_extend  ：样式从另一选择器继承 




### [bootstrap](https://github.com/twbs/bootstrap)
