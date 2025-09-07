import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  
  // 从localStorage加载已完成的章节
  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem(`course_${courseId}_completed`) || '[]');
    setCompletedLessons(completed);
  }, [courseId]);
  
  // 课程数据
  const courses = [
    {
      id: 1,
      title: 'JavaScript 基础入门',
      description: '从零开始学习 JavaScript 编程语言，掌握现代 Web 开发的核心技能',
      level: '初级',
      duration: '4周',
      instructor: '张老师',
      rating: 4.8,
      students: 3240
    },
    {
      id: 2,
      title: 'React 开发实战',
      description: '掌握 React 框架核心概念和实战技能',
      level: '中级',
      duration: '6周',
      instructor: '李老师',
      rating: 4.9,
      students: 2180
    },
    {
      id: 3,
      title: 'Node.js 后端开发',
      description: '学习服务器端 JavaScript 开发技术',
      level: '中级',
      duration: '8周',
      instructor: '王老师',
      rating: 4.7,
      students: 1560
    },
    {
      id: 4,
      title: 'Python 数据分析',
      description: '使用 Python 进行数据处理分析',
      level: '中级',
      duration: '6周',
      instructor: '赵老师',
      rating: 4.6,
      students: 1890
    },
    {
      id: 5,
      title: 'Vue.js 开发入门',
      description: '学习 Vue.js 前端框架特性和开发技巧',
      level: '初级',
      duration: '5周',
      instructor: '刘老师',
      rating: 4.5,
      students: 1420
    },
    {
      id: 6,
      title: 'MySQL 数据库设计',
      description: '学习关系型数据库设计原理',
      level: '初级',
      duration: '4周',
      instructor: '陈老师',
      rating: 4.4,
      students: 980
    },
    {
      id: 7,
      title: 'HTML 基础入门',
      description: '学习 HTML 标记语言基础知识',
      level: '初级',
      duration: '3周',
      instructor: '陈老师',
      rating: 4.6,
      students: 2100
    },
    {
      id: 8,
      title: 'CSS 样式设计',
      description: '掌握 CSS 样式设计和布局技巧',
      level: '初级',
      duration: '4周',
      instructor: '赵老师',
      rating: 4.7,
      students: 1890
    }
  ];
  
  // 根据courseId获取课程信息
  const course = courses.find(c => c.id === parseInt(courseId || '1')) || courses[0];
  
  // 根据课程获取对应的章节
  const getLessonsForCourse = (courseId: string) => {
    switch (courseId) {
      case '1': // JavaScript
        return [
          { id: 1, title: '什么是 JavaScript', duration: '15分钟' },
          { id: 2, title: '变量和数据类型', duration: '20分钟' },
          { id: 3, title: '函数和作用域', duration: '25分钟' },
          { id: 4, title: '对象和数组', duration: '30分钟' },
          { id: 5, title: 'DOM 操作', duration: '35分钟' },
          { id: 6, title: '事件处理', duration: '25分钟' }
        ];
      case '2': // React
        return [
          { id: 1, title: 'React 简介', duration: '20分钟' },
          { id: 2, title: '组件和 JSX', duration: '25分钟' },
          { id: 3, title: 'Props 和 State', duration: '30分钟' },
          { id: 4, title: 'Hooks 基础', duration: '35分钟' },
          { id: 5, title: '状态管理', duration: '40分钟' },
          { id: 6, title: '路由管理', duration: '30分钟' }
        ];
      case '3': // Node.js
        return [
          { id: 1, title: 'Node.js 简介', duration: '20分钟' },
          { id: 2, title: '模块系统', duration: '25分钟' },
          { id: 3, title: '文件系统', duration: '30分钟' },
          { id: 4, title: 'HTTP 服务器', duration: '35分钟' },
          { id: 5, title: 'Express 框架', duration: '40分钟' },
          { id: 6, title: '数据库连接', duration: '35分钟' }
        ];
      case '4': // Python
        return [
          { id: 1, title: 'Python基础语法', duration: '25分钟' },
          { id: 2, title: '数据类型', duration: '30分钟' },
          { id: 3, title: '控制结构', duration: '28分钟' },
          { id: 4, title: '函数', duration: '32分钟' },
          { id: 5, title: '面向对象编程', duration: '35分钟' },
          { id: 6, title: '数据分析基础', duration: '40分钟' }
        ];
      case '5': // Vue.js
        return [
          { id: 1, title: 'Vue.js 简介', duration: '20分钟' },
          { id: 2, title: '模板语法', duration: '25分钟' },
          { id: 3, title: '组件基础', duration: '30分钟' },
          { id: 4, title: '路由管理', duration: '35分钟' }
        ];
      case '6': // MySQL
        return [
          { id: 1, title: '数据库基础', duration: '22分钟' },
          { id: 2, title: 'SQL基础语法', duration: '30分钟' },
          { id: 3, title: '表设计与约束', duration: '28分钟' },
          { id: 4, title: '高级查询', duration: '35分钟' },
          { id: 5, title: '索引与优化', duration: '32分钟' },
          { id: 6, title: '数据库管理', duration: '38分钟' }
        ];
      case '7': // HTML
        return [
          { id: 1, title: 'HTML 基础结构', duration: '15分钟' },
          { id: 2, title: '常用 HTML 标签', duration: '20分钟' },
          { id: 3, title: '链接和图片', duration: '18分钟' },
          { id: 4, title: '列表和表格', duration: '22分钟' },
          { id: 5, title: '表单元素', duration: '25分钟' },
          { id: 6, title: '语义化标签', duration: '20分钟' }
        ];
      case '8': // CSS
        return [
          { id: 1, title: 'CSS 基础语法', duration: '18分钟' },
          { id: 2, title: '选择器详解', duration: '22分钟' },
          { id: 3, title: '盒模型', duration: '25分钟' },
          { id: 4, title: '布局方式', duration: '30分钟' },
          { id: 5, title: '响应式设计', duration: '35分钟' },
          { id: 6, title: '动画效果', duration: '28分钟' }
        ];
      default:
        return [
          { id: 1, title: '课程简介', duration: '15分钟' },
          { id: 2, title: '基础概念', duration: '20分钟' }
        ];
    }
  };
  
  const lessons = getLessonsForCourse(courseId || '1');
  
  // 计算进度
  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/learning" className="text-orange-500 hover:text-orange-600 mb-4 inline-block">
            ← 返回学习中心
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 课程信息 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="h-64 bg-gradient-to-r from-orange-400 to-blue-500"></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-orange-500 font-medium">{course.level}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm text-gray-600">{course.rating} ({course.students} 学员)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{course.duration}</div>
                    <div className="text-sm text-gray-600">课程时长</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{lessons.length}</div>
                    <div className="text-sm text-gray-600">课程章节</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{progress}%</div>
                    <div className="text-sm text-gray-600">完成进度</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{course.instructor}</div>
                    <div className="text-sm text-gray-600">讲师</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">学习进度</span>
                    <span className="text-sm text-gray-600">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors font-medium">
                  开始学习
                </button>
              </div>
            </div>
          </div>
          
          {/* 课程目录 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">课程目录</h2>
              
              <div className="space-y-3">
                {lessons.map((lesson) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  return (
                    <Link 
                      key={lesson.id} 
                      to={`/course/${courseId}/lesson/${lesson.id}`}
                      className={`block p-3 rounded-lg border ${
                        isCompleted 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      } cursor-pointer transition-colors`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            isCompleted 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-300 text-gray-600'
                          }`}>
                            {isCompleted ? '✓' : lesson.id}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{lesson.title}</div>
                            <div className="text-sm text-gray-600">{lesson.duration}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                  下载课程资料
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;