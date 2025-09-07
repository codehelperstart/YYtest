import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [user] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    level: '初级开发者',
    studyDays: 45,
    completedCourses: 3,
    studyHours: 120
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm mt-2">
                  {user.level}
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">学习天数</span>
                  <span className="font-semibold text-orange-500">{user.studyDays} 天</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">完成课程</span>
                  <span className="font-semibold text-orange-500">{user.completedCourses} 门</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">学习时长</span>
                  <span className="font-semibold text-orange-500">{user.studyHours} 小时</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                编辑资料
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">学习统计</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">{user.studyDays}</div>
                  <div className="text-gray-600">连续学习天数</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">{user.studyHours}</div>
                  <div className="text-gray-600">总学习时长</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">{user.completedCourses}</div>
                  <div className="text-gray-600">完成课程数</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;