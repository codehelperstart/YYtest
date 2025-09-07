import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MentoringSession: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('guidance');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  
  const mentor = {
    id: sessionId,
    name: '李老师',
    title: '高级前端工程师',
    company: '阿里巴巴',
    experience: '8年',
    rating: 4.9,
    students: 156,
    price: 299,
    avatar: '/api/placeholder/80/80',
    specialties: ['React', 'Vue', 'JavaScript', 'TypeScript'],
    description: '专注前端技术8年，擅长React生态系统开发，曾参与多个大型项目的架构设计。'
  };
  
  const availableDates = [
    '2024-01-20',
    '2024-01-21',
    '2024-01-22',
    '2024-01-23',
    '2024-01-24'
  ];
  
  const availableTimes = [
    '09:00-10:00',
    '10:00-11:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
    '19:00-20:00',
    '20:00-21:00'
  ];
  
  const sessionTypes = [
    { value: 'guidance', label: '1对1指导', description: '针对具体技术问题进行深入讨论' },
    { value: 'review', label: '代码审查', description: '审查您的代码并提供改进建议' },
    { value: 'project', label: '项目指导', description: '项目架构设计和开发指导' },
    { value: 'career', label: '职业规划', description: '技术职业发展路径咨询' }
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime && topic && description) {
      // 这里可以添加预约提交的逻辑
      console.log('预约信息:', {
        mentorId: sessionId,
        date: selectedDate,
        time: selectedTime,
        type: sessionType,
        topic,
        description
      });
      alert('预约成功！导师将在24小时内确认您的预约。');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/mentoring" className="text-orange-500 hover:text-orange-600 mb-4 inline-block">
            ← 返回导师列表
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 导师信息 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h2 className="text-xl font-bold text-gray-800">{mentor.name}</h2>
                <p className="text-gray-600">{mentor.title}</p>
                <p className="text-orange-500">{mentor.company}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
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
              
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">擅长技能：</div>
                <div className="flex flex-wrap gap-1">
                  {mentor.specialties.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  ¥{mentor.price}/小时
                </div>
                <div className="text-sm text-gray-600">包含课后答疑</div>
              </div>
            </div>
            
            {/* 服务保障 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">服务保障</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-600">7天无理由退款</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-600">课后资料提供</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-600">24小时内回复</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm text-gray-600">会议录制回放</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 预约表单 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">预约导师指导</h2>
              
              <div className="space-y-6">
                {/* 选择服务类型 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    选择服务类型
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sessionTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          sessionType === type.value
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSessionType(type.value)}
                      >
                        <div className="font-medium text-gray-800">{type.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{type.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 选择日期 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    选择日期
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 text-sm rounded-lg border transition-colors ${
                          selectedDate === date
                            ? 'border-orange-500 bg-orange-500 text-white'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {new Date(date).toLocaleDateString('zh-CN', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* 选择时间 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    选择时间
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm rounded-lg border transition-colors ${
                          selectedTime === time
                            ? 'border-orange-500 bg-orange-500 text-white'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* 指导主题 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    指导主题
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="请输入您希望讨论的主题"
                  />
                </div>
                
                {/* 详细描述 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    详细描述
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="请详细描述您的问题或需求，以便导师更好地准备指导内容"
                  />
                </div>
                
                {/* 预约信息确认 */}
                {selectedDate && selectedTime && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">预约信息确认</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>导师：{mentor.name}</div>
                      <div>服务类型：{sessionTypes.find(t => t.value === sessionType)?.label}</div>
                      <div>日期：{selectedDate}</div>
                      <div>时间：{selectedTime}</div>
                      <div>费用：¥{mentor.price}</div>
                    </div>
                  </div>
                )}
                
                {/* 提交按钮 */}
                <div className="flex space-x-4">
                  <button
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedTime || !topic || !description}
                    className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    确认预约
                  </button>
                  <Link
                    to="/mentoring"
                    className="flex-1 text-center border border-gray-300 text-gray-600 py-3 px-6 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    取消
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringSession;