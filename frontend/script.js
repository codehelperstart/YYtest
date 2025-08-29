// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initSmoothScrolling();
    initFormHandling();
    initAnimations();
    initChatButton();
});

// 平滑滚动功能
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 表单处理功能
function initFormHandling() {
    const consultForm = document.getElementById('consultForm');
    
    if (consultForm) {
        consultForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
}

// 处理表单提交
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = {
        name: formData.get('name') || form.querySelector('input[type="text"]').value,
        email: formData.get('email') || form.querySelector('input[type="email"]').value,
        direction: formData.get('direction') || form.querySelector('select').value,
        message: formData.get('message') || form.querySelector('textarea').value
    };
    
    // 验证表单数据
    if (!validateFormData(data)) {
        return;
    }
    
    // 显示提交状态
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = '提交中...';
    submitButton.disabled = true;
    
    // 模拟API调用（实际项目中会调用后端API）
    setTimeout(() => {
        // 这里将来会调用后端API
        console.log('表单数据:', data);
        
        // 显示成功消息
        showNotification('咨询信息已提交成功！我们会尽快与您联系。', 'success');
        
        // 重置表单
        form.reset();
        
        // 恢复按钮状态
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // 实际项目中的API调用示例：
        // submitConsultation(data)
        //     .then(response => {
        //         showNotification('咨询信息已提交成功！', 'success');
        //         form.reset();
        //     })
        //     .catch(error => {
        //         showNotification('提交失败，请稍后重试。', 'error');
        //     })
        //     .finally(() => {
        //         submitButton.textContent = originalText;
        //         submitButton.disabled = false;
        //     });
        
    }, 1500);
}

// 验证表单数据
function validateFormData(data) {
    if (!data.name.trim()) {
        showNotification('请输入您的姓名', 'error');
        return false;
    }
    
    if (!data.email.trim()) {
        showNotification('请输入邮箱地址', 'error');
        return false;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('请输入有效的邮箱地址', 'error');
        return false;
    }
    
    if (!data.direction) {
        showNotification('请选择学习方向', 'error');
        return false;
    }
    
    return true;
}

// 验证邮箱格式
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 显示通知消息
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 添加样式
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // 设置背景色
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(45deg, #dc3545, #fd7e14)';
            break;
        default:
            notification.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
    }
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 初始化动画效果
function initAnimations() {
    // 滚动时的元素动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.feature-card, .service-category');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 开始陪跑按钮功能
function startChat() {
    // 这里将来会集成微信API或其他聊天功能
    showNotification('正在连接陪跑导师...', 'info');
    
    setTimeout(() => {
        // 模拟跳转到聊天界面或显示联系方式
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            showNotification('请填写下方表单，我们会尽快为您安排专属导师！', 'success');
        }
    }, 1500);
    
    // 实际项目中的实现示例：
    // initWeChatAPI()
    //     .then(() => {
    //         // 打开微信聊天窗口或跳转到聊天页面
    //         window.location.href = '/chat';
    //     })
    //     .catch(error => {
    //         showNotification('连接失败，请稍后重试', 'error');
    //     });
}

// 初始化聊天按钮
function initChatButton() {
    const chatButton = document.querySelector('.cta-button');
    if (chatButton) {
        chatButton.addEventListener('click', startChat);
    }
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 预留的API调用函数（将来与后端集成时使用）

// 提交咨询信息到后端
async function submitConsultation(data) {
    try {
        const response = await fetch('/api/consultation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('网络请求失败');
        }
        
        return await response.json();
    } catch (error) {
        console.error('提交咨询信息失败:', error);
        throw error;
    }
}

// 初始化微信API（预留）
async function initWeChatAPI() {
    // 这里将来会集成微信API
    return new Promise((resolve, reject) => {
        // 模拟微信API初始化
        setTimeout(() => {
            // 实际实现中会调用微信的JS-SDK
            console.log('微信API初始化完成');
            resolve();
        }, 1000);
    });
}

// 获取用户学习进度（预留）
async function getUserProgress(userId) {
    try {
        const response = await fetch(`/api/user/${userId}/progress`);
        return await response.json();
    } catch (error) {
        console.error('获取用户进度失败:', error);
        throw error;
    }
}

// 发送消息到聊天系统（预留）
async function sendMessage(message, chatId) {
    try {
        const response = await fetch('/api/chat/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, chatId })
        });
        
        return await response.json();
    } catch (error) {
        console.error('发送消息失败:', error);
        throw error;
    }
}

// 导出函数供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        startChat,
        submitConsultation,
        initWeChatAPI,
        getUserProgress,
        sendMessage
    };
}