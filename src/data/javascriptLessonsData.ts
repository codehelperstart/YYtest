import { Lesson } from '../pages/LessonContent';

export const javascriptLessonsData: Lesson[] = [
  {
    id: 1,
    title: '什么是 JavaScript',
    description: '了解JavaScript的基本概念和特点',
    knowledgeCards: [
      {
        id: 1,
        title: 'JavaScript 是什么？',
        content: 'JavaScript 是一种高级的、解释型的编程语言。它是一种基于原型、函数先行的语言，是一种多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。',
        type: 'concept'
      },
      {
        id: 2,
        title: 'JavaScript 的特点',
        content: '1. 动态类型：变量类型在运行时确定\n2. 解释执行：无需编译，直接执行\n3. 跨平台：可在多种环境中运行\n4. 事件驱动：响应用户交互和系统事件',
        type: 'concept'
      },
      {
        id: 3,
        title: '简单示例',
        content: '```javascript\n// 声明变量\nlet message = "Hello, JavaScript!";\n\n// 输出到控制台\nconsole.log(message);\n\n// 简单函数\nfunction greet(name) {\n  return "Hello, " + name + "!";\n}\n```',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: 'JavaScript 是一种___编程语言，主要用于___开发。',
        answer: '动态,Web',
        userAnswer: ''
      },
      {
        id: 2,
        question: 'JavaScript 可以在___端和___端运行。',
        answer: '客户,服务器',
        userAnswer: ''
      }
    ]
  },
  {
    id: 2,
    title: '变量和数据类型',
    description: '学习JavaScript的变量声明和数据类型',
    knowledgeCards: [
      {
        id: 1,
        title: '什么是变量？',
        content: '变量是用来存储数据的容器。在 JavaScript 中，我们使用 var、let 或 const 关键字来声明变量。变量名必须以字母、下划线或美元符号开头。',
        type: 'concept'
      },
      {
        id: 2,
        title: 'JavaScript 数据类型',
        content: 'JavaScript 有以下基本数据类型：\n1. Number（数字）：整数和浮点数\n2. String（字符串）：文本数据\n3. Boolean（布尔值）：true 或 false\n4. Undefined：未定义的值\n5. Null：空值\n6. Symbol：唯一标识符\n7. Object：复杂数据类型',
        type: 'concept'
      },
      {
        id: 3,
        title: '变量声明示例',
        content: '```javascript\n// 使用 let 声明变量\nlet age = 25;\nlet name = "张三";\nlet isStudent = true;\n\n// 使用 const 声明常量\nconst PI = 3.14159;\nconst colors = ["red", "green", "blue"];\n\n// 检查数据类型\nconsole.log(typeof age);     // "number"\nconsole.log(typeof name);    // "string"\nconsole.log(typeof isStudent); // "boolean"\n```',
        type: 'example'
      },
      {
        id: 4,
        title: '类型转换练习',
        content: '尝试将不同类型的数据进行转换：\n• 字符串转数字：Number("123")\n• 数字转字符串：String(123)\n• 转布尔值：Boolean(1)\n\n注意：JavaScript 会自动进行类型转换，但显式转换更安全。',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '在 JavaScript 中，我们使用___、___或___关键字来声明变量。',
        answer: 'var,let,const',
        userAnswer: ''
      },
      {
        id: 2,
        question: '___数据类型表示文本数据，___数据类型表示数字。',
        answer: 'String,Number',
        userAnswer: ''
      },
      {
        id: 3,
        question: '使用___操作符可以检查变量的数据类型。',
        answer: 'typeof',
        userAnswer: ''
      }
    ]
   },
   {
     id: 3,
     title: '函数和作用域',
     description: '掌握JavaScript函数的定义和作用域概念',
     knowledgeCards: [
       {
         id: 1,
         title: '什么是函数？',
         content: '函数是一段可重复使用的代码块，用于执行特定的任务。函数可以接收参数，处理数据，并返回结果。使用函数可以让代码更加模块化和可维护。',
         type: 'concept'
       },
       {
         id: 2,
         title: '函数声明和调用',
         content: '```javascript\n// 函数声明\nfunction calculateArea(width, height) {\n  return width * height;\n}\n\n// 函数调用\nlet area = calculateArea(10, 5);\nconsole.log(area); // 50\n\n// 箭头函数\nconst multiply = (a, b) => a * b;\nlet result = multiply(3, 4); // 12\n```',
         type: 'example'
       },
       {
         id: 3,
         title: '作用域概念',
         content: '作用域决定了变量的可访问性：\n1. 全局作用域：在整个程序中都可访问\n2. 函数作用域：只在函数内部可访问\n3. 块级作用域：只在代码块内可访问（let/const）\n\n理解作用域有助于避免变量冲突和内存泄漏。',
         type: 'concept'
       },
       {
         id: 4,
         title: '作用域实践',
        content: '```javascript\nlet globalVar = "我是全局变量";\n\nfunction testScope() {\n  let functionVar = "我是函数变量";\n  \n  if (true) {\n    let blockVar = "我是块级变量";\n    console.log(globalVar);   // 可访问\n    console.log(functionVar); // 可访问\n    console.log(blockVar);    // 可访问\n  }\n  \n  // console.log(blockVar); // 错误！无法访问\n}\n```',
        type: 'example'
       }
     ],
     fillInBlanks: [
       {
         id: 1,
         question: '函数使用___关键字声明，使用___来调用函数。',
         answer: 'function,函数名',
         userAnswer: ''
       },
       {
         id: 2,
         question: '___作用域的变量在整个程序中都可访问，___作用域的变量只在函数内部可访问。',
         answer: '全局,函数',
         userAnswer: ''
       },
       {
         id: 3,
         question: '箭头函数使用___符号定义，格式为 const funcName = (参数) => ___。',
         answer: '=>,返回值',
         userAnswer: ''
       }
     ]
   },
   {
     id: 4,
     title: '对象和数组',
     description: '学习JavaScript中对象和数组的使用',
     knowledgeCards: [
       {
         id: 1,
         title: '什么是对象？',
         content: '对象是JavaScript中的复合数据类型，用于存储键值对。对象可以包含属性（数据）和方法（函数）。对象是面向对象编程的基础。',
         type: 'concept'
       },
       {
         id: 2,
         title: '对象的创建和使用',
         content: '```javascript\n// 对象字面量\nconst person = {\n  name: "张三",\n  age: 30,\n  city: "北京",\n  greet: function() {\n    return "你好，我是" + this.name;\n  }\n};\n\n// 访问属性\nconsole.log(person.name);     // "张三"\nconsole.log(person["age"]);   // 30\n\n// 调用方法\nconsole.log(person.greet());  // "你好，我是张三"\n```',
         type: 'example'
       },
       {
         id: 3,
         title: '数组基础',
         content: '数组是有序的数据集合，可以存储多个值。JavaScript数组是动态的，可以存储不同类型的数据。',
         type: 'concept'
       },
       {
         id: 4,
         title: '数组操作示例',
         content: '```javascript\n// 创建数组\nconst fruits = ["苹果", "香蕉", "橙子"];\nconst numbers = [1, 2, 3, 4, 5];\n\n// 访问元素\nconsole.log(fruits[0]);  // "苹果"\n\n// 数组方法\nfruits.push("葡萄");     // 添加元素\nfruits.pop();            // 删除最后一个元素\nconsole.log(fruits.length); // 数组长度\n\n// 遍历数组\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}\n```',
         type: 'example'
       }
     ],
     fillInBlanks: [
       {
         id: 1,
         question: '对象用于存储___对，数组是___的数据集合。',
         answer: '键值,有序',
         userAnswer: ''
       },
       {
         id: 2,
         question: '访问对象属性可以使用___符号或___符号。',
         answer: '.,[]',
         userAnswer: ''
       },
       {
         id: 3,
         question: '___方法向数组末尾添加元素，___方法删除数组最后一个元素。',
         answer: 'push,pop',
         userAnswer: ''
       }
     ]
   },
   {
     id: 5,
     title: '条件语句和循环',
     description: '掌握JavaScript的控制流语句',
     knowledgeCards: [
       {
         id: 1,
         title: '条件语句',
         content: '条件语句允许程序根据不同条件执行不同的代码。JavaScript提供if...else、switch等条件语句来控制程序流程。',
         type: 'concept'
       },
       {
         id: 2,
         title: 'if语句示例',
         content: '```javascript\nlet score = 85;\n\n// 简单if语句\nif (score >= 60) {\n  console.log("及格了！");\n}\n\n// if...else语句\nif (score >= 90) {\n  console.log("优秀");\n} else if (score >= 80) {\n  console.log("良好");\n} else if (score >= 60) {\n  console.log("及格");\n} else {\n  console.log("不及格");\n}\n\n// 三元运算符\nlet result = score >= 60 ? "及格" : "不及格";\n```',
         type: 'example'
       },
       {
         id: 3,
         title: '循环语句',
         content: '循环语句用于重复执行代码块。JavaScript提供for、while、do...while等循环语句。',
         type: 'concept'
       },
       {
         id: 4,
         title: '循环示例',
         content: '```javascript\n// for循环\nfor (let i = 0; i < 5; i++) {\n  console.log("第" + (i + 1) + "次循环");\n}\n\n// while循环\nlet count = 0;\nwhile (count < 3) {\n  console.log("count: " + count);\n  count++;\n}\n\n// 遍历数组\nconst colors = ["红", "绿", "蓝"];\nfor (let color of colors) {\n  console.log(color);\n}\n\n// forEach方法\ncolors.forEach(function(color, index) {\n  console.log(index + ": " + color);\n});\n```',
         type: 'example'
       }
     ],
     fillInBlanks: [
       {
         id: 1,
         question: '___语句根据条件执行不同代码，___语句用于重复执行代码块。',
         answer: '条件,循环',
         userAnswer: ''
       },
       {
         id: 2,
         question: '___循环适合已知循环次数，___循环适合未知循环次数。',
         answer: 'for,while',
         userAnswer: ''
       },
       {
         id: 3,
         question: '三元运算符的格式是：条件 ? ___值 : ___值。',
         answer: '真,假',
         userAnswer: ''
       }
     ]
   },
   {
     id: 6,
     title: 'DOM操作',
     knowledgeCards: [
       {
         id: 1,
         title: '什么是DOM？',
         content: 'DOM（Document Object Model）是文档对象模型，它将HTML文档表示为一个树形结构，JavaScript可以通过DOM API来操作网页元素。',
         type: 'concept'
       },
       {
         id: 2,
         title: '选择元素',
         content: 'JavaScript提供多种方法来选择DOM元素：\n• getElementById()：通过ID选择\n• getElementsByClassName()：通过类名选择\n• getElementsByTagName()：通过标签名选择\n• querySelector()：通过CSS选择器选择第一个\n• querySelectorAll()：通过CSS选择器选择所有',
         type: 'concept'
       },
       {
         id: 3,
         title: 'DOM操作示例',
         content: '```javascript\n// 选择元素\nconst title = document.getElementById("title");\nconst buttons = document.querySelectorAll(".btn");\n\n// 修改内容\ntitle.textContent = "新标题";\ntitle.innerHTML = "<strong>粗体标题</strong>";\n\n// 修改样式\ntitle.style.color = "red";\ntitle.style.fontSize = "24px";\n\n// 添加事件监听器\nbuttons.forEach(button => {\n  button.addEventListener("click", function() {\n    alert("按钮被点击了！");\n  });\n});\n\n// 创建新元素\nconst newDiv = document.createElement("div");\nnewDiv.textContent = "这是新创建的元素";\ndocument.body.appendChild(newDiv);\n```',
         type: 'example'
       }
     ],
     fillInBlanks: [
       {
         id: 1,
         question: 'DOM是___对象模型的缩写，用于操作___元素。',
         answer: '文档,网页',
         userAnswer: ''
       },
       {
         id: 2,
         question: '___方法通过ID选择元素，___方法通过CSS选择器选择元素。',
         answer: 'getElementById,querySelector',
         userAnswer: ''
       }
     ]
   }
];