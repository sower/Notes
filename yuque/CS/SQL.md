<p><strong>SQL(结构化查询语言，Structured Query Language)</strong></p>
<p>一种 ANSI（American National Standards Institute 美国国家标准化组织）标准的计算机语言。</p>
<ul>
<li>
<p>大小写不敏感</p>
</li>
<li>
<p>每条语句的末端使用分号(;)</p>
</li>
</ul>
<p><strong>DBMS</strong>（database management system，数据库管理系统） 是一种针对<a href="https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1%E6%95%B0%E6%8D%AE%E5%BA%93" target="_blank">对象数据库</a>，为管理数据库而设计的大型电脑软件管理系统。</p>
<p>RDBMS (关系型数据库管理系统，Relational Database Management System)</p>
<p>SQL分类</p>
<ul>
<li>
<p>DQL（Data Query Language，数据查询语言）：用于从数据库或信息系统中查询数据</p>
</li>
<li>
<p>DDL（Data Definition Language，数据定义语言）：定义数据库模式</p>
</li>
<li>
<p>DML（Data Manipulation Language，数据操纵语言）：表达数据库的查询，更新</p>
</li>
<li>
<p>DCL (Data Control Language，资料控制语言) ：对资料访问权进行控制</p>
</li>
</ul>
<p><strong>关系键</strong></p>
<p>主键（primary key，主码）<a href="https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8" target="_blank">数据库表</a>中对储存数据对象予以唯一和完整标识的数据列或属性的组合。一个数据表只能有一个主键，且主键的取值不能为空。</p>
<p>外键（foreign key）</p>
<p>超键（superkey）：数据库<a href="https://zh.wikipedia.org/w/index.php?title=%E5%85%B3%E7%B3%BB%E6%A8%A1%E5%BC%8F&amp;action=edit&amp;redlink=1" target="_blank">关系模式</a>设计中能够唯一标示多元组（即“行”）的属性集。</p>
<p>候选键（candidate key）是某个<a href="https://zh.wikipedia.org/w/index.php?title=%E5%85%B3%E7%B3%BB%E5%8F%98%E9%87%8F&amp;action=edit&amp;redlink=1" target="_blank">关系变量</a>的一组属性所组成的集合，它需要同时满足下列两个条件：</p>
<ol>
<li>
<p>这个属性集合始终能够确保在关系中能唯一标识元组</p>
</li>
<li>
<p>在这个属性集合中找不出真子集能够满足条件(1)</p>
</li>
</ol>
<h2>范式</h2>
<p><a href="https://baike.baidu.com/item/%E7%AC%AC%E4%B8%80%E8%8C%83%E5%BC%8F" target="_blank">第一范式</a>（1NF）</p>
<p>数据库<a href="https://baike.baidu.com/item/%E8%A1%A8/9997188" target="_blank">表</a>的每一列都是不可分割的基本数据项，同一列中不能有多个值，即无重复的列</p>
<p>字段不能再分</p>
<p><a href="https://baike.baidu.com/item/%E7%AC%AC%E4%BA%8C%E8%8C%83%E5%BC%8F" target="_blank">第二范式</a>（2NF）</p>
<p>数据库表中的每个<a href="https://baike.baidu.com/item/%E5%AE%9E%E4%BE%8B" target="_blank">实例</a>或行必须可以被唯一地区分，即非主属性完全依赖于主关键字</p>
<p>不出现部分依赖</p>
<p><a href="https://baike.baidu.com/item/%E7%AC%AC%E4%B8%89%E8%8C%83%E5%BC%8F" target="_blank">第三范式</a>（3NF）</p>
<p>数据库表中不包含已在其它表中已包含的非主关键字信息。即属性不依赖于其它非主属性</p>
<p>不能出现传递依赖</p>
<p>Boyce-Codd范式（<a href="https://baike.baidu.com/item/BCNF" target="_blank">BCNF</a>）</p>
<p><a href="https://baike.baidu.com/item/%E7%AC%AC%E5%9B%9B%E8%8C%83%E5%BC%8F" target="_blank">第四范式</a>（4NF）</p>
<p><a href="https://baike.baidu.com/item/%E7%AC%AC%E4%BA%94%E8%8C%83%E5%BC%8F" target="_blank">第五范式</a>（5NF）</p>
<h2>数据类型</h2>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">INT</td>
<td style="text-align:center">整型</td>
<td style="text-align:center">4字节整数类型，范围约+/-21亿</td>
</tr>
<tr>
<td style="text-align:center">BIGINT</td>
<td style="text-align:center">长整型</td>
<td style="text-align:center">8字节整数类型，范围约+/-922亿亿</td>
</tr>
<tr>
<td style="text-align:center">REAL</td>
<td style="text-align:center">浮点型</td>
<td style="text-align:center">4字节浮点数，范围约+/-1038</td>
</tr>
<tr>
<td style="text-align:center">DOUBLE</td>
<td style="text-align:center">浮点型</td>
<td style="text-align:center">8字节浮点数，范围约+/-10308</td>
</tr>
<tr>
<td style="text-align:center">DECIMAL(M,N)</td>
<td style="text-align:center">高精度小数</td>
<td style="text-align:center">由用户指定精度的小数，例如，DECIMAL(20,10)表示一共20位，其中小数10位，通常用于财务计算</td>
</tr>
<tr>
<td style="text-align:center">CHAR(N)</td>
<td style="text-align:center">定长字符串</td>
<td style="text-align:center">存储指定长度的字符串，例如，CHAR(100)总是存储100个字符的字符串</td>
</tr>
<tr>
<td style="text-align:center">VARCHAR(N)</td>
<td style="text-align:center">变长字符串</td>
<td style="text-align:center">存储可变长度的字符串，例如，VARCHAR(100)可以存储0~100个字符的字符串</td>
</tr>
<tr>
<td style="text-align:center">BOOLEAN</td>
<td style="text-align:center">布尔类型</td>
<td style="text-align:center">存储True或者False</td>
</tr>
<tr>
<td style="text-align:center">DATE</td>
<td style="text-align:center">日期类型</td>
<td style="text-align:center">存储日期，例如，2018-06-22</td>
</tr>
<tr>
<td style="text-align:center">TIME</td>
<td style="text-align:center">时间类型</td>
<td style="text-align:center">存储时间，例如，12:20:59</td>
</tr>
<tr>
<td style="text-align:center">DATETIME</td>
<td style="text-align:center">日期和时间类型</td>
<td style="text-align:center">存储日期+时间，例如，2018-06-22 12:20:59</td>
</tr>
</tbody>
</table>
<h2>TYPE</h2>
<pre data-syntax="sql"><code class="lang-sql hljs raw">create type dollars as numeric(12,2) final

</code></pre>
<h2>CAST</h2>
<pre data-syntax="sql"><code class="lang-sql hljs raw">cast (table.column to numeric(12,2))

</code></pre>
<h2>DOMAIN</h2>
<pre data-syntax="sql"><code class="lang-sql hljs raw">create domain dollars as numeric(12,2) not null

</code></pre>
<p>domain（域）与type（用户自定义类型）相比： <strong>可声明约束，定义默认值，非强类型</strong></p>
<h2>SCHEMA</h2>
<p>模式</p>
<h1>授权(Authorization)</h1>
<p><strong>权限（Privilege）：select、insert、update、delete</strong></p>
<h2>GRANT</h2>
<pre data-syntax="sql"><code class="lang-sql hljs raw">grant &lt;权限列表&gt;
on &lt;关系名|视图名&gt;
to  &lt;用户|角色列表&gt;
[with grant option] #权限转移

</code></pre>
<h2>REVOKE</h2>
<pre data-syntax="sql"><code class="lang-sql hljs raw">revoke &lt;权限列表|grant option&gt;
on &lt;关系名|视图名&gt;
from  &lt;用户|角色列表&gt;
[restrict]  #防止级联回收

</code></pre>
<h2>ROLE</h2>
<pre data-syntax="sql"><code class="lang-sql hljs raw">create role &lt;role_name&gt;

</code></pre>
