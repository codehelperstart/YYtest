const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// 提交咨询信息
router.post('/', [
    body('name').trim().isLength({ min: 1 }).withMessage('姓名不能为空'),
    body('email').isEmail().withMessage('请输入有效的邮箱地址'),
    body('direction').isIn(['frontend', 'backend', 'fullstack', 'mobile', 'other']).withMessage('请选择有效的学习方向'),
    body('message').trim().isLength({ min: 1 }).withMessage('请描述您的学习目标')
], async (req, res) => {
    try {
        // 验证请求数据
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: '数据验证失败',
                errors: errors.array()
            });
        }

        const { name, email, direction, message } = req.body;

        // 这里将来会保存到数据库
        const consultationData = {
            id: Date.now().toString(),
            name,
            email,
            direction,
            message,
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        console.log('收到咨询信息:', consultationData);

        // 模拟保存到数据库的操作
        // await Consultation.create(consultationData);

        // 发送确认邮件（预留）
        // await sendConfirmationEmail(email, name);

        // 通知管理员（预留）
        // await notifyAdmin(consultationData);

        res.status(201).json({
            success: true,
            message: '咨询信息提交成功，我们会尽快与您联系',
            data: {
                id: consultationData.id,
                status: consultationData.status
            }
        });

    } catch (error) {
        console.error('提交咨询信息失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误，请稍后重试'
        });
    }
});

// 获取咨询信息列表（管理员用）
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, status } = req.query;
        
        // 这里将来会从数据库查询
        const mockData = {
            consultations: [
                {
                    id: '1',
                    name: '张三',
                    email: 'zhangsan@example.com',
                    direction: 'frontend',
                    message: '想学习React开发',
                    status: 'pending',
                    createdAt: '2024-01-01T00:00:00.000Z'
                }
            ],
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total: 1,
                pages: 1
            }
        };

        res.json({
            success: true,
            data: mockData
        });

    } catch (error) {
        console.error('获取咨询信息失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 更新咨询状态（管理员用）
router.patch('/:id/status', [
    body('status').isIn(['pending', 'processing', 'completed', 'cancelled']).withMessage('无效的状态值')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: '数据验证失败',
                errors: errors.array()
            });
        }

        const { id } = req.params;
        const { status } = req.body;

        // 这里将来会更新数据库
        console.log(`更新咨询 ${id} 状态为: ${status}`);

        res.json({
            success: true,
            message: '状态更新成功',
            data: {
                id,
                status,
                updatedAt: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('更新咨询状态失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 获取单个咨询详情
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // 这里将来会从数据库查询
        const mockConsultation = {
            id,
            name: '张三',
            email: 'zhangsan@example.com',
            direction: 'frontend',
            message: '想学习React开发',
            status: 'pending',
            createdAt: '2024-01-01T00:00:00.000Z',
            updatedAt: '2024-01-01T00:00:00.000Z'
        };

        res.json({
            success: true,
            data: mockConsultation
        });

    } catch (error) {
        console.error('获取咨询详情失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 预留的辅助函数

// 发送确认邮件
async function sendConfirmationEmail(email, name) {
    // 这里将来会集成邮件服务
    console.log(`发送确认邮件给 ${name} (${email})`);
    // 实际实现:
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransporter(...);
    // await transporter.sendMail(...);
}

// 通知管理员
async function notifyAdmin(consultationData) {
    // 这里将来会通知管理员有新的咨询
    console.log('通知管理员新咨询:', consultationData.id);
    // 可以通过邮件、微信、短信等方式通知
}

module.exports = router;