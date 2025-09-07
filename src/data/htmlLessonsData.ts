import { Lesson } from '../pages/LessonContent';

export const htmlLessonsData: Lesson[] = [
  {
    id: 1,
    title: 'HTML基础结构',
    description: '学习HTML的基本概念和文档结构',
    knowledgeCards: [
      {
        id: 1,
        title: '什么是HTML？',
        content: 'HTML（HyperText Markup Language）是超文本标记语言，用于创建网页的标准标记语言。它使用标签来描述网页的结构和内容。',
        type: 'concept'
      },
      {
        id: 2,
        title: 'HTML文档结构',
        content: 'HTML文档由以下部分组成：\n1. DOCTYPE声明：告诉浏览器文档类型\n2. html元素：根元素\n3. head元素：包含元数据\n4. body元素：包含可见内容',
        type: 'concept'
      },
      {
        id: 3,
        title: '基本HTML结构示例',
        content: '```html\n<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n  <meta charset="UTF-8">\n  <title>我的第一个网页</title>\n</head>\n<body>\n  <h1>欢迎来到我的网站</h1>\n  <p>这是我的第一个HTML页面。</p>\n</body>\n</html>\n```',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: 'HTML是___标记语言的缩写，用于创建___。',
        answer: '超文本,网页',
        userAnswer: ''
      },
      {
        id: 2,
        question: 'HTML文档的根元素是___，可见内容放在___元素中。',
        answer: 'html,body',
        userAnswer: ''
      }
    ]
  },
  {
    id: 2,
    title: '常用HTML标签',
    description: '掌握常用的HTML标签和文本格式化',
    knowledgeCards: [
      {
        id: 1,
        title: '标题标签',
        content: 'HTML提供了6个级别的标题标签：h1到h6。h1是最大的标题，h6是最小的标题。标题标签不仅影响文字大小，还有助于SEO和页面结构。',
        type: 'concept'
      },
      {
        id: 2,
        title: '文本标签',
        content: '常用文本标签：\n• p：段落\n• span：行内文本\n• strong：重要文本（粗体）\n• em：强调文本（斜体）\n• br：换行\n• hr：水平分割线',
        type: 'concept'
      },
      {
        id: 3,
        title: '标签使用示例',
        content: '```html\n<h1>主标题</h1>\n<h2>副标题</h2>\n<p>这是一个<strong>重要</strong>的段落。</p>\n<p>这里有<em>强调</em>的文字。</p>\n<span>这是行内文本</span>\n<br>\n<hr>\n```',
        type: 'example'
      },
      {
        id: 4,
        title: '标签练习',
        content: '尝试创建一个包含不同级别标题和段落的页面：\n• 使用h1作为页面主标题\n• 使用h2作为章节标题\n• 用p标签包裹段落文字\n• 用strong和em强调重要内容',
        type: 'practice'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: 'HTML提供了___个级别的标题标签，从___到___。',
        answer: '6,h1,h6',
        userAnswer: ''
      },
      {
        id: 2,
        question: '___标签用于段落，___标签用于强调文本。',
        answer: 'p,em',
        userAnswer: ''
      },
      {
        id: 3,
        question: '___标签用于换行，___标签用于水平分割线。',
        answer: 'br,hr',
        userAnswer: ''
      }
    ]
  },
  {
    id: 3,
    title: '链接和图片',
    description: '学习如何在HTML中添加链接和图片',
    knowledgeCards: [
      {
        id: 1,
        title: '链接标签',
        content: 'a标签用于创建链接，href属性指定链接目标。链接可以指向其他网页、文件、邮箱地址或页面内的锚点。target属性控制链接打开方式。',
        type: 'concept'
      },
      {
        id: 2,
        title: '图片标签',
        content: 'img标签用于插入图片，是自闭合标签。src属性指定图片路径，alt属性提供替代文本，width和height属性控制尺寸。',
        type: 'concept'
      },
      {
        id: 3,
        title: '链接和图片示例',
        content: '```html\n<!-- 链接示例 -->\n<a href="https://www.example.com">外部链接</a>\n<a href="page2.html">内部链接</a>\n<a href="mailto:test@example.com">邮箱链接</a>\n<a href="#section1">页面内锚点</a>\n\n<!-- 图片示例 -->\n<img src="photo.jpg" alt="美丽的风景" width="300" height="200">\n<img src="https://example.com/image.png" alt="网络图片">\n```',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '___标签用于创建链接，___属性指定链接目标。',
        answer: 'a,href',
        userAnswer: ''
      },
      {
        id: 2,
        question: '___标签用于插入图片，___属性提供替代文本。',
        answer: 'img,alt',
        userAnswer: ''
      }
    ]
  },
  {
    id: 4,
    title: '列表和表格',
    description: '掌握HTML中列表和表格的创建方法',
    knowledgeCards: [
      {
        id: 1,
        title: '列表类型',
        content: 'HTML提供三种列表类型：\n1. 无序列表（ul）：使用项目符号\n2. 有序列表（ol）：使用数字编号\n3. 定义列表（dl）：术语和定义配对\n\n每个列表项使用li标签。',
        type: 'concept'
      },
      {
        id: 2,
        title: '表格结构',
        content: '表格由以下元素组成：\n• table：表格容器\n• thead：表头区域\n• tbody：表体区域\n• tr：表格行\n• th：表头单元格\n• td：数据单元格',
        type: 'concept'
      },
      {
        id: 3,
        title: '列表和表格示例',
        content: '```html\n<!-- 无序列表 -->\n<ul>\n  <li>苹果</li>\n  <li>香蕉</li>\n  <li>橙子</li>\n</ul>\n\n<!-- 有序列表 -->\n<ol>\n  <li>第一步</li>\n  <li>第二步</li>\n  <li>第三步</li>\n</ol>\n\n<!-- 简单表格 -->\n<table>\n  <thead>\n    <tr>\n      <th>姓名</th>\n      <th>年龄</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>张三</td>\n      <td>25</td>\n    </tr>\n  </tbody>\n</table>\n```',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '___标签创建无序列表，___标签创建有序列表。',
        answer: 'ul,ol',
        userAnswer: ''
      },
      {
        id: 2,
        question: '表格中___标签表示表头单元格，___标签表示数据单元格。',
        answer: 'th,td',
        userAnswer: ''
      }
    ]
  },
  {
    id: 5,
    title: '表单元素',
    description: '学习HTML表单的创建和验证',
    knowledgeCards: [
      {
        id: 1,
        title: '表单基础',
        content: 'form标签用于创建表单，action属性指定提交地址，method属性指定提交方式（GET或POST）。表单是用户与网站交互的重要方式。',
        type: 'concept'
      },
      {
        id: 2,
        title: '输入控件',
        content: '常用输入控件：\n• input：各种输入框\n• textarea：多行文本框\n• select：下拉选择框\n• button：按钮\n• label：标签（提高可访问性）',
        type: 'concept'
      },
      {
        id: 3,
        title: '表单示例',
        content: '```html\n<form action="/submit" method="POST">\n  <label for="name">姓名：</label>\n  <input type="text" id="name" name="name" required>\n  \n  <label for="email">邮箱：</label>\n  <input type="email" id="email" name="email" required>\n  \n  <label for="message">留言：</label>\n  <textarea id="message" name="message" rows="4"></textarea>\n  \n  <button type="submit">提交</button>\n</form>\n```',
        type: 'example'
      },
      {
        id: 4,
        title: '表单验证',
        content: 'HTML5提供了内置验证：\n• required：必填字段\n• type="email"：邮箱格式验证\n• type="number"：数字验证\n• pattern：正则表达式验证\n• min/max：数值范围验证',
        type: 'practice'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '___标签用于创建表单，___属性指定提交地址。',
        answer: 'form,action',
        userAnswer: ''
      },
      {
        id: 2,
        question: '___标签用于各种输入框，___标签用于多行文本框。',
        answer: 'input,textarea',
        userAnswer: ''
      },
      {
        id: 3,
        question: '___属性使字段成为必填项，type="___"用于邮箱格式验证。',
        answer: 'required,email',
        userAnswer: ''
      }
    ]
  },
  {
    id: 6,
    title: '语义化标签',
    knowledgeCards: [
      {
        id: 1,
        title: '什么是语义化？',
        content: 'HTML5引入了语义化标签，这些标签不仅描述内容的外观，更重要的是描述内容的含义和结构，有助于SEO、可访问性和代码维护。',
        type: 'concept'
      },
      {
        id: 2,
        title: '常用语义化标签',
        content: '主要语义化标签：\n• header：页头\n• nav：导航\n• main：主要内容\n• article：文章\n• section：章节\n• aside：侧边栏\n• footer：页脚',
        type: 'concept'
      },
      {
        id: 3,
        title: '语义化布局示例',
        content: '```html\n<header>\n  <h1>网站标题</h1>\n  <nav>\n    <ul>\n      <li><a href="#home">首页</a></li>\n      <li><a href="#about">关于</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>文章标题</h2>\n    <section>\n      <h3>章节标题</h3>\n      <p>章节内容...</p>\n    </section>\n  </article>\n  \n  <aside>\n    <h3>相关链接</h3>\n    <ul>\n      <li><a href="#">链接1</a></li>\n    </ul>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2024 版权所有</p>\n</footer>\n```',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '___标签表示页头，___标签表示导航区域。',
        answer: 'header,nav',
        userAnswer: ''
      },
      {
        id: 2,
        question: '___标签表示主要内容，___标签表示页脚。',
        answer: 'main,footer',
        userAnswer: ''
      }
    ]
  }
];