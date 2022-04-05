
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








# JVM

![](https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javacore/jvm/jvm-hotspot-key-components.png#crop=0&crop=0&crop=1&crop=1&from=url&id=KI4ZW&originHeight=720&originWidth=960&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 运行时数据区域
![](https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javacore/jvm/jvm-memory-runtime-data-area.png#crop=0.0486&crop=0.0344&crop=0.9559&crop=0.9668&from=url&height=711&id=G6EqC&originHeight=784&originWidth=658&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=597)


程序计数器（Program Counter Register）：一块较小的内存空间，可看做是当前线程所执行的字节码的行号指示器  <br />  Java 虚拟机栈（Java Virtual Machine Stacks） 也是线程私有的，它的生命周期与线程相同  <br />  本地方法栈（Native Method Stack） 与虚拟机栈的作用相似，为 Native 方法服务  <br />  Java 堆（Java Heap） ：存放对象实例

- **新生代（Young Generation）**
   - Eden - Eden 和 Survivor 的比例为 8:1
   - From Survivor
   - To Survivor
- **老年代（Old Generation）**
- **永久代（Permanent Generation）**

方法区（Method Area）也被称为永久代。用于存放已被加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。  <br />  运行时常量池（Runtime Constant Pool） 是方法区的一部分，Class 文件中除了有类的版本、字段、方法、接口等描述信息，还有一项信息是常量池（Constant Pool Table），用于存放编译器生成的各种字面量和符号引用



## 垃圾收集

### 可达性分析算法
**GC Roots 的对象**

- 虚拟机栈中引用的对象
- 本地方法栈中引用的对象（Native 方法）
- 方法区中，类静态属性引用的对象
- 方法区中，常量引用的对象



### 引用
强引用（Strong Reference）：不会被垃圾收集器回收，如使用 new 一个新对象  <br />  软引用（Soft Reference）：只有在内存不够的情况下才会被回收，使用 SoftReference 类来创建  <br />  弱引用（Weak Reference）：一定会被垃圾收集器回收  <br />  虚引用（Phantom Reference）：不会对其生存时间构成影响，其 PhantomReference#get() 方法总是返回 null，因此无法获取被引用的对象，主要用于跟踪一个对象被回收的过程


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




## 垃圾收集器 Garbage Collector



## JDK 监控和故障诊断命令行工具

- **jps -l**：JVM 进程状态工具，列出系统上的 JVM 进程
- jcmd：JVM 命令行调试工具，用于向 JVM 进程发送调试命令
- jstat：JVM 统计监控工具，附加到一个 JVM 进程上收集和记录 JVM 的各种性能指标数据
   - jstat -gcutil <pid> 5000 100：输出 GC 和内存占用汇总信息，每隔 5 秒输出一次，输出 100 次（其中，S0 表示 Survivor0 区占用百分比，S1 表示 Survivor1 区占用百分比，E 表示 Eden 区占用百分比，O 表示老年代占用百分比，M 表示元数据区占用百分比，YGC 表示新生代回收次数，YGCT 表示新生代回收耗时，FGC 表示老年代回收次数，FGCT 表示老年代回收耗时）
- **jstack**：JVM 栈查看工具，可以打印 JVM 进程的线程栈和锁情况
- **jinfo**：JVM 信息查看工具，查看 JVM 的各种配置信息
- **jmap**：JVM 堆内存分析工具，可以打印 VM 进程对象直方图、类加载统计，以及做堆转储操作
   - jmap -dump:format=b,file=/tmp/a.hprof <pid>：生成虚拟机的堆内存转储快照（heapdump 文件）
   - jmap -heap <pid>：显示堆详细信息，包括使用的 GC 算法、堆配置信息和各内存区域内存使用信息
   - jmap -histo:live <pid>：显示堆中对象的统计信息，包括每个 Java 类的对象数量（只计算活动的对象）、内存大小
- jhat：JVM Heap Dump Browser，用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果






