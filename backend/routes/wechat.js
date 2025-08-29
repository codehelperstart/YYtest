const express = require('express');
const crypto = require('crypto');
const axios = require('axios');
const router = express.Router();

// 微信配置（从环境变量读取）
const WECHAT_CONFIG = {
    appId: process.env.WECHAT_APP_ID,
    appSecret: process.env.WECHAT_APP_SECRET,
    token: process.env.WECHAT_TOKEN,
    encodingAESKey: process.env.WECHAT_ENCODING_AES_KEY
};

// 微信服务器验证
router.get('/webhook', (req, res) => {
    const { signature, timestamp, nonce, echostr } = req.query;
    
    // 验证签名
    if (verifySignature(signature, timestamp, nonce)) {
        console.log('微信服务器验证成功');
        res.send(echostr);
    } else {
        console.log('微信服务器验证失败');
        res.status(403).send('验证失败');
    }
});

// 接收微信消息
router.post('/webhook', (req, res) => {
    try {
        const { signature, timestamp, nonce } = req.query;
        
        // 验证签名
        if (!verifySignature(signature, timestamp, nonce)) {
            return res.status(403).send('验证失败');
        }

        // 解析XML消息（这里简化处理，实际需要XML解析）
        const message = req.body;
        console.log('收到微信消息:', message);

        // 处理不同类型的消息
        const response = handleWeChatMessage(message);
        
        res.set('Content-Type', 'application/xml');
        res.send(response);

    } catch (error) {
        console.error('处理微信消息失败:', error);
        res.status(500).send('服务器错误');
    }
});

// 获取微信Access Token
router.get('/access-token', async (req, res) => {
    try {
        const accessToken = await getAccessToken();
        
        res.json({
            success: true,
            data: {
                access_token: accessToken,
                expires_in: 7200
            }
        });

    } catch (error) {
        console.error('获取Access Token失败:', error);
        res.status(500).json({
            success: false,
            message: '获取Access Token失败'
        });
    }
});

// 发送客服消息
router.post('/send-message', async (req, res) => {
    try {
        const { openid, msgtype, content } = req.body;
        
        if (!openid || !msgtype || !content) {
            return res.status(400).json({
                success: false,
                message: '缺少必要参数'
            });
        }

        const result = await sendCustomMessage(openid, msgtype, content);
        
        res.json({
            success: true,
            message: '消息发送成功',
            data: result
        });

    } catch (error) {
        console.error('发送客服消息失败:', error);
        res.status(500).json({
            success: false,
            message: '发送消息失败'
        });
    }
});

// 创建微信菜单
router.post('/menu', async (req, res) => {
    try {
        const menuData = req.body || getDefaultMenu();
        const result = await createMenu(menuData);
        
        res.json({
            success: true,
            message: '菜单创建成功',
            data: result
        });

    } catch (error) {
        console.error('创建微信菜单失败:', error);
        res.status(500).json({
            success: false,
            message: '创建菜单失败'
        });
    }
});

// 获取用户信息
router.get('/user/:openid', async (req, res) => {
    try {
        const { openid } = req.params;
        const userInfo = await getUserInfo(openid);
        
        res.json({
            success: true,
            data: userInfo
        });

    } catch (error) {
        console.error('获取用户信息失败:', error);
        res.status(500).json({
            success: false,
            message: '获取用户信息失败'
        });
    }
});

// 工具函数

// 验证微信签名
function verifySignature(signature, timestamp, nonce) {
    const token = WECHAT_CONFIG.token;
    if (!token) {
        console.error('微信Token未配置');
        return false;
    }

    const arr = [token, timestamp, nonce].sort();
    const str = arr.join('');
    const sha1 = crypto.createHash('sha1');
    sha1.update(str);
    const result = sha1.digest('hex');
    
    return result === signature;
}

// 处理微信消息
function handleWeChatMessage(message) {
    // 这里简化处理，实际需要根据消息类型进行不同处理
    const { MsgType, Content, FromUserName, ToUserName } = message;
    
    let responseContent = '';
    
    switch (MsgType) {
        case 'text':
            responseContent = handleTextMessage(Content);
            break;
        case 'event':
            responseContent = handleEventMessage(message);
            break;
        default:
            responseContent = '欢迎使用DevMentor新手开发陪跑器！';
    }
    
    // 构造回复消息XML
    const responseXML = `
        <xml>
            <ToUserName><![CDATA[${FromUserName}]]></ToUserName>
            <FromUserName><![CDATA[${ToUserName}]]></FromUserName>
            <CreateTime>${Math.floor(Date.now() / 1000)}</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[${responseContent}]]></Content>
        </xml>
    `;
    
    return responseXML;
}

// 处理文本消息
function handleTextMessage(content) {
    const lowerContent = content.toLowerCase();
    
    if (lowerContent.includes('帮助') || lowerContent.includes('help')) {
        return '🚀 DevMentor功能介绍：\n\n1️⃣ 实时答疑 - 随时解答编程问题\n2️⃣ 学习路径 - 个性化学习计划\n3️⃣ 代码审查 - 专业代码review\n4️⃣ 项目指导 - 实战项目经验\n\n回复"开始学习"开始您的编程之旅！';
    }
    
    if (lowerContent.includes('开始学习') || lowerContent.includes('学习')) {
        return '🎯 请选择您的学习方向：\n\n1. 前端开发 (HTML/CSS/JavaScript/React/Vue)\n2. 后端开发 (Node.js/Python/Java)\n3. 全栈开发\n4. 移动开发\n\n回复对应数字或直接描述您的需求！';
    }
    
    if (lowerContent.includes('前端') || content === '1') {
        return '🎨 前端开发学习路径：\n\n📚 基础阶段：HTML + CSS + JavaScript\n🛠️ 进阶阶段：React/Vue + 工程化工具\n🚀 实战阶段：完整项目开发\n\n需要详细学习计划请回复"前端计划"';
    }
    
    if (lowerContent.includes('后端') || content === '2') {
        return '⚙️ 后端开发学习路径：\n\n📚 基础阶段：编程语言 + 数据库\n🛠️ 进阶阶段：框架 + API设计\n🚀 实战阶段：微服务 + 部署\n\n需要详细学习计划请回复"后端计划"';
    }
    
    return '感谢您的消息！我是DevMentor AI助手，专门帮助新手学习编程。\n\n回复"帮助"查看功能介绍\n回复"开始学习"开始您的编程之旅！';
}

// 处理事件消息
function handleEventMessage(message) {
    const { Event } = message;
    
    switch (Event) {
        case 'subscribe':
            return '🎉 欢迎关注DevMentor！\n\n我是您的专属编程导师，将陪伴您的编程学习之旅。\n\n✨ 主要功能：\n• 24/7在线答疑\n• 个性化学习路径\n• 专业代码审查\n• 实战项目指导\n\n回复"开始学习"立即开始！';
        case 'unsubscribe':
            return '感谢您的关注，期待再次为您服务！';
        case 'CLICK':
            return handleMenuClick(message);
        default:
            return '感谢您的关注！';
    }
}

// 处理菜单点击
function handleMenuClick(message) {
    const { EventKey } = message;
    
    switch (EventKey) {
        case 'LEARNING_PATH':
            return '📚 学习路径功能开发中，敬请期待！';
        case 'CODE_REVIEW':
            return '🔍 代码审查功能开发中，敬请期待！';
        case 'PROJECT_GUIDE':
            return '🎯 项目指导功能开发中，敬请期待！';
        default:
            return '功能开发中，敬请期待！';
    }
}

// 获取Access Token
async function getAccessToken() {
    const { appId, appSecret } = WECHAT_CONFIG;
    
    if (!appId || !appSecret) {
        throw new Error('微信AppID或AppSecret未配置');
    }
    
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`;
    
    const response = await axios.get(url);
    
    if (response.data.errcode) {
        throw new Error(`获取Access Token失败: ${response.data.errmsg}`);
    }
    
    return response.data.access_token;
}

// 发送客服消息
async function sendCustomMessage(openid, msgtype, content) {
    const accessToken = await getAccessToken();
    const url = `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${accessToken}`;
    
    const messageData = {
        touser: openid,
        msgtype: msgtype,
        [msgtype]: {
            content: content
        }
    };
    
    const response = await axios.post(url, messageData);
    
    if (response.data.errcode !== 0) {
        throw new Error(`发送消息失败: ${response.data.errmsg}`);
    }
    
    return response.data;
}

// 创建微信菜单
async function createMenu(menuData) {
    const accessToken = await getAccessToken();
    const url = `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${accessToken}`;
    
    const response = await axios.post(url, menuData);
    
    if (response.data.errcode !== 0) {
        throw new Error(`创建菜单失败: ${response.data.errmsg}`);
    }
    
    return response.data;
}

// 获取用户信息
async function getUserInfo(openid) {
    const accessToken = await getAccessToken();
    const url = `https://api.weixin.qq.com/cgi-bin/user/info?access_token=${accessToken}&openid=${openid}&lang=zh_CN`;
    
    const response = await axios.get(url);
    
    if (response.data.errcode) {
        throw new Error(`获取用户信息失败: ${response.data.errmsg}`);
    }
    
    return response.data;
}

// 默认菜单配置
function getDefaultMenu() {
    return {
        button: [
            {
                name: "学习中心",
                sub_button: [
                    {
                        type: "click",
                        name: "学习路径",
                        key: "LEARNING_PATH"
                    },
                    {
                        type: "click",
                        name: "代码审查",
                        key: "CODE_REVIEW"
                    },
                    {
                        type: "click",
                        name: "项目指导",
                        key: "PROJECT_GUIDE"
                    }
                ]
            },
            {
                name: "在线咨询",
                type: "view",
                url: "https://your-domain.com/consultation"
            },
            {
                name: "关于我们",
                type: "view",
                url: "https://your-domain.com/about"
            }
        ]
    };
}

module.exports = router;