---
title: Java Framework
created_at: 2022-02-01T05:44:34.000Z
updated_at: 2023-04-25T14:46:47.000Z
word_count: 9693
---  

## [Maven](https://maven.apache.org/)
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

**可用变量**

- 内置属性	Maven预定义属性
   - `${basedir}`	项目的根路径，即包含pom.xml文件的目录，同`${project.basedir}`
   - `${version}`	项目版本
   - `${project.baseUri}`	项目文件地址
   - `${maven.build.timestamp}`	项目构建开始时间
   - `${maven.build.timestamp.format}`	默认值为yyyyMMdd-HHmm

- pom属性
   - `${project.build.sourceDirectory}`	主源码路径，默认为src/main/java/
   - `${project.build.testSourceDirectory}`	测试源码路径，默认为src/test/java/
   - `${project.build.directory}`	项目构建输出目录，默认为target/
   - `${project.outputDirectory}`	项目测试代码编译输出目录，默认为target/classes/
   - `${project.groupId}`	项目的groupId
   - `${project.artifactId}`	项目的artifactId
   - `${project.version}`	项目的version，同`${version}`
   - `${project.build.finalName}`	项目打包输出文件的名称，默认为`${project.artifactId}${project.version}`

- 自定义属性	在pom.xml的`<properties>`下定义的Maven属性
- setting.xml文件属性
   - `${settings.localRepository}`	本地仓库的地址
- Java系统属性
   - `System.getProperties()`	可以得到所有的Java属性
   - `${user.home}`	用户目录

- 环境变量属性
   - `${env.JAVA_HOME}` 表示JAVA_HOME环境变量的值

`mvn help:system` 可以查看所有的Java及环境变量属性


搜索第三方组件	[search.maven.org](https://search.maven.org/)  <br />  生命周期（default为例）phase：

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


## Utility
### [Lombok](https://projectlombok.org/features/all)

- `[@Getter/@Setter](https://projectlombok.org/features/GetterSetter)`	注解在类或字段，注解在类时为所有字段生成setter方法，注解在字段上时只为该字段生成setter方法
- `@ToString` 注解在类，添加toString方法。
- `@EqualsAndHashCode` 注解在类，生成hashCode和equals方法。
- `@NoArgsConstructor` 注解在类，生成无参的构造方法。
- `@RequiredArgsConstructor` 注解在类，为类中需要特殊处理的字段生成构造方法，比如final和被`@NonNull`注解的字段。
- `@AllArgsConstructor` 注解在类，生成包含类中所有字段的构造方法。
- `@Data` 注解在类，生成setter/getter、equals、canEqual、hashCode、toString方法，如为final属性，则不会为该属性生成setter方法。
- [@Builder](https://projectlombok.org/features/Builder)
- [@NonNull](https://projectlombok.org/features/NonNull)
- [@Cleanup](https://projectlombok.org/features/Cleanup)	Automatic resource management: Call your close() methods safely with no hassle.
- [@Synchronized](https://projectlombok.org/features/Synchronized)
- [@SneakyThrows](https://projectlombok.org/features/SneakyThrows)
- `@Slf4j` 注解在类，生成log变量，严格意义来说是常量



### [Apache Commons](https://commons.apache.org/)
#### [commons-lang](https://github.com/apache/commons-lang)

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
2. 日期比较  <br />  boolean isSameDay(Date date1, Date date2)  <br />  boolean isSameDay(Calendar cal1, Calendar cal2)：比较日期是否相同，忽略 time（通过比较 Calendar.ERA、YEAR、DAY_OF_YEAR 三个属性判断给定日期是否相同）
3. 时间比较  <br />  boolean isSameInstant(Date date1, Date date2)  <br />  boolean isSameInstant(Calendar cal1, Calendar cal2)：比较时间是否相同（通过 Date 类中的 getTime() 方法）
4. add 族  <br />  Date addYears(Date date, int amount)：在给定日期 date 的基础上添加 amount 年，返回新的对象  <br />  Date addMonths(Date date, int amount)：添加月  <br />  Date addWeeks(Date date, int amount)：添加周  <br />  Date addDays(Date date, int amount)：添加日  <br />  Date addHours(Date date, int amount)：添加小时  <br />  Date addMinutes(Date date, int amount)：添加分钟  <br />  Date addSeconds(Date date, int amount)：添加秒  <br />  Date addMilliseconds(Date date, int amount)：添加毫秒
5. set 族  <br />  Date setYears(Date date, int amount)：为 date 设置新的年份信息，并返回一个新的对象  <br />  Date setMonths(Date date, int amount)：设置月份  <br />  Date setDays(Date date, int amount)：设置日期  <br />  Date setHours(Date date, int amount)：设置小时  <br />  Date setMinutes(Date date, int amount)：设置分钟  <br />  Date setSeconds(Date date, int amount)：设置秒  <br />  Date setMilliseconds(Date date, int amount)：设置毫秒
6. round 族、truncate 族、ceil 族：日期取整（日期精度调节，如调节至秒/分等）

Date round(Date date, int field)：相当于数学中的四舍五入法取整  <br />  Date truncate(Date date, int field)：相当于去余法取整  <br />  Date ceiling(Date date, int field)：相当于向上取整

- [Pair](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/tuple/Pair.html)
- [Range](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/Range.html)`<T>`
- [ObjectUtils](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/ObjectUtils.html)
- [BooleanUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/BooleanUtils.html)
- [CharUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/CharUtils.html)
- [NumberUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/math/NumberUtils.html)
- [RegExUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/RegExUtils.html)
- [RandomStringUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/RandomStringUtils.html)
- [StandardToStringStyle](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/builder/StandardToStringStyle.html)
- [SerializationUtils](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/SerializationUtils.html)
- [SystemUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/SystemUtils.html)
- [ThreadUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/ThreadUtils.html)
- [Validate](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/Validate.html)
- [ClassUtils](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/ClassUtils.html)
- [FieldUtils](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/reflect/FieldUtils.html)
- [MethodUtils](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/reflect/MethodUtils.html)
- [ConstructorUtils](https://commons.apache.org/proper/commons-lang/javadocs/api-release/org/apache/commons/lang3/reflect/ConstructorUtils.html)

#### commons-io
[FilenameUtils](https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/FilenameUtils.html)

- concat(String basePath, String fullFilenameToAdd)  合并目录和文件名为文件全路径
- getBaseName(String filename)  去除目录和后缀后的文件名
- getExtension(String filename)  获取文件的后缀
- getFullPath(String filename)  获取文件的目录
- getName(String filename)  获取文件名
- getPath(String filename)  去除盘符后的路径
- getPrefix(String filename)  盘符
- indexOfExtension(String filename)  获取最后一个.的位置
- indexOfLastSeparator(String filename)  获取最后一个/的位置
- normalize(String filename)  获取当前系统格式化路径
- removeExtension(String filename)  移除文件的扩展名
- separatorsToSystem(String path)  转换分隔符为当前系统分隔符
- separatorsToUnix(String path)  转换分隔符为linux系统分隔符
- separatorsToWindows(String path)  转换分隔符为windows系统分隔符
- equals(String filename1, String filename2)  判断文件路径是否相同，非格式化
- equalsNormalized(String filename1, String filename2)  判断文件路径是否相同，格式化
- directoryContains(String canonicalParent, String canonicalChild)  判断目录下是否包含指定文件或目录
- isExtension(String filename, String extension)  判断文件扩展名是否包含在指定集合(数组、字符串)中
- wildcardMatch(String filename, String wildcardMatcher)  判断文件扩展名是否和指定规则匹配

[FileUtils](https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/FileUtils.html)

- writing to a file
- reading from a file
- make a directory including parent directories
- copying files and directories
- deleting files and directories
- converting to and from a URL
- listing files and directories by filter and extension
- comparing file content
- file last changed date
- calculating a checksum

[IOUtils](https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/IOUtils.html)

- toXxx/read - these methods read data from a stream
- write - these methods write data to a stream
- copy - these methods copy all the data from one stream to another
- contentEquals - these methods compare the content of two streams
- close


#### [Compress](http://commons.apache.org/proper/commons-compress/)
```java
@Slf4j
public class ZipUtils {

  /**
   * @param srcPath    待压缩的文件或目录
   * @param targetFile 压缩后的文件
   */
  public static void zip(String srcPath, String targetFile) throws Exception {
    File zipFile = FileUtils.getFile(targetFile);
    File srcDir = FileUtils.getFile(srcPath);
    try (ZipArchiveOutputStream stream = new ZipArchiveOutputStream(zipFile)) {
      zipRecursive(stream, srcDir, StringUtils.EMPTY);
      stream.finish();
    }
  }

  // 递归压缩目录下的文件和目录
  private static void zipRecursive(ZipArchiveOutputStream zipStream, File srcFile, String basePath)
      throws IOException {
    String currentFile = basePath + srcFile.getName();
    if (srcFile.isDirectory()) {
      File[] files = srcFile.listFiles();
      if (ArrayUtils.isNotEmpty(files)) {
        for (File file : files) {
          zipRecursive(zipStream, file, currentFile + File.separator);
        }
        return;
      }
    }
    // 空目录 或 文件直接放入
    ZipArchiveEntry entry = new ZipArchiveEntry(srcFile, currentFile);
    zipStream.putArchiveEntry(entry);
    if (srcFile.isFile()) {
      FileUtils.copyFile(srcFile, zipStream);
    }
    zipStream.closeArchiveEntry();
  }

  /**
   * @param srcFile    待解压文件
   * @param targetPath 存放位置
   */
  public static void unZip(String srcFile, String targetPath) throws Exception {
    try (InputStream fileInputStream = new FileInputStream(
        srcFile); ZipArchiveInputStream archiveInputStream = new ZipArchiveInputStream(
        fileInputStream)) {
      ZipArchiveEntry entry;
      while ((entry = archiveInputStream.getNextZipEntry()) != null) {
        if (!archiveInputStream.canReadEntryData(entry)) {
          log.warn("{} skip", entry.getName());
          continue;
        }
        File file = FileUtils.getFile(targetPath, entry.getName());
        if (entry.isDirectory()) {
          log.info("Create directory {}", file.getCanonicalPath());
          if (!file.isDirectory() && !file.mkdirs()) {
            throw new IOException("failed to create directory " + file);
          }
        } else {
          FileUtils.copyToFile(archiveInputStream, file);
          if (!file.setLastModified(entry.getLastModifiedDate().getTime())) {
            log.warn("set {} file properties failed.", file.getName());
          }
        }
      }
    }
  }

}
```

### [guava](https://github.com/google/guava)

Collections

- [Immutable collections](https://github.com/google/guava/wiki/ImmutableCollectionsExplained)
- [New collection types](https://github.com/google/guava/wiki/NewCollectionTypesExplained)
   - [Multiset](https://github.com/google/guava/wiki/NewCollectionTypesExplained#multiset)
   - [Multimap](https://github.com/google/guava/wiki/NewCollectionTypesExplained#multimap)
   - [BiMap](https://github.com/google/guava/wiki/NewCollectionTypesExplained#bimap)
   - [Table](https://github.com/google/guava/wiki/NewCollectionTypesExplained#table)
   - [ClassToInstanceMap](https://github.com/google/guava/wiki/NewCollectionTypesExplained#classtoinstancemap)
   - [RangeSet](https://github.com/google/guava/wiki/NewCollectionTypesExplained#rangeset)
   - [RangeMap](https://github.com/google/guava/wiki/NewCollectionTypesExplained#rangemap)
- [Utility Classes](https://github.com/google/guava/wiki/CollectionUtilitiesExplained)
   - [Iterables](https://github.com/google/guava/wiki/CollectionUtilitiesExplained#iterables)
   - [Lists](https://github.com/google/guava/wiki/CollectionUtilitiesExplained#lists)
   - [Sets](https://github.com/google/guava/wiki/CollectionUtilitiesExplained#sets)
   - [Maps](https://github.com/google/guava/wiki/CollectionUtilitiesExplained#maps)
   - [Multisets](https://github.com/google/guava/wiki/CollectionUtilitiesExplained#multisets)
   - [Multimaps](https://github.com/google/guava/wiki/CollectionUtilitiesExplained#multimaps)
   - [Tables](https://github.com/google/guava/wiki/CollectionUtilitiesExplained#tables)
```java
List<Integer> countUp = Ints.asList(1, 2, 3, 4, 5);
List<Integer> countDown = Lists.reverse(theList); // {5, 4, 3, 2, 1}

List<List<Integer>> parts = Lists.partition(countUp, 2); // {{1, 2}, {3, 4}, {5}}

Set<String> fruits = ImmutableSet.of("apple", "orange", "banana");
List<String> copyList = ImmutableList.copyOf(fruits);
List<String> buildList = ImmutableList.<String>builder().addAll(fruits).add("peach").build();
```

- [Graphs](https://github.com/google/guava/wiki/GraphsExplained)
- [Caches](https://github.com/google/guava/wiki/CachesExplained)

默认使用LRU淘汰算法

基于容量的回收（size-based eviction）

- maximumSize(long)
- weigher(Weigher)	指定一个权重函数
- maximumWeight(long)	指定最大总重

定时回收（Timed Eviction）

- expireAfterAccess(long, TimeUnit)：缓存项在给定时间内没有被读/写访问，则回收
- expireAfterWrite(long, TimeUnit)：缓存项在给定时间内没有被写访问（创建或覆盖），则回收

基于引用的回收（Reference-based Eviction）

- CacheBuilder.weakKeys()：使用弱引用存储键。
- CacheBuilder.weakValues()：使用弱引用存储值
- CacheBuilder.softValues()：使用软引用存储值

显式清除

- 个别清除：Cache.invalidate(key)
- 批量清除：Cache.invalidateAll(keys)
- 清除所有缓存项：Cache.invalidateAll()

统计

- recordStats()	开启Guava Cache的统计功能。
- Cache.stats()	返回CacheStats对象
   - hitRate()：缓存命中率；
   - averageLoadPenalty()：加载新值的平均时间，单位为纳秒；
   - evictionCount()：缓存项被回收的总数，不包括显式清除。

移除监听器：缓存项被移除时的回调
```java
// 通过CacheBuilder构建一个缓存实例
Cache<String, String> cache = CacheBuilder.newBuilder()
        		.initialCapacity(10)   // 设置初始容量为10
                .maximumSize(100) // 设置缓存的最大容量
                .expireAfterWrite(1, TimeUnit.MINUTES) // 设置缓存在写入一分钟后失效
                .concurrencyLevel(10) // 设置并发级别为10
                // 设置并发级别为cpu核心数
                .concurrencyLevel(Runtime.getRuntime().availableProcessors()) 
                .recordStats() // 开启缓存统计
                .build();
// 放入/覆盖一个缓存
cache.put("key", "value");
// 获取缓存，如果不存在返回null
String value = cache.getIfPresent("key");


// LoadingCache，能够通过CacheLoader自发的加载缓存
// 定时刷新缓存
LoadingCache<Object, Object> loadingCache = CacheBuilder.newBuilder()
        // 设置缓存在写入10分钟后，通过CacheLoader的load方法进行刷新
        .refreshAfterWrite(10, TimeUnit.SECONDS)
        .build(new CacheLoader<String, String>() {
            @Override
            public String load(String key) throws Exception {
                // 缓存加载逻辑
                ...
            }
        });
```

- [Strings](https://github.com/google/guava/wiki/StringsExplained)
   - [Joiner](https://github.com/google/guava/wiki/StringsExplained#joiner)
   - [Splitter](https://github.com/google/guava/wiki/StringsExplained#splitter)
   - [CharMatcher](https://github.com/google/guava/wiki/StringsExplained#charmatcher)
   - [Charsets](https://github.com/google/guava/wiki/StringsExplained#charsets)
   - [CaseFormat](https://github.com/google/guava/wiki/StringsExplained#caseformat)

- [Primitives](https://github.com/google/guava/wiki/PrimitivesExplained)
   - [Primitive arrays](https://github.com/google/guava/wiki/PrimitivesExplained#primitive-array-utilities)
   - [General utilities](https://github.com/google/guava/wiki/PrimitivesExplained#general-utility-methods)
   - [Byte conversion](https://github.com/google/guava/wiki/PrimitivesExplained#byte-conversion-methods)
   - [Unsigned support](https://github.com/google/guava/wiki/PrimitivesExplained#unsigned-support)
- [Ranges](https://github.com/google/guava/wiki/RangesExplained)
- [I/O](https://github.com/google/guava/wiki/IOExplained)

| **ByteStreams** | **CharStreams** |
| --- | --- |
| byte[] toByteArray(InputStream) | String toString(Readable) |
| N/A | `List<String>` readLines(Readable) |
| long copy(InputStream, OutputStream) | long copy(Readable, Appendable) |
| void readFully(InputStream, byte[]) | N/A |
| void skipFully(InputStream, long) | void skipFully(Reader, long) |
| OutputStream nullOutputStream() | Writer nullWriter() |


- [Hashing](https://github.com/google/guava/wiki/HashingExplained)
   - md5()
   - murmur3_128()
   - murmur3_32()
   - sha1()
   - sha256()
   - sha512()
   - goodFastHash(int bits)
   - [BloomFilter](https://github.com/google/guava/wiki/HashingExplained#bloomfilter)
- [EventBus](https://github.com/google/guava/wiki/EventBusExplained)
- [Math](https://github.com/google/guava/wiki/MathExplained)
   - [Integral](https://github.com/google/guava/wiki/MathExplained#Math-on_Integral-Types)
      - [Overflow Checking](https://github.com/google/guava/wiki/MathExplained#checked-arithmetic)
   - [Floating Point](https://github.com/google/guava/wiki/MathExplained#Floating-point-arithmetic.md)
- [Reflection](https://github.com/google/guava/wiki/ReflectionExplained)
   - [TypeToken](https://github.com/google/guava/wiki/ReflectionExplained#typetoken)
   - [Invokable](https://github.com/google/guava/wiki/ReflectionExplained#invokable)
   - [Dynamic Proxies](https://github.com/google/guava/wiki/ReflectionExplained#dynamic-proxies)
   - [ClassPath](https://github.com/google/guava/wiki/ReflectionExplained#classpath)

**RateLimiter**  <br />  令牌桶算法

- RateLimiter.create(double permitsPerSecond)	根据指定的稳定吞吐率创建RateLimiter，吞吐率指每秒多少许可数（QPS，每秒多少查询）
- RateLimiter.create(double permitsPerSecond, long warmupPeriod, TimeUnit unit)	根据指定的稳定吞吐率和预热期来创建RateLimiter，在这段预热时间内，RateLimiter每秒分配的许可数会平稳地增长直到预热期结束时达到其最大速率。（只要存在足够请求数来使其饱和）
- getRate()	配置中的稳定速率，该速率单位是每秒多少许可数
- setRate(double permitsPerSecond)	更新RateLimite的稳定速率
- acquire() 从RateLimiter获取一个许可，该方法会被阻塞直到获取到请求
- acquire(int permits)	从RateLimiter获取指定许可数，该方法会被阻塞直到获取到请求
- tryAcquire()	获取许可，如果该许可可以在无延迟下的情况下立即获取得到的话
- tryAcquire(int permits)
- tryAcquire(long timeout, TimeUnit unit)
- tryAcquire(int permits, long timeout, TimeUnit unit)	获取指定许可数如果该许可数可以在不超过timeout的时间内获取得到的话，或者如果无法在timeout 过期之前获取得到许可数的话，立即返回false （无需等待）

[guava-retrying](https://github.com/rholder/guava-retrying)
```python
Retryer<Boolean> retryer = RetryerBuilder.<Boolean>newBuilder()
        .retryIfExceptionOfType(IOException.class)
        .retryIfRuntimeException()
        .withWaitStrategy(WaitStrategies.exponentialWait(100, 5, TimeUnit.MINUTES))
        .withStopStrategy(StopStrategies.neverStop())
        .build();
```

### [hutool](https://github.com/dromara/hutool)
  <br />   


## Log
日志框架

- [logging-log4j2](https://github.com/apache/logging-log4j2)
- [logback](https://github.com/qos-ch/logback)

PatternLayout

| **参数** | **说明** | 配置 | 示例 |
| --- | --- | --- | --- |
| %c | 列出logger名字空间的全称，如果加上{<层数>}表示列出从最内层算起的指定层数的名字空间 | 假设当前logger名字空间是"a.b.c" |  |
|  |  | %c | a.b.c |
|  |  | `%c{2}` | b.c |
|  |  | %20c | （若名字空间长度小于20，则左边用空格填充） |
|  |  | %-20c | （若名字空间长度小于20，则右边用空格填充） |
|  |  | %.30c | （若名字空间长度超过30，截去多余字符） |
|  |  | %-20.30c | （若名字空间长度小于20，则右边用空格填充；若名字空间长度超过30，截去多余字符） |
| %C | 列出调用logger的类的全名（包含包路径） | 假设当前类是"org.apache.xyz.SomeClass" |  |
|  |  | %C | org.apache.xyz.SomeClass |
|  |  | `%C{1}` | SomeClass |
| %d | 显示日志记录时间，{<日期格式>}使用ISO8601定义的日期格式 | `%d{yyyy/MM/dd HH:mm:ss,SSS}` | 2023/10/12 22:23:30,117 |
|  |  | `%d{ABSOLUTE}` | 22:23:30,117 |
|  |  | `%d{DATE}` | 12 Oct 2005 22:23:30,117 |
|  |  | `%d{ISO8601}` | 2005-10-12 22:23:30,117 |
| %F | 显示调用logger的源文件名 | %F | MyClass.java |
| %l | 输出日志事件的发生位置，包括类目名、发生的线程，以及在代码中的行数 | %l | MyClass.main(MyClass.java:129) |
| %L | 显示调用logger的代码行 | %L | 129 |
| %m | 显示输出消息 | %m | This is a message for debug. |
| %M | 显示调用logger的方法名 | %M | main |
| %n | 当前平台下的换行符 | %n | Windows平台下表示rn  <br />  UNIX平台下表示n |
| %p | 显示该条日志的优先级 | %p | INFO |
| %r | 显示从程序启动时到记录该条日志时已经经过的毫秒数 | %r | 1215 |
| %t | 输出产生该日志事件的线程名 | %t | MyClass |
| %x | 按NDC（Nested Diagnostic Context，线程堆栈）顺序输出日志 | 假设某程序调用顺序是MyApp调用com.foo.Bar |  |
|  |  | %c %x - %m%n | MyApp - Call com.foo.Bar.  <br />  com.foo.Bar - Log in Bar  <br />  MyApp - Return to MyApp. |
| %X | 按MDC输出日志 | `%X{traceId}` | 2023 |
| %% | 显示一个百分号 | %% | % |


日志门面：对不同日志框架提供的一个 API 封装，可以在部署的时候不修改任何配置即可接入一种日志实现方案

- [slf4j](https://github.com/qos-ch/slf4j)

[MDC](https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/MDC.html#:~:text=A%20Mapped%20Diagnostic%20Context%2C%20or%20MDC%20in%20short%2C,MDC%20is%20managed%20on%20a%20per%20thread%20basis.) ( Mapped Diagnostic Contexts )：一个线程安全的存放诊断日志的容器，对分布式应用系统的审计和调试
```java
public class MDC {
  // 将上下文的值作为 MDC 的 key 放到线程上下的 map 中
  public static void put(String key, String val);

  // 通过 key 获取上下文标识
  public static String get(String key);

  // 通过 key 移除上下文标识
  public static void remove(String key);

  // 清除 MDC 中所有的 entry
  public static void clear();
}
```

**Spring Boot + Slf4j + Logback**
> Spring Boot 默认使用 logback 作为日志组件


logback.xml 配置
```xml
<?xml version="1.0" encoding="UTF-8" ?>

<!-- logback中一共有5种有效级别，分别是TRACE、DEBUG、INFO、WARN、ERROR，优先级依次从低到高 -->
<configuration scan="true" scanPeriod="60 seconds" debug="false">

  <property name="DIR_NAME" value="spring-boot-log-logback"/>

  <!-- APPENDER BEGIN -->
  <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
    <encoder>
      <pattern>%d{HH:mm:ss.SSS} [%thread] [%-5p] %c{36}.%M - %m%n</pattern>
    </encoder>
  </appender>
  <appender name="ALL" class="ch.qos.logback.core.rolling.RollingFileAppender">
    <!-- 根据时间来制定滚动策略 -->
    <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
      <fileNamePattern>${user.dir}/logs/${DIR_NAME}/all.%d{yyyy-MM-dd}.log</fileNamePattern>
      <maxHistory>30</maxHistory>
    </rollingPolicy>

    <!-- 根据文件大小来制定滚动策略 -->
    <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
      <maxFileSize>30MB</maxFileSize>
    </triggeringPolicy>

    <encoder>
      <pattern>%d{HH:mm:ss.SSS} [%thread] [%-5p] %c{36}.%M - %m%n</pattern>
    </encoder>
  </appender>
  <appender name="SPRING" class="ch.qos.logback.core.rolling.RollingFileAppender">
    <!-- 根据时间来制定滚动策略 -->
    <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
      <fileNamePattern>${user.dir}/logs/${DIR_NAME}/spring.%d{yyyy-MM-dd}.log
      </fileNamePattern>
      <maxHistory>30</maxHistory>
    </rollingPolicy>

    <!-- 根据文件大小来制定滚动策略 -->
    <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
      <maxFileSize>10MB</maxFileSize>
    </triggeringPolicy>

    <encoder>
      <pattern>%d{HH:mm:ss.SSS} [%thread] [%-5p] %c{36}.%M - %m%n</pattern>
    </encoder>
  </appender>
  <!-- APPENDER END -->

  <!-- LOGGER BEGIN -->
  <!-- 本项目的日志记录，分级打印 -->
  <logger name="io.github.dunwu" level="DEBUG" additivity="false">
    <appender-ref ref="ALL"/>
    <appender-ref ref="STDOUT"/>
  </logger>
  <springProfile name="staging">
    <logger name="io.github.dunwu" level="TRACE" additivity="false">
      <appender-ref ref="ALL"/>
      <appender-ref ref="STDOUT"/>
    </logger>
  </springProfile>

  <!-- SPRING框架日志 -->
  <logger name="org.springframework" level="TRACE" additivity="false">
    <appender-ref ref="SPRING"/>
  </logger>

  <root level="WARN">
    <appender-ref ref="STDOUT"/>
  </root>
  <!-- LOGGER END -->

</configuration>
```


**Spring Boot + Slf4j + Log4j2**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>

<!-- 识别yaml格式依赖 -->
<dependency>
    <groupId>com.fasterxml.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-yaml</artifactId>
</dependency>


application.yml
logging:
  config: classpath:log4j2.yml
	root: info
```
```yaml
Configuration:
  status: warn # 用于控制log4j2日志框架本身的日志级别
  monitorInterval: 30 # 每隔多少秒重新读取配置文件，可以不重启应用的情况下修改配置

  Properties: # 定义全局变量
    Property:
      - name: log.level.console
        value: info
      - name: log.path
        value: /app/logs
      - name: project.name
        value: Demo
      - name: log.pattern
        value: "%d{yyyy-MM-dd HH:mm:ss.SSS} -%5p ${PID:-} [%15.15t] %-30.30C{1.} : %m%n"

  Appenders:
    Console:  # 输出到控制台
      name: CONSOLE
      target: SYSTEM_OUT
      PatternLayout:
        pattern: "%d{yyyy-MM-dd HH:mm:ss,SSS}:%5p %t (%F:%L) - %m%n"

    RollingFile: # 打印到文件
      - name: ROLLING_FILE
        # fileName  指定当前日志文件的位置和文件名称
        fileName: ${log.path}/${project.name}.log
        # filePattern  指定当发生Rolling时，文件的转移和重命名规则
        filePattern: "${log.path}/$${date:yyyy-MM}/${project.name}-%d{yyyy-MM-dd}-%i.log.gz"
        PatternLayout:
          pattern: ${log.pattern}
        Filters:
          ThresholdFilter:
            - level: ${sys:log.level.console}
              onMatch: ACCEPT
              onMismatch: DENY
        Policies:
          TimeBasedTriggeringPolicy:  # 按天分类
            modulate: true
            interval: 1
          SizedTriggeringPolicy:  # zip when up to 50MB
            size: "50 MB"
        DefaultRolloverStrategy:
          max: 100     # 文件最多100个
          Delete:
            basePath: "${log.path}"
            maxDepth: "2"
            IfLastModified:
              age: "14d"

  Loggers:
    #日志器分根日志器Root和自定义日志器，当根据日志名字获取不到指定的日志器时就使用Root作为默认的日志器
    Root:
      level: info
      AppenderRef:
        - ref: CONSOLE
        - ref: ROLLING_FILE
```


使用 Slf4j API
```java
public class WebLogAspect {

    private Logger log = Logger.getLogger(getClass());

    public void doAfterReturning(Object ret) throws Throwable {
        // 处理完请求，返回内容
        log.info("RESPONSE : {}", ret);
    }
}
```


## [HTTP Clients](https://github.com/akullpp/awesome-java#http-clients)

- [Feign](https://github.com/OpenFeign/feign) - HTTP client binder inspired by Retrofit, JAXRS-2.0, and WebSocket.
- [Retrofit](https://square.github.io/retrofit/) - Typesafe REST client
- [spring-cloud-openfeign](https://github.com/spring-cloud/spring-cloud-openfeign)
   - @EnableFeignClients
   - @FeignClient
   - @SpringQueryMap
   - 支持Spring MVC的注解

### [okhttp](https://github.com/square/okhttp)

- [OkHttpClient](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-ok-http-client/)
- [Cookie](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-cookie/)
- [Headers](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-headers/)
- [HttpUrl](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-http-url/)
- [Interceptor](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-interceptor/)
- [MediaType](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-media-type/)
- [MultipartBody](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-multipart-body/)
- [Request](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-request/)
- [Response](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-response/)
- [WebSocket](https://square.github.io/okhttp/4.x/okhttp/okhttp3/-web-socket/)

```java
@Slf4j
@Component
public class HttpsUtils {

  OkHttpClient client;
  public Map<String, String> queryParams;
  private String url;
  public static MediaType JSON_MEDIA_TYPE = MediaType.get("application/json; charset=utf-8");

  private Request.Builder request;
  private Map<String, String> headers;
  private RequestBody body;

  private final boolean isReset = true;

  @Autowired
  public HttpsUtils(HttpsClientConfig clientConfig) {
    TrustManager[] trustManagers = buildTrustManagers();
    client = new OkHttpClient().newBuilder()
        .addInterceptor(new BasicLoggingInterceptor())
//      .cache(cache) // configure cache
//      .proxy(proxy) // configure proxy
//      .certificatePinner(certificatePinner) // certificate pinning
//      .addNetworkInterceptor(interceptor) // network level interceptor
//      .authenticator(authenticator) // authenticator for requests (it supports similar use-cases as "Authorization header" earlier
        .callTimeout(clientConfig.getCallTimeout(),
            TimeUnit.SECONDS) // default timeout for complete calls
        .readTimeout(clientConfig.getReadTimeout(),
            TimeUnit.SECONDS) // default read timeout for new connections
        .writeTimeout(clientConfig.getWriteTimeout(),
            TimeUnit.SECONDS) // default write timeout for new connections
//      .dns(dns) // DNS service used to lookup IP addresses for hostnames
//      .followRedirects(true) // follow requests redirects
//      .followSslRedirects(true) // follow HTTP tp HTTPS redirects
//      .connectionPool(connectionPool) // connection pool used to recycle HTTP and HTTPS connections
//      .retryOnConnectionFailure(true) // retry or not when a connectivity problem is encountered
//      .cookieJar(cookieJar) // cookie manager
//      .dispatcher(dispatcher) // dispatcher used to set policy and execute asynchronous requests
        .sslSocketFactory(createSSLSocketFactory(trustManagers),
            (X509TrustManager) trustManagers[0])
        .hostnameVerifier((hostName, session) -> StringUtils.isNotBlank(hostName))
        //设置连接池  最大连接数量  , 持续存活的连接
        .connectionPool(new ConnectionPool(clientConfig.getConnectionTimeout(),
            clientConfig.getKeepAliveTimeout(), TimeUnit.MINUTES))
        .build();
  }


  public HttpsUtils headers(Map<String, String> headers) {
    this.headers = headers;
    return this;
  }

  public HttpsUtils url(String url) {
    this.url = url;
    return this;
  }

  public HttpsUtils queryParams(Map<String, String> params) {
    this.queryParams = params;
    return this;
  }

  public HttpsUtils body(RequestBody body) {
    this.body = body;
    return this;
  }

  public HttpsUtils jsonBody(@NotNull String json) {
    return body(RequestBody.create(json, JSON_MEDIA_TYPE));
  }

  public HttpsUtils jsonBody(Object obj) {
    if (obj == null) {
      return this;
    }
    return jsonBody(JSON.toJSONString(obj));
  }

  public HttpsUtils formBody(Map<String, String> map) {
    FormBody.Builder formBody = new FormBody.Builder(StandardCharsets.UTF_8);
    map.forEach(formBody::addEncoded);
    return body(formBody.build());
  }

  public HttpsUtils fileBody() {
    RequestBody fileBody = RequestBody.create(new File("path/attachment.png"),
        MediaType.parse("image/png"));
    body = new MultipartBody.Builder().setType(MultipartBody.FORM)
        .addFormDataPart("file", "head_img", fileBody)
        .addFormDataPart("key", "val").build();
    return this;
  }

  private void beforeRequest() {
    log.info("build request");

    // 构建url
    HttpUrl.Builder urlBuilder = HttpUrl.get(url).newBuilder();
    if (ObjectUtils.isNotEmpty(this.queryParams)) {
      this.queryParams.forEach((key, value) -> {
        if (StringUtils.isNotBlank(value)) {
          urlBuilder.addQueryParameter(key, value);
        }
      });
    }

    this.request = new Request.Builder().url(urlBuilder.build());
    if (ObjectUtils.isNotEmpty(this.headers)) {
      this.request.headers(Headers.of(headers));
    }

  }

  private void afterRequest() {
    log.info("end request");
    if (isReset) {
      headers = null;
      queryParams = null;
      body = null;
      log.info("Reset request");
    }
  }

  public Response sync(String method) throws IOException {
    Response response;
    try {
      beforeRequest();
      this.request.method(method, body);
      response = this.client.newCall(request.build()).execute();
    } finally {
      afterRequest();
    }
    return response;
  }

  public Response get() throws IOException {
    return sync(HttpMethod.GET.name());
  }

  public Response post() throws IOException {
    return sync(HttpMethod.POST.name());
  }

  public Response put() throws IOException {
    return sync(HttpMethod.PUT.name());
  }

  public Response delete() throws IOException {
    return sync(HttpMethod.DELETE.name());
  }

  private static volatile Semaphore semaphore = null;

  /**
   * 用于异步请求时，控制访问线程数，返回结果
   */
  private static Semaphore getSemaphoreInstance() {
    //只能1个线程同时访问
    synchronized (HttpsUtils.class) {
      if (semaphore == null) {
        semaphore = new Semaphore(0);
      }
    }
    return semaphore;
  }

  public String async() {
    StringBuffer buffer = new StringBuffer();
    client.newCall(request.build()).enqueue(new Callback() {

      @Override
      public void onFailure(@NotNull Call call, @NotNull IOException e) {
        buffer.append("request failed: ").append(e.getMessage());
        e.printStackTrace();
      }

      @Override
      public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
        ResponseBody body = response.body();
        if (body != null) {
          buffer.append(body.string());
        }
        getSemaphoreInstance().release();
      }
    });
    getSemaphoreInstance().release();
    return buffer.toString();
  }

  /**
   * 生成安全套接字工厂，用于https请求的证书跳过
   */
  private static SSLSocketFactory createSSLSocketFactory(TrustManager[] trustAllCerts) {
    SSLSocketFactory ssfFactory = null;
    try {
      SSLContext sc = SSLContext.getInstance("TLS");
      sc.init(null, trustAllCerts, new SecureRandom());
      ssfFactory = sc.getSocketFactory();
    } catch (Exception e) {
      log.info("Create SSLSocketFactory error", e);
    }
    return ssfFactory;
  }

  private static TrustManager[] buildTrustManagers() {
    return new TrustManager[]{
        new X509TrustManager() {
          @Override
          public void checkClientTrusted(X509Certificate[] chain, String authType) {
          }

          @Override
          public void checkServerTrusted(X509Certificate[] chain, String authType) {
          }

          @Override
          public X509Certificate[] getAcceptedIssuers() {
            return new X509Certificate[]{};
          }
        }
    };
  }

  static class BasicLoggingInterceptor implements Interceptor {

    @NotNull
    @Override
    public Response intercept(Interceptor.Chain chain) throws IOException {
      Request request = chain.request();
      log.info("===> Sending {} request: {}", request.method(), request.url());

      log.info("request headers: {}", request.headers());

      RequestBody requestBody = request.body();
      Buffer buffer = new Buffer();
      if (requestBody != null) {
        requestBody.writeTo(buffer);
        log.info("request body: {}", buffer.readUtf8());
      }

      Response response = chain.proceed(request);

      log.info("<=== Received response code is {} , response headers: {}", response.code(),
          response.headers());
      ResponseBody responseBody = response.body();
      if (responseBody != null) {
        BufferedSource source = responseBody.source();
        source.request(Long.MAX_VALUE);
        buffer = source.getBuffer();
        log.info("response body:{}", buffer.clone().readUtf8());
      }

      return response;
    }

  }
    
  public static void main(String[] args) throws IOException {
    LinkedHashMap<String, String> map = new LinkedHashMap<>();
    map.put("map","映射");

    MyHttp myHttp = new MyHttp().header("h1", "ad");
      
    String sync = myHttp.url("https://httpbin.org/post")
        .queryParam("123", null)
        .jsonBody("[你好, abc]")
//        .formBody(map)
        .post().sync();
    
    myHttp.url("https://httpbin.org/get")
        .queryParams(map).get().sync();
  }
}
```


### Apache [HttpClient](https://hc.apache.org/httpcomponents-client-5.2.x/index.html)

```java
public class CloseHttpUtil implements HttpsUtil {

  private static CloseableHttpClient client;

  @Autowired
  public void setClient(CloseableHttpClient client) {
    this.client = client;
  }

  public Map<String, String> queryParams;
  private String url;

  private Map<String, String> headers;
  private Object body;


  @SneakyThrows
  public URI requestUrl(String url, Map<String, String> queryParams) {
    URIBuilder uriBuilder = new URIBuilder(url);
    if (ObjectUtils.isNotEmpty(queryParams)) {
      queryParams.forEach((key, value) -> {
        if (value != null) {
          uriBuilder.addParameter(key, value);
        }
      });
    }
    return uriBuilder.build();
  }

  // Create a custom response handler
  final HttpClientResponseHandler<String> responseHandler = response -> {
    final int status = response.getCode();
    log.info("<=== Received response code is {} , response headers: {}", status,
        response.getHeaders());
    HttpEntity entity = response.getEntity();
    String responseEntity = entity != null ? EntityUtils.toString(entity) : null;
    log.info("response body:{}", responseEntity);
    return responseEntity;
  };

  @Override
  @SneakyThrows
  public String executeRequest(String method) {
    URI requestUrl = requestUrl(url, queryParams);
    log.info("===> Sending {} request: {}", method, requestUrl);
    log.info("request headers: {}", headers);
    HttpUriRequestBase request = new HttpUriRequestBase(method, requestUrl);

    if (ObjectUtils.isNotEmpty(headers)) {
      headers.forEach(request::addHeader);
    }

    if (body != null) {
      log.info("request body: {}", body);
      request.setEntity(new StringEntity(JSON.toJSONString(body), ContentType.APPLICATION_JSON));
    }

    return client.execute(request, responseHandler);
  }

}


@Bean
public CloseableHttpClient closeableHttpClient(HttpsClientConfig config) {
  //  创建请求配置信息
  RequestConfig requestConfig = RequestConfig.custom()
    // 设置连接超时时间
    .setConnectionRequestTimeout(Timeout.ofSeconds(config.connectionTimeout))
    // 设置响应超时时间
    .setResponseTimeout(config.readTimeout, TimeUnit.SECONDS)
    // 设置从连接池获取链接的超时时间
    .setConnectionRequestTimeout(config.callTimeout, TimeUnit.SECONDS)
    .setConnectionKeepAlive(TimeValue.ofSeconds(config.keepAliveTimeout))
    .build();

  ConnectionConfig connConfig = ConnectionConfig.custom()
    .setConnectTimeout(config.connectionTimeout, TimeUnit.SECONDS)
    .setSocketTimeout(config.connectionTimeout, TimeUnit.SECONDS)
    .build();

  BasicHttpClientConnectionManager cm = connectionManager();
  cm.setConnectionConfig(connConfig);

  return HttpClients.custom()
    .setDefaultHeaders(Collections.emptyList())
    .setDefaultRequestConfig(requestConfig)
    .setConnectionManager(cm)
    .build();
}

/**
* HC SSL connectionManager
*/
@SneakyThrows
public BasicHttpClientConnectionManager connectionManager() {
  TrustStrategy acceptingTrustStrategy = (cert, authType) -> true;
  SSLContext sslContext = SSLContexts.custom()
    .loadTrustMaterial(null, acceptingTrustStrategy)
    .build();
  SSLConnectionSocketFactory sslsf =
    new SSLConnectionSocketFactory(sslContext, NoopHostnameVerifier.INSTANCE);
  Registry<ConnectionSocketFactory> socketFactoryRegistry =
    RegistryBuilder.<ConnectionSocketFactory>create()
        .register("https", sslsf)
        .register("http", new PlainConnectionSocketFactory())
        .build();

  return new BasicHttpClientConnectionManager(socketFactoryRegistry);
}
```


## [JSON](https://github.com/akullpp/awesome-java#json)

### [Jacson](https://github.com/FasterXML/jackson)
```java
ObjectMapper mapper = new ObjectMapper();

// 序列化
String jsonString = mapper.writeValueAsString(object);

// 反序列化
Object bean = mapper.readValue(jsonString, Object.class);
List<Object> list = mapper.readValue(jsonArray, new TypeReference<List<Object>>(){});

// 转换树模型
JsonNode jsonTree = objectMapper.valueToTree(object);
JsonNode jsonNode = mapper.readTree(jsonString);

Object object = mapper.treeToValue(jsonNode);
```
ObjectNode -> JsonNode

[**Jackson Annotations**](https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations)  <br />  Property Naming

- `@JsonProperty`: 属性使用的注解，用来表示外部属性名字，就是使用别名序列化
- `@JsonAlias`：在反序列化的时可以让Bean的属性接收多个json字段的名称
- `@JsonNaming`：属性命名策略，如PropertyNamingStrategy.LowerCaseWithUnderscoresStrategy，将大写转换为小写并添加下划线

Property Inclusion

- `@JsonAutoDetect`: class annotation used for overriding property introspection definitions
- `@JsonIgnore`: 属性使用的注解，用于忽略指定属性
- `@JsonIgnoreProperties`: 实体类使用的注解，用于序列化的时候忽略指定的一系列属性，或者反序列化的时候忽略未知的属性(ignoreUnknown=true)。
- `@JsonIgnoreType`: 实体类使用的注解，表示该类被忽略。
- `@JsonInclude`: 实体类/属性使用的注解，用于忽略NULL的属性

Deserialization and Serialization details

- `@JsonFormat`：具有每种类型行为的一般注释；例如，可用于指定序列化日期/时间值时使用的格式。
- 反序列化
- @JsonUnwrapped:  反序列化时解包，扁平化结果
- @JsonView: property annotation used for defining View(s) in which property will be included for serialization, deserialization.

反序列化细节

- `@JacksonInject`: 注释表示属性应该通过“注入”而不是从数据 (JSON) 中获取其值。
- `@JsonAnySetter`: 用于将双参数方法定义为“任何设置器”的注释，用于反序列化未映射的 JSON 属性的值
- `@JsonCreator`: 用于指示在反序列化期间应使用构造函数或静态工厂方法创建值实例的注释。
- `@JsonSetter`：替代@JsonProperty，用于标记指定的方法是“setter-method”

序列化细节

- `@JsonAnyGetter`: 用于将 getter 定义为“任何 getter”的注释，它返回一个java.util.Map，其内容将被序列化为 JSON 对象的附加属性，以及该对象可能具有的常规属性。
- `@JsonGetter`：替代@JsonProperty，用于标记指定的方法是“getter-method”
- `@JsonPropertyOrder`: 用于指定属性序列化顺序的注释
- `@JsonRawValue`：可用于指定属性的值将按原样“完全”包含在序列化中，没有转义或修饰
- `@JsonValue`：指示 POJO 应该序列化是使用属性的值来完成的，通常是java.lang.String（如注释toString()方法）
- `@JsonRootName`: 类注释用于指示用于根值的“包装器”条目的名称，如果启用了根包装

多态类型处理

- @JsonTypeInfo	用来开启多态类型处理
- @JsonSubTypes	列出给定类的子类
- @JsonTypeName	为多态子类指定类型标识符的值

### [Fastjson](https://github.com/alibaba/fastjson)
```java
// 序列化
String jsonString = JSON.toJSONString(obj);

// 反序列化
Object bean = JSON.parseObject(jsonString, Object.class);
Object[] beans = JSON.parseArray(jsonStringArray, Object.class);
Map<String, String> map = JSON.parseObject(jsonString, new TypeReference<Map<String, String>>() { });

```
JSON 字符串反序列化API

- `JSONObject parseObject(String text, Feature... features)`
- `<T> T parseObject(String text, Class<T> clazz, Feature... features)`
- `<T> T parseObject(String text, TypeReference<T> type, Feature... features)`
- `JSONArray parseArray(String text)`
- `<T> List<T> parseArray(String text, Class<T> clazz)`

注解 `@JSONField`  <br />  配置在属性（setter、getter）和字段（必须是 public field）上
```java
// 设置字段名
@JSONField(name="ID")
public int getId() {return id;}

// 配置date序列化和反序列使用日期格式
@JSONField(format="yyyy-MM-dd HH:mm:ss")
public Date date;

// 不序列化
@JSONField(serialize=false)
// 不反序列化
@JSONField(deserialize=false)

// 按ordinal排序
@JSONField(ordinal = 2)
```

**SerializerFeature**

- QuoteFieldNames, //key使用引号
- UseSingleQuotes, //使用单引号
- **WriteMapNullValue**, //输出Map的null值
- WriteEnumUsingToString, //枚举属性输出toString的结果
- WriteEnumUsingName, //枚举数据输出name
- UseISO8601DateFormat, //使用日期格式
- WriteNullListAsEmpty, //List为空则输出`[]`
- WriteNullStringAsEmpty, //String为空则输出`""`
- WriteNullNumberAsZero, //Number类型为空则输出`0`
- WriteNullBooleanAsFalse, //Boolean类型为空则输出`false`
- SkipTransientField,
- SortField, //排序字段
- WriteTabAsSpecial,
- **PrettyFormat**, // 格式化JSON缩进
- WriteClassName, // 输出类名
- DisableCircularReferenceDetect, // 禁止循环引用
- WriteSlashAsSpecial, // 对斜杠’/’进行转义
- BrowserCompatible,
- WriteDateUseDateFormat, // 全局修改日期格式,默认为false
- NotWriteRootClassName,
- DisableCheckSpecialChar,
- BeanToArray,
- WriteNonStringKeyAsString,
- NotWriteDefaultValue,
- BrowserSecure,
- IgnoreNonFieldGetter,
- WriteNonStringValueAsString,
- IgnoreErrorGetter,
- WriteBigDecimalAsPlain,
- **MapSortField**

[JSONPath](https://github.com/alibaba/fastjson/wiki/JSONPath)
```java
public class JSONPath {          
 //  求值，静态方法
 public static Object eval(Object rootObject, String path);

 //  求值，静态方法，按需计算，性能更好
 public static Object extract(String json, String path);
 
 // 计算Size，Map非空元素个数，对象非空元素个数，Collection的Size，数组的长度。无法求值返回-1
 public static int size(Object rootObject, String path);
 
 // 是否包含，path中是否存在对象
 public static boolean contains(Object rootObject, String path) { }
 
 // 是否包含，path中是否存在指定值，如果是集合或者数组，在集合中查找value是否存在
 public static boolean containsValue(Object rootObject, String path, Object value) { }
 
 // 修改制定路径的值，如果修改成功，返回true，否则返回false
 public static boolean set(Object rootObject, String path, Object value) {}

 // 在数组或者集合中添加元素
 public static boolean arrayAdd(Object rootObject, String path, Object... values);
 
 // 获取，Map的KeySet，对象非空属性的名称。数组、Collection等不支持类型返回null。
 public static Set<?> keySet(Object rootObject, String path);
}
```
| JSONPATH | 描述 |
| --- | --- |
| $ | 根对象，例如$.name |
| [num] | 数组访问，其中num是数字，可以是负数。 |
| [num0,num1,num2...] | 数组多个元素访问，其中num是数字，可以是负数，返回数组中的多个元素。例如$[0,3,-2,5] |
| [start:end] | 数组范围访问，其中start和end是开始小表和结束下标，可以是负数，返回数组中的多个元素。例如$[0:5] |
| [start:end :step] | 数组范围访问，其中start和end是开始小表和结束下标，可以是负数；step是步长，返回数组中的多个元素。例如$[0:5:2] |
| [?(key)] | 对象属性非空过滤，例如$.departs[?(name)] |
| [key > 123] | 数值类型对象属性比较过滤，例如$.departs[id >= 123]，比较操作符支持=,!=,>,>=,<,<= |
| [key = '123'] | 字符串类型对象属性比较过滤，例如$.departs[name = '123']，比较操作符支持=,!=,>,>=,<,<= |
| [key like 'aa%'] | 字符串类型like过滤，  <br />  例如$.departs[name like 'sz*']，通配符只支持%  <br />  支持not like |
| [key rlike 'regexpr'] | 字符串类型正则匹配过滤，  <br />  例如departs[name rlike 'aa(.)*']，  <br />  正则语法为jdk的正则语法，支持not rlike |
| [key in ('v0', 'v1')] | IN过滤, 支持字符串和数值类型  <br />  例如:  <br />  $.departs[name in ('wenshao','Yako')]  <br />  $.departs[id not in (101,102)] |
| [key between 234 and 456] | BETWEEN过滤, 支持数值类型，支持not between  <br />  例如:  <br />  $.departs[id between 101 and 201]  <br />  $.departs[id not between 101 and 201] |
| length() 或者 size() | 数组长度。例如$.values.size()  <br />  支持类型java.util.Map和java.util.Collection和数组 |
| keySet() | 获取Map的keySet或者对象的非空属性名称。例如$.val.keySet()  <br />  支持类型：Map和普通对象  <br />  不支持：Collection和数组（返回null） |
| . | 属性访问，例如$.name |
| .. | deepScan属性访问，例如$..name |
| * | 对象的所有属性，例如$.leader.* |
| ['key'] | 属性访问。例如$['name'] |
| ['key0','key1'] | 多个属性访问。例如$['id','name'] |


### [Gson](https://github.com/google/gson)
```java
Gson gson = new Gson();

// 序列化
gson.toJson(object);

// 反序列化
Object bean = gson.fromJson(jsonString, Object.class)
```

## [Bean Mapping](https://github.com/akullpp/awesome-java#bean-mapping)

[MapStruct](https://github.com/mapstruct/mapstruct)  <br />  在编译期自动生成映射转换代码，类型安全、高性能、无依赖性

```java
@Mapper( imports = UUID.class )
public interface SourceMapper {

  SourceMapper INSTANCE = Mappers.getMapper(SourceMapper.class);

  @Mapping(target="id", source="sourceId", defaultExpression = "java( UUID.randomUUID().toString() )")
  @Mapping(source = "sourceName", target = "targetName", defaultValue = "undefined")
  @Mapping(target="startDt", source = "source.startTime",
         dateFormat = "dd-MM-yyyy HH:mm:ss")
  Target toTarget(Source source);

  @InheritInverseConfiguration
  Source toSource(Target target);
}
```
自定义mapping可使用抽象类

注解  <br />  `@Mapper`  <br />  componentModel

- default	工厂方式 `Mappers.getMapper(Class)` 来获取
- cdi	一个应用程序范围的 CDI bean，使用 `@Inject` 注解来获取
- spring Spring 的自动注入方式
- jsr330	用 `@javax.inject.Named` 和 `@Singleton` 注解，通过 `@Inject` 来获取

`@Mapping`	配置字段映射  <br />  `@Mappings`	聚合配置多个Mapping  <br />  `@BeanMapping`  <br />  `@IterableMapping`  <br />  `@MappingTarget`  <br />  `@InheritConfiguration`  <br />  `@InheritInverseConfiguration`  <br />  `@MapperConfig`	共享配置  <br />  `@BeforeMapping`  <br />  `@AfterMapping`

```xml
<!-- Maven 编译插件，提供给 MapStruct 使用 -->
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-compiler-plugin</artifactId>
  <version>${maven-compiler-plugin.version}</version>
  <configuration>
    <source>${java.version}</source>
    <target>${java.version}</target>
    <annotationProcessorPaths>
      <!-- MapStruct 注解处理器 -->
      <path>
        <groupId>org.mapstruct</groupId>
        <artifactId>mapstruct-processor</artifactId>
        <version>${org.mapstruct.version}</version>
      </path>
      <!-- Lombok 注解处理器 -->
      <path>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>${lombok.version}</version>
      </path>
      <!-- MapStruct 和 Lombok 注解绑定处理器 -->
      <path>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok-mapstruct-binding</artifactId>
        <version>0.2.0</version>
      </path>
    </annotationProcessorPaths>
  </configuration>
</plugin>
```



## [Tomcat](https://tomcat.apache.org/) 
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


## Resource

- [awesome-java](https://github.com/akullpp/awesome-java)
- [awesome-jvm](https://github.com/deephacks/awesome-jvm)
- [useful-java-links](https://github.com/Vedenin/useful-java-links)
- [awesome-microservices](https://github.com/mfornos/awesome-microservices)
- [awesome-rest](https://github.com/marmelab/awesome-rest)

[监控工具](https://dunwu.github.io/java-tutorial/tool/monitor/monitor-summary.html)

- [SkyWalking](https://dunwu.github.io/java-tutorial/tool/monitor/skywalking.html)
- [Arthas](https://dunwu.github.io/java-tutorial/tool/monitor/arthas.html)

[JavaFX](https://wiki.openjdk.java.net/display/OpenJFX/Main)

Cache

- [Caffeine](https://github.com/ben-manes/caffeine) - High-performance, near-optimal caching library.
- [Ehcache](http://www.ehcache.org/) - Distributed general-purpose cache.

## **—— **[IntelliJ IDEA](https://www.423down.com/10850.html)** ——**

### [Shortcuts](https://www.jetbrains.com/help/idea/reference-keymap-win-default.html)

**Live Templates**
> File | Settings | Editor | Live Templates

fori	for循环  <br />  sout	System.out  <br />  .var	生成变量

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


### Settings
方法分隔符  <br />  Settings -> Editor -> General -> Appearance  <br />  勾选 show method separators

忽略大小写字母  <br />  Settings -> Editor -> General -> Code Completion  <br />  关闭 Match case

多行显示Tab  <br />  Editor Tabs  <br />  勾选 Show tabs in one row

编码字符集  <br />  Settings -> Editor -> General -> File Encodings

Google style  <br />  [intellij-java-google-style.xml](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml)  <br />  Settings -> Editor -> General -> Code Style | Java

### plugin

- Maven Helper	依赖分析
- Tabnine	基于 AI 的代码提示
- Rainbow Brackets	彩虹括号
- One Dark theme
- google-java-format
- Alibaba Java Coding Guidelines
- String Manipulation
- CamelCase	Shift + Alt + U
- GsonFormat	JSON转类对象
- SequenceDiagram	调用时序图

- Docer Savior	批量导出接口信息+文档信息到Postman或Markdown
- Doc View		单个接口文档生成

- Key Promoter X	快捷键
- Statistic	项目信息统计
- Translation	翻译插件




