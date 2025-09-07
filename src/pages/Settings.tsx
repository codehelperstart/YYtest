import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('zh-CN');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">设置</h1>
          <p className="text-gray-600">管理您的账户设置和偏好</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要设置 */}
          <div className="lg:col-span-2">
            {/* 个人信息 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">个人信息</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    用户名
                  </label>
                  <input
                    type="text"
                    defaultValue="新手开发者"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱地址
                  </label>
                  <input
                    type="email"
                    defaultValue="user@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    个人简介
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="热爱编程的新手开发者，正在学习前端开发技术。"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                  保存更改
                </button>
              </div>
            </div>
            
            {/* 偏好设置 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">偏好设置</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">推送通知</h3>
                    <p className="text-sm text-gray-600">接收学习提醒和社区动态</p>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">深色模式</h3>
                    <p className="text-sm text-gray-600">切换到深色主题</p>
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      darkMode ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        darkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    语言设置
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="zh-CN">简体中文</option>
                    <option value="en-US">English</option>
                    <option value="ja-JP">日本語</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* 安全设置 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">安全设置</h2>
              
              <div className="space-y-4">
                <button className="w-full text-left p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">修改密码</div>
                  <div className="text-sm text-gray-600">更新您的登录密码</div>
                </button>
                
                <button className="w-full text-left p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">两步验证</div>
                  <div className="text-sm text-gray-600">为您的账户添加额外安全保护</div>
                </button>
                
                <button className="w-full text-left p-4 border border-red-200 rounded-md hover:bg-red-50 transition-colors text-red-600">
                  <div className="font-medium">删除账户</div>
                  <div className="text-sm">永久删除您的账户和所有数据</div>
                </button>
              </div>
            </div>
          </div>
          
          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            {/* 账户统计 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">账户统计</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">学习天数</span>
                  <span className="font-semibold text-orange-500">45天</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">完成课程</span>
                  <span className="font-semibold text-orange-500">3门</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">获得徽章</span>
                  <span className="font-semibold text-orange-500">8个</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">社区积分</span>
                  <span className="font-semibold text-orange-500">1,250</span>
                </div>
              </div>
            </div>
            
            {/* 快捷操作 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">快捷操作</h3>
              
              <div className="space-y-3">
                <button className="w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">导出学习数据</div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">联系客服</div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">意见反馈</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;