import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TopicDetail: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const [newReply, setNewReply] = useState('');
  
  const topic = {
    id: topicId,
    title: 'React Hooks 最佳实践分享',
    content: `大家好！我想分享一些在实际项目中使用 React Hooks 的最佳实践经验。

## 1. useState 的使用技巧

在使用 useState 时，建议将相关的状态合并到一个对象中，这样可以减少重新渲染的次数。

\`\`\`javascript
// 不推荐
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState(0);

// 推荐
const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});
\`\`\`

## 2. useEffect 的依赖数组

确保 useEffect 的依赖数组包含所有在 effect 中使用的变量，避免出现闭包陷阱。

大家还有什么其他的经验可以分享吗？`,
    author: '前端小王',
    avatar: '/api/placeholder/40/40',
    createdAt: '2024-01-15 14:30',
    views: 156,
    likes: 23,
    tags: ['React', 'Hooks', '最佳实践']
  };
  
  const replies = [
    {
      id: 1,
      author: 'React专家',
      avatar: '/api/placeholder/40/40',
      content: '非常好的分享！我补充一点：使用 useCallback 和 useMemo 时要注意性能优化的权衡，不要过度优化。',
      createdAt: '2024-01-15 15:20',
      likes: 12
    },
    {
      id: 2,
      author: '新手开发者',
      avatar: '/api/placeholder/40/40',
      content: '谢谢分享！请问在什么情况下应该使用 useReducer 而不是 useState？',
      createdAt: '2024-01-15 16:10',
      likes: 5
    },
    {
      id: 3,
      author: '全栈工程师',
      avatar: '/api/placeholder/40/40',
      content: '关于 useEffect 的依赖数组，我建议使用 ESLint 的 react-hooks/exhaustive-deps 规则来自动检查。',
      createdAt: '2024-01-15 17:45',
      likes: 8
    }
  ];

  const handleReply = () => {
    if (newReply.trim()) {
      // 这里可以添加提交回复的逻辑
      console.log('提交回复:', newReply);
      setNewReply('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/community" className="text-orange-500 hover:text-orange-600 mb-4 inline-block">
            ← 返回社区
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 主要内容 */}
          <div className="lg:col-span-3">
            {/* 话题内容 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="flex flex-wrap gap-1">
                  {topic.tags.map((tag, index) => (
                    <span key={index} className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{topic.title}</h1>
              
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-medium text-gray-800">{topic.author}</div>
                  <div className="text-sm text-gray-600">{topic.createdAt}</div>
                </div>
                <div className="ml-auto flex items-center space-x-4 text-sm text-gray-600">
                  <span>👁 {topic.views} 浏览</span>
                  <span>👍 {topic.likes} 点赞</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {topic.content}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors">
                    <span>👍</span>
                    <span>点赞 ({topic.likes})</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors">
                    <span>🔗</span>
                    <span>分享</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-yellow-500 transition-colors">
                    <span>⭐</span>
                    <span>收藏</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* 回复列表 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">回复 ({replies.length})</h2>
              
              <div className="space-y-6">
                {replies.map((reply) => (
                  <div key={reply.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <span className="font-medium text-gray-800">{reply.author}</span>
                            <span className="text-sm text-gray-600 ml-2">{reply.createdAt}</span>
                          </div>
                          <button className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                            👍 {reply.likes}
                          </button>
                        </div>
                        <div className="text-gray-700 leading-relaxed">
                          {reply.content}
                        </div>
                        <div className="mt-3">
                          <button className="text-sm text-orange-500 hover:text-orange-600 transition-colors">
                            回复
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 发表回复 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">发表回复</h3>
              
              <div className="space-y-4">
                <textarea
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="请输入您的回复内容..."
                />
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    支持 Markdown 语法
                  </div>
                  <button
                    onClick={handleReply}
                    disabled={!newReply.trim()}
                    className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    发表回复
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            {/* 作者信息 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">作者信息</h3>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                <div className="font-medium text-gray-800 mb-1">{topic.author}</div>
                <div className="text-sm text-gray-600 mb-3">前端开发工程师</div>
                
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="font-semibold text-orange-500">156</div>
                    <div className="text-sm text-gray-600">话题</div>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-500">892</div>
                    <div className="text-sm text-gray-600">回复</div>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                  关注
                </button>
              </div>
            </div>
            
            {/* 相关话题 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">相关话题</h3>
              
              <div className="space-y-3">
                {[
                  'Vue 3 组合式 API 详解',
                  'JavaScript 异步编程指南',
                  'CSS Grid 布局实战',
                  'TypeScript 进阶技巧'
                ].map((title, index) => (
                  <Link
                    key={index}
                    to={`/community/${index + 10}`}
                    className="block text-sm text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-100 pb-2 last:border-b-0"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;