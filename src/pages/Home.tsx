import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  const learningPaths = [
    {
      id: 1,
      title: '前端开发路径',
      description: '从HTML/CSS基础到React框架，全面掌握前端技能',
      duration: '3-6个月',
      level: '初级到中级',
      courses: 12,
      students: 2580,
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      title: '后端开发路径',
      description: '学习Node.js、数据库设计和API开发',
      duration: '4-8个月',
      level: '中级',
      courses: 15,
      students: 1890,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 3,
      title: '全栈开发路径',
      description: '前后端技能全覆盖，成为全栈工程师',
      duration: '6-12个月',
      level: '中级到高级',
      courses: 25,
      students: 1240,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'JavaScript 基础入门',
      instructor: '张老师',
      rating: 4.8,
      students: 3240,
      price: '免费',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=JavaScript%20programming%20course%20cover%20modern%20clean%20design&image_size=landscape_4_3'
    },
    {
      id: 2,
      title: 'React 开发实战',
      instructor: '李老师',
      rating: 4.9,
      students: 2180,
      price: '¥199',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=React%20framework%20course%20cover%20modern%20blue%20design&image_size=landscape_4_3'
    },
    {
      id: 3,
      title: 'Node.js 后端开发',
      instructor: '王老师',
      rating: 4.7,
      students: 1560,
      price: '¥299',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20backend%20development%20course%20cover%20green%20design&image_size=landscape_4_3'
    }
  ];

  const successStories = [
    {
      id: 1,
      name: '小明',
      role: '前端工程师',
      company: '阿里巴巴',
      story: '通过3个月的学习，从零基础成功转行为前端工程师',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20young%20male%20developer%20portrait%20friendly%20smile&image_size=square'
    },
    {
      id: 2,
      name: '小红',
      role: '全栈工程师',
      company: '腾讯',
      story: '从传统行业转入IT，现在已经是团队技术负责人',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20young%20female%20developer%20portrait%20confident%20smile&image_size=square'
    },
    {
      id: 3,
      name: '小李',
      role: '后端工程师',
      company: '字节跳动',
      story: '在校期间通过学习获得实习机会，毕业后直接入职',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=young%20male%20student%20developer%20portrait%20enthusiastic%20smile&image_size=square'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - 产品介绍区域 */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              新手开发陪跑器
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              专为编程新手打造的学习平台，提供系统化的学习路径、实战项目指导和社区互动支持，让你的编程之路不再孤单
            </p>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center flex-wrap">
              <Link 
                to="/register"
                className="bg-orange-500 text-white px-4 sm:px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
              >
                开始学习
              </Link>
              <Link 
                to="/learning"
                className="bg-white text-orange-500 border-2 border-orange-500 px-4 sm:px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
              >
                浏览课程
              </Link>
            </div>
          </div>
          
          {/* 统计数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10,000+</div>
              <div className="text-gray-600">学员</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">课程</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-600">就业率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">4.9</div>
              <div className="text-gray-600">用户评分</div>
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径推荐 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">学习路径推荐</h2>
            <p className="text-gray-600 text-lg">根据你的目标选择最适合的学习路径</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className={`h-32 bg-gradient-to-r ${path.color}`}></div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{path.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{path.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">学习时长</span>
                      <span className="font-medium">{path.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">难度等级</span>
                      <span className="font-medium">{path.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">课程数量</span>
                      <span className="font-medium">{path.courses}门</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">学员数量</span>
                      <span className="font-medium">{path.students}人</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/learning"
                    className="block w-full text-center bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors mt-auto"
                  >
                    开始学习
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 热门课程展示 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">热门课程</h2>
            <p className="text-gray-600 text-lg">最受欢迎的编程课程，助你快速入门</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div key={course.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">讲师：{course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-gray-500 ml-2">({course.students}人)</span>
                    </div>
                    <div className="text-lg font-bold text-orange-500">{course.price}</div>
                  </div>
                  
                  <Link 
                    to={`/learning/${course.id}`}
                    className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    立即学习
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/learning"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
            >
              查看更多课程 →
            </Link>
          </div>
        </div>
      </section>

      {/* 用户成功案例 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">成功案例</h2>
            <p className="text-gray-600 text-lg">看看他们是如何通过学习改变人生的</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <img 
                  src={story.avatar} 
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                <div className="text-orange-500 font-medium mb-1">{story.role}</div>
                <div className="text-gray-500 mb-4">{story.company}</div>
                <p className="text-gray-600 leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">准备开始你的编程之旅了吗？</h2>
          <p className="text-orange-100 text-lg mb-8">加入我们的学习社区，与万千学员一起成长</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              免费注册
            </Link>
            <Link 
              to="/community"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              加入社区
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;