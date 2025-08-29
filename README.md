# 新手开发陪跑器 (DevMentor)

一个专为编程新手设计的学习陪伴平台，提供个性化学习路径、实时答疑、代码审查和项目实战指导。

## 🌟 项目特色

- **个性化学习路径** - 根据用户基础和目标定制学习计划
- **实时技术答疑** - 7x24小时专业导师在线支持
- **代码审查服务** - 专业代码质量评估和优化建议
- **项目实战指导** - 真实项目经验积累
- **微信生态集成** - 便捷的微信公众号交互
- **学习进度跟踪** - 可视化学习数据分析

## 🏗️ 项目架构

```
新手开发陪跑器/
├── frontend/           # 前端展示页面
│   ├── index.html     # 主页
│   ├── styles.css     # 样式文件
│   └── script.js      # 交互脚本
└── backend/           # 后端API服务
    ├── config/        # 配置文件
    ├── routes/        # API路由
    ├── utils/         # 工具函数
    ├── server.js      # 服务器主文件
    ├── package.json   # 依赖管理
    └── .env.example   # 环境变量示例
```

## 🚀 快速开始

### 前端部署

1. 进入前端目录：
```bash
cd frontend
```

2. 使用任意HTTP服务器运行（如Live Server、Python HTTP服务器等）：
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .
```

3. 访问 `http://localhost:8000` 查看前端页面

### 后端部署

1. 进入后端目录：
```bash
cd backend
```

2. 安装依赖：
```bash
npm install
```

3. 配置环境变量：
```bash
cp .env.example .env
# 编辑 .env 文件，填入相应的配置信息
```

4. 启动服务器：
```bash
# 开发模式
npm run dev

# 生产模式
npm start
```

5. API服务将在 `http://localhost:3000` 启动

## 📋 功能模块

### 前端功能
- ✅ 响应式主页设计
- ✅ 功能特色展示
- ✅ 服务内容介绍
- ✅ 联系表单
- ✅ 平滑滚动动画
- ✅ 表单验证和提交

### 后端API
- ✅ 用户认证系统 (`/api/auth`)
- ✅ 用户信息管理 (`/api/user`)
- ✅ 咨询服务 (`/api/consultation`)
- ✅ 聊天系统 (`/api/chat`)
- ✅ 学习进度跟踪 (`/api/progress`)
- ✅ 微信API集成 (`/api/wechat`)

### 微信公众号功能
- ✅ 服务器验证
- ✅ 消息接收和回复
- ✅ 自定义菜单
- ✅ 关键词自动回复
- ✅ 用户信息获取
- ✅ 模板消息推送
- ✅ 客服消息发送

## 🔧 技术栈

### 前端
- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 交互功能
- **响应式设计** - 移动端适配

### 后端
- **Node.js** - 服务器运行环境
- **Express.js** - Web应用框架
- **微信API** - 公众号集成
- **JWT** - 用户认证（预留）
- **数据库** - PostgreSQL/MongoDB（预留）

### 开发工具
- **npm** - 包管理
- **nodemon** - 开发热重载
- **dotenv** - 环境变量管理
- **cors** - 跨域处理
- **helmet** - 安全中间件

## 📚 API 文档

### 认证相关
```
POST /api/auth/register  # 用户注册
POST /api/auth/login     # 用户登录
```

### 用户管理
```
GET  /api/user/profile   # 获取用户信息
PUT  /api/user/profile   # 更新用户信息
```

### 咨询服务
```
POST /api/consultation           # 提交咨询
GET  /api/consultation           # 获取咨询列表
GET  /api/consultation/:id       # 获取咨询详情
PATCH /api/consultation/:id/status # 更新咨询状态
```

### 聊天系统
```
POST /api/chat/send              # 发送消息
GET  /api/chat/history/:chatId   # 获取聊天历史
POST /api/chat/create            # 创建聊天会话
```

### 学习进度
```
GET  /api/progress/:userId       # 获取学习进度
POST /api/progress/:userId/update # 更新学习进度
POST /api/progress/:userId/activity # 记录学习活动
GET  /api/progress/:userId/stats # 获取学习统计
```

### 微信集成
```
GET  /api/wechat                 # 服务器验证
POST /api/wechat                 # 接收微信消息
POST /api/wechat/menu            # 创建自定义菜单
GET  /api/wechat/user/:openid    # 获取用户信息
```

## 🔐 环境配置

### 必需配置
```env
# 服务器
PORT=3000
NODE_ENV=development

# 微信公众号
WECHAT_APP_ID=your_app_id
WECHAT_APP_SECRET=your_app_secret
WECHAT_TOKEN=your_token
WECHAT_ENCODING_AES_KEY=your_aes_key
```

### 可选配置
```env
# 数据库
DB_HOST=localhost
DB_PORT=5432
DB_NAME=devmentor

# JWT认证
JWT_SECRET=your_jwt_secret

# 邮件服务
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
```

## 🧪 开发指南

### 代码规范
- 使用ES6+语法
- 遵循RESTful API设计
- 统一错误处理
- 完善的日志记录
- 安全最佳实践

### 目录结构说明
```
backend/
├── config/          # 配置文件
│   └── wechat.js   # 微信API配置
├── routes/          # API路由
│   ├── auth.js     # 认证路由
│   ├── user.js     # 用户路由
│   ├── consultation.js # 咨询路由
│   ├── chat.js     # 聊天路由
│   ├── progress.js # 进度路由
│   └── wechat.js   # 微信路由
├── utils/           # 工具函数
│   └── wechatUtils.js # 微信工具类
├── server.js        # 服务器主文件
├── package.json     # 项目配置
└── .env.example     # 环境变量示例
```

## 🔄 部署说明

### 开发环境
1. 克隆项目
2. 安装依赖
3. 配置环境变量
4. 启动开发服务器

### 生产环境
1. 构建项目
2. 配置生产环境变量
3. 使用PM2或Docker部署
4. 配置反向代理（Nginx）
5. 设置HTTPS证书

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- **项目主页**: https://github.com/your-username/devmentor
- **问题反馈**: https://github.com/your-username/devmentor/issues
- **邮箱**: support@devmentor.com
- **微信公众号**: 新手开发陪跑器

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和用户！

---

**让每个编程新手都能找到属于自己的学习节奏！** 🚀