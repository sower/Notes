<h1>——Package——</h1>
<p>编译器会自动导入JDK的核心类使用java.lang包；</p>
<p>包名推荐使用倒置的域名，例如org.apache。</p>
<p>import static：导入一个类的静态字段和静态方法</p>
<p>classpath：JVM用到的一个环境变量，它用来指示JVM如何搜索class。</p>
<p>jar包：相当于目录，可以包含很多.class文件，方便下载和使用；</p>
<p>模块（Module）：.jmod文件每一个都是一个模块，模块名就是文件名。</p>
<h1>java.math</h1>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_math" target="_blank">Math</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">字段</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#E" target="_blank">E</a></td>
<td style="text-align:center">double值比任何其他值更接近 e ，即自然对数的基数。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#PI" target="_blank">PI</a></td>
<td style="text-align:center">double值比任何其他 pi更接近，圆的圆周与其直径的比率。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#abs(double)" target="_blank">abs​</a>(double a)</td>
<td style="text-align:center">返回 double值的绝对值。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#acos(double)" target="_blank">acos​</a>(double a)</td>
<td style="text-align:center">返回值的反余弦值; 返回的角度在0.0到pi的范围内。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#addExact(int,int)" target="_blank">addExact​</a>(int x, int y)</td>
<td style="text-align:center">返回其参数的总和，如果结果溢出 int则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#addExact(long,long)" target="_blank">addExact​</a>(long x, long y)</td>
<td style="text-align:center">返回其参数的总和，如果结果溢出 long则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#asin(double)" target="_blank">asin​</a>(double a)</td>
<td style="text-align:center">返回值的反正弦值; 返回的角度在-pi / 2到pi / 2的范围内。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#atan(double)" target="_blank">atan​</a>(double a)</td>
<td style="text-align:center">返回值的反正切值; 返回的角度在-pi / 2到pi / 2的范围内。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#atan2(double,double)" target="_blank">atan2​</a>(double y, double x)</td>
<td style="text-align:center">返回从直角坐标（转换角度 theta x ， y ）为极坐标 （R，θ-）。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#cbrt(double)" target="_blank">cbrt​</a>(double a)</td>
<td style="text-align:center">返回 double值的多维数据集根。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#ceil(double)" target="_blank">ceil​</a>(double a)</td>
<td style="text-align:center">返回大于或等于参数且等于数学整数的最小值（最接近负无穷大） double 。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#copySign(double,double)" target="_blank">copySign​</a>(double magnitude, double sign)</td>
<td style="text-align:center">返回带有第二个浮点参数符号的第一个浮点参数。</td>
</tr>
<tr>
<td style="text-align:center">static float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#copySign(float,float)" target="_blank">copySign​</a>(float magnitude, float sign)</td>
<td style="text-align:center">返回带有第二个浮点参数符号的第一个浮点参数。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#cos(double)" target="_blank">cos​</a>(double a)</td>
<td style="text-align:center">返回角度的三角余弦值。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#cosh(double)" target="_blank">cosh​</a>(double x)</td>
<td style="text-align:center">返回 double值的双曲余弦值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#decrementExact(int)" target="_blank">decrementExact​</a>(int a)</td>
<td style="text-align:center">返回参数递减1，如果结果溢出 int则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#decrementExact(long)" target="_blank">decrementExact​</a>(long a)</td>
<td style="text-align:center">返回参数递减1，如果结果溢出 long则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#exp(double)" target="_blank">exp​</a>(double a)</td>
<td style="text-align:center">返回Euler的数字 e ，其值 double值。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#expm1(double)" target="_blank">expm1​</a>(double x)</td>
<td style="text-align:center">返回 e x -1。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floor(double)" target="_blank">floor​</a>(double a)</td>
<td style="text-align:center">返回小于或等于参数且等于数学整数的最大值（最接近正无穷大） double 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorDiv(int,int)" target="_blank">floorDiv​</a>(int x, int y)</td>
<td style="text-align:center">返回小于或等于代数商的最大值（最接近正无穷大） int 。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorDiv(long,int)" target="_blank">floorDiv​</a>(long x, int y)</td>
<td style="text-align:center">返回小于或等于代数商的最大值（最接近正无穷大） long 。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorDiv(long,long)" target="_blank">floorDiv​</a>(long x, long y)</td>
<td style="text-align:center">返回小于或等于代数商的最大值（最接近正无穷大） long 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorMod(int,int)" target="_blank">floorMod​</a>(int x, int y)</td>
<td style="text-align:center">返回 int参数的floor模数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorMod(long,int)" target="_blank">floorMod​</a>(long x, int y)</td>
<td style="text-align:center">返回 long和 int参数的floor数。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#floorMod(long,long)" target="_blank">floorMod​</a>(long x, long y)</td>
<td style="text-align:center">返回 long参数的floor模数。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#fma(double,double,double)" target="_blank">fma​</a>(double a, double b, double c)</td>
<td style="text-align:center">返回三个参数的融合乘法加法; 也就是说，返回与第三个参数相加的前两个参数的精确乘积，然后舍入一次到最接近的double 。</td>
</tr>
<tr>
<td style="text-align:center">static float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#fma(float,float,float)" target="_blank">fma​</a>(float a, float b, float c)</td>
<td style="text-align:center">返回三个参数的融合乘法加法; 也就是说，返回与第三个参数相加的前两个参数的精确乘积，然后舍入一次到最接近的float 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#getExponent(double)" target="_blank">getExponent​</a>(double d)</td>
<td style="text-align:center">返回 double表示中使用的无偏指数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#getExponent(float)" target="_blank">getExponent​</a>(float f)</td>
<td style="text-align:center">返回 float表示中使用的无偏指数。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#hypot(double,double)" target="_blank">hypot​</a>(double x, double y)</td>
<td style="text-align:center">返回sqrt（ x 2 + y 2 ），没有中间溢出或下溢。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#IEEEremainder(double,double)" target="_blank">IEEEremainder​</a>(double f1, double f2)</td>
<td style="text-align:center">根据IEEE 754标准规定，计算两个参数的余数运算。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#incrementExact(int)" target="_blank">incrementExact​</a>(int a)</td>
<td style="text-align:center">返回以1递增的参数，如果结果溢出 int则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#incrementExact(long)" target="_blank">incrementExact​</a>(long a)</td>
<td style="text-align:center">返回以1递增的参数，如果结果溢出 long则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#log(double)" target="_blank">log​</a>(double a)</td>
<td style="text-align:center">返回 double值的自然对数（基数 e ）。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#log10(double)" target="_blank">log10​</a>(double a)</td>
<td style="text-align:center">返回 double值的基数10对数。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#log1p(double)" target="_blank">log1p​</a>(double x)</td>
<td style="text-align:center">返回参数和的总和的自然对数。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#max(double,double)" target="_blank">max​</a>(double a, double b)</td>
<td style="text-align:center">返回两个 double值中较大的 double 。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#min(double,double)" target="_blank">min​</a>(double a, double b)</td>
<td style="text-align:center">返回两个 double值中较小的 double 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyExact(int,int)" target="_blank">multiplyExact​</a>(int x, int y)</td>
<td style="text-align:center">返回参数的乘积，如果结果溢出 int则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyExact(long,int)" target="_blank">multiplyExact​</a>(long x, int y)</td>
<td style="text-align:center">返回参数的乘积，如果结果溢出 long则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyExact(long,long)" target="_blank">multiplyExact​</a>(long x, long y)</td>
<td style="text-align:center">返回参数的乘积，如果结果溢出 long则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyFull(int,int)" target="_blank">multiplyFull​</a>(int x, int y)</td>
<td style="text-align:center">返回参数的确切数学乘积。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#multiplyHigh(long,long)" target="_blank">multiplyHigh​</a>(long x, long y)</td>
<td style="text-align:center">返回 long作为两个64位因子的128位乘积的最高64位。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#negateExact(int)" target="_blank">negateExact​</a>(int a)</td>
<td style="text-align:center">返回参数的否定，如果结果溢出 int则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#negateExact(long)" target="_blank">negateExact​</a>(long a)</td>
<td style="text-align:center">返回参数的否定，如果结果溢出 long则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextAfter(double,double)" target="_blank">nextAfter​</a>(double start, double direction)</td>
<td style="text-align:center">返回第二个参数方向上第一个参数旁边的浮点数。</td>
</tr>
<tr>
<td style="text-align:center">static float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextAfter(float,double)" target="_blank">nextAfter​</a>(float start, double direction)</td>
<td style="text-align:center">返回第二个参数方向上第一个参数旁边的浮点数。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextDown(double)" target="_blank">nextDown​</a>(double d)</td>
<td style="text-align:center">返回负无穷大方向上与 d相邻的浮点值。</td>
</tr>
<tr>
<td style="text-align:center">static float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextDown(float)" target="_blank">nextDown​</a>(float f)</td>
<td style="text-align:center">返回负无穷大方向上与 f相邻的浮点值。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextUp(double)" target="_blank">nextUp​</a>(double d)</td>
<td style="text-align:center">返回正无穷大方向上与 d相邻的浮点值。</td>
</tr>
<tr>
<td style="text-align:center">static float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#nextUp(float)" target="_blank">nextUp​</a>(float f)</td>
<td style="text-align:center">返回正无穷大方向上与 f相邻的浮点值。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#pow(double,double)" target="_blank">pow​</a>(double a, double b)</td>
<td style="text-align:center">返回第一个参数的值，该值是第二个参数的幂。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#random()" target="_blank">random(</a>)</td>
<td style="text-align:center">返回带有正号的 double值，大于或等于 0.0且小于 1.0 。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#rint(double)" target="_blank">rint​</a>(double a)</td>
<td style="text-align:center">返回与 double值最接近的 double值，该值等于数学整数。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#round(double)" target="_blank">round​</a>(double a)</td>
<td style="text-align:center">返回与参数最接近的 long ，并将关系四舍五入为正无穷大。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#round(float)" target="_blank">round​</a>(float a)</td>
<td style="text-align:center">返回与参数最接近的 int ，并将关系四舍五入为正无穷大。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#scalb(double,int)" target="_blank">scalb​</a>(double d, int scaleFactor)</td>
<td style="text-align:center">返回 d ×2 scaleFactor舍入，就像通过单个正确舍入的浮点乘以双 scaleFactor值集的成员一样。</td>
</tr>
<tr>
<td style="text-align:center">static float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#scalb(float,int)" target="_blank">scalb​</a>(float f, int scaleFactor)</td>
<td style="text-align:center">返回 f ×2 scaleFactor舍入，就像通过单个正确舍入的浮点乘以浮点值集的成员一样。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#signum(double)" target="_blank">signum​</a>(double d)</td>
<td style="text-align:center">返回参数的signum函数; 如果参数为零，则为零;如果参数大于零，则为1.0;如果参数小于零，则为-1.0。</td>
</tr>
<tr>
<td style="text-align:center">static float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#signum(float)" target="_blank">signum​</a>(float f)</td>
<td style="text-align:center">返回参数的signum函数; 如果参数为零则为零，如果参数大于零则为1.0f，如果参数小于零则为-1.0f。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#sin(double)" target="_blank">sin​</a>(double a)</td>
<td style="text-align:center">返回角度的三角正弦值。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#sinh(double)" target="_blank">sinh​</a>(double x)</td>
<td style="text-align:center">返回 double值的双曲正弦值。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#sqrt(double)" target="_blank">sqrt​</a>(double a)</td>
<td style="text-align:center">返回 double值的正确舍入正平方根。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#subtractExact(int,int)" target="_blank">subtractExact​</a>(int x, int y)</td>
<td style="text-align:center">返回参数的差异，如果结果溢出 int则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#subtractExact(long,long)" target="_blank">subtractExact​</a>(long x, long y)</td>
<td style="text-align:center">返回参数的差异，如果结果溢出 long则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#tan(double)" target="_blank">tan​</a>(double a)</td>
<td style="text-align:center">返回角度的三角正切。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#tanh(double)" target="_blank">tanh​</a>(double x)</td>
<td style="text-align:center">返回 double值的双曲正切值。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#toDegrees(double)" target="_blank">toDegrees​</a>(double angrad)</td>
<td style="text-align:center">将以弧度测量的角度转换为以度为单位测量的近似等效角度。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#toIntExact(long)" target="_blank">toIntExact​</a>(long value)</td>
<td style="text-align:center">返回long参数的值; 如果值溢出int则抛出异常。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#toRadians(double)" target="_blank">toRadians​</a>(double angdeg)</td>
<td style="text-align:center">将以度为单位测量的角度转换为以弧度为单位测量的近似等效角度。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#ulp(double)" target="_blank">ulp​</a>(double d)</td>
<td style="text-align:center">返回参数的ulp大小。</td>
</tr>
<tr>
<td style="text-align:center">static float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#ulp(float)" target="_blank">ulp​</a>(float f)</td>
<td style="text-align:center">返回参数的ulp大小。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(byte%5B%5D)" target="_blank">BigInteger​</a>(byte[] val)</td>
<td style="text-align:center">将包含BigInteger的二进制补码二进制表示的字节数组转换为BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(byte%5B%5D,int,int)" target="_blank">BigInteger​</a>(byte[] val, int off, int len)</td>
<td style="text-align:center">将包含BigInteger的二进制补码二进制表示的字节子数组转换为BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(int,byte%5B%5D)" target="_blank">BigInteger​</a>(int signum, byte[] magnitude)</td>
<td style="text-align:center">将BigInteger的符号幅度表示转换为BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(int,byte%5B%5D,int,int)" target="_blank">BigInteger​</a>(int signum, byte[] magnitude, int off, int len)</td>
<td style="text-align:center">将BigInteger的符号幅度表示转换为BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(int,int,java.util.Random)" target="_blank">BigInteger​</a>(int bitLength, int certainty, Random rnd)</td>
<td style="text-align:center">使用指定的bitLength构造一个随机生成的可能为素数的正BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(int,java.util.Random)" target="_blank">BigInteger​</a>(int numBits, Random rnd)</td>
<td style="text-align:center">构造一个随机生成的BigInteger，均匀分布在0到（2 numBits - 1）的范围内。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(java.lang.String)" target="_blank">BigInteger​</a>(String val)</td>
<td style="text-align:center">将BigInteger的十进制字符串表示形式转换为BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#%3Cinit%3E(java.lang.String,int)" target="_blank">BigInteger​</a>(String val, int radix)</td>
<td style="text-align:center">将指定基数中BigInteger的String表示形式转换为BigInteger。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#abs()" target="_blank">abs(</a>)</td>
<td style="text-align:center">返回一个BigInteger，其值是此BigInteger的绝对值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#add(java.math.BigInteger)" target="_blank">add​</a>(BigInteger val)</td>
<td style="text-align:center">返回一个值为 (this + val)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#and(java.math.BigInteger)" target="_blank">and​</a>(BigInteger val)</td>
<td style="text-align:center">返回值为 (this &amp; val)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#andNot(java.math.BigInteger)" target="_blank">andNot​</a>(BigInteger val)</td>
<td style="text-align:center">返回值为 (this &amp; ~val)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#bitCount()" target="_blank">bitCount(</a>)</td>
<td style="text-align:center">返回此BigInteger的二进制补码表示中与其符号位不同的位数。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#bitLength()" target="_blank">bitLength(</a>)</td>
<td style="text-align:center">返回此BigInteger的最小二进制补码表示中的位数， 不包括符号位。</td>
</tr>
<tr>
<td style="text-align:center">byte</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#byteValueExact()" target="_blank">byteValueExact(</a>)</td>
<td style="text-align:center">将 BigInteger转换为 byte ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#clearBit(int)" target="_blank">clearBit​</a>(int n)</td>
<td style="text-align:center">返回一个BigInteger，其值等于此BigInteger且指定位已清除。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#compareTo(java.math.BigInteger)" target="_blank">compareTo​</a>(BigInteger val)</td>
<td style="text-align:center">将此BigInteger与指定的BigInteger进行比较。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#divide(java.math.BigInteger)" target="_blank">divide​</a>(BigInteger val)</td>
<td style="text-align:center">返回值为 (this / val)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center">[BigInteger<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank"></a>]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#divideAndRemainder(java.math.BigInteger)" target="_blank">divideAndRemainder​</a>(BigInteger val)</td>
<td style="text-align:center">返回两个BigIntegers的数组，其中包含 (this / val)后跟 (this % val) 。</td>
</tr>
<tr>
<td style="text-align:center">double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#doubleValue()" target="_blank">doubleValue(</a>)</td>
<td style="text-align:center">将此BigInteger转换为 double 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object x)</td>
<td style="text-align:center">将此BigInteger与指定的Object进行相等性比较。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#flipBit(int)" target="_blank">flipBit​</a>(int n)</td>
<td style="text-align:center">返回一个BigInteger，其值等于此BigInteger，并且指定的位被翻转。</td>
</tr>
<tr>
<td style="text-align:center">float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#floatValue()" target="_blank">floatValue(</a>)</td>
<td style="text-align:center">将此BigInteger转换为 float 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#gcd(java.math.BigInteger)" target="_blank">gcd​</a>(BigInteger val)</td>
<td style="text-align:center">返回一个BigInteger，其值是 abs(this)和 abs(val) 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#getLowestSetBit()" target="_blank">getLowestSetBit(</a>)</td>
<td style="text-align:center">返回此BigInteger中最右边（最低位）一位的索引（最右边一位右边的零位数）。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">返回此BigInteger的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#intValue()" target="_blank">intValue(</a>)</td>
<td style="text-align:center">将此BigInteger转换为 int 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#intValueExact()" target="_blank">intValueExact(</a>)</td>
<td style="text-align:center">将此 BigInteger转换为 int ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#isProbablePrime(int)" target="_blank">isProbablePrime​</a>(int certainty)</td>
<td style="text-align:center">返回 true如果此BigInteger可能为素数， false ，如果它一定为合。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#longValue()" target="_blank">longValue(</a>)</td>
<td style="text-align:center">将此BigInteger转换为 long 。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#longValueExact()" target="_blank">longValueExact(</a>)</td>
<td style="text-align:center">将此 BigInteger转换为 long ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#max(java.math.BigInteger)" target="_blank">max​</a>(BigInteger val)</td>
<td style="text-align:center">返回此BigInteger和 val 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#min(java.math.BigInteger)" target="_blank">min​</a>(BigInteger val)</td>
<td style="text-align:center">返回此BigInteger和 val 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#mod(java.math.BigInteger)" target="_blank">mod​</a>(BigInteger m)</td>
<td style="text-align:center">返回一个值为 (this mod m的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#modInverse(java.math.BigInteger)" target="_blank">modInverse​</a>(BigInteger m)</td>
<td style="text-align:center">返回BigInteger，其值为 (this -1 mod m) 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#modPow(java.math.BigInteger,java.math.BigInteger)" target="_blank">modPow​</a>(BigInteger exponent, BigInteger m)</td>
<td style="text-align:center">返回一个值为 (thisexponent mod m)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#multiply(java.math.BigInteger)" target="_blank">multiply​</a>(BigInteger val)</td>
<td style="text-align:center">返回值为 (this * val)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#negate()" target="_blank">negate(</a>)</td>
<td style="text-align:center">返回值为 (-this)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#nextProbablePrime()" target="_blank">nextProbablePrime(</a>)</td>
<td style="text-align:center">返回大于此 BigInteger的第一个整数，该整数可能是素数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#not()" target="_blank">not(</a>)</td>
<td style="text-align:center">返回一个值为 (~this)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#or(java.math.BigInteger)" target="_blank">or​</a>(BigInteger val)</td>
<td style="text-align:center">返回一个值为 (this</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#pow(int)" target="_blank">pow​</a>(int exponent)</td>
<td style="text-align:center">返回值为 (thisexponent)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#probablePrime(int,java.util.Random)" target="_blank">probablePrime​</a>(int bitLength, Random rnd)</td>
<td style="text-align:center">使用指定的bitLength返回可能为素数的正BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#remainder(java.math.BigInteger)" target="_blank">remainder​</a>(BigInteger val)</td>
<td style="text-align:center">返回一个值为 (this % val)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#setBit(int)" target="_blank">setBit​</a>(int n)</td>
<td style="text-align:center">返回一个BigInteger，其值等于此BigInteger并设置了指定的位。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#shiftLeft(int)" target="_blank">shiftLeft​</a>(int n)</td>
<td style="text-align:center">返回值为 (this &lt;&lt; n)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#shiftRight(int)" target="_blank">shiftRight​</a>(int n)</td>
<td style="text-align:center">返回值为 (this &gt;&gt; n)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center">short</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#shortValueExact()" target="_blank">shortValueExact(</a>)</td>
<td style="text-align:center">将此 BigInteger转换为 short ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#signum()" target="_blank">signum(</a>)</td>
<td style="text-align:center">返回此BigInteger的signum函数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#sqrt()" target="_blank">sqrt(</a>)</td>
<td style="text-align:center">返回此BigInteger的整数平方根。</td>
</tr>
<tr>
<td style="text-align:center">[BigInteger<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank"></a>]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#sqrtAndRemainder()" target="_blank">sqrtAndRemainder(</a>)</td>
<td style="text-align:center">返回两个BigIntegers的数组，其中包含 s的整数平方根 this及其余部分 this - s*s 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#subtract(java.math.BigInteger)" target="_blank">subtract​</a>(BigInteger val)</td>
<td style="text-align:center">返回值为 (this - val)的BigInteger。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#testBit(int)" target="_blank">testBit​</a>(int n)</td>
<td style="text-align:center">当且仅当指定位置位时，返回 true 。</td>
</tr>
<tr>
<td style="text-align:center">byte[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#toByteArray()" target="_blank">toByteArray(</a>)</td>
<td style="text-align:center">返回一个包含此BigInteger的二进制补码表示的字节数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">返回此BigInteger的十进制String表示形式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#toString(int)" target="_blank">toString​</a>(int radix)</td>
<td style="text-align:center">返回给定基数中此BigInteger的String表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#valueOf(long)" target="_blank">valueOf​</a>(long val)</td>
<td style="text-align:center">返回一个BigInteger，其值等于指定的 long 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigInteger.html#xor(java.math.BigInteger)" target="_blank">xor​</a>(BigInteger val)</td>
<td style="text-align:center">返回值为 (this ^ val)的BigInteger。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(char%5B%5D)" target="_blank">BigDecimal​</a>(char[] in)</td>
<td style="text-align:center">将 BigDecimal的字符数组表示 BigDecimal转换为 BigDecimal ，接受与 <a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)" target="_blank">BigDecimal(String)构</a>造函数相同的字符序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(char%5B%5D,int,int)" target="_blank">BigDecimal​</a>(char[] in, int offset, int len)</td>
<td style="text-align:center">将 BigDecimal的字符数组表示转换为 BigDecimal ，接受与 <a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)" target="_blank">BigDecimal(String)构</a>造函数相同的字符序列，同时允许指定子数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(char%5B%5D,int,int,java.math.MathContext)" target="_blank">BigDecimal​</a>(char[] in, int offset, int len, MathContext mc)</td>
<td style="text-align:center">将 BigDecimal的字符数组表示转换为 BigDecimal ，接受与 <a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)" target="_blank">BigDecimal(String)构</a>造函数相同的字符序列，同时允许指定子数组并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(char%5B%5D,java.math.MathContext)" target="_blank">BigDecimal​</a>(char[] in, MathContext mc)</td>
<td style="text-align:center">将 BigDecimal的字符数组表示转换为 BigDecimal ，接受与 <a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)" target="_blank">BigDecimal(String)构</a>造函数相同的字符序列，并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(double)" target="_blank">BigDecimal​</a>(double val)</td>
<td style="text-align:center">将 double转换为 BigDecimal ，它是 double的二进制浮点值的精确十进制表示形式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(double,java.math.MathContext)" target="_blank">BigDecimal​</a>(double val, MathContext mc)</td>
<td style="text-align:center">将 double转换为 BigDecimal ，并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(int)" target="_blank">BigDecimal​</a>(int val)</td>
<td style="text-align:center">将 int翻译成 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(int,java.math.MathContext)" target="_blank">BigDecimal​</a>(int val, MathContext mc)</td>
<td style="text-align:center">将 int转换为 BigDecimal ，并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(long)" target="_blank">BigDecimal​</a>(long val)</td>
<td style="text-align:center">将 long翻译成 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(long,java.math.MathContext)" target="_blank">BigDecimal​</a>(long val, MathContext mc)</td>
<td style="text-align:center">将 long转换为 BigDecimal ，并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)" target="_blank">BigDecimal​</a>(String val)</td>
<td style="text-align:center">将 BigDecimal的字符串表示 BigDecimal转换为 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String,java.math.MathContext)" target="_blank">BigDecimal​</a>(String val, MathContext mc)</td>
<td style="text-align:center">将 BigDecimal的字符串表示 BigDecimal转换为 BigDecimal ，接受与 <a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)" target="_blank">BigDecimal(String)构</a>造函数相同的字符串，并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.math.BigInteger)" target="_blank">BigDecimal​</a>(BigInteger val)</td>
<td style="text-align:center">将 BigInteger翻译成 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.math.BigInteger,int)" target="_blank">BigDecimal​</a>(BigInteger unscaledVal, int scale)</td>
<td style="text-align:center">将 BigInteger缩放值和 int比例转换为 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.math.BigInteger,int,java.math.MathContext)" target="_blank">BigDecimal​</a>(BigInteger unscaledVal, int scale, MathContext mc)</td>
<td style="text-align:center">将 BigInteger缩放值和 int比例转换为 BigDecimal ，并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.math.BigInteger,java.math.MathContext)" target="_blank">BigDecimal​</a>(BigInteger val, MathContext mc)</td>
<td style="text-align:center">根据上下文设置将 BigInteger转换为 BigDecimal舍入。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#abs()" target="_blank">abs(</a>)</td>
<td style="text-align:center">返回 BigDecimal其值是此的绝对值 BigDecimal ，其标为 this.scale() 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#abs(java.math.MathContext)" target="_blank">abs​</a>(MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为此 BigDecimal的绝对值，并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#add(java.math.BigDecimal)" target="_blank">add​</a>(BigDecimal augend)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this + augend) ，其比例为 max(this.scale(), augend.scale()) 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#add(java.math.BigDecimal,java.math.MathContext)" target="_blank">add​</a>(BigDecimal augend, MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this + augend) ，根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center">byte</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#byteValueExact()" target="_blank">byteValueExact(</a>)</td>
<td style="text-align:center">将 BigDecimal转换为 byte ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#compareTo(java.math.BigDecimal)" target="_blank">compareTo​</a>(BigDecimal val)</td>
<td style="text-align:center">将此 BigDecimal与指定的 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divide(java.math.BigDecimal)" target="_blank">divide​</a>(BigDecimal divisor)</td>
<td style="text-align:center">返回BigDecimal其值为(this / divisor) ，其首选比例为(this.scale() - divisor.scale()) ; 如果无法表示准确的商（因为它具有非终止的十进制扩展），则抛出ArithmeticException 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divide(java.math.BigDecimal,int,java.math.RoundingMode)" target="_blank">divide​</a>(BigDecimal divisor, int scale, RoundingMode roundingMode)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this / divisor) ，其比例为指定的比例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divide(java.math.BigDecimal,java.math.MathContext)" target="_blank">divide​</a>(BigDecimal divisor, MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this / divisor) ，根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divide(java.math.BigDecimal,java.math.RoundingMode)" target="_blank">divide​</a>(BigDecimal divisor, RoundingMode roundingMode)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this / divisor) ，其比例为 this.scale() 。</td>
</tr>
<tr>
<td style="text-align:center">[BigDecimal<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank"></a>]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divideAndRemainder(java.math.BigDecimal)" target="_blank">divideAndRemainder​</a>(BigDecimal divisor)</td>
<td style="text-align:center">返回一个两元件 BigDecimal阵列含有的结果 divideToIntegralValue ，随后的结果 remainder上的两个操作数。</td>
</tr>
<tr>
<td style="text-align:center">[BigDecimal<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank"></a>]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divideAndRemainder(java.math.BigDecimal,java.math.MathContext)" target="_blank">divideAndRemainder​</a>(BigDecimal divisor, MathContext mc)</td>
<td style="text-align:center">返回一个两元件 BigDecimal阵列含有的结果 divideToIntegralValue ，随后的结果 remainder上与根据上下文设置进行舍入计算出的两个操作数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divideToIntegralValue(java.math.BigDecimal)" target="_blank">divideToIntegralValue​</a>(BigDecimal divisor)</td>
<td style="text-align:center">返回 BigDecimal其值是 (this / divisor)舍入的商 (this / divisor)的整数部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#divideToIntegralValue(java.math.BigDecimal,java.math.MathContext)" target="_blank">divideToIntegralValue​</a>(BigDecimal divisor, MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal ，其值是整数部分 (this / divisor) 。</td>
</tr>
<tr>
<td style="text-align:center">double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#doubleValue()" target="_blank">doubleValue(</a>)</td>
<td style="text-align:center">将 BigDecimal转换为 double 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object x)</td>
<td style="text-align:center">将此 BigDecimal与指定的 Object进行相等性比较。</td>
</tr>
<tr>
<td style="text-align:center">float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#floatValue()" target="_blank">floatValue(</a>)</td>
<td style="text-align:center">将 BigDecimal转换为 float 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">返回此 BigDecimal的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#intValue()" target="_blank">intValue(</a>)</td>
<td style="text-align:center">将 BigDecimal成 int 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#intValueExact()" target="_blank">intValueExact(</a>)</td>
<td style="text-align:center">将 BigDecimal转换为 int ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#longValue()" target="_blank">longValue(</a>)</td>
<td style="text-align:center">将 BigDecimal转换为 long 。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#longValueExact()" target="_blank">longValueExact(</a>)</td>
<td style="text-align:center">将此 BigDecimal转换为 long ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#max(java.math.BigDecimal)" target="_blank">max​</a>(BigDecimal val)</td>
<td style="text-align:center">返回 BigDecimal和 val 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#min(java.math.BigDecimal)" target="_blank">min​</a>(BigDecimal val)</td>
<td style="text-align:center">返回 BigDecimal和 val 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#movePointLeft(int)" target="_blank">movePointLeft​</a>(int n)</td>
<td style="text-align:center">返回一个 BigDecimal ，相当于这个小数点向左移动 n位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#movePointRight(int)" target="_blank">movePointRight​</a>(int n)</td>
<td style="text-align:center">返回一个 BigDecimal ，相当于这个小数点向右移动 n位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#multiply(java.math.BigDecimal)" target="_blank">multiply​</a>(BigDecimal multiplicand)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this × multiplicand) ，其比例为 (this.scale() + multiplicand.scale()) 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#multiply(java.math.BigDecimal,java.math.MathContext)" target="_blank">multiply​</a>(BigDecimal multiplicand, MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this × multiplicand) ，根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#negate()" target="_blank">negate(</a>)</td>
<td style="text-align:center">返回 BigDecimal其值为 (-this) ，其比例为 this.scale() 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#negate(java.math.MathContext)" target="_blank">negate​</a>(MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为 (-this) ，根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#plus()" target="_blank">plus(</a>)</td>
<td style="text-align:center">返回 BigDecimal其值为 (+this) ，其比例为 this.scale() 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#plus(java.math.MathContext)" target="_blank">plus​</a>(MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为 (+this) ，根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#pow(int)" target="_blank">pow​</a>(int n)</td>
<td style="text-align:center">返回 BigDecimal其值为 (thisn) ，精确计算功率，精度无限制。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#pow(int,java.math.MathContext)" target="_blank">pow​</a>(int n, MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为 (thisn) 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#precision()" target="_blank">precision(</a>)</td>
<td style="text-align:center">返回此 BigDecimal的 精度 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#remainder(java.math.BigDecimal)" target="_blank">remainder​</a>(BigDecimal divisor)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this % divisor) 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#remainder(java.math.BigDecimal,java.math.MathContext)" target="_blank">remainder​</a>(BigDecimal divisor, MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this % divisor) ，根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#round(java.math.MathContext)" target="_blank">round​</a>(MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal根据四舍五入 MathContext设置。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#scale()" target="_blank">scale(</a>)</td>
<td style="text-align:center">返回 BigDecimal的 比例 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#scaleByPowerOfTen(int)" target="_blank">scaleByPowerOfTen​</a>(int n)</td>
<td style="text-align:center">返回其数值等于（ this * 10 n ）的BigDecimal。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#setScale(int)" target="_blank">setScale​</a>(int newScale)</td>
<td style="text-align:center">返回 BigDecimal其标度为指定值，其值在数值上等于此 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#setScale(int,java.math.RoundingMode)" target="_blank">setScale​</a>(int newScale, RoundingMode roundingMode)</td>
<td style="text-align:center">返回 BigDecimal其比例为指定值，其未缩放值通过将此 BigDecimal值乘以或除以适当的10的幂来确定，以保持其总值。</td>
</tr>
<tr>
<td style="text-align:center">short</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#shortValueExact()" target="_blank">shortValueExact(</a>)</td>
<td style="text-align:center">将此 BigDecimal转换为 short ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#signum()" target="_blank">signum(</a>)</td>
<td style="text-align:center">返回此 BigDecimal的signum函数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#sqrt(java.math.MathContext)" target="_blank">sqrt​</a>(MathContext mc)</td>
<td style="text-align:center">返回 this平方根的 this并根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#stripTrailingZeros()" target="_blank">stripTrailingZeros(</a>)</td>
<td style="text-align:center">返回 BigDecimal ，它在数值上等于此值，但从表示中删除了任何尾随零。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#subtract(java.math.BigDecimal)" target="_blank">subtract​</a>(BigDecimal subtrahend)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this - subtrahend) ，其比例为 max(this.scale(), subtrahend.scale()) 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#subtract(java.math.BigDecimal,java.math.MathContext)" target="_blank">subtract​</a>(BigDecimal subtrahend, MathContext mc)</td>
<td style="text-align:center">返回 BigDecimal其值为 (this - subtrahend) ，根据上下文设置进行舍入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toBigInteger()" target="_blank">toBigInteger(</a>)</td>
<td style="text-align:center">将 BigDecimal转换为 BigInteger 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toBigIntegerExact()" target="_blank">toBigIntegerExact(</a>)</td>
<td style="text-align:center">将 BigDecimal转换为 BigInteger ，检查是否丢失了信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toEngineeringString()" target="_blank">toEngineeringString(</a>)</td>
<td style="text-align:center">如果需要指数，则使用工程符号返回此 BigDecimal的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toPlainString()" target="_blank">toPlainString(</a>)</td>
<td style="text-align:center">返回此 BigDecimal的字符串表示形式，不带指数字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">如果需要指数，则使用科学计数法返回此 BigDecimal的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#ulp()" target="_blank">ulp(</a>)</td>
<td style="text-align:center">返回此 BigDecimal的ulp（最后一个单位）的 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_biginteger" target="_blank">BigInteger</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#unscaledValue()" target="_blank">unscaledValue(</a>)</td>
<td style="text-align:center">返回 BigInteger其值是此的 非标度值 BigDecimal 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#valueOf(double)" target="_blank">valueOf​</a>(double val)</td>
<td style="text-align:center">转换一个 double成 BigDecimal ，使用 double通过所提供的规范的字符串表示 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#toString(double)" target="_blank">Double.toString(double)方</a>法。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#valueOf(long)" target="_blank">valueOf​</a>(long val)</td>
<td style="text-align:center">将 long值转换为 BigDecimal ，其标度为零。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_math_bigdecimal" target="_blank">BigDecimal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/math/BigDecimal.html#valueOf(long,int)" target="_blank">valueOf​</a>(long unscaledVal, int scale)</td>
<td style="text-align:center">将 long值和 int比例转换为 BigDecimal 。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_integer" target="_blank">Integer</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">字段</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#BYTES" target="_blank">BYTES</a></td>
<td style="text-align:center">用于表示二进制补码二进制形式的 int值的字节数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#MAX_VALUE" target="_blank">MAX_VALUE</a></td>
<td style="text-align:center">保持最大值的常数 int可以具有2 31 -1。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#MIN_VALUE" target="_blank">MIN_VALUE</a></td>
<td style="text-align:center">保持最小值的常数 int可以具有，-2 31 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#SIZE" target="_blank">SIZE</a></td>
<td style="text-align:center">用于表示二进制补码二进制形式的 int值的位数。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_class" target="_blank">类&lt;</a>Integer&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#TYPE" target="_blank">TYPE</a></td>
<td style="text-align:center">类实例表示基本类型 int 。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#bitCount(int)" target="_blank">bitCount​</a>(int i)</td>
<td style="text-align:center">返回指定的 int值的二进制补码表示形式中的 int 。</td>
</tr>
<tr>
<td style="text-align:center">byte</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#byteValue()" target="_blank">byteValue(</a>)</td>
<td style="text-align:center">返回此值 Integer为 byte的基本收缩转换后。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#compare(int,int)" target="_blank">compare​</a>(int x, int y)</td>
<td style="text-align:center">以数字方式比较两个 int值。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#compareTo(java.lang.Integer)" target="_blank">compareTo​</a>(Integer anotherInteger)</td>
<td style="text-align:center">以数字方式比较两个 Integer对象。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#compareUnsigned(int,int)" target="_blank">compareUnsigned​</a>(int x, int y)</td>
<td style="text-align:center">比较两个 int值，将数值视为无符号。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_integer" target="_blank">Integer</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#decode(java.lang.String)" target="_blank">decode​</a>(String nm)</td>
<td style="text-align:center">将 String解码为 Integer 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#divideUnsigned(int,int)" target="_blank">divideUnsigned​</a>(int dividend, int divisor)</td>
<td style="text-align:center">返回将第一个参数除以第二个参数的无符号商，其中每个参数和结果都被解释为无符号值。</td>
</tr>
<tr>
<td style="text-align:center">double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#doubleValue()" target="_blank">doubleValue(</a>)</td>
<td style="text-align:center">返回此值 Integer为 double一个宽元转换后。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object obj)</td>
<td style="text-align:center">将此对象与指定的对象进行比较。</td>
</tr>
<tr>
<td style="text-align:center">float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#floatValue()" target="_blank">floatValue(</a>)</td>
<td style="text-align:center">返回此值 Integer为 float一个宽元转换后。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_integer" target="_blank">Integer</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#getInteger(java.lang.String)" target="_blank">getInteger​</a>(String nm)</td>
<td style="text-align:center">确定具有指定名称的系统属性的整数值。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_integer" target="_blank">Integer</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#getInteger(java.lang.String,int)" target="_blank">getInteger​</a>(String nm, int val)</td>
<td style="text-align:center">确定具有指定名称的系统属性的整数值。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_integer" target="_blank">Integer</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#getInteger(java.lang.String,java.lang.Integer)" target="_blank">getInteger​</a>(String nm, Integer val)</td>
<td style="text-align:center">返回具有指定名称的系统属性的整数值。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">返回此 Integer的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#hashCode(int)" target="_blank">hashCode​</a>(int value)</td>
<td style="text-align:center">返回int值的哈希码; 与Integer.hashCode()兼容。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#highestOneBit(int)" target="_blank">highestOneBit​</a>(int i)</td>
<td style="text-align:center">返回 int值，最多只有一位，位于指定 int值中最高位（“最左侧”）一位的位置。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#intValue()" target="_blank">intValue(</a>)</td>
<td style="text-align:center">返回此值 Integer为 int 。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#longValue()" target="_blank">longValue(</a>)</td>
<td style="text-align:center">在扩展基元转换后，将此 Integer的值作为 long返回。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#lowestOneBit(int)" target="_blank">lowestOneBit​</a>(int i)</td>
<td style="text-align:center">返回 int值，最多只有一位，位于指定 int值中最低位（“最右侧”）一位的位置。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#max(int,int)" target="_blank">max​</a>(int a, int b)</td>
<td style="text-align:center">返回两个 int值中较大的一个， int调用 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#max(int,int)" target="_blank">Math.max一样 </a>。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#min(int,int)" target="_blank">min​</a>(int a, int b)</td>
<td style="text-align:center">返回两个 int值中较小的一个， int调用 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#min(int,int)" target="_blank">Math.min一样 </a>。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#numberOfLeadingZeros(int)" target="_blank">numberOfLeadingZeros​</a>(int i)</td>
<td style="text-align:center">返回指定 int值的二进制补码二进制表示中最高位（“最左侧”）一位之前的零位数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#numberOfTrailingZeros(int)" target="_blank">numberOfTrailingZeros​</a>(int i)</td>
<td style="text-align:center">返回指定 int值的二进制补码表达式中最低位（“最右侧”）一位后的零位数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseInt(java.lang.CharSequence,int,int,int)" target="_blank">parseInt​</a>(CharSequence s, int beginIndex, int endIndex, int radix)</td>
<td style="text-align:center">解析<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_charsequence" target="_blank">CharSequence参</a>数作为有符号int指定radix ，在指定的开始beginIndex并延伸到endIndex - 1 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseInt(java.lang.String)" target="_blank">parseInt​</a>(String s)</td>
<td style="text-align:center">将字符串参数解析为带符号的十进制整数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseInt(java.lang.String,int)" target="_blank">parseInt​</a>(String s, int radix)</td>
<td style="text-align:center">将字符串参数解析为第二个参数指定的基数中的有符号整数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseUnsignedInt(java.lang.CharSequence,int,int,int)" target="_blank">parseUnsignedInt​</a>(CharSequence s, int beginIndex, int endIndex, int radix)</td>
<td style="text-align:center">解析<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_charsequence" target="_blank">CharSequence参</a>数为一个无符号int在指定的radix ，在指定的开始beginIndex并延伸到endIndex - 1 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseUnsignedInt(java.lang.String)" target="_blank">parseUnsignedInt​</a>(String s)</td>
<td style="text-align:center">将字符串参数解析为无符号十进制整数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#parseUnsignedInt(java.lang.String,int)" target="_blank">parseUnsignedInt​</a>(String s, int radix)</td>
<td style="text-align:center">将字符串参数解析为第二个参数指定的基数中的无符号整数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#remainderUnsigned(int,int)" target="_blank">remainderUnsigned​</a>(int dividend, int divisor)</td>
<td style="text-align:center">返回将第一个参数除以第二个参数的无符号余数，其中每个参数和结果都被解释为无符号值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#reverse(int)" target="_blank">reverse​</a>(int i)</td>
<td style="text-align:center">返回通过反转指定的 int值的二进制补码二进制表示中的位顺序获得的值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#reverseBytes(int)" target="_blank">reverseBytes​</a>(int i)</td>
<td style="text-align:center">返回通过反转指定的 int值的二进制补码表示中的字节顺序获得的值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#rotateLeft(int,int)" target="_blank">rotateLeft​</a>(int i, int distance)</td>
<td style="text-align:center">返回通过旋转指定 int留下的指定 int值的二进制补码表达式获得的值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#rotateRight(int,int)" target="_blank">rotateRight​</a>(int i, int distance)</td>
<td style="text-align:center">返回通过将指定的 int值的二进制补码表达式旋转指定的 int值。</td>
</tr>
<tr>
<td style="text-align:center">short</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#shortValue()" target="_blank">shortValue(</a>)</td>
<td style="text-align:center">返回此值 Integer为 short的基本收缩转换后。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#signum(int)" target="_blank">signum​</a>(int i)</td>
<td style="text-align:center">返回指定的 int值的signum函数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#sum(int,int)" target="_blank">sum​</a>(int a, int b)</td>
<td style="text-align:center">根据+运算符将两个整数相加。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toBinaryString(int)" target="_blank">toBinaryString​</a>(int i)</td>
<td style="text-align:center">返回整数参数的字符串表示形式，作为base 2中的无符号整数。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toHexString(int)" target="_blank">toHexString​</a>(int i)</td>
<td style="text-align:center">返回整数参数的字符串表示形式，作为基数为16的无符号整数。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toOctalString(int)" target="_blank">toOctalString​</a>(int i)</td>
<td style="text-align:center">返回整数参数的字符串表示形式，作为基数为8的无符号整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">返回表示此 Integer值的 String对象。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toString(int)" target="_blank">toString​</a>(int i)</td>
<td style="text-align:center">返回表示指定整数的 String对象。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toString(int,int)" target="_blank">toString​</a>(int i, int radix)</td>
<td style="text-align:center">返回第二个参数指定的基数中第一个参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toUnsignedLong(int)" target="_blank">toUnsignedLong​</a>(int x)</td>
<td style="text-align:center">通过无符号转换将参数转换为 long 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toUnsignedString(int)" target="_blank">toUnsignedString​</a>(int i)</td>
<td style="text-align:center">以无符号十进制值的形式返回参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#toUnsignedString(int,int)" target="_blank">toUnsignedString​</a>(int i, int radix)</td>
<td style="text-align:center">返回第一个参数的字符串表示形式，作为第二个参数指定的基数中的无符号整数值。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_integer" target="_blank">Integer</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#valueOf(int)" target="_blank">valueOf​</a>(int i)</td>
<td style="text-align:center">返回表示指定的 int值的 Integer实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_integer" target="_blank">Integer</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#valueOf(java.lang.String)" target="_blank">valueOf​</a>(String s)</td>
<td style="text-align:center">返回一个 Integer物体保持在指定的值 String 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_integer" target="_blank">Integer</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Integer.html#valueOf(java.lang.String,int)" target="_blank">valueOf​</a>(String s, int radix)</td>
<td style="text-align:center">返回 Integer对象，当使用第二个参数给出的基数进行解析时，该对象保存从指定的 String提取的值。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_double" target="_blank">Double</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">字段</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#BYTES" target="_blank">BYTES</a></td>
<td style="text-align:center">用于表示 double值的字节数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MAX_EXPONENT" target="_blank">MAX_EXPONENT</a></td>
<td style="text-align:center">最大指数有限 double变量可能有。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MAX_VALUE" target="_blank">MAX_VALUE</a></td>
<td style="text-align:center">持有 double类型的最大正有限值的 double ，（2-2 -52 ）·2 1023 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MIN_EXPONENT" target="_blank">MIN_EXPONENT</a></td>
<td style="text-align:center">标准化 double变量的最小指数可能有。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MIN_NORMAL" target="_blank">MIN_NORMAL</a></td>
<td style="text-align:center">保持 double -1022类型的最小正正常值的常量。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#MIN_VALUE" target="_blank">MIN_VALUE</a></td>
<td style="text-align:center">保持 double类型的最小正非零值的 常量 。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#NaN" target="_blank">NaN</a></td>
<td style="text-align:center">保持类型为 double非数字（NaN）值的 double 。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#NEGATIVE_INFINITY" target="_blank">NEGATIVE_INFINITY</a></td>
<td style="text-align:center">持有 double类型的负无穷大的 double 。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#POSITIVE_INFINITY" target="_blank">POSITIVE_INFINITY</a></td>
<td style="text-align:center">保持 double类型的正无穷大的 double 。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#SIZE" target="_blank">SIZE</a></td>
<td style="text-align:center">用于表示 double值的位数。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_class" target="_blank">类&lt;</a>Double&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#TYPE" target="_blank">TYPE</a></td>
<td style="text-align:center">类实例表示基本类型 double 。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">byte</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#byteValue()" target="_blank">byteValue(</a>)</td>
<td style="text-align:center">返回此值 Double为 byte的基本收缩转换后。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#compare(double,double)" target="_blank">compare​</a>(double d1, double d2)</td>
<td style="text-align:center">比较两个指定的 double值。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#compareTo(java.lang.Double)" target="_blank">compareTo​</a>(Double anotherDouble)</td>
<td style="text-align:center">以数字方式比较两个 Double对象。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#doubleToLongBits(double)" target="_blank">doubleToLongBits​</a>(double value)</td>
<td style="text-align:center">根据IEEE 754浮点“双格式”位布局返回指定浮点值的表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#doubleToRawLongBits(double)" target="_blank">doubleToRawLongBits​</a>(double value)</td>
<td style="text-align:center">根据IEEE 754浮点“双格式”位布局返回指定浮点值的表示，保留非数字（NaN）值。</td>
</tr>
<tr>
<td style="text-align:center">double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#doubleValue()" target="_blank">doubleValue(</a>)</td>
<td style="text-align:center">返回此 Double对象的 double值。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object obj)</td>
<td style="text-align:center">将此对象与指定的对象进行比较。</td>
</tr>
<tr>
<td style="text-align:center">float</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#floatValue()" target="_blank">floatValue(</a>)</td>
<td style="text-align:center">返回此值 Double为 float的基本收缩转换后。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">返回此 Double对象的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#hashCode(double)" target="_blank">hashCode​</a>(double value)</td>
<td style="text-align:center">返回double值的哈希码; 与Double.hashCode()兼容。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#intValue()" target="_blank">intValue(</a>)</td>
<td style="text-align:center">返回此的值 Double作为 int的基本收缩转换之后。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isFinite(double)" target="_blank">isFinite​</a>(double d)</td>
<td style="text-align:center">如果参数是有限浮点值，则返回true ; 否则返回false （对于NaN和无穷大参数）。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isInfinite()" target="_blank">isInfinite(</a>)</td>
<td style="text-align:center">返回 true如果此 Double值是无限大， false否则。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isInfinite(double)" target="_blank">isInfinite​</a>(double v)</td>
<td style="text-align:center">返回 true如果指定的数是无限大， false否则。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isNaN()" target="_blank">isNaN(</a>)</td>
<td style="text-align:center">返回 true如果此 Double值是不是非数字（NAN）， false否则。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#isNaN(double)" target="_blank">isNaN​</a>(double v)</td>
<td style="text-align:center">返回 true如果指定的号码是一个不一个数字（NaN）值， false否则。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#longBitsToDouble(long)" target="_blank">longBitsToDouble​</a>(long bits)</td>
<td style="text-align:center">返回与给定位表示相对应的 double值。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#longValue()" target="_blank">longValue(</a>)</td>
<td style="text-align:center">返回此值 Double为 long的基本收缩转换后。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#max(double,double)" target="_blank">max​</a>(double a, double b)</td>
<td style="text-align:center">返回两个 double值中较大的一个， double调用 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#max(double,double)" target="_blank">Math.max一样 </a>。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#min(double,double)" target="_blank">min​</a>(double a, double b)</td>
<td style="text-align:center">返回两个 double值中较小的一个， double调用 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Math.html#min(double,double)" target="_blank">Math.min一样 </a>。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#parseDouble(java.lang.String)" target="_blank">parseDouble​</a>(String s)</td>
<td style="text-align:center">返回一个新 double初始化为指定的代表的值 String ，如通过执行 valueOf类的方法 Double 。</td>
</tr>
<tr>
<td style="text-align:center">short</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#shortValue()" target="_blank">shortValue(</a>)</td>
<td style="text-align:center">返回此值 Double为 short的基本收缩转换后。</td>
</tr>
<tr>
<td style="text-align:center">static double</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#sum(double,double)" target="_blank">sum​</a>(double a, double b)</td>
<td style="text-align:center">根据+运算符一起添加两个 double值。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#toHexString(double)" target="_blank">toHexString​</a>(double d)</td>
<td style="text-align:center">返回 double参数的十六进制字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">返回此 Double对象的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#toString(double)" target="_blank">toString​</a>(double d)</td>
<td style="text-align:center">返回 double参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_double" target="_blank">Double</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#valueOf(double)" target="_blank">valueOf​</a>(double d)</td>
<td style="text-align:center">返回表示指定的 double值的 Double实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_double" target="_blank">Double</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Double.html#valueOf(java.lang.String)" target="_blank">valueOf​</a>(String s)</td>
<td style="text-align:center">返回 Double对象，其中 double由参数字符串 s表示的 double值。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_character" target="_blank">Character</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#charCount(int)" target="_blank">charCount​</a>(int codePoint)</td>
<td style="text-align:center">确定表示指定字符（Unicode代码点）所需的 char值的数量。</td>
</tr>
<tr>
<td style="text-align:center">char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#charValue()" target="_blank">charValue(</a>)</td>
<td style="text-align:center">返回此 Character对象的值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointAt(char%5B%5D,int)" target="_blank">codePointAt​</a>(char[] a, int index)</td>
<td style="text-align:center">返回 char数组的给定索引处的代码点。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointAt(char%5B%5D,int,int)" target="_blank">codePointAt​</a>(char[] a, int index, int limit)</td>
<td style="text-align:center">返回 char数组的给定索引处的代码点，其中只能使用 index小于 limit数组元素。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointAt(java.lang.CharSequence,int)" target="_blank">codePointAt​</a>(CharSequence seq, int index)</td>
<td style="text-align:center">返回 CharSequence的给定索引处的代码点。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointBefore(char%5B%5D,int)" target="_blank">codePointBefore​</a>(char[] a, int index)</td>
<td style="text-align:center">返回 char数组的给定索引之前的代码点。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointBefore(char%5B%5D,int,int)" target="_blank">codePointBefore​</a>(char[] a, int index, int start)</td>
<td style="text-align:center">返回 char数组的给定索引之前的代码点，其中只能使用 index大于或等于 start数组元素。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointBefore(java.lang.CharSequence,int)" target="_blank">codePointBefore​</a>(CharSequence seq, int index)</td>
<td style="text-align:center">返回 CharSequence的给定索引之前的代码点。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointCount(char%5B%5D,int,int)" target="_blank">codePointCount​</a>(char[] a, int offset, int count)</td>
<td style="text-align:center">返回 char数组参数的子数组中的Unicode代码点数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointCount(java.lang.CharSequence,int,int)" target="_blank">codePointCount​</a>(CharSequence seq, int beginIndex, int endIndex)</td>
<td style="text-align:center">返回指定char序列的文本范围内的Unicode代码点数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#codePointOf(java.lang.String)" target="_blank">codePointOf​</a>(String name)</td>
<td style="text-align:center">返回给定Unicode字符名称指定的Unicode字符的代码点值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#compare(char,char)" target="_blank">compare​</a>(char x, char y)</td>
<td style="text-align:center">以数字方式比较两个 char值。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#compareTo(java.lang.Character)" target="_blank">compareTo​</a>(Character anotherCharacter)</td>
<td style="text-align:center">以数字方式比较两个 Character对象。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#digit(char,int)" target="_blank">digit​</a>(char ch, int radix)</td>
<td style="text-align:center">返回指定基数中的字符 ch的数值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#digit(int,int)" target="_blank">digit​</a>(int codePoint, int radix)</td>
<td style="text-align:center">返回指定基数中指定字符（Unicode代码点）的数值。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object obj)</td>
<td style="text-align:center">将此对象与指定的对象进行比较。</td>
</tr>
<tr>
<td style="text-align:center">static char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#forDigit(int,int)" target="_blank">forDigit​</a>(int digit, int radix)</td>
<td style="text-align:center">确定指定基数中特定数字的字符表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static byte</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getDirectionality(char)" target="_blank">getDirectionality​</a>(char ch)</td>
<td style="text-align:center">返回给定字符的Unicode方向性属性。</td>
</tr>
<tr>
<td style="text-align:center">static byte</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getDirectionality(int)" target="_blank">getDirectionality​</a>(int codePoint)</td>
<td style="text-align:center">返回给定字符的Unicode方向性属性（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getName(int)" target="_blank">getName​</a>(int codePoint)</td>
<td style="text-align:center">返回指定字符 codePoint的Unicode名称，如果代码点为 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#UNASSIGNED" target="_blank">unassigned </a>，则返回null。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getNumericValue(char)" target="_blank">getNumericValue​</a>(char ch)</td>
<td style="text-align:center">返回指定的Unicode字符表示的 int值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getNumericValue(int)" target="_blank">getNumericValue​</a>(int codePoint)</td>
<td style="text-align:center">返回指定字符（Unicode代码点）表示的 int值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getType(char)" target="_blank">getType​</a>(char ch)</td>
<td style="text-align:center">返回表示字符常规类别的值。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#getType(int)" target="_blank">getType​</a>(int codePoint)</td>
<td style="text-align:center">返回表示字符常规类别的值。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">返回此Character的哈希码; 等于调用charValue()的结果。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#hashCode(char)" target="_blank">hashCode​</a>(char value)</td>
<td style="text-align:center">返回char值的哈希码; 与Character.hashCode()兼容。</td>
</tr>
<tr>
<td style="text-align:center">static char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#highSurrogate(int)" target="_blank">highSurrogate​</a>(int codePoint)</td>
<td style="text-align:center">返回主导替代（一个 <a href="https://www.unicode.org/glossary/#high_surrogate_code_unit" target="_blank">high surrogate code unit所</a>述的） surrogate pair表示在UTF-16编码指定的补充的字符（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isAlphabetic(int)" target="_blank">isAlphabetic​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否为字母。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isBmpCodePoint(int)" target="_blank">isBmpCodePoint​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否在 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#BMP" target="_blank">Basic Multilingual Plane (BMP)中 </a>。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isDefined(char)" target="_blank">isDefined​</a>(char ch)</td>
<td style="text-align:center">确定是否在Unicode中定义了字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isDefined(int)" target="_blank">isDefined​</a>(int codePoint)</td>
<td style="text-align:center">确定是否在Unicode中定义了字符（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isDigit(char)" target="_blank">isDigit​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否为数字。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isDigit(int)" target="_blank">isDigit​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否为数字。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isHighSurrogate(char)" target="_blank">isHighSurrogate​</a>(char ch)</td>
<td style="text-align:center">确定给定的 char值是否为 <a href="https://www.unicode.org/glossary/#high_surrogate_code_unit" target="_blank">Unicode high-surrogate code unit </a>（也称为 前导代理代码单元 ）。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isIdentifierIgnorable(char)" target="_blank">isIdentifierIgnorable​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否应被视为Java标识符或Unicode标识符中的可忽略字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isIdentifierIgnorable(int)" target="_blank">isIdentifierIgnorable​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否应被视为Java标识符或Unicode标识符中的可忽略字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isIdeographic(int)" target="_blank">isIdeographic​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否为Unicode标准定义的CJKV（中文，日文，韩文和越南文）表意文字。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isISOControl(char)" target="_blank">isISOControl​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否为ISO控制字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isISOControl(int)" target="_blank">isISOControl​</a>(int codePoint)</td>
<td style="text-align:center">确定引用的字符（Unicode代码点）是否为ISO控制字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isJavaIdentifierPart(char)" target="_blank">isJavaIdentifierPart​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否可能是Java标识符的一部分，而不是第一个字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isJavaIdentifierPart(int)" target="_blank">isJavaIdentifierPart​</a>(int codePoint)</td>
<td style="text-align:center">确定字符（Unicode代码点）是否可能是Java标识符的一部分，而不是第一个字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isJavaIdentifierStart(char)" target="_blank">isJavaIdentifierStart​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否允许作为Java标识符中的第一个字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isJavaIdentifierStart(int)" target="_blank">isJavaIdentifierStart​</a>(int codePoint)</td>
<td style="text-align:center">确定字符（Unicode代码点）是否允许作为Java标识符中的第一个字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLetter(char)" target="_blank">isLetter​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否为字母。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLetter(int)" target="_blank">isLetter​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否为字母。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLetterOrDigit(char)" target="_blank">isLetterOrDigit​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是字母还是数字。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLetterOrDigit(int)" target="_blank">isLetterOrDigit​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是字母还是数字。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLowerCase(char)" target="_blank">isLowerCase​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否为小写字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLowerCase(int)" target="_blank">isLowerCase​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否为小写字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isLowSurrogate(char)" target="_blank">isLowSurrogate​</a>(char ch)</td>
<td style="text-align:center">确定给定的 char值是否为 <a href="https://www.unicode.org/glossary/#low_surrogate_code_unit" target="_blank">Unicode low-surrogate code unit </a>（也称为 trailing-surrogate代码单元 ）。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isMirrored(char)" target="_blank">isMirrored​</a>(char ch)</td>
<td style="text-align:center">确定是否根据Unicode规范镜像该字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isMirrored(int)" target="_blank">isMirrored​</a>(int codePoint)</td>
<td style="text-align:center">确定是否根据Unicode规范镜像指定的字符（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSpaceChar(char)" target="_blank">isSpaceChar​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否为Unicode空格字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSpaceChar(int)" target="_blank">isSpaceChar​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否为Unicode空格字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSupplementaryCodePoint(int)" target="_blank">isSupplementaryCodePoint​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否在 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#supplementary" target="_blank">supplementary character范</a>围内。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSurrogate(char)" target="_blank">isSurrogate​</a>(char ch)</td>
<td style="text-align:center">确定给定的 char值是否为Unicode 代理代码单元 。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isSurrogatePair(char,char)" target="_blank">isSurrogatePair​</a>(char high, char low)</td>
<td style="text-align:center">确定指定的 char值对是否为有效 <a href="https://www.unicode.org/glossary/#surrogate_pair" target="_blank">Unicode surrogate pair </a>。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isTitleCase(char)" target="_blank">isTitleCase​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否为标题字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isTitleCase(int)" target="_blank">isTitleCase​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否为标题字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUnicodeIdentifierPart(char)" target="_blank">isUnicodeIdentifierPart​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否可能是Unicode标识符的一部分，而不是第一个字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUnicodeIdentifierPart(int)" target="_blank">isUnicodeIdentifierPart​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否可能是Unicode标识符的一部分，而不是第一个字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUnicodeIdentifierStart(char)" target="_blank">isUnicodeIdentifierStart​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否允许作为Unicode标识符中的第一个字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUnicodeIdentifierStart(int)" target="_blank">isUnicodeIdentifierStart​</a>(int codePoint)</td>
<td style="text-align:center">确定是否允许指定的字符（Unicode代码点）作为Unicode标识符中的第一个字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUpperCase(char)" target="_blank">isUpperCase​</a>(char ch)</td>
<td style="text-align:center">确定指定的字符是否为大写字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isUpperCase(int)" target="_blank">isUpperCase​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的字符（Unicode代码点）是否为大写字符。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isValidCodePoint(int)" target="_blank">isValidCodePoint​</a>(int codePoint)</td>
<td style="text-align:center">确定指定的代码点是否有效 <a href="https://www.unicode.org/glossary/#code_point" target="_blank">Unicode code point value </a>。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(char)" target="_blank">isWhitespace​</a>(char ch)</td>
<td style="text-align:center">根据Java确定指定的字符是否为空格。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int)" target="_blank">isWhitespace​</a>(int codePoint)</td>
<td style="text-align:center">根据Java确定指定的字符（Unicode代码点）是否为空白。</td>
</tr>
<tr>
<td style="text-align:center">static char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#lowSurrogate(int)" target="_blank">lowSurrogate​</a>(int codePoint)</td>
<td style="text-align:center">返回尾随替代（一个 <a href="https://www.unicode.org/glossary/#low_surrogate_code_unit" target="_blank">low surrogate code unit所</a>述的） surrogate pair表示在UTF-16编码指定的补充的字符（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#offsetByCodePoints(char%5B%5D,int,int,int,int)" target="_blank">offsetByCodePoints​</a>(char[] a, int start, int count, int index, int codePointOffset)</td>
<td style="text-align:center">返回给定的索引 char子阵是从给定的偏移 index由 codePointOffset代码点。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#offsetByCodePoints(java.lang.CharSequence,int,int)" target="_blank">offsetByCodePoints​</a>(CharSequence seq, int index, int codePointOffset)</td>
<td style="text-align:center">返回给定char序列中的索引，该索引从给定的 index偏移 codePointOffset代码点。</td>
</tr>
<tr>
<td style="text-align:center">static char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#reverseBytes(char)" target="_blank">reverseBytes​</a>(char ch)</td>
<td style="text-align:center">返回通过反转指定的 char值中的字节顺序获得的值。</td>
</tr>
<tr>
<td style="text-align:center">static char[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toChars(int)" target="_blank">toChars​</a>(int codePoint)</td>
<td style="text-align:center">将指定字符（Unicode代码点）转换为存储在 char数组中的UTF-16表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toChars(int,char%5B%5D,int)" target="_blank">toChars​</a>(int codePoint, char[] dst, int dstIndex)</td>
<td style="text-align:center">将指定字符（Unicode代码点）转换为其UTF-16表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toCodePoint(char,char)" target="_blank">toCodePoint​</a>(char high, char low)</td>
<td style="text-align:center">将指定的代理项对转换为其补充代码点值。</td>
</tr>
<tr>
<td style="text-align:center">static char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toLowerCase(char)" target="_blank">toLowerCase​</a>(char ch)</td>
<td style="text-align:center">使用UnicodeData文件中的大小写映射信息将字符参数转换为小写。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toLowerCase(int)" target="_blank">toLowerCase​</a>(int codePoint)</td>
<td style="text-align:center">使用UnicodeData文件中的大小写映射信息将字符（Unicode代码点）参数转换为小写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">返回表示此 Character值的 String对象。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toString(char)" target="_blank">toString​</a>(char c)</td>
<td style="text-align:center">返回表示指定的 char的 String对象。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toString(int)" target="_blank">toString​</a>(int codePoint)</td>
<td style="text-align:center">返回表示指定字符（Unicode代码点）的 String对象。</td>
</tr>
<tr>
<td style="text-align:center">static char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toTitleCase(char)" target="_blank">toTitleCase​</a>(char ch)</td>
<td style="text-align:center">使用UnicodeData文件中的大小写映射信息将字符参数转换为标题。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toTitleCase(int)" target="_blank">toTitleCase​</a>(int codePoint)</td>
<td style="text-align:center">使用UnicodeData文件中的案例映射信息将字符（Unicode代码点）参数转换为titlecase。</td>
</tr>
<tr>
<td style="text-align:center">static char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toUpperCase(char)" target="_blank">toUpperCase​</a>(char ch)</td>
<td style="text-align:center">使用UnicodeData文件中的大小写映射信息将字符参数转换为大写。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#toUpperCase(int)" target="_blank">toUpperCase​</a>(int codePoint)</td>
<td style="text-align:center">使用UnicodeData文件中的大小写映射信息将字符（Unicode代码点）参数转换为大写。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_character" target="_blank">Character</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#valueOf(char)" target="_blank">valueOf​</a>(char c)</td>
<td style="text-align:center">返回表示指定的 char值的 Character实例。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E()" target="_blank">String(</a>)</td>
<td style="text-align:center">初始化新创建的 String对象，使其表示空字符序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D)" target="_blank">String​</a>(byte[] bytes)</td>
<td style="text-align:center">通过使用平台的默认字符集解码指定的字节数组构造新的 String 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int)" target="_blank">String​</a>(byte[] bytes, int offset, int length)</td>
<td style="text-align:center">通过使用平台的默认字符集解码指定的字节子阵列来构造新的 String 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int,java.lang.String)" target="_blank">String​</a>(byte[] bytes, int offset, int length, String charsetName)</td>
<td style="text-align:center">通过使用指定的字符集解码指定的字节子 String构造新的 String 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,int,int,java.nio.charset.Charset)" target="_blank">String​</a>(byte[] bytes, int offset, int length, Charset charset)</td>
<td style="text-align:center">通过使用指定的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_nio_charset_charset" target="_blank">charset解</a>码指定的字节子String构造新的String 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,java.lang.String)" target="_blank">String​</a>(byte[] bytes, String charsetName)</td>
<td style="text-align:center">构造一个新的String由指定用指定的字节的数组解码<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_nio_charset_charset" target="_blank">charset </a>。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(byte%5B%5D,java.nio.charset.Charset)" target="_blank">String​</a>(byte[] bytes, Charset charset)</td>
<td style="text-align:center">构造一个新的String由指定用指定的字节的数组解码<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_nio_charset_charset" target="_blank">charset </a>。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(char%5B%5D)" target="_blank">String​</a>(char[] value)</td>
<td style="text-align:center">分配新的 String ，使其表示当前包含在字符数组参数中的字符序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(char%5B%5D,int,int)" target="_blank">String​</a>(char[] value, int offset, int count)</td>
<td style="text-align:center">分配一个新的 String ，其中包含字符数组参数的子数组中的字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(int%5B%5D,int,int)" target="_blank">String​</a>(int[] codePoints, int offset, int count)</td>
<td style="text-align:center">分配新的 String ，其中包含 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#unicode" target="_blank">Unicode code point数</a>组参数的子数组中的字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(java.lang.String)" target="_blank">String​</a>(String original)</td>
<td style="text-align:center">初始化新创建的String对象，使其表示与参数相同的字符序列; 换句话说，新创建的字符串是参数字符串的副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(java.lang.StringBuffer)" target="_blank">String​</a>(StringBuffer buffer)</td>
<td style="text-align:center">分配一个新字符串，其中包含当前包含在字符串缓冲区参数中的字符序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#%3Cinit%3E(java.lang.StringBuilder)" target="_blank">String​</a>(StringBuilder builder)</td>
<td style="text-align:center">分配一个新字符串，其中包含当前包含在字符串构建器参数中的字符序列。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">char</th>
<th style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#charAt(int)" target="_blank">charAt​</a>(int index)</th>
<th style="text-align:center">返回指定索引处的 char值。</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_stream_intstream" target="_blank">IntStream</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#chars()" target="_blank">chars(</a>)</td>
<td style="text-align:center">返回 int的流，将此序列中的 char值零扩展。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#codePointAt(int)" target="_blank">codePointAt​</a>(int index)</td>
<td style="text-align:center">返回指定索引处的字符（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#codePointBefore(int)" target="_blank">codePointBefore​</a>(int index)</td>
<td style="text-align:center">返回指定索引之前的字符（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#codePointCount(int,int)" target="_blank">codePointCount​</a>(int beginIndex, int endIndex)</td>
<td style="text-align:center">返回此 String的指定文本范围内的Unicode代码点数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_stream_intstream" target="_blank">IntStream</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#codePoints()" target="_blank">codePoints(</a>)</td>
<td style="text-align:center">返回此序列中的代码点值流。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#compareTo(java.lang.String)" target="_blank">compareTo​</a>(String anotherString)</td>
<td style="text-align:center">按字典顺序比较两个字符串。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#compareToIgnoreCase(java.lang.String)" target="_blank">compareToIgnoreCase​</a>(String str)</td>
<td style="text-align:center">按字典顺序比较两个字符串，忽略大小写差异。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#concat(java.lang.String)" target="_blank">concat​</a>(String str)</td>
<td style="text-align:center">将指定的字符串连接到此字符串的末尾。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#contains(java.lang.CharSequence)" target="_blank">contains​</a>(CharSequence s)</td>
<td style="text-align:center">当且仅当此字符串包含指定的char值序列时，才返回true。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#contentEquals(java.lang.CharSequence)" target="_blank">contentEquals​</a>(CharSequence cs)</td>
<td style="text-align:center">将此字符串与指定的 CharSequence 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#contentEquals(java.lang.StringBuffer)" target="_blank">contentEquals​</a>(StringBuffer sb)</td>
<td style="text-align:center">将此字符串与指定的 StringBuffer 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#copyValueOf(char%5B%5D)" target="_blank">copyValueOf​</a>(char[] data)</td>
<td style="text-align:center">相当于 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char%5B%5D)" target="_blank">valueOf(char[]) </a>。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#copyValueOf(char%5B%5D,int,int)" target="_blank">copyValueOf​</a>(char[] data, int offset, int count)</td>
<td style="text-align:center">相当于 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char%5B%5D,int,int)" target="_blank">valueOf(char[], int, int) </a>。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#endsWith(java.lang.String)" target="_blank">endsWith​</a>(String suffix)</td>
<td style="text-align:center">测试此字符串是否以指定的后缀结尾。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object anObject)</td>
<td style="text-align:center">将此字符串与指定的对象进行比较。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#equalsIgnoreCase(java.lang.String)" target="_blank">equalsIgnoreCase​</a>(String anotherString)</td>
<td style="text-align:center">将此 String与另一个 String比较，忽略了大小写。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#format(java.lang.String,java.lang.Object...)" target="_blank">format​</a>(String format, Object... args)</td>
<td style="text-align:center">使用指定的格式字符串和参数返回格式化字符串。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#format(java.util.Locale,java.lang.String,java.lang.Object...)" target="_blank">format​</a>(Locale l, String format, Object... args)</td>
<td style="text-align:center">使用指定的语言环境，格式字符串和参数返回格式化的字符串。</td>
</tr>
<tr>
<td style="text-align:center">byte[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#getBytes()" target="_blank">getBytes(</a>)</td>
<td style="text-align:center">使用平台的默认字符集将此 String编码为字节序列，将结果存储到新的字节数组中。</td>
</tr>
<tr>
<td style="text-align:center">byte[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#getBytes(java.lang.String)" target="_blank">getBytes​</a>(String charsetName)</td>
<td style="text-align:center">使用命名的字符集将此 String编码为字节序列，将结果存储到新的字节数组中。</td>
</tr>
<tr>
<td style="text-align:center">byte[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#getBytes(java.nio.charset.Charset)" target="_blank">getBytes​</a>(Charset charset)</td>
<td style="text-align:center">使用给定的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_nio_charset_charset" target="_blank">charset将</a>此String编码为字节序列，将结果存储到新的字节数组中。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#getChars(int,int,char%5B%5D,int)" target="_blank">getChars​</a>(int srcBegin, int srcEnd, char[] dst, int dstBegin)</td>
<td style="text-align:center">将此字符串中的字符复制到目标字符数组中。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">返回此字符串的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#indexOf(int)" target="_blank">indexOf​</a>(int ch)</td>
<td style="text-align:center">返回指定字符第一次出现的字符串中的索引。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#indexOf(int,int)" target="_blank">indexOf​</a>(int ch, int fromIndex)</td>
<td style="text-align:center">返回指定字符第一次出现的此字符串中的索引，从指定索引处开始搜索。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#indexOf(java.lang.String)" target="_blank">indexOf​</a>(String str)</td>
<td style="text-align:center">返回指定子字符串第一次出现的字符串中的索引。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#indexOf(java.lang.String,int)" target="_blank">indexOf​</a>(String str, int fromIndex)</td>
<td style="text-align:center">从指定的索引处开始，返回指定子字符串第一次出现的字符串中的索引。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#intern()" target="_blank">intern(</a>)</td>
<td style="text-align:center">返回字符串对象的规范表示。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#isBlank()" target="_blank">isBlank(</a>)</td>
<td style="text-align:center">如果字符串为空或仅包含 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int)" target="_blank">white space代</a>码点，则返回 true ，否则 false 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#isEmpty()" target="_blank">isEmpty(</a>)</td>
<td style="text-align:center">返回 true ，当且仅当， <a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#length()" target="_blank">length()是</a> 0 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#join(java.lang.CharSequence,java.lang.CharSequence...)" target="_blank">join​</a>(CharSequence delimiter, CharSequence... elements)</td>
<td style="text-align:center">返回由 CharSequence elements的副本组成的新String，该副本与指定的 delimiter的副本连接在一起。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#join(java.lang.CharSequence,java.lang.Iterable)" target="_blank">join​</a>(CharSequence delimiter, Iterable&lt;? extends CharSequence&gt; elements)</td>
<td style="text-align:center">返回由 String的副本组成的新 String ，其中 CharSequence elements指定的 delimiter的副本。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lastIndexOf(int)" target="_blank">lastIndexOf​</a>(int ch)</td>
<td style="text-align:center">返回指定字符最后一次出现的字符串中的索引。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lastIndexOf(int,int)" target="_blank">lastIndexOf​</a>(int ch, int fromIndex)</td>
<td style="text-align:center">返回指定字符最后一次出现的字符串中的索引，从指定的索引开始向后搜索。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lastIndexOf(java.lang.String)" target="_blank">lastIndexOf​</a>(String str)</td>
<td style="text-align:center">返回指定子字符串最后一次出现的字符串中的索引。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lastIndexOf(java.lang.String,int)" target="_blank">lastIndexOf​</a>(String str, int fromIndex)</td>
<td style="text-align:center">返回指定子字符串最后一次出现的字符串中的索引，从指定索引开始向后搜索。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#length()" target="_blank">length(</a>)</td>
<td style="text-align:center">返回此字符串的长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_stream_stream" target="_blank">Stream&lt;</a>String&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#lines()" target="_blank">lines(</a>)</td>
<td style="text-align:center">返回从此字符串中提取的行的流，由行终止符分隔。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#matches(java.lang.String)" target="_blank">matches​</a>(String regex)</td>
<td style="text-align:center">判断此字符串是否与给定的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum" target="_blank">regular expression匹</a>配。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#offsetByCodePoints(int,int)" target="_blank">offsetByCodePoints​</a>(int index, int codePointOffset)</td>
<td style="text-align:center">返回此 String中的索引，该索引从给定的 index偏移 codePointOffset代码点。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#regionMatches(boolean,int,java.lang.String,int,int)" target="_blank">regionMatches​</a>(boolean ignoreCase, int toffset, String other, int ooffset, int len)</td>
<td style="text-align:center">测试两个字符串区域是否相等。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#regionMatches(int,java.lang.String,int,int)" target="_blank">regionMatches​</a>(int toffset, String other, int ooffset, int len)</td>
<td style="text-align:center">测试两个字符串区域是否相等。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#repeat(int)" target="_blank">repeat​</a>(int count)</td>
<td style="text-align:center">返回一个字符串，其值为此字符串的串联重复 count次。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#replace(char,char)" target="_blank">replace​</a>(char oldChar, char newChar)</td>
<td style="text-align:center">返回从替换所有出现的导致一个字符串 oldChar在此字符串 newChar 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#replace(java.lang.CharSequence,java.lang.CharSequence)" target="_blank">replace​</a>(CharSequence target, CharSequence replacement)</td>
<td style="text-align:center">将此字符串中与文字目标序列匹配的每个子字符串替换为指定的文字替换序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#replaceAll(java.lang.String,java.lang.String)" target="_blank">replaceAll​</a>(String regex, String replacement)</td>
<td style="text-align:center">将给定替换的给定 <a href="https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum" target="_blank">regular expression匹</a>配的此字符串的每个子字符串替换。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#replaceFirst(java.lang.String,java.lang.String)" target="_blank">replaceFirst​</a>(String regex, String replacement)</td>
<td style="text-align:center">将给定替换的给定 <a href="https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum" target="_blank">regular expression匹</a>配的此字符串的第一个子字符串替换。</td>
</tr>
<tr>
<td style="text-align:center">[String<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank"></a>]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#split(java.lang.String)" target="_blank">split​</a>(String regex)</td>
<td style="text-align:center">将此字符串拆分为给定 <a href="https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum" target="_blank">regular expression的匹</a>配 项 。</td>
</tr>
<tr>
<td style="text-align:center">[String<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank"></a>]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#split(java.lang.String,int)" target="_blank">split​</a>(String regex, int limit)</td>
<td style="text-align:center">将此字符串拆分为给定 <a href="https://www.apiref.com/java11-zh/java.base/java/util/regex/Pattern.html#sum" target="_blank">regular expression的匹</a>配 项 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#startsWith(java.lang.String)" target="_blank">startsWith​</a>(String prefix)</td>
<td style="text-align:center">测试此字符串是否以指定的前缀开头。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#startsWith(java.lang.String,int)" target="_blank">startsWith​</a>(String prefix, int toffset)</td>
<td style="text-align:center">测试从指定索引开始的此字符串的子字符串是否以指定的前缀开头。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#strip()" target="_blank">strip(</a>)</td>
<td style="text-align:center">返回一个字符串，其值为此字符串，并删除了所有前导和尾随 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int)" target="_blank">white space </a>。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#stripLeading()" target="_blank">stripLeading(</a>)</td>
<td style="text-align:center">返回一个字符串，其值为此字符串，并删除了所有前导 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int)" target="_blank">white space </a>。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#stripTrailing()" target="_blank">stripTrailing(</a>)</td>
<td style="text-align:center">返回一个字符串，其值为此字符串，并删除所有尾随 <a href="https://www.apiref.com/java11-zh/java.base/java/lang/Character.html#isWhitespace(int)" target="_blank">white space </a>。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_charsequence" target="_blank">CharSequence</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#subSequence(int,int)" target="_blank">subSequence​</a>(int beginIndex, int endIndex)</td>
<td style="text-align:center">返回作为此序列的子序列的字符序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#substring(int)" target="_blank">substring​</a>(int beginIndex)</td>
<td style="text-align:center">返回一个字符串，该字符串是此字符串的子字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#substring(int,int)" target="_blank">substring​</a>(int beginIndex, int endIndex)</td>
<td style="text-align:center">返回一个字符串，该字符串是此字符串的子字符串。</td>
</tr>
<tr>
<td style="text-align:center">char[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toCharArray()" target="_blank">toCharArray(</a>)</td>
<td style="text-align:center">将此字符串转换为新的字符数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toLowerCase()" target="_blank">toLowerCase(</a>)</td>
<td style="text-align:center">使用默认语言环境的规则将此 String所有字符转换为小写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toLowerCase(java.util.Locale)" target="_blank">toLowerCase​</a>(Locale locale)</td>
<td style="text-align:center">使用给定 Locale的规则将此 String所有字符转换为 Locale 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">这个对象（已经是一个字符串！）</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toUpperCase()" target="_blank">toUpperCase(</a>)</td>
<td style="text-align:center">使用默认语言环境的规则将此 String所有字符转换为大写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#toUpperCase(java.util.Locale)" target="_blank">toUpperCase​</a>(Locale locale)</td>
<td style="text-align:center">使用给定 Locale的规则将此 String所有字符转换为大写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#trim()" target="_blank">trim(</a>)</td>
<td style="text-align:center">返回一个字符串，其值为此字符串，删除了所有前导和尾随空格，其中space被定义为其代码点小于或等于 'U+0020' （空格字符）的任何字符。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(boolean)" target="_blank">valueOf​</a>(boolean b)</td>
<td style="text-align:center">返回 boolean参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char)" target="_blank">valueOf​</a>(char c)</td>
<td style="text-align:center">返回 char参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char%5B%5D)" target="_blank">valueOf​</a>(char[] data)</td>
<td style="text-align:center">返回 char数组参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(char%5B%5D,int,int)" target="_blank">valueOf​</a>(char[] data, int offset, int count)</td>
<td style="text-align:center">返回 char数组参数的特定子数组的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(double)" target="_blank">valueOf​</a>(double d)</td>
<td style="text-align:center">返回 double参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(float)" target="_blank">valueOf​</a>(float f)</td>
<td style="text-align:center">返回 float参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(int)" target="_blank">valueOf​</a>(int i)</td>
<td style="text-align:center">返回 int参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(long)" target="_blank">valueOf​</a>(long l)</td>
<td style="text-align:center">返回 long参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/String.html#valueOf(java.lang.Object)" target="_blank">valueOf​</a>(Object obj)</td>
<td style="text-align:center">返回 Object参数的字符串表示形式。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#%3Cinit%3E()" target="_blank">StringBuilder(</a>)</td>
<td style="text-align:center">构造一个字符串构建器，其中不包含任何字符，初始容量为16个字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#%3Cinit%3E(int)" target="_blank">StringBuilder​</a>(int capacity)</td>
<td style="text-align:center">构造一个字符串构建器，其中没有字符，并且具有 capacity参数指定的初始容量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#%3Cinit%3E(java.lang.CharSequence)" target="_blank">StringBuilder​</a>(CharSequence seq)</td>
<td style="text-align:center">构造一个字符串构建器，其中包含与指定的 CharSequence相同的字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#%3Cinit%3E(java.lang.String)" target="_blank">StringBuilder​</a>(String str)</td>
<td style="text-align:center">构造一个初始化为指定字符串内容的字符串构建器。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(boolean)" target="_blank">append​</a>(boolean b)</td>
<td style="text-align:center">将 boolean参数的字符串表示形式追加到序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(char)" target="_blank">append​</a>(char c)</td>
<td style="text-align:center">将 char参数的字符串表示形式追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(char%5B%5D)" target="_blank">append​</a>(char[] str)</td>
<td style="text-align:center">将 char数组参数的字符串表示形式追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(char%5B%5D,int,int)" target="_blank">append​</a>(char[] str, int offset, int len)</td>
<td style="text-align:center">将 char数组参数的子数组的字符串表示形式追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(double)" target="_blank">append​</a>(double d)</td>
<td style="text-align:center">将 double参数的字符串表示形式追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(float)" target="_blank">append​</a>(float f)</td>
<td style="text-align:center">将 float参数的字符串表示形式追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(int)" target="_blank">append​</a>(int i)</td>
<td style="text-align:center">将 int参数的字符串表示形式追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(long)" target="_blank">append​</a>(long lng)</td>
<td style="text-align:center">将 long参数的字符串表示形式追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.CharSequence)" target="_blank">append​</a>(CharSequence s)</td>
<td style="text-align:center">将指定的字符序列追加到此 Appendable 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.CharSequence,int,int)" target="_blank">append​</a>(CharSequence s, int start, int end)</td>
<td style="text-align:center">将指定的 CharSequence序列追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.Object)" target="_blank">append​</a>(Object obj)</td>
<td style="text-align:center">追加 Object参数的字符串表示形式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.String)" target="_blank">append​</a>(String str)</td>
<td style="text-align:center">将指定的字符串追加到此字符序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#append(java.lang.StringBuffer)" target="_blank">append​</a>(StringBuffer sb)</td>
<td style="text-align:center">将指定的 StringBuffer追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#appendCodePoint(int)" target="_blank">appendCodePoint​</a>(int codePoint)</td>
<td style="text-align:center">将 codePoint参数的字符串表示形式追加到此序列。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#capacity()" target="_blank">capacity(</a>)</td>
<td style="text-align:center">返回当前容量。</td>
</tr>
<tr>
<td style="text-align:center">char</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#charAt(int)" target="_blank">charAt​</a>(int index)</td>
<td style="text-align:center">返回指定索引处的此序列中的 char值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_stream_intstream" target="_blank">IntStream</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#chars()" target="_blank">chars(</a>)</td>
<td style="text-align:center">返回 int的流，对此序列中的 char值进行零扩展。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#codePointAt(int)" target="_blank">codePointAt​</a>(int index)</td>
<td style="text-align:center">返回指定索引处的字符（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#codePointBefore(int)" target="_blank">codePointBefore​</a>(int index)</td>
<td style="text-align:center">返回指定索引之前的字符（Unicode代码点）。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#codePointCount(int,int)" target="_blank">codePointCount​</a>(int beginIndex, int endIndex)</td>
<td style="text-align:center">返回此序列的指定文本范围内的Unicode代码点数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_stream_intstream" target="_blank">IntStream</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#codePoints()" target="_blank">codePoints(</a>)</td>
<td style="text-align:center">返回此序列中的代码点值流。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#compareTo(java.lang.StringBuilder)" target="_blank">compareTo​</a>(StringBuilder another)</td>
<td style="text-align:center">StringBuilder字典顺序比较两个 StringBuilder实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#delete(int,int)" target="_blank">delete​</a>(int start, int end)</td>
<td style="text-align:center">删除此序列的子字符串中的字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#deleteCharAt(int)" target="_blank">deleteCharAt​</a>(int index)</td>
<td style="text-align:center">按此顺序删除指定位置的 char 。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#ensureCapacity(int)" target="_blank">ensureCapacity​</a>(int minimumCapacity)</td>
<td style="text-align:center">确保容量至少等于指定的最小值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#getChars(int,int,char%5B%5D,int)" target="_blank">getChars​</a>(int srcBegin, int srcEnd, char[] dst, int dstBegin)</td>
<td style="text-align:center">将字符从此序列复制到目标字符数组 dst 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#indexOf(java.lang.String)" target="_blank">indexOf​</a>(String str)</td>
<td style="text-align:center">返回指定子字符串第一次出现的字符串中的索引。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#indexOf(java.lang.String,int)" target="_blank">indexOf​</a>(String str, int fromIndex)</td>
<td style="text-align:center">从指定的索引处开始，返回指定子字符串第一次出现的字符串中的索引。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,boolean)" target="_blank">insert​</a>(int offset, boolean b)</td>
<td style="text-align:center">将 boolean参数的字符串表示形式插入此序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,char)" target="_blank">insert​</a>(int offset, char c)</td>
<td style="text-align:center">将 char参数的字符串表示形式插入此序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,char%5B%5D)" target="_blank">insert​</a>(int offset, char[] str)</td>
<td style="text-align:center">将 char数组参数的字符串表示形式插入此序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,char%5B%5D,int,int)" target="_blank">insert​</a>(int index, char[] str, int offset, int len)</td>
<td style="text-align:center">将 str数组参数的子数组的字符串表示形式插入此序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,double)" target="_blank">insert​</a>(int offset, double d)</td>
<td style="text-align:center">将 double参数的字符串表示形式插入此序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,float)" target="_blank">insert​</a>(int offset, float f)</td>
<td style="text-align:center">将 float参数的字符串表示形式插入此序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,int)" target="_blank">insert​</a>(int offset, int i)</td>
<td style="text-align:center">将第二个 int参数的字符串表示形式插入此序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,long)" target="_blank">insert​</a>(int offset, long l)</td>
<td style="text-align:center">将 long参数的字符串表示形式插入此序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,java.lang.CharSequence)" target="_blank">insert​</a>(int dstOffset, CharSequence s)</td>
<td style="text-align:center">将指定的 CharSequence插入此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,java.lang.CharSequence,int,int)" target="_blank">insert​</a>(int dstOffset, CharSequence s, int start, int end)</td>
<td style="text-align:center">将指定的 CharSequence序列插入此序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,java.lang.Object)" target="_blank">insert​</a>(int offset, Object obj)</td>
<td style="text-align:center">将 Object参数的字符串表示形式插入此字符序列中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#insert(int,java.lang.String)" target="_blank">insert​</a>(int offset, String str)</td>
<td style="text-align:center">将字符串插入此字符序列。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#lastIndexOf(java.lang.String)" target="_blank">lastIndexOf​</a>(String str)</td>
<td style="text-align:center">返回指定子字符串最后一次出现的字符串中的索引。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#lastIndexOf(java.lang.String,int)" target="_blank">lastIndexOf​</a>(String str, int fromIndex)</td>
<td style="text-align:center">返回指定子字符串最后一次出现的字符串中的索引，从指定索引开始向后搜索。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#length()" target="_blank">length(</a>)</td>
<td style="text-align:center">返回长度（字符数）。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#offsetByCodePoints(int,int)" target="_blank">offsetByCodePoints​</a>(int index, int codePointOffset)</td>
<td style="text-align:center">返回此序列中的索引，该索引从给定的 index偏移 codePointOffset代码点。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#replace(int,int,java.lang.String)" target="_blank">replace​</a>(int start, int end, String str)</td>
<td style="text-align:center">使用指定的 String的字符替换此序列的子字符串中的字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_stringbuilder" target="_blank">StringBuilder</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#reverse()" target="_blank">reverse(</a>)</td>
<td style="text-align:center">导致此字符序列被序列的反向替换。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#setCharAt(int,char)" target="_blank">setCharAt​</a>(int index, char ch)</td>
<td style="text-align:center">指定索引处的字符设置为 ch 。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#setLength(int)" target="_blank">setLength​</a>(int newLength)</td>
<td style="text-align:center">设置字符序列的长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_charsequence" target="_blank">CharSequence</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#subSequence(int,int)" target="_blank">subSequence​</a>(int start, int end)</td>
<td style="text-align:center">返回一个新的字符序列，它是该序列的子序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#substring(int)" target="_blank">substring​</a>(int start)</td>
<td style="text-align:center">返回一个新的 String ，其中包含此字符序列中当前包含的字符的子序列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#substring(int,int)" target="_blank">substring​</a>(int start, int end)</td>
<td style="text-align:center">返回一个新的 String ，其中包含当前包含在此序列中的字符的子序列。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/lang/StringBuilder.html#trimToSize()" target="_blank">trimToSize(</a>)</td>
<td style="text-align:center">尝试减少用于字符序列的存储空间。</td>
</tr>
</tbody>
</table>
<h1>Collection</h1>
<p>java.util包主要提供了以下三种类型的集合：</p>
<ul>
<li>
<p>List：一种有序列表的集合</p>
</li>
<li>
<p>Set：一种保证没有重复元素的集合</p>
</li>
<li>
<p>Map：一种通过键值（key-value）查找的映射表集合</p>
</li>
</ul>
<p>访问集合总是通过统一的方式——迭代器（Iterator）来实现，它最明显的好处在于无需知道集合内部元素是按什么方式存储的。</p>
<p><img src="https://www.runoob.com/wp-content/uploads/2014/01/2243690-9cd9c896e0d512ed.gif" alt class="align-none" /></p>
<p>HashSet： 无序</p>
<p>LinkedHashSet： 按照插入顺序</p>
<p>TreeSet： 从小到大排序</p>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_arraylist" target="_blank">ArrayList</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#%3Cinit%3E()" target="_blank">ArrayList(</a>)</td>
<td style="text-align:center">构造一个初始容量为10的空列表。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#%3Cinit%3E(int)" target="_blank">ArrayList​</a>(int initialCapacity)</td>
<td style="text-align:center">构造具有指定初始容量的空列表。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#%3Cinit%3E(java.util.Collection)" target="_blank">ArrayList​</a>(Collection&lt;? extends E&gt; c)</td>
<td style="text-align:center">按照集合的迭代器返回的顺序构造一个包含指定集合元素的列表。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#add(int,E)" target="_blank">add​</a>(int index, E element)</td>
<td style="text-align:center">将指定元素插入此列表中的指定位置。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#add(E)" target="_blank">add​</a>(E e)</td>
<td style="text-align:center">将指定的元素追加到此列表的末尾。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#addAll(int,java.util.Collection)" target="_blank">addAll​</a>(int index, Collection&lt;? extends E&gt; c)</td>
<td style="text-align:center">从指定位置开始，将指定集合中的所有元素插入此列表。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#addAll(java.util.Collection)" target="_blank">addAll​</a>(Collection&lt;? extends E&gt; c)</td>
<td style="text-align:center">将指定集合中的所有元素按指定集合的Iterator返回的顺序附加到此列表的末尾。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#clear()" target="_blank">clear(</a>)</td>
<td style="text-align:center">从此列表中删除所有元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#clone()" target="_blank">clone(</a>)</td>
<td style="text-align:center">返回此 ArrayList实例的浅表副本。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#contains(java.lang.Object)" target="_blank">contains​</a>(Object o)</td>
<td style="text-align:center">如果此列表包含指定的元素，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#ensureCapacity(int)" target="_blank">ensureCapacity​</a>(int minCapacity)</td>
<td style="text-align:center">如有必要，增加此 ArrayList实例的容量，以确保它至少可以容纳由minimum capacity参数指定的元素数。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#forEach(java.util.function.Consumer)" target="_blank">forEach​</a>(Consumer&lt;? super E&gt; action)</td>
<td style="text-align:center">对 Iterable每个元素执行给定操作，直到处理 Iterable所有元素或操作引发异常。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_arraylist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#get(int)" target="_blank">get​</a>(int index)</td>
<td style="text-align:center">返回此列表中指定位置的元素。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#indexOf(java.lang.Object)" target="_blank">indexOf​</a>(Object o)</td>
<td style="text-align:center">返回此列表中第一次出现的指定元素的索引，如果此列表不包含该元素，则返回-1。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#isEmpty()" target="_blank">isEmpty(</a>)</td>
<td style="text-align:center">如果此列表不包含任何元素，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_iterator" target="_blank">Iterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#iterator()" target="_blank">iterator(</a>)</td>
<td style="text-align:center">以适当的顺序返回此列表中元素的迭代器。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#lastIndexOf(java.lang.Object)" target="_blank">lastIndexOf​</a>(Object o)</td>
<td style="text-align:center">返回此列表中指定元素最后一次出现的索引，如果此列表不包含该元素，则返回-1。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_listiterator" target="_blank">ListIterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#listIterator()" target="_blank">listIterator(</a>)</td>
<td style="text-align:center">返回此列表中元素的列表迭代器（按适当顺序）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_listiterator" target="_blank">ListIterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#listIterator(int)" target="_blank">listIterator​</a>(int index)</td>
<td style="text-align:center">从列表中的指定位置开始，返回列表中元素的列表迭代器（按正确顺序）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_arraylist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#remove(int)" target="_blank">remove​</a>(int index)</td>
<td style="text-align:center">删除此列表中指定位置的元素。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#remove(java.lang.Object)" target="_blank">remove​</a>(Object o)</td>
<td style="text-align:center">从该列表中删除指定元素的第一个匹配项（如果存在）。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#removeAll(java.util.Collection)" target="_blank">removeAll​</a>(Collection&lt;?&gt; c)</td>
<td style="text-align:center">从此列表中删除指定集合中包含的所有元素。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#removeIf(java.util.function.Predicate)" target="_blank">removeIf​</a>(Predicate&lt;? super E&gt; filter)</td>
<td style="text-align:center">删除此集合中满足给定谓词的所有元素。</td>
</tr>
<tr>
<td style="text-align:center">protected void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#removeRange(int,int)" target="_blank">removeRange​</a>(int fromIndex, int toIndex)</td>
<td style="text-align:center">从此列表中删除索引介于 fromIndex （含）和 toIndex （独占）之间的所有元素。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#retainAll(java.util.Collection)" target="_blank">retainAll​</a>(Collection&lt;?&gt; c)</td>
<td style="text-align:center">仅保留此列表中包含在指定集合中的元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_arraylist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#set(int,E)" target="_blank">set​</a>(int index, E element)</td>
<td style="text-align:center">用指定的元素替换此列表中指定位置的元素。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#size()" target="_blank">size(</a>)</td>
<td style="text-align:center">返回此列表中的元素数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_spliterator" target="_blank">Spliterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#spliterator()" target="_blank">spliterator(</a>)</td>
<td style="text-align:center">在此列表中的元素上创建<a href="https://www.apiref.com/java11-zh/java.base/java/util/Spliterator.html#binding" target="_blank">late-binding和</a>故障快速 Spliterator 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_list" target="_blank">List&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#subList(int,int)" target="_blank">subList​</a>(int fromIndex, int toIndex)</td>
<td style="text-align:center">返回指定的 fromIndex （包含）和 toIndex （不包括）之间的此列表部分的视图。</td>
</tr>
<tr>
<td style="text-align:center">[Object<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank"></a>]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#toArray()" target="_blank">toArray(</a>)</td>
<td style="text-align:center">以适当的顺序（从第一个元素到最后一个元素）返回包含此列表中所有元素的数组。</td>
</tr>
<tr>
<td style="text-align:center"> T[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#toArray(T%5B%5D)" target="_blank">toArray​</a>(T[] a)</td>
<td style="text-align:center">以适当的顺序返回包含此列表中所有元素的数组（从第一个元素到最后一个元素）; 返回数组的运行时类型是指定数组的运行时类型。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/ArrayList.html#trimToSize()" target="_blank">trimToSize(</a>)</td>
<td style="text-align:center">将此 ArrayList实例的容量调整为列表的当前大小。</td>
</tr>
</tbody>
</table>
<h2>LinkedList</h2>
<p>public class <strong>LinkedList</strong><br />
extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_abstractsequentiallist" target="_blank">AbstractSequentialList</a><br />
implements List, Deque, Cloneable, Serializable</p>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#%3Cinit%3E()" target="_blank">LinkedList(</a>)</td>
<td style="text-align:center">构造一个空列表。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#%3Cinit%3E(java.util.Collection)" target="_blank">LinkedList​</a>(Collection&lt;? extends E&gt; c)</td>
<td style="text-align:center">按照集合的迭代器返回的顺序构造一个包含指定集合元素的列表。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#add(int,E)" target="_blank">add​</a>(int index, E element)</td>
<td style="text-align:center">将指定元素插入此列表中的指定位置。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#add(E)" target="_blank">add​</a>(E e)</td>
<td style="text-align:center">将指定的元素追加到此列表的末尾。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#addAll(int,java.util.Collection)" target="_blank">addAll​</a>(int index, Collection&lt;? extends E&gt; c)</td>
<td style="text-align:center">从指定位置开始，将指定集合中的所有元素插入此列表。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#addAll(java.util.Collection)" target="_blank">addAll​</a>(Collection&lt;? extends E&gt; c)</td>
<td style="text-align:center">将指定集合中的所有元素按指定集合的迭代器返回的顺序附加到此列表的末尾。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#addFirst(E)" target="_blank">addFirst​</a>(E e)</td>
<td style="text-align:center">在此列表的开头插入指定的元素。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#addLast(E)" target="_blank">addLast​</a>(E e)</td>
<td style="text-align:center">将指定的元素追加到此列表的末尾。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#clear()" target="_blank">clear(</a>)</td>
<td style="text-align:center">从此列表中删除所有元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#clone()" target="_blank">clone(</a>)</td>
<td style="text-align:center">返回此 LinkedList的浅表副本。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#contains(java.lang.Object)" target="_blank">contains​</a>(Object o)</td>
<td style="text-align:center">如果此列表包含指定的元素，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_iterator" target="_blank">Iterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#descendingIterator()" target="_blank">descendingIterator(</a>)</td>
<td style="text-align:center">以相反的顺序返回此双端队列中元素的迭代器。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#element()" target="_blank">element(</a>)</td>
<td style="text-align:center">检索但不删除此列表的头部（第一个元素）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#get(int)" target="_blank">get​</a>(int index)</td>
<td style="text-align:center">返回此列表中指定位置的元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#getFirst()" target="_blank">getFirst(</a>)</td>
<td style="text-align:center">返回此列表中的第一个元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#getLast()" target="_blank">getLast(</a>)</td>
<td style="text-align:center">返回此列表中的最后一个元素。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#indexOf(java.lang.Object)" target="_blank">indexOf​</a>(Object o)</td>
<td style="text-align:center">返回此列表中第一次出现的指定元素的索引，如果此列表不包含该元素，则返回-1。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#lastIndexOf(java.lang.Object)" target="_blank">lastIndexOf​</a>(Object o)</td>
<td style="text-align:center">返回此列表中指定元素最后一次出现的索引，如果此列表不包含该元素，则返回-1。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_listiterator" target="_blank">ListIterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#listIterator(int)" target="_blank">listIterator​</a>(int index)</td>
<td style="text-align:center">从列表中的指定位置开始，返回此列表中元素的列表迭代器（按正确顺序）。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#offer(E)" target="_blank">offer​</a>(E e)</td>
<td style="text-align:center">将指定的元素添加为此列表的尾部（最后一个元素）。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#offerFirst(E)" target="_blank">offerFirst​</a>(E e)</td>
<td style="text-align:center">在此列表的前面插入指定的元素。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#offerLast(E)" target="_blank">offerLast​</a>(E e)</td>
<td style="text-align:center">在此列表的末尾插入指定的元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#peek()" target="_blank">peek(</a>)</td>
<td style="text-align:center">检索但不删除此列表的头部（第一个元素）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#peekFirst()" target="_blank">peekFirst(</a>)</td>
<td style="text-align:center">检索但不删除此列表的第一个元素，如果此列表为空，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#peekLast()" target="_blank">peekLast(</a>)</td>
<td style="text-align:center">检索但不删除此列表的最后一个元素，如果此列表为空，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#poll()" target="_blank">poll(</a>)</td>
<td style="text-align:center">检索并删除此列表的头部（第一个元素）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#pollFirst()" target="_blank">pollFirst(</a>)</td>
<td style="text-align:center">检索并删除此列表的第一个元素，如果此列表为空，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#pollLast()" target="_blank">pollLast(</a>)</td>
<td style="text-align:center">检索并删除此列表的最后一个元素，如果此列表为空，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#pop()" target="_blank">pop(</a>)</td>
<td style="text-align:center">弹出此列表所代表的堆栈中的元素。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#push(E)" target="_blank">push​</a>(E e)</td>
<td style="text-align:center">将元素推送到此列表所表示的堆栈上。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#remove()" target="_blank">remove(</a>)</td>
<td style="text-align:center">检索并删除此列表的头部（第一个元素）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#remove(int)" target="_blank">remove​</a>(int index)</td>
<td style="text-align:center">删除此列表中指定位置的元素。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#remove(java.lang.Object)" target="_blank">remove​</a>(Object o)</td>
<td style="text-align:center">从该列表中删除指定元素的第一个匹配项（如果存在）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#removeFirst()" target="_blank">removeFirst(</a>)</td>
<td style="text-align:center">从此列表中删除并返回第一个元素。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#removeFirstOccurrence(java.lang.Object)" target="_blank">removeFirstOccurrence​</a>(Object o)</td>
<td style="text-align:center">删除此列表中第一次出现的指定元素（从头到尾遍历列表时）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#removeLast()" target="_blank">removeLast(</a>)</td>
<td style="text-align:center">从此列表中删除并返回最后一个元素。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#removeLastOccurrence(java.lang.Object)" target="_blank">removeLastOccurrence​</a>(Object o)</td>
<td style="text-align:center">删除此列表中最后一次出现的指定元素（从头到尾遍历列表时）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedlist" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#set(int,E)" target="_blank">set​</a>(int index, E element)</td>
<td style="text-align:center">用指定的元素替换此列表中指定位置的元素。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#size()" target="_blank">size(</a>)</td>
<td style="text-align:center">返回此列表中的元素数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_spliterator" target="_blank">Spliterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#spliterator()" target="_blank">spliterator(</a>)</td>
<td style="text-align:center">在此列表中的元素上创建<a href="https://www.apiref.com/java11-zh/java.base/java/util/Spliterator.html#binding" target="_blank">late-binding和</a>故障快速 Spliterator 。</td>
</tr>
<tr>
<td style="text-align:center">[Object<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank"></a>]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#toArray()" target="_blank">toArray(</a>)</td>
<td style="text-align:center">以适当的顺序（从第一个元素到最后一个元素）返回包含此列表中所有元素的数组。</td>
</tr>
<tr>
<td style="text-align:center"> T[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedList.html#toArray(T%5B%5D)" target="_blank">toArray​</a>(T[] a)</td>
<td style="text-align:center">以适当的顺序返回包含此列表中所有元素的数组（从第一个元素到最后一个元素）; 返回数组的运行时类型是指定数组的运行时类型。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashset" target="_blank">HashSet</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#%3Cinit%3E()" target="_blank">HashSet(</a>)</td>
<td style="text-align:center">构造一个新的空集; 支持HashMap实例具有默认初始容量（16）和加载因子（0.75）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#%3Cinit%3E(int)" target="_blank">HashSet​</a>(int initialCapacity)</td>
<td style="text-align:center">构造一个新的空集; 支持HashMap实例具有指定的初始容量和默认加载因子（0.75）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#%3Cinit%3E(int,float)" target="_blank">HashSet​</a>(int initialCapacity, float loadFactor)</td>
<td style="text-align:center">构造一个新的空集; 支持HashMap实例具有指定的初始容量和指定的加载因子。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#%3Cinit%3E(java.util.Collection)" target="_blank">HashSet​</a>(Collection&lt;? extends E&gt; c)</td>
<td style="text-align:center">构造一个包含指定集合中元素的新集合。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#add(E)" target="_blank">add​</a>(E e)</td>
<td style="text-align:center">如果指定的元素尚不存在，则将其添加到此集合中。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#clear()" target="_blank">clear(</a>)</td>
<td style="text-align:center">从该集中删除所有元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#clone()" target="_blank">clone(</a>)</td>
<td style="text-align:center">返回此 HashSet实例的浅表副本：未克隆元素本身。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#contains(java.lang.Object)" target="_blank">contains​</a>(Object o)</td>
<td style="text-align:center">如果此set包含指定的元素，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#isEmpty()" target="_blank">isEmpty(</a>)</td>
<td style="text-align:center">如果此集合不包含任何元素，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_iterator" target="_blank">Iterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#iterator()" target="_blank">iterator(</a>)</td>
<td style="text-align:center">返回此set中元素的迭代器。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#remove(java.lang.Object)" target="_blank">remove​</a>(Object o)</td>
<td style="text-align:center">如果存在，则从该集合中移除指定的元素。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#size()" target="_blank">size(</a>)</td>
<td style="text-align:center">返回此集合中的元素数（基数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_spliterator" target="_blank">Spliterator&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashSet.html#spliterator()" target="_blank">spliterator(</a>)</td>
<td style="text-align:center">在此集合中的元素上创建<a href="https://www.apiref.com/java11-zh/java.base/java/util/Spliterator.html#binding" target="_blank">late-binding和</a>失败快速 Spliterator 。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">HashMap</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#%3Cinit%3E()" target="_blank">HashMap(</a>)</td>
<td style="text-align:center">使用默认初始容量（16）和默认加载因子（0.75）构造一个空 HashMap 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#%3Cinit%3E(int)" target="_blank">HashMap​</a>(int initialCapacity)</td>
<td style="text-align:center">使用指定的初始容量和默认加载因子（0.75）构造一个空 HashMap 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#%3Cinit%3E(int,float)" target="_blank">HashMap​</a>(int initialCapacity, float loadFactor)</td>
<td style="text-align:center">使用指定的初始容量和加载因子构造一个空 HashMap 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#%3Cinit%3E(java.util.Map)" target="_blank">HashMap​</a>(Map&lt;? extends K,​? extends V&gt; m)</td>
<td style="text-align:center">构造一个新的 HashMap ，其映射与指定的 Map相同。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#clear()" target="_blank">clear(</a>)</td>
<td style="text-align:center">从此映射中删除所有映射。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#clone()" target="_blank">clone(</a>)</td>
<td style="text-align:center">返回此 HashMap实例的浅表副本：未克隆键和值本身。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#compute(K,java.util.function.BiFunction)" target="_blank">compute​</a>(K key, BiFunction&lt;? super K,​? super V,​? extends V&gt; remappingFunction)</td>
<td style="text-align:center">尝试计算指定键及其当前映射值的映射（如果没有当前映射， null ）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#computeIfAbsent(K,java.util.function.Function)" target="_blank">computeIfAbsent​</a>(K key, Function&lt;? super K,​? extends V&gt; mappingFunction)</td>
<td style="text-align:center">如果指定的键尚未与值关联（或映射到 null ），则尝试使用给定的映射函数计算其值并将其输入此映射，除非 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#computeIfPresent(K,java.util.function.BiFunction)" target="_blank">computeIfPresent​</a>(K key, BiFunction&lt;? super K,​? super V,​? extends V&gt; remappingFunction)</td>
<td style="text-align:center">如果指定键的值存在且为非null，则尝试在给定键及其当前映射值的情况下计算新映射。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#containsKey(java.lang.Object)" target="_blank">containsKey​</a>(Object key)</td>
<td style="text-align:center">如果此映射包含指定键的映射，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#containsValue(java.lang.Object)" target="_blank">containsValue​</a>(Object value)</td>
<td style="text-align:center">如果此映射将一个或多个键映射到指定值，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>Map.Entry&lt;K,​V&gt;&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#entrySet()" target="_blank">entrySet(</a>)</td>
<td style="text-align:center">返回此映射中包含的映射的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set视</a>图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#get(java.lang.Object)" target="_blank">get​</a>(Object key)</td>
<td style="text-align:center">返回指定键映射到的值，如果此映射不包含键的映射，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#isEmpty()" target="_blank">isEmpty(</a>)</td>
<td style="text-align:center">如果此映射不包含键 - 值映射，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>K&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#keySet()" target="_blank">keySet(</a>)</td>
<td style="text-align:center">返回此映射中包含的键的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set视</a>图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#merge(K,V,java.util.function.BiFunction)" target="_blank">merge​</a>(K key, V value, BiFunction&lt;? super V,​? super V,​? extends V&gt; remappingFunction)</td>
<td style="text-align:center">如果指定的键尚未与值关联或与null关联，则将其与给定的非空值关联。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#put(K,V)" target="_blank">put​</a>(K key, V value)</td>
<td style="text-align:center">将指定的值与此映射中的指定键相关联。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#putAll(java.util.Map)" target="_blank">putAll​</a>(Map&lt;? extends K,​? extends V&gt; m)</td>
<td style="text-align:center">将指定映射中的所有映射复制到此映射。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#remove(java.lang.Object)" target="_blank">remove​</a>(Object key)</td>
<td style="text-align:center">从此映射中删除指定键的映射（如果存在）。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#size()" target="_blank">size(</a>)</td>
<td style="text-align:center">返回此映射中键 - 值映射的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection&lt;</a>V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/HashMap.html#values()" target="_blank">values(</a>)</td>
<td style="text-align:center">返回此映射中包含的值的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection视</a>图。</td>
</tr>
</tbody>
</table>
<h2>LinkedHashMap</h2>
<p>public class <strong>Linked<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_hashmap" target="_blank">HashMap</a>&lt;K,​V&gt;</strong><br />
extends HashMap&lt;K,​V&gt;<br />
implements Map&lt;K,​V&gt;</p>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E()" target="_blank">LinkedHashMap(</a>)</td>
<td style="text-align:center">使用默认初始容量（16）和加载因子（0.75）构造一个空的插入排序 LinkedHashMap实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E(int)" target="_blank">LinkedHashMap​</a>(int initialCapacity)</td>
<td style="text-align:center">构造一个具有指定初始容量和默认加载因子（0.75）的空插入排序 LinkedHashMap实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E(int,float)" target="_blank">LinkedHashMap​</a>(int initialCapacity, float loadFactor)</td>
<td style="text-align:center">使用指定的初始容量和加载因子构造一个空的插入排序 LinkedHashMap实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E(int,float,boolean)" target="_blank">LinkedHashMap​</a>(int initialCapacity, float loadFactor, boolean accessOrder)</td>
<td style="text-align:center">使用指定的初始容量，加载因子和排序模式构造一个空的 LinkedHashMap实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#%3Cinit%3E(java.util.Map)" target="_blank">LinkedHashMap​</a>(Map&lt;? extends K,​? extends V&gt; m)</td>
<td style="text-align:center">构造一个插入有序的 LinkedHashMap实例，其实例与指定的映射相同。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#containsValue(java.lang.Object)" target="_blank">containsValue​</a>(Object value)</td>
<td style="text-align:center">如果此映射将一个或多个键映射到指定值，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>Map.Entry&lt;K,​V&gt;&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#entrySet()" target="_blank">entrySet(</a>)</td>
<td style="text-align:center">返回此映射中包含的映射的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set视</a>图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_linkedhashmap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#get(java.lang.Object)" target="_blank">get​</a>(Object key)</td>
<td style="text-align:center">返回指定键映射到的值，如果此映射不包含键的映射，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>K&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#keySet()" target="_blank">keySet(</a>)</td>
<td style="text-align:center">返回此映射中包含的键的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set视</a>图。</td>
</tr>
<tr>
<td style="text-align:center">protected boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#removeEldestEntry(java.util.Map.Entry)" target="_blank">removeEldestEntry​</a>(Map.Entry&lt;K,​V&gt; eldest)</td>
<td style="text-align:center">如果此地图应删除其最 true则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection&lt;</a>V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/LinkedHashMap.html#values()" target="_blank">values(</a>)</td>
<td style="text-align:center">返回此映射中包含的值的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection视</a>图。</td>
</tr>
</tbody>
</table>
<h2><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">TreeMap</a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">构造器</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#%3Cinit%3E()" target="_blank">TreeMap(</a>)</td>
<td style="text-align:center">使用其键的自然顺序构造一个新的空树图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#%3Cinit%3E(java.util.Comparator)" target="_blank">TreeMap​</a>(Comparator&lt;? super K&gt; comparator)</td>
<td style="text-align:center">构造一个新的空树图，根据给定的比较器排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#%3Cinit%3E(java.util.Map)" target="_blank">TreeMap​</a>(Map&lt;? extends K,​? extends V&gt; m)</td>
<td style="text-align:center">构造一个新的树映射，其中包含与给定映射相同的映射，根据其键的 自然顺序排序 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#%3Cinit%3E(java.util.SortedMap)" target="_blank">TreeMap​</a>(SortedMap&lt;K,​? extends V&gt; m)</td>
<td style="text-align:center">构造一个包含相同映射的新树映射，并使用与指定有序映射相同的顺序。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map.entry" target="_blank">Map.Entry&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#ceilingEntry(K)" target="_blank">ceilingEntry​</a>(K key)</td>
<td style="text-align:center">返回与大于或等于给定键的最小键关联的键 - 值映射，如果没有此键，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">K</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#ceilingKey(K)" target="_blank">ceilingKey​</a>(K key)</td>
<td style="text-align:center">返回大于或等于给定键的 null键，如果没有这样的键，则 null 。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#clear()" target="_blank">clear(</a>)</td>
<td style="text-align:center">从此映射中删除所有映射。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#clone()" target="_blank">clone(</a>)</td>
<td style="text-align:center">返回此 TreeMap实例的浅表副本。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#containsKey(java.lang.Object)" target="_blank">containsKey​</a>(Object key)</td>
<td style="text-align:center">如果此映射包含指定键的映射，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#containsValue(java.lang.Object)" target="_blank">containsValue​</a>(Object value)</td>
<td style="text-align:center">如果此映射将一个或多个键映射到指定值，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigableset" target="_blank">NavigableSet&lt;</a>K&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#descendingKeySet()" target="_blank">descendingKeySet(</a>)</td>
<td style="text-align:center">返回此映射中包含的键的反向顺序<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigableset" target="_blank">NavigableSet视</a>图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigablemap" target="_blank">NavigableMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#descendingMap()" target="_blank">descendingMap(</a>)</td>
<td style="text-align:center">返回此映射中包含的映射的逆序视图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>Map.Entry&lt;K,​V&gt;&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#entrySet()" target="_blank">entrySet(</a>)</td>
<td style="text-align:center">返回此映射中包含的映射的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set视</a>图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map.entry" target="_blank">Map.Entry&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#firstEntry()" target="_blank">firstEntry(</a>)</td>
<td style="text-align:center">返回与此映射中的最小键关联的键 - 值映射，如果映射为空，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">K</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#firstKey()" target="_blank">firstKey(</a>)</td>
<td style="text-align:center">返回此映射中当前的第一个（最低）键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map.entry" target="_blank">Map.Entry&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#floorEntry(K)" target="_blank">floorEntry​</a>(K key)</td>
<td style="text-align:center">返回与小于或等于给定键的最大键关联的键 - 值映射，如果没有此键，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">K</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#floorKey(K)" target="_blank">floorKey​</a>(K key)</td>
<td style="text-align:center">返回小于或等于给定键的最大键，如果没有这样的键，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#get(java.lang.Object)" target="_blank">get​</a>(Object key)</td>
<td style="text-align:center">返回指定键映射到的值，如果此映射不包含键的映射，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedmap" target="_blank">SortedMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#headMap(K)" target="_blank">headMap​</a>(K toKey)</td>
<td style="text-align:center">返回此映射的部分视图，其键严格小于 toKey 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigablemap" target="_blank">NavigableMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#headMap(K,boolean)" target="_blank">headMap​</a>(K toKey, boolean inclusive)</td>
<td style="text-align:center">返回此映射的部分视图，其键小于（或等于，如果 inclusive为真） toKey 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map.entry" target="_blank">Map.Entry&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#higherEntry(K)" target="_blank">higherEntry​</a>(K key)</td>
<td style="text-align:center">返回与严格大于给定键的最小键关联的键 - 值映射，如果没有此键，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">K</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#higherKey(K)" target="_blank">higherKey​</a>(K key)</td>
<td style="text-align:center">返回严格大于给定键的最小键，如果没有这样的键，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>K&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#keySet()" target="_blank">keySet(</a>)</td>
<td style="text-align:center">返回此映射中包含的键的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set视</a>图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map.entry" target="_blank">Map.Entry&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#lastEntry()" target="_blank">lastEntry(</a>)</td>
<td style="text-align:center">返回与此映射中的最大键关联的键 - 值映射，如果映射为空，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">K</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#lastKey()" target="_blank">lastKey(</a>)</td>
<td style="text-align:center">返回此映射中当前的最后一个（最高）键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map.entry" target="_blank">Map.Entry&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#lowerEntry(K)" target="_blank">lowerEntry​</a>(K key)</td>
<td style="text-align:center">返回与严格小于给定键的最大键相关联的键 - 值映射，如果没有这样的键，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">K</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#lowerKey(K)" target="_blank">lowerKey​</a>(K key)</td>
<td style="text-align:center">返回严格小于给定键的最大键，如果没有这样键，则返回 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigableset" target="_blank">NavigableSet&lt;</a>K&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#navigableKeySet()" target="_blank">navigableKeySet(</a>)</td>
<td style="text-align:center">返回此映射中包含的键的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigableset" target="_blank">NavigableSet视</a>图。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map.entry" target="_blank">Map.Entry&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#pollFirstEntry()" target="_blank">pollFirstEntry(</a>)</td>
<td style="text-align:center">删除并返回与此映射中的最小键关联的键 - 值映射，如果映射为空，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map.entry" target="_blank">Map.Entry&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#pollLastEntry()" target="_blank">pollLastEntry(</a>)</td>
<td style="text-align:center">删除并返回与此映射中的最大键关联的键 - 值映射，如果映射为空，则 null 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#put(K,V)" target="_blank">put​</a>(K key, V value)</td>
<td style="text-align:center">将指定的值与此映射中的指定键相关联。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#putAll(java.util.Map)" target="_blank">putAll​</a>(Map&lt;? extends K,​? extends V&gt; map)</td>
<td style="text-align:center">将指定映射中的所有映射复制到此映射。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_treemap" target="_blank">V</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#remove(java.lang.Object)" target="_blank">remove​</a>(Object key)</td>
<td style="text-align:center">如果存在，则从此TreeMap中删除此键的映射。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#size()" target="_blank">size(</a>)</td>
<td style="text-align:center">返回此映射中键 - 值映射的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigablemap" target="_blank">NavigableMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#subMap(K,boolean,K,boolean)" target="_blank">subMap​</a>(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive)</td>
<td style="text-align:center">返回此映射部分的视图，其键范围为 fromKey至 toKey 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedmap" target="_blank">SortedMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#subMap(K,K)" target="_blank">subMap​</a>(K fromKey, K toKey)</td>
<td style="text-align:center">返回此映射部分的视图，其键的范围从 fromKey （包括 toKey ）到 toKey （独占）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedmap" target="_blank">SortedMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#tailMap(K)" target="_blank">tailMap​</a>(K fromKey)</td>
<td style="text-align:center">返回此映射的部分视图，其键大于或等于 fromKey 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigablemap" target="_blank">NavigableMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#tailMap(K,boolean)" target="_blank">tailMap​</a>(K fromKey, boolean inclusive)</td>
<td style="text-align:center">返回此映射的部分视图，其键大于（或等于，如果 inclusive为真） fromKey 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection&lt;</a>V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/TreeMap.html#values()" target="_blank">values(</a>)</td>
<td style="text-align:center">返回此映射中包含的值的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection视</a>图。</td>
</tr>
</tbody>
</table>
<h2>Collections</h2>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static  boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#addAll(java.util.Collection,T...)" target="_blank">addAll​</a>(Collection&lt;? super T&gt; c, T... elements)</td>
<td style="text-align:center">将所有指定的元素添加到指定的集合中。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_queue" target="_blank">Queue&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#asLifoQueue(java.util.Deque)" target="_blank">asLifoQueue​</a>(Deque deque)</td>
<td style="text-align:center">返回<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_deque" target="_blank">Deque的</a>视图作为后进先出（ Lifo ） Queue 。</td>
</tr>
<tr>
<td style="text-align:center">static  int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#binarySearch(java.util.List,T)" target="_blank">binarySearch​</a>(List&lt;? extends Comparable&lt;? super T&gt;&gt; list, T key)</td>
<td style="text-align:center">使用二进制搜索算法在指定列表中搜索指定对象。</td>
</tr>
<tr>
<td style="text-align:center">static  int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#binarySearch(java.util.List,T,java.util.Comparator)" target="_blank">binarySearch​</a>(List&lt;? extends T&gt; list, T key, Comparator&lt;? super T&gt; c)</td>
<td style="text-align:center">使用二进制搜索算法在指定列表中搜索指定对象。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedCollection(java.util.Collection,java.lang.Class)" target="_blank">checkedCollection​</a>(Collection c, 类 type)</td>
<td style="text-align:center">返回指定集合的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_list" target="_blank">List&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedList(java.util.List,java.lang.Class)" target="_blank">checkedList​</a>(List list, 类 type)</td>
<td style="text-align:center">返回指定列表的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map" target="_blank">Map&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedMap(java.util.Map,java.lang.Class,java.lang.Class)" target="_blank">checkedMap​</a>(Map&lt;K,​V&gt; m, 类 keyType, 类 valueType)</td>
<td style="text-align:center">返回指定映射的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigablemap" target="_blank">NavigableMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedNavigableMap(java.util.NavigableMap,java.lang.Class,java.lang.Class)" target="_blank">checkedNavigableMap​</a>(NavigableMap&lt;K,​V&gt; m, 类 keyType, 类 valueType)</td>
<td style="text-align:center">返回指定可导航映射的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigableset" target="_blank">NavigableSet&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedNavigableSet(java.util.NavigableSet,java.lang.Class)" target="_blank">checkedNavigableSet​</a>(NavigableSet s, 类 type)</td>
<td style="text-align:center">返回指定可导航集的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_queue" target="_blank">Queue&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedQueue(java.util.Queue,java.lang.Class)" target="_blank">checkedQueue​</a>(Queue queue, 类 type)</td>
<td style="text-align:center">返回指定队列的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedSet(java.util.Set,java.lang.Class)" target="_blank">checkedSet​</a>(Set s, 类 type)</td>
<td style="text-align:center">返回指定集的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedmap" target="_blank">SortedMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedSortedMap(java.util.SortedMap,java.lang.Class,java.lang.Class)" target="_blank">checkedSortedMap​</a>(SortedMap&lt;K,​V&gt; m, 类 keyType, 类 valueType)</td>
<td style="text-align:center">返回指定有序映射的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedset" target="_blank">SortedSet&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#checkedSortedSet(java.util.SortedSet,java.lang.Class)" target="_blank">checkedSortedSet​</a>(SortedSet s, 类 type)</td>
<td style="text-align:center">返回指定有序集的动态类型安全视图。</td>
</tr>
<tr>
<td style="text-align:center">static  void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#copy(java.util.List,java.util.List)" target="_blank">copy​</a>(List&lt;? super T&gt; dest, List&lt;? extends T&gt; src)</td>
<td style="text-align:center">将一个列表中的所有元素复制到另一个列表中。</td>
</tr>
<tr>
<td style="text-align:center">static boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#disjoint(java.util.Collection,java.util.Collection)" target="_blank">disjoint​</a>(Collection c1, Collection c2)</td>
<td style="text-align:center">如果两个指定的集合没有共同的元素，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_enumeration" target="_blank">Enumeration&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyEnumeration()" target="_blank">emptyEnumeration(</a>)</td>
<td style="text-align:center">返回没有元素的枚举。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_iterator" target="_blank">Iterator&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyIterator()" target="_blank">emptyIterator(</a>)</td>
<td style="text-align:center">返回没有元素的迭代器。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_list" target="_blank">List&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyList()" target="_blank">emptyList(</a>)</td>
<td style="text-align:center">返回一个空列表（不可变）。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_listiterator" target="_blank">ListIterator&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyListIterator()" target="_blank">emptyListIterator(</a>)</td>
<td style="text-align:center">返回没有元素的列表迭代器。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map" target="_blank">Map&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyMap()" target="_blank">emptyMap(</a>)</td>
<td style="text-align:center">返回一个空映射（不可变）。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigablemap" target="_blank">NavigableMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyNavigableMap()" target="_blank">emptyNavigableMap(</a>)</td>
<td style="text-align:center">返回一个空的可导航地图（不可变）。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigableset" target="_blank">NavigableSet&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptyNavigableSet()" target="_blank">emptyNavigableSet(</a>)</td>
<td style="text-align:center">返回一个空的可导航集（不可变）。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptySet()" target="_blank">emptySet(</a>)</td>
<td style="text-align:center">返回一个空集（不可变）。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedmap" target="_blank">SortedMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptySortedMap()" target="_blank">emptySortedMap(</a>)</td>
<td style="text-align:center">返回一个空的有序映射（不可变）。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedset" target="_blank">SortedSet&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#emptySortedSet()" target="_blank">emptySortedSet(</a>)</td>
<td style="text-align:center">返回一个空的有序集（不可变）。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_enumeration" target="_blank">Enumeration&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#enumeration(java.util.Collection)" target="_blank">enumeration​</a>(Collection c)</td>
<td style="text-align:center">返回指定集合的枚举。</td>
</tr>
<tr>
<td style="text-align:center">static  void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#fill(java.util.List,T)" target="_blank">fill​</a>(List&lt;? super T&gt; list, T obj)</td>
<td style="text-align:center">用指定的元素替换指定列表的所有元素。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#frequency(java.util.Collection,java.lang.Object)" target="_blank">frequency​</a>(Collection&lt;?&gt; c, Object o)</td>
<td style="text-align:center">返回指定集合中等于指定对象的元素数。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#indexOfSubList(java.util.List,java.util.List)" target="_blank">indexOfSubList​</a>(List source, List target)</td>
<td style="text-align:center">返回指定源列表中第一次出现的指定目标列表的起始位置，如果不存在，则返回-1。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#lastIndexOfSubList(java.util.List,java.util.List)" target="_blank">lastIndexOfSubList​</a>(List source, List target)</td>
<td style="text-align:center">返回指定源列表中指定目标列表最后一次出现的起始位置，如果不存在，则返回-1。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_arraylist" target="_blank">ArrayList&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#list(java.util.Enumeration)" target="_blank">list​</a>(Enumeration e)</td>
<td style="text-align:center">返回一个数组列表，其中包含指定枚举返回的元素，这些元素按枚举返回的顺序排列。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;T extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object </a>&amp; Comparable&lt;? super T&gt;&gt; T</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#max(java.util.Collection)" target="_blank">max​</a>(Collection&lt;? extends T&gt; coll)</td>
<td style="text-align:center">根据元素的 自然顺序返回给定集合的最大元素。</td>
</tr>
<tr>
<td style="text-align:center">static  T</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#max(java.util.Collection,java.util.Comparator)" target="_blank">max​</a>(Collection&lt;? extends T&gt; coll, Comparator&lt;? super T&gt; comp)</td>
<td style="text-align:center">根据指定比较器引发的顺序返回给定集合的最大元素。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;T extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object </a>&amp; Comparable&lt;? super T&gt;&gt; T</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#min(java.util.Collection)" target="_blank">min​</a>(Collection&lt;? extends T&gt; coll)</td>
<td style="text-align:center">根据元素的 自然顺序返回给定集合的最小元素。</td>
</tr>
<tr>
<td style="text-align:center">static  T</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#min(java.util.Collection,java.util.Comparator)" target="_blank">min​</a>(Collection&lt;? extends T&gt; coll, Comparator&lt;? super T&gt; comp)</td>
<td style="text-align:center">根据指定比较器引发的顺序返回给定集合的最小元素。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_list" target="_blank">List&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#nCopies(int,T)" target="_blank">nCopies​</a>(int n, T o)</td>
<td style="text-align:center">返回由指定对象的 n副本组成的不可变列表。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>E&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#newSetFromMap(java.util.Map)" target="_blank">newSetFromMap​</a>(Map&lt;E,​Boolean&gt; map)</td>
<td style="text-align:center">返回由指定映射支持的集合。</td>
</tr>
<tr>
<td style="text-align:center">static  boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#replaceAll(java.util.List,T,T)" target="_blank">replaceAll​</a>(List list, T oldVal, T newVal)</td>
<td style="text-align:center">用列表替换列表中所有出现的指定值。</td>
</tr>
<tr>
<td style="text-align:center">static void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#reverse(java.util.List)" target="_blank">reverse​</a>(List&lt;?&gt; list)</td>
<td style="text-align:center">反转指定列表中元素的顺序。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_comparator" target="_blank">Comparator&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#reverseOrder()" target="_blank">reverseOrder(</a>)</td>
<td style="text-align:center">返回一个比较器， Comparable实现 Comparable接口的对象集合强制执行 自然排序的 Comparable 。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_comparator" target="_blank">Comparator&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#reverseOrder(java.util.Comparator)" target="_blank">reverseOrder​</a>(Comparator cmp)</td>
<td style="text-align:center">返回一个比较器，它强制指定比较器的反向排序。</td>
</tr>
<tr>
<td style="text-align:center">static void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#rotate(java.util.List,int)" target="_blank">rotate​</a>(List&lt;?&gt; list, int distance)</td>
<td style="text-align:center">按指定距离旋转指定列表中的元素。</td>
</tr>
<tr>
<td style="text-align:center">static void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#shuffle(java.util.List)" target="_blank">shuffle​</a>(List&lt;?&gt; list)</td>
<td style="text-align:center">使用默认的随机源随机置换指定的列表。</td>
</tr>
<tr>
<td style="text-align:center">static void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#shuffle(java.util.List,java.util.Random)" target="_blank">shuffle​</a>(List&lt;?&gt; list, Random rnd)</td>
<td style="text-align:center">使用指定的随机源随机置换指定的列表。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#singleton(T)" target="_blank">singleton​</a>(T o)</td>
<td style="text-align:center">返回仅包含指定对象的不可变集。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_list" target="_blank">List&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#singletonList(T)" target="_blank">singletonList​</a>(T o)</td>
<td style="text-align:center">返回仅包含指定对象的不可变列表。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map" target="_blank">Map&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#singletonMap(K,V)" target="_blank">singletonMap​</a>(K key, V value)</td>
<td style="text-align:center">返回不可变映射，仅将指定键映射到指定值。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;T extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_comparable" target="_blank">Comparable&lt;</a>? super T&gt;&gt; void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#sort(java.util.List)" target="_blank">sort​</a>(List list)</td>
<td style="text-align:center">根据其元素的<a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_comparable" target="_blank">natural ordering </a>，将指定列表按升序排序。</td>
</tr>
<tr>
<td style="text-align:center">static  void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#sort(java.util.List,java.util.Comparator)" target="_blank">sort​</a>(List list, Comparator&lt;? super T&gt; c)</td>
<td style="text-align:center">根据指定比较器引发的顺序对指定列表进行排序。</td>
</tr>
<tr>
<td style="text-align:center">static void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#swap(java.util.List,int,int)" target="_blank">swap​</a>(List&lt;?&gt; list, int i, int j)</td>
<td style="text-align:center">交换指定列表中指定位置的元素。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedCollection(java.util.Collection)" target="_blank">synchronizedCollection​</a>(Collection c)</td>
<td style="text-align:center">返回由指定集合支持的同步（线程安全）集合。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_list" target="_blank">List&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedList(java.util.List)" target="_blank">synchronizedList​</a>(List list)</td>
<td style="text-align:center">返回由指定列表支持的同步（线程安全）列表。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map" target="_blank">Map&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedMap(java.util.Map)" target="_blank">synchronizedMap​</a>(Map&lt;K,​V&gt; m)</td>
<td style="text-align:center">返回由指定映射支持的同步（线程安全）映射。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigablemap" target="_blank">NavigableMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedNavigableMap(java.util.NavigableMap)" target="_blank">synchronizedNavigableMap​</a>(NavigableMap&lt;K,​V&gt; m)</td>
<td style="text-align:center">返回由指定的可导航映射支持的同步（线程安全）可导航映射。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigableset" target="_blank">NavigableSet&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedNavigableSet(java.util.NavigableSet)" target="_blank">synchronizedNavigableSet​</a>(NavigableSet s)</td>
<td style="text-align:center">返回由指定的可导航集支持的同步（线程安全）可导航集。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedSet(java.util.Set)" target="_blank">synchronizedSet​</a>(Set s)</td>
<td style="text-align:center">返回由指定集支持的同步（线程安全）集。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedmap" target="_blank">SortedMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedSortedMap(java.util.SortedMap)" target="_blank">synchronizedSortedMap​</a>(SortedMap&lt;K,​V&gt; m)</td>
<td style="text-align:center">返回由指定的有序映射支持的同步（线程安全）有序映射。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedset" target="_blank">SortedSet&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#synchronizedSortedSet(java.util.SortedSet)" target="_blank">synchronizedSortedSet​</a>(SortedSet s)</td>
<td style="text-align:center">返回由指定有序集支持的同步（线程安全）有序集。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_collection" target="_blank">Collection&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableCollection(java.util.Collection)" target="_blank">unmodifiableCollection​</a>(Collection&lt;? extends T&gt; c)</td>
<td style="text-align:center">返回指定集合的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview" target="_blank">unmodifiable view </a>。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_list" target="_blank">List&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableList(java.util.List)" target="_blank">unmodifiableList​</a>(List&lt;? extends T&gt; list)</td>
<td style="text-align:center">返回指定列表的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview" target="_blank">unmodifiable view </a>。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map" target="_blank">Map&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableMap(java.util.Map)" target="_blank">unmodifiableMap​</a>(Map&lt;? extends K,​? extends V&gt; m)</td>
<td style="text-align:center">返回指定映射的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview" target="_blank">unmodifiable view </a>。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigablemap" target="_blank">NavigableMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableNavigableMap(java.util.NavigableMap)" target="_blank">unmodifiableNavigableMap​</a>(NavigableMap&lt;K,​? extends V&gt; m)</td>
<td style="text-align:center">返回指定的可导航地图的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview" target="_blank">unmodifiable view </a>。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_navigableset" target="_blank">NavigableSet&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableNavigableSet(java.util.NavigableSet)" target="_blank">unmodifiableNavigableSet​</a>(NavigableSet s)</td>
<td style="text-align:center">返回指定的可导航集的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview" target="_blank">unmodifiable view </a>。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableSet(java.util.Set)" target="_blank">unmodifiableSet​</a>(Set&lt;? extends T&gt; s)</td>
<td style="text-align:center">返回指定集的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview" target="_blank">unmodifiable view </a>。</td>
</tr>
<tr>
<td style="text-align:center">static &lt;K,​V&gt; <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedmap" target="_blank">SortedMap&lt;</a>K,​V&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableSortedMap(java.util.SortedMap)" target="_blank">unmodifiableSortedMap​</a>(SortedMap&lt;K,​? extends V&gt; m)</td>
<td style="text-align:center">返回指定有序映射的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview" target="_blank">unmodifiable view </a>。</td>
</tr>
<tr>
<td style="text-align:center">static  <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_sortedset" target="_blank">SortedSet&lt;</a>T&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Collections.html#unmodifiableSortedSet(java.util.SortedSet)" target="_blank">unmodifiableSortedSet​</a>(SortedSet s)</td>
<td style="text-align:center">返回指定有序集的 <a href="https://www.apiref.com/java11-zh/java.base/java/util/Collection.html#unmodview" target="_blank">unmodifiable view </a>。</td>
</tr>
</tbody>
</table>
<h2>Iterator</h2>
<p><strong>public interface Iterator</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Iterator.html#forEachRemaining(java.util.function.Consumer)" target="_blank">forEachRemaining​</a>(Consumer&lt;? super E&gt; action)</td>
<td style="text-align:center">对每个剩余元素执行给定操作，直到处理完所有元素或操作引发异常。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Iterator.html#hasNext()" target="_blank">hasNext(</a>)</td>
<td style="text-align:center">如果迭代具有更多元素，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_iterator" target="_blank">E</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Iterator.html#next()" target="_blank">next(</a>)</td>
<td style="text-align:center">返回迭代中的下一个元素。</td>
</tr>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/util/Iterator.html#remove()" target="_blank">remove(</a>)</td>
<td style="text-align:center">从底层集合中移除此迭代器返回的最后一个元素（可选操作）。</td>
</tr>
</tbody>
</table>
<p>Iterator实现</p>
<pre data-syntax="java"><code class="lang-java hljs raw">class ReverseList&lt;T&gt; implements Iterable&lt;T&gt; {

    private List&lt;T&gt; list = new ArrayList&lt;&gt;();

    public void add(T t) {
        list.add(t);
    }

    @Override
    public Iterator&lt;T&gt; iterator() {
        return new ReverseIterator(list.size());
    }

    class ReverseIterator implements Iterator&lt;T&gt; {
        int index;

        ReverseIterator(int index) {
            this.index = index;
        }

        @Override
        public boolean hasNext() {
            return index &gt; 0;
        }

        @Override
        public T next() {
            index--;
            return ReverseList.this.list.get(index);
        }
    }
}

</code></pre>
<h1>java.time</h1>
<table>
<thead>
<tr>
<th style="text-align:center">类</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_clock" target="_blank">Clock</a></td>
<td style="text-align:center">一个时钟，使用时区提供对当前时刻，日期和时间的访问。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center">基于时间的时间量，例如'34.5秒'。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center">时间线上的瞬时点。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdate" target="_blank">LocalDate</a></td>
<td style="text-align:center">ISO- 2007-12-03 ，例如 2007-12-03 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center">ISO- 2007-12-03T10:15:30 ，例如 2007-12-03T10:15:30 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localtime" target="_blank">LocalTime</a></td>
<td style="text-align:center">ISO- 10:15:30 ，例如 10:15:30 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_monthday" target="_blank">MonthDay</a></td>
<td style="text-align:center">ISO- --12-03 - 日，例如 --12-03 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_offsetdatetime" target="_blank">OffsetDateTime</a></td>
<td style="text-align:center">日期时间，与ISO- 2007-12-03T10:15:30+01:00 UTC / Greenwich偏移，例如 2007-12-03T10:15:30+01:00 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_offsettime" target="_blank">OffsetTime</a></td>
<td style="text-align:center">在ISO- 10:15:30+01:00 UTC / Greenwich偏移的时间，例如 10:15:30+01:00 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_period" target="_blank">Period</a></td>
<td style="text-align:center">ISO-8601日历系统中基于日期的时间量，例如“2年，3个月和4天”。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_year" target="_blank">Year</a></td>
<td style="text-align:center">ISO- 2007 ，例如 2007 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_yearmonth" target="_blank">YearMonth</a></td>
<td style="text-align:center">ISO- 2007-12 ，例如 2007-12 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center">带有ISO- 2007-12-03T10:15:30+01:00 Europe/Paris ，例如 2007-12-03T10:15:30+01:00 Europe/Paris 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneid" target="_blank">ZoneId</a></td>
<td style="text-align:center">时区ID，例如 Europe/Paris 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneoffset" target="_blank">ZoneOffset</a></td>
<td style="text-align:center">与格林威治/ UTC的时区偏移，例如 +02:00 。</td>
</tr>
</tbody>
</table>
<p>Month的范围用1~12表示1月到12月；</p>
<p>Week的范围用1~7表示周一到周日。</p>
<p>ISO 8601规定的日期和时间分隔符是T。标准格式如下：</p>
<ul>
<li>
<p>日期：yyyy-MM-dd</p>
</li>
<li>
<p>时间：HH:mm:ss</p>
</li>
<li>
<p>带毫秒的时间：HH:mm:ss.SSS</p>
</li>
<li>
<p>日期和时间：yyyy-MM-dd'T'HH:mm:ss</p>
</li>
<li>
<p>带毫秒的日期和时间：yyyy-MM-dd'T'HH:mm:ss.SSS</p>
</li>
</ul>
<h2>LocalDateTime</h2>
<p>public final class <strong>LocalDateTime</strong><br />
extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a><br />
implements Temporal, TemporalAdjuster, ChronoLocalDateTime, Serializable</p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporal" target="_blank">Temporal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#adjustInto(java.time.temporal.Temporal)" target="_blank">adjustInto​</a>(Temporal temporal)</td>
<td style="text-align:center">调整指定的时态对象以使其具有与此对象相同的日期和时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_offsetdatetime" target="_blank">OffsetDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#atOffset(java.time.ZoneOffset)" target="_blank">atOffset​</a>(ZoneOffset offset)</td>
<td style="text-align:center">将此日期时间与偏移量组合以创建 OffsetDateTime 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#atZone(java.time.ZoneId)" target="_blank">atZone​</a>(ZoneId zone)</td>
<td style="text-align:center">将此日期时间与时区组合以创建 ZonedDateTime 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#compareTo(java.time.chrono.ChronoLocalDateTime)" target="_blank">compareTo​</a>(ChronoLocalDateTime&lt;?&gt; other)</td>
<td style="text-align:center">将此日期时间与另一个日期时间进行比较。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object obj)</td>
<td style="text-align:center">检查此日期时间是否等于另一个日期时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#format(java.time.format.DateTimeFormatter)" target="_blank">format​</a>(DateTimeFormatter formatter)</td>
<td style="text-align:center">使用指定的格式化程序格式化此日期时间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#from(java.time.temporal.TemporalAccessor)" target="_blank">from​</a>(TemporalAccessor temporal)</td>
<td style="text-align:center">从时态对象获得 LocalDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#get(java.time.temporal.TemporalField)" target="_blank">get​</a>(TemporalField field)</td>
<td style="text-align:center">从此日期时间获取指定字段的值，如 int 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getDayOfMonth()" target="_blank">getDayOfMonth(</a>)</td>
<td style="text-align:center">获取日期字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_dayofweek" target="_blank">DayOfWeek</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getDayOfWeek()" target="_blank">getDayOfWeek(</a>)</td>
<td style="text-align:center">获取星期几字段，即枚举 DayOfWeek 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getDayOfYear()" target="_blank">getDayOfYear(</a>)</td>
<td style="text-align:center">获取日期字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getHour()" target="_blank">getHour(</a>)</td>
<td style="text-align:center">获取当日时间字段。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getLong(java.time.temporal.TemporalField)" target="_blank">getLong​</a>(TemporalField field)</td>
<td style="text-align:center">从此日期时间获取指定字段的值，作为 long 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getMinute()" target="_blank">getMinute(</a>)</td>
<td style="text-align:center">获取分钟字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_month" target="_blank">Month</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getMonth()" target="_blank">getMonth(</a>)</td>
<td style="text-align:center">使用 Month枚举获取年份字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getMonthValue()" target="_blank">getMonthValue(</a>)</td>
<td style="text-align:center">获取1到12之间的月份字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getNano()" target="_blank">getNano(</a>)</td>
<td style="text-align:center">获取纳秒级字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getSecond()" target="_blank">getSecond(</a>)</td>
<td style="text-align:center">获取第二分钟字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#getYear()" target="_blank">getYear(</a>)</td>
<td style="text-align:center">获取年份字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">此日期时间的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isAfter(java.time.chrono.ChronoLocalDateTime)" target="_blank">isAfter​</a>(ChronoLocalDateTime&lt;?&gt; other)</td>
<td style="text-align:center">检查此日期时间是否在指定的日期时间之后。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isBefore(java.time.chrono.ChronoLocalDateTime)" target="_blank">isBefore​</a>(ChronoLocalDateTime&lt;?&gt; other)</td>
<td style="text-align:center">检查此日期时间是否在指定的日期时间之前。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isEqual(java.time.chrono.ChronoLocalDateTime)" target="_blank">isEqual​</a>(ChronoLocalDateTime&lt;?&gt; other)</td>
<td style="text-align:center">检查此日期时间是否等于指定的日期时间。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isSupported(java.time.temporal.TemporalField)" target="_blank">isSupported​</a>(TemporalField field)</td>
<td style="text-align:center">检查是否支持指定的字段。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#isSupported(java.time.temporal.TemporalUnit)" target="_blank">isSupported​</a>(TemporalUnit unit)</td>
<td style="text-align:center">检查指定的单元是否受支持。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minus(long,java.time.temporal.TemporalUnit)" target="_blank">minus​</a>(long amountToSubtract, TemporalUnit unit)</td>
<td style="text-align:center">返回此日期时间的副本，并减去指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minus(java.time.temporal.TemporalAmount)" target="_blank">minus​</a>(TemporalAmount amountToSubtract)</td>
<td style="text-align:center">返回此日期时间的副本，并减去指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusDays(long)" target="_blank">minusDays​</a>(long days)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并减去指定的天数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusHours(long)" target="_blank">minusHours​</a>(long hours)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并减去指定的小时数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusMinutes(long)" target="_blank">minusMinutes​</a>(long minutes)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并减去指定的分钟数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusMonths(long)" target="_blank">minusMonths​</a>(long months)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并减去指定的月数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusNanos(long)" target="_blank">minusNanos​</a>(long nanos)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并减去指定的纳秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusSeconds(long)" target="_blank">minusSeconds​</a>(long seconds)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并减去指定的秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusWeeks(long)" target="_blank">minusWeeks​</a>(long weeks)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并减去指定的周数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#minusYears(long)" target="_blank">minusYears​</a>(long years)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并减去指定的年数。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#now()" target="_blank">now(</a>)</td>
<td style="text-align:center">从默认时区中的系统时钟获取当前日期时间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#now(java.time.Clock)" target="_blank">now​</a>(Clock clock)</td>
<td style="text-align:center">从指定的时钟获得当前日期时间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#now(java.time.ZoneId)" target="_blank">now​</a>(ZoneId zone)</td>
<td style="text-align:center">从指定时区的系统时钟获取当前日期时间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,int,int,int,int)" target="_blank">of​</a>(int year, int month, int dayOfMonth, int hour, int minute)</td>
<td style="text-align:center">从年，月，日，小时和分钟获得 LocalDateTime的实例，将第二个和纳秒设置为零。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,int,int,int,int,int)" target="_blank">of​</a>(int year, int month, int dayOfMonth, int hour, int minute, int second)</td>
<td style="text-align:center">从年，月，日，小时，分钟和秒获得 LocalDateTime的实例，将纳秒设置为零。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,int,int,int,int,int,int)" target="_blank">of​</a>(int year, int month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond)</td>
<td style="text-align:center">从年，月，日，小时，分钟，秒和纳秒获得 LocalDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,java.time.Month,int,int,int)" target="_blank">of​</a>(int year, Month month, int dayOfMonth, int hour, int minute)</td>
<td style="text-align:center">从年，月，日，小时和分钟获得 LocalDateTime的实例，将第二个和纳秒设置为零。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,java.time.Month,int,int,int,int)" target="_blank">of​</a>(int year, Month month, int dayOfMonth, int hour, int minute, int second)</td>
<td style="text-align:center">从年，月，日，小时，分钟和秒获得 LocalDateTime的实例，将纳秒设置为零。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(int,java.time.Month,int,int,int,int,int)" target="_blank">of​</a>(int year, Month month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond)</td>
<td style="text-align:center">从年，月，日，小时，分钟，秒和纳秒获得 LocalDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#of(java.time.LocalDate,java.time.LocalTime)" target="_blank">of​</a>(LocalDate date, LocalTime time)</td>
<td style="text-align:center">从日期和时间获得 LocalDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#ofEpochSecond(long,int,java.time.ZoneOffset)" target="_blank">ofEpochSecond​</a>(long epochSecond, int nanoOfSecond, ZoneOffset offset)</td>
<td style="text-align:center">使用1970-01-01T00：00：00Z时代的秒数获得 LocalDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#ofInstant(java.time.Instant,java.time.ZoneId)" target="_blank">ofInstant​</a>(Instant instant, ZoneId zone)</td>
<td style="text-align:center">从 Instant和区域ID获取 LocalDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#parse(java.lang.CharSequence)" target="_blank">parse​</a>(CharSequence text)</td>
<td style="text-align:center">从文本字符串（如 2007-12-03T10:15:30获取 LocalDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#parse(java.lang.CharSequence,java.time.format.DateTimeFormatter)" target="_blank">parse​</a>(CharSequence text, DateTimeFormatter formatter)</td>
<td style="text-align:center">使用特定格式化程序从文本字符串中获取 LocalDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plus(long,java.time.temporal.TemporalUnit)" target="_blank">plus​</a>(long amountToAdd, TemporalUnit unit)</td>
<td style="text-align:center">返回此日期时间的副本，并添加指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plus(java.time.temporal.TemporalAmount)" target="_blank">plus​</a>(TemporalAmount amountToAdd)</td>
<td style="text-align:center">返回此日期时间的副本，并添加指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusDays(long)" target="_blank">plusDays​</a>(long days)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并添加指定的天数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusHours(long)" target="_blank">plusHours​</a>(long hours)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并添加指定的小时数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusMinutes(long)" target="_blank">plusMinutes​</a>(long minutes)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并添加指定的分钟数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusMonths(long)" target="_blank">plusMonths​</a>(long months)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并添加指定的月份数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusNanos(long)" target="_blank">plusNanos​</a>(long nanos)</td>
<td style="text-align:center">返回此 LocalDateTime的副本， LocalDateTime添加了指定的纳秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusSeconds(long)" target="_blank">plusSeconds​</a>(long seconds)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并添加指定的秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusWeeks(long)" target="_blank">plusWeeks​</a>(long weeks)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并添加指定的周数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#plusYears(long)" target="_blank">plusYears​</a>(long years)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并添加指定的年数。</td>
</tr>
<tr>
<td style="text-align:center"> R</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#query(java.time.temporal.TemporalQuery)" target="_blank">query​</a>(TemporalQuery query)</td>
<td style="text-align:center">使用指定的查询查询此日期时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_valuerange" target="_blank">ValueRange</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#range(java.time.temporal.TemporalField)" target="_blank">range​</a>(TemporalField field)</td>
<td style="text-align:center">获取指定字段的有效值范围。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdate" target="_blank">LocalDate</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#toLocalDate()" target="_blank">toLocalDate(</a>)</td>
<td style="text-align:center">获取此日期时间的 LocalDate部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localtime" target="_blank">LocalTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#toLocalTime()" target="_blank">toLocalTime(</a>)</td>
<td style="text-align:center">获取此日期时间的 LocalTime部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">将此日期时间输出为 String ，例如 2007-12-03T10:15:30 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#truncatedTo(java.time.temporal.TemporalUnit)" target="_blank">truncatedTo​</a>(TemporalUnit unit)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并截断时间。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)" target="_blank">until​</a>(Temporal endExclusive, TemporalUnit unit)</td>
<td style="text-align:center">根据指定的单位计算到另一个日期时间的时间量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#with(java.time.temporal.TemporalAdjuster)" target="_blank">with​</a>(TemporalAdjuster adjuster)</td>
<td style="text-align:center">返回此日期时间的调整副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#with(java.time.temporal.TemporalField,long)" target="_blank">with​</a>(TemporalField field, long newValue)</td>
<td style="text-align:center">返回此日期时间的副本，并将指定字段设置为新值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withDayOfMonth(int)" target="_blank">withDayOfMonth​</a>(int dayOfMonth)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并更改日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withDayOfYear(int)" target="_blank">withDayOfYear​</a>(int dayOfYear)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并更改日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withHour(int)" target="_blank">withHour​</a>(int hour)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并更改日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withMinute(int)" target="_blank">withMinute​</a>(int minute)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并更改了分钟。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withMonth(int)" target="_blank">withMonth​</a>(int month)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，其中年份已更改。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withNano(int)" target="_blank">withNano​</a>(int nanoOfSecond)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，其中纳秒级已更改。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withSecond(int)" target="_blank">withSecond​</a>(int second)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并在第二分钟更改。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/LocalDateTime.html#withYear(int)" target="_blank">withYear​</a>(int year)</td>
<td style="text-align:center">返回此 LocalDateTime的副本，并更改年份。</td>
</tr>
</tbody>
</table>
<h2>Instant</h2>
<p>public final class <strong>Instant</strong><br />
extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a><br />
implements Temporal, TemporalAdjuster, Comparable, Serializable</p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporal" target="_blank">Temporal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#adjustInto(java.time.temporal.Temporal)" target="_blank">adjustInto​</a>(Temporal temporal)</td>
<td style="text-align:center">调整指定的时态对象以获得此瞬间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_offsetdatetime" target="_blank">OffsetDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#atOffset(java.time.ZoneOffset)" target="_blank">atOffset​</a>(ZoneOffset offset)</td>
<td style="text-align:center">将此瞬间与偏移量组合以创建 OffsetDateTime 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#atZone(java.time.ZoneId)" target="_blank">atZone​</a>(ZoneId zone)</td>
<td style="text-align:center">将此瞬间与时区相结合以创建 ZonedDateTime 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#compareTo(java.time.Instant)" target="_blank">compareTo​</a>(Instant otherInstant)</td>
<td style="text-align:center">将此瞬间与指定的瞬间进行比较。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object otherInstant)</td>
<td style="text-align:center">检查此瞬间是否等于指定的瞬间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#from(java.time.temporal.TemporalAccessor)" target="_blank">from​</a>(TemporalAccessor temporal)</td>
<td style="text-align:center">从时态对象获得 Instant的实例。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#get(java.time.temporal.TemporalField)" target="_blank">get​</a>(TemporalField field)</td>
<td style="text-align:center">以 int获取此瞬间指定字段的值。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#getEpochSecond()" target="_blank">getEpochSecond(</a>)</td>
<td style="text-align:center">获取1970-01-01T00：00：00Z的Java纪元的秒数。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#getLong(java.time.temporal.TemporalField)" target="_blank">getLong​</a>(TemporalField field)</td>
<td style="text-align:center">从此瞬间获取指定字段的值，如 long 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#getNano()" target="_blank">getNano(</a>)</td>
<td style="text-align:center">从时间线开始，获取从第二个开始的纳秒数。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">返回此瞬间的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#isAfter(java.time.Instant)" target="_blank">isAfter​</a>(Instant otherInstant)</td>
<td style="text-align:center">检查此瞬间是否在指定的瞬间之后。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#isBefore(java.time.Instant)" target="_blank">isBefore​</a>(Instant otherInstant)</td>
<td style="text-align:center">检查此瞬间是否在指定的瞬间之前。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#isSupported(java.time.temporal.TemporalField)" target="_blank">isSupported​</a>(TemporalField field)</td>
<td style="text-align:center">检查是否支持指定的字段。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#isSupported(java.time.temporal.TemporalUnit)" target="_blank">isSupported​</a>(TemporalUnit unit)</td>
<td style="text-align:center">检查指定的单元是否受支持。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minus(long,java.time.temporal.TemporalUnit)" target="_blank">minus​</a>(long amountToSubtract, TemporalUnit unit)</td>
<td style="text-align:center">返回此瞬间的副本，并减去指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minus(java.time.temporal.TemporalAmount)" target="_blank">minus​</a>(TemporalAmount amountToSubtract)</td>
<td style="text-align:center">返回此瞬间的副本，并减去指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minusMillis(long)" target="_blank">minusMillis​</a>(long millisToSubtract)</td>
<td style="text-align:center">返回此瞬间的副本，并减去指定的持续时间（以毫秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minusNanos(long)" target="_blank">minusNanos​</a>(long nanosToSubtract)</td>
<td style="text-align:center">返回此瞬间的副本，并减去指定的持续时间（以纳秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#minusSeconds(long)" target="_blank">minusSeconds​</a>(long secondsToSubtract)</td>
<td style="text-align:center">返回此瞬间的副本，并减去指定的持续时间（以秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#now()" target="_blank">now(</a>)</td>
<td style="text-align:center">从系统时钟获取当前瞬间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#now(java.time.Clock)" target="_blank">now​</a>(Clock clock)</td>
<td style="text-align:center">从指定时钟获取当前时刻。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#ofEpochMilli(long)" target="_blank">ofEpochMilli​</a>(long epochMilli)</td>
<td style="text-align:center">从1970-01-01T00：00：00Z的纪元使用毫秒获得 Instant的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#ofEpochSecond(long)" target="_blank">ofEpochSecond​</a>(long epochSecond)</td>
<td style="text-align:center">使用1970-01-01T00：00：00Z时代的秒数获得 Instant的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#ofEpochSecond(long,long)" target="_blank">ofEpochSecond​</a>(long epochSecond, long nanoAdjustment)</td>
<td style="text-align:center">使用1970-01-01T00：00：00Z的时间秒和秒的纳秒分数获得 Instant的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#parse(java.lang.CharSequence)" target="_blank">parse​</a>(CharSequence text)</td>
<td style="text-align:center">从文本字符串（例如 2007-12-03T10:15:30.00Z获取 Instant的实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plus(long,java.time.temporal.TemporalUnit)" target="_blank">plus​</a>(long amountToAdd, TemporalUnit unit)</td>
<td style="text-align:center">返回此瞬间的副本，并添加指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plus(java.time.temporal.TemporalAmount)" target="_blank">plus​</a>(TemporalAmount amountToAdd)</td>
<td style="text-align:center">返回此瞬间的副本，并添加指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plusMillis(long)" target="_blank">plusMillis​</a>(long millisToAdd)</td>
<td style="text-align:center">返回此瞬间的副本，并添加指定的持续时间（以毫秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plusNanos(long)" target="_blank">plusNanos​</a>(long nanosToAdd)</td>
<td style="text-align:center">返回此瞬间的副本，并添加指定的持续时间（以纳秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#plusSeconds(long)" target="_blank">plusSeconds​</a>(long secondsToAdd)</td>
<td style="text-align:center">返回此瞬间的副本，并添加指定的持续时间（以秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"> R</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#query(java.time.temporal.TemporalQuery)" target="_blank">query​</a>(TemporalQuery query)</td>
<td style="text-align:center">使用指定的查询查询此瞬间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_valuerange" target="_blank">ValueRange</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#range(java.time.temporal.TemporalField)" target="_blank">range​</a>(TemporalField field)</td>
<td style="text-align:center">获取指定字段的有效值范围。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#toEpochMilli()" target="_blank">toEpochMilli(</a>)</td>
<td style="text-align:center">将此瞬间转换为1970-01-01T00：00：00Z时代的毫秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">使用ISO-8601表示的此瞬间的字符串表示。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#truncatedTo(java.time.temporal.TemporalUnit)" target="_blank">truncatedTo​</a>(TemporalUnit unit)</td>
<td style="text-align:center">返回截断到指定单位的此 Instant的副本。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)" target="_blank">until​</a>(Temporal endExclusive, TemporalUnit unit)</td>
<td style="text-align:center">根据指定的单位计算到另一个瞬间的时间量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#with(java.time.temporal.TemporalAdjuster)" target="_blank">with​</a>(TemporalAdjuster adjuster)</td>
<td style="text-align:center">返回此瞬间的调整副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_instant" target="_blank">Instant</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Instant.html#with(java.time.temporal.TemporalField,long)" target="_blank">with​</a>(TemporalField field, long newValue)</td>
<td style="text-align:center">返回此瞬间的副本，并将指定的字段设置为新值。</td>
</tr>
</tbody>
</table>
<h2>Duration</h2>
<p>**public final class Duration<br />
extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a><br />
implements TemporalAmount, Comparable, Serializable**</p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#abs()" target="_blank">abs(</a>)</td>
<td style="text-align:center">返回此持续时间的副本，长度为正。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporal" target="_blank">Temporal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#addTo(java.time.temporal.Temporal)" target="_blank">addTo​</a>(Temporal temporal)</td>
<td style="text-align:center">将此持续时间添加到指定的时态对象。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#between(java.time.temporal.Temporal,java.time.temporal.Temporal)" target="_blank">between​</a>(Temporal startInclusive, Temporal endExclusive)</td>
<td style="text-align:center">获得表示两个时间对象之间的持续时间的 Duration 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#compareTo(java.time.Duration)" target="_blank">compareTo​</a>(Duration otherDuration)</td>
<td style="text-align:center">将此持续时间与指定的 Duration 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#dividedBy(long)" target="_blank">dividedBy​</a>(long divisor)</td>
<td style="text-align:center">返回此持续时间的副本除以指定的值。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#dividedBy(java.time.Duration)" target="_blank">dividedBy​</a>(Duration divisor)</td>
<td style="text-align:center">返回指定持续时间在此持续时间内发生的整数次数。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object otherDuration)</td>
<td style="text-align:center">检查此持续时间是否等于指定的 Duration 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#from(java.time.temporal.TemporalAmount)" target="_blank">from​</a>(TemporalAmount amount)</td>
<td style="text-align:center">从时间量获得 Duration的实例。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#get(java.time.temporal.TemporalUnit)" target="_blank">get​</a>(TemporalUnit unit)</td>
<td style="text-align:center">获取所请求单元的值。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#getNano()" target="_blank">getNano(</a>)</td>
<td style="text-align:center">获取此持续时间内秒数内的纳秒数。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#getSeconds()" target="_blank">getSeconds(</a>)</td>
<td style="text-align:center">获取此持续时间内的秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_list" target="_blank">List&lt;</a>TemporalUnit&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#getUnits()" target="_blank">getUnits(</a>)</td>
<td style="text-align:center">获取此持续时间支持的单位集。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">此持续时间的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#isNegative()" target="_blank">isNegative(</a>)</td>
<td style="text-align:center">检查此持续时间是否为负，不包括零。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#isZero()" target="_blank">isZero(</a>)</td>
<td style="text-align:center">检查此持续时间是否为零长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minus(long,java.time.temporal.TemporalUnit)" target="_blank">minus​</a>(long amountToSubtract, TemporalUnit unit)</td>
<td style="text-align:center">返回此持续时间的副本，并减去指定的持续时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minus(java.time.Duration)" target="_blank">minus​</a>(Duration duration)</td>
<td style="text-align:center">返回此持续时间的副本，并减去指定的持续时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusDays(long)" target="_blank">minusDays​</a>(long daysToSubtract)</td>
<td style="text-align:center">返回此持续时间的副本，并在标准的24小时内减去指定的持续时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusHours(long)" target="_blank">minusHours​</a>(long hoursToSubtract)</td>
<td style="text-align:center">返回此持续时间的副本，并减去指定的持续时间（以小时为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusMillis(long)" target="_blank">minusMillis​</a>(long millisToSubtract)</td>
<td style="text-align:center">返回此持续时间的副本，并减去指定的持续时间（以毫秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusMinutes(long)" target="_blank">minusMinutes​</a>(long minutesToSubtract)</td>
<td style="text-align:center">返回此持续时间的副本，并减去指定的持续时间（以分钟为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusNanos(long)" target="_blank">minusNanos​</a>(long nanosToSubtract)</td>
<td style="text-align:center">返回此持续时间的副本，并减去指定的持续时间（以纳秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#minusSeconds(long)" target="_blank">minusSeconds​</a>(long secondsToSubtract)</td>
<td style="text-align:center">返回此持续时间的副本，并减去指定的持续时间（以秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#multipliedBy(long)" target="_blank">multipliedBy​</a>(long multiplicand)</td>
<td style="text-align:center">返回此持续时间的副本乘以标量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#negated()" target="_blank">negated(</a>)</td>
<td style="text-align:center">返回此持续时间的副本，其长度为negated。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#of(long,java.time.temporal.TemporalUnit)" target="_blank">of​</a>(long amount, TemporalUnit unit)</td>
<td style="text-align:center">获得 Duration表示指定单位的金额。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofDays(long)" target="_blank">ofDays​</a>(long days)</td>
<td style="text-align:center">获得 Duration代表多个标准24小时工作日。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofHours(long)" target="_blank">ofHours​</a>(long hours)</td>
<td style="text-align:center">获得代表若干标准小时数的 Duration 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofMillis(long)" target="_blank">ofMillis​</a>(long millis)</td>
<td style="text-align:center">获得表示毫秒数的 Duration 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofMinutes(long)" target="_blank">ofMinutes​</a>(long minutes)</td>
<td style="text-align:center">获得代表若干标准分钟的 Duration 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofNanos(long)" target="_blank">ofNanos​</a>(long nanos)</td>
<td style="text-align:center">获得代表若干纳秒的 Duration 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofSeconds(long)" target="_blank">ofSeconds​</a>(long seconds)</td>
<td style="text-align:center">获得代表若干秒的 Duration 。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#ofSeconds(long,long)" target="_blank">ofSeconds​</a>(long seconds, long nanoAdjustment)</td>
<td style="text-align:center">获得表示数秒的 Duration和以纳秒为单位的调整。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#parse(java.lang.CharSequence)" target="_blank">parse​</a>(CharSequence text)</td>
<td style="text-align:center">获得 Duration从文本字符串，如 PnDTnHnMn.nS 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plus(long,java.time.temporal.TemporalUnit)" target="_blank">plus​</a>(long amountToAdd, TemporalUnit unit)</td>
<td style="text-align:center">返回此持续时间的副本，并添加指定的持续时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plus(java.time.Duration)" target="_blank">plus​</a>(Duration duration)</td>
<td style="text-align:center">返回此持续时间的副本，并添加指定的持续时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusDays(long)" target="_blank">plusDays​</a>(long daysToAdd)</td>
<td style="text-align:center">返回此持续时间的副本，并在标准的24小时内添加指定的持续时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusHours(long)" target="_blank">plusHours​</a>(long hoursToAdd)</td>
<td style="text-align:center">返回此持续时间的副本，并指定持续时间（以小时为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusMillis(long)" target="_blank">plusMillis​</a>(long millisToAdd)</td>
<td style="text-align:center">返回此持续时间的副本，其中包含指定的持续时间（以毫秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusMinutes(long)" target="_blank">plusMinutes​</a>(long minutesToAdd)</td>
<td style="text-align:center">返回此持续时间的副本，并添加指定的持续时间（分钟）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusNanos(long)" target="_blank">plusNanos​</a>(long nanosToAdd)</td>
<td style="text-align:center">返回此持续时间的副本，并添加指定的持续时间（以纳秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#plusSeconds(long)" target="_blank">plusSeconds​</a>(long secondsToAdd)</td>
<td style="text-align:center">返回此持续时间的副本，并添加指定的持续时间（以秒为单位）</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporal" target="_blank">Temporal</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#subtractFrom(java.time.temporal.Temporal)" target="_blank">subtractFrom​</a>(Temporal temporal)</td>
<td style="text-align:center">从指定的时态对象中减去此持续时间。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toDays()" target="_blank">toDays(</a>)</td>
<td style="text-align:center">获取此持续时间内的天数。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toDaysPart()" target="_blank">toDaysPart(</a>)</td>
<td style="text-align:center">提取持续时间内的天数。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toHours()" target="_blank">toHours(</a>)</td>
<td style="text-align:center">获取此持续时间内的小时数。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toHoursPart()" target="_blank">toHoursPart(</a>)</td>
<td style="text-align:center">提取持续时间中的小时数。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toMillis()" target="_blank">toMillis(</a>)</td>
<td style="text-align:center">将此持续时间转换为总长度（以毫秒为单位）。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toMillisPart()" target="_blank">toMillisPart(</a>)</td>
<td style="text-align:center">提取持续时间部分的毫秒数。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toMinutes()" target="_blank">toMinutes(</a>)</td>
<td style="text-align:center">获取此持续时间内的分钟数。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toMinutesPart()" target="_blank">toMinutesPart(</a>)</td>
<td style="text-align:center">提取持续时间中的分钟数。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toNanos()" target="_blank">toNanos(</a>)</td>
<td style="text-align:center">将此持续时间转换为以纳秒为单位的总长度，表示为 long 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toNanosPart()" target="_blank">toNanosPart(</a>)</td>
<td style="text-align:center">在持续时间的几秒内获得纳秒部分。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toSeconds()" target="_blank">toSeconds(</a>)</td>
<td style="text-align:center">获取此持续时间内的秒数。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toSecondsPart()" target="_blank">toSecondsPart(</a>)</td>
<td style="text-align:center">提取持续时间中的秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">使用基于ISO-8601秒的表示形式的此持续时间的字符串表示形式，例如 PT8H6M12.345S 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#truncatedTo(java.time.temporal.TemporalUnit)" target="_blank">truncatedTo​</a>(TemporalUnit unit)</td>
<td style="text-align:center">返回截断到指定单位的此 Duration的副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#withNanos(int)" target="_blank">withNanos​</a>(int nanoOfSecond)</td>
<td style="text-align:center">使用指定的纳秒数返回此持续时间的副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_duration" target="_blank">Duration</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/Duration.html#withSeconds(long)" target="_blank">withSeconds​</a>(long seconds)</td>
<td style="text-align:center">以指定的秒数返回此持续时间的副本。</td>
</tr>
</tbody>
</table>
<h2>ZonedDateTime</h2>
<p>**public final class ZonedDateTime<br />
extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a><br />
implements Temporal, ChronoZonedDateTime, Serializable**</p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#equals(java.lang.Object)" target="_blank">equals​</a>(Object obj)</td>
<td style="text-align:center">检查此日期时间是否等于另一个日期时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#format(java.time.format.DateTimeFormatter)" target="_blank">format​</a>(DateTimeFormatter formatter)</td>
<td style="text-align:center">使用指定的格式化程序格式化此日期时间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#from(java.time.temporal.TemporalAccessor)" target="_blank">from​</a>(TemporalAccessor temporal)</td>
<td style="text-align:center">从时态对象获得 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#get(java.time.temporal.TemporalField)" target="_blank">get​</a>(TemporalField field)</td>
<td style="text-align:center">从此日期时间获取指定字段的值为 int 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getDayOfMonth()" target="_blank">getDayOfMonth(</a>)</td>
<td style="text-align:center">获取日期字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_dayofweek" target="_blank">DayOfWeek</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getDayOfWeek()" target="_blank">getDayOfWeek(</a>)</td>
<td style="text-align:center">获取星期几字段，即枚举 DayOfWeek 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getDayOfYear()" target="_blank">getDayOfYear(</a>)</td>
<td style="text-align:center">获取日期字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getHour()" target="_blank">getHour(</a>)</td>
<td style="text-align:center">获取当日时间字段。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getLong(java.time.temporal.TemporalField)" target="_blank">getLong​</a>(TemporalField field)</td>
<td style="text-align:center">从此日期时间获取指定字段的值，作为 long 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getMinute()" target="_blank">getMinute(</a>)</td>
<td style="text-align:center">获取分钟字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_month" target="_blank">Month</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getMonth()" target="_blank">getMonth(</a>)</td>
<td style="text-align:center">使用 Month枚举获取年份字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getMonthValue()" target="_blank">getMonthValue(</a>)</td>
<td style="text-align:center">获取1到12之间的月份字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getNano()" target="_blank">getNano(</a>)</td>
<td style="text-align:center">获取纳秒级字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneoffset" target="_blank">ZoneOffset</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getOffset()" target="_blank">getOffset(</a>)</td>
<td style="text-align:center">获取区域偏移量，例如“+01：00”。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getSecond()" target="_blank">getSecond(</a>)</td>
<td style="text-align:center">获取第二分钟字段。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getYear()" target="_blank">getYear(</a>)</td>
<td style="text-align:center">获取年份字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneid" target="_blank">ZoneId</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#getZone()" target="_blank">getZone(</a>)</td>
<td style="text-align:center">获取时区，例如“Europe / Paris”。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#hashCode()" target="_blank">hashCode(</a>)</td>
<td style="text-align:center">此日期时间的哈希码。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#isSupported(java.time.temporal.TemporalField)" target="_blank">isSupported​</a>(TemporalField field)</td>
<td style="text-align:center">检查是否支持指定的字段。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#isSupported(java.time.temporal.TemporalUnit)" target="_blank">isSupported​</a>(TemporalUnit unit)</td>
<td style="text-align:center">检查指定的单元是否受支持。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minus(long,java.time.temporal.TemporalUnit)" target="_blank">minus​</a>(long amountToSubtract, TemporalUnit unit)</td>
<td style="text-align:center">返回此日期时间的副本，并减去指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minus(java.time.temporal.TemporalAmount)" target="_blank">minus​</a>(TemporalAmount amountToSubtract)</td>
<td style="text-align:center">返回此日期时间的副本，并减去指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusDays(long)" target="_blank">minusDays​</a>(long days)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并减去指定的天数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusHours(long)" target="_blank">minusHours​</a>(long hours)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并减去指定的小时数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusMinutes(long)" target="_blank">minusMinutes​</a>(long minutes)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并减去指定的分钟数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusMonths(long)" target="_blank">minusMonths​</a>(long months)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并减去指定的月数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusNanos(long)" target="_blank">minusNanos​</a>(long nanos)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，减去指定的纳秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusSeconds(long)" target="_blank">minusSeconds​</a>(long seconds)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并减去指定的秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusWeeks(long)" target="_blank">minusWeeks​</a>(long weeks)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并减去指定的周数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#minusYears(long)" target="_blank">minusYears​</a>(long years)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并减去指定的年数。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#now()" target="_blank">now(</a>)</td>
<td style="text-align:center">从默认时区中的系统时钟获取当前日期时间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#now(java.time.Clock)" target="_blank">now​</a>(Clock clock)</td>
<td style="text-align:center">从指定的时钟获得当前日期时间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#now(java.time.ZoneId)" target="_blank">now​</a>(ZoneId zone)</td>
<td style="text-align:center">从指定时区的系统时钟获取当前日期时间。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#of(int,int,int,int,int,int,int,java.time.ZoneId)" target="_blank">of​</a>(int year, int month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond, ZoneId zone)</td>
<td style="text-align:center">从年，月，日，小时，分钟，秒，纳秒和时区获得 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#of(java.time.LocalDate,java.time.LocalTime,java.time.ZoneId)" target="_blank">of​</a>(LocalDate date, LocalTime time, ZoneId zone)</td>
<td style="text-align:center">从本地日期和时间获得 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#of(java.time.LocalDateTime,java.time.ZoneId)" target="_blank">of​</a>(LocalDateTime localDateTime, ZoneId zone)</td>
<td style="text-align:center">从本地日期时间获得 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#ofInstant(java.time.Instant,java.time.ZoneId)" target="_blank">ofInstant​</a>(Instant instant, ZoneId zone)</td>
<td style="text-align:center">从 Instant获得 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#ofInstant(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneId)" target="_blank">ofInstant​</a>(LocalDateTime localDateTime, ZoneOffset offset, ZoneId zone)</td>
<td style="text-align:center">从通过组合本地日期时间和偏移量形成的瞬间获得 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset)" target="_blank">ofLocal​</a>(LocalDateTime localDateTime, ZoneId zone, ZoneOffset preferredOffset)</td>
<td style="text-align:center">如果可能，使用首选偏移量从本地日期时间获取 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#ofStrict(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneId)" target="_blank">ofStrict​</a>(LocalDateTime localDateTime, ZoneOffset offset, ZoneId zone)</td>
<td style="text-align:center">获得 ZonedDateTime的实例，严格验证本地日期时间，偏移量和区域ID的组合。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#parse(java.lang.CharSequence)" target="_blank">parse​</a>(CharSequence text)</td>
<td style="text-align:center">从文本字符串（如 2007-12-03T10:15:30+01:00[Europe/Paris]获取 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#parse(java.lang.CharSequence,java.time.format.DateTimeFormatter)" target="_blank">parse​</a>(CharSequence text, DateTimeFormatter formatter)</td>
<td style="text-align:center">使用特定格式化程序从文本字符串中获取 ZonedDateTime的实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plus(long,java.time.temporal.TemporalUnit)" target="_blank">plus​</a>(long amountToAdd, TemporalUnit unit)</td>
<td style="text-align:center">返回此日期时间的副本，并添加指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plus(java.time.temporal.TemporalAmount)" target="_blank">plus​</a>(TemporalAmount amountToAdd)</td>
<td style="text-align:center">返回此日期时间的副本，并添加指定的数量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusDays(long)" target="_blank">plusDays​</a>(long days)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并添加指定的天数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusHours(long)" target="_blank">plusHours​</a>(long hours)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并添加指定的小时数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusMinutes(long)" target="_blank">plusMinutes​</a>(long minutes)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并添加指定的分钟数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusMonths(long)" target="_blank">plusMonths​</a>(long months)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并添加指定的月数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusNanos(long)" target="_blank">plusNanos​</a>(long nanos)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本， ZonedDateTime添加了指定的纳秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusSeconds(long)" target="_blank">plusSeconds​</a>(long seconds)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并添加指定的秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusWeeks(long)" target="_blank">plusWeeks​</a>(long weeks)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并添加指定的周数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#plusYears(long)" target="_blank">plusYears​</a>(long years)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并添加指定的年数。</td>
</tr>
<tr>
<td style="text-align:center"> R</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#query(java.time.temporal.TemporalQuery)" target="_blank">query​</a>(TemporalQuery query)</td>
<td style="text-align:center">使用指定的查询查询此日期时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_valuerange" target="_blank">ValueRange</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#range(java.time.temporal.TemporalField)" target="_blank">range​</a>(TemporalField field)</td>
<td style="text-align:center">获取指定字段的有效值范围。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdate" target="_blank">LocalDate</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toLocalDate()" target="_blank">toLocalDate(</a>)</td>
<td style="text-align:center">获取此日期时间的 LocalDate部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localdatetime" target="_blank">LocalDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toLocalDateTime()" target="_blank">toLocalDateTime(</a>)</td>
<td style="text-align:center">获取此日期时间的 LocalDateTime部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_localtime" target="_blank">LocalTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toLocalTime()" target="_blank">toLocalTime(</a>)</td>
<td style="text-align:center">获取此日期时间的 LocalTime部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_offsetdatetime" target="_blank">OffsetDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toOffsetDateTime()" target="_blank">toOffsetDateTime(</a>)</td>
<td style="text-align:center">将此日期时间转换为 OffsetDateTime 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">将此日期时间输出为 String ，例如 2007-12-03T10:15:30+01:00[Europe/Paris] 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#truncatedTo(java.time.temporal.TemporalUnit)" target="_blank">truncatedTo​</a>(TemporalUnit unit)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并截断时间。</td>
</tr>
<tr>
<td style="text-align:center">long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)" target="_blank">until​</a>(Temporal endExclusive, TemporalUnit unit)</td>
<td style="text-align:center">根据指定的单位计算到另一个日期时间的时间量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#with(java.time.temporal.TemporalAdjuster)" target="_blank">with​</a>(TemporalAdjuster adjuster)</td>
<td style="text-align:center">返回此日期时间的调整副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#with(java.time.temporal.TemporalField,long)" target="_blank">with​</a>(TemporalField field, long newValue)</td>
<td style="text-align:center">返回此日期时间的副本，并将指定字段设置为新值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withDayOfMonth(int)" target="_blank">withDayOfMonth​</a>(int dayOfMonth)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并更改日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withDayOfYear(int)" target="_blank">withDayOfYear​</a>(int dayOfYear)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并更改日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withEarlierOffsetAtOverlap()" target="_blank">withEarlierOffsetAtOverlap(</a>)</td>
<td style="text-align:center">返回此日期时间的副本，将区域偏移更改为本地时间线重叠处的两个有效偏移中较早的一个。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withFixedOffsetZone()" target="_blank">withFixedOffsetZone(</a>)</td>
<td style="text-align:center">返回此日期时间的副本，并将区域ID设置为偏移量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withHour(int)" target="_blank">withHour​</a>(int hour)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并更改日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withLaterOffsetAtOverlap()" target="_blank">withLaterOffsetAtOverlap(</a>)</td>
<td style="text-align:center">返回此日期时间的副本，将区域偏移更改为本地时间线重叠处的两个有效偏移中的较晚者。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withMinute(int)" target="_blank">withMinute​</a>(int minute)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并更改了分钟。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withMonth(int)" target="_blank">withMonth​</a>(int month)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，其中年份已更改。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withNano(int)" target="_blank">withNano​</a>(int nanoOfSecond)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并更改了纳秒。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withSecond(int)" target="_blank">withSecond​</a>(int second)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并在第二分钟更改。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withYear(int)" target="_blank">withYear​</a>(int year)</td>
<td style="text-align:center">返回此 ZonedDateTime的副本，并更改年份。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withZoneSameInstant(java.time.ZoneId)" target="_blank">withZoneSameInstant​</a>(ZoneId zone)</td>
<td style="text-align:center">使用不同的时区返回此日期时间的副本，保留该瞬间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneddatetime" target="_blank">ZonedDateTime</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/ZonedDateTime.html#withZoneSameLocal(java.time.ZoneId)" target="_blank">withZoneSameLocal​</a>(ZoneId zone)</td>
<td style="text-align:center">使用不同的时区返回此日期时间的副本，如果可能，保留本地日期时间。</td>
</tr>
</tbody>
</table>
<h2>java.time.format</h2>
<p><strong>DateTimeFormatter</strong></p>
<p>**public final class DateTimeFormatter<br />
extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_object" target="_blank">Object</a>**</p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">字段</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#BASIC_ISO_DATE" target="_blank">BASIC_ISO_DATE</a></td>
<td style="text-align:center">ISO日期格式化程序，用于格式化或解析没有偏移的日期，例如“20111203”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_DATE" target="_blank">ISO_DATE</a></td>
<td style="text-align:center">ISO日期格式化程序，使用偏移量格式化或解析日期（如“2011-12-03”或“2011-12-03 + 01:00”）。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_DATE_TIME" target="_blank">ISO_DATE_TIME</a></td>
<td style="text-align:center">类似ISO的日期时格式化程序，使用偏移量和区域（如果可用）格式化或解析日期时间，例如“2011-12-03T10：15：30”，“2011-12-03T10：15：30 + 01 ：00'或'2011-12-03T10：15：30 + 01:00 [欧洲/巴黎]'。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_INSTANT" target="_blank">ISO_INSTANT</a></td>
<td style="text-align:center">ISO即时格式化程序，用于格式化或解析UTC中的瞬间，例如“2011-12-03T10：15：30Z”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_LOCAL_DATE" target="_blank">ISO_LOCAL_DATE</a></td>
<td style="text-align:center">ISO日期格式化程序，用于格式化或解析没有偏移的日期，例如“2011-12-03”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_LOCAL_DATE_TIME" target="_blank">ISO_LOCAL_DATE_TIME</a></td>
<td style="text-align:center">ISO日期时格式化程序，用于格式化或解析没有偏移的日期时间，例如“2011-12-03T10：15：30”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_LOCAL_TIME" target="_blank">ISO_LOCAL_TIME</a></td>
<td style="text-align:center">ISO时间格式化程序，用于格式化或解析没有偏移的时间，例如“10:15”或“10:15:30”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_OFFSET_DATE" target="_blank">ISO_OFFSET_DATE</a></td>
<td style="text-align:center">ISO日期格式化程序，用于格式化或解析具有偏移量的日期，例如“2011-12-03 + 01:00”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_OFFSET_DATE_TIME" target="_blank">ISO_OFFSET_DATE_TIME</a></td>
<td style="text-align:center">ISO日期时格格式器，用于格式化或解析具有偏移的日期时间，例如“2011-12-03T10：15：30 + 01:00”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_OFFSET_TIME" target="_blank">ISO_OFFSET_TIME</a></td>
<td style="text-align:center">ISO时间格式化程序，使用偏移格式化或解析时间，例如'10：15 + 01:00'或'10：15：30 + 01:00'。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_ORDINAL_DATE" target="_blank">ISO_ORDINAL_DATE</a></td>
<td style="text-align:center">ISO日期格式化程序，用于格式化或解析没有偏移的序数日期，例如“2012-337”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_TIME" target="_blank">ISO_TIME</a></td>
<td style="text-align:center">ISO时间格式化程序，用于格式化或解析时间，如果可用，则为偏移量，例如“10:15”，“10：15：30”或“10:15:30 + 01:00”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_WEEK_DATE" target="_blank">ISO_WEEK_DATE</a></td>
<td style="text-align:center">ISO日期格式化程序，用于格式化或解析没有偏移的基于周的日期，例如“2012-W48-6”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ISO_ZONED_DATE_TIME" target="_blank">ISO_ZONED_DATE_TIME</a></td>
<td style="text-align:center">类似ISO的日期时格格式器，用于格式化或解析具有偏移和区域的日期时间，例如“2011-12-03T10：15：30 + 01:00 [欧洲/巴黎]”。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#RFC_1123_DATE_TIME" target="_blank">RFC_1123_DATE_TIME</a></td>
<td style="text-align:center">RFC-1123日期时间格式化程序，例如'Tue，2008年6月3日11:05:30 GMT'。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#format(java.time.temporal.TemporalAccessor)" target="_blank">format​</a>(TemporalAccessor temporal)</td>
<td style="text-align:center">使用此格式化程序格式化日期时间对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#formatTo(java.time.temporal.TemporalAccessor,java.lang.Appendable)" target="_blank">formatTo​</a>(TemporalAccessor temporal, Appendable appendable)</td>
<td style="text-align:center">使用此格式化程序将日期时间对象格式化为 Appendable 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_chrono_chronology" target="_blank">Chronology</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getChronology()" target="_blank">getChronology(</a>)</td>
<td style="text-align:center">获取格式化期间要使用的重写年代表。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_decimalstyle" target="_blank">DecimalStyle</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getDecimalStyle()" target="_blank">getDecimalStyle(</a>)</td>
<td style="text-align:center">获取格式化期间要使用的DecimalStyle。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_locale" target="_blank">Locale</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getLocale()" target="_blank">getLocale(</a>)</td>
<td style="text-align:center">获取格式化期间要使用的语言环境。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_set" target="_blank">Set&lt;</a>TemporalField&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getResolverFields()" target="_blank">getResolverFields(</a>)</td>
<td style="text-align:center">获取解析期间要使用的解析器字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_resolverstyle" target="_blank">ResolverStyle</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getResolverStyle()" target="_blank">getResolverStyle(</a>)</td>
<td style="text-align:center">获取解析期间要使用的解析器样式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_zoneid" target="_blank">ZoneId</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#getZone()" target="_blank">getZone(</a>)</td>
<td style="text-align:center">获取格式化期间要使用的覆盖区域。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#localizedBy(java.util.Locale)" target="_blank">localizedBy​</a>(Locale locale)</td>
<td style="text-align:center">返回此格式化程序的副本，其中包含区域设置，日历，区域，小数样式和/或时区的本地化值，它们取代此格式化程序中的值。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofLocalizedDate(java.time.format.FormatStyle)" target="_blank">ofLocalizedDate​</a>(FormatStyle dateStyle)</td>
<td style="text-align:center">返回ISO年表的特定于语言环境的日期格式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofLocalizedDateTime(java.time.format.FormatStyle)" target="_blank">ofLocalizedDateTime​</a>(FormatStyle dateTimeStyle)</td>
<td style="text-align:center">返回ISO年表的特定于语言环境的日期时间格式化程序。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofLocalizedDateTime(java.time.format.FormatStyle,java.time.format.FormatStyle)" target="_blank">ofLocalizedDateTime​</a>(FormatStyle dateStyle, FormatStyle timeStyle)</td>
<td style="text-align:center">返回ISO年表的特定于语言环境的日期和时间格式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofLocalizedTime(java.time.format.FormatStyle)" target="_blank">ofLocalizedTime​</a>(FormatStyle timeStyle)</td>
<td style="text-align:center">返回ISO年表的特定于语言环境的时间格式。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofPattern(java.lang.String)" target="_blank">ofPattern​</a>(String pattern)</td>
<td style="text-align:center">使用指定的模式创建格式化程序。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#ofPattern(java.lang.String,java.util.Locale)" target="_blank">ofPattern​</a>(String pattern, Locale locale)</td>
<td style="text-align:center">使用指定的模式和语言环境创建格式化程序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporalaccessor" target="_blank">TemporalAccessor</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parse(java.lang.CharSequence)" target="_blank">parse​</a>(CharSequence text)</td>
<td style="text-align:center">完全解析生成临时对象的文本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporalaccessor" target="_blank">TemporalAccessor</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parse(java.lang.CharSequence,java.text.ParsePosition)" target="_blank">parse​</a>(CharSequence text, ParsePosition position)</td>
<td style="text-align:center">使用此格式化程序解析文本，提供对文本位置的控制。</td>
</tr>
<tr>
<td style="text-align:center"> T</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parse(java.lang.CharSequence,java.time.temporal.TemporalQuery)" target="_blank">parse​</a>(CharSequence text, TemporalQuery query)</td>
<td style="text-align:center">完全解析生成指定类型对象的文本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporalaccessor" target="_blank">TemporalAccessor</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)" target="_blank">parseBest​</a>(CharSequence text, TemporalQuery&lt;?&gt;... queries)</td>
<td style="text-align:center">完全解析生成指定类型之一的对象的文本。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporalquery" target="_blank">TemporalQuery&lt;</a>Period&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parsedExcessDays()" target="_blank">parsedExcessDays(</a>)</td>
<td style="text-align:center">一个查询，提供对已解析的超出天数的访问权限。</td>
</tr>
<tr>
<td style="text-align:center">static <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporalquery" target="_blank">TemporalQuery&lt;</a>Boolean&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parsedLeapSecond()" target="_blank">parsedLeapSecond(</a>)</td>
<td style="text-align:center">提供对是否解析闰秒的访问的查询。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_temporal_temporalaccessor" target="_blank">TemporalAccessor</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#parseUnresolved(java.lang.CharSequence,java.text.ParsePosition)" target="_blank">parseUnresolved​</a>(CharSequence text, ParsePosition position)</td>
<td style="text-align:center">使用此格式化程序解析文本，而不解析结果，用于高级用例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_text_format" target="_blank">Format</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#toFormat()" target="_blank">toFormat(</a>)</td>
<td style="text-align:center">将此格式化程序作为 java.text.Format实例返回。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_text_format" target="_blank">Format</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#toFormat(java.time.temporal.TemporalQuery)" target="_blank">toFormat​</a>(TemporalQuery&lt;?&gt; parseQuery)</td>
<td style="text-align:center">将此格式化程序作为将使用指定查询进行分析的 java.text.Format实例返回。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#toString()" target="_blank">toString(</a>)</td>
<td style="text-align:center">返回底层格式化程序的描述。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withChronology(java.time.chrono.Chronology)" target="_blank">withChronology​</a>(Chronology chrono)</td>
<td style="text-align:center">返回此格式化程序的副本，其中包含新的覆盖时间顺序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withDecimalStyle(java.time.format.DecimalStyle)" target="_blank">withDecimalStyle​</a>(DecimalStyle decimalStyle)</td>
<td style="text-align:center">使用新的DecimalStyle返回此formatter的副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withLocale(java.util.Locale)" target="_blank">withLocale​</a>(Locale locale)</td>
<td style="text-align:center">返回具有新语言环境的此formatter的副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withResolverFields(java.time.temporal.TemporalField...)" target="_blank">withResolverFields​</a>(TemporalField... resolverFields)</td>
<td style="text-align:center">返回此格式化程序的副本，其中包含一组新的解析程序字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withResolverFields(java.util.Set)" target="_blank">withResolverFields​</a>(Set resolverFields)</td>
<td style="text-align:center">返回此格式化程序的副本，其中包含一组新的解析程序字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withResolverStyle(java.time.format.ResolverStyle)" target="_blank">withResolverStyle​</a>(ResolverStyle resolverStyle)</td>
<td style="text-align:center">使用新的解析程序样式返回此formatter的副本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_time_format_datetimeformatter" target="_blank">DateTimeFormatter</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.base/java/time/format/DateTimeFormatter.html#withZone(java.time.ZoneId)" target="_blank">withZone​</a>(ZoneId zone)</td>
<td style="text-align:center">使用新的覆盖区域返回此格式化程序的副本。</td>
</tr>
</tbody>
</table>
<h1>java.sql</h1>
<table>
<thead>
<tr>
<th style="text-align:center">接口</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_array" target="_blank">Array</a></td>
<td style="text-align:center">用于SQL类型 ARRAY的Java编程语言中的 ARRAY 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_blob" target="_blank">Blob</a></td>
<td style="text-align:center">SQL BLOB值的 BLOB “¢编程语言中的表示（映射）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_callablestatement" target="_blank">CallableStatement</a></td>
<td style="text-align:center">用于执行SQL存储过程的接口。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_clob" target="_blank">Clob</a></td>
<td style="text-align:center">用于SQL CLOB类型的 CLOB “¢编程语言中的 CLOB 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_connection" target="_blank">Connection</a></td>
<td style="text-align:center">与特定数据库的连接（会话）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_connectionbuilder" target="_blank">ConnectionBuilder</a></td>
<td style="text-align:center">从 DataSource对象创建的构建器，用于建立与 data source对象表示的数据库的连接。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_databasemetadata" target="_blank">DatabaseMetaData</a></td>
<td style="text-align:center">有关整个数据库的综合信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_driver" target="_blank">Driver</a></td>
<td style="text-align:center">每个驱动程序类必须实现的接口。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_driveraction" target="_blank">DriverAction</a></td>
<td style="text-align:center">当<a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_driver" target="_blank">Driver想</a>要通过DriverManager通知时必须实现的接口。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_nclob" target="_blank">NClob</a></td>
<td style="text-align:center">用于SQL NCLOB类型的 NCLOB “¢编程语言中的 NCLOB 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_parametermetadata" target="_blank">ParameterMetaData</a></td>
<td style="text-align:center">一个对象，可用于获取有关 PreparedStatement对象中每个参数标记的类型和属性的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_preparedstatement" target="_blank">PreparedStatement</a></td>
<td style="text-align:center">表示预编译SQL语句的对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_ref" target="_blank">Ref</a></td>
<td style="text-align:center">SQL编程语言中SQL REF值的映射，它是对数据库中SQL结构类型值的引用。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_resultset" target="_blank">ResultSet</a></td>
<td style="text-align:center">表示数据库结果集的数据表，通常通过执行查询数据库的语句生成。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_resultsetmetadata" target="_blank">ResultSetMetaData</a></td>
<td style="text-align:center">一个对象，可用于获取有关 ResultSet对象中列的类型和属性的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_rowid" target="_blank">RowId</a></td>
<td style="text-align:center">SQL ROWID值的Java编程语言中的表示（映射）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_savepoint" target="_blank">Savepoint</a></td>
<td style="text-align:center">保存点的表示形式，它是当前事务中可以从 Connection.rollback方法引用的 Connection.rollback 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_shardingkey" target="_blank">ShardingKey</a></td>
<td style="text-align:center">用于指示此对象表示Sharding键的接口。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_shardingkeybuilder" target="_blank">ShardingKeyBuilder</a></td>
<td style="text-align:center">从DataSource或XADataSource对象创建的构建器，用于创建具有受支持数据类型的子键的<a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_shardingkey" target="_blank">ShardingKey </a>。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_sqldata" target="_blank">SQLData</a></td>
<td style="text-align:center">用于将SQL用户定义类型（UDT）自定义映射到Java编程语言中的类的接口。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_sqlinput" target="_blank">SQLInput</a></td>
<td style="text-align:center">一个输入流，包含表示SQL结构类型或SQL不同类型实例的值流。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_sqloutput" target="_blank">SQLOutput</a></td>
<td style="text-align:center">用于将用户定义类型的属性写回数据库的输出流。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_sqltype" target="_blank">SQLType</a></td>
<td style="text-align:center">用于标识通用SQL类型的对象，称为JDBC类型或特定于供应商的数据类型。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_sqlxml" target="_blank">SQLXML</a></td>
<td style="text-align:center">Java XML类型的JavaTM编程语言中的映射。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_statement" target="_blank">Statement</a></td>
<td style="text-align:center">用于执行静态SQL语句并返回其生成的结果的对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_struct" target="_blank">Struct</a></td>
<td style="text-align:center">用于SQL结构类型的Java编程语言中的标准映射。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_wrapper" target="_blank">Wrapper</a></td>
<td style="text-align:center">JDBC类的接口，它提供了在有问题的实例实际上是代理类时检索委托实例的能力。</td>
</tr>
</tbody>
</table>
<h2>Connection</h2>
<p>public interface <strong>Connection</strong><br />
extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_wrapper" target="_blank">Wrapper</a>, AutoCloseable</p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">字段</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_NONE" target="_blank">TRANSACTION_NONE</a></td>
<td style="text-align:center">一个常量，指示不支持事务。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_READ_COMMITTED" target="_blank">TRANSACTION_READ_COMMITTED</a></td>
<td style="text-align:center">一个常量，表示防止脏读; 可以发生不可重复的读取和幻像读取。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_READ_UNCOMMITTED" target="_blank">TRANSACTION_READ_UNCOMMITTED</a></td>
<td style="text-align:center">一个常量，表示可以发生脏读，不可重复读和幻像读。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_REPEATABLE_READ" target="_blank">TRANSACTION_REPEATABLE_READ</a></td>
<td style="text-align:center">一个常量，表示防止脏读和不可重复读; 可以发生幻像读取。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#TRANSACTION_SERIALIZABLE" target="_blank">TRANSACTION_SERIALIZABLE</a></td>
<td style="text-align:center">一个常量，表示禁止脏读，不可重复读和幻像读。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#abort(java.util.concurrent.Executor)" target="_blank">abort​</a>(Executor executor)</td>
<td style="text-align:center">终止打开的连接。</td>
</tr>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#beginRequest()" target="_blank">beginRequest(</a>)</td>
<td style="text-align:center">向驾驶员提示一个请求，一个独立的工作单元，正在这个连接上开始。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#clearWarnings()" target="_blank">clearWarnings(</a>)</td>
<td style="text-align:center">清除为此 Connection对象报告的所有警告。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#close()" target="_blank">close(</a>)</td>
<td style="text-align:center">立即释放此 Connection对象的数据库和JDBC资源，而不是等待它们自动释放。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#commit()" target="_blank">commit(</a>)</td>
<td style="text-align:center">使自上次提交/回滚以来所做的所有更改成为永久更改，并释放此 Connection对象当前持有的所有数据库锁。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_array" target="_blank">Array</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createArrayOf(java.lang.String,java.lang.Object%5B%5D)" target="_blank">createArrayOf​</a>(String typeName, Object[] elements)</td>
<td style="text-align:center">用于创建Array对象的工厂方法。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_blob" target="_blank">Blob</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createBlob()" target="_blank">createBlob(</a>)</td>
<td style="text-align:center">构造一个实现 Blob接口的对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_clob" target="_blank">Clob</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createClob()" target="_blank">createClob(</a>)</td>
<td style="text-align:center">构造一个实现 Clob接口的对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_nclob" target="_blank">NClob</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createNClob()" target="_blank">createNClob(</a>)</td>
<td style="text-align:center">构造一个实现 NClob接口的对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_sqlxml" target="_blank">SQLXML</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createSQLXML()" target="_blank">createSQLXML(</a>)</td>
<td style="text-align:center">构造一个实现 SQLXML接口的对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_statement" target="_blank">Statement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createStatement()" target="_blank">createStatement(</a>)</td>
<td style="text-align:center">创建一个 Statement对象，用于将SQL语句发送到数据库。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_statement" target="_blank">Statement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createStatement(int,int)" target="_blank">createStatement​</a>(int resultSetType, int resultSetConcurrency)</td>
<td style="text-align:center">创建一个 Statement对象，该对象将生成具有给定类型和并发性的 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_statement" target="_blank">Statement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createStatement(int,int,int)" target="_blank">createStatement​</a>(int resultSetType, int resultSetConcurrency, int resultSetHoldability)</td>
<td style="text-align:center">创建一个 Statement对象，该对象将生成具有给定类型，并发性和可 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_struct" target="_blank">Struct</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#createStruct(java.lang.String,java.lang.Object%5B%5D)" target="_blank">createStruct​</a>(String typeName, Object[] attributes)</td>
<td style="text-align:center">用于创建Struct对象的工厂方法。</td>
</tr>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#endRequest()" target="_blank">endRequest(</a>)</td>
<td style="text-align:center">向驾驶员提示已完成请求（独立工作单元）。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getAutoCommit()" target="_blank">getAutoCommit(</a>)</td>
<td style="text-align:center">检索此 Connection对象的当前自动提交模式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getCatalog()" target="_blank">getCatalog(</a>)</td>
<td style="text-align:center">检索此 Connection对象的当前目录名称。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_properties" target="_blank">Properties</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getClientInfo()" target="_blank">getClientInfo(</a>)</td>
<td style="text-align:center">返回一个列表，其中包含驱动程序支持的每个客户端信息属性的名称和当前值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getClientInfo(java.lang.String)" target="_blank">getClientInfo​</a>(String name)</td>
<td style="text-align:center">返回name指定的客户端信息属性的值。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getHoldability()" target="_blank">getHoldability(</a>)</td>
<td style="text-align:center">检索使用此 Connection对象创建的 ResultSet对象的当前可保存性。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_databasemetadata" target="_blank">DatabaseMetaData</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getMetaData()" target="_blank">getMetaData(</a>)</td>
<td style="text-align:center">检索 DatabaseMetaData对象包含有关哪个这个数据库的元数据 Connection对象表示的连接。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getNetworkTimeout()" target="_blank">getNetworkTimeout(</a>)</td>
<td style="text-align:center">检索驱动程序等待数据库请求完成的毫秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getSchema()" target="_blank">getSchema(</a>)</td>
<td style="text-align:center">检索此 Connection对象的当前架构名称。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getTransactionIsolation()" target="_blank">getTransactionIsolation(</a>)</td>
<td style="text-align:center">检索此 Connection对象的当前事务隔离级别。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_util_map" target="_blank">Map&lt;</a>String,​类&lt;?&gt;&gt;</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getTypeMap()" target="_blank">getTypeMap(</a>)</td>
<td style="text-align:center">检索 Map与此相关联的对象 Connection对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_sqlwarning" target="_blank">SQLWarning</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#getWarnings()" target="_blank">getWarnings(</a>)</td>
<td style="text-align:center">检索此 Connection对象上的调用报告的第一个警告。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#isClosed()" target="_blank">isClosed(</a>)</td>
<td style="text-align:center">检索此 Connection对象是否已关闭。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#isReadOnly()" target="_blank">isReadOnly(</a>)</td>
<td style="text-align:center">检索此 Connection对象是否处于只读模式。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#isValid(int)" target="_blank">isValid​</a>(int timeout)</td>
<td style="text-align:center">如果连接尚未关闭且仍然有效，则返回true。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#nativeSQL(java.lang.String)" target="_blank">nativeSQL​</a>(String sql)</td>
<td style="text-align:center">将给定的SQL语句转换为系统的本机SQL语法。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_callablestatement" target="_blank">CallableStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareCall(java.lang.String)" target="_blank">prepareCall​</a>(String sql)</td>
<td style="text-align:center">创建一个用于调用数据库存储过程的 CallableStatement对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_callablestatement" target="_blank">CallableStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareCall(java.lang.String,int,int)" target="_blank">prepareCall​</a>(String sql, int resultSetType, int resultSetConcurrency)</td>
<td style="text-align:center">创建一个 CallableStatement对象，该对象将生成具有给定类型和并发性的 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_callablestatement" target="_blank">CallableStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareCall(java.lang.String,int,int,int)" target="_blank">prepareCall​</a>(String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)</td>
<td style="text-align:center">创建一个 CallableStatement对象，该对象将生成具有给定类型和并发性的 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_preparedstatement" target="_blank">PreparedStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String)" target="_blank">prepareStatement​</a>(String sql)</td>
<td style="text-align:center">创建一个 PreparedStatement对象，用于将参数化SQL语句发送到数据库。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_preparedstatement" target="_blank">PreparedStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,int)" target="_blank">prepareStatement​</a>(String sql, int autoGeneratedKeys)</td>
<td style="text-align:center">创建一个默认的 PreparedStatement对象，该对象具有检索自动生成的键的功能。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_preparedstatement" target="_blank">PreparedStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,int%5B%5D)" target="_blank">prepareStatement​</a>(String sql, int[] columnIndexes)</td>
<td style="text-align:center">创建一个默认的 PreparedStatement对象，该对象能够返回给定数组指定的自动生成的键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_preparedstatement" target="_blank">PreparedStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,int,int)" target="_blank">prepareStatement​</a>(String sql, int resultSetType, int resultSetConcurrency)</td>
<td style="text-align:center">创建一个 PreparedStatement对象，该对象将生成具有给定类型和并发性的 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_preparedstatement" target="_blank">PreparedStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,int,int,int)" target="_blank">prepareStatement​</a>(String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)</td>
<td style="text-align:center">创建一个 PreparedStatement对象，该对象将生成具有给定类型，并发性和可 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_preparedstatement" target="_blank">PreparedStatement</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#prepareStatement(java.lang.String,java.lang.String%5B%5D)" target="_blank">prepareStatement​</a>(String sql, String[] columnNames)</td>
<td style="text-align:center">创建一个默认的 PreparedStatement对象，该对象能够返回给定数组指定的自动生成的键。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#releaseSavepoint(java.sql.Savepoint)" target="_blank">releaseSavepoint​</a>(Savepoint savepoint)</td>
<td style="text-align:center">从当前事务中删除指定的 Savepoint和后续 Savepoint对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#rollback()" target="_blank">rollback(</a>)</td>
<td style="text-align:center">撤消当前事务中所做的所有更改，并释放此 Connection对象当前持有的所有数据库锁。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#rollback(java.sql.Savepoint)" target="_blank">rollback​</a>(Savepoint savepoint)</td>
<td style="text-align:center">取消在设置给定的 Savepoint对象后所做的所有更改。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setAutoCommit(boolean)" target="_blank">setAutoCommit​</a>(boolean autoCommit)</td>
<td style="text-align:center">将此连接的自动提交模式设置为给定状态。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setCatalog(java.lang.String)" target="_blank">setCatalog​</a>(String catalog)</td>
<td style="text-align:center">设置给定的目录名称，以便选择要在其中工作的此 Connection对象的数据库的子空间。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setClientInfo(java.lang.String,java.lang.String)" target="_blank">setClientInfo​</a>(String name, String value)</td>
<td style="text-align:center">将name指定的客户端信息属性的值设置为value指定的值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setClientInfo(java.util.Properties)" target="_blank">setClientInfo​</a>(Properties properties)</td>
<td style="text-align:center">设置连接的客户端信息属性的值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setHoldability(int)" target="_blank">setHoldability​</a>(int holdability)</td>
<td style="text-align:center">将使用此 Connection对象创建的 ResultSet对象的默认可 ResultSet更改为给定的可保持性。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setNetworkTimeout(java.util.concurrent.Executor,int)" target="_blank">setNetworkTimeout​</a>(Executor executor, int milliseconds)</td>
<td style="text-align:center">设置最大周期 Connection或从 Connection创建的 Connection将等待数据库回复任何一个请求。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setReadOnly(boolean)" target="_blank">setReadOnly​</a>(boolean readOnly)</td>
<td style="text-align:center">将此连接置于只读模式，作为驱动程序的提示以启用数据库优化。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_savepoint" target="_blank">Savepoint</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setSavepoint()" target="_blank">setSavepoint(</a>)</td>
<td style="text-align:center">在当前事务中创建一个未命名的保存点，并返回表示它的新 Savepoint对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_savepoint" target="_blank">Savepoint</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setSavepoint(java.lang.String)" target="_blank">setSavepoint​</a>(String name)</td>
<td style="text-align:center">在当前事务中创建具有给定名称的保存点，并返回表示它的新 Savepoint对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setSchema(java.lang.String)" target="_blank">setSchema​</a>(String schema)</td>
<td style="text-align:center">设置要访问的给定模式名称。</td>
</tr>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setShardingKey(java.sql.ShardingKey)" target="_blank">setShardingKey​</a>(ShardingKey shardingKey)</td>
<td style="text-align:center">指定要与此Connection一起使用的shardingKey</td>
</tr>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setShardingKey(java.sql.ShardingKey,java.sql.ShardingKey)" target="_blank">setShardingKey​</a>(ShardingKey shardingKey, ShardingKey superShardingKey)</td>
<td style="text-align:center">指定要与此Connection一起使用的shardingKey和superShardingKey</td>
</tr>
<tr>
<td style="text-align:center">default boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setShardingKeyIfValid(java.sql.ShardingKey,int)" target="_blank">setShardingKeyIfValid​</a>(ShardingKey shardingKey, int timeout)</td>
<td style="text-align:center">设置并验证此连接的分片键。</td>
</tr>
<tr>
<td style="text-align:center">default boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setShardingKeyIfValid(java.sql.ShardingKey,java.sql.ShardingKey,int)" target="_blank">setShardingKeyIfValid​</a>(ShardingKey shardingKey, ShardingKey superShardingKey, int timeout)</td>
<td style="text-align:center">设置并验证此连接的分片键。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setTransactionIsolation(int)" target="_blank">setTransactionIsolation​</a>(int level)</td>
<td style="text-align:center">尝试将此 Connection对象的事务隔离级别更改为给定的对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Connection.html#setTypeMap(java.util.Map)" target="_blank">setTypeMap​</a>(Map&lt;String,​类&lt;?&gt;&gt; map)</td>
<td style="text-align:center">安装给定的 TypeMap对象的类型映射此 Connection对象。</td>
</tr>
</tbody>
</table>
<h2>Statement</h2>
<p>public interface <strong>Statement</strong><br />
extends <a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_wrapper" target="_blank">Wrapper</a>, AutoCloseable</p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">字段</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#CLOSE_ALL_RESULTS" target="_blank">CLOSE_ALL_RESULTS</a></td>
<td style="text-align:center">该常量指示在调用 getMoreResults时应关闭先前保持打开的所有 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#CLOSE_CURRENT_RESULT" target="_blank">CLOSE_CURRENT_RESULT</a></td>
<td style="text-align:center">该常量指示在调用 getMoreResults时应关闭当前的 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#EXECUTE_FAILED" target="_blank">EXECUTE_FAILED</a></td>
<td style="text-align:center">该常量指示执行批处理语句时发生错误。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#KEEP_CURRENT_RESULT" target="_blank">KEEP_CURRENT_RESULT</a></td>
<td style="text-align:center">该常量指示在调用 getMoreResults时不应关闭当前的 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#NO_GENERATED_KEYS" target="_blank">NO_GENERATED_KEYS</a></td>
<td style="text-align:center">该常量指示不应使生成的键可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#RETURN_GENERATED_KEYS" target="_blank">RETURN_GENERATED_KEYS</a></td>
<td style="text-align:center">常量表示生成的键应该可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">static int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#SUCCESS_NO_INFO" target="_blank">SUCCESS_NO_INFO</a></td>
<td style="text-align:center">该常量指示批处理语句已成功执行但不影响其受影响的行数。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#addBatch(java.lang.String)" target="_blank">addBatch​</a>(String sql)</td>
<td style="text-align:center">将给定的SQL命令添加到此 Statement对象的当前命令列表中。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#cancel()" target="_blank">cancel(</a>)</td>
<td style="text-align:center">如果DBMS和驱动程序都支持中止SQL语句，则取消此 Statement对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#clearBatch()" target="_blank">clearBatch(</a>)</td>
<td style="text-align:center">清空此 Statement对象的当前SQL命令列表。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#clearWarnings()" target="_blank">clearWarnings(</a>)</td>
<td style="text-align:center">清除此 Statement对象上报告的所有警告。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#close()" target="_blank">close(</a>)</td>
<td style="text-align:center">立即释放此 Statement对象的数据库和JDBC资源，而不是等待它自动关闭时发生。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#closeOnCompletion()" target="_blank">closeOnCompletion(</a>)</td>
<td style="text-align:center">指定在关闭所有相关结果集时将关闭此 Statement 。</td>
</tr>
<tr>
<td style="text-align:center">default <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#enquoteIdentifier(java.lang.String,boolean)" target="_blank">enquoteIdentifier​</a>(String identifier, boolean alwaysQuote)</td>
<td style="text-align:center">返回SQL标识符。</td>
</tr>
<tr>
<td style="text-align:center">default <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#enquoteLiteral(java.lang.String)" target="_blank">enquoteLiteral​</a>(String val)</td>
<td style="text-align:center">返回用单引号括起来的 String 。</td>
</tr>
<tr>
<td style="text-align:center">default <a href="cs_java_https:_www.apiref.com_java11-zh_java.base_java_lang_string" target="_blank">String</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#enquoteNCharLiteral(java.lang.String)" target="_blank">enquoteNCharLiteral​</a>(String val)</td>
<td style="text-align:center">返回 String表示用单引号括起来的国家字符集文字，并以大写字母N为前缀。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#execute(java.lang.String)" target="_blank">execute​</a>(String sql)</td>
<td style="text-align:center">执行给定的SQL语句，该语句可能返回多个结果。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#execute(java.lang.String,int)" target="_blank">execute​</a>(String sql, int autoGeneratedKeys)</td>
<td style="text-align:center">执行给定的SQL语句，该语句可能返回多个结果，并向驱动程序发出信号，告知任何自动生成的键应该可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#execute(java.lang.String,int%5B%5D)" target="_blank">execute​</a>(String sql, int[] columnIndexes)</td>
<td style="text-align:center">执行给定的SQL语句，该语句可能返回多个结果，并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#execute(java.lang.String,java.lang.String%5B%5D)" target="_blank">execute​</a>(String sql, String[] columnNames)</td>
<td style="text-align:center">执行给定的SQL语句，该语句可能返回多个结果，并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">int[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeBatch()" target="_blank">executeBatch(</a>)</td>
<td style="text-align:center">将一批命令提交到数据库以供执行，如果所有命令成功执行，则返回一组更新计数。</td>
</tr>
<tr>
<td style="text-align:center">default long[]</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeBatch()" target="_blank">executeLargeBatch(</a>)</td>
<td style="text-align:center">将一批命令提交到数据库以供执行，如果所有命令成功执行，则返回一组更新计数。</td>
</tr>
<tr>
<td style="text-align:center">default long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeUpdate(java.lang.String)" target="_blank">executeLargeUpdate​</a>(String sql)</td>
<td style="text-align:center">执行给定的SQL语句，这可能是 INSERT ， UPDATE ，或 DELETE语句，或者不返回任何内容，如SQL DDL语句的SQL语句。</td>
</tr>
<tr>
<td style="text-align:center">default long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeUpdate(java.lang.String,int)" target="_blank">executeLargeUpdate​</a>(String sql, int autoGeneratedKeys)</td>
<td style="text-align:center">执行给定的SQL语句，并通过给定标志向驱动程序发出信号，告知该 Statement对象生成的自动生成的密钥是否可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">default long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeUpdate(java.lang.String,int%5B%5D)" target="_blank">executeLargeUpdate​</a>(String sql, int[] columnIndexes)</td>
<td style="text-align:center">执行给定的SQL语句并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">default long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeLargeUpdate(java.lang.String,java.lang.String%5B%5D)" target="_blank">executeLargeUpdate​</a>(String sql, String[] columnNames)</td>
<td style="text-align:center">执行给定的SQL语句并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_resultset" target="_blank">ResultSet</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeQuery(java.lang.String)" target="_blank">executeQuery​</a>(String sql)</td>
<td style="text-align:center">执行给定的SQL语句，该语句返回单个 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String)" target="_blank">executeUpdate​</a>(String sql)</td>
<td style="text-align:center">执行给定的SQL语句，这可能是 INSERT ， UPDATE ，或 DELETE语句，或者不返回任何内容，如SQL DDL语句的SQL语句。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String,int)" target="_blank">executeUpdate​</a>(String sql, int autoGeneratedKeys)</td>
<td style="text-align:center">执行给定的SQL语句，并使用给定标志向驱动程序发出信号，告知该 Statement对象生成的自动生成的密钥是否可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String,int%5B%5D)" target="_blank">executeUpdate​</a>(String sql, int[] columnIndexes)</td>
<td style="text-align:center">执行给定的SQL语句并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String,java.lang.String%5B%5D)" target="_blank">executeUpdate​</a>(String sql, String[] columnNames)</td>
<td style="text-align:center">执行给定的SQL语句并向驱动程序发出信号，指示给定数组中指示的自动生成的键应该可用于检索。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_connection" target="_blank">Connection</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getConnection()" target="_blank">getConnection(</a>)</td>
<td style="text-align:center">检索 Connection生成此对象 Statement对象。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getFetchDirection()" target="_blank">getFetchDirection(</a>)</td>
<td style="text-align:center">检索从数据库表中获取行的方向，该方向是从此 Statement对象生成的结果集的缺省值。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getFetchSize()" target="_blank">getFetchSize(</a>)</td>
<td style="text-align:center">检索结果集合的行数是默认为获取大小 ResultSet从该生成的对象 Statement对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_resultset" target="_blank">ResultSet</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getGeneratedKeys()" target="_blank">getGeneratedKeys(</a>)</td>
<td style="text-align:center">检索由于执行此 Statement对象而创建的任何自动生成的密钥。</td>
</tr>
<tr>
<td style="text-align:center">default long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getLargeMaxRows()" target="_blank">getLargeMaxRows(</a>)</td>
<td style="text-align:center">检索此 ResultSet对象生成的 Statement对象可包含的最大行数。</td>
</tr>
<tr>
<td style="text-align:center">default long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getLargeUpdateCount()" target="_blank">getLargeUpdateCount(</a>)</td>
<td style="text-align:center">检索当前结果作为更新计数; 如果结果是ResultSet对象或没有更多结果，则返回-1。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getMaxFieldSize()" target="_blank">getMaxFieldSize(</a>)</td>
<td style="text-align:center">检索此 ResultSet对象生成的 Statement对象中可以为字符和二进制列值返回的最大字节数。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getMaxRows()" target="_blank">getMaxRows(</a>)</td>
<td style="text-align:center">检索此 ResultSet对象生成的 Statement对象可包含的最大行数。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getMoreResults()" target="_blank">getMoreResults(</a>)</td>
<td style="text-align:center">移动到此 Statement对象的下一个结果，如果它是 ResultSet对象，则返回 true ，并隐式关闭使用方法 getResultSet获得的任何当前 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getMoreResults(int)" target="_blank">getMoreResults​</a>(int current)</td>
<td style="text-align:center">移动到此 Statement对象的下一个结果，根据给定标志指定的指令处理任何当前的 ResultSet对象，如果下一个结果是 ResultSet对象，则返回 true 。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getQueryTimeout()" target="_blank">getQueryTimeout(</a>)</td>
<td style="text-align:center">检索驱动程序等待 Statement对象执行的 Statement 。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_resultset" target="_blank">ResultSet</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getResultSet()" target="_blank">getResultSet(</a>)</td>
<td style="text-align:center">以 ResultSet对象的形式检索当前结果。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getResultSetConcurrency()" target="_blank">getResultSetConcurrency(</a>)</td>
<td style="text-align:center">检索此 ResultSet对象生成的 Statement对象的结果集并发性。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getResultSetHoldability()" target="_blank">getResultSetHoldability(</a>)</td>
<td style="text-align:center">检索此 ResultSet对象生成的 Statement对象的结果集可保存性。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getResultSetType()" target="_blank">getResultSetType(</a>)</td>
<td style="text-align:center">检索此 ResultSet对象生成的 Statement对象的结果集类型。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getUpdateCount()" target="_blank">getUpdateCount(</a>)</td>
<td style="text-align:center">检索当前结果作为更新计数; 如果结果是ResultSet对象或没有更多结果，则返回-1。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_sqlwarning" target="_blank">SQLWarning</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#getWarnings()" target="_blank">getWarnings(</a>)</td>
<td style="text-align:center">检索此 Statement对象上的调用报告的第一个警告。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#isClosed()" target="_blank">isClosed(</a>)</td>
<td style="text-align:center">检索此 Statement对象是否已关闭。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#isCloseOnCompletion()" target="_blank">isCloseOnCompletion(</a>)</td>
<td style="text-align:center">返回一个值，该值指示在关闭所有相关结果集时是否将关闭此 Statement 。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#isPoolable()" target="_blank">isPoolable(</a>)</td>
<td style="text-align:center">返回一个值，指示 Statement是否可以使用。</td>
</tr>
<tr>
<td style="text-align:center">default boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#isSimpleIdentifier(java.lang.String)" target="_blank">isSimpleIdentifier​</a>(String identifier)</td>
<td style="text-align:center">检索 identifier是否是简单的SQL标识符。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setCursorName(java.lang.String)" target="_blank">setCursorName​</a>(String name)</td>
<td style="text-align:center">将SQL游标名称设置为给定的 String ，这将由后续的 Statement对象 execute方法使用。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setEscapeProcessing(boolean)" target="_blank">setEscapeProcessing​</a>(boolean enable)</td>
<td style="text-align:center">打开或关闭转义处理。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setFetchDirection(int)" target="_blank">setFetchDirection​</a>(int direction)</td>
<td style="text-align:center">为驱动程序提供有关在使用此 Statement对象创建的 ResultSet对象中处理行的方向的提示。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setFetchSize(int)" target="_blank">setFetchSize​</a>(int rows)</td>
<td style="text-align:center">当此 Statement生成的 ResultSet对象需要更多行时， ResultSet JDBC驱动程序提供有关应从数据库中提取的行数的提示。</td>
</tr>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setLargeMaxRows(long)" target="_blank">setLargeMaxRows​</a>(long max)</td>
<td style="text-align:center">设置此 ResultSet对象生成的任何 Statement对象可包含的最大行数限制为给定数字。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setMaxFieldSize(int)" target="_blank">setMaxFieldSize​</a>(int max)</td>
<td style="text-align:center">设置此 ResultSet对象生成的 Statement对象中字符和二进制列值可返回的最大字节数限制。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setMaxRows(int)" target="_blank">setMaxRows​</a>(int max)</td>
<td style="text-align:center">设置此 ResultSet对象生成的任何 Statement对象可以包含的最大行数限制为给定数字。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setPoolable(boolean)" target="_blank">setPoolable​</a>(boolean poolable)</td>
<td style="text-align:center">请求汇集或不汇集 Statement 。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/Statement.html#setQueryTimeout(int)" target="_blank">setQueryTimeout​</a>(int seconds)</td>
<td style="text-align:center">设置驱动程序等待 Statement对象执行到指定秒数的秒数。</td>
</tr>
</tbody>
</table>
<h2>PreparedStatement</h2>
<p>public interface <strong>Prepared<a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_statement" target="_blank">Statement</a></strong><br />
extends Statement</p>
<table>
<thead>
<tr>
<th style="text-align:center">变量和类型</th>
<th style="text-align:center">方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#addBatch()" target="_blank">addBatch(</a>)</td>
<td style="text-align:center">向此 PreparedStatement对象的一批命令添加一组参数。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#clearParameters()" target="_blank">clearParameters(</a>)</td>
<td style="text-align:center">立即清除当前参数值。</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#execute()" target="_blank">execute(</a>)</td>
<td style="text-align:center">在此 PreparedStatement对象中执行SQL语句，该对象可以是任何类型的SQL语句。</td>
</tr>
<tr>
<td style="text-align:center">default long</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#executeLargeUpdate()" target="_blank">executeLargeUpdate(</a>)</td>
<td style="text-align:center">执行在该SQL语句PreparedStatement对象，它必须是一个SQL数据操纵语言（DML）语句，比如INSERT ， UPDATE或DELETE ; 或者不返回任何内容的SQL语句，例如DDL语句。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_resultset" target="_blank">ResultSet</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#executeQuery()" target="_blank">executeQuery(</a>)</td>
<td style="text-align:center">执行此 PreparedStatement对象中的SQL查询，并返回查询生成的 ResultSet对象。</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#executeUpdate()" target="_blank">executeUpdate(</a>)</td>
<td style="text-align:center">执行在该SQL语句PreparedStatement对象，它必须是一个SQL数据操纵语言（DML）语句，比如INSERT ， UPDATE或DELETE ; 或者不返回任何内容的SQL语句，例如DDL语句。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_resultsetmetadata" target="_blank">ResultSetMetaData</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#getMetaData()" target="_blank">getMetaData(</a>)</td>
<td style="text-align:center">检索 ResultSetMetaData对象，该对象包含有关在执行此 PreparedStatement对象时将返回的 ResultSet对象的列的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_java_https:_www.apiref.com_java11-zh_java.sql_java_sql_parametermetadata" target="_blank">ParameterMetaData</a></td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#getParameterMetaData()" target="_blank">getParameterMetaData(</a>)</td>
<td style="text-align:center">检索此 PreparedStatement对象参数的数量，类型和属性。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setArray(int,java.sql.Array)" target="_blank">setArray​</a>(int parameterIndex, Array x)</td>
<td style="text-align:center">将指定参数设置为给定的 java.sql.Array对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setAsciiStream(int,java.io.InputStream)" target="_blank">setAsciiStream​</a>(int parameterIndex, InputStream x)</td>
<td style="text-align:center">将指定参数设置为给定输入流。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setAsciiStream(int,java.io.InputStream,int)" target="_blank">setAsciiStream​</a>(int parameterIndex, InputStream x, int length)</td>
<td style="text-align:center">将指定参数设置为给定输入流，该输入流将具有指定的字节数。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setAsciiStream(int,java.io.InputStream,long)" target="_blank">setAsciiStream​</a>(int parameterIndex, InputStream x, long length)</td>
<td style="text-align:center">将指定参数设置为给定输入流，该输入流将具有指定的字节数。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBigDecimal(int,java.math.BigDecimal)" target="_blank">setBigDecimal​</a>(int parameterIndex, BigDecimal x)</td>
<td style="text-align:center">将指定参数设置为给定的 java.math.BigDecimal值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBinaryStream(int,java.io.InputStream)" target="_blank">setBinaryStream​</a>(int parameterIndex, InputStream x)</td>
<td style="text-align:center">将指定参数设置为给定输入流。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBinaryStream(int,java.io.InputStream,int)" target="_blank">setBinaryStream​</a>(int parameterIndex, InputStream x, int length)</td>
<td style="text-align:center">将指定参数设置为给定输入流，该输入流将具有指定的字节数。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBinaryStream(int,java.io.InputStream,long)" target="_blank">setBinaryStream​</a>(int parameterIndex, InputStream x, long length)</td>
<td style="text-align:center">将指定参数设置为给定输入流，该输入流将具有指定的字节数。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBlob(int,java.io.InputStream)" target="_blank">setBlob​</a>(int parameterIndex, InputStream inputStream)</td>
<td style="text-align:center">将指定参数设置为 InputStream对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBlob(int,java.io.InputStream,long)" target="_blank">setBlob​</a>(int parameterIndex, InputStream inputStream, long length)</td>
<td style="text-align:center">将指定参数设置为 InputStream对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBlob(int,java.sql.Blob)" target="_blank">setBlob​</a>(int parameterIndex, Blob x)</td>
<td style="text-align:center">将指定参数设置为给定的 java.sql.Blob对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBoolean(int,boolean)" target="_blank">setBoolean​</a>(int parameterIndex, boolean x)</td>
<td style="text-align:center">将指定参数设置为给定的Java boolean值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setByte(int,byte)" target="_blank">setByte​</a>(int parameterIndex, byte x)</td>
<td style="text-align:center">将指定参数设置为给定的Java byte值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setBytes(int,byte%5B%5D)" target="_blank">setBytes​</a>(int parameterIndex, byte[] x)</td>
<td style="text-align:center">将指定参数设置为给定的Java字节数组。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setCharacterStream(int,java.io.Reader)" target="_blank">setCharacterStream​</a>(int parameterIndex, Reader reader)</td>
<td style="text-align:center">将指定参数设置为给定的 Reader对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setCharacterStream(int,java.io.Reader,int)" target="_blank">setCharacterStream​</a>(int parameterIndex, Reader reader, int length)</td>
<td style="text-align:center">将指定参数设置为给定的 Reader对象，该对象是给定的字符长度。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setCharacterStream(int,java.io.Reader,long)" target="_blank">setCharacterStream​</a>(int parameterIndex, Reader reader, long length)</td>
<td style="text-align:center">将指定参数设置为给定的 Reader对象，该对象是给定的字符长度。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setClob(int,java.io.Reader)" target="_blank">setClob​</a>(int parameterIndex, Reader reader)</td>
<td style="text-align:center">将指定参数设置为 Reader对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setClob(int,java.io.Reader,long)" target="_blank">setClob​</a>(int parameterIndex, Reader reader, long length)</td>
<td style="text-align:center">将指定参数设置为 Reader对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setClob(int,java.sql.Clob)" target="_blank">setClob​</a>(int parameterIndex, Clob x)</td>
<td style="text-align:center">将指定参数设置为给定的 java.sql.Clob对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setDate(int,java.sql.Date)" target="_blank">setDate​</a>(int parameterIndex, Date x)</td>
<td style="text-align:center">使用运行应用程序的虚拟机的默认时区将指定参数设置为给定的 java.sql.Date值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setDate(int,java.sql.Date,java.util.Calendar)" target="_blank">setDate​</a>(int parameterIndex, Date x, Calendar cal)</td>
<td style="text-align:center">使用给定的 Calendar对象将指定参数设置为给定的 java.sql.Date值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setDouble(int,double)" target="_blank">setDouble​</a>(int parameterIndex, double x)</td>
<td style="text-align:center">将指定参数设置为给定的Java double值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setFloat(int,float)" target="_blank">setFloat​</a>(int parameterIndex, float x)</td>
<td style="text-align:center">将指定参数设置为给定的Java float值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setInt(int,int)" target="_blank">setInt​</a>(int parameterIndex, int x)</td>
<td style="text-align:center">将指定参数设置为给定的Java int值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setLong(int,long)" target="_blank">setLong​</a>(int parameterIndex, long x)</td>
<td style="text-align:center">将指定参数设置为给定的Java long值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNCharacterStream(int,java.io.Reader)" target="_blank">setNCharacterStream​</a>(int parameterIndex, Reader value)</td>
<td style="text-align:center">将指定参数设置为 Reader对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNCharacterStream(int,java.io.Reader,long)" target="_blank">setNCharacterStream​</a>(int parameterIndex, Reader value, long length)</td>
<td style="text-align:center">将指定参数设置为 Reader对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNClob(int,java.io.Reader)" target="_blank">setNClob​</a>(int parameterIndex, Reader reader)</td>
<td style="text-align:center">将指定参数设置为 Reader对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNClob(int,java.io.Reader,long)" target="_blank">setNClob​</a>(int parameterIndex, Reader reader, long length)</td>
<td style="text-align:center">将指定参数设置为 Reader对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNClob(int,java.sql.NClob)" target="_blank">setNClob​</a>(int parameterIndex, NClob value)</td>
<td style="text-align:center">将指定参数设置为 java.sql.NClob对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNString(int,java.lang.String)" target="_blank">setNString​</a>(int parameterIndex, String value)</td>
<td style="text-align:center">将指定参数设置为给定的 String对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNull(int,int)" target="_blank">setNull​</a>(int parameterIndex, int sqlType)</td>
<td style="text-align:center">将指定参数设置为SQL NULL 。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setNull(int,int,java.lang.String)" target="_blank">setNull​</a>(int parameterIndex, int sqlType, String typeName)</td>
<td style="text-align:center">将指定的参数设置为SQL NULL 。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object)" target="_blank">setObject​</a>(int parameterIndex, Object x)</td>
<td style="text-align:center">使用给定对象设置指定参数的值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object,int)" target="_blank">setObject​</a>(int parameterIndex, Object x, int targetSqlType)</td>
<td style="text-align:center">使用给定对象设置指定参数的值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object,int,int)" target="_blank">setObject​</a>(int parameterIndex, Object x, int targetSqlType, int scaleOrLength)</td>
<td style="text-align:center">使用给定对象设置指定参数的值。</td>
</tr>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object,java.sql.SQLType)" target="_blank">setObject​</a>(int parameterIndex, Object x, SQLType targetSqlType)</td>
<td style="text-align:center">使用给定对象设置指定参数的值。</td>
</tr>
<tr>
<td style="text-align:center">default void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setObject(int,java.lang.Object,java.sql.SQLType,int)" target="_blank">setObject​</a>(int parameterIndex, Object x, SQLType targetSqlType, int scaleOrLength)</td>
<td style="text-align:center">使用给定对象设置指定参数的值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setRef(int,java.sql.Ref)" target="_blank">setRef​</a>(int parameterIndex, Ref x)</td>
<td style="text-align:center">将指定参数设置为给定的 REF()值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setRowId(int,java.sql.RowId)" target="_blank">setRowId​</a>(int parameterIndex, RowId x)</td>
<td style="text-align:center">将指定参数设置为给定的 java.sql.RowId对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setShort(int,short)" target="_blank">setShort​</a>(int parameterIndex, short x)</td>
<td style="text-align:center">将指定参数设置为给定的Java short值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setSQLXML(int,java.sql.SQLXML)" target="_blank">setSQLXML​</a>(int parameterIndex, SQLXML xmlObject)</td>
<td style="text-align:center">将指定参数设置为给定的 java.sql.SQLXML对象。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setString(int,java.lang.String)" target="_blank">setString​</a>(int parameterIndex, String x)</td>
<td style="text-align:center">将指定参数设置为给定的Java String值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setTime(int,java.sql.Time)" target="_blank">setTime​</a>(int parameterIndex, Time x)</td>
<td style="text-align:center">将指定参数设置为给定的 java.sql.Time值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setTime(int,java.sql.Time,java.util.Calendar)" target="_blank">setTime​</a>(int parameterIndex, Time x, Calendar cal)</td>
<td style="text-align:center">使用给定的 Calendar对象将指定参数设置为给定的 java.sql.Time值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setTimestamp(int,java.sql.Timestamp)" target="_blank">setTimestamp​</a>(int parameterIndex, Timestamp x)</td>
<td style="text-align:center">将指定参数设置为给定的 java.sql.Timestamp值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setTimestamp(int,java.sql.Timestamp,java.util.Calendar)" target="_blank">setTimestamp​</a>(int parameterIndex, Timestamp x, Calendar cal)</td>
<td style="text-align:center">使用给定的 Calendar对象将指定参数设置为给定的 java.sql.Timestamp值。</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center"><a href="https://www.apiref.com/java11-zh/java.sql/java/sql/PreparedStatement.html#setURL(int,java.net.URL)" target="_blank">setURL​</a>(int parameterIndex, URL x)</td>
<td style="text-align:center">将指定参数设置为给定的 java.net.URL值。</td>
</tr>
</tbody>
</table>
<h2>ConnectionPool</h2>
