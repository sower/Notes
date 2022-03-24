
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
 * @auther liaoxuefeng
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



**注解（Annotation）**  <br />  放在Java源码的类、方法、字段、参数前的一种特殊“注释”  <br />  注解则可以被编译器打包进入class文件，因此，注解是一种用作标注的“元数据”。

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

var 自动推断
```java
var sb = new StringBuilder();
```
常量

- 字面量常量 / 直接量
- final 定义的变量

# 数据类型
**基本类型**

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

- 对象、数组、字符串都是引用数据类型。
- 一个引用变量可以用来引用任何与之兼容的类型。

相等判断  <br />  == ：表示引用相等  <br />  equals()方法：引用类型的变量内容相等


### String

- String：不可修改的字符串
- StringBuilder：一个可变对象，可以预分配缓冲区，往StringBuilder中新增字符时，不会创建新的临时对象
- StringBuffer：早期的StringBuilder的线程安全版本，速度略差
- StringJoiner ：拼接字符串时，可额外附加一个“开头”和“结尾”。

public final class **String**  <br />  extends Object  <br />  implements Serializable, Comparable, CharSequence

"""...""" 表示多行字符串（Text Blocks）  <br />  常用构造器  <br />  String(byte[] bytes, int offset, int length, String charsetName)：使用指定的字符集将 byte[] 数组从 offset 开始、长度为 length 的子数组解码成字符串（构造器声明上抛出了异常）  <br />  String(char[] value, int offset, int count)：将字符数组从 offset 开始、长度为 count 的字符元素连缀成字符串  <br />  实例方法

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


**regex**
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
if(布尔表达式 1){
   //如果布尔表达式 1的值为true执行代码
}else if(布尔表达式 2){
   //如果布尔表达式 2的值为true执行代码
}
···
else {
   //如果以上布尔表达式都不为true执行代码
}
switch(expression){
    case value :
       //语句
       break; //可选
    ···
    default : //可选
       //语句
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
while( 布尔表达式 ) {
  //循环内容
}
do {
       //代码语句
}while(布尔表达式);
for(初始化; 布尔表达式; 更新) {
    //代码语句
}
for(声明语句 : 表达式)
{
   //代码句子
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
    
    // 类的构造
    Person(int age,String name) {
        this.age = age;
        this.name = name;
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


**JavaBean**：一种符合命名规范的class，它通过getter和setter来定义属性；  <br />  使用Introspector.getBeanInfo()可以获取属性列表。

**this变量**  <br />  在方法内部，有一个隐含的变量this，它始终指向当前实例。  <br />  如果没有命名冲突，可以省略this。如果有局部变量和字段重名，那么局部变量优先级更高，须加上this

一个构造方法可以调用其他构造方法，语法是this(…)

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

- 定义的所有方法默认都是public abstract的
- 是数据类型，适用于向上转型和向下转型；
- 只有静态字段的，且为final类型，修饰符可省略
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

擦拭法决定了泛型<T>：

- 不能是基本类型，例如：int；
- 不能获取带泛型类型的Class，例如：Pair<String>.class；
- 不能判断带泛型类型的类型，例如：x instanceof Pair<String>；
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

<? extends T> & <? super T>

- <? extends T>允许调用读方法T get()获取T的引用，但不允许调用写方法set(T)传入T的引用（传入null除外）；
- <? super T>允许调用写方法set(T)传入T的引用，但不允许调用读方法T get()获取T的引用（获取Object除外）。
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

<?>通配符特点

- 不允许调用set(T)方法并传入引用（null除外）；
- 不允许调用T get()方法并获取T引用（只能获取Object引用）。
- Pair<?>是所有Pair<T>的超类


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

## System.out

- System.out.print() —— 输出
- System.out.println() ——输出并换行
- System.out.printf()——格式化输出；
| 占位符 | 说明 |
| --- | --- |
| %d | 格式化输出整数 |
| %x | 格式化输出十六进制整数 |
| %f | 格式化输出浮点数 |
| %e | 格式化输出科学计数法表示的浮点数 |
| %s | 格式化字符串 |
| %n | 换行 |


[PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html)

| 构造器 | 描述 |
| --- | --- |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.io.File))([File](https://www.apiref.com/java11-zh/java.base/java/io/File.html) file) | 使用指定的文件创建没有自动行刷新的新打印流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.io.File,java.lang.String))([File](https://www.apiref.com/java11-zh/java.base/java/io/File.html) file, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) csn) | 使用指定的文件和字符集创建一个没有自动行刷新的新打印流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.io.File,java.nio.charset.Charset))([File](https://www.apiref.com/java11-zh/java.base/java/io/File.html) file, [Charset](https://www.apiref.com/java11-zh/java.base/java/nio/charset/Charset.html) charset) | 使用指定的文件和字符集创建一个没有自动行刷新的新打印流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.io.OutputStream))([OutputStream](https://www.apiref.com/java11-zh/java.base/java/io/OutputStream.html) out) | 创建新的打印流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.io.OutputStream,boolean))([OutputStream](https://www.apiref.com/java11-zh/java.base/java/io/OutputStream.html) out, boolean autoFlush) | 创建新的打印流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.io.OutputStream,boolean,java.lang.String))([OutputStream](https://www.apiref.com/java11-zh/java.base/java/io/OutputStream.html) out, boolean autoFlush, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) encoding) | 创建新的打印流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.io.OutputStream,boolean,java.nio.charset.Charset))([OutputStream](https://www.apiref.com/java11-zh/java.base/java/io/OutputStream.html) out, boolean autoFlush, [Charset](https://www.apiref.com/java11-zh/java.base/java/nio/charset/Charset.html) charset) | 创建一个新的打印流，具有指定的OutputStream，自动行刷新和字符集。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.lang.String))([String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) fileName) | 使用指定的文件名创建没有自动行刷新的新打印流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.lang.String,java.lang.String))([String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) fileName, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) csn) | 使用指定的文件名和字符集创建一个没有自动行刷新的新打印流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#%3Cinit%3E(java.lang.String,java.nio.charset.Charset))([String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) fileName, [Charset](https://www.apiref.com/java11-zh/java.base/java/nio/charset/Charset.html) charset) | 使用指定的文件名和字符集创建一个没有自动行刷新的新打印流。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html) | [append](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#append(char))(char c) | 将指定的字符追加到此输出流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html) | [append](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#append(java.lang.CharSequence))([CharSequence](https://www.apiref.com/java11-zh/java.base/java/lang/CharSequence.html) csq) | 将指定的字符序列追加到此输出流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html) | [append](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#append(java.lang.CharSequence,int,int))([CharSequence](https://www.apiref.com/java11-zh/java.base/java/lang/CharSequence.html) csq, int start, int end) | 将指定字符序列的子序列追加到此输出流。 |
| boolean | [checkError](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#checkError())() | 刷新流并检查其错误状态。 |
| protected void | [clearError](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#clearError())() | 清除此流的内部错误状态。 |
| void | [close](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#close())() | 关闭流。 |
| void | [flush](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#flush())() | 刷新流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html) | [format](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#format(java.lang.String,java.lang.Object...))([String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) format, [Object](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html)... args) | 使用指定的格式字符串和参数将格式化字符串写入此输出流。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html) | [format](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#format(java.util.Locale,java.lang.String,java.lang.Object...))([Locale](https://www.apiref.com/java11-zh/java.base/java/util/Locale.html) l, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) format, [Object](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html)... args) | 使用指定的格式字符串和参数将格式化字符串写入此输出流。 |
| void | [print](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#print(boolean))(boolean b) | 打印一个布尔值。 |
| void | [print](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#print(java.lang.Object))([Object](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html) obj) | 打印一个对象。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html) | [printf](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#printf(java.lang.String,java.lang.Object...))([String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) format, [Object](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html)... args) | 使用指定的格式字符串和参数将格式化字符串写入此输出流的便捷方法。 |
| [PrintStream](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html) | [printf](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#printf(java.util.Locale,java.lang.String,java.lang.Object...))([Locale](https://www.apiref.com/java11-zh/java.base/java/util/Locale.html) l, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) format, [Object](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html)... args) | 使用指定的格式字符串和参数将格式化字符串写入此输出流的便捷方法。 |
| void | [println](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#println())() | 通过写行分隔符字符串来终止当前行。 |
| void | [println](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#println(boolean))(boolean x) | 打印一个布尔值，然后终止该行。 |
| void | [println](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#println(java.lang.Object))([Object](https://www.apiref.com/java11-zh/java.base/java/lang/Object.html) x) | 打印一个对象，然后终止该行。 |
| protected void | [setError](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#setError())() | 将流的错误状态设置为 true 。 |
| void | [write](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#write(byte%5B%5D,int,int))(byte[] buf, int off, int len) | 将从偏移量为 off的指定字节数组中的 len字节写入此流。 |
| void | [write](https://www.apiref.com/java11-zh/java.base/java/io/PrintStream.html#write(int))(int b) | 将指定的字节写入此流。 |



## Scanner
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
| 构造器 | 描述 |
| --- | --- |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.io.File))([File](https://www.apiref.com/java11-zh/java.base/java/io/File.html) source) | 构造一个新的 Scanner ，它生成从指定文件扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.io.File,java.lang.String))([File](https://www.apiref.com/java11-zh/java.base/java/io/File.html) source, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) charsetName) | 构造一个新的 Scanner ，它生成从指定文件扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.io.File,java.nio.charset.Charset))([File](https://www.apiref.com/java11-zh/java.base/java/io/File.html) source, [Charset](https://www.apiref.com/java11-zh/java.base/java/nio/charset/Charset.html) charset) | 构造一个新的 Scanner ，它生成从指定文件扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.io.InputStream))([InputStream](https://www.apiref.com/java11-zh/java.base/java/io/InputStream.html) source) | 构造一个新的 Scanner ，它生成从指定输入流扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.io.InputStream,java.lang.String))([InputStream](https://www.apiref.com/java11-zh/java.base/java/io/InputStream.html) source, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) charsetName) | 构造一个新的 Scanner ，它生成从指定输入流扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.io.InputStream,java.nio.charset.Charset))([InputStream](https://www.apiref.com/java11-zh/java.base/java/io/InputStream.html) source, [Charset](https://www.apiref.com/java11-zh/java.base/java/nio/charset/Charset.html) charset) | 构造一个新的 Scanner ，它生成从指定输入流扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.lang.Readable))([Readable](https://www.apiref.com/java11-zh/java.base/java/lang/Readable.html) source) | 构造一个新的 Scanner ，它生成从指定源扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.lang.String))([String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) source) | 构造一个新的 Scanner ，它生成从指定字符串扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.nio.channels.ReadableByteChannel))([ReadableByteChannel](https://www.apiref.com/java11-zh/java.base/java/nio/channels/ReadableByteChannel.html) source) | 构造一个新的 Scanner ，它可以生成从指定通道扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.nio.channels.ReadableByteChannel,java.lang.String))([ReadableByteChannel](https://www.apiref.com/java11-zh/java.base/java/nio/channels/ReadableByteChannel.html) source, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) charsetName) | 构造一个新的 Scanner ，它可以生成从指定通道扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.nio.channels.ReadableByteChannel,java.nio.charset.Charset))([ReadableByteChannel](https://www.apiref.com/java11-zh/java.base/java/nio/channels/ReadableByteChannel.html) source, [Charset](https://www.apiref.com/java11-zh/java.base/java/nio/charset/Charset.html) charset) | 构造一个新的 Scanner ，它可以生成从指定通道扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.nio.file.Path))([Path](https://www.apiref.com/java11-zh/java.base/java/nio/file/Path.html) source) | 构造一个新的 Scanner ，它生成从指定文件扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.nio.file.Path,java.lang.String))([Path](https://www.apiref.com/java11-zh/java.base/java/nio/file/Path.html) source, [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html) charsetName) | 构造一个新的 Scanner ，它生成从指定文件扫描的值。 |
| [Scanner](https://www.apiref.com/java11-zh/java.base/java/util/Scanner.html#%3Cinit%3E(java.nio.file.Path,java.nio.charset.Charset))([Path](https://www.apiref.com/java11-zh/java.base/java/nio/file/Path.html) source, [Charset](https://www.apiref.com/java11-zh/java.base/java/nio/charset/Charset.html) charset) | 构造一个新的 Scanner ，它生成从指定文件扫描的值。 |



## File
**访问文件名**

- File file = new File("C:/abc/123.txt");
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

## Path


![](https://www.runoob.com/wp-content/uploads/2013/12/iostream2xx.png#crop=0&crop=0&crop=1&crop=1&id=EkdDe&originHeight=763&originWidth=687&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
```java
public static void main(String[] args) throws IOException {
        File f = new File("D:/Code/dark.txt");
        StringBuffer sb = new StringBuffer();
        int n;
        // 读文件--去注释（//）
        try (FileReader fr = new FileReader(f);
                BufferedReader br = new BufferedReader(fr)) {
            while (true) {
                String line = br.readLine();
                if (line == null)
                    break;
                if ((n = line.indexOf("//")) != -1)
                    line = line.substring(0, n);
                sb.append(line).append("\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        //FileWriter一new,这个文件就清空了，加上true属性，文件后面添加内容
        try(FileWriter fw=new FileWriter(f);
                PrintWriter pw = new PrintWriter(fw)) {
            pw.write(sb.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```
Files & Paths  <br />  读
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
**Lambda表达式**
```java
(argument,···) -> { ··· }
```
参数类型可以省略，编译器可以自动推断。

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
_@_FunctionalInterface  <br />  只定义了单方法的接口
```java
@FunctionalInterface
public interface Callable<V> {
    V call() throws Exception;
}
```


java.util.stream.Stream

### 筛选

- Stream<T> filter(Predicate<T> predicate)：用谓词筛选，返回一个包括所有符合谓词的元素的流
- Stream<T> distinct()：返回一个元素各异（根据流所生成元素的 **hashCode 和 equals 方法**实现）的流

### 切片

- Stream<T> limit(long maxSize)：返回一个不超过给定长度的流
- Stream<T> skip(long n)：返回一个扔掉了前 n 个元素的流

### 映射
提取或转换流中的元素

- Stream<R> map(Function<T, R> mapper)：对流中每一个元素应用函数（元素映射为新元素）
- Stream<R> flatMap(Function<T, Stream<R>> mapper)：把一个流中的每个元素都换成另一个**流**，然后把所有转换的流**连接**起来成为一个流（流的扁平化）（元素映射为流）

### 查找和匹配

- boolean allMatch(Predicate<T> predicate)：流中的元素是否都能匹配给定的谓词
- boolean anyMatch(Predicate<T> predicate)：流中是否有一个元素能匹配给定的谓词
- boolean noneMatch(Predicate<T> predicate)：流中是否没有任何元素与给定的谓词匹配
- Optional<T> findAny()：返回当前流中的任意元素
- Optional<T> findFirst()：返回当前流中的第一个元素

### 归约
将流中所有的元素迭代合并成一个结果

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



# **线程（Thread）**

**Thread**

类方法

- Thread currentThread()：返回当前正在执行的线程对象
- void sleep(long millis)：让当前正在执行的线程暂停 millis 毫秒，并进入阻塞状态（线程睡眠）
- void yield()：暂停当前正在执行的线程对象，转入就绪状态（线程让步）

实例方法

- void start()：使该线程开始执行，Java 虚拟机调用该线程的 run 方法，只能被处于新建状态的线程调用，否则会引发 IllegalThreadStateException 异常
- void run()：如果该线程是使用独立的 Runnable 运行对象构造的，则调用该 Runnable 对象的 run 方法；否则，该方法不执行任何操作并返回
- void setName(String name)：为线程设置名字，在默认情况下，主线程的名字为 main，用户启动的多个线程的名字依次为 Thread-0、Thread-1、Thread-2、...、Thread-n 等
- String getName()：返回调用该方法的线程名字
- void join()：等待调用该方法的线程执行完成，而当前正在执行的线程进入阻塞状态（联合线程）（该方法声明抛出了 InterruptedException 异常）
- void setDaemon(boolean on)：on 为"true"时，将该线程设置成守护线程（程序退出时会被回收），该方法必须在 start() 之前调用，否则会引发 IllegalThreadStateException 异常
- boolean isDaemon()：判断该线程是否为守护线程
- int getPriority()：返回线程的优先级
- void setPriority(int newPriority)：更改线程的优先级（范围是 1~10 之间）
- boolean isAlive()：测试线程是否处于活动状态
| 变量和类型 | 字段 | 描述 |
| --- | --- | --- |
| static int | [MAX_PRIORITY](https://www.apiref.com/java11-zh/java.base/java/lang/Thread.html#MAX_PRIORITY) | 线程可以拥有的最大优先级。 |
| static int | [MIN_PRIORITY](https://www.apiref.com/java11-zh/java.base/java/lang/Thread.html#MIN_PRIORITY) | 线程可以拥有的最低优先级。 |
| static int | [NORM_PRIORITY](https://www.apiref.com/java11-zh/java.base/java/lang/Thread.html#NORM_PRIORITY) | 分配给线程的默认优先级。 |




## 线程的创建和启动
实现多线程

- 继承 `Thread`类或 `Runnable`接口，实现`run`方法
```java
// 定义 Thread 类的子类
public class MyThread extends Thread {
    // 重写 Thread 类中的 run() 方法，线程执行体
    public void run() {
    }
}

// 定义 Runnable 接口的实现类
public class MyRunnable implements Runnable {
    // 重写 Runnable 接口中的 run() 方法，线程执行体
    public void run() {
    }
}

public class Demo {
    public static void main(String[] args) {                
        Thread mt = new MyThread(); // 创建 Thread 子类的对象
        Thread mr = new Thread(new MyRunnable(), "线程名"); // 将 target 作为运行目标来创建创建 Thread 类的对象
        mt.start(); // 调用线程对象的 start() 方法来启动该线程
        mr.start();
        
        // 使用匿名内部类的方式创建
        new Thread() {
            public void run() {
            }
        }.start();
        
        // 使用匿名内部类的方式创建
        new Thread(new Runnable() {
            public void run() {
            }
        }).start();
    }
}
```


`interface Callable<V>`  <br />  提供了一个 call() 方法（可以有返回值，可以声明抛出异常）作为**线程执行体**

- V call()：计算结果，如果无法计算结果，则抛出一个异常
```java
class Task implements Callable<String> {
    public String call() throws Exception {
        return longTimeCalculation(); 
    }
}
```

`interface Future<V>`  <br />  Future接口代表 Callable 接口里 call() 方法的返回值，表示异步计算的结果  <br />  常用方法

- V get()：返回 Callable 任务里 call() 方法的返回值，如果计算时抛出异常将会抛出 ExecutionException 异常，如果当前的线程在等待时被中断将会抛出 InterruptedException 异常（调用该方法将导致程序阻塞，必须等到子线程结束后才会得到返回值）
- V get(long timeout, TimeUnit unit)：返回 Callable 任务里 call() 方法的返回值，该方法让程序最多阻塞 timeout 和 unit 指定的时间，如果经过指定时间后 Callable 任务依然没有返回值，将会抛出 TimeoutException 异常
- boolean cancel(boolean maylnterruptlfRunning)：试图取消该 Future 里关联的 Callable 任务
- boolean isCancelled()：如果在 Callable 任务正常完成前被取消，则返回 true
- boolean isDone()：如果 Callable 任务已完成（由于正常终止、异常或取消），则返回 true
```java
ExecutorService executor = Executors.newFixedThreadPool(4); 
// 定义任务:
Callable<String> task = new Task();
// 提交任务并获得Future:
Future<String> future = executor.submit(task);
// 从Future获取异步执行返回的结果:
String result = future.get(); // 可能阻塞
```

**CompletableFuture**  <br />  可以传入回调对象，当异步任务完成或者发生异常时，自动调用回调对象的回调方法
```java
public class Main {
    public static void main(String[] args) throws Exception {
        // 创建异步执行任务:
        CompletableFuture<Double> cf = CompletableFuture.supplyAsync(Main::fetchPrice);
        // 如果执行成功:
        cf.thenAccept((result) -> {
            System.out.println("price: " + result);
        });
        // 如果执行异常:
        cf.exceptionally((e) -> {
            e.printStackTrace();
            return null;
        });
        // 主线程不要立刻结束，否则CompletableFuture默认使用的线程池会立刻关闭:
        Thread.sleep(200);
    }

    static Double fetchPrice() {
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
        }
        if (Math.random() < 0.3) {
            throw new RuntimeException("fetch price failed!");
        }
        return 5 + Math.random() * 20;
    }
}
```

class `FutureTask<V>`  <br />  FutureTask类实现了` RunnableFuture<V>` 接口（`RunnableFuture<V>` 接口继承了`Runnable` 接口和`Future<V> `接口）  <br />  构造器：FutureTask(Callable<V> callable)、FutureTask(Runnable runnable, V result)（指定成功完成时 get 返回给定的结果为 result）



**创建线程的三种方式对比**

- 继承 Thread 类
   1. 线程类已经继承了 Thread 类，不能再继承其它父类
   1. 访问当前线程直接使用 this
   1. 多个线程之间**无法共享线程类中的实例变量**
- 实现 Runnable、Callable 接口的方式创建多线程
   1. 线程类只是实现了 Runnable 接口，还可以继承其它类
   1. 访问当前线程须使用 Thread. currentThread() 方法
   1. 所创建的 Runnable 对象只是**线程的 target**，而多个线程**可以共享同一个 target 对象的实例变量**，所以适合多个相同线程来处理同一份资源的情况



## 线程同步
原子操作（atomic operation）：不可被中断的一个或一系列操作

- 同步方法：使用 `synchronized`关键字来修饰某个方法，就相当于**给调用该方法的对象**加了锁

`synchronized`是Java语言层面提供的语法，不需要考虑异常

- 同步锁：java.util.concurrent.locks 包中，Lock 可替代 synchronized 方法和语句的使用
```java
public void add(int n) {
    synchronized(this) { // 锁住this
        count += n;
    } // 解锁
}

// equal to

public synchronized void add(int n) { // 锁住this
    count += n;
} // 解锁



public class Counter {
    private final Lock lock = new ReentrantLock();
    private int count;

    public void add(int n) {
        lock.lock();
        try {
            count += n;
        } finally {
            lock.unlock();
        }
    }
}

if (lock.tryLock(1, TimeUnit.SECONDS)) {
    try {
        ...
    } finally {
        lock.unlock();
    }
}
```

**ReentrantReadWriteLock**	可重入读写锁，使用同ReentrantLock

- 只允许一个线程写入；允许多个线程在没有写入时同时读取
- 适合读多写少的场景

**StampedLock**	把读锁细分为乐观读和悲观读，进一步提升并发效率

- 支持三种模式：写锁、悲观读锁、乐观读
- 是不可重入锁
```java
public class Point {
    private final StampedLock stampedLock = new StampedLock();

    private double x;
    private double y;

    public void move(double deltaX, double deltaY) {
        long stamp = stampedLock.writeLock(); // 获取写锁
        try {
            x += deltaX;
            y += deltaY;
        } finally {
            stampedLock.unlockWrite(stamp); // 释放写锁
        }
    }

    public double distanceFromOrigin() {
        long stamp = stampedLock.tryOptimisticRead(); // 获得一个乐观读锁
        // 注意下面两行代码不是原子操作
        // 假设x,y = (100,200)
        double currentX = x;
        // 此处已读取到x=100，但x,y可能被写线程修改为(300,400)
        double currentY = y;
        // 此处已读取到y，如果没有写入，读取是正确的(100,200)
        // 如果有写入，读取是错误的(100,400)
        if (!stampedLock.validate(stamp)) { // 检查乐观读锁后是否有其他写锁发生
            stamp = stampedLock.readLock(); // 获取一个悲观读锁
            try {
                currentX = x;
                currentY = y;
            } finally {
                stampedLock.unlockRead(stamp); // 释放悲观读锁
            }
        }
        return Math.sqrt(currentX * currentX + currentY * currentY);
    }
}
```


## 线程通信

**Object 类**中用于操作线程通信的实例方法

1. wait()：调用该方法的当前线程会**释放**对**该同步监视器**（调用者）的锁定，JVM 把该线程存放到**等待池**中，等待其他的线程唤醒该线程（该方法声明抛出了 InterruptedException 异常）（为了防止虚假唤醒，此方法**应始终在循环中使用**，即被唤醒后需要再次判断是否满足唤醒条件）
1. notify()：调用该方法的当前线程唤醒在等待池中的任意一个线程，并把该线程转到**锁池**中等待获取锁
1. notifyAll()：调用该方法的当前线程唤醒在等待池中的所有线程，并把该线程转到**锁池**中等待获取锁
:::warning
这些方法必须在**同步块**中使用，且只能被同步监视器对象来调用，否则会引发 IllegalMonitorStateException 异常
:::

java.util.concurrent.locks 包中，Condition 接口中的 await()、signal()、signalAll() 方法替代了 Object 监视器方法的使用
```java
class TaskQueue {
    Queue<String> queue = new LinkedList<>();

    public synchronized void addTask(String s) {
        this.queue.add(s);
        this.notifyAll();
    }

    public synchronized String getTask() throws InterruptedException {
        while (queue.isEmpty()) {
            this.wait();
        }
        return queue.remove();
    }
}


class TaskQueue {
    private final Lock lock = new ReentrantLock();
    // 获得一个绑定了Lock实例的Condition实例
    private final Condition condition = lock.newCondition();
    private Queue<String> queue = new LinkedList<>();

    public void addTask(String s) {
        lock.lock();
        try {
            queue.add(s);
            condition.signalAll();
        } finally {
            lock.unlock();
        }
    }

    public String getTask() {
        lock.lock();
        try {
            while (queue.isEmpty()) {
                condition.await();
            }
            return queue.remove();
        } finally {
            lock.unlock();
        }
    }
}


if (condition.await(1, TimeUnit.SECOND)) {
    // 被其他线程唤醒
} else {
    // 指定时间内没有被其他线程唤醒
}
```


java.util.concurrent

| interface | non-thread-safe | thread-safe |
| --- | --- | --- |
| List | ArrayList | CopyOnWriteArrayList |
| Map | HashMap | ConcurrentHashMap |
| Set | HashSet / TreeSet | CopyOnWriteArraySet |
| Queue | ArrayDeque / LinkedList | ArrayBlockingQueue / LinkedBlockingQueue |
| Deque | ArrayDeque / LinkedList | LinkedBlockingDeque |



java.util.concurrent.atomic

- 增加值并返回新值：int addAndGet(int delta)
- 加1后返回新值：int incrementAndGet()
- 获取当前值：int get()
- 用CAS方式设置：int compareAndSet(int expect, int update)

原理：CAS（Compare and Swap，**比较并替换**）
```java
// 如果AtomicInteger的当前值是prev，那么就更新为next，否则就什么也不干
public int incrementAndGet(AtomicInteger var) {
    int prev, next;
    do {
        prev = var.get();
        next = prev + 1;
    } while ( ! var.compareAndSet(prev, next));
    return next;
}
```




## 锁

- 乐观锁：一种乐观思想，即认为**读多写少**，遇到并发写的可能性低，每次去**拿数据**的时候都认为别人不会修改，所以**不会上锁**，但是**在更新的时候会判断**一下在此期间别人有没有去更新这个数据：采取**在写时**先读出当前版本号，然后加锁操作（比较跟上一次的版本号，如果一样则更新），如果失败则要重复读-比较-写的操作
- 悲观锁：悲观思想，即认为**写多**，遇到并发写的可能性高，每次去拿数据的时候都认为别人会修改，所**以每次在读写数据的时候都会上锁**，这样别人想读写这个数据就会 block 直到拿到锁


**生产者与消费者模式**  <br />  **管程法**
```java
public class Test{
	public static void main(String[] args) {
		BufferContainer container=new BufferContainer(15);
		new Productor(container).start();
		new Consumer(container).start();
		System.out.println("Program End");
	}
}

class Productor extends Thread{
	BufferContainer container;
	
	public Productor(BufferContainer container) {
		this.container = container;
	}
    
	@Override
	public void run() {
		for(int i=1;i<50;++i) {
			container.push(new Food(i));
			System.out.println("生产："+i+"食品");
		}
	}
}

class Consumer extends Thread{
	BufferContainer container;
	
	public Consumer(BufferContainer container) {
		this.container = container;
	}
    
	@Override
	public void run() {
		for(int i=1;i<50;++i) {
			System.out.println("消费："+container.pop().id+"食品");
		}
	}
}

class BufferContainer{
	int size,num=0;
	Food[] food;
    
	public BufferContainer(int size) {
		this.size = size;
		food=new Food[size];
	}
	
	synchronized void push(Food a){
		if (num>=size) {
			try {
				this.wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		food[num]=a;
		this.notify();
		num++;
	}
    
	synchronized Food pop(){
		if(num==0)
			try {
				this.wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		num--;
		this.notify();
		return food[num];
	}
}

class Food{
	int id;
	public Food(int id) {
		this.id = id;
	}
}
```
**信号灯法**
```java
public class Test{
	public static void main(String[] args) {
		Light light=new Light();
		new Man(light).start();
		new Car(light).start();
	}
}

class Man extends Thread{
	Light light;
	
	public Man(Light light) {
		this.light = light;
	}
    
	@Override
	public void run() {
		for(int i=0;i<20;++i)
			light.green();
	}
}

class Car extends Thread{
	Light light;
	public Car(Light light) {
		this.light = light;
	}
    
	@Override
	public void run() {
		for(int i=0;i<20;++i)
			light.red();
	}
}

class Light{
	boolean color=false;// 红灯false，绿灯true
	
	synchronized void red(){
		if(color)
			try {
				this.wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		System.out.println("Car pass");
		color=!color;
		this.notify();
	}
	
	synchronized void green() {
		if(!color)
			try {
				this.wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		System.out.println("Man pass");
		color=!color;
		this.notify();
	}
}
```



## 线程池

创建线程池的静态方法

- ExecutorService newCachedThreadPool()：一个具有缓存功能的线程池，系统根据需要创建线程（**无界线程池**，已有 60 秒钟未被使用的线程会被终止并从缓存中移除）  <br />  `new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue<Runnable>())`
- ExecutorService newFixedThreadPool(int nThreads)：一个可重用的、**具有固定核心线程数的线程池**  <br />  （使用无界队列，**队列堆积太多**数据导致 OOM）  <br />  `new ThreadPoolExecutor(nThreads, nThreads, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<Runnable>())`
- ExecutorService newSingleThreadExecutor()：一个**只有单线程的线程池**  <br />  `new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<Runnable>()`)
- ScheduledExecutorService newScheduledThreadPool(int corePoolSize)：一个线程池，可在指定延迟后执行或定期执行线程任务  <br />  `new ThreadPoolExecutor(corePoolSize, Integer.MAX_VALUE, 0, NANOSECONDS, new DelayedWorkQueue())`

```java
public class Main {
    public static void main(String[] args) {
        // 创建一个固定大小的线程池:
        ExecutorService es = Executors.newFixedThreadPool(4);
        for (int i = 0; i < 6; i++) {
            es.submit(new Task("" + i));
        }
        // 关闭线程池:
        es.shutdown();
    }
}

class Task implements Runnable {
    private final String name;

    public Task(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println("start task " + name);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
        }
        System.out.println("end task " + name);
    }
}
```

**ExecutorService 线程池接口**  <br />  Executor 的子接口，代表尽快执行线程的线程池（只要线程池中有空闲线程，就立即执行线程任务）

- void execute(Runnable command)：在未来某个时间执行给定的命令
- `Future<?> submit(Runnable task)`：将一个 Runnable 对象提交给指定的线程池，线程池将在有空闲线程时执行 Runnable 对象代表的任务，其中 Future 对象代表 Runnable 任务的返回值——但 run () 方法没有返回值，所以 Future 对象将在 run() 方法执行结束后返回 null，但可以调用 Future 的 isDone()、isCancelled() 方法来获得 Runnable 对象的执行状态
- `Future<T> submit(Runnable task, T result)`：将一个 Runnable 对象提交给指定的线程池，线程池将在有空闲线程时执行 Runnable 对象代表的任务，其中 result 显式指定线程执行结束后的返回值，所以 Future 对象将在 run() 方法执行结束后返回 result
- `Future<T> submit(Callable<T> task)`：将一个 Callable 对象提交给指定的线程池，线程池将在有空闲线程时执行 Callable 对象代表的任务，其中 Future 代表 Callable 对象里 call() 方法的返回值（调用 AbstractExecutorService#submit 方法，**将 Callable 对象包装成 FutureTask 对象**，再调用 ThreadPoolExecutor#execute 方法 → ThreadPoolExecutor.Worker#run）
- `List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks)`：执行给定的任务，当所有任务完成时，返回保持任务状态和结果的 Future 列表
- `T invokeAny(Collection<? extends Callable<T>> tasks)`：执行给定的任务，如果某个任务已成功完成（也就是未抛出异常），则返回其结果
- void shutdown()：启动线程池的关闭序列，调用该方法后的线程池不再接收新任务，但**会将以前所有已提交任务执行完成**，当线程池中的所有任务都执行完成后，池中的所有线程都会死亡
- `List<Runnable> shutdownNow()`：试图停止所有正在执行的活动任务，暂停处理正在等待的任务，并返回等待执行的任务列表
- boolean awaitTermination(long timeout, TimeUnit unit)：**阻塞**，直到所有任务完成执行

**ScheduledExecutorService 接口**  <br />  ExecutorService 的子接口，代表可在指定延迟后或周期性地执行线程任务的线程池

- `ScheduledFuture<V> schedule(Callable<V> callable, long delay, TimeUnit unit)`：指定 callable 任务将在 delay 延迟后执行
- `ScheduledFuture<?> schedule(Runnable command, long delay, TimeUnit unit)`：指定 command 任务将在 delay 延迟后执行
- `ScheduledFuture<?> scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit)`：指定 command 任务将在 delay 延迟后执行，而且以设定频率重复执行（在 initialDelay 后开始执行，依次在 initialDelay+period、initialDelay+2*period… 处重复执行；如果当前任务耗时较多，超过定时周期 period，则当前任务结束后会立即执行）
- `ScheduledFuture<?> scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)`：创建并执行一个在给定初始延迟后首次启用的定期操作，随后在每一次执行终止和下一次执行开始之间都存在给定的延迟（如果任务在任一次执行时遇到异常，就会取消后续执行；否则，只能通过程序来显式取消或终止该任务）


**ThreadPoolExecutor**



ForkJoinPool  <br />  线程池的实现类，将一个任务拆分成多个“小任务”并行计算，再把多个“小任务”的结果合成总的计算结果
```java
public class Main {
    public static void main(String[] args) throws Exception {
        // 创建2000个随机数组成的数组:
        long[] array = new long[2000];
        long expectedSum = 0;
        for (int i = 0; i < array.length; i++) {
            array[i] = random();
            expectedSum += array[i];
        }
        System.out.println("Expected sum: " + expectedSum);
        // fork/join:
        ForkJoinTask<Long> task = new SumTask(array, 0, array.length);
        long startTime = System.currentTimeMillis();
        Long result = ForkJoinPool.commonPool().invoke(task);
        long endTime = System.currentTimeMillis();
        System.out.println("Fork/join sum: " + result + " in " + (endTime - startTime) + " ms.");
    }

    static Random random = new Random(0);

    static long random() {
        return random.nextInt(10000);
    }
}

class SumTask extends RecursiveTask<Long> {
    static final int THRESHOLD = 500;
    long[] array;
    int start;
    int end;

    SumTask(long[] array, int start, int end) {
        this.array = array;
        this.start = start;
        this.end = end;
    }

    @Override
    protected Long compute() {
        if (end - start <= THRESHOLD) {
            // 如果任务足够小,直接计算:
            long sum = 0;
            for (int i = start; i < end; i++) {
                sum += this.array[i];
                // 故意放慢计算速度:
                try {
                    Thread.sleep(1);
                } catch (InterruptedException e) {
                }
            }
            return sum;
        }
        // 任务太大,一分为二:
        int middle = (end + start) / 2;
        System.out.println(String.format("split %d~%d ==> %d~%d, %d~%d", start, end, start, middle, middle, end));
        SumTask subtask1 = new SumTask(this.array, start, middle);
        SumTask subtask2 = new SumTask(this.array, middle, end);
        invokeAll(subtask1, subtask2);
        Long subresult1 = subtask1.join();
        Long subresult2 = subtask2.join();
        Long result = subresult1 + subresult2;
        System.out.println("result = " + subresult1 + " + " + subresult2 + " ==> " + result);
        return result;
    }
}
```















`ThreadLocal<T>`



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
Servlet

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

# API
| [java.beans](https://www.matools.com/file/manual/jdk_api_1.8_google/java/beans/package-summary.html) | 包含与开发 _bean_相关的类 - 基于JavaBeans架构的组件。 |
| --- | --- |
| [java.beans.beancontext](https://www.matools.com/file/manual/jdk_api_1.8_google/java/beans/beancontext/package-summary.html) | 提供与bean上下文相关的类和接口。 |
| [java.io](https://www.matools.com/file/manual/jdk_api_1.8_google/java/io/package-summary.html) | 通过数据流，序列化和文件系统提供系统输入和输出。 |
| [java.lang](https://www.matools.com/file/manual/jdk_api_1.8_google/java/lang/package-summary.html) | 提供对Java编程语言设计至关重要的类。 |
| [java.lang.annotation](https://www.matools.com/file/manual/jdk_api_1.8_google/java/lang/annotation/package-summary.html) | 为Java编程语言注释工具提供库支持。 |
| [java.math](https://www.matools.com/file/manual/jdk_api_1.8_google/java/math/package-summary.html) | 提供执行任意精度整数运算（ BigInteger ）和任意精度十进制运算（ BigDecimal ）的类。 |
| [java.net](https://www.matools.com/file/manual/jdk_api_1.8_google/java/net/package-summary.html) | 提供实现网络应用程序的类。 |
| [java.nio](https://www.matools.com/file/manual/jdk_api_1.8_google/java/nio/package-summary.html) | 定义缓冲区，它们是数据容器，并提供其他NIO包的概述。 |

System

- void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)：从 源数组 src 的 srcPos 位置 复制元素到 目标数组 dest 的 destPos 位置，复制的数组元素的个数为 length
- long currentTimeMillis()：获取系统当前时间（毫秒）（距离 1970 年 1 月 1 日 00:00:00 GMT）
- Properties getProperties()：获取当前的系统属性
- String getProperty(String key)：获取指定键指示的系统属性
- int identityHashCode(Object x)：返回给定对象的哈希码
- void exit(int status)：终止 JVM（非 0 的状态码表示异常终止）（底层调用 Runtime 类中的方法）
- void gc()：运行 GC（底层调用 Runtime 类中的方法）

**Runtime**  <br />  类方法

- Runtime getRuntime()：获取与当前 Java 应用程序相关的运行时对象（单例模式）

实例方法

- Process exec(String command)：在单独的进程中执行指定的字符串命令，返回一个新的 Process 对象
- void exit(int status)：终止 JVM（非 0 的状态码表示异常终止）
- void gc()：运行 GC
- void addShutdownHook(Thread hook)：注册虚拟机关闭钩子（一个已初始化但尚未启动的线程）
- int availableProcessors()：返回虚拟机可用处理器的数目



Collections

- boolean add(T e)	向集合中添加一个元素，如果集合对象被添加操作改变了，则返回 true
- boolean addAll(Collection c)	向集合中添加集合 c 中的所有元素
- void clear()	清除集合中的所有元素，将集合长度变为 0。
- boolean contains(Object o)	判断集合中是否存在指定元素
- boolean containsAll(Collection c)	判断集合中是否包含集合 c 中的所有元素
- boolean isEmpty()	判断集合是否为空
- Iterator<E>iterator()	返回一个 Iterator 对象，用于遍历集合中的元素
- boolean remove(Object o)	从集合中删除**一个**指定元素
- boolean removeAll(Collection c)	从集合中删除所有在集合 c 中出现的元素
- boolean retainAll(Collection c)	从集合中删除集合 c 里不包含的元素
- int size()	返回集合中元素的个数
- Object[] toArray()	把集合转换为一个数组，所有的集合元素变成对应的数组元素。


