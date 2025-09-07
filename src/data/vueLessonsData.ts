import { Lesson } from '../pages/LessonContent';

export const vueLessonsData: Lesson[] = [
  {
    id: 1,
    title: "Vue实例",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "Vue实例基础",
        content: "Vue实例是Vue应用的根实例，通过new Vue()创建。每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "创建Vue实例",
        content: "const app = new Vue({\n  el: '#app',\n  data: {\n    message: 'Hello Vue!'\n  }\n})"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "实例选项",
        content: "Vue实例接受一个选项对象，包含data、methods、computed、watch等选项，用于定义实例的行为和状态。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "创建Vue实例使用 _____ 构造函数。",
        answer: "Vue"
      },
      {
        id: 2,
        question: "Vue实例的数据选项是 _____。",
        answer: "data"
      }
    ]
  },
  {
    id: 2,
    title: "模板语法",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "插值表达式",
        content: "Vue使用双大括号{{}}进行文本插值，可以在模板中显示数据属性的值。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "模板插值示例",
        content: "<div>{{ message }}</div>\n<div>{{ count + 1 }}</div>\n<div>{{ isActive ? 'Active' : 'Inactive' }}</div>"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "指令语法",
        content: "Vue指令是带有v-前缀的特殊属性，如v-if、v-for、v-model等，用于在模板中添加响应式行为。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "属性绑定",
        content: "使用v-bind指令或简写:来绑定HTML属性，可以动态设置元素的属性值。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "Vue的文本插值语法是 _____。",
        answer: "{{}}"
      },
      {
        id: 2,
        question: "Vue指令都以 _____ 开头。",
        answer: "v-"
      },
      {
        id: 3,
        question: "属性绑定指令 _____ 的简写是冒号。",
        answer: "v-bind"
      }
    ]
  },
  {
    id: 3,
    title: "组件通信",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "Props传递",
        content: "Props是父组件向子组件传递数据的方式，子组件通过props选项声明接收的属性。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "Props使用示例",
        content: "// 子组件\nprops: ['title', 'content']\n\n// 父组件模板\n<child-component :title=\"pageTitle\" :content=\"pageContent\"></child-component>"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "事件传递",
        content: "子组件通过$emit方法向父组件发送事件，父组件通过v-on监听子组件的事件。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "插槽Slot",
        content: "插槽是Vue的内容分发机制，允许父组件向子组件传递模板内容。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "父组件向子组件传递数据使用 _____。",
        answer: "props"
      },
      {
        id: 2,
        question: "子组件向父组件发送事件使用 _____ 方法。",
        answer: "$emit"
      }
    ]
  },
  {
    id: 4,
    title: "指令系统",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "条件渲染",
        content: "v-if、v-else-if、v-else用于条件渲染，v-show用于条件显示，区别在于v-if是真正的条件渲染。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "列表渲染",
        content: "<li v-for=\"item in items\" :key=\"item.id\">\n  {{ item.name }}\n</li>\n\n<li v-for=\"(value, key) in object\" :key=\"key\">\n  {{ key }}: {{ value }}\n</li>"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "表单绑定",
        content: "v-model指令用于在表单控件上创建双向数据绑定，自动处理不同表单元素的值绑定。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "条件渲染指令 _____ 会真正添加或移除DOM元素。",
        answer: "v-if"
      },
      {
        id: 2,
        question: "列表渲染指令是 _____。",
        answer: "v-for"
      },
      {
        id: 3,
        question: "双向数据绑定指令是 _____。",
        answer: "v-model"
      }
    ]
  },
  {
    id: 5,
    title: "路由管理",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "Vue Router",
        content: "Vue Router是Vue.js官方路由管理器，用于构建单页面应用，支持嵌套路由、路由参数、导航守卫等功能。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "路由配置",
        content: "const routes = [\n  { path: '/', component: Home },\n  { path: '/about', component: About },\n  { path: '/user/:id', component: User }\n]\n\nconst router = new VueRouter({ routes })"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "路由导航",
        content: "使用<router-link>组件进行声明式导航，使用this.$router.push()进行编程式导航。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "路由守卫",
        content: "路由守卫用于控制路由跳转，包括全局守卫、路由独享守卫和组件内守卫。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "Vue的官方路由管理器是 _____。",
        answer: "Vue Router"
      },
      {
        id: 2,
        question: "声明式路由导航组件是 _____。",
        answer: "router-link"
      }
    ]
  },
  {
    id: 6,
    title: "状态管理",
    knowledgeCards: [
      {
        id: 1,
        type: "concept" as const,
        title: "Vuex状态管理",
        content: "Vuex是Vue的状态管理模式，采用集中式存储管理应用的所有组件状态，包含state、mutations、actions、getters。"
      },
      {
        id: 2,
        type: "example" as const,
        title: "Vuex Store",
        content: "const store = new Vuex.Store({\n  state: { count: 0 },\n  mutations: {\n    increment(state) { state.count++ }\n  },\n  actions: {\n    increment({ commit }) { commit('increment') }\n  }\n})"
      },
      {
        id: 3,
        type: "practice" as const,
        title: "状态访问",
        content: "在组件中通过this.$store.state访问状态，通过this.$store.commit提交mutation，通过this.$store.dispatch分发action。"
      },
      {
        id: 4,
        type: "concept" as const,
        title: "模块化",
        content: "Vuex支持模块化，可以将store分割成模块，每个模块拥有自己的state、mutation、action、getter。"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "Vue的状态管理库是 _____。",
        answer: "Vuex"
      },
      {
        id: 2,
        question: "同步修改状态使用 _____。",
        answer: "mutations"
      },
      {
        id: 3,
        question: "异步操作使用 _____。",
        answer: "actions"
      }
    ]
  }
];