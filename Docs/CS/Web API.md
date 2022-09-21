
# —— [Web API](https://developer.mozilla.org/zh-CN/docs/Web/API) ——
**网页中嵌入 JavaScript 代码**

- <script>元素直接嵌入代码
```javascript
<script>
  console.log(new Date().toLocaleTimeString());
</script>
```

- <script>标签加载外部脚本
```javascript
<script charset="utf-8" src="https://www.example.com/script.js"></script>
```

- 事件属性
```javascript
<button id="myBtn" onclick="console.log(this.id)">点击</button>
```

- URL 协议
```javascript
<a href="javascript: void new Date().toLocaleTimeString();">点击</a>
```

**浏览器**

**渲染引擎**：将网页代码渲染为用户视觉可以感知的平面文档。

-  Firefox：Gecko 引擎 
-  Safari：WebKit 引擎 
-  Chrome：Blink 引擎 

四个阶段

-  解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。 
-  对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。 
-  布局：计算出渲染树的布局（layout）。 
-  绘制：将渲染树绘制到屏幕。 

**JavaScript 解释器**

-  读取代码，进行词法分析（Lexical analysis），将代码分解成词元（token）。 
-  对词元进行语法分析（parsing），将代码整理成“语法树”（syntax tree）。 
-  使用“翻译器”（translator），将代码转为字节码（bytecode）。 
-  即时编译（Just In Time compiler，JIT），即字节码只在运行时编译，并且把编译结果缓存（inline cache）。 

JavaScript 虚拟机

- [Nitro/JavaScript Core](https://en.wikipedia.org/wiki/WebKit#JavaScriptCore) (Safari)
- [Carakan](https://dev.opera.com/articles/view/labs-carakan/) (Opera)
- [SpiderMonkey](https://developer.mozilla.org/en-US/docs/SpiderMonkey) (Firefox)
- [V8](https://en.wikipedia.org/wiki/Chrome_V8) (Chrome, Chromium)

<a name="e0fe7ea9"></a>
# —— HTML DOM ——

**Document Object Model（文档对象模型）：**一项 W3C (World Wide Web Consortium) 标准。  <br />  **              即**如何获取、修改、添加或删除 HTML 元素的标准。

分为 3 个不同的部分：

-  Core DOM - 所有文档类型的标准模型 
-  XML DOM - XML 文档的标准模型 
-  HTML DOM - HTML 文档的标准模型 

**HTML DOM 树**

![](https://www.w3school.com.cn/i/ct_htmltree.gif#crop=0&crop=0&crop=1&crop=1&id=LzjhR&originHeight=266&originWidth=486&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

<a name="73a11b68"></a>
# [Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

**Type**

-  Document：文档树的顶层节点 
-  DocumentType：doctype标签（比如） 
-  Element：各种HTML标签（如、等） 
-  Attr：元素的属性（如class="right"） 
-  Text：标签之间或标签包含的文本 
-  Comment：注释 
-  DocumentFragment：文档的片段 

**property**

- [Node.nodeType](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType)
| Name | Value |
| --- | --- |
| ELEMENT_NODE | 1 |
| ATTRIBUTE_NODE | 2 |
| TEXT_NODE | 3 |
| CDATA_SECTION_NODE | 4 |
| ENTITY_REFERENCE_NODE | 5 |
| ENTITY_NODE | 6 |
| PROCESSING_INSTRUCTION_NODE | 7 |
| COMMENT_NODE | 8 |
| DOCUMENT_NODE | 9 |
| DOCUMENT_TYPE_NODE | 10 |
| DOCUMENT_FRAGMENT_NODE | 11 |
| NOTATION_NODE | 12 |


-  Node.nodeName 
-  Node.nodeValue 
-  Node.textContent 
-  Node.baseURI 
-  Node.ownerDocument 
-  Node.nextSibling 
-  Node.previousSibling 
-  Node.parentNode 
-  Node.parentElement 
-  Node.firstChild，Node.lastChild 
-  Node.childNodes 
-  Node.isConnected 

**methods**

-  Node.appendChild() 
-  Node.hasChildNodes() 
-  Node.cloneNode() 
-  Node.insertBefore() 
-  Node.removeChild() 
-  Node.replaceChild() 
-  Node.contains() 
-  Node.isEqualNode()，Node.isSameNode() 
-  Node.normalize() 
-  Node.getRootNode() 

<a name="15a9f566"></a>
# [NodeList](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList)

-  NodeList.length 
-  NodeList.forEach() 
-  NodeList.item()	索引的节点，如果索引越界，则返回null 
-  NodeList.keys()，NodeList.values()，NodeList.entries() 

<a name="d30551e2"></a>
# [HTMLCollection](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)
节点对象的集合，只能包含元素节点（element）

-  HTMLCollection.length 
-  HTMLCollection.item() 
-  HTMLCollection.namedItem() 

<a name="c9b6bcc8"></a>
# [ParentNode](https://developer.mozilla.org/zh-CN/docs/Web/API/ParentNode)

- ParentNode.children
- ParentNode.firstElementChild
- ParentNode.lastElementChild
- ParentNode.childElementCount
- ParentNode.append()，ParentNode.prepend()

<a name="411e165f"></a>
# [ChildNode](https://developer.mozilla.org/zh-CN/docs/Web/API/ChildNode)

- ChildNode.remove()
- ChildNode.before()，ChildNode.after()
- ChildNode.replaceWith()

<a name="b570334e"></a>
# [Document ](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

Property

- document.defaultView	所属的window对象
- document.doctype	
- document.documentElement	根元素节点（root）
- document.body，document.head
- document.scrollingElement
- document.activeElement	当前焦点（focus）的 DOM 元素
- document.fullscreenElement	全屏状态展示的 DOM 元素

- document.links	所有设定了href属性的<a>及<area>节点。
- document.forms	所有<form>表单节点
- document.images	所有<img>图片节点
- document.embeds，document.plugins	所有<embed>节点
- document.scripts	所有<script>节点。
- document.styleSheets	内嵌或引入的样式表集合

- document.documentURI，document.URL
- document.domain
- document.location
- document.lastModified
- document.title
- document.characterSet
- document.referrer	文档的访问者来自哪里
- document.dir	文字方向
- document.compatMode	浏览器处理文档的模式，BackCompat（向后兼容模式）和CSS1Compat（严格模式）

- document.hidden
- document.visibilityState
   - visible：页面(部分)可见。
   - hidden：页面不可见，可能窗口最小化，或浏览器切换到了另一个 Tab。
   - prerender：渲染状态
   - unloaded：页面从内存里面卸载了。
- document.readyState
   - loading：加载 HTML 代码阶段（尚未完成解析）
   - interactive：加载外部资源阶段
   - complete：加载完成
- document.cookie
- document.designMode	控制当前文档是否可编辑
- document.currentScript
- document.implementation

**Methods**

- document.open()，document.close()	清除当前文档所有内容，使得文档处于可写状态
- document.write()，document.writeln()
- **document.querySelector()，document.querySelectorAll()**
- **document.getElementsByTagName()**
- **document.getElementsByClassName()	**
- **document.getElementsByName()**
- **document.getElementById()**
- document.elementFromPoint()，document.elementsFromPoint()	页面指定坐标位置最上层的元素节点
- document.createElement()
- document.createTextNode()
- document.createAttribute()
- document.createComment()
- document.createDocumentFragment()
- document.createEvent()
- document.addEventListener()，document.removeEventListener()，document.dispatchEvent()
- document.hasFocus()
- document.adoptNode()，document.importNode()
- document.createNodeIterator()
- document.createTreeWalker()
- document.execCommand()，document.queryCommandSupported()，document.queryCommandEnabled()
- document.getSelection()

<a name="c80ac6cd"></a>
# [Element](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)

**Property**

- Element.id
- Element.tagName
- Element.dir
- Element.accessKey
- Element.draggable
- Element.lang
- Element.tabIndex
- Element.title

- Element.hidden
- Element.contentEditable，Element.isContentEditable
- Element.attributes
- Element.className，Element.classList
   - classList
      - add()：增加一个 class。
      - remove()：移除一个 class。
      - contains()：检查当前元素是否包含某个 class。
      - toggle()：将某个 class 移入或移出当前元素。
      - item()：返回指定索引位置的 class。
      - toString()：将 class 的列表转为字符串。

- Element.dataset
- Element.innerHTML
- Element.outerHTML
- Element.clientHeight，Element.clientWidth	当前视口的
- Element.clientLeft，Element.clientTop
- Element.scrollHeight，Element.scrollWidth	总的（单位像素），包括溢出容器、当前不可见的部分
- Element.scrollLeft，Element.scrollTop
- Element.offsetParent	最靠近当前元素的、并且 CSS 的position属性不等于static的上层元素
- Element.offsetHeight，Element.offsetWidth
- Element.offsetLeft，Element.offsetTop
- Element.style
- Element.children，Element.childElementCount
- Element.firstElementChild，Element.lastElementChild
- Element.nextElementSibling，Element.previousElementSibling

**Methods**

- getAttribute()：读取某个属性的值
- getAttributeNames()：返回当前元素的所有属性名
- setAttribute()：写入属性值
- hasAttribute()：某个属性是否存在
- hasAttributes()：当前元素是否有属性
- removeAttribute()：删除属性

- Element.querySelector()
- Element.querySelectorAll()
- Element.getElementsByClassName()
- Element.getElementsByTagName()
- Element.closest()	匹配该选择器的、最接近当前节点的一个祖先节点（包括当前节点本身）
- Element.matches()	是否匹配给定的 CSS 选择器

- Element.addEventListener()：添加事件的回调函数
- Element.removeEventListener()：移除事件监听函数
- Element.dispatchEvent()：触发事件

- Element.scrollIntoView()
- Element.getBoundingClientRect()	元素节点的大小、位置等信息
   - x：元素左上角相对于视口的横坐标
   - y：元素左上角相对于视口的纵坐标
   - height：元素高度
   - width：元素宽度
   - left：元素左上角相对于视口的横坐标，与x属性相等
   - right：元素右边界相对于视口的横坐标（等于x + width）
   - top：元素顶部相对于视口的纵坐标，与y属性相等
   - bottom：元素底部相对于视口的纵坐标（等于y + height）
- Element.getClientRects()
- Element.insertAdjacentElement()
   - beforebegin：当前元素之前
   - afterbegin：当前元素内部的第一个子节点前面
   - beforeend：当前元素内部的最后一个子节点后面
   - afterend：当前元素之后
- Element.insertAdjacentHTML()，Element.insertAdjacentText()
- Element.remove()
- Element.focus()，Element.blur()
- Element.click()

**事件监听器**  <br />  **element.addEventListener(event, function [, useCapture = fasle]);**

- false——冒泡传播：最内侧元素的事件会首先被处理，然后是更外侧的
- true——捕获传播：最外侧元素的事件会首先被处理，然后是更内侧的

<a name="39ebacb9"></a>
# [Attr](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr)ibute

**propery**

-  name 
-  specified 
-  value 

有些 HTML 属性名是 JavaScript 的保留字，转为 JavaScript 属性时，必须改名

-  for属性改为htmlFor 
-  class属性改为className 

<a name="a162991c"></a>
# [Text](https://developer.mozilla.org/zh-CN/docs/Web/API/Text)
文本节点（Text）代表元素节点（Element）和属性节点（Attribute）的文本内容。

属性

-  data 
-  wholeText 
-  length 
-  nextElementSibling，previousElementSibling 

方法

-  appendData()，deleteData()，insertData()，replaceData()，subStringData() 
-  remove() 
-  splitText() 

<a name="eb99c89e"></a>
# [DocumentFragment](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment)

文档的片段，用于构建一个 DOM 结构，然后插入当前文档。它没有父节点，但是可以插入任意数量的子节点。它不属于当前文档，比直接操作 DOM 树快得多。

```javascript
// 反转一个指定节点的所有子节点的顺序
function reverse(n) {
  var f = document.createDocumentFragment();
  while(n.lastChild) f.appendChild(n.lastChild);
  n.appendChild(f);
}
```

<a name="f4b803ce"></a>
# [CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)

连词号需要变成骆驼拼写法

-  CSSStyleDeclaration.cssText 
-  CSSStyleDeclaration.length 
-  CSSStyleDeclaration.parentRule 
-  CSSStyleDeclaration.getPropertyPriority()	有没有设置important优先级 
-  CSSStyleDeclaration.getPropertyValue() 
-  CSSStyleDeclaration.item() 
-  CSSStyleDeclaration.removeProperty() 
-  CSSStyleDeclaration.setProperty() 

CSS

-  CSS.escape()	转义 CSS 选择器里面的特殊字符 
-  CSS.supports() 

<a name="cafc7eab"></a>
# [Mutation Observer](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)

监视 DOM 变动

构造
```javascript
var observer = new MutationObserver(function (mutations, observer) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
  });
});
```

方法
```javascript
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

mutationObserver.disconnect()	停止观察
mutationObserver.takeRecords()	清除变动记录
```

**MutationRecord**  <br />  DOM 每次发生变化，就会生成一条变动记录（MutationRecord 实例）

-  type：观察的变动类型（attributes、characterData或者childList）。 
-  target：发生变动的DOM节点。 
-  addedNodes：新增的DOM节点。 
-  removedNodes：删除的DOM节点。 
-  previousSibling：前一个同级节点，如果没有则返回null。 
-  nextSibling：下一个同级节点，如果没有则返回null。 
-  attributeName：发生变动的属性。如果设置了attributeFilter，则只返回预先指定的属性。 
-  oldValue：变动前的值。这个属性只对attribute和characterData变动有效，如果发生childList变动，则返回null。 

```javascript
// 使用MutationObserver对象封装一个监听 DOM 生成的函数
(function(win){
  'use strict';

  var listeners = [];
  var doc = win.document;
  var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
  var observer;

  function ready(selector, fn){
    // 储存选择器和回调函数
    listeners.push({
      selector: selector,
      fn: fn
    });
    if(!observer){
      // 监听document变化
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      });
    }
    // 检查该节点是否已经在DOM中
    check();
  }

  function check(){
  // 检查是否匹配已储存的节点
    for(var i = 0; i < listeners.length; i++){
      var listener = listeners[i];
      // 检查指定节点是否有匹配
      var elements = doc.querySelectorAll(listener.selector);
      for(var j = 0; j < elements.length; j++){
        var element = elements[j];
        // 确保回调函数只会对该元素调用一次
        if(!element.ready){
          element.ready = true;
          // 对该节点调用回调函数
          listener.fn.call(element, element);
        }
      }
    }
  }

  // 对外暴露ready
  win.ready = ready;

})(this);

// 使用方法
ready('.foo', function(element){
  // ...
});
```

<a name="14d9b7d8"></a>
# [EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)

EventTarget.addEventListener(type, listener[, useCapture])  <br />  EventTarget.removeEventListener(type, listener[, useCapture])  <br />  EventTarget.dispatchEvent(event)

- type：事件名称
- listener：监听函数。
- useCapture
   - capture：布尔值，表示该事件是否在捕获阶段触发监听函数。
   - once：布尔值，表示监听函数是否只触发一次，然后就自动移除。
   - passive：布尔值，表示监听函数不会调用事件的preventDefault方法。

**事件的传播**  <br />  一个事件发生后，会在子元素和父元素之间传播（propagation）。

- 捕获阶段（capture phase）：从window对象传导到目标节点（上层传到底层）
- 目标阶段（target phase）：在目标节点上触发
- 冒泡阶段（bubbling phase）：从目标节点传导回window对象（从底层传回上层）

<a name="4ab832ec"></a>
# [Event](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)

**event = new Event(type, options);**
```javascript
function dispatchInputEvent(account) {
    let inputEvent = new Event('input', {
        bubbles: true,
        cancelable: true
    });
    for (let element of Object.values(account)) {
        element.dispatchEvent(inputEvent);
    }
}

let username = document.getElementById('username');
username.value = 'user';
let password = document.getElementById('password');
password.value = '******';
dispatchInputEvent({ username, password });
document.querySelector('.login').click();
console.log('login completely');
```

属性

- [Event.bubbles](https://wangdoc.com/javascript/events/event.html#eventbubbles%EF%BC%8Ceventeventphase)	是否会冒泡
- [Event.eventPhase](https://wangdoc.com/javascript/events/event.html#eventbubbles%EF%BC%8Ceventeventphase)
   - 0，事件目前没有发生。
   - 1，捕获阶段
   - 2，目标阶段
   - 3，冒泡阶段
- [Event.cancelable，Event.cancelBubble，event.defaultPrevented](https://wangdoc.com/javascript/events/event.html#eventcancelable%EF%BC%8Ceventcancelbubble%EF%BC%8Ceventdefaultprevented)
- [Event.currentTarget，Event.target](https://wangdoc.com/javascript/events/event.html#eventcurrenttarget%EF%BC%8Ceventtarget)
- [Event.type](https://wangdoc.com/javascript/events/event.html#eventtype)
- [Event.timeStamp](https://wangdoc.com/javascript/events/event.html#eventtimestamp)
- [Event.isTrusted](https://wangdoc.com/javascript/events/event.html#eventistrusted)
- [Event.detail](https://wangdoc.com/javascript/events/event.html#eventdetail)

方法

- [Event.preventDefault()](https://wangdoc.com/javascript/events/event.html#eventpreventdefault)	取消浏览器对当前事件的默认行为
- [Event.stopPropagation()](https://wangdoc.com/javascript/events/event.html#eventstoppropagation)	阻止事件在 DOM 中继续传播,不包括在当前节点上其他的事件监听函数。
- [Event.stopImmediatePropagation()](https://wangdoc.com/javascript/events/event.html#eventstopimmediatepropagation)	阻止同一个事件的其他监听函数被调用
- [Event.composedPath()](https://wangdoc.com/javascript/events/event.html#eventcomposedpath)	事件的最底层节点和依次冒泡经过的所有上层节点

<a name="cee24e66"></a>
## [MouseEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)

Type

-  click：按下鼠标（通常是按下主按钮）时触发。 
-  dblclick：在同一个元素上双击鼠标时触发。 
-  mousedown：按下鼠标键时触发。 
-  mouseup：释放按下的鼠标键时触发。 
-  mousemove：当鼠标在一个节点内部移动时触发。 
-  mouseenter：鼠标进入一个节点时触发，进入子节点不会触发这个事件 
-  mouseover：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件 
-  mouseout：鼠标离开一个节点时触发，离开父节点也会触发这个事件 
-  mouseleave：鼠标离开一个节点时触发，离开父节点不会触发这个事件 
-  contextmenu：按下鼠标右键时（上下文菜单出现前）触发 
-  wheel：滚动鼠标的滚轮时触发 

Property

-  screenX：数值，鼠标相对于屏幕的水平位置（单位像素），默认值为0，设置该属性不会移动鼠标。 
-  screenY：数值，鼠标相对于屏幕的垂直位置（单位像素） 
-  clientX：数值，鼠标相对于程序窗口的水平位置（单位像素），默认值为0，设置该属性不会移动鼠标。 
-  clientY：数值，鼠标相对于程序窗口的垂直位置（单位像素）。 
-  ctrlKey：布尔值，是否同时按下了 Ctrl 键，默认值为false。 
-  shiftKey：布尔值，是否同时按下了 Shift 键，默认值为false。 
-  altKey：布尔值，是否同时按下 Alt 键，默认值为false。 
-  metaKey：布尔值，是否同时按下 Meta 键，默认值为false。 
-  button：数值，表示按下了哪一个鼠标按键，默认值为0，表示按下主键（通常是鼠标的左键）或者当前事件没有定义这个属性；1表示按下辅助键（通常是鼠标的中间键），2表示按下次要键（通常是鼠标的右键）。 
-  buttons：数值，表示按下了鼠标的哪些键，是一个三个比特位的二进制值，默认为0（没有按下任何键）。1（二进制001）表示按下主键（通常是左键），2（二进制010）表示按下次要键（通常是右键），4（二进制100）表示按下辅助键（通常是中间键） 
-  relatedTarget：节点对象，表示事件的相关节点，默认为null。mouseenter和mouseover事件时，表示鼠标刚刚离开的那个元素节点；mouseout和mouseleave事件时，表示鼠标正在进入的那个元素节点。 
-  [MouseEvent.offsetX，MouseEvent.offsetY](https://wangdoc.com/javascript/events/mouse.html#mouseeventoffsetx%EF%BC%8Cmouseeventoffsety)	鼠标位置与目标节点上/左侧的padding边缘的水平距离
- [MouseEvent.pageX，MouseEvent.pageY](https://wangdoc.com/javascript/events/mouse.html#mouseeventpagex%EF%BC%8Cmouseeventpagey)	鼠标位置与文档左/上侧边缘的距离（单位像素）
-  MouseEvent.getModifierState()		有没有按下特定的功能键 

**WheelEvent**

new WheelEvent('wheel', options)

-  WheelEvent.deltaX：数值，表示滚轮的水平滚动量。 
-  WheelEvent.deltaY：数值，表示滚轮的垂直滚动量。 
-  WheelEvent.deltaZ：数值，表示滚轮的 Z 轴滚动量。 
-  WheelEvent.deltaMode：数值，表示上面三个属性的单位，0是像素，1是行，2是页。 

<a name="743d2904"></a>
## [KeyboardEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent)

Type

-  keydown：按下键盘时触发。 
-  keypress：按下有值的键时触发，即按下 Ctrl、Alt、Shift、Meta 这样无值的键，这个事件不会触发。 
-  keyup：松开键盘时触发该事件。 

Property

-  key：字符串，当前按下的键，默认为空字符串。 
-  code：字符串，表示当前按下的键的字符串形式，默认为空字符串。 
-  location：整数，当前按下的键的位置，默认为0。 
-  ctrlKey：布尔值，是否按下 Ctrl 键，默认为false。 
-  shiftKey：布尔值，是否按下 Shift 键，默认为false。 
-  altKey：布尔值，是否按下 Alt 键，默认为false。 
-  metaKey：布尔值，是否按下 Meta 键，默认为false。 
-  repeat：布尔值，是否重复按键，默认为false 

KeyboardEvent.getModifierState()	表示是否按下或激活指定的功能键

<a name="30d0aa87"></a>
## [ProgressEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/ProgressEvent)

描述资源加载的进度，主要由 AJAX 请求、<img>、<audio>、<video>、<style>、<link>等外部资源的加载触发  <br />  Type

-  abort：外部资源中止加载时（比如用户取消）触发。 
-  error：由于错误导致外部资源无法加载时触发。 
-  load：外部资源加载成功时触发。 
-  loadstart：外部资源开始加载时触发。 
-  loadend：外部资源停止加载时触发，发生顺序排在error、abort、load等事件的后面。 
-  progress：外部资源加载过程中不断触发。 
-  timeout：加载超时时触发。 

Property

-  lengthComputable：布尔值，表示加载的总量是否可以计算，默认是false。 
-  loaded：整数，表示已经加载的量，默认是0。 
-  total：整数，表示需要加载的总量，默认是0。 

<a name="61fc36cf"></a>
## [InputEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/InputEvent)

Type

- input事件：<input>、<select>、<textarea>的值发生变化时触发。
- select事件：在<input>、<textarea>里面选中文本时触发。
- change事件：<input>、<select>、<textarea>的值发生变化时触发。
- invalid 事件：表单元素的值不满足校验条件触发
- reset事件：表单重置（所有表单成员变回默认值）时触发
- submit事件：表单数据向服务器提交时触发

Property

- inputType：字符串，表示发生变更的类型
   - 手动插入文本：insertText
   - 粘贴插入文本：insertFromPaste
   - 向后删除：deleteContentBackward
   - 向前删除：deleteContentForward
- data：字符串，表示插入的字符串
- dataTransfer：返回一个 DataTransfer 对象实例，该属性通常只在输入框接受富文本输入时有效。

<a name="03ef30b2"></a>
## [TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent)

Touch：一个触摸点

-  identifier：必需，整数，表示触摸点的唯一 ID。 
-  target：必需，元素节点，表示触摸点开始时所在的网页元素。 
-  clientX：数值，表示触摸点相对于浏览器窗口左上角的水平距离，默认为0。 
-  clientY：数值，表示触摸点相对于浏览器窗口左上角的垂直距离，默认为0。 
-  screenX：数值，表示触摸点相对于屏幕左上角的水平距离，默认为0。 
-  screenY：数值，表示触摸点相对于屏幕左上角的垂直距离，默认为0。 
-  pageX：数值，表示触摸点相对于网页左上角的水平位置（即包括页面的滚动距离），默认为0。 
-  pageY：数值，表示触摸点相对于网页左上角的垂直位置（即包括页面的滚动距离），默认为0。 
-  radiusX：数值，表示触摸点周围受到影响的椭圆范围的 X 轴半径，默认为0。 
-  radiusY：可选：数值，表示触摸点周围受到影响的椭圆范围的 Y 轴半径，默认为0。 
-  rotationAngle：数值，表示触摸区域的椭圆的旋转角度，单位为度数，在0到90度之间，默认值为0。 
-  force：数值，范围在0到1之间，表示触摸压力。0代表没有压力，1代表硬件所能识别的最大压力，默认为0。 

TouchList：多个触摸点的集合  <br />  TouchEvent：触摸引发的事件实例

Type

-  touchstart：用户开始触摸时触发，它的target属性返回发生触摸的元素节点。 
-  touchend：用户不再接触触摸屏时（或者移出屏幕边缘时）触发， 
-  touchmove：用户移动触摸点时触发， 
-  touchcancel：触摸点取消时触发 

Property

-  touches：TouchList实例，代表所有的当前处于活跃状态的触摸点，默认值[]。 
-  targetTouches：TouchList实例，代表所有处在触摸的目标元素节点内部、且仍然处于活动状态的触摸点，默认值[]。 
-  changedTouches：TouchList实例，代表本次触摸事件的相关触摸点，默认值是一个空数组[]。 
-  ctrlKey：布尔值，表示 Ctrl 键是否同时按下，默认值为false。 
-  shiftKey：布尔值，表示 Shift 键是否同时按下，默认值为false。 
-  altKey：布尔值，表示 Alt 键是否同时按下，默认值为false。 
-  metaKey：布尔值，表示 Meta 键（或 Windows 键）是否同时按下，默认值为false。 

<a name="a175f756"></a>
## [DragEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent)

**Type**

- drag：拖拉过程中，在被拖拉的节点上持续触发（相隔几百毫秒）。
- dragstart：用户开始拖拉时，在被拖拉的节点上触发
- dragend：拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发
- dragenter：拖拉进入当前节点时，在当前节点上触发一次，该事件的target属性是当前节点。
- dragover：拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒）
- dragleave：拖拉操作离开当前节点范围时，在当前节点上触发
- drop：被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发

Property

- DataTransfer.dropEffect	设置放下（drop）被拖拉节点时的效果，会影响到拖拉经过相关区域时鼠标的形状
   - copy：复制被拖拉的节点
   - move：移动被拖拉的节点
   - link：创建指向被拖拉的节点的链接
   - none：无法放下被拖拉的节点
- DataTransfer.effectAllowed	本次拖拉中允许的效果
   - copy：复制被拖拉的节点
   - move：移动被拖拉的节点
   - link：创建指向被拖拉节点的链接
   - copyLink：允许copy或link
   - copyMove：允许copy或move
   - linkMove：允许link或move
   - all：允许所有效果
   - none：无法放下被拖拉的节点
   - uninitialized：默认值，等同于all
- DataTransfer.files
- DataTransfer.types	拖拉的数据格式（通常是 MIME 值）
- DataTransfer.items	返回DataTransferItemList 

Method

- [DataTransfer.setData()](https://wangdoc.com/javascript/events/drag.html#datatransfersetdata)
- [DataTransfer.getData()](https://wangdoc.com/javascript/events/drag.html#datatransfergetdata)
- [DataTransfer.clearData()](https://wangdoc.com/javascript/events/drag.html#datatransfercleardata)
- [DataTransfer.setDragImage()](https://wangdoc.com/javascript/events/drag.html#datatransfersetdragimage)

<a name="7461993e"></a>
## 其他常见事件

- [资源事件](https://wangdoc.com/javascript/events/common.html#%E8%B5%84%E6%BA%90%E4%BA%8B%E4%BB%B6)
   - [beforeunload 事件](https://wangdoc.com/javascript/events/common.html#beforeunload-%E4%BA%8B%E4%BB%B6)
   - [unload 事件](https://wangdoc.com/javascript/events/common.html#unload-%E4%BA%8B%E4%BB%B6)
   - [load 事件，error 事件](https://wangdoc.com/javascript/events/common.html#load-%E4%BA%8B%E4%BB%B6%EF%BC%8Cerror-%E4%BA%8B%E4%BB%B6)
- [session 历史事件](https://wangdoc.com/javascript/events/common.html#session-%E5%8E%86%E5%8F%B2%E4%BA%8B%E4%BB%B6)
   - [pageshow 事件，pagehide 事件](https://wangdoc.com/javascript/events/common.html#pageshow-%E4%BA%8B%E4%BB%B6%EF%BC%8Cpagehide-%E4%BA%8B%E4%BB%B6)
   - [popstate 事件](https://wangdoc.com/javascript/events/common.html#popstate-%E4%BA%8B%E4%BB%B6)
   - [hashchange 事件](https://wangdoc.com/javascript/events/common.html#hashchange-%E4%BA%8B%E4%BB%B6)
- [网页状态事件](https://wangdoc.com/javascript/events/common.html#%E7%BD%91%E9%A1%B5%E7%8A%B6%E6%80%81%E4%BA%8B%E4%BB%B6)
   - [DOMContentLoaded 事件](https://wangdoc.com/javascript/events/common.html#domcontentloaded-%E4%BA%8B%E4%BB%B6)
   - [readystatechange 事件](https://wangdoc.com/javascript/events/common.html#readystatechange-%E4%BA%8B%E4%BB%B6)
- [窗口事件](https://wangdoc.com/javascript/events/common.html#%E7%AA%97%E5%8F%A3%E4%BA%8B%E4%BB%B6)
   - [scroll 事件](https://wangdoc.com/javascript/events/common.html#scroll-%E4%BA%8B%E4%BB%B6)
   - [resize 事件](https://wangdoc.com/javascript/events/common.html#resize-%E4%BA%8B%E4%BB%B6)
   - [fullscreenchange 事件，fullscreenerror 事件](https://wangdoc.com/javascript/events/common.html#fullscreenchange-%E4%BA%8B%E4%BB%B6%EF%BC%8Cfullscreenerror-%E4%BA%8B%E4%BB%B6)
- [剪贴板事件](https://wangdoc.com/javascript/events/common.html#%E5%89%AA%E8%B4%B4%E6%9D%BF%E4%BA%8B%E4%BB%B6)
- [焦点事件](https://wangdoc.com/javascript/events/common.html#%E7%84%A6%E7%82%B9%E4%BA%8B%E4%BB%B6)
- [CustomEvent 接口](https://wangdoc.com/javascript/events/common.html#customevent-%E6%8E%A5%E5%8F%A3)

**事件句柄　(Event Handlers)**

| 属性 | 事件发生时 | 属性 | 事件发生时 |
| --- | --- | --- | --- |
| [onabort](https://www.w3school.com.cn/jsref/event_onabort.asp) | 图像的加载被中断。 | [onmousedown](https://www.w3school.com.cn/jsref/event_onmousedown.asp) | 鼠标按钮被按下。 |
| [onblur](https://www.w3school.com.cn/jsref/event_onblur.asp) | 元素失去焦点。 | [onmousemove](https://www.w3school.com.cn/jsref/event_onmousemove.asp) | 鼠标被移动。 |
| [onchange](https://www.w3school.com.cn/jsref/event_onchange.asp) | 域的内容被改变。 | [onmouseout](https://www.w3school.com.cn/jsref/event_onmouseout.asp) | 鼠标从某元素移开。 |
| [onclick](https://www.w3school.com.cn/jsref/event_onclick.asp) | 当用户点击某个对象时调用的事件句柄。 | [onmouseover](https://www.w3school.com.cn/jsref/event_onmouseover.asp) | 鼠标移到某元素之上。 |
| [ondblclick](https://www.w3school.com.cn/jsref/event_ondblclick.asp) | 当用户双击某个对象时调用的事件句柄。 | [onmouseup](https://www.w3school.com.cn/jsref/event_onmouseup.asp) | 鼠标按键被松开。 |
| [onerror](https://www.w3school.com.cn/jsref/event_onerror.asp) | 在加载文档或图像时发生错误。 | [onreset](https://www.w3school.com.cn/jsref/event_onreset.asp) | 重置按钮被点击。 |
| [onfocus](https://www.w3school.com.cn/jsref/event_onfocus.asp) | 元素获得焦点。 | [onresize](https://www.w3school.com.cn/jsref/event_onresize.asp) | 窗口或框架被重新调整大小。 |
| [onkeydown](https://www.w3school.com.cn/jsref/event_onkeydown.asp) | 某个键盘按键被按下。 | [onselect](https://www.w3school.com.cn/jsref/event_onselect.asp) | 文本被选中。 |
| [onkeypress](https://www.w3school.com.cn/jsref/event_onkeypress.asp) | 某个键盘按键被按下并松开。 | [onsubmit](https://www.w3school.com.cn/jsref/event_onsubmit.asp) | 确认按钮被点击。 |
| [onkeyup](https://www.w3school.com.cn/jsref/event_onkeyup.asp) | 某个键盘按键被松开。 | [onunload](https://www.w3school.com.cn/jsref/event_onunload.asp) | 用户退出页面。 |
| [onload](https://www.w3school.com.cn/jsref/event_onload.asp) | 一张页面或一幅图像完成加载。 |  |  |


<a name="8f22921d"></a>
# —— 浏览器对象模型 Browser Object Model (BOM) ——

<a name="bdc427af"></a>
# [Window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)

[属性](https://wangdoc.com/javascript/bom/window.html#window-%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B1%9E%E6%80%A7)

- [window.name](https://wangdoc.com/javascript/bom/window.html#windowname)
- [window.closed，window.opener](https://wangdoc.com/javascript/bom/window.html#windowclosed%EF%BC%8Cwindowopener)
- [window.self，window.window](https://wangdoc.com/javascript/bom/window.html#windowself%EF%BC%8Cwindowwindow)
- [window.frames，window.length](https://wangdoc.com/javascript/bom/window.html#windowframes%EF%BC%8Cwindowlength)
- [window.frameElement](https://wangdoc.com/javascript/bom/window.html#windowframeelement)
- [window.top，window.parent](https://wangdoc.com/javascript/bom/window.html#windowtop%EF%BC%8Cwindowparent)
- [window.status](https://wangdoc.com/javascript/bom/window.html#windowstatus)
- [window.devicePixelRatio](https://wangdoc.com/javascript/bom/window.html#windowdevicepixelratio)
- [位置大小属性](https://wangdoc.com/javascript/bom/window.html#%E4%BD%8D%E7%BD%AE%E5%A4%A7%E5%B0%8F%E5%B1%9E%E6%80%A7)
   - window.screenX，window.screenY	浏览器窗口左上角相对于当前屏幕左上角的水平距离和垂直距离（单位像素）
   - window.innerHeight，window.innerWidth	网页在当前窗口中可见部分的高度和宽度
   - window.outerHeight，window.outerWidth	浏览器窗口的高度和宽度，包括浏览器菜单和边框（单位像素）
   - window.scrollX，window.scrollY	页面的滚动距离
   - window.pageXOffset，window.pageYOffset	等同window.scrollX和window.scrollY
- [组件属性](https://wangdoc.com/javascript/bom/window.html#%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7)
   - window.locationbar：地址栏对象
   - window.menubar：菜单栏对象
   - window.scrollbars：窗口的滚动条对象
   - window.toolbar：工具栏对象
   - window.statusbar：状态栏对象
   - window.personalbar：用户安装的个人工具栏对象
- [全局对象属性](https://wangdoc.com/javascript/bom/window.html#%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)
   - window.document
   - window.location	当前窗口的 URL
   - window.navigator：指向Navigator对象
   - window.history	浏览器的浏览历史
   - window.localStorage	本地储存的 localStorage 数据
   - window.sessionStorage	向本地储存的 sessionStorage 数据
   - window.console	console对象，用于操作控制台
   - window.screen	Screen对象，表示屏幕信息
   - window.isSecureContext	当前窗口是否处在加密环境（https）
- [window.isSecureContext](https://wangdoc.com/javascript/bom/window.html#windowissecurecontext)

[方法](https://wangdoc.com/javascript/bom/window.html#window-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95)

- [window.alert()，window.prompt()，window.confirm()](https://wangdoc.com/javascript/bom/window.html#windowalert%EF%BC%8Cwindowprompt%EF%BC%8Cwindowconfirm)
- [window.open(), window.close()，window.stop()](https://wangdoc.com/javascript/bom/window.html#windowopen-windowclose%EF%BC%8Cwindowstop)
- [window.moveTo()，window.moveBy()](https://wangdoc.com/javascript/bom/window.html#windowmoveto%EF%BC%8Cwindowmoveby)
- [window.resizeTo()，window.resizeBy()](https://wangdoc.com/javascript/bom/window.html#windowresizeto%EF%BC%8Cwindowresizeby)
- [window.scrollTo()，window.scroll()，window.scrollBy()](https://wangdoc.com/javascript/bom/window.html#windowscrollto%EF%BC%8Cwindowscroll%EF%BC%8Cwindowscrollby)
- [window.print()](https://wangdoc.com/javascript/bom/window.html#windowprint)
- [window.focus()，window.blur()](https://wangdoc.com/javascript/bom/window.html#windowfocus%EF%BC%8Cwindowblur)
- [window.getSelection()](https://wangdoc.com/javascript/bom/window.html#windowgetselection)
- [window.getComputedStyle()，window.matchMedia()](https://wangdoc.com/javascript/bom/window.html#windowgetcomputedstyle%EF%BC%8Cwindowmatchmedia)
- [window.requestAnimationFrame()](https://wangdoc.com/javascript/bom/window.html#windowrequestanimationframe)
- [window.requestIdleCallback()](https://wangdoc.com/javascript/bom/window.html#windowrequestidlecallback)

[事件](https://wangdoc.com/javascript/bom/window.html#%E4%BA%8B%E4%BB%B6)

- [load 事件和 onload 属性](https://wangdoc.com/javascript/bom/window.html#load-%E4%BA%8B%E4%BB%B6%E5%92%8C-onload-%E5%B1%9E%E6%80%A7)
- [error 事件和 onerror 属性](https://wangdoc.com/javascript/bom/window.html#error-%E4%BA%8B%E4%BB%B6%E5%92%8C-onerror-%E5%B1%9E%E6%80%A7)
- [window 对象的事件监听属性](https://wangdoc.com/javascript/bom/window.html#window-%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E5%B1%9E%E6%80%A7)
   - window.onafterprint：afterprint事件的监听函数。
   - window.onbeforeprint：beforeprint事件的监听函数。
   - window.onbeforeunload：beforeunload事件的监听函数。
   - window.onhashchange：hashchange事件的监听函数。
   - window.onlanguagechange: languagechange的监听函数。
   - window.onmessage：message事件的监听函数。
   - window.onmessageerror：MessageError事件的监听函数。
   - window.onoffline：offline事件的监听函数。
   - window.ononline：online事件的监听函数。
   - window.onpagehide：pagehide事件的监听函数。
   - window.onpageshow：pageshow事件的监听函数。
   - window.onpopstate：popstate事件的监听函数。
   - window.onstorage：storage事件的监听函数。
   - window.onunhandledrejection：未处理的 Promise 对象的reject事件的监听函数。
   - window.onunload：unload事件的监听函数。

[多窗口操作](https://wangdoc.com/javascript/bom/window.html#%E5%A4%9A%E7%AA%97%E5%8F%A3%E6%93%8D%E4%BD%9C)

- [窗口的引用](https://wangdoc.com/javascript/bom/window.html#%E7%AA%97%E5%8F%A3%E7%9A%84%E5%BC%95%E7%94%A8)
   - top：顶层窗口，即最上层的那个窗口
   - parent：父窗口
   - self：当前窗口，即自身
- [iframe 元素](https://wangdoc.com/javascript/bom/window.html#iframe-%E5%85%83%E7%B4%A0)
- [window.frames 属性](https://wangdoc.com/javascript/bom/window.html#windowframes-%E5%B1%9E%E6%80%A7)
```javascript
var frame = document.getElementById('theFrame');
var frameDoc = frame.contentDocument;

// 等同于
var frameDoc = frame.contentWindow.document;
```
<a name="Navigator"></a>
## Navigator

[属性](https://wangdoc.com/javascript/bom/navigator.html#navigator-%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B1%9E%E6%80%A7)

- [Navigator.userAgent](https://wangdoc.com/javascript/bom/navigator.html#navigatoruseragent)
- [Navigator.plugins](https://wangdoc.com/javascript/bom/navigator.html#navigatorplugins)
- [Navigator.platform](https://wangdoc.com/javascript/bom/navigator.html#navigatorplatform)
- [Navigator.onLine](https://wangdoc.com/javascript/bom/navigator.html#navigatoronline)
- [Navigator.language，Navigator.languages](https://wangdoc.com/javascript/bom/navigator.html#navigatorlanguage%EF%BC%8Cnavigatorlanguages)
- [Navigator.geolocation](https://wangdoc.com/javascript/bom/navigator.html#navigatorgeolocation)
- [Navigator.cookieEnabled](https://wangdoc.com/javascript/bom/navigator.html#navigatorcookieenabled)	浏览器的 Cookie 功能是否打开

[方法](https://wangdoc.com/javascript/bom/navigator.html#navigator-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95)

- [Navigator.javaEnabled()](https://wangdoc.com/javascript/bom/navigator.html#navigatorjavaenabled)
- [Navigator.sendBeacon()](https://wangdoc.com/javascript/bom/navigator.html#navigatorsendbeacon)	向服务器异步发送数据

[实验性属性](https://wangdoc.com/javascript/bom/navigator.html#navigator-%E7%9A%84%E5%AE%9E%E9%AA%8C%E6%80%A7%E5%B1%9E%E6%80%A7)

- [Navigator.deviceMemory](https://wangdoc.com/javascript/bom/navigator.html#navigatordevicememory)
- [Navigator.hardwareConcurrency](https://wangdoc.com/javascript/bom/navigator.html#navigatorhardwareconcurrency)	可用的逻辑处理器的数量
- [Navigator.connection](https://wangdoc.com/javascript/bom/navigator.html#navigatorconnection)	当前网络连接的相关信息。
   - downlink：有效带宽估计值（单位：兆比特/秒，Mbps），四舍五入到每秒 25KB 的最接近倍数。
   - downlinkMax：当前连接的最大下行链路速度（单位：兆比特每秒，Mbps）。
   - effectiveType：返回连接的等效类型，可能的值为slow-2g、2g、3g、4g。
   - rtt：当前连接的估计有效往返时间，四舍五入到最接近的25毫秒的倍数。
   - saveData：用户是否设置了浏览器的减少数据使用量选项（比如不加载图片），返回true或者false。
   - type：当前连接的介质类型，可能的值为bluetooth、cellular、ethernet、none、wifi、wimax、other、unknown。

<a name="e9cdaf27"></a>
## [Screen](https://wangdoc.com/javascript/bom/navigator.html#screen-%E5%AF%B9%E8%B1%A1)

- Screen.height：浏览器窗口所在的屏幕的高度（单位像素）
- Screen.width：浏览器窗口所在的屏幕的宽度（单位像素）。
- Screen.availHeight：浏览器窗口可用的屏幕高度（单位像素）。
- Screen.availWidth：浏览器窗口可用的屏幕宽度（单位像素）。
- Screen.pixelDepth：整数，表示屏幕的色彩位数
- Screen.colorDepth：Screen.pixelDepth的别名。
- Screen.orientation：屏幕的方向。
   - landscape-primary表示横放
   - landscape-secondary表示颠倒的横放
   - portrait-primary表示竖放
   - portrait-secondary表示颠倒的竖放。

<a name="History"></a>
## History

[属性](https://wangdoc.com/javascript/bom/history.html#%E5%B1%9E%E6%80%A7)

- History.length：当前窗口访问过的网址数量（包括当前网页）
- History.state：History 堆栈最上层的状态值

[方法](https://wangdoc.com/javascript/bom/history.html#%E6%96%B9%E6%B3%95)

- [History.back()、History.forward()、History.go(n)](https://wangdoc.com/javascript/bom/history.html#historyback%E3%80%81historyforward%E3%80%81historygo)
- [History.pushState(](https://wangdoc.com/javascript/bom/history.html#historypushstate%EF%BC%8C)state, title, url[)](https://wangdoc.com/javascript/bom/history.html#historypushstate%EF%BC%8C)	在历史中添加一条记录
- [History.replaceState()](https://wangdoc.com/javascript/bom/history.html#historyreplacestate)

[popstate 事件](https://wangdoc.com/javascript/bom/history.html#popstate-%E4%BA%8B%E4%BB%B6)：当同一个文档的浏览历史（即history对象）出现变化时，就会触发

<a name="Location"></a>
## Location

属性。

-  Location.href：整个 URL。 
-  Location.protocol：当前 URL 的协议，包括冒号（:）。 
-  Location.host：主机。如果端口不是协议默认的80和433，则还会包括冒号（:）和端口。 
-  Location.hostname：主机名，不包括端口。 
-  Location.port：端口号。 
-  Location.pathname：URL 的路径部分，从根路径/开始。 
-  Location.search：查询字符串部分，从问号?开始。 
-  Location.hash：片段字符串部分，从#开始。 
-  Location.username：域名前面的用户名。 
-  Location.password：域名前面的密码。 
-  Location.origin：URL 的协议、主机名和端口。 
| 方法 | 描述 |
| --- | --- |
| [assign()](https://www.w3school.com.cn/jsref/met_loc_assign.asp) | 加载新的文档。 |
| [reload()](https://www.w3school.com.cn/jsref/met_loc_reload.asp) | 重新加载当前文档。 |
| [replace()](https://www.w3school.com.cn/jsref/met_loc_replace.asp) | 用新的文档替换当前文档。 |


<a name="URL"></a>
## URL

统一资源定位器（Uniform Resource Locator）用于定位万维网上的文档（或其他数据）。

语法规则： protocol://hostname[:port]/path[?key1=value1&key2=value2][#anchor]

-  :port - 定义主机上的端口号（http 的默认端口号是 80） 
-  path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。 
-  锚点名称通过网页元素的id属性命名 

**URL 字符**

-  URL 元字符：分号（;），逗号（,），斜杠（/），问号（?），冒号（:），at（@），&，等号（=），加号（+），美元符号（$），井号（#） 
-  语义字符：a-z，A-Z，0-9，连词号（-），下划线（_），点（.），感叹号（!），波浪线（~），星号（*），单引号（'），圆括号（()） 
-  其他字符（如汉字）：理论上不需要手动转义，浏览器会自动将它们转义。转义方法是使用这些字符的十六进制 UTF-8 编码，每两位算作一组，然后每组头部添加百分号（%）。 

编码和解码

-  encodeURI()	转码整个 URL 
-  encodeURIComponent()	转码 URL 的组成部分，会转码除了语义字符之外的所有字符 
-  decodeURI() 
-  decodeURIComponent() 

URL

```javascript
var url = new URL('http://user:passwd@www.example.com:4097/path/a.html?x=111#part1');
```

URL 实例的属性与Location对象的属性基本一致

方法

-  URL.createObjectURL()	为上传/下载的文件、流媒体文件生成一个 URL 字符串 
-  URL.revokeObjectURL()	释放URL.createObjectURL()方法生成的 URL 实例 

[**URLSearchParams**](https://wangdoc.com/javascript/bom/location.html#urlsearchparams-%E5%AF%B9%E8%B1%A1)

- [URLSearchParams.toString()](https://wangdoc.com/javascript/bom/location.html#urlsearchparamstostring)
- [URLSearchParams.append()](https://wangdoc.com/javascript/bom/location.html#urlsearchparamsappend)
- [URLSearchParams.delete()](https://wangdoc.com/javascript/bom/location.html#urlsearchparamsdelete)
- [URLSearchParams.has()](https://wangdoc.com/javascript/bom/location.html#urlsearchparamshas)
- [URLSearchParams.set()](https://wangdoc.com/javascript/bom/location.html#urlsearchparamsset)
- [URLSearchParams.get()，URLSearchParams.getAll()](https://wangdoc.com/javascript/bom/location.html#urlsearchparamsget%EF%BC%8Curlsearchparamsgetall)
- [URLSearchParams.sort()](https://wangdoc.com/javascript/bom/location.html#urlsearchparamssort)
- [URLSearchParams.keys()，URLSearchParams.values()，URLSearchParams.entries()](https://wangdoc.com/javascript/bom/location.html#urlsearchparamskeys%EF%BC%8Curlsearchparamsvalues%EF%BC%8Curlsearchparamsentries)

<a name="9340ff13"></a>
## [Storage](https://wangdoc.com/javascript/bom/storage.html)

Storage 接口用于脚本在浏览器保存数据。两个对象部署了这个接口：window.sessionStorage和window.localStorage。

-  sessionStorage：数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空； 
-  localStorage：数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。 

除了保存期限的长短不同，这两个对象的其他方面都一致。

[属性和方法](https://wangdoc.com/javascript/bom/storage.html#%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95)

- [Storage.setItem()](https://wangdoc.com/javascript/bom/storage.html#storagesetitem)	存入(键值)数据
- [Storage.getItem()](https://wangdoc.com/javascript/bom/storage.html#storagegetitem)
- [Storage.removeItem()](https://wangdoc.com/javascript/bom/storage.html#storageremoveitem)
- [Storage.clear()](https://wangdoc.com/javascript/bom/storage.html#storageclear)	清除所有保存的数据
- [Storage.key()](https://wangdoc.com/javascript/bom/storage.html#storagekey)

[storage 事件](https://wangdoc.com/javascript/bom/storage.html#storage-%E4%BA%8B%E4%BB%B6)

-  StorageEvent.key：字符串，表示发生变动的键名。 
-  StorageEvent.newValue：字符串，表示新的键值 
-  StorageEvent.oldValue：字符串，表示旧的键值。如果该键值对是新增的，该属性返回null。 
-  StorageEvent.storageArea：对象，返回键值对所在的整个对象 
-  StorageEvent.url：字符串，表示原始触发 storage 事件的那个网页的网址。 

ArrayBuffer  <br />  表示一段二进制数据，用来模拟内存里面的数据

Blob  <br />  表示一个二进制文件的数据内容

-  size 
-  type 
-  slice(start, end, contentType) 

File  <br />  代表一个文件，用来读写文件信息。它继承了 Blob 对象

-  File.lastModified：最后修改时间 
-  File.name：文件名或文件路径 
-  File.size：文件大小（单位字节） 
-  File.type：文件的 MIME 类型 

[FileList](https://wangdoc.com/javascript/bom/file.html#filelist-%E5%AF%B9%E8%B1%A1)

[FileReader](https://wangdoc.com/javascript/bom/file.html#filereader-%E5%AF%B9%E8%B1%A1)  <br />  用于读取 File 对象或 Blob 对象所包含的文件内容

-  FileReader.error：读取文件时产生的错误对象 
-  FileReader.readyState：整数，表示读取文件时的当前状态。0表示尚未加载任何数据，1表示数据正在加载，2表示加载完成。 
-  FileReader.result：读取完成后的文件内容 
-  FileReader.onabort：abort事件（用户终止读取操作）的监听函数。 
-  FileReader.onerror：error事件（读取错误）的监听函数。 
-  FileReader.onload：load事件（读取操作完成）的监听函数，通常在这个函数里面使用result属性，拿到文件内容。 
-  FileReader.onloadstart：loadstart事件（读取操作开始）的监听函数。 
-  FileReader.onloadend：loadend事件（读取操作结束）的监听函数。 
-  FileReader.onprogress：progress事件（读取操作进行中）的监听函数。 

FormData

-  FormData.get(key)：获取指定键名对应的键值，参数为键名。 
-  FormData.getAll(key)：返回一个数组，表示指定键名对应的所有键值。 
-  FormData.set(key, value)：设置指定键名的键值，参数为键名。 
-  FormData.delete(key)：删除一个键值对，参数为键名。 
-  FormData.append(key, value)：添加一个键值对。如果键名重复，则会生成两个相同键名的键值对。 
-  FormData.has(key)：返回一个布尔值，表示是否具有该键名的键值对。 
-  FormData.keys()：返回一个遍历器对象，用于for...of循环遍历所有的键名。 
-  FormData.values()：返回一个遍历器对象，用于for...of循环遍历所有的键值。 
-  FormData.entries()：返回一个遍历器对象，用于for...of循环遍历所有的键值对。 

<a name="IndexedDB"></a>
## IndexedDB

浏览器提供的本地数据库，它可以被网页脚本创建和操作。允许储存大量数据，提供查找接口，还能建立索引

**特点**

1.  键值对储存 
2.  异步 
3.  支持事务 
4.  同源限制：每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。 
5.  储存空间大 
6.  支持二进制储存 

**indexedDB**

-  indexedDB.open(databaseName, version);	打开数据库 
-  indexedDB.deleteDatabase() 
-  indexedDB.cmp()	比较两个值是否为 indexedDB 的相同的主键 

**数据库：IDBDatabase 对象**  <br />  每个域名都可以新建任意多个数据库。同一个时刻，只能有一个版本的数据库存在

Property

-  IDBDatabase.name：数据库名称。 
-  IDBDatabase.version：整数，数据库版本。 
-  IDBDatabase.objectStoreNames：DOMStringList 对象（字符串的集合），包含当前数据的所有 object store 的名字。 
-  IDBDatabase.onabort：指定 abort 事件（事务中止）的监听函数。 
-  IDBDatabase.onclose：指定 close 事件（数据库意外关闭）的监听函数。 
-  IDBDatabase.onerror：指定 error 事件（访问数据库失败）的监听函数。 
-  IDBDatabase.onversionchange：数据库版本变化时触发（发生upgradeneeded事件，或调用indexedDB.deleteDatabase()）。 

Method

-  IDBDatabase.close()：关闭数据库连接 
-  IDBDatabase.createObjectStore()：创建存放数据的对象仓库。该方法只能在versionchange事件监听函数中调用。 
-  IDBDatabase.deleteObjectStore()：删除指定的对象仓库。该方法只能在versionchange事件监听函数中调用。 
-  IDBDatabase.transaction()：返回一个 IDBTransaction 事务对象。 

**对象仓库：IDBObjectStore 对象**

每个数据库包含若干个对象仓库。它类似于关系型数据库的表格。

Property

-  IDBObjectStore.indexNames：返回一个类似数组的对象（DOMStringList），包含了当前对象仓库的所有索引。 
-  IDBObjectStore.keyPath：返回当前对象仓库的主键。 
-  IDBObjectStore.name：返回当前对象仓库的名称。 
-  IDBObjectStore.transaction：返回当前对象仓库所属的事务对象。 
-  IDBObjectStore.autoIncrement：布尔值，表示主键是否会自动递增。 

Method

-  IDBobjectStore.add(value, key) 
-  IDBobjectStore.put(item, key)	更新某个主键对应的数据记录 
-  IDBobjectStore.clear() 
-  IDBobjectStore.delete(Key) 
-  IDBObjectStore.count(key) 
-  IDBObjectStore.getKey(key) 
-  IDBObjectStore.get(key)	获取主键对应的数据记录 
-  DBObjectStore.getAll([query, count])	获取对象仓库的记录 
-  IDBObjectStore.getAllKeys([query, count])	获取所有符合条件的主键 
-  IDBObjectStore.index(name) 
-  IDBobjectStore.createIndex(indexName, keyPath, objectParameters) 
-  IDBObjectStore.deleteIndex(indexName) 
-  IDBObjectStore.openCursor() 
-  IDBObjectStore.openKeyCursor()	获取一个主键指针对象。 

**索引： IDBIndex 对象**  <br />  对象仓库保存的是数据记录。每条记录类似于关系型数据库的行，即主键和数据体两部分。

Property

-  IDBIndex.name：字符串，索引的名称。 
-  IDBIndex.objectStore：索引所在的对象仓库。 
-  IDBIndex.keyPath：索引的主键。 
-  IDBIndex.multiEntry：布尔值，针对keyPath为数组的情况，如果设为true，创建数组时，每个数组成员都会有一个条目，否则每个数组都只有一个条目。 
-  IDBIndex.unique：布尔值，表示创建索引时是否允许相同的主键。 

Method

-  IDBIndex.count()：用来获取记录的数量。 
-  IDBIndex.get(key)：用来获取符合指定主键的数据记录。 
-  IDBIndex.getKey(key)：用来获取指定的主键。 
-  IDBIndex.getAll() 
-  IDBIndex.getAllKeys() 
-  IDBIndex.openCursor()：用来获取一个 IDBCursor 对象，用来遍历索引里面的所有条目。 
-  IDBIndex.openKeyCursor() 

**事务： IDBTransaction 对象**  <br />  提供error、abort和complete三个事件，用来监听操作结果

Property

-  IDBTransaction.db：	当前事务所在的数据库对象 IDBDatabase。 
-  IDBTransaction.error：返回当前事务的错误。如果事务没有结束，或者事务成功结束，或者被手动终止，该方法返回null。 
-  IDBTransaction.mode：返回当前事务的模式，默认是readonly（只读），另一个值是readwrite。 
-  IDBTransaction.objectStoreNames：返回一个类似数组的对象 DOMStringList，成员是当前事务涉及的对象仓库的名字。 
-  IDBTransaction.onabort：指定abort事件（事务中断）的监听函数。 
-  IDBTransaction.oncomplete：指定complete事件（事务成功）的监听函数。 
-  IDBTransaction.onerror：指定error事件（事务失败）的监听函数。 

Method

-  IDBTransaction.abort()：终止当前事务，回滚所有已经进行的变更。 
-  IDBTransaction.objectStore(name)：返回指定名称的对象仓库 IDBObjectStore。 

**操作请求：IDBRequest 对象**

-  IDBRequest.readyState：等于pending表示操作正在进行，等于done表示操作正在完成。 
-  IDBRequest.result：返回请求的结果。 
-  IDBRequest.error：请求失败时，返回错误对象。 
-  IDBRequest.source：返回请求的来源（比如索引对象或 ObjectStore）。 
-  IDBRequest.transaction：返回当前请求正在进行的事务，如果不包含事务，返回null。 
-  IDBRequest.onsuccess：指定success事件的监听函数。 
-  IDBRequest.onerror：指定error事件的监听函数。 

**IDBOpenDBRequest 对象**	继承了 IDBRequest 对象

-  IDBOpenDBRequest.onblocked：指定blocked事件（upgradeneeded事件触发时，数据库仍然在使用）的监听函数。 
-  IDBOpenDBRequest.onupgradeneeded：upgradeneeded事件的监听函数。 

**指针： IDBCursor 对象**

Property

-  IDBCursor.source：返回正在遍历的对象仓库或索引。 
-  IDBCursor.direction：字符串，表示指针遍历的方向。共有四个可能的值：next（从头开始向后遍历）、nextunique（从头开始向后遍历，重复的值只遍历一次）、prev（从尾部开始向前遍历）、prevunique（从尾部开始向前遍历，重复的值只遍历一次）。该属性通过IDBObjectStore.openCursor()方法的第二个参数指定，一旦指定就不能改变了。 
-  IDBCursor.key：返回当前记录的主键。 
-  IDBCursor.value：返回当前记录的数据值。 
-  IDBCursor.primaryKey：返回当前记录的主键。 

Property

-  IDBCursor.advance(n)：指针向前移动 n 个位置。 
-  IDBCursor.continue()：指针向前移动一个位置。它可以接受一个主键作为参数，这时会跳转到这个主键。 
-  IDBCursor.continuePrimaryKey()：该方法需要两个参数，第一个是key，第二个是primaryKey，将指针移到符合这两个参数的位置。 
-  IDBCursor.delete()：删除当前位置的记录 
-  IDBCursor.update()：更新当前位置的记录 

**主键集合：IDBKeyRange 对象**  <br />  数据仓库（object store）里面的一组主键

Property

-  IDBKeyRange.lower：返回下限 
-  IDBKeyRange.lowerOpen：布尔值，表示下限是否为开区间（即下限是否排除在范围之外） 
-  IDBKeyRange.upper：返回上限 
-  IDBKeyRange.upperOpen：布尔值，表示上限是否为开区间（即上限是否排除在范围之外） 

Method

-  IDBKeyRange.lowerBound()：指定下限。 
-  IDBKeyRange.upperBound()：指定上限。 
-  IDBKeyRange.bound()：同时指定上下限。 
-  IDBKeyRange.only()：指定只包含一个值。 

e.g

```javascript
// 新建/打开数据库
var request = window.indexedDB.open(databaseName, version);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  var objectStore;
  if (!db.objectStoreNames.contains('person')) {
    objectStore = db.createObjectStore('person', { keyPath: 'id' });
    objectStore.createIndex('name', 'name', { unique: false });
  }
}


// 新增数据
function add() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });

  request.onsuccess = function (event) {
    console.log('数据写入成功');
  };

  request.onerror = function (event) {
    console.log('数据写入失败');
  }
}


// 遍历数据 
function readAll() {
  var objectStore = db.transaction('person').objectStore('person');

   objectStore.openCursor().onsuccess = function (event) {
     var cursor = event.target.result;

     if (cursor) {
       console.log('Id: ' + cursor.key);
       console.log('Name: ' + cursor.value.name);
       console.log('Age: ' + cursor.value.age);
       console.log('Email: ' + cursor.value.email);
       cursor.continue();
    } else {
      console.log('没有更多数据了！');
    }
  };
}
```

<a name="7438130d"></a>
## Web Worker

为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行

限制

-  同源限制 
-  全局对象限制：Worker的全局对象WorkerGlobalScope，只定义了Navigator接口和Location接口。 
-  通信联系：Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。 
-  脚本限制：不能执行alert()方法和confirm()方法，但可用 XMLHttpRequest 对象发出 AJAX 请求。 
-  文件限制：Worker 线程无法读取本地文件 

**主线程**  <br />  `var myWorker = new Worker(jsUrl, options);`

-  Worker.onerror：指定 error 事件的监听函数。 
-  Worker.onmessage：指定 message 事件的监听函数，发送过来的数据在Event.data属性中。 
-  Worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。 
-  Worker.postMessage()：向 Worker 线程发送消息。 
-  Worker.terminate()：立即终止 Worker 线程。 

**Worker 线程**

-  self.name： Worker 的名字 
-  self.onmessage：指定message事件的监听函数。 
-  self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。 
-  self.close()：关闭 Worker 线程。 
-  self.postMessage()：向产生这个 Worker 的线程发送消息。 
-  self.importScripts()：加载 JS 脚本。 

```javascript
// Worker 线程完成轮询
function createWorker(f) {
  var blob = new Blob(['(' + f.toString() + ')()']);
  var url = window.URL.createObjectURL(blob);
  var worker = new Worker(url);
  return worker;
}

var pollingWorker = createWorker(function (e) {
  var cache;

  function compare(new, old) { ... };

  setInterval(function () {
    fetch('/my-api-endpoint').then(function (res) {
      var data = res.json();

      if (!compare(data, cache)) {
        cache = data;
        self.postMessage(data);
      }
    })
  }, 1000)
});

pollingWorker.onmessage = function () {
  // render data
}

pollingWorker.postMessage('init');
```

<a name="1f3c2578"></a>
# ——Asynchronous JavaScript And XML——

AJAX 是一种用于创建快速动态网页的技术。  <br />  通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。即在不重新加载整个网页的情况下，对网页的某部分进行更新。

[**XMLHttpRequest**](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

| 方法 | 描述 |
| --- | --- |
| new XMLHttpRequest() | 创建新的 XMLHttpRequest 对象 |
| abort() | 取消当前请求 |
| getAllResponseHeaders() | 返回头部信息 |
| getResponseHeader() | 返回特定的头部信息 |
| open(_method_, _url_, _async_, _user_, _psw_) | 规定请求  <br />  method：请求类型 GET 或 POST  <br />  url：文件位置  <br />  async：true（异步）或 false（同步）  <br />  user：可选的用户名称  <br />  psw：可选的密码 |
| send() | 将请求发送到服务器，用于 GET 请求 |
| send(_string_) | 将请求发送到服务器，用于 POST 请求 |
| setRequestHeader(_header_,_value_) | 向请求添加 HTTP 头。  <br />  header: 规定头的名称  <br />  value: 规定头的值 |
|  |  |
| [overrideMimeType()](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/overrideMimeType) | 覆写由服务器返回的 MIME 类型 |

| **属性** | **描述** |
| --- | --- |
| onreadystatechange | 定义当 readyState 属性发生变化时被调用的函数 |
| readyState | 保存 XMLHttpRequest 的状态。  <br />  0：请求未初始化  <br />  1：服务器连接已建立  <br />  2：请求已收到  <br />  3：正在处理请求  <br />  4：请求已完成且响应已就绪 |
| responseText | 以字符串返回响应数据 |
| responseXML | 以 XML 数据返回响应数据 |
| status | 返回请求的状态号 |
| statusText | 返回状态文本（比如 "OK" 或 "Not Found"） |
|  |  |
| [response](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/response)  | 以 XML 数据返回响应数据 |
| [responseType](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseType) | 用于定义响应类型的枚举值（enumerated value） |
| [responseURL](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseURL) | 返回经过序列化（serialized）的响应 URL |
| [timeout](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/timeout) | 请求的最大请求时间（毫秒），若超出该时间，请求会自动终止。 |
| [upload](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/upload) | [XMLHttpRequestUpload](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestUpload)，代表上传进度 |
| [withCredentials](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials) | [布尔值](https://developer.mozilla.org/zh-CN/docs/Web/API/Boolean)，用来指定跨域 Access-Control 请求是否应当带有授权信息，如 cookie 或授权 header 头 |


**XMLHttpRequest.readyState**

| 值 | 状态 | 描述 |
| --- | --- | --- |
| 0 | UNSENT | xhr已被创建，但还没有调用 open 方法 |
| 1 | OPENED | open 方法被调用 |
| 2 | HEADERS_RECEIVED | send 方法被调用，并且可以获取响应头部以及响应状态码 |
| 3 | LOADING | 正在下载响应内容 |
| 4 | DONE | 下载完成 |


```javascript
var xhr
// 实例化一个 XMLHttpRequest 对象
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6及以下
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

// 绑定 xhr.readyState 改变时调用的回调
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
      console.log('请求成功')
    } else {
      console.log('请求错误')
    }
  }
}

// 初始化请求
xhr.open('GET', '/api/hello');
// 设置请求头（可选）
xhr.setRequestHeader('Accept', '*/*')
// 发出请求
xhr.send();
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script>
var xmlhttp;
function loadXMLDoc(url,cfunc)
{
if (window.XMLHttpRequest)
  {// IE7+, Firefox, Chrome, Opera, Safari 代码
  xmlhttp=new XMLHttpRequest();
  }
else
  {// IE6, IE5 代码
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=cfunc;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
function myFunction()
{
	loadXMLDoc("/try/ajax/ajax_info.txt",function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	});
}
</script>
</head>
<body>

<div id="myDiv"><h2>使用 AJAX 修改文本内容</h2></div>
<button type="button" onclick="myFunction()">修改内容</button>

</body>
</html>
```

HTML5 将 XMLHttpRequest 纳入了规范，并在原来的基础上做了升级，提出了 XMLHttpRequest Level 2

- 设置HTTP请求的超时时间
```javascript
xhr.timeout = 2000 // 超时时间，单位是毫秒
xhr.ontimeout = function (e) {
  alert('请求超时！');// XMLHttpRequest 超时，在此做超时的处理
}
```

- 通过 FormData 发送表单数据
```javascript
var formData = new FormData()
// 向 FormData 添加数据
formData.append('username', 'whale')
formData.append('age', '18')
```

- 上传文件
```javascript
var formData = new FormData();
for (var i = 0; i < files.length;i++) {
formData.append('files[]', files[i]);
}
```

- 支持跨域请求

W3C 提出了[跨域资源共享](http://www.ruanyifeng.com/blog/2016/04/cors.html)（Cross-origin resource sharing，CORS）标准

- 可以获取服务器端的二进制数据
```javascript
xhr.responseType = 'arraybuffer'
xhr.onload = function () {
  var arrayBuffer = oReq.response
  // 接下来对 arrayBuffer 做进一步处理...
}
```

- 可以获得数据传输的进度信息
| 事件 | 描述 |
| --- | --- |
| onloadstart | 获取数据开始 |
| onprogress | 数据传输过程中 |
| onabort | 数据获取被取消 |
| onerror | 获取数据错误 |
| onload | 获取数据成功 |
| ontimeout | 获取数据超时 |
| onloadend | 获取完成（无论成功或失败） |


<a name="154bfcdd"></a>
# 同源政策 [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy)

同源

-  协议相同 
-  域名相同 
-  端口相同 

限制范围

1. 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。
2. 无法接触非同源网页的 DOM。

两个网页一级域名相同，只是次级域名不同，浏览器允许通过设置document.domain共享 Cookie

**跨域窗口的通信**

-  片段识别符（fragment identifier）：URL 的#号后面的部分 
-  跨文档通信API（Cross-document messaging） 

```javascript
// 父窗口打开一个子窗口
var popup = window.open('http://bbb.com', 'title');
// 父窗口向子窗口发消息
popup.postMessage('Hello World!', 'http://bbb.com');

// 父窗口和子窗口都可以用下面的代码，
// 监听 message 消息
window.addEventListener('message', function (e) {
  console.log(e.data);
},false);
```

LocalStorage
```javascript
//主窗口写入 iframe 子窗口的localStorage
window.onmessage = function(e) {
  if (e.origin !== 'http://bbb.com') {
    return;
  }
  var payload = JSON.parse(e.data);
  localStorage.setItem(payload.key, JSON.stringify(payload.data));
};

//父窗口发送消息
var win = document.getElementsByTagName('iframe')[0].contentWindow;
var obj = { name: 'Jack' };
win.postMessage(
  JSON.stringify({key: 'storage', data: obj}),
  'http://bbb.com'
);
```

JSONP

[JSON](https://baike.baidu.com/item/JSON) with Padding是JSON的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题  <br />  特点：简单易用，没有兼容性问题，但只支持GET

步骤

1. 向服务器请求一个脚本，这不受同源政策限制，可以跨域请求。
```javascript
<script src="http://api.foo.com?callback=bar"></script>
```

2.  服务器收到请求后，拼接一个字符串，将 JSON 数据放在函数名里面，作为字符串返回（bar({...})） 
3.  客户端将服务器返回的字符串，作为代码解析，客户端只要定义了bar()函数，就能在该函数体内，拿到服务器返回的 JSON 数据。 

```javascript
// 实例
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};

// 服务器返回数据
foo({
  'ip': '8.8.8.8'
});
```

<a name="1618607a"></a>
## [CORS ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

跨域资源共享（Cross-origin resource sharing）是一个 W3C 标准。允许浏览器向跨域的服务器，发出XMLHttpRequest请求，从而克服了 AJAX 只能同源使用的限制。

**简单请求（simple request）**  <br />  浏览器直接发出 CORS 请求，在头信息之中，增加一个Origin字段。

满足条件

- 请求方法：HEAD、GET、POST
- HTTP 的头信息
   - Accept
   - Accept-Language
   - Content-Language
   - Last-Event-ID
   - Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。
```javascript
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true    // 可选，是否允许发送 Cookie
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```

**非简单请求**  <br />  “预检”请求（preflight）：浏览器发出CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求。  <br />  一旦服务器通过了“预检”请求，以后每次浏览器正常的 CORS 请求，就都跟简单请求一样

预检请求的 HTTP 头信息
```javascript
OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

预检请求的回应
```javascript
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

请求头

- Access-Control-Allow-Origin: <origin> | *
- Access-Control-Allow-Credentials: true
- Access-Control-Allow-Methods: <method>[, <method>]*
- Access-Control-Allow-Headers: <field-name>[, <field-name>]*

<a name="6bd99046"></a>
# [Fetch](https://wangdoc.com/webapi/fetch.html)

```javascript
fetch(url, optionObj)
  .then(...)
  .catch(...)
```

fetch与 XMLHttpRequest 基本相同，有三个主要的差异

1. 使用 Promise，不使用回调函数，写起来更简洁。
2. 采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象），更合理一些；
3. 通过数据流（Stream 对象）处理数据，可以分块读取，有利于提高网站性能表现，减少内存占用，对于请求大文件或者网速慢的场景相当有用。

```javascript
fetch('https://api.github.com/users/ruanyf')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err)); 
  
  // 等同，语义更清晰
async function getJSON() {
  let url = 'https://api.github.com/users/ruanyf';
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Request Failed', error);
  }
}
```

**定制 HTTP 请求**
```javascript
const response = fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined,
  referrer: "about:client",
  referrerPolicy: "no-referrer-when-downgrade",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  signal: undefined
});


body
// Json数据
JSON.stringify({ name:  'John', surname:  'Smith'  })  
// 表单
new FormData(form)
// 二进制
let blob = await new Promise(resolve =>
  canvasElem.toBlob(resolve,  'image/png')
)
```

cache

-  default：默认值，先在缓存里面寻找匹配的请求。 
-  no-store：直接请求远程服务器，并且不更新缓存。 
-  reload：直接请求远程服务器，并且更新缓存。 
-  no-cache：将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存。 
-  force-cache：缓存优先，只有不存在缓存的情况下，才请求远程服务器。 
-  only-if-cached：只检查缓存，如果缓存里面不存在，将返回504错误。 

mode	请求的模式

-  cors：默认值，允许跨域请求。 
-  same-origin：只允许同源请求。 
-  no-cors：请求方法只限于 GET、POST 和 HEAD，并且只能使用有限的几个简单标头，不能添加跨域的复杂标头，相当于提交表单、<script>加载脚本、<img>加载图片等传统的跨域请求方法。

credentials	是否发送 Cookie

-  same-origin：默认值，同源请求时发送 Cookie，跨域请求时不发送。 
-  include：不管同源请求，还是跨域请求，一律发送 Cookie。 
-  omit：一律不发送。 

**取消请求**
```javascript
// 1秒后自动取消请求
let controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
  let response = await fetch('/long-operation', {
    signal: controller.signal
  });
} catch(err) {
  if (err.name == 'AbortError') {
    console.log('Aborted!');
  } else {
    throw err;
  }
}
```

[**Response**](https://developer.mozilla.org/en-US/docs/Web/API/Response)  <br />  [

](https://developer.mozilla.org/en-US/docs/Web/API/Response)

- Response.ok
- Response.status
- Response.statusText
- Response.url
- Response.type
- Response.redirected
- Response.body	返回一个 ReadableStream 
- Response.headers
   - Headers.get()：根据指定的键名，返回键值。
   - Headers.has()： 返回一个布尔值，表示是否包含某个标头。
   - Headers.set()：将指定的键名设置为新的键值，如果该键名不存在则会添加。
   - Headers.append()：添加标头。
   - Headers.delete()：删除标头。
   - Headers.keys()：返回一个遍历器，可以依次遍历所有键名。
   - Headers.values()：返回一个遍历器，可以依次遍历所有键值。
   - Headers.entries()：返回一个遍历器，可以依次遍历所有键值对（[key, value]）。
   - Headers.forEach()：依次遍历标头，每个标头都会执行一次参数函数。

- Response.text()：得到文本字符串。
- Response.json()：得到 JSON 对象。
- Response.blob()：得到二进制 Blob 对象。
- Response.formData()：得到 FormData 表单对象。
- Response.arrayBuffer()：得到二进制 ArrayBuffer 对象。
- Response.clone()	副本

<a name="WebSocket"></a>
# WebSocket

一种在单个 TCP 连接上进行全双工（full-duplex）通讯的协议。

特点

1. 建立在 TCP 协议之上，服务器端的实现比较容易。
2. 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
3. 数据格式比较轻量，性能开销小，通信高效。
4. 可以发送文本，也可以发送二进制数据。
5. 没有同源限制，客户端可以与任意服务器通信，完全可以取代 Ajax。
6. 协议标识符是ws（如果加密，则为wss，对应 HTTPS 协议），服务器网址就是 URL。

WebSocket 握手请求
```http
GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Host: example.com
Origin: null
Sec-WebSocket-Key: sN9cRrP/n9NdMgdcy2VJFQ==
Sec-WebSocket-Version: 13
```

服务器的 WebSocket 回应
```http
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Accept: fFBooB7FAkLlXgRSz0BT3v4hq5s=
Sec-WebSocket-Origin: null
Sec-WebSocket-Location: ws://example.com/
```

示例
```javascript
var ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = function(evt) {
  console.log('Connection open ...');
  ws.send('Hello WebSockets!');
};

ws.onmessage = function(evt) {
  console.log('Received Message: ' + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log('Connection closed.');
};
```

**webSocket**

- readyState
   - CONNECTING：值为0，表示正在连接。
   - OPEN：值为1，表示连接成功，可以通信了。
   - CLOSING：值为2，表示连接正在关闭。
   - CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
- onopen：指定连接成功后的回调函数
- onclose：指定连接关闭后的回调函数
- onmessage：指定收到服务器数据后的回调函数
- send()：向服务器发送数据
- bufferedAmount：表示还有多少字节的二进制数据没有发送出去。用来判断发送是否结束。
- onerror：指定报错时的回调函数

```javascript
ws.onclose = function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
};

ws.addEventListener("close", function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
});
```

<a name="0ebc34c9"></a>
# [Geolocation](https://wangdoc.com/webapi/geolocation.html)

navigator.geolocation属性返回一个 Geolocation 对象

方法

- getCurrentPosition(success, error, options)：返回一个 Position 对象，表示用户的当前位置。
- watchPosition(success[, error[, options]])：指定一个监听函数，每当用户的位置发生变化，就执行该监听函数。
- clearWatch(id)：取消watchPosition()方法指定的监听函数。

参数

- success：用户同意给出位置时的回调函数，它的参数是一个 Position 对象。
- error：用户拒绝给出位置时的回调函数，它的参数是一个 PositionError 对象。该参数可选。
- options：参数对象，可选。
   - enableHighAccuracy：布尔值，是否返回高精度结果。
   - timeout：正整数，表示等待查询的最长时间，单位为毫秒。默认值为Infinity。
   - maximumAge：正整数，表示可接受的缓存最长时间，单位为毫秒。默认值为0，不返回缓存值，必须查询当前的实际位置

Position 对象

-  Position.coords：一个 Coordinates 对象，表示当前位置的坐标。 
-  Position.timestamp：当前时间戳。 

```javascript
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  
  console.log(`经度：${crd.latitude}`);
  console.log(`纬度：${crd.longitude}`);
  console.log(`误差：${crd.accuracy} 米`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

<a name="edbef700"></a>
# [Clipboard API](https://wangdoc.com/webapi/clipboard.html)

**Document.execCommand()**

```javascript
// 复制或剪切操作
const inputElement = document.querySelector('#input');
inputElement.select();
document.execCommand('copy');
// document.execCommand('cut')


// 粘贴
const pasteText = document.querySelector('#output');
pasteText.focus();
document.execCommand('paste');
```

**异步 Clipboard**

```javascript
const clipboardObj = navigator.clipboard;
```

异步方法，返回 Promise 对象

-  Clipboard.readText()：复制剪贴板里面的文本数据。 
-  Clipboard.read()：复制剪贴板里面的数据，可以是文本数据 
-  Clipboard.writeText()：将文本内容写入剪贴板。 
-  Clipboard.write()：将任意数据写入剪贴板，可以是文本数据或二进制数据 

```javascript
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        console.log(URL.createObjectURL(blob));
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}


async function copy() {
  const image = await fetch('kitten.png');
  const text = new Blob(['Cute sleeping kitten'], {type: 'text/plain'});
  const item = new ClipboardItem({
    'text/plain': text,
    'image/png': image
  });
  await navigator.clipboard.write([item]);
}
```

**copy事件和paste事件**

-  Event.clipboardData.setData(type, data)：修改剪贴板数据，需要指定数据类型。 
-  Event.clipboardData..getData(type)：获取剪贴板数据，需要指定数据类型。 
-  Event.clipboardData.clearData([type])：清除剪贴板数据，可以指定数据类型。如果不指定类型，将清除所有类型的数据。 
-  Event.clipboardData.items：一个类似数组的对象，包含了所有剪贴项，不过通常只有一个剪贴项。 
```javascript
const source = document.querySelector('.source');

source.addEventListener('copy', (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
  event.preventDefault();
});
```

<a name="ce281f2d"></a>
# [notification](https://developer.mozilla.org/zh-CN/docs/Web/API/notification)
```javascript
new Notification(title, options)
```

options

-  dir : 文字的方向；它的值可以是 auto（自动）, ltr（从左到右）, or rtl（从右到左） 
-  lang: 指定通知中所使用的语言。 
-  body: 通知中额外显示的字符串 
-  tag: 赋予通知一个ID，以便在必要的时候对通知进行刷新、替换或移除。 
-  icon: 一个图片的URL，将被用于显示通知的图标。 

Notification.permission 只读

-  denied (用户拒绝了通知的显示) 
-  granted (用户允许了通知的显示) 
-  default 

事件处理

-  Notification.onclick 
-  Notification.onshow 
-  Notification.onerror 
-  Notification.onclose 

method

-  Notification.requestPermission() 
-  Notification.close() 

```javascript
function notifyMe() {
  // 先检查浏览器是否支持
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // 检查用户是否同意接受通知
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // 否则我们需要向用户获取权限
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // 如果用户接受权限，我们就可以发起一条消息
      if (permission === "granted") {
         var notification = new Notification("Hi there!");
      }
    });
  }
  
}
```

<a name="baea45bf"></a>
# [FontFace](https://wangdoc.com/webapi/fontface.html)

控制字体加载  <br />  `new FontFace(family, source, descriptors) `

- family：字符串，表示字体名，写法与 CSS 的@font-face的font-family属性相同。
- source：字体文件的 URL（必须包括 CSS 的url()方法），或者是一个字体的 ArrayBuffer 对象。
- descriptors：对象，用来定制字体文件。可选。

属性

- FontFace.family：字符串，表示字体的名字，等同于 CSS 的font-family属性。
- FontFace.display：字符串，指定字体加载期间如何展示，等同于 CSS 的font-display属性。
   - auto（由浏览器决定）
   - block（字体加载期间，前3秒会显示不出内容，然后只要还没完成加载，就一直显示后备字体）
   - fallback（前100毫秒显示不出内容，后3秒显示后备字体，然后只要字体还没完成加载，就一直显示后备字体）
   - optional（前100毫秒显示不出内容，然后只要字体还没有完成加载，就一直显示后备字体）
   - swap（只要字体没有完成加载，就一直显示后备字体）。
- FontFace.style：字符串，等同于 CSS 的font-style属性。
- FontFace.weight：字符串，等同于 CSS 的font-weight属性。
- FontFace.stretch：字符串，等同于 CSS 的font-strentch属性。
- FontFace.unicodeRange：字符串，等同于descriptors对象的同名属性。
- FontFace.variant：字符串，等同于descriptors对象的同名属性。
- FontFace.featureSettings：字符串，等同于descriptors对象的同名属性。
- FontFace.status：字符串，表示字体的加载状态（unloaded、loading、loaded、error）。该属性只读。
- FontFace.loaded：返回一个 Promise 对象，字体加载成功或失败，会导致该 Promise 状态改变。该属性只读。


[IntersectionObserver](https://wangdoc.com/webapi/intersectionObserver.html)

交叉观察器
```javascript
var observer = new IntersectionObserver(callback [, options]);
observer.observe(target);    // 开始观察
observer.unobserve(element);    // 停止观察
observer.disconnect();    // 关闭观察器
```

IntersectionObserverEntry对象提供目标元素的信息

-  time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒 
-  target：被观察的目标元素，是一个 DOM 节点对象 
-  rootBounds：容器元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有容器元素（即直接相对于视口滚动），则返回null 
-  boundingClientRect：目标元素的矩形区域的信息 
-  intersectionRect：目标元素与视口（或容器元素）的交叉区域的信息 
-  intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0 

```javascript
// 视频元素完全进入视口的时候自动播放，离开视口的时候自动暂停

let video = document.querySelector('video');
let isPaused = false;

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio != 1  && !video.paused) {
      video.pause();
      isPaused = true;
    } else if (isPaused) {
      video.play();
      isPaused=false;
    }
  });
}, {threshold: 1});

observer.observe(video);
```


# [Intl.RelativeTimeFormat](https://wangdoc.com/webapi/intl-relativetimeformat.html)

```javascript
// 下面的配置对象，传入的都是默认值
const rtf = new Intl.RelativeTimeFormat('en', {
  localeMatcher: 'best fit', // 其他值：'lookup'
  style: 'long', // 其他值：'short' or 'narrow'
  numeric: 'always', // 其他值：'auto'
});

// Now, let’s try some special cases!

rtf.format(-1, 'day') // "1 day ago"
rtf.format(0, 'day') // "in 0 days"
rtf.format(1, 'day') // "in 1 day"
rtf.format(-1, 'week') // "1 week ago"
rtf.format(0, 'week') // "in 0 weeks"
rtf.format(1, 'week') // "in 1 week"
```


# [Page Lifecycle API](https://wangdoc.com/webapi/page-lifecycle.html)

![](https://www.wangbase.com/blogimg/asset/201811/bg2018110401.png#crop=0&crop=0&crop=1&crop=1&id=fHCkR&originHeight=491&originWidth=800&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

-  Active 阶段：网页处于可见状态，且拥有输入焦点。 
-  Passive 阶段：网页可见，但没有输入焦点，无法接受输入。UI 更新（比如动画）仍然在执行。只发生在桌面同时有多个窗口的情况。 
-  Hidden 阶段：桌面被其他窗口占据，网页不可见，但尚未冻结。UI 更新不再执行。 
-  Terminated 阶段：主动关闭窗口，或者在同一个窗口前往其他页面，导致当前页面开始被浏览器卸载并从内存中清除。 
-  Frozen 阶段：网页处于 Hidden 阶段的时间过久，用户又不关闭网页，浏览器就可能冻结网页 。网页不会再被分配 CPU 计算资源。 
-  Discarded 阶段：网页长时间处于 Frozen 阶段，用户又不唤醒页面， 浏览器会自动卸载网页，清除该网页的内存占用。 


# [Page Visibility API](https://wangdoc.com/webapi/page-visibility.html)

document.visibilityState

-  hidden：页面彻底不可见。 
-  visible：页面至少一部分可见。 
-  prerender：页面即将或正在渲染，处于不可见状态。 


# [Web Share API ](https://wangdoc.com/webapi/web-share-api.html)

```javascript
navigator.share({
  title: 'WebShare API Demo',
  url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
}).then(() => {
  console.log('Thanks for sharing!');
}).catch((error) => {
  console.error('Sharing error', error);
});

// 分享文件
if (navigator.canShare && navigator.canShare({ files: filesArray })) {
  navigator.share({
    files: filesArray,
    title: 'Vacation Pictures',
    text: 'Photos from September 27 to October 14.',
  })
  .then(() => console.log('Share was successful.'))
  .catch((error) => console.log('Sharing failed', error));
}
```

<a name="473e3014"></a>
# ——jQuery——

**基础语法：$(selector).action()**

-  $定义 jQuery 
-  选择符（selector）“查询”和“查找” HTML 元素 
-  jQuery 的 action() 执行对元素的操作 

文档就绪函数：防止文档在完全加载（就绪）之前运行 jQuery 代码
```javascript
$(document).ready(function(){

--- jQuery functions go here ----

});

//简化：
$(function () {
    // init...
});
```

示例
```javascript
<!DOCTYPE html>
<html>
<head>
<script src="/jquery/jquery-1.11.1.min.js"></script>
<script> 
$(document).ready(function(){
  $("button").click(function(){
    var div=$("div");  
    div.animate({left:'200px'},"slow");
    div.animate({fontSize:'4em'},"slow");
  });
});
</script> 
</head>

<body>

<button>开始动画</button>
<p>默认情况下，所有 HTML 元素的位置都是静态的，并且无法移动。如需对位置进行操作，记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute。</p>
<div style="background:#98bf21;height:100px;width:200px;position:absolute;">HELLO</div>

</body>
</html>
```


## 选择器
| 选择器 | 实例 | 选取 |
| --- | --- | --- |
| [*](https://www.w3school.com.cn/jquery/selector_all.asp) | $("*") | 所有元素 |
| [#id](https://www.w3school.com.cn/jquery/selector_id.asp) | $("#lastname") | id="lastname" 的元素 |
| [.class](https://www.w3school.com.cn/jquery/selector_class.asp) | $(".intro") | 所有 class="intro" 的元素 |
| [element](https://www.w3school.com.cn/jquery/selector_element.asp) | $("p") | 所有 <p> 元素 |
| ._class_._class_ | $(".intro.demo") | 所有 class="intro" 且 class="demo" 的元素 |
|   |   |   |
| [:first](https://www.w3school.com.cn/jquery/selector_first.asp) | $("p:first") | 第一个 <p> 元素 |
| [:last](https://www.w3school.com.cn/jquery/selector_last.asp) | $("p:last") | 最后一个 <p> 元素 |
| [:even](https://www.w3school.com.cn/jquery/selector_even.asp) | $("tr:even") | 所有偶数 <tr> 元素 |
| [:odd](https://www.w3school.com.cn/jquery/selector_odd.asp) | $("tr:odd") | 所有奇数 <tr> 元素 |
|   |   |   |
| [:eq(index)](https://www.w3school.com.cn/jquery/selector_eq.asp) | $("ul li:eq(3)") | 列表中的第四个元素（index 从 0 开始） |
| [:gt(no)](https://www.w3school.com.cn/jquery/selector_gt.asp) | $("ul li:gt(3)") | 列出 index 大于 3 的元素 |
| [:lt(no)](https://www.w3school.com.cn/jquery/selector_lt.asp) | $("ul li:lt(3)") | 列出 index 小于 3 的元素 |
| :not(_selector_) | $("input:not(:empty)") | 所有不为空的 input 元素 |
|   |   |   |
| [:header](https://www.w3school.com.cn/jquery/selector_header.asp) | $(":header") | 所有标题元素 <h1> - <h6> |
| [:animated](https://www.w3school.com.cn/jquery/selector_animated.asp) |   | 所有动画元素 |
|   |   |   |
| [:contains(text)](https://www.w3school.com.cn/jquery/selector_contains.asp) | $(":contains('W3School')") | 包含指定字符串的所有元素 |
| [:empty](https://www.w3school.com.cn/jquery/selector_empty.asp) | $(":empty") | 无子（元素）节点的所有元素 |
| :hidden | $("p:hidden") | 所有隐藏的 <p> 元素 |
| [:visible](https://www.w3school.com.cn/jquery/selector_visible.asp) | $("table:visible") | 所有可见的表格 |
|   |   |   |
| s1,s2,s3 | $("th,td,.intro") | 所有带有匹配选择的元素 |
|   |   |   |
| [[attribute]](https://www.w3school.com.cn/jquery/selector_attribute.asp) | $("[href]") | 所有带有 href 属性的元素 |
| [[attribute=value]](https://www.w3school.com.cn/jquery/selector_attribute_equal_value.asp) | $("[href='#']") | 所有 href 属性的值等于 "#" 的元素 |
| [[attribute!=value]](https://www.w3school.com.cn/jquery/selector_attribute_notequal_value.asp) | $("[href!='#']") | 所有 href 属性的值不等于 "#" 的元素 |
| [[attribute$=value]](https://www.w3school.com.cn/jquery/selector_attribute_end_value.asp) | $("[href$='.jpg']") | 所有 href 属性的值包含以 ".jpg" 结尾的元素 |
|   |   |   |
| [:input](https://www.w3school.com.cn/jquery/selector_input.asp) | $(":input") | 所有 <input> 元素 |
| [:text](https://www.w3school.com.cn/jquery/selector_input_text.asp) | $(":text") | 所有 type="text" 的 <input> 元素 |
| [:password](https://www.w3school.com.cn/jquery/selector_input_password.asp) | $(":password") | 所有 type="password" 的 <input> 元素 |
| [:radio](https://www.w3school.com.cn/jquery/selector_input_radio.asp) | $(":radio") | 所有 type="radio" 的 <input> 元素 |
| [:checkbox](https://www.w3school.com.cn/jquery/selector_input_checkbox.asp) | $(":checkbox") | 所有 type="checkbox" 的 <input> 元素 |
| [:submit](https://www.w3school.com.cn/jquery/selector_input_submit.asp) | $(":submit") | 所有 type="submit" 的 <input> 元素 |
| [:reset](https://www.w3school.com.cn/jquery/selector_input_reset.asp) | $(":reset") | 所有 type="reset" 的 <input> 元素 |
| [:button](https://www.w3school.com.cn/jquery/selector_input_button.asp) | $(":button") | 所有 type="button" 的 <input> 元素 |
| [:image](https://www.w3school.com.cn/jquery/selector_input_image.asp) | $(":image") | 所有 type="image" 的 <input> 元素 |
| [:file](https://www.w3school.com.cn/jquery/selector_input_file.asp) | $(":file") | 所有 type="file" 的 <input> 元素 |
|   |   |   |
| [:enabled](https://www.w3school.com.cn/jquery/selector_input_enabled.asp) | $(":enabled") | 所有激活的 input 元素 |
| [:disabled](https://www.w3school.com.cn/jquery/selector_input_disabled.asp) | $(":disabled") | 所有禁用的 input 元素 |
| [:selected](https://www.w3school.com.cn/jquery/selector_input_selected.asp) | $(":selected") | 所有被选取的 input 元素 |
| [:checked](https://www.w3school.com.cn/jquery/selector_input_checked.asp) | $(":checked") | 所有被选中的 input 元素 |


## 事件
| 方法 | 描述 |
| --- | --- |
| [bind()](https://www.w3school.com.cn/jquery/event_bind.asp) | 向匹配元素附加一个或更多事件处理器 |
| [blur()](https://www.w3school.com.cn/jquery/event_blur.asp) | 触发、或将函数绑定到指定元素的 blur 事件 |
| [change()](https://www.w3school.com.cn/jquery/event_change.asp) | 触发、或将函数绑定到指定元素的 change 事件 |
| [click()](https://www.w3school.com.cn/jquery/event_click.asp) | 触发、或将函数绑定到指定元素的 click 事件 |
| [dblclick()](https://www.w3school.com.cn/jquery/event_dblclick.asp) | 触发、或将函数绑定到指定元素的 double click 事件 |
| [delegate()](https://www.w3school.com.cn/jquery/event_delegate.asp) | 向匹配元素的当前或未来的子元素附加一个或多个事件处理器 |
| [die()](https://www.w3school.com.cn/jquery/event_die.asp) | 移除所有通过 live() 函数添加的事件处理程序。 |
| [error()](https://www.w3school.com.cn/jquery/event_error.asp) | 触发、或将函数绑定到指定元素的 error 事件 |
| [event.isDefaultPrevented()](https://www.w3school.com.cn/jquery/event_isdefaultprevented.asp) | 返回 event 对象上是否调用了 event.preventDefault()。 |
| [event.pageX](https://www.w3school.com.cn/jquery/event_pagex.asp) | 相对于文档左边缘的鼠标位置。 |
| [event.pageY](https://www.w3school.com.cn/jquery/event_pagey.asp) | 相对于文档上边缘的鼠标位置。 |
| [event.preventDefault()](https://www.w3school.com.cn/jquery/event_preventdefault.asp) | 阻止事件的默认动作。 |
| [event.result](https://www.w3school.com.cn/jquery/event_result.asp) | 包含由被指定事件触发的事件处理器返回的最后一个值。 |
| [event.target](https://www.w3school.com.cn/jquery/event_target.asp) | 触发该事件的 DOM 元素。 |
| [event.timeStamp](https://www.w3school.com.cn/jquery/event_timeStamp.asp) | 该属性返回从 1970 年 1 月 1 日到事件发生时的毫秒数。 |
| [event.type](https://www.w3school.com.cn/jquery/event_type.asp) | 描述事件的类型。 |
| [event.which](https://www.w3school.com.cn/jquery/event_which.asp) | 指示按了哪个键或按钮。 |
| [focus()](https://www.w3school.com.cn/jquery/event_focus.asp) | 触发、或将函数绑定到指定元素的 focus 事件 |
| [keydown()](https://www.w3school.com.cn/jquery/event_keydown.asp) | 触发、或将函数绑定到指定元素的 key down 事件 |
| [keypress()](https://www.w3school.com.cn/jquery/event_keypress.asp) | 触发、或将函数绑定到指定元素的 key press 事件 |
| [keyup()](https://www.w3school.com.cn/jquery/event_keyup.asp) | 触发、或将函数绑定到指定元素的 key up 事件 |
| [live()](https://www.w3school.com.cn/jquery/event_live.asp) | 为当前或未来的匹配元素添加一个或多个事件处理器 |
| [load()](https://www.w3school.com.cn/jquery/event_load.asp) | 触发、或将函数绑定到指定元素的 load 事件 |
| [mousedown()](https://www.w3school.com.cn/jquery/event_mousedown.asp) | 触发、或将函数绑定到指定元素的 mouse down 事件 |
| [mouseenter()](https://www.w3school.com.cn/jquery/event_mouseenter.asp) | 触发、或将函数绑定到指定元素的 mouse enter 事件 |
| [mouseleave()](https://www.w3school.com.cn/jquery/event_mouseleave.asp) | 触发、或将函数绑定到指定元素的 mouse leave 事件 |
| [mousemove()](https://www.w3school.com.cn/jquery/event_mousemove.asp) | 触发、或将函数绑定到指定元素的 mouse move 事件 |
| [mouseout()](https://www.w3school.com.cn/jquery/event_mouseout.asp) | 触发、或将函数绑定到指定元素的 mouse out 事件 |
| [mouseover()](https://www.w3school.com.cn/jquery/event_mouseover.asp) | 触发、或将函数绑定到指定元素的 mouse over 事件 |
| [mouseup()](https://www.w3school.com.cn/jquery/event_mouseup.asp) | 触发、或将函数绑定到指定元素的 mouse up 事件 |
| [one()](https://www.w3school.com.cn/jquery/event_one.asp) | 向匹配元素添加事件处理器。每个元素只能触发一次该处理器。 |
| [ready()](https://www.w3school.com.cn/jquery/event_ready.asp) | 文档就绪事件（当 HTML 文档就绪可用时） |
| [resize()](https://www.w3school.com.cn/jquery/event_resize.asp) | 触发、或将函数绑定到指定元素的 resize 事件 |
| [scroll()](https://www.w3school.com.cn/jquery/event_scroll.asp) | 触发、或将函数绑定到指定元素的 scroll 事件 |
| [select()](https://www.w3school.com.cn/jquery/event_select.asp) | 触发、或将函数绑定到指定元素的 select 事件 |
| [submit()](https://www.w3school.com.cn/jquery/event_submit.asp) | 触发、或将函数绑定到指定元素的 submit 事件 |
| [toggle()](https://www.w3school.com.cn/jquery/event_toggle.asp) | 绑定两个或多个事件处理器函数，当发生轮流的 click 事件时执行。 |
| [trigger()](https://www.w3school.com.cn/jquery/event_trigger.asp) | 所有匹配元素的指定事件 |
| [triggerHandler()](https://www.w3school.com.cn/jquery/event_triggerhandler.asp) | 第一个被匹配元素的指定事件 |
| [unbind()](https://www.w3school.com.cn/jquery/event_unbind.asp) | 从匹配元素移除一个被添加的事件处理器 |
| [undelegate()](https://www.w3school.com.cn/jquery/event_undelegate.asp) | 从匹配元素移除一个被添加的事件处理器，现在或将来 |
| [unload()](https://www.w3school.com.cn/jquery/event_unload.asp) | 触发、或将函数绑定到指定元素的 unload 事件 |


## 效果函数
| 方法 | 描述 |
| --- | --- |
| [animate()](https://www.w3school.com.cn/jquery/effect_animate.asp) | 对被选元素应用“自定义”的动画 |
| [clearQueue()](https://www.w3school.com.cn/jquery/effect_clearqueue.asp) | 对被选元素移除所有排队的函数（仍未运行的） |
| delay() | 对被选元素的所有排队函数（仍未运行）设置延迟 |
| dequeue() | 运行被选元素的下一个排队函数 |
| [fadeIn()](https://www.w3school.com.cn/jquery/effect_fadein.asp) | 逐渐改变被选元素的不透明度，从隐藏到可见 |
| [fadeOut()](https://www.w3school.com.cn/jquery/effect_fadeout.asp) | 逐渐改变被选元素的不透明度，从可见到隐藏 |
| [fadeTo()](https://www.w3school.com.cn/jquery/effect_fadeto.asp) | 把被选元素逐渐改变至给定的不透明度 |
| [hide()](https://www.w3school.com.cn/jquery/effect_hide.asp) | 隐藏被选的元素 |
| queue() | 显示被选元素的排队函数 |
| [show()](https://www.w3school.com.cn/jquery/effect_show.asp) | 显示被选的元素 |
| [slideDown()](https://www.w3school.com.cn/jquery/effect_slidedown.asp) | 通过调整高度来滑动显示被选元素 |
| [slideToggle()](https://www.w3school.com.cn/jquery/effect_slidetoggle.asp) | 对被选元素进行滑动隐藏和滑动显示的切换 |
| [slideUp()](https://www.w3school.com.cn/jquery/effect_slideup.asp) | 通过调整高度来滑动隐藏被选元素 |
| [stop()](https://www.w3school.com.cn/jquery/effect_stop.asp) | 停止在被选元素上运行动画 |
| [toggle()](https://www.w3school.com.cn/jquery/effect_toggle.asp) | 对被选元素进行隐藏和显示的切换 |


## 文档操作
| 方法 | 描述 |
| --- | --- |
| [addClass()](https://www.w3school.com.cn/jquery/attributes_addclass.asp) | 向匹配的元素添加指定的类名。 |
| [after()](https://www.w3school.com.cn/jquery/manipulation_after.asp) | 在匹配的元素之后插入内容。 |
| [append()](https://www.w3school.com.cn/jquery/manipulation_append.asp) | 向匹配元素集合中的每个元素结尾插入由参数指定的内容。 |
| [appendTo()](https://www.w3school.com.cn/jquery/manipulation_appendto.asp) | 向目标结尾插入匹配元素集合中的每个元素。 |
| [attr()](https://www.w3school.com.cn/jquery/attributes_attr.asp) | 设置或返回匹配元素的属性和值。 |
| [before()](https://www.w3school.com.cn/jquery/manipulation_before.asp) | 在每个匹配的元素之前插入内容。 |
| [clone()](https://www.w3school.com.cn/jquery/manipulation_clone.asp) | 创建匹配元素集合的副本。 |
| [detach()](https://www.w3school.com.cn/jquery/manipulation_detach.asp) | 从 DOM 中移除匹配元素集合。 |
| [empty()](https://www.w3school.com.cn/jquery/manipulation_empty.asp) | 删除匹配的元素集合中所有的子节点。 |
| [hasClass()](https://www.w3school.com.cn/jquery/attributes_hasclass.asp) | 检查匹配的元素是否拥有指定的类。 |
| [html()](https://www.w3school.com.cn/jquery/manipulation_html.asp) | 设置或返回匹配的元素集合中的 HTML 内容。 |
| [insertAfter()](https://www.w3school.com.cn/jquery/manipulation_insertafter.asp) | 把匹配的元素插入到另一个指定的元素集合的后面。 |
| [insertBefore()](https://www.w3school.com.cn/jquery/manipulation_insertbefore.asp) | 把匹配的元素插入到另一个指定的元素集合的前面。 |
| [prepend()](https://www.w3school.com.cn/jquery/manipulation_prepend.asp) | 向匹配元素集合中的每个元素开头插入由参数指定的内容。 |
| [prependTo()](https://www.w3school.com.cn/jquery/manipulation_perpendto.asp) | 向目标开头插入匹配元素集合中的每个元素。 |
| [remove()](https://www.w3school.com.cn/jquery/manipulation_remove.asp) | 移除所有匹配的元素。 |
| [removeAttr()](https://www.w3school.com.cn/jquery/attributes_removeattr.asp) | 从所有匹配的元素中移除指定的属性。 |
| [removeClass()](https://www.w3school.com.cn/jquery/attributes_removeclass.asp) | 从所有匹配的元素中删除全部或者指定的类。 |
| [replaceAll()](https://www.w3school.com.cn/jquery/manipulation_replaceall.asp) | 用匹配的元素替换所有匹配到的元素。 |
| [replaceWith()](https://www.w3school.com.cn/jquery/manipulation_replacewith.asp) | 用新内容替换匹配的元素。 |
| [text()](https://www.w3school.com.cn/jquery/manipulation_text.asp) | 设置或返回匹配元素的内容。 |
| [toggleClass()](https://www.w3school.com.cn/jquery/attributes_toggleclass.asp) | 从匹配的元素中添加或删除一个类。 |
| [unwrap()](https://www.w3school.com.cn/jquery/manipulation_unwrap.asp) | 移除并替换指定元素的父元素。 |
| [val()](https://www.w3school.com.cn/jquery/attributes_val.asp) | 设置或返回匹配元素的值。 |
| [wrap()](https://www.w3school.com.cn/jquery/manipulation_wrap.asp) | 把匹配的元素用指定的内容或元素包裹起来。 |
| [wrapAll()](https://www.w3school.com.cn/jquery/manipulation_wrapall.asp) | 把所有匹配的元素用指定的内容或元素包裹起来。 |
| [wrapinner()](https://www.w3school.com.cn/jquery/manipulation_wrapinner.asp) | 将每一个匹配的元素的子内容用指定的内容或元素包裹起来。 |


## 属性操作
| 方法 | 描述 |
| --- | --- |
| [addClass()](https://www.w3school.com.cn/jquery/attributes_addclass.asp) | 向匹配的元素添加指定的类名。 |
| [attr()](https://www.w3school.com.cn/jquery/attributes_attr.asp) | 设置或返回匹配元素的属性和值。 |
| [hasClass()](https://www.w3school.com.cn/jquery/attributes_hasclass.asp) | 检查匹配的元素是否拥有指定的类。 |
| [html()](https://www.w3school.com.cn/jquery/manipulation_html.asp) | 设置或返回匹配的元素集合中的 HTML 内容。 |
| [removeAttr()](https://www.w3school.com.cn/jquery/attributes_removeattr.asp) | 从所有匹配的元素中移除指定的属性。 |
| [removeClass()](https://www.w3school.com.cn/jquery/attributes_removeclass.asp) | 从所有匹配的元素中删除全部或者指定的类。 |
| [toggleClass()](https://www.w3school.com.cn/jquery/attributes_toggleclass.asp) | 从匹配的元素中添加或删除一个类。 |
| [val()](https://www.w3school.com.cn/jquery/attributes_val.asp) | 设置或返回匹配元素的值。 |



## CSS操作
| CSS 属性 | 描述 |
| --- | --- |
| [css()](https://www.w3school.com.cn/jquery/css_css.asp) | 设置或返回匹配元素的样式属性。 |
| [height()](https://www.w3school.com.cn/jquery/css_height.asp) | 设置或返回匹配元素的高度。 |
| [offset()](https://www.w3school.com.cn/jquery/css_offset.asp) | 返回第一个匹配元素相对于文档的位置。 |
| [offsetParent()](https://www.w3school.com.cn/jquery/css_offsetparent.asp) | 返回最近的定位祖先元素。 |
| [position()](https://www.w3school.com.cn/jquery/css_position.asp) | 返回第一个匹配元素相对于父元素的位置。 |
| [scrollLeft()](https://www.w3school.com.cn/jquery/css_scrollleft.asp) | 设置或返回匹配元素相对滚动条左侧的偏移。 |
| [scrollTop()](https://www.w3school.com.cn/jquery/css_scrolltop.asp) | 设置或返回匹配元素相对滚动条顶部的偏移。 |
| [width()](https://www.w3school.com.cn/jquery/css_width.asp) | 设置或返回匹配元素的宽度。 |


## Ajax 操作
| 函数 | 描述 |
| --- | --- |
| [jQuery.ajax()](https://www.w3school.com.cn/jquery/ajax_ajax.asp) | 执行异步 HTTP (Ajax) 请求。 |
| [.ajaxComplete()](https://www.w3school.com.cn/jquery/ajax_ajaxcomplete.asp) | 当 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxError()](https://www.w3school.com.cn/jquery/ajax_ajaxerror.asp) | 当 Ajax 请求完成且出现错误时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxSend()](https://www.w3school.com.cn/jquery/ajax_ajaxsend.asp) | 在 Ajax 请求发送之前显示一条消息。 |
| [jQuery.ajaxSetup()](https://www.w3school.com.cn/jquery/ajax_ajaxsetup.asp) | 设置将来的 Ajax 请求的默认值。 |
| [.ajaxStart()](https://www.w3school.com.cn/jquery/ajax_ajaxstart.asp) | 当首个 Ajax 请求完成开始时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxStop()](https://www.w3school.com.cn/jquery/ajax_ajaxstop.asp) | 当所有 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxSuccess()](https://www.w3school.com.cn/jquery/ajax_ajaxsuccess.asp) | 当 Ajax 请求成功完成时显示一条消息。 |
| [jQuery.get()](https://www.w3school.com.cn/jquery/ajax_get.asp) | 使用 HTTP GET 请求从服务器加载数据。 |
| [jQuery.getJSON()](https://www.w3school.com.cn/jquery/ajax_getjson.asp) | 使用 HTTP GET 请求从服务器加载 JSON 编码数据。 |
| [jQuery.getScript()](https://www.w3school.com.cn/jquery/ajax_getscript.asp) | 使用 HTTP GET 请求从服务器加载 JavaScript 文件，然后执行该文件。 |
| [.load()](https://www.w3school.com.cn/jquery/ajax_load.asp) | 从服务器加载数据，然后把返回到 HTML 放入匹配元素。 |
| [jQuery.param()](https://www.w3school.com.cn/jquery/ajax_param.asp) | 创建数组或对象的序列化表示，适合在 URL 查询字符串或 Ajax 请求中使用。 |
| [jQuery.post()](https://www.w3school.com.cn/jquery/ajax_post.asp) | 使用 HTTP POST 请求从服务器加载数据。 |
| [.serialize()](https://www.w3school.com.cn/jquery/ajax_serialize.asp) | 将表单内容序列化为字符串。 |
| [.serializeArray()](https://www.w3school.com.cn/jquery/ajax_serializearray.asp) | 序列化表单元素，返回 JSON 数据结构数据。 |



## 遍历
| 函数 | 描述 |
| --- | --- |
| [.add()](https://www.w3school.com.cn/jquery/traversing_add.asp) | 将元素添加到匹配元素的集合中。 |
| [.andSelf()](https://www.w3school.com.cn/jquery/traversing_andSelf.asp) | 把堆栈中之前的元素集添加到当前集合中。 |
| [.children()](https://www.w3school.com.cn/jquery/traversing_children.asp) | 获得匹配元素集合中每个元素的所有子元素。 |
| [.closest()](https://www.w3school.com.cn/jquery/traversing_closest.asp) | 从元素本身开始，逐级向上级元素匹配，并返回最先匹配的祖先元素。 |
| [.contents()](https://www.w3school.com.cn/jquery/traversing_contents.asp) | 获得匹配元素集合中每个元素的子元素，包括文本和注释节点。 |
| [.each()](https://www.w3school.com.cn/jquery/traversing_each.asp) | 对 jQuery 对象进行迭代，为每个匹配元素执行函数。 |
| [.end()](https://www.w3school.com.cn/jquery/traversing_end.asp) | 结束当前链中最近的一次筛选操作，并将匹配元素集合返回到前一次的状态。 |
| [.eq()](https://www.w3school.com.cn/jquery/traversing_eq.asp) | 将匹配元素集合缩减为位于指定索引的新元素。 |
| [.filter()](https://www.w3school.com.cn/jquery/traversing_filter.asp) | 将匹配元素集合缩减为匹配选择器或匹配函数返回值的新元素。 |
| [.find()](https://www.w3school.com.cn/jquery/traversing_find.asp) | 获得当前匹配元素集合中每个元素的后代，由选择器进行筛选。 |
| [.first()](https://www.w3school.com.cn/jquery/traversing_first.asp) | 将匹配元素集合缩减为集合中的第一个元素。 |
| [.has()](https://www.w3school.com.cn/jquery/traversing_has.asp) | 将匹配元素集合缩减为包含特定元素的后代的集合。 |
| [.is()](https://www.w3school.com.cn/jquery/traversing_is.asp) | 根据选择器检查当前匹配元素集合，如果存在至少一个匹配元素，则返回 true。 |
| [.last()](https://www.w3school.com.cn/jquery/traversing_last.asp) | 将匹配元素集合缩减为集合中的最后一个元素。 |
| [.map()](https://www.w3school.com.cn/jquery/traversing_map.asp) | 把当前匹配集合中的每个元素传递给函数，产生包含返回值的新 jQuery 对象。 |
| [.next()](https://www.w3school.com.cn/jquery/traversing_next.asp) | 获得匹配元素集合中每个元素紧邻的同辈元素。 |
| [.nextAll()](https://www.w3school.com.cn/jquery/traversing_nextall.asp) | 获得匹配元素集合中每个元素之后的所有同辈元素，由选择器进行筛选（可选）。 |
| [.nextUntil()](https://www.w3school.com.cn/jquery/traversing_nextuntil.asp) | 获得每个元素之后所有的同辈元素，直到遇到匹配选择器的元素为止。 |
| [.not()](https://www.w3school.com.cn/jquery/traversing_not.asp) | 从匹配元素集合中删除元素。 |
| [.offsetParent()](https://www.w3school.com.cn/jquery/traversing_offsetparent.asp) | 获得用于定位的第一个父元素。 |
| [.parent()](https://www.w3school.com.cn/jquery/traversing_parent.asp) | 获得当前匹配元素集合中每个元素的父元素，由选择器筛选（可选）。 |
| [.parents()](https://www.w3school.com.cn/jquery/traversing_parents.asp) | 获得当前匹配元素集合中每个元素的祖先元素，由选择器筛选（可选）。 |
| [.parentsUntil()](https://www.w3school.com.cn/jquery/traversing_parentsuntil.asp) | 获得当前匹配元素集合中每个元素的祖先元素，直到遇到匹配选择器的元素为止。 |
| [.prev()](https://www.w3school.com.cn/jquery/traversing_prev.asp) | 获得匹配元素集合中每个元素紧邻的前一个同辈元素，由选择器筛选（可选）。 |
| [.prevAll()](https://www.w3school.com.cn/jquery/traversing_prevall.asp) | 获得匹配元素集合中每个元素之前的所有同辈元素，由选择器进行筛选（可选）。 |
| [.prevUntil()](https://www.w3school.com.cn/jquery/traversing_prevuntil.asp) | 获得每个元素之前所有的同辈元素，直到遇到匹配选择器的元素为止。 |
| [.siblings()](https://www.w3school.com.cn/jquery/traversing_siblings.asp) | 获得匹配元素集合中所有元素的同辈元素，由选择器筛选（可选）。 |
| [.slice()](https://www.w3school.com.cn/jquery/traversing_slice.asp) | 将匹配元素集合缩减为指定范围的子集。 |




## 数据
| 函数 | 描述 |
| --- | --- |
| [.clearQueue()](https://www.w3school.com.cn/jquery/data_clearqueue.asp) | 从队列中删除所有未运行的项目。 |
| [.data()](https://www.w3school.com.cn/jquery/data_data.asp) | 存储与匹配元素相关的任意数据。 |
| [jQuery.data()](https://www.w3school.com.cn/jquery/data_jquery_data.asp) | 存储与指定元素相关的任意数据。 |
| [.dequeue()](https://www.w3school.com.cn/jquery/data_dequeue.asp) | 从队列最前端移除一个队列函数，并执行它。 |
| [jQuery.dequeue()](https://www.w3school.com.cn/jquery/data_jquery_dequeue.asp) | 从队列最前端移除一个队列函数，并执行它。 |
| [jQuery.hasData()](https://www.w3school.com.cn/jquery/data_hasdata.asp) | 存储与匹配元素相关的任意数据。 |
| [.queue()](https://www.w3school.com.cn/jquery/data_queue.asp) | 显示或操作匹配元素所执行函数的队列。 |
| [jQuery.queue()](https://www.w3school.com.cn/jquery/data_jquery_queue.asp) | 显示或操作匹配元素所执行函数的队列。 |
| [.removeData()](https://www.w3school.com.cn/jquery/data_removedata.asp) | 移除之前存放的数据。 |
| [jQuery.removeData()](https://www.w3school.com.cn/jquery/data_jquery_removedata.asp) | 移除之前存放的数据。 |



## DOM 元素方法
| 函数 | 描述 |
| --- | --- |
| [.get()](https://www.w3school.com.cn/jquery/dom_element_methods_get.asp) | 获得由选择器指定的 DOM 元素。 |
| [.index()](https://www.w3school.com.cn/jquery/dom_element_methods_index.asp) | 返回指定元素相对于其他指定元素的 index 位置。 |
| [.size()](https://www.w3school.com.cn/jquery/dom_element_methods_size.asp) | 返回被 jQuery 选择器匹配的元素的数量。 |
| [.toArray()](https://www.w3school.com.cn/jquery/dom_element_methods_toarray.asp) | 以数组的形式返回 jQuery 选择器匹配的元素。 |


## 核心函数
| 函数 | 描述 |
| --- | --- |
| [jQuery()](https://www.w3school.com.cn/jquery/core_jquery.asp) | 接受一个字符串，其中包含了用于匹配元素集合的 CSS 选择器。 |
| [jQuery.noConflict()](https://www.w3school.com.cn/jquery/core_noconflict.asp) | 运行这个函数将变量 $ 的控制权让渡给第一个实现它的那个库。 |


## 属性
| 属性 | 描述 |
| --- | --- |
| [context](https://www.w3school.com.cn/jquery/prop_context.asp) | 在版本 1.10 中被弃用。包含传递给 jQuery() 的原始上下文。 |
| [jquery](https://www.w3school.com.cn/jquery/prop_jquery.asp) | 包含 jQuery 版本号。 |
| [jQuery.fx.interval](https://www.w3school.com.cn/jquery/prop_jquery_fx_interval.asp) | 改变以毫秒计的动画速率。 |
| [jQuery.fx.off](https://www.w3school.com.cn/jquery/prop_jquery_fx_off.asp) | 全局禁用/启用所有动画。 |
| [jQuery.support](https://www.w3school.com.cn/jquery/prop_jquery_support.asp) | 表示不同浏览器特性或漏洞的属性集合（用于 jQuery 内部使用）。 |
| [length](https://www.w3school.com.cn/jquery/prop_length.asp) | 包含 jQuery 对象中的元素数目。 |


**扩展$.fn**

```javascript
$.fn.highlight1 = function () {
    // this已绑定为当前jQuery对象:
    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
    return this;  //助于链式操作
}
```
