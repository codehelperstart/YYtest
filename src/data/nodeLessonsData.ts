import { Lesson } from '../pages/LessonContent';

export const nodeLessonsData: Lesson[] = [
  {
    id: 1,
    title: "Node基础",
    description: "学习Node.js的基本概念和核心特性",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "Node.js简介",
        content: "Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，让JavaScript可以在服务器端运行。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "第一个Node程序",
        content: "// hello.js\nconsole.log('Hello Node.js!');\n\n// 运行命令\n// node hello.js"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "全局对象",
        content: "Node.js提供了global对象、process对象、__dirname、__filename等全局变量和对象。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "事件循环",
        content: "Node.js采用事件驱动、非阻塞I/O模型，通过事件循环处理异步操作。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "Node.js基于 _____ 引擎构建。",
        answer: "V8"
      },
      {
        id: 2,
        question: "运行Node.js文件的命令是 _____。",
        answer: "node"
      }
    ]
  },
  {
    id: 2,
    title: "模块系统",
    description: "掌握Node.js的模块系统和包管理",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "CommonJS模块",
        content: "Node.js使用CommonJS模块系统，通过require()导入模块，通过module.exports或exports导出模块。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "模块导入导出",
        content: "// math.js\nexports.add = (a, b) => a + b;\nmodule.exports.subtract = (a, b) => a - b;\n\n// app.js\nconst math = require('./math');\nconsole.log(math.add(2, 3));"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "核心模块",
        content: "Node.js提供了fs、path、http、url、crypto等核心模块，无需安装即可使用。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "NPM包管理",
        content: "NPM是Node.js的包管理器，用于安装、管理第三方模块，通过package.json管理项目依赖。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "Node.js导入模块使用 _____ 函数。",
        answer: "require"
      },
      {
        id: 2,
        question: "导出模块使用 _____ 对象。",
        answer: "module.exports"
      },
      {
        id: 3,
        question: "Node.js的包管理器是 _____。",
        answer: "NPM"
      }
    ]
  },
  {
    id: 3,
    title: "文件操作",
    description: "学习使用Node.js进行文件系统操作",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "fs模块",
        content: "fs模块提供了文件系统操作的API，包括读取、写入、删除文件和目录等功能。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "文件读写",
        content: "const fs = require('fs');\n\n// 异步读取\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// 同步写入\nfs.writeFileSync('output.txt', 'Hello World');"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "路径处理",
        content: "path模块提供了处理文件路径的工具函数，如path.join()、path.resolve()、path.extname()等。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "Node.js文件系统模块是 _____。",
        answer: "fs"
      },
      {
        id: 2,
        question: "处理文件路径的模块是 _____。",
        answer: "path"
      }
    ]
  },
  {
    id: 4,
    title: "HTTP服务",
    description: "创建和管理HTTP服务器",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "HTTP模块",
        content: "Node.js的http模块可以创建HTTP服务器和客户端，处理HTTP请求和响应。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "创建HTTP服务器",
        content: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World!');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running on port 3000');\n});"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "请求处理",
        content: "可以通过req.url获取请求路径，req.method获取请求方法，req.headers获取请求头。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "URL解析",
        content: "url模块提供了URL解析功能，可以解析查询参数、路径等URL组成部分。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "创建HTTP服务器使用 _____ 模块。",
        answer: "http"
      },
      {
        id: 2,
        question: "创建服务器的方法是 _____。",
        answer: "createServer"
      }
    ]
  },
  {
    id: 5,
    title: "Express框架",
    description: "使用Express框架构建Web应用",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "Express简介",
        content: "Express是Node.js最流行的Web框架，提供了简洁的API来构建Web应用和API。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "Express应用",
        content: "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello Express!');\n});\n\napp.listen(3000, () => {\n  console.log('App listening on port 3000');\n});"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "路由处理",
        content: "Express提供了app.get()、app.post()、app.put()、app.delete()等方法处理不同的HTTP请求。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "中间件",
        content: "中间件是Express的核心概念，用于处理请求和响应，可以执行代码、修改请求响应对象等。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "Node.js最流行的Web框架是 _____。",
        answer: "Express"
      },
      {
        id: 2,
        question: "Express的核心概念是 _____。",
        answer: "中间件"
      },
      {
        id: 3,
        question: "处理GET请求的方法是 _____。",
        answer: "app.get"
      }
    ]
  },
  {
    id: 6,
    title: "数据库连接",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "数据库驱动",
        content: "Node.js可以连接各种数据库，如MySQL、MongoDB、PostgreSQL等，需要安装相应的驱动包。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "MongoDB连接",
        content: "const { MongoClient } = require('mongodb');\n\nconst client = new MongoClient(url);\n\nasync function connect() {\n  await client.connect();\n  const db = client.db('mydb');\n  const collection = db.collection('users');\n  return collection;\n}"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "ORM框架",
        content: "可以使用Mongoose(MongoDB)、Sequelize(SQL)等ORM框架简化数据库操作。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "连接池",
        content: "数据库连接池可以复用数据库连接，提高应用性能，避免频繁创建和销毁连接。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "MongoDB的Node.js ORM框架是 _____。",
        answer: "Mongoose"
      },
      {
        id: 2,
        question: "SQL数据库的Node.js ORM框架是 _____。",
        answer: "Sequelize"
      }
    ]
  }
];