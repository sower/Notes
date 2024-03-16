---
title: Spring Boot Starter
created_at: 2023-06-24T02:32:43.000Z
updated_at: 2024-03-16T08:10:37.000Z
word_count: 3249
---  


## Bean Validation
Java Specification Requests：Java 规范提案，指向JCP(Java Community Process)提出新增一个标准化技术规范的正式请求

JSR-303 是JAVA EE 6 中的一项子规范，叫做Bean Validation。  <br />  [Hibernate Validator](https://hibernate.org/validator/) 提供了 JSR 303 规范中所有内置 constraint 的实现，除此之外还有一些附加的 constraint。

**spring-boot-starter-validation**

Jakarta Bean Validation constraints

| 名称 | 说明 |
| --- | --- |
| @Null | 被标注的元素必须为 null |
| @NotNull | 被标注的元素必须不为 null |
| @AssertTrue | 被标注的元素必须为 true |
| @AssertFalse | 被标注的元素必须为 false |
| @Min(value) | 一个数字，其值必须大于等于指定的最小值 |
| @Max(value) | 一个数字，其值必须小于等于指定的最大值 |
| @DecimalMax(value) | 一个数字，其值必须小于等于指定的最大值 |
| @DecimalMin(value) | 一个数字，其值必须大于等于指定的最小值 |
| @Size | 被标注的元素的大小必须在指定的范围内 |
| @Digits（integer，fraction） | 一个数字，其值必须在可接受的范围内；integer 指定整数精度，fraction 指定小数精度 |
| @Past | 一个过去的日期 |
| @Future | 一个将来的日期 |
| @Pattern(value) | 被标注的元素必须符合指定的正则表达式 |


Additional constraints

| @Email | 字符串，邮箱格式 |
| --- | --- |
| @NotEmpty | 集合，不为空 |
| @NotBlank | 字符串，不为空字符串 |
| @Positive | 数字，正数 |
| @PositiveOrZero | 数字，正数或0 |
| @Negative | 数字，负数 |
| @NegativeOrZero | 数字，负数或0 |
| @PastOrPresent | 过去或者现在 |
| @Normalized | 标准格式字符串 |
| @UniqueElements | 集合元素的唯一性 |
| @URL | url字符格式 |



- `@Valid` 嵌套校验
- `@Validated` 分组校验
   - @GroupSequence	按序校验
   - @GroupSequenceProvider
   - @ConvertGroup
- 自定义注解校验： 实现`ConstraintValidator`
- 跨参校验	`@SupportedValidationTarget`
- 组合校验
```java
@ConstraintComposition(AND)
@NotNull
@Pattern(regexp = ".+")
// @ReportAsSingleViolation
@Target({ METHOD, FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = { })
public @interface NotNullAndPattern {
    String message() default "{javax.validation.constraints.Pattern.message}";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

    @OverridesAttribute(constraint = Pattern.class, name = "regexp")
    String regex();
}
```
校验信息：在`ValidationMessages.properties`定义


校验器
```java
@Bean
public Validator validator(AutowireCapableBeanFactory springFactory) {
    try (ValidatorFactory factory = Validation.byProvider(HibernateValidator.class)
            .configure()
            // 快速失败
            .failFast(true)
            // 解决 SpringBoot 依赖注入问题
            .constraintValidatorFactory(new SpringConstraintValidatorFactory(springFactory))
            .buildValidatorFactory()) {
        return factory.getValidator();
    }
}
```


## [Spring Security](https://docs.spring.io/spring-security/reference/index.html)

- [SecurityContextHolder](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-securitycontextholder) - The SecurityContextHolder is where Spring Security stores the details of who is [authenticated](https://docs.spring.io/spring-security/reference/features/authentication/index.html#authentication).
- [SecurityContext](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-securitycontext) - is obtained from the SecurityContextHolder and contains the Authentication of the currently authenticated user.
- [Authentication](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-authentication) - Can be the input to AuthenticationManager to provide the credentials a user has provided to authenticate or the current user from the SecurityContext.
- [GrantedAuthority](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-granted-authority) - An authority that is granted to the principal on the Authentication (i.e. roles, scopes, etc.)
- [AuthenticationManager](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-authenticationmanager) - the API that defines how Spring Security’s Filters perform [authentication](https://docs.spring.io/spring-security/reference/features/authentication/index.html#authentication).
- [ProviderManager](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-providermanager) - the most common implementation of AuthenticationManager.
- [AuthenticationProvider](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-authenticationprovider) - used by ProviderManager to perform a specific type of authentication.
- [Request Credentials withAuthenticationEntryPoint](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-authenticationentrypoint) - used for requesting credentials from a client (i.e. redirecting to a log in page, sending a WWW-Authenticate response, etc.)
- [AbstractAuthenticationProcessingFilter](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-abstractprocessingfilter) - a base Filter used for authentication. This also gives a good idea of the high level flow of authentication and how pieces work together.


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


## [Spring Data Redis](https://spring.io/projects/spring-data-redis)

[Pubsub](https://docs.spring.io/spring-data/data-redis/docs/current/reference/html/#pubsub)



## [Redisson](https://github.com/redisson/redisson)

[**redisson-spring-boot-starter**](https://github.com/redisson/redisson/tree/master/redisson-spring-boot-starter)

[Configuration](https://github.com/redisson/redisson/wiki/2.-Configuration)

[Operations execution](https://github.com/redisson/redisson/wiki/3.-operations-execution)

### [Data serialization](https://github.com/redisson/redisson/wiki/4.-data-serialization)
| Codec class name | Description |
| --- | --- |
| org.redisson.codec.Kryo5Codec | [Kryo 5](https://github.com/EsotericSoftware/kryo) binary codec  <br />  (Android compatible) **Default codec** |
| org.redisson.codec.KryoCodec | [Kryo 4](https://github.com/EsotericSoftware/kryo) binary codec |
| org.redisson.codec.JsonJacksonCodec | [Jackson JSON](https://github.com/FasterXML/jackson)  codec.  <br />  Stores type information in @class field |
| org.redisson.codec.TypedJsonJacksonCodec | Jackson JSON codec which doesn't store type id (@class field) during encoding and doesn't require it for decoding |
| org.redisson.codec.AvroJacksonCodec | [Avro](http://avro.apache.org/) binary json codec |
| org.redisson.codec.ProtobufCodec | [Protobuf](https://github.com/protocolbuffers/protobuf) codec |
| org.redisson.codec.SmileJacksonCodec | [Smile](http://wiki.fasterxml.com/SmileFormatSpec) binary json codec |
| org.redisson.codec.CborJacksonCodec | [CBOR](http://cbor.io/) binary json codec |
| org.redisson.codec.MsgPackJacksonCodec | [MsgPack](http://msgpack.org/) binary json codec |
| org.redisson.codec.IonJacksonCodec | [Amazon Ion](https://amzn.github.io/ion-docs/) codec |
| org.redisson.codec.SerializationCodec | JDK Serialization binary codec |
| org.redisson.codec.LZ4Codec | [LZ4](https://github.com/jpountz/lz4-java) compression codec.  <br />  Uses Kryo5Codec for serialization by default |
| org.redisson.codec.SnappyCodecV2 | Snappy compression codec based on [snappy-java](https://github.com/xerial/snappy-java) project.  <br />  Uses Kryo5Codec for serialization by default |
| org.redisson.client.codec.StringCodec | String codec |
| org.redisson.client.codec.LongCodec | Long codec |
| org.redisson.client.codec.ByteArrayCodec | Byte array codec |
| org.redisson.codec.CompositeCodec | Allows to mix different codecs as one |



[Data partitioning (sharding)](https://github.com/redisson/redisson/wiki/5.-data-partitioning-(sharding))

### [Distributed objects](https://github.com/redisson/redisson/wiki/6.-distributed-objects)

- [Object holder](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#61-object-holder)
```java
RBucket<AnyObject> bucket = redisson.getBucket("anyObject");

bucket.set(new AnyObject(1));
AnyObject obj = bucket.get();

bucket.trySet(new AnyObject(3));
bucket.compareAndSet(new AnyObject(4), new AnyObject(5));
bucket.getAndSet(new AnyObject(6));
```

- [JSON object holder](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#615-json-object-holder)
- [Binary stream holder](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#62-binary-stream-holder)
- [Geospatial holder](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#63-geospatial-holder)
- [BitSet](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#64-bitset)
- [AtomicLong](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#65-atomiclong)
- [AtomicDouble](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#66-atomicdouble)
- [LongAdder](https://github.com/redisson/redisson/wiki/6.-distributed-objects#610-longadder)
- [DoubleAdder](https://github.com/redisson/redisson/wiki/6.-distributed-objects#611-doubleadder)
- [PublishSubscribe](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#67-topic)
```java
RTopic topic = redisson.getTopic("myTopic");
int listenerId = topic.addListener(SomeObject.class, new MessageListener<SomeObject>() {
    @Override
    public void onMessage(String channel, SomeObject message) {
        //...
    }
});

// subscribe to all topics by `topic*` pattern
RPatternTopic patternTopic = redisson.getPatternTopic("topic*");
int listenerId = patternTopic.addListener(Message.class, new PatternMessageListener<Message>() {
    @Override
    public void onMessage(String pattern, String channel, Message msg) {
        //...
    }
});

// in other thread or JVM
RTopic topic = redisson.getTopic("myTopic");
long clientsReceivedMessage = topic.publish(new SomeObject());
```

- [Reliable PublishSubscribe](https://github.com/redisson/redisson/wiki/6.-distributed-objects#613-reliable-topic)
```java
RReliableTopic topic = redisson.getReliableTopic("anyTopic");
topic.addListener(SomeObject.class, new MessageListener<SomeObject>() {
    @Override
    public void onMessage(CharSequence channel, SomeObject message) {
        //...
    }
});

// in other thread or JVM
RReliableTopic topic = redisson.getReliableTopic("anyTopic");
long subscribersReceivedMessage = topic.publish(new SomeObject());
```

- [Id generator](https://github.com/redisson/redisson/wiki/6.-distributed-objects#614-id-generator)
- [Bloom filter](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#68-bloom-filter)
```java
RBloomFilter<SomeObject> bloomFilter = redisson.getBloomFilter("sample");
// initialize bloom filter with 
// expectedInsertions = 55000000
// falseProbability = 0.03
bloomFilter.tryInit(55000000L, 0.03);

bloomFilter.add(new SomeObject("field1Value", "field2Value"));
bloomFilter.add(new SomeObject("field5Value", "field8Value"));

bloomFilter.contains(new SomeObject("field1Value", "field8Value"));
bloomFilter.count();
```

- [HyperLogLog](https://github.com/redisson/redisson/wiki/6.-distributed-objects/#68-bloom-filter)
- [RateLimiter](https://github.com/redisson/redisson/wiki/6.-distributed-objects#612-ratelimiter)
```java
RRateLimiter limiter = redisson.getRateLimiter("myLimiter");
// Initialization required only once.
// 5 permits per 2 seconds
limiter.trySetRate(RateType.OVERALL, 5, 2, RateIntervalUnit.SECONDS);

// acquire 3 permits or block until they became available       
limiter.acquire(3);
```



### [Distributed collections](https://github.com/redisson/redisson/wiki/7.-distributed-collections)

- [Map](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#71-map)
```java
RMap<String, SomeObject> map = redisson.getMap("anyMap");
SomeObject prevObject = map.put("123", new SomeObject());
SomeObject currentObject = map.putIfAbsent("323", new SomeObject());
SomeObject obj = map.remove("123");

// use fast* methods when previous value is not required
map.fastPut("a", new SomeObject());
map.fastPutIfAbsent("d", new SomeObject());
map.fastRemove("b");

RFuture<SomeObject> putAsyncFuture = map.putAsync("321");
RFuture<Void> fastPutAsyncFuture = map.fastPutAsync("321");

map.fastPutAsync("321", new SomeObject());
map.fastRemoveAsync("321");
```

- [Multimap](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#72-multimap)
- [Set](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#73-set)
- [SortedSet](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#74-sortedset)
- [ScoredSortedSet](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#75-scoredsortedset)
- [List](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#77-list)
- [Queue](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#78-queue)
- [Deque](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#79-deque)
- [Blocking Queue](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#710-blocking-queue)
- [Bounded Blocking Queue](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#711-bounded-blocking-queue)
- [Blocking Deque](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#712-blocking-deque)
- [Delayed Queue](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#714-delayed-queue)
- [Priority Queue](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#716-priority-queue)
- [Transfer Queue](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#722-transfer-queue)
- [Stream](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#720-stream)
- [Time Series](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#723-time-series)
- [Ring Buffer](https://github.com/redisson/redisson/wiki/7.-distributed-collections/#721-ring-buffer)

### [Distributed locks and synchronizers](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers)

- [Lock](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#81-lock)
```java
RLock lock = redisson.getLock("myLock");

// traditional lock method
lock.lock();

// or acquire lock and automatically unlock it after 10 seconds
lock.lock(10, TimeUnit.SECONDS);

// or wait for lock aquisition up to 100 seconds 
// and automatically unlock it after 10 seconds
boolean res = lock.tryLock(100, 10, TimeUnit.SECONDS);
if (res) {
   try {
     ...
   } finally {
       lock.unlock();
   }
}
```

- [Spin Lock](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#89-spin-lock)
- [Fenced Lock](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#810-fenced-lock)
- [Fair Lock](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#82-fair-lock)
- [MultiLock](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#83-multilock)
- [ReadWriteLock](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#85-readwritelock)
- [Semaphore](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#86-semaphore)
- [PermitExpirableSemaphore](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#87-permitexpirablesemaphore)
- [CountDownLatch](https://github.com/redisson/redisson/wiki/8.-distributed-locks-and-synchronizers/#88-countdownlatch).

  <br />   

[Distributed services](https://github.com/redisson/redisson/wiki/9.-distributed-services)

- [Remote service](https://github.com/redisson/redisson/wiki/9.-distributed-services/#91-remote-service)
- [Live Object service](https://github.com/redisson/redisson/wiki/9.-distributed-services/#92-live-object-service)
- [Executor service](https://github.com/redisson/redisson/wiki/9.-distributed-services/#93-distributed-executor-service)
- [Scheduler service](https://github.com/redisson/redisson/wiki/9.-distributed-services/#94-distributed-scheduled-executor-service)
- [MapReduce service](https://github.com/redisson/redisson/wiki/9.-distributed-services/#95-distributed-mapreduce-service)
- [RediSearch service](https://github.com/redisson/redisson/wiki/9.-distributed-services/#96-redisearch-service)



[Additional features](https://github.com/redisson/redisson/wiki/10.-additional-features)

- [Operations with Redis nodes](https://github.com/redisson/redisson/wiki/10.-additional-features/#101-operations-with-redis-nodes)
- [References to Redisson objects](https://github.com/redisson/redisson/wiki/10.-additional-features/#102-references-to-redisson-objects)
- [Execution batches of commands](https://github.com/redisson/redisson/wiki/10.-additional-features/#103-execution-batches-of-commands)
- [Transactions](https://github.com/redisson/redisson/wiki/10.-additional-features/#104-transactions)
- [XA Transactions](https://github.com/redisson/redisson/wiki/10.-additional-features/#105-xa-transactions)
- [Scripting](https://github.com/redisson/redisson/wiki/10.-additional-features/#106-scripting)
- [Functions](https://github.com/redisson/redisson/wiki/10.-additional-features/#107-functions)
- [Low level Redis client](https://github.com/redisson/redisson/wiki/10.-additional-features/#108-low-level-redis-client)

[Redis commands mapping](https://github.com/redisson/redisson/wiki/11.-Redis-commands-mapping)

[Standalone node](https://github.com/redisson/redisson/wiki/12.-Standalone-node)

[Tools](https://github.com/redisson/redisson/wiki/13.-Tools)

[Integration with frameworks](https://github.com/redisson/redisson/wiki/14.-Integration-with-frameworks)


## [Spring Cache](https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#cache)

spring-boot-starter-cache

| 名称 | 解释 |
| --- | --- |
| Cache | 缓存接口，定义缓存操作。实现有：RedisCache、EhCacheCache、ConcurrentMapCache等 |
| CacheManager | 缓存管理器，管理各种缓存（cache）组件 |
| @Cacheable | 主要针对方法配置，能够根据方法的请求参数对其进行缓存 |
| @CacheEvict | 清空缓存 |
| @CachePut | 保证方法被调用，又希望结果被缓存。与@Cacheable区别在于是否每次都调用方法，常用于更新 |
| @Caching | 让一个类或方法上定义多个cache相关的注解 |
| @EnableCaching | 开启基于注解的缓存 |
| keyGenerator | 缓存数据时key生成策略 |
| serialize | 缓存数据时value序列化策略 |
| @CacheConfig | 统一配置本类的缓存注解的属性 |


SpEL上下文数据

| 名称 | 位置 | 描述 | 示例 |
| --- | --- | --- | --- |
| methodName | root对象 | 当前被调用的方法名 | #root.methodname |
| method | root对象 | 当前被调用的方法 | #root.method.name |
| target | root对象 | 当前被调用的目标对象实例 | #root.target |
| targetClass | root对象 | 当前被调用的目标对象的类 | #root.targetClass |
| args | root对象 | 当前被调用的方法的参数列表 | #root.args[0] |
| caches | root对象 | 当前方法调用使用的缓存列表 | #root.caches[0].name |
| Argument Name | 执行上下文 | 当前被调用的方法的参数，如findArtisan(Artisan artisan)，可以通过#artsian.id获得参数 | #artsian.id |
| result | 执行上下文 | 法执行后的返回值（仅当方法执行后的判断有效，如 unless cacheEvict的beforeInvocation=false） | #result |




## [Messaging](https://docs.spring.io/spring-boot/docs/current/reference/html/messaging.html#messaging)


## Spring Websocket


### javax.websocket

- @ServerEndpoint
- @ClientEndpoint
```java
@Configuration(proxyBeanMethods = false)
public class JavaxWebSocketConfiguration {

    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}


@Component
@ServerEndpoint("/websocket/{type}")
public class WebSocketServer {

    @OnOpen
    public void onOpen(Session session, EndpointConfig config,
                       @PathParam(value = "type") String type) {
        //连接建立
    }

    @OnClose
    public void onClose(Session session, CloseReason reason) {
        //连接关闭
    }

    @OnMessage
    public void onMessage(Session session, String message) {
        //接收文本信息
    }

    @OnMessage
    public void onMessage(Session session, PongMessage message) {
        //接收pong信息
    }

    @OnMessage
    public void onMessage(Session session, ByteBuffer message) {
        //接收二进制信息，也可以用byte[]接收
    }

    @OnError
    public void onError(Session session, Throwable e) {
        //异常处理
    }
}
```

### spring-boot-starter-websocket

```java
@Configuration
@EnableWebSocket
public class ServletWebSocketServerConfigurer implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(@NonNull WebSocketHandlerRegistry registry) {
        registry
            //添加处理器到对应的路径
            .addHandler(new ServletWebSocketServerHandler(), "/websocket")
            //添加握手拦截器
            .addInterceptors(new ServletWebSocketHandshakeInterceptor())
            .setAllowedOrigins("*");
    }
    
    public static class ServletWebSocketHandshakeInterceptor implements HandshakeInterceptor {

        @Override
        public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
            //握手之前
            //继续握手返回true, 中断握手返回false
            return false;
        }

        @Override
        public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {
            //握手之后
        }
    }
}


public class ServletWebSocketServerHandler implements WebSocketHandler {

    @Override
    public void afterConnectionEstablished(@NonNull WebSocketSession session) throws Exception {
        //连接建立
    }

    @Override
    public void handleMessage(@NonNull WebSocketSession session, @NonNull WebSocketMessage<?> message) throws Exception {
        //接收消息
    }

    @Override
    public void handleTransportError(@NonNull WebSocketSession session, @NonNull Throwable exception) throws Exception {
        //异常处理
    }

    @Override
    public void afterConnectionClosed(@NonNull WebSocketSession session, @NonNull CloseStatus closeStatus) throws Exception {
        //连接关闭
    }

    @Override
    public boolean supportsPartialMessages() {
        //是否支持接收不完整的消息
        return false;
    }
}
```

支持

- [Simple (or Streaming) Text Orientated Messaging Protocol](https://stomp.github.io/index.html)	简单(流)文本定向消息协议
- [SockJS](https://github.com/sockjs/sockjs-protocol)


## [Spring Boot Actuator](https://github.com/spring-projects/spring-boot/tree/v3.2.3/spring-boot-project/spring-boot-actuator)



## [Spring Data REST](https://spring.io/projects/spring-data-rest)

Annoation

- @RepositoryRestResource
- @RestResource(exported = false)
- @Projection
- @RepositoryEventHandler
- @BasePathAwareController


**Events**

- BeforeCreateEvent
- AfterCreateEvent
- BeforeSaveEvent
- AfterSaveEvent
- BeforeLinkSaveEvent
- AfterLinkSaveEvent
- BeforeDeleteEvent
- AfterDeleteEvent


## [Quartz](https://github.com/quartz-scheduler/quartz)

- Scheduler 和调度程序交互的主要API
- Job 调度器调度的任务组件接口
- JobDetail Job实例，包含了该实例的执行计划和所需要的数据
- Trigger 触发器，定义了一个触发策略

| 触发器 | 适用场景 |
| --- | --- |
| SimpleTrigger | 简单触发器，适用于 按指定的时间间隔执行多少次任务的情况 |
| CronTrigger | Cron触发器，通过Cron表达式来控制任务的执行时间 |
| DailyTimeIntervalTrigger | 日期触发器，在给定的时间范围内或指定的星期内以秒、分钟或者小时为周期进行重复的情况 |
| CalendarIntervalTrigger | 日历触发器，根据一个给定的日历时间进行重复 |


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


spring-boot-starter-quartz
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

  @Bean
  public JobDetail jobDetail1() {
    return JobBuilder.newJob(DemoJob.class)
        .withIdentity("demo 01")
        .withDescription("demo job test") // 任务描述
        .storeDurably() // 每次任务执行后进行存储
        .build();
  }

  @Bean
  public Trigger trigger1() {
    // 简单的调度计划的构造器
    SimpleScheduleBuilder scheduleBuilder = SimpleScheduleBuilder.simpleSchedule()
        .withIntervalInSeconds(5) // 频率
        .repeatForever(); // 次数

    return TriggerBuilder.newTrigger()
        .forJob(jobDetail1()) // 绑定工作任务
        .withIdentity("demo 01 Trigger")
        .withSchedule(scheduleBuilder)
        .build();
  }
}
```

- 手动配置
```java
@Component
public class JobInit implements ApplicationRunner {

    private static final String ID = "DEMO";

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

**数据库方式存储任务信息**  <br />  yml配置
```yaml
spring:
  # Quartz 的配置，对应 QuartzProperties 配置类
  quartz:
    job-store-type: jdbc # Job 存储器类型。默认为 memory 表示内存
    auto-startup: true # Quartz 是否自动启动
    startup-delay: 0 # 延迟 N 秒启动
    wait-for-jobs-to-complete-on-shutdown: true # 应用关闭时，是否等待定时任务执行完成。默认false
    overwrite-existing-jobs: false # 是否覆盖已有 Job 的配置

    # 添加 Quartz Scheduler 附加属性
    properties:
      org:
        quartz:
          scheduler:
            instanceName: clusteredScheduler
            instanceId: AUTO
          jobStore:
            class: org.springframework.scheduling.quartz.LocalDataSourceJobStore
            driverDelegateClass: org.quartz.impl.jdbcjobstore.StdJDBCDelegate
            tablePrefix: QRTZ_
            isClustered: true
            clusterCheckinInterval: 10000
            useProperties: false
          threadPool:
            class: org.quartz.simpl.SimpleThreadPool # 线程池类型
            threadCount: 10  # 线程池大小 默认为 10
            threadPriority: 5
            threadsInheritContextClassLoaderOfInitializingThread: true
```

| 表名 | 解释 |
| --- | --- |
| QRTZ_CALENDARS | 以 Blob 类型存储 Quartz 的 Calendar 信息 |
| QRTZ_CRON_TRIGGERS | 存储 Cron Trigger，包括 Cron 表达式和时区信息 |
| QRTZ_FIRED_TRIGGERS | 存储与已触发的 Trigger 相关的状态信息，以及相联 Job 的执行信息 |
| QRTZ_PAUSED_TRIGGER_GRPS | 存储已暂停的 Trigger 组的信息 |
| QRTZ_SCHEDULER_STATE | 存储少量的有关 Scheduler 的状态信息，和别的 Scheduler 实例(假如是用于一个集群中) |
| QRTZ_LOCKS | 存储程序的悲观锁的信息 |
| QRTZ_JOB_DETAILS | 存储每一个已配置的 Job 的详细信息 |
| QRTZ_SIMPLE_TRIGGERS | 存储简单的 Trigger，包括重复次数，间隔，以及已触的次数 |
| QRTZ_BLOG_TRIGGERS | Trigger 作为 Blob 类型存储(用于 Quartz 用户用 JDBC 创建他们自己定制的 Trigger 类型，JobStore 并不知道如何存储实例的时候) |
| QRTZ_TRIGGER_LISTENERS | 存储已配置的 TriggerListener 的信息 |
| QRTZ_TRIGGERS | 存储已配置的 Trigger 的信息 |


