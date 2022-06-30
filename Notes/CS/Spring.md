
# —— [Spring](https://spring.io/) ——


分层领域模型

- DO（Data Object）：与数据库表结构一一对应，通过DAO层向上传输数据源对象。
- DTO（Data Transfer Object）：数据传输对象，Service或Manager向外传输的对象。
- BO（Business Object）：业务对象， 由Service层输出的封装业务逻辑的对象。
- AO（Application Object）：应用对象， 在Web层与Service层之间抽象的复用对象模型，极为贴近展示层，复用度不高。
- VO（View Object）：视图层对象，通常是Web向模板渲染引擎层传输的对象。
- POJO（Plain Ordinary Java Object）：专指只有setter/getter/toString的简单类，包括DO/DTO/BO/VO等。



# Core
IoC（Inverse of Control，控制反转）：依赖注入（Dependency Injection，DI）。Spring 通过 IoC 容器来管理所有 Java 对象的实例化和初始化，控制对象与对象之间的依赖关系  <br />  AOP（Aspect Oriented Programming，面向切面编程）：横向抽取机制，取代了传统纵向继承体系的重复性代码，其应用主要体现在事务处理、日志管理、权限控制、异常处理等方面。  <br />  ![](./assets/1648975394639-fa7ee6c7-1b21-40cf-abc1-095e7034bd7e.gif)


## IoC

- 设值注入（**Setter** Injection）：IoC 容器首先会调用默认的构造方法（无参构造方法）实例化 Bean（Java 对象），然后通过 Java 的反射机制调用这个 Bean 的 setXxx() 方法，将属性值注入到 Bean 中
- 构造注入（**Constructor** Injection）：通过 Bean 的带参构造函数，以实现 Bean 的属性注入


**Spring 容器**  <br />  **BeanFactory 接口**  <br />  负责配置、创建、管理 Bean。在初始化容器时，并未实例化 Bean，直到第一次访问某个 Bean 时才实例化目标 Bean

常用方法

- boolean containsBean(String name)：判断 Spring 容器是否包含 id 为 name 的 Bean 实例
- T getBean(Class<T> requiredType)：获取 Spring 容器中属于 requiredType 类型的、唯一的 Bean 实例
- Object getBean(String name)：返回容器 id 为 name 的 Bean 实例
- T getBean(String name, Class requiredType)：返回容器中 id 为 name，并且类型为 requiredType 的 Bean
- `Class<?> getType(String name)`：返回容器中 id 为 name 的 Bean 实例的类型


**ApplicationContext 接口**  <br />  Spring 上下文，BeanFactory 的子接口。在初始化应用上下文时就实例化所有单实例的 Bean  <br />  常用实现类：FileSystemXmlApplicationContext、ClassPathXmlApplicationContext 和 AnnotationConfigApplicationContext


**XML装配Bean**  <br />  配置 applicationContext.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd">
  
    <bean id="mailService" class="com.MailService" />
  
    <!-- 使用设值注入方式装配实例 -->
		<bean id="userService" class="com.UserService">
        <property name="username" value="root" />
        <property name="mailService" ref="mailService" />
    </bean>

    <!-- 使用构造注入装配实例 -->
    <bean id="user" class="com.UserService">
        <constructor-arg index="0" value="snow" />
        <constructor-arg index="1" ref="mailService" />
    </bean>
  
 
  // 短命名空间注入  需要在头文件中加入约束文件
  // p 命名空间
  <bean id="userService" class="com.UserService" p:username="root" 
        p:mailService-ref="mailService"></bean>
  // c 命名空间
  <bean id="user" class="com.UserService" c:username="snow" 
        c:mailService-ref="mailService"></bean>
  
  // 注入集合
  <bean id="javaCollection" class="com.JavaCollection">
    <!--数组类型-->
    <property name="users">
      <array>
        <ref bean="userService"></ref>
        <ref bean="user"></ref>
        <null/>
      </array>
    </property>
    <!--List 类型-->
    <property name="list">
      <list>
        <value>张三</value>
        <value>李四</value>
        <value>王五</value>
        <value>赵六</value>
      </list>
    </property>
    <!--Map 类型-->
    <property name="maps">
      <map>
        <entry key="JAVA" value="java"></entry>
        <entry key="PHP" value="php"></entry>
      </map>
    </property>
    <!--Set 类型-->
    <property name="sets">
      <set>
        <value>MySQL</value>
        <value>Redis</value>
      </set>
    </property>
  </bean>
  
  // 注入内部Bean
  <bean id="employee" class="net.Employee">
    <property name="empNo" value="001"></property>
    <property name="empName" value="小王"></property>
    <property name="dept">
      <!--内部 Bean-->
      <bean class="net.Dept">
        <property name="deptNo" value="004"></property>
        <property name="deptName" value="技术部"></property>
      </bean>
    </property>
  </bean>
  
  // Bean继承  子Bean可以继承父 Bean 的配置数据，也可重写或添加属于自己的配置信息
  <!--父Bean-->
  <bean id="parentBean" class="xxx.ParentBean" >
      <property name="age" value="45"></property>
      <property name="sex" value="m"></property>
  </bean> 
  <!--子Bean--> 
  <bean id="childBean" class="xxx.ChildBean" parent="parentBean"></bean>
  
</beans>
```
使用
```java
public class App { 
    public static void main(String[] args) { 
        ApplicationContext context = new ClassPathXmlApplicationContext( "applicationContext.xml"); 
                                // = new FileSystemXmlApplicationContext(String configLocation);
        // 获取Bean
        UserService userService = context.getBean("UserService", UserService.class);
        // 正常调用
        System.out.println(userService.getUserName());  // root
        //手动销毁 Bean
        context.close();
    } 
}
```


| 属性名称 | 描述 |
| --- | --- |
| id | Bean 的唯一标识符，Spring IoC 容器对 Bean 的配置和管理通过该属性完成。 |
| name | Bean 的名称，通过 name 属性为同一个 Bean 同时指定多个名称，每个名称之间用逗号或分号隔开。Spring 容器可以通过 name 属性配置和管理容器中的 Bean。 |
| class |  Bean 的具体实现类，它必须是一个完整的类名，即类的全限定名。 |
| scope |  Bean 的作用域，属性值可以为 singleton（单例）、prototype（原型）、request、session 和 global Session。默认值是 singleton。 |
| constructor-arg | <bean> 元素的子元素，通过该元素，将构造参数传入，以实现 Bean 的实例化。该元素的 index 属性指定构造参数的序号（从 0 开始），type 属性指定构造参数的类型。 |
| property | <bean>元素的子元素，用于调用 Bean 实例中的 setter 方法对属性进行赋值，从而完成属性的注入。该元素的 name 属性用于指定 Bean 实例中相应的属性名。 |
| ref | <property> 和 <constructor-arg> 等元素的子元索，用于指定对某个 Bean 实例的引用，即 <bean> 元素中的 id 或 name 属性。 |
| value | <property> 和 <constractor-arg> 等元素的子元素，用于直接指定一个常量值。 |
| list | 用于封装 List 或数组类型的属性注入。 |
| set | 用于封装 Set 类型的属性注入。 |
| map | 用于封装 Map 类型的属性注入。 |
| entry |  <map> 元素的子元素，用于设置一个键值对。其 key 属性指定字符串类型的键值，ref 或 value 子元素指定其值。 |
| init-method | 容器加载 Bean 时调用该方法，类似于 Servlet 中的 init() 方法 |
| destroy-method | 容器删除 Bean 时调用该方法，类似于 Servlet 中的 destroy() 方法。该方法只在 scope=singleton 时有效 |
| lazy-init | 懒加载，值为 true，容器在首次请求时才会创建 Bean 实例；值为 false，容器在启动时创建 Bean 实例。该方法只在 scope=singleton 时有效 |


**后置处理器**

- BeanPostProcessor	Bean 后置处理器
   - postProcessBeforeInitialization（初始化前执行）
   - postProcessAfterInitialization（初始化后执行）
- BeanFactoryPostProcessor	容器后置处理器


**自动装配	autowired**

| 名称 | 说明 |
| --- | --- |
| byName | 根据 Property 的 name 自动装配，如果一个 Bean 的 name 和另一个 Bean 中的 Property 的 name 相同，则自动装配这个 Bean 到 Property 中。 |
| byType | 根据 Property 的数据类型（Type）自动装配，如果一个 Bean 的数据类型兼容另一个 Bean 中 Property 的数据类型，则自动装配。 |
| constructor | 根据构造方法的参数的数据类型，进行 byType 模式的自动装配。 |
| autodetect | 如果发现默认的构造方法，则用 constructor 模式，否则用 byType 模式。 |
| no | 默认情况下，不使用自动装配，Bean 依赖必须通过 ref 元素定义。 |

```xml
···
    <bean id="mailService" class="com.MailService" />
  
		<bean id="userService" class="com.UserService" autowire="byName">
        <property name="username" value="root" />
        <!-- property name="mailService" ref="mailService" / -->
    </bean>
···
```


**Annotation装配Bean**  <br />  定义 Bean

- @Component：描述 Spring 中的 Bean，表示一个组件（Bean），可以作用在任何层次
- @Repository：用于将数据访问层（DAO层）的类标识为 Spring 中的 Bean，功能同 _@_Component   
- @Service：通常作用在业务层（Service 层）
- @Controller：通常作用在控制层

依赖注入

- @Autowired：对 Bean 的属性变量、属性的 Set 方法及构造函数进行标注，配合对应的注解处理器完成 Bean 的自动配置工作。默认按照 Bean 的**类型**进行装配。
- @Resource：与 @Autowired 一样，默认按照 Bean **实例名**称进行装配。

- @Qualifier：与 _@_Autowired  注解配合使用，会将默认的按 Bean 类型装配修改为按 Bean 的实例名称装配，Bean 的实例名称由 _@_Qualifier  注解的参数指定。 
- @Primary：@Autowired 自动装配找到多个匹配的 Bean时，首选该 Bean
- @Scope(value = "prototype", proxyMode = ScopedProxyMode.DEFAULT) ：指定 Bean 的作用域、代理方式
-  @Order(1)：指定 Bean 的加载顺序，值越小优先级越高
- 标注方法
   - @PostConstruct：指定 Bean 的初始化方法
   - @PreDestroy：指定 Bean 销毁之前的方法
- @Value：属性占位符需要放到 ${key:defaultValue} 之中，SpEL 表达式要放到 #{ ... } 之中

配置 applicationContext.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        https://www.springframework.org/schema/context/spring-context.xsd">

    <context:annotation-config/>
  <!--使用context命名空间，通知spring扫描指定目录，进行注解的解析-->
    <context:component-scan base-package="包名"/>

</beans>
```
```java
@Component
public class UserService {
    @Autowired
    MailService mailService;

    ...
}

@Component
public class MailService {
    @Autowired(required = false)
    ZoneId zoneId = ZoneId.systemDefault();

    @PostConstruct
    public void init() {
        System.out.println("Init mail service with zoneId = " + this.zoneId);
    }

    @PreDestroy
    public void shutdown() {
        System.out.println("Shutdown mail service");
    }
}

// 启动容器
@Configuration
@ComponentScan
public class AppConfig {
    public static void main(String[] args) {
        
        // 创建第三方Bean
        @Bean
        ZoneId createZoneId() {
            return ZoneId.of("Z");
        }
        
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        UserService userService = context.getBean(UserService.class);
        User user = userService.login("bob@example.com", "password");
        System.out.println(user.getName());
    }
}
```

  <br />  

## AOP
Aspect Oriented Programming，面向切面编程

**术语**

| 名称 | 说明 |
| --- | --- |
| Joinpoint（连接点） | 指那些被拦截到的点，在 Spring 中，可以被动态代理拦截目标类的方法。 |
| Pointcut（切入点） | 指要对哪些 Joinpoint 进行拦截，即被拦截的连接点。 |
| Advice（通知） | 指拦截到 Joinpoint 之后要做的事情，即对切入点增强的内容。 |
| Target（目标） | 指代理的目标对象。 |
| Weaving（植入） | 指把增强代码应用到目标上，生成代理对象的过程。 |
| Proxy（代理） | 指生成的代理对象。 |
| Aspect（切面） | 切入点和通知的结合。 |


**Spring AOP 通知类型**

| 名称 | 说明 |
| --- | --- |
| org.springframework.aop.MethodBeforeAdvice （前置通知） | 在方法之前自动执行的通知称为前置通知，可以应用于权限管理等功能。 |
| org.springframework.aop.AfterReturningAdvice （后置通知） | 在方法之后自动执行的通知称为后置通知，可以应用于关闭流、上传文件、删除临时文件等功能。 |
| org.aopalliance.intercept.MethodInterceptor （环绕通知） | 在方法前后自动执行的通知称为环绕通知，可以应用于日志、事务管理等功能。 |
| org.springframework.aop.ThrowsAdvice （异常通知） | 在方法抛出异常时自动执行的通知称为异常通知，可以应用于处理异常记录日志等功能。 |
| org.springframework.aop.IntroductionInterceptor （引介通知） | 在目标类中添加一些新的方法和属性，可以应用于修改旧版本程序（增强类）。 |


**XML的声明式**
```java
//切面类
public class MyAspect {
    // 前置通知
    public void myBefore(JoinPoint joinPoint) {
        System.out.print("前置通知，目标：");
        System.out.print(joinPoint.getTarget() + "方法名称:");
        System.out.println(joinPoint.getSignature().getName());
    }
  
    // 后置通知
    public void myAfterReturning(JoinPoint joinPoint) {
        System.out.print("后置通知，方法名称：" + joinPoint.getSignature().getName());
    }
  
    // 环绕通知
    public Object myAround(ProceedingJoinPoint proceedingJoinPoint)
            throws Throwable {
        System.out.println("环绕开始"); // 开始
        Object obj = proceedingJoinPoint.proceed(); // 执行当前目标方法
        System.out.println("环绕结束"); // 结束
        return obj;
    }
  
    // 异常通知
    public void myAfterThrowing(JoinPoint joinPoint, Throwable e) {
        System.out.println("异常通知" + "出错了" + e.getMessage());
    }
  
    // 最终通知
    public void myAfter() {
        System.out.println("最终通知");
    }
}
```
applicationContext.xml 配置
```xml
<!--目标类 -->
    <bean id="customerDao" class="com.mengma.dao.CustomerDaoImpl" />
    <!--切面类 -->
    <bean id="myAspect" class="com.mengma.aspectj.xml.MyAspect"></bean>
    <!--AOP 编程 -->
    <aop:config>
        <aop:aspect ref="myAspect">
            <!-- 配置切入点，通知最后增强哪些方法 -->
            <aop:pointcut expression="execution ( * com.mengma.dao.*.* (..))"
                id="myPointCut" />
            <!--前置通知，关联通知 Advice和切入点PointCut -->
            <aop:before method="myBefore" pointeut-ref="myPointCut" />
            <!--后置通知，在方法返回之后执行，就可以获得返回值returning 属性 -->
            <aop:after-returning method="myAfterReturning"
                pointcut-ref="myPointCut" returning="returnVal" />
            <!--环绕通知 -->
            <aop:around method="myAround" pointcut-ref="myPointCut" />
            <!--抛出通知：用于处理程序发生异常，可以接收当前方法产生的异常 -->
            <!-- *注意：如果程序没有异常，则不会执行增强 -->
            <!-- * throwing属性：用于设置通知第二个参数的名称，类型Throwable -->
            <aop:after-throwing method="myAfterThrowing"
                pointcut-ref="myPointCut" throwing="e" />
            <!--最终通知：无论程序发生任何事情，都将执行 -->
            <aop:after method="myAfter" pointcut-ref="myPointCut" />
        </aop:aspect>
    </aop:config>
```


**Annotation 的声明式**

| 名称 | 说明 |
| --- | --- |
| [_@_Aspect ](/Aspect ) | 用于定义一个切面。 |
| [_@_Before ](/Before ) | 用于定义前置通知，相当于 BeforeAdvice。 |
| [_@_AfterReturning ](/AfterReturning ) | 用于定义后置通知，相当于 AfterReturningAdvice。 |
| [_@_Around ](/Around ) | 用于定义环绕通知，相当于MethodInterceptor。 |
| [_@_AfterThrowing ](/AfterThrowing ) | 用于定义抛出通知，相当于ThrowAdvice。 |
| [_@_After ](/After ) | 用于定义最终final通知，不管是否异常，该通知都会执行。 |
| [_@_DeclareParents ](/DeclareParents ) | 用于定义引介通知，相当于IntroductionInterceptor |

```java
//切面类
@Aspect
@Component
public class MyAspect {
    
    // 用于取代：<aop:pointcut
    // expression="execution(*com.mengma.dao..*.*(..))" id="myPointCut"/>
    // 要求：方法必须是private，没有值，名称自定义，没有参数
    @Pointcut("execution(*com.mengma.dao..*.*(..))")
    private void myPointCut() {
    }
    
    // 前置通知
    @Before("myPointCut()")
    public void myBefore(JoinPoint joinPoint) {
        System.out.print("前置通知，目标：");
        System.out.print(joinPoint.getTarget() + "方法名称:");
        System.out.println(joinPoint.getSignature().getName());
    }
    
    // 后置通知
    @AfterReturning(value = "myPointCut()")
    public void myAfterReturning(JoinPoint joinPoint) {
        System.out.print("后置通知，方法名称：" + joinPoint.getSignature().getName());
    }
    
    // 环绕通知
    @Around("myPointCut()")
    public Object myAround(ProceedingJoinPoint proceedingJoinPoint)
            throws Throwable {
        System.out.println("环绕开始"); // 开始
        Object obj = proceedingJoinPoint.proceed(); // 执行当前目标方法
        System.out.println("环绕结束"); // 结束
        return obj;
    }
    
    // 异常通知
    @AfterThrowing(value = "myPointCut()", throwing = "e")
    public void myAfterThrowing(JoinPoint joinPoint, Throwable e) {
        System.out.println("异常通知" + "出错了" + e.getMessage());
    }
    
    // 最终通知
    @After("myPointCut()")
    public void myAfter() {
        System.out.println("最终通知");
    }
}
```
applicationContext.xml 配置
```xml
<!--扫描含com.mengma包下的所有注解-->
<context:component-scan base-package="com.mengma"/>
<!-- 使切面开启自动代理 -->
<aop:aspectj-autoproxy></aop:aspectj-autoproxy>
```


AspectJ 切入点语法

- [Supported Pointcut Designators](https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#aop-pointcuts-designators)
- Spring AOP 常用的切入点指示符（pointcut designators，PCD）
   - execution：用于匹配执行方法的连接点
      - execution(<修饰符>? <返回值类型> <所属类>?<方法名>(形参类型列表) <声明抛出的异常>?)，? 表示该部分可省略
      - 通配符：
         - * 代表一个任意类型的参数
         - .. 代表零个或多个任意类型的参数，在表示类时，必须和 * 联合使用，而在表示入参时则单独使用
         - + 表示按类型匹配指定类的所有类，必须跟在类名后面，如 com.smart.Car+ 继承或扩展指定类的所有类，同时还包括指定类本身
      - 如 execution(* com.example.app.service.impl.*.*(..))，匹配 com.example.app.service.impl 包中任意类的任意方法的执行
   - within：用于限定匹配特定域下的连接点。当使用 Spring AOP 的时候，只能匹配方法执行的连接点。
      - 如 within(com.example.app.service..*)，匹配在 com.example.app.service 包或其子包中的任意连接点
   - this：用于限定 AOP 代理对象必须是指定类型的实例，匹配该对象的所有连接点
      - this(com.example.app.service.AccountService)，匹配实现了 com.example.app.service.AccountService 接口的 AOP 代理的所有连接点
   - target：用于限定目标对象必须是指定类型的实例，匹配该对象的所有连接点
      - target(com.example.app.service.AccountService)，匹配实现了 com.example.app.service.AccountService 接口的目标对象的所有连接点
   - args：args(参数类型列表)，用于对连接点的参数类型进行限制，要求参数是指定类型的实例
   - bean：bean(Bean的id或name)，用于限定只匹配指定 Bean 实例内方法的连接点，支持使用 * 通配符，注意：bean 切入点表达式是 Spring AOP 额外支持的
   - @annotation：@annotation(注解类型)，用于匹配标注有指定注解的方法
   - @within：用于匹配标注有指定注解的类内所有方法
      - 如 @within(feign.Client+)，切入 feign.Client 的**实现类**
   - @target：用于匹配标注有指定注解的类的目标对象内所有方法
   - @args：用于匹配入参标注有指定注解的方法



## JDBCTemplate
通过配置文件、注解、Java 配置类等形式获取数据库的相关信息，实现了对 JDBC 开发过程中的驱动加载、连接的开启和关闭、SQL 语句的创建与执行、异常处理、事务处理、数据类型转换等操作的封装
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
    http://www.springframework.org/schema/context
            http://www.springframework.org/schema/context/spring-context.xsd">
    <!--开启组件扫描-->
    <context:component-scan base-package="net.biancheng.c"></context:component-scan>
    <!--引入 jdbc.properties 中的配置-->
    <context:property-placeholder location="classpath:jdbc.properties"></context:property-placeholder>
    
  	<!--定义数据源 Bean-->
    <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <!--数据库连接地址-->
        <property name="url" value="${jdbc.url}"/>
        <!--数据库的用户名-->
        <property name="username" value="${jdbc.username}"/>
        <!--数据库的密码-->
        <property name="password" value="${jdbc.password}"/>
        <!--数据库驱动-->
        <property name="driverClassName" value="${jdbc.driver}"/>
    </bean>
    <!--定义JdbcTemplate Bean-->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <!--将数据源的 Bean 注入到 JdbcTemplate 中-->
        <property name="dataSource" ref="dataSource"></property>
    </bean>
   
</beans>
```

methods

- public int update(String sql)	用于执行新增、更新、删除等语句；
- public int update(String sql,Object... args)
- public void execute(String sql)	可以执行任意 SQL，一般用于执行 DDL 语句；
- public T execute(String sql, PreparedStatementCallback action)
- public <T> List<T> query(String sql, RowMapper<T> rowMapper, @Nullable Object... args) 
- 用于执行查询语句；
- public <T> T queryForObject(String sql, RowMapper<T> rowMapper, @Nullable Object... args)
- public int[] batchUpdate(String sql, List<Object[]> batchArgs, final int[] argTypes) 

**TransactionDefinition**：定义了一个事务规则：事务隔离、事务传播、事务超时、只读状态



```java
public class UserDao {

    @Autowired
    JdbcTemplate jdbcTemplate;

    User getById(long id) {
        ...
    }

    List<User> getUsers(int page) {
        ...
    }

    User createUser(User user) {
        ...
    }

    User updateUser(User user) {
        ...
    }

    void deleteUser(User user) {
        ...
    }
}
```



## SpEL
Spring Expression Language 是一种功能强大的表达式语言，支持运行时查询和操作对象图 。
```java
// 构造解析器
ExpressionParser parser = new SpelExpressionParser();
// 解析器解析字符串表达式
Expression exp = parser.parseExpression("new String('hello spel').toUpperCase()");
// 获取表达式的值
String message = exp.getValue(String.class);
System.out.println(message); // HELLO SPEL
```


## Application Event

**内置事件**

- 上下文更新事件（ContextRefreshedEvent）：在调用ConfigurableApplicationContext 接口中的refresh()方法时被触发。
- 上下文开始事件（ContextStartedEvent）：当容器调用ConfigurableApplicationContext的Start()方法开始/重新开始容器时触发该事件。
- 上下文停止事件（ContextStoppedEvent）：当容器调用ConfigurableApplicationContext的Stop()方法停止容器时触发该事件。
- 上下文关闭事件（ContextClosedEvent）：当ApplicationContext被关闭时触发该事件。容器被关闭时，其管理的所有单例Bean都被销毁。
- 请求处理事件（RequestHandledEvent）：在Web应用中，当一个http请求（request）结束触发该事件。

1 自定义事件，继承 ApplicationEvent
```java
@Data
public class DemoEvent extends ApplicationEvent {

    private String msg;

    public DemoEvent(Object source,String msg) {
        super(source);
        this.msg = msg;
    }
}
```
2 定义监听器，实现 ApplicationListener 或者通过 @EventListener 注解到方法上
```java
@Component
public class DemoListener {
    //使用onApplicationEvent方法对消息进行接受处理
    @EventListener
    public void onApplicationEvent(DemoEvent event) {
        String msg = event.getMsg();
        System.out.println("DemoListener获取到了监听消息:"+msg);

    }
}
```
3 定义发布者，通过 ApplicationEventPublisher
```java
@Component
public class DemoPublisher  {
    @Autowired
    private ApplicationContext applicationContext;

    public void publish(String msg){
        applicationContext.publishEvent(new DemoEvent(this,msg));//使用ApplicationContext对象的publishEvent发布事件
    }
}
```



## Utils

### StringUtils

- boolean ~~isEmpty~~(Object str)：字符串是否为空或者空字符串
- boolean hasLength(CharSequence str)：字符串是否为空，或者长度为 0
- boolean hasText(String str)：字符串是否有内容（不为空，且不全为空格）
- boolean containsWhitespace(String str)：字符串是否包含空格
- String trimWhitespace(String str)：去掉字符串前后的空格
- String trimAllWhitespace(String str)：去掉字符串中所有的空格
- String unqualify(String qualifiedName)：得到以 . 分割的最后一个值（可以用来获取类名或者文件后缀）
- String unqualify(String qualifiedName, char separator)：得到以给定字符分割的最后一个值（可以用来获取文件名 File.separatorChar）
- String getFilename(String path)：获取文件名
- String getFilenameExtension(String path)：获取文件后缀名
- String capitalize(String str)：首字母大写
- String uncapitalize(String str)：取消首字母大写
- boolean substringMatch(CharSequence str, int index, CharSequence substring)：判断从指定索引开始，是否匹配子字符串
- int countOccurrencesOf(String str, String sub)：判断子字符串在字符串中出现的次数
- String replace(String inString, String oldPattern, String newPattern)：在字符串中使用子字符串替换
- String delete(String inString, String pattern)：删除所有匹配的子字符串
- String deleteAny(String inString, String charsToDelete)：删除子字符串中任意出现的字符
- String quote(String str)：在字符串前后增加单引号，比较适合在日志时候使用
- String[] addStringToArray(String[] array, String str)：把一个字符串添加到一个字符串数组中
- String[] concatenateStringArrays(String[] array1, String[]array2)：连接两个字符串数组
- String[] mergeStringArrays(String[] array1, String[] array2)：连接两个字符串数组，去掉重复元素
- String[] sortStringArray(String[] array)：字符串数组排序
- String[] tokenizeToStringArray(String str, String delimiters)：对每一个元素执行 trim 操作，并去掉空字符串
- String[] delimitedListToStringArray(String str, String delimiter)：分割字符串，以 delimiter 作为整体分隔符
- Set<String> commaDelimitedListToSet(String str)：使用逗号分割字符串，并放到 set 中去重
- String collectionToDelimitedString(Collection<?> coll, String delim, String prefix, String suffix)：将集合中的每个元素使用前缀、后缀、分隔符连接
- String collectionToDelimitedString(Collection<?> coll, String delim)：将集合中的每个元素使用指定字符串连接
- String arrayToDelimitedString(Object[] arr, String delim)：数组使用指定字符串连接
- String[] split(String toSplit, String delimiter)：在第一次出现分隔符时分割
- Properties splitArrayElementsIntoProperties(String[] array, String delimiter)：把字符串数组中的每一个字符串按照给定的分隔符装配到一个 Properties 中


### ObjectUtils

- boolean isCheckedException(Throwable ex)
- boolean isArray(Object obj)
- boolean isEmpty(Object[] array)
- boolean isEmpty(Object obj)
- Object unwrapOptional(Object obj)
- boolean containsElement(Object[] array, Object element)
- A[] addObjectToArray(A[] array, O obj)
- boolean nullSafeEquals(Object o1, Object o2)
- int nullSafeHashCode(Object obj)
- String nullSafeToString(Object obj)
- String nullSafeToString(Object[] array)


### FileCopyUtils
用于文件和流复制，所有复制方法都使用 4096 字节的块大小，并在完成后关闭所有受影响的流

- int copy(File in, File out)
- void copy(byte[] in, File out)
- int copy(InputStream in, OutputStream out)
- void copy(byte[] in, OutputStream out)
- int copy(Reader in, Writer out)
- void copy(String in, Writer out)
- String copyToString(Reader in)
- byte[] copyToByteArray(File in)
- byte[] copyToByteArray(InputStream in)


### FileSystemUtils

- boolean deleteRecursively(File root)：递归删除
- boolean deleteRecursively(Path root)
- void copyRecursively(File src, File dest)：递归复制
- void copyRecursively(Path src, Path dest)




# Spring MVC


**MVC**

- **模型(Model)	**封装了应用程序数据，通常它们将由POJO类组成。
- **视图(View)	**负责渲染模型数据，一般来说它生成客户端浏览器可以解释HTML输出。
- **控制器(Controller)	**负责处理用户请求并构建适当的模型，并将其传递给视图进行渲染。

执行流程  <br />  ![](./assets/1647764006879-b912438c-b849-4985-bd53-8179202216c1.png)


## 注解
`@RequestMapping`：用于类或方法，用来转换 Web 请求（访问路径和参数）

- 常用属性：
   - value、path：用于将指定请求的实际地址转换到方法上，value 的属性值可以不带斜杠
   - method：用来指定该方法仅仅处理哪些 HTTP 请求方式，包括 GET、POST、HEAD、OPTIONS、PUT、PATCH、DELETE、TRACE，如果没有指定 method 属性值，则请求处理方法可以处理任意的 HTTP 请求方式
   - consumes：指定处理**请求的提交内容类型**（Content-Type），如 "application/json"、"text/html"、"application/x-www-form-urlencoded"、"multipart/form-data"（MediaType 提供了常用的媒体类型）
   - produces：指定**返回的内容类型**，返回的内容类型必须是 request 请求头（Accept）中所包含的类型，如 "application/json;charset=UTF-8"、"application/json"
   - headers：指定请求中必须包含某些指定的 header 值，才能让该方法处理，如 "Accept=application/json"
   - params：指定请求中必须包含某些参数值时，才让该方法处理，如 params="myParam=myValue”，方法仅处理其中名为“myParam”、值为“myValue”的请求
- 组合注解：@GetMapping、@PostMapping、@PutMapping、@DeleteMapping、PatchMapping
- 后缀匹配：Spring MVC 中默认将 .* 作为匹配后缀，即映射到 /person 的方法也隐式映射到 /person.*。通过重写 WebMvcConfigurerAdapter 类中的 configurePathMatch 方法可设置不忽略“.”后面的参数，configurer.setUseSuffixPatternMatch(false)（Spring Boot 默认设置为 false）
- URI 模式：
   - ? 匹配 1 个字符（但不能是代表路径分隔符的 /）
   - * 匹配 0 或多个任意的字符（可以是代表路径分隔符的 /）
   - ** 匹配 0 或多个目录
   - {varName:regex}，如 {spring:[a-z]+} 将**正则表达式** [a-z]+ 匹配到的值赋值给名为 spring 的路径变量
   - 也可以嵌入 ${…} 占位符，这些占位符在启动时通过 PropertyPlaceHolderConfigurer 对本地、系统、环境和其它属性源来解析
   - 最长匹配原则：存在多个路径匹配模式时，Spring MVC 会以最长符合路径模式来匹配一个路径

`@RequestParam`：用于将指定的请求参数设置到方法参数  <br />  属性：name、required（默认 true）、defaultValue  <br />  `@PathVariable`：用于将 REST 风格的请求 URL 中的动态参数设置到方法参数，属性 value 省略则默认绑定同名参数  <br />  `@CrossOrigin`：可用于类或方法，**设置跨域行为**，常用属性：origins（允许域名）、methods、allowedHeaders、exposedHeaders、allowCredentials（是否允许发送 Cookie，**启用后允许域名不能设置为 '*'**）、maxAge（本次预检请求的有效期，单位为秒）

```java
@RestController
@RequestMapping("/persons")
class PersonController {

    @GetMapping("/{id}")
    public Person getPerson(@PathVariable Long id) {
        // ...
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void add(@RequestBody Person person) {
        // ...
    }
}
```


## 拦截器（Interceptor）
```java
public class MyInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request,
            HttpServletResponse response, Object handler) throws Exception {
        System.out.println("preHandle方法在控制器的处理请求方法调用之前执行");
        return false;
    }
    
        @Override
    public void postHandle(HttpServletRequest request,
            HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        System.out.println("postHandle方法在控制器的处理请求方法调用之后，解析视图之前执行");
    }
    
        @Override
    public void afterCompletion(HttpServletRequest request,
            HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        System.out.println("afterCompletion方法在控制器的处理请求方法执行完成后执行，即视图渲染结束之后执行");
    }
}
```
拦截器的配置
```xml
<mvc:interceptors>
  <mvc:interceptor>
    <!--/** 包括路径及其子路径-->
    <!--/admin/* 拦截的是/admin/add等等这种 , /admin/add/user不会被拦截-->
    <!--/admin/** 拦截的是/admin/下的所有-->
    <mvc:mapping path="/**"/>
    <!--bean配置的就是拦截器-->
    <bean class="com.example.MyInterceptor"/>
  </mvc:interceptor>
</mvc:interceptors>
```


## JSR 303
Java Specification Requests：Java 规范提案，指向JCP(Java Community Process)提出新增一个标准化技术规范的正式请求

JSR-303 是JAVA EE 6 中的一项子规范，叫做Bean Validation。  <br />  Hibernate Validator 提供了 JSR 303 规范中所有内置 constraint 的实现，除此之外还有一些附加的 constraint。

| 名称 | 说明 |
| --- | --- |
| @Null | 被标注的元素必须为 null |
| @NotNull | 被标注的元素必须不为 null |
| @AssertTrue | 被标注的元素必须为 true |
| @AssertFalse | 被标注的元素必须为 false |
| @Min(value) | 被标注的元素必须是一个数字，其值必须大于等于指定的最小值 |
| @Max(value) | 被标注的元素必须是一个数字，其值必须小于等于指定的最大值 |
| @DecimalMax(value) | 被标注的元素必须是一个数字，其值必须大于等于指定的最大值 |
| @DecimalMin(value) | 被标注的元素必须是一个数字，其值必须小于等于指定的最小值 |
| @size | 被标注的元素的大小必须在指定的范围内 |
| @Digits（integer，fraction） | 被标注的元素必须是一个数字，其值必须在可接受的范围内；integer 指定整数精度，fraction 指定小数精度 |
| @Past | 被标注的元素必须是一个过去的日期 |
| @Future | 被标注的元素必须是一个将来的日期 |
| @Pattern(value) | 被标注的元素必须符合指定的正则表达式 |



## 文件上传

需导入文件上传的jar包，commons-fileupload  <br />  配置bean：multipartResolver
```xml
<bean id="multipartResolver"  class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
   <!-- 请求的编码格式，默认为ISO-8859-1 -->
   <property name="defaultEncoding" value="utf-8"/>
   <!-- 上传文件大小上限，单位为字节（10485760=10M） -->
   <property name="maxUploadSize" value="10485760"/>
   <property name="maxInMemorySize" value="40960"/>
</bean>
```
```java
@RestController
public class UpLoadController {
    //@RequestParam("file") 将name=file控件得到的文件封装成CommonsMultipartFile 对象
    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile file, HttpServletRequest request){
        String filePath = getPath(request);
        return saveFile(file, filePath);
    }
    
    @PostMapping("/multiUpload")
    public String multiUpload(@RequestParam("file") MultipartFile[] files, HttpServletRequest request){
        String filePath = getPath(request);
        for (MultipartFile f : files){
            saveFile(f, filePath);
        }
        return "ok";
    }
    
    private String getPath(HttpServletRequest request){
        return request.getServletContext().getRealPath("/upload");
    }
 
    private String saveFile(MultipartFile file, String filePath){
        if (file.isEmpty()){
            return "未选择文件";
        }
        String filename = file.getOriginalFilename(); //获取上传文件原来的名称
        File temp = new File(filePath);
        if (!temp.exists()){
            temp.mkdirs();
        }
 
        File localFile = new File(filePath+filename);
        try {
            file.transferTo(localFile); //把上传的文件保存至本地
            System.out.println(file.getOriginalFilename()+" 上传成功");
        }catch (IOException e){
            e.printStackTrace();
            return "上传失败";
        }
        return "ok";
    }
}
```

## 文件下载
```java
@RequestMapping(value="/download")
public String downloads(HttpServletResponse response ,HttpServletRequest request) throws Exception{
   // 下载的地址
   String  path = request.getServletContext().getRealPath("/upload");
   String  fileName = "image.jpg";

   //1、设置response 响应头
   response.reset(); //设置页面不缓存,清空buffer
   response.setCharacterEncoding("UTF-8"); //字符编码
   response.setContentType("multipart/form-data"); //二进制传输数据
   //设置响应头
   response.setHeader("Content-Disposition",
           "attachment;fileName=" + URLEncoder.encode(fileName, "UTF-8"));

   File file = new File(path,fileName);
   //2、 读取文件--输入流
   InputStream input=new FileInputStream(file);
   //3、 写出文件--输出流
   OutputStream out = response.getOutputStream();

   byte[] buff =new byte[1024];
   int index=0;
   //4、执行 写出操作
   while((index= input.read(buff))!= -1){
       out.write(buff, 0, index);
       out.flush();
   }
   out.close();
   input.close();
   return null;
}
```



# [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/)

依赖配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.yiibai</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>
    <name>demo</name>
    <description>Demo project for Spring Boot</description>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.6.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```
启动类
```java
@SpringBootApplication
@RestController
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
    
    @RequestMapping(value = "/")
    public String hello() {
        return "Hello World";
    }
}
```

@SpringBootApplication：修饰启动类，组合了以下注解：

- @Configuration：用于声明当前类是一个配置类
- @EnableAutoConfiguration：让 Spring Boot 根据类路径中的 jar 包依赖为当前项目进行自动配置，可以通过使用 exclude 属性关闭特定的自动配置
- @ComponentScan：组件扫描，可自动发现和装配 Bean

定制 Banner

- 关闭 banner：spring.main.banner-mode=off
- 自定义 Banner，banner.txt 或 banner.gif(jpg or png can also be used)



## starter（启动器）
starter 中整合了该场景下各种可能用到的依赖，只需要在 Maven 中引入 starter 依赖，SpringBoot 就能自动扫描到要加载的信息并启动相应的默认配置。starter 提供了大量的自动配置。

- spring-boot-starter：核心 starter，包含自动配置、日志和 YAML 配置文件的支持
- spring-boot-starter-web：用于使用 Spring MVC 构建 web 应用，包括 RESTful（默认的内嵌容器是 Tomcat）
- spring-boot-starter-validation：Starter for using Java Bean Validation with Hibernate Validator
- spring-boot-starter-test：用于测试 Spring Boot 应用，支持常用测试类库，包括 JUnit, Hamcrest 和 Mockito
- spring-boot-starter-cache：用于使用 Spring 框架的缓存支持
- spring-boot-starter-aop：用于使用 Spring AOP 和 AspectJ 实现面向切面编程
- spring-boot-starter-jdbc：对 JDBC 的支持（使用 Tomcat JDBC 连接池）
- spring-boot-starter-data-mongodb：用于使用基于文档的数据库 MongoDB 和 Spring Data MongoDB
- spring-boot-starter-data-redis：用于使用 Spring Data Redis 和 Jedis 客户端操作键-值存储的 Redis
- spring-boot-starter-data-solr：通过 Spring Data Solr 使用 Apache Solr 搜索平台
- spring-boot-starter-data-elasticsearch：用于使用 Elasticsearch 搜索，分析引擎和 Spring Data Elasticsearch
- spring-boot-starter-freemarker：用于使用 FreeMarker 模板引擎构建 MVC web 应用
- spring-boot-starter-mail：用于使用 Java Mail 和 Spring 框架 email 发送支持
- spring-boot-starter-activemq：用于使用 Apache ActiveMQ 实现 JMS 消息
- spring-boot-starter-amqp：用于使用 Spring AMQP 和 RabbitMQ

spring-boot-starter-parent 是所有 Spring Boot 项目的父级依赖，称为 Spring Boot 的版本仲裁中心，可以对项目内的部分常用依赖进行统一管理。


## 注解
配置类

- @Configuration：用于声明当前类是一个配置类
- @Import：修饰配置类，用于向当前配置类中导入其它配置类，以及 ImportSelector、 DeferredImportSelector 或 ImportBeanDefinitionRegistrar 的实现类
- @ImportResource：修饰配置类，用于导入指定的 XML 配置文件
- @PropertySource：修饰配置类，用于加载指定的资源配置文件
- @PropertySources：修饰配置类，用于同时加载多个的资源配置文件
- @ComponentScan：修饰配置类，相当于 <context:component-scan base-package="..."/>，默认扫描当前包以及子包下所有使用 @Service @Components @Repository @Controller 的类，并注册为 Bean。属性：basePackages、lazyInit
- @ConfigurationProperties：修饰配置类或其内部的 @Bean 方法，用于将**配置文件**的某类名下所有的参数值赋给配置类的属性
- @Profile：修饰配置类或方法，设定当前 context 需要使用的配置环境，可达到在不同情况下选择实例化不同的 Bean
- @AutoConfigureAfter：在指定的配置类初始化后再加载
- @AutoConfigureBefore：在指定的配置类初始化前加载
- @AutoConfigureOrder：数越小越先初始化

属性注解

- @Value：修饰属性、方法或构造器函数，通过使用属性占位符从资源配置文件中加载一个参数值
- @Bean：修饰方法，将该方法的返回值定义成容器中的一个 Bean
- @Scope：修饰属性或方法，指定该方法对应的 Bean 的生命域
- @Lazy：修饰属性、方法或 Bean 类，指定该属性延迟到调用此属性时才注入属性值，或该方法对应的 Bean 延迟初始化（可用来解决循环依赖）
- @DependsOn：修饰方法，指定在初始化该方法对应的 Bean 之前初始化指定的 Bean
- @Conditional：满足某个特定的条件才创建该一个特定的 Bean，其属性 value 的类型是 Class<? extends Condition>[]
- @Scheduled：修饰方法，用于声明该方法是一个计划任务

- @EnableTransactionManagement：开启注解式事务的支持，Spring 容器会自动扫描注解 
- @EnableScheduling：开启计划任务的支持，再在执行计划任务的 Bean 的方法上使用 @Scheduled 声明这是一个计划任务
- @EnableAsync：开启对异步任务的支持，再通过在实际执行的 Bean 的方法中使用 @Async 注解来声明其是一个异步任务

条件注解

- @Conditional
- @ConditionalOnBean：当容器里有指定的 Bean 的条件下
- @ConditionalOnMissingBean：当容器里没有指定 Bean 的情况下
- @ConditionalOnClass：当类路径下有指定的类的条件下
- @ConditionalOnMissingClass：当类路径下没有指定的类的条件下
- @ConditionalOnProperty：基于属性作为判断条件
- @ConditionalOnResource
- @ConditionalOnExpression：基于 SpEL 表达式作为判断条件
- @ConditionalOnWebApplication：当前项目是 Web 项目的条件下
- @ConditionalOnNotWebApplication：当前项目不是 Web 项目的条件下



## 外部配置

- 可以使用 properties 文件、YAML 文件、环境变量和命令行参数来外部化配置
- 属性会以如下的顺序进行设值（即后面读取的**不覆盖**前面读取到的）：
   1. 命令行参数：如` --server.port=9000`，转化成一个 property，并将其添加到 Spring Environment 中
   1. Java 系统属性 System.getProperties()
   1. 操作系统环境变量
   1. jar 包外部的 Profile-specific 应用属性（application-{profile}.properties 或 YAML 文件）
   1. jar 包内部的 Profile-specific 应用属性（application-{profile}.properties 或 YAML 文件）
   1. jar 包外部的应用配置（application.properties 或 YAML 文件）
   1. jar 包内部的应用配置（application.properties 或 YAML 文件）
   1. @Configuration 类上的 @PropertySource 注解
   1. 使用 SpringApplication.setDefaultProperties 指定的默认属性


### [properties 文件配置参数](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config-application-property-files)

   1. 项目根目录下的 /config 子目录 `file:config/`
   1. 项目根目录 `file:`
   1. 项目 classpath 下的 /config 包`classpath:/config`
   1. 项目 classpath 根路径 `classpath:`
- 指定其它的配置文件名：`spring.config.name`
- 指定配置文件的加载路径（目录位置或文件路径列表以逗号分割，目录应以 / 结尾）：`spring.config.location`
```java
ConfigurableApplicationContext context = new SpringApplicationBuilder(TestDefaultFile.class).properties("spring.config.location=classpath:/test-folder/my-config.properties").run(args); 
```

- 在 properties 文件中可以使用 `${属性名:默认值}` 引用对应属性的值（当在 properties 文件中找不到引用的属性时默认使用的属性），如 port=9090、server.port=${port:8080}
- 通过 `@..@` 占位符引用 Maven 项目的属性，通过`${..}`占位符引用 Gradle 项目的属性


全注解的方式加载 Spring 配置
```java
/**
* @Configuration 注解用于定义一个配置类，相当于 Spring 的配置文件
* 配置类中包含一个或多个被 @Bean 注解的方法，该方法相当于 Spring 配置文件中的 <bean> 标签定义的组件。
*/
@Configuration
public class MyAppConfig {
    /**
     * 与 <bean id="personService" class="PersonServiceImpl"></bean> 等价
     * 该方法返回值以组件的形式添加到容器中
     * 方法名是组件 id（相当于 <bean> 标签的属性 id)
     */
    @Bean
    public PersonService personService() {
        System.out.println("在容器中添加了一个组件:peronService");
        return new PersonServiceImpl();
    }
}
```


### 属性绑定
把配置文件中的值与 JavaBean 中对应的属性进行绑定

- `@ConfigurationProperties`：标注在 JavaBean 的**类名**上，将 properties 属性和一个 Bean 及其属性关联，**松散绑定**
- `@Value("${app.name}")`：标注在 JavaBean 的**属性**上，直接将**非静态属性**值注入到 **Bean** 中
- `@PropertySource`** ：**加载指定的配置文件

```properties
person.last-name=李四
person.age=12
person.birth=2000/12/15
person.boss=false
person.maps.k1=v1
person.maps.k2=14
person.lists=a,b,c
person.dog.name=dog
person.dog.age=2
```
```yaml
person:
  name: sword
  age: 3
  birth: 2000/01/01
  maps: {k1: v1, k2: v2}
  lists:
   - code
   - girl
   - music
  dog:
    name: 旺财
    age: 1
```
```java
@PropertySource(value = "classpath:person.properties")//指向对应的配置文件
@Component
@ConfigurationProperties(prefix = "person")
public class Person {
    private String lastName;
    private Integer age;
    private Boolean boss;
    private Date birth;
    private Map<String, Object> maps;
    private List<Object> lists;
    private Dog dog;
    
    // ... getter, setter ...
}
```


## 静态资源配置

- webjars
   - WebMvcConfigurer#addResourceHandlers
   - 把静态资源打成 jar 包，Spring Boot 会自动加载 /webjars/** 下的所有 jar 包中的静态资源
- 默认静态资源路径
   1. classpath:/META-INF/resources/
   1. classpath:/resources/
   1. classpath:/static/
   1. classpath:/public/
- 自定义静态资源**加载路径**：spring.resources.staticLocations
- 自定义静态资源**映射**：spring.mvc.static-path-pattern，默认值为/**（表示所有的访问都经过静态资源路径）



## Web 开发
[定制 MVC 配置](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc-config)（如拦截器、格式化处理器、视图控制器等）：自定义一个配置类实现 WebMvcConfigurer 接口
```java
@Configuration
public class WebConfig implements WebMvcConfigurer  {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new XxxInterceptor());
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://domain2.com")
                .allowedMethods("PUT", "DELETE")
                .allowedHeaders("header1", "header2", "header3")
                .exposedHeaders("header1", "header2")
                .allowCredentials(false).maxAge(3600);
    }

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
    }

    @Override
    public void addFormatters(FormatterRegistry registry) {
    }

    @Override
    public Validator getValidator(); {
        return null;
    }
}
```
接管 Spring MVC 

1. @EnableWebMvc + extends WebMvcConfigurerAdapter，在扩展类中重写父类的方法，会导致 WebMvcAutoConfiguration 不被自动装配
1. extends WebMvcConfigurationSupport，在扩展类中重写父类的方法，会导致 WebMvcAutoConfiguration（@ConditionalOnMissingBean(WebMvcConfigurationSupport.class)） 不被自动装配
1. extends WebMvcConfigurerAdapter 或 implements WebMvcConfigurer，在扩展类中重写父类的方法，WebMvcAutoConfiguration 可以被自动装配


### 拦截器

1. 自定义拦截器：自定义一个类实现 Hanlderlnterceptor 接口或者继承 HandlerlnterceptorAdapter 抽象类，重写 preHandle 方法（在请求发生前执行），或重写 postHandle 方法（在请求完成后执行）
1. 注册拦截器：自定义一个配置类实现 WebMvcConfigurer 接口，在配置类中配置该拦截器的 Bean，重写 addInterceptors 方法
```java
@Slf4j
@Configuration
public class MyConfig implements WebMvcConfigurer {
    ......
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        log.info("注册拦截器");
        //拦截所有请求，包括静态资源文件
        registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/**") 
        //放行登录页，登陆操作，静态资源
                .excludePathPatterns("/", "/login", "/index.html", "/user/login", "/css/**", "/images/**", "/js/**", "/fonts/**"); 
    }
}
```


### 异常处理机制

- 通过 ErrorMvcAutoConfiguration 注册：
   - ErrorPageCustomizer 注册错误路径 server.error.path
   - BasicErrorController 处理 /error 请求
   - DefaultErrorViewResolver 错误视图解析器，如 /<templates>/error/4xx.<ext>、/<static>/error/4xx.html
   - DefaultErrorAttributes 定义要返回的错误属性，默认包含 timestamp、status、error、message、path


## I18n

**步骤**  <br />  1 在resources目录下，编写国际化资源文件

- `<bundleName>.properties`：无语言设置时生效
- `<bundleName>_en_US.properties` ：英语时生效
- `<bundleName>_zh_CN.properties`：中文时生效

2 使用 ResourceBundleMessageSource 管理国际化资源文件
> Spring Boot 对 ResourceBundleMessageSource  提供了默认的自动配置。Spring Boot 从容器中获取 MessageSourceProperties 组件，并从中读取国际化资源文件的 basename（文件基本名）、encoding（编码）等信息，将它们封装到 ResourceBundleMessageSource 中。
> 查看源码，basename默认为“message”，即 Spring Boot 默认会获取类路径下的 message.properties 以及 message_XXX.properties 作为国际化资源文件。

```java
public class MessageSourceProperties {
    private String basename = "messages";
    private Charset encoding;
    @DurationUnit(ChronoUnit.SECONDS)
    private Duration cacheDuration;
    private boolean fallbackToSystemLocale;
    private boolean alwaysUseMessageFormat;
    private boolean useCodeAsDefaultMessage;
    public MessageSourceProperties() {
        this.encoding = StandardCharsets.UTF_8;
        this.fallbackToSystemLocale = true;
        this.alwaysUseMessageFormat = false;
        this.useCodeAsDefaultMessage = false;
    }
    ...
}
```

自定义的国际资源文件的基本名
```yaml
# yaml
spring:
  # 资源信息
  messages:
    # 国际化资源文件路径
    basename: i18n/<bundleName>
    
    
spring.messages.basename=i18n/<bundleName>
```
  <br />  3 使用
```java
@RestController
public class DemoController {
    @Autowired
    MessageSource messageSource;
    
    @GetMapping("/i18n")
    public String demo() {
        return messageSource.getMessage("code", null, LocaleContextHolder.getLocale());
    }
}

```

**区域信息解析器自动配置**
> Spring Boot 在 WebMvcAutoConfiguration 中为区域信息解析器（LocaleResolver）进行了自动配置，它会根据请求头中携带的“Accept-Language”参数，获取相应区域信息（Locale）对象。

```java
@Bean
@ConditionalOnMissingBean(name = DispatcherServlet.LOCALE_RESOLVER_BEAN_NAME)
@SuppressWarnings("deprecation")
public LocaleResolver localeResolver() {
    if (this.webProperties.getLocaleResolver() == WebProperties.LocaleResolver.FIXED) {
        return new FixedLocaleResolver(this.webProperties.getLocale());
    }
    if (this.mvcProperties.getLocaleResolver() == WebMvcProperties.LocaleResolver.FIXED) {
        return new FixedLocaleResolver(this.mvcProperties.getLocale());
    }
    AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();
    Locale locale = (this.webProperties.getLocale() != null) ? this.webProperties.getLocale()
            : this.mvcProperties.getLocale();
    localeResolver.setDefaultLocale(locale);
    return localeResolver;
}
```

自定义区域信息解析器
```java
public class MyLocalResolver implements LocaleResolver {
    @Override
    public Locale resolveLocale(HttpServletRequest request) {
        //获取请求中参数
        String lang = request.getParameter("lang");
        //获取默认的区域信息解析器
        Locale locale = Locale.getDefault();
        //根据请求中的参数重新构造区域信息对象
        if (StringUtils.hasText(lang)) {
            String[] s = lang.split("_");
            locale = new Locale(s[0], s[1]);
        }
        return locale;
    }
    
    @Override
    public void setLocale(HttpServletRequest request, HttpServletResponse response, Locale locale) {
    }
}



// 在MvcConfig 中添加以下方法
@Configuration
public class WebConfig implements WebMvcConfigurer {
    //将自定义的区域信息解析器以组件的形式添加到容器中
    @Bean
    public LocaleResolver localeResolver(){
        return new MyLocalResolver();
    }
}
```


自定义工具类方式
```java
import org.springframework.aop.framework.AopContext;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.stereotype.Component;
 
/**
 * spring工具类 方便在非spring管理环境中获取bean
 *
 */
@Component
public final class SpringUtils implements BeanFactoryPostProcessor
{
    /** Spring应用上下文环境 */
    private static ConfigurableListableBeanFactory beanFactory;
 
    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException
    {
        SpringUtils.beanFactory = beanFactory;
    }
 
    /**
     * 获取对象
     *
     * @param name
     * @return Object 一个以所给名字注册的bean的实例
     * @throws org.springframework.beans.BeansException
     *
     */
    @SuppressWarnings("unchecked")
    public static <T> T getBean(String name) throws BeansException
    {
        return (T) beanFactory.getBean(name);
    }
 
    /**
     * 获取类型为requiredType的对象
     *
     * @param clz
     * @return
     * @throws org.springframework.beans.BeansException
     *
     */
    public static <T> T getBean(Class<T> clz) throws BeansException
    {
        T result = (T) beanFactory.getBean(clz);
        return result;
    }
 
    /**
     * 如果BeanFactory包含一个与所给名称匹配的bean定义，则返回true
     *
     * @param name
     * @return boolean
     */
    public static boolean containsBean(String name)
    {
        return beanFactory.containsBean(name);
    }
 
    /**
     * 判断以给定名字注册的bean定义是一个singleton还是一个prototype。 如果与给定名字相应的bean定义没有被找到，将会抛出一个异常（NoSuchBeanDefinitionException）
     *
     * @param name
     * @return boolean
     * @throws org.springframework.beans.factory.NoSuchBeanDefinitionException
     *
     */
    public static boolean isSingleton(String name) throws NoSuchBeanDefinitionException
    {
        return beanFactory.isSingleton(name);
    }
 
    /**
     * @param name
     * @return Class 注册对象的类型
     * @throws org.springframework.beans.factory.NoSuchBeanDefinitionException
     *
     */
    public static Class<?> getType(String name) throws NoSuchBeanDefinitionException
    {
        return beanFactory.getType(name);
    }
 
    /**
     * 如果给定的bean名字在bean定义中有别名，则返回这些别名
     *
     * @param name
     * @return
     * @throws org.springframework.beans.factory.NoSuchBeanDefinitionException
     *
     */
    public static String[] getAliases(String name) throws NoSuchBeanDefinitionException
    {
        return beanFactory.getAliases(name);
    }
 
    /**
     * 获取aop代理对象
     *
     * @param invoker
     * @return
     */
    @SuppressWarnings("unchecked")
    public static <T> T getAopProxy(T invoker)
    {
        return (T) AopContext.currentProxy();
    }
}
```
```java
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import com.common.utils.spring.SpringUtils;
 
/**
 * 获取i18n资源文件
 *
 */
public class MessageUtils
{
    /**
     * 根据消息键和参数 获取消息 委托给spring messageSource
     *
     * @param code 消息键
     * @param args 参数
     * @return 获取国际化翻译值
     */
    public static String getMessage(String code, Object... args)
    {
        MessageSource messageSource = SpringUtils.getBean(MessageSource.class);
        return messageSource.getMessage(code, args, LocaleContextHolder.getLocale());
    }
}

// 使用   String message = MessageUtils.getMessage("code")
```



## StopWatch
```java
/**
 * 简单的秒表，允许对多个任务进行计时，公开总运行时间和每个命名任务的运行时间。
 * 请注意，此对象并非设计为线程安全的，并且不使用同步。
 */
public class StopWatch {
	private final String id;

	private boolean keepTaskList = true;

	private final List<TaskInfo> taskList = new LinkedList<>();

	/** 当前任务的开始时间。 */
	private long startTimeNanos;

	/** 当前任务的名称。 */
	@Nullable
	private String currentTaskName;

	@Nullable
	private TaskInfo lastTaskInfo;

	private int taskCount;

	/** 总运行时间。 */
	private long totalTimeNanos;


	/**
	 * 构造一个新的秒表。
     * 不启动任何任务
	 */
	public StopWatch() {
		this("");
	}

	public StopWatch(String id) {
		this.id = id;
	}
    
	public String getId() {
		return this.id;
	}

	/**
	 * 配置StopWatch.TaskInfo数组是否随着时间的推移而构建。
	 * 使用秒表进行数百万个间隔时，将其设置为false；否则，TaskInfo结构将消耗过多的内存。
	 * 默认为true。
	 */
	public void setKeepTaskList(boolean keepTaskList) {
		this.keepTaskList = keepTaskList;
	}


	/**
	 * 启动一个未命名的任务。
	 * 如果在没有先调用该方法的情况下调用stop（）或计时方法，则结果是不确定的
	 */
	public void start() throws IllegalStateException {
		start("");
	}

	public void start(String taskName) throws IllegalStateException {
		if (this.currentTaskName != null) {
			throw new IllegalStateException("Can't start StopWatch: it's already running");
		}
		this.currentTaskName = taskName;
		this.startTimeNanos = System.nanoTime();
	}

	/**
	 * 停止当前任务。
	 * 如果在不调用至少一对start()/ stop()方法的情况下调用计时方法，则结果是不确定的。
	 */
	public void stop() throws IllegalStateException {
		if (this.currentTaskName == null) {
			throw new IllegalStateException("Can't stop StopWatch: it's not running");
		}
		long lastTime = System.nanoTime() - this.startTimeNanos;
		this.totalTimeNanos += lastTime;
		this.lastTaskInfo = new TaskInfo(this.currentTaskName, lastTime);
		if (this.keepTaskList) {
			this.taskList.add(this.lastTaskInfo);
		}
		++this.taskCount;
		this.currentTaskName = null;
	}

	public boolean isRunning() {
		return (this.currentTaskName != null);
	}

	@Nullable
	public String currentTaskName() {
		return this.currentTaskName;
	}

	/**
	 * 获取上一个任务花费的时间（以纳秒为单位）。
	 */
	public long getLastTaskTimeNanos() throws IllegalStateException {
		if (this.lastTaskInfo == null) {
			throw new IllegalStateException("No tasks run: can't get last task interval");
		}
		return this.lastTaskInfo.getTimeNanos();
	}

	/**
	 * 获取上一个任务花费的时间（以毫秒为单位）。
	 */
	public long getLastTaskTimeMillis() throws IllegalStateException {
		if (this.lastTaskInfo == null) {
			throw new IllegalStateException("No tasks run: can't get last task interval");
		}
		return this.lastTaskInfo.getTimeMillis();
	}

	/**
	 * 获取上一个任务的名称。
	 */
	public String getLastTaskName() throws IllegalStateException {
		if (this.lastTaskInfo == null) {
			throw new IllegalStateException("No tasks run: can't get last task name");
		}
		return this.lastTaskInfo.getTaskName();
	}

	/**
	 * 获取最后一个任务作为StopWatch.TaskInfo对象。
	 */
	public TaskInfo getLastTaskInfo() throws IllegalStateException {
		if (this.lastTaskInfo == null) {
			throw new IllegalStateException("No tasks run: can't get last task info");
		}
		return this.lastTaskInfo;
	}


	/**
	 * 获取所有任务的总时间（以纳秒为单位）。
	 */
	public long getTotalTimeNanos() {
		return this.totalTimeNanos;
	}

	/**
	 * 获取所有任务的总时间（以毫秒为单位）。
	 */
	public long getTotalTimeMillis() {
		return nanosToMillis(this.totalTimeNanos);
	}

	/**
	 * 获取所有任务的总时间（以秒为单位）。
	 */
	public double getTotalTimeSeconds() {
		return nanosToSeconds(this.totalTimeNanos);
	}

	/**
	 * 获取计时的任务数。
	 */
	public int getTaskCount() {
		return this.taskCount;
	}

	/**
	 * 获取执行的任务的数据数组。
	 */
	public TaskInfo[] getTaskInfo() {
		if (!this.keepTaskList) {
			throw new UnsupportedOperationException("Task info is not being kept!");
		}
		return this.taskList.toArray(new TaskInfo[0]);
	}

	/**
	 * 获得总运行时间的简短描述。
	 */
	public String shortSummary() {
		return "StopWatch '" + getId() + "': running time = " + getTotalTimeNanos() + " ns";
	}

	/**
	 * 生成带有描述所有已执行任务的表的字符串。
	 * 对于自定义报告，请调用getTaskInfo()并直接使用任务信息。
	 */
	public String prettyPrint() {
		StringBuilder sb = new StringBuilder(shortSummary());
		sb.append('\n');
		if (!this.keepTaskList) {
			sb.append("No task info kept");
		}
		else {
			sb.append("---------------------------------------------\n");
			sb.append("ns         %     Task name\n");
			sb.append("---------------------------------------------\n");
			NumberFormat nf = NumberFormat.getNumberInstance();
			nf.setMinimumIntegerDigits(9);
			nf.setGroupingUsed(false);
			NumberFormat pf = NumberFormat.getPercentInstance();
			pf.setMinimumIntegerDigits(3);
			pf.setGroupingUsed(false);
			for (TaskInfo task : getTaskInfo()) {
				sb.append(nf.format(task.getTimeNanos())).append("  ");
				sb.append(pf.format((double) task.getTimeNanos() / getTotalTimeNanos())).append("  ");
				sb.append(task.getTaskName()).append("\n");
			}
		}
		return sb.toString();
	}

	/**
	 * 生成描述所有已执行任务的信息字符串
	 * 对于自定义报告，请调用getTaskInfo（）并直接使用任务信息。
	 */
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder(shortSummary());
		if (this.keepTaskList) {
			for (TaskInfo task : getTaskInfo()) {
				sb.append("; [").append(task.getTaskName()).append("] took ").append(task.getTimeNanos()).append(" ns");
				long percent = Math.round(100.0 * task.getTimeNanos() / getTotalTimeNanos());
				sb.append(" = ").append(percent).append("%");
			}
		}
		else {
			sb.append("; no task info kept");
		}
		return sb.toString();
	}


	private static long nanosToMillis(long duration) {
		return TimeUnit.NANOSECONDS.toMillis(duration);
	}

	private static double nanosToSeconds(long duration) {
		return duration / 1_000_000_000.0;
	}

	/**
	 * 嵌套类，用于保存有关StopWatch中执行的一项任务的数据。
	 */
	public static final class TaskInfo {

		private final String taskName;

		private final long timeNanos;

		TaskInfo(String taskName, long timeNanos) {
			this.taskName = taskName;
			this.timeNanos = timeNanos;
		}

		/**
		 * 获取此任务的名称。
		 */
		public String getTaskName() {
			return this.taskName;
		}

		/**
		 * 获取此任务花费的时间（以纳秒为单位）。
		 */
		public long getTimeNanos() {
			return this.timeNanos;
		}

		/**
		 * 获取此任务花费的时间（以毫秒为单位）。
		 */
		public long getTimeMillis() {
			return nanosToMillis(this.timeNanos);
		}

		/**
		 * 获取此任务花费的时间（以秒为单位）。
		 */
		public double getTimeSeconds() {
			return nanosToSeconds(this.timeNanos);
		}

	}

}
```



# [JPA](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
Java Persistence API（Java 持久化 API）：定义了对象关系映射（ORM）以及实体对象持久化的标准接口  <br />  Spirng Data JPA 是 Spring 提供的一套简化 JPA 开发的框架，可以理解为对 JPA 规范的再次封装抽象，底层还是使用了 Hibernate 的 JPA 技术实现

## 注解
**javax.persistence**

- 实体
   - @Entity：表示该类是一个实体类
   - @MappedSuperclass
   - @Table(name)：指定该类对应数据库中的表名，如果类名和数据库表名符合驼峰及下划线规则，可省略，如 FlowType 类名对应表名 flow_type
- 主键
   - @Id：指定该属性为表的主键
   - @GeneratedValue(strategy, generator)：主键生成策略，如 @GeneratedValue(strategy = GenerationType.IDENTITY)，依赖于数据库递增的策略
   - @SequenceGenerator (name, sequenceName)
- 映射
   - @Column(name, nullable, length, insertable, updatable)：定义属性和表的映射关系
   - @Enumerated
   - @JoinTable(name)、@JoinColumn(name)
   - @Convert(converter)：指定使用的转换器（自定义转换器实现 AttributeConverter<X,Y>）
   - @Version
- 关系
   - @OneToOne、@OneToMany、@ManyToOne、@ManyToMany
   - @OrderBy

spring-data-commons

- `@Query`：自定义语句查询
- `@Modifying`：自定义语句查询涉及到修改、删除时需要加上此注解
- `@Transient`：属性不被持久化
- @CreatedBy、@CreatedDate、@LastModifiedBy、@LastModifiedDate

Hibernate

- org.hibernate.annotations
- @CreationTimestamp、@UpdateTimestamp
- @Type(type、parameters)


## 操作数据

- 添加依赖 spring-boot-starter-data-jpa
- @EnableJpaRepositories：启用 JPA 编程
- @EntityScan
- 继承 JpaRepository<T, ID>
```java
public interface JpaRepository<T, ID> extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {
  List<T> findAll();

  List<T> findAll(Sort var1);

  List<T> findAllById(Iterable<ID> var1);

  <S extends T> List<S> saveAll(Iterable<S> var1);

  void flush();

  <S extends T> S saveAndFlush(S var1);

  void deleteInBatch(Iterable<T> var1);

  void deleteAllInBatch();

  T getOne(ID var1);

  <S extends T> List<S> findAll(Example<S> var1);

  <S extends T> List<S> findAll(Example<S> var1, Sort var2);
}
```

- 按照一定[规则](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repository-query-keywords)命名的方法可以在不写接口实现的情况下完成逻辑（JPA 会根据方法命名生成 SQL）

[Query Methods](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.query-methods)

| **Keyword** | **Sample** | **JPQL snippet** |
| --- | --- | --- |
| Distinct | findDistinctByLastnameAndFirstname | select distinct … where x.lastname = ?1 and x.firstname = ?2 |
| And | findByLastnameAndFirstname | … where x.lastname = ?1 and x.firstname = ?2 |
| Or | findByLastnameOrFirstname | … where x.lastname = ?1 or x.firstname = ?2 |
| Is, Equals | findByFirstname,findByFirstnameIs,findByFirstnameEquals | … where x.firstname = ?1 |
| Between | findByStartDateBetween | … where x.startDate between ?1 and ?2 |
| LessThan | findByAgeLessThan | … where x.age < ?1 |
| LessThanEqual | findByAgeLessThanEqual | … where x.age <= ?1 |
| GreaterThan | findByAgeGreaterThan | … where x.age > ?1 |
| GreaterThanEqual | findByAgeGreaterThanEqual | … where x.age >= ?1 |
| After | findByStartDateAfter | … where x.startDate > ?1 |
| Before | findByStartDateBefore | … where x.startDate < ?1 |
| IsNull, Null | findByAge(Is)Null | … where x.age is null |
| IsNotNull, NotNull | findByAge(Is)NotNull | … where x.age not null |
| Like | findByFirstnameLike | … where x.firstname like ?1 |
| NotLike | findByFirstnameNotLike | … where x.firstname not like ?1 |
| StartingWith | findByFirstnameStartingWith | … where x.firstname like ?1 (parameter bound with appended %) |
| EndingWith | findByFirstnameEndingWith | … where x.firstname like ?1 (parameter bound with prepended %) |
| Containing | findByFirstnameContaining | … where x.firstname like ?1 (parameter bound wrapped in %) |
| OrderBy | findByAgeOrderByLastnameDesc | … where x.age = ?1 order by x.lastname desc |
| Not | findByLastnameNot | … where x.lastname <> ?1 |
| In | findByAgeIn(Collection<Age> ages) | … where x.age in ?1 |
| NotIn | findByAgeNotIn(Collection<Age> ages) | … where x.age not in ?1 |
| True | findByActiveTrue() | … where x.active = true |
| False | findByActiveFalse() | … where x.active = false |
| IgnoreCase | findByFirstnameIgnoreCase | … where UPPER(x.firstname) = UPPER(?1) |


**Query subject keywords**

| **Keyword** | **Description** |
| --- | --- |
| find…By, read…By,   <br />  get…By, query…By, search…By, stream…By | General query method returning typically the repository type, a Collection or Streamable subtype or a result wrapper such as Page, GeoResults or any other store-specific result wrapper. Can be used as findBy…, findMyDomainTypeBy… or in combination with additional keywords. |
| exists…By | Exists projection, returning typically a boolean result. |
| count…By | Count projection returning a numeric result. |
| delete…By, remove…By | Delete query method returning either no result (void) or the delete count. |
| …First<number>…, …Top<number>… | Limit the query results to the first <number> of results. This keyword can occur in any place of the subject between find (and the other keywords) and by. |
| …Distinct… | Use a distinct query to return only unique results. Consult the store-specific documentation whether that feature is supported. This keyword can occur in any place of the subject between find (and the other keywords) and by. |



**示例**  <br />  数据库基础配置
```yaml
spring:
  jpa:
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQLDialect
        new_generator_mappings: false
        format_sql: true
      show-sql: true
  datasource:
    url: jdbc:mysql://localhost:3306/ss?serverTimezone=UTC&useSSL=false&autoReconnect=true&tinyInt1isBit=false&useUnicode=true&characterEncoding=utf8
    username: root
    password: 123qwe
    
    
logging:
  level:
    org.springframework.security:
      - debug
      - info
    org.springframework.web: error
    org.hibernate.SQL: debug
    org.hibernate.engine.QueryParameters: debug
    org.hibernate.engine.query.HQLQueryPlan: debug
    org.hibernate.type.descriptor.sql.BasicBinder: trace
```

编写一个对应数据库表的实体类
```java
@Entity
@Table(name = "books")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "book_id")
    private int bookId;
    
    // 用来跟表的字段做个映射，如果名字相同就不需要写
    @Column(name = "title")
    private String title;
    
    @Column(name = "category")
    private String category;
    
    // get、set...
}

// 对于from后的子查询，需要将select子查询到的虚拟表建立一个实体类映射成一个虚拟视图，再进行关联查询操作
@Entity
@Subselect("native sql Query")
@Synchronize({"table"})
public class Temp{ ... }
```
编写持久层，实现一个类（JpaRepository 或 CrudRepository）
```java
public interface BookDao extends CrudRepository<Book, Long>{

    @Query("select * from Book b where b.title=:title", nativeQuery = true)
    public Book findBookByTitle(@Param("title") String title);
    
    @Query("select * from Book b where b.category=:category")
    public Page<Book> findBooksByCategory(@Param("category")String category, Pageable pageable);
}
```
使用
```java
@Autowired
private UserDao userDao;

@Test
public void getBooksPageable()
{
    int pageIndex = 0; //当前页码（第一页从0开始）
    int pageSize = 10; //分页大小
    
    //排序
    Sort sort = Sort.by(Sort.Direction.ASC, "title");
 
    //分页
    Pageable pageable = PageRequest.of(pageIndex, pageSize, sort);
    Page<Book> Books = BookDao.findBooksByCategory("computer", pageable);
 
    //数据列表
    List<Book> BookList = Books.getContent();
    for (Book book : BookList){
        System.out.println(book.toString());
    }
    //分页信息
    System.out.println("当前页码：第" + (Books.getNumber() + 1) + "页");
    System.out.println("分页大小：每页" + Books.getSize() + "条");
    System.out.println("数据总数：共" + Books.getTotalElements() + "条");
    System.out.println("总页数：共" + Books.getTotalPages() + "页");
    System.out.println("排序信息：" + Books.getSort().toString());
}   
```


## 审计 Auditing
启用Jpa审计功能：在Spring Boot启动类上添加`@EnableJpaAuditing`注解用于启用Jpa的审计功能
```java
// 实体类
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "tb_user")
@Data
public class User {

    @Id
    @GenericGenerator(name = "idGenerator", strategy = "uuid")
    @GeneratedValue(generator = "idGenerator")
    private String id;

    @Column(name = "username", unique = true, nullable = false, length = 64)
    private String username;

    @Column(name = "password", nullable = false, length = 64)
    private String password;

    @Column(name = "email", unique = true, length = 64)
    private String email;

    @ManyToMany(targetEntity = Role.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "tb_user_role", joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")})
    private Set<Role> roles;

    @CreatedDate
    @Column(name = "created_date", updatable = false)
    private Date createdDate;

    @CreatedBy
    @Column(name = "created_by", updatable = false, length = 64)
    private String createdBy;

    @LastModifiedDate
    @Column(name = "updated_date")
    private Date updatedDate;

    @LastModifiedBy
    @Column(name = "updated_by", length = 64)
    private String updatedBy;
}


// 实现AuditorAware接口
@Component
public class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
        return Optional.of("admin");
    }
}
```






# Spring Cloud







# [Spring security](https://docs.spring.io/spring-security/reference/index.html)

默认用户名、密码和权限在 application.yaml 中配置
```yaml
spring:
  security:
    user:
      name: ming
      password: 123456
      roles: admin
```
```java
@Configuration
@EnableWebSecurity
// 开启注解设置权限
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    // 配置密码加密器
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // 配置认证管理器
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("admin")
                .password(passwordEncoder().encode("123")).roles("admin")
                .and()
                .withUser("user")
                .password(passwordEncoder().encode("456")).roles("user");
    }
    
    // 配置安全策略
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 配置认证
        http.formLogin()
                // 哪个URL为登录页面
                .loginPage("/")
                // 当发现什么URL时执行登录逻辑
                .loginProcessingUrl("/login")
                // 成功后跳转到哪里
                .successForwardUrl("/success")
                // 失败后跳转到哪里
                .failureForwardUrl("/fail");

        // 设置URL的授权问题
        // 多个条件取交集
        http.authorizeRequests()
                // 匹配 / 控制器  permitAll() 不需要被认证就可以访问
                .antMatchers("/").permitAll()
                // anyRequest() 所有请求   authenticated() 必须被认证
                .anyRequest().authenticated();

        //开启记住我功能   cookie  默认保存时间14天
        //自定义接收前端参数，remember为表单中的名字
        http.rememberMe().rememberMeParameter("remember");
        
        // 关闭csrf
        http.csrf().disable();
    }
}

```


# —— ORM ——

## [Hibernate](http://hibernate.org/orm/)


### HQL
[大小写敏感性](https://hibernate.net.cn/docs/72.html)：除了Java类与属性的名称外，查询语句对大小写并不敏感  <br />  [from子句](https://hibernate.net.cn/docs/73.html)
```sql
-- 返回Cat类的所有实例，同时返回其子类的实例
from Cat cat

-- 查询结果是产生一个笛卡儿积或产生跨表的连接
from Formula, Parameter
```
[关联(Association)与连接(Join)](https://hibernate.net.cn/docs/74.html)

- inner join（内连接）
- left outer join（左外连接）
- right outer join（右外连接）
- full join (全连接，并不常用)
```sql
-- with关键字，可以提供额外的join条件
from Cat as cat 
    left join cat.kittens as kitten 
        with kitten.bodyWeight > 10.0
        
-- "fetch"连接允许仅仅使用一个选择语句就将相关联的对象或一组值的集合随着他们的父对象的初始化而被初始化
from Cat as cat 
    inner join fetch cat.mate
    left join fetch cat.kittens child
    left join fetch child.kittens
```
[select子句](https://hibernate.net.cn/docs/76.html)
```sql
select cat.name from DomesticCat cat
where cat.name like 'fri%'

-- 存放在一个List对象中
select new list(mother, offspr, mate.name)
from DomesticCat as mother
    inner join mother.mate as mate
    left outer join mother.kittens as offspr
    
-- 假设类Family有一个合适的构造函数，可直接返回一个实际的类型
select new Family(mother, mate, offspr)
from DomesticCat as mother
    join mother.mate as mate
    left join mother.kittens as offspr
    
-- 返回了一个Map的对象
select new map( max(bodyWeight) as max, min(bodyWeight) as min, count(*) as n )
from Cat cat

-- 条件查询
from Cat cat where cat.mate.name is not null

from Person where name = ('Gavin', 'A', 'King')
-- equal to
from Person where name.first = 'Gavin' and name.initial = 'A' and name.last = 'King')
```
[子查询](https://hibernate.net.cn/docs/83.html)  <br />  HQL自查询只可以在select或者where子句中出现
```sql
from Cat as fatcat 
where fatcat.weight > ( 
    select avg(cat.weight) from DomesticCat cat 
)

select cat.id, (select max(kit.weight) from cat.kitten kit) 
from Cat as cat
```
[  <br />  ](https://hibernate.net.cn/docs/86.html)






## [MyBatis](https://mybatis.org/mybatis-3/zh/index.html)
```xml
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis</artifactId>
  <version>3.5.4</version>
</dependency>
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration><!-- 配置 -->
    <properties /><!-- 属性 -->
    <settings /><!-- 设置 -->
    <typeAliases /><!-- 类型命名 -->
    <typeHandlers /><!-- 类型处理器 -->
    <objectFactory /><!-- 对象工厂 -->
    <plugins /><!-- 插件 -->
    <environments><!-- 配置环境 -->
        <environment><!-- 环境变量 -->
            <transactionManager /><!-- 事务管理器 -->
            <dataSource /><!-- 数据源 -->
        </environment>
    </environments>
    <databaseIdProvider /><!-- 数据库厂商标识 -->
    <mappers /><!-- 映射器 -->
</configuration>
```
** 元素的结构**
```xml
<resultMap id="" type="">
    <constructor><!-- 类再实例化时用来注入结果到构造方法 -->
        <idArg/><!-- ID参数，结果为ID -->
        <arg/><!-- 注入到构造方法的一个普通结果 -->  
    </constructor>
    <id/><!-- 用于表示哪个列是主键 -->
    <result/><!-- 注入到字段或JavaBean属性的普通结果 -->
    <association property=""/><!-- 用于一对一关联 -->
    <collection property=""/><!-- 用于一对多、多对多关联 -->
    <discriminator javaType=""><!-- 使用结果值来决定使用哪个结果映射 -->
        <case value=""/><!-- 基于某些值的结果映射 -->
    </discriminator>
</resultMap>
```
增删查改  <br />  mybatis-config.xml
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
  PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
<typeAliases>
	<typeAlias alias="Site" type="rain.Site" />
	</typeAliases>
  <environments default="development">
    <environment id="development">
      <transactionManager type="JDBC"/>
      <dataSource type="POOLED">
        <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
        <property name="url" value="jdbc:mysql://localhost:3306/web?useSSL=false&amp;serverTimezone=GMT"/>
        <property name="username" value="root"/>
        <property name="password" value="mysql2020"/>
      </dataSource>
    </environment>
  </environments>
  <mappers>
    <mapper resource="rain/SiteMapper.xml"/>
  </mappers>
</configuration>
```
SiteMapper.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" 
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="rain.ISite">
	<select id="getSite" parameterType="int" resultType="Site">
		select *
		from `site` where id = #{id}
	</select>
	<insert id="insertSite" parameterType="Site">
		INSERT INTO SITE(id,name,url) VALUES(#{id},#{name},#{url})
	</insert>
	<select id="getSites" resultType="Site">
		SELECT * FROM SITE
	</select>
	<update id="updateSite" parameterType="Site">
		update site set name=#{name},url=#{url} where id=#{id}
	</update>
	<delete id="deleteSite" parameterType="int">
		delete from site where id=#{id}
	</delete>
</mapper>
```
```xml
public interface ISite {
	public List<Site>getSites();
	public void insertSite(Site s);
	public void updateSite(Site s);
	public void deleteSite(int id);
	public Site getSite(int id);
}
```
```xml
public class Test {
	public static void main(String[] args) {
		try {
			// 读取配置文件 mybatis-config.xml
			InputStream config = Resources.getResourceAsStream("mybatis-config.xml");
			// 根据配置文件构建SqlSessionFactory
			SqlSessionFactory ssf = new SqlSessionFactoryBuilder().build(config);
			// 通过 SqlSessionFactory 创建 SqlSession
			SqlSession ss = ssf.openSession();
			// SqlSession执行映射文件中定义的SQL，并返回映射结果
			ISite mapper = ss.getMapper(ISite.class);
			Site t = new Site(99, "zhihu", "www.zhihu.com");
			mapper.insertSite(t);
			t.setId(2);
			mapper.updateSite(t);
			mapper.deleteSite(0);
			//提交事务
			ss.commit();
			var r = mapper.getSites();
			for (var x : r)
				System.out.println(x);
			
			// 关闭 SqlSession
			ss.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
```
动态SQL

- if
- choose (when, otherwise)
- trim (where, set)
- foreach
```xml
<select id="findActiveBlogWithTitleLike" resultType="Blog">
  SELECT * FROM BLOG
  WHERE state = ‘ACTIVE’
  <if test="title != null">
    AND title like #{title}
  </if>
</select>
```



[quartz](https://github.com/quartz-scheduler/quartz)

- Scheduler 和调度程序交互的主要API
- Job 调度器调度的任务组件接口
- JobDetail Job实例，包含了该实例的执行计划和所需要的数据
- Trigger 触发器，定义了一个触发策略

```java
public class QuartzTest {
	// 你需要在start和shutdown之间执行你的任务。
    public static void main(String[] args) {

        try {
            // 从工厂中获取Scheduler示例
            Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();

            // 开始
            scheduler.start();

            // 定义Job，并将其绑定到HelloJob类中
            JobDetail job = JobBuilder.newJob(HelloJob.class)
                    .withIdentity("job1", "group1") // name 和 group
                    .usingJobData("username", "snow") // 置入JobDataMap
                    .usingJobData("age", "20")
                    .withDescription("desc-demo")
                    .build();

            // 触发Job执行，每30s执行一次，直到22：00
            Trigger trigger = TriggerBuilder.newTrigger()
                    .withIdentity("trigger1", "group1")
                    .startNow() // 立即开始
                    .withSchedule(SimpleScheduleBuilder.simpleSchedule()
                            .withIntervalInSeconds(30)
                            .repeatForever())
                    .endAt(dateOf(22, 0, 0))
                    .build();

            // 告诉 quartz 使用trigger来调度job
            scheduler.scheduleJob(job, trigger);
			// 关闭，线程终止
            scheduler.shutdown();

        } catch (SchedulerException se) {
            se.printStackTrace();
        }
    }
}

@Slf4j
@NoArgsConstructor
public class HelloJob implements Job {

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        // 从context中获取属性
        JobDetail jobDetail = context.getJobDetail();
        JobKey key = jobDetail.getKey();
        Class<? extends Job> jobClass = jobDetail.getJobClass();
        String description = jobDetail.getDescription();

        JobDataMap jobDataMap = jobDetail.getJobDataMap();
        String username = jobDataMap.getString("username");
        int age = jobDataMap.getIntValue("age");

        log.info("\nJobKey : {},\n JobClass : {},\n JobDesc : {},\n username : {},\n age : {}",
                key, jobClass.getName(), description, username, age);
    }
}
```

**SpringBoot整合**
```java
@Slf4j
public class DemoJob extends QuartzJobBean {

    @Override
    protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        String now = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now());
        log.info("当前的时间: " + now);
    }
}
```

调度器Scheduler绑定

- Bean自动配置
```java
@Configuration
public class QuartzConfig {

    private static final String ID = "SUMMERDAY";

    @Bean
    public JobDetail jobDetail1() {
        return JobBuilder.newJob(DemoJob.class)
                .withIdentity(ID + " 01")
                .storeDurably()
                .build();
    }

    @Bean
    public Trigger trigger1() {
        // 简单的调度计划的构造器
        SimpleScheduleBuilder scheduleBuilder = SimpleScheduleBuilder.simpleSchedule()
                .withIntervalInSeconds(5) // 频率
                .repeatForever(); // 次数

        return TriggerBuilder.newTrigger()
                .forJob(jobDetail1())
                .withIdentity(ID + " 01Trigger")
                .withSchedule(scheduleBuilder)
                .build();
    }
}
```

- 手动配置
```java
@Component
public class JobInit implements ApplicationRunner {

    private static final String ID = "SUMMERDAY";

    @Autowired
    private Scheduler scheduler;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        JobDetail jobDetail = JobBuilder.newJob(DemoJob.class)
                .withIdentity(ID + " 01")
                .storeDurably()
                .build();
        
        CronScheduleBuilder scheduleBuilder =
                CronScheduleBuilder.cronSchedule("0/5 * * * * ? *");
        // 创建任务触发器
        Trigger trigger = TriggerBuilder.newTrigger()
                .forJob(jobDetail)
                .withIdentity(ID + " 01Trigger")
                .withSchedule(scheduleBuilder)
                .startNow() //立即執行一次任務
                .build();
        
        // 手动将触发器与任务绑定到调度器内
        scheduler.scheduleJob(jobDetail, trigger);
    }
}
```
yml配置
```yaml
spring:
  # Quartz 的配置，对应 QuartzProperties 配置类
  quartz:
    job-store-type: memory # Job 存储器类型。默认为 memory 表示内存，可选 jdbc 使用数据库。
    auto-startup: true # Quartz 是否自动启动
    startup-delay: 0 # 延迟 N 秒启动
    wait-for-jobs-to-complete-on-shutdown: true # 应用关闭时，是否等待定时任务执行完成。默认false
    overwrite-existing-jobs: false # 是否覆盖已有 Job 的配置
    properties: # 添加 Quartz Scheduler 附加属性
      org:
        quartz:
          threadPool:
            threadCount: 25 # 线程池大小。默认为 10 。
            threadPriority: 5 # 线程优先级
            class: org.quartz.simpl.SimpleThreadPool # 线程池类型
jdbc: 使用 JDBC 的 JobStore 的时需要配置
```


