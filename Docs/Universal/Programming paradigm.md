
**程序设计（programming）**  <br />  给出解决特定问题程序的过程，软件开发过程中的重要步骤。  <br />  程序设计往往以某种程序设计语言为工具，给出这种语言下的程序。  <br />  程序设计过程一般包括分析、设计、编码、测试、调试等不同阶段。

**编程范式（Programming paradigm）**：一类典型的编程风格，是指从事软件工程的一类典型的风格



# —— 声明式编程（Declarative programming）——
描述目标的性质，让电脑明白目标，而非流程。声明式编程不用告诉电脑问题领域，从而避免随之而来的副作用。




# 函数式编程（Functional programming）

[JavaScript 函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese)

理论基础——[λ演算](https://zh.wikipedia.org/wiki/%CE%9B%E6%BC%94%E7%AE%97)（lambda calculus）

- 函数是[第一等公民](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html)：既可以作为其它函数的参数（输入值），也可以从函数中返回（输入值），被修改或者被分配给一个变量
- 将计算过程分解成可复用的函数
- 只有[纯的](https://zh.wikipedia.org/wiki/%E7%BA%AF%E5%87%BD%E6%95%B0)、没有[副作用](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E5%89%AF%E4%BD%9C%E7%94%A8)的函数，才是合格的函数。

**子程序**（subroutine, subprogram, callable unit）：一个大型程序中的某部分代码，由一个或多个语句块组成。它负责完成某项特定任务，而且相较于其他代码，具备相对的独立性。

- **函数（function）：一种子程序，利用函数名称，可以接收回传值**
- **过程（procedure）：一种子程序，它能够接受不同的引数，来运行某些特别的动作**
- **方法（method）：在**[面向对象编程](https://zh.wikipedia.org/wiki/%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88)**语言中，**[类](https://zh.wikipedia.org/wiki/%E7%B1%BB_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))**或**[对象](https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))**中的子程序**

  <br />  

## 函数的合成（compose）
数据在由纯函数组成的管道中传递，可以用简单如交换律、结合律、分配律
```javascript
compose(f, compose(g, h))
// 等同于
compose(compose(f, g), h)
// 等同于
compose(f, g, h)
```
![](http://www.ruanyifeng.com/blogimg/asset/2017/bg2017022209.png#crop=0&crop=0&crop=1&crop=1&id=Ck0Mc&originHeight=313&originWidth=800&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 柯里化(curry)
把一个多参数的函数，转化为单参数函数
```javascript
// 柯里化之前
function add(x, y) {
  return x + y;
}
add(1, 2) // 3
// 柯里化之后
function addX(y) {
  return function (x) {
    return x + y;
  };
}
addX(2)(1) // 3
```


## 函子（Functor）
标志：容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。
```javascript
class Functor {
  constructor(val) { 
    this.val = val; 
  }
  map(f) {
    return new Functor(f(this.val));
  }
}
// 一般约定，函子有一个of方法，用来生成新的容器。
Functor.of = function(val) {
  return new Functor(val);
};
Functor.of(2).map(function (two) {
  return two + 2;
});
// Functor(4)
```

Maybe 函子
```javascript
class Maybe extends Functor {
  map(f) {
    return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);    // 设置了空值检查
  }
}
```

Either 函子  <br />  内部有两个值：左值（Left）和右值（Right）。右值是正常情况下使用的值，左值是右值不存在时使用的默认值。
```javascript
class Either extends Functor {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  map(f) {
    return this.right ? 
      Either.of(this.left, f(this.right)) :
      Either.of(f(this.left), this.right);
  }
}
Either.of = function (left, right) {
  return new Either(left, right);
};
// 使用
var addOne = function (x) {
  return x + 1;
};
Either.of(5, 6).map(addOne);
// Either(5, 7);
Either.of(1, null).map(addOne);
// Either(2, null);
```
条件运算if...else  <br />  代替try...catch，使用左值表示错误

ap 函子  <br />  部署了applicative（应用）方法的函子
```javascript
class Ap extends Functor {
  ap(F) {                                     // 参数是另一个函子
    return Ap.of(this.val(F.val));
  }
}
```

对于那些多参数的函数，可以从多个容器之中取值，实现函子的链式操作
```javascript
function add(x) {
  return function (y) {
    return x + y;
  };
}
Ap.of(add).ap(Maybe.of(2)).ap(Maybe.of(3));    // Ap.of(add(2)).ap(Maybe.of(3));
// Ap(5)
```

Monad 函子  <br />  总是返回一个单层的函子
```javascript
class Monad extends Functor {
  join() {
    return this.val;
  }
  flatMap(f) {
    return this.map(f).join();
  }
}
```



# —— 指令式编程（Imperative programming）——
一种描述电脑所需作出的行为的[编程典范](https://zh.wikipedia.org/wiki/%E7%B7%A8%E7%A8%8B%E5%85%B8%E7%AF%84)。几乎所有电脑的[硬件](https://zh.wikipedia.org/wiki/%E7%A1%AC%E9%AB%94)工作都是指令式的

#   <br />  

# 结构化编程（Structured programming）
采用[子程序](https://zh.wikipedia.org/wiki/%E5%AD%90%E7%A8%8B%E5%BA%8F)、[块结构](https://zh.wikipedia.org/wiki/%E5%9D%97%E7%BB%93%E6%9E%84)、[for循环](https://zh.wikipedia.org/wiki/For%E8%BF%B4%E5%9C%88)以及[while循环](https://zh.wikipedia.org/wiki/While%E8%BF%B4%E5%9C%88)等结构，来取代传统的 [goto](https://zh.wikipedia.org/wiki/Goto)。希望借此来改善[计算机程序](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A8%8B%E5%BA%8F)的明晰性、质量以及开发时间，并且避免写出[面条式代码](https://zh.wikipedia.org/wiki/%E9%9D%A2%E6%9D%A1%E5%BC%8F%E4%BB%A3%E7%A0%81)。

循序（sequence）  <br />  选择（selection）  <br />  重复（repetition）

##   <br />  

## 过程式编程（Procedural programming）

派生自[结构化编程](https://zh.wikipedia.org/wiki/%E7%B5%90%E6%A7%8B%E5%8C%96%E7%B7%A8%E7%A8%8B)（Structured programming），主要采取[程序调用](https://zh.wikipedia.org/w/index.php?title=%E7%A8%8B%E5%BA%8F%E5%91%BC%E5%8F%AB&action=edit&redlink=1)（procedure call）或函数调用（function call）的方式来进行[流程控制](https://zh.wikipedia.org/wiki/%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6)。流程则由包涵一系列运算步骤的过程（Procedures），例程（routines），[子程序](https://zh.wikipedia.org/wiki/%E5%AD%90%E7%A8%8B%E5%BA%8F)（subroutines）, 方法（methods），或函数（functions）来控制。在程序运行的任何一个时间点，都可以调用某个特定的程序。任何一个特定的程序，也能被任意一个程序或是它自己本身调用。



## 面向对象编程（Object-oriented programming）  <br />    <br />  
[封装性](https://zh.wikipedia.org/wiki/%E5%B0%81%E8%A3%9D_(%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88))（Encapsulation）：隐藏了某一方法的具体运行步骤，取而代之的是通过消息传递机制发送消息给它。  <br />  [继承性](https://zh.wikipedia.org/wiki/%E7%BB%A7%E6%89%BF%E6%80%A7)（Inheritance）  <br />  [多态](https://zh.wikipedia.org/wiki/%E5%A4%9A%E5%9E%8B_(%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88))（Polymorphism）：由继承而产生的相关的不同的类，其对象对同一消息会做出不同的响应  <br />  [抽象](https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E5%8C%96_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8))（Abstraction）是简化复杂的现实问题的途径，它可以为具体问题找到最恰当的类定义，并且可以在最恰当的继承级别解释问题。


# —— 元编程（Metaprogramming）——
指某类[计算机程序](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A8%8B%E5%BA%8F)的编写，这类计算机程序编写或者操纵其它程序（或者自身）作为它们的资料，或者在[运行时](https://zh.wikipedia.org/wiki/%E8%BF%90%E8%A1%8C%E6%97%B6)完成部分本应在[编译时](https://zh.wikipedia.org/wiki/%E7%BC%96%E8%AF%91%E6%97%B6)完成的工作。



# 模板超编程（Template metaprogramming）
一种[超编程](https://zh.wikipedia.org/wiki/%E8%B6%85%E7%B7%A8%E7%A8%8B)技术，[编译器](https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%AD%AF%E5%99%A8)使用[模板](https://zh.wikipedia.org/wiki/%E6%A8%A1%E6%9D%BF)产生暂时性的[源码](https://zh.wikipedia.org/wiki/%E6%BA%90%E7%A2%BC)，然后再和剩下的源码混合并[编译](https://zh.wikipedia.org/wiki/%E7%BC%96%E8%AF%91)。这些模板的输出包括[编译时期](https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%AD%AF%E6%99%82%E6%9C%9F)[常量](https://zh.wikipedia.org/wiki/%E5%B8%B8%E6%95%B8)、[数据结构](https://zh.wikipedia.org/wiki/%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B)以及完整的函数。


# 反射（reflection）
[计算机程序](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A8%8B%E5%BA%8F)在[运行时](https://zh.wikipedia.org/wiki/%E8%BF%90%E8%A1%8C%E6%97%B6)（runtime）可以访问、检测和修改它本身状态或行为的一种能力。

内省（type introspection，自省）机制仅指程序在运行时对自身信息（称为[元数据](https://zh.wikipedia.org/wiki/%E5%85%83%E6%95%B0%E6%8D%AE)）的检测；

---


## 代码类型

- **源代码（Source code）：一系列**[人类](https://zh.wikipedia.org/wiki/%E4%BA%BA%E7%B1%BB)**可读的**[计算机语言](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%AF%AD%E8%A8%80)[指令](https://zh.wikipedia.org/wiki/%E6%8C%87%E4%BB%A4)**。**
- [目标代码](https://zh.wikipedia.org/wiki/%E7%9B%AE%E6%A0%87%E4%BB%A3%E7%A0%81)（**object code**）：[编译器](https://zh.wikipedia.org/wiki/%E7%BC%96%E8%AF%91%E5%99%A8)或[汇编器](https://zh.wikipedia.org/wiki/%E6%B1%87%E7%BC%96%E5%99%A8)处理[源代码](https://zh.wikipedia.org/wiki/%E6%BA%90%E4%BB%A3%E7%A0%81)后所生成的代码，一般由[机器代码](https://zh.wikipedia.org/wiki/%E6%9C%BA%E5%99%A8%E4%BB%A3%E7%A0%81)或接近于机器语言的代码组成。
- [字节码](https://zh.wikipedia.org/wiki/%E5%AD%97%E8%8A%82%E7%A0%81)（Bytecode）：已经经过[编译](https://zh.wikipedia.org/wiki/%E7%BC%96%E8%AF%91)，但与特定[机器代码](https://zh.wikipedia.org/wiki/%E6%A9%9F%E5%99%A8%E7%A2%BC)无关，需要[解释器](https://zh.wikipedia.org/wiki/%E7%9B%B4%E8%AD%AF%E5%99%A8)转译后才能成为[机器代码](https://zh.wikipedia.org/wiki/%E6%A9%9F%E5%99%A8%E7%A2%BC)的[中间代码](https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%96%93%E8%AA%9E%E8%A8%80)。
- [机器代码](https://zh.wikipedia.org/wiki/%E6%9C%BA%E5%99%A8%E4%BB%A3%E7%A0%81)（machine code）：电脑的[CPU](https://zh.wikipedia.org/wiki/CPU)可直接解读的资料。
- [微程序](https://zh.wikipedia.org/wiki/%E5%BE%AE%E7%A8%8B%E5%BA%8F)（microcode）：**微码**，是在[CISC](https://zh.wikipedia.org/wiki/CISC)结构下，运行一些功能复杂的[指令](https://zh.wikipedia.org/wiki/%E6%8C%87%E4%BB%A4)时，所分解一系列相对简单的指令。



## 编译策略

- [即时编译](https://zh.wikipedia.org/wiki/%E5%8D%B3%E6%99%82%E7%B7%A8%E8%AD%AF)（JIT）
   - [跟踪即时编译](https://zh.wikipedia.org/w/index.php?title=%E8%B7%9F%E8%B8%AA%E5%8D%B3%E6%97%B6%E7%BC%96%E8%AF%91&action=edit&redlink=1)
- [提前编译](https://zh.wikipedia.org/w/index.php?title=%E6%8F%90%E5%89%8D%E7%BC%96%E8%AF%91&action=edit&redlink=1)（AOT）
- [源代码至源代码编译器](https://zh.wikipedia.org/wiki/%E6%BA%90%E4%BB%A3%E7%A0%81%E8%87%B3%E6%BA%90%E4%BB%A3%E7%A0%81%E7%BC%96%E8%AF%91%E5%99%A8)
- [动态重编译](https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E9%87%8D%E7%BC%96%E8%AF%91)



## 求值策略（Evaluation strategy）
确定[编程语言](https://zh.wikipedia.org/wiki/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80)中[表达式](https://zh.wikipedia.org/wiki/%E8%A1%A8%E8%BE%BE%E5%BC%8F)的求值的一组（通常确定性的）规则。

- [及早求值](https://zh.wikipedia.org/wiki/%E5%8F%8A%E6%97%A9%E6%B1%82%E5%80%BC)
- [惰性求值](https://zh.wikipedia.org/wiki/%E6%83%B0%E6%80%A7%E6%B1%82%E5%80%BC)
- [部分求值](https://zh.wikipedia.org/wiki/%E9%83%A8%E5%88%86%E6%B1%82%E5%80%BC)
- [远程求值](https://zh.wikipedia.org/wiki/%E8%BF%9C%E7%A8%8B%E6%B1%82%E5%80%BC)
- [短路求值](https://zh.wikipedia.org/wiki/%E7%9F%AD%E8%B7%AF%E6%B1%82%E5%80%BC)
