---
title: Java Advance
created_at: 2022-04-03T08:46:14.000Z
updated_at: 2023-01-08T11:02:16.000Z
word_count: 8295
---  

## 并发 Concurrent
**并发安全**：是保证程序的正确性，使得并发处理结果符合预期  <br />  并发安全需要保证：

- **可见性** - 一个线程修改了某个共享变量，其状态能够立即被其他线程知晓，即把线程本地状态反映到主内存上，volatile 就是负责保证可见性的。
- **原子性** - 相关操作不会中途被其他线程干扰，一般通过同步机制（加锁：sychronized、Lock）实现。
- **有序性** - 是保证线程内串行语义，避免指令重排等

原子操作（atomic operation）：不可被中断的一个或一系列操作


### 线程（Thread）

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
        
        // 使用Lambda表达式
        new Thread(()->{
          for (int i = 0; i < 100; i++) {
            System.out.println(Thread.currentThread().getName() + " " + i);
          }
        },"Lambda").start();
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

- `V get()`：返回 Callable 任务里 call() 方法的返回值，如果计算时抛出异常将会抛出 ExecutionException 异常，如果当前的线程在等待时被中断将会抛出 InterruptedException 异常（调用该方法将导致程序阻塞，必须等到子线程结束后才会得到返回值）
- `V get(long timeout, TimeUnit unit)`：返回 Callable 任务里 call() 方法的返回值，该方法让程序最多阻塞 timeout 和 unit 指定的时间，如果经过指定时间后 Callable 任务依然没有返回值，将会抛出 TimeoutException 异常
- `boolean cancel(boolean maylnterruptlfRunning)`：试图取消该 Future 里关联的 Callable 任务
- `boolean isCancelled()`：如果在 Callable 任务正常完成前被取消，则返回 true
- `boolean isDone()`：如果 Callable 任务已完成（由于正常终止、异常或取消），则返回 true
```java
ExecutorService executor = Executors.newFixedThreadPool(4); 
// 定义任务:
Callable<String> task = new Task();
// 提交任务并获得Future:
Future<String> future = executor.submit(task);
// 从Future获取异步执行返回的结果:
String result = future.get(); // 可能阻塞
```

`class FutureTask<V>`  <br />  FutureTask类实现了`RunnableFuture<V>` 接口（`RunnableFuture<V>` 接口继承了`Runnable` 接口和`Future<V> `接口）  <br />  构造器：`FutureTask(Callable<V> callable)`、`FutureTask(Runnable runnable, V result)`（指定成功完成时 get 返回给定的结果为 result）
```java
public class CallableDemo {

    public static void main(String[] args) {
        Callable<Long> callable = new MyThread();
        FutureTask<Long> future = new FutureTask<>(callable);
        new Thread(future, "Callable 线程").start();
        try {
            System.out.println("任务耗时：" + (future.get() / 1000000) + "毫秒");
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }

    static class MyThread implements Callable<Long> {

        private int ticket = 10000;

        @Override
        public Long call() {
            long begin = System.nanoTime();
            while (ticket > 0) {
                System.out.println(Thread.currentThread().getName() + " 卖出了第 " + ticket + " 张票");
                ticket--;
            }

            long end = System.nanoTime();
            return (end - begin);
        }

    }

}
```


**创建线程的三种方式对比**

- 继承 Thread 类
   1. 线程类已经继承了 Thread 类，不能再继承其它父类
   2. 访问当前线程直接使用 this
   3. 多个线程之间**无法共享线程类中的实例变量**
- 实现 Runnable、Callable 接口的方式创建多线程
   1. 线程类只是实现了 Runnable 接口，还可以继承其它类
   2. 访问当前线程须使用 Thread. currentThread() 方法
   3. 所创建的 Runnable 对象只是**线程的 target**，而多个线程**可以共享同一个 target 对象的实例变量**，所以适合多个相同线程来处理同一份资源的情况


### 并发核心机制

synchronized  利用锁的机制来实现互斥同步的。  <br />  可以保证在同一个时刻，只有一个线程可以执行某个方法或者某个代码块

- **同步实例方法** - 对于普通同步方法，锁是当前实例对象
- **同步静态方法** - 对于静态同步方法，锁是当前类的 Class 对象
- **同步代码块** - 对于同步方法块，锁是 synchonized 括号里配置的对象

volatile 是轻量级的 synchronized，它在多处理器开发中保证了共享变量的“可见性”

- **线程可见性**
- **禁止指令重排序**
- **不保证原子性**

#### CAS
Compare and Swap，**比较并替换**
```java
// 如果AtomicInteger的当前值是prev，那么就更新为next，否则就什么也不干
public int incrementAndGet(AtomicInteger var) {
    int prev, next;
    do {
        prev = var.get();
        next = prev + 1;
    } while (!var.compareAndSet(prev, next));
    return next;
}
```
存在问题

- ABA 问题
- 循环时间长开销大
- 只能保证一个共享变量的原子性

原子类  <br />  java.util.concurrent.atomic

- 增加值并返回新值：int addAndGet(int delta)
- 加1后返回新值：int incrementAndGet()
- 获取当前值：int get()
- 用CAS方式设置：int compareAndSet(int expect, int update)


基本类型

- AtomicBoolean - 布尔类型原子类
- AtomicInteger - 整型原子类
- AtomicLong - 长整型原子类

引用类型

- AtomicReference - 引用类型原子类
- AtomicMarkableReference - 带有标记位的引用类型原子类
- AtomicStampedReference - 带有版本号的引用类型原子类		解决了 ABA 问题

数组类型

- AtomicIntegerArray - 整形数组原子类
- AtomicLongArray - 长整型数组原子类
- AtomicReferenceArray - 引用类型数组原子类

属性更新器类型

- AtomicIntegerFieldUpdater - 整型字段的原子更新器。
- AtomicLongFieldUpdater - 长整型字段的原子更新器。
- AtomicReferenceFieldUpdater - 原子更新引用类型里的字段

原子化的累加器  <br />  DoubleAccumulator、DoubleAdder、LongAccumulator 、 LongAdder


自旋锁 指线程反复检查锁变量是否可用，直到成功为止
```java
public class AtomicReferenceDemo {

    private static int ticket = 10;

    public static void main(String[] args) {
        SpinLock lock = new SpinLock();
        ExecutorService executorService = Executors.newFixedThreadPool(3);
        for (int i = 0; i < 5; i++) {
            executorService.execute(new MyThread(lock));
        }
        executorService.shutdown();
    }

    static class SpinLock {

        private AtomicReference<Thread> atomicReference = new AtomicReference<>();

        public void lock() {
            Thread current = Thread.currentThread();
            while (!atomicReference.compareAndSet(null, current)) {}
        }

        public void unlock() {
            Thread current = Thread.currentThread();
            atomicReference.compareAndSet(current, null);
        }

    }

    static class MyThread implements Runnable {

        private SpinLock lock;

        public MyThread(SpinLock lock) {
            this.lock = lock;
        }

        @Override
        public void run() {
            while (ticket > 0) {
                lock.lock();
                if (ticket > 0) {
                    System.out.println(Thread.currentThread().getName() + " 卖出了第 " + ticket + " 张票");
                    ticket--;
                }
                lock.unlock();
            }
        }

    }

}
```


#### `ThreadLocal<T>`

- 代表一个线程局部变量
- 当运行于多线程环境的某个对象使用 ThreadLocal 维护变量时，ThreadLocal **为每一个使用该变量的线程分配一个独立的变量副本**，从而解决多线程中对同一变量的访问冲突

实例方法

   - protected T initialValue()：返回此线程局部变量的当前线程的“初始值”
   - T get()：返回此线程局部变量中当前线程副本中的值
   - void remove()：移除此线程局部变量中当前线程的值
   - void set(T value)：设置此线程局部变量中当前线程副本中的值
- 子类 InheritableThreadLocal：在创建子线程时，子线程会接收所有**可继承的线程局部变量的初始值**，以获得父线程所具有的值
```java
public class ThreadLocalDemo {

    private static ThreadLocal<Integer> threadLocal = new ThreadLocal<Integer>() {
        @Override
        protected Integer initialValue() {
            return 0;
        }
    };

    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 10; i++) {
            executorService.execute(new MyThread());
        }  // 全部输出 count = 10
        executorService.shutdown();
    }

    static class MyThread implements Runnable {

        @Override
        public void run() {
            int count = threadLocal.get();
            for (int i = 0; i < 10; i++) {
                try {
                    count++;
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            threadLocal.set(count);
            threadLocal.remove();
            System.out.println(Thread.currentThread().getName() + " : " + count);
        }

    }

}
```


### 线程通信

**Object 类**中用于操作线程通信的实例方法

1. wait()：调用该方法的当前线程会**释放**对**该同步监视器**（调用者）的锁定，JVM 把该线程存放到**等待池**中，等待其他的线程唤醒该线程（该方法声明抛出了 InterruptedException 异常）（为了防止虚假唤醒，此方法**应始终在循环中使用**，即被唤醒后需要再次判断是否满足唤醒条件）
2. notify()：调用该方法的当前线程唤醒在等待池中的任意一个线程，并把该线程转到**锁池**中等待获取锁
3. notifyAll()：调用该方法的当前线程唤醒在等待池中的所有线程，并把该线程转到**锁池**中等待获取锁
:::warning
这些方法必须在**同步块**中使用，且只能被同步监视器对象来调用，否则会引发 IllegalMonitorStateException 异常
:::


使用 volatile 标志位控制线程终止
```java
public class ThreadStopDemo2 {

    public static void main(String[] args) throws Exception {
        MyTask task = new MyTask();
        Thread thread = new Thread(task, "MyTask");
        thread.start();
        TimeUnit.MILLISECONDS.sleep(50);
        task.cancel();
    }

    private static class MyTask implements Runnable {

        private volatile boolean flag = true;

        private volatile long count = 0L;

        @Override
        public void run() {
            System.out.println(Thread.currentThread().getName() + " 线程启动");
            while (flag) {
                System.out.println(count++);
            }
            System.out.println(Thread.currentThread().getName() + " 线程终止");
        }

        /**
         * 通过 volatile 标志位来控制线程终止
         */
        public void cancel() {
            flag = false;
        }

    }

}
```

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

### 并发锁
锁机制（Lock、sychronized）：对共享数据做互斥同步，这样在同一个时刻，只有一个线程可以执行某个方法或者某个代码块，那么操作必然是原子性的，线程安全的

- **公平锁** - **多线程按照申请锁的顺序来获取锁**。
- **非公平锁** - **多线程不按照申请锁的顺序来获取锁** 。可能会出现优先级反转（后来者居上）或者饥饿现象（某线程总是抢不过别的线程，导致始终无法执行）。

:::info
synchronized 只支持非公平锁。  <br />  ReentrantLock 、ReentrantReadWriteLock，默认是非公平锁，但支持公平锁
:::


- **独享锁（**互斥锁） - **锁一次只能被一个线程所持有**。
- **共享锁（**读写锁） - **锁可被多个线程所持有**
:::info
synchronized 、ReentrantLock 只支持独享锁。  <br />  ReentrantReadWriteLock 其写锁是独享锁，其读锁是共享锁。读锁是共享锁使得并发读是非常高效的，读写，写读 ，写写的过程是互斥的
:::

处理并发同步的策略

- 乐观锁：乐观思想，即不加锁的并发操作也没什么问题。对于同一个数据的并发操作，是不会发生修改的。在更新数据的时候，会采用不断尝试更新的方式更新数据。适合读多写少的场景
- 悲观锁：悲观思想，即不加锁的并发操作一定会出问题。适合写操作频繁的场景。


控制粒度的粗细  <br />  控制粒度越细，阻塞开销越小，并发性也就越高

- **偏向锁** - 指一段同步代码一直被一个线程所访问，那么该线程会自动获取锁。降低获取锁的代价。
- **轻量级锁** - 指当锁是偏向锁的时候，被另一个线程所访问，偏向锁就会升级为轻量级锁，其他线程会通过自旋的形式尝试获取锁，不会阻塞，提高性能。
- **重量级锁** - 指当锁为轻量级锁的时候，另一个线程虽然是自旋，但自旋不会一直持续下去，当自旋一定次数的时候，还没有获取到锁，就会进入阻塞，该锁膨胀为重量级锁。重量级锁会让其他申请的线程进入阻塞，性能降低。


|  | 内置锁 | 显示锁 |
| --- | --- | --- |
| 申请和释放 | 由 JVM 所控制 | 可以由程序所控制 |
| 响应中断 | 不能 | 能 |
| 超时机制 | 没有 | 有 |
| 公平锁 | 不支持 | 支持 |
| 共享 | 独享 | 基于 Condition 灵活的控制同步条件 |
| 读写分离 | 不支持 | 支持 |



**可重入锁：线程可以重复获取同一把锁**。即同一个线程在外层方法获取了锁，在进入内层方法会自动获取锁。**在一定程度上避免死锁**

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
```java
// 泛型无界缓存
static class UnboundedCache<K, V> {

    private final Map<K, V> cacheMap = new WeakHashMap<>();

    private final ReadWriteLock cacheLock = new ReentrantReadWriteLock();

    public V get(K key) {
        cacheLock.readLock().lock();
        V value;
        try {
            value = cacheMap.get(key);
            System.out.printf("%s 读数据 %s:%s", Thread.currentThread().getName(), key, value);
        } finally {
            cacheLock.readLock().unlock();
        }
        return value;
    }

    public V put(K key, V value) {
        cacheLock.writeLock().lock();
        try {
            cacheMap.put(key, value);
            System.out.println("%s 写入数据 %s:%s", Thread.currentThread().getName(), key, value);
        } finally {
            cacheLock.writeLock().unlock();
        }
        return value;
    }

    public V remove(K key) {
        cacheLock.writeLock().lock();
        try {
            return cacheMap.remove(key);
        } finally {
            cacheLock.writeLock().unlock();
        }
    }

    public void clear() {
        cacheLock.writeLock().lock();
        try {
            this.cacheMap.clear();
        } finally {
            cacheLock.writeLock().unlock();
        }
    }

}
```


**StampedLock**	把读锁细分为乐观读和悲观读，进一步提升并发效率

- 支持三种模式：写锁、悲观读锁、乐观读
- 不可重入锁
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


AQS  <br />  AbstractQueuedSynchronizer，队列同步器，其主要作用是处理同步。提供了对独享锁与共享锁的支持

- 使用一个整型的 volatile 变量state 维护同步状态。状态的意义由子类赋予。
- 维护了一个 Node 类型的双链表来完成同步状态的管理，用来存储获取锁失败的线程。


### 线程池
一种多线程处理形式，处理过程中将任务添加到队列，然后在创建线程后自动启动这些任务

- **降低资源消耗** - 通过重复利用已创建的线程降低线程创建和销毁造成的消耗。
- **提高响应速度** - 当任务到达时，任务可以不需要等到线程创建就能立即执行。
- **提高线程的可管理性** - 线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控


Executor - 运行任务的简单接口

- ExecutorService - 扩展了 Executor 
   - 支持有返回值的线程 - sumbit、invokeAll、invokeAny 方法中都支持传入Callable 对象。
   - 支持管理线程生命周期 - shutdown、shutdownNow、isShutdown 等方法。
- ScheduledExecutorService - 扩展了 ExecutorService 接口。支持定期执行任务。
- AbstractExecutorService - ExecutorService 接口的默认实现。
- ThreadPoolExecutor - Executor 框架最核心的类，它继承了 AbstractExecutorService 类。
- ScheduledThreadPoolExecutor - ScheduledExecutorService 接口的实现，一个可定时调度任务的线程池。

Executors  <br />  创建线程池的静态方法

- ExecutorService newCachedThreadPool()：一个具有缓存功能的线程池，系统根据需要创建线程（**无界线程池**，已有 60 秒钟未被使用的线程会被终止并从缓存中移除）  <br />  `new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue<Runnable>())`
- ExecutorService newFixedThreadPool(int nThreads)：一个可重用的、**具有固定核心线程数的线程池**  <br />  （使用无界队列，**队列堆积太多**数据导致 OOM）  <br />  `new ThreadPoolExecutor(nThreads, nThreads, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<Runnable>())`
- ExecutorService newSingleThreadExecutor()：一个**单线程的线程池**  <br />  `new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<Runnable>()`)
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


### CompletableFuture

- `implements Future<T>, CompletionStage<T>`
- 组合式异步编程，可以传入回调对象，当异步任务完成或者发生异常时，自动调用回调对象的回调方法

静态方法

- `CompletableFuture<Void> runAsync(Runnable runnable)`
- `CompletableFuture<Void> runAsync(Runnable runnable, Executor executor)`
- `CompletableFuture<U> supplyAsync(Supplier<U> supplier)`：使用公共的线程池 ForkJoinPool 执行异步任务
- `CompletableFuture<U> supplyAsync(Supplier<U> supplier, Executor executor)`：使用指定的线程池执行异步任务
- 组合多个 CompletableFuture
   - `CompletableFuture<Void> allOf(CompletableFuture<?>... cfs)`：等待数组中的所有 CompletableFuture 对象都执行完毕
   - `CompletableFuture<Object> anyOf(CompletableFuture<?>... cfs)`：只要数组有任何一个 CompletableFuture 对象执行完毕就不再等待，返回由第一个执行完毕的 CompletableFuture 对象的返回值构成的 CompletableFuture

实例方法

- T join()：阻塞直到返回完成时的结果值，如果遇到异常则抛出 unchecked exception
- 定义处理 CompletableFuture 的返回结果，即回调函数
   - `CompletableFuture<Void> thenRun(Runnable action)`
   - `CompletableFuture<Void> thenAccept(Consumer<? super T> action)`
   - `CompletableFuture<U> thenApply(Function<? super T, ? extends U> fn)`
- 组合两个 CompletableFuture
   - `CompletableFuture<U> thenCompose(Function<? super T, ? extends CompletionStage<U>> fn)`：对两个异步操作进行流水线，第一个操作完成后，将其结果作为参数传递给第二个操作
   - `CompletableFuture<V> thenCombine(CompletionStage<? extends U> other, BiFunction<? super T,? super U,? extends V> fn)`：当两个 CompletableFuture 对象完成计算后，将结果合并
- 异常处理（如果异常发生，res 参数将是 null，否则 ex 将是 null）
   - `ConnectionFuture<T> exceptionally(Function<Throwable, ? extends T> fn)`：仅在异常时回调，可在异常时返回特定值用于回退
   - `ConnectionFuture<T> whenComplete(BiConsumer<? super T, ? super Throwable> action)`：无论异常是否发生都会被调用
   - `ConnectionFuture<U> handle(BiFunction<? super T, Throwable, ? extends U> fn)`：无论异常是否发生都会被调用，可在异常时返回特定值用于回退
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



## JVM

JVM 体系结构

- JVM 指令集
- 类加载器
- 执行引擎 - 相当于 JVM 的 CPU
- 内存区 - JVM 的存储
- 本地方法调用 - 调用 C/C++ 实现的本地方法


Hotspot 是最流行的 JVM

![](https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javacore/jvm/jvm-hotspot-key-components.png#from=url&id=KI4ZW&originHeight=720&originWidth=960&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
### 运行时数据区域
![](https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javacore/jvm/jvm-memory-runtime-data-area.png#from=url&height=711&id=G6EqC&originHeight=784&originWidth=658&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=597)


程序计数器（Program Counter Register）：一块较小的内存空间，可看做是当前线程所执行的字节码的行号指示器  <br />  Java 虚拟机栈（Java Virtual Machine Stacks）：生命周期与线程相同；为 Java 方法服务  <br />  本地方法栈（Native Method Stack）：与虚拟机栈的作用相似；为 Native 方法服务  <br />  Java 堆（Java Heap） ：存放对象实例

- 新生代（Young Generation）
   - Eden - Eden 和 Survivor 的比例为 8:1
   - From Survivor
   - To Survivor
- 老年代（Old Generation）
- 永久代（Permanent Generation）：方法区（Method Area），用于存放已被加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。
   - 运行时常量池（Runtime Constant Pool）：方法区的一部分，Class 文件中除了有类的版本、字段、方法、接口等描述信息，还有一项信息是常量池（Constant Pool Table），用于存放编译器生成的各种字面量和符号引用

| 内存区域 | 内存作用范围 | 异常 |
| --- | --- | --- |
| 程序计数器 | 线程私有 | 无 |
| Java 虚拟机栈 | 线程私有 | StackOverflowError 和 OutOfMemoryError |
| 本地方法栈 | 线程私有 | StackOverflowError 和 OutOfMemoryError |
| Java 堆 | 线程共享 | OutOfMemoryError |
| 方法区 | 线程共享 | OutOfMemoryError |
| 运行时常量池 | 线程共享 | OutOfMemoryError |
| 直接内存 | 非运行时数据区 | OutOfMemoryError |



### 垃圾收集
#### 可达性分析算法
通过 GC Roots 作为起始点进行搜索，JVM 将能够到达到的对象视为存活，不可达的对象视为死亡

**GC Roots 的对象**

- 虚拟机栈中引用的对象
- 本地方法栈中引用的对象（Native 方法）
- 方法区中，类静态属性引用的对象
- 方法区中，常量引用的对象


#### 引用类型

- 强引用（Strong Reference）：不会被垃圾收集器回收，如使用 new 一个新对象
- 软引用（Soft Reference）：只有在内存不够的情况下才会被回收；SoftReference 类
- 弱引用（Weak Reference）：一定会被垃圾收集器回收；WeakReference 类
- 虚引用（Phantom Reference）：一个对象是否有虚引用的存在，完全不会对其生存时间构成影响，也无法通过虚引用取得一个对象实例；为一个对象设置虚引用关联的唯一目的就是能在这个对象被收集器回收时收到一个系统通知；PhantomReference类


#### 垃圾收集算法

**垃圾收集器的性能指标**

- 停顿时间 - 因为 GC 而导致程序不能工作的时间长度。
- 吞吐量 - 关注在特定的时间周期内一个应用的工作量的最大值。

**标记 - 清除（Mark-Sweep）**：将需要回收的对象进行标记，然后清理掉被标记的对象。

- 标记和清除过程效率都不高；
- 会产生大量不连续的内存碎片，导致无法给大对象分配内存。

**标记 - 整理（Mark-Compact）**：让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存。

- 能够解决内存碎片化的问题，但代价是压缩算法的性能开销

**复制（Copying）：**将内存划分为大小相等的两块，每次只使用其中一块，当这一块内存用完了就将还存活的对象复制到另一块上面，然后再把使用过的内存空间进行一次清理。

- 主要不足是只使用了内存的一半

**分代收集：**根据对象存活周期将内存划分为几块，不同块采用适当的收集算法

- 年轻代：**复制** 算法
- 老年代：**标记 - 清理** 或者 **标记 - 整理** 算法

参数

| 配置 | 描述 |
| --- | --- |
| -Xss | 虚拟机栈大小。 |
| -Xms | 堆空间初始值。 |
| -Xmx | 堆空间最大值。 |
| -Xmn | 新生代空间大小。 |
| -XX:NewSize | 新生代空间初始值。 |
| -XX:MaxNewSize | 新生代空间最大值。 |
| -XX:NewRatio | 新生代与年老代的比例。默认为 2，意味着老年代是新生代的 2 倍。 |
| -XX:SurvivorRatio | 新生代中调整 eden 区与 survivor 区的比例，默认为 8。即 eden 区为 80% 的大小，两个 survivor 分别为 10% 的大小。 |
| -XX:PermSize | 永久代空间的初始值。 |
| -XX:MaxPermSize | 永久代空间的最大值。 |



#### 垃圾收集器 Garbage Collector

| 收集器 | 运行方式 | 代 | 收集算法 | 目标 | 适用场景 |
| --- | --- | --- | --- | --- | --- |
| **Serial** | 串行 | 年轻代 | 复制 | 响应速度优先 | 单 CPU 环境下的 Client 模式 |
| **Serial Old** | 串行 | 老年代 | 标记-整理 | 响应速度优先 | 单 CPU 环境下的 Client 模式、CMS 的后备预案 |
| **ParNew** | 串行 + 并行 | 年轻代 | 复制算法 | 响应速度优先 | 多 CPU 环境时在 Server 模式下与 CMS 配合 |
| **Parallel Scavenge** | 串行 + 并行 | 年轻代 | 复制算法 | 吞吐量优先 | 在后台运算而不需要太多交互的任务 |
| **Parallel Old** | 串行 + 并行 | 老年代 | 标记-整理 | 吞吐量优先 | 在后台运算而不需要太多交互的任务 |
| **CMS**  <br />  并发标记清除收集器 | 并行 + 并发 | 老年代 | 标记-清除 | 响应速度优先 | 集中在互联网站或 B/S 系统服务端上的 Java 应用 |
| **G1** | 并行 + 并发 | 年轻代 + 老年代 | 标记-整理 + 复制算法 | 响应速度优先 | 面向服务端应用，将来替换 CMS |





### JDK 监控和故障诊断命令行工具

- **jps -l**：JVM 进程状态工具，列出系统上的 JVM 进程
- jcmd：JVM 命令行调试工具，用于向 JVM 进程发送调试命令
- jstat：JVM 统计监控工具，附加到一个 JVM 进程上收集和记录 JVM 的各种性能指标数据
   - `jstat -gcutil <pid> 5000 100`：输出 GC 和内存占用汇总信息，每隔 5 秒输出一次，输出 100 次（其中，S0 表示 Survivor0 区占用百分比，S1 表示 Survivor1 区占用百分比，E 表示 Eden 区占用百分比，O 表示老年代占用百分比，M 表示元数据区占用百分比，YGC 表示新生代回收次数，YGCT 表示新生代回收耗时，FGC 表示老年代回收次数，FGCT 表示老年代回收耗时）
- **jstack**：JVM 栈查看工具，可以打印 JVM 进程的线程栈和锁情况
- **jinfo**：JVM 信息查看工具，查看 JVM 的各种配置信息
- **jmap**：JVM 堆内存分析工具，可以打印 VM 进程对象直方图、类加载统计，以及做堆转储操作
   - `jmap -dump:format=b,file=/tmp/a.hprof <pid>`：生成虚拟机的堆内存转储快照（heapdump 文件）
   - `jmap -heap <pid>`：显示堆详细信息，包括使用的 GC 算法、堆配置信息和各内存区域内存使用信息
   - `jmap -histo:live <pid>`：显示堆中对象的统计信息，包括每个 Java 类的对象数量（只计算活动的对象）、内存大小
- jhat：JVM Heap Dump Browser，用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果






