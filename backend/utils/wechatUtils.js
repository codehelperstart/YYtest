const crypto = require('crypto');
const axios = require('axios');
const xml2js = require('xml2js');
const wechatConfig = require('../config/wechat');

/**
 * 微信API工具类
 */
class WechatUtils {
    constructor() {
        this.config = wechatConfig.wechat;
        this.accessToken = null;
        this.accessTokenExpires = 0;
    }

    /**
     * 验证微信服务器签名
     * @param {string} signature 微信加密签名
     * @param {string} timestamp 时间戳
     * @param {string} nonce 随机数
     * @returns {boolean} 验证结果
     */
    verifySignature(signature, timestamp, nonce) {
        try {
            const token = this.config.token;
            const tmpArr = [token, timestamp, nonce].sort();
            const tmpStr = tmpArr.join('');
            const hashCode = crypto.createHash('sha1').update(tmpStr, 'utf8').digest('hex');
            return hashCode === signature;
        } catch (error) {
            console.error('验证签名失败:', error);
            return false;
        }
    }

    /**
     * 解析XML消息
     * @param {string} xml XML字符串
     * @returns {Promise<Object>} 解析后的消息对象
     */
    async parseXML(xml) {
        try {
            const parser = new xml2js.Parser({ 
                explicitArray: false, 
                ignoreAttrs: true 
            });
            const result = await parser.parseStringPromise(xml);
            return result.xml;
        } catch (error) {
            console.error('解析XML失败:', error);
            throw error;
        }
    }

    /**
     * 构建XML回复消息
     * @param {Object} message 消息对象
     * @returns {string} XML字符串
     */
    buildXMLMessage(message) {
        const { toUser, fromUser, type, content } = message;
        const timestamp = Math.floor(Date.now() / 1000);

        let xml = `<xml>
<ToUserName><![CDATA[${toUser}]]></ToUserName>
<FromUserName><![CDATA[${fromUser}]]></FromUserName>
<CreateTime>${timestamp}</CreateTime>
<MsgType><![CDATA[${type}]]></MsgType>`;

        switch (type) {
            case 'text':
                xml += `
<Content><![CDATA[${content}]]></Content>`;
                break;
            case 'news':
                xml += `
<ArticleCount>${content.articles.length}</ArticleCount>
<Articles>`;
                content.articles.forEach(article => {
                    xml += `
<item>
<Title><![CDATA[${article.title}]]></Title>
<Description><![CDATA[${article.description}]]></Description>
<PicUrl><![CDATA[${article.picurl}]]></PicUrl>
<Url><![CDATA[${article.url}]]></Url>
</item>`;
                });
                xml += `
</Articles>`;
                break;
            case 'image':
                xml += `
<Image>
<MediaId><![CDATA[${content.mediaId}]]></MediaId>
</Image>`;
                break;
        }

        xml += `
</xml>`;
        return xml;
    }

    /**
     * 获取Access Token
     * @returns {Promise<string>} Access Token
     */
    async getAccessToken() {
        try {
            // 检查缓存的token是否有效
            if (this.accessToken && Date.now() < this.accessTokenExpires) {
                return this.accessToken;
            }

            const url = `${this.config.apiBaseUrl}/cgi-bin/token`;
            const params = {
                grant_type: 'client_credential',
                appid: this.config.appId,
                secret: this.config.appSecret
            };

            const response = await axios.get(url, { params });
            const data = response.data;

            if (data.errcode) {
                throw new Error(`获取Access Token失败: ${data.errmsg}`);
            }

            this.accessToken = data.access_token;
            this.accessTokenExpires = Date.now() + (data.expires_in - 300) * 1000; // 提前5分钟过期

            console.log('Access Token获取成功');
            return this.accessToken;
        } catch (error) {
            console.error('获取Access Token失败:', error);
            throw error;
        }
    }

    /**
     * 发送客服消息
     * @param {string} openid 用户openid
     * @param {Object} message 消息内容
     * @returns {Promise<Object>} 发送结果
     */
    async sendCustomMessage(openid, message) {
        try {
            const accessToken = await this.getAccessToken();
            const url = `${this.config.apiBaseUrl}/cgi-bin/message/custom/send?access_token=${accessToken}`;

            const data = {
                touser: openid,
                msgtype: message.type,
                [message.type]: message.content
            };

            const response = await axios.post(url, data);
            const result = response.data;

            if (result.errcode !== 0) {
                throw new Error(`发送客服消息失败: ${result.errmsg}`);
            }

            console.log('客服消息发送成功');
            return result;
        } catch (error) {
            console.error('发送客服消息失败:', error);
            throw error;
        }
    }

    /**
     * 创建自定义菜单
     * @param {Object} menu 菜单配置
     * @returns {Promise<Object>} 创建结果
     */
    async createMenu(menu) {
        try {
            const accessToken = await this.getAccessToken();
            const url = `${this.config.apiBaseUrl}/cgi-bin/menu/create?access_token=${accessToken}`;

            const response = await axios.post(url, menu);
            const result = response.data;

            if (result.errcode !== 0) {
                throw new Error(`创建菜单失败: ${result.errmsg}`);
            }

            console.log('自定义菜单创建成功');
            return result;
        } catch (error) {
            console.error('创建菜单失败:', error);
            throw error;
        }
    }

    /**
     * 获取用户信息
     * @param {string} openid 用户openid
     * @returns {Promise<Object>} 用户信息
     */
    async getUserInfo(openid) {
        try {
            const accessToken = await this.getAccessToken();
            const url = `${this.config.apiBaseUrl}/cgi-bin/user/info`;
            const params = {
                access_token: accessToken,
                openid: openid,
                lang: 'zh_CN'
            };

            const response = await axios.get(url, { params });
            const data = response.data;

            if (data.errcode) {
                throw new Error(`获取用户信息失败: ${data.errmsg}`);
            }

            return data;
        } catch (error) {
            console.error('获取用户信息失败:', error);
            throw error;
        }
    }

    /**
     * 发送模板消息
     * @param {string} openid 用户openid
     * @param {string} templateId 模板ID
     * @param {Object} data 模板数据
     * @param {string} url 跳转链接
     * @returns {Promise<Object>} 发送结果
     */
    async sendTemplateMessage(openid, templateId, data, url = '') {
        try {
            const accessToken = await this.getAccessToken();
            const apiUrl = `${this.config.apiBaseUrl}/cgi-bin/message/template/send?access_token=${accessToken}`;

            const messageData = {
                touser: openid,
                template_id: templateId,
                url: url,
                data: data
            };

            const response = await axios.post(apiUrl, messageData);
            const result = response.data;

            if (result.errcode !== 0) {
                throw new Error(`发送模板消息失败: ${result.errmsg}`);
            }

            console.log('模板消息发送成功');
            return result;
        } catch (error) {
            console.error('发送模板消息失败:', error);
            throw error;
        }
    }

    /**
     * 处理文本消息
     * @param {Object} message 接收到的消息
     * @returns {Object} 回复消息
     */
    handleTextMessage(message) {
        const content = message.Content.trim();
        const autoReply = this.config.autoReply;

        // 检查关键词回复
        for (const [keyword, reply] of Object.entries(autoReply.keywords)) {
            if (content.includes(keyword)) {
                return {
                    toUser: message.FromUserName,
                    fromUser: message.ToUserName,
                    type: reply.type,
                    content: reply.content
                };
            }
        }

        // 处理特殊指令
        if (content.startsWith('问题 ')) {
            const question = content.substring(3).trim();
            return this.handleQuestionMessage(message, question);
        }

        if (content.startsWith('代码 ')) {
            const code = content.substring(3).trim();
            return this.handleCodeReviewMessage(message, code);
        }

        if (content.startsWith('反馈 ')) {
            const feedback = content.substring(3).trim();
            return this.handleFeedbackMessage(message, feedback);
        }

        // 默认回复
        return {
            toUser: message.FromUserName,
            fromUser: message.ToUserName,
            type: autoReply.default.type,
            content: autoReply.default.content
        };
    }

    /**
     * 处理问题咨询消息
     * @param {Object} message 原始消息
     * @param {string} question 问题内容
     * @returns {Object} 回复消息
     */
    handleQuestionMessage(message, question) {
        // 这里可以集成AI问答系统
        const response = `收到你的问题："${question}"\n\n我已经记录下来，专业导师会在24小时内为你详细解答。\n\n你也可以访问我们的在线问答平台获取即时帮助：https://your-domain.com/qa`;
        
        return {
            toUser: message.FromUserName,
            fromUser: message.ToUserName,
            type: 'text',
            content: response
        };
    }

    /**
     * 处理代码审查消息
     * @param {Object} message 原始消息
     * @param {string} code 代码内容
     * @returns {Object} 回复消息
     */
    handleCodeReviewMessage(message, code) {
        // 这里可以集成代码分析工具
        const response = `收到你的代码审查请求！\n\n代码长度：${code.length} 字符\n\n我已经将你的代码提交给专业导师进行审查，预计在2小时内会收到详细的反馈报告。\n\n你也可以在网站上查看审查进度：https://your-domain.com/code-review`;
        
        return {
            toUser: message.FromUserName,
            fromUser: message.ToUserName,
            type: 'text',
            content: response
        };
    }

    /**
     * 处理反馈消息
     * @param {Object} message 原始消息
     * @param {string} feedback 反馈内容
     * @returns {Object} 回复消息
     */
    handleFeedbackMessage(message, feedback) {
        const response = `感谢你的宝贵反馈！\n\n"${feedback}"\n\n我们会认真考虑你的建议，持续改进我们的服务。如果有进一步的想法，随时可以联系我们。\n\n你的每一个建议都是我们前进的动力！🙏`;
        
        return {
            toUser: message.FromUserName,
            fromUser: message.ToUserName,
            type: 'text',
            content: response
        };
    }

    /**
     * 处理事件消息
     * @param {Object} message 接收到的事件消息
     * @returns {Object} 回复消息
     */
    handleEventMessage(message) {
        const event = message.Event;
        const autoReply = this.config.autoReply;

        switch (event) {
            case 'subscribe':
                return {
                    toUser: message.FromUserName,
                    fromUser: message.ToUserName,
                    type: autoReply.welcome.type,
                    content: autoReply.welcome.content
                };
            
            case 'CLICK':
                return this.handleMenuClick(message);
            
            default:
                return {
                    toUser: message.FromUserName,
                    fromUser: message.ToUserName,
                    type: 'text',
                    content: '感谢你的关注！有任何问题都可以随时联系我们。'
                };
        }
    }

    /**
     * 处理菜单点击事件
     * @param {Object} message 菜单点击消息
     * @returns {Object} 回复消息
     */
    handleMenuClick(message) {
        const eventKey = message.EventKey;
        
        const responses = {
            'LEARNING_PATH': '🛤️ 个性化学习路径\n\n根据你的基础和目标，我们为你推荐：\n\n🔰 新手入门：HTML → CSS → JavaScript\n🚀 进阶提升：React → Node.js → 数据库\n💼 就业导向：项目实战 → 面试准备\n\n点击查看详细路径：https://your-domain.com/learning-path',
            
            'ONLINE_QA': '💬 在线答疑服务\n\n我们提供7x24小时技术支持：\n\n• 实时在线答疑\n• 专业导师指导\n• 同学互助交流\n\n发送"问题 + 你的问题"开始咨询，或访问：https://your-domain.com/qa',
            
            'CODE_REVIEW': '🔍 代码审查服务\n\n专业导师为你提供：\n\n• 代码质量评估\n• 最佳实践建议\n• 性能优化指导\n• Bug修复建议\n\n发送"代码 + 你的代码"提交审查，或访问：https://your-domain.com/code-review',
            
            'CONTACT_SERVICE': '👨‍💼 联系客服\n\n如需人工服务，请选择：\n\n📞 电话：400-123-4567\n📧 邮箱：support@devmentor.com\n💬 在线客服：https://your-domain.com/chat\n\n工作时间：周一至周日 9:00-21:00',
            
            'ABOUT_US': '🏢 关于新手开发陪跑器\n\n我们致力于为编程新手提供：\n\n✨ 个性化学习方案\n👨‍🏫 专业导师指导\n🤝 同伴学习社区\n🎯 实战项目经验\n\n让每个人都能轻松入门编程！\n\n了解更多：https://your-domain.com/about'
        };

        const content = responses[eventKey] || '感谢你的操作！如有疑问请联系客服。';
        
        return {
            toUser: message.FromUserName,
            fromUser: message.ToUserName,
            type: 'text',
            content: content
        };
    }
}

module.exports = new WechatUtils();