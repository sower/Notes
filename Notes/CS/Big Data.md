

[**Lucene**](https://lucene.apache.org/)  <br />  高性能、可伸缩的、开源的信息检索库  <br />  提供了完整的查询引擎和索引引擎  <br />  构建索引、索引更新与删除、条件查询、结果排序、高亮、中文分词器、索引优化、分布式扩展


# [Elasticsearch](https://github.com/elastic/elasticsearch)
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
- 指定返回文档的字段：{"_source": [field1, field2]}
- 返回查询到的文档的版本号：{"version": true}
- 设置最小评分：{"min_score": 0.6}
- 分页查询：{"from": 0, "size": 10}
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






# 消息队列（Message Queue）
应用间交换信息的一种技术，主要解决应用耦合，异步消息，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。

MQ 是消费-生产者模型的一个典型的代表，一端往消息队列中不断写入消息，而另一端则可以读取队列中的消息。消息发布者只管把消息发布到 MQ 中而不用管谁来取，消息使用者只管从 MQ 中取消息而不管是谁发布的。这样发布者和使用者都不用知道对方的存在。


**通信模型**

- 点对点 - 最为传统和常见的通讯方式，它支持一对一、一对多、多对多、多对一等多种配置方式，支持树状、网状等多种拓扑结构。
- 多点广播 - 能够将消息发送到多个目标站点 (Destination List)
- 发布/订阅 (Publish/Subscribe) - 可以突破目的队列地理位置的限制，使消息按照特定的主题甚至内容进行分发，用户或应用程序可以根据主题或内容接收到所需要的消息。
- 集群 (Cluster) - 类似于一个域 (Domain)，集群内部的队列管理器之间通讯时，不需要两两之间建立消息通道，而是采用集群 (Cluster) 通道与其它成员通讯，从而大大简化了系统配置。此外，集群中的队列管理器之间能够自动进行负载均衡，当某一队列管理器出现故障时，其它队列管理器可以接管它的工作，从而大大提高系统的高可靠性。






## [Kafka](https://kafka.apache.org/)







## RabbitMQ
















# [Apache ZooKeeper](https://zookeeper.apache.org/)
> 为分布式应用提供了高效且可靠的分布式协调服务，提供了诸如统一命名服务、配置管理和分布式锁等分布式的基础服务。





# [Apache Dubbo](https://dubbo.apache.org/zh-cn/)
> 一款微服务框架，为大规模微服务实践提供高性能 RPC 通信、流量治理、可观测性等解决方案

- 面向接口的远程方法调用
- 智能容错和负载均衡
- 服务自动注册和发现




















**人工智能**（artificial intelligence，**AI**）：由人制造出来的机器所表现出来的智能。  <br />  [监督学习](https://zh.wikipedia.org/wiki/%E7%9B%91%E7%9D%A3%E5%AD%A6%E4%B9%A0)从给定的训练数据集中学习出一个函数，当新的数据到来时，可以根据这个函数预测结果。  <br />  **深度学习**（deep learning）：[机器学习](https://zh.wikipedia.org/wiki/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0)的分支，一种以[人工神经网络](https://zh.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C)为架构，对资料进行表征学习的[算法](https://zh.wikipedia.org/wiki/%E7%AE%97%E6%B3%95)。

[https://easyai.tech/](https://easyai.tech/)

[DeepLearning](https://github.com/Mikoto10032/DeepLearning)

[AiLearning](https://github.com/apachecn/AiLearning)

[100-Days-Of-ML-Code](https://github.com/Avik-Jain/100-Days-Of-ML-Code)

[d2l-zh](https://github.com/d2l-ai/d2l-zh)

[AI 算法工程师手册](http://www.huaxiaozhuan.com/)

[BigData-Notes](https://github.com/heibaiying/BigData-Notes)

[data-science](https://github.com/ossu/data-science)
