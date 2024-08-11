## 简介

## 备份与恢复

### mysqlpump
mysqlpump 是 mysql 5.7 以后支持的数据库备份工具
#### 备份

备份指定数据库
```shell
mysqlpump --user=root --password=jpKSovB6mB --host=127.0.0.1 --port=3306 --databases=my_database > my_database.sql
```

备份全部数据库，除了默认的mysql
```shell
mysqlpump --add-drop-database --add-drop-table --single-transaction --default-parallelism=4 --exclude-databases=mysql  --user=root --password=jpKSovB6mB --host=127.0.0.1 --port=3306 > backup.sql

```

注：--single-transaction和--default-parallelism在5.7.11之后才能一起使用

恢复全部数据库

```shell
mysql  --user=root --password=jpKSovB6mB --host=127.0.0.1 --port=3306 < backup.sql

```



## 参考

[MySQL 5.7 新备份工具mysqlpump 使用说明 - 运维小结_wangshiboloveni的技术博客_51CTO博客](https://blog.51cto.com/u_6215974/4937181)

[MySQL ：： MySQL 8.0 参考手册 ：： 6.5.6 mysqlpump — 数据库备份程序](https://dev.mysql.com/doc/refman/8.0/en/mysqlpump.html)