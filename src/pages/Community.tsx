import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Calendar, Trophy, Users, TrendingUp } from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      user: {
        name: '小明',
        avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20young%20programmer%20avatar%20cartoon%20style&image_size=square',
        level: 'JavaScript 初学者',
        streak: 15
      },
      content: '今天完成了第一个 React 组件！虽然只是一个简单的计数器，但是感觉很有成就感。继续加油！💪',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=React%20component%20code%20screenshot%20clean%20modern&image_size=landscape_4_3',
      timestamp: '2小时前',
      likes: 24,
      comments: 8,
      category: 'frontend',
      tags: ['React', '组件', '学习笔记']
    },
    {
      id: 2,
      user: {
        name: '小红',
        avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=female%20programmer%20avatar%20professional%20cartoon&image_size=square',
        level: 'Python 进阶者',
        streak: 32
      },
      content: '分享一个数据可视化项目，用 Python 分析了最近的学习数据。发现坚持每天学习真的很重要！',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20visualization%20charts%20colorful%20dashboard&image_size=landscape_4_3',
      timestamp: '4小时前',
      likes: 56,
      comments: 15,
      category: 'data',
      tags: ['Python', '数据分析', '可视化']
    },
    {
      id: 3,
      user: {
        name: '阿强',
        avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=male%20developer%20avatar%20glasses%20cartoon%20style&image_size=square',
        level: 'Node.js 专家',
        streak: 67
      },
      content: '刚刚部署了我的第一个全栈应用！从前端到后端，从数据库到部署，整个流程走下来收获满满。感谢社区的帮助！🎉',
      timestamp: '6小时前',
      likes: 89,
      comments: 23,
      category: 'fullstack',
      tags: ['全栈', '部署', '项目完成']
    }
  ];

  const categories = [
    { id: 'all', label: '全部', count: posts.length },
    { id: 'frontend', label: '前端开发', count: posts.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: '后端开发', count: posts.filter(p => p.category === 'backend').length },
    { id: 'data', label: '数据分析', count: posts.filter(p => p.category === 'data').length },
    { id: 'fullstack', label: '全栈开发', count: posts.filter(p => p.category === 'fullstack').length }
  ];

  const filteredPosts = posts.filter(post => 
    selectedCategory === 'all' || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">打卡广场</h1>
          <p className="text-gray-600">分享学习成果，与同伴一起成长</p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-orange-500 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-800">127</div>
                <div className="text-sm text-gray-600">今日打卡</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-800">15</div>
                <div className="text-sm text-gray-600">我的连击</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-800">1.2k</div>
                <div className="text-sm text-gray-600">活跃用户</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-800">89%</div>
                <div className="text-sm text-gray-600">完成率</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            {/* 发布打卡按钮 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                发布学习打卡
              </button>
            </div>

            {/* 分类筛选 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">分类筛选</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-orange-100 text-orange-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.label}</span>
                      <span className="text-sm text-gray-400">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 主内容区 */}
          <div className="lg:col-span-3">
            {/* 标签页 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('latest')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'latest'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  最新动态
                </button>
                <button
                  onClick={() => setActiveTab('hot')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'hot'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  热门打卡
                </button>
                <button
                  onClick={() => setActiveTab('following')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'following'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  关注动态
                </button>
              </div>
            </div>

            {/* 打卡动态列表 */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                  {/* 用户信息 */}
                  <div className="flex items-center mb-4">
                    <img 
                      src={post.user.avatar} 
                      alt={post.user.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-gray-800 mr-2">{post.user.name}</h4>
                        <span className="text-sm text-orange-500 bg-orange-100 px-2 py-1 rounded-full">
                          {post.user.level}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>{post.timestamp}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
                          连击 {post.user.streak} 天
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 内容 */}
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed mb-3">{post.content}</p>
                    {post.image && (
                      <img 
                        src={post.image} 
                        alt="打卡内容"
                        className="w-full rounded-lg max-h-64 object-cover"
                      />
                    )}
                  </div>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 互动按钮 */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5 mr-1" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5 mr-1" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors">
                        <Share2 className="w-5 h-5 mr-1" />
                        分享
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;