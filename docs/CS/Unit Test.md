---
title: Unit Test
created_at: 2023-02-18T05:29:41.000Z
updated_at: 2023-02-18T07:05:05.000Z
word_count: 1243
---  
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


## [AssertJ](https://assertj.github.io/doc/)
流式断言
```java
public void assertjDemo() {
  assertThat("".isEmpty()).isTrue();

  assertThat(Arrays.asList("1", "2", "3")).startsWith("1").doesNotContainNull()
      .containsSequence("2", "3").isNotEmpty();

  assertThat(someFile)
      .exists()
      .isFile()
      .canRead()
      .canWrite();
}
```

## [Hamcrest](https://github.com/hamcrest/JavaHamcrest)
A library of matcher objects (also known as constraints or predicates).

**Core**

- anything - always matches, useful if you don't care what the object under test is
- describedAs - decorator to adding custom failure description
- is - decorator to improve readability

**Logical**

- allOf - matches if all matchers match, short circuits (like Java &&)
- anyOf - matches if any matchers match, short circuits (like Java ||)
- not - matches if the wrapped matcher doesn't match and vice versa

**Object**

- equalTo - test object equality using Object.equals
- hasToString - test Object.toString
- instanceOf, isCompatibleType - test type
- notNullValue, nullValue - test for null
- sameInstance - test object identity

**Beans**

- hasProperty - test JavaBeans properties

**Collections**

- array - test an array's elements against an array of matchers
- hasEntry, hasKey, hasValue - test a map contains an entry, key or value
- hasItem, hasItems - test a collection contains elements
- hasItemInArray - test an array contains an element

**Number**

- closeTo - test floating point values are close to a given value
- greaterThan, greaterThanOrEqualTo, lessThan, lessThanOrEqualTo - test ordering

**Text**

- equalToIgnoringCase - test string equality ignoring case
- equalToIgnoringWhiteSpace - test string equality ignoring differences in runs of whitespace
- containsString, endsWith, startsWith - test string matching

```java
@Test
public void hamcrestDemo() {
  // allOf: 所有条件都必须满足，相当于&&
  MatcherAssert.assertThat("myName", allOf(startsWith("my"), containsString("Name")));
  // either: 两者之一
  MatcherAssert.assertThat("myName", either(equalToIgnoringCase("my")).or(endsWith("Name")));
  // everyItem: 每个元素都需满足特定条件
  MatcherAssert.assertThat(Arrays.asList("my", "mine"), everyItem(startsWith("m")));
  // hasItems: 包含多个元素
  MatcherAssert.assertThat(Arrays.asList("my", "mine", "your"), hasItems("your", "my"));
  // is: is(equalTo(x))或is(instanceOf(clazz.class))的简写
  MatcherAssert.assertThat("myName", is("myName"));
  // anything(): 任何情况下，都匹配正确
  MatcherAssert.assertThat("myName", anything());
  MatcherAssert.assertThat("123", is(notNullValue()));

  MatcherAssert.assertThat(2, greaterThanOrEqualTo(2));

  // emptyArray: 空数组
  MatcherAssert.assertThat(new String[0], emptyArray());

  MatcherAssert.assertThat("myName", in(Arrays.asList("myName", "yourName")));
  MatcherAssert.assertThat("myName", is(in(Arrays.asList("myName", "yourName"))));

  // Map匹配
  Map<String, String> myMap = new HashMap<>();
  myMap.put("Name", "john");
  // hasEntry: key && value匹配
  MatcherAssert.assertThat(myMap, hasEntry("Name", "john"));
  // hasKey: key匹配
  MatcherAssert.assertThat(myMap, hasKey(equalTo("Name")));
  // hasValue: value匹配
  MatcherAssert.assertThat(myMap, hasValue(equalTo("john")));
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



## [Spring Test](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#integration-testing) 

- [General Testing Utilities](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#unit-testing-utilities)
- [Spring MVC Testing Utilities](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#unit-testing-spring-mvc)

- [Annotations](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#integration-testing-annotations)
   - [Spring Testing Annotations](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#integration-testing-annotations-spring)
   - [Standard Annotation Support](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#integration-testing-annotations-standard)
   - [Spring JUnit 4 Testing Annotations](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#integration-testing-annotations-junit4)
   - [Spring JUnit Jupiter Testing Annotations](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#integration-testing-annotations-junit-jupiter)
   - [Meta-Annotation Support for Testing](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#integration-testing-annotations-meta)

- [Spring TestContext Framework](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#testcontext-framework)
- [MockMvc](https://docs.spring.io/spring-framework/docs/5.3.25/reference/html/testing.html#spring-mvc-test-framework)
   - MockMvcBuilders.*
   - MockMvcRequestBuilders.*
   - MockMvcResultMatchers.*
   - MockMvcResultHandlers.*


### [Spring Boot Test](https://docs.spring.io/spring-boot/docs/2.7.8/reference/html/features.html#features.testing)

```java
@SpringBootTest
@AutoConfigureMockMvc
class MyMockMvcTests {

    @Test
    void testWithMockMvc(@Autowired MockMvc mvc) throws Exception {
        mockMvc.perform(post("/persons/{id}", 35))
            .andDo(print())
            .andExpect(status().isOk())
            .andExpect(content().string("Hello World"));
    }

    // If Spring WebFlux is on the classpath, you can drive MVC tests with a WebTestClient
    @Test
    void testWithWebTestClient(@Autowired WebTestClient webClient) {
        webClient
                .get().uri("/")
                .exchange()
                .expectStatus().isOk()
                .expectBody(String.class).isEqualTo("Hello World");
    }

}
```

```java
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserVehicleController.class)
class MyControllerTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private UserVehicleService userVehicleService;

    @Test
    void testExample() throws Exception {
        given(this.userVehicleService.getVehicleDetails("sboot"))
            .willReturn(new VehicleDetails("Honda", "Civic"));
        this.mvc.perform(get("/sboot/vehicle").accept(MediaType.TEXT_PLAIN))
            .andExpect(status().isOk())
            .andExpect(content().string("Honda Civic"));
    }

}
```

```java
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class MyRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository repository;

    @Test
    void testExample() {
        this.entityManager.persist(new User("sboot", "1234"));
        User user = this.repository.findByUsername("sboot");
        assertThat(user.getUsername()).isEqualTo("sboot");
        assertThat(user.getEmployeeNumber()).isEqualTo("1234");
    }

}
```



[JSONassert](https://github.com/skyscreamer/JSONassert): An assertion library for JSON.  <br />  [JsonPath](https://github.com/jayway/JsonPath): XPath for JSON.

