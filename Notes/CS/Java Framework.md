
# —— [Tomcat](https://tomcat.apache.org/) ——


**启动**  <br />  在tomcat的bin中运行startup.bat  <br />  [http://127.0.0.1:8080](http://127.0.0.1:8080)  <br />  tomcat9启动后控制台乱码：

- 打开“/apache-tomcat-9.0.20/conf/logging.properties”文件
- 定位java.util.logging.ConsoleHandler.encoding，将UTF-8 改成 GBK
```xml
修改默认端口8080
<Connector port="8080" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8543" />
```



# —— [Maven](https://maven.apache.org/) ——
管理和构建工具
```shell
a-maven-project
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   └── resources
│   └── test
│       ├── java
│       └── resources
└── target
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

配置镜像仓库 (settings.xml)
```xml
<mirrors>
        <mirror>
            <id>aliyun</id>
            <name>aliyun</name>
            <mirrorOf>central</mirrorOf>
            <!-- 国内推荐阿里云的Maven镜像 -->
            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        </mirror>
</mirrors>
修改仓库位置
<localRepository>D:\Code\repository</localRepository>
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
```xml
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




# RabbitMQ






# Kafka




# [Apache ZooKeeper](https://zookeeper.apache.org/)




# [Elasticsearch](https://www.elastic.co/)


# [JavaFX](https://wiki.openjdk.java.net/display/OpenJFX/Main)




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
注解 @JSONField  <br />  配置在属性（setter、getter）和字段（必须是 public field）上
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



# **—— **[IntelliJ IDEA](https://www.423down.com/10850.html)** ——**


## [Shortcuts](https://www.jetbrains.com/help/idea/reference-keymap-win-default.html)

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

**Settings**  <br />  方法分隔符  <br />  Settings -> Editor -> General -> Appearance  <br />  勾选 show method separators  <br />  忽略大小写字母  <br />  Settings -> Editor -> General -> Code Completion  <br />  关闭 Match case  <br />  多行显示Tab  <br />  Editor Tabs  <br />  勾选 Show tabs in one row  <br />  编码字符集  <br />  Settings -> Editor -> General -> File Encodings

**plugin**

- RestfulToolkit—RESTful服务开发
- Key Promoter X—快捷键
- Codota—代码智能提示
- GsonFormat+RoboPOJOGenerator—JSON转类对象
- Statistic—项目信息统计
- Translation-必备的翻译插件
- CamelCase-多种命名格式之间切换
