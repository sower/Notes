重构
> 不改变软件系统外部行为的前提下，改善它的内部结构


重构过程的精髓：**小步修改，每次修改后就运行测试**

重构的目的

1. 重构改进软件的设计：消除重复代码
1. 重构使软件更容易理解：理解并不只是对计算机，还应该是对另一个程序员，或者未来的你自己。
1. 重构帮助找到bug：更加深入的理解代码的所作所为
1. 重构提高编程速度：通过投入精力改善内部设计，我们增加了软件的耐久性，从而可以更长时间的保持开发的快速。


[Refactoring-Summary](https://github.com/HugoMatilla/Refactoring-Summary)


# 代码的坏味道
1.　神秘命名（Mysterious Name)  <br />  2.　重复代码（Duplicated Code)  <br />  3.　过长函数（Long Function)	函数中的代码行数原则上不要超过 100 行  <br />  4.　过长参数列表（Long Parameter List)  <br />  5.　全局数据（Global Data)  <br />  6.　可变数据（Mutable Data)  <br />  7.　**发散式变化（Divergent Change)**	一个类受多种变化的影响  <br />  8.　**霰弹式修改（Shotgun Surgery)**	多种变化引发多个类相应的修改  <br />  9.　**依恋情结（Feature Envy)**	一个函数访问其它对象的数据比访问自己的数据更多  <br />  10.　**数据泥团（Data Clumps)**	代码的不同部分包含相同的变量组  <br />  11.　**基本类型偏执（Primitive Obsession)**

- 使用基本类型而不是小对象来实现简单任务（例如货币、范围、电话号码字符串等）。
- 使用常量编码信息（例如一个用于引用管理员权限的常量USER_ADMIN_ROLE = 1 ）。
- 使用字符串常量作为字段名在数组中使用。

  <br />  **12.　重复的switch（Repeated Switches)  <br />  13.　循环语句（Loops)  <br />  14.　冗赘的元素（Lazy Element)  <br />  15.　夸夸其谈通用性（Speculative Generality)	**存在未被使用的类、函数、字段或参数**  <br />  16.　临时字段（Temporary Field)  <br />  17.　过长的消息链（Message Chains)  <br />  18.　中间人（Middle Man)	**类本身成了一个空壳，除了委托之外不做任何事情**  <br />  19.　内幕交易（Insider Trading)	**一个类大量使用另一个类的内部字段和方法**  <br />  20.　过大的类（Large Class)  <br />  21.　异曲同工的类（Alternative Classes with Different Interfaces)	**  <br />  两个类中有着不同的函数，却在做着同一件事。**  <br />  22.　纯数据类（Data Class)	**只包含字段和访问它们的 getter 和 setter 函数的类**  <br />  23.　被拒绝的遗赠（Refused Bequest)	**子类仅仅使用父类中的部分方法和属性，其他来自父类的馈赠成为了累赘。**  <br />  24.　注释（Comments)	**最好的注释是为函数或类起一个恰当的名字


# 常用重构
**1.　提炼函数（Extract Function)**  <br />  **2.　内联函数（Inline Function)**  <br />  **3.　提炼变量（Extract Variable)**  <br />  **4.　内联变量（Inline Variable)**  <br />  **5.　改变函数声明（Change Function Declaration)**  <br />  **6.　封装变量（Encapsulate Variable)**  <br />  **7.　变量改名（Rename Variable)**  <br />  **8.　引入参数对象（Introduce Parameter Object)**  <br />  **9.　函数组合成类（Combine Functions into Class)**  <br />  **10.　函数组合成变换（Combine Functions into Transform)**  <br />  **11.　拆分阶段（Split Phase)**


# 封装
**1.　封装记录（Encapsulate Record)**  <br />  **2.　封装集合（Encapsulate Collection)**  <br />  **3.　以对象取代基本类型（Replace Primitive with Object)**  <br />  **4.　以查询取代临时变量（Replace Temp with Query)**  <br />  **5.　提炼类（Extract Class)**  <br />  **6.　内联类（Inline Class)**  <br />  **7.　隐藏委托关系（Hide Delegate)**  <br />  **8.　移除中间人（Remove Middle Man)**  <br />  **9.　替换算法（Substitute Algorithm)**


# 搬移特性
**1.　搬移函数（Move Function)**  <br />  **2.　搬移字段（Move Field)**  <br />  **3.　搬移语句到函数（Move Statements into Function)**  <br />  **4.　搬移语句到调用者（Move Statements to Callers)**  <br />  **5.　以函数调用取代内联代码（Replace Inline Code with Function Call)**  <br />  **6.　移动语句（Slide Statements)**  <br />  **7.　拆分循环（Split Loop)**  <br />  **8.　以管道取代循环（Replace Loop with Pipeline)**  <br />  **9.　移除死代码（Remove Dead Code)**


# 重新组织数据
**1.　拆分变量（Split Variable)**  <br />  **2.　字段改名（Rename Field)**  <br />  **3.　以查询取代派生变量（Replace Derived Variable with Query)**  <br />  **4.　将引用对象改为值对象（Change Reference to Value)**  <br />  **5.　将值对象改为引用对象（Change Value to Reference)**


# 简化条件逻辑
**1.　分解条件表达式（Decompose Conditional)**  <br />  **2.　合并条件表达式（Consolidate Conditional Expression)**  <br />  **3.　以卫语句取代嵌套条件表达式（Replace Nested Conditional with Guard Clauses)**  <br />  **4.　以多态取代条件表达式（Replace Conditional with Polymorphism)**  <br />  **5.　引入特例（Introduce Special Case)**  <br />  **6.　引入断言（Introduce Assertion)**


# 重构API
**1.　将查询函数和修改函数分离（Separate Query from Modifier)**  <br />  **2.　函数参数化（Parameterize Function)**  <br />  **3.　移除标记参数（Remove Flag Argument)**  <br />  **4.　保持对象完整（Preserve Whole Object)**  <br />  **5.　以查询取代参数（Replace Parameter with Query)**  <br />  **6.　以参数取代查询（Replace Query with Parameter)**  <br />  **7.　移除设值函数（Remove Setting Method)**  <br />  **8.　以工厂函数取代构造函数（Replace Constructor with Factory Function)**  <br />  **9.　以命令取代函数（Replace Function with Command)**  <br />  **10.　以函数取代命令（Replace Command with Function)**


# 处理继承关系
**1.　函数上移（Pull Up Method)**  <br />  **2.　字段上移（Pull Up Field)**  <br />  **3.　构造函数本体上移（Pull Up Constructor Body)**  <br />  **4.　函数下移（Push Down Method)**  <br />  **5.　字段下移（Push Down Field)**  <br />  **6.　以子类取代类型码（Replace Type Code with Subclasses)**  <br />  **7.　移除子类（Remove Subclass)**  <br />  **8.　提炼超类（Extract Superclass)**  <br />  **9.　折叠继承体系（Collapse Hierarchy)**  <br />  **10.　以委托取代子类（Replace Subclass with Delegate)**  <br />  **11.　以委托取代超类（Replace Superclass with Delegate)**
