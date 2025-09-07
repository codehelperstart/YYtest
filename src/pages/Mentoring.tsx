import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Mentoring: React.FC = () => {
  const [activeTab, setActiveTab] = useState('available');
  
  const mentors = [
    {
      id: 1,
      name: '李老师',
      title: '高级前端工程师',
      company: '阿里巴巴',
      experience: '8年',
      rating: 4.9,
      students: 156,
      price: 299,
      avatar: '/api/placeholder/80/80',
      specialties: ['React', 'Vue', 'JavaScript', 'TypeScript'],
      description: '专注前端技术8年，擅长React生态系统开发，曾参与多个大型项目的架构设计。',
      available: true
    },
    {
      id: 2,
      name: '王工程师',
      title: '全栈开发专家',
      company: '腾讯',
      experience: '10年',
      rating: 4.8,
      students: 203,
      price: 399,
      avatar: '/api/placeholder/80/80',
      specialties: ['Node.js', 'Python', 'React', 'MySQL'],
      description: '全栈开发经验丰富，精通前后端技术栈，善于指导学员进行项目实战。',
      available: true
    },
    {
      id: 3,
      name: '张导师',
      title: '资深后端架构师',
      company: '字节跳动',
      experience: '12年',
      rating: 4.9,
      students: 89,
      price: 499,
      avatar: '/api/placeholder/80/80',
      specialties: ['Java', 'Spring', '微服务', '分布式'],
      description: '后端架构专家，在大规模分布式系统设计方面有丰富经验。',
      available: false
    }
  ];
  
  const mySessions = [
    {
      id: 1,
      mentor: '李老师',
      topic: 'React Hooks 深度解析',
      date: '2024-01-20',
      time: '14:00-15:00',
      status: 'upcoming',
      type: '1对1指导'
    },
    {
      id: 2,
      mentor: '王工程师',
      topic: '项目架构设计讨论',
      date: '2024-01-18',
      time: '16:00-17:00',
      status: 'completed',
      type: '代码审查'
    }
  ];
  
  const filteredMentors = activeTab === 'available' 
    ? mentors.filter(mentor => mentor.available)
    : mentors;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">导师陪跑</h1>
          <p className="text-gray-600">与经验丰富的导师一对一学习，加速您的技能提升</p>
        </div>
        
        {/* 标签页 */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('available')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'available'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🎯 可预约导师
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'all'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              👥 全部导师
            </button>
            <button
              onClick={() => setActiveTab('sessions')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'sessions'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📅 我的预约
            </button>
          </div>
        </div>
        
        {activeTab !== 'sessions' ? (
          /* 导师列表 */
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
                      <p className="text-sm text-gray-600">{mentor.title}</p>
                      <p className="text-sm text-orange-500">{mentor.company}</p>
                    </div>
                    {mentor.available && (
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                        可预约
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-orange-500">{mentor.experience}</div>
                      <div className="text-xs text-gray-600">工作经验</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-orange-500">{mentor.rating}</div>
                      <div className="text-xs text-gray-600">评分</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-orange-500">{mentor.students}</div>
                      <div className="text-xs text-gray-600">学员数</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{mentor.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">擅长技能：</div>
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-gray-800">
                      ¥{mentor.price}/小时
                    </div>
                    <Link
                      to={`/mentoring/session/${mentor.id}`}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        mentor.available
                          ? 'bg-orange-500 text-white hover:bg-orange-600'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {mentor.available ? '立即预约' : '暂不可约'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 我的预约 */
          <div className="space-y-4">
            {mySessions.map((session) => (
              <div key={session.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 mr-3">{session.topic}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        session.status === 'upcoming'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {session.status === 'upcoming' ? '即将开始' : '已完成'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">导师：</span>
                        {session.mentor}
                      </div>
                      <div>
                        <span className="font-medium">日期：</span>
                        {session.date}
                      </div>
                      <div>
                        <span className="font-medium">时间：</span>
                        {session.time}
                      </div>
                      <div>
                        <span className="font-medium">类型：</span>
                        {session.type}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {session.status === 'upcoming' ? (
                      <>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                          进入会议
                        </button>
                        <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                          重新安排
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                          查看回放
                        </button>
                        <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                          评价导师
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {mySessions.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📅</div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">暂无预约记录</h3>
                <p className="text-gray-500 mb-4">开始预约导师，获得专业指导</p>
                <button 
                  onClick={() => setActiveTab('available')}
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  浏览导师
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* 服务说明 */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">服务说明</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-800 mb-2">1对1指导</h3>
              <p className="text-sm text-gray-600">专业导师一对一指导，针对性解决学习问题</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold text-gray-800 mb-2">代码审查</h3>
              <p className="text-sm text-gray-600">导师审查您的代码，提供专业的改进建议</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-800 mb-2">项目指导</h3>
              <p className="text-sm text-gray-600">从项目规划到实施，全程指导项目开发</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;