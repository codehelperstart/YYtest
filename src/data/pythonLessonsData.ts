import { Lesson } from '../pages/LessonContent';

export const pythonLessonsData: Lesson[] = [
  {
    id: 1,
    title: "Python基础语法",
    description: "学习Python的基本语法规则和编程概念",
    knowledgeCards: [
      {
        id: 1,
        title: "Python简介",
        content: "Python是一种高级编程语言，以其简洁的语法和强大的功能而闻名。它广泛应用于Web开发、数据科学、人工智能等领域。",
        type: "concept",
        codeExample: "# 这是Python注释\nprint('Hello, Python!')"
      },
      {
        id: 2,
        title: "变量和赋值",
        content: "在Python中，变量不需要声明类型，可以直接赋值使用。Python会自动推断变量类型。",
        type: "concept",
        codeExample: "name = 'Alice'\nage = 25\nheight = 1.68\nis_student = True"
      },
      {
        id: 3,
        title: "缩进和代码块",
        content: "Python使用缩进来表示代码块，而不是大括号。标准缩进是4个空格。",
        type: "example",
        codeExample: "if age >= 18:\n    print('成年人')\n    print('可以投票')\nelse:\n    print('未成年人')"
      }
    ],
    fillInBlanks: [
      {
        id: 1,
        question: "在Python中打印Hello World的语句是：____('Hello World')",
        answer: "print"
      },
      {
        id: 2,
        question: "Python使用____来表示代码块，标准缩进是____个空格",
        answer: "缩进,4"
      }
    ]
  },
  {
    id: 2,
    title: "数据类型",
    description: "掌握Python的基本数据类型和操作方法",
    knowledgeCards: [
      {
        id: 4,
        title: "数字类型",
        content: "Python支持整数(int)、浮点数(float)和复数(complex)三种数字类型。",
        type: "concept",
        codeExample: "integer = 42\nfloat_num = 3.14\ncomplex_num = 3 + 4j"
      },
      {
        id: 5,
        title: "字符串",
        content: "字符串是用引号包围的字符序列，支持单引号、双引号和三引号。",
        type: "example",
        codeExample: "single = 'Hello'\ndouble = \"World\"\nmulti = '''多行\n字符串'''"
      },
      {
        id: 6,
        title: "列表和元组",
        content: "列表是可变的有序集合，元组是不可变的有序集合。",
        type: "concept",
        codeExample: "my_list = [1, 2, 3, 'hello']\nmy_tuple = (1, 2, 3, 'hello')"
      },
      {
        id: 7,
        title: "字典",
        content: "字典是键值对的集合，使用大括号定义，键必须是不可变类型。",
        type: "concept",
        codeExample: "person = {\n    'name': 'Alice',\n    'age': 25,\n    'city': 'Beijing'\n}"
      }
    ],
    fillInBlanks: [
      {
        id: 3,
        question: "创建一个包含数字1,2,3的列表：my_list = ____",
        answer: "[1, 2, 3]"
      },
      {
        id: 4,
        question: "字典使用____括号定义，存储____对",
        answer: "大,键值"
      }
    ]
  },
  {
    id: 3,
    title: "控制结构",
    description: "学习条件语句和循环语句的使用",
    knowledgeCards: [
      {
        id: 8,
        title: "if条件语句",
        content: "if语句用于根据条件执行不同的代码块，可以配合elif和else使用。",
        type: "example",
        codeExample: "score = 85\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelse:\n    grade = 'C'"
      },
      {
        id: 9,
        title: "for循环",
        content: "for循环用于遍历序列（如列表、字符串、范围等）中的每个元素。",
        type: "example",
        codeExample: "fruits = ['apple', 'banana', 'orange']\nfor fruit in fruits:\n    print(fruit)\n\nfor i in range(5):\n    print(i)"
      },
      {
        id: 10,
        title: "while循环",
        content: "while循环在条件为真时重复执行代码块，需要注意避免无限循环。",
        type: "example",
        codeExample: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1"
      }
    ],
    fillInBlanks: [
      {
        id: 5,
        question: "遍历列表items的for循环语法：for item __ items:",
        answer: "in"
      },
      {
        id: 6,
        question: "生成0到4的数字序列：range(____)",
        answer: "5"
      }
    ]
  },
  {
    id: 4,
    title: "函数",
    description: "学习函数的定义、调用和参数传递",
    knowledgeCards: [
      {
        id: 11,
        title: "函数定义",
        content: "使用def关键字定义函数，函数可以接收参数并返回值。",
        type: "example",
        codeExample: "def greet(name):\n    return f'Hello, {name}!'\n\nresult = greet('Alice')\nprint(result)"
      },
      {
        id: 12,
        title: "参数类型",
        content: "Python函数支持位置参数、关键字参数、默认参数和可变参数。",
        type: "concept",
        codeExample: "def func(a, b=10, *args, **kwargs):\n    print(f'a={a}, b={b}')\n    print(f'args={args}')\n    print(f'kwargs={kwargs}')"
      },
      {
        id: 13,
        title: "Lambda函数",
        content: "Lambda函数是匿名函数，用于创建简单的单行函数。",
        type: "example",
        codeExample: "square = lambda x: x ** 2\nprint(square(5))\n\nnumbers = [1, 2, 3, 4]\nsquared = list(map(lambda x: x**2, numbers))"
      }
    ],
    fillInBlanks: [
      {
        id: 7,
        question: "定义函数的关键字是____，返回值使用____关键字",
        answer: "def,return"
      },
      {
        id: 8,
        question: "创建一个计算平方的lambda函数：square = lambda x: ____",
        answer: "x ** 2"
      }
    ]
  },
  {
    id: 5,
    title: "面向对象编程",
    description: "掌握Python的类和对象概念",
    knowledgeCards: [
      {
        id: 14,
        title: "类的定义",
        content: "使用class关键字定义类，类是对象的模板，包含属性和方法。",
        type: "example",
        codeExample: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f'我是{self.name}，{self.age}岁'"
      },
      {
        id: 15,
        title: "继承",
        content: "继承允许一个类获得另一个类的属性和方法，实现代码重用。",
        type: "concept",
        codeExample: "class Student(Person):\n    def __init__(self, name, age, student_id):\n        super().__init__(name, age)\n        self.student_id = student_id\n    \n    def study(self):\n        return f'{self.name}正在学习'"
      },
      {
        id: 16,
        title: "封装和私有属性",
        content: "使用下划线前缀来表示私有属性和方法，实现封装。",
        type: "concept",
        codeExample: "class BankAccount:\n    def __init__(self, balance):\n        self._balance = balance  # 受保护属性\n        self.__pin = 1234       # 私有属性\n    \n    def get_balance(self):\n        return self._balance"
      }
    ],
    fillInBlanks: [
      {
        id: 9,
        question: "定义类的关键字是____，构造方法名是____",
        answer: "class,__init__"
      },
      {
        id: 10,
        question: "在子类中调用父类方法使用____()函数",
        answer: "super"
      }
    ]
  },
  {
    id: 6,
    title: "数据分析基础",
    description: "学习使用Python进行数据分析的基本库和方法",
    knowledgeCards: [
      {
        id: 17,
        title: "NumPy数组",
        content: "NumPy提供了高效的多维数组对象和数学函数，是数据分析的基础。",
        type: "concept",
        codeExample: "import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\nmatrix = np.array([[1, 2], [3, 4]])\nprint(arr.mean())  # 平均值"
      },
      {
        id: 18,
        title: "Pandas数据框",
        content: "Pandas提供了DataFrame数据结构，用于处理结构化数据。",
        type: "concept",
        codeExample: "import pandas as pd\n\ndata = {'name': ['Alice', 'Bob'], 'age': [25, 30]}\ndf = pd.DataFrame(data)\nprint(df.head())"
      },
      {
        id: 19,
        title: "数据可视化",
        content: "使用Matplotlib和Seaborn创建图表来可视化数据。",
        type: "concept",
        codeExample: "import matplotlib.pyplot as plt\n\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\nplt.plot(x, y)\nplt.title('线性关系')\nplt.show()"
      },
      {
        id: 20,
        title: "文件读写",
        content: "Python可以读写各种格式的文件，如CSV、JSON、Excel等。",
        type: "concept",
        codeExample: "# 读取CSV文件\ndf = pd.read_csv('data.csv')\n\n# 写入JSON文件\ndata = {'key': 'value'}\nwith open('data.json', 'w') as f:\n    json.dump(data, f)"
      }
    ],
    fillInBlanks: [
      {
        id: 11,
        question: "导入NumPy库的标准方式：import numpy as ____",
        answer: "np"
      },
      {
        id: 12,
        question: "Pandas的主要数据结构是____，用于处理结构化数据",
        answer: "DataFrame"
      }
    ]
  }
];