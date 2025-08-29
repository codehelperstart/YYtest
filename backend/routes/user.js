const express = require('express');
const router = express.Router();

// 获取用户信息
router.get('/profile', async (req, res) => {
    try {
        // 这里将来会从JWT token中获取用户ID
        const mockUser = {
            id: '1',
            username: 'testuser',
            email: 'test@example.com',
            learningDirection: 'frontend',
            level: 'beginner',
            joinDate: '2024-01-01',
            totalStudyHours: 120,
            completedProjects: 3
        };

        res.json({
            success: true,
            data: mockUser
        });

    } catch (error) {
        console.error('获取用户信息失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 更新用户信息
router.put('/profile', async (req, res) => {
    try {
        const { username, learningDirection, level } = req.body;

        console.log('更新用户信息:', { username, learningDirection, level });

        res.json({
            success: true,
            message: '用户信息更新成功',
            data: {
                username,
                learningDirection,
                level,
                updatedAt: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('更新用户信息失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

module.exports = router;