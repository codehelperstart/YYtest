const express = require('express');
const router = express.Router();

// 获取用户学习进度
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        // 模拟用户学习进度数据
        const mockProgress = {
            userId,
            overallProgress: 65,
            learningPath: 'frontend',
            currentLevel: 'intermediate',
            totalStudyHours: 120,
            completedCourses: 8,
            totalCourses: 12,
            skills: [
                {
                    name: 'HTML',
                    level: 'advanced',
                    progress: 90,
                    lastUpdated: '2024-01-15'
                },
                {
                    name: 'CSS',
                    level: 'advanced',
                    progress: 85,
                    lastUpdated: '2024-01-14'
                },
                {
                    name: 'JavaScript',
                    level: 'intermediate',
                    progress: 70,
                    lastUpdated: '2024-01-16'
                },
                {
                    name: 'React',
                    level: 'beginner',
                    progress: 30,
                    lastUpdated: '2024-01-16'
                }
            ],
            recentActivities: [
                {
                    id: '1',
                    type: 'course_completed',
                    title: '完成了JavaScript异步编程课程',
                    date: '2024-01-16',
                    points: 50
                },
                {
                    id: '2',
                    type: 'project_submitted',
                    title: '提交了待办事项应用项目',
                    date: '2024-01-15',
                    points: 100
                },
                {
                    id: '3',
                    type: 'quiz_passed',
                    title: '通过了CSS布局测试',
                    date: '2024-01-14',
                    points: 30
                }
            ],
            achievements: [
                {
                    id: '1',
                    name: '初学者',
                    description: '完成第一个编程项目',
                    icon: '🎯',
                    earnedDate: '2024-01-01'
                },
                {
                    id: '2',
                    name: '坚持者',
                    description: '连续学习30天',
                    icon: '🔥',
                    earnedDate: '2024-01-10'
                },
                {
                    id: '3',
                    name: '代码审查员',
                    description: '完成10次代码审查',
                    icon: '👨‍💻',
                    earnedDate: '2024-01-15'
                }
            ],
            weeklyGoal: {
                target: 10,
                completed: 7,
                unit: 'hours'
            },
            nextMilestone: {
                title: '完成React基础课程',
                progress: 30,
                estimatedCompletion: '2024-02-01'
            }
        };

        res.json({
            success: true,
            data: mockProgress
        });

    } catch (error) {
        console.error('获取学习进度失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 更新学习进度
router.post('/:userId/update', async (req, res) => {
    try {
        const { userId } = req.params;
        const { skill, progress, studyHours, activityType, activityTitle } = req.body;

        console.log('更新学习进度:', {
            userId,
            skill,
            progress,
            studyHours,
            activityType,
            activityTitle
        });

        // 这里将来会更新数据库中的进度数据
        const updatedProgress = {
            userId,
            skill,
            newProgress: progress,
            studyHours,
            updatedAt: new Date().toISOString()
        };

        res.json({
            success: true,
            message: '学习进度更新成功',
            data: updatedProgress
        });

    } catch (error) {
        console.error('更新学习进度失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 记录学习活动
router.post('/:userId/activity', async (req, res) => {
    try {
        const { userId } = req.params;
        const { type, title, description, points, duration } = req.body;

        const activity = {
            id: Date.now().toString(),
            userId,
            type,
            title,
            description,
            points: points || 0,
            duration: duration || 0,
            createdAt: new Date().toISOString()
        };

        console.log('记录学习活动:', activity);

        res.status(201).json({
            success: true,
            message: '学习活动记录成功',
            data: activity
        });

    } catch (error) {
        console.error('记录学习活动失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 获取学习统计
router.get('/:userId/stats', async (req, res) => {
    try {
        const { userId } = req.params;
        const { period = 'week' } = req.query; // week, month, year

        // 模拟统计数据
        const mockStats = {
            period,
            totalStudyTime: period === 'week' ? 15 : period === 'month' ? 60 : 500,
            averageDaily: period === 'week' ? 2.1 : period === 'month' ? 2.0 : 1.4,
            coursesCompleted: period === 'week' ? 2 : period === 'month' ? 8 : 45,
            projectsFinished: period === 'week' ? 1 : period === 'month' ? 3 : 12,
            codeReviews: period === 'week' ? 3 : period === 'month' ? 12 : 89,
            streakDays: 15,
            chartData: {
                labels: period === 'week' 
                    ? ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    : period === 'month'
                    ? ['第1周', '第2周', '第3周', '第4周']
                    : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                studyHours: period === 'week'
                    ? [2, 3, 1.5, 2.5, 3, 2, 1]
                    : period === 'month'
                    ? [12, 15, 18, 15]
                    : [35, 42, 38, 45, 40, 48, 52, 45, 38, 42, 40, 35]
            }
        };

        res.json({
            success: true,
            data: mockStats
        });

    } catch (error) {
        console.error('获取学习统计失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 设置学习目标
router.post('/:userId/goals', async (req, res) => {
    try {
        const { userId } = req.params;
        const { type, target, deadline, description } = req.body;

        const goal = {
            id: Date.now().toString(),
            userId,
            type, // daily, weekly, monthly, project
            target,
            current: 0,
            deadline,
            description,
            status: 'active',
            createdAt: new Date().toISOString()
        };

        console.log('设置学习目标:', goal);

        res.status(201).json({
            success: true,
            message: '学习目标设置成功',
            data: goal
        });

    } catch (error) {
        console.error('设置学习目标失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

// 获取学习建议
router.get('/:userId/recommendations', async (req, res) => {
    try {
        const { userId } = req.params;

        // 基于用户进度生成学习建议
        const recommendations = [
            {
                type: 'course',
                title: 'React Hooks深入理解',
                description: '基于你的JavaScript基础，建议学习React Hooks来提升前端开发技能',
                priority: 'high',
                estimatedTime: '8小时',
                difficulty: 'intermediate'
            },
            {
                type: 'project',
                title: '构建个人博客系统',
                description: '结合HTML、CSS、JavaScript知识，创建一个完整的博客项目',
                priority: 'medium',
                estimatedTime: '20小时',
                difficulty: 'intermediate'
            },
            {
                type: 'practice',
                title: 'JavaScript算法练习',
                description: '通过算法练习巩固JavaScript基础，提升编程思维',
                priority: 'medium',
                estimatedTime: '1小时/天',
                difficulty: 'beginner'
            }
        ];

        res.json({
            success: true,
            data: recommendations
        });

    } catch (error) {
        console.error('获取学习建议失败:', error);
        res.status(500).json({
            success: false,
            message: '服务器内部错误'
        });
    }
});

module.exports = router;