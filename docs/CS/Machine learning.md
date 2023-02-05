---
title: Machine learning
created_at: 2023-02-05T01:55:03.000Z
updated_at: 2023-02-05T14:36:47.000Z
word_count: 973
---  
## 机器学习

人工智能（artificial intelligence，AI）：由人制造出来的机器所表现出来的智能。

- 弱人工智能（Weak AI）	专注于且只能解决特定领域问题的人工智能
- 强人工智能（Strong AI）	可以胜任人类所有工作的人工智能
- 超人工智能（Super Intelligence，缩写 ASI）


### [监督学习](https://zh.wikipedia.org/wiki/%E7%9B%91%E7%9D%A3%E5%AD%A6%E4%B9%A0)（Supervised learning）
可以由训练资料中学到或创建一个模式（函数 / learning model），并依此模式推测新的实例

- 回归：预测连续的、具体的数值
- 分类：对各种事物分门别类，用于离散型预测

主流的监督学习算法

| **算法** | **类型** | **简介** |
| --- | --- | --- |
| 朴素贝叶斯 | 分类 | 基于贝叶斯定定理的统计学分类方法。它通过预测一个给定的元组属于一个特定类的概率，来进行分类。朴素贝叶斯分类法假定一个属性值在给定类的影响独立于其他属性的 —— 类条件独立性。 |
| 决策树 | 分类 | 一种简单但广泛使用的分类器，它通过训练数据构建决策树，对未知的数据进行分类。 |
| [SVM](https://easyai.tech/ai-definition/svm/) | 分类 | 支持向量机把分类问题转化为寻找分类平面的问题，并通过最大化分类边界点距离分类平面的距离来实现分类。 |
| 逻辑回归 | 分类 | 用于处理因变量为分类变量的回归问题，常见的是二分类或二项分布问题，也可以处理多分类问题，它实际上是属于一种分类方法。 |
| 线性回归 | 回归 | 处理回归任务最常用的算法之一。该算法的形式十分简单，它期望使用一个超平面拟合数据集（只有两个变量的时候就是一条直线）。 |
| 回归树 | 回归 | 回归树（决策树的一种）通过将数据集重复分割为不同的分支而实现分层学习，分割的标准是最大化每一次分离的信息增益。这种分支结构让回归树很自然地学习到非线性关系。 |
| K邻近 | 分类+回归 | 通过搜索K个最相似的实例（邻居）的整个训练集并总结那些K个实例的输出变量，对新数据点进行预测。 |
| Adaboosting | 分类+回归 | 从训练数据中学习一系列的弱分类器或基本分类器，然后将这些弱分类器组合成一个强分类器。 |
| 神经网络 | 分类+回归 | 它从信息处理角度对人脑神经元网络进行抽象， 建立某种简单模型，按不同的连接方式组成不同的网络。 |



### 非监督学习（unsupervised learning）
没有给定事先标记过的训练示例，自动对输入的资料进行分类或分群

- [聚类分析](https://zh.wikipedia.org/wiki/%E8%81%9A%E7%B1%BB%E5%88%86%E6%9E%90)（cluster analysis）：一种自动分类的方法
- [关系规则](https://zh.wikipedia.org/wiki/%E5%85%B3%E8%81%94%E8%A7%84%E5%88%99%E5%AD%A6%E4%B9%A0)（association rule）
- 维度缩减（dimensionality reduce）：在尽可能保存相关的结构的同时降低数据的复杂度


### 强化学习	Reinforcement learning
基于环境而行动，以取得最大化的预期利益





## 深度学习（deep learning）
[机器学习](https://zh.wikipedia.org/wiki/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0)的分支，一种以[人工神经网络](https://zh.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C)为架构，对资料进行表征学习的[算法](https://zh.wikipedia.org/wiki/%E7%AE%97%E6%B3%95)。

- 卷积神经网络 – CNN
- 循环神经网络 – RNN
- 生成对抗网络 – GANs
- 深度强化学习 – RL








Resource

- [ai-edu](https://github.com/microsoft/ai-edu)	神经网络基本原理
- [https://easyai.tech/](https://easyai.tech/)
- [DeepLearning](https://github.com/Mikoto10032/DeepLearning) article
- [100-Days-Of-ML-Code](https://github.com/Avik-Jain/100-Days-Of-ML-Code)
- [d2l-zh](https://github.com/d2l-ai/d2l-zh)	动手学深度学习
- [AI 算法工程师手册](http://www.huaxiaozhuan.com/)
