import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Subscription: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState('basic');
  
  const plans = [
    {
      id: 'free',
      name: '免费版',
      price: 0,
      period: '永久',
      features: [
        '基础课程访问',
        '社区讨论参与',
        '基础学习统计',
        '有限的AI助手使用'
      ],
      limitations: [
        '每月只能访问3个课程',
        '无法下载课程资料',
        '不包含1对1指导',
        'AI助手每日限制10次对话'
      ],
      color: 'gray',
      popular: false
    },
    {
      id: 'basic',
      name: '基础版',
      price: 99,
      period: '月',
      features: [
        '所有基础课程',
        '课程资料下载',
        '详细学习分析',
        'AI助手无限使用',
        '优先社区支持',
        '学习路径推荐'
      ],
      limitations: [
        '不包含高级课程',
        '不包含1对1指导',
        '项目审查次数有限'
      ],
      color: 'blue',
      popular: true
    },
    {
      id: 'pro',
      name: '专业版',
      price: 299,
      period: '月',
      features: [
        '所有课程（包含高级）',
        '无限课程资料下载',
        '高级学习分析',
        'AI助手高级功能',
        '每月2小时1对1指导',
        '项目代码审查',
        '就业指导服务',
        '专属学习群'
      ],
      limitations: [],
      color: 'orange',
      popular: false
    },
    {
      id: 'enterprise',
      name: '企业版',
      price: 999,
      period: '月',
      features: [
        '所有专业版功能',
        '无限1对1指导时间',
        '定制化学习路径',
        '企业级项目实战',
        '专属技术顾问',
        '团队协作功能',
        '企业内训服务',
        '优先技术支持'
      ],
      limitations: [],
      color: 'purple',
      popular: false
    }
  ];
  
  const subscriptionHistory = [
    {
      date: '2024-01-01',
      plan: '基础版',
      amount: 99,
      status: 'active',
      period: '2024-01-01 至 2024-01-31'
    },
    {
      date: '2023-12-01',
      plan: '基础版',
      amount: 99,
      status: 'completed',
      period: '2023-12-01 至 2023-12-31'
    },
    {
      date: '2023-11-01',
      plan: '免费版',
      amount: 0,
      status: 'completed',
      period: '2023-11-01 至 2023-11-30'
    }
  ];
  
  const currentSubscription = {
    plan: '基础版',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    autoRenew: true,
    nextBilling: '2024-01-31',
    amount: 99
  };

  const handleUpgrade = (planId: string) => {
    // 这里可以添加升级订阅的逻辑
    console.log('升级到:', planId);
  };

  const handleCancelSubscription = () => {
    // 这里可以添加取消订阅的逻辑
    if (confirm('确定要取消订阅吗？取消后将在当前计费周期结束后生效。')) {
      console.log('取消订阅');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/profile" className="text-orange-500 hover:text-orange-600 mb-4 inline-block">
            ← 返回个人资料
          </Link>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">订阅管理</h1>
          <p className="text-gray-600">管理您的订阅计划和付费记录</p>
        </div>
        
        {/* 当前订阅状态 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">当前订阅</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">{currentSubscription.plan}</div>
              <div className="text-sm text-gray-600">当前计划</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">¥{currentSubscription.amount}</div>
              <div className="text-sm text-gray-600">月费</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">{currentSubscription.endDate}</div>
              <div className="text-sm text-gray-600">到期时间</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                currentSubscription.autoRenew ? 'text-green-500' : 'text-red-500'
              }`}>
                {currentSubscription.autoRenew ? '已开启' : '已关闭'}
              </div>
              <div className="text-sm text-gray-600">自动续费</div>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              {currentSubscription.autoRenew ? '关闭自动续费' : '开启自动续费'}
            </button>
            <button 
              onClick={handleCancelSubscription}
              className="border border-red-300 text-red-600 px-6 py-2 rounded-md hover:bg-red-50 transition-colors"
            >
              取消订阅
            </button>
          </div>
        </div>
        
        {/* 订阅计划 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">选择订阅计划</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div key={plan.id} className={`relative bg-white rounded-lg shadow-md overflow-hidden ${
                plan.popular ? 'ring-2 ring-orange-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-1 text-sm">
                    推荐
                  </div>
                )}
                
                <div className={`p-6 ${plan.popular ? 'pt-8' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-gray-800">¥{plan.price}</span>
                      {plan.price > 0 && <span className="text-gray-600">/{plan.period}</span>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">包含功能：</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-800 mb-3">限制：</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <span className="text-red-500 mr-2">✗</span>
                            <span className="text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={currentPlan === plan.id}
                    className={`w-full py-2 px-4 rounded-md transition-colors ${
                      currentPlan === plan.id
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : plan.popular
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {currentPlan === plan.id ? '当前计划' : plan.price === 0 ? '免费使用' : '立即升级'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 订阅历史 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">订阅历史</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">日期</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">计划</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">金额</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">周期</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">状态</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">操作</th>
                </tr>
              </thead>
              <tbody>
                {subscriptionHistory.map((record, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">{record.date}</td>
                    <td className="py-3 px-4 text-gray-700">{record.plan}</td>
                    <td className="py-3 px-4 text-gray-700">¥{record.amount}</td>
                    <td className="py-3 px-4 text-gray-700">{record.period}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        record.status === 'active'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {record.status === 'active' ? '进行中' : '已完成'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:text-blue-600 text-sm">
                        查看发票
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 常见问题 */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">常见问题</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">如何取消订阅？</h3>
              <p className="text-sm text-gray-600">
                您可以随时取消订阅，取消后将在当前计费周期结束后生效，您仍可以使用付费功能直到订阅期结束。
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">升级订阅后如何计费？</h3>
              <p className="text-sm text-gray-600">
                升级订阅后，系统会按比例计算剩余时间的费用差额，并在下个计费周期按新计划收费。
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">支持哪些支付方式？</h3>
              <p className="text-sm text-gray-600">
                我们支持支付宝、微信支付、银行卡等多种支付方式，所有支付都经过加密处理，确保安全。
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">可以申请退款吗？</h3>
              <p className="text-sm text-gray-600">
                我们提供7天无理由退款服务，如果您对服务不满意，可以在购买后7天内申请全额退款。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;