import { Lesson } from '../pages/LessonContent';

export const mysqlLessonsData: Lesson[] = [
  {
    id: 1,
    title: "数据库基础",
    description: "了解数据库的基本概念和MySQL的特点",
    knowledgeCards: [
      {
        id: 1,
        title: "数据库概念",
        content: "数据库是存储和管理数据的系统，MySQL是一个开源的关系型数据库管理系统，广泛用于Web应用开发。",
        type: "concept",
        codeExample: "-- MySQL是关系型数据库\n-- 数据以表格形式存储\n-- 支持SQL标准查询语言"
      },
      {
        id: 2,
        title: "关系型数据库",
        content: "关系型数据库使用表格来存储数据，表之间通过外键建立关系，遵循ACID特性。",
        type: "concept",
        codeExample: "-- ACID特性：\n-- Atomicity（原子性）\n-- Consistency（一致性）\n-- Isolation（隔离性）\n-- Durability（持久性）"
      },
      {
        id: 3,
        title: "MySQL架构",
        content: "MySQL采用分层架构，包括连接层、服务层、引擎层和存储层。",
        type: "concept",
        codeExample: "-- MySQL架构层次：\n-- 1. 连接层（Connection Layer）\n-- 2. 服务层（Service Layer）\n-- 3. 引擎层（Engine Layer）\n-- 4. 存储层（Storage Layer）"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "MySQL是一个____的____型数据库管理系统",
        answer: "开源,关系"
      },
      {
        id: 2,
        question: "关系型数据库遵循____特性，其中A代表____",
        answer: "ACID,原子性"
      }
    ]
  },
  {
    id: 2,
    title: "SQL基础语法",
    description: "掌握SQL的基本语法和常用命令",
    knowledgeCards: [
      {
        id: 4,
        title: "DDL数据定义语言",
        content: "DDL用于定义数据库结构，包括CREATE、ALTER、DROP等命令。",
        type: "example",
        codeExample: "-- 创建数据库\nCREATE DATABASE school;\n\n-- 创建表\nCREATE TABLE students (\n    id INT PRIMARY KEY,\n    name VARCHAR(50),\n    age INT\n);"
      },
      {
        id: 5,
        title: "DML数据操作语言",
        content: "DML用于操作表中的数据，包括INSERT、UPDATE、DELETE、SELECT等命令。",
        type: "example",
        codeExample: "-- 插入数据\nINSERT INTO students VALUES (1, 'Alice', 20);\n\n-- 更新数据\nUPDATE students SET age = 21 WHERE id = 1;\n\n-- 删除数据\nDELETE FROM students WHERE id = 1;"
      },
      {
        id: 6,
        title: "SELECT查询",
        content: "SELECT是最常用的SQL命令，用于从表中检索数据。",
        type: "example",
        codeExample: "-- 基本查询\nSELECT * FROM students;\n\n-- 条件查询\nSELECT name, age FROM students WHERE age > 18;\n\n-- 排序\nSELECT * FROM students ORDER BY age DESC;"
      },
      {
        id: 7,
        title: "数据类型",
        content: "MySQL支持多种数据类型，包括数值型、字符串型、日期时间型等。",
        type: "concept",
        codeExample: "-- 常用数据类型\nINT          -- 整数\nVARCHAR(n)   -- 可变长字符串\nDATE         -- 日期\nTIMESTAMP    -- 时间戳\nDECIMAL(m,n) -- 精确小数"
      }
    ],
    fillInBlanks: [
      {
        id: 3,
        question: "创建表的SQL命令是____，删除表的命令是____",
        answer: "CREATE TABLE,DROP TABLE"
      },
      {
        id: 4,
        question: "从students表中查询所有数据：____ * ____ students;",
        answer: "SELECT,FROM"
      }
    ]
  },
  {
    id: 3,
    title: "表设计与约束",
    description: "学习数据库表的设计原则和约束条件",
    knowledgeCards: [
      {
        id: 8,
        title: "主键约束",
        content: "主键是表中唯一标识每行数据的字段，不能为空且值唯一。",
        type: "concept",
        codeExample: "CREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    username VARCHAR(50) UNIQUE,\n    email VARCHAR(100)\n);"
      },
      {
        id: 9,
        title: "外键约束",
        content: "外键用于建立表之间的关系，确保数据的引用完整性。",
        type: "concept",
        codeExample: "CREATE TABLE orders (\n    id INT PRIMARY KEY,\n    user_id INT,\n    amount DECIMAL(10,2),\n    FOREIGN KEY (user_id) REFERENCES users(id)\n);"
      },
      {
        id: 10,
        title: "其他约束",
        content: "MySQL支持多种约束，如NOT NULL、UNIQUE、CHECK等，用于保证数据质量。",
        type: "concept",
        codeExample: "CREATE TABLE products (\n    id INT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    price DECIMAL(10,2) CHECK (price > 0),\n    category_id INT NOT NULL\n);"
      }
    ],
    fillInBlanks: [
      {
        id: 5,
        question: "主键约束使用____关键字，外键约束使用____关键字",
        answer: "PRIMARY KEY,FOREIGN KEY"
      },
      {
        id: 6,
        question: "____约束确保字段不能为空，____约束确保字段值唯一",
        answer: "NOT NULL,UNIQUE"
      }
    ]
  },
  {
    id: 4,
    title: "高级查询",
    description: "掌握复杂查询、连接和子查询",
    knowledgeCards: [
      {
        id: 11,
        title: "表连接",
        content: "JOIN用于连接多个表，包括INNER JOIN、LEFT JOIN、RIGHT JOIN等。",
        type: "example",
        codeExample: "-- 内连接\nSELECT u.name, o.amount\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;\n\n-- 左连接\nSELECT u.name, o.amount\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;"
      },
      {
        id: 12,
        title: "聚合函数",
        content: "聚合函数对一组值进行计算并返回单个值，如COUNT、SUM、AVG等。",
        type: "example",
        codeExample: "-- 统计函数\nSELECT COUNT(*) FROM users;\nSELECT SUM(amount) FROM orders;\nSELECT AVG(age) FROM users;\nSELECT MAX(amount), MIN(amount) FROM orders;"
      },
      {
        id: 13,
        title: "分组和排序",
        content: "GROUP BY用于分组数据，HAVING用于过滤分组，ORDER BY用于排序。",
        type: "example",
        codeExample: "-- 分组统计\nSELECT category_id, COUNT(*)\nFROM products\nGROUP BY category_id\nHAVING COUNT(*) > 5\nORDER BY COUNT(*) DESC;"
      },
      {
        id: 14,
        title: "子查询",
        content: "子查询是嵌套在其他查询中的查询，可以用于WHERE、FROM、SELECT等子句中。",
        type: "example",
        codeExample: "-- 子查询示例\nSELECT name FROM users\nWHERE id IN (\n    SELECT user_id FROM orders\n    WHERE amount > 1000\n);"
      }
    ],
    fillInBlanks: [
      {
        id: 7,
        question: "____JOIN返回两表的交集，____JOIN返回左表的所有记录",
        answer: "INNER,LEFT"
      },
      {
        id: 8,
        question: "____BY用于分组数据，____用于过滤分组结果",
        answer: "GROUP,HAVING"
      }
    ]
  },
  {
    id: 5,
    title: "索引与优化",
    description: "学习数据库索引和查询优化技术",
    knowledgeCards: [
      {
        id: 15,
        title: "索引概念",
        content: "索引是数据库中用于快速查找数据的数据结构，类似于书籍的目录。",
        type: "concept",
        codeExample: "-- 创建索引\nCREATE INDEX idx_username ON users(username);\n\n-- 复合索引\nCREATE INDEX idx_name_age ON users(name, age);\n\n-- 删除索引\nDROP INDEX idx_username ON users;"
      },
      {
        id: 16,
        title: "索引类型",
        content: "MySQL支持多种索引类型，包括B-Tree索引、Hash索引、全文索引等。",
        type: "concept",
        codeExample: "-- 不同索引类型\nCREATE INDEX idx_btree ON table1(col1) USING BTREE;\nCREATE INDEX idx_hash ON table1(col1) USING HASH;\nCREATE FULLTEXT INDEX idx_content ON articles(content);"
      },
      {
        id: 17,
        title: "查询优化",
        content: "通过EXPLAIN分析查询执行计划，优化SQL语句性能。",
        type: "concept",
        codeExample: "-- 分析查询计划\nEXPLAIN SELECT * FROM users WHERE age > 25;\n\n-- 查看索引使用情况\nSHOW INDEX FROM users;\n\n-- 优化建议\n-- 1. 在WHERE条件字段上建索引\n-- 2. 避免SELECT *\n-- 3. 合理使用LIMIT"
      }
    ],
    fillInBlanks: [
      {
        id: 9,
        question: "创建索引的命令是____，删除索引的命令是____",
        answer: "CREATE INDEX,DROP INDEX"
      },
      {
        id: 10,
        question: "使用____命令可以分析查询的执行计划",
        answer: "EXPLAIN"
      }
    ]
  },
  {
    id: 6,
    title: "数据库管理",
    description: "学习数据库的备份、恢复和用户管理",
    knowledgeCards: [
      {
        id: 18,
        title: "用户管理",
        content: "MySQL支持创建用户、授权和权限管理，确保数据库安全。",
        type: "concept",
        codeExample: "-- 创建用户\nCREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';\n\n-- 授权\nGRANT SELECT, INSERT ON database.* TO 'newuser'@'localhost';\n\n-- 撤销权限\nREVOKE INSERT ON database.* FROM 'newuser'@'localhost';"
      },
      {
        id: 19,
        title: "备份与恢复",
        content: "定期备份数据库是重要的运维工作，MySQL提供多种备份方式。",
        type: "concept",
        codeExample: "-- 使用mysqldump备份\nmysqldump -u root -p database_name > backup.sql\n\n-- 恢复数据库\nmysql -u root -p database_name < backup.sql\n\n-- 备份所有数据库\nmysqldump -u root -p --all-databases > all_backup.sql"
      },
      {
        id: 20,
        title: "事务管理",
        content: "事务确保数据操作的一致性，支持提交和回滚操作。",
        type: "concept",
        codeExample: "-- 事务操作\nSTART TRANSACTION;\n\nINSERT INTO accounts (id, balance) VALUES (1, 1000);\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n\n-- 提交事务\nCOMMIT;\n\n-- 或回滚事务\n-- ROLLBACK;"
      },
      {
        id: 21,
        title: "性能监控",
        content: "监控数据库性能，包括查询时间、连接数、锁等待等指标。",
        type: "concept",
        codeExample: "-- 查看进程列表\nSHOW PROCESSLIST;\n\n-- 查看状态变量\nSHOW STATUS LIKE 'Connections';\n\n-- 查看慢查询\nSHOW VARIABLES LIKE 'slow_query_log';\nSET GLOBAL slow_query_log = 'ON';"
      }
    ],
    fillInBlanks: [
      {
        id: 11,
        question: "创建用户的命令是____，授权命令是____",
        answer: "CREATE USER,GRANT"
      },
      {
        id: 12,
        question: "开始事务使用____，提交事务使用____，回滚事务使用____",
        answer: "START TRANSACTION,COMMIT,ROLLBACK"
      }
    ]
  }
];