<h1>—— Not Only SQL ——</h1>
<p>非关系型数据库：可以处理分布式、规模庞大、类型不确定、完整性没有保证的“杂乱”数据</p>
<p><strong>CAP 理论</strong>：针对分布式数据库而言的，指在一个分布式系统中，一致性、可用性、分区容错性三者不可兼得。</p>
<ul>
<li>
<p>一致性(Consistency)：所有节点在同一时间具有相同的数据</p>
</li>
<li>
<p>可用性(Availability)：保证每个请求不管成功或者失败都有响应</p>
</li>
<li>
<p>分隔容忍(Partition tolerance) ：系统中任意信息的丢失或失败不会影响系统的继续运作</p>
</li>
</ul>
<p><img src="https://www.runoob.com/wp-content/uploads/2013/10/cap-theoram-image.png" alt class="align-none" /></p>
<p><strong>BASE理论</strong>（由 Eric Brewer 定义）</p>
<p>NoSQL数据库通常对可用性及一致性的弱要求原则:</p>
<ul>
<li>
<p>Basically Availble --基本可用</p>
</li>
<li>
<p>Soft-state --软状态/柔性事务。 "Soft state" 可以理解为"无连接"的, 而 "Hard state" 是"面向连接"的</p>
</li>
<li>
<p>Eventual Consistency -- 最终一致性， 也是是 ACID 的最终目的。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">分类</th>
<th style="text-align:center">相关产品</th>
<th style="text-align:center">应用场景</th>
<th style="text-align:center">数据模型</th>
<th style="text-align:center">优点</th>
<th style="text-align:center">缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">键值数据库</td>
<td style="text-align:center"><a href="http://c.biancheng.net/redis/" target="_blank">Redis、</a>Memcached、Riak</td>
<td style="text-align:center">内容缓存，如会话、配置文件、参数等； 频繁读写、拥有简单数据模型的应用</td>
<td style="text-align:center">&lt;key,value&gt; 键值对，通过散列表来实现</td>
<td style="text-align:center">扩展性好，灵活性好，大量操作时性能高</td>
<td style="text-align:center">数据无结构化，通常只被当做字符串或者二进制数据，只能通过键来查询值</td>
</tr>
<tr>
<td style="text-align:center">列族数据库</td>
<td style="text-align:center">Bigtable、<a href="http://c.biancheng.net/hbase/" target="_blank">HBase、</a>Cassandra</td>
<td style="text-align:center">分布式数据存储与管理</td>
<td style="text-align:center">以列族式存储，将同一列数据存在一起</td>
<td style="text-align:center">可扩展性强，查找速度快，复杂性低</td>
<td style="text-align:center">功能局限，不支持事务的强一致性</td>
</tr>
<tr>
<td style="text-align:center">文档数据库</td>
<td style="text-align:center"><a href="http://c.biancheng.net/mongodb/" target="_blank">MongoDB、</a>CouchDB</td>
<td style="text-align:center">Web 应用，存储面向文档或类似半结构化的数据</td>
<td style="text-align:center">&lt;key,value&gt;  value 是 JSON 结构的文档</td>
<td style="text-align:center"><a href="http://c.biancheng.net/data_structure/" target="_blank">数据结构灵</a>活，可以根据 value 构建索引</td>
<td style="text-align:center">缺乏统一查询语法</td>
</tr>
<tr>
<td style="text-align:center">图形数据库</td>
<td style="text-align:center"><a href="cs_sql_http:_c.biancheng.net_view_6579" target="_blank">Neo4j、</a>InfoGrid</td>
<td style="text-align:center">社交网络、推荐系统，专注构建关系图谱</td>
<td style="text-align:center">图结构</td>
<td style="text-align:center">支持复杂的图形算法</td>
<td style="text-align:center">复杂性高，只能支持一定的数据规模</td>
</tr>
</tbody>
</table>
<h1>—— Redis ——</h1>
<p>Remote Dictionary Server（远程字典服务器）</p>
<p>由Salvatore Sanfilippo编写的key-value存储系统。</p>
<p>一个开源的使用ANSI C语言编写、遵守BSD协议、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。</p>
<p><strong>Redis架构</strong></p>
<ul>
<li>
<p>redis-cli：客户端</p>
</li>
<li>
<p>redis-server：服务器</p>
</li>
<li>
<p>redis-check-dump：本地数据库检查</p>
</li>
<li>
<p>redis-check-aof：更新日志检查（Append-only file）</p>
</li>
<li>
<p>redis-benchmark：性能测试，用以模拟同时由N个客户端发送M个 SETs/GETs 查询</p>
</li>
</ul>
<p>redis-cli -h host -p port -a password</p>
<ul>
<li>
<p>设置密码：CONFIG set requirepass "password"</p>
</li>
<li>
<p>查看密码：CONFIG get requirepass</p>
</li>
<li>
<p>验证密码：AUTH password</p>
</li>
</ul>
<p><strong>连接</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_connection_auth" target="_blank">AUTH password</a></td>
<td style="text-align:center">使用给定的密码验证服务器</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_connection_echo" target="_blank">ECHO message</a></td>
<td style="text-align:center">打印给定的字符串信息</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_connection_ping" target="_blank">PING</a></td>
<td style="text-align:center">检查服务器是否正在运行</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_connection_quit" target="_blank">QUIT</a></td>
<td style="text-align:center">关闭当前连接</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_connection_select" target="_blank">SELECT index</a></td>
<td style="text-align:center">更改当前连接的所选数据库</td>
</tr>
</tbody>
</table>
<p>性能测试：redis-benchmark [option] [option value]</p>
<table>
<thead>
<tr>
<th style="text-align:center">选项</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-h</td>
<td style="text-align:center">指定服务器主机名</td>
<td style="text-align:center">127.0.0.1</td>
</tr>
<tr>
<td style="text-align:center">-p</td>
<td style="text-align:center">指定服务器端口</td>
<td style="text-align:center">6379</td>
</tr>
<tr>
<td style="text-align:center">-s</td>
<td style="text-align:center">指定服务器套接字</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-c</td>
<td style="text-align:center">指定并行连接的数量</td>
<td style="text-align:center">50</td>
</tr>
<tr>
<td style="text-align:center">-n</td>
<td style="text-align:center">指定请求的总数</td>
<td style="text-align:center">10000</td>
</tr>
<tr>
<td style="text-align:center">-d</td>
<td style="text-align:center">指定SET/GET值的数据大小(以字节为单位)</td>
<td style="text-align:center">2</td>
</tr>
<tr>
<td style="text-align:center">-k</td>
<td style="text-align:center">1=keep alive, 0=reconnect</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center">-r</td>
<td style="text-align:center">使用SET/GET/INCR的随机键，SADD的随机值</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-p</td>
<td style="text-align:center">管道请求</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center">-h</td>
<td style="text-align:center">指定服务器主机名</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-q</td>
<td style="text-align:center">强制让Redis安装。 只显示query/sec值</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">--csv</td>
<td style="text-align:center">以CSV格式输出</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-l</td>
<td style="text-align:center">生成循环，永久运行测试</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-t</td>
<td style="text-align:center">只运行逗号分隔的测试列表</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">-I</td>
<td style="text-align:center">空闲模式。 只打开N个空闲连接并等待</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<p>示例：redis-benchmark -h 127.0.0.1 -p 6379 -t set,lpush -n 10000 -q</p>
<h1>数据类型</h1>
<table>
<thead>
<tr>
<th style="text-align:center">数据类型</th>
<th style="text-align:center">数据类型存储的值</th>
<th style="text-align:center">说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">STRING （字符串）</td>
<td style="text-align:center">可以是保存字符串、整数和浮点数</td>
<td style="text-align:center">对字符串进行操作，如增加字符或者求子串：如果是整数或者浮点数，可以计算，如自增等</td>
</tr>
<tr>
<td style="text-align:center">LIST （列表）</td>
<td style="text-align:center">一个链表，它的每一个节点都包含一个字符串</td>
<td style="text-align:center">可以在链表的两端插入或者弹出节点，或者通过偏移对它进行裁剪；还可以读取一个或者多个节点，根据条件删除或者查找节点等</td>
</tr>
<tr>
<td style="text-align:center">SET （集合）</td>
<td style="text-align:center">无序集合，每一个元素都是一个字符串</td>
<td style="text-align:center">可以新增、读取、删除单个元素：检测一个元素是否在集合中；进行集合的运算；随机从集合中读取元素</td>
</tr>
<tr>
<td style="text-align:center">HASH （哈希散列表）</td>
<td style="text-align:center">一个键值对应的无序列表</td>
<td style="text-align:center">可以増、删、査、改单个键值对，也可以获取所有的键值对</td>
</tr>
<tr>
<td style="text-align:center">ZSET （有序集合）</td>
<td style="text-align:center">有序的集合，可包含字符 串、整数、浮点数、分值（score），排序是依据分值的大小来决定的</td>
<td style="text-align:center">可以增、删、査、改元素，根据分值的范围或者成员來获取对应的元索</td>
</tr>
<tr>
<td style="text-align:center">HyperLogLog （基数）</td>
<td style="text-align:center">计算重复的值，以确定存储的数量</td>
<td style="text-align:center">只提供基数的运算，不提供返回的功能</td>
</tr>
</tbody>
</table>
<h1>命令</h1>
<h2>基本命令</h2>
<p>help 	查看帮助</p>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_del" target="_blank">DEL key</a></td>
<td style="text-align:center">此命令删除一个指定键(如果存在)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_dump" target="_blank">DUMP key</a></td>
<td style="text-align:center">此命令返回存储在指定键的值的序列化版本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_exists" target="_blank">EXISTS key</a></td>
<td style="text-align:center">此命令检查键是否存在。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_keys" target="_blank">KEYS pattern</a></td>
<td style="text-align:center">查找与指定模式匹配的所有键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_move" target="_blank">MOVE key db</a></td>
<td style="text-align:center">将键移动到另一个数据库。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_randomkey" target="_blank">RANDOMKEY</a></td>
<td style="text-align:center">从Redis返回一个随机的键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_rename" target="_blank">RENAME key newkey</a></td>
<td style="text-align:center">更改键的名称。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_renamenx" target="_blank">RENAMENX key newkey</a></td>
<td style="text-align:center">如果新键不存在，重命名键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_keys_type" target="_blank">TYPE key</a></td>
<td style="text-align:center">返回存储在键中的值的数据类型。</td>
</tr>
<tr>
<td style="text-align:center">clear</td>
<td style="text-align:center">清屏</td>
</tr>
</tbody>
</table>
<h2>String</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">描述说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_set" target="_blank">SET key value</a></td>
<td style="text-align:center">设置或更改指定键的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_get" target="_blank">GET key</a></td>
<td style="text-align:center">获取指定键的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_setnx" target="_blank">SETNX key value</a></td>
<td style="text-align:center">设置键的值，仅当键不存在时</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_mset" target="_blank">MSET key value [key value …]</a></td>
<td style="text-align:center">为多个键分别设置它们的值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_msetnx" target="_blank">MSETNX key value [key value …]</a></td>
<td style="text-align:center">为多个键分别设置它们的值，仅当键不存在时</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_mget" target="_blank">MGET key1 [key2..]</a></td>
<td style="text-align:center">获取所有给定键的值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_getrange" target="_blank">GETRANGE key start end</a></td>
<td style="text-align:center">获取存储在键上的字符串的子字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_getset" target="_blank">GETSET key value</a></td>
<td style="text-align:center">设置键的字符串值并返回其旧值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_strlen" target="_blank">STRLEN key</a></td>
<td style="text-align:center">获取存储在键中的值的长度</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_incr" target="_blank">INCR key</a></td>
<td style="text-align:center">将键的整数值增加1</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_incrby" target="_blank">INCRBY key increment</a></td>
<td style="text-align:center">将键的整数值按给定的数值增加</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_incrbyfloat" target="_blank">INCRBYFLOAT key increment</a></td>
<td style="text-align:center">将键的浮点值按给定的数值增加</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_decr" target="_blank">DECR key</a></td>
<td style="text-align:center">将键的整数值减1</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_decrby" target="_blank">DECRBY key decrement</a></td>
<td style="text-align:center">按给定数值减少键的整数值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_append" target="_blank">APPEND key value</a></td>
<td style="text-align:center">将指定值附加到键</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_getbit" target="_blank">GETBIT key offset</a></td>
<td style="text-align:center">返回在键处存储的字符串值中偏移处的位值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_setbit" target="_blank">SETBIT key offset value</a></td>
<td style="text-align:center">存储在键上的字符串值中设置或清除偏移处的位</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_setrange" target="_blank">SETRANGE key offset value</a></td>
<td style="text-align:center">在指定偏移处开始的键处覆盖字符串的一部分</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_setex" target="_blank">SETEX key seconds value</a></td>
<td style="text-align:center">使用键和到期时间来设置值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_strings_psetex" target="_blank">PSETEX key milliseconds value</a></td>
<td style="text-align:center">设置键的值和到期时间(以毫秒为单位)</td>
</tr>
</tbody>
</table>
<p></p>
<h2>Hash</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hdel" target="_blank">HDEL key field2 [field2]</a></td>
<td style="text-align:center">删除一个或多个哈希字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hexists" target="_blank">HEXISTS key field</a></td>
<td style="text-align:center">判断是否存在散列字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hget" target="_blank">HGET key field</a></td>
<td style="text-align:center">获取存储在指定键的哈希字段的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hgetall" target="_blank">HGETALL key</a></td>
<td style="text-align:center">获取存储在指定键的哈希中的所有字段和值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hincrby" target="_blank">HINCRBY key field increment</a></td>
<td style="text-align:center">将哈希字段的整数值按给定数字增加</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hincrbyfloat" target="_blank">HINCRBYFLOAT key field increment</a></td>
<td style="text-align:center">将哈希字段的浮点值按给定数值增加</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hkeys" target="_blank">HKEYS key</a></td>
<td style="text-align:center">获取哈希中的所有字段</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hlen" target="_blank">HLEN key</a></td>
<td style="text-align:center">获取散列中的字段数量</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hmget" target="_blank">HMGET key field1 [field2]</a></td>
<td style="text-align:center">获取所有给定哈希字段的值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hmset" target="_blank">HMSET key field1 value1 [field2 value2 ]</a></td>
<td style="text-align:center">为多个哈希字段分别设置它们的值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hset" target="_blank">HSET key field value</a></td>
<td style="text-align:center">设置散列字段的字符串值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hsetnx" target="_blank">HSETNX key field value</a></td>
<td style="text-align:center">仅当字段不存在时，才设置散列字段的值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hashes_hvals" target="_blank">HVALS key</a></td>
<td style="text-align:center">获取哈希中的所有值</td>
</tr>
</tbody>
</table>
<h2>List</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_blpop" target="_blank">BLPOP key1 [key2 ] timeout</a></td>
<td style="text-align:center">删除并获取列表中的第一个元素，或阻塞，直到有一个元素可用</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_brpop" target="_blank">BRPOP key1 [key2 ] timeout</a></td>
<td style="text-align:center">删除并获取列表中的最后一个元素，或阻塞，直到有一个元素可用</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_brpoplpush" target="_blank">BRPOPLPUSH source destination timeout</a></td>
<td style="text-align:center">从列表中弹出值，将其推送到另一个列表并返回它; 或阻塞，直到一个可用</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_lindex" target="_blank">LINDEX key index</a></td>
<td style="text-align:center">通过其索引从列表获取元素</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_linsert" target="_blank">LINSERT key BEFORE/AFTER pivot value</a></td>
<td style="text-align:center">在列表中的另一个元素之前或之后插入元素</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_llen" target="_blank">LLEN key</a></td>
<td style="text-align:center">获取列表的长度</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_lpop" target="_blank">LPOP key</a></td>
<td style="text-align:center">删除并获取列表中的第一个元素</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_lpush" target="_blank">LPUSH key value1 [value2]</a></td>
<td style="text-align:center">将一个或多个值添加到列表</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_lpushx" target="_blank">LPUSHX key value</a></td>
<td style="text-align:center">仅当列表存在时，才向列表添加值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_lrange" target="_blank">LRANGE key start stop</a></td>
<td style="text-align:center">从列表中获取一系列元素</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_lrem" target="_blank">LREM key count value</a></td>
<td style="text-align:center">从列表中删除元素</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_lset" target="_blank">LSET key index value</a></td>
<td style="text-align:center">通过索引在列表中设置元素的值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_ltrim" target="_blank">LTRIM key start stop</a></td>
<td style="text-align:center">修剪列表的指定范围</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_rpop" target="_blank">RPOP key</a></td>
<td style="text-align:center">删除并获取列表中的最后一个元素</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_rpoplpush" target="_blank">RPOPLPUSH source destination</a></td>
<td style="text-align:center">删除列表中的最后一个元素，将其附加到另一个列表并返回</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_rpush" target="_blank">RPUSH key value1 [value2]</a></td>
<td style="text-align:center">将一个或多个值附加到列表</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_lists_rpushx" target="_blank">RPUSHX key value</a></td>
<td style="text-align:center">仅当列表存在时才将值附加到列表</td>
</tr>
</tbody>
</table>
<h2>Set</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sadd" target="_blank">SADD key member1 [member2]</a></td>
<td style="text-align:center">将一个或多个成员添加到集合</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_scard" target="_blank">SCARD key</a></td>
<td style="text-align:center">获取集合中的成员数</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sdiff" target="_blank">SDIFF key1 [key2]</a></td>
<td style="text-align:center">减去多个集合</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sdiffstore" target="_blank">SDIFFSTORE destination key1 [key2]</a></td>
<td style="text-align:center">减去多个集并将结果集存储在键中</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sinter" target="_blank">SINTER key1 [key2]</a></td>
<td style="text-align:center">相交多个集合</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sinterstore" target="_blank">SINTERSTORE destination key1 [key2]</a></td>
<td style="text-align:center">交叉多个集合并将结果集存储在键中</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sismember" target="_blank">SISMEMBER key member</a></td>
<td style="text-align:center">判断确定给定值是否是集合的成员</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_smove" target="_blank">SMOVE source destination member</a></td>
<td style="text-align:center">将成员从一个集合移动到另一个集合</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_spop" target="_blank">SPOP key</a></td>
<td style="text-align:center">从集合中删除并返回随机成员</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_srandmember" target="_blank">SRANDMEMBER key [count]</a></td>
<td style="text-align:center">从集合中获取一个或多个随机成员</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_srem" target="_blank">SREM key member1 [member2]</a></td>
<td style="text-align:center">从集合中删除一个或多个成员</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sunion" target="_blank">SUNION key1 [key2]</a></td>
<td style="text-align:center">添加多个集合</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sunionstore" target="_blank">SUNIONSTORE destination key1 [key2]</a></td>
<td style="text-align:center">添加多个集并将结果集存储在键中</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_sets_sscan" target="_blank">SSCAN key cursor [MATCH pattern] [COUNT count]</a></td>
<td style="text-align:center">递增地迭代集合中的元素</td>
</tr>
</tbody>
</table>
<p></p>
<h2>Sorted set</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命   令</th>
<th style="text-align:center">说   明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">zadd key score1 value1 [score2 value2......]</td>
<td style="text-align:center">向有序集合的 key，增加一个或者多个成员</td>
</tr>
<tr>
<td style="text-align:center">zcard key</td>
<td style="text-align:center">获取有序集合的成员数</td>
</tr>
<tr>
<td style="text-align:center">zcount key min max</td>
<td style="text-align:center">根据分数返回对应的成员列表</td>
</tr>
<tr>
<td style="text-align:center">zincrby key increment member</td>
<td style="text-align:center">给有序集合成员值为 member 的分数增加 increment</td>
</tr>
<tr>
<td style="text-align:center">zinterstore desKey numkeys key1 [key2 key3......]</td>
<td style="text-align:center">求多个有序集合的交集，并且将结果保存到 desKey 中</td>
</tr>
<tr>
<td style="text-align:center">zlexcount key min max</td>
<td style="text-align:center">求有序集合 key 成员值在 min 和 max 的范围</td>
</tr>
<tr>
<td style="text-align:center">zrange key start stop [withscores]</td>
<td style="text-align:center">按照分值的大小（从小到大）返回成员，加入 start 和 stop 参数可以截取某一段返回。输入withscores，则连同分数一起返回</td>
</tr>
<tr>
<td style="text-align:center">zrank key member</td>
<td style="text-align:center">按从小到大求有序集合的排行</td>
</tr>
<tr>
<td style="text-align:center">zrangebylex key min max [limit offset count]</td>
<td style="text-align:center">根据值的大小，从小到大排序，min 为最小值，max 为最大值；limit 选项可选，当 Redis 求出范围集合后，会生产下标 0 到 n，根据 offset 和限定返回数 count，返回对应的成员</td>
</tr>
<tr>
<td style="text-align:center">zrangebyscore key min max [withscores] [limit offset count]</td>
<td style="text-align:center">根据分数大小，从小到大求取范围，withscores 和 limit 同上</td>
</tr>
<tr>
<td style="text-align:center">zremrangebyscore key start stop</td>
<td style="text-align:center">根据分数区间进行删除</td>
</tr>
<tr>
<td style="text-align:center">zremrangebyrank key start stop</td>
<td style="text-align:center">按照分数排行从小到大的排序删除，从 0 开始计算</td>
</tr>
<tr>
<td style="text-align:center">zremrangebylex key min max</td>
<td style="text-align:center">按照值的分布进行删除</td>
</tr>
<tr>
<td style="text-align:center">zrevrange key start stop [withscores]</td>
<td style="text-align:center">从大到小的按分数排序</td>
</tr>
<tr>
<td style="text-align:center">zrevrangebyscore key max min [withscores]</td>
<td style="text-align:center">从大到小的按分数排序</td>
</tr>
<tr>
<td style="text-align:center">zrevrank key member</td>
<td style="text-align:center">按从大到小的顺序，求元素的排行</td>
</tr>
<tr>
<td style="text-align:center">zscore key member</td>
<td style="text-align:center">返回成员的分数值</td>
</tr>
<tr>
<td style="text-align:center">zunionstore desKey numKeys key1 [key2 key3 key4......]</td>
<td style="text-align:center">求多个有序集合的并集，其中 numKeys 是有序集合的个数</td>
</tr>
</tbody>
</table>
<h2>HyperLogLog</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hyperloglog_pfadd" target="_blank">PFADD key element [element …]</a></td>
<td style="text-align:center">将指定的元素添加到指定的HyperLogLog 中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hyperloglog_pfcount" target="_blank">PFCOUNT key [key …]</a></td>
<td style="text-align:center">返回给定 HyperLogLog 的基数估算值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_hyperloglog_pfmerge" target="_blank">PFMERGE destkey sourcekey [sourcekey …]</a></td>
<td style="text-align:center">将多个 HyperLogLog 合并为一个 HyperLogLog</td>
</tr>
</tbody>
</table>
<h2>发布订阅</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_pub_sub_psubscribe" target="_blank">PSUBSCRIBE pattern [pattern …]</a></td>
<td style="text-align:center">订阅一个或多个符合给定模式的频道。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_pub_sub_pubsub" target="_blank">PUBSUB subcommand [argument [argument …]]</a></td>
<td style="text-align:center">查看订阅与发布系统状态。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_pub_sub_publish" target="_blank">PUBLISH channel message</a></td>
<td style="text-align:center">将信息发送到指定的频道。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_pub_sub_punsubscribe" target="_blank">PUNSUBSCRIBE [pattern [pattern …]]</a></td>
<td style="text-align:center">退订所有给定模式的频道。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_pub_sub_subscribe" target="_blank">SUBSCRIBE channel [channel …]</a></td>
<td style="text-align:center">订阅给定的一个或多个频道的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_pub_sub_unsubscribe" target="_blank">UNSUBSCRIBE [channel [channel …]]</a></td>
<td style="text-align:center">退订给定的频道。</td>
</tr>
</tbody>
</table>
<h2>事务</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_transactions_discard" target="_blank">DISCARD</a></td>
<td style="text-align:center">丢弃在MULTI之后发出的所有命令</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_transactions_exec" target="_blank">EXEC</a></td>
<td style="text-align:center">执行MULTI后发出的所有命令</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_transactions_multi" target="_blank">MULTI</a></td>
<td style="text-align:center">标记事务块的开始</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_transactions_unwatch" target="_blank">UNWATCH</a></td>
<td style="text-align:center">取消 WATCH 命令对所有 key 的监视。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_transactions_watch" target="_blank">WATCH key [key …]</a></td>
<td style="text-align:center">监视给定的键以确定MULTI / EXEC块的执行</td>
</tr>
</tbody>
</table>
<h2>时限</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命   令</th>
<th style="text-align:center">说   明</th>
<th style="text-align:center">备   注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">persist key</td>
<td style="text-align:center">持久化 key，取消超时时间</td>
<td style="text-align:center">移除 key 的超时时间</td>
</tr>
<tr>
<td style="text-align:center">ttl key</td>
<td style="text-align:center">査看 key 的超时时间</td>
<td style="text-align:center">以秒计算，-1 代表没有超时时间，如果不存在 key 或者 key 已经超时则为 -2</td>
</tr>
<tr>
<td style="text-align:center">expire key seconds</td>
<td style="text-align:center">设置超时时间戳</td>
<td style="text-align:center">以秒为单位</td>
</tr>
<tr>
<td style="text-align:center">expireat key timestamp</td>
<td style="text-align:center">设置超时时间点</td>
<td style="text-align:center">用 uninx 时间戳确定</td>
</tr>
<tr>
<td style="text-align:center">pptl key milliseconds</td>
<td style="text-align:center">查看key的超时时间戳</td>
<td style="text-align:center">用亳秒计算</td>
</tr>
<tr>
<td style="text-align:center">pexpire key</td>
<td style="text-align:center">设置键值超时的时间</td>
<td style="text-align:center">以亳秒为单位</td>
</tr>
<tr>
<td style="text-align:center">Pexpireat key stamptimes</td>
<td style="text-align:center">设置超时时间点</td>
<td style="text-align:center">以亳秒为单位的 uninx 时间戳</td>
</tr>
</tbody>
</table>
<h2>脚本</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_scripting_eval" target="_blank">EVAL script numkeys key [key …] arg [arg …]</a></td>
<td style="text-align:center">执行一个Lua脚本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_scripting_evalsha" target="_blank">EVALSHA sha1 numkeys key [key …] arg [arg …]</a></td>
<td style="text-align:center">执行一个Lua脚本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_scripting_script_exists" target="_blank">SCRIPT EXISTS script [script …]</a></td>
<td style="text-align:center">检查脚本缓存中是否存在脚本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_scripting_script_flush" target="_blank">SCRIPT FLUSH</a></td>
<td style="text-align:center">从脚本缓存中删除所有脚本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_scripting_script_kill" target="_blank">SCRIPT KILL</a></td>
<td style="text-align:center">杀死当前正在执行的脚本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_scripting_script_load" target="_blank">SCRIPT LOAD script</a></td>
<td style="text-align:center">将指定的Lua脚本加载到脚本缓存中。</td>
</tr>
</tbody>
</table>
<h2>服务器</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_bgrewriteaof" target="_blank">BGREWRITEAOF</a></td>
<td style="text-align:center">异步重写仅追加的文件</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_bgsave" target="_blank">BGSAVE</a></td>
<td style="text-align:center">将数据集异步保存到磁盘</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_cluster_slots" target="_blank">CLUSTER SLOTS</a></td>
<td style="text-align:center">获取群集插槽到节点映射的数组</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_command" target="_blank">COMMAND</a></td>
<td style="text-align:center">获取Redis命令详细信息的数组</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_command_count" target="_blank">COMMAND COUNT</a></td>
<td style="text-align:center">获取Redis命令的总数</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_command_getkeys" target="_blank">COMMAND GETKEYS</a></td>
<td style="text-align:center">提取键给出一个完整的Redis的命令</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_command_info" target="_blank">COMMAND INFO command-name [command-name …]</a></td>
<td style="text-align:center">获取特定Redis命令详细信息的数组</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_config_get" target="_blank">CONFIG GET parameter</a></td>
<td style="text-align:center">获取配置参数的值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_config_rewrite" target="_blank">CONFIG REWRITE</a></td>
<td style="text-align:center">使用内存中配置来重写配置文件</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_config_set" target="_blank">CONFIG SET parameter value</a></td>
<td style="text-align:center">将配置参数设置为给定值</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_config_resetstat" target="_blank">CONFIG RESETSTAT</a></td>
<td style="text-align:center">重置由INFO返回的统计信息</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_dbsize" target="_blank">DBSIZE</a></td>
<td style="text-align:center">返回所选数据库中的键数量</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_debug_object" target="_blank">DEBUG OBJECT key</a></td>
<td style="text-align:center">获取有关键的调试信息</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_debug_segfault" target="_blank">DEBUG SEGFAULT</a></td>
<td style="text-align:center">使服务器崩溃</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_flushall" target="_blank">FLUSHALL</a></td>
<td style="text-align:center">从所有数据库中删除所有键</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_flushdb" target="_blank">FLUSHDB</a></td>
<td style="text-align:center">删除当前数据库中的所有键</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_info" target="_blank">INFO [section]</a></td>
<td style="text-align:center">获取有关服务器的信息和统计信息</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_lastsave" target="_blank">LASTSAVE</a></td>
<td style="text-align:center">获取上次成功保存到磁盘的UNIX时间戳</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_monitor" target="_blank">MONITOR</a></td>
<td style="text-align:center">监听服务器实时接收的所有请求</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_role" target="_blank">ROLE</a></td>
<td style="text-align:center">返回实例在复制上下文中的角色</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_save" target="_blank">SAVE</a></td>
<td style="text-align:center">将数据集同步保存到磁盘，在 redis 安装目录中创建dump.rdb文件</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_shutdown" target="_blank">SHUTDOWN [NOSAVE] [SAVE]</a></td>
<td style="text-align:center">将数据集同步保存到磁盘，然后关闭服务器</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_slaveof" target="_blank">SLAVEOF host port</a></td>
<td style="text-align:center">使服务器成为另一个实例的从属，或将其提升作为主服务器</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_showlog" target="_blank">SLOWLOG subcommand [argument]</a></td>
<td style="text-align:center">管理Redis慢查询日志</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_sync" target="_blank">SYNC</a></td>
<td style="text-align:center">用于复制的命令</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_time" target="_blank">TIME</a></td>
<td style="text-align:center">返回当前服务器的时间</td>
</tr>
</tbody>
</table>
<p>info [section]：查询 Redis 相关信息</p>
<ul>
<li>
<p>server: Redis server 的常规信息</p>
</li>
<li>
<p>clients: Client 的连接选项</p>
</li>
<li>
<p>memory: 存储占用相关信息</p>
</li>
<li>
<p>persistence: RDB and AOF 相关信息</p>
</li>
<li>
<p>stats: 常规统计</p>
</li>
<li>
<p>replication: Master/Slave 请求信息</p>
</li>
<li>
<p>cpu: CPU 占用信息统计</p>
</li>
<li>
<p>cluster: Redis 集群信息</p>
</li>
<li>
<p>keyspace: 数据库信息统计</p>
</li>
<li>
<p>all: 返回所有信息</p>
</li>
<li>
<p>default: 返回常规设置信息</p>
</li>
</ul>
<h2>客户端</h2>
<table>
<thead>
<tr>
<th style="text-align:center">命令</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_client_kill" target="_blank">CLIENT KILL [ip:port] [ID client-id]</a></td>
<td style="text-align:center">杀死或断开指定的客户端的连接</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_client_list" target="_blank">CLIENT LIST</a></td>
<td style="text-align:center">获取到服务器的客户端连接列表</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_client_getname" target="_blank">CLIENT GETNAME</a></td>
<td style="text-align:center">获取当前连接的名称</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_client_pause" target="_blank">CLIENT PAUSE timeout</a></td>
<td style="text-align:center">在指定时间内停止处理来自客户端的命令</td>
</tr>
<tr>
<td style="text-align:center"><a href="cs_sql_http:_www.yiibai.com_redis_server_client_setname" target="_blank">CLIENT SETNAME connection-name</a></td>
<td style="text-align:center">设置当前连接名称</td>
</tr>
</tbody>
</table>
<h1>备份</h1>
<p>快照恢复（RDB）</p>
<p>通过快照（snapshotting）实现的，它是备份当前瞬间 Redis 在内存中的数据记录。将默认文件 dump.rdb</p>
<p>只追加文件（Append-Only File，AOF）</p>
<p>当 Redis 执行写命令后，在一定的条件下将执行过的写命令依次保存在 Redis 的文件中，将来就可以依次执行那些保存的命令恢复 Redis 的数据了。</p>
<h1>—— MongoDB ——</h1>
<p><a href="https://www.mongodb.com/" target="_blank">mongodb</a>由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。</p>
<p>旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。</p>
<p>面向集合存储，易于存储对象类型的数据，模式自由，支持动态查询，支持完全索引，支持复制和故障恢复，使用高效的二进制数据存储，文件存储格式为 BSON （ 一种 JSON 的扩展）等。</p>
<table>
<thead>
<tr>
<th style="text-align:center">SQL术语/概念</th>
<th style="text-align:center">MongoDB术语/概念</th>
<th style="text-align:center">解释/说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">database</td>
<td style="text-align:center">database</td>
<td style="text-align:center">数据库</td>
</tr>
<tr>
<td style="text-align:center">table</td>
<td style="text-align:center">collection</td>
<td style="text-align:center">数据库表/集合</td>
</tr>
<tr>
<td style="text-align:center">row</td>
<td style="text-align:center">document</td>
<td style="text-align:center">数据记录行/文档</td>
</tr>
<tr>
<td style="text-align:center">column</td>
<td style="text-align:center">field</td>
<td style="text-align:center">数据字段/域</td>
</tr>
<tr>
<td style="text-align:center">index</td>
<td style="text-align:center">index</td>
<td style="text-align:center">索引</td>
</tr>
<tr>
<td style="text-align:center">table joins</td>
<td style="text-align:center">不支持</td>
<td style="text-align:center">表连接</td>
</tr>
<tr>
<td style="text-align:center">primary key</td>
<td style="text-align:center">primary key</td>
<td style="text-align:center">主键</td>
</tr>
</tbody>
</table>
