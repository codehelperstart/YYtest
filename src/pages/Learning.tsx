import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Users, Star, BookOpen } from 'lucide-react';

const Learning: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'JavaScript 基础入门',
      description: '学习 JavaScript 编程基础语法',
      level: '初级',
      duration: '4周',
      instructor: '张老师',
      rating: 4.8,
      students: 3240,
      price: '免费',
      category: 'frontend',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=JavaScript%20programming%20course%20cover%20modern%20clean%20design&image_size=landscape_4_3'
    },
    {
      id: 2,
      title: 'React 开发实战',
      description: '掌握 React 框架核心概念',
      level: '中级',
      duration: '6周',
      instructor: '李老师',
      rating: 4.9,
      students: 2180,
      price: '¥199',
      category: 'frontend',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=React%20framework%20course%20cover%20modern%20blue%20design&image_size=landscape_4_3'
    },
    {
      id: 3,
      title: 'Node.js 后端开发',
      description: '学习服务器端 JavaScript 开发',
      level: '中级',
      duration: '8周',
      instructor: '王老师',
      rating: 4.7,
      students: 1560,
      price: '¥299',
      category: 'backend',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20backend%20development%20course%20cover%20green%20design&image_size=landscape_4_3'
    },
    {
      id: 4,
      title: 'Python 数据分析',
      description: '使用 Python 进行数据处理分析',
      level: '中级',
      duration: '6周',
      instructor: '赵老师',
      rating: 4.6,
      students: 1890,
      price: '¥249',
      category: 'data',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%20purple%20design&image_size=landscape_4_3'
    },
    {
      id: 5,
      title: 'Vue.js 开发入门',
      description: '学习 Vue.js 前端框架特性',
      level: '初级',
      duration: '5周',
      instructor: '刘老师',
      rating: 4.5,
      students: 1420,
      price: '¥159',
      category: 'frontend',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Vue.js%20framework%20course%20cover%20green%20modern%20design&image_size=landscape_4_3'
    },
    {
      id: 6,
      title: 'MySQL 数据库设计',
      description: '学习关系型数据库设计原理',
      level: '初级',
      duration: '4周',
      instructor: '陈老师',
      rating: 4.4,
      students: 980,
      price: '¥179',
      category: 'backend',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=MySQL%20database%20course%20cover%20blue%20professional%20design&image_size=landscape_4_3'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">我的学习</h1>
          <p className="text-gray-600">继续您的编程学习之旅</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-blue-500"></div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-orange-500 font-medium">{course.level}</span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
                
                <Link 
                  to={`/course/${course.id}`}
                  className="block w-full text-center bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors mt-auto"
                >
                  开始学习
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">推荐课程</h2>
          <p className="text-gray-600 mb-6">基于您的学习进度，我们为您推荐以下课程</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Python 数据分析</h3>
              <p className="text-gray-600 mb-4">学习使用 Python 进行数据处理和分析</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                了解更多
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Vue.js 开发入门</h3>
              <p className="text-gray-600 mb-4">掌握另一个流行的前端框架 Vue.js</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;