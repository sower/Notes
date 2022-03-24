
# —— Not Only SQL ——
非关系型数据库：可以处理分布式、规模庞大、类型不确定、完整性没有保证的“杂乱”数据

**CAP 理论**：针对分布式数据库而言的，指在一个分布式系统中，一致性、可用性、分区容错性三者不可兼得。

- 一致性(Consistency)：所有节点在同一时间具有相同的数据
- 可用性(Availability)：保证每个请求不管成功或者失败都有响应
- 分隔容忍(Partition tolerance) ：系统中任意信息的丢失或失败不会影响系统的继续运作

![](https://www.runoob.com/wp-content/uploads/2013/10/cap-theoram-image.png#crop=0&crop=0&crop=1&crop=1&id=y8n8P&originHeight=578&originWidth=671&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

**BASE理论**（由 Eric Brewer 定义）  <br />  NoSQL数据库通常对可用性及一致性的弱要求原则:

- Basically Availble --基本可用
- Soft-state --软状态/柔性事务。 "Soft state" 可以理解为"无连接"的, 而 "Hard state" 是"面向连接"的
- Eventual Consistency -- 最终一致性， 也是是 ACID 的最终目的。

| 分类 | 相关产品 | 应用场景 | 数据模型 | 优点 | 缺点 |
| --- | --- | --- | --- | --- | --- |
| 键值数据库 | [Redis](http://c.biancheng.net/redis/)、[Memcached](http://c.biancheng.net/view/6574.html)、Riak | 内容缓存，如会话、配置文件、参数等；  <br />  频繁读写、拥有简单数据模型的应用 | <key,value> 键值对，通过散列表来实现 | 扩展性好，灵活性好，大量操作时性能高 | 数据无结构化，通常只被当做字符串或者二进制数据，只能通过键来查询值 |
| 列族数据库 | Bigtable、[HBase](http://c.biancheng.net/hbase/)、Cassandra | 分布式数据存储与管理 | 以列族式存储，将同一列数据存在一起 | 可扩展性强，查找速度快，复杂性低 | 功能局限，不支持事务的强一致性 |
| 文档数据库 | [MongoDB](http://c.biancheng.net/mongodb/)、CouchDB | Web 应用，存储面向文档或类似半结构化的数据 | <key,value>   <br />  value 是 JSON 结构的文档 | [数据结构](http://c.biancheng.net/data_structure/)灵活，可以根据 value 构建索引 | 缺乏统一查询语法 |
| 图形数据库 | [Neo4j](http://c.biancheng.net/view/6579.html)、InfoGrid | 社交网络、推荐系统，专注构建关系图谱 | 图结构 | 支持复杂的图形算法 | 复杂性高，只能支持一定的数据规模 |





# —— Redis ——
Remote Dictionary Server（远程字典服务器）

由Salvatore Sanfilippo编写的key-value存储系统。  <br />  一个开源的使用ANSI C语言编写、遵守BSD协议、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。

**Redis架构**

- redis-cli：客户端
- redis-server：服务器
- redis-check-dump：本地数据库检查
- redis-check-aof：更新日志检查（Append-only file）
- redis-benchmark：性能测试，用以模拟同时由N个客户端发送M个 SETs/GETs 查询

`redis-cli -h host -p port -a password`

- 设置密码：CONFIG set requirepass "password"
- 查看密码：CONFIG get requirepass
- 验证密码：AUTH password



**连接**

| 命令 | 说明 |
| --- | --- |
| [AUTH password](http://www.yiibai.com/redis/connection_auth.html) | 使用给定的密码验证服务器 |
| [ECHO message](http://www.yiibai.com/redis/connection_echo.html) | 打印给定的字符串信息 |
| [PING](http://www.yiibai.com/redis/connection_ping.html) | 检查服务器是否正在运行 |
| [QUIT](http://www.yiibai.com/redis/connection_quit.html) | 关闭当前连接 |
| [SELECT index](http://www.yiibai.com/redis/connection_select.html) | 更改当前连接的所选数据库 |


性能测试：`redis-benchmark [option] [option value]`

| **选项** | **说明** | **默认值** |
| --- | --- | --- |
| **-h** | 指定服务器主机名 | 127.0.0.1 |
| **-p** | 指定服务器端口 | 6379 |
| **-s** | 指定服务器套接字 |  |
| **-c** | 指定并行连接的数量 | 50 |
| **-n** | 指定请求的总数 | 10000 |
| **-d** | 指定SET/GET值的数据大小(以字节为单位) | 2 |
| **-k** | 1=keep alive, 0=reconnect | 1 |
| **-r** | 使用SET/GET/INCR的随机键，SADD的随机值 |  |
| **-p** | 管道<numreq>请求 | 1 |
| **-h** | 指定服务器主机名 |  |
| **-q** | 强制让Redis安装。 只显示query/sec值 |  |
| **--csv** | 以CSV格式输出 |  |
| **-l** | 生成循环，永久运行测试 |  |
| **-t** | 只运行逗号分隔的测试列表 |  |
| **-I** | 空闲模式。 只打开N个空闲连接并等待 |  |

示例：`redis-benchmark -h 127.0.0.1 -p 6379 -t set,lpush -n 10000 -q`



# 数据类型
| 数据类型 | 数据类型存储的值 | 说 明 |
| --- | --- | --- |
| STRING  <br />  （字符串） | 可以是保存字符串、整数和浮点数 | 对字符串进行操作，如增加字符或者求子串：如果是整数或者浮点数，可以计算，如自增等 |
| LIST  <br />  （列表） | 一个链表，它的每一个节点都包含一个字符串 | 可以在链表的两端插入或者弹出节点，或者通过偏移对它进行裁剪；还可以读取一个或者多个节点，根据条件删除或者查找节点等 |
| SET  <br />  （集合） | 无序集合，每一个元素都是一个字符串 | 可以新增、读取、删除单个元素：检测一个元素是否在集合中；进行集合的运算；随机从集合中读取元素 |
| HASH  <br />  （哈希散列表）  | 一个键值对应的无序列表 | 可以増、删、査、改单个键值对，也可以获取所有的键值对 |
| ZSET  <br />  （有序集合） | 有序的集合，可包含字符 串、整数、浮点数、分值（score），排序是依据分值的大小来决定的 | 可以增、删、査、改元素，根据分值的范围或者成员來获取对应的元索 |
| HyperLogLog  <br />  （基数） | 计算重复的值，以确定存储的数量 | 只提供基数的运算，不提供返回的功能 |


# 命令

## 基本命令
`help <command>`	查看帮助

| 命令 | 描述 |
| --- | --- |
| [DEL key](http://www.yiibai.com/redis/keys_del.html) | 此命令删除一个指定键(如果存在)。 |
| [DUMP key](http://www.yiibai.com/redis/keys_dump.html) | 此命令返回存储在指定键的值的序列化版本。 |
| [EXISTS key](http://www.yiibai.com/redis/keys_exists.html) | 此命令检查键是否存在。 |
| [KEYS pattern](http://www.yiibai.com/redis/keys_keys.html) | 查找与指定模式匹配的所有键。 |
| [MOVE key db](http://www.yiibai.com/redis/keys_move.html) | 将键移动到另一个数据库。 |
| [RANDOMKEY](http://www.yiibai.com/redis/keys_randomkey.html) | 从Redis返回一个随机的键。 |
| [RENAME key newkey](http://www.yiibai.com/redis/keys_rename.html) | 更改键的名称。 |
| [RENAMENX key newkey](http://www.yiibai.com/redis/keys_renamenx.html) | 如果新键不存在，重命名键。 |
| [TYPE key](http://www.yiibai.com/redis/keys_type.html) | 返回存储在键中的值的数据类型。 |
| clear | 清屏 |



## String
| 命令 | 描述说明 |
| --- | --- |
| [SET key value](http://www.yiibai.com/redis/strings_set.html) | 设置或更改指定键的值。 |
| [GET key](http://www.yiibai.com/redis/strings_get.html) | 获取指定键的值。 |
| [SETNX key value](http://www.yiibai.com/redis/strings_setnx.html) | 设置键的值，仅当键不存在时 |
| [MSET key value [key value …]](http://www.yiibai.com/redis/strings_mset.html) | 为多个键分别设置它们的值 |
| [MSETNX key value [key value …]](http://www.yiibai.com/redis/strings_msetnx.html) | 为多个键分别设置它们的值，仅当键不存在时 |
| [MGET key1 [key2..]](http://www.yiibai.com/redis/strings_mget.html) | 获取所有给定键的值 |
| [GETRANGE key start end](http://www.yiibai.com/redis/strings_getrange.html) | 获取存储在键上的字符串的子字符串。 |
| [GETSET key value](http://www.yiibai.com/redis/strings_getset.html) | 设置键的字符串值并返回其旧值。 |
| [STRLEN key](http://www.yiibai.com/redis/strings_strlen.html) | 获取存储在键中的值的长度 |
| [INCR key](http://www.yiibai.com/redis/strings_incr.html) | 将键的整数值增加1 |
| [INCRBY key increment](http://www.yiibai.com/redis/strings_incrby.html) | 将键的整数值按给定的数值增加 |
| [INCRBYFLOAT key increment](http://www.yiibai.com/redis/strings_incrbyfloat.html) | 将键的浮点值按给定的数值增加 |
| [DECR key](http://www.yiibai.com/redis/strings_decr.html) | 将键的整数值减1 |
| [DECRBY key decrement](http://www.yiibai.com/redis/strings_decrby.html) | 按给定数值减少键的整数值 |
| [APPEND key value](http://www.yiibai.com/redis/strings_append.html) | 将指定值附加到键 |
| [GETBIT key offset](http://www.yiibai.com/redis/strings_getbit.html) | 返回在键处存储的字符串值中偏移处的位值。 |
| [SETBIT key offset value](http://www.yiibai.com/redis/strings_setbit.html) | 存储在键上的字符串值中设置或清除偏移处的位 |
| [SETRANGE key offset value](http://www.yiibai.com/redis/strings_setrange.html) | 在指定偏移处开始的键处覆盖字符串的一部分 |
| [SETEX key seconds value](http://www.yiibai.com/redis/strings_setex.html) | 使用键和到期时间来设置值 |
| [PSETEX key milliseconds value](http://www.yiibai.com/redis/strings_psetex.html) | 设置键的值和到期时间(以毫秒为单位) |



## Hash
| 命令 | 说明 |
| --- | --- |
| [HDEL key field2 [field2]](http://www.yiibai.com/redis/hashes_hdel.html) | 删除一个或多个哈希字段。 |
| [HEXISTS key field](http://www.yiibai.com/redis/hashes_hexists.html) | 判断是否存在散列字段。 |
| [HGET key field](http://www.yiibai.com/redis/hashes_hget.html) | 获取存储在指定键的哈希字段的值。 |
| [HGETALL key](http://www.yiibai.com/redis/hashes_hgetall.html) | 获取存储在指定键的哈希中的所有字段和值 |
| [HINCRBY key field increment](http://www.yiibai.com/redis/hashes_hincrby.html) | 将哈希字段的整数值按给定数字增加 |
| [HINCRBYFLOAT key field increment](http://www.yiibai.com/redis/hashes_hincrbyfloat.html) | 将哈希字段的浮点值按给定数值增加 |
| [HKEYS key](http://www.yiibai.com/redis/hashes_hkeys.html) | 获取哈希中的所有字段 |
| [HLEN key](http://www.yiibai.com/redis/hashes_hlen.html) | 获取散列中的字段数量 |
| [HMGET key field1 [field2]](http://www.yiibai.com/redis/hashes_hmget.html) | 获取所有给定哈希字段的值 |
| [HMSET key field1 value1 [field2 value2 ]](http://www.yiibai.com/redis/hashes_hmset.html) | 为多个哈希字段分别设置它们的值 |
| [HSET key field value](http://www.yiibai.com/redis/hashes_hset.html) | 设置散列字段的字符串值 |
| [HSETNX key field value](http://www.yiibai.com/redis/hashes_hsetnx.html) | 仅当字段不存在时，才设置散列字段的值 |
| [HVALS key](http://www.yiibai.com/redis/hashes_hvals.html) | 获取哈希中的所有值 |



## List
| 命令 | 说明 |
| --- | --- |
| [BLPOP key1 [key2 ] timeout](http://www.yiibai.com/redis/lists_blpop.html) | 删除并获取列表中的第一个元素，或阻塞，直到有一个元素可用 |
| [BRPOP key1 [key2 ] timeout](http://www.yiibai.com/redis/lists_brpop.html) | 删除并获取列表中的最后一个元素，或阻塞，直到有一个元素可用 |
| [BRPOPLPUSH source destination timeout](http://www.yiibai.com/redis/lists_brpoplpush.html) | 从列表中弹出值，将其推送到另一个列表并返回它; 或阻塞，直到一个可用 |
| [LINDEX key index](http://www.yiibai.com/redis/lists_lindex.html) | 通过其索引从列表获取元素 |
| [LINSERT key BEFORE/AFTER pivot value](http://www.yiibai.com/redis/lists_linsert.html) | 在列表中的另一个元素之前或之后插入元素 |
| [LLEN key](http://www.yiibai.com/redis/lists_llen.html) | 获取列表的长度 |
| [LPOP key](http://www.yiibai.com/redis/lists_lpop.html) | 删除并获取列表中的第一个元素 |
| [LPUSH key value1 [value2]](http://www.yiibai.com/redis/lists_lpush.html) | 将一个或多个值添加到列表 |
| [LPUSHX key value](http://www.yiibai.com/redis/lists_lpushx.html) | 仅当列表存在时，才向列表添加值 |
| [LRANGE key start stop](http://www.yiibai.com/redis/lists_lrange.html) | 从列表中获取一系列元素 |
| [LREM key count value](http://www.yiibai.com/redis/lists_lrem.html) | 从列表中删除元素 |
| [LSET key index value](http://www.yiibai.com/redis/lists_lset.html) | 通过索引在列表中设置元素的值 |
| [LTRIM key start stop](http://www.yiibai.com/redis/lists_ltrim.html) | 修剪列表的指定范围 |
| [RPOP key](http://www.yiibai.com/redis/lists_rpop.html) | 删除并获取列表中的最后一个元素 |
| [RPOPLPUSH source destination](http://www.yiibai.com/redis/lists_rpoplpush.html) | 删除列表中的最后一个元素，将其附加到另一个列表并返回 |
| [RPUSH key value1 [value2]](http://www.yiibai.com/redis/lists_rpush.html) | 将一个或多个值附加到列表 |
| [RPUSHX key value](http://www.yiibai.com/redis/lists_rpushx.html) | 仅当列表存在时才将值附加到列表 |




## Set
| 命令 | 说明 |
| --- | --- |
| [SADD key member1 [member2]](http://www.yiibai.com/redis/sets_sadd.html) | 将一个或多个成员添加到集合 |
| [SCARD key](http://www.yiibai.com/redis/sets_scard.html) | 获取集合中的成员数 |
| [SDIFF key1 [key2]](http://www.yiibai.com/redis/sets_sdiff.html) | 减去多个集合 |
| [SDIFFSTORE destination key1 [key2]](http://www.yiibai.com/redis/sets_sdiffstore.html) | 减去多个集并将结果集存储在键中 |
| [SINTER key1 [key2]](http://www.yiibai.com/redis/sets_sinter.html) | 相交多个集合 |
| [SINTERSTORE destination key1 [key2]](http://www.yiibai.com/redis/sets_sinterstore.html) | 交叉多个集合并将结果集存储在键中 |
| [SISMEMBER key member](http://www.yiibai.com/redis/sets_sismember.html) | 判断确定给定值是否是集合的成员 |
| [SMOVE source destination member](http://www.yiibai.com/redis/sets_smove.html) | 将成员从一个集合移动到另一个集合 |
| [SPOP key](http://www.yiibai.com/redis/sets_spop.html) | 从集合中删除并返回随机成员 |
| [SRANDMEMBER key [count]](http://www.yiibai.com/redis/sets_srandmember.html) | 从集合中获取一个或多个随机成员 |
| [SREM key member1 [member2]](http://www.yiibai.com/redis/sets_srem.html) | 从集合中删除一个或多个成员 |
| [SUNION key1 [key2]](http://www.yiibai.com/redis/sets_sunion.html) | 添加多个集合 |
| [SUNIONSTORE destination key1 [key2]](http://www.yiibai.com/redis/sets_sunionstore.html) | 添加多个集并将结果集存储在键中 |
| [SSCAN key cursor [MATCH pattern] [COUNT count]](http://www.yiibai.com/redis/sets_sscan.html) | 递增地迭代集合中的元素 |



## Sorted set
| 命   令 | 说   明  |
| --- | --- |
| zadd key score1 value1 [score2 value2......] | 向有序集合的 key，增加一个或者多个成员 |
| zcard key  | 获取有序集合的成员数 |
| zcount key min max   | 根据分数返回对应的成员列表  |
| zincrby key increment member | 给有序集合成员值为 member 的分数增加 increment |
| zinterstore desKey numkeys key1 [key2 key3......] | 求多个有序集合的交集，并且将结果保存到 desKey 中 |
| zlexcount key min max   | 求有序集合 key 成员值在 min 和 max 的范围 |
| zrange key start stop [withscores] | 按照分值的大小（从小到大）返回成员，加入 start 和 stop 参数可以截取某一段返回。输入withscores，则连同分数一起返回 |
| zrank key member | 按从小到大求有序集合的排行 |
| zrangebylex key min max [limit offset count] | 根据值的大小，从小到大排序，min 为最小值，max 为最大值；limit 选项可选，当 Redis 求出范围集合后，会生产下标 0 到 n，根据 offset 和限定返回数 count，返回对应的成员 |
| zrangebyscore key min max [withscores] [limit offset count] | 根据分数大小，从小到大求取范围，withscores 和 limit 同上 |
| zremrangebyscore key start stop | 根据分数区间进行删除 |
| zremrangebyrank key start stop | 按照分数排行从小到大的排序删除，从 0 开始计算 |
| zremrangebylex key min max | 按照值的分布进行删除 |
| zrevrange key start stop [withscores] | 从大到小的按分数排序 |
| zrevrangebyscore key max min [withscores] | 从大到小的按分数排序 |
| zrevrank key member | 按从大到小的顺序，求元素的排行 |
| zscore key member | 返回成员的分数值 |
| zunionstore desKey numKeys key1 [key2 key3 key4......] | 求多个有序集合的并集，其中 numKeys 是有序集合的个数 |




## HyperLogLog
| 命令 | 说明 |
| --- | --- |
| [PFADD key element [element …]](http://www.yiibai.com/redis/hyperloglog_pfadd.html) | 将指定的元素添加到指定的HyperLogLog 中。 |
| [PFCOUNT key [key …]](http://www.yiibai.com/redis/hyperloglog_pfcount.html) | 返回给定 HyperLogLog 的基数估算值。 |
| [PFMERGE destkey sourcekey [sourcekey …]](http://www.yiibai.com/redis/hyperloglog_pfmerge.html) | 将多个 HyperLogLog 合并为一个 HyperLogLog |




## 发布订阅
| 命令 | 说明 |
| --- | --- |
| [PSUBSCRIBE pattern [pattern …]](http://www.yiibai.com/redis/pub_sub_psubscribe.html) | 订阅一个或多个符合给定模式的频道。 |
| [PUBSUB subcommand [argument [argument …]]](http://www.yiibai.com/redis/pub_sub_pubsub.html) | 查看订阅与发布系统状态。 |
| [PUBLISH channel message](http://www.yiibai.com/redis/pub_sub_publish.html) | 将信息发送到指定的频道。 |
| [PUNSUBSCRIBE [pattern [pattern …]]](http://www.yiibai.com/redis/pub_sub_punsubscribe.html) | 退订所有给定模式的频道。 |
| [SUBSCRIBE channel [channel …]](http://www.yiibai.com/redis/pub_sub_subscribe.html) | 订阅给定的一个或多个频道的信息。 |
| [UNSUBSCRIBE [channel [channel …]]](http://www.yiibai.com/redis/pub_sub_unsubscribe.html) | 退订给定的频道。 |




## 事务
| 命令 | 说明 |
| --- | --- |
| [DISCARD](http://www.yiibai.com/transactions_discard.html) | 丢弃在MULTI之后发出的所有命令 |
| [EXEC](http://www.yiibai.com/redis/transactions_exec.html) | 执行MULTI后发出的所有命令 |
| [MULTI](http://www.yiibai.com/redis/transactions_multi.html) | 标记事务块的开始 |
| [UNWATCH](http://www.yiibai.com/redis/transactions_unwatch.html) | 取消 WATCH 命令对所有 key 的监视。 |
| [WATCH key [key …]](http://www.yiibai.com/redis/transactions_watch.html) | 监视给定的键以确定MULTI / EXEC块的执行 |



## 时限
| 命   令 | 说   明 | 备   注 |
| --- | --- | --- |
| persist key | 持久化 key，取消超时时间 | 移除 key 的超时时间 |
| ttl key | 査看 key 的超时时间  | 以秒计算，-1 代表没有超时时间，如果不存在 key 或者 key 已经超时则为 -2 |
| expire key seconds  | 设置超时时间戳 | 以秒为单位 |
| expireat key timestamp | 设置超时时间点 | 用 uninx 时间戳确定 |
| pptl key milliseconds | 查看key的超时时间戳 | 用亳秒计算 |
| pexpire key | 设置键值超时的时间 | 以亳秒为单位 |
| Pexpireat key stamptimes | 设置超时时间点 | 以亳秒为单位的 uninx 时间戳 |





## 脚本
| 命令 | 说明 |
| --- | --- |
| [EVAL script numkeys key [key …] arg [arg …]](http://www.yiibai.com/redis/scripting_eval.html) | 执行一个Lua脚本。 |
| [EVALSHA sha1 numkeys key [key …] arg [arg …]](http://www.yiibai.com/redis/scripting_evalsha.html) | 执行一个Lua脚本。 |
| [SCRIPT EXISTS script [script …]](http://www.yiibai.com/redis/scripting_script_exists.html) | 检查脚本缓存中是否存在脚本。 |
| [SCRIPT FLUSH](http://www.yiibai.com/redis/scripting_script_flush.html) | 从脚本缓存中删除所有脚本。 |
| [SCRIPT KILL](http://www.yiibai.com/redis/scripting_script_kill.html) | 杀死当前正在执行的脚本。 |
| [SCRIPT LOAD script](http://www.yiibai.com/redis/scripting_script_load.html) | 将指定的Lua脚本加载到脚本缓存中。 |



**服务器**

| 命令 | 说明 |
| --- | --- |
| [BGREWRITEAOF](http://www.yiibai.com/redis/server_bgrewriteaof.html) | 异步重写仅追加的文件 |
| [BGSAVE](http://www.yiibai.com/redis/server_bgsave.html) | 将数据集异步保存到磁盘 |
| [CLUSTER SLOTS](http://www.yiibai.com/redis/server_cluster_slots.html) | 获取群集插槽到节点映射的数组 |
| [COMMAND](http://www.yiibai.com/redis/server_command.html) | 获取Redis命令详细信息的数组 |
| [COMMAND COUNT](http://www.yiibai.com/redis/server_command_count.html) | 获取Redis命令的总数 |
| [COMMAND GETKEYS](http://www.yiibai.com/redis/server_command_getkeys.html) | 提取键给出一个完整的Redis的命令 |
| [COMMAND INFO command-name [command-name …]](http://www.yiibai.com/redis/server_command_info.html) | 获取特定Redis命令详细信息的数组 |
| [CONFIG GET parameter](http://www.yiibai.com/redis/server_config_get.html) | 获取配置参数的值 |
| [CONFIG REWRITE](http://www.yiibai.com/redis/server_config_rewrite.html) | 使用内存中配置来重写配置文件 |
| [CONFIG SET parameter value](http://www.yiibai.com/redis/server_config_set.html) | 将配置参数设置为给定值 |
| [CONFIG RESETSTAT](http://www.yiibai.com/redis/server_config_resetstat.html) | 重置由INFO返回的统计信息 |
| [DBSIZE](http://www.yiibai.com/redis/server_dbsize.html) | 返回所选数据库中的键数量 |
| [DEBUG OBJECT key](http://www.yiibai.com/redis/server_debug_object.html) | 获取有关键的调试信息 |
| [DEBUG SEGFAULT](http://www.yiibai.com/redis/server_debug_segfault.html) | 使服务器崩溃 |
| [FLUSHALL](http://www.yiibai.com/redis/server_flushall.html) | 从所有数据库中删除所有键 |
| [FLUSHDB](http://www.yiibai.com/redis/server_flushdb.html) | 删除当前数据库中的所有键 |
| [INFO [section]](http://www.yiibai.com/redis/server_info.html) | 获取有关服务器的信息和统计信息 |
| [LASTSAVE](http://www.yiibai.com/redis/server_lastsave.html) | 获取上次成功保存到磁盘的UNIX时间戳 |
| [MONITOR](http://www.yiibai.com/redis/server_monitor.html) | 监听服务器实时接收的所有请求 |
| [ROLE](http://www.yiibai.com/redis/server_role.html) | 返回实例在复制上下文中的角色 |
| [SAVE](http://www.yiibai.com/redis/server_save.html) | 将数据集同步保存到磁盘，在 redis 安装目录中创建dump.rdb文件 |
| [SHUTDOWN [NOSAVE] [SAVE]](http://www.yiibai.com/redis/server_shutdown.html) | 将数据集同步保存到磁盘，然后关闭服务器 |
| [SLAVEOF host port](http://www.yiibai.com/redis/server_slaveof.html) | 使服务器成为另一个实例的从属，或将其提升作为主服务器 |
| [SLOWLOG subcommand [argument]](http://www.yiibai.com/redis/server_showlog.html) | 管理Redis慢查询日志 |
| [SYNC](http://www.yiibai.com/redis/server_sync.html) | 用于复制的命令 |
| [TIME](http://www.yiibai.com/redis/server_time.html) | 返回当前服务器的时间 |



info [section]：查询 Redis 相关信息

- server: Redis server 的常规信息
- clients: Client 的连接选项
- memory: 存储占用相关信息
- persistence: RDB and AOF 相关信息
- stats: 常规统计
- replication: Master/Slave 请求信息
- cpu: CPU 占用信息统计
- cluster: Redis 集群信息
- keyspace: 数据库信息统计
- all: 返回所有信息
- default: 返回常规设置信息




## 客户端
| 命令 | 描述 |
| --- | --- |
| [CLIENT KILL [ip:port] [ID client-id]](http://www.yiibai.com/redis/server_client_kill.html) | 杀死或断开指定的客户端的连接 |
| [CLIENT LIST](http://www.yiibai.com/redis/server_client_list.html) | 获取到服务器的客户端连接列表 |
| [CLIENT GETNAME](http://www.yiibai.com/redis/server_client_getname.html) | 获取当前连接的名称 |
| [CLIENT PAUSE timeout](http://www.yiibai.com/redis/server_client_pause.html) | 在指定时间内停止处理来自客户端的命令 |
| [CLIENT SETNAME connection-name](http://www.yiibai.com/redis/server_client_setname.html) | 设置当前连接名称 |



# 备份
快照恢复（RDB）  <br />  通过快照（snapshotting）实现的，它是备份当前瞬间 Redis 在内存中的数据记录。将默认文件 dump.rdb  <br />  只追加文件（Append-Only File，AOF）  <br />  当 Redis 执行写命令后，在一定的条件下将执行过的写命令依次保存在 Redis 的文件中，将来就可以依次执行那些保存的命令恢复 Redis 的数据了。





# —— MongoDB ——
[mongodb](https://www.mongodb.com/)由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。  <br />  旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。

面向集合存储，易于存储对象类型的数据，模式自由，支持动态查询，支持完全索引，支持复制和故障恢复，使用高效的二进制数据存储，文件存储格式为 BSON （ 一种 JSON 的扩展）等。

| SQL术语/概念 | MongoDB术语/概念 | 解释/说明 |
| --- | --- | --- |
| database | database | 数据库 |
| table | collection | 数据库表/集合 |
| row | document | 数据记录行/文档 |
| column | field | 数据字段/域 |
| index | index | 索引 |
| table joins | 不支持 | 表连接 |
| primary key | primary key | 主键 |






