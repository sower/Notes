import{_ as t,c as r,o as l,V as o}from"./chunks/framework.46d50e86.js";const k=JSON.parse('{"title":"Message Queue","description":"","frontmatter":{"title":"Message Queue","created_at":"2023-03-12T01:53:08.000Z","updated_at":"2023-03-12T03:10:43.000Z","word_count":2180},"headers":[],"relativePath":"CS/Message Queue.md","filePath":"CS/Message Queue.md"}'),i={name:"CS/Message Queue.md"},e=o('<h2 id="消息队列" tabindex="-1">消息队列 <a class="header-anchor" href="#消息队列" aria-label="Permalink to &quot;消息队列&quot;">​</a></h2><p>应用间交换信息的一种技术，主要解决应用耦合，异步消息，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。</p><p><strong>通信模型</strong></p><ul><li><strong>点对点</strong> - 最为传统和常见的通讯方式，消息生产者向消息队列中发送了一个消息之后，只能被一个消费者消费一次。支持一对一、一对多、多对多、多对一等多种配置方式，支持树状、网状等多种拓扑结构。</li><li>多点广播 - 能够将消息发送到多个目标站点 (Destination List)</li><li>发布/订阅 (Publish/Subscribe) - 可以突破目的队列地理位置的限制，使消息按照特定的主题甚至内容进行分发，用户或应用程序可以根据主题或内容接收到所需要的消息。</li><li>集群 (Cluster) - 类似于一个域 (Domain)，集群内部的队列管理器之间通讯时，不需要两两之间建立消息通道，而是采用集群 (Cluster) 通道与其它成员通讯，从而大大简化了系统配置。此外，集群中的队列管理器之间能够自动进行负载均衡，当某一队列管理器出现故障时，其它队列管理器可以接管它的工作，从而大大提高系统的高可靠性。</li></ul><p>优点</p><ul><li><strong>异步处理数据</strong></li><li><strong>系统应用解耦</strong></li><li><strong>业务流量削峰</strong></li></ul><p>缺点</p><ul><li>**系统可用性降低：**引入的外部依赖越多，越容易挂掉</li><li><strong>系统复杂性提高</strong><ul><li>重复消费 <ul><li>接口幂等性：使用相同参数重复执行，并能获得相同结果</li></ul></li><li>消息丢失</li><li>顺序消费</li><li>消息积压：临时紧急扩容 <ul><li>先修复 Consumer 的问题，确保其恢复消费速度，然后将现有 Consumer 都停掉。</li><li>新建一个 Topic，Partition 是原来的 10 倍，临时建立好原先 10 倍的 Queue 数量。</li><li>然后写一个临时的分发数据的 Consumer 程序，这个程序部署上去消费积压的数据，<strong>消费之后不做耗时的处理</strong>，直接均匀轮询写入临时建立好的 10 倍数量的 Queue。</li><li>接着临时征用 10 倍的机器来部署 Consumer ，每一批 Consumer 消费一个临时 Queue 的数据。这种做法相当于是临时将 Queue 资源和 Consumer 资源扩大 10 倍，以正常的 10 倍速度来消费数据。</li><li>等快速消费完积压数据之后，<strong>得恢复原先部署的架构</strong>，<strong>重新</strong>用原先的 consumer 机器来消费消息。</li></ul></li></ul></li><li><strong>一致性问题</strong></li></ul><p>死信队列用于处理无法被正常消费的消息，即死信消息(Dead-Letter Message)</p><p>选型对比</p><table><thead><tr><th><strong>特性</strong></th><th><strong>ActiveMQ</strong></th><th><strong>RabbitMQ</strong></th><th><strong>RocketMQ</strong></th><th><strong>Kafka</strong></th></tr></thead><tbody><tr><td>单机吞吐量</td><td>万级，比 RocketMQ、Kafka 低一个数量级</td><td>同 ActiveMQ</td><td>10 万级，支撑高吞吐</td><td>10 万级，高吞吐，一般配合大数据类的系统来进行实时数据计算、日志采集等场景</td></tr><tr><td>topic 数量对吞吐量的影响</td><td></td><td></td><td>topic 可以达到几百/几千的级别，吞吐量会有较小幅度的下降，这是 RocketMQ 的一大优势，在同等机器下，可以支撑大量的 topic</td><td>topic 从几十到几百个时候，吞吐量会大幅度下降，在同等机器下，Kafka 尽量保证 topic 数量不要过多，如果要支撑大规模的 topic，需要增加更多的机器资源</td></tr><tr><td>时效性</td><td>ms 级</td><td>微秒级，这是 RabbitMQ 的一大特点，延迟最低</td><td>ms 级</td><td>延迟在 ms 级以内</td></tr><tr><td>可用性</td><td>高，基于主从架构实现高可用</td><td>同 ActiveMQ</td><td>非常高，分布式架构</td><td>非常高，分布式，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>消息可靠性</td><td>有较低的概率丢失数据</td><td>基本不丢</td><td>经过参数优化配置，可以做到 0 丢失</td><td>同 RocketMQ</td></tr><tr><td>功能支持</td><td>MQ 领域的功能极其完备</td><td>基于 erlang 开发，并发能力很强，性能极好，延时很低</td><td>MQ 功能较为完善，还是分布式的，扩展性好</td><td>功能较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用</td></tr></tbody></table><h2 id="kafka" tabindex="-1"><a href="https://kafka.apache.org/" target="_blank" rel="noreferrer">Kafka</a> <a class="header-anchor" href="#kafka" aria-label="Permalink to &quot;[Kafka](https://kafka.apache.org/)&quot;">​</a></h2><p>一款开源的消息引擎系统，也是一个分布式流计算平台，还可以作为数据存储</p><p>核心功能</p><ul><li><strong>消息引擎</strong></li><li>**流处理 **一个分布式流处理平台。</li><li><strong>存储</strong> 安全的分布式存储。</li></ul><p><a href="https://zookeeper.apache.org/" target="_blank" rel="noreferrer"><br></a></p><p>特性</p><ul><li><strong>高性能</strong><ul><li><strong>分区、分段、索引</strong>：基于分区机制提供并发处理能力。分段、索引提升了数据读写的查询效率。</li><li><strong>顺序读写</strong>：提升磁盘 IO 性能。</li><li><strong>零拷贝</strong>：提升网络 I/O 效率。</li><li><strong>页缓存</strong>：利用操作系统的 PageCache 来缓存数据</li><li><strong>批量读写</strong>：有效提升网络 I/O 效率</li><li><strong>数据压缩</strong>：有效提升网络 I/O 效率</li><li><strong>pull 模式</strong>：可以自主控制消费策略，提升传输效率。</li></ul></li><li><strong>高可用</strong><ul><li><strong>持久化</strong>：消息存储在磁盘，支持持久化。</li><li><strong>副本机制</strong>：Broker 集群支持副本机制，可以通过冗余，来保证其整体的可用性。</li><li><strong>选举 Leader</strong>：实现了故障转移能力。</li></ul></li><li><strong>伸缩性</strong><ul><li><strong>分区</strong>：有良好的伸缩性。</li></ul></li></ul><h4 id="术语" tabindex="-1">术语 <a class="header-anchor" href="#术语" aria-label="Permalink to &quot;术语&quot;">​</a></h4><ul><li><strong>消息</strong>：Kafka 的数据单元被称为消息。消息由字节数组组成。</li><li><strong>批次</strong>：一组消息，这些消息属于同一个主题和分区。</li><li><strong>主题（Topic）</strong>：Kafka 消息通过主题进行分类。主题就类似数据库的表。 <ul><li>不同主题的消息是物理隔离的；</li><li>同一个主题的消息保存在一个或多个 Broker 上。但用户只需指定消息的 Topic 即可生产或消费数据而不必关心数据存于何处。</li><li>主题有一个或多个分区。</li></ul></li><li><strong>分区（Partition）</strong>：一个有序不变的消息序列，消息以追加的方式写入分区，然后以先入先出的顺序读取。Kafka 通过分区来实现数据冗余和伸缩性。</li><li><strong>消息偏移量（Offset）</strong>：表示分区中每条消息的位置信息，是一个单调递增且不变的值。</li><li><strong>生产者（Producer）</strong>：生产者是向主题发布新消息的 Kafka 客户端。生产者可以将数据发布到所选择的主题中。生产者负责将记录分配到主题中的哪一个分区中。</li><li><strong>消费者（Consumer）</strong>：消费者是从主题订阅新消息的 Kafka 客户端。消费者通过检查消息的偏移量来区分消息是否已读。</li><li><strong>消费者群组（Consumer Group）</strong>：多个消费者共同构成的一个群组，同时消费多个分区以实现高并发。 <ul><li>每个消费者属于一个特定的消费者群组</li><li>群组中，一个消费者可以消费多个分区</li><li>群组中，每个分区只能被指定给一个消费</li></ul></li><li><strong>再均衡（Rebalance）</strong>：消费者组内某个消费者实例挂掉后，其他消费者实例自动重新分配订阅主题分区的过程。分区再均衡是 Kafka 消费者端实现高可用的重要手段。</li><li><strong>代理（Broker</strong>）：一个独立的 Kafka 服务器被称为 Broker。Broker 接受来自生产者的消息，为消息设置偏移量，并提交消息到磁盘保存；消费者向 Broker 请求消息，Broker 负责返回已提交的消息。</li><li><strong>副本（Replica）</strong>：Kafka 中同一条消息能够被拷贝到多个地方以提供数据冗余，这些地方就是所谓的副本。副本还分为领导者副本和追随者副本，各自有不同的角色划分。副本是在分区层级下的，即每个分区可配置多个副本实现高可用。</li></ul>',20),s=[e];function n(a,g,d,u,c,p){return l(),r("div",null,s)}const f=t(i,[["render",n]]);export{k as __pageData,f as default};
