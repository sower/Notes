**SQL(结构化查询语言，Structured Query Language)**  <br />  一种 ANSI（American National Standards Institute 美国国家标准化组织）标准的计算机语言。

- 大小写不敏感
- 每条语句的末端使用分号(;)



**DBMS**（database management system，数据库管理系统） 是一种针对[对象数据库](https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1%E6%95%B0%E6%8D%AE%E5%BA%93)，为管理数据库而设计的大型电脑软件管理系统。  <br />  RDBMS (关系型数据库管理系统，Relational Database Management System)

SQL分类

- DQL（Data Query Language，数据查询语言）：用于从数据库或信息系统中查询数据
- DDL（Data Definition Language，数据定义语言）：定义数据库模式
- DML（Data Manipulation Language，数据操纵语言）：表达数据库的查询，更新
- DCL (Data Control Language，资料控制语言) ：对资料访问权进行控制



**关系键**

- 主键（primary key，主码）[数据库表](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8)中对储存数据对象予以唯一和完整标识的数据列或属性的组合。一个数据表只能有一个主键，且主键的取值不能为空。
- 外键（foreign key）
- 超键（superkey）：数据库[关系模式](https://zh.wikipedia.org/w/index.php?title=%E5%85%B3%E7%B3%BB%E6%A8%A1%E5%BC%8F&action=edit&redlink=1)设计中能够唯一标示多元组（即“行”）的属性集。
- 候选键（candidate key）是某个[关系变量](https://zh.wikipedia.org/w/index.php?title=%E5%85%B3%E7%B3%BB%E5%8F%98%E9%87%8F&action=edit&redlink=1)的一组属性所组成的集合


## 范式
[第一范式](https://baike.baidu.com/item/%E7%AC%AC%E4%B8%80%E8%8C%83%E5%BC%8F)（1NF）  <br />  数据库[表](https://baike.baidu.com/item/%E8%A1%A8/9997188)的每一列都是不可分割的基本数据项，同一列中不能有多个值，即无重复的列  <br />  字段不能再分

[第二范式](https://baike.baidu.com/item/%E7%AC%AC%E4%BA%8C%E8%8C%83%E5%BC%8F)（2NF）  <br />  数据库表中的每个[实例](https://baike.baidu.com/item/%E5%AE%9E%E4%BE%8B)或行必须可以被唯一地区分，即非主属性完全依赖于主关键字  <br />  不出现部分依赖

[第三范式](https://baike.baidu.com/item/%E7%AC%AC%E4%B8%89%E8%8C%83%E5%BC%8F)（3NF）  <br />  数据库表中不包含已在其它表中已包含的非主关键字信息。即属性不依赖于其它非主属性  <br />  不能出现传递依赖  <br />  Boyce-Codd范式（[BCNF](https://baike.baidu.com/item/BCNF)）

[第四范式](https://baike.baidu.com/item/%E7%AC%AC%E5%9B%9B%E8%8C%83%E5%BC%8F)（4NF）  <br />  [第五范式](https://baike.baidu.com/item/%E7%AC%AC%E4%BA%94%E8%8C%83%E5%BC%8F)（5NF）



## 数据类型
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| INT | 整型 | 4字节整数类型，范围约+/-21亿 |
| BIGINT | 长整型 | 8字节整数类型，范围约+/-922亿亿 |
| REAL | 浮点型 | 4字节浮点数，范围约+/-1038 |
| DOUBLE | 浮点型 | 8字节浮点数，范围约+/-10308 |
| DECIMAL(M,N) | 高精度小数 | 由用户指定精度的小数，例如，DECIMAL(20,10)表示一共20位，其中小数10位，通常用于财务计算 |
| CHAR(N) | 定长字符串 | 存储指定长度的字符串，例如，CHAR(100)总是存储100个字符的字符串 |
| VARCHAR(N) | 变长字符串 | 存储可变长度的字符串，例如，VARCHAR(100)可以存储0~100个字符的字符串 |
| BOOLEAN | 布尔类型 | 存储True或者False |
| DATE | 日期类型 | 存储日期，例如，2018-06-22 |
| TIME | 时间类型 | 存储时间，例如，12:20:59 |
| DATETIME | 日期和时间类型 | 存储日期+时间，例如，2018-06-22 12:20:59 |


## TYPE
```sql
create type dollars as numeric(12,2) final
```

## CAST
```sql
cast (table.column to numeric(12,2))
```

## DOMAIN
```sql
create domain dollars as numeric(12,2) not null
```
domain（域）与type（用户自定义类型）相比： **可声明约束，定义默认值，非强类型**


## SCHEMA
模式


# 授权(Authorization)
**权限（Privilege）：select、insert、update、delete**

## GRANT
```sql
grant <权限列表>
on <关系名|视图名>
to  <用户|角色列表>
[with grant option] #权限转移
```

## REVOKE
```sql
revoke <权限列表|grant option>
on <关系名|视图名>
from  <用户|角色列表>
[restrict]  #防止级联回收
```

## ROLE
```sql
create role <role_name>
```
