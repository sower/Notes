
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


# System

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



# Collections
![](./assets/1648980617193-da03ea44-e27e-480e-86e0-e043e2b95f87.gif)  <br />  Iterable 和 Iterator
```java
public interface Iterator<E> {

    boolean hasNext();

    E next();

    default void remove() {
        throw new UnsupportedOperationException("remove");
    }

    default void forEachRemaining(Consumer<? super E> action) {
        Objects.requireNonNull(action);
        while (hasNext())
            action.accept(next());
    }
}
```
```java
public interface Iterable<T> {

    Iterator<T> iterator();

    default void forEach(Consumer<? super T> action) {
        Objects.requireNonNull(action);
        for (T t : this) {
            action.accept(t);
        }
    }

    default Spliterator<T> spliterator() {
        return Spliterators.spliteratorUnknownSize(iterator(), 0);
    }
}
```


## Interface Collection

- 增加
   1. boolean add(Object o)：向集合里添加**一个**元素，如果集合对象被添加操作改变了，则返回 true
   1. boolean addAll(Collection c)：把集合 c 里的所有元素添加到指定集合里，如果集合对象被添加操作改变了，则返回 true
- 删除
   1. boolean remove(Object o)：删除集合中第一个符合条件的**指定元素** o，返回 true
   1. boolean removeAll(Collecrion c)：从该集合中**删除**集合 c 里包含的所有元素，如果删除了一个或一个以上的元素，该方法将返回 true
   1. boolean retainAll(Collection c)：使该集合中**仅保留**集合 c 里包含的元素（求两个集合的**交集**），如果该操作改变了调用该方法的集合，则该方法返回 true
   1. void clear()：清除集合里的所有元素，将集合长度变为 0
- 查询
   1. boolean contains(Object o)：判断集合里是否包含指定元素 o
   1. boolean containsAll(Collection c)：判断集合里是否包含集合 c 里的所有元素
   1. boolean isEmpty()：判断集合是否为空，当集合长度为 0 时返回 true，否则返回 false
   1. int size()：返回集合里元素的个数
- 其它操作
   1. Iterator<E> iterator()：获取一个 Iterator 对象（迭代器）
   1. Object[] toArray()：把集合转换成一个数组，所有的集合元素变成对应的数组元素（**转换成 Object 数组时**，没有必要使用 toArray[new Object[0]]，可以直接使用 toArray()）
   1. T[] toArray(T[] a)：返回一个包含此集合中所有元素的数组（返回数组的运行时类型是指定数组的类型）。如果指定的数组 a **能容纳**该集合，则 a 将在其中返回；否则，将分配一个具有指定数组的运行时类型和此集合大小的**新数组**（**集合转换为类型 T 数组时**，尽量传入空数组 T[0]）
- 默认方法
   1. Stream<E> stream()
   1. Stream<E> parallelStream()
   1. boolean removeIf(Predicate<E> filter)：删除满足给定谓词的此集合的所有元素
   1. void forEach(Consumer<? super T> action)：对 Iterable 的每个元素执行给定的操作


## class Collections

- 排序操作  <br />  void reverse(List list)：反转指定 List 集合中元素的顺序  <br />  void shuffle(Listlist)：对 List 集合元素进行随机排序  <br />  void sort(List list)：根据元素的自然顺序对指定 List 集合的元素按升序进行排序（底层是调用 Arrays.sort()）  <br />  sort(List<T> list, Comparator<? super T> c)：根据指定比较器产生的顺序对指定 List 集合的元素进行排序  <br />  void swap(List list, int i, int j)：将指定 List 集合的 i 处元素和 j 处元素进行交换
- 查找、替换、添加操作  <br />  int binarySearch(List list, Object key)：使用二分搜索法搜索指定对象在 List 集合中的索引（调用该方法时要求 List 中的元素已经处于有序状态）  <br />  Object min(Collection coll)：根据元素的自然顺序， 返回给定集合中的最小元素  <br />  Object max(Collectioncoll)：根据元素的自然顺序， 返回给定集合中的最大元素  <br />  boolean replaceAll(List list, Object oldVal, Object newVal)：使用一个新值 newVal 替换 List 对象的所有旧值 oldVal  <br />  boolean addAll(Collection<? super T> c, T... elements)：将所有指定元素添加到指定 collection 中
- 创建不可变的单元素集合  <br />  Set<T> singleton(T o)：返回一个只包含指定对象的不可变 set  <br />  List<T> singletonList(T o)：返回一个只包含指定对象的不可变列表  <br />  Map<K, V> singletonMap(K key, V value)：返回一个不可变的映射，它只将指定键映射到指定值


## List

- 增加
   1. void add(int index, Object element)：将元素 element 插入到 List 集合的 index 处，索引范围 [0, size)
   1. boolean addAll(int index, Collection c)：将集合 c 所包含的所有元素都插入到 List 集合的 index 处
- 删除
   1. Object remove(int index)：删除并返回 **index 索引**处的元素
- **修改**
   1. Object set(int index, Object element)：将 index 索引处的元素替换成 element 对象，返回被替换的旧元素
- 查询
   1. Object get(int index)：返回集合 index 索引处的元素
   1. int indexOf(Object o)：返回对象 o 在 List 集合中第一次出现的位置索引
   1. int lastIndexOf(Object o)：返回对象 o 在 List 集合中最后一次出现的位置索引
- 其它
   1. List subList(int fromlndex, int tolndex)：返回从索引 fromlndex（包含）到索引 tolndex（不包含）处所有集合元素组成的子集合，**返回的列表由此列表支持，因此返回列表中的非结构性更改将反映在此列表中，反之亦然**（对于子列表的所有操作最终会反映到原列表上；对**父集合**元素的增加或删除，均会导致子列表的遍历、增加、删除产生 ConcurrentModificationException 异常）
   1. ListIterator<E> listIterator(int index)：返回一个 ListIterator 对象（双向的迭代器），从列表的指定位置开始
- 默认方法
   1. void replaceAll(UnaryOperator<E> operator)：对列表中的每一个元素执行特定的操作，并用处理的结果替换该元素
   1. void sort(Comparator<E> c)：使用提供的 Comparator 来比较元素排序该列表
- 常用构造器
   1. ArrayList()：一个数组队列，相当于**动态数组**。**ArrayList 默认初始容量大小为 10 ，添加元素时，如果发现容量已满，会自动扩容为原始大小的 1.5 倍**。
   1. ArrayList(Collection<? extends E> c)：构造一个包含指定 collection 的元素的列表，这些元素是按照该 collection 的迭代器返回它们的顺序排列的

LinkedList 基于双链表结构实现，顺序访问会非常高效，而随机访问效率比较低。

- add(E e)：默认添加元素方法（插入尾部）
- add(int index, E element)：添加元素到任意位置
- addFirst(E e)：在头部添加元素
- addLast(E e)：在尾部添加元素



## Queue
> 队列，“先进先出”（FIFO）的容器

- void add(Objecte)：将指定元素加入此队列的尾部
- Object element()：获取队列头部的元素，但是不删除该元素
- boolean offer(Objecte)：将指定元素加入此队列的尾部。当使用有容量限制的队列时，此方法通常比 add(Object e) 方法更好
- Object peek()：获取队列头部的元素，但是不删除该元素。如果队列为空，则返回 null
- Object poll()：获取队列头部的元素，并删除该元素。如果队列为空，则返回 null
- Object remove()：获取队列头部的元素，并删除该元素


### Deque
double ended queue ，双端队列

- 尾部插入  addLast(e)、offerLast(e)
- 尾部删除  removeLast()、pollLast()


### PriorityQueue
> 基于堆实现无界优先级队列

- 在构造器中自定义优先级别 `PriorityQueue(Comparator<? super E> comparator)`
- boolean add(E e)、boolean offer(E e)：将指定的元素插入此优先级队列
- E peek()：获取但不移除此队列的头；如果此队列为空，则返回 null
- E remove()、E poll()：获取并移除此队列的头，队列为空时，remove() 抛出异常，poll() 返回 null



## Set
HashSet   <br />  两个对象的 hashCode() 方法返回值相等，并且两个对象通过 equals() 方法比较也相等  <br />  LinkedHashSet

TreeSet  <br />  根据红黑树结构确定元素的存储位置  <br />  查询

- Object first()：返回集合中的第一个元素
- Object last()：返回集合中的最后一个元素
- Object lower(Object e)：返回集合中位于指定元素之前的元素（即小于指定元素的最大元素，参考元素不需要是 TreeSet 集合里的元素）
- Object higher (Object e)：返回集合中位于指定元素之后的元素（即大于指定元素的最小元素，参考元素不需要是 TreeSet 集合里的元素）

其它

- SortedSet subSet(Object fromElement, Object toElement)：返回此 Set 的子集合（部分视图），范围从 froraElement（包含）到 toElement （不包含），**返回的 Set 受此 Set 支持，所以在返回 Set 中的更改将反映在此 Set 中，反之亦然**
- SortedSet headSet(Object toElement)：返回此 Set 的子集（部分视图），由小于 toElement 的元素组成，**返回的 Set 受此 Set 支持，所以在返回 Set 中的更改将反映在此 Set 中，反之亦然**
- SortedSet tailSet(Object fromElement)：返回此 Set 的子集（部分视图），由大于或等于 fromElement 的元素组成，**返回的 Set 受此 Set 支持，所以在返回 Set 中的更改将反映在此 Set 中，反之亦然**
- Comparator comparator()：如果 TreeSet 采用了定制排序，则该方法返回定制排序所使用的 Comparator；如果 TreeSet 采用了自然排序，则返回 null


## Map
> 用于保存具有映射关系的数据，元素是 key-value 对（Entry），key 不允许重复

本质 `**Map.Entry<K,V>[]**`	自定义对象作为 key 必须覆写 hashCode 和 equals

- 增加 / 修改
   1. Object put(Object key, Object value)：添加一个 key-value 对，如果当前 Map 中已有一个与该 key 相等的 key-value 对，则新的 key-value 对会**覆盖**原来的 key-value 对，返回被覆盖的 value，否则返回 null
   1. void putAll(Map m)：将指定 Map 中的 key-value 对复制到本 Map 中
- 删除
   1. Object remove(Object key)：删除指定 key 所对应的 key-value 对，返回被删除 key 所关联的 value，如果该 key 不存在，则返回 null
   1. boolean remove(Object key, Object value)：删除指定 key、value 所对应的 key-value 对
   1. void clear()：删除该 Map 对象中的所有 key-value 对
- 查询
   1. Object get(Object key)：返回指定 key 所对应的 value；如果此 Map 中不包含该 key，则返回 null
   1. boolean containsKey(Object key)：查询 Map 中是否包含指定的 key，如果包含则返回 true
   1. boolean containsValue(Object value)：查询 Map 中是否包含一个或多个 value，如果包含则返回true
   1. boolean isEmpty()：查询该 Map 是否为空（即不包含任何 key-value 对），如果为空则返回 true
   1. int size()：查询该 Map 里的 key-value 对的个数
- 其它
   1. Set<K> keySet()：返回该 Map 中所有 key 组成的 Set 集合（相应实现类中的内部类，不支持 add 或 addAll 操作）
   1. Collection<V> values()：返回该 Map 里所有 value 组成的 **Collection**（相应实现类中的内部类，不支持 add 或 addAll 操作）
   1. Set<Map.Entry<K, V>> entrySet()：返回 Map 中包含的 key-value 对所组成的 Set 集合，每个集合元素都是 Map.Entry 对象（不支持 add 或 addAll 操作）
- 默认方法
   1. void forEach(BiConsumer<K, V> action)：对此映射中的每个条目执行给定的操作
   1. V computeIfPresent(K key, BiFunction<K, V, V> remappingFunction)
   1. V computeIfAbsent(K key, Function<K, V> mappingFunction)：如果 key 不存在或者对应的值是 null，则调用 mappingFunction 来产生一个值，然后将其放入 Map（**原子操作** CAS），再**返回这个值**；否则的话返回 Map 已存在的对应的值
   1. V putIfAbsent(K key, V value)：如果 key 不存在或者对应的值是 null，则**将 value 设置进去**（**原子操作** CAS），然后**返回 null**；否则返回 Map 中对应的值，而不做其它操作
   1. V getOrDefault(Object key, V defaultValue)：如果 key 不存在或者对应的值是 null，则返回 defaultValue
   1. boolean remove(Object key, Object value)：仅当指定的 key 当前映射到指定的值时删除该条目
   1. boolean replace(K key, V oldValue, V newValue)：仅当当前映射到指定的值时，才替换指定键的条目
   1. V merge(K key, V value, BiFunction<V, V, V> remappingFunction)：如果指定的 key 尚未与值相关联或与 null 相关联，则将其与给定的非空 value 相关联，否则将关联值替换为给定重映射函数的结果
- 常用构造器
   1. HashMap()：构造一个具有默认初始容量（16）和默认加载因子（0.75）的空 HashMap
   1. `HashMap(Map<? extends K,? extends V> m)`：构造一个映射关系与指定 Map 相同的新 HashMap





# Time






# Number

## BigDecimal
全局静态常量：ZERO、ONE、TEN、ROUND_HALF_UP（对应于 RoundingMode.HALF_UP）  <br />  常用实例方法

- BigDecimal divide(BigDecimal divisor)：返回一个 BigDecimal，其值为 (this / divisor)，如果无法表示准确的商值，则抛出 ArithmeticException
- BigDecimal divide(BigDecimal divisor, int scale, RoundingMode roundingMode)：返回一个 BigDecimal，其值为 (this / divisor)，要保留的小数位数 scale，舍入模式 roundingMode（如 RoundingMode.HALF_UP 表示四舍五入）
- BigDecimal setScale(int newScale, RoundingMode roundingMode), BigDecimal setScale(int newScale, int roundingMode)：返回一个 BigDecimal，要保留的小数位数 newScale，舍入模式 roundingMode
- BigDecimal stripTrailingZeros()：返回的 BigDecimal，其数值上等于此小数，但从该表示形式移除所有尾部零


## Math
基本数学运算，如初等指数、对数、平方根和三角函数等，随机数  <br />  常量字段：E、PI  <br />  方法

- double random()：返回带正号的 double 值（伪随机数），[0.0, 1.0)
- int min(int a, int b)：返回两个数的较小值
- int max(int a, int b)：返回两个数的较大值
- int toIntExact(long value)：将 long 值转换为 int 值
- int addExact(int x, int y)
- int subtractExact(int x, int y)
- int multiplyExact(int x, int y)
- long round(double a)、int round(float a)：执行标准舍入，将数值四舍五入为最接近的整数
- double ceil(double a)：执行向上舍入，将数值向上舍入为最接近的 double 值
- double floor(double a)：执行向下舍入，将数值向下舍入为最接近的 double 值



## Random
使用种子创建随机数生成器，生成下一个伪随机数  <br />  构造器

- Random()：使用默认的种子创建一个随机数生成器对象（以当前系统时间作为种子）
- Random(long seed)

实例方法

- int nextInt()：返回一个伪随机整数，[0, int 最大值)，类似还有返回 long、float [0.0, 1.0)、double [0.0, 1.0)、boolean 的方法
- int nextInt(int n)：返回一个伪随机数，[0, n)
- IntStream ints(int randomNumberOrigin, int randomNumberBound)
- IntStream ints(long streamSize, int randomNumberOrigin, int randomNumberBound)：返回一个流，生成 streamSize 个 [randomNumberOrigin, randomNumberBound) 范围内的 int 值
