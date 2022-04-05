
# —— [Java](https://www.oracle.com/cn/java/) ——
Java是由Sun Microsystems公司于1995年5月推出的Java面向对象程序设计语言和Java平台的总称。由James Gosling和同事们共同研发，并在1995年正式推出。[

](https://www.oracle.com/cn/java/)  <br />  **分布式的、解释型的、动态的**  <br />  ![](https://www.runoob.com/wp-content/uploads/2013/12/ZSSDMld.png#crop=0&crop=0&crop=1&crop=1&id=T4lMm&originHeight=276&originWidth=619&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  **程序示例**
```java
public class Hello {
    public static void main(String[] args) {
        // 向屏幕输出文本:
        System.out.println("Hello, world!");
    }
}
```

版本

- Java SE：Standard Edition
- Java EE：Enterprise Edition
- Java ME：Micro Edition


配置环境变量
```java
变量名：JAVA_HOME
变量值：E:\Java\jdk   //安装路径
 
变量名：Path
变量值：%JAVA_HOME%\bin
// 非必须
变量名：CLASSPAHT
```
新版的jdk中默认不含有jre目录，通过如下方式生成
```java
bin\jlink.exe --module-path jmods --add-modules java.desktop --output jre
```

JDK：Java Development Kit

- java：即JVM，运行Java程序，就是启动JVM，然后让JVM执行指定的编译后的代码；
- javac：Java的编译器，把Java源码文件（.java）编译为Java字节码文件（.class）；
- jar：用于把一组.class文件打包成一个.jar文件，便于发布；
- javadoc：用于从Java源码中自动提取注释并生成文档；
- jdb：Java调试器，用于开发阶段的运行调试。

JRE：Java Runtime Environment

- JSR规范：Java Specification Request
- JCP组织：Java Community Process

# 注释
```java
// 单行注释...
/*
多行注释
*/


/**
 * 自动创建文档的注释
 * 
 * @auther someone
 */
```

Javadoc标签

| 标签 | 描述 | 示例 |
| --- | --- | --- |
| @author | 标识一个类的作者，一般用于类注释 | @author description |
| @deprecated | 指名一个过期的类或成员，表明该类或方法不建议使用 | @deprecated description |
| {@docRoot} | 指明当前文档根目录的路径 | Directory Path |
| @exception | 可能抛出异常的说明，一般用于方法注释 | @exception exception-name explanation |
| {@inheritDoc} | 从直接父类继承的注释 | Inherits a comment from the immediate surperclass. |
| {@link} | 插入一个到另一个主题的链接 | {@link name text} |
| {@linkplain} | 插入一个到另一个主题的链接，但是该链接显示纯文本字体 | Inserts an in-line link to another topic. |
| @param | 说明一个方法的参数，一般用于方法注释 | @param parameter-name explanation |
| @return | 说明返回值类型，一般用于方法注释，不能出现再构造方法中 | @return explanation |
| @see | 指定一个到另一个主题的链接 | @see anchor |
| @serial | 说明一个序列化属性 | @serial description |
| @serialData | 说明通过 writeObject() 和 writeExternal() 方法写的数据 | @serialData description |
| @serialField | 说明一个 ObjectStreamField 组件 | @serialField name type description |
| @since | 说明从哪个版本起开始有了这个函数 | @since release |
| @throws | 和 @exception 标签一样. | The @throws tag has the same meaning as the @exception tag. |
| {@value} | 显示常量的值，该常量必须是 static 属性。 | Displays the value of a constant, which must be a static field. |
| @version | 指定类的版本，一般用于类注释 | @version info |




## 注解（Annotation）
放在Java源码的类、方法、字段、参数前的一种特殊“注释”  <br />  注解则可以被编译器打包进入class文件，因此，注解是一种用作标注的“元数据”。

基本 Annotation  <br />  在 java.lang 包下

- @Override 限定重写父类方法
- @Deprecated 标示已过时（与文档注释中的 @deprecated 标记的作用基本相同）
- @SuppressWarnings("变量值") 抑制编译器警告（常见变量值：unused, rawtypes, unchecked, serial, deprecation, all）
- @SafeVarargs 抑制编译器“堆污染”警告
- @FunctionalInterface 函数式接口（接口中只有一个抽象方法

**元注解（meta annotation）**：可以修饰其他注解  <br />  @Target——定义Annotation能够被应用于源码的位置：

- 类或接口：ElementType.TYPE；
- 字段：ElementType.FIELD；
- 方法：ElementType.METHOD；
- 构造方法：ElementType.CONSTRUCTOR；
- 方法参数：ElementType.PARAMETER。

@Retention——定义Annotation的生命周期：

- 仅编译期：RetentionPolicy.SOURCE；
- 仅class文件：RetentionPolicy.CLASS；（默认）
- 运行期：RetentionPolicy.RUNTIME。

@Repeatable——定义Annotation是否可重复  <br />  @Inherited——定义子类是否可继承父类定义的Annotation

- 仅对@Target(ElementType.TYPE)类型的annotation，对class的继承有效
```java
// 定义注解
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Range {
    int min() default 0;
    int max() default 255;
}

// 使用注解
public class Person {
    @Range(min=1, max=20)
    public String name;
    @Range(max=10)
    public String city;
}

//注解对程序逻辑没有任何影响，须编写代码来使用注解
void check(Person person) throws IllegalArgumentException, ReflectiveOperationException {
    // 遍历所有Field:
    for (Field field : person.getClass().getFields()) {
        // 获取Field定义的@Range:
        Range range = field.getAnnotation(Range.class);
        // 如果@Range存在:
        if (range != null) {
            // 获取Field的值:
            Object value = field.get(person);
            // 如果值是String:
            if (value instanceof String) {
                String s = (String) value;
                // 判断值是否满足@Range的min/max:
                if (s.length() < range.min() || s.length() > range.max()) {
                    throw new IllegalArgumentException("Invalid field: " + field.getName());
                }
            }
        }
    }
}
```


# 标识符 & 关键字
**标识符（identifier）**

- 以字母（A-Z 或者 a-z）,美元符（$）、或者下划线（_）开始
- 首字符之后可以是字母（A-Z 或者 a-z）,美元符（$）、下划线（_）或数字的任何字符组合
- 关键字不能用作标识符
- 大小写敏感



**命名规范**

- 类名：大写英文字母开头，后接字母，数字和下划线的组合
- 方法：小写英文字母开头，后接字母，数字和下划线的组合



**关键字**

| 类别 | 关键字 | 说明 |
| --- | --- | --- |
| 访问控制 | private | 私有的 |
|  | protected | 受保护的 |
|  | public | 公共的 |
| 类、方法和变量修饰符 | abstract | 声明抽象 |
|  | class | 类 |
|  | extends | 扩充,继承 |
|  | final | 最终值,不可改变的 |
|  | implements | 实现（接口） |
|  | interface | 接口 |
|  | native | 本地，原生方法（非 Java 实现） |
|  | new | 新,创建 |
|  | static | 静态 |
|  | strictfp | 严格,精准 |
|  | synchronized | 线程,同步 |
|  | transient | 短暂 |
|  | volatile | 易失 |
| 程序控制语句 | break | 跳出循环 |
|  | case | 定义一个值以供 switch 选择 |
|  | continue | 继续 |
|  | default | 默认 |
|  | do | 运行 |
|  | else | 否则 |
|  | for | 循环 |
|  | if | 如果 |
|  | instanceof | 实例 |
|  | return | 返回 |
|  | switch | 根据值选择执行 |
|  | while | 循环 |
| 错误处理 | assert | 断言表达式是否为真 |
|  | catch | 捕捉异常 |
|  | finally | 有没有异常都执行 |
|  | throw | 抛出一个异常对象 |
|  | throws | 声明一个异常可能被抛出 |
|  | try | 捕获异常 |
| 包相关 | import | 引入 |
|  | package | 包 |
| 基本类型 | boolean | 布尔型 |
|  | byte | 字节型 |
|  | char | 字符型 |
|  | double | 双精度浮点 |
|  | float | 单精度浮点 |
|  | int | 整型 |
|  | long | 长整型 |
|  | short | 短整型 |
| 变量引用 | super | 父类,超类 |
|  | this | 本类 |
|  | void | 无返回值 |
| 保留关键字 | goto | 是关键字，但不能使用 |
|  | const | 是关键字，但不能使用 |
|  | null | 空 |


非访问修饰符

- static 用来创建类方法和类变量，类方法不能访问的实例变量
- final 用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，不可修改
- abstract 用来创建抽象类、抽象方法
- synchronized 修饰的方法、代码块在同一时间只能被一个线程访问，不能修饰构造器、成员变量等
- volatile 修饰的成员变量在每次被线程访问时，都强迫从共享内存中重读该成员变量的值；并且，当成员变量发生变化时，强迫线程将变化值回写到共享内存（保证了线程操作时变量的可见性，即一个线程修改了某个变量的值，这新值对其它线程来说是立即可见的）（只能保证内存可见性，无法保证操作的原子性）
- transient 序列化的对象包含被 transient 修饰的成员变量时，JVM 跳过该特定的变量
- native 修饰的方法通常采用 C/C++ 语言来实现





var 自动推断
```java
var sb = new StringBuilder();
```
常量

- 字面量常量 / 直接量
- final 定义的变量

# 数据类型

## 基本类型

- 整数类型：byte，short，int，long（ l | L ）
- 浮点数类型：float（ f | F ），double
- 字符类型：char（Unicode）
- 布尔类型：boolean (true,false)
| 数据类型 | 大小/字节 | 默认值 |
| --- | --- | --- |
| byte | 1 | 0 |
| short | 2 | 0 |
| int | 4 | 0 |
| long | 8 | 0L |
| float | 4 | 0.0f |
| double | 8 | 0.0d |
| char | 2 | 'u0000' |
| boolean | 4 | false |
| Object | - | null |

:::info

- Java没有无符号整型（Unsigned）的基本数据类型
- 不能对boolean类型进行类型转换
:::

- 整数运算在除数为 0 时会报错，而浮点数运算在除数为 0 时，不会报错，但会返回几个特殊值：
```java
double d1 = 0.0 / 0; // NaN（Not a Number）
double d2 = 1.0 / 0; // Infinity，无穷大
double d3 = -1.0 / 0; // -Infinity，负无穷大
```
**转义字符序列**

| **符号** | **字符含义** | **符号** | **字符含义** |
| --- | --- | --- | --- |
| \\n | 换行 (0x0a) | \\t | 制表符 |
| \\r | 回车 (0x0d) | \\" | 双引号 |
| \\f | 换页符(0x0c) | \\' | 单引号 |
| \\b | 退格 (0x08) | \\\\ | 反斜杠 |
| \\0 | 空字符 (0x20) | \\ddd | 八进制字符 (ddd) |
| \\s | 字符串 | \\uxxxx | 16进制Unicode字符 (xxxx) |


## 引用类型

- 对象、数组、字符串
- 一个引用变量可以用来引用任何与之兼容的类型

相等判断  <br />  == ：表示引用相等  <br />  equals()方法：引用类型的变量内容相等


### String

- String：不可修改的字符串
- StringBuilder：一个可变对象，可以预分配缓冲区，往StringBuilder中新增字符时，不会创建新的临时对象
- StringBuffer：早期的StringBuilder的线程安全版本，速度略差
- StringJoiner ：拼接字符串时，可额外附加一个“开头”和“结尾”。

public final class **String**  <br />  extends Object  <br />  implements Serializable, Comparable, CharSequence

`"""..."""`表示多行字符串（Text Blocks）  <br />  构造器  <br />  String(byte[] bytes, int offset, int length, String charsetName)：使用指定的字符集将 byte[] 数组从 offset 开始、长度为 length 的子数组解码成字符串（构造器声明上抛出了异常）  <br />  String(char[] value, int offset, int count)：将字符数组从 offset 开始、长度为 count 的字符元素连缀成字符串  <br />  实例方法

- byte[] getBytes()：使用平台的默认字符集将此 String 编码为 byte 数组
- byte[] getBytes(String charsetName)：使用指定的字符集将此 String 编码为 byte 数组（方法声明上抛出了异常）
- char[] toCharArray()：将字符串转换为 char 数组
- int length()：返回该字符串的长度
- char charAt(int index)：返回指定索引处的 char 值
- int indexOf(String str)：返回子串在该字符串中第一次出现处的索引
- int lastIndexOf(String str)：返回子串在该字符串中最后一次出现处的索引
- boolean isEmpty()：当且仅当 length() 为 0 时返回 true
- boolean equals(Object anObject)：字符串比较，当指定对象不为 null，且类型为 String，字符序列相等时，结果才为 true
- boolean equalsIgnoreCase(String anotherString)：字符串比较，忽略大小写
- boolean contentEquals(CharSequence cs)：字符串比较，当它们包含的字符序列相同时返回 true
- String toUpperCase()：把当前字符串转换为大写
- String toLowerCase()：把当前字符串转换为小写
- boolean startsWith(String prefix)：判断此字符串是否以指定的前缀开始
- boolean endsWith(String suffix)：判断此字符串是否以指定的后缀结束
- String substring(int start, int end)：返回该字符串的一个子串 [start, end)（StringBuilder 类中也有）
- String trim()：返回移除了前导和尾部空白的子串
- String replace(CharSequence target, CharSequence replacement)：将该字符串中所有的 target 子串替换成 replacement
- boolean matches(String regex)：判断该字符串是否匹配给定的正则表达式
- String replaceAll(String regex, String replacement)：将该字符串中所有匹配 regex 的子串替换成 replacement
- String[] split(String regex)：以 regex 作为分隔符，把该字符串分割成多个子串，结尾空字符串会被丢弃

类方法

- String valueOf(X x)：将基本类型值转换为字符串
- String valueOf(Object obj)：如果参数为 null，则字符串等于 "null"；否则，返回 obj.toString() 的值
- String format(String format, Object... args)：使用指定的格式字符串（包含格式说明符，语法%[argument_index$][flags][width][.precision]conversion，如 %s，%1$tY-%<tm-%<td %<tH:%<tM:%<tS）和参数返回一个格式化字符串
- String join(CharSequence delimiter, CharSequence... elements)：用一个分隔符将多个字符串连接起来
- String join(CharSequence delimiter, Iterable<? extends CharSequence> elements)：用一个分隔符将集合中的字符串元素连接起来

**StringBuilder**

- StringBuilder append(Object obj)：追加任意类型数据，return this; 追加 "null"
- StringBuilder deleteCharAt(int index)：删除字符串中指定位置的字符
- StringBuilder insert(int offset, Object obj)：将 Object 参数的字符串表示形式插入此字符序列中
- StringBuilder reverse()：字符序列反转
- String toString()：返回此序列中数据的字符串表示形式
- void setLength(int newLength)：设置字符序列的长度



#### regex
```java
// 将一个字符串编译成 Pattern 对象
Pattern p = Pattern.compile("a*b");

// 使用 Pattern 对象创建 Matcher 对象
Matcher m = p.matcher("aaaaab");
boolean b = m.matches(); // 返回 true


// 等同
boolean b = Pattern.matches ("a*b","aaaaab");
```

- find()	返回目标字符串中是否包含与 Pattern 匹配的子串
- group()	返回上一次与 Pattern 匹配的子串
- start()	返回上一次与 Pattern 匹配的子串在目标字符串中的开始位置
- end()	返回上一次与 Pattern 匹配的子串在目标字符串中的结束位置加 1
- lookingAt()	返回目标字符串前面部分与 Pattern 是否匹配
- matches()	返回整个目标字符串与 Pattern 是否匹配
- reset()	将现有的 Matcher 对象应用于一个新的字符序列。



### Array
```java
// 声明
dataType[] arrayRefVar;   // 推荐
    // 或
dataType arrayRefVar[];  
// 创建
arrayRefVar = new dataType[arraySize];
// 声明&创建
dataType[] arrayRefVar = new dataType[arraySize];
    // 或
dataType[] arrayRefVar = {value0, value1, ..., valuek};


// 静态初始化
int[][] arr = { {1, 2, 3}, {4, 5}, {6} };
// 动态初始化
int[][] arr = new int[3][]; // 等同于 int[][] arr = {null, null, null};
```


**java.util.Arrays**

- void sort(Object[] a)：根据元素的自然顺序对指定对象数组按升序进行排序，元素须实现 Comparable 接口
- void sort(T[] a, Comparator<? super T> c)：根据指定比较器产生的顺序对指定对象数组进行排序
- void parallelSort(Object[] a)：以并发的方式对 a 数组的数组元素进行排序
- void setAll(T[] array, IntFunction generator)：使用提供的函数计算每一个元素的值
- void parallelSetAll(T[] array, IntFunction generator)：以并发的方式
- type binarySearch(Object[] a, type key)：使用二分法查询 key 元素值在 a 数组中出现的索引
- Object[] copyOf(Object[] original, int newLength)：复制 original 数组，截取或用 0（数值类型）、false（布尔类型）或者 null（引用类型）填充，以使新数组的长度为 newLength
- List asList(T... a)：把一个引用类型的数组或指定个数的对象转换成固定长度的 List，只读数组


### 枚举类

- 定义的enum类型总是继承自java.lang.Enum，且无法被继承；
- 只能定义出enum的实例，而无法通过new操作符创建enum的实例；
- 定义的每个实例都是引用类型的唯一实例；
```java
enum Weekday {
    MON(1, "星期一"), TUE(2, "星期二"), WED(3, "星期三"), THU(4, "星期四"), FRI(5, "星期五"), SAT(6, "星期六"), SUN(0, "星期日");
    public final int dayValue;
    private final String chinese;
    private Weekday(int dayValue, String chinese) {
        this.dayValue = dayValue;
        this.chinese = chinese;
    }
    
    @Override
    public String toString() {
        return this.chinese;
    }
}
```

### Number
| 基本类型 | 对应的引用类型 |
| --- | --- |
| boolean | java.lang.Boolean |
| byte | java.lang.Byte |
| short | java.lang.Short |
| int | java.lang.Integer |
| long | java.lang.Long |
| float | java.lang.Float |
| double | java.lang.Double |
| char | java.lang.Character |

所有的整数和浮点数的包装类型都继承自Number

自动装箱（Auto Boxing）：基本类型数据转成对应的包装类对象  <br />  自动拆箱（Auto Unboxing）：包装类对象转成对应的基本数据类型数据，可能发生NullPointerException；

自动装箱和自动拆箱只发生在编译阶段，目的是为了少写代码。装箱和拆箱会影响执行效率。

转换方法

- Xxx valueOf(xxx value)	装箱（推荐，带有缓存）
- Xxx valueOf(String s)	字符串 → 包装类
- String toString(xxx value)	基本类型 → 字符串
- xxx parseXxx(String s)	字符串 → 基本数据

java.math.BigInteger：表示任意大小的整数。内部用一个int[]数组来模拟一个非常大的整数

java.math.BigDecimal：表示一个任意大小且精度完全准确的浮点数。使用compareTo()比较两个BigDecimal的值

- BigDecimal divide(BigDecimal divisor)：返回一个 BigDecimal，其值为 (this / divisor)，如果无法表示准确的商值，则抛出 ArithmeticException
- BigDecimal divide(BigDecimal divisor, int scale, RoundingMode roundingMode)：返回一个 BigDecimal，其值为 (this / divisor)，要保留的小数位数 scale，舍入模式 roundingMode（如 RoundingMode.HALF_UP 表示四舍五入）
- BigDecimal setScale(int newScale, RoundingMode roundingMode), BigDecimal setScale(int newScale, int roundingMode)：返回一个 BigDecimal，要保留的小数位数 newScale，舍入模式 roundingMode
- BigDecimal stripTrailingZeros()：返回的 BigDecimal，其数值上等于此小数，但从该表示形式移除所有尾部零


# 流程控制
**条件**
```java
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}

switch(expression) {
  case value:
    // code block
    break;  // optional
// ...
  default:
    // code block
}

// switch新特性
 int opt = switch (fruit) {
            case "apple" -> 1;
            case "pear", "mango" -> 2;
            default -> 0;
        };
```
**循环**
```java
while (condition) {
  // code block to be executed
}

do {
  // code block to be executed
}
while (condition);

for(初始化; 布尔表达式; 更新) {
    //代码
}

for(声明语句 : 表达式){
   //代码
}

break [lable];
continue [lable];
```
```java
//for each实质
List<String> list = List.of("Apple", "Orange", "Pear");
for (Iterator<String> it = list.iterator(); it.hasNext(); ) {
     String s = it.next();
     System.out.println(s);
}
```


# OOP
面向对象编程——Object Oriented Programming，是一种程序设计思想。OOP把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。
> 把一组数据结构和处理它们的方法组成对象（object），把相同行为的对象归纳为类（class），通过类的封装（encapsulation）隐藏内部细节，通过继承（inheritance）实现类的特化（specialization）和泛化（generalization），通过多态（polymorphism）实现基于对象类型的动态分派。

- 类(Class): 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例。
- 方法：类中定义的函数。
- 继承：即一个派生类（derived class）继承基类（base class）的字段和方法。继承也允许把一个派生类的对象作为一个基类对象对待。新的class称为子类（Subclass），而被继承的class称为基类、父类或超类（Base class、Super class）
- 实例化：创建一个类的实例，类的具体对象。
- 对象：通过类定义的数据结构实例。

## 类（Class）
一个.java文件只能包含一个public类，但可以包含多个非public类。文件名必须和public类的名字相同。
```java
public class Person {
    private String name;
    private int age;
    
    /* 默认构造器（编译器产生的）
    public Person() {}
    */
    
    // 构造器
    public Person(String name) {
        this(name, 0);
    }

    // 创建对象，初始化 name 和 age
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return this.age; }
    public void setAge(int age) { this.age = age; }
    public boolean isChild() {
        return age <= 6;
    }
}
```



**this**

- 构造器重载时的互调 this([参数]);
- 解决实例方法中成员变量和参数（局部变量）之间的二义性，必须使用
- 同类中实例方法间互调（调用者是 this，不建议省略）
- 实例方法将 this 作为参数传递给另一个方法
- 将 this 作为方法的返回值（链式方法编程）



**访问控制修饰符**

| 修饰符 | 当前类 | 同一包内 | 子孙类(同一包) | 子孙类(不同包) | 其他包 |
| --- | --- | --- | --- | --- | --- |
| public | Y | Y | Y | Y | Y |
| protected | Y | Y | Y | Y/N（[说明）](https://www.runoob.com/java/java-modifier-types.html#protected-desc) | N |
| default | Y | Y | Y | N | N |
| private | Y | N | N | N | N |

**private，protected用于变量、方法，不能修饰（外部）类**

**static（静态）修饰符**  <br />  静态字段及方法属于所有实例“共享”，实际是属于class，应直接通过类调用

## 继承（Inheritance）
没有明确写extends的类，编译器会自动加上extends Object。即任何类，除了Object，都会继承自某个类
```java
class Person {
    private String name;
    private int age;
    public String getName() {...}
    public void setName(String name) {...}
    public int getAge() {...}
    public void setAge(int age) {...}
}

class Student extends Person {
    // 不要重复name和age字段/方法,
    // 只需要定义新增score字段/方法:
    private int score;
    public int getScore() { … }
    public void setScore(int score) { … }
}
```
:::info

- super关键字可表示父类（超类）。子类引用父类的字段用super.fieldName
- 任何class的构造方法，第一行语句必须是调用父类的构造方法。若省略，编译器会自动加一句super();
- 子类不会继承任何父类的构造方法。子类默认的构造方法是编译器自动生成的，不是继承的。
- 类间转型

可以安全地向上转型为更抽象的类型；  <br />  可以强制向下转型，借助instanceof判断；
:::
代码执行顺序：**父类静态代码块 -> 子类静态代码块 -> 父类非静态代码块 -> 父类构造方法 -> 子类非静态代码块 -> 子类构造方法**


## Object
类Object是类层次结构的根

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| protected [Object](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html) | [clone](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#clone())() | 创建并返回此对象的副本。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#equals(java.lang.Object))([Object](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html) obj) | 指示某个其他对象是否“等于”此对象。 |
| [类](https://www.apiref.com/java11-zh/java.base/java/lang/Class.html)<?> | [getClass](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#getClass())() | 返回此 Object的运行时类。 |
| int | [hashCode](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#hashCode())() | 返回对象的哈希码值。 |
| void | [notify](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#notify())() | 唤醒正在此对象监视器上等待的单个线程。 |
| void | [notifyAll](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#notifyAll())() | 唤醒等待此对象监视器的所有线程。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) | [toString](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#toString())() | 返回对象的字符串表示形式。 |
| void | [wait](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#wait())() | 导致当前线程等待它被唤醒，通常是 _通知_或 _中断_ 。 |
| void | [wait](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#wait(long))(long timeoutMillis) | 导致当前线程等待它被唤醒，通常是 _通知_或 _中断_ ，或者直到经过一定量的实时 |
| void | [wait](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html#wait(long,int))(long timeoutMillis, int nanos) | 导致当前线程等待它被唤醒，通常是 _通知_或 _中断_ ，或者直到经过一定量的实时 |


## 多态（Polymorphism)
**覆写（Override）**：子类定义了一个与父类方法签名完全相同的方法  <br />  @Override：让编译器检查是否进行了正确的覆写
```java
class Person {
    public String name;
    public int age;
    
    // 覆写方法，显示更有意义的字符串
    @Override
    public String toString() {
        return "Person:name=" + name;
    }
    
    // equals方法
     @Override
    public boolean equals(Object o) {
        if (o instanceof Person) {
            Person p = (Person) o;
            return Objects.equals(this.name, p.name) && this.age == p.age;
        }
        return false;
    }
    
    // 使用31*h，是为了尽量把不同的Person实例的hashCode()均匀分布到整个int范围
     @Override
    int hashCode() {
        int h = 0;
        h = 31 * h + name.hashCode();
        h = 31 * h + age;
        return h;
    }
}
```

## 内部类
**非静态内部类**
```java
public class Hero {
    private String name; // 姓名
    float hp; // 血量
 
    // 非静态内部类，只有一个外部类对象存在的时候，才有意义
    class BattleScore {
        int kill;
        public void legendary() {
            if (kill >= 8)
                System.out.println(name + "超神！");
            else
                System.out.println(name + "尚未超神！");
        }
    }
 
    public static void main(String[] args) {
        Hero garen = new Hero();
        garen.name = "盖伦";
        // 实例化内部类
        // BattleScore对象只有在一个英雄对象存在的时候才有意义
        // 所以其实例化必须建立在一个外部类对象的基础之上
        BattleScore score = garen.new BattleScore();
        score.kill = 9;
        score.legendary();
    }
}
```
**静态内部类（嵌套类）**
```java
public class Hero {
    public String name;
    protected float hp;
  
    private static void battleWin(){
        System.out.println("battle win");
    }
     
    //敌方的水晶
    static class EnemyCrystal{
        int hp=5000;
         
        //如果水晶的血量为0，则宣布胜利
        public void checkIfVictory(){
            if(hp==0){
                Hero.battleWin();
                 
                //静态内部类不能直接访问外部类的对象属性
                //System.out.println(name + " win this game");
            }
        }
    }
     
    public static void main(String[] args) {
        //实例化静态内部类
        Hero.EnemyCrystal crystal = new Hero.EnemyCrystal();
        crystal.checkIfVictory();
    }
}
```
**匿名类**  <br />  声明一个类的同时实例化它
```java
public abstract class Hero {  
    public static void main(String[] args) {
        // unnamed class
        Hero h = new Hero(){
            //当场实现attack方法
            public void attack() {
                System.out.println("新的进攻手段");
            }
        };
        h.attack();
        //通过打印h，可以看到h这个对象属于Hero$1这么一个系统自动分配的类名
        System.out.println(h);
    }
}
```
**本地类**
```java
public abstract class Hero {
    String name; //姓名
    public abstract void attack();
      
    public static void main(String[] args) {
          
        //与匿名类的区别在于，本地类有了自定义的类名
        class SomeHero extends Hero{
            public void attack() {
                System.out.println( name+ " 新的进攻手段");
            }
        }
         
        SomeHero h  =new SomeHero();
        h.name ="地卜师";
        h.attack();
    }
}
```

## 抽象类 & 接口
**抽象类**  <br />  抽象方法：通过abstract定义的方法，没有实现。  <br />  抽象类：定义了抽象方法的class。无法构造实例。

抽象方法本质：定义接口规范，保证所有子类都有相同的接口实现，利用多态。

**接口（Interface）**

- 没有构造器，不能实例化
- 成员变量默认都使用 `public static final` 修饰，全局静态常量
- 抽象方法默认都使用 `public abstract` 修饰，公共的抽象方法
- 内部类默认都使用 public static 修饰，公共的静态内部类
```java
interface Person {
    String getName();
    
    default void run() {
        System.out.println(getName() + " run");
    }
}

class Student implements Person {
    private String name;
    
    public Student(String name) {
        this.name = name;
    }
    
    public String getName() {
        return this.name;
    }
}
```
|  | Abstract class | Interface |
| --- | --- | --- |
| 继承 | 只能extends一个class | 可以implements多个interface |
| 字段 | 可以定义实例字段 | 不能定义实例字段 |
| 抽象方法 | 可以定义抽象方法 | 可以定义抽象方法 |
| 非抽象方法 | 可以定义非抽象方法 | 可以定义default方法 |

**静态代理**
```java
// 公共接口
interface Task{
	void buy();
}

//代理类
class angent implements Task
{
	private App role;
    
	public angent(App role) {
         this.role=role;
	}
	
	@Override
	public void buy() {
        ready();
        role.buy();
        end();
	}
	
	void ready() {
		System.out.println("Start angent");
	}
	void end() {
		System.out.println("angent endding");
	}
}

//主类
public class App implements Task
{
	@Override
	public void buy() {
         System.out.println("Completed task");
	}
    
	public static void main( String[] args )
    {
        new angent(new App()).buy();
    }
}
```



## JavaBean
一种符合命名规范的class

1. 类使用 public 修饰
1. 有 public 修饰的无参构造器
1. 包含属性的操作方法，即有 public 修饰的 getter/setter 方法


**class Introspector**  <br />  通过分别分析 bean 的类和父类，寻找显式或隐式信息，使用这些信息构建一个全面描述目标 bean 的 BeanInfo 对象  <br />  类方法

- BeanInfo getBeanInfo(Class<?> beanClass)：在 JavaBean 上进行内省，获取其所有成员信息（包括继承的）
- BeanInfo getBeanInfo(Class<?> beanClass, Class<?> stopClass)：在给定的“断”点之下，在 JavaBean 上进行内省，获取其所有成员信息
- String decapitalize(String name)：获得一个字符串并将它转换成普通 Java 变量名称大写形式

interface BeanInfo

- PropertyDescriptor[] getPropertyDescriptors()：获取其中的属性描述器
- MethodDescriptor[] getMethodDescriptors()：获取其中的方法描述器

class PropertyDescriptor 

- Class<?> getPropertyType()：获得属性的类型的 Class 对象
- String getName()：获取此属性名
- Method getReadMethod()：获取属性值的 get 方法
- Method getWriteMethod()：获取属性值的 set 方法
```java
// JavaBean 和 Map 之间的相互转换
public class BeanMapUtils {
    // 把一个 Map 对象转换为一个 JavaBean 对象
    public static <T> T map2bean(Map<String, Object> map, Class<T> beanType) throws Exception {
        T obj = beanType.newInstance();
        BeanInfo beanInfo = Introspector.getBeanInfo(beanType, Object.class);
        PropertyDescriptor[] pds = beanInfo.getPropertyDescriptors();
        for (PropertyDescriptor pd : pds) {
            Object value = map.get(pd.getName());
            pd.getWriteMethod().invoke(obj, value);
        }    
        return obj;
    }
    
    // 把一个 JavaBean 对象转换为以一个 Map 对象
    public static Map<String, Object> bean2map(Object bean) throws Exception {
        Map<String, Object> map = new HashMap<>();
        BeanInfo beanInfo = Introspector.getBeanInfo(bean.getClass(), Object.class);
        PropertyDescriptor[] pds = beanInfo.getPropertyDescriptors();
        for (PropertyDescriptor pd : pds) {
            String name = pd.getName();
            Object value = pd.getReadMethod().invoke(bean);
            map.put(name, value);
        }
        return map;
    }
}
```


# Package
```java
// package 包名.子包名.子子包;
// 必须把该语句作为 Java 文件中的第一条非注释性语句
package com.example.demo;
```

**import**

- 类的全限定名：包名.类名 java.util.Arrays
- 在一个类中使用非同包的类和非 java.lang 包下的类，要使用类的全限定名
- 使用 import 可以省略写包名；而使用 import static 则可以连类名都省略
- import 语句应该出现在 package 语句（如果有的话）之后、类定义之前
```java
import java.util.Arrays; // 导入 java.util 包下的 Arrays 类
import java.util.*; // 导入 java.util 包下所有被当前类使用到的类
```


# 泛型（Generic）
```java
public class Pair<T> {
    private T first;
    private T last;
    public Pair(T first, T last) {
        this.first = first;
        this.last = last;
    }
    public T getFirst() { ... }
    public T getLast() { ... }
    
    // 静态泛型方法应该使用其他类型区分:
    public static <K> Pair<K> create(K first, K last) {
        return new Pair<K>(first, last);
    }
}

// 多泛型
public class Pair<T, K> {
    private T first;
    private K last;
    public Pair(T first, K last) {
        this.first = first;
        this.last = last;
    }
    public T getFirst() { ... }
    public K getLast() { ... }
}
```
Java泛型实现方式：擦拭法（Type Erasure）—— 虚拟机对泛型一无所知，所有的工作都是编译器做的（将T替换成Object）

擦拭法决定了泛型`<T>`：

- 不能是基本类型，例如：int；
- 不能获取带泛型类型的Class，例如：`Pair<String>.class`；
- 不能判断带泛型类型的类型，例如：`x instanceof Pair<String>`；
- 不能实例化T类型，例如：new T()。
```java
// 实例化T类型，须借助额外的Class<T>参数：
public class Pair<T> {
    private T first;
    private T last;
    public Pair(Class<T> clazz) {
        first = clazz.newInstance();
        last = clazz.newInstance();
    }
}

//使用的时候，也必须传入Class<T>。
Pair<String> pair = new Pair<>(String.class);
```
泛型方法要防止重复定义方法，例如：public boolean equals(T obj)；
```java
//换个方法名，避开与Object.equals(Object)的冲突：
public class Pair<T> {
    public boolean same(T t) {
        return this == t;
    }
}
```

`<? extends T>` & `<? super T>`

- `<? extends T>`允许调用读方法T get()获取T的引用，但不允许调用写方法set(T)传入T的引用（传入null除外）；
- `<? super T>`允许调用写方法set(T)传入T的引用，但不允许调用读方法T get()获取T的引用（获取Object除外）。
```python
public class Collections {
    // 把src的每个元素复制到dest中:
    public static <T> void copy(List<? super T> dest, List<? extends T> src) {
        for (int i=0; i<src.size(); i++) {
            T t = src.get(i);
            dest.add(t);
        }
    }
}
```

`<?>`通配符

- 不允许调用`set(T)`方法并传入引用（`null`除外）；
- 不允许调用`T get()`方法并获取`T`引用（只能获取Object引用）。
- `Pair<?>`是所有`Pair<T>`的超类


可以声明带泛型的数组，但不能直接创建带泛型的数组，必须强制转型；
```java
// 借助Class<T>来创建泛型数组：
T[] createArray(Class<T> cls) {
    return (T[]) Array.newInstance(cls, 5);
}

// 利用可变参数创建泛型数组T[]：
public class ArrayHelper {
    @SafeVarargs
    static <T> T[] asArray(T... objs) {
        return objs;
    }
}

String[] ss = ArrayHelper.asArray("a", "b", "c");
Integer[] ns = ArrayHelper.asArray(1, 2, 3);
```


# IO

## BIO
blocking IO，阻塞 IO，面向流(Stream oriented)  <br />  ![](./assets/1648563152531-0080aa0c-1dca-44d6-b358-fdb229662dc3.png)


### 字节流
```java
public class FileStreamDemo {

    private static final String FILEPATH = "temp.log";

    public static void main(String[] args) throws Exception {
        write(FILEPATH);
        read(FILEPATH);
    }

    public static void write(String filepath) throws IOException {
        // 第1步、使用File类找到一个文件
        File f = new File(filepath);

        // 第2步、通过子类实例化父类对象
        OutputStream out = new FileOutputStream(f);
        // 实例化时，默认为覆盖原文件内容方式；如果添加true参数，则变为对原文件追加内容的方式。
        // OutputStream out = new FileOutputStream(f, true);

        // 第3步、进行写操作
        String str = "Hello World\n";
        byte[] bytes = str.getBytes();
        out.write(bytes);

        // 第4步、关闭输出流
        out.close();
    }

    public static void read(String filepath) throws IOException {
        // 第1步、使用File类找到一个文件
        File f = new File(filepath);

        // 第2步、通过子类实例化父类对象
        InputStream input = new FileInputStream(f);

        // 第3步、进行读操作
        byte[] bytes = new byte[(int) f.length()];
        int len = input.read(bytes); // 读取内容
        System.out.println("读入数据的长度：" + len);

        // 第4步、关闭输入流
        input.close();
        System.out.println("内容为：\n" + new String(bytes));
    }

}
```


### 字符流
```java
public class FileReadWriteDemo {

    private static final String FILEPATH = "temp.log";

    public static void main(String[] args) throws IOException {
        write(FILEPATH);
        System.out.println("内容为：" + new String(read(FILEPATH)));
    }

    public static void write(String filepath) throws IOException {
        // 1.使用 File 类绑定一个文件
        File f = new File(filepath);

        // 2.把 File 对象绑定到流对象上
        Writer out = new FileWriter(f);
        // Writer out = new FileWriter(f, true); // 追加内容方式

        // 3.进行读或写操作
        String str = "Hello World!!!\r\n";
        out.write(str);

        // 4.关闭流
        // 字符流操作时使用了缓冲区，并在关闭字符流时会强制将缓冲区内容输出
        // 如果不关闭流，则缓冲区的内容是无法输出的
        // 如果想在不关闭流时，将缓冲区内容输出，可以使用 flush 强制清空缓冲区
        out.flush();
        out.close();
    }

    public static char[] read(String filepath) throws IOException {
        // 1.使用 File 类绑定一个文件
        File f = new File(filepath);

        // 2.把 File 对象绑定到流对象上
        Reader input = new FileReader(f);

        // 3.进行读或写操作
        int temp = 0; // 接收每一个内容
        int len = 0; // 读取内容
        char[] c = new char[1024];
        while ((temp = input.read()) != -1) {
            // 如果不是-1就表示还有内容，可以继续读取
            c[len] = (char) temp;
            len++;
        }
        System.out.println("文件字符数为：" + len);

        // 4.关闭流
        input.close();

        return c;
    }

}
```
字节流转换成字符流

- InputStreamReader(InputStream in, String charsetName)
- OutputStreamWriter(OutputStream out, String charsetName)



## NIO
non-blocking IO，非阻塞 IO，面向缓冲区(Buffer oriented)，以块（block）为基本单位处理数据

缓冲区（Buffer）：一块连续的内存块，是 NIO 读写数据的缓冲  <br />  通道（Channel）：缓冲数据的源头或者目的地，用于读取缓冲或者写入数据，是访问缓冲的接口。

- FileChannel：从文件中读写数据；
- DatagramChannel：通过 UDP 读写网络中数据；
- SocketChannel：通过 TCP 读写网络中数据；
- ServerSocketChannel：可以监听新进来的 TCP 连接，对每一个新进来的连接都会创建一个 SocketChannel。

Selector（选择器）：用于检查一个或多个 NIO Channel 的状态是否处于可读、可写

```java
public static void fastCopy(String src, String dist) throws IOException {

    /* 获得源文件的输入字节流 */
    FileInputStream fin = new FileInputStream(src);

    /* 获取输入字节流的文件通道 */
    FileChannel fcin = fin.getChannel();

    /* 获取目标文件的输出字节流 */
    FileOutputStream fout = new FileOutputStream(dist);

    /* 获取输出字节流的通道 */
    FileChannel fcout = fout.getChannel();

    /* 为缓冲区分配 1024 个字节 */
    ByteBuffer buffer = ByteBuffer.allocateDirect(1024);

    while (true) {

        /* 从输入通道中读取数据到缓冲区中 */
        int r = fcin.read(buffer);

        /* read() 返回 -1 表示 EOF */
        if (r == -1) {
            break;
        }

        /* 切换读写 */
        buffer.flip();

        /* 把缓冲区的内容写入输出文件中 */
        fcout.write(buffer);

        /* 清空缓冲区 */
        buffer.clear();
    }
}
```


## AIO
Asynchronous IO，异步非阻塞 IO



## IO 工具类

### System

- System.out - 一个 PrintStream 流。一般会把你写到其中的数据输出到控制台上
   - System.out.print() —— 输出
   - System.out.println() ——输出并换行
   - System.out.printf()——格式化输出；
- System.err
- System.in - 一个典型的连接控制台程序和键盘输入的 InputStream 流
| 占位符 | 说明 |
| --- | --- |
| %d | 格式化输出整数 |
| %x | 格式化输出十六进制整数 |
| %f | 格式化输出浮点数 |
| %e | 格式化输出科学计数法表示的浮点数 |
| %s | 格式化字符串 |
| %n | 换行 |



### Scanner
获取用户的输入，并对数据进行校验
```java
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // 创建Scanner对象
        System.out.print("Input your name: "); // 打印提示
        String name = scanner.nextLine(); // 读取一行输入并获取字符串
        System.out.print("Input your age: "); // 打印提示
        int age = scanner.nextInt(); // 读取一行输入并获取整数
        System.out.printf("Hi, %s, you are %d\n", name, age); // 格式化输出
    }
}
```


### File

- 全局静态常量
   1. 路径分隔符：char pathSeparatorChar、String pathSeparator
   1. 文件名称分隔符：char separatorChar、String separator

**访问文件名**

- File file = new File(String filepath);
- String getName()：返回此 File 对象所表示的**文件名**或**目录名**，123.txt
- String getPath()：返回此 File 对象所对应的**路径名**，C:/abc/123.txt
- File getAbsoluteFile()：返回此 File 对象的**绝对路径**
- String getAbsolutePath()：返回此 File 对象所对应的**绝对路径名**，C:/abc/123.txt
- File getParentFile()：返回此 File 对象所对应的**父路径**，如果没有，返回 null，C:/abc
- String getParent()：返回此 File 对象所对应的**父路径名**

**检测文件**

- boolean exists()：判断 File 对象所对应的文件或目录是否真实存在
- boolean isFile()：判断 Hie 对象所对应的是否是文件
- boolean isDirectory()：判断 File 对象所对应的是否是目录
- boolean isAbsolute()：判断 File 对象是否是绝对路径
- boolean canRead()：判断 File 对象所对应的文件和目录是否可读
- boolean canWrite()：判断 File 对象所对应的文件和目录是否可写
- boolean canExecute()：判断应用程序是否可以执行此 File 对象所对应的文件或目录

**获取常规文件信息**

- long length()：获取文件内容的长度（单位为字节）（如果此路径名表示一个目录，则返回值是不确定的）
- long lastModified()：获取文件的最后修改时间

**操作文件**

- boolean createNewFile()：当此 File 对象所对应的文件不存在但**对应的父路径存在**时，**新建**一个该 File 对象所指定的**文件**
- static File createTempFile(String prefix, String suffix)：在默认的临时文件目录中创建一个临时的文件，使用给定前缀、 系统生成的随机数和给定后缀作为文件名（prefix 参数至少是 3 字节长，suffix 参数为 null 时，将使用默认的后缀“.tmp”）
- static File createTempFile(String prefix, String suffix, File directory)：在 directory 所指定的目录中创建一个临时的文件，使用给定前缀、 系统生成的随机数和给定后缀作为文件名
- boolean mkdir()：当此 File 对象所对应的目录不存在但**对应的父目录存在**时，新建一个 File 对象所对应的**目录**
- boolean mkdirs()：新建一个 File 对象所对应的**目录**（**包括**所有必需但不存在的**父目录**）
- boolean delete()：删除 File 对象所对应的文件或目录
- void deleteOnExit()：注册一个删除钩子，指定当 Java 虚拟机退出时，删除 File 对象所对应的文件或目录
- boolean renameTo(File dest)：用指定的路径名重新命名对 File 对象所对应的文件或路径
- File[] listFiles()：列出 File 对象的所有子文件和子目录的**绝对路径**，返回 File 数组
- String[] list()：列出 File 对象的所有子文件名和子目录的**名称**，返回 String 数组
- static File[] listRoots()：列出系统所有的**根路径**



**文件过滤器**

- String[] list(FilenameFilter filter)
- File[] listFiles(FilenameFilter filter)：列出 File 对象的所有符合条件的子文件和目录，返回 File 数组

**try(resource)**
```java
import java.io.*;

// 多线程遍历文件内容
public class Main {
    public static void main(String[] args) throws IOException {
        File[] files = (new File("D:/Code")).listFiles(new FilenameFilter() {
            public boolean accept(File dir, String name) {
                return name.endsWith(".txt");
            }
        });
        
        for (var f : files) {
            Thread t = new Thread() {
                public void run() {
                    try (BufferedReader br = new BufferedReader(new FileReader(f))) {
                        String line;
                        int n = 0;
                        System.out.println(f.getName() + "开始遍历");
                        while ((line = br.readLine()) != null) {
                            ++n;
                            System.out.print(f.getName() + " " + n + "行：");
                            System.out.println(line);
                        }
                        System.out.println(f.getName() + "遍历结束");
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            };
            t.start();
            /*try {
                t.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }*/
        }
    }
}
```



### Paths & Files

- Paths 中的类方法  <br />  Path get(String first, String... more)
- Files 中的用于文件拷贝的类方法  <br />  Path copy(Path source, Path target, CopyOption... options)  <br />  long copy(InputStream in, Path target, CopyOption... options)  <br />  long copy(Path source, OutputStream out)
- Files 中其它的类方法：isHidden、exists、createFile、move、deleteIfExists、newBufferedReader、newBufferedWriter、readAllLines、lines、size、write、list、walk、find、probeCon

读
```java
// 默认使用UTF-8编码读取:
String content1 = Files.readString(Paths.get("/path/to/file.txt"));
// 可指定编码:
String content2 = Files.readString(Paths.get("/path/to/file.txt"), StandardCharsets.ISO_8859_1);
// 按行读取并返回每行内容:
List<String> lines = Files.readAllLines(Paths.get("/path/to/file.txt"));
```
写
```java
// 写入二进制文件:
byte[] data = ...
Files.write(Paths.get("/path/to/file.txt"), data);
// 写入文本并指定编码:
Files.writeString(Paths.get("/path/to/file.txt"), "文本内容...", StandardCharsets.ISO_8859_1);
// 按行写入文本:
List<String> lines = ...
Files.write(Paths.get("/path/to/file.txt"), lines);
```


# 异常（Exception）
![](https://images2017.cnblogs.com/blog/858860/201709/858860-20170911125844719-1230755033.png#crop=0&crop=0&crop=1&crop=1&id=fUCkL&originHeight=458&originWidth=718&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

**Throwable**

- 非检查的异常（unckecked exception）：Error 和 RuntimeException 以及他们的子类。
- 检查的异常（checked exception）：**必须显式处理**（捕获或抛出，使用try 或throws），否则编译不通过。

- 实例方法
   - String getMessage()：返回该异常的描述信息（提示给用户）
   - String toString()：返回该异常的类型和描述信息（不用）
   - void printStackTrace()：打印异常的跟踪栈信息到控制台，包括异常的类型、异常的原因、异常出现的位置（开发和调试）

**捕获异常**
```java
try{}
[catch(){} 
finally{}]
```
在catch中抛出异常，不会影响finally的执行。JVM会先执行finally，然后抛出异常。  <br />  finally抛出异常后，原来在catch中准备抛出的异常就“消失”了，因为只能抛出一个异常。

如果一个方法没有捕获到一个检查性异常，那么该方法必须使用 **throws** 关键字来声明。throws 关键字放在方法签名的尾部。  <br />  或使用 **throw** 关键字抛出一个异常，无论它是新实例化的还是刚捕获到的。
```java
public class Main {
    public static void main(String[] args) throws Exception {
        Exception origin = null;
        try {
            System.out.println(Integer.parseInt("abc"));
        } catch (Exception e) {
            origin = e;
            throw e;
        } finally {
            Exception e = new IllegalArgumentException();
            if (origin != null) {
                e.addSuppressed(origin);
            }
            throw e;
        }
    }
}
```
**自定义异常**
```java
public class BaseException extends RuntimeException {
    public BaseException() {
        super();
    }
    public BaseException(String message, Throwable cause) {
        super(message, cause);
    }
    public BaseException(String message) {
        super(message);
    }
    public BaseException(Throwable cause) {
        super(cause);
    }
}
```
**断言（assert）**  <br />  JVM默认关闭断言指令，即遇到assert语句就自动忽略了，要执行assert语句，必须给Java虚拟机传递-enableassertions（可简写为-ea）参数启用断言  <br />  使用assert语句时，还可以添加一个可选的断言消息：
```java
assert expression [ : "message" ];
```
断言失败时会抛出AssertionError，导致程序结束退出，用于开发和测试阶段。

# 函数式编程（Functional Programming）

## Lambda表达式
```java
(parameters) -> expression
// 或 
(parameters) -> { statements; }
```
参数类型可以省略，编译器可以自动推断。  <br />  在 Lambda 主体中引用的局部变量必须使用 final 修饰或事实上最终的（类似匿名内部类）

排序函数
```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String[] array = new String[] { "Apple", "Orange", "Banana", "Lemon" };
        
        //lambda
        Arrays.sort(array, (s1, s2) -> { return s1.compareTo(s2);});
        // 引用静态方法
        Arrays.sort(array, Main::cmp);
        //引用对象方法
        Arrays.sort(array, String::compareTo);
        
        //接口的实现类
        String[] array = Arrays.sort(array, new Comparator<String>() {
                public int compare(String s1, String s2) {
                    return s1.compareTo(s2);
                }
            });
            
        System.out.println(String.join(", ", array));
    }
    
    static int cmp(String s1, String s2) {
        return s1.compareTo(s2);
    }
}

//Lambda表达式
List list2 = getList(()->new ArrayList());

//引用构造器
List list3 = getList(ArrayList::new);
```


## 函数式接口
`_@_FunctionalInterface`  <br />  只定义了单方法的接口
```java
@FunctionalInterface
public interface Callable<V> {
    V call() throws Exception;
}
```

Built-in Functional Interfaces(内置函数接口)

| 函数式接口 | 抽象方法 | 函数描述符 | 默认方法 | 静态方法 |
| --- | --- | --- | --- | --- |
| Comparator<T> | int compare(T o1, T o2) | (T,T) -> int | reversed,  <br />  thenComparing | naturalOrder,  <br />  comparing,  <br />  comparingInt,  <br />  comparingLong,  <br />  comparingDouble,  <br />  reverseOrder,  <br />  nullsFirst,  <br />  nullsLast |
| Runnable | void run() | () -> void |  |  |
| Callable<V> | V call() | () -> V |  |  |
| Predicate<T> | boolean test(T t) | T -> boolean | and, or, negate |  |
| BiPredicate<T, U> | boolean test(T t, U u) | (T,U) -> boolean |  |  |
| Consumer<T> | void accept(T t) | T -> void | andThen |  |
| BiConsumer<T, U> | void accept(T t, U u) | (T,U) -> void |  |  |
| Supplier<T> | T get() | () -> T |  |  |
| Function<T,R> | R apply(T t) | T -> R | andThen, compose | identity |
| BiFunction<T, U, R> | R apply(T t, U u) | (T,U) -> R |  |  |
| UnaryOperator<T> | T apply(T t) | T -> T |  |  |
| BinaryOperator<T> | Tt apply(T t1, T t2) | (T,T) -> T |  | minBy, maxBy |



## Stream
**筛选**

- `Stream<T> filter(Predicate<T> predicate)`：用谓词筛选，返回一个包括所有符合谓词的元素的流
- `Stream<T> distinct()`：返回一个元素各异（根据流所生成元素的 **hashCode 和 equals 方法**实现）的流

**切片**

- `Stream<T> limit(long maxSize)`：返回一个不超过给定长度的流
- `Stream<T> skip(long n)`：返回一个扔掉了前 n 个元素的流

**映射**  <br />  提取或转换流中的元素

- `Stream<R> map(Function<T, R> mapper)`：对流中每一个元素应用函数（元素映射为新元素）
- `Stream<R> flatMap(Function<T, Stream<R>> mapper)`：把一个流中的每个元素都换成另一个**流**，然后把所有转换的流**连接**起来成为一个流（流的扁平化）（元素映射为流）

**查找和匹配**

- boolean allMatch(Predicate<T> predicate)：流中的元素是否都能匹配给定的谓词
- boolean anyMatch(Predicate<T> predicate)：流中是否有一个元素能匹配给定的谓词
- boolean noneMatch(Predicate<T> predicate)：流中是否没有任何元素与给定的谓词匹配
- Optional<T> findAny()：返回当前流中的任意元素
- Optional<T> findFirst()：返回当前流中的第一个元素

**归约**  <br />  将流中所有的元素迭代合并成一个结果

- Optional<T> reduce(BinaryOperator<T> accumulator)
- T reduce(T identity, BinaryOperator<T> accumulator)：初始值 identity，accumulator 将两个流元素结合起来并产生一个新值（适用于不可变的归约）
- U reduce(U identity, BiFunction<U, T, U> accumulator, BinaryOperator<U> combiner)：
- Optional<T> min(Comparator<T> comparator)：根据提供的 Comparator 返回此流的最小元素
- Optional<T> max(Comparator<T> comparator)：根据提供的 Comparator 返回此流的最大元素
- R collect(Collector<T, A, R> collector)
- R collect(Supplier<R> supplier, BiConsumer<R, T> accumulator, BiConsumer<R, R> combiner)：自定义收集器的供应源 supplier、累加器 accumulator、组合器 combiner


**方法**

- 转换操作：map()，filter()，sorted()，distinct()；
- 合并操作：concat()，flatMap()；
- 并行处理：parallel()；
- 聚合操作：reduce()，collect()，count()，max()，min()，sum()，average()；
- 其他操作：allMatch(), anyMatch(), forEach()。
```java
// 将配置文件的每一行配置通过map()和reduce()操作聚合成一个Map<String, String>
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 按行读取配置文件:
        List<String> props = List.of("profile=native", "debug=true", "logging=warn", "interval=500");
        Map<String, String> map = props.stream()
                // 把k=v转换为Map[k]=v:
                .map(kv -> {
                    String[] ss = kv.split("\\=", 2);
                    return Map.of(ss[0], ss[1]);
                })
                // 把所有Map聚合到一个Map:
                .reduce(new HashMap<String, String>(), (m, kv) -> {
                    m.putAll(kv);
                    return m;
                });
        // 打印结果:
        map.forEach((k, v) -> {
            System.out.println(k + " = " + v);
        });
    }
}
```



## Optional<T>

- 一个容器类，代表一个值存在或不存在
- 基本类型的 Optional 对象：OptionalInt、OptionalLong、OptionalDouble

静态方法

- Optional<T> empty()：返回一个空的 Optional 实例
- Optional<T> of(T value)：返回具有指定非空值的 Optional 实例，如果该值为 null，则抛出一个 NullPointerException 异常
- Optional<T> ofNullable(T value)：返回一个指定值的 Optional，如果值为 null，则返回一个空的 Optional

实例方法

- boolean isPresent()：在值存在时就返回 true，否则返回 false
- void ifPresent(Consumer<T> block)：在值存在的时候执行给定的代码块，否则什么也不做
- Optional<U> map(Function<T, U> mapper)：如果值存在，就对该值执行提供的 mapping 函数调用，否则返回一个空的 Optional 对象
- Optional<U> flatMap(Function<T, Optional<U>> mapper)：如果值存在，就对该值执行提供的 mapping 函数调用，返回一个 Optional 类型的值，否则就返回一个空的 Optional 对象（将两层的 Optional 对象转换为单一 Optional 对象）
- Optional<T> filter(Predicate<T> predicate)：如果值存在并且满足提供的谓词，就返回**包含该值**的 Optional 对象；否则返回一个空的 Optional 对象
- T get()：有值则返回值，否则抛出一个 NoSuchElementException 异常
- T orElse(T other)：有值则返回值，否则返回 other
- T orElseGet(Supplier<T> other)：有值则返回值，否则调用 other 并返回该调用的结果
- T orElseThrow(Supplier<X> exceptionSupplier)：有值则返回值，否则抛出由 exceptionSupplier 创建的异常


# 反射（Reflection）
Java的反射：程序在运行期可以拿到一个对象的所有信息，即通过Class实例获取class信息的方法
```java
//方法一：直接通过一个class的静态变量class获取：
Class cls = String.class;

//方法二：通过该实例变量提供的getClass()方法获取：
String s = "Hello";
Class cls = s.getClass();

//方法三：知道一个class的完整类名，可以通过静态方法Class.forName()获取：
Class cls = Class.forName("java.lang.String");
```
从Class实例获取获取的基本信息
```java
public class Main {
    public static void main(String[] args) {
        printClassInfo("".getClass());
        printClassInfo(String[].class);
        printClassInfo(int.class);
    }
    static void printClassInfo(Class cls) {
        System.out.println("Class name: " + cls.getName());
        System.out.println("Simple name: " + cls.getSimpleName());
        if (cls.getPackage() != null) {
            System.out.println("Package name: " + cls.getPackage().getName());
        }
        System.out.println("is interface: " + cls.isInterface());
        System.out.println("is enum: " + cls.isEnum());
        System.out.println("is array: " + cls.isArray());
        System.out.println("is primitive: " + cls.isPrimitive());
    }
}
```
JVM总是动态加载class，可以在运行期根据条件来控制加载class。

获取 Class 对应类所包含的构造器（由 Constructor 对象表示）

- Constructor<T> getConstructor(Class<?>… parameterTypes)：获取此 Class 对象对应类的、带指定形参列表的 public 构造器
- Constructor<T> getDeclaredConstructor(Class<?>.. parameterTypes)：获取此 Class 对象对应类的、带指定形参列表的构造器，与访问权限无关
- Constructor<?>[] getConstructors()：获取此 Class 对象对应类的所有 public 构造器
- Constructor<?>[] getDeclaredConstructors()：获取此 Class 对象对应类的所有构造器，与访问权限无关

获取 Class 对应类所包含的方法（由 Method 对象表示）

- Method getMethod(String name, Class<?>.. parameterTypes)：获取此 Class 对象对应类的、带指定形参列表的 public 方法（包括继承的方法）
- Method getDeclaredMethod(String name, Class<?>.. parameterTypes)：获取此 Class 对象对应类的、带指定形参列表的方法，与访问权限无关（不包括继承的方法）
- Method[] getMethods()：获取此 Class 对象所表示的类的所有 public 方法（包括继承的方法）
- Method[] getDeclaredMethods()：获取此 Class 对象对应类的全部方法，与访问权限无关（不包括继承的方法）

访问 Class 对应类所包含的字符（由 Field 对象表示）

- Field getField(String name)：获取此 Class 对象对应类的、指定名称的 public 成员变量（包括继承的字段）
- Field getDeclaredField(String name)：获取此 Class 对象对应类的、指定名称的成员变量，与成员变量的访问权限无关（不包括继承的字符）
- Field[] getFields()：返回此 Class 对象对应类的所有 public 成员变量（包括继承的字符）
- Field[] getDeclaredFields()：获取此 Class 对象对应类的全部成员变量，与成员变量的访问权限无关（不包括继承的字符）

其它实例方法

- ClassLoader getClassLoader()：获取该类的类加载器
- Class<?>[] getInterfaces()：获取此 Class 对象所表示的类或接口实现的接口
- Class<? super T> getSuperclass()：获取该 Class 对象对应类的超类的 Class 对象 int getModifiers()：获取此类或接口的所有修饰符（返回的整数应使用 Modifier 工具类的方法来解码）
- Package getPackage()：获取此类的包
- String getName()：以字符串形式返回此 Class 对象所表示的类的名称
- String getSimpleName()：以字符串形式返回此 Class 对象所表示的类的简称 Class<?> getComponentType()：返回表示数组元素类型的 Class
- isArray()、isEnum()
- isInterface()、isInstance(Object obj)
- isAssignableFrom(Class<?> cls)：判定此 Class 对象所表示的类或接口是否是 cls，或者是否是 cls 的超类或超接口
- T cast(Object obj)：将一个对象强制转换成此 Class 对象所表示的类或接口
- Type getGenericSuperclass()：返回表示此 Class 所表示的实体（类、接口、基本类型或 void）的直接超类的 Type
- Class<?> getComponentType()：返回数组元素类型的 Class



# JDBC
nysql-connector-java.jar包：[https://mvnrepository.com/artifact/mysql/mysql-connector-java](https://mvnrepository.com/artifact/mysql/mysql-connector-java)

maven引入
```java
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>8.0.19</version>
</dependency>
```
```java
import java.sql.*;
 
public class MySQLDemo {
 
    // MySQL 8.0 以下版本 - JDBC 驱动名及数据库 URL
    // static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
    //static final String DB_URL = "jdbc:mysql://localhost:3306/RUNOOB";
 
    // MySQL 8.0 以上版本 - JDBC 驱动名及数据库 URL
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";  
    static final String DB_URL = "jdbc:mysql://localhost:3306/RUNOOB?useSSL=false&serverTimezone=UTC";
 
    // 数据库的用户名与密码，需要根据自己的设置
    static final String USER = "root";
    static final String PASS = "password";
 
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try{
            // 注册 JDBC 驱动
            Class.forName(JDBC_DRIVER);
        
            // 打开链接
            System.out.println("连接数据库...");
            conn = DriverManager.getConnection(DB_URL,USER,PASS);
        
            // 执行查询
            System.out.println(" 实例化Statement对象...");
            stmt = conn.createStatement();
            String sql;
            sql = "SELECT id, name, url FROM websites";
            ResultSet rs = stmt.executeQuery(sql);
        
            // 展开结果集数据库
            while(rs.next()){
                int id  = rs.getInt("id");// 可以使用字段名
                String name = rs.getString(2);// 也可以使用字段的顺序，从1开始
                String url = rs.getString("url");
    
                // 输出数据
                System.out.print("ID: " + id + ", 站点名称: " + name) + ", 站点 URL: " + url);
            }
            // 完成后关闭
            rs.close();
            stmt.close();
            conn.close();
        }catch(SQLException se){
            // 处理 JDBC 错误
            se.printStackTrace();
        }catch(Exception e){
            // 处理 Class.forName 错误
            e.printStackTrace();
        }finally{
            // 关闭资源
            try{
                if(stmt!=null) stmt.close();
            }catch(SQLException se2){
            }// 什么都不做
            try{
                if(conn!=null) conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }
        System.out.println("Goodbye!");
    }
}
```
| SQL数据类型 | Java数据类型 |
| --- | --- |
| BIT, BOOL | boolean |
| INTEGER | int |
| BIGINT | long |
| REAL | float |
| FLOAT, DOUBLE | double |
| CHAR, VARCHAR | String |
| DECIMAL | BigDecimal |
| DATE | java.sql.Date, LocalDate |
| TIME | java.sql.Time, LocalTime |

**prepareStatement + batch**
```java
public static void main(String[] agr) throws ClassNotFoundException {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
            String[] web=new String[] {"baidu","google","yahoo"};
		String sql = "insert into site value(null,?,?,?)";
		try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/web
                  ?useSSL=true&serverTimezone=GMT", "root", "password");
		PreparedStatement ps = conn.prepareStatement(sql,Statement.RETURN_GENERATED_KEYS)) {
			for(int i=0;i<web.length;++i) {
				ps.setInt(1,i);
				ps.setString(2, web[i]);
				ps.setString(3, fun(web[i]));
				ps.addBatch();
			}
			int[] ns=ps.executeBatch();
			for (int n : ns) {
			        System.out.println(n + " inserted."); // batch中每个SQL执行的结果数量
			}
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
	System.out.println("excuted");
}
             
public static String fun(String a) {
		return "www."+a+".com";
}
```
**事务**
```java
conn.setAutoCommit(false); // 关闭自动提交:
stmt.execute("update site set name='google' where id=4");
stmt.execute("update site set url=\"www.google.com\" where id=4");
conn.commit(); // 提交事务:
```
**连接池**
```java
import java.sql.*;
import jdbc.ConnectionPool;
   
public class TestConnectionPool {
    public static void main(String[] args) {
        ConnectionPool cp = new ConnectionPool(3);
        for (int i = 0; i < 100; i++) {
            new WorkingThread("working thread" + i, cp).start();
        }
    }
}
   
class WorkingThread extends Thread {
    private ConnectionPool cp;
   
    public WorkingThread(String name, ConnectionPool cp) {
        super(name);
        this.cp = cp;
    }
   
    public void run() {
        Connection c = cp.getConnection();
        System.out.println(this.getName()+ ":\t 获取了一根连接，并开始工作"  );
        try (Statement st = c.createStatement()){
             
            //模拟时耗１秒的数据库ＳＱＬ语句
            Thread.sleep(1000);
            st.execute("select * from hero");
   
        } catch (SQLException | InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        cp.returnConnection(c);
    }
}
```

# Network
```java
import java.io.*;
import java.net.*;
public class Main {
	public static void main(String[] agr) throws IOException {
            // 查询IP
		InetAddress host = InetAddress.getLocalHost();
		String ip = host.getHostAddress();
		System.out.println("ip:" + ip);
  
          // 使用PING
		Process p = Runtime.getRuntime().exec("ping www.tencent.com");
		BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
		String Line = null;
		StringBuilder sb = new StringBuilder();
		while ((Line = br.readLine()) != null) {
			if (Line.length() != 0)
				sb.append(Line + "\r\n");
		}
		System.out.println("result:");
		System.out.println(sb.toString());
	}
}
```
UDP
```java
public class Server {
	public static void main(String[] args) throws Exception {
		System.out.println("接受启动中···");
		DatagramSocket server=new DatagramSocket(9999);
		byte[] container=new byte[1024*60];
		DatagramPacket packet=new DatagramPacket(container,0,container.length);
		server.receive(packet);
		byte[] datas=packet.getData();
		System.out.println(new String(datas,0,datas.length));
		server.close();
	}
}
public class Client{
	public static void main(String[] args) throws Exception {
		System.out.println("发送启动中···");
		DatagramSocket client=new DatagramSocket(8888);
		String data="Web Programming";
		byte[] datas=data.getBytes();
		DatagramPacket packet=new DatagramPacket(datas,0, datas.length,
				new InetSocketAddress("localhost",9999));
		client.send(packet);
		client.close();
	}
}
```
**Socket**
```java
import java.net.*;
import java.io.*;
import java.util.*;
//服务端
public class Server {
 
    public static void main(String[] args) {
        try {
 
            ServerSocket ss = new ServerSocket(8888);
 
            System.out.println("监听在端口号:8888");
            Socket s = ss.accept();
            System.out.println("有连接过来" + s);
            
            InputStream is = s.getInputStream();
 
            //把输入流封装在DataInputStream
            DataInputStream dis = new DataInputStream(is);
            //使用readUTF读取字符串
            String msg = dis.readUTF();
            System.out.println(msg);
            dis.close();
            s.close();
            ss.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
    }
}
// 客户端
public class Client {
 
    public static void main(String[] args) {
 
        try {
            Socket s = new Socket("127.0.0.1", 8888);
 
            OutputStream os = s.getOutputStream();
            DataOutputStream dos = new DataOutputStream(os);
             
            //使用Scanner读取控制台的输入，并发送到服务端
            Scanner sc = new Scanner(System.in);
             
            String str = sc.next();
            dos.writeUTF(str);
             
            dos.close();
            s.close();
        } catch (UnknownHostException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
```

**RMI（Remote Method Invocation，远程调用）**  <br />  一个JVM中的代码可以通过网络实现远程调用另一个JVM的某个方法  <br />  RMI要求服务器和客户端共享同一个接口
```java
import java.rmi.Remote
public interface WorldClock extends Remote {
    LocalDateTime getLocalDateTime(String zoneId) throws RemoteException;
}
```
服务器
```java
// 服务器的实现类
public class WorldClockService implements WorldClock {
    @Override
    public LocalDateTime getLocalDateTime(String zoneId) throws RemoteException {
        return LocalDateTime.now(ZoneId.of(zoneId)).withNano(0);
    }
}
// 将WorldClock实例注册到RMI服务
public class Server {
    public static void main(String[] args) throws RemoteException {
        System.out.println("create World clock remote service...");
        // 实例化一个WorldClock:
        WorldClock worldClock = new WorldClockService();
        // 将此服务转换为远程服务接口:
        WorldClock skeleton = (WorldClock) UnicastRemoteObject.exportObject(worldClock, 0);
        // 将RMI服务注册到1099端口:
        Registry registry = LocateRegistry.createRegistry(1099);
        // 注册此服务，服务名为"WorldClock":
        registry.rebind("WorldClock", skeleton);
    }
}
```
客户端
```java
public class Client {
    public static void main(String[] args) throws RemoteException, NotBoundException {
        // 连接到服务器localhost，端口1099:
        Registry registry = LocateRegistry.getRegistry("localhost", 1099);
        // 查找名称为"WorldClock"的服务并强制转型为WorldClock接口:
        WorldClock worldClock = (WorldClock) registry.lookup("WorldClock");
        // 正常调用接口方法:
        LocalDateTime now = worldClock.getLocalDateTime("Asia/Shanghai");
        // 打印调用结果:
        System.out.println(now);
    }
}
```


# Web

## Servlet
Server Applet，即小服务程序或服务连接器。Servlet 是 Java 编写的服务器端程序，具有独立于平台和协议的特性，主要功能在于交互式地浏览和生成数据，生成动态 Web 内容。
```java
public interface Servlet {
    void init(ServletConfig var1) throws ServletException;

    ServletConfig getServletConfig();

    void service(ServletRequest var1, ServletResponse var2) throws ServletException, IOException;

    String getServletInfo();

    void destroy();
}
```
Servlet 生命周期

1. **加载** - 第一个到达服务器的 HTTP 请求被委派到 Servlet 容器。容器通过类加载器使用 Servlet 类对应的文件加载 servlet；
1. **初始化** - Servlet 通过调用 **init ()** 方法进行初始化。
1. **服务** - Servlet 调用 **service()** 方法来处理客户端的请求。
1. **销毁** - Servlet 通过调用 **destroy()** 方法终止（结束）。
1. **卸载** - Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。

示例

- Servlet实例必须由Servlet容器自动创建，并给每个Servlet类创建唯一实例；
- Servlet容器会使用多线程执行doGet()或doPost()方法
```java
@WebServlet(urlPatterns = "/")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        // 设置响应类型:
        resp.setContentType("text/html");
        // 获取输出流:
        PrintWriter pw = resp.getWriter();
        // 写入响应:
        pw.write("<h1>Hello, world!</h1>");
        // 强制输出:
        pw.flush();
    }
}
```


**HttpServletRequest**

1. 获取请求行信息  <br />  String getMethod()：获取请求方式  <br />  String getRequestURI()：获取请求的 URI，从协议名称一直到查询字符串的那一部分，即返回请求行中的资源名，包括上下文路径，如 /test/index.html  <br />  StringBuffer getRequestURL()：获取请求的 URL，包含协议、服务器名、端口号、资源路径信息，不包含查询字符串参数，即浏览器地址栏的内容  <br />  public String getQueryString()：获取包含在请求 URL 中路径后面的查询字符串，即`?`后的字符串  <br />  String getContextPath()：获取上下文路径，即 `<Context />` 元素的 path 属性值
1. 获取请求头信息  <br />  String getHeader(String name)：获取指定请求头的值  <br />  Enumeration<String> getHeaderNames()：获取所有请求头的名称  <br />  Enumeration<String> getHeaders(String name)：获取指定请求头的多个值  <br />  int getIntHeader(String name)：获取指定请求头的值，并将该值转为整数值  <br />  Locale getLocale()：根据 **Accept-Language** 请求头返回客户端将在其中接受内容的**首选 Locale**，如果客户端请求未提供 Accept-Language 请求头，则返回服务器的默认语言环境  <br />  Enumeration<Locale> getLocales()
1. 获取请求参数  <br />  String getParameter(String paramName)：根据参数名称，获取对应请求参数的值  <br />  String[] getParameterValues(String paramName)：根据参数名称，获取对应请求参数的多个所组成的数组  <br />  Map getParameterMap()：获取所有请求参数名和参数值所组成的 Map 对象  <br />  Enumeration<String> getParameterNames()：获取所有请求参数名所组成的 Enumeration 对象
1. 操作 request 范围的属性  <br />  setAttribute(String attrName, Object value)、getAttribute(String attrName)
1. 执行请求转发（forward）或请求包含（include）
   - HttpServletRequest 类提供了一个 getRequestDispatcher (String path) 方法（获取请求分发器），其中 path 就是希望 forward 或者 include 的目标路径（以斜线开头表示当前 web 应用的根路径，不以斜线开头表示相对路径），该方法返回 **RequestDispatcher**，该对象提供了如下两个方法：
      1. void forward(ServletRequest request, ServletResponse response)：执行 forward
      1. void include(ServletRequest request, ServletResponse response)：执行 include
   - forward 用户请求时，请求参数和 request 范围的属性都不会丢失
6. 获取网络信息  <br />  String getRemoteAddr()：返回发出请求的客户机的 IP 地址
6. 其它  <br />  ServletInputStream getInputStream()：以二进制数据形式获取请求正文，返回输入流  <br />  BufferedReader getReader()：获取请求正文


**HttpServletResponse**  <br />  常用方法

- void setCharacterEncoding(String charset)：设置将发送到客户端的响应的字符编码
- void setContentType(String type)：设置将发送到客户端的响应的内容类型（MIME 类型、编码方式），如 "text/html; charset=UTF-8"、"application/x-msdownload"
- void setHeader(String name, String value)：用给定名称和值设置响应头
- void setStatus(int sc)：设置此响应的状态代码
- ServletOutputStream getOutputStream()：获取响应输出字节流，可用于文件下载
- PrintWriter getWriter()：获取可将字符文本发送到客户端的字符输出流
- void sendRedirect(String path)：重新向 path 资源发送请求，path 需加上上下文路径（当以 http 开头时，表示重定向到外部的一个资源）
- String encodeURL(String url)：通过将会话 ID 包含在指定 URL 中对该 URL 进行编码，如果不需要编码，则返回未更改的 URL（URL 重写，用于不支持 cookie 的浏览器）



## Filter
对用户请求进行预处理，也可以对 HttpServletResponse 进行后处理
```java
@WebFilter(filterName = "CharsetFilter",
        urlPatterns = "/*",  //对所有的web资源进行拦截
        initParams = {
                @WebInitParam(name = "charset", value = "utf-8") // 初始化的参数
        })
public class CharsetFilter implements Filter {
    private String filterName;
    private String charset;

    public void init(FilterConfig config) throws ServletException {
        filterName = config.getFilterName();
        charset = config.getInitParameter("charset");

        System.out.println("过滤器名称：" + filterName);
        System.out.println("字符集编码：" + charset);
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        // 对request和response进行一些处理，然后交给下一个过滤器或Servlet处理
		System.out.println(filterName + "doFilter()");
        req.setCharacterEncoding(charset);
        resp.setCharacterEncoding(charset);
        chain.doFilter(req, resp);
    }

    public void destroy() {
        System.out.println(filterName + "销毁");
    }
}
```


## Listener
监听 Web 应用的内部事件

- ServletContextListener：用于监听 Web 应用的启动和关闭
- ServletContextAttributeListener：用于监听 application 内属性的改变（被添加、删除、替换）
- ServletRequestListener：用于监听用户请求的初始化和销毁
- ServletRequestAttributeListener：用于监听 request 内属性的改变（被添加、删除、替换）
- HttpSessionListener：用于监听 session 的创建和销毁（可以通过该监听器监听系统的在线用户）
- HttpSessionAttributeListener：用于监听 session 内属性的改变（被添加、删除、替换）
```java
@WebListener(value = "servletContextListener")
public class ContextListener implements ServletContextListener, ServletContextAttributeListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        /*servletContext创建时调用*/
        System.out.println("项目启动了");
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        /*servletContext销毁时调用*/
        System.out.println("项目停止了");
    }
    
    @Override
    public void attributeAdded(ServletContextAttributeEvent scae) {
        /* 添加属性时调用 */
        System.out.println("新增的属性："+scae.getName()+":"+scae.getValue());
    }

    @Override
    public void attributeRemoved(ServletContextAttributeEvent scae) {
        /*属性移除时调用*/
        System.out.println("移除的属性："+scae.getName()+":"+scae.getValue());
    }

    @Override
    public void attributeReplaced(ServletContextAttributeEvent scae) {
        /*属性替换时调用（修改值）*/
        System.out.println("替换的属性："+scae.getName()+":"+scae.getValue());
    }
}
```








# 国际化

定义不同语种的模板  <br />  Java 中将多语言文本存储在格式为 properties 的资源文件中，在`src/main/resources/locales` 路径下  <br />  `<资源名>_<语言代码>_<国家/地区编码>.properties`

JDK 的 bin 目录下有一个将非 ASCII 字符转为 Unicode 编码的工具：**native2ascii**。  <br />  `native2ascii [-reverse] [-encoding 编码] [输入文件 [输出文件]]`

java.util.Locale 对象表示了特定的地理、政治和文化地区
```java
// 初始化一个通用英语的locale.
Locale locale1 = new Locale("en");
// 初始化一个加拿大英语的locale.
Locale locale2 = new Locale("en", "CA");
// 初始化一个美式英语变种硅谷英语的locale
Locale locale3 = new Locale("en", "US", "SiliconValley");
// 根据Locale常量初始化一个简体中文
Locale locale4 = Locale.SIMPLIFIED_CHINESE;
```

java.util.ResourceBoundle	加载本地化资源文件的工具类
```java
String baseName = "realpath/bundleName";

// 根据语言+地区编码初始化
ResourceBundle rbUS = ResourceBundle.getBundle(baseName, new Locale("en", "US"));
// 根据Locale常量初始化
ResourceBundle rbZhCN = ResourceBundle.getBundle(baseName, Locale.SIMPLIFIED_CHINESE);
// 获取本地系统默认的Locale初始化
ResourceBundle rbDefault = ResourceBundle.getBundle(baseName);
//等价 ResourceBundle rbDefault =ResourceBundle.getBundle(baseName, Locale.getDefault());


System.out.println("us-US:" + String.format(rbUS.getString("time"), "08:00"));
System.out.println("zh-CN：" + rbZhCN.getString("key"));
```

**支持本地化的工具类**  <br />  NumberFormat
```java
double num = 123456.78;
NumberFormat format = NumberFormat.getCurrencyInstance(Locale.SIMPLIFIED_CHINESE);
System.out.format("%f 的本地化（%s）结果: %s", num, Locale.SIMPLIFIED_CHINESE, format.format(num));
```
DateFormat
```java
Date date = new Date();
DateFormat df = DateFormat.getDateInstance(DateFormat.MEDIUM, Locale.SIMPLIFIED_CHINESE);
System.out.format("%s 的本地化（%s）结果: %s\n", date, Locale.SIMPLIFIED_CHINESE, df.format(date));
```
Messageformat 提供一种与语言无关的拼接消息的方式
```java
String pattern = "{0}，你好！你于  {1} 消费  {2} 元。";
Object[] params = {"Jack", new GregorianCalendar().getTime(), 8888};
MessageFormat mf = new MessageFormat(pattern, Locale.SIMPLIFIED_CHINESE);
String msg = mf.format(params);
System.out.println(msg);
```



