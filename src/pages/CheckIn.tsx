import React, { useState } from 'react';

const CheckIn: React.FC = () => {
  const [todayChecked, setTodayChecked] = useState(false);
  const [studyTime, setStudyTime] = useState('');
  const [studyContent, setStudyContent] = useState('');
  
  const checkInHistory = [
    { date: '2024-01-15', studyTime: 120, content: '完成 JavaScript 函数章节学习' },
    { date: '2024-01-14', studyTime: 90, content: '学习 React Hooks 基础概念' },
    { date: '2024-01-13', studyTime: 150, content: '练习算法题：数组排序' },
    { date: '2024-01-12', studyTime: 75, content: '复习 CSS 布局技巧' },
    { date: '2024-01-11', studyTime: 180, content: '完成项目实战：待办事项应用' }
  ];
  
  const weeklyStats = {
    totalDays: 7,
    checkedDays: 5,
    totalHours: 10.2,
    avgHours: 2.04
  };

  const handleCheckIn = () => {
    if (studyTime && studyContent) {
      setTodayChecked(true);
      // 这里可以添加提交到后端的逻辑
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">学习打卡</h1>
          <p className="text-gray-600">记录您的每日学习进度，养成良好的学习习惯</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 今日打卡 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">今日打卡</h2>
              
              {!todayChecked ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      学习时长（分钟）
                    </label>
                    <input
                      type="number"
                      value={studyTime}
                      onChange={(e) => setStudyTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="请输入今日学习时长"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      学习内容
                    </label>
                    <textarea
                      value={studyContent}
                      onChange={(e) => setStudyContent(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="请描述今日的学习内容和收获"
                    />
                  </div>
                  
                  <button
                    onClick={handleCheckIn}
                    disabled={!studyTime || !studyContent}
                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    完成打卡
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">今日已打卡</h3>
                  <p className="text-gray-600">学习时长：{studyTime} 分钟</p>
                  <p className="text-gray-600 mt-2">{studyContent}</p>
                </div>
              )}
            </div>
            
            {/* 打卡历史 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">打卡历史</h2>
              
              <div className="space-y-4">
                {checkInHistory.map((record, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-800">{record.date}</span>
                      <span className="text-sm text-orange-500">{record.studyTime} 分钟</span>
                    </div>
                    <p className="text-gray-600 text-sm">{record.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 统计信息 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">本周统计</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">打卡天数</span>
                  <span className="font-semibold text-orange-500">
                    {weeklyStats.checkedDays}/{weeklyStats.totalDays}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">总学习时长</span>
                  <span className="font-semibold text-orange-500">{weeklyStats.totalHours}h</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">平均每日</span>
                  <span className="font-semibold text-orange-500">{weeklyStats.avgHours}h</span>
                </div>
                
                <div className="pt-4">
                  <div className="text-sm text-gray-600 mb-2">完成率</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(weeklyStats.checkedDays / weeklyStats.totalDays) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">
                    {Math.round((weeklyStats.checkedDays / weeklyStats.totalDays) * 100)}%
                  </div>
                </div>
              </div>
            </div>
            
            {/* 学习目标 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">学习目标</h2>
              
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="font-medium text-gray-800">每日目标</div>
                  <div className="text-sm text-gray-600">学习 2 小时</div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-gray-800">本周目标</div>
                  <div className="text-sm text-gray-600">完成 5 天打卡</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-gray-800">本月目标</div>
                  <div className="text-sm text-gray-600">完成 1 个项目</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;