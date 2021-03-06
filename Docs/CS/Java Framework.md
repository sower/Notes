

# [Maven](https://maven.apache.org/)
管理和构建工具  <br />  约定优于配置（Convention Over Configuration）
```shell
a-maven-project
├── pom.xml  核心配置文件
├── src
│   ├── main
│   │   ├── java  源代码
│   │   └── resources  资源文件
│   └── test
│       ├── java  测试代码
│       └── resources
└── target  打包输出文件
```

POM（Project Object Model，项目对象模型）是 Maven 的基本组件，它是以 xml 文件的形式存放在项目的根目录下
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                      http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
  
    <!-- The Basics -->
    <groupId>com.example</groupId>
    <artifactId>helloMaven</artifactId>
    <packaging>jar</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>helloMaven</name>
    <url>http://maven.apache.org</url>
  
    <!--从父模块中继承  -->
    <parent>
        <groupId>net.father</groupId>
        <artifactId>Root</artifactId>
        <version>1.0</version>
        <relativePath>../Root</relativePath>
    </parent>
  
    <properties>
        <!-- 定义一些 maven 变量 -->
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <junit.version>4.9</junit.version>
    </properties>
  
  
    <!--添加插件管理-->
    <build>
        <pluginManagement>
          ...
        </pluginManagement>
         
        <!-- 声明使用 maven-source-plugin 插件 -->
        <plugins>
            <!--添加site 插件-->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-site-plugin</artifactId>
                <version>3.7.1</version>
            </plugin>
        </plugins>
    </build>
  
  
    <!--dependencyManagement 标签用于控制子模块的依赖版本等信息 -->
    <!-- 该标签只用来控制版本，不能将依赖引入 -->
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>log4j</groupId>
                <artifactId>log4j</artifactId>
                <!--引用的properties标签中定义的属性 -->
                <version>1.2.17</version>
            </dependency>
     </dependencyManagement>
    
    <!--声明依赖-->
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>${junit.version}</version>
            <scope>test</scope>
        </dependency>
      
        <dependency>
            <groupId>cn.book</groupId>
            <artifactId>book</artifactId>
            <scope>system</scope>
            <version>1.0-SNAPSHOT</version>
            <systemPath>D:\maven\book\target\book-1.0-SNAPSHOT.jar</systemPath>
        </dependency>
    </dependencies>
      
    <!--添加需要聚合的模块-->
    <modules>
        <module>../App-Core-lib</module>
        <module>../App-Data-lib</module>
        <module>../App-UI-WAR</module>
    </modules>
      
    <!-- More Project Information -->
    <name>...</name>
    <description>...</description>
    <url>...</url>
    <inceptionYear>...</inceptionYear>
    <licenses>...</licenses>
    <organization>...</organization>
    <developers>...</developers>
    <contributors>...</contributors>

    <!-- Environment Settings -->
    <issueManagement>...</issueManagement>
    <ciManagement>...</ciManagement>
    <mailingLists>...</mailingLists>
    <scm>...</scm>
    <prerequisites>...</prerequisites>
    <repositories>...</repositories>
    <pluginRepositories>...</pluginRepositories>
    <distributionManagement>...</distributionManagement>
    <profiles>...</profiles>
      
</project>
```
唯一ID  <br />  对于某个依赖，Maven只需要3个变量即可唯一确定某个jar包：

- groupId：组织的名称，类似Java的包名
- artifactId：该jar包自身的名称，类似Java的类名
- version：该jar包的版本

依赖关系

| scope | 说明 | 示例 |
| --- | --- | --- |
| compile | 编译时需要用到该jar包（默认） | commons-logging |
| test | 编译Test时需要用到该jar包 | junit |
| runtime | 编译时不需要，但运行时需要用到 | mysql |
| provided | 编译时需要用到，但运行时由JDK或某个服务器提供 | servlet-api |


可选依赖（Optional Dependencies）：控制当前依赖是否向下传递成为间接依赖
```xml
<dependency>
  <groupId>net.abc</groupId>
  <artifactId>X</artifactId>
  <version>1.0-SNAPSHOT</version>
  <!--设置可选依赖  -->
  <optional>true</optional>
</dependency>
```
排除依赖（Dependency Exclusions）：控制当前项目是否使用其直接依赖传递下来的间接依赖
```xml
<dependency>
  <groupId>net.biancheng.www</groupId>
  <artifactId>B</artifactId>
  <version>1.0-SNAPSHOT</version>
  <exclusions>
    <!-- 设置排除 -->
    <!-- 排除依赖必须基于直接依赖中的间接依赖设置为可以依赖为 false -->
    <!-- 设置当前依赖中是否使用间接依赖 -->
    <exclusion>
      <!--设置具体排除-->
      <groupId>net.sth</groupId>
      <artifactId>uu</artifactId>
    </exclusion>
  </exclusions>
</dependency>
```

全局配置文件 (settings.xml)

- 全局配置 - `${maven.home}/conf/settings.xml`
- 用户配置 - `${user.home}/.m2/settings.xml`
```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                          https://maven.apache.org/xsd/settings-1.0.0.xsd">
  
  <localRepository>D:\Code\repository</localRepository>
  <interactiveMode/>
  <usePluginRegistry/>
  <offline/>
  <pluginGroups/>
  <servers/>
  <mirrors>
    <mirror>
      <id>aliyun</id>
      <name>aliyun</name>
      <mirrorOf>central</mirrorOf>
      <!-- 国内推荐阿里云的Maven镜像 -->
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    </mirror>
  </mirrors>
  <proxies/>
  <!-- 根据环境参数来调整构建配置的列表 -->
  <profiles/>
  <activeProfiles/>
</settings>
```

搜索第三方组件  <br />  [search.maven.org](https://search.maven.org/)  <br />  生命周期（default为例）phase：

- validate
- initialize
- generate-sources
- process-sources
- generate-resources
- process-resources
- compile
- process-classes
- generate-test-sources
- process-test-sources
- generate-test-resources
- process-test-resources
- test-compile
- process-test-classes
- test
- prepare-package
- package
- pre-integration-test
- integration-test
- post-integration-test
- verify
- install
- deploy

CLI

- mvn clean：清理所有生成的class和jar；
- mvn clean compile：先清理，再执行到compile；
- mvn clean test：先清理，再执行到test
- mvn clean package：先清理，再执行到package。



**Reference**

- [POM Reference](https://maven.apache.org/pom.html)
   - POM（Project Object Model，项目对象模型）是 Maven 的基本组件，它是以 xml 文件的形式存放在项目的根目录下
- [Settings Reference](https://maven.apache.org/settings.html)
- [Run](https://maven.apache.org/run.html)
- [Configure](https://maven.apache.org/configure.html)
- [IDE Integration](https://maven.apache.org/ide.html)

plugin  <br />  moudel manager

**Maven Wrapper**  <br />  给一个项目提供一个独立的，指定版本的Maven给它使用
```shell
# install mvnw  在pom.xml所在的目录
mvn -N io.takari:maven:0.7.6:wrapper

# 指定使用的Maven版本3.6.3
mvn -N io.takari:maven:0.7.6:wrapper -Dmaven=3.6.3

# use
mvnw clean package
```
项目结构
```shell
my-project
├── .mvn
│   └── wrapper
│       ├── MavenWrapperDownloader.java
│       ├── maven-wrapper.jar
│       └── maven-wrapper.properties
├── mvnw
├── mvnw.cmd
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   └── resources
    └── test
        ├── java
        └── resources
```




# [Lombok](https://projectlombok.org/features/all)

- `@Setter` 注解在类或字段，注解在类时为所有字段生成setter方法，注解在字段上时只为该字段生成setter方法。
- `@Getter` 使用方法同上，区别在于生成的是getter方法。
- `@ToString` 注解在类，添加toString方法。
- `@EqualsAndHashCode` 注解在类，生成hashCode和equals方法。
- `@NoArgsConstructor` 注解在类，生成无参的构造方法。
- `@RequiredArgsConstructor` 注解在类，为类中需要特殊处理的字段生成构造方法，比如final和被`@NonNull`注解的字段。
- `@AllArgsConstructor` 注解在类，生成包含类中所有字段的构造方法。
- `@Data` 注解在类，生成setter/getter、equals、canEqual、hashCode、toString方法，如为final属性，则不会为该属性生成setter方法。
- [@Builder](https://projectlombok.org/features/Builder)
- `@Slf4j` 注解在类，生成log变量，严格意义来说是常量



# [Apache Commons](https://commons.apache.org/)

## [commons-lang](https://github.com/apache/commons-lang)

[StringUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/StringUtils.html)

- **IsEmpty/IsBlank** - checks if a String contains text
- **Trim/Strip** - removes leading and trailing whitespace
- **Equals/Compare** - compares two strings in a null-safe manner
- **startsWith** - check if a String starts with a prefix in a null-safe manner
- **endsWith** - check if a String ends with a suffix in a null-safe manner
- **IndexOf/LastIndexOf/Contains** - null-safe index-of checks
- **IndexOfAny/LastIndexOfAny/IndexOfAnyBut/LastIndexOfAnyBut** - index-of any of a set of Strings
- **ContainsOnly/ContainsNone/ContainsAny** - checks if String contains only/none/any of these characters
- **Substring/Left/Right/Mid** - null-safe substring extractions
- **SubstringBefore/SubstringAfter/SubstringBetween** - substring extraction relative to other strings
- **Split/Join** - splits a String into an array of substrings and vice versa
- **Remove/Delete** - removes part of a String
- **Replace/Overlay** - Searches a String and replaces one String with another
- **Chomp/Chop** - removes the last part of a String
- **AppendIfMissing** - appends a suffix to the end of the String if not present
- **PrependIfMissing** - prepends a prefix to the start of the String if not present
- **LeftPad/RightPad/Center/Repeat** - pads a String
- **UpperCase/LowerCase/SwapCase/Capitalize/Uncapitalize** - changes the case of a String
- **CountMatches** - counts the number of occurrences of one String in another
- **IsAlpha/IsNumeric/IsWhitespace/IsAsciiPrintable** - checks the characters in a String
- **DefaultString** - protects against a null input String
- **Rotate** - rotate (circular shift) a String
- **Reverse/ReverseDelimited** - reverses a String
- **Abbreviate** - abbreviates a string using ellipses or another given String
- **Difference** - compares Strings and reports on their differences
- **LevenshteinDistance** - the number of changes needed to change one String into another

[ArrayUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/ArrayUtils.html)  <br />  全局静态常量：EMPTY_*_ARRAY（根据 * 处的类型，返回对应的长度为 0 的空数组）

- String toString(Object array, String stringIfNull)：如果为空，返回 stringIfNull
- String[] toStringArray(Object[] array, String valueForNullElements)：将 Object 数组转换成 String 数组，元素中的 null 值使用 valueForNullElements
- int hashCode(Object array)：使用 HashCodeBuilder 返回数组的 hashcode（相同个数、相同顺序的数组 hashCode 也相同）
- boolean isEquals(Object array1, Object array2)：用 EqualsBuilder 返回两个数组比较的结果，相当于 Arrays.deepEquals(Object[] a1, Object[] a2)
- Map<Object, Object> toMap(Object[] array)：作为参数的数组有两个选择：一是成员为 Map.Entry，然后通过遍历该数组，把 Map.Entry 拆分并分别放入新生成 Map 的 Key 和 Value 中；二是成员为长度大于等于 2 的数组，位置 0 的元素作为 key，位置 1 的元素作为 value
- T[] toArray(T... items)
- int[] toPrimitive(Integer[] array)：将包装类型数组转为基本类型数组
- Integer[] toObject(int[] array)：将基本类型数组转为包装类型数组
- xxx[] clone(xxx[] array)：如果不为空，则使用参数自己的 clone 方法处理
- Object[] subarray(Object[] array, int startIndexInclusive, int endIndexExclusive)：数组拷贝
- void reverse(Object[] array, int startIndexInclusive, int endIndexExclusive)：数组元素反转（从数组前后两个坐标 i, j 开始，交换数据，并向中间移动，当 i>j 时停止）
- int indexOf(Object[] array, Object objectToFind, int startIndex)：查找数组元素位置，return -1 if not found or null array input
- boolean contains(Object[] array, Object objectToFind)：查找元素是否存在数组中
- boolean isEmpty(Object[] array)：判断是否为空，length=0 或 null 都属于空
- Object[] addAll(Object[] array1, Object... array2)：并集操作，合并数组


[DateUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DateUtils.html)

1. 全局静态常量：MILLIS_PER_SECOND、MILLIS_PER_SECOND、MILLIS_PER_MINUTE、MILLIS_PER_HOUR、MILLIS_PER_DAY
1. 日期比较  <br />  boolean isSameDay(Date date1, Date date2)  <br />  boolean isSameDay(Calendar cal1, Calendar cal2)：比较日期是否相同，忽略 time（通过比较 Calendar.ERA、YEAR、DAY_OF_YEAR 三个属性判断给定日期是否相同）
1. 时间比较  <br />  boolean isSameInstant(Date date1, Date date2)  <br />  boolean isSameInstant(Calendar cal1, Calendar cal2)：比较时间是否相同（通过 Date 类中的 getTime() 方法）
1. add 族  <br />  Date addYears(Date date, int amount)：在给定日期 date 的基础上添加 amount 年，返回新的对象  <br />  Date addMonths(Date date, int amount)：添加月  <br />  Date addWeeks(Date date, int amount)：添加周  <br />  Date addDays(Date date, int amount)：添加日  <br />  Date addHours(Date date, int amount)：添加小时  <br />  Date addMinutes(Date date, int amount)：添加分钟  <br />  Date addSeconds(Date date, int amount)：添加秒  <br />  Date addMilliseconds(Date date, int amount)：添加毫秒
1. set 族  <br />  Date setYears(Date date, int amount)：为 date 设置新的年份信息，并返回一个新的对象  <br />  Date setMonths(Date date, int amount)：设置月份  <br />  Date setDays(Date date, int amount)：设置日期  <br />  Date setHours(Date date, int amount)：设置小时  <br />  Date setMinutes(Date date, int amount)：设置分钟  <br />  Date setSeconds(Date date, int amount)：设置秒  <br />  Date setMilliseconds(Date date, int amount)：设置毫秒
1. round 族、truncate 族、ceil 族：日期取整（日期精度调节，如调节至秒/分等）

Date round(Date date, int field)：相当于数学中的四舍五入法取整  <br />  Date truncate(Date date, int field)：相当于去余法取整  <br />  Date ceiling(Date date, int field)：相当于向上取整

- [BooleanUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/BooleanUtils.html)
- [CharUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/CharUtils.html)
- [NumberUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/math/NumberUtils.html)
- [RegExUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/RegExUtils.html)
- [RandomStringUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/RandomStringUtils.html)
- [SystemUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/SystemUtils.html)
- [ThreadUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/ThreadUtils.html)


## commons-io

- [FilenameUtils](https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/FilenameUtils.html)
- [FileUtils](https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/FileUtils.html)
- [IOUtils](https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/IOUtils.html)



# [guava](https://github.com/google/guava)


# [hutool](https://github.com/dromara/hutool)
  <br />   



# Log4j2
**Maven导入**
```xml
<!-- https://mvnrepository.com/artifact/org.apache.logging.log4j/log4j-core -->
<dependency>
<groupId>org.apache.logging.log4j</groupId>
<artifactId>log4j-core</artifactId>
<version>2.13.0</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.apache.logging.log4j/log4j-api -->
<dependency>
<groupId>org.apache.logging.log4j</groupId>
<artifactId>log4j-api</artifactId>
<version>2.13.0</version>
</dependency>
```
**log4j2.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration>
	<Properties>
        <!-- 定义日志格式 -->
		<Property name="log.pattern">%d{MM-dd HH:mm:ss.SSS} [%t] %-5level %logger{36}%n%msg%n%n</Property>
        <!-- 定义文件名变量 -->
		<Property name="file.err.filename">log/err.log</Property>
		<Property name="file.err.pattern">log/err.%i.log.gz</Property>
	</Properties>
    <!-- 定义Appender，即目的地 -->
	<Appenders>
        <!-- 定义输出到屏幕 -->
		<Console name="console" target="SYSTEM_OUT">
            <!-- 日志格式引用上面定义的log.pattern -->
			<PatternLayout pattern="${log.pattern}" />
		</Console>
        <!-- 定义输出到文件,文件名引用上面定义的file.err.filename -->
		<RollingFile name="err" bufferedIO="true" fileName="${file.err.filename}" filePattern="${file.err.pattern}">
			<PatternLayout pattern="${log.pattern}" />
			<Policies>
                <!-- 根据文件大小自动切割日志 -->
				<SizeBasedTriggeringPolicy size="1 MB" />
			</Policies>
            <!-- 保留最近10份 -->
			<DefaultRolloverStrategy max="10" />
		</RollingFile>
	</Appenders>
	<Loggers>
		<Root level="info">
            <!-- 对info级别的日志，输出到console -->
			<AppenderRef ref="console" level="info" />
            <!-- 对error级别的日志，输出到err，即上面定义的RollingFile -->
			<AppenderRef ref="err" level="error" />
		</Root>
	</Loggers>
</Configuration>
```
| Level | 描述 |
| --- | --- |
| ALL | 各级包括自定义级别 |
| DEBUG | 指定细粒度信息事件是最有用的应用程序调试 |
| ERROR | 错误事件可能仍然允许应用程序继续运行 |
| FATAL | 指定非常严重的错误事件，这可能导致应用程序中止 |
| INFO | 指定能够突出在粗粒度级别的应用程序运行情况的信息的消息 |
| OFF | 这是最高等级，为了关闭日志记录 |
| TRACE | 指定细粒度比DEBUG更低的信息事件 |
| WARN | 指定具有潜在危害的情况 |

**程序示例**
```java
import org.apache.logging.log4j.*；
public class Test {
	static Logger logger= LogManager.getLogger(Test.class.getName());
	public static void main(String[] args) throws InterruptedException {
         //PropertyConfigurator.configure("D:\\Code\\log4j2.xml");
        logger.trace("跟踪信息");
        logger.debug("调试信息");
        logger.info("输出信息");
        Thread.sleep(1000);
        logger.warn("警告信息");
        logger.error("错误信息");
        logger.fatal("致命信息");
	}
}
```



# Test

## [JUnit](https://junit.org/junit5/)
Fixture
```java
// main
public class Calculator {
    private long n = 0;
    
    public long add(long x) {
        n = n + x;
        return n;
    }
    
    public long sub(long x) {
        n = n - x;
        return n;
    }
}

// test
public class CalculatorTest {
    Calculator calculator;
    static Database db;
    
    @BeforeAll
    public static void initDatabase() {
        db = createDb(...);
    }
    
    @AfterAll
    public static void dropDatabase() {
        ...
    }
    
    @BeforeEach
    public void setUp() {
        this.calculator = new Calculator();
    }
    
    @AfterEach
    public void tearDown() {
        this.calculator = null;
    }
    
    @Test
    void testAdd() {
        assertEquals(100, this.calculator.add(100));
        assertEquals(150, this.calculator.add(50));
        assertEquals(130, this.calculator.add(-20) ,
                     "The optional assertion message is now the last parameter.");
    }
    
    @Test
    void testSub() {
        assertAll("sub method",
            () ->  assertEquals(-100, this.calculator.sub(100)),
            () -> assertEquals(-150, this.calculator.sub(50))
        );
    }
}
```
异常测试
```java
// main
public class Factorial {
    public static long fact(long n) {
        if (n < 0) {
            throw new IllegalArgumentException("Negative");
        }
        long r = 1;
        for (long i = 1; i <= n; i++) {
            r = r * i;
        }
        return r;
    }
}

@Test
void testNegative() {
    assertThrows(IllegalArgumentException.class, new Executable() {
        @Override
        public void execute() throws Throwable {
            Factorial.fact(-1);
        }
    });
}
// or

@Test
void testNegative() {
    Throwable exception = assertThrows(IllegalArgumentException.class, () -> {
        Factorial.fact(-1);
    });
    assertEquals("Negative", exception.getMessage());
}
```

超时
```java
@Test
void timeoutNotExceeded() {
    // The following assertion succeeds.
    assertTimeout(ofMinutes(2), () -> {
        // Perform task that takes less than 2 minutes.
    });
}

@Test
void timeoutNotExceededWithResult() {
    // The following assertion succeeds, and returns the supplied object.
    String actualResult = assertTimeout(ofMinutes(2), () -> {
        return "a result";
    });
    assertEquals("a result", actualResult);
}
```

条件测试
```java
@Disabled
@Test
void testBug101() {
    // 这个测试不会运行
}

@Test
@EnabledIfEnvironmentVariable(named = "DEBUG", matches = "true")
void testOnlyOnDebugMode() {
    // TODO: this test is only run on DEBUG=true
}
```
参数化测试
```java
// 单参数
@ParameterizedTest
@ValueSource(ints = { -1, -5, -100 })
void testAbsNegative(int x) {
    assertEquals(-x, Math.abs(x));
}

// 多参数
@ParameterizedTest
@MethodSource
void testCapitalize(String input, String result) {
    assertEquals(result, StringUtils.capitalize(input));
}

static List<Arguments> testCapitalize() {
    return List.of( // arguments:
            Arguments.arguments("abc", "Abc"), //
            Arguments.arguments("APPLE", "Apple"), //
            Arguments.arguments("gooD", "Good"));
}

// csv
@ParameterizedTest
@CsvSource({ "abc, Abc", "APPLE, Apple", "gooD, Good" })
// @CsvFileSource(resources = { "/test-capitalize.csv" })
void testCapitalize(String input, String result) {
    assertEquals(result, StringUtils.capitalize(input));
}
```





## [mockito](https://github.com/mockito/mockito)

- [mock()](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html#mock-java.lang.Class-)/[@Mock](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mock.html): create mock
   - optionally specify how it should behave via [Answer](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/stubbing/Answer.html)/[MockSettings](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/MockSettings.html)
   - [when()](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html#when-T-)/[given()](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/BDDMockito.html#given-T-) to specify how a mock should behave
   - If the provided answers don't fit your needs, write one yourself extending the [Answer](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/stubbing/Answer.html) interface
- [spy()](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html#spy-T-)/[@Spy](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Spy.html): partial mocking, real methods are invoked but still can be verified and stubbed
- [@InjectMocks](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/InjectMocks.html): automatically inject mocks/spies fields annotated with @Spy or @Mock
- [verify()](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html#verify-T-): to check methods were called with given arguments
   - can use flexible argument matching, for example any expression via the [any()](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/ArgumentMatchers.html#any--)
   - or capture what arguments were called using [@Captor](http://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Captor.html) instead

验证操作
```java
 // 使用Mock对象
 mockOne.add("one");
 // 普通验证
 verify(mockOne).add("one");

 // 验证某个交互是否从未被执行
 verify(mockOne, never()).add("two");
 // 验证mock对象没有交互过
 verifyZeroInteractions(mockTwo, mockThree);
```
执行顺序
```java
// A. 验证mock一个对象的函数执行顺序
 List singleMock = mock(List.class);

 //using a single mock
 singleMock.add("was added first");
 singleMock.add("was added second");

 // 为该mock对象创建一个inOrder对象
 InOrder inOrder = inOrder(singleMock);

 // 确保add函数首先执行的是add("was added first"),然后才是add("was added second")
 inOrder.verify(singleMock).add("was added first");
 inOrder.verify(singleMock).add("was added second");


 // B .验证多个mock对象的函数执行顺序
 List firstMock = mock(List.class);
 List secondMock = mock(List.class);

 //using mocks
 firstMock.add("was called first");
 secondMock.add("was called second");

 // 为这两个Mock对象创建inOrder对象
 InOrder inOrder = inOrder(firstMock, secondMock);

 // 验证它们的执行顺序
 inOrder.verify(firstMock).add("was called first");
 inOrder.verify(secondMock).add("was called second");
```


[PowerMock](https://github.com/powermock/powermock)



# [okhttp](https://github.com/square/okhttp)
```java
class MyHttp {

  OkHttpClient client = new OkHttpClient().newBuilder()
      .addInterceptor(new BasicLoggingInterceptor())
//      .cache(cache) // configure cache
//      .proxy(proxy) // configure proxy
//      .certificatePinner(certificatePinner) // certificate pinning
//      .addNetworkInterceptor(interceptor) // network level interceptor
//      .authenticator(authenticator) // authenticator for requests (it supports similar use-cases as "Authorization header" earlier
//      .callTimeout(10000) // default timeout for complete calls
//      .readTimeout(10000) // default read timeout for new connections
//      .writeTimeout(10000) // default write timeout for new connections
//      .dns(dns) // DNS service used to lookup IP addresses for hostnames
//      .followRedirects(true) // follow requests redirects
//      .followSslRedirects(true) // follow HTTP tp HTTPS redirects
//      .connectionPool(connectionPool) // connection pool used to recycle HTTP and HTTPS connections
//      .retryOnConnectionFailure(true) // retry or not when a connectivity problem is encountered
//      .cookieJar(cookieJar) // cookie manager
//      .dispatcher(dispatcher) // dispatcher used to set policy and execute asynchronous requests
      .build();

  String host = "https://json.extendsclass.com";

  public final MediaType JSON
      = MediaType.get("application/json; charset=utf-8");

  private Request request;

  //  public Headers headers = new Headers.Builder().add("Security-key", "ec").build();
  public Headers headers;

  MyHttp() {
    Map<String, String> map = new HashMap<>();
    map.put("Security-key", "ec");
    headers = Headers.of(map);
  }

  public MyHttp get(String url) {
    HttpUrl.Builder queryUrlBuilder = HttpUrl.get("https://json.extendsclass.com").newBuilder();
    queryUrlBuilder.addQueryParameter("limit", "15");

    request = new Request.Builder()
        .url(host + url)
        .headers(headers)
        .addHeader("user-agent", "Mozilla/5.0")
        .build();
    return this;
  }

  public MyHttp post(String url, String json) {
    RequestBody formBody = new FormBody.Builder().add("username","root").build();
    RequestBody fileBody = RequestBody.create(new File("path/attachment.png"),
        MediaType.parse("image/png"));
    RequestBody requestBody = new MultipartBody.Builder()
        .setType(MultipartBody.FORM)
        .addFormDataPart("file", "head_img", fileBody)
        .addFormDataPart("name", "xiaoyi").build();

    RequestBody body = RequestBody.create(json, JSON);
    request = new Request.Builder()
        .url(host + url)
        .headers(headers)
        .post(body)
        .build();
    return this;
  }

  public String sync() throws IOException {
    try (Response response = client.newCall(request).execute()) {
      return response.body().string();
    }
  }

  public void async() {
    client.newCall(request).enqueue(new Callback() {
      @Override
      public void onFailure(@NotNull Call call, @NotNull IOException e) {
        e.printStackTrace();
      }

      @Override
      public void onResponse(@NotNull Call call, @NotNull Response response) {
        System.out.println("----- Async -----");
        System.out.println(response.body());
      }
    });
  }

  static class BasicLoggingInterceptor implements Interceptor {
    @NotNull
    @Override
    public Response intercept(Interceptor.Chain chain) throws IOException {
      Request request = chain.request();

      System.out.printf("Sending request %s on %s%n%s%n",
          request.url(), chain.connection(), request.headers());

      Response response = chain.proceed(request);

      System.out.printf("Received response for %s %n%s%n",
          response.request().url(), response.headers());

      return response;
    }
  }
    
  public static void main(String[] args) throws IOException {
    MyHttp okhttp = new MyHttp();
    String sync = okhttp.get("/bin/659e99c04915").sync();
    System.out.println("--- main ---");
    System.out.println(sync);
  }
}
```



# Json


## [Jacson](https://github.com/FasterXML/jackson)
```java
ObjectMapper mapper = new ObjectMapper();

// 序列化
String jsonString = mapper.writeValueAsString(object);

// 反序列化
Object bean = mapper.readValue(jsonString, Object.class);
```
注解  <br />  `@JsonProperty`: 属性使用的注解，用来表示外部属性名字，就是使用别名序列化  <br />  `@JsonIgnore`: 属性使用的注解，用于忽略指定属性。  <br />  `@JsonIgnoreProperties`: 实体类使用的注解，用于序列化的时候忽略指定的一系列属性，或者反序列化的时候忽略未知的属性(没有getter/setter的属性)。  <br />  `@JsonIgnoreType`: 实体类使用的注解，表示该类被忽略。  <br />  `@JsonInclude`: 实体类/属性使用的注解，用于忽略NULL的属性，空的属性或者NULL的类  <br />  `@JsonFormat`：具有每种类型行为的一般注释；例如，可用于指定序列化日期/时间值时使用的格式。  <br />  反序列化  <br />  `@JacksonInject`: 注释表示属性应该通过“注入”而不是从数据 (JSON) 中获取其值。  <br />  `@JsonAnySetter`: 用于将双参数方法定义为“任何设置器”的注释，用于反序列化否则未映射的 JSON 属性的值  <br />  `@JsonCreator`: 用于指示在反序列化期间应使用构造函数或静态工厂方法创建值实例的注释。  <br />  `@JsonSetter`：替代@JsonProperty，用于标记指定的方法是“setter-method”  <br />  序列化细节  <br />  `@JsonAnyGetter`: 用于将 getter 定义为“任何 getter”的注释，它返回一个java.util.Map，其内容将被序列化为 JSON 对象的附加属性，以及该对象可能具有的常规属性。  <br />  `@JsonGetter`：替代@JsonProperty，用于标记指定的方法是“getter-method”  <br />  `@JsonPropertyOrder`: 用于指定属性序列化顺序的注释  <br />  `@JsonRawValue`：可用于指定属性的值将按原样“完全”包含在序列化中，没有转义或修饰  <br />  `@JsonValue`：指示 POJO 应该序列化是使用属性的值来完成的，通常是java.lang.String（如注释toString()方法）  <br />  `@JsonRootName`: 类注释用于指示用于根值的“包装器”条目的名称，如果启用了根包装


## [Fastjson](https://github.com/alibaba/fastjson)
```java
// 序列化
String jsonString = JSON.toJSONString(obj);

// 反序列化
Object bean = JSON.parseObject(jsonString, Object.class);
Object[] beans = JSON.parseArray(jsonStringArray, Object.class);
```
注解 `@JSONField`  <br />  配置在属性（setter、getter）和字段（必须是 public field）上
```java
// 设置字段名
@JSONField(name="ID")
public int getId() {return id;}

// 配置date序列化和反序列使用yyyyMMdd日期格式
@JSONField(format="yyyyMMdd")
public Date date;

// 不序列化
@JSONField(serialize=false)
// 不反序列化
@JSONField(deserialize=false)

// 按ordinal排序
@JSONField(ordinal = 2)
```


## [Gson](https://github.com/google/gson)
```java
Gson gson = new Gson();

// 序列化
gson.toJson(object);

// 反序列化
Object bean = gson.fromJson(jsonString, Object.class)
```



# [Tomcat](https://tomcat.apache.org/) 
Tomcat 是由 Apache 开发的一个 Servlet 容器，实现了对 Servlet 和 JSP 的支持，并提供了作为 Web 服务器的一些特有功能，如 Tomcat 管理和控制平台、安全域管理和 Tomcat 阀等

目录

- /bin - Tomcat 脚本存放目录
- /conf - Tomcat 配置文件目录
- /logs - Tomcat 默认日志目录
- /webapps - webapp 运行的目录


tomcat9启动后控制台乱码：

- 打开“/apache-tomcat-9.0.20/conf/logging.properties”文件
- 定位java.util.logging.ConsoleHandler.encoding，将UTF-8 改成 GBK
```xml
修改默认端口8080
<Connector port="8080" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8543" />
```













# [JavaFX](https://wiki.openjdk.java.net/display/OpenJFX/Main)




# **—— **[IntelliJ IDEA](https://www.423down.com/10850.html)** ——**


## [Shortcuts](https://www.jetbrains.com/help/idea/reference-keymap-win-default.html)

**Live Templates**
> File | Settings | Editor | Live Templates

psvm	main方法  <br />  fori	for循环  <br />  sout	System.out  <br />  user.for+Tab	for(User user : users)  <br />  user.getBirthday().var+Tab	Date birthday = user.getBirthday()

insert	插入/改写模式


**IntelliJ IDEA's top keyboard shortcuts**

| [Search Everywhere](https://www.jetbrains.com/help/idea/searching-everywhere.html) | Double Shift |
| --- | --- |
| [Find Action...](https://www.jetbrains.com/help/idea/searching-everywhere.html#search_actions) | Ctrl+Shift+A |
| [Show Project window](https://www.jetbrains.com/help/idea/project-tool-window.html) | Alt+1 |
| [Rebuild](https://www.jetbrains.com/help/idea/compiling-applications.html) | Ctrl+Shift+F9 |
| [Show Intention Actions](https://www.jetbrains.com/help/idea/intention-actions.html#apply-intention-actions) | Alt+Enter |
| [Recent Files](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#recent_files) | Ctrl+E |
| [Find Usages](https://www.jetbrains.com/help/idea/find-highlight-usages.html#find-usages) | Alt+F7 |
| [Select In...](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#navigate_in_project_view) | Alt+F1 |
| [Settings...](https://www.jetbrains.com/help/idea/configure-project-settings.html) | Ctrl+Alt+S |
| [Generate...](https://www.jetbrains.com/help/idea/generating-code.html) | Alt+Insert |
| [Run Anything](https://www.jetbrains.com/help/idea/running-applications.html) | Double Ctrl |
| [Debug...](https://www.jetbrains.com/help/idea/starting-the-debugger-session.html) | Alt+Shift+F9 |
| [View Breakpoints...](https://www.jetbrains.com/help/idea/using-breakpoints.html) | Ctrl+Shift+F8 |
| [Attach to Process...](https://www.jetbrains.com/help/idea/attaching-to-local-process.html) | Ctrl+Alt+F5 |
| [VCS Operations Popup...](https://www.jetbrains.com/help/idea/version-control-integration.html) | Alt+` |
| [Refactor This...](https://www.jetbrains.com/help/idea/refactoring-source-code.html) | Ctrl+Alt+Shift+T |
| [Reformat Code](https://www.jetbrains.com/help/idea/reformat-and-rearrange-code.html) | Ctrl+Alt+L |



**Basic editing**

| Paste as Plain Text | Ctrl+Alt+Shift+V |
| --- | --- |
| Paste from History... | Ctrl+Shift+V |
| Duplicate Line or Selection | Ctrl+D |
| Copy Paths | Ctrl+Shift+C |
| Copy Reference | Ctrl+Alt+Shift+C |
| Save All | Ctrl+S |
| Undo | Ctrl+Z |
| Redo | Ctrl+Shift+Z |
| Start New Line | Shift+Enter |
| Start New Line Before Current | Ctrl+Alt+Enter |
| Delete Line | Ctrl+Y |
| Toggle Case | Ctrl+Shift+U |
| Scratch File | Ctrl+Alt+Shift+Insert |
| Open Source in New Window | Shift+F4 |

**Caret navigation**

|   <br />   |   <br />   |
| --- | --- |
| Move Caret to Previous Word | Ctrl+Left |
| Move Caret to Next Word | Ctrl+Right |
| Move Caret to Line Start | Home |
| Move Caret to Line End | End |
| Move Caret to Matching Brace | Ctrl+Shift+M |
| Move Caret to Code Block Start | Ctrl+[ |
| Move Caret to Code Block End | Ctrl+] |
| Next Method | Alt+Down |
| Previous Method | Alt+Up |
| Move Caret to Page Top | Ctrl+Page Up |
| Move Caret to Page Bottom | Ctrl+Page Down |
| Page Up | Page Up |
| Page Down | Page Down |
| Move Caret to Text Start | Ctrl+Home |
| Move Caret to Text End | Ctrl+End |

**Select text**

|   <br />   |   <br />   |
| --- | --- |
| Select All | Ctrl+A |
| Left with Selection | Shift+Left |
| Right with Selection | Shift+Right |
| Move Caret to Previous Word with Selection | Ctrl+Shift+Left |
| Move Caret to Next Word with Selection | Ctrl+Shift+Right |
| Move Caret to Line Start with Selection | Shift+Home |
| Move Caret to Line End with Selection | Shift+End |
| Up with Selection | Shift+Up |
| Down with Selection | Shift+Down |
| Move Caret to Code Block Start with Selection | Ctrl+Shift+[ |
| Move Caret to Code Block End with Selection | Ctrl+Shift+] |
| Move Caret to Page Top with Selection | Ctrl+Shift+Page Up |
| Move Caret to Page Bottom with Selection | Ctrl+Shift+Page Down |
| Page Up with Selection | Shift+Page Up |
| Page Down with Selection | Shift+Page Down |
| Move Caret to Text Start with Selection | Ctrl+Shift+Home |
| Move Caret to Text End with Selection | Ctrl+Shift+End |
| Extend Selection | Ctrl+W |
| Shrink Selection | Ctrl+Shift+W |

**Multiple carets and selection ranges**

|   <br />   |   <br />   |
| --- | --- |
| [Add/Remove Caret](https://www.jetbrains.com/help/idea/multicursor.html#add-carets-at-selected-locations) | Alt+Shift+Click |
| [Toggle Column Selection Mode](https://www.jetbrains.com/help/idea/multicursor.html#column_selection) | Alt+Shift+Insert |
| [Clone Caret Above](https://www.jetbrains.com/help/idea/multicursor.html#add-carets-above-or-below-the-current-caret) | Double Ctrl + Up |
| [Clone Caret Below](https://www.jetbrains.com/help/idea/multicursor.html#add-carets-above-or-below-the-current-caret) | Double Ctrl + Down |
| [Add Caret to Each Line in Selection](https://www.jetbrains.com/help/idea/multicursor.html#add-carets-to-the-end-of-each-line-in-the-selected-region) | Alt+Shift+G |
| [Add Selection for Next Occurrence](https://www.jetbrains.com/help/idea/multicursor.html#multiple_words) | Alt+J |
| [Select All Occurrences](https://www.jetbrains.com/help/idea/multicursor.html#multiple_words) | Ctrl+Alt+Shift+J |
| [Deselect Last Occurrence](https://www.jetbrains.com/help/idea/multicursor.html#multiple_words) | Alt+Shift+J |
| [Create Rectangular Selection](https://www.jetbrains.com/help/idea/multicursor.html#use-mouse-to-select-rectangular-fragments-of-text-in-normal-selection-mode) | Alt+Shift+Middle-Click |
| [Drag to Create Rectangular Selection](https://www.jetbrains.com/help/idea/multicursor.html#use-mouse-to-select-rectangular-fragments-of-text-in-normal-selection-mode) | Alt+Click |
| [Drag to Create Multiple Rectangular Selections](https://www.jetbrains.com/help/idea/multicursor.html#use-mouse-to-select-rectangular-fragments-of-text-in-normal-selection-mode) | Ctrl+Alt+Shift+Click |

**Coding assistance**

|   <br />   |   <br />   |
| --- | --- |
| [Show Intention Actions](https://www.jetbrains.com/help/idea/intention-actions.html#apply-intention-actions) | Alt+Enter |
| [Basic Completion](https://www.jetbrains.com/help/idea/auto-completing-code.html#basic_completion) | Ctrl+Space |
| Type-Matching Completion | Ctrl+Shift+Space |
| Second Basic Completion | Ctrl+Alt+Space |
| Complete Current Statement | Ctrl+Shift+Enter |
| Reformat Code | Ctrl+Alt+L |
| [Parameter Info](https://www.jetbrains.com/help/idea/viewing-reference-information.html#view-parameter-info) | Ctrl+P |
| [Quick Documentation](https://www.jetbrains.com/help/idea/viewing-reference-information.html#inline-quick-documentation) | Ctrl+Q |
| Move Statement Up | Ctrl+Shift+Up |
| Move Statement Down | Ctrl+Shift+Down |
| Move Element Left | Ctrl+Alt+Shift+Left |
| Move Statement Right | Ctrl+Alt+Shift+Right |
| Move Line Up | Alt+Shift+Up |
| Move Line Down | Alt+Shift+Down |
| Comment with Line Comment | Ctrl+/ |
| Comment with Block Comment | Ctrl+Shift+/ |
| Generate... | Alt+Insert |

**Context navigation**

|   <br />   |   <br />   |
| --- | --- |
| Next Method | Alt+Down |
| Previous Method | Alt+Up |
| [Go to Line/Column...](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#find_line) | Ctrl+G |
| [Switcher](https://www.jetbrains.com/help/idea/using-code-editor.html#ws_editor_switch_between_tabs) | Ctrl+Tab |
| [Select In...](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#navigate_in_project_view) | Alt+F1 |
| [Recent Files](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#recent_files) | Ctrl+E |
| Last Edit Location | Ctrl+Shift+Backspace |
| Back | Ctrl+Alt+Left |
| Forward | Ctrl+Alt+Right |
| Select Next Tab | Alt+Right |
| Select Previous Tab | Alt+Left |
| Toggle Anonymous Bookmark | F11 |
| Toggle Bookmark with Digit | Ctrl+Shift+[digit] |
| Toggle Bookmark with Mnemonic | Ctrl+F11 |
| Show All Bookmarks | Shift+F11 |
| Go to Bookmark with Digit | Ctrl+[digit] |
| Show Mnemonic Bookmarks | N/A |
| Go to Next Bookmark | N/A |
| Go to Previous Bookmark | N/A |
| Show Bookmarks window | N/A |
| Show Structure window | Alt+7 |
| Show Find window | Alt+3 |
| Next Occurrence | Ctrl+Alt+Down |
| Previous Occurrence | Ctrl+Alt+Up |

**Find everything**

|   <br />   |   <br />   |
| --- | --- |
| Search Everywhere | Double Shift |
| [Find...](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-file.html#find_in_file) | Ctrl+F |
| [Find Next / Move to Next Occurrence](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-file.html#find_in_file) | F3 |
| [Find Previous / Move to Previous Occurrence](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-file.html#find_in_file) | Shift+F3 |
| [Replace...](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-file.html#replace_search_string) | Ctrl+R |
| [Find in Files...](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-project.html#find_in_project) | Ctrl+Shift+F |
| [Replace in Files...](https://www.jetbrains.com/help/idea/finding-and-replacing-text-in-project.html#replace_search_string_in_project) | Ctrl+Shift+R |
| Next Occurrence of the Word at Caret | Ctrl+F3 |
| Go to File... | Ctrl+Shift+N |
| File Structure | Ctrl+F12 |
| Go to Symbol... | Ctrl+Alt+Shift+N |
| [Find Action...](https://www.jetbrains.com/help/idea/searching-everywhere.html#search_actions) | Ctrl+Shift+A |

**Navigate from symbols**

|   <br />   |   <br />   |
| --- | --- |
| [Find Usages](https://www.jetbrains.com/help/idea/find-highlight-usages.html#find-usages) | Alt+F7 |
| Go to Declaration or Usages | Ctrl+B |
| Go to Type Declaration | Ctrl+Shift+B |
| Show Usages | Ctrl+Alt+F7 |
| [Go to Super Method](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#go_to_implementation) | Ctrl+U |
| [Go to Implementation(s)](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#go_to_implementation) | Ctrl+Alt+B |
| [Highlight Usages in File](https://www.jetbrains.com/help/idea/find-highlight-usages.html#usages_in_file) | Ctrl+Shift+F7 |

**Code analysis**

|   <br />   |   <br />   |
| --- | --- |
| [Show Intention Actions](https://www.jetbrains.com/help/idea/intention-actions.html#apply-intention-actions) | Alt+Enter |
| Error Description | Ctrl+F1 |
| [Next Highlighted Error](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#navigate-errors-warnings) | F2 |
| [Previous Highlighted Error](https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#navigate-errors-warnings) | Shift+F2 |
| [Run Inspection by Name...](https://www.jetbrains.com/help/idea/running-inspections.html#run-inspections-manually) | Ctrl+Alt+Shift+I |
| Show Problems window | Alt+6 |

**Run and debug**

|   <br />   |   <br />   |
| --- | --- |
| Run Anything | Double Ctrl |
| Run context configuration | Shift+F10 |
| Run... | Alt+Shift+F10 |
| Debug context configuration | Shift+F9 |
| Debug... | Alt+Shift+F9 |
| Attach to Process... | Ctrl+Alt+F5 |
| Stop | Ctrl+F2 |
| Resume Program | F9 |
| Stop Background Processes... | Ctrl+Shift+F2 |
| Step Over | F8 |
| Force Step Over | Alt+Shift+F8 |
| Step Into | F7 |
| Smart Step Into | Shift+F7 |
| Force Step Into | Alt+Shift+F7 |
| Step Out | Shift+F8 |
| Run To Cursor | Alt+F9 |
| Force Run To Cursor | Ctrl+Alt+F9 |
| Show Execution Point | Alt+F10 |
| Evaluate Expression... | Alt+F8 |
| Quick Evaluate Expression | Ctrl+Alt+F8 |
| Toggle Line Breakpoint | Ctrl+F8 |
| Toggle Temporary Line Breakpoint | Ctrl+Alt+Shift+F8 |
| View Breakpoints... | Ctrl+Shift+F8 |
| Edit Breakpoint | Ctrl+Shift+F8 |
| Show Run window | Alt+4 |
| Show Debug window | Alt+5 |
| Show Services window | Alt+8 |

**Refactorings**

|   <br />   |   <br />   |
| --- | --- |
| Refactor This... | Ctrl+Alt+Shift+T |
| Rename... | Shift+F6 |
| Change Signature... | Ctrl+F6 |
| Inline... | Ctrl+Alt+N |
| Move... | F6 |
| Extract Method... | Ctrl+Alt+M |
| Introduce Field... | Ctrl+Alt+F |
| Introduce Parameter... | Ctrl+Alt+P |
| Introduce Variable... | Ctrl+Alt+V |
| Safe Delete... | Alt+Delete |

**Global VCS actions**

|   <br />   |   <br />   |
| --- | --- |
| VCS Operations Popup... | Alt+` |
| Commit... | Ctrl+K |
| Update Project | Ctrl+T |
| Rollback | Ctrl+Alt+Z |
| Push... | Ctrl+Shift+K |
| Next Change | Ctrl+Alt+Shift+Down |
| Previous Change | Ctrl+Alt+Shift+Up |
| Show Version Control window | Alt+9 |
| Show Commit window | Alt+0 |

**Tool windows**

|   <br />   |   <br />   |
| --- | --- |
| Hide Active Tool Window | Shift+Escape |
| Hide All Tool Windows | Ctrl+Shift+F12 |
| Jump to Last Tool Window | F12 |
| Stretch to Left | Ctrl+Alt+Shift+Left |
| Stretch to Right | Ctrl+Alt+Shift+Right |
| Stretch to Top | Ctrl+Alt+Shift+Up |
| Stretch to Bottom | Ctrl+Alt+Shift+Down |
| Show Project window | Alt+1 |
| Show Bookmarks window | N/A |
| Show Find window | Alt+3 |
| Show Run window | Alt+4 |
| Show Debug window | Alt+5 |
| Show Problems window | Alt+6 |
| Show Structure window | Alt+7 |
| Show Services window | Alt+8 |
| Show Version Control window | Alt+9 |
| Show Commit window | Alt+0 |
| Show Terminal window | Alt+F12 |

  <br />  

## Settings
方法分隔符  <br />  Settings -> Editor -> General -> Appearance  <br />  勾选 show method separators

忽略大小写字母  <br />  Settings -> Editor -> General -> Code Completion  <br />  关闭 Match case

多行显示Tab  <br />  Editor Tabs  <br />  勾选 Show tabs in one row

编码字符集  <br />  Settings -> Editor -> General -> File Encodings

Google style  <br />  [intellij-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)  <br />  Settings -> Editor -> General -> Code Style | Java


## plugin

- Maven Helper	依赖分析
- Codota	代码智能提示
- Tabnine	基于 AI 的代码提示
- Rainbow Brackets	彩虹括号
- One Dark theme

- RestfulToolkit	RESTful服务开发
- Key Promoter X	快捷键
- GsonFormat+RoboPOJOGenerator	JSON转类对象
- Statistic	项目信息统计
- Translation	必备的翻译插件
- CamelCase-多种命名格式之间切换




