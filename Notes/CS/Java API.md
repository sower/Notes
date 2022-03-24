
# ——Package——
编译器会自动导入JDK的核心类使用java.lang包；  <br />  包名推荐使用倒置的域名，例如org.apache。  <br />  import static：导入一个类的静态字段和静态方法  <br />  classpath：JVM用到的一个环境变量，它用来指示JVM如何搜索class。  <br />  jar包：相当于目录，可以包含很多.class文件，方便下载和使用；  <br />  模块（Module）：.jmod文件每一个都是一个模块，模块名就是文件名。


# java.math

## Math
| 变量和类型 | 字段 | 描述 |
| --- | --- | --- |
| static double | [E](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#E) | double值比任何其他值更接近 e ，即自然对数的基数。 |
| static double | [PI](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#PI) | double值比任何其他 pi更接近，圆的圆周与其直径的比率。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| static double | [abs](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#abs(double))  <br />  (double a) | 返回 double值的绝对值。 |
| static double | [acos](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#acos(double))  <br />  (double a) | 返回值的反余弦值; 返回的角度在0.0到pi的范围内。 |
| static int | [addExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#addExact(int,int))  <br />  (int x, int y) | 返回其参数的总和，如果结果溢出 int则抛出异常。 |
| static long | [addExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#addExact(long,long))  <br />  (long x, long y) | 返回其参数的总和，如果结果溢出 long则抛出异常。 |
| static double | [asin](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#asin(double))  <br />  (double a) | 返回值的反正弦值; 返回的角度在-pi / 2到pi / 2的范围内。 |
| static double | [atan](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#atan(double))  <br />  (double a) | 返回值的反正切值; 返回的角度在-pi / 2到pi / 2的范围内。 |
| static double | [atan2](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#atan2(double,double))  <br />  (double y, double x) | 返回从直角坐标（转换角度 theta x ， y ）为极坐标 （R，θ-）。 |
| static double | [cbrt](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#cbrt(double))  <br />  (double a) | 返回 double值的多维数据集根。 |
| static double | [ceil](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#ceil(double))  <br />  (double a) | 返回大于或等于参数且等于数学整数的最小值（最接近负无穷大） double 。 |
| static double | [copySign](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#copySign(double,double))  <br />  (double magnitude, double sign) | 返回带有第二个浮点参数符号的第一个浮点参数。 |
| static float | [copySign](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#copySign(float,float))  <br />  (float magnitude, float sign) | 返回带有第二个浮点参数符号的第一个浮点参数。 |
| static double | [cos](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#cos(double))  <br />  (double a) | 返回角度的三角余弦值。 |
| static double | [cosh](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#cosh(double))  <br />  (double x) | 返回 double值的双曲余弦值。 |
| static int | [decrementExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#decrementExact(int))  <br />  (int a) | 返回参数递减1，如果结果溢出 int则抛出异常。 |
| static long | [decrementExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#decrementExact(long))  <br />  (long a) | 返回参数递减1，如果结果溢出 long则抛出异常。 |
| static double | [exp](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#exp(double))  <br />  (double a) | 返回Euler的数字 e ，其值 double值。 |
| static double | [expm1](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#expm1(double))  <br />  (double x) | 返回 e x -1。 |
| static double | [floor](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floor(double))  <br />  (double a) | 返回小于或等于参数且等于数学整数的最大值（最接近正无穷大） double 。 |
| static int | [floorDiv](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorDiv(int,int))  <br />  (int x, int y) | 返回小于或等于代数商的最大值（最接近正无穷大） int 。 |
| static long | [floorDiv](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorDiv(long,int))  <br />  (long x, int y) | 返回小于或等于代数商的最大值（最接近正无穷大） long 。 |
| static long | [floorDiv](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorDiv(long,long))  <br />  (long x, long y) | 返回小于或等于代数商的最大值（最接近正无穷大） long 。 |
| static int | [floorMod](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorMod(int,int))  <br />  (int x, int y) | 返回 int参数的floor模数。 |
| static int | [floorMod](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorMod(long,int))  <br />  (long x, int y) | 返回 long和 int参数的floor数。 |
| static long | [floorMod](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorMod(long,long))  <br />  (long x, long y) | 返回 long参数的floor模数。 |
| static double | [fma](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#fma(double,double,double))  <br />  (double a, double b, double c) | 返回三个参数的融合乘法加法; 也就是说，返回与第三个参数相加的前两个参数的精确乘积，然后舍入一次到最接近的double 。 |
| static float | [fma](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#fma(float,float,float))  <br />  (float a, float b, float c) | 返回三个参数的融合乘法加法; 也就是说，返回与第三个参数相加的前两个参数的精确乘积，然后舍入一次到最接近的float 。 |
| static int | [getExponent](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#getExponent(double))  <br />  (double d) | 返回 double表示中使用的无偏指数。 |
| static int | [getExponent](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#getExponent(float))  <br />  (float f) | 返回 float表示中使用的无偏指数。 |
| static double | [hypot](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#hypot(double,double))  <br />  (double x, double y) | 返回sqrt（ x 2 + y 2 ），没有中间溢出或下溢。 |
| static double | [IEEEremainder](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#IEEEremainder(double,double))  <br />  (double f1, double f2) | 根据IEEE 754标准规定，计算两个参数的余数运算。 |
| static int | [incrementExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#incrementExact(int))  <br />  (int a) | 返回以1递增的参数，如果结果溢出 int则抛出异常。 |
| static long | [incrementExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#incrementExact(long))  <br />  (long a) | 返回以1递增的参数，如果结果溢出 long则抛出异常。 |
| static double | [log](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#log(double))  <br />  (double a) | 返回 double值的自然对数（基数 e ）。 |
| static double | [log10](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#log10(double))  <br />  (double a) | 返回 double值的基数10对数。 |
| static double | [log1p](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#log1p(double))  <br />  (double x) | 返回参数和的总和的自然对数。 |
| static double | [max](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#max(double,double))  <br />  (double a, double b) | 返回两个 double值中较大的 double 。 |
| static double | [min](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#min(double,double))  <br />  (double a, double b) | 返回两个 double值中较小的 double 。 |
| static int | [multiplyExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyExact(int,int))  <br />  (int x, int y) | 返回参数的乘积，如果结果溢出 int则抛出异常。 |
| static long | [multiplyExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyExact(long,int))  <br />  (long x, int y) | 返回参数的乘积，如果结果溢出 long则抛出异常。 |
| static long | [multiplyExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyExact(long,long))  <br />  (long x, long y) | 返回参数的乘积，如果结果溢出 long则抛出异常。 |
| static long | [multiplyFull](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyFull(int,int))  <br />  (int x, int y) | 返回参数的确切数学乘积。 |
| static long | [multiplyHigh](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyHigh(long,long))  <br />  (long x, long y) | 返回 long作为两个64位因子的128位乘积的最高64位。 |
| static int | [negateExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#negateExact(int))  <br />  (int a) | 返回参数的否定，如果结果溢出 int则抛出异常。 |
| static long | [negateExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#negateExact(long))  <br />  (long a) | 返回参数的否定，如果结果溢出 long则抛出异常。 |
| static double | [nextAfter](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextAfter(double,double))  <br />  (double start, double direction) | 返回第二个参数方向上第一个参数旁边的浮点数。 |
| static float | [nextAfter](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextAfter(float,double))  <br />  (float start, double direction) | 返回第二个参数方向上第一个参数旁边的浮点数。 |
| static double | [nextDown](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextDown(double))  <br />  (double d) | 返回负无穷大方向上与 d相邻的浮点值。 |
| static float | [nextDown](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextDown(float))  <br />  (float f) | 返回负无穷大方向上与 f相邻的浮点值。 |
| static double | [nextUp](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextUp(double))  <br />  (double d) | 返回正无穷大方向上与 d相邻的浮点值。 |
| static float | [nextUp](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextUp(float))  <br />  (float f) | 返回正无穷大方向上与 f相邻的浮点值。 |
| static double | [pow](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#pow(double,double))  <br />  (double a, double b) | 返回第一个参数的值，该值是第二个参数的幂。 |
| static double | [random(](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#random())  <br />  ) | 返回带有正号的 double值，大于或等于 0.0且小于 1.0 。 |
| static double | [rint](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#rint(double))  <br />  (double a) | 返回与 double值最接近的 double值，该值等于数学整数。 |
| static long | [round](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#round(double))  <br />  (double a) | 返回与参数最接近的 long ，并将关系四舍五入为正无穷大。 |
| static int | [round](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#round(float))  <br />  (float a) | 返回与参数最接近的 int ，并将关系四舍五入为正无穷大。 |
| static double | [scalb](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#scalb(double,int))  <br />  (double d, int scaleFactor) | 返回 d ×2 scaleFactor舍入，就像通过单个正确舍入的浮点乘以双 scaleFactor值集的成员一样。 |
| static float | [scalb](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#scalb(float,int))  <br />  (float f, int scaleFactor) | 返回 f ×2 scaleFactor舍入，就像通过单个正确舍入的浮点乘以浮点值集的成员一样。 |
| static double | [signum](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#signum(double))  <br />  (double d) | 返回参数的signum函数; 如果参数为零，则为零;如果参数大于零，则为1.0;如果参数小于零，则为-1.0。 |
| static float | [signum](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#signum(float))  <br />  (float f) | 返回参数的signum函数; 如果参数为零则为零，如果参数大于零则为1.0f，如果参数小于零则为-1.0f。 |
| static double | [sin](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#sin(double))  <br />  (double a) | 返回角度的三角正弦值。 |
| static double | [sinh](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#sinh(double))  <br />  (double x) | 返回 double值的双曲正弦值。 |
| static double | [sqrt](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#sqrt(double))  <br />  (double a) | 返回 double值的正确舍入正平方根。 |
| static int | [subtractExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#subtractExact(int,int))  <br />  (int x, int y) | 返回参数的差异，如果结果溢出 int则抛出异常。 |
| static long | [subtractExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#subtractExact(long,long))  <br />  (long x, long y) | 返回参数的差异，如果结果溢出 long则抛出异常。 |
| static double | [tan](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#tan(double))  <br />  (double a) | 返回角度的三角正切。 |
| static double | [tanh](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#tanh(double))  <br />  (double x) | 返回 double值的双曲正切值。 |
| static double | [toDegrees](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#toDegrees(double))  <br />  (double angrad) | 将以弧度测量的角度转换为以度为单位测量的近似等效角度。 |
| static int | [toIntExact](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#toIntExact(long))  <br />  (long value) | 返回long参数的值; 如果值溢出int则抛出异常。 |
| static double | [toRadians](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#toRadians(double))  <br />  (double angdeg) | 将以度为单位测量的角度转换为以弧度为单位测量的近似等效角度。 |
| static double | [ulp](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#ulp(double))  <br />  (double d) | 返回参数的ulp大小。 |
| static float | [ulp](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#ulp(float))  <br />  (float f) | 返回参数的ulp大小。 |


## BigInteger
| 构造器 | 描述 |
| --- | --- |
| [BigInteger](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(byte%5B%5D))  <br />  (byte[] val) | 将包含BigInteger的二进制补码二进制表示的字节数组转换为BigInteger。 |
| [BigInteger](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(byte%5B%5D,int,int))  <br />  (byte[] val, int off, int len) | 将包含BigInteger的二进制补码二进制表示的字节子数组转换为BigInteger。 |
| [BigInteger](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(int,byte%5B%5D))  <br />  (int signum, byte[] magnitude) | 将BigInteger的符号幅度表示转换为BigInteger。 |
| [BigInteger](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(int,byte%5B%5D,int,int))  <br />  (int signum, byte[] magnitude, int off, int len) | 将BigInteger的符号幅度表示转换为BigInteger。 |
| [BigInteger](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(int,int,java.util.Random))  <br />  (int bitLength, int certainty, Random rnd) | 使用指定的bitLength构造一个随机生成的可能为素数的正BigInteger。 |
| [BigInteger](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(int,java.util.Random))  <br />  (int numBits, Random rnd) | 构造一个随机生成的BigInteger，均匀分布在0到（2 numBits - 1）的范围内。 |
| [BigInteger](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(java.lang.String))  <br />  (String val) | 将BigInteger的十进制字符串表示形式转换为BigInteger。 |
| [BigInteger](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(java.lang.String,int))  <br />  (String val, int radix) | 将指定基数中BigInteger的String表示形式转换为BigInteger。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| BigInteger | [abs(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#abs())  <br />  ) | 返回一个BigInteger，其值是此BigInteger的绝对值。 |
| BigInteger | [add](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#add(java.math.BigInteger))  <br />  (BigInteger val) | 返回一个值为 (this + val)的BigInteger。 |
| BigInteger | [and](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#and(java.math.BigInteger))  <br />  (BigInteger val) | 返回值为 (this & val)的BigInteger。 |
| BigInteger | [andNot](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#andNot(java.math.BigInteger))  <br />  (BigInteger val) | 返回值为 (this & ~val)的BigInteger。 |
| int | [bitCount(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#bitCount())  <br />  ) | 返回此BigInteger的二进制补码表示中与其符号位不同的位数。 |
| int | [bitLength(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#bitLength())  <br />  ) | 返回此BigInteger的最小二进制补码表示中的位数， 不包括符号位。 |
| byte | [byteValueExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#byteValueExact())  <br />  ) | 将 BigInteger转换为 byte ，检查是否丢失了信息。 |
| BigInteger | [clearBit](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#clearBit(int))  <br />  (int n) | 返回一个BigInteger，其值等于此BigInteger且指定位已清除。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#compareTo(java.math.BigInteger))  <br />  (BigInteger val) | 将此BigInteger与指定的BigInteger进行比较。 |
| BigInteger | [divide](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#divide(java.math.BigInteger))  <br />  (BigInteger val) | 返回值为 (this / val)的BigInteger。 |
| [BigInteger] | [divideAndRemainder](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#divideAndRemainder(java.math.BigInteger))  <br />  (BigInteger val) | 返回两个BigIntegers的数组，其中包含 (this / val)后跟 (this % val) 。 |
| double | [doubleValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#doubleValue())  <br />  ) | 将此BigInteger转换为 double 。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#equals(java.lang.Object))  <br />  (Object x) | 将此BigInteger与指定的Object进行相等性比较。 |
| BigInteger | [flipBit](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#flipBit(int))  <br />  (int n) | 返回一个BigInteger，其值等于此BigInteger，并且指定的位被翻转。 |
| float | [floatValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#floatValue())  <br />  ) | 将此BigInteger转换为 float 。 |
| BigInteger | [gcd](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#gcd(java.math.BigInteger))  <br />  (BigInteger val) | 返回一个BigInteger，其值是 abs(this)和 abs(val) 。 |
| int | [getLowestSetBit(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#getLowestSetBit())  <br />  ) | 返回此BigInteger中最右边（最低位）一位的索引（最右边一位右边的零位数）。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#hashCode())  <br />  ) | 返回此BigInteger的哈希码。 |
| int | [intValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#intValue())  <br />  ) | 将此BigInteger转换为 int 。 |
| int | [intValueExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#intValueExact())  <br />  ) | 将此 BigInteger转换为 int ，检查是否丢失了信息。 |
| boolean | [isProbablePrime](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#isProbablePrime(int))  <br />  (int certainty) | 返回 true如果此BigInteger可能为素数， false ，如果它一定为合。 |
| long | [longValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#longValue())  <br />  ) | 将此BigInteger转换为 long 。 |
| long | [longValueExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#longValueExact())  <br />  ) | 将此 BigInteger转换为 long ，检查是否丢失了信息。 |
| BigInteger | [max](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#max(java.math.BigInteger))  <br />  (BigInteger val) | 返回此BigInteger和 val 。 |
| BigInteger | [min](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#min(java.math.BigInteger))  <br />  (BigInteger val) | 返回此BigInteger和 val 。 |
| BigInteger | [mod](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#mod(java.math.BigInteger))  <br />  (BigInteger m) | 返回一个值为 (this mod m的BigInteger。 |
| BigInteger | [modInverse](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#modInverse(java.math.BigInteger))  <br />  (BigInteger m) | 返回BigInteger，其值为 (this -1 mod m) 。 |
| BigInteger | [modPow](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#modPow(java.math.BigInteger,java.math.BigInteger))  <br />  (BigInteger exponent, BigInteger m) | 返回一个值为 (thisexponent mod m)的BigInteger。 |
| BigInteger | [multiply](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#multiply(java.math.BigInteger))  <br />  (BigInteger val) | 返回值为 (this * val)的BigInteger。 |
| BigInteger | [negate(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#negate())  <br />  ) | 返回值为 (-this)的BigInteger。 |
| BigInteger | [nextProbablePrime(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#nextProbablePrime())  <br />  ) | 返回大于此 BigInteger的第一个整数，该整数可能是素数。 |
| BigInteger | [not(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#not())  <br />  ) | 返回一个值为 (~this)的BigInteger。 |
| BigInteger | [or](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#or(java.math.BigInteger))  <br />  (BigInteger val) | 返回一个值为 (this |
| BigInteger | [pow](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#pow(int))  <br />  (int exponent) | 返回值为 (thisexponent)的BigInteger。 |
| static BigInteger | [probablePrime](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#probablePrime(int,java.util.Random))  <br />  (int bitLength, Random rnd) | 使用指定的bitLength返回可能为素数的正BigInteger。 |
| BigInteger | [remainder](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#remainder(java.math.BigInteger))  <br />  (BigInteger val) | 返回一个值为 (this % val)的BigInteger。 |
| BigInteger | [setBit](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#setBit(int))  <br />  (int n) | 返回一个BigInteger，其值等于此BigInteger并设置了指定的位。 |
| BigInteger | [shiftLeft](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#shiftLeft(int))  <br />  (int n) | 返回值为 (this << n)的BigInteger。 |
| BigInteger | [shiftRight](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#shiftRight(int))  <br />  (int n) | 返回值为 (this >> n)的BigInteger。 |
| short | [shortValueExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#shortValueExact())  <br />  ) | 将此 BigInteger转换为 short ，检查是否丢失了信息。 |
| int | [signum(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#signum())  <br />  ) | 返回此BigInteger的signum函数。 |
| BigInteger | [sqrt(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#sqrt())  <br />  ) | 返回此BigInteger的整数平方根。 |
| [BigInteger] | [sqrtAndRemainder(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#sqrtAndRemainder())  <br />  ) | 返回两个BigIntegers的数组，其中包含 s的整数平方根 this及其余部分 this - s*s 。 |
| BigInteger | [subtract](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#subtract(java.math.BigInteger))  <br />  (BigInteger val) | 返回值为 (this - val)的BigInteger。 |
| boolean | [testBit](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#testBit(int))  <br />  (int n) | 当且仅当指定位置位时，返回 true 。 |
| byte[] | [toByteArray(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#toByteArray())  <br />  ) | 返回一个包含此BigInteger的二进制补码表示的字节数组。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#toString())  <br />  ) | 返回此BigInteger的十进制String表示形式。 |
| String | [toString](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#toString(int))  <br />  (int radix) | 返回给定基数中此BigInteger的String表示形式。 |
| static BigInteger | [valueOf](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#valueOf(long))  <br />  (long val) | 返回一个BigInteger，其值等于指定的 long 。 |
| BigInteger | [xor](https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#xor(java.math.BigInteger))  <br />  (BigInteger val) | 返回值为 (this ^ val)的BigInteger。 |


## BigDecimal
| 构造器 | 描述 |
| --- | --- |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(char%5B%5D))  <br />  (char[] in) | 将 BigDecimal的字符数组表示 BigDecimal转换为 BigDecimal ，接受与 [BigDecimal(String)构](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))  <br />  造函数相同的字符序列。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(char%5B%5D,int,int))  <br />  (char[] in, int offset, int len) | 将 BigDecimal的字符数组表示转换为 BigDecimal ，接受与 [BigDecimal(String)构](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))  <br />  造函数相同的字符序列，同时允许指定子数组。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(char%5B%5D,int,int,java.math.MathContext))  <br />  (char[] in, int offset, int len, MathContext mc) | 将 BigDecimal的字符数组表示转换为 BigDecimal ，接受与 [BigDecimal(String)构](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))  <br />  造函数相同的字符序列，同时允许指定子数组并根据上下文设置进行舍入。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(char%5B%5D,java.math.MathContext))  <br />  (char[] in, MathContext mc) | 将 BigDecimal的字符数组表示转换为 BigDecimal ，接受与 [BigDecimal(String)构](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))  <br />  造函数相同的字符序列，并根据上下文设置进行舍入。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(double))  <br />  (double val) | 将 double转换为 BigDecimal ，它是 double的二进制浮点值的精确十进制表示形式。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(double,java.math.MathContext))  <br />  (double val, MathContext mc) | 将 double转换为 BigDecimal ，并根据上下文设置进行舍入。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(int))  <br />  (int val) | 将 int翻译成 BigDecimal 。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(int,java.math.MathContext))  <br />  (int val, MathContext mc) | 将 int转换为 BigDecimal ，并根据上下文设置进行舍入。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(long))  <br />  (long val) | 将 long翻译成 BigDecimal 。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(long,java.math.MathContext))  <br />  (long val, MathContext mc) | 将 long转换为 BigDecimal ，并根据上下文设置进行舍入。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))  <br />  (String val) | 将 BigDecimal的字符串表示 BigDecimal转换为 BigDecimal 。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String,java.math.MathContext))  <br />  (String val, MathContext mc) | 将 BigDecimal的字符串表示 BigDecimal转换为 BigDecimal ，接受与 [BigDecimal(String)构](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))  <br />  造函数相同的字符串，并根据上下文设置进行舍入。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.math.BigInteger))  <br />  (BigInteger val) | 将 BigInteger翻译成 BigDecimal 。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.math.BigInteger,int))  <br />  (BigInteger unscaledVal, int scale) | 将 BigInteger缩放值和 int比例转换为 BigDecimal 。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.math.BigInteger,int,java.math.MathContext))  <br />  (BigInteger unscaledVal, int scale, MathContext mc) | 将 BigInteger缩放值和 int比例转换为 BigDecimal ，并根据上下文设置进行舍入。 |
| [BigDecimal](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.math.BigInteger,java.math.MathContext))  <br />  (BigInteger val, MathContext mc) | 根据上下文设置将 BigInteger转换为 BigDecimal舍入。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| BigDecimal | [abs(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#abs())  <br />  ) | 返回 BigDecimal其值是此的绝对值 BigDecimal ，其标为 this.scale() 。 |
| BigDecimal | [abs](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#abs(java.math.MathContext))  <br />  (MathContext mc) | 返回 BigDecimal其值为此 BigDecimal的绝对值，并根据上下文设置进行舍入。 |
| BigDecimal | [add](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#add(java.math.BigDecimal))  <br />  (BigDecimal augend) | 返回 BigDecimal其值为 (this + augend) ，其比例为 max(this.scale(), augend.scale()) 。 |
| BigDecimal | [add](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#add(java.math.BigDecimal,java.math.MathContext))  <br />  (BigDecimal augend, MathContext mc) | 返回 BigDecimal其值为 (this + augend) ，根据上下文设置进行舍入。 |
| byte | [byteValueExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#byteValueExact())  <br />  ) | 将 BigDecimal转换为 byte ，检查是否丢失了信息。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#compareTo(java.math.BigDecimal))  <br />  (BigDecimal val) | 将此 BigDecimal与指定的 BigDecimal 。 |
| BigDecimal | [divide](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divide(java.math.BigDecimal))  <br />  (BigDecimal divisor) | 返回BigDecimal其值为(this / divisor) ，其首选比例为(this.scale() - divisor.scale()) ; 如果无法表示准确的商（因为它具有非终止的十进制扩展），则抛出ArithmeticException 。 |
| BigDecimal | [divide](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divide(java.math.BigDecimal,int,java.math.RoundingMode))  <br />  (BigDecimal divisor, int scale, RoundingMode roundingMode) | 返回 BigDecimal其值为 (this / divisor) ，其比例为指定的比例。 |
| BigDecimal | [divide](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divide(java.math.BigDecimal,java.math.MathContext))  <br />  (BigDecimal divisor, MathContext mc) | 返回 BigDecimal其值为 (this / divisor) ，根据上下文设置进行舍入。 |
| BigDecimal | [divide](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divide(java.math.BigDecimal,java.math.RoundingMode))  <br />  (BigDecimal divisor, RoundingMode roundingMode) | 返回 BigDecimal其值为 (this / divisor) ，其比例为 this.scale() 。 |
| [BigDecimal] | [divideAndRemainder](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divideAndRemainder(java.math.BigDecimal))  <br />  (BigDecimal divisor) | 返回一个两元件 BigDecimal阵列含有的结果 divideToIntegralValue ，随后的结果 remainder上的两个操作数。 |
| [BigDecimal] | [divideAndRemainder](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divideAndRemainder(java.math.BigDecimal,java.math.MathContext))  <br />  (BigDecimal divisor, MathContext mc) | 返回一个两元件 BigDecimal阵列含有的结果 divideToIntegralValue ，随后的结果 remainder上与根据上下文设置进行舍入计算出的两个操作数。 |
| BigDecimal | [divideToIntegralValue](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divideToIntegralValue(java.math.BigDecimal))  <br />  (BigDecimal divisor) | 返回 BigDecimal其值是 (this / divisor)舍入的商 (this / divisor)的整数部分。 |
| BigDecimal | [divideToIntegralValue](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divideToIntegralValue(java.math.BigDecimal,java.math.MathContext))  <br />  (BigDecimal divisor, MathContext mc) | 返回 BigDecimal ，其值是整数部分 (this / divisor) 。 |
| double | [doubleValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#doubleValue())  <br />  ) | 将 BigDecimal转换为 double 。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#equals(java.lang.Object))  <br />  (Object x) | 将此 BigDecimal与指定的 Object进行相等性比较。 |
| float | [floatValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#floatValue())  <br />  ) | 将 BigDecimal转换为 float 。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#hashCode())  <br />  ) | 返回此 BigDecimal的哈希码。 |
| int | [intValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#intValue())  <br />  ) | 将 BigDecimal成 int 。 |
| int | [intValueExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#intValueExact())  <br />  ) | 将 BigDecimal转换为 int ，检查是否丢失了信息。 |
| long | [longValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#longValue())  <br />  ) | 将 BigDecimal转换为 long 。 |
| long | [longValueExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#longValueExact())  <br />  ) | 将此 BigDecimal转换为 long ，检查是否丢失了信息。 |
| BigDecimal | [max](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#max(java.math.BigDecimal))  <br />  (BigDecimal val) | 返回 BigDecimal和 val 。 |
| BigDecimal | [min](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#min(java.math.BigDecimal))  <br />  (BigDecimal val) | 返回 BigDecimal和 val 。 |
| BigDecimal | [movePointLeft](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#movePointLeft(int))  <br />  (int n) | 返回一个 BigDecimal ，相当于这个小数点向左移动 n位置。 |
| BigDecimal | [movePointRight](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#movePointRight(int))  <br />  (int n) | 返回一个 BigDecimal ，相当于这个小数点向右移动 n位置。 |
| BigDecimal | [multiply](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#multiply(java.math.BigDecimal))  <br />  (BigDecimal multiplicand) | 返回 BigDecimal其值为 (this × multiplicand) ，其比例为 (this.scale() + multiplicand.scale()) 。 |
| BigDecimal | [multiply](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#multiply(java.math.BigDecimal,java.math.MathContext))  <br />  (BigDecimal multiplicand, MathContext mc) | 返回 BigDecimal其值为 (this × multiplicand) ，根据上下文设置进行舍入。 |
| BigDecimal | [negate(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#negate())  <br />  ) | 返回 BigDecimal其值为 (-this) ，其比例为 this.scale() 。 |
| BigDecimal | [negate](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#negate(java.math.MathContext))  <br />  (MathContext mc) | 返回 BigDecimal其值为 (-this) ，根据上下文设置进行舍入。 |
| BigDecimal | [plus(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#plus())  <br />  ) | 返回 BigDecimal其值为 (+this) ，其比例为 this.scale() 。 |
| BigDecimal | [plus](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#plus(java.math.MathContext))  <br />  (MathContext mc) | 返回 BigDecimal其值为 (+this) ，根据上下文设置进行舍入。 |
| BigDecimal | [pow](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#pow(int))  <br />  (int n) | 返回 BigDecimal其值为 (thisn) ，精确计算功率，精度无限制。 |
| BigDecimal | [pow](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#pow(int,java.math.MathContext))  <br />  (int n, MathContext mc) | 返回 BigDecimal其值为 (thisn) 。 |
| int | [precision(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#precision())  <br />  ) | 返回此 BigDecimal的 精度 。 |
| BigDecimal | [remainder](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#remainder(java.math.BigDecimal))  <br />  (BigDecimal divisor) | 返回 BigDecimal其值为 (this % divisor) 。 |
| BigDecimal | [remainder](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#remainder(java.math.BigDecimal,java.math.MathContext))  <br />  (BigDecimal divisor, MathContext mc) | 返回 BigDecimal其值为 (this % divisor) ，根据上下文设置进行舍入。 |
| BigDecimal | [round](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#round(java.math.MathContext))  <br />  (MathContext mc) | 返回 BigDecimal根据四舍五入 MathContext设置。 |
| int | [scale(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#scale())  <br />  ) | 返回 BigDecimal的 比例 。 |
| BigDecimal | [scaleByPowerOfTen](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#scaleByPowerOfTen(int))  <br />  (int n) | 返回其数值等于（ this * 10 n ）的BigDecimal。 |
| BigDecimal | [setScale](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#setScale(int))  <br />  (int newScale) | 返回 BigDecimal其标度为指定值，其值在数值上等于此 BigDecimal 。 |
| BigDecimal | [setScale](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#setScale(int,java.math.RoundingMode))  <br />  (int newScale, RoundingMode roundingMode) | 返回 BigDecimal其比例为指定值，其未缩放值通过将此 BigDecimal值乘以或除以适当的10的幂来确定，以保持其总值。 |
| short | [shortValueExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#shortValueExact())  <br />  ) | 将此 BigDecimal转换为 short ，检查是否丢失了信息。 |
| int | [signum(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#signum())  <br />  ) | 返回此 BigDecimal的signum函数。 |
| BigDecimal | [sqrt](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#sqrt(java.math.MathContext))  <br />  (MathContext mc) | 返回 this平方根的 this并根据上下文设置进行舍入。 |
| BigDecimal | [stripTrailingZeros(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#stripTrailingZeros())  <br />  ) | 返回 BigDecimal ，它在数值上等于此值，但从表示中删除了任何尾随零。 |
| BigDecimal | [subtract](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#subtract(java.math.BigDecimal))  <br />  (BigDecimal subtrahend) | 返回 BigDecimal其值为 (this - subtrahend) ，其比例为 max(this.scale(), subtrahend.scale()) 。 |
| BigDecimal | [subtract](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#subtract(java.math.BigDecimal,java.math.MathContext))  <br />  (BigDecimal subtrahend, MathContext mc) | 返回 BigDecimal其值为 (this - subtrahend) ，根据上下文设置进行舍入。 |
| BigInteger | [toBigInteger(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toBigInteger())  <br />  ) | 将 BigDecimal转换为 BigInteger 。 |
| BigInteger | [toBigIntegerExact(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toBigIntegerExact())  <br />  ) | 将 BigDecimal转换为 BigInteger ，检查是否丢失了信息。 |
| String | [toEngineeringString(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toEngineeringString())  <br />  ) | 如果需要指数，则使用工程符号返回此 BigDecimal的字符串表示形式。 |
| String | [toPlainString(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toPlainString())  <br />  ) | 返回此 BigDecimal的字符串表示形式，不带指数字段。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toString())  <br />  ) | 如果需要指数，则使用科学计数法返回此 BigDecimal的字符串表示形式。 |
| BigDecimal | [ulp(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#ulp())  <br />  ) | 返回此 BigDecimal的ulp（最后一个单位）的 BigDecimal 。 |
| BigInteger | [unscaledValue(](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#unscaledValue())  <br />  ) | 返回 BigInteger其值是此的 非标度值 BigDecimal 。 |
| static BigDecimal | [valueOf](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#valueOf(double))  <br />  (double val) | 转换一个 double成 BigDecimal ，使用 double通过所提供的规范的字符串表示 [Double.toString(double)方](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#toString(double))  <br />  法。 |
| static BigDecimal | [valueOf](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#valueOf(long))  <br />  (long val) | 将 long值转换为 BigDecimal ，其标度为零。 |
| static BigDecimal | [valueOf](https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#valueOf(long,int))  <br />  (long unscaledVal, int scale) | 将 long值和 int比例转换为 BigDecimal 。 |


## Integer
| 变量和类型 | 字段 | 描述 |
| --- | --- | --- |
| static int | [BYTES](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#BYTES) | 用于表示二进制补码二进制形式的 int值的字节数。 |
| static int | [MAX_VALUE](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#MAX_VALUE) | 保持最大值的常数 int可以具有2 31 -1。 |
| static int | [MIN_VALUE](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#MIN_VALUE) | 保持最小值的常数 int可以具有，-2 31 。 |
| static int | [SIZE](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#SIZE) | 用于表示二进制补码二进制形式的 int值的位数。 |
| static 类<Integer> | [TYPE](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#TYPE) | 类实例表示基本类型 int 。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| static int | [bitCount](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#bitCount(int))  <br />  (int i) | 返回指定的 int值的二进制补码表示形式中的 int 。 |
| byte | [byteValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#byteValue())  <br />  ) | 返回此值 Integer为 byte的基本收缩转换后。 |
| static int | [compare](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#compare(int,int))  <br />  (int x, int y) | 以数字方式比较两个 int值。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#compareTo(java.lang.Integer))  <br />  (Integer anotherInteger) | 以数字方式比较两个 Integer对象。 |
| static int | [compareUnsigned](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#compareUnsigned(int,int))  <br />  (int x, int y) | 比较两个 int值，将数值视为无符号。 |
| static Integer | [decode](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#decode(java.lang.String))  <br />  (String nm) | 将 String解码为 Integer 。 |
| static int | [divideUnsigned](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#divideUnsigned(int,int))  <br />  (int dividend, int divisor) | 返回将第一个参数除以第二个参数的无符号商，其中每个参数和结果都被解释为无符号值。 |
| double | [doubleValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#doubleValue())  <br />  ) | 返回此值 Integer为 double一个宽元转换后。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#equals(java.lang.Object))  <br />  (Object obj) | 将此对象与指定的对象进行比较。 |
| float | [floatValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#floatValue())  <br />  ) | 返回此值 Integer为 float一个宽元转换后。 |
| static Integer | [getInteger](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#getInteger(java.lang.String))  <br />  (String nm) | 确定具有指定名称的系统属性的整数值。 |
| static Integer | [getInteger](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#getInteger(java.lang.String,int))  <br />  (String nm, int val) | 确定具有指定名称的系统属性的整数值。 |
| static Integer | [getInteger](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#getInteger(java.lang.String,java.lang.Integer))  <br />  (String nm, Integer val) | 返回具有指定名称的系统属性的整数值。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#hashCode())  <br />  ) | 返回此 Integer的哈希码。 |
| static int | [hashCode](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#hashCode(int))  <br />  (int value) | 返回int值的哈希码; 与Integer.hashCode()兼容。 |
| static int | [highestOneBit](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#highestOneBit(int))  <br />  (int i) | 返回 int值，最多只有一位，位于指定 int值中最高位（“最左侧”）一位的位置。 |
| int | [intValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#intValue())  <br />  ) | 返回此值 Integer为 int 。 |
| long | [longValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#longValue())  <br />  ) | 在扩展基元转换后，将此 Integer的值作为 long返回。 |
| static int | [lowestOneBit](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#lowestOneBit(int))  <br />  (int i) | 返回 int值，最多只有一位，位于指定 int值中最低位（“最右侧”）一位的位置。 |
| static int | [max](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#max(int,int))  <br />  (int a, int b) | 返回两个 int值中较大的一个， int调用 [Math.max一样 ](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#max(int,int))  <br />  。 |
| static int | [min](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#min(int,int))  <br />  (int a, int b) | 返回两个 int值中较小的一个， int调用 [Math.min一样 ](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#min(int,int))  <br />  。 |
| static int | [numberOfLeadingZeros](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#numberOfLeadingZeros(int))  <br />  (int i) | 返回指定 int值的二进制补码二进制表示中最高位（“最左侧”）一位之前的零位数。 |
| static int | [numberOfTrailingZeros](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#numberOfTrailingZeros(int))  <br />  (int i) | 返回指定 int值的二进制补码表达式中最低位（“最右侧”）一位后的零位数。 |
| static int | [parseInt](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseInt(java.lang.CharSequence,int,int,int))  <br />  (CharSequence s, int beginIndex, int endIndex, int radix) | 解析CharSequence参数作为有符号int指定radix ，在指定的开始beginIndex并延伸到endIndex - 1 。 |
| static int | [parseInt](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseInt(java.lang.String))  <br />  (String s) | 将字符串参数解析为带符号的十进制整数。 |
| static int | [parseInt](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseInt(java.lang.String,int))  <br />  (String s, int radix) | 将字符串参数解析为第二个参数指定的基数中的有符号整数。 |
| static int | [parseUnsignedInt](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseUnsignedInt(java.lang.CharSequence,int,int,int))  <br />  (CharSequence s, int beginIndex, int endIndex, int radix) | 解析CharSequence参数为一个无符号int在指定的radix ，在指定的开始beginIndex并延伸到endIndex - 1 。 |
| static int | [parseUnsignedInt](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseUnsignedInt(java.lang.String))  <br />  (String s) | 将字符串参数解析为无符号十进制整数。 |
| static int | [parseUnsignedInt](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseUnsignedInt(java.lang.String,int))  <br />  (String s, int radix) | 将字符串参数解析为第二个参数指定的基数中的无符号整数。 |
| static int | [remainderUnsigned](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#remainderUnsigned(int,int))  <br />  (int dividend, int divisor) | 返回将第一个参数除以第二个参数的无符号余数，其中每个参数和结果都被解释为无符号值。 |
| static int | [reverse](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#reverse(int))  <br />  (int i) | 返回通过反转指定的 int值的二进制补码二进制表示中的位顺序获得的值。 |
| static int | [reverseBytes](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#reverseBytes(int))  <br />  (int i) | 返回通过反转指定的 int值的二进制补码表示中的字节顺序获得的值。 |
| static int | [rotateLeft](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#rotateLeft(int,int))  <br />  (int i, int distance) | 返回通过旋转指定 int留下的指定 int值的二进制补码表达式获得的值。 |
| static int | [rotateRight](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#rotateRight(int,int))  <br />  (int i, int distance) | 返回通过将指定的 int值的二进制补码表达式旋转指定的 int值。 |
| short | [shortValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#shortValue())  <br />  ) | 返回此值 Integer为 short的基本收缩转换后。 |
| static int | [signum](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#signum(int))  <br />  (int i) | 返回指定的 int值的signum函数。 |
| static int | [sum](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#sum(int,int))  <br />  (int a, int b) | 根据+运算符将两个整数相加。 |
| static String | [toBinaryString](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toBinaryString(int))  <br />  (int i) | 返回整数参数的字符串表示形式，作为base 2中的无符号整数。 |
| static String | [toHexString](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toHexString(int))  <br />  (int i) | 返回整数参数的字符串表示形式，作为基数为16的无符号整数。 |
| static String | [toOctalString](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toOctalString(int))  <br />  (int i) | 返回整数参数的字符串表示形式，作为基数为8的无符号整数。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toString())  <br />  ) | 返回表示此 Integer值的 String对象。 |
| static String | [toString](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toString(int))  <br />  (int i) | 返回表示指定整数的 String对象。 |
| static String | [toString](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toString(int,int))  <br />  (int i, int radix) | 返回第二个参数指定的基数中第一个参数的字符串表示形式。 |
| static long | [toUnsignedLong](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toUnsignedLong(int))  <br />  (int x) | 通过无符号转换将参数转换为 long 。 |
| static String | [toUnsignedString](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toUnsignedString(int))  <br />  (int i) | 以无符号十进制值的形式返回参数的字符串表示形式。 |
| static String | [toUnsignedString](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toUnsignedString(int,int))  <br />  (int i, int radix) | 返回第一个参数的字符串表示形式，作为第二个参数指定的基数中的无符号整数值。 |
| static Integer | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#valueOf(int))  <br />  (int i) | 返回表示指定的 int值的 Integer实例。 |
| static Integer | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#valueOf(java.lang.String))  <br />  (String s) | 返回一个 Integer物体保持在指定的值 String 。 |
| static Integer | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#valueOf(java.lang.String,int))  <br />  (String s, int radix) | 返回 Integer对象，当使用第二个参数给出的基数进行解析时，该对象保存从指定的 String提取的值。 |


## Double
| 变量和类型 | 字段 | 描述 |
| --- | --- | --- |
| static int | [BYTES](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#BYTES) | 用于表示 double值的字节数。 |
| static int | [MAX_EXPONENT](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MAX_EXPONENT) | 最大指数有限 double变量可能有。 |
| static double | [MAX_VALUE](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MAX_VALUE) | 持有 double类型的最大正有限值的 double ，（2-2 -52 ）·2 1023 。 |
| static int | [MIN_EXPONENT](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MIN_EXPONENT) | 标准化 double变量的最小指数可能有。 |
| static double | [MIN_NORMAL](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MIN_NORMAL) | 保持 double -1022类型的最小正正常值的常量。 |
| static double | [MIN_VALUE](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MIN_VALUE) | 保持 double类型的最小正非零值的 常量 。 |
| static double | [NaN](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#NaN) | 保持类型为 double非数字（NaN）值的 double 。 |
| static double | [NEGATIVE_INFINITY](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#NEGATIVE_INFINITY) | 持有 double类型的负无穷大的 double 。 |
| static double | [POSITIVE_INFINITY](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#POSITIVE_INFINITY) | 保持 double类型的正无穷大的 double 。 |
| static int | [SIZE](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#SIZE) | 用于表示 double值的位数。 |
| static 类<Double> | [TYPE](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#TYPE) | 类实例表示基本类型 double 。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| byte | [byteValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#byteValue())  <br />  ) | 返回此值 Double为 byte的基本收缩转换后。 |
| static int | [compare](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#compare(double,double))  <br />  (double d1, double d2) | 比较两个指定的 double值。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#compareTo(java.lang.Double))  <br />  (Double anotherDouble) | 以数字方式比较两个 Double对象。 |
| static long | [doubleToLongBits](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#doubleToLongBits(double))  <br />  (double value) | 根据IEEE 754浮点“双格式”位布局返回指定浮点值的表示形式。 |
| static long | [doubleToRawLongBits](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#doubleToRawLongBits(double))  <br />  (double value) | 根据IEEE 754浮点“双格式”位布局返回指定浮点值的表示，保留非数字（NaN）值。 |
| double | [doubleValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#doubleValue())  <br />  ) | 返回此 Double对象的 double值。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#equals(java.lang.Object))  <br />  (Object obj) | 将此对象与指定的对象进行比较。 |
| float | [floatValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#floatValue())  <br />  ) | 返回此值 Double为 float的基本收缩转换后。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#hashCode())  <br />  ) | 返回此 Double对象的哈希码。 |
| static int | [hashCode](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#hashCode(double))  <br />  (double value) | 返回double值的哈希码; 与Double.hashCode()兼容。 |
| int | [intValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#intValue())  <br />  ) | 返回此的值 Double作为 int的基本收缩转换之后。 |
| static boolean | [isFinite](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isFinite(double))  <br />  (double d) | 如果参数是有限浮点值，则返回true ; 否则返回false （对于NaN和无穷大参数）。 |
| boolean | [isInfinite(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isInfinite())  <br />  ) | 返回 true如果此 Double值是无限大， false否则。 |
| static boolean | [isInfinite](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isInfinite(double))  <br />  (double v) | 返回 true如果指定的数是无限大， false否则。 |
| boolean | [isNaN(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isNaN())  <br />  ) | 返回 true如果此 Double值是不是非数字（NAN）， false否则。 |
| static boolean | [isNaN](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isNaN(double))  <br />  (double v) | 返回 true如果指定的号码是一个不一个数字（NaN）值， false否则。 |
| static double | [longBitsToDouble](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#longBitsToDouble(long))  <br />  (long bits) | 返回与给定位表示相对应的 double值。 |
| long | [longValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#longValue())  <br />  ) | 返回此值 Double为 long的基本收缩转换后。 |
| static double | [max](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#max(double,double))  <br />  (double a, double b) | 返回两个 double值中较大的一个， double调用 [Math.max一样 ](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#max(double,double))  <br />  。 |
| static double | [min](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#min(double,double))  <br />  (double a, double b) | 返回两个 double值中较小的一个， double调用 [Math.min一样 ](https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#min(double,double))  <br />  。 |
| static double | [parseDouble](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#parseDouble(java.lang.String))  <br />  (String s) | 返回一个新 double初始化为指定的代表的值 String ，如通过执行 valueOf类的方法 Double 。 |
| short | [shortValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#shortValue())  <br />  ) | 返回此值 Double为 short的基本收缩转换后。 |
| static double | [sum](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#sum(double,double))  <br />  (double a, double b) | 根据+运算符一起添加两个 double值。 |
| static String | [toHexString](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#toHexString(double))  <br />  (double d) | 返回 double参数的十六进制字符串表示形式。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#toString())  <br />  ) | 返回此 Double对象的字符串表示形式。 |
| static String | [toString](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#toString(double))  <br />  (double d) | 返回 double参数的字符串表示形式。 |
| static Double | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#valueOf(double))  <br />  (double d) | 返回表示指定的 double值的 Double实例。 |
| static Double | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#valueOf(java.lang.String))  <br />  (String s) | 返回 Double对象，其中 double由参数字符串 s表示的 double值。 |


## Character
| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| static int | [charCount](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#charCount(int))  <br />  (int codePoint) | 确定表示指定字符（Unicode代码点）所需的 char值的数量。 |
| char | [charValue(](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#charValue())  <br />  ) | 返回此 Character对象的值。 |
| static int | [codePointAt](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointAt(char%5B%5D,int))  <br />  (char[] a, int index) | 返回 char数组的给定索引处的代码点。 |
| static int | [codePointAt](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointAt(char%5B%5D,int,int))  <br />  (char[] a, int index, int limit) | 返回 char数组的给定索引处的代码点，其中只能使用 index小于 limit数组元素。 |
| static int | [codePointAt](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointAt(java.lang.CharSequence,int))  <br />  (CharSequence seq, int index) | 返回 CharSequence的给定索引处的代码点。 |
| static int | [codePointBefore](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointBefore(char%5B%5D,int))  <br />  (char[] a, int index) | 返回 char数组的给定索引之前的代码点。 |
| static int | [codePointBefore](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointBefore(char%5B%5D,int,int))  <br />  (char[] a, int index, int start) | 返回 char数组的给定索引之前的代码点，其中只能使用 index大于或等于 start数组元素。 |
| static int | [codePointBefore](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointBefore(java.lang.CharSequence,int))  <br />  (CharSequence seq, int index) | 返回 CharSequence的给定索引之前的代码点。 |
| static int | [codePointCount](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointCount(char%5B%5D,int,int))  <br />  (char[] a, int offset, int count) | 返回 char数组参数的子数组中的Unicode代码点数。 |
| static int | [codePointCount](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointCount(java.lang.CharSequence,int,int))  <br />  (CharSequence seq, int beginIndex, int endIndex) | 返回指定char序列的文本范围内的Unicode代码点数。 |
| static int | [codePointOf](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointOf(java.lang.String))  <br />  (String name) | 返回给定Unicode字符名称指定的Unicode字符的代码点值。 |
| static int | [compare](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#compare(char,char))  <br />  (char x, char y) | 以数字方式比较两个 char值。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#compareTo(java.lang.Character))  <br />  (Character anotherCharacter) | 以数字方式比较两个 Character对象。 |
| static int | [digit](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#digit(char,int))  <br />  (char ch, int radix) | 返回指定基数中的字符 ch的数值。 |
| static int | [digit](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#digit(int,int))  <br />  (int codePoint, int radix) | 返回指定基数中指定字符（Unicode代码点）的数值。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#equals(java.lang.Object))  <br />  (Object obj) | 将此对象与指定的对象进行比较。 |
| static char | [forDigit](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#forDigit(int,int))  <br />  (int digit, int radix) | 确定指定基数中特定数字的字符表示形式。 |
| static byte | [getDirectionality](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getDirectionality(char))  <br />  (char ch) | 返回给定字符的Unicode方向性属性。 |
| static byte | [getDirectionality](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getDirectionality(int))  <br />  (int codePoint) | 返回给定字符的Unicode方向性属性（Unicode代码点）。 |
| static String | [getName](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getName(int))  <br />  (int codePoint) | 返回指定字符 codePoint的Unicode名称，如果代码点为 [unassigned ](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#UNASSIGNED)  <br />  ，则返回null。 |
| static int | [getNumericValue](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getNumericValue(char))  <br />  (char ch) | 返回指定的Unicode字符表示的 int值。 |
| static int | [getNumericValue](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getNumericValue(int))  <br />  (int codePoint) | 返回指定字符（Unicode代码点）表示的 int值。 |
| static int | [getType](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getType(char))  <br />  (char ch) | 返回表示字符常规类别的值。 |
| static int | [getType](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getType(int))  <br />  (int codePoint) | 返回表示字符常规类别的值。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#hashCode())  <br />  ) | 返回此Character的哈希码; 等于调用charValue()的结果。 |
| static int | [hashCode](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#hashCode(char))  <br />  (char value) | 返回char值的哈希码; 与Character.hashCode()兼容。 |
| static char | [highSurrogate](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#highSurrogate(int))  <br />  (int codePoint) | 返回主导替代（一个 [high surrogate code unit所](https://www.unicode.org/glossary/#high_surrogate_code_unit)  <br />  述的） surrogate pair表示在UTF-16编码指定的补充的字符（Unicode代码点）。 |
| static boolean | [isAlphabetic](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isAlphabetic(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否为字母。 |
| static boolean | [isBmpCodePoint](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isBmpCodePoint(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否在 [Basic Multilingual Plane (BMP)中 ](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#BMP)  <br />  。 |
| static boolean | [isDefined](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isDefined(char))  <br />  (char ch) | 确定是否在Unicode中定义了字符。 |
| static boolean | [isDefined](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isDefined(int))  <br />  (int codePoint) | 确定是否在Unicode中定义了字符（Unicode代码点）。 |
| static boolean | [isDigit](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isDigit(char))  <br />  (char ch) | 确定指定的字符是否为数字。 |
| static boolean | [isDigit](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isDigit(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否为数字。 |
| static boolean | [isHighSurrogate](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isHighSurrogate(char))  <br />  (char ch) | 确定给定的 char值是否为 [Unicode high-surrogate code unit ](https://www.unicode.org/glossary/#high_surrogate_code_unit)  <br />  （也称为 前导代理代码单元 ）。 |
| static boolean | [isIdentifierIgnorable](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isIdentifierIgnorable(char))  <br />  (char ch) | 确定指定的字符是否应被视为Java标识符或Unicode标识符中的可忽略字符。 |
| static boolean | [isIdentifierIgnorable](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isIdentifierIgnorable(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否应被视为Java标识符或Unicode标识符中的可忽略字符。 |
| static boolean | [isIdeographic](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isIdeographic(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否为Unicode标准定义的CJKV（中文，日文，韩文和越南文）表意文字。 |
| static boolean | [isISOControl](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isISOControl(char))  <br />  (char ch) | 确定指定的字符是否为ISO控制字符。 |
| static boolean | [isISOControl](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isISOControl(int))  <br />  (int codePoint) | 确定引用的字符（Unicode代码点）是否为ISO控制字符。 |
| static boolean | [isJavaIdentifierPart](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isJavaIdentifierPart(char))  <br />  (char ch) | 确定指定的字符是否可能是Java标识符的一部分，而不是第一个字符。 |
| static boolean | [isJavaIdentifierPart](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isJavaIdentifierPart(int))  <br />  (int codePoint) | 确定字符（Unicode代码点）是否可能是Java标识符的一部分，而不是第一个字符。 |
| static boolean | [isJavaIdentifierStart](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isJavaIdentifierStart(char))  <br />  (char ch) | 确定指定的字符是否允许作为Java标识符中的第一个字符。 |
| static boolean | [isJavaIdentifierStart](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isJavaIdentifierStart(int))  <br />  (int codePoint) | 确定字符（Unicode代码点）是否允许作为Java标识符中的第一个字符。 |
| static boolean | [isLetter](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLetter(char))  <br />  (char ch) | 确定指定的字符是否为字母。 |
| static boolean | [isLetter](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLetter(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否为字母。 |
| static boolean | [isLetterOrDigit](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLetterOrDigit(char))  <br />  (char ch) | 确定指定的字符是字母还是数字。 |
| static boolean | [isLetterOrDigit](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLetterOrDigit(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是字母还是数字。 |
| static boolean | [isLowerCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLowerCase(char))  <br />  (char ch) | 确定指定的字符是否为小写字符。 |
| static boolean | [isLowerCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLowerCase(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否为小写字符。 |
| static boolean | [isLowSurrogate](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLowSurrogate(char))  <br />  (char ch) | 确定给定的 char值是否为 [Unicode low-surrogate code unit ](https://www.unicode.org/glossary/#low_surrogate_code_unit)  <br />  （也称为 trailing-surrogate代码单元 ）。 |
| static boolean | [isMirrored](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isMirrored(char))  <br />  (char ch) | 确定是否根据Unicode规范镜像该字符。 |
| static boolean | [isMirrored](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isMirrored(int))  <br />  (int codePoint) | 确定是否根据Unicode规范镜像指定的字符（Unicode代码点）。 |
| static boolean | [isSpaceChar](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSpaceChar(char))  <br />  (char ch) | 确定指定的字符是否为Unicode空格字符。 |
| static boolean | [isSpaceChar](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSpaceChar(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否为Unicode空格字符。 |
| static boolean | [isSupplementaryCodePoint](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSupplementaryCodePoint(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否在 [supplementary character范](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#supplementary)  <br />  围内。 |
| static boolean | [isSurrogate](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSurrogate(char))  <br />  (char ch) | 确定给定的 char值是否为Unicode 代理代码单元 。 |
| static boolean | [isSurrogatePair](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSurrogatePair(char,char))  <br />  (char high, char low) | 确定指定的 char值对是否为有效 [Unicode surrogate pair ](https://www.unicode.org/glossary/#surrogate_pair)  <br />  。 |
| static boolean | [isTitleCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isTitleCase(char))  <br />  (char ch) | 确定指定的字符是否为标题字符。 |
| static boolean | [isTitleCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isTitleCase(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否为标题字符。 |
| static boolean | [isUnicodeIdentifierPart](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUnicodeIdentifierPart(char))  <br />  (char ch) | 确定指定的字符是否可能是Unicode标识符的一部分，而不是第一个字符。 |
| static boolean | [isUnicodeIdentifierPart](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUnicodeIdentifierPart(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否可能是Unicode标识符的一部分，而不是第一个字符。 |
| static boolean | [isUnicodeIdentifierStart](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUnicodeIdentifierStart(char))  <br />  (char ch) | 确定指定的字符是否允许作为Unicode标识符中的第一个字符。 |
| static boolean | [isUnicodeIdentifierStart](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUnicodeIdentifierStart(int))  <br />  (int codePoint) | 确定是否允许指定的字符（Unicode代码点）作为Unicode标识符中的第一个字符。 |
| static boolean | [isUpperCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUpperCase(char))  <br />  (char ch) | 确定指定的字符是否为大写字符。 |
| static boolean | [isUpperCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUpperCase(int))  <br />  (int codePoint) | 确定指定的字符（Unicode代码点）是否为大写字符。 |
| static boolean | [isValidCodePoint](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isValidCodePoint(int))  <br />  (int codePoint) | 确定指定的代码点是否有效 [Unicode code point value ](https://www.unicode.org/glossary/#code_point)  <br />  。 |
| static boolean | [isWhitespace](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(char))  <br />  (char ch) | 根据Java确定指定的字符是否为空格。 |
| static boolean | [isWhitespace](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int))  <br />  (int codePoint) | 根据Java确定指定的字符（Unicode代码点）是否为空白。 |
| static char | [lowSurrogate](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#lowSurrogate(int))  <br />  (int codePoint) | 返回尾随替代（一个 [low surrogate code unit所](https://www.unicode.org/glossary/#low_surrogate_code_unit)  <br />  述的） surrogate pair表示在UTF-16编码指定的补充的字符（Unicode代码点）。 |
| static int | [offsetByCodePoints](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#offsetByCodePoints(char%5B%5D,int,int,int,int))  <br />  (char[] a, int start, int count, int index, int codePointOffset) | 返回给定的索引 char子阵是从给定的偏移 index由 codePointOffset代码点。 |
| static int | [offsetByCodePoints](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#offsetByCodePoints(java.lang.CharSequence,int,int))  <br />  (CharSequence seq, int index, int codePointOffset) | 返回给定char序列中的索引，该索引从给定的 index偏移 codePointOffset代码点。 |
| static char | [reverseBytes](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#reverseBytes(char))  <br />  (char ch) | 返回通过反转指定的 char值中的字节顺序获得的值。 |
| static char[] | [toChars](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toChars(int))  <br />  (int codePoint) | 将指定字符（Unicode代码点）转换为存储在 char数组中的UTF-16表示形式。 |
| static int | [toChars](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toChars(int,char%5B%5D,int))  <br />  (int codePoint, char[] dst, int dstIndex) | 将指定字符（Unicode代码点）转换为其UTF-16表示形式。 |
| static int | [toCodePoint](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toCodePoint(char,char))  <br />  (char high, char low) | 将指定的代理项对转换为其补充代码点值。 |
| static char | [toLowerCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toLowerCase(char))  <br />  (char ch) | 使用UnicodeData文件中的大小写映射信息将字符参数转换为小写。 |
| static int | [toLowerCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toLowerCase(int))  <br />  (int codePoint) | 使用UnicodeData文件中的大小写映射信息将字符（Unicode代码点）参数转换为小写。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toString())  <br />  ) | 返回表示此 Character值的 String对象。 |
| static String | [toString](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toString(char))  <br />  (char c) | 返回表示指定的 char的 String对象。 |
| static String | [toString](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toString(int))  <br />  (int codePoint) | 返回表示指定字符（Unicode代码点）的 String对象。 |
| static char | [toTitleCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toTitleCase(char))  <br />  (char ch) | 使用UnicodeData文件中的大小写映射信息将字符参数转换为标题。 |
| static int | [toTitleCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toTitleCase(int))  <br />  (int codePoint) | 使用UnicodeData文件中的案例映射信息将字符（Unicode代码点）参数转换为titlecase。 |
| static char | [toUpperCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toUpperCase(char))  <br />  (char ch) | 使用UnicodeData文件中的大小写映射信息将字符参数转换为大写。 |
| static int | [toUpperCase](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toUpperCase(int))  <br />  (int codePoint) | 使用UnicodeData文件中的大小写映射信息将字符（Unicode代码点）参数转换为大写。 |
| static Character | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#valueOf(char))  <br />  (char c) | 返回表示指定的 char值的 Character实例。 |


## String
| 构造器 | 描述 |
| --- | --- |
| [String(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E())  <br />  ) | 初始化新创建的 String对象，使其表示空字符序列。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D))  <br />  (byte[] bytes) | 通过使用平台的默认字符集解码指定的字节数组构造新的 String 。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int))  <br />  (byte[] bytes, int offset, int length) | 通过使用平台的默认字符集解码指定的字节子阵列来构造新的 String 。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int,java.lang.String))  <br />  (byte[] bytes, int offset, int length, String charsetName) | 通过使用指定的字符集解码指定的字节子 String构造新的 String 。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int,java.nio.charset.Charset))  <br />  (byte[] bytes, int offset, int length, Charset charset) | 通过使用指定的charset解码指定的字节子String构造新的String 。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,java.lang.String))  <br />  (byte[] bytes, String charsetName) | 构造一个新的String由指定用指定的字节的数组解码charset 。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,java.nio.charset.Charset))  <br />  (byte[] bytes, Charset charset) | 构造一个新的String由指定用指定的字节的数组解码charset 。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(char%5B%5D))  <br />  (char[] value) | 分配新的 String ，使其表示当前包含在字符数组参数中的字符序列。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(char%5B%5D,int,int))  <br />  (char[] value, int offset, int count) | 分配一个新的 String ，其中包含字符数组参数的子数组中的字符。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(int%5B%5D,int,int))  <br />  (int[] codePoints, int offset, int count) | 分配新的 String ，其中包含 [Unicode code point数](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#unicode)  <br />  组参数的子数组中的字符。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(java.lang.String))  <br />  (String original) | 初始化新创建的String对象，使其表示与参数相同的字符序列; 换句话说，新创建的字符串是参数字符串的副本。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(java.lang.StringBuffer))  <br />  (StringBuffer buffer) | 分配一个新字符串，其中包含当前包含在字符串缓冲区参数中的字符序列。 |
| [String](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(java.lang.StringBuilder))  <br />  (StringBuilder builder) | 分配一个新字符串，其中包含当前包含在字符串构建器参数中的字符序列。 |

| char | [charAt](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#charAt(int))  <br />  (int index) | 返回指定索引处的 char值。 |
| --- | --- | --- |
| IntStream | [chars(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#chars())  <br />  ) | 返回 int的流，将此序列中的 char值零扩展。 |
| int | [codePointAt](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#codePointAt(int))  <br />  (int index) | 返回指定索引处的字符（Unicode代码点）。 |
| int | [codePointBefore](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#codePointBefore(int))  <br />  (int index) | 返回指定索引之前的字符（Unicode代码点）。 |
| int | [codePointCount](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#codePointCount(int,int))  <br />  (int beginIndex, int endIndex) | 返回此 String的指定文本范围内的Unicode代码点数。 |
| IntStream | [codePoints(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#codePoints())  <br />  ) | 返回此序列中的代码点值流。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#compareTo(java.lang.String))  <br />  (String anotherString) | 按字典顺序比较两个字符串。 |
| int | [compareToIgnoreCase](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#compareToIgnoreCase(java.lang.String))  <br />  (String str) | 按字典顺序比较两个字符串，忽略大小写差异。 |
| String | [concat](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#concat(java.lang.String))  <br />  (String str) | 将指定的字符串连接到此字符串的末尾。 |
| boolean | [contains](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#contains(java.lang.CharSequence))  <br />  (CharSequence s) | 当且仅当此字符串包含指定的char值序列时，才返回true。 |
| boolean | [contentEquals](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#contentEquals(java.lang.CharSequence))  <br />  (CharSequence cs) | 将此字符串与指定的 CharSequence 。 |
| boolean | [contentEquals](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#contentEquals(java.lang.StringBuffer))  <br />  (StringBuffer sb) | 将此字符串与指定的 StringBuffer 。 |
| static String | [copyValueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#copyValueOf(char%5B%5D))  <br />  (char[] data) | 相当于 [valueOf(char[]) ](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char%5B%5D))  <br />  。 |
| static String | [copyValueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#copyValueOf(char%5B%5D,int,int))  <br />  (char[] data, int offset, int count) | 相当于 [valueOf(char[], int, int) ](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char%5B%5D,int,int))  <br />  。 |
| boolean | [endsWith](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#endsWith(java.lang.String))  <br />  (String suffix) | 测试此字符串是否以指定的后缀结尾。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#equals(java.lang.Object))  <br />  (Object anObject) | 将此字符串与指定的对象进行比较。 |
| boolean | [equalsIgnoreCase](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#equalsIgnoreCase(java.lang.String))  <br />  (String anotherString) | 将此 String与另一个 String比较，忽略了大小写。 |
| static String | [format](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#format(java.lang.String,java.lang.Object...))  <br />  (String format, Object... args) | 使用指定的格式字符串和参数返回格式化字符串。 |
| static String | [format](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#format(java.util.Locale,java.lang.String,java.lang.Object...))  <br />  (Locale l, String format, Object... args) | 使用指定的语言环境，格式字符串和参数返回格式化的字符串。 |
| byte[] | [getBytes(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#getBytes())  <br />  ) | 使用平台的默认字符集将此 String编码为字节序列，将结果存储到新的字节数组中。 |
| byte[] | [getBytes](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#getBytes(java.lang.String))  <br />  (String charsetName) | 使用命名的字符集将此 String编码为字节序列，将结果存储到新的字节数组中。 |
| byte[] | [getBytes](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#getBytes(java.nio.charset.Charset))  <br />  (Charset charset) | 使用给定的charset将此String编码为字节序列，将结果存储到新的字节数组中。 |
| void | [getChars](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#getChars(int,int,char%5B%5D,int))  <br />  (int srcBegin, int srcEnd, char[] dst, int dstBegin) | 将此字符串中的字符复制到目标字符数组中。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#hashCode())  <br />  ) | 返回此字符串的哈希码。 |
| int | [indexOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#indexOf(int))  <br />  (int ch) | 返回指定字符第一次出现的字符串中的索引。 |
| int | [indexOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#indexOf(int,int))  <br />  (int ch, int fromIndex) | 返回指定字符第一次出现的此字符串中的索引，从指定索引处开始搜索。 |
| int | [indexOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#indexOf(java.lang.String))  <br />  (String str) | 返回指定子字符串第一次出现的字符串中的索引。 |
| int | [indexOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#indexOf(java.lang.String,int))  <br />  (String str, int fromIndex) | 从指定的索引处开始，返回指定子字符串第一次出现的字符串中的索引。 |
| String | [intern(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#intern())  <br />  ) | 返回字符串对象的规范表示。 |
| boolean | [isBlank(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#isBlank())  <br />  ) | 如果字符串为空或仅包含 [white space代](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int))  <br />  码点，则返回 true ，否则 false 。 |
| boolean | [isEmpty(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#isEmpty())  <br />  ) | 返回 true ，当且仅当， [length()是](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#length())  <br />   0 。 |
| static String | [join](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#join(java.lang.CharSequence,java.lang.CharSequence...))  <br />  (CharSequence delimiter, CharSequence... elements) | 返回由 CharSequence elements的副本组成的新String，该副本与指定的 delimiter的副本连接在一起。 |
| static String | [join](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#join(java.lang.CharSequence,java.lang.Iterable))  <br />  (CharSequence delimiter, Iterable<? extends CharSequence> elements) | 返回由 String的副本组成的新 String ，其中 CharSequence elements指定的 delimiter的副本。 |
| int | [lastIndexOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lastIndexOf(int))  <br />  (int ch) | 返回指定字符最后一次出现的字符串中的索引。 |
| int | [lastIndexOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lastIndexOf(int,int))  <br />  (int ch, int fromIndex) | 返回指定字符最后一次出现的字符串中的索引，从指定的索引开始向后搜索。 |
| int | [lastIndexOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lastIndexOf(java.lang.String))  <br />  (String str) | 返回指定子字符串最后一次出现的字符串中的索引。 |
| int | [lastIndexOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lastIndexOf(java.lang.String,int))  <br />  (String str, int fromIndex) | 返回指定子字符串最后一次出现的字符串中的索引，从指定索引开始向后搜索。 |
| int | [length(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#length())  <br />  ) | 返回此字符串的长度。 |
| Stream<String> | [lines(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lines())  <br />  ) | 返回从此字符串中提取的行的流，由行终止符分隔。 |
| boolean | [matches](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#matches(java.lang.String))  <br />  (String regex) | 判断此字符串是否与给定的 [regular expression匹](https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum)  <br />  配。 |
| int | [offsetByCodePoints](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#offsetByCodePoints(int,int))  <br />  (int index, int codePointOffset) | 返回此 String中的索引，该索引从给定的 index偏移 codePointOffset代码点。 |
| boolean | [regionMatches](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#regionMatches(boolean,int,java.lang.String,int,int))  <br />  (boolean ignoreCase, int toffset, String other, int ooffset, int len) | 测试两个字符串区域是否相等。 |
| boolean | [regionMatches](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#regionMatches(int,java.lang.String,int,int))  <br />  (int toffset, String other, int ooffset, int len) | 测试两个字符串区域是否相等。 |
| String | [repeat](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#repeat(int))  <br />  (int count) | 返回一个字符串，其值为此字符串的串联重复 count次。 |
| String | [replace](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#replace(char,char))  <br />  (char oldChar, char newChar) | 返回从替换所有出现的导致一个字符串 oldChar在此字符串 newChar 。 |
| String | [replace](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#replace(java.lang.CharSequence,java.lang.CharSequence))  <br />  (CharSequence target, CharSequence replacement) | 将此字符串中与文字目标序列匹配的每个子字符串替换为指定的文字替换序列。 |
| String | [replaceAll](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#replaceAll(java.lang.String,java.lang.String))  <br />  (String regex, String replacement) | 将给定替换的给定 [regular expression匹](https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum)  <br />  配的此字符串的每个子字符串替换。 |
| String | [replaceFirst](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#replaceFirst(java.lang.String,java.lang.String))  <br />  (String regex, String replacement) | 将给定替换的给定 [regular expression匹](https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum)  <br />  配的此字符串的第一个子字符串替换。 |
| [String] | [split](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#split(java.lang.String))  <br />  (String regex) | 将此字符串拆分为给定 [regular expression的匹](https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum)  <br />  配 项 。 |
| [String] | [split](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#split(java.lang.String,int))  <br />  (String regex, int limit) | 将此字符串拆分为给定 [regular expression的匹](https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum)  <br />  配 项 。 |
| boolean | [startsWith](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#startsWith(java.lang.String))  <br />  (String prefix) | 测试此字符串是否以指定的前缀开头。 |
| boolean | [startsWith](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#startsWith(java.lang.String,int))  <br />  (String prefix, int toffset) | 测试从指定索引开始的此字符串的子字符串是否以指定的前缀开头。 |
| String | [strip(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#strip())  <br />  ) | 返回一个字符串，其值为此字符串，并删除了所有前导和尾随 [white space ](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int))  <br />  。 |
| String | [stripLeading(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#stripLeading())  <br />  ) | 返回一个字符串，其值为此字符串，并删除了所有前导 [white space ](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int))  <br />  。 |
| String | [stripTrailing(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#stripTrailing())  <br />  ) | 返回一个字符串，其值为此字符串，并删除所有尾随 [white space ](https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int))  <br />  。 |
| CharSequence | [subSequence](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#subSequence(int,int))  <br />  (int beginIndex, int endIndex) | 返回作为此序列的子序列的字符序列。 |
| String | [substring](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#substring(int))  <br />  (int beginIndex) | 返回一个字符串，该字符串是此字符串的子字符串。 |
| String | [substring](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#substring(int,int))  <br />  (int beginIndex, int endIndex) | 返回一个字符串，该字符串是此字符串的子字符串。 |
| char[] | [toCharArray(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toCharArray())  <br />  ) | 将此字符串转换为新的字符数组。 |
| String | [toLowerCase(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toLowerCase())  <br />  ) | 使用默认语言环境的规则将此 String所有字符转换为小写。 |
| String | [toLowerCase](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toLowerCase(java.util.Locale))  <br />  (Locale locale) | 使用给定 Locale的规则将此 String所有字符转换为 Locale 。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toString())  <br />  ) | 这个对象（已经是一个字符串！） |
| String | [toUpperCase(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toUpperCase())  <br />  ) | 使用默认语言环境的规则将此 String所有字符转换为大写。 |
| String | [toUpperCase](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toUpperCase(java.util.Locale))  <br />  (Locale locale) | 使用给定 Locale的规则将此 String所有字符转换为大写。 |
| String | [trim(](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#trim())  <br />  ) | 返回一个字符串，其值为此字符串，删除了所有前导和尾随空格，其中space被定义为其代码点小于或等于 'U+0020' （空格字符）的任何字符。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(boolean))  <br />  (boolean b) | 返回 boolean参数的字符串表示形式。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char))  <br />  (char c) | 返回 char参数的字符串表示形式。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char%5B%5D))  <br />  (char[] data) | 返回 char数组参数的字符串表示形式。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char%5B%5D,int,int))  <br />  (char[] data, int offset, int count) | 返回 char数组参数的特定子数组的字符串表示形式。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(double))  <br />  (double d) | 返回 double参数的字符串表示形式。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(float))  <br />  (float f) | 返回 float参数的字符串表示形式。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(int))  <br />  (int i) | 返回 int参数的字符串表示形式。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(long))  <br />  (long l) | 返回 long参数的字符串表示形式。 |
| static String | [valueOf](https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(java.lang.Object))  <br />  (Object obj) | 返回 Object参数的字符串表示形式。 |


## StringBuilder
| 构造器 | 描述 |
| --- | --- |
| [StringBuilder(](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#%3Cinit%3E())  <br />  ) | 构造一个字符串构建器，其中不包含任何字符，初始容量为16个字符。 |
| [StringBuilder](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#%3Cinit%3E(int))  <br />  (int capacity) | 构造一个字符串构建器，其中没有字符，并且具有 capacity参数指定的初始容量。 |
| [StringBuilder](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#%3Cinit%3E(java.lang.CharSequence))  <br />  (CharSequence seq) | 构造一个字符串构建器，其中包含与指定的 CharSequence相同的字符。 |
| [StringBuilder](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#%3Cinit%3E(java.lang.String))  <br />  (String str) | 构造一个初始化为指定字符串内容的字符串构建器。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(boolean))  <br />  (boolean b) | 将 boolean参数的字符串表示形式追加到序列中。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(char))  <br />  (char c) | 将 char参数的字符串表示形式追加到此序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(char%5B%5D))  <br />  (char[] str) | 将 char数组参数的字符串表示形式追加到此序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(char%5B%5D,int,int))  <br />  (char[] str, int offset, int len) | 将 char数组参数的子数组的字符串表示形式追加到此序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(double))  <br />  (double d) | 将 double参数的字符串表示形式追加到此序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(float))  <br />  (float f) | 将 float参数的字符串表示形式追加到此序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(int))  <br />  (int i) | 将 int参数的字符串表示形式追加到此序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(long))  <br />  (long lng) | 将 long参数的字符串表示形式追加到此序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.CharSequence))  <br />  (CharSequence s) | 将指定的字符序列追加到此 Appendable 。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.CharSequence,int,int))  <br />  (CharSequence s, int start, int end) | 将指定的 CharSequence序列追加到此序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.Object))  <br />  (Object obj) | 追加 Object参数的字符串表示形式。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.String))  <br />  (String str) | 将指定的字符串追加到此字符序列。 |
| StringBuilder | [append](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.StringBuffer))  <br />  (StringBuffer sb) | 将指定的 StringBuffer追加到此序列。 |
| StringBuilder | [appendCodePoint](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#appendCodePoint(int))  <br />  (int codePoint) | 将 codePoint参数的字符串表示形式追加到此序列。 |
| int | [capacity(](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#capacity())  <br />  ) | 返回当前容量。 |
| char | [charAt](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#charAt(int))  <br />  (int index) | 返回指定索引处的此序列中的 char值。 |
| IntStream | [chars(](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#chars())  <br />  ) | 返回 int的流，对此序列中的 char值进行零扩展。 |
| int | [codePointAt](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#codePointAt(int))  <br />  (int index) | 返回指定索引处的字符（Unicode代码点）。 |
| int | [codePointBefore](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#codePointBefore(int))  <br />  (int index) | 返回指定索引之前的字符（Unicode代码点）。 |
| int | [codePointCount](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#codePointCount(int,int))  <br />  (int beginIndex, int endIndex) | 返回此序列的指定文本范围内的Unicode代码点数。 |
| IntStream | [codePoints(](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#codePoints())  <br />  ) | 返回此序列中的代码点值流。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#compareTo(java.lang.StringBuilder))  <br />  (StringBuilder another) | StringBuilder字典顺序比较两个 StringBuilder实例。 |
| StringBuilder | [delete](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#delete(int,int))  <br />  (int start, int end) | 删除此序列的子字符串中的字符。 |
| StringBuilder | [deleteCharAt](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#deleteCharAt(int))  <br />  (int index) | 按此顺序删除指定位置的 char 。 |
| void | [ensureCapacity](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#ensureCapacity(int))  <br />  (int minimumCapacity) | 确保容量至少等于指定的最小值。 |
| void | [getChars](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#getChars(int,int,char%5B%5D,int))  <br />  (int srcBegin, int srcEnd, char[] dst, int dstBegin) | 将字符从此序列复制到目标字符数组 dst 。 |
| int | [indexOf](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#indexOf(java.lang.String))  <br />  (String str) | 返回指定子字符串第一次出现的字符串中的索引。 |
| int | [indexOf](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#indexOf(java.lang.String,int))  <br />  (String str, int fromIndex) | 从指定的索引处开始，返回指定子字符串第一次出现的字符串中的索引。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,boolean))  <br />  (int offset, boolean b) | 将 boolean参数的字符串表示形式插入此序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,char))  <br />  (int offset, char c) | 将 char参数的字符串表示形式插入此序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,char%5B%5D))  <br />  (int offset, char[] str) | 将 char数组参数的字符串表示形式插入此序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,char%5B%5D,int,int))  <br />  (int index, char[] str, int offset, int len) | 将 str数组参数的子数组的字符串表示形式插入此序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,double))  <br />  (int offset, double d) | 将 double参数的字符串表示形式插入此序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,float))  <br />  (int offset, float f) | 将 float参数的字符串表示形式插入此序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,int))  <br />  (int offset, int i) | 将第二个 int参数的字符串表示形式插入此序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,long))  <br />  (int offset, long l) | 将 long参数的字符串表示形式插入此序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,java.lang.CharSequence))  <br />  (int dstOffset, CharSequence s) | 将指定的 CharSequence插入此序列。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,java.lang.CharSequence,int,int))  <br />  (int dstOffset, CharSequence s, int start, int end) | 将指定的 CharSequence序列插入此序列。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,java.lang.Object))  <br />  (int offset, Object obj) | 将 Object参数的字符串表示形式插入此字符序列中。 |
| StringBuilder | [insert](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,java.lang.String))  <br />  (int offset, String str) | 将字符串插入此字符序列。 |
| int | [lastIndexOf](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#lastIndexOf(java.lang.String))  <br />  (String str) | 返回指定子字符串最后一次出现的字符串中的索引。 |
| int | [lastIndexOf](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#lastIndexOf(java.lang.String,int))  <br />  (String str, int fromIndex) | 返回指定子字符串最后一次出现的字符串中的索引，从指定索引开始向后搜索。 |
| int | [length(](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#length())  <br />  ) | 返回长度（字符数）。 |
| int | [offsetByCodePoints](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#offsetByCodePoints(int,int))  <br />  (int index, int codePointOffset) | 返回此序列中的索引，该索引从给定的 index偏移 codePointOffset代码点。 |
| StringBuilder | [replace](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#replace(int,int,java.lang.String))  <br />  (int start, int end, String str) | 使用指定的 String的字符替换此序列的子字符串中的字符。 |
| StringBuilder | [reverse(](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#reverse())  <br />  ) | 导致此字符序列被序列的反向替换。 |
| void | [setCharAt](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#setCharAt(int,char))  <br />  (int index, char ch) | 指定索引处的字符设置为 ch 。 |
| void | [setLength](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#setLength(int))  <br />  (int newLength) | 设置字符序列的长度。 |
| CharSequence | [subSequence](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#subSequence(int,int))  <br />  (int start, int end) | 返回一个新的字符序列，它是该序列的子序列。 |
| String | [substring](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#substring(int))  <br />  (int start) | 返回一个新的 String ，其中包含此字符序列中当前包含的字符的子序列。 |
| String | [substring](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#substring(int,int))  <br />  (int start, int end) | 返回一个新的 String ，其中包含当前包含在此序列中的字符的子序列。 |
| void | [trimToSize(](https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#trimToSize())  <br />  ) | 尝试减少用于字符序列的存储空间。 |


# Collection
java.util包主要提供了以下三种类型的集合：

- List：一种有序列表的集合
- Set：一种保证没有重复元素的集合
- Map：一种通过键值（key-value）查找的映射表集合

访问集合总是通过统一的方式——迭代器（Iterator）来实现，它最明显的好处在于无需知道集合内部元素是按什么方式存储的。  <br />  ![](https://www.runoob.com/wp-content/uploads/2014/01/2243690-9cd9c896e0d512ed.gif#crop=0&crop=0&crop=1&crop=1&id=VDyew&originHeight=611&originWidth=643&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  HashSet： 无序  <br />  LinkedHashSet： 按照插入顺序  <br />  TreeSet： 从小到大排序

## ArrayList
| 构造器 | 描述 |
| --- | --- |
| [ArrayList(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#%3Cinit%3E())  <br />  ) | 构造一个初始容量为10的空列表。 |
| [ArrayList](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#%3Cinit%3E(int))  <br />  (int initialCapacity) | 构造具有指定初始容量的空列表。 |
| [ArrayList](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#%3Cinit%3E(java.util.Collection))  <br />  (Collection<? extends E> c) | 按照集合的迭代器返回的顺序构造一个包含指定集合元素的列表。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| void | [add](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#add(int,E))  <br />  (int index, E element) | 将指定元素插入此列表中的指定位置。 |
| boolean | [add](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#add(E))  <br />  (E e) | 将指定的元素追加到此列表的末尾。 |
| boolean | [addAll](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#addAll(int,java.util.Collection))  <br />  (int index, Collection<? extends E> c) | 从指定位置开始，将指定集合中的所有元素插入此列表。 |
| boolean | [addAll](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#addAll(java.util.Collection))  <br />  (Collection<? extends E> c) | 将指定集合中的所有元素按指定集合的Iterator返回的顺序附加到此列表的末尾。 |
| void | [clear(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#clear())  <br />  ) | 从此列表中删除所有元素。 |
| Object | [clone(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#clone())  <br />  ) | 返回此 ArrayList实例的浅表副本。 |
| boolean | [contains](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#contains(java.lang.Object))  <br />  (Object o) | 如果此列表包含指定的元素，则返回 true 。 |
| void | [ensureCapacity](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#ensureCapacity(int))  <br />  (int minCapacity) | 如有必要，增加此 ArrayList实例的容量，以确保它至少可以容纳由minimum capacity参数指定的元素数。 |
| void | [forEach](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#forEach(java.util.function.Consumer))  <br />  (Consumer<? super E> action) | 对 Iterable每个元素执行给定操作，直到处理 Iterable所有元素或操作引发异常。 |
| E | [get](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#get(int))  <br />  (int index) | 返回此列表中指定位置的元素。 |
| int | [indexOf](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#indexOf(java.lang.Object))  <br />  (Object o) | 返回此列表中第一次出现的指定元素的索引，如果此列表不包含该元素，则返回-1。 |
| boolean | [isEmpty(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#isEmpty())  <br />  ) | 如果此列表不包含任何元素，则返回 true 。 |
| Iterator<E> | [iterator(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#iterator())  <br />  ) | 以适当的顺序返回此列表中元素的迭代器。 |
| int | [lastIndexOf](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#lastIndexOf(java.lang.Object))  <br />  (Object o) | 返回此列表中指定元素最后一次出现的索引，如果此列表不包含该元素，则返回-1。 |
| ListIterator<E> | [listIterator(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#listIterator())  <br />  ) | 返回此列表中元素的列表迭代器（按适当顺序）。 |
| ListIterator<E> | [listIterator](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#listIterator(int))  <br />  (int index) | 从列表中的指定位置开始，返回列表中元素的列表迭代器（按正确顺序）。 |
| E | [remove](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#remove(int))  <br />  (int index) | 删除此列表中指定位置的元素。 |
| boolean | [remove](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#remove(java.lang.Object))  <br />  (Object o) | 从该列表中删除指定元素的第一个匹配项（如果存在）。 |
| boolean | [removeAll](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#removeAll(java.util.Collection))  <br />  (Collection<?> c) | 从此列表中删除指定集合中包含的所有元素。 |
| boolean | [removeIf](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#removeIf(java.util.function.Predicate))  <br />  (Predicate<? super E> filter) | 删除此集合中满足给定谓词的所有元素。 |
| protected void | [removeRange](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#removeRange(int,int))  <br />  (int fromIndex, int toIndex) | 从此列表中删除索引介于 fromIndex （含）和 toIndex （独占）之间的所有元素。 |
| boolean | [retainAll](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#retainAll(java.util.Collection))  <br />  (Collection<?> c) | 仅保留此列表中包含在指定集合中的元素。 |
| E | [set](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#set(int,E))  <br />  (int index, E element) | 用指定的元素替换此列表中指定位置的元素。 |
| int | [size(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#size())  <br />  ) | 返回此列表中的元素数。 |
| Spliterator<E> | [spliterator(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#spliterator())  <br />  ) | 在此列表中的元素上创建[late-binding和](https://www.apiref.com/java11-zh/java.base/java/util/Spliterator.html#binding)  <br />  故障快速 Spliterator 。 |
| List<E> | [subList](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#subList(int,int))  <br />  (int fromIndex, int toIndex) | 返回指定的 fromIndex （包含）和 toIndex （不包括）之间的此列表部分的视图。 |
| [Object] | [toArray(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#toArray())  <br />  ) | 以适当的顺序（从第一个元素到最后一个元素）返回包含此列表中所有元素的数组。 |
|  T[] | [toArray](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#toArray(T%5B%5D))  <br />  (T[] a) | 以适当的顺序返回包含此列表中所有元素的数组（从第一个元素到最后一个元素）; 返回数组的运行时类型是指定数组的运行时类型。 |
| void | [trimToSize(](https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#trimToSize())  <br />  ) | 将此 ArrayList实例的容量调整为列表的当前大小。 |


## LinkedList
public class **LinkedList**  <br />  extends AbstractSequentialList  <br />  implements List, Deque, Cloneable, Serializable

| 构造器 | 描述 |
| --- | --- |
| [LinkedList(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#%3Cinit%3E())  <br />  ) | 构造一个空列表。 |
| [LinkedList](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#%3Cinit%3E(java.util.Collection))  <br />  (Collection<? extends E> c) | 按照集合的迭代器返回的顺序构造一个包含指定集合元素的列表。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| void | [add](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#add(int,E))  <br />  (int index, E element) | 将指定元素插入此列表中的指定位置。 |
| boolean | [add](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#add(E))  <br />  (E e) | 将指定的元素追加到此列表的末尾。 |
| boolean | [addAll](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#addAll(int,java.util.Collection))  <br />  (int index, Collection<? extends E> c) | 从指定位置开始，将指定集合中的所有元素插入此列表。 |
| boolean | [addAll](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#addAll(java.util.Collection))  <br />  (Collection<? extends E> c) | 将指定集合中的所有元素按指定集合的迭代器返回的顺序附加到此列表的末尾。 |
| void | [addFirst](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#addFirst(E))  <br />  (E e) | 在此列表的开头插入指定的元素。 |
| void | [addLast](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#addLast(E))  <br />  (E e) | 将指定的元素追加到此列表的末尾。 |
| void | [clear(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#clear())  <br />  ) | 从此列表中删除所有元素。 |
| Object | [clone(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#clone())  <br />  ) | 返回此 LinkedList的浅表副本。 |
| boolean | [contains](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#contains(java.lang.Object))  <br />  (Object o) | 如果此列表包含指定的元素，则返回 true 。 |
| Iterator<E> | [descendingIterator(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#descendingIterator())  <br />  ) | 以相反的顺序返回此双端队列中元素的迭代器。 |
| E | [element(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#element())  <br />  ) | 检索但不删除此列表的头部（第一个元素）。 |
| E | [get](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#get(int))  <br />  (int index) | 返回此列表中指定位置的元素。 |
| E | [getFirst(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#getFirst())  <br />  ) | 返回此列表中的第一个元素。 |
| E | [getLast(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#getLast())  <br />  ) | 返回此列表中的最后一个元素。 |
| int | [indexOf](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#indexOf(java.lang.Object))  <br />  (Object o) | 返回此列表中第一次出现的指定元素的索引，如果此列表不包含该元素，则返回-1。 |
| int | [lastIndexOf](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#lastIndexOf(java.lang.Object))  <br />  (Object o) | 返回此列表中指定元素最后一次出现的索引，如果此列表不包含该元素，则返回-1。 |
| ListIterator<E> | [listIterator](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#listIterator(int))  <br />  (int index) | 从列表中的指定位置开始，返回此列表中元素的列表迭代器（按正确顺序）。 |
| boolean | [offer](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#offer(E))  <br />  (E e) | 将指定的元素添加为此列表的尾部（最后一个元素）。 |
| boolean | [offerFirst](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#offerFirst(E))  <br />  (E e) | 在此列表的前面插入指定的元素。 |
| boolean | [offerLast](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#offerLast(E))  <br />  (E e) | 在此列表的末尾插入指定的元素。 |
| E | [peek(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#peek())  <br />  ) | 检索但不删除此列表的头部（第一个元素）。 |
| E | [peekFirst(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#peekFirst())  <br />  ) | 检索但不删除此列表的第一个元素，如果此列表为空，则返回 null 。 |
| E | [peekLast(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#peekLast())  <br />  ) | 检索但不删除此列表的最后一个元素，如果此列表为空，则返回 null 。 |
| E | [poll(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#poll())  <br />  ) | 检索并删除此列表的头部（第一个元素）。 |
| E | [pollFirst(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#pollFirst())  <br />  ) | 检索并删除此列表的第一个元素，如果此列表为空，则返回 null 。 |
| E | [pollLast(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#pollLast())  <br />  ) | 检索并删除此列表的最后一个元素，如果此列表为空，则返回 null 。 |
| E | [pop(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#pop())  <br />  ) | 弹出此列表所代表的堆栈中的元素。 |
| void | [push](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#push(E))  <br />  (E e) | 将元素推送到此列表所表示的堆栈上。 |
| E | [remove(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#remove())  <br />  ) | 检索并删除此列表的头部（第一个元素）。 |
| E | [remove](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#remove(int))  <br />  (int index) | 删除此列表中指定位置的元素。 |
| boolean | [remove](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#remove(java.lang.Object))  <br />  (Object o) | 从该列表中删除指定元素的第一个匹配项（如果存在）。 |
| E | [removeFirst(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#removeFirst())  <br />  ) | 从此列表中删除并返回第一个元素。 |
| boolean | [removeFirstOccurrence](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#removeFirstOccurrence(java.lang.Object))  <br />  (Object o) | 删除此列表中第一次出现的指定元素（从头到尾遍历列表时）。 |
| E | [removeLast(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#removeLast())  <br />  ) | 从此列表中删除并返回最后一个元素。 |
| boolean | [removeLastOccurrence](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#removeLastOccurrence(java.lang.Object))  <br />  (Object o) | 删除此列表中最后一次出现的指定元素（从头到尾遍历列表时）。 |
| E | [set](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#set(int,E))  <br />  (int index, E element) | 用指定的元素替换此列表中指定位置的元素。 |
| int | [size(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#size())  <br />  ) | 返回此列表中的元素数。 |
| Spliterator<E> | [spliterator(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#spliterator())  <br />  ) | 在此列表中的元素上创建[late-binding和](https://www.apiref.com/java11-zh/java.base/java/util/Spliterator.html#binding)  <br />  故障快速 Spliterator 。 |
| [Object] | [toArray(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#toArray())  <br />  ) | 以适当的顺序（从第一个元素到最后一个元素）返回包含此列表中所有元素的数组。 |
|  T[] | [toArray](https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#toArray(T%5B%5D))  <br />  (T[] a) | 以适当的顺序返回包含此列表中所有元素的数组（从第一个元素到最后一个元素）; 返回数组的运行时类型是指定数组的运行时类型。 |


## HashSet
| 构造器 | 描述 |
| --- | --- |
| [HashSet(](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#%3Cinit%3E())  <br />  ) | 构造一个新的空集; 支持HashMap实例具有默认初始容量（16）和加载因子（0.75）。 |
| [HashSet](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#%3Cinit%3E(int))  <br />  (int initialCapacity) | 构造一个新的空集; 支持HashMap实例具有指定的初始容量和默认加载因子（0.75）。 |
| [HashSet](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#%3Cinit%3E(int,float))  <br />  (int initialCapacity, float loadFactor) | 构造一个新的空集; 支持HashMap实例具有指定的初始容量和指定的加载因子。 |
| [HashSet](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#%3Cinit%3E(java.util.Collection))  <br />  (Collection<? extends E> c) | 构造一个包含指定集合中元素的新集合。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| boolean | [add](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#add(E))  <br />  (E e) | 如果指定的元素尚不存在，则将其添加到此集合中。 |
| void | [clear(](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#clear())  <br />  ) | 从该集中删除所有元素。 |
| Object | [clone(](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#clone())  <br />  ) | 返回此 HashSet实例的浅表副本：未克隆元素本身。 |
| boolean | [contains](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#contains(java.lang.Object))  <br />  (Object o) | 如果此set包含指定的元素，则返回 true 。 |
| boolean | [isEmpty(](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#isEmpty())  <br />  ) | 如果此集合不包含任何元素，则返回 true 。 |
| Iterator<E> | [iterator(](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#iterator())  <br />  ) | 返回此set中元素的迭代器。 |
| boolean | [remove](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#remove(java.lang.Object))  <br />  (Object o) | 如果存在，则从该集合中移除指定的元素。 |
| int | [size(](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#size())  <br />  ) | 返回此集合中的元素数（基数）。 |
| Spliterator<E> | [spliterator(](https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#spliterator())  <br />  ) | 在此集合中的元素上创建[late-binding和](https://www.apiref.com/java11-zh/java.base/java/util/Spliterator.html#binding)  <br />  失败快速 Spliterator 。 |


## HashMap
| 构造器 | 描述 |
| --- | --- |
| [HashMap(](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#%3Cinit%3E())  <br />  ) | 使用默认初始容量（16）和默认加载因子（0.75）构造一个空 HashMap 。 |
| [HashMap](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#%3Cinit%3E(int))  <br />  (int initialCapacity) | 使用指定的初始容量和默认加载因子（0.75）构造一个空 HashMap 。 |
| [HashMap](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#%3Cinit%3E(int,float))  <br />  (int initialCapacity, float loadFactor) | 使用指定的初始容量和加载因子构造一个空 HashMap 。 |
| [HashMap](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#%3Cinit%3E(java.util.Map))  <br />  (Map<? extends K,? extends V> m) | 构造一个新的 HashMap ，其映射与指定的 Map相同。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| void | [clear(](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#clear())  <br />  ) | 从此映射中删除所有映射。 |
| Object | [clone(](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#clone())  <br />  ) | 返回此 HashMap实例的浅表副本：未克隆键和值本身。 |
| V | [compute](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#compute(K,java.util.function.BiFunction))  <br />  (K key, BiFunction<? super K,? super V,? extends V> remappingFunction) | 尝试计算指定键及其当前映射值的映射（如果没有当前映射， null ）。 |
| V | [computeIfAbsent](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#computeIfAbsent(K,java.util.function.Function))  <br />  (K key, Function<? super K,? extends V> mappingFunction) | 如果指定的键尚未与值关联（或映射到 null ），则尝试使用给定的映射函数计算其值并将其输入此映射，除非 null 。 |
| V | [computeIfPresent](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#computeIfPresent(K,java.util.function.BiFunction))  <br />  (K key, BiFunction<? super K,? super V,? extends V> remappingFunction) | 如果指定键的值存在且为非null，则尝试在给定键及其当前映射值的情况下计算新映射。 |
| boolean | [containsKey](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#containsKey(java.lang.Object))  <br />  (Object key) | 如果此映射包含指定键的映射，则返回 true 。 |
| boolean | [containsValue](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#containsValue(java.lang.Object))  <br />  (Object value) | 如果此映射将一个或多个键映射到指定值，则返回 true 。 |
| Set<Map.Entry<K,V>> | [entrySet(](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#entrySet())  <br />  ) | 返回此映射中包含的映射的Set视图。 |
| V | [get](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#get(java.lang.Object))  <br />  (Object key) | 返回指定键映射到的值，如果此映射不包含键的映射，则返回 null 。 |
| boolean | [isEmpty(](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#isEmpty())  <br />  ) | 如果此映射不包含键 - 值映射，则返回 true 。 |
| Set<K> | [keySet(](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#keySet())  <br />  ) | 返回此映射中包含的键的Set视图。 |
| V | [merge](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#merge(K,V,java.util.function.BiFunction))  <br />  (K key, V value, BiFunction<? super V,? super V,? extends V> remappingFunction) | 如果指定的键尚未与值关联或与null关联，则将其与给定的非空值关联。 |
| V | [put](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#put(K,V))  <br />  (K key, V value) | 将指定的值与此映射中的指定键相关联。 |
| void | [putAll](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#putAll(java.util.Map))  <br />  (Map<? extends K,? extends V> m) | 将指定映射中的所有映射复制到此映射。 |
| V | [remove](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#remove(java.lang.Object))  <br />  (Object key) | 从此映射中删除指定键的映射（如果存在）。 |
| int | [size(](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#size())  <br />  ) | 返回此映射中键 - 值映射的数量。 |
| Collection<V> | [values(](https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#values())  <br />  ) | 返回此映射中包含的值的Collection视图。 |


## LinkedHashMap
public class **LinkedHashMap<K,V>**  <br />  extends HashMap<K,V>  <br />  implements Map<K,V>

| 构造器 | 描述 |
| --- | --- |
| [LinkedHashMap(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E())  <br />  ) | 使用默认初始容量（16）和加载因子（0.75）构造一个空的插入排序 LinkedHashMap实例。 |
| [LinkedHashMap](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E(int))  <br />  (int initialCapacity) | 构造一个具有指定初始容量和默认加载因子（0.75）的空插入排序 LinkedHashMap实例。 |
| [LinkedHashMap](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E(int,float))  <br />  (int initialCapacity, float loadFactor) | 使用指定的初始容量和加载因子构造一个空的插入排序 LinkedHashMap实例。 |
| [LinkedHashMap](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E(int,float,boolean))  <br />  (int initialCapacity, float loadFactor, boolean accessOrder) | 使用指定的初始容量，加载因子和排序模式构造一个空的 LinkedHashMap实例。 |
| [LinkedHashMap](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E(java.util.Map))  <br />  (Map<? extends K,? extends V> m) | 构造一个插入有序的 LinkedHashMap实例，其实例与指定的映射相同。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| boolean | [containsValue](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#containsValue(java.lang.Object))  <br />  (Object value) | 如果此映射将一个或多个键映射到指定值，则返回 true 。 |
| Set<Map.Entry<K,V>> | [entrySet(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#entrySet())  <br />  ) | 返回此映射中包含的映射的Set视图。 |
| V | [get](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#get(java.lang.Object))  <br />  (Object key) | 返回指定键映射到的值，如果此映射不包含键的映射，则返回 null 。 |
| Set<K> | [keySet(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#keySet())  <br />  ) | 返回此映射中包含的键的Set视图。 |
| protected boolean | [removeEldestEntry](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#removeEldestEntry(java.util.Map.Entry))  <br />  (Map.Entry<K,V> eldest) | 如果此地图应删除其最 true则返回 true 。 |
| Collection<V> | [values(](https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#values())  <br />  ) | 返回此映射中包含的值的Collection视图。 |


## TreeMap
| 构造器 | 描述 |
| --- | --- |
| [TreeMap(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#%3Cinit%3E())  <br />  ) | 使用其键的自然顺序构造一个新的空树图。 |
| [TreeMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#%3Cinit%3E(java.util.Comparator))  <br />  (Comparator<? super K> comparator) | 构造一个新的空树图，根据给定的比较器排序。 |
| [TreeMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#%3Cinit%3E(java.util.Map))  <br />  (Map<? extends K,? extends V> m) | 构造一个新的树映射，其中包含与给定映射相同的映射，根据其键的 自然顺序排序 。 |
| [TreeMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#%3Cinit%3E(java.util.SortedMap))  <br />  (SortedMap<K,? extends V> m) | 构造一个包含相同映射的新树映射，并使用与指定有序映射相同的顺序。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| Map.Entry<K,V> | [ceilingEntry](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#ceilingEntry(K))  <br />  (K key) | 返回与大于或等于给定键的最小键关联的键 - 值映射，如果没有此键，则 null 。 |
| K | [ceilingKey](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#ceilingKey(K))  <br />  (K key) | 返回大于或等于给定键的 null键，如果没有这样的键，则 null 。 |
| void | [clear(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#clear())  <br />  ) | 从此映射中删除所有映射。 |
| Object | [clone(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#clone())  <br />  ) | 返回此 TreeMap实例的浅表副本。 |
| boolean | [containsKey](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#containsKey(java.lang.Object))  <br />  (Object key) | 如果此映射包含指定键的映射，则返回 true 。 |
| boolean | [containsValue](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#containsValue(java.lang.Object))  <br />  (Object value) | 如果此映射将一个或多个键映射到指定值，则返回 true 。 |
| NavigableSet<K> | [descendingKeySet(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#descendingKeySet())  <br />  ) | 返回此映射中包含的键的反向顺序NavigableSet视图。 |
| NavigableMap<K,V> | [descendingMap(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#descendingMap())  <br />  ) | 返回此映射中包含的映射的逆序视图。 |
| Set<Map.Entry<K,V>> | [entrySet(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#entrySet())  <br />  ) | 返回此映射中包含的映射的Set视图。 |
| Map.Entry<K,V> | [firstEntry(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#firstEntry())  <br />  ) | 返回与此映射中的最小键关联的键 - 值映射，如果映射为空，则 null 。 |
| K | [firstKey(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#firstKey())  <br />  ) | 返回此映射中当前的第一个（最低）键。 |
| Map.Entry<K,V> | [floorEntry](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#floorEntry(K))  <br />  (K key) | 返回与小于或等于给定键的最大键关联的键 - 值映射，如果没有此键，则 null 。 |
| K | [floorKey](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#floorKey(K))  <br />  (K key) | 返回小于或等于给定键的最大键，如果没有这样的键，则 null 。 |
| V | [get](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#get(java.lang.Object))  <br />  (Object key) | 返回指定键映射到的值，如果此映射不包含键的映射，则返回 null 。 |
| SortedMap<K,V> | [headMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#headMap(K))  <br />  (K toKey) | 返回此映射的部分视图，其键严格小于 toKey 。 |
| NavigableMap<K,V> | [headMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#headMap(K,boolean))  <br />  (K toKey, boolean inclusive) | 返回此映射的部分视图，其键小于（或等于，如果 inclusive为真） toKey 。 |
| Map.Entry<K,V> | [higherEntry](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#higherEntry(K))  <br />  (K key) | 返回与严格大于给定键的最小键关联的键 - 值映射，如果没有此键，则 null 。 |
| K | [higherKey](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#higherKey(K))  <br />  (K key) | 返回严格大于给定键的最小键，如果没有这样的键，则返回 null 。 |
| Set<K> | [keySet(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#keySet())  <br />  ) | 返回此映射中包含的键的Set视图。 |
| Map.Entry<K,V> | [lastEntry(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#lastEntry())  <br />  ) | 返回与此映射中的最大键关联的键 - 值映射，如果映射为空，则 null 。 |
| K | [lastKey(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#lastKey())  <br />  ) | 返回此映射中当前的最后一个（最高）键。 |
| Map.Entry<K,V> | [lowerEntry](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#lowerEntry(K))  <br />  (K key) | 返回与严格小于给定键的最大键相关联的键 - 值映射，如果没有这样的键，则 null 。 |
| K | [lowerKey](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#lowerKey(K))  <br />  (K key) | 返回严格小于给定键的最大键，如果没有这样键，则返回 null 。 |
| NavigableSet<K> | [navigableKeySet(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#navigableKeySet())  <br />  ) | 返回此映射中包含的键的NavigableSet视图。 |
| Map.Entry<K,V> | [pollFirstEntry(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#pollFirstEntry())  <br />  ) | 删除并返回与此映射中的最小键关联的键 - 值映射，如果映射为空，则 null 。 |
| Map.Entry<K,V> | [pollLastEntry(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#pollLastEntry())  <br />  ) | 删除并返回与此映射中的最大键关联的键 - 值映射，如果映射为空，则 null 。 |
| V | [put](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#put(K,V))  <br />  (K key, V value) | 将指定的值与此映射中的指定键相关联。 |
| void | [putAll](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#putAll(java.util.Map))  <br />  (Map<? extends K,? extends V> map) | 将指定映射中的所有映射复制到此映射。 |
| V | [remove](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#remove(java.lang.Object))  <br />  (Object key) | 如果存在，则从此TreeMap中删除此键的映射。 |
| int | [size(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#size())  <br />  ) | 返回此映射中键 - 值映射的数量。 |
| NavigableMap<K,V> | [subMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#subMap(K,boolean,K,boolean))  <br />  (K fromKey, boolean fromInclusive, K toKey, boolean toInclusive) | 返回此映射部分的视图，其键范围为 fromKey至 toKey 。 |
| SortedMap<K,V> | [subMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#subMap(K,K))  <br />  (K fromKey, K toKey) | 返回此映射部分的视图，其键的范围从 fromKey （包括 toKey ）到 toKey （独占）。 |
| SortedMap<K,V> | [tailMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#tailMap(K))  <br />  (K fromKey) | 返回此映射的部分视图，其键大于或等于 fromKey 。 |
| NavigableMap<K,V> | [tailMap](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#tailMap(K,boolean))  <br />  (K fromKey, boolean inclusive) | 返回此映射的部分视图，其键大于（或等于，如果 inclusive为真） fromKey 。 |
| Collection<V> | [values(](https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#values())  <br />  ) | 返回此映射中包含的值的Collection视图。 |


## Collections
| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| static  boolean | [addAll](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#addAll(java.util.Collection,T...))  <br />  (Collection<? super T> c, T... elements) | 将所有指定的元素添加到指定的集合中。 |
| static  Queue<T> | [asLifoQueue](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#asLifoQueue(java.util.Deque))  <br />  (Deque deque) | 返回Deque的视图作为后进先出（ Lifo ） Queue 。 |
| static  int | [binarySearch](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#binarySearch(java.util.List,T))  <br />  (List<? extends Comparable<? super T>> list, T key) | 使用二进制搜索算法在指定列表中搜索指定对象。 |
| static  int | [binarySearch](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#binarySearch(java.util.List,T,java.util.Comparator))  <br />  (List<? extends T> list, T key, Comparator<? super T> c) | 使用二进制搜索算法在指定列表中搜索指定对象。 |
| static  Collection<E> | [checkedCollection](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedCollection(java.util.Collection,java.lang.Class))  <br />  (Collection c, 类 type) | 返回指定集合的动态类型安全视图。 |
| static  List<E> | [checkedList](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedList(java.util.List,java.lang.Class))  <br />  (List list, 类 type) | 返回指定列表的动态类型安全视图。 |
| static <K,V> Map<K,V> | [checkedMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedMap(java.util.Map,java.lang.Class,java.lang.Class))  <br />  (Map<K,V> m, 类 keyType, 类 valueType) | 返回指定映射的动态类型安全视图。 |
| static <K,V> NavigableMap<K,V> | [checkedNavigableMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedNavigableMap(java.util.NavigableMap,java.lang.Class,java.lang.Class))  <br />  (NavigableMap<K,V> m, 类 keyType, 类 valueType) | 返回指定可导航映射的动态类型安全视图。 |
| static  NavigableSet<E> | [checkedNavigableSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedNavigableSet(java.util.NavigableSet,java.lang.Class))  <br />  (NavigableSet s, 类 type) | 返回指定可导航集的动态类型安全视图。 |
| static  Queue<E> | [checkedQueue](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedQueue(java.util.Queue,java.lang.Class))  <br />  (Queue queue, 类 type) | 返回指定队列的动态类型安全视图。 |
| static  Set<E> | [checkedSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedSet(java.util.Set,java.lang.Class))  <br />  (Set s, 类 type) | 返回指定集的动态类型安全视图。 |
| static <K,V> SortedMap<K,V> | [checkedSortedMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedSortedMap(java.util.SortedMap,java.lang.Class,java.lang.Class))  <br />  (SortedMap<K,V> m, 类 keyType, 类 valueType) | 返回指定有序映射的动态类型安全视图。 |
| static  SortedSet<E> | [checkedSortedSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedSortedSet(java.util.SortedSet,java.lang.Class))  <br />  (SortedSet s, 类 type) | 返回指定有序集的动态类型安全视图。 |
| static  void | [copy](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#copy(java.util.List,java.util.List))  <br />  (List<? super T> dest, List<? extends T> src) | 将一个列表中的所有元素复制到另一个列表中。 |
| static boolean | [disjoint](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#disjoint(java.util.Collection,java.util.Collection))  <br />  (Collection c1, Collection c2) | 如果两个指定的集合没有共同的元素，则返回 true 。 |
| static  Enumeration<T> | [emptyEnumeration(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyEnumeration())  <br />  ) | 返回没有元素的枚举。 |
| static  Iterator<T> | [emptyIterator(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyIterator())  <br />  ) | 返回没有元素的迭代器。 |
| static  List<T> | [emptyList(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyList())  <br />  ) | 返回一个空列表（不可变）。 |
| static  ListIterator<T> | [emptyListIterator(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyListIterator())  <br />  ) | 返回没有元素的列表迭代器。 |
| static <K,V> Map<K,V> | [emptyMap(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyMap())  <br />  ) | 返回一个空映射（不可变）。 |
| static <K,V> NavigableMap<K,V> | [emptyNavigableMap(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyNavigableMap())  <br />  ) | 返回一个空的可导航地图（不可变）。 |
| static  NavigableSet<E> | [emptyNavigableSet(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyNavigableSet())  <br />  ) | 返回一个空的可导航集（不可变）。 |
| static  Set<T> | [emptySet(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptySet())  <br />  ) | 返回一个空集（不可变）。 |
| static <K,V> SortedMap<K,V> | [emptySortedMap(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptySortedMap())  <br />  ) | 返回一个空的有序映射（不可变）。 |
| static  SortedSet<E> | [emptySortedSet(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptySortedSet())  <br />  ) | 返回一个空的有序集（不可变）。 |
| static  Enumeration<T> | [enumeration](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#enumeration(java.util.Collection))  <br />  (Collection c) | 返回指定集合的枚举。 |
| static  void | [fill](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#fill(java.util.List,T))  <br />  (List<? super T> list, T obj) | 用指定的元素替换指定列表的所有元素。 |
| static int | [frequency](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#frequency(java.util.Collection,java.lang.Object))  <br />  (Collection<?> c, Object o) | 返回指定集合中等于指定对象的元素数。 |
| static int | [indexOfSubList](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#indexOfSubList(java.util.List,java.util.List))  <br />  (List source, List target) | 返回指定源列表中第一次出现的指定目标列表的起始位置，如果不存在，则返回-1。 |
| static int | [lastIndexOfSubList](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#lastIndexOfSubList(java.util.List,java.util.List))  <br />  (List source, List target) | 返回指定源列表中指定目标列表最后一次出现的起始位置，如果不存在，则返回-1。 |
| static  ArrayList<T> | [list](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#list(java.util.Enumeration))  <br />  (Enumeration e) | 返回一个数组列表，其中包含指定枚举返回的元素，这些元素按枚举返回的顺序排列。 |
| static <T extends Object & Comparable<? super T>> T | [max](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#max(java.util.Collection))  <br />  (Collection<? extends T> coll) | 根据元素的 自然顺序返回给定集合的最大元素。 |
| static  T | [max](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#max(java.util.Collection,java.util.Comparator))  <br />  (Collection<? extends T> coll, Comparator<? super T> comp) | 根据指定比较器引发的顺序返回给定集合的最大元素。 |
| static <T extends Object & Comparable<? super T>> T | [min](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#min(java.util.Collection))  <br />  (Collection<? extends T> coll) | 根据元素的 自然顺序返回给定集合的最小元素。 |
| static  T | [min](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#min(java.util.Collection,java.util.Comparator))  <br />  (Collection<? extends T> coll, Comparator<? super T> comp) | 根据指定比较器引发的顺序返回给定集合的最小元素。 |
| static  List<T> | [nCopies](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#nCopies(int,T))  <br />  (int n, T o) | 返回由指定对象的 n副本组成的不可变列表。 |
| static  Set<E> | [newSetFromMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#newSetFromMap(java.util.Map))  <br />  (Map<E,Boolean> map) | 返回由指定映射支持的集合。 |
| static  boolean | [replaceAll](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#replaceAll(java.util.List,T,T))  <br />  (List list, T oldVal, T newVal) | 用列表替换列表中所有出现的指定值。 |
| static void | [reverse](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#reverse(java.util.List))  <br />  (List<?> list) | 反转指定列表中元素的顺序。 |
| static  Comparator<T> | [reverseOrder(](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#reverseOrder())  <br />  ) | 返回一个比较器， Comparable实现 Comparable接口的对象集合强制执行 自然排序的 Comparable 。 |
| static  Comparator<T> | [reverseOrder](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#reverseOrder(java.util.Comparator))  <br />  (Comparator cmp) | 返回一个比较器，它强制指定比较器的反向排序。 |
| static void | [rotate](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#rotate(java.util.List,int))  <br />  (List<?> list, int distance) | 按指定距离旋转指定列表中的元素。 |
| static void | [shuffle](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#shuffle(java.util.List))  <br />  (List<?> list) | 使用默认的随机源随机置换指定的列表。 |
| static void | [shuffle](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#shuffle(java.util.List,java.util.Random))  <br />  (List<?> list, Random rnd) | 使用指定的随机源随机置换指定的列表。 |
| static  Set<T> | [singleton](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#singleton(T))  <br />  (T o) | 返回仅包含指定对象的不可变集。 |
| static  List<T> | [singletonList](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#singletonList(T))  <br />  (T o) | 返回仅包含指定对象的不可变列表。 |
| static <K,V> Map<K,V> | [singletonMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#singletonMap(K,V))  <br />  (K key, V value) | 返回不可变映射，仅将指定键映射到指定值。 |
| static <T extends Comparable<? super T>> void | [sort](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#sort(java.util.List))  <br />  (List list) | 根据其元素的natural ordering ，将指定列表按升序排序。 |
| static  void | [sort](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#sort(java.util.List,java.util.Comparator))  <br />  (List list, Comparator<? super T> c) | 根据指定比较器引发的顺序对指定列表进行排序。 |
| static void | [swap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#swap(java.util.List,int,int))  <br />  (List<?> list, int i, int j) | 交换指定列表中指定位置的元素。 |
| static  Collection<T> | [synchronizedCollection](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedCollection(java.util.Collection))  <br />  (Collection c) | 返回由指定集合支持的同步（线程安全）集合。 |
| static  List<T> | [synchronizedList](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedList(java.util.List))  <br />  (List list) | 返回由指定列表支持的同步（线程安全）列表。 |
| static <K,V> Map<K,V> | [synchronizedMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedMap(java.util.Map))  <br />  (Map<K,V> m) | 返回由指定映射支持的同步（线程安全）映射。 |
| static <K,V> NavigableMap<K,V> | [synchronizedNavigableMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedNavigableMap(java.util.NavigableMap))  <br />  (NavigableMap<K,V> m) | 返回由指定的可导航映射支持的同步（线程安全）可导航映射。 |
| static  NavigableSet<T> | [synchronizedNavigableSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedNavigableSet(java.util.NavigableSet))  <br />  (NavigableSet s) | 返回由指定的可导航集支持的同步（线程安全）可导航集。 |
| static  Set<T> | [synchronizedSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedSet(java.util.Set))  <br />  (Set s) | 返回由指定集支持的同步（线程安全）集。 |
| static <K,V> SortedMap<K,V> | [synchronizedSortedMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedSortedMap(java.util.SortedMap))  <br />  (SortedMap<K,V> m) | 返回由指定的有序映射支持的同步（线程安全）有序映射。 |
| static  SortedSet<T> | [synchronizedSortedSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedSortedSet(java.util.SortedSet))  <br />  (SortedSet s) | 返回由指定有序集支持的同步（线程安全）有序集。 |
| static  Collection<T> | [unmodifiableCollection](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableCollection(java.util.Collection))  <br />  (Collection<? extends T> c) | 返回指定集合的 [unmodifiable view ](https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview)  <br />  。 |
| static  List<T> | [unmodifiableList](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableList(java.util.List))  <br />  (List<? extends T> list) | 返回指定列表的 [unmodifiable view ](https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview)  <br />  。 |
| static <K,V> Map<K,V> | [unmodifiableMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableMap(java.util.Map))  <br />  (Map<? extends K,? extends V> m) | 返回指定映射的 [unmodifiable view ](https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview)  <br />  。 |
| static <K,V> NavigableMap<K,V> | [unmodifiableNavigableMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableNavigableMap(java.util.NavigableMap))  <br />  (NavigableMap<K,? extends V> m) | 返回指定的可导航地图的 [unmodifiable view ](https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview)  <br />  。 |
| static  NavigableSet<T> | [unmodifiableNavigableSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableNavigableSet(java.util.NavigableSet))  <br />  (NavigableSet s) | 返回指定的可导航集的 [unmodifiable view ](https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview)  <br />  。 |
| static  Set<T> | [unmodifiableSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableSet(java.util.Set))  <br />  (Set<? extends T> s) | 返回指定集的 [unmodifiable view ](https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview)  <br />  。 |
| static <K,V> SortedMap<K,V> | [unmodifiableSortedMap](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableSortedMap(java.util.SortedMap))  <br />  (SortedMap<K,? extends V> m) | 返回指定有序映射的 [unmodifiable view ](https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview)  <br />  。 |
| static  SortedSet<T> | [unmodifiableSortedSet](https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableSortedSet(java.util.SortedSet))  <br />  (SortedSet s) | 返回指定有序集的 [unmodifiable view ](https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview)  <br />  。 |


## Iterator
**public interface Iterator**

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| default void | [forEachRemaining](https://www.apiref.com/java11-zh/java.base/java/util/Iterator.html#forEachRemaining(java.util.function.Consumer))  <br />  (Consumer<? super E> action) | 对每个剩余元素执行给定操作，直到处理完所有元素或操作引发异常。 |
| boolean | [hasNext(](https://www.apiref.com/java11-zh/java.base/java/util/Iterator.html#hasNext())  <br />  ) | 如果迭代具有更多元素，则返回 true 。 |
| E | [next(](https://www.apiref.com/java11-zh/java.base/java/util/Iterator.html#next())  <br />  ) | 返回迭代中的下一个元素。 |
| default void | [remove(](https://www.apiref.com/java11-zh/java.base/java/util/Iterator.html#remove())  <br />  ) | 从底层集合中移除此迭代器返回的最后一个元素（可选操作）。 |

Iterator实现
```java
class ReverseList<T> implements Iterable<T> {
    private List<T> list = new ArrayList<>();
    public void add(T t) {
        list.add(t);
    }
    @Override
    public Iterator<T> iterator() {
        return new ReverseIterator(list.size());
    }
    class ReverseIterator implements Iterator<T> {
        int index;
        ReverseIterator(int index) {
            this.index = index;
        }
        @Override
        public boolean hasNext() {
            return index > 0;
        }
        @Override
        public T next() {
            index--;
            return ReverseList.this.list.get(index);
        }
    }
}
```

# java.time
| 类 | 描述 |
| --- | --- |
| Clock | 一个时钟，使用时区提供对当前时刻，日期和时间的访问。 |
| Duration | 基于时间的时间量，例如'34.5秒'。 |
| Instant | 时间线上的瞬时点。 |
| LocalDate | ISO- 2007-12-03 ，例如 2007-12-03 。 |
| LocalDateTime | ISO- 2007-12-03T10:15:30 ，例如 2007-12-03T10:15:30 。 |
| LocalTime | ISO- 10:15:30 ，例如 10:15:30 。 |
| MonthDay | ISO- --12-03 - 日，例如 --12-03 。 |
| OffsetDateTime | 日期时间，与ISO- 2007-12-03T10:15:30+01:00 UTC / Greenwich偏移，例如 2007-12-03T10:15:30+01:00 。 |
| OffsetTime | 在ISO- 10:15:30+01:00 UTC / Greenwich偏移的时间，例如 10:15:30+01:00 。 |
| Period | ISO-8601日历系统中基于日期的时间量，例如“2年，3个月和4天”。 |
| Year | ISO- 2007 ，例如 2007 。 |
| YearMonth | ISO- 2007-12 ，例如 2007-12 。 |
| ZonedDateTime | 带有ISO- 2007-12-03T10:15:30+01:00 Europe/Paris ，例如 2007-12-03T10:15:30+01:00 Europe/Paris 。 |
| ZoneId | 时区ID，例如 Europe/Paris 。 |
| ZoneOffset | 与格林威治/ UTC的时区偏移，例如 +02:00 。 |

Month的范围用1~12表示1月到12月；  <br />  Week的范围用1~7表示周一到周日。  <br />  ISO 8601规定的日期和时间分隔符是T。标准格式如下：

- 日期：yyyy-MM-dd
- 时间：HH:mm:ss
- 带毫秒的时间：HH:mm:ss.SSS
- 日期和时间：yyyy-MM-dd'T'HH:mm:ss
- 带毫秒的日期和时间：yyyy-MM-dd'T'HH:mm:ss.SSS

## LocalDateTime
public final class **LocalDateTime**  <br />  extends Object  <br />  implements Temporal, TemporalAdjuster, ChronoLocalDateTime, Serializable

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| Temporal | [adjustInto](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#adjustInto(java.time.temporal.Temporal))  <br />  (Temporal temporal) | 调整指定的时态对象以使其具有与此对象相同的日期和时间。 |
| OffsetDateTime | [atOffset](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#atOffset(java.time.ZoneOffset))  <br />  (ZoneOffset offset) | 将此日期时间与偏移量组合以创建 OffsetDateTime 。 |
| ZonedDateTime | [atZone](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#atZone(java.time.ZoneId))  <br />  (ZoneId zone) | 将此日期时间与时区组合以创建 ZonedDateTime 。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#compareTo(java.time.chrono.ChronoLocalDateTime))  <br />  (ChronoLocalDateTime<?> other) | 将此日期时间与另一个日期时间进行比较。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#equals(java.lang.Object))  <br />  (Object obj) | 检查此日期时间是否等于另一个日期时间。 |
| String | [format](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#format(java.time.format.DateTimeFormatter))  <br />  (DateTimeFormatter formatter) | 使用指定的格式化程序格式化此日期时间。 |
| static LocalDateTime | [from](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#from(java.time.temporal.TemporalAccessor))  <br />  (TemporalAccessor temporal) | 从时态对象获得 LocalDateTime的实例。 |
| int | [get](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#get(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 从此日期时间获取指定字段的值，如 int 。 |
| int | [getDayOfMonth(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getDayOfMonth())  <br />  ) | 获取日期字段。 |
| DayOfWeek | [getDayOfWeek(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getDayOfWeek())  <br />  ) | 获取星期几字段，即枚举 DayOfWeek 。 |
| int | [getDayOfYear(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getDayOfYear())  <br />  ) | 获取日期字段。 |
| int | [getHour(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getHour())  <br />  ) | 获取当日时间字段。 |
| long | [getLong](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getLong(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 从此日期时间获取指定字段的值，作为 long 。 |
| int | [getMinute(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getMinute())  <br />  ) | 获取分钟字段。 |
| Month | [getMonth(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getMonth())  <br />  ) | 使用 Month枚举获取年份字段。 |
| int | [getMonthValue(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getMonthValue())  <br />  ) | 获取1到12之间的月份字段。 |
| int | [getNano(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getNano())  <br />  ) | 获取纳秒级字段。 |
| int | [getSecond(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getSecond())  <br />  ) | 获取第二分钟字段。 |
| int | [getYear(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getYear())  <br />  ) | 获取年份字段。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#hashCode())  <br />  ) | 此日期时间的哈希码。 |
| boolean | [isAfter](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isAfter(java.time.chrono.ChronoLocalDateTime))  <br />  (ChronoLocalDateTime<?> other) | 检查此日期时间是否在指定的日期时间之后。 |
| boolean | [isBefore](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isBefore(java.time.chrono.ChronoLocalDateTime))  <br />  (ChronoLocalDateTime<?> other) | 检查此日期时间是否在指定的日期时间之前。 |
| boolean | [isEqual](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isEqual(java.time.chrono.ChronoLocalDateTime))  <br />  (ChronoLocalDateTime<?> other) | 检查此日期时间是否等于指定的日期时间。 |
| boolean | [isSupported](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isSupported(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 检查是否支持指定的字段。 |
| boolean | [isSupported](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isSupported(java.time.temporal.TemporalUnit))  <br />  (TemporalUnit unit) | 检查指定的单元是否受支持。 |
| LocalDateTime | [minus](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minus(long,java.time.temporal.TemporalUnit))  <br />  (long amountToSubtract, TemporalUnit unit) | 返回此日期时间的副本，并减去指定的数量。 |
| LocalDateTime | [minus](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minus(java.time.temporal.TemporalAmount))  <br />  (TemporalAmount amountToSubtract) | 返回此日期时间的副本，并减去指定的数量。 |
| LocalDateTime | [minusDays](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusDays(long))  <br />  (long days) | 返回此 LocalDateTime的副本，并减去指定的天数。 |
| LocalDateTime | [minusHours](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusHours(long))  <br />  (long hours) | 返回此 LocalDateTime的副本，并减去指定的小时数。 |
| LocalDateTime | [minusMinutes](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusMinutes(long))  <br />  (long minutes) | 返回此 LocalDateTime的副本，并减去指定的分钟数。 |
| LocalDateTime | [minusMonths](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusMonths(long))  <br />  (long months) | 返回此 LocalDateTime的副本，并减去指定的月数。 |
| LocalDateTime | [minusNanos](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusNanos(long))  <br />  (long nanos) | 返回此 LocalDateTime的副本，并减去指定的纳秒数。 |
| LocalDateTime | [minusSeconds](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusSeconds(long))  <br />  (long seconds) | 返回此 LocalDateTime的副本，并减去指定的秒数。 |
| LocalDateTime | [minusWeeks](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusWeeks(long))  <br />  (long weeks) | 返回此 LocalDateTime的副本，并减去指定的周数。 |
| LocalDateTime | [minusYears](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusYears(long))  <br />  (long years) | 返回此 LocalDateTime的副本，并减去指定的年数。 |
| static LocalDateTime | [now(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#now())  <br />  ) | 从默认时区中的系统时钟获取当前日期时间。 |
| static LocalDateTime | [now](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#now(java.time.Clock))  <br />  (Clock clock) | 从指定的时钟获得当前日期时间。 |
| static LocalDateTime | [now](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#now(java.time.ZoneId))  <br />  (ZoneId zone) | 从指定时区的系统时钟获取当前日期时间。 |
| static LocalDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,int,int,int,int))  <br />  (int year, int month, int dayOfMonth, int hour, int minute) | 从年，月，日，小时和分钟获得 LocalDateTime的实例，将第二个和纳秒设置为零。 |
| static LocalDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,int,int,int,int,int))  <br />  (int year, int month, int dayOfMonth, int hour, int minute, int second) | 从年，月，日，小时，分钟和秒获得 LocalDateTime的实例，将纳秒设置为零。 |
| static LocalDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,int,int,int,int,int,int))  <br />  (int year, int month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond) | 从年，月，日，小时，分钟，秒和纳秒获得 LocalDateTime的实例。 |
| static LocalDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,java.time.Month,int,int,int))  <br />  (int year, Month month, int dayOfMonth, int hour, int minute) | 从年，月，日，小时和分钟获得 LocalDateTime的实例，将第二个和纳秒设置为零。 |
| static LocalDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,java.time.Month,int,int,int,int))  <br />  (int year, Month month, int dayOfMonth, int hour, int minute, int second) | 从年，月，日，小时，分钟和秒获得 LocalDateTime的实例，将纳秒设置为零。 |
| static LocalDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,java.time.Month,int,int,int,int,int))  <br />  (int year, Month month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond) | 从年，月，日，小时，分钟，秒和纳秒获得 LocalDateTime的实例。 |
| static LocalDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(java.time.LocalDate,java.time.LocalTime))  <br />  (LocalDate date, LocalTime time) | 从日期和时间获得 LocalDateTime的实例。 |
| static LocalDateTime | [ofEpochSecond](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#ofEpochSecond(long,int,java.time.ZoneOffset))  <br />  (long epochSecond, int nanoOfSecond, ZoneOffset offset) | 使用1970-01-01T00：00：00Z时代的秒数获得 LocalDateTime的实例。 |
| static LocalDateTime | [ofInstant](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#ofInstant(java.time.Instant,java.time.ZoneId))  <br />  (Instant instant, ZoneId zone) | 从 Instant和区域ID获取 LocalDateTime的实例。 |
| static LocalDateTime | [parse](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#parse(java.lang.CharSequence))  <br />  (CharSequence text) | 从文本字符串（如 2007-12-03T10:15:30获取 LocalDateTime的实例。 |
| static LocalDateTime | [parse](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#parse(java.lang.CharSequence,java.time.format.DateTimeFormatter))  <br />  (CharSequence text, DateTimeFormatter formatter) | 使用特定格式化程序从文本字符串中获取 LocalDateTime的实例。 |
| LocalDateTime | [plus](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plus(long,java.time.temporal.TemporalUnit))  <br />  (long amountToAdd, TemporalUnit unit) | 返回此日期时间的副本，并添加指定的数量。 |
| LocalDateTime | [plus](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plus(java.time.temporal.TemporalAmount))  <br />  (TemporalAmount amountToAdd) | 返回此日期时间的副本，并添加指定的数量。 |
| LocalDateTime | [plusDays](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusDays(long))  <br />  (long days) | 返回此 LocalDateTime的副本，并添加指定的天数。 |
| LocalDateTime | [plusHours](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusHours(long))  <br />  (long hours) | 返回此 LocalDateTime的副本，并添加指定的小时数。 |
| LocalDateTime | [plusMinutes](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusMinutes(long))  <br />  (long minutes) | 返回此 LocalDateTime的副本，并添加指定的分钟数。 |
| LocalDateTime | [plusMonths](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusMonths(long))  <br />  (long months) | 返回此 LocalDateTime的副本，并添加指定的月份数。 |
| LocalDateTime | [plusNanos](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusNanos(long))  <br />  (long nanos) | 返回此 LocalDateTime的副本， LocalDateTime添加了指定的纳秒数。 |
| LocalDateTime | [plusSeconds](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusSeconds(long))  <br />  (long seconds) | 返回此 LocalDateTime的副本，并添加指定的秒数。 |
| LocalDateTime | [plusWeeks](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusWeeks(long))  <br />  (long weeks) | 返回此 LocalDateTime的副本，并添加指定的周数。 |
| LocalDateTime | [plusYears](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusYears(long))  <br />  (long years) | 返回此 LocalDateTime的副本，并添加指定的年数。 |
|  R | [query](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#query(java.time.temporal.TemporalQuery))  <br />  (TemporalQuery query) | 使用指定的查询查询此日期时间。 |
| ValueRange | [range](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#range(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 获取指定字段的有效值范围。 |
| LocalDate | [toLocalDate(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#toLocalDate())  <br />  ) | 获取此日期时间的 LocalDate部分。 |
| LocalTime | [toLocalTime(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#toLocalTime())  <br />  ) | 获取此日期时间的 LocalTime部分。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#toString())  <br />  ) | 将此日期时间输出为 String ，例如 2007-12-03T10:15:30 。 |
| LocalDateTime | [truncatedTo](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#truncatedTo(java.time.temporal.TemporalUnit))  <br />  (TemporalUnit unit) | 返回此 LocalDateTime的副本，并截断时间。 |
| long | [until](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit))  <br />  (Temporal endExclusive, TemporalUnit unit) | 根据指定的单位计算到另一个日期时间的时间量。 |
| LocalDateTime | [with](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#with(java.time.temporal.TemporalAdjuster))  <br />  (TemporalAdjuster adjuster) | 返回此日期时间的调整副本。 |
| LocalDateTime | [with](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#with(java.time.temporal.TemporalField,long))  <br />  (TemporalField field, long newValue) | 返回此日期时间的副本，并将指定字段设置为新值。 |
| LocalDateTime | [withDayOfMonth](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withDayOfMonth(int))  <br />  (int dayOfMonth) | 返回此 LocalDateTime的副本，并更改日期。 |
| LocalDateTime | [withDayOfYear](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withDayOfYear(int))  <br />  (int dayOfYear) | 返回此 LocalDateTime的副本，并更改日期。 |
| LocalDateTime | [withHour](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withHour(int))  <br />  (int hour) | 返回此 LocalDateTime的副本，并更改日期。 |
| LocalDateTime | [withMinute](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withMinute(int))  <br />  (int minute) | 返回此 LocalDateTime的副本，并更改了分钟。 |
| LocalDateTime | [withMonth](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withMonth(int))  <br />  (int month) | 返回此 LocalDateTime的副本，其中年份已更改。 |
| LocalDateTime | [withNano](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withNano(int))  <br />  (int nanoOfSecond) | 返回此 LocalDateTime的副本，其中纳秒级已更改。 |
| LocalDateTime | [withSecond](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withSecond(int))  <br />  (int second) | 返回此 LocalDateTime的副本，并在第二分钟更改。 |
| LocalDateTime | [withYear](https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withYear(int))  <br />  (int year) | 返回此 LocalDateTime的副本，并更改年份。 |


## Instant
public final class **Instant**  <br />  extends Object  <br />  implements Temporal, TemporalAdjuster, Comparable, Serializable

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| Temporal | [adjustInto](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#adjustInto(java.time.temporal.Temporal))  <br />  (Temporal temporal) | 调整指定的时态对象以获得此瞬间。 |
| OffsetDateTime | [atOffset](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#atOffset(java.time.ZoneOffset))  <br />  (ZoneOffset offset) | 将此瞬间与偏移量组合以创建 OffsetDateTime 。 |
| ZonedDateTime | [atZone](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#atZone(java.time.ZoneId))  <br />  (ZoneId zone) | 将此瞬间与时区相结合以创建 ZonedDateTime 。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#compareTo(java.time.Instant))  <br />  (Instant otherInstant) | 将此瞬间与指定的瞬间进行比较。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#equals(java.lang.Object))  <br />  (Object otherInstant) | 检查此瞬间是否等于指定的瞬间。 |
| static Instant | [from](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#from(java.time.temporal.TemporalAccessor))  <br />  (TemporalAccessor temporal) | 从时态对象获得 Instant的实例。 |
| int | [get](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#get(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 以 int获取此瞬间指定字段的值。 |
| long | [getEpochSecond(](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#getEpochSecond())  <br />  ) | 获取1970-01-01T00：00：00Z的Java纪元的秒数。 |
| long | [getLong](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#getLong(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 从此瞬间获取指定字段的值，如 long 。 |
| int | [getNano(](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#getNano())  <br />  ) | 从时间线开始，获取从第二个开始的纳秒数。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#hashCode())  <br />  ) | 返回此瞬间的哈希码。 |
| boolean | [isAfter](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#isAfter(java.time.Instant))  <br />  (Instant otherInstant) | 检查此瞬间是否在指定的瞬间之后。 |
| boolean | [isBefore](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#isBefore(java.time.Instant))  <br />  (Instant otherInstant) | 检查此瞬间是否在指定的瞬间之前。 |
| boolean | [isSupported](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#isSupported(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 检查是否支持指定的字段。 |
| boolean | [isSupported](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#isSupported(java.time.temporal.TemporalUnit))  <br />  (TemporalUnit unit) | 检查指定的单元是否受支持。 |
| Instant | [minus](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minus(long,java.time.temporal.TemporalUnit))  <br />  (long amountToSubtract, TemporalUnit unit) | 返回此瞬间的副本，并减去指定的数量。 |
| Instant | [minus](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minus(java.time.temporal.TemporalAmount))  <br />  (TemporalAmount amountToSubtract) | 返回此瞬间的副本，并减去指定的数量。 |
| Instant | [minusMillis](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minusMillis(long))  <br />  (long millisToSubtract) | 返回此瞬间的副本，并减去指定的持续时间（以毫秒为单位）。 |
| Instant | [minusNanos](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minusNanos(long))  <br />  (long nanosToSubtract) | 返回此瞬间的副本，并减去指定的持续时间（以纳秒为单位）。 |
| Instant | [minusSeconds](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minusSeconds(long))  <br />  (long secondsToSubtract) | 返回此瞬间的副本，并减去指定的持续时间（以秒为单位）。 |
| static Instant | [now(](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#now())  <br />  ) | 从系统时钟获取当前瞬间。 |
| static Instant | [now](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#now(java.time.Clock))  <br />  (Clock clock) | 从指定时钟获取当前时刻。 |
| static Instant | [ofEpochMilli](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#ofEpochMilli(long))  <br />  (long epochMilli) | 从1970-01-01T00：00：00Z的纪元使用毫秒获得 Instant的实例。 |
| static Instant | [ofEpochSecond](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#ofEpochSecond(long))  <br />  (long epochSecond) | 使用1970-01-01T00：00：00Z时代的秒数获得 Instant的实例。 |
| static Instant | [ofEpochSecond](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#ofEpochSecond(long,long))  <br />  (long epochSecond, long nanoAdjustment) | 使用1970-01-01T00：00：00Z的时间秒和秒的纳秒分数获得 Instant的实例。 |
| static Instant | [parse](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#parse(java.lang.CharSequence))  <br />  (CharSequence text) | 从文本字符串（例如 2007-12-03T10:15:30.00Z获取 Instant的实例。 |
| Instant | [plus](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plus(long,java.time.temporal.TemporalUnit))  <br />  (long amountToAdd, TemporalUnit unit) | 返回此瞬间的副本，并添加指定的数量。 |
| Instant | [plus](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plus(java.time.temporal.TemporalAmount))  <br />  (TemporalAmount amountToAdd) | 返回此瞬间的副本，并添加指定的数量。 |
| Instant | [plusMillis](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plusMillis(long))  <br />  (long millisToAdd) | 返回此瞬间的副本，并添加指定的持续时间（以毫秒为单位）。 |
| Instant | [plusNanos](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plusNanos(long))  <br />  (long nanosToAdd) | 返回此瞬间的副本，并添加指定的持续时间（以纳秒为单位）。 |
| Instant | [plusSeconds](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plusSeconds(long))  <br />  (long secondsToAdd) | 返回此瞬间的副本，并添加指定的持续时间（以秒为单位）。 |
|  R | [query](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#query(java.time.temporal.TemporalQuery))  <br />  (TemporalQuery query) | 使用指定的查询查询此瞬间。 |
| ValueRange | [range](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#range(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 获取指定字段的有效值范围。 |
| long | [toEpochMilli(](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#toEpochMilli())  <br />  ) | 将此瞬间转换为1970-01-01T00：00：00Z时代的毫秒数。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#toString())  <br />  ) | 使用ISO-8601表示的此瞬间的字符串表示。 |
| Instant | [truncatedTo](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#truncatedTo(java.time.temporal.TemporalUnit))  <br />  (TemporalUnit unit) | 返回截断到指定单位的此 Instant的副本。 |
| long | [until](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit))  <br />  (Temporal endExclusive, TemporalUnit unit) | 根据指定的单位计算到另一个瞬间的时间量。 |
| Instant | [with](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#with(java.time.temporal.TemporalAdjuster))  <br />  (TemporalAdjuster adjuster) | 返回此瞬间的调整副本。 |
| Instant | [with](https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#with(java.time.temporal.TemporalField,long))  <br />  (TemporalField field, long newValue) | 返回此瞬间的副本，并将指定的字段设置为新值。 |


## Duration
**public final class Duration  <br />  extends Object  <br />  implements TemporalAmount, Comparable, Serializable**

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| Duration | [abs(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#abs())  <br />  ) | 返回此持续时间的副本，长度为正。 |
| Temporal | [addTo](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#addTo(java.time.temporal.Temporal))  <br />  (Temporal temporal) | 将此持续时间添加到指定的时态对象。 |
| static Duration | [between](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#between(java.time.temporal.Temporal,java.time.temporal.Temporal))  <br />  (Temporal startInclusive, Temporal endExclusive) | 获得表示两个时间对象之间的持续时间的 Duration 。 |
| int | [compareTo](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#compareTo(java.time.Duration))  <br />  (Duration otherDuration) | 将此持续时间与指定的 Duration 。 |
| Duration | [dividedBy](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#dividedBy(long))  <br />  (long divisor) | 返回此持续时间的副本除以指定的值。 |
| long | [dividedBy](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#dividedBy(java.time.Duration))  <br />  (Duration divisor) | 返回指定持续时间在此持续时间内发生的整数次数。 |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#equals(java.lang.Object))  <br />  (Object otherDuration) | 检查此持续时间是否等于指定的 Duration 。 |
| static Duration | [from](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#from(java.time.temporal.TemporalAmount))  <br />  (TemporalAmount amount) | 从时间量获得 Duration的实例。 |
| long | [get](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#get(java.time.temporal.TemporalUnit))  <br />  (TemporalUnit unit) | 获取所请求单元的值。 |
| int | [getNano(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#getNano())  <br />  ) | 获取此持续时间内秒数内的纳秒数。 |
| long | [getSeconds(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#getSeconds())  <br />  ) | 获取此持续时间内的秒数。 |
| List<TemporalUnit> | [getUnits(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#getUnits())  <br />  ) | 获取此持续时间支持的单位集。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#hashCode())  <br />  ) | 此持续时间的哈希码。 |
| boolean | [isNegative(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#isNegative())  <br />  ) | 检查此持续时间是否为负，不包括零。 |
| boolean | [isZero(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#isZero())  <br />  ) | 检查此持续时间是否为零长度。 |
| Duration | [minus](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minus(long,java.time.temporal.TemporalUnit))  <br />  (long amountToSubtract, TemporalUnit unit) | 返回此持续时间的副本，并减去指定的持续时间。 |
| Duration | [minus](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minus(java.time.Duration))  <br />  (Duration duration) | 返回此持续时间的副本，并减去指定的持续时间。 |
| Duration | [minusDays](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusDays(long))  <br />  (long daysToSubtract) | 返回此持续时间的副本，并在标准的24小时内减去指定的持续时间。 |
| Duration | [minusHours](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusHours(long))  <br />  (long hoursToSubtract) | 返回此持续时间的副本，并减去指定的持续时间（以小时为单位）。 |
| Duration | [minusMillis](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusMillis(long))  <br />  (long millisToSubtract) | 返回此持续时间的副本，并减去指定的持续时间（以毫秒为单位）。 |
| Duration | [minusMinutes](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusMinutes(long))  <br />  (long minutesToSubtract) | 返回此持续时间的副本，并减去指定的持续时间（以分钟为单位）。 |
| Duration | [minusNanos](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusNanos(long))  <br />  (long nanosToSubtract) | 返回此持续时间的副本，并减去指定的持续时间（以纳秒为单位）。 |
| Duration | [minusSeconds](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusSeconds(long))  <br />  (long secondsToSubtract) | 返回此持续时间的副本，并减去指定的持续时间（以秒为单位）。 |
| Duration | [multipliedBy](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#multipliedBy(long))  <br />  (long multiplicand) | 返回此持续时间的副本乘以标量。 |
| Duration | [negated(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#negated())  <br />  ) | 返回此持续时间的副本，其长度为negated。 |
| static Duration | [of](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#of(long,java.time.temporal.TemporalUnit))  <br />  (long amount, TemporalUnit unit) | 获得 Duration表示指定单位的金额。 |
| static Duration | [ofDays](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofDays(long))  <br />  (long days) | 获得 Duration代表多个标准24小时工作日。 |
| static Duration | [ofHours](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofHours(long))  <br />  (long hours) | 获得代表若干标准小时数的 Duration 。 |
| static Duration | [ofMillis](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofMillis(long))  <br />  (long millis) | 获得表示毫秒数的 Duration 。 |
| static Duration | [ofMinutes](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofMinutes(long))  <br />  (long minutes) | 获得代表若干标准分钟的 Duration 。 |
| static Duration | [ofNanos](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofNanos(long))  <br />  (long nanos) | 获得代表若干纳秒的 Duration 。 |
| static Duration | [ofSeconds](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofSeconds(long))  <br />  (long seconds) | 获得代表若干秒的 Duration 。 |
| static Duration | [ofSeconds](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofSeconds(long,long))  <br />  (long seconds, long nanoAdjustment) | 获得表示数秒的 Duration和以纳秒为单位的调整。 |
| static Duration | [parse](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#parse(java.lang.CharSequence))  <br />  (CharSequence text) | 获得 Duration从文本字符串，如 PnDTnHnMn.nS 。 |
| Duration | [plus](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plus(long,java.time.temporal.TemporalUnit))  <br />  (long amountToAdd, TemporalUnit unit) | 返回此持续时间的副本，并添加指定的持续时间。 |
| Duration | [plus](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plus(java.time.Duration))  <br />  (Duration duration) | 返回此持续时间的副本，并添加指定的持续时间。 |
| Duration | [plusDays](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusDays(long))  <br />  (long daysToAdd) | 返回此持续时间的副本，并在标准的24小时内添加指定的持续时间。 |
| Duration | [plusHours](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusHours(long))  <br />  (long hoursToAdd) | 返回此持续时间的副本，并指定持续时间（以小时为单位）。 |
| Duration | [plusMillis](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusMillis(long))  <br />  (long millisToAdd) | 返回此持续时间的副本，其中包含指定的持续时间（以毫秒为单位）。 |
| Duration | [plusMinutes](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusMinutes(long))  <br />  (long minutesToAdd) | 返回此持续时间的副本，并添加指定的持续时间（分钟）。 |
| Duration | [plusNanos](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusNanos(long))  <br />  (long nanosToAdd) | 返回此持续时间的副本，并添加指定的持续时间（以纳秒为单位）。 |
| Duration | [plusSeconds](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusSeconds(long))  <br />  (long secondsToAdd) | 返回此持续时间的副本，并添加指定的持续时间（以秒为单位） |
| Temporal | [subtractFrom](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#subtractFrom(java.time.temporal.Temporal))  <br />  (Temporal temporal) | 从指定的时态对象中减去此持续时间。 |
| long | [toDays(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toDays())  <br />  ) | 获取此持续时间内的天数。 |
| long | [toDaysPart(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toDaysPart())  <br />  ) | 提取持续时间内的天数。 |
| long | [toHours(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toHours())  <br />  ) | 获取此持续时间内的小时数。 |
| int | [toHoursPart(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toHoursPart())  <br />  ) | 提取持续时间中的小时数。 |
| long | [toMillis(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toMillis())  <br />  ) | 将此持续时间转换为总长度（以毫秒为单位）。 |
| int | [toMillisPart(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toMillisPart())  <br />  ) | 提取持续时间部分的毫秒数。 |
| long | [toMinutes(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toMinutes())  <br />  ) | 获取此持续时间内的分钟数。 |
| int | [toMinutesPart(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toMinutesPart())  <br />  ) | 提取持续时间中的分钟数。 |
| long | [toNanos(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toNanos())  <br />  ) | 将此持续时间转换为以纳秒为单位的总长度，表示为 long 。 |
| int | [toNanosPart(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toNanosPart())  <br />  ) | 在持续时间的几秒内获得纳秒部分。 |
| long | [toSeconds(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toSeconds())  <br />  ) | 获取此持续时间内的秒数。 |
| int | [toSecondsPart(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toSecondsPart())  <br />  ) | 提取持续时间中的秒数。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toString())  <br />  ) | 使用基于ISO-8601秒的表示形式的此持续时间的字符串表示形式，例如 PT8H6M12.345S 。 |
| Duration | [truncatedTo](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#truncatedTo(java.time.temporal.TemporalUnit))  <br />  (TemporalUnit unit) | 返回截断到指定单位的此 Duration的副本。 |
| Duration | [withNanos](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#withNanos(int))  <br />  (int nanoOfSecond) | 使用指定的纳秒数返回此持续时间的副本。 |
| Duration | [withSeconds](https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#withSeconds(long))  <br />  (long seconds) | 以指定的秒数返回此持续时间的副本。 |


## ZonedDateTime
**public final class ZonedDateTime  <br />  extends Object  <br />  implements Temporal, ChronoZonedDateTime, Serializable**

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| boolean | [equals](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#equals(java.lang.Object))  <br />  (Object obj) | 检查此日期时间是否等于另一个日期时间。 |
| String | [format](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#format(java.time.format.DateTimeFormatter))  <br />  (DateTimeFormatter formatter) | 使用指定的格式化程序格式化此日期时间。 |
| static ZonedDateTime | [from](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#from(java.time.temporal.TemporalAccessor))  <br />  (TemporalAccessor temporal) | 从时态对象获得 ZonedDateTime的实例。 |
| int | [get](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#get(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 从此日期时间获取指定字段的值为 int 。 |
| int | [getDayOfMonth(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getDayOfMonth())  <br />  ) | 获取日期字段。 |
| DayOfWeek | [getDayOfWeek(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getDayOfWeek())  <br />  ) | 获取星期几字段，即枚举 DayOfWeek 。 |
| int | [getDayOfYear(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getDayOfYear())  <br />  ) | 获取日期字段。 |
| int | [getHour(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getHour())  <br />  ) | 获取当日时间字段。 |
| long | [getLong](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getLong(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 从此日期时间获取指定字段的值，作为 long 。 |
| int | [getMinute(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getMinute())  <br />  ) | 获取分钟字段。 |
| Month | [getMonth(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getMonth())  <br />  ) | 使用 Month枚举获取年份字段。 |
| int | [getMonthValue(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getMonthValue())  <br />  ) | 获取1到12之间的月份字段。 |
| int | [getNano(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getNano())  <br />  ) | 获取纳秒级字段。 |
| ZoneOffset | [getOffset(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getOffset())  <br />  ) | 获取区域偏移量，例如“+01：00”。 |
| int | [getSecond(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getSecond())  <br />  ) | 获取第二分钟字段。 |
| int | [getYear(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getYear())  <br />  ) | 获取年份字段。 |
| ZoneId | [getZone(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getZone())  <br />  ) | 获取时区，例如“Europe / Paris”。 |
| int | [hashCode(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#hashCode())  <br />  ) | 此日期时间的哈希码。 |
| boolean | [isSupported](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#isSupported(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 检查是否支持指定的字段。 |
| boolean | [isSupported](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#isSupported(java.time.temporal.TemporalUnit))  <br />  (TemporalUnit unit) | 检查指定的单元是否受支持。 |
| ZonedDateTime | [minus](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minus(long,java.time.temporal.TemporalUnit))  <br />  (long amountToSubtract, TemporalUnit unit) | 返回此日期时间的副本，并减去指定的数量。 |
| ZonedDateTime | [minus](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minus(java.time.temporal.TemporalAmount))  <br />  (TemporalAmount amountToSubtract) | 返回此日期时间的副本，并减去指定的数量。 |
| ZonedDateTime | [minusDays](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusDays(long))  <br />  (long days) | 返回此 ZonedDateTime的副本，并减去指定的天数。 |
| ZonedDateTime | [minusHours](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusHours(long))  <br />  (long hours) | 返回此 ZonedDateTime的副本，并减去指定的小时数。 |
| ZonedDateTime | [minusMinutes](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusMinutes(long))  <br />  (long minutes) | 返回此 ZonedDateTime的副本，并减去指定的分钟数。 |
| ZonedDateTime | [minusMonths](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusMonths(long))  <br />  (long months) | 返回此 ZonedDateTime的副本，并减去指定的月数。 |
| ZonedDateTime | [minusNanos](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusNanos(long))  <br />  (long nanos) | 返回此 ZonedDateTime的副本，减去指定的纳秒数。 |
| ZonedDateTime | [minusSeconds](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusSeconds(long))  <br />  (long seconds) | 返回此 ZonedDateTime的副本，并减去指定的秒数。 |
| ZonedDateTime | [minusWeeks](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusWeeks(long))  <br />  (long weeks) | 返回此 ZonedDateTime的副本，并减去指定的周数。 |
| ZonedDateTime | [minusYears](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusYears(long))  <br />  (long years) | 返回此 ZonedDateTime的副本，并减去指定的年数。 |
| static ZonedDateTime | [now(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#now())  <br />  ) | 从默认时区中的系统时钟获取当前日期时间。 |
| static ZonedDateTime | [now](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#now(java.time.Clock))  <br />  (Clock clock) | 从指定的时钟获得当前日期时间。 |
| static ZonedDateTime | [now](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#now(java.time.ZoneId))  <br />  (ZoneId zone) | 从指定时区的系统时钟获取当前日期时间。 |
| static ZonedDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#of(int,int,int,int,int,int,int,java.time.ZoneId))  <br />  (int year, int month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond, ZoneId zone) | 从年，月，日，小时，分钟，秒，纳秒和时区获得 ZonedDateTime的实例。 |
| static ZonedDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#of(java.time.LocalDate,java.time.LocalTime,java.time.ZoneId))  <br />  (LocalDate date, LocalTime time, ZoneId zone) | 从本地日期和时间获得 ZonedDateTime的实例。 |
| static ZonedDateTime | [of](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#of(java.time.LocalDateTime,java.time.ZoneId))  <br />  (LocalDateTime localDateTime, ZoneId zone) | 从本地日期时间获得 ZonedDateTime的实例。 |
| static ZonedDateTime | [ofInstant](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#ofInstant(java.time.Instant,java.time.ZoneId))  <br />  (Instant instant, ZoneId zone) | 从 Instant获得 ZonedDateTime的实例。 |
| static ZonedDateTime | [ofInstant](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#ofInstant(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneId))  <br />  (LocalDateTime localDateTime, ZoneOffset offset, ZoneId zone) | 从通过组合本地日期时间和偏移量形成的瞬间获得 ZonedDateTime的实例。 |
| static ZonedDateTime | [ofLocal](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset))  <br />  (LocalDateTime localDateTime, ZoneId zone, ZoneOffset preferredOffset) | 如果可能，使用首选偏移量从本地日期时间获取 ZonedDateTime的实例。 |
| static ZonedDateTime | [ofStrict](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#ofStrict(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneId))  <br />  (LocalDateTime localDateTime, ZoneOffset offset, ZoneId zone) | 获得 ZonedDateTime的实例，严格验证本地日期时间，偏移量和区域ID的组合。 |
| static ZonedDateTime | [parse](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#parse(java.lang.CharSequence))  <br />  (CharSequence text) | 从文本字符串（如 2007-12-03T10:15:30+01:00[Europe/Paris]获取 ZonedDateTime的实例。 |
| static ZonedDateTime | [parse](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#parse(java.lang.CharSequence,java.time.format.DateTimeFormatter))  <br />  (CharSequence text, DateTimeFormatter formatter) | 使用特定格式化程序从文本字符串中获取 ZonedDateTime的实例。 |
| ZonedDateTime | [plus](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plus(long,java.time.temporal.TemporalUnit))  <br />  (long amountToAdd, TemporalUnit unit) | 返回此日期时间的副本，并添加指定的数量。 |
| ZonedDateTime | [plus](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plus(java.time.temporal.TemporalAmount))  <br />  (TemporalAmount amountToAdd) | 返回此日期时间的副本，并添加指定的数量。 |
| ZonedDateTime | [plusDays](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusDays(long))  <br />  (long days) | 返回此 ZonedDateTime的副本，并添加指定的天数。 |
| ZonedDateTime | [plusHours](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusHours(long))  <br />  (long hours) | 返回此 ZonedDateTime的副本，并添加指定的小时数。 |
| ZonedDateTime | [plusMinutes](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusMinutes(long))  <br />  (long minutes) | 返回此 ZonedDateTime的副本，并添加指定的分钟数。 |
| ZonedDateTime | [plusMonths](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusMonths(long))  <br />  (long months) | 返回此 ZonedDateTime的副本，并添加指定的月数。 |
| ZonedDateTime | [plusNanos](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusNanos(long))  <br />  (long nanos) | 返回此 ZonedDateTime的副本， ZonedDateTime添加了指定的纳秒数。 |
| ZonedDateTime | [plusSeconds](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusSeconds(long))  <br />  (long seconds) | 返回此 ZonedDateTime的副本，并添加指定的秒数。 |
| ZonedDateTime | [plusWeeks](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusWeeks(long))  <br />  (long weeks) | 返回此 ZonedDateTime的副本，并添加指定的周数。 |
| ZonedDateTime | [plusYears](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusYears(long))  <br />  (long years) | 返回此 ZonedDateTime的副本，并添加指定的年数。 |
|  R | [query](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#query(java.time.temporal.TemporalQuery))  <br />  (TemporalQuery query) | 使用指定的查询查询此日期时间。 |
| ValueRange | [range](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#range(java.time.temporal.TemporalField))  <br />  (TemporalField field) | 获取指定字段的有效值范围。 |
| LocalDate | [toLocalDate(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toLocalDate())  <br />  ) | 获取此日期时间的 LocalDate部分。 |
| LocalDateTime | [toLocalDateTime(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toLocalDateTime())  <br />  ) | 获取此日期时间的 LocalDateTime部分。 |
| LocalTime | [toLocalTime(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toLocalTime())  <br />  ) | 获取此日期时间的 LocalTime部分。 |
| OffsetDateTime | [toOffsetDateTime(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toOffsetDateTime())  <br />  ) | 将此日期时间转换为 OffsetDateTime 。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toString())  <br />  ) | 将此日期时间输出为 String ，例如 2007-12-03T10:15:30+01:00[Europe/Paris] 。 |
| ZonedDateTime | [truncatedTo](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#truncatedTo(java.time.temporal.TemporalUnit))  <br />  (TemporalUnit unit) | 返回此 ZonedDateTime的副本，并截断时间。 |
| long | [until](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit))  <br />  (Temporal endExclusive, TemporalUnit unit) | 根据指定的单位计算到另一个日期时间的时间量。 |
| ZonedDateTime | [with](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#with(java.time.temporal.TemporalAdjuster))  <br />  (TemporalAdjuster adjuster) | 返回此日期时间的调整副本。 |
| ZonedDateTime | [with](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#with(java.time.temporal.TemporalField,long))  <br />  (TemporalField field, long newValue) | 返回此日期时间的副本，并将指定字段设置为新值。 |
| ZonedDateTime | [withDayOfMonth](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withDayOfMonth(int))  <br />  (int dayOfMonth) | 返回此 ZonedDateTime的副本，并更改日期。 |
| ZonedDateTime | [withDayOfYear](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withDayOfYear(int))  <br />  (int dayOfYear) | 返回此 ZonedDateTime的副本，并更改日期。 |
| ZonedDateTime | [withEarlierOffsetAtOverlap(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withEarlierOffsetAtOverlap())  <br />  ) | 返回此日期时间的副本，将区域偏移更改为本地时间线重叠处的两个有效偏移中较早的一个。 |
| ZonedDateTime | [withFixedOffsetZone(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withFixedOffsetZone())  <br />  ) | 返回此日期时间的副本，并将区域ID设置为偏移量。 |
| ZonedDateTime | [withHour](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withHour(int))  <br />  (int hour) | 返回此 ZonedDateTime的副本，并更改日期。 |
| ZonedDateTime | [withLaterOffsetAtOverlap(](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withLaterOffsetAtOverlap())  <br />  ) | 返回此日期时间的副本，将区域偏移更改为本地时间线重叠处的两个有效偏移中的较晚者。 |
| ZonedDateTime | [withMinute](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withMinute(int))  <br />  (int minute) | 返回此 ZonedDateTime的副本，并更改了分钟。 |
| ZonedDateTime | [withMonth](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withMonth(int))  <br />  (int month) | 返回此 ZonedDateTime的副本，其中年份已更改。 |
| ZonedDateTime | [withNano](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withNano(int))  <br />  (int nanoOfSecond) | 返回此 ZonedDateTime的副本，并更改了纳秒。 |
| ZonedDateTime | [withSecond](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withSecond(int))  <br />  (int second) | 返回此 ZonedDateTime的副本，并在第二分钟更改。 |
| ZonedDateTime | [withYear](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withYear(int))  <br />  (int year) | 返回此 ZonedDateTime的副本，并更改年份。 |
| ZonedDateTime | [withZoneSameInstant](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withZoneSameInstant(java.time.ZoneId))  <br />  (ZoneId zone) | 使用不同的时区返回此日期时间的副本，保留该瞬间。 |
| ZonedDateTime | [withZoneSameLocal](https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withZoneSameLocal(java.time.ZoneId))  <br />  (ZoneId zone) | 使用不同的时区返回此日期时间的副本，如果可能，保留本地日期时间。 |


## java.time.format
**DateTimeFormatter**  <br />  **public final class DateTimeFormatter  <br />  extends Object**

| 变量和类型 | 字段 | 描述 |
| --- | --- | --- |
| static DateTimeFormatter | [BASIC_ISO_DATE](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#BASIC_ISO_DATE) | ISO日期格式化程序，用于格式化或解析没有偏移的日期，例如“20111203”。 |
| static DateTimeFormatter | [ISO_DATE](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_DATE) | ISO日期格式化程序，使用偏移量格式化或解析日期（如“2011-12-03”或“2011-12-03 + 01:00”）。 |
| static DateTimeFormatter | [ISO_DATE_TIME](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_DATE_TIME) | 类似ISO的日期时格式化程序，使用偏移量和区域（如果可用）格式化或解析日期时间，例如“2011-12-03T10：15：30”，“2011-12-03T10：15：30 + 01 ：00'或'2011-12-03T10：15：30 + 01:00 [欧洲/巴黎]'。 |
| static DateTimeFormatter | [ISO_INSTANT](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_INSTANT) | ISO即时格式化程序，用于格式化或解析UTC中的瞬间，例如“2011-12-03T10：15：30Z”。 |
| static DateTimeFormatter | [ISO_LOCAL_DATE](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_LOCAL_DATE) | ISO日期格式化程序，用于格式化或解析没有偏移的日期，例如“2011-12-03”。 |
| static DateTimeFormatter | [ISO_LOCAL_DATE_TIME](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_LOCAL_DATE_TIME) | ISO日期时格式化程序，用于格式化或解析没有偏移的日期时间，例如“2011-12-03T10：15：30”。 |
| static DateTimeFormatter | [ISO_LOCAL_TIME](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_LOCAL_TIME) | ISO时间格式化程序，用于格式化或解析没有偏移的时间，例如“10:15”或“10:15:30”。 |
| static DateTimeFormatter | [ISO_OFFSET_DATE](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_OFFSET_DATE) | ISO日期格式化程序，用于格式化或解析具有偏移量的日期，例如“2011-12-03 + 01:00”。 |
| static DateTimeFormatter | [ISO_OFFSET_DATE_TIME](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_OFFSET_DATE_TIME) | ISO日期时格格式器，用于格式化或解析具有偏移的日期时间，例如“2011-12-03T10：15：30 + 01:00”。 |
| static DateTimeFormatter | [ISO_OFFSET_TIME](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_OFFSET_TIME) | ISO时间格式化程序，使用偏移格式化或解析时间，例如'10：15 + 01:00'或'10：15：30 + 01:00'。 |
| static DateTimeFormatter | [ISO_ORDINAL_DATE](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_ORDINAL_DATE) | ISO日期格式化程序，用于格式化或解析没有偏移的序数日期，例如“2012-337”。 |
| static DateTimeFormatter | [ISO_TIME](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_TIME) | ISO时间格式化程序，用于格式化或解析时间，如果可用，则为偏移量，例如“10:15”，“10：15：30”或“10:15:30 + 01:00”。 |
| static DateTimeFormatter | [ISO_WEEK_DATE](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_WEEK_DATE) | ISO日期格式化程序，用于格式化或解析没有偏移的基于周的日期，例如“2012-W48-6”。 |
| static DateTimeFormatter | [ISO_ZONED_DATE_TIME](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_ZONED_DATE_TIME) | 类似ISO的日期时格格式器，用于格式化或解析具有偏移和区域的日期时间，例如“2011-12-03T10：15：30 + 01:00 [欧洲/巴黎]”。 |
| static DateTimeFormatter | [RFC_1123_DATE_TIME](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#RFC_1123_DATE_TIME) | RFC-1123日期时间格式化程序，例如'Tue，2008年6月3日11:05:30 GMT'。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| String | [format](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#format(java.time.temporal.TemporalAccessor))  <br />  (TemporalAccessor temporal) | 使用此格式化程序格式化日期时间对象。 |
| void | [formatTo](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#formatTo(java.time.temporal.TemporalAccessor,java.lang.Appendable))  <br />  (TemporalAccessor temporal, Appendable appendable) | 使用此格式化程序将日期时间对象格式化为 Appendable 。 |
| Chronology | [getChronology(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getChronology())  <br />  ) | 获取格式化期间要使用的重写年代表。 |
| DecimalStyle | [getDecimalStyle(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getDecimalStyle())  <br />  ) | 获取格式化期间要使用的DecimalStyle。 |
| Locale | [getLocale(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getLocale())  <br />  ) | 获取格式化期间要使用的语言环境。 |
| Set<TemporalField> | [getResolverFields(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getResolverFields())  <br />  ) | 获取解析期间要使用的解析器字段。 |
| ResolverStyle | [getResolverStyle(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getResolverStyle())  <br />  ) | 获取解析期间要使用的解析器样式。 |
| ZoneId | [getZone(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getZone())  <br />  ) | 获取格式化期间要使用的覆盖区域。 |
| DateTimeFormatter | [localizedBy](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#localizedBy(java.util.Locale))  <br />  (Locale locale) | 返回此格式化程序的副本，其中包含区域设置，日历，区域，小数样式和/或时区的本地化值，它们取代此格式化程序中的值。 |
| static DateTimeFormatter | [ofLocalizedDate](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofLocalizedDate(java.time.format.FormatStyle))  <br />  (FormatStyle dateStyle) | 返回ISO年表的特定于语言环境的日期格式。 |
| static DateTimeFormatter | [ofLocalizedDateTime](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofLocalizedDateTime(java.time.format.FormatStyle))  <br />  (FormatStyle dateTimeStyle) | 返回ISO年表的特定于语言环境的日期时间格式化程序。 |
| static DateTimeFormatter | [ofLocalizedDateTime](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofLocalizedDateTime(java.time.format.FormatStyle,java.time.format.FormatStyle))  <br />  (FormatStyle dateStyle, FormatStyle timeStyle) | 返回ISO年表的特定于语言环境的日期和时间格式。 |
| static DateTimeFormatter | [ofLocalizedTime](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofLocalizedTime(java.time.format.FormatStyle))  <br />  (FormatStyle timeStyle) | 返回ISO年表的特定于语言环境的时间格式。 |
| static DateTimeFormatter | [ofPattern](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofPattern(java.lang.String))  <br />  (String pattern) | 使用指定的模式创建格式化程序。 |
| static DateTimeFormatter | [ofPattern](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofPattern(java.lang.String,java.util.Locale))  <br />  (String pattern, Locale locale) | 使用指定的模式和语言环境创建格式化程序。 |
| TemporalAccessor | [parse](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parse(java.lang.CharSequence))  <br />  (CharSequence text) | 完全解析生成临时对象的文本。 |
| TemporalAccessor | [parse](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parse(java.lang.CharSequence,java.text.ParsePosition))  <br />  (CharSequence text, ParsePosition position) | 使用此格式化程序解析文本，提供对文本位置的控制。 |
|  T | [parse](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parse(java.lang.CharSequence,java.time.temporal.TemporalQuery))  <br />  (CharSequence text, TemporalQuery query) | 完全解析生成指定类型对象的文本。 |
| TemporalAccessor | [parseBest](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...))  <br />  (CharSequence text, TemporalQuery<?>... queries) | 完全解析生成指定类型之一的对象的文本。 |
| static TemporalQuery<Period> | [parsedExcessDays(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parsedExcessDays())  <br />  ) | 一个查询，提供对已解析的超出天数的访问权限。 |
| static TemporalQuery<Boolean> | [parsedLeapSecond(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parsedLeapSecond())  <br />  ) | 提供对是否解析闰秒的访问的查询。 |
| TemporalAccessor | [parseUnresolved](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parseUnresolved(java.lang.CharSequence,java.text.ParsePosition))  <br />  (CharSequence text, ParsePosition position) | 使用此格式化程序解析文本，而不解析结果，用于高级用例。 |
| Format | [toFormat(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#toFormat())  <br />  ) | 将此格式化程序作为 java.text.Format实例返回。 |
| Format | [toFormat](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#toFormat(java.time.temporal.TemporalQuery))  <br />  (TemporalQuery<?> parseQuery) | 将此格式化程序作为将使用指定查询进行分析的 java.text.Format实例返回。 |
| String | [toString(](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#toString())  <br />  ) | 返回底层格式化程序的描述。 |
| DateTimeFormatter | [withChronology](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withChronology(java.time.chrono.Chronology))  <br />  (Chronology chrono) | 返回此格式化程序的副本，其中包含新的覆盖时间顺序。 |
| DateTimeFormatter | [withDecimalStyle](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withDecimalStyle(java.time.format.DecimalStyle))  <br />  (DecimalStyle decimalStyle) | 使用新的DecimalStyle返回此formatter的副本。 |
| DateTimeFormatter | [withLocale](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withLocale(java.util.Locale))  <br />  (Locale locale) | 返回具有新语言环境的此formatter的副本。 |
| DateTimeFormatter | [withResolverFields](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withResolverFields(java.time.temporal.TemporalField...))  <br />  (TemporalField... resolverFields) | 返回此格式化程序的副本，其中包含一组新的解析程序字段。 |
| DateTimeFormatter | [withResolverFields](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withResolverFields(java.util.Set))  <br />  (Set resolverFields) | 返回此格式化程序的副本，其中包含一组新的解析程序字段。 |
| DateTimeFormatter | [withResolverStyle](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withResolverStyle(java.time.format.ResolverStyle))  <br />  (ResolverStyle resolverStyle) | 使用新的解析程序样式返回此formatter的副本。 |
| DateTimeFormatter | [withZone](https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withZone(java.time.ZoneId))  <br />  (ZoneId zone) | 使用新的覆盖区域返回此格式化程序的副本。 |


# java.sql
| 接口 | 描述 |
| --- | --- |
| Array | 用于SQL类型 ARRAY的Java编程语言中的 ARRAY 。 |
| Blob | SQL BLOB值的 BLOB “¢编程语言中的表示（映射）。 |
| CallableStatement | 用于执行SQL存储过程的接口。 |
| Clob | 用于SQL CLOB类型的 CLOB “¢编程语言中的 CLOB 。 |
| Connection | 与特定数据库的连接（会话）。 |
| ConnectionBuilder | 从 DataSource对象创建的构建器，用于建立与 data source对象表示的数据库的连接。 |
| DatabaseMetaData | 有关整个数据库的综合信息。 |
| Driver | 每个驱动程序类必须实现的接口。 |
| DriverAction | 当Driver想要通过DriverManager通知时必须实现的接口。 |
| NClob | 用于SQL NCLOB类型的 NCLOB “¢编程语言中的 NCLOB 。 |
| ParameterMetaData | 一个对象，可用于获取有关 PreparedStatement对象中每个参数标记的类型和属性的信息。 |
| PreparedStatement | 表示预编译SQL语句的对象。 |
| Ref | SQL编程语言中SQL REF值的映射，它是对数据库中SQL结构类型值的引用。 |
| ResultSet | 表示数据库结果集的数据表，通常通过执行查询数据库的语句生成。 |
| ResultSetMetaData | 一个对象，可用于获取有关 ResultSet对象中列的类型和属性的信息。 |
| RowId | SQL ROWID值的Java编程语言中的表示（映射）。 |
| Savepoint | 保存点的表示形式，它是当前事务中可以从 Connection.rollback方法引用的 Connection.rollback 。 |
| ShardingKey | 用于指示此对象表示Sharding键的接口。 |
| ShardingKeyBuilder | 从DataSource或XADataSource对象创建的构建器，用于创建具有受支持数据类型的子键的ShardingKey 。 |
| SQLData | 用于将SQL用户定义类型（UDT）自定义映射到Java编程语言中的类的接口。 |
| SQLInput | 一个输入流，包含表示SQL结构类型或SQL不同类型实例的值流。 |
| SQLOutput | 用于将用户定义类型的属性写回数据库的输出流。 |
| SQLType | 用于标识通用SQL类型的对象，称为JDBC类型或特定于供应商的数据类型。 |
| SQLXML | Java XML类型的JavaTM编程语言中的映射。 |
| Statement | 用于执行静态SQL语句并返回其生成的结果的对象。 |
| Struct | 用于SQL结构类型的Java编程语言中的标准映射。 |
| Wrapper | JDBC类的接口，它提供了在有问题的实例实际上是代理类时检索委托实例的能力。 |


## Connection
public interface **Connection**  <br />  extends Wrapper, AutoCloseable

| 变量和类型 | 字段 | 描述 |
| --- | --- | --- |
| static int | [TRANSACTION_NONE](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_NONE) | 一个常量，指示不支持事务。 |
| static int | [TRANSACTION_READ_COMMITTED](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_READ_COMMITTED) | 一个常量，表示防止脏读; 可以发生不可重复的读取和幻像读取。 |
| static int | [TRANSACTION_READ_UNCOMMITTED](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_READ_UNCOMMITTED) | 一个常量，表示可以发生脏读，不可重复读和幻像读。 |
| static int | [TRANSACTION_REPEATABLE_READ](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_REPEATABLE_READ) | 一个常量，表示防止脏读和不可重复读; 可以发生幻像读取。 |
| static int | [TRANSACTION_SERIALIZABLE](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_SERIALIZABLE) | 一个常量，表示禁止脏读，不可重复读和幻像读。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| void | [abort](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#abort(java.util.concurrent.Executor))  <br />  (Executor executor) | 终止打开的连接。 |
| default void | [beginRequest(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#beginRequest())  <br />  ) | 向驾驶员提示一个请求，一个独立的工作单元，正在这个连接上开始。 |
| void | [clearWarnings(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#clearWarnings())  <br />  ) | 清除为此 Connection对象报告的所有警告。 |
| void | [close(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#close())  <br />  ) | 立即释放此 Connection对象的数据库和JDBC资源，而不是等待它们自动释放。 |
| void | [commit(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#commit())  <br />  ) | 使自上次提交/回滚以来所做的所有更改成为永久更改，并释放此 Connection对象当前持有的所有数据库锁。 |
| Array | [createArrayOf](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createArrayOf(java.lang.String,java.lang.Object%5B%5D))  <br />  (String typeName, Object[] elements) | 用于创建Array对象的工厂方法。 |
| Blob | [createBlob(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createBlob())  <br />  ) | 构造一个实现 Blob接口的对象。 |
| Clob | [createClob(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createClob())  <br />  ) | 构造一个实现 Clob接口的对象。 |
| NClob | [createNClob(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createNClob())  <br />  ) | 构造一个实现 NClob接口的对象。 |
| SQLXML | [createSQLXML(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createSQLXML())  <br />  ) | 构造一个实现 SQLXML接口的对象。 |
| Statement | [createStatement(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createStatement())  <br />  ) | 创建一个 Statement对象，用于将SQL语句发送到数据库。 |
| Statement | [createStatement](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createStatement(int,int))  <br />  (int resultSetType, int resultSetConcurrency) | 创建一个 Statement对象，该对象将生成具有给定类型和并发性的 ResultSet对象。 |
| Statement | [createStatement](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createStatement(int,int,int))  <br />  (int resultSetType, int resultSetConcurrency, int resultSetHoldability) | 创建一个 Statement对象，该对象将生成具有给定类型，并发性和可 ResultSet对象。 |
| Struct | [createStruct](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createStruct(java.lang.String,java.lang.Object%5B%5D))  <br />  (String typeName, Object[] attributes) | 用于创建Struct对象的工厂方法。 |
| default void | [endRequest(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#endRequest())  <br />  ) | 向驾驶员提示已完成请求（独立工作单元）。 |
| boolean | [getAutoCommit(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getAutoCommit())  <br />  ) | 检索此 Connection对象的当前自动提交模式。 |
| String | [getCatalog(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getCatalog())  <br />  ) | 检索此 Connection对象的当前目录名称。 |
| Properties | [getClientInfo(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getClientInfo())  <br />  ) | 返回一个列表，其中包含驱动程序支持的每个客户端信息属性的名称和当前值。 |
| String | [getClientInfo](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getClientInfo(java.lang.String))  <br />  (String name) | 返回name指定的客户端信息属性的值。 |
| int | [getHoldability(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getHoldability())  <br />  ) | 检索使用此 Connection对象创建的 ResultSet对象的当前可保存性。 |
| DatabaseMetaData | [getMetaData(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getMetaData())  <br />  ) | 检索 DatabaseMetaData对象包含有关哪个这个数据库的元数据 Connection对象表示的连接。 |
| int | [getNetworkTimeout(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getNetworkTimeout())  <br />  ) | 检索驱动程序等待数据库请求完成的毫秒数。 |
| String | [getSchema(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getSchema())  <br />  ) | 检索此 Connection对象的当前架构名称。 |
| int | [getTransactionIsolation(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getTransactionIsolation())  <br />  ) | 检索此 Connection对象的当前事务隔离级别。 |
| Map<String,类<?>> | [getTypeMap(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getTypeMap())  <br />  ) | 检索 Map与此相关联的对象 Connection对象。 |
| SQLWarning | [getWarnings(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getWarnings())  <br />  ) | 检索此 Connection对象上的调用报告的第一个警告。 |
| boolean | [isClosed(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#isClosed())  <br />  ) | 检索此 Connection对象是否已关闭。 |
| boolean | [isReadOnly(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#isReadOnly())  <br />  ) | 检索此 Connection对象是否处于只读模式。 |
| boolean | [isValid](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#isValid(int))  <br />  (int timeout) | 如果连接尚未关闭且仍然有效，则返回true。 |
| String | [nativeSQL](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#nativeSQL(java.lang.String))  <br />  (String sql) | 将给定的SQL语句转换为系统的本机SQL语法。 |
| CallableStatement | [prepareCall](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareCall(java.lang.String))  <br />  (String sql) | 创建一个用于调用数据库存储过程的 CallableStatement对象。 |
| CallableStatement | [prepareCall](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareCall(java.lang.String,int,int))  <br />  (String sql, int resultSetType, int resultSetConcurrency) | 创建一个 CallableStatement对象，该对象将生成具有给定类型和并发性的 ResultSet对象。 |
| CallableStatement | [prepareCall](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareCall(java.lang.String,int,int,int))  <br />  (String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability) | 创建一个 CallableStatement对象，该对象将生成具有给定类型和并发性的 ResultSet对象。 |
| PreparedStatement | [prepareStatement](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String))  <br />  (String sql) | 创建一个 PreparedStatement对象，用于将参数化SQL语句发送到数据库。 |
| PreparedStatement | [prepareStatement](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,int))  <br />  (String sql, int autoGeneratedKeys) | 创建一个默认的 PreparedStatement对象，该对象具有检索自动生成的键的功能。 |
| PreparedStatement | [prepareStatement](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,int%5B%5D))  <br />  (String sql, int[] columnIndexes) | 创建一个默认的 PreparedStatement对象，该对象能够返回给定数组指定的自动生成的键。 |
| PreparedStatement | [prepareStatement](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,int,int))  <br />  (String sql, int resultSetType, int resultSetConcurrency) | 创建一个 PreparedStatement对象，该对象将生成具有给定类型和并发性的 ResultSet对象。 |
| PreparedStatement | [prepareStatement](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,int,int,int))  <br />  (String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability) | 创建一个 PreparedStatement对象，该对象将生成具有给定类型，并发性和可 ResultSet对象。 |
| PreparedStatement | [prepareStatement](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,java.lang.String%5B%5D))  <br />  (String sql, String[] columnNames) | 创建一个默认的 PreparedStatement对象，该对象能够返回给定数组指定的自动生成的键。 |
| void | [releaseSavepoint](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#releaseSavepoint(java.sql.Savepoint))  <br />  (Savepoint savepoint) | 从当前事务中删除指定的 Savepoint和后续 Savepoint对象。 |
| void | [rollback(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#rollback())  <br />  ) | 撤消当前事务中所做的所有更改，并释放此 Connection对象当前持有的所有数据库锁。 |
| void | [rollback](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#rollback(java.sql.Savepoint))  <br />  (Savepoint savepoint) | 取消在设置给定的 Savepoint对象后所做的所有更改。 |
| void | [setAutoCommit](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setAutoCommit(boolean))  <br />  (boolean autoCommit) | 将此连接的自动提交模式设置为给定状态。 |
| void | [setCatalog](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setCatalog(java.lang.String))  <br />  (String catalog) | 设置给定的目录名称，以便选择要在其中工作的此 Connection对象的数据库的子空间。 |
| void | [setClientInfo](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setClientInfo(java.lang.String,java.lang.String))  <br />  (String name, String value) | 将name指定的客户端信息属性的值设置为value指定的值。 |
| void | [setClientInfo](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setClientInfo(java.util.Properties))  <br />  (Properties properties) | 设置连接的客户端信息属性的值。 |
| void | [setHoldability](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setHoldability(int))  <br />  (int holdability) | 将使用此 Connection对象创建的 ResultSet对象的默认可 ResultSet更改为给定的可保持性。 |
| void | [setNetworkTimeout](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setNetworkTimeout(java.util.concurrent.Executor,int))  <br />  (Executor executor, int milliseconds) | 设置最大周期 Connection或从 Connection创建的 Connection将等待数据库回复任何一个请求。 |
| void | [setReadOnly](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setReadOnly(boolean))  <br />  (boolean readOnly) | 将此连接置于只读模式，作为驱动程序的提示以启用数据库优化。 |
| Savepoint | [setSavepoint(](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setSavepoint())  <br />  ) | 在当前事务中创建一个未命名的保存点，并返回表示它的新 Savepoint对象。 |
| Savepoint | [setSavepoint](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setSavepoint(java.lang.String))  <br />  (String name) | 在当前事务中创建具有给定名称的保存点，并返回表示它的新 Savepoint对象。 |
| void | [setSchema](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setSchema(java.lang.String))  <br />  (String schema) | 设置要访问的给定模式名称。 |
| default void | [setShardingKey](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setShardingKey(java.sql.ShardingKey))  <br />  (ShardingKey shardingKey) | 指定要与此Connection一起使用的shardingKey |
| default void | [setShardingKey](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setShardingKey(java.sql.ShardingKey,java.sql.ShardingKey))  <br />  (ShardingKey shardingKey, ShardingKey superShardingKey) | 指定要与此Connection一起使用的shardingKey和superShardingKey |
| default boolean | [setShardingKeyIfValid](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setShardingKeyIfValid(java.sql.ShardingKey,int))  <br />  (ShardingKey shardingKey, int timeout) | 设置并验证此连接的分片键。 |
| default boolean | [setShardingKeyIfValid](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setShardingKeyIfValid(java.sql.ShardingKey,java.sql.ShardingKey,int))  <br />  (ShardingKey shardingKey, ShardingKey superShardingKey, int timeout) | 设置并验证此连接的分片键。 |
| void | [setTransactionIsolation](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setTransactionIsolation(int))  <br />  (int level) | 尝试将此 Connection对象的事务隔离级别更改为给定的对象。 |
| void | [setTypeMap](https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setTypeMap(java.util.Map))  <br />  (Map<String,类<?>> map) | 安装给定的 TypeMap对象的类型映射此 Connection对象。 |


## Statement
public interface **Statement**  <br />  extends Wrapper, AutoCloseable

| 变量和类型 | 字段 | 描述 |
| --- | --- | --- |
| static int | [CLOSE_ALL_RESULTS](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#CLOSE_ALL_RESULTS) | 该常量指示在调用 getMoreResults时应关闭先前保持打开的所有 ResultSet对象。 |
| static int | [CLOSE_CURRENT_RESULT](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#CLOSE_CURRENT_RESULT) | 该常量指示在调用 getMoreResults时应关闭当前的 ResultSet对象。 |
| static int | [EXECUTE_FAILED](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#EXECUTE_FAILED) | 该常量指示执行批处理语句时发生错误。 |
| static int | [KEEP_CURRENT_RESULT](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#KEEP_CURRENT_RESULT) | 该常量指示在调用 getMoreResults时不应关闭当前的 ResultSet对象。 |
| static int | [NO_GENERATED_KEYS](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#NO_GENERATED_KEYS) | 该常量指示不应使生成的键可用于检索。 |
| static int | [RETURN_GENERATED_KEYS](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#RETURN_GENERATED_KEYS) | 常量表示生成的键应该可用于检索。 |
| static int | [SUCCESS_NO_INFO](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#SUCCESS_NO_INFO) | 该常量指示批处理语句已成功执行但不影响其受影响的行数。 |

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| void | [addBatch](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#addBatch(java.lang.String))  <br />  (String sql) | 将给定的SQL命令添加到此 Statement对象的当前命令列表中。 |
| void | [cancel(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#cancel())  <br />  ) | 如果DBMS和驱动程序都支持中止SQL语句，则取消此 Statement对象。 |
| void | [clearBatch(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#clearBatch())  <br />  ) | 清空此 Statement对象的当前SQL命令列表。 |
| void | [clearWarnings(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#clearWarnings())  <br />  ) | 清除此 Statement对象上报告的所有警告。 |
| void | [close(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#close())  <br />  ) | 立即释放此 Statement对象的数据库和JDBC资源，而不是等待它自动关闭时发生。 |
| void | [closeOnCompletion(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#closeOnCompletion())  <br />  ) | 指定在关闭所有相关结果集时将关闭此 Statement 。 |
| default String | [enquoteIdentifier](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#enquoteIdentifier(java.lang.String,boolean))  <br />  (String identifier, boolean alwaysQuote) | 返回SQL标识符。 |
| default String | [enquoteLiteral](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#enquoteLiteral(java.lang.String))  <br />  (String val) | 返回用单引号括起来的 String 。 |
| default String | [enquoteNCharLiteral](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#enquoteNCharLiteral(java.lang.String))  <br />  (String val) | 返回 String表示用单引号括起来的国家字符集文字，并以大写字母N为前缀。 |
| boolean | [execute](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#execute(java.lang.String))  <br />  (String sql) | 执行给定的SQL语句，该语句可能返回多个结果。 |
| boolean | [execute](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#execute(java.lang.String,int))  <br />  (String sql, int autoGeneratedKeys) | 执行给定的SQL语句，该语句可能返回多个结果，并向驱动程序发出信号，告知任何自动生成的键应该可用于检索。 |
| boolean | [execute](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#execute(java.lang.String,int%5B%5D))  <br />  (String sql, int[] columnIndexes) | 执行给定的SQL语句，该语句可能返回多个结果，并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。 |
| boolean | [execute](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#execute(java.lang.String,java.lang.String%5B%5D))  <br />  (String sql, String[] columnNames) | 执行给定的SQL语句，该语句可能返回多个结果，并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。 |
| int[] | [executeBatch(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeBatch())  <br />  ) | 将一批命令提交到数据库以供执行，如果所有命令成功执行，则返回一组更新计数。 |
| default long[] | [executeLargeBatch(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeBatch())  <br />  ) | 将一批命令提交到数据库以供执行，如果所有命令成功执行，则返回一组更新计数。 |
| default long | [executeLargeUpdate](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeUpdate(java.lang.String))  <br />  (String sql) | 执行给定的SQL语句，这可能是 INSERT ， UPDATE ，或 DELETE语句，或者不返回任何内容，如SQL DDL语句的SQL语句。 |
| default long | [executeLargeUpdate](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeUpdate(java.lang.String,int))  <br />  (String sql, int autoGeneratedKeys) | 执行给定的SQL语句，并通过给定标志向驱动程序发出信号，告知该 Statement对象生成的自动生成的密钥是否可用于检索。 |
| default long | [executeLargeUpdate](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeUpdate(java.lang.String,int%5B%5D))  <br />  (String sql, int[] columnIndexes) | 执行给定的SQL语句并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。 |
| default long | [executeLargeUpdate](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeUpdate(java.lang.String,java.lang.String%5B%5D))  <br />  (String sql, String[] columnNames) | 执行给定的SQL语句并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。 |
| ResultSet | [executeQuery](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeQuery(java.lang.String))  <br />  (String sql) | 执行给定的SQL语句，该语句返回单个 ResultSet对象。 |
| int | [executeUpdate](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String))  <br />  (String sql) | 执行给定的SQL语句，这可能是 INSERT ， UPDATE ，或 DELETE语句，或者不返回任何内容，如SQL DDL语句的SQL语句。 |
| int | [executeUpdate](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String,int))  <br />  (String sql, int autoGeneratedKeys) | 执行给定的SQL语句，并使用给定标志向驱动程序发出信号，告知该 Statement对象生成的自动生成的密钥是否可用于检索。 |
| int | [executeUpdate](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String,int%5B%5D))  <br />  (String sql, int[] columnIndexes) | 执行给定的SQL语句并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。 |
| int | [executeUpdate](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String,java.lang.String%5B%5D))  <br />  (String sql, String[] columnNames) | 执行给定的SQL语句并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。 |
| Connection | [getConnection(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getConnection())  <br />  ) | 检索 Connection生成此对象 Statement对象。 |
| int | [getFetchDirection(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getFetchDirection())  <br />  ) | 检索从数据库表中获取行的方向，该方向是从此 Statement对象生成的结果集的缺省值。 |
| int | [getFetchSize(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getFetchSize())  <br />  ) | 检索结果集合的行数是默认为获取大小 ResultSet从该生成的对象 Statement对象。 |
| ResultSet | [getGeneratedKeys(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getGeneratedKeys())  <br />  ) | 检索由于执行此 Statement对象而创建的任何自动生成的密钥。 |
| default long | [getLargeMaxRows(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getLargeMaxRows())  <br />  ) | 检索此 ResultSet对象生成的 Statement对象可包含的最大行数。 |
| default long | [getLargeUpdateCount(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getLargeUpdateCount())  <br />  ) | 检索当前结果作为更新计数; 如果结果是ResultSet对象或没有更多结果，则返回-1。 |
| int | [getMaxFieldSize(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getMaxFieldSize())  <br />  ) | 检索此 ResultSet对象生成的 Statement对象中可以为字符和二进制列值返回的最大字节数。 |
| int | [getMaxRows(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getMaxRows())  <br />  ) | 检索此 ResultSet对象生成的 Statement对象可包含的最大行数。 |
| boolean | [getMoreResults(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getMoreResults())  <br />  ) | 移动到此 Statement对象的下一个结果，如果它是 ResultSet对象，则返回 true ，并隐式关闭使用方法 getResultSet获得的任何当前 ResultSet对象。 |
| boolean | [getMoreResults](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getMoreResults(int))  <br />  (int current) | 移动到此 Statement对象的下一个结果，根据给定标志指定的指令处理任何当前的 ResultSet对象，如果下一个结果是 ResultSet对象，则返回 true 。 |
| int | [getQueryTimeout(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getQueryTimeout())  <br />  ) | 检索驱动程序等待 Statement对象执行的 Statement 。 |
| ResultSet | [getResultSet(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getResultSet())  <br />  ) | 以 ResultSet对象的形式检索当前结果。 |
| int | [getResultSetConcurrency(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getResultSetConcurrency())  <br />  ) | 检索此 ResultSet对象生成的 Statement对象的结果集并发性。 |
| int | [getResultSetHoldability(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getResultSetHoldability())  <br />  ) | 检索此 ResultSet对象生成的 Statement对象的结果集可保存性。 |
| int | [getResultSetType(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getResultSetType())  <br />  ) | 检索此 ResultSet对象生成的 Statement对象的结果集类型。 |
| int | [getUpdateCount(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getUpdateCount())  <br />  ) | 检索当前结果作为更新计数; 如果结果是ResultSet对象或没有更多结果，则返回-1。 |
| SQLWarning | [getWarnings(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getWarnings())  <br />  ) | 检索此 Statement对象上的调用报告的第一个警告。 |
| boolean | [isClosed(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#isClosed())  <br />  ) | 检索此 Statement对象是否已关闭。 |
| boolean | [isCloseOnCompletion(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#isCloseOnCompletion())  <br />  ) | 返回一个值，该值指示在关闭所有相关结果集时是否将关闭此 Statement 。 |
| boolean | [isPoolable(](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#isPoolable())  <br />  ) | 返回一个值，指示 Statement是否可以使用。 |
| default boolean | [isSimpleIdentifier](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#isSimpleIdentifier(java.lang.String))  <br />  (String identifier) | 检索 identifier是否是简单的SQL标识符。 |
| void | [setCursorName](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setCursorName(java.lang.String))  <br />  (String name) | 将SQL游标名称设置为给定的 String ，这将由后续的 Statement对象 execute方法使用。 |
| void | [setEscapeProcessing](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setEscapeProcessing(boolean))  <br />  (boolean enable) | 打开或关闭转义处理。 |
| void | [setFetchDirection](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setFetchDirection(int))  <br />  (int direction) | 为驱动程序提供有关在使用此 Statement对象创建的 ResultSet对象中处理行的方向的提示。 |
| void | [setFetchSize](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setFetchSize(int))  <br />  (int rows) | 当此 Statement生成的 ResultSet对象需要更多行时， ResultSet JDBC驱动程序提供有关应从数据库中提取的行数的提示。 |
| default void | [setLargeMaxRows](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setLargeMaxRows(long))  <br />  (long max) | 设置此 ResultSet对象生成的任何 Statement对象可包含的最大行数限制为给定数字。 |
| void | [setMaxFieldSize](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setMaxFieldSize(int))  <br />  (int max) | 设置此 ResultSet对象生成的 Statement对象中字符和二进制列值可返回的最大字节数限制。 |
| void | [setMaxRows](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setMaxRows(int))  <br />  (int max) | 设置此 ResultSet对象生成的任何 Statement对象可以包含的最大行数限制为给定数字。 |
| void | [setPoolable](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setPoolable(boolean))  <br />  (boolean poolable) | 请求汇集或不汇集 Statement 。 |
| void | [setQueryTimeout](https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setQueryTimeout(int))  <br />  (int seconds) | 设置驱动程序等待 Statement对象执行到指定秒数的秒数。 |


## PreparedStatement
public interface **PreparedStatement**  <br />  extends Statement

| 变量和类型 | 方法 | 描述 |
| --- | --- | --- |
| void | [addBatch(](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#addBatch())  <br />  ) | 向此 PreparedStatement对象的一批命令添加一组参数。 |
| void | [clearParameters(](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#clearParameters())  <br />  ) | 立即清除当前参数值。 |
| boolean | [execute(](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#execute())  <br />  ) | 在此 PreparedStatement对象中执行SQL语句，该对象可以是任何类型的SQL语句。 |
| default long | [executeLargeUpdate(](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#executeLargeUpdate())  <br />  ) | 执行在该SQL语句PreparedStatement对象，它必须是一个SQL数据操纵语言（DML）语句，比如INSERT ， UPDATE或DELETE ; 或者不返回任何内容的SQL语句，例如DDL语句。 |
| ResultSet | [executeQuery(](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#executeQuery())  <br />  ) | 执行此 PreparedStatement对象中的SQL查询，并返回查询生成的 ResultSet对象。 |
| int | [executeUpdate(](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#executeUpdate())  <br />  ) | 执行在该SQL语句PreparedStatement对象，它必须是一个SQL数据操纵语言（DML）语句，比如INSERT ， UPDATE或DELETE ; 或者不返回任何内容的SQL语句，例如DDL语句。 |
| ResultSetMetaData | [getMetaData(](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#getMetaData())  <br />  ) | 检索 ResultSetMetaData对象，该对象包含有关在执行此 PreparedStatement对象时将返回的 ResultSet对象的列的信息。 |
| ParameterMetaData | [getParameterMetaData(](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#getParameterMetaData())  <br />  ) | 检索此 PreparedStatement对象参数的数量，类型和属性。 |
| void | [setArray](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setArray(int,java.sql.Array))  <br />  (int parameterIndex, Array x) | 将指定参数设置为给定的 java.sql.Array对象。 |
| void | [setAsciiStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setAsciiStream(int,java.io.InputStream))  <br />  (int parameterIndex, InputStream x) | 将指定参数设置为给定输入流。 |
| void | [setAsciiStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setAsciiStream(int,java.io.InputStream,int))  <br />  (int parameterIndex, InputStream x, int length) | 将指定参数设置为给定输入流，该输入流将具有指定的字节数。 |
| void | [setAsciiStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setAsciiStream(int,java.io.InputStream,long))  <br />  (int parameterIndex, InputStream x, long length) | 将指定参数设置为给定输入流，该输入流将具有指定的字节数。 |
| void | [setBigDecimal](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBigDecimal(int,java.math.BigDecimal))  <br />  (int parameterIndex, BigDecimal x) | 将指定参数设置为给定的 java.math.BigDecimal值。 |
| void | [setBinaryStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBinaryStream(int,java.io.InputStream))  <br />  (int parameterIndex, InputStream x) | 将指定参数设置为给定输入流。 |
| void | [setBinaryStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBinaryStream(int,java.io.InputStream,int))  <br />  (int parameterIndex, InputStream x, int length) | 将指定参数设置为给定输入流，该输入流将具有指定的字节数。 |
| void | [setBinaryStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBinaryStream(int,java.io.InputStream,long))  <br />  (int parameterIndex, InputStream x, long length) | 将指定参数设置为给定输入流，该输入流将具有指定的字节数。 |
| void | [setBlob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBlob(int,java.io.InputStream))  <br />  (int parameterIndex, InputStream inputStream) | 将指定参数设置为 InputStream对象。 |
| void | [setBlob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBlob(int,java.io.InputStream,long))  <br />  (int parameterIndex, InputStream inputStream, long length) | 将指定参数设置为 InputStream对象。 |
| void | [setBlob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBlob(int,java.sql.Blob))  <br />  (int parameterIndex, Blob x) | 将指定参数设置为给定的 java.sql.Blob对象。 |
| void | [setBoolean](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBoolean(int,boolean))  <br />  (int parameterIndex, boolean x) | 将指定参数设置为给定的Java boolean值。 |
| void | [setByte](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setByte(int,byte))  <br />  (int parameterIndex, byte x) | 将指定参数设置为给定的Java byte值。 |
| void | [setBytes](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBytes(int,byte%5B%5D))  <br />  (int parameterIndex, byte[] x) | 将指定参数设置为给定的Java字节数组。 |
| void | [setCharacterStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setCharacterStream(int,java.io.Reader))  <br />  (int parameterIndex, Reader reader) | 将指定参数设置为给定的 Reader对象。 |
| void | [setCharacterStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setCharacterStream(int,java.io.Reader,int))  <br />  (int parameterIndex, Reader reader, int length) | 将指定参数设置为给定的 Reader对象，该对象是给定的字符长度。 |
| void | [setCharacterStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setCharacterStream(int,java.io.Reader,long))  <br />  (int parameterIndex, Reader reader, long length) | 将指定参数设置为给定的 Reader对象，该对象是给定的字符长度。 |
| void | [setClob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setClob(int,java.io.Reader))  <br />  (int parameterIndex, Reader reader) | 将指定参数设置为 Reader对象。 |
| void | [setClob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setClob(int,java.io.Reader,long))  <br />  (int parameterIndex, Reader reader, long length) | 将指定参数设置为 Reader对象。 |
| void | [setClob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setClob(int,java.sql.Clob))  <br />  (int parameterIndex, Clob x) | 将指定参数设置为给定的 java.sql.Clob对象。 |
| void | [setDate](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setDate(int,java.sql.Date))  <br />  (int parameterIndex, Date x) | 使用运行应用程序的虚拟机的默认时区将指定参数设置为给定的 java.sql.Date值。 |
| void | [setDate](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setDate(int,java.sql.Date,java.util.Calendar))  <br />  (int parameterIndex, Date x, Calendar cal) | 使用给定的 Calendar对象将指定参数设置为给定的 java.sql.Date值。 |
| void | [setDouble](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setDouble(int,double))  <br />  (int parameterIndex, double x) | 将指定参数设置为给定的Java double值。 |
| void | [setFloat](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setFloat(int,float))  <br />  (int parameterIndex, float x) | 将指定参数设置为给定的Java float值。 |
| void | [setInt](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setInt(int,int))  <br />  (int parameterIndex, int x) | 将指定参数设置为给定的Java int值。 |
| void | [setLong](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setLong(int,long))  <br />  (int parameterIndex, long x) | 将指定参数设置为给定的Java long值。 |
| void | [setNCharacterStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNCharacterStream(int,java.io.Reader))  <br />  (int parameterIndex, Reader value) | 将指定参数设置为 Reader对象。 |
| void | [setNCharacterStream](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNCharacterStream(int,java.io.Reader,long))  <br />  (int parameterIndex, Reader value, long length) | 将指定参数设置为 Reader对象。 |
| void | [setNClob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNClob(int,java.io.Reader))  <br />  (int parameterIndex, Reader reader) | 将指定参数设置为 Reader对象。 |
| void | [setNClob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNClob(int,java.io.Reader,long))  <br />  (int parameterIndex, Reader reader, long length) | 将指定参数设置为 Reader对象。 |
| void | [setNClob](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNClob(int,java.sql.NClob))  <br />  (int parameterIndex, NClob value) | 将指定参数设置为 java.sql.NClob对象。 |
| void | [setNString](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNString(int,java.lang.String))  <br />  (int parameterIndex, String value) | 将指定参数设置为给定的 String对象。 |
| void | [setNull](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNull(int,int))  <br />  (int parameterIndex, int sqlType) | 将指定参数设置为SQL NULL 。 |
| void | [setNull](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNull(int,int,java.lang.String))  <br />  (int parameterIndex, int sqlType, String typeName) | 将指定的参数设置为SQL NULL 。 |
| void | [setObject](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object))  <br />  (int parameterIndex, Object x) | 使用给定对象设置指定参数的值。 |
| void | [setObject](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object,int))  <br />  (int parameterIndex, Object x, int targetSqlType) | 使用给定对象设置指定参数的值。 |
| void | [setObject](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object,int,int))  <br />  (int parameterIndex, Object x, int targetSqlType, int scaleOrLength) | 使用给定对象设置指定参数的值。 |
| default void | [setObject](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object,java.sql.SQLType))  <br />  (int parameterIndex, Object x, SQLType targetSqlType) | 使用给定对象设置指定参数的值。 |
| default void | [setObject](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object,java.sql.SQLType,int))  <br />  (int parameterIndex, Object x, SQLType targetSqlType, int scaleOrLength) | 使用给定对象设置指定参数的值。 |
| void | [setRef](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setRef(int,java.sql.Ref))  <br />  (int parameterIndex, Ref x) | 将指定参数设置为给定的 REF()值。 |
| void | [setRowId](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setRowId(int,java.sql.RowId))  <br />  (int parameterIndex, RowId x) | 将指定参数设置为给定的 java.sql.RowId对象。 |
| void | [setShort](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setShort(int,short))  <br />  (int parameterIndex, short x) | 将指定参数设置为给定的Java short值。 |
| void | [setSQLXML](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setSQLXML(int,java.sql.SQLXML))  <br />  (int parameterIndex, SQLXML xmlObject) | 将指定参数设置为给定的 java.sql.SQLXML对象。 |
| void | [setString](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setString(int,java.lang.String))  <br />  (int parameterIndex, String x) | 将指定参数设置为给定的Java String值。 |
| void | [setTime](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setTime(int,java.sql.Time))  <br />  (int parameterIndex, Time x) | 将指定参数设置为给定的 java.sql.Time值。 |
| void | [setTime](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setTime(int,java.sql.Time,java.util.Calendar))  <br />  (int parameterIndex, Time x, Calendar cal) | 使用给定的 Calendar对象将指定参数设置为给定的 java.sql.Time值。 |
| void | [setTimestamp](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setTimestamp(int,java.sql.Timestamp))  <br />  (int parameterIndex, Timestamp x) | 将指定参数设置为给定的 java.sql.Timestamp值。 |
| void | [setTimestamp](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setTimestamp(int,java.sql.Timestamp,java.util.Calendar))  <br />  (int parameterIndex, Timestamp x, Calendar cal) | 使用给定的 Calendar对象将指定参数设置为给定的 java.sql.Timestamp值。 |
| void | [setURL](https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setURL(int,java.net.URL))  <br />  (int parameterIndex, URL x) | 将指定参数设置为给定的 java.net.URL值。 |


## ConnectionPool




