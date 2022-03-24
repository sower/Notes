
# [Emmet](https://emmet.io/)
一个能大幅度提高前端开发效率的工具，能够实现 HTML、CSS 的快速编写。

**基本语法**

- html初始结构	！
- #id .class
- >子节点 +兄弟节点 ^上级节点
- 重复*
- (分组)
- 属性[attr]
- 编号$
- {文本}
- 隐式标签

示例
```html
div+div>p>span+em^^bq
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
h$[title=item$]{Header $}*3
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```

# Performance
