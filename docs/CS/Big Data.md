---
title: Big Data
created_at: 2022-01-31T15:12:13.000Z
updated_at: 2023-02-05T14:22:37.000Z
word_count: 3029
---  
## Big data

[BigData-Notes](https://github.com/heibaiying/BigData-Notes)  <br />  [Cookbook](https://github.com/andkret/Cookbook)	The Data Engineering Cookbook  <br />  [data-science](https://github.com/ossu/data-science)  <br />  [大数据](https://dunwu.github.io/bigdata-tutorial)


## [HDFS](https://dunwu.github.io/bigdata-tutorial/hdfs)
**Hadoop Distributed File System**，Hadoop 的分布式文件系统

用于存储具有流数据访问模式的超大文件的文件系统

**优点**

- **高容错** - 数据冗余多副本，副本丢失后自动恢复
- **高可用** - NameNode HA、安全模式
- **高扩展** - 能够处理 10K 节点的规模；处理数据达到 GB、TB、甚至 PB 级别的数据；能够处理百万规模以上的文件数量，数量相当之大。
- **批处理** - 流式数据访问；数据位置暴露给计算框架
- **构建在廉价商用机器上** - 提供了容错和恢复机制

**缺点**

- **不适合低延迟数据访问** - 适合高吞吐率的场景，就是在某一时间内写入大量的数据。但是它在低延时的情况下是不行的，比如毫秒级以内读取数据，它是很难做到的。
- **不适合大量小文件存储**
   - 存储大量小文件(这里的小文件是指小于 HDFS 系统的 Block 大小的文件（默认 64M）)的话，它会占用 NameNode 大量的内存来存储文件、目录和块信息。这样是不可取的，因为 NameNode 的内存总是有限的。
   - 磁盘寻道时间超过读取时间
- **不支持并发写入** - 一个文件同时只能有一个写入者
- **不支持文件随机修改** - 仅支持追加写入


主从架构

**NameNode 负责管理文件系统的命名空间以及客户端对文件的访问**

- 管理命名空间
- 管理元数据：文件的位置、所有者、权限、数据块等
- 管理 Block 副本策略：默认 3 个副本
- 处理客户端读写请求，为 DataNode 分配任务

**DataNode 负责文件数据的存储和读写操作，HDFS 将文件数据分割成若干数据块（Block），每个 DataNode 存储一部分数据块，这样文件就分布存储在整个 HDFS 服务器集群中**。

- 存储 Block 和数据校验和
- 执行客户端发送的读写操作
- 通过心跳机制定期（默认 3 秒）向 NameNode 汇报运行状态和 Block 列表信息
- 集群启动时，DataNode 向 NameNode 提供 Block 列表信息

Block 数据块

- HDFS 最小存储单元
- 文件写入 HDFS 会被切分成若干个 Block
- Block 大小固定，默认为 128MB，可自定义
- 若一个 Block 的大小小于设定值，不会占用整个块空间
- 默认情况下每个 Block 有 3 个副本

Client

- 将文件切分为 Block 数据块
- 与 NameNode 交互，获取文件元数据
- 与 DataNode 交互，读取或写入数据
- 管理 HDFS




## [Hbase](https://dunwu.github.io/bigdata-tutorial/hbase)
一个构建在 HDFS（Hadoop 文件系统）之上的面向列的数据库管理系统

- **没有真正的索引** - 行是顺序存储的，每行中的列也是，所以不存在索引膨胀的问题，而且插入性能和表的大小无关。
- **不支持复杂的事务** - 仅支持行级事务，即单行数据的读写都是原子性的；
- **自动分区** - 在表增长的时候，表会自动分裂区域（region），并分布到可用的节点上。
- **线性扩展和对于新节点的自动处理** - 增加一个节点，把它指向现有集群并进行 region server。区域自动重新进行平衡，负载均匀分布。
- **容错** - 支持 RegionServers 之间的自动故障转移
- **批处理** - MapReduce 集成功能使 HBase 可用用全并行的分布式作业根据数据位置来处理它们。


## [Hive](https://dunwu.github.io/bigdata-tutorial/hive)
一个构建在 Hadoop 之上的数据仓库，它可以将结构化的数据文件映射成表，并提供类 SQL 查询功能，用于查询的 SQL 语句会被转化为 MapReduce 作业，然后提交到 Hadoop 上运行。

![](https://raw.githubusercontent.com/dunwu/images/dev/snap/20200224193019.png#from=url&id=e7d9t&originHeight=483&originWidth=682&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)




## [MapReduce](https://dunwu.github.io/bigdata-tutorial/mapreduce)
Hadoop MapReduce 是一个分布式计算框架，用于编写批处理应用程序

![](https://raw.githubusercontent.com/dunwu/images/dev/snap/20200601162305.png#from=url&id=opORN&originHeight=672&originWidth=1416&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)


## [Yarn](https://dunwu.github.io/bigdata-tutorial/yarn)
YARN(Yet Another Resource Negotiator，另一种资源管理器)是一个分布式通用资源管理系统。

设计目标：聚焦资源管理、通用（适用各种计算框架）、高可用、高扩展

系统架构

- 主从结构（master/slave）
- 将 JobTracker 的资源管理、任务调度功能分离
- 三种角色：
   - ResourceManager（Master） - 集群资源的统一管理和分配
   - NodeManager（Slave） - 管理节点资源，以及容器的生命周期
   - ApplicationMaster（新角色） - 管理应用程序实例，包括任务调度和资源申请


## Spark
相对于 MapReduce 的批处理计算，Spark 可以带来上百倍的性能提升，因此它成为继 MapReduce 之后，最为广泛使用的分布式计算框架


## Storm
一个开源的分布式实时计算框架，可以以简单、可靠的方式进行大数据流的处理


## [Flink](https://dunwu.github.io/bigdata-tutorial/tree/master/docs/flink)
分布式处理引擎，用于在无边界和有边界数据流上进行有状态的计算

















[**Lucene**](https://lucene.apache.org/)  <br />  高性能、可伸缩的、开源的信息检索库  <br />  提供了完整的查询引擎和索引引擎  <br />  构建索引、索引更新与删除、条件查询、结果排序、高亮、中文分词器、索引优化、分布式扩展

## [Elasticsearch](https://github.com/elastic/elasticsearch)
> 一个基于 Lucene 的搜索和数据分析工具，它提供了一个分布式服务


倒排索引（Inverted Index），也称反向索引，将文档中的词作为关键字，建立词与文档的映射关系，通过对倒排索引的检索，可以根据词快速获取包含这个词的文档列表

索引（Index）  <br />  具有某些类似特征的文档集合
```json
创建索引
PUT <index>
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1,
    "mapping.ignore_malformed": false
  }
}

修改副本
PUT <index>/_settings
{
  "number_of_replicas": 3
}

删除索引
DELETE <index>

查看索引
GET <index>/_settings
GET _all/_settings

打开/关闭索引
POST <index>/_close?ignore_unavailable=true
POST <index>/_open
```

文档（Document）  <br />  可以编制索引的基本信息单元，以JSON表示
```shell
#create document. 自动生成 _id
POST <index>/_doc
{
	  "user" : "Mac",
    "post_date" : "2022-06-15T14:12:12",
    "message" : "trying out Kibana"
}

#create document. 指定Id。如果id已经存在，报错
PUT <index>/_doc/1?op_type=create
{
    "user" : "Jack",
    "post_date" : "2022-06-15T14:12:12",
    "message" : "trying out Elasticsearch"
}

#create document. 指定 ID 如果已经存在，就报错
PUT <index>/_create/1
{
    "user" : "Jack",
    "post_date" : "2019-05-15T14:12:12",
    "message" : "trying out Elasticsearch"
}


#Get the document by ID
GET <index>/_doc/1

#Update 指定 ID  (先删除，再写入)
PUT <index>/_doc/1
{
	"user" : "Mike"
}

#在原文档上增加字段
POST <index>/_update/1/
{
    "doc":{
        "post_date" : "2019-05-15T14:12:12",
        "message" : "trying out Elasticsearch"
    }
}


# 删除文档
DELETE <index>/_doc/1
```

高级查询

GET 索引名/_search 或 POST 索引名/_search

- 查询所有：GET 索引名/_doc/_search?q=*
- 指定返回文档的字段：`{"_source": [field1, field2]}`
- 返回查询到的文档的版本号：`{"version": true}`
- 设置最小评分：`{"min_score": 0.6}`
- 分页查询：`{"from": 0, "size": 10}`
   - from 指定返回结果的开始位置，默认 0
   - size 指定一次返回结果所包含的最大文档数量，默认 10

- 返回结果
   - took：耗时
   - _shards.total：分片总数
   - hits.total：符合查询条件的文档数
   - hits.max_score：最大匹配度
   - hits.hits：查询到的结果
   - hits.hits._score：匹配度


批处理
```json
批量执行
POST _bulk
{ "index" : { "_index" : "test", "_id" : "1" } }
{ "field1" : "value1" }
{ "delete" : { "_index" : "test", "_id" : "2" } }
{ "create" : { "_index" : "test2", "_id" : "3" } }
{ "field1" : "value3" }
{ "update" : {"_id" : "1", "_index" : "test"} }
{ "doc" : {"field2" : "value2"} }


批量读取
GET /_mget
{
    "docs" : [
        {
            "_index" : "test",
            "_id" : "1",
            "_source" : false
        },
        {
            "_index" : "test",
            "_id" : "2",
            "_source" : ["field3", "field4"]
        },
        {
            "_index" : "test",
            "_id" : "3",
            "_source" : {
                "include": ["user"],
                "exclude": ["user.location"]
            }
        }
    ]
}

批量查询
POST <index>/_msearch
{}
{"query" : {"match_all" : {}},"size":1}
{"index" : "kibana_sample_data_flights"}
{"query" : {"match_all" : {}},"size":2}
```


查询语义
```json
Beautiful Mind 等效于 Beautiful OR Mind
"Beautiful Mind" 等效于 Beautiful AND Mind

# Term 查询
GET /movies/_search?q=title:Beautiful Mind
{
	"profile":"true"
}

# 使用引号，Phrase 查询
GET /movies/_search?q=title:"Beautiful Mind"
{
	"profile":"true"
}

# 布尔操作符  AND、OR、NOT 或者 &&、||、! 必须大写
GET /movies/_search?q=title:(Beautiful NOT Mind)
{
	"profile":"true"
}



# 范围查询
[] 表示闭区间
{} 表示开区间
GET /movies/_search?q=title:beautiful AND year:[* TO 2018]
{
	"profile":"true"
}

GET /movies/_search?q=year:(>2010 && <=2018)
{
	"profile":"true"
}
```
通配符查询

- `?` 代表 1 个字符
- `*` 代表 0 或多个字符





## 消息队列（Message Queue）
应用间交换信息的一种技术，主要解决应用耦合，异步消息，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。

MQ 是消费-生产者模型的一个典型的代表，一端往消息队列中不断写入消息，而另一端则可以读取队列中的消息。消息发布者只管把消息发布到 MQ 中而不用管谁来取，消息使用者只管从 MQ 中取消息而不管是谁发布的。这样发布者和使用者都不用知道对方的存在。


**通信模型**

- 点对点 - 最为传统和常见的通讯方式，它支持一对一、一对多、多对多、多对一等多种配置方式，支持树状、网状等多种拓扑结构。
- 多点广播 - 能够将消息发送到多个目标站点 (Destination List)
- 发布/订阅 (Publish/Subscribe) - 可以突破目的队列地理位置的限制，使消息按照特定的主题甚至内容进行分发，用户或应用程序可以根据主题或内容接收到所需要的消息。
- 集群 (Cluster) - 类似于一个域 (Domain)，集群内部的队列管理器之间通讯时，不需要两两之间建立消息通道，而是采用集群 (Cluster) 通道与其它成员通讯，从而大大简化了系统配置。此外，集群中的队列管理器之间能够自动进行负载均衡，当某一队列管理器出现故障时，其它队列管理器可以接管它的工作，从而大大提高系统的高可靠性。





### [Kafka](https://kafka.apache.org/)

一款开源的消息引擎系统，也是一个分布式流计算平台，还可以作为数据存储



## [Apache ZooKeeper](https://zookeeper.apache.org/)
> 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。


- **顺序一致性**：从一个客户端发起的事务请求，最终都会严格按照其发起顺序被应用到 Zookeeper 中；
- **原子性**：所有事务请求的处理结果在整个集群中所有机器上都是一致的；
- **单一视图**：所有客户端看到的服务端数据模型都是一致的；
- **可靠性**：一旦服务端成功应用了一个事务，则其引起的改变会一直保留，直到被另外一个事务所更改；
- **实时性**：一旦一个事务被成功应用后，Zookeeper 可以保证客户端立即可以读取到这个事务变更后的最新状态的数据。


## [Apache Dubbo](https://dubbo.apache.org/zh-cn/)
> 一款微服务框架，为大规模微服务实践提供高性能 RPC 通信、流量治理、可观测性等解决方案

- 面向接口的远程方法调用
- 智能容错和负载均衡
- 服务自动注册和发现












