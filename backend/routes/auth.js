const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// 用户注册
router.post('/register', [
    body('username').trim().isLength({ min: 3 }).withMessage('用户名至少3个字符'),
    body('email').isEmail().withMessage('请输入有效的邮箱地址'),
    body('password').isLength({ min: 6 }).withMessage('密码至少6个字符')
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

        const { username, email, password } = req.body;

        // 这里将来会检查用户是否已存在
        // const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        
        console.log('用户注册:', { username, email });

        res.status(201).json({
            success: true,
            message: '注册成功',
            data: {
                id: Date.now().toString(),
                username,
                email
            }
        });

    } catch (error) {
        console.error('用户注册失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 用户登录
router.post('/login', [
    body('email').isEmail().withMessage('请输入有效的邮箱地址'),
    body('password').notEmpty().withMessage('密码不能为空')
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

        const { email, password } = req.body;

        // 这里将来会验证用户凭据
        console.log('用户登录:', { email });

        res.json({
            success: true,
            message: '登录成功',
            data: {
                token: 'mock_jwt_token',
                user: {
                    id: '1',
                    username: 'testuser',
                    email
                }
            }
        });

    } catch (error) {
        console.error('用户登录失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

module.exports = router;