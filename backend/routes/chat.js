const express = require('express');
const router = express.Router();

// 发送消息
router.post('/send', async (req, res) => {
    try {
        const { message, chatId, userId } = req.body;

        if (!message || !chatId) {
            return res.status(400).json({
                success: false,
                message: '缺少必要参数'
            });
        }

        const messageData = {
            id: Date.now().toString(),
            chatId,
            userId: userId || 'anonymous',
            message,
            timestamp: new Date().toISOString(),
            type: 'user'
        };

        console.log('收到用户消息:', messageData);

        // 模拟AI回复
        const aiResponse = generateAIResponse(message);
        
        res.json({
            success: true,
            data: {
                userMessage: messageData,
                aiResponse: {
                    id: (Date.now() + 1).toString(),
                    chatId,
                    message: aiResponse,
                    timestamp: new Date().toISOString(),
                    type: 'ai'
                }
            }
        });

    } catch (error) {
        console.error('发送消息失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 获取聊天历史
router.get('/history/:chatId', async (req, res) => {
    try {
        const { chatId } = req.params;
        const { page = 1, limit = 20 } = req.query;

        // 模拟聊天历史数据
        const mockHistory = [
            {
                id: '1',
                chatId,
                message: '你好，我想学习前端开发',
                timestamp: '2024-01-01T10:00:00.000Z',
                type: 'user'
            },
            {
                id: '2',
                chatId,
                message: '你好！很高兴为你提供前端开发学习指导。前端开发主要包括HTML、CSS和JavaScript三大核心技术。你目前的编程基础如何？',
                timestamp: '2024-01-01T10:00:30.000Z',
                type: 'ai'
            }
        ];

        res.json({
            success: true,
            data: {
                messages: mockHistory,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total: mockHistory.length
                }
            }
        });

    } catch (error) {
        console.error('获取聊天历史失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 创建新的聊天会话
router.post('/create', async (req, res) => {
    try {
        const { userId, topic } = req.body;

        const chatData = {
            id: Date.now().toString(),
            userId: userId || 'anonymous',
            topic: topic || '编程学习咨询',
            createdAt: new Date().toISOString(),
            status: 'active'
        };

        console.log('创建新聊天会话:', chatData);

        res.status(201).json({
            success: true,
            message: '聊天会话创建成功',
            data: chatData
        });

    } catch (error) {
        console.error('创建聊天会话失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 生成AI回复的辅助函数
function generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('前端') || lowerMessage.includes('html') || lowerMessage.includes('css') || lowerMessage.includes('javascript')) {
        return '前端开发是一个很好的选择！我建议你按照以下路径学习：\n\n1. **HTML基础** - 学习网页结构\n2. **CSS样式** - 美化网页外观\n3. **JavaScript** - 添加交互功能\n4. **框架学习** - React或Vue\n\n你想从哪个部分开始？我可以为你制定详细的学习计划。';
    }
    
    if (lowerMessage.includes('后端') || lowerMessage.includes('服务器') || lowerMessage.includes('数据库')) {
        return '后端开发主要负责服务器逻辑和数据处理。学习路径如下：\n\n1. **编程语言** - Python/Node.js/Java选一个\n2. **数据库** - MySQL/MongoDB\n3. **框架** - Express/Django/Spring\n4. **部署运维** - Docker/云服务\n\n你对哪种编程语言比较感兴趣？';
    }
    
    if (lowerMessage.includes('学习计划') || lowerMessage.includes('规划')) {
        return '我来为你制定个性化学习计划！请告诉我：\n\n1. 你的编程基础如何？（零基础/有一些了解/有其他语言经验）\n2. 每天能投入多少学习时间？\n3. 学习目标是什么？（找工作/兴趣爱好/转行等）\n4. 偏好的学习方式？（视频/文档/实战项目）\n\n基于这些信息，我会为你量身定制学习路径。';
    }
    
    if (lowerMessage.includes('项目') || lowerMessage.includes('实战')) {
        return '实战项目是提升编程能力的最佳方式！我推荐以下项目：\n\n**初级项目：**\n• 个人简历网站\n• 待办事项应用\n• 简单计算器\n\n**中级项目：**\n• 博客系统\n• 在线商城\n• 聊天应用\n\n**高级项目：**\n• 社交媒体平台\n• 数据可视化系统\n• 微服务架构应用\n\n你想挑战哪个级别的项目？';
    }
    
    if (lowerMessage.includes('帮助') || lowerMessage.includes('功能')) {
        return '我是DevMentor AI助手，可以为你提供：\n\n🎯 **学习指导**\n• 个性化学习路径规划\n• 技术栈选择建议\n• 学习资源推荐\n\n💻 **编程答疑**\n• 代码问题解答\n• 最佳实践指导\n• 调试技巧分享\n\n🚀 **项目指导**\n• 项目创意建议\n• 架构设计指导\n• 代码审查服务\n\n有什么具体问题尽管问我！';
    }
    
    return '感谢你的提问！我是你的编程学习伙伴，随时为你答疑解惑。\n\n你可以问我关于：\n• 编程语言学习\n• 技术栈选择\n• 项目开发\n• 职业规划\n• 学习方法\n\n请告诉我你想了解什么，我会尽力帮助你！';
}

module.exports = router;