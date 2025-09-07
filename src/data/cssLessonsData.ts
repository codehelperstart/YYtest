import { Lesson } from '../pages/LessonContent';

export const cssLessonsData: Lesson[] = [
  {
    id: 1,
    title: 'CSS基础语法',
    description: '学习CSS的基本语法和规则结构',
    knowledgeCards: [
      {
        id: 1,
        title: '什么是CSS？',
        content: 'CSS（Cascading Style Sheets）是层叠样式表，用于描述HTML文档的外观和格式。CSS将内容与表现分离，使网页更易维护和美观。',
        type: 'concept'
      },
      {
        id: 2,
        title: 'CSS语法结构',
        content: 'CSS规则由选择器和声明块组成：\n• 选择器：指定要样式化的HTML元素\n• 声明块：包含一个或多个声明\n• 声明：由属性和值组成，用冒号分隔\n• 多个声明用分号分隔',
        type: 'concept'
      },
      {
        id: 3,
        title: 'CSS语法示例',
        content: '```css\n/* 基本语法结构 */\nselector {\n  property: value;\n  property: value;\n}\n\n/* 具体示例 */\nh1 {\n  color: blue;\n  font-size: 24px;\n  text-align: center;\n}\n\np {\n  color: #333;\n  line-height: 1.6;\n  margin: 10px 0;\n}\n```',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: 'CSS是___样式表的缩写，用于描述HTML文档的___和格式。',
        answer: '层叠,外观',
        userAnswer: ''
      },
      {
        id: 2,
        question: 'CSS规则由___和___组成，声明由属性和值用___分隔。',
        answer: '选择器,声明块,冒号',
        userAnswer: ''
      }
    ]
  },
  {
    id: 2,
    title: 'CSS选择器',
    description: '掌握各种CSS选择器的使用方法',
    knowledgeCards: [
      {
        id: 1,
        title: '基本选择器',
        content: '基本选择器类型：\n1. 元素选择器：直接使用标签名\n2. 类选择器：使用.className\n3. ID选择器：使用#idName\n4. 通用选择器：使用*选择所有元素',
        type: 'concept'
      },
      {
        id: 2,
        title: '组合选择器',
        content: '组合选择器可以更精确地选择元素：\n• 后代选择器：div p（空格分隔）\n• 子元素选择器：div > p\n• 相邻兄弟选择器：h1 + p\n• 通用兄弟选择器：h1 ~ p',
        type: 'concept'
      },
      {
        id: 3,
        title: '选择器示例',
        content: '```css\n/* 元素选择器 */\np { color: black; }\n\n/* 类选择器 */\n.highlight { background-color: yellow; }\n\n/* ID选择器 */\n#header { font-size: 32px; }\n\n/* 组合选择器 */\n.container p { margin: 15px; }\ndiv > span { font-weight: bold; }\nh2 + p { margin-top: 0; }\n\n/* 伪类选择器 */\na:hover { color: red; }\ninput:focus { border-color: blue; }\n```',
        type: 'example'
      },
      {
        id: 4,
        title: '选择器优先级',
        content: 'CSS选择器优先级（从高到低）：\n1. 内联样式（style属性）\n2. ID选择器\n3. 类选择器、属性选择器、伪类\n4. 元素选择器、伪元素\n\n!important可以提高优先级，但应谨慎使用。',
        type: 'concept'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '类选择器使用___符号，ID选择器使用___符号。',
        answer: '.,#',
        userAnswer: ''
      },
      {
        id: 2,
        question: '后代选择器使用___分隔，子元素选择器使用___符号。',
        answer: '空格,>',
        userAnswer: ''
      },
      {
        id: 3,
        question: '___选择器的优先级最高，___选择器的优先级最低。',
        answer: 'ID,元素',
        userAnswer: ''
      }
    ]
  },
  {
    id: 3,
    title: '盒模型',
    description: '理解CSS盒模型的概念和应用',
    knowledgeCards: [
      {
        id: 1,
        title: '什么是盒模型？',
        content: 'CSS盒模型描述了元素在页面中占据的空间。每个元素都被视为一个矩形盒子，由内容、内边距、边框和外边距组成。',
        type: 'concept'
      },
      {
        id: 2,
        title: '盒模型组成部分',
        content: '盒模型从内到外包含：\n1. Content（内容）：实际内容区域\n2. Padding（内边距）：内容与边框之间的空间\n3. Border（边框）：围绕内边距的边界\n4. Margin（外边距）：元素与其他元素之间的空间',
        type: 'concept'
      },
      {
        id: 3,
        title: '盒模型属性示例',
        content: '```css\n.box {\n  /* 内容尺寸 */\n  width: 200px;\n  height: 100px;\n  \n  /* 内边距 */\n  padding: 20px;\n  /* 或分别设置 */\n  padding-top: 10px;\n  padding-right: 15px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  \n  /* 边框 */\n  border: 2px solid #333;\n  \n  /* 外边距 */\n  margin: 10px;\n  /* 或分别设置 */\n  margin: 10px 20px; /* 上下10px，左右20px */\n}\n```',
        type: 'example'
      },
      {
        id: 4,
        title: 'box-sizing属性',
        content: 'box-sizing控制盒模型的计算方式：\n• content-box（默认）：width/height只包含内容\n• border-box：width/height包含内容、内边距和边框\n\n使用border-box可以更直观地控制元素尺寸。',
        type: 'concept'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '盒模型从内到外依次是：内容、___、___、外边距。',
        answer: '内边距,边框',
        userAnswer: ''
      },
      {
        id: 2,
        question: '___属性设置内边距，___属性设置外边距。',
        answer: 'padding,margin',
        userAnswer: ''
      }
    ]
  },
  {
    id: 4,
    title: '布局方式',
    description: '学习CSS的各种布局技术',
    knowledgeCards: [
      {
        id: 1,
        title: '文档流',
        content: '文档流是元素在页面中的默认排列方式。块级元素垂直排列，行内元素水平排列。理解文档流是掌握CSS布局的基础。',
        type: 'concept'
      },
      {
        id: 2,
        title: 'position属性',
        content: 'position属性控制元素的定位方式：\n• static（默认）：正常文档流\n• relative：相对定位，相对于原位置偏移\n• absolute：绝对定位，相对于最近的定位祖先\n• fixed：固定定位，相对于视口\n• sticky：粘性定位，滚动时的特殊行为',
        type: 'concept'
      },
      {
        id: 3,
        title: 'float和清除浮动',
        content: '```css\n/* 浮动布局 */\n.left-column {\n  float: left;\n  width: 30%;\n}\n\n.right-column {\n  float: right;\n  width: 65%;\n}\n\n/* 清除浮动 */\n.clearfix::after {\n  content: "";\n  display: table;\n  clear: both;\n}\n\n/* 现代布局替代方案 */\n.container {\n  display: flex;\n  gap: 20px;\n}\n```',
        type: 'example'
      },
      {
        id: 4,
        title: 'Flexbox基础',
        content: 'Flexbox是现代CSS布局的强大工具：\n• display: flex：创建弹性容器\n• justify-content：主轴对齐\n• align-items：交叉轴对齐\n• flex-direction：主轴方向\n• flex-wrap：是否换行',
        type: 'concept'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '___定位相对于原位置偏移，___定位相对于最近的定位祖先。',
        answer: 'relative,absolute',
        userAnswer: ''
      },
      {
        id: 2,
        question: 'display: ___可以创建弹性容器，___属性控制主轴对齐。',
        answer: 'flex,justify-content',
        userAnswer: ''
      }
    ]
  },
  {
    id: 5,
    title: '响应式设计',
    description: '掌握响应式网页设计的方法',
    knowledgeCards: [
      {
        id: 1,
        title: '什么是响应式设计？',
        content: '响应式设计是一种网页设计方法，使网站能够在不同设备和屏幕尺寸上提供最佳的用户体验。它通过灵活的布局、图片和CSS媒体查询来实现。',
        type: 'concept'
      },
      {
        id: 2,
        title: '媒体查询',
        content: '媒体查询允许根据设备特性应用不同的CSS规则：\n• @media screen：屏幕设备\n• max-width/min-width：屏幕宽度条件\n• orientation：设备方向\n• resolution：屏幕分辨率',
        type: 'concept'
      },
      {
        id: 3,
        title: '响应式布局示例',
        content: '```css\n/* 移动优先设计 */\n.container {\n  width: 100%;\n  padding: 10px;\n}\n\n/* 平板设备 */\n@media screen and (min-width: 768px) {\n  .container {\n    max-width: 750px;\n    margin: 0 auto;\n  }\n}\n\n/* 桌面设备 */\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 1200px;\n  }\n  \n  .grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n  }\n}\n```',
        type: 'example'
      },
      {
        id: 4,
        title: '响应式图片',
        content: '响应式图片技术：\n• max-width: 100%：图片自适应容器\n• srcset属性：提供多种分辨率\n• picture元素：艺术指导\n• object-fit：控制图片适应方式',
        type: 'concept'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '___查询允许根据设备特性应用不同的CSS规则。',
        answer: '媒体',
        userAnswer: ''
      },
      {
        id: 2,
        question: 'max-width: ___可以使图片自适应容器宽度。',
        answer: '100%',
        userAnswer: ''
      }
    ]
  },
  {
    id: 6,
    title: 'CSS动画',
    knowledgeCards: [
      {
        id: 1,
        title: 'CSS过渡',
        content: 'transition属性可以为CSS属性变化添加平滑的过渡效果。它包括要过渡的属性、持续时间、时间函数和延迟时间。',
        type: 'concept'
      },
      {
        id: 2,
        title: 'CSS动画',
        content: '@keyframes规则定义动画的关键帧，animation属性应用动画。动画比过渡更强大，可以创建复杂的动画序列。',
        type: 'concept'
      },
      {
        id: 3,
        title: '动画示例',
        content: '```css\n/* 过渡效果 */\n.button {\n  background-color: blue;\n  transition: background-color 0.3s ease;\n}\n\n.button:hover {\n  background-color: red;\n}\n\n/* 关键帧动画 */\n@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.slide-element {\n  animation: slideIn 0.5s ease-out;\n}\n\n/* 无限旋转动画 */\n@keyframes rotate {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.spinner {\n  animation: rotate 2s linear infinite;\n}\n```',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: '___属性为CSS属性变化添加过渡效果，___规则定义动画关键帧。',
        answer: 'transition,@keyframes',
        userAnswer: ''
      },
      {
        id: 2,
        question: '___属性应用动画，infinite值表示___播放。',
        answer: 'animation,无限',
        userAnswer: ''
      }
    ]
  }
];