// 微信API配置文件
module.exports = {
    // 微信公众号配置
    wechat: {
        // 开发者ID(AppID)
        appId: process.env.WECHAT_APP_ID || 'your_app_id_here',
        
        // 开发者密码(AppSecret)
        appSecret: process.env.WECHAT_APP_SECRET || 'your_app_secret_here',
        
        // 令牌(Token)
        token: process.env.WECHAT_TOKEN || 'your_token_here',
        
        // 消息加解密密钥(EncodingAESKey)
        encodingAESKey: process.env.WECHAT_ENCODING_AES_KEY || 'your_encoding_aes_key_here',
        
        // 服务器配置URL
        serverUrl: process.env.WECHAT_SERVER_URL || 'https://your-domain.com/api/wechat',
        
        // Access Token缓存时间（秒）
        accessTokenExpires: 7200,
        
        // API基础URL
        apiBaseUrl: 'https://api.weixin.qq.com',
        
        // 消息类型
        messageTypes: {
            TEXT: 'text',
            IMAGE: 'image',
            VOICE: 'voice',
            VIDEO: 'video',
            MUSIC: 'music',
            NEWS: 'news',
            LOCATION: 'location',
            LINK: 'link',
            EVENT: 'event'
        },
        
        // 事件类型
        eventTypes: {
            SUBSCRIBE: 'subscribe',
            UNSUBSCRIBE: 'unsubscribe',
            SCAN: 'SCAN',
            LOCATION: 'LOCATION',
            CLICK: 'CLICK',
            VIEW: 'VIEW'
        }
    },
    
    // 微信小程序配置（预留）
    miniProgram: {
        appId: process.env.MINI_PROGRAM_APP_ID || 'your_mini_program_app_id_here',
        appSecret: process.env.MINI_PROGRAM_APP_SECRET || 'your_mini_program_app_secret_here'
    },
    
    // 微信支付配置（预留）
    pay: {
        mchId: process.env.WECHAT_MCH_ID || 'your_mch_id_here',
        key: process.env.WECHAT_PAY_KEY || 'your_pay_key_here',
        certPath: process.env.WECHAT_CERT_PATH || './cert/apiclient_cert.pem',
        keyPath: process.env.WECHAT_KEY_PATH || './cert/apiclient_key.pem'
    },
    
    // 自动回复配置
    autoReply: {
        // 关注时的欢迎消息
        welcome: {
            type: 'text',
            content: '欢迎关注新手开发陪跑器！🎉\n\n我是你的专属编程导师，可以为你提供：\n\n📚 个性化学习路径\n💡 实时编程答疑\n🔍 代码审查服务\n🎯 项目实战指导\n\n回复"帮助"查看更多功能，让我们一起开启编程之旅吧！'
        },
        
        // 默认回复消息
        default: {
            type: 'text',
            content: '感谢你的消息！我是新手开发陪跑器的智能助手。\n\n你可以：\n• 发送"学习"获取学习资源\n• 发送"进度"查看学习进度\n• 发送"问题 + 你的问题"进行技术咨询\n• 发送"帮助"查看完整功能列表\n\n有任何编程问题都可以随时问我哦！'
        },
        
        // 关键词自动回复
        keywords: {
            '帮助': {
                type: 'text',
                content: '🤖 新手开发陪跑器功能列表：\n\n📖 学习相关：\n• 学习 - 获取学习资源\n• 进度 - 查看学习进度\n• 路径 - 获取学习路径建议\n\n💬 咨询相关：\n• 问题 + 内容 - 技术咨询\n• 代码 + 代码片段 - 代码审查\n\n🎯 项目相关：\n• 项目 - 项目实战指导\n• 作业 - 作业提交与反馈\n\n📞 联系我们：\n• 客服 - 人工客服\n• 反馈 + 内容 - 意见反馈'
            },
            '学习': {
                type: 'news',
                content: {
                    articles: [{
                        title: '🎓 个性化学习资源',
                        description: '根据你的水平和兴趣，为你推荐最适合的学习内容',
                        picurl: 'https://your-domain.com/images/learning.jpg',
                        url: 'https://your-domain.com/learning'
                    }]
                }
            },
            '进度': {
                type: 'text',
                content: '📊 查看学习进度请访问：https://your-domain.com/progress\n\n或者回复"绑定 + 你的用户名"来绑定账号，获取个性化进度报告。'
            }
        }
    },
    
    // 菜单配置
    menu: {
        button: [
            {
                name: '学习中心',
                sub_button: [
                    {
                        type: 'view',
                        name: '开始学习',
                        url: 'https://your-domain.com/learning'
                    },
                    {
                        type: 'view',
                        name: '学习进度',
                        url: 'https://your-domain.com/progress'
                    },
                    {
                        type: 'click',
                        name: '学习路径',
                        key: 'LEARNING_PATH'
                    }
                ]
            },
            {
                name: '技术支持',
                sub_button: [
                    {
                        type: 'click',
                        name: '在线答疑',
                        key: 'ONLINE_QA'
                    },
                    {
                        type: 'click',
                        name: '代码审查',
                        key: 'CODE_REVIEW'
                    },
                    {
                        type: 'view',
                        name: '技术文档',
                        url: 'https://your-domain.com/docs'
                    }
                ]
            },
            {
                name: '我的',
                sub_button: [
                    {
                        type: 'view',
                        name: '个人中心',
                        url: 'https://your-domain.com/profile'
                    },
                    {
                        type: 'click',
                        name: '联系客服',
                        key: 'CONTACT_SERVICE'
                    },
                    {
                        type: 'click',
                        name: '关于我们',
                        key: 'ABOUT_US'
                    }
                ]
            }
        ]
    },
    
    // 消息模板配置
    templates: {
        // 学习提醒模板
        studyReminder: {
            template_id: 'your_template_id_here',
            data: {
                first: '学习提醒',
                keyword1: '今日学习任务',
                keyword2: '{{course_name}}',
                keyword3: '{{study_time}}',
                remark: '点击查看详情，继续你的编程之旅！'
            }
        },
        
        // 进度通知模板
        progressNotification: {
            template_id: 'your_template_id_here',
            data: {
                first: '学习进度更新',
                keyword1: '{{skill_name}}',
                keyword2: '{{progress}}%',
                keyword3: '{{next_goal}}',
                remark: '继续加油，你离目标越来越近了！'
            }
        }
    }
};