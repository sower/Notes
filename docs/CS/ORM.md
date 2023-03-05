---
title: ORM
created_at: 2023-03-05T10:49:15.000Z
updated_at: 2023-03-05T11:21:36.000Z
word_count: 3732
---  
## —— ORM ——
### [Hibernate](http://hibernate.org/orm/)

#### HQL
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





### [MyBatis](https://mybatis.org/mybatis-3/zh/index.html)
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
```java
public interface ISite {
    public List<Site>getSites();
    public void insertSite(Site s);
    public void updateSite(Site s);
    public void deleteSite(int id);
    public Site getSite(int id);
}
```
```java
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



## [JPA](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
Java Persistence API（Java 持久化 API）：定义了对象关系映射（ORM）以及实体对象持久化的标准接口  <br />  Spirng Data JPA 是 Spring 提供的一套简化 JPA 开发的框架，可以理解为对 JPA 规范的再次封装抽象，底层还是使用了 Hibernate 的 JPA 技术实现
### 注解
javax.persistence

- 实体
   - @Entity：表示该类是一个实体类
   - @MappedSuperclass
   - @Table(name)：指定该类对应数据库中的表名，如果类名和数据库表名符合驼峰及下划线规则，可省略
   - @SecondaryTable(name , pkJoinColumns = @PrimaryKeyJoinColumn(name ))
- 主键
   - @Id：指定该属性为表的主键
   - @IdClass：复合主键
   - @GeneratedValue(strategy, generator)：主键生成策略，如 @GeneratedValue(strategy = GenerationType.IDENTITY)，依赖于数据库递增的策略
   - @GenericGenerator	自定义主键生成策略
      - native: 将主键的生成工作交由数据库完成，对于 oracle 采用 Sequence 方式，对于MySQL 和 SQL Server 采用identity（自增主键生成机制）
      - org.hibernate.id.UUIDGenerator: 采用128位的uuid算法生成主键，uuid被编码为一个32位16进制数字的字符串
      - assigned: 在插入数据的时候主键由程序处理。等同于JPA中的AUTO

- 映射
   - @Column(name, nullable, length, insertable, updatable)：定义属性和表的映射关系
   - @JoinTable(name)、@JoinColumn(name, referencedColumnName)
   - @Enumerated
   - @Convert(converter)：指定使用的转换器（自定义转换器实现 `AttributeConverter<X,Y>`）
   - @Version	可用于乐观锁并发更新

- 关系
   - @OneToOne、@OneToMany、@ManyToOne、@ManyToMany
      - CascadeType.MERGE 级联更新
      - CascadeType.PERSIST 级联保存
      - CascadeType.REFRESH 级联刷新
      - CascadeType.REMOVE 级联删除
      - CascadeType.ALL 级联上述4种操作
   - @OrderBy	对集合排序
   - @NamedEntityGraph(name, attributeNodes = {@NamedAttributeNode()})	命名实体图
   - @EntityGraph(value, type=EntityGraphType.FETCH)

spring-data-commons

- `@Query`：自定义语句查询
- `@Modifying`：自定义语句查询涉及到修改、删除时需要加上此注解
- `@Transient`：属性不被持久化
- @CreatedBy、@CreatedDate、@LastModifiedBy、@LastModifiedDate
- @EntityListeners(AuditingEntityListener.class)
- @NoRepositoryBean

Hibernate

- org.hibernate.annotations
- @CreationTimestamp、@UpdateTimestamp
- @Type(type、parameters)

### 操作数据

- 添加依赖 spring-boot-starter-data-jpa
- @EnableJpaRepositories：启用 JPA 编程
- 继承 `JpaRepository<T, ID>`
```java
public interface CrudRepository<T, ID> extends Repository<T, ID> {
  <S extends T> S save(S entity);

  <S extends T> Iterable<S> saveAll(Iterable<S> entities);

  Optional<T> findById(ID id);

  boolean existsById(ID id);

  Iterable<T> findAll();

  Iterable<T> findAllById(Iterable<ID> ids);

  long count();

  void deleteById(ID id);

  void delete(T entity);

  void deleteAllById(Iterable<? extends ID> ids);

  void deleteAll(Iterable<? extends T> entities);

  void deleteAll();
}

public interface PagingAndSortingRepository<T, ID> extends CrudRepository<T, ID> {
  Iterable<T> findAll(Sort sort);

  Page<T> findAll(Pageable pageable);
}

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


// 动态查询
public interface JpaSpecificationExecutor<T> {
  Optional<T> findOne(@Nullable Specification<T> spec);

  List<T> findAll(@Nullable Specification<T> spec);

  Page<T> findAll(@Nullable Specification<T> spec, Pageable pageable);

  List<T> findAll(@Nullable Specification<T> spec, Sort sort);

  long count(@Nullable Specification<T> spec);

  boolean exists(Specification<T> spec);
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
| Not | findByLastnameNot | … where x.lastname `<> ?1` |
| In | findByAgeIn(`Collection<Age>` ages) | … where x.age in ?1 |
| NotIn | findByAgeNotIn(`Collection<Age>` ages) | … where x.age not in ?1 |
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
| …First`<number>`…, …Top`<number>`… | Limit the query results to the first `<number>` of results. This keyword can occur in any place of the subject between find (and the other keywords) and by. |
| …Distinct… | Use a distinct query to return only unique results. Consult the store-specific documentation whether that feature is supported. This keyword can occur in any place of the subject between find (and the other keywords) and by. |


**Query return types**

| **Return type** | **Description** |
| --- | --- |
| void | Denotes no return value. |
| Primitives | Java primitives. |
| Wrapper types | Java wrapper types. |
| T | A unique entity. Expects the query method to return one result at most. If no result is found, null is returned. More than one result triggers an IncorrectResultSizeDataAccessException. |
| `Iterator<T>` | An Iterator. |
| `Collection<T>` | A Collection. |
| `List<T>` | A List. |
| `Optional<T>` | A Java 8 or Guava Optional.  |
| `Option<T>` | Either a Scala or Vavr Option type. Semantically the same behavior as Java 8’s Optional, described earlier. |
| `Stream<T>` | A Java 8 Stream. |
| `Streamable<T>` | A convenience extension of Iterable that directy exposes methods to stream, map and filter results, concatenate them etc. |
| Types that implement Streamable and take a Streamable constructor or factory method argument | Types that expose a constructor or ….of(…)/….valueOf(…) factory method taking a Streamable as argument.  |
| Vavr Seq, List, Map, Set | Vavr collection types. See [Support for Vavr Collections](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.collections-and-iterables.vavr) for details. |
| `Future<T>` | Expects a method to be annotated with @Async and requires Spring’s asynchronous method execution capability to be enabled. |
| `CompletableFuture<T>` | Expects a method to be annotated with @Async and requires Spring’s asynchronous method execution capability to be enabled. |
| ListenableFuture | A org.springframework.util.concurrent.ListenableFuture. Expects a method to be annotated with @Async and requires Spring’s asynchronous method execution capability to be enabled. |
| `Slice<T>` | A sized chunk of data with an indication of whether there is more data available. Requires a Pageable method parameter. |
| `Page<T>` | A Slice with additional information, such as the total number of results. Requires a Pageable method parameter. |
| `GeoResult<T>` | A result entry with additional information, such as the distance to a reference location. |
| `GeoResults<T>` | A list of `GeoResult<T>` with additional information, such as the average distance to a reference location. |
| `GeoPage<T>` | A Page with `GeoResult<T>`, such as the average distance to a reference location. |



**示例**  <br />  数据库基础配置
```yaml
spring:
  jpa:
    hibernate:
      naming:
        physical-strategy: org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
      # 自动创建、更新、验证数据库表结构
      ddl-auto: update
      
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
    org.hibernate.SQL: debug
    org.hibernate.engine.QueryParameters: debug
    org.hibernate.engine.query.HQLQueryPlan: debug
    org.hibernate.type.descriptor.sql.BasicBinder: trace
```
ddl-auto

- none	不指定数据库初始化模式
- create	每次启动删除并重新创建数据库
- create-drop	每次程序结束的时会清空表
- validate	检查数据库中的表与实体类是否匹配，不匹配报错
- update	每次运行程序，新建表或更新表结构，但是表内有数据不会被清空

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

### 审计 Auditing
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


// 实现AuditorAware
@Configuration
@EnableJpaAuditing
public class JpaAuditingConfiguration {

  @Bean
  public AuditorAware<String> auditorProvider() {
    return () -> Optional.of("system");
  }

}
```


## [Druid](https://github.com/alibaba/druid)
数据库连接池，提供强大的监控和扩展功能  <br />  web: [http://localhost/druid](http://localhost/demo/druid)

druid-spring-boot-starter
```yaml
spring:
  datasource:
    druid:
      db-type: com.alibaba.druid.pool.DruidDataSource
      driverClassName: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://${DB_HOST:localhost}:${DB_PORT:3306}/${DB_NAME:web}?serverTimezone=Asia/Shanghai&characterEncoding=utf8&useSSL=false
      username: ${DB_USER:root}
      password: ${DB_PWD:mysql8}
      # 初始连接数
      initial-size: 5
      # 最小连接数
      min-idle: 15
      # 最大连接数
      max-active: 30
      # 超时时间(以秒数为单位)
      remove-abandoned-timeout: 180
      # 获取连接超时时间
      max-wait: 3000
      # 连接有效性检测时间
      time-between-eviction-runs-millis: 60000
      # 连接在池中最小生存的时间
      min-evictable-idle-time-millis: 300000
      # 连接在池中最大生存的时间
      max-evictable-idle-time-millis: 900000
      # 指明连接是否被空闲连接回收器(如果有)进行检验.如果检测失败,则连接将被从池中去除
      test-while-idle: true
      # 指明是否在从池中取出连接前进行检验,如果检验失败, 则从池中去除连接并尝试取出另一个
      test-on-borrow: true
      # 是否在归还到池中前进行检验
      test-on-return: false
      # 检测连接是否有效
      validation-query: select 1
      # 配置监控统计 WebStatFilter（StatFilter监控器中的Web模板）
      web-stat-filter:
        enabled: true # 开启 WebStatFilter，即开启监控功能中的 Web 监控功能
        url-pattern: /* # 映射地址，即统计指定地址的web请求
        exclusions: '*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*' # 不统计的web请求，如下是不统计静态资源及druid监控页面本身的请求
        session-stat-enable: true # 是否启用session统计
        session-stat-max-count: 10 # session统计的最大个数，默认是1000。当统计超过这个数，只统计最新的
        principal-session-name: userName # 所存用户信息的serssion参数名。Druid会依照此参数名读取相应session对应的用户名记录下来（在监控页面可看到）。如果指定参数不是基础数据类型，将会自动调用相应参数对象的toString方法来取值
        principal-cookie-name: userName # 与上类似，但这是通过Cookie名取到用户信息
        profile-enable: true # 监控单个url调用的sql列表
      # StatViewServlet监控器。开启后，访问http://域名/druid/index.html
      stat-view-servlet:
        enabled: true
        # 监控后台账号和密码
        login-password: admin
        login-username: admin
        url-pattern: /druid/*
        reset-enable: false
        allow: 127.0.0.1,192.168.1.0/24 # 监控页面访问白名单。默认为127.0.0.1。支持子网掩码
        deny: 4.4.4.4 # 监控页面访问黑名单
      filter:
        stat:
          enabled: true
          # 记录慢SQL
          log-slow-sql: true
          slow-sql-millis: 1000
          merge-sql: true
        wall:
enabled: true  # 开启SQL防火墙功能
          config:
            multi-statement-allow: true
select-allow: true # 允许执行Select查询操作
delete-allow: false # 不允许执行delete操作
create-table-allow: false # 不允许创建表

```






## [h2database](https://github.com/h2database/h2database)
一个用Java开发的嵌入式数据库，本身只是一个类库
