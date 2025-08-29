const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 安全中间件
app.use(helmet());
app.use(compression());

// CORS配置
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:8080',
    credentials: true
}));

// 请求日志
app.use(morgan('combined'));

// 请求体解析
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 速率限制
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15分钟
    max: 100, // 限制每个IP 15分钟内最多100个请求
    message: {
        error: '请求过于频繁，请稍后再试'
    }
});
app.use('/api/', limiter);

// 路由导入
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const consultationRoutes = require('./routes/consultation');
const chatRoutes = require('./routes/chat');
const wechatRoutes = require('./routes/wechat');
const progressRoutes = require('./routes/progress');

// API路由
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/consultation', consultationRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/wechat', wechatRoutes);
app.use('/api/progress', progressRoutes);

// 健康检查端点
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// 根路径
app.get('/', (req, res) => {
    res.json({
        message: '欢迎使用DevMentor API',
        version: '1.0.0',
        documentation: '/api/docs'
    });
});

// 404处理
app.use('*', (req, res) => {
    res.status(404).json({
        error: '接口不存在',
        path: req.originalUrl
    });
});

// 全局错误处理
app.use((err, req, res, next) => {
    console.error('Error:', err);
    
    // 开发环境返回详细错误信息
    if (process.env.NODE_ENV === 'development') {
        res.status(err.status || 500).json({
            error: err.message,
            stack: err.stack
        });
    } else {
        // 生产环境返回通用错误信息
        res.status(err.status || 500).json({
            error: '服务器内部错误'
        });
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 DevMentor API服务器运行在端口 ${PORT}`);
    console.log(`📖 API文档: http://localhost:${PORT}/api/docs`);
    console.log(`🏥 健康检查: http://localhost:${PORT}/health`);
});

// 优雅关闭
process.on('SIGTERM', () => {
    console.log('收到SIGTERM信号，正在优雅关闭服务器...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('收到SIGINT信号，正在优雅关闭服务器...');
    process.exit(0);
});

module.exports = app;