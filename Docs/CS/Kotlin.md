<h1>—— <a href="https://kotlinlang.org/" target="_blank">Kotlin</a> ——</h1>
<p>一种开源的, 静态类型的编程语言, 针对的目标平台是 JVM, Android, JavaScript 以及 Native 应用. Kotlin 由 <a href="https://www.jetbrains.com/" target="_blank">JetBrains 公司</a> 开发. Kotlin 项目开始于 2010 年, 并在很早的阶段开源. 第一次正式发布的 1.0 版是在 2016 年 2 月.</p>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">fun main() {
    println("Hello world!")
}

</code></pre>
<h2>Comments</h2>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">// This is an end-of-line comment

/* This is a block comment
   on multiple lines. */

</code></pre>
<p><strong>Basic types</strong></p>
<p><strong>Numbers</strong></p>
<p><strong>Integer types</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">Type</th>
<th style="text-align:center">Size (bits)</th>
<th style="text-align:center">Min value</th>
<th style="text-align:center">Max value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Byte</td>
<td style="text-align:center">8</td>
<td style="text-align:center">-128</td>
<td style="text-align:center">127</td>
</tr>
<tr>
<td style="text-align:center">Short</td>
<td style="text-align:center">16</td>
<td style="text-align:center">-32768</td>
<td style="text-align:center">32767</td>
</tr>
<tr>
<td style="text-align:center">Int</td>
<td style="text-align:center">32</td>
<td style="text-align:center">-2,147,483,648 (-231)</td>
<td style="text-align:center">2,147,483,647 (231 - 1)</td>
</tr>
<tr>
<td style="text-align:center">Long</td>
<td style="text-align:center">64</td>
<td style="text-align:center">-9,223,372,036,854,775,808 (-263)</td>
<td style="text-align:center">9,223,372,036,854,775,807 (263 - 1)</td>
</tr>
</tbody>
</table>
<p><strong>Floating-point types</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">Type</th>
<th style="text-align:center">Size (bits)</th>
<th style="text-align:center">Significant bits</th>
<th style="text-align:center">Exponent bits</th>
<th style="text-align:center">Decimal digits</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Float</td>
<td style="text-align:center">32</td>
<td style="text-align:center">24</td>
<td style="text-align:center">8</td>
<td style="text-align:center">6-7</td>
</tr>
<tr>
<td style="text-align:center">Double</td>
<td style="text-align:center">64</td>
<td style="text-align:center">53</td>
<td style="text-align:center">11</td>
<td style="text-align:center">15-16</td>
</tr>
</tbody>
</table>
<p><strong>Literal constants</strong></p>
<ul>
<li>
<p>Decimals: 123</p>
</li>
<li>
<p>Longs are tagged by a capital L: 123L</p>
</li>
<li>
<p>Hexadecimals: 0x0F</p>
</li>
<li>
<p>Binaries: 0b00001011</p>
</li>
</ul>
<p><strong>Boolean</strong></p>
<p>true and false</p>
<p>Char</p>
<p>'c'</p>
<p><strong>String</strong></p>
<p>" "</p>
<p>raw string</p>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">"""
raw
"""

</code></pre>
<p><strong>String templates</strong></p>
<p>"$var    ${expression}"</p>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">val s = "abc"
println("$s.length is ${s.length}") // prints "abc.length is 3"

val price = """
${'$'}_9.99
"""

</code></pre>
<p><strong>Arrays</strong></p>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">class Array&lt;T&gt; private constructor() {
    val size: Int
    operator fun get(index: Int): T
    operator fun set(index: Int, value: T): Unit

    operator fun iterator(): Iterator&lt;T&gt;
    // ...
}

</code></pre>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">// 创建一个 Array&lt;String&gt;, 其中的元素为 ["0", "1", "4", "9", "16"]
val asc = Array(5) { i -&gt; (i * i).toString() }
asc.forEach { println(it) }

val x: IntArray = intArrayOf(1, 2, 3)

// 长度为 5 的 int 数组, 元素值为 [0, 0, 0, 0, 0]
val arr = IntArray(5)

// 示例, 使用常数初始化数组元素值
// 长度为 5 的 int 数组, 元素值为 [42, 42, 42, 42, 42]
val arr = IntArray(5) { 42 }

// 示例. 使用 lambda 函数初始化数组元素值
// 长度为 5 的 int 数组, 元素值为 [0, 1, 2, 3, 4] (元素值使用其下标值)
var arr = IntArray(5) { it * 1 }

</code></pre>
<h2>Variables</h2>
<p>Control flow</p>
<p><strong>If expression</strong></p>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">val max = if (a &gt; b) a else b

</code></pre>
<p><strong>When expression</strong></p>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">when (x) {
    0, 1 -&gt; print("x == 0 or x == 1")
    else -&gt; { 
        print("otherwise") 
    }
}

fun hasPrefix(x: Any) = when(x) {
    is String -&gt; x.startsWith("prefix")
    else -&gt; false
}

</code></pre>
<p><strong>For loops</strong></p>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">for ((index, value) in array.withIndex()) {
    println("the element at $index is $value")
}

</code></pre>
<p><strong>While loops</strong></p>
<p><strong>Break and continue in loops</strong></p>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">loop@ for (i in 1..100) {
    for (j in 1..100) {
        if (...) break@loop
    }
}

</code></pre>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">fun foo() {
    listOf(1, 2, 3, 4, 5).forEach lit@{
        if (it == 3) return@lit // local return to the caller of the lambda - the forEach loop
        print(it)
    }
    print(" done with explicit label")
}

fun foo() {
    listOf(1, 2, 3, 4, 5).forEach {
        if (it == 3) return@forEach // local return to the caller of the lambda - the forEach loop
        print(it)
    }
    print(" done with implicit label")
}

</code></pre>
<h2>Functions</h2>
<pre data-syntax="kotlin"><code class="lang-kotlin hljs raw">fun read(
    b: Array&lt;Byte&gt;,
    off: Int = 0,
    len: Int = b.size, // 尾随逗号(trailing comma)
) { /*...*/ }

</code></pre>
<h1>Idioms</h1>
<h2>DTOs (POJOs/POCOs)</h2>
<ul>
<li>
<p>getters (and setters in case of vars) for all properties</p>
</li>
<li>
<p>equals()</p>
</li>
<li>
<p>hashCode()</p>
</li>
<li>
<p>toString()</p>
</li>
<li>
<p>copy()</p>
</li>
<li>
<p>component1(), component2(), ..., for all properties</p>
</li>
</ul>
