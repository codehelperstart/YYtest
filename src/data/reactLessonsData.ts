import { Lesson } from '../pages/LessonContent';

export const reactLessonsData: Lesson[] = [
  {
    id: 1,
    title: 'React组件基础',
    description: '学习React组件的基本概念和创建方法',
    knowledgeCards: [
      {
        id: 1,
        title: '什么是React组件？',
        content: 'React组件是构建用户界面的基本单元。组件可以是函数组件或类组件，它们接收props作为输入，返回描述UI的JSX元素。组件让你可以将UI拆分为独立、可复用的代码片段。',
        type: 'concept'
      },
      {
        id: 2,
        title: '函数组件示例',
        content: '```jsx\n// 函数组件\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n\n// 箭头函数组件\nconst Greeting = ({ name }) => {\n  return <div>欢迎, {name}!</div>;\n};\n\n// 使用组件\n<Welcome name="张三" />\n<Greeting name="李四" />\n```',
        type: 'example'
      },
      {
        id: 3,
        title: 'Props传递',
        content: 'Props是组件间传递数据的方式：\n• 父组件向子组件传递数据\n• Props是只读的，不能修改\n• 可以传递任何类型的数据\n• 使用解构赋值简化代码',
        type: 'concept'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: 'React组件接收___作为输入，返回描述UI的___元素。',
        answer: 'props,JSX',
        userAnswer: ''
      },
      {
        id: 2,
        question: '___组件使用function关键字定义，___组件使用箭头函数定义。',
        answer: '函数,箭头函数',
        userAnswer: ''
      }
    ]
  },
  {
    id: 2,
    title: 'JSX语法详解',
    description: '掌握JSX语法规则和使用方法',
    knowledgeCards: [
      {
        id: 1,
        title: '什么是JSX？',
        content: 'JSX是JavaScript的语法扩展，允许在JavaScript中编写类似HTML的代码。JSX会被编译为React.createElement()调用，最终生成React元素。',
        type: 'concept'
      },
      {
        id: 2,
        title: 'JSX语法规则',
        content: '1. 必须有一个根元素或使用Fragment\n2. 标签必须闭合\n3. 使用className代替class\n4. 使用驼峰命名法\n5. JavaScript表达式用{}包裹',
        type: 'concept'
      },
      {
        id: 3,
        title: 'JSX表达式',
        content: '```jsx\nconst name = "React";\nconst element = (\n  <div>\n    <h1>Hello, {name}!</h1>\n    <p>当前时间: {new Date().toLocaleString()}</p>\n    <button onClick={() => alert("点击了!")}>\n      点击我\n    </button>\n  </div>\n);\n```',
        type: 'example'
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: 'JSX是___的语法扩展，会被编译为___调用。',
        answer: 'JavaScript,React.createElement',
        userAnswer: ''
      },
      {
        id: 2,
        question: '在JSX中使用___代替class，JavaScript表达式用___包裹。',
        answer: 'className,{}',
        userAnswer: ''
      }
    ]
  }
];