---
title: Markdown
created_at: 2022-02-01T05:44:36.000Z
updated_at: 2022-02-20T12:02:12.000Z
word_count: 1205
---  
## Markdown
> 一种轻量级标记语言，在 2004 由约翰·格鲁伯（John Gruber）创建。
> Markdown 编写的文档可以导出 HTML、Word、图像、PDF、Epub 等多种格式的文档。


**Reference**

- [markdown-cheatsheet](https://github.com/tchapi/markdown-cheatsheet)

## Heading
文字下方使用 `=` , `-` 标记一级，二级标题
## 一级标题
### 二级标题
```markdown
===
H1 text

---
H2 text
```

使用多个 # 号加空格表示 1-6 级标题，级别等同个数
## 一级标题
### 二级标题
#### 三级标题
##### 四级标题
###### 五级标题
####### 六级标题
```markdown
# Heading 1
## Heading 2
### 3
#### 4
##### 5
###### 6
```

## Text
纯文本：没有特殊的格式，换行是两个以上空格加上回车  <br />  _斜体文本_  <br />  **粗体文本**  <br />  **_粗斜体文本_**  <br />  ~~删除~~  <br />  高亮
```markdown
Common text

_Emphasized text_ or *Emphasized text*
__Strong text__ or **Strong text**
___Strong emphasized text___ or ***Strong emphasized text***
~~Strikethrough text~~


==highlight==
```

## Horizontal line

---

一行中用三个以上的`*`、`-`、`底线 _`来建立一个分隔线，行内不能有其他东西，可以在中间插入空格
```markdown
---
_ _ _
* * *
```

## 引用
> 区块
> > 引用

可嵌套
```markdown
> Blockquote
>> Nested Blockquote
```
**脚注**  <br />  带有脚注的文本[[1]](#fn1)。
```markdown
[^脚注名]

[^脚注名]: 对脚注的说明
```

## 链接
`格式：[链接名称](链接地址 "可选标题") or <链接地址>`  <br />  `[Named Link](https://google.com "Named link title") and http://www.google.fr/ or <http://example.com/>`

这是一个链接 [markdown](https://www.appinn.com/markdown/index.html#html)

## 图片
`格式：![属性文本](图片地址 "可选标题")`  <br />  ![](./assets/1645356478157-0fe5cb32-9b8c-424e-babd-e49ce97399e4.png)RUNOOB


## 代码
行内代码：用一对反引号（`）包裹  <br />  C语言的 `printf()` 函数
```markdown
C语言的 `printf()` 函数
```

代码块：用 ``` 包裹一段代码（可以指定一种语言）
```
string s("markdown");
```
```markdown
```C++
string s("markdown");
```
```

## 列表
**无序列表**  <br />  使用`星号(*)`、`加号(+)`或是`减号(-)`作为列表标记  <br />  列表嵌套需在子列表中的选项添加**四个空格**

- Bullet list 
   - Nested bullet 
      - Sub-nested bullet etc
- Bullet list item 2
```markdown
* Bullet list
    * Nested bullet
        * Sub-nested bullet etc
* Bullet list item 2

-OR-

- Bullet list
    - Nested bullet
        - Sub-nested bullet etc
- Bullet list item 2 
```

**有序列表**  <br />  使用`数字加上 . 号`来表示

1. A numbered list 
   1. A nested numbered list
   2. Which is numbered
2. Which is numbered
```markdown
1. A numbered list
    1. A nested numbered list
    2. Which is numbered
2. Which is numbered
```
混合列表

1. 第一项：
   - 第一项嵌套的第一个元素
   - 第一项嵌套的第二个元素
2. 第二项：
   - 第二项嵌套的第一个元素
   - 第二项嵌套的第二个元素


**任务清单**

- [ ] An uncompleted task
- [x] A completed task
```markdown
- [ ] An uncompleted task
- [x] A completed task
```

## 表格
用` | `来分隔不同的单元格  <br />  用` - `来分隔表头和其他行

| 表头 | 表头 |
| --- | --- |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

```markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```
对齐方式：

- -: 设置内容和标题栏居右对齐
- :- 设置内容和标题栏居左对齐
- :-: 设置内容和标题栏居中对齐
| 左对齐 | 右对齐 | 居中对齐 |
| --- | --- | --- |
| 左 | 右 | 中 |
| 单元格 | 单元格 | 单元格 |

```markdown
Left aligned Header | Right aligned Header | Center aligned Header
| :--- | ---: | :---:
Content Cell  | Content Cell | Content Cell
Content Cell  | Content Cell | Content Cell
```

## 转义
使用`反斜杠(\)`转义特殊字符  <br />  支持以下符号前面加上反斜杠来帮助插入普通的符号：
> \   反斜线
> `    反引号
> *   星号
> _   下划线
> {}   花括号
> []   方括号
> ()   小括号
> 井号
> +   加号
> -   减号
> .    英文句点
> !    感叹号


## 流程图
一段流程图语法以 ```  开头，以 ``` 结尾  <br />  在 ``` 后另起一行，书写graph XX，用以确定将要绘制的流程图及其类型（XX表示流程图类型）。  <br />  流程图分为竖向和横向两大类，竖向包括自上而下和自下而上两种顺序，横向包括从右到左和从左到右两种顺序。  <br />  其对应语法分别为：graph TB/graph BT/graph RL/graph LR。  <br />  A---B 无箭头  <br />  A-->B 有箭头  <br />  A-->|插入文本|B  <br />  TB - top bottom（自上而下）
```
graph TB
A-->B
```
BT - bottom top（自下而上）
```
graph BT
A-->B
```
RL - right left（从右到左）
```
graph RL
A-->B
```
LR - left right（从左到右）
```
graph LR
A[A]---|插入文本|B[B]
B-->|插入文本|Y
```
圆形(())
```
graph TB
A((圆))
```
长方形[]
```
graph TB
A[长方形]
```
菱形{}
```
graph TB
A{菱形}
```
## 甘特图
甘特图能够将你最近的计划直观地显示出来  <br />  以 ```  开头，以 ``` 结尾  <br />  在 ``` 后另起一行，书写gantt  <br />  用dateFormat YYYY-MM-DD规定时间轴，title （标题文本）表示甘特图标题。



[GitHub Flavored Markdown 规范](https://github.github.com/gfm/)

---

1. 对脚注的说明 [↩︎](#fnref1)
