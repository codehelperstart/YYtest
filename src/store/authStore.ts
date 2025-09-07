import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  username: string;
  email: string;
  phone?: string;
  avatar?: string;
  level: string;
  streak: number;
  totalStudyTime: number;
  completedCourses: number;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}

export interface RegisterData {
  username: string;
  email: string;
  phone: string;
  password: string;
}

type AuthStore = AuthState & AuthActions;

// 模拟API调用
const mockLogin = async (email: string, password: string): Promise<User> => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 模拟登录验证
  if (email === 'demo@example.com' && password === 'password') {
    return {
      id: '1',
      username: '演示用户',
      email: 'demo@example.com',
      phone: '13800138000',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20programmer%20avatar%20professional&image_size=square',
      level: 'JavaScript 初学者',
      streak: 15,
      totalStudyTime: 120,
      completedCourses: 3,
      createdAt: '2024-01-01T00:00:00Z'
    };
  }
  
  throw new Error('邮箱或密码错误');
};

const mockRegister = async (userData: RegisterData): Promise<User> => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // 模拟注册
  return {
    id: Date.now().toString(),
    username: userData.username,
    email: userData.email,
    phone: userData.phone,
    avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=new%20user%20avatar%20friendly&image_size=square',
    level: '新手',
    streak: 0,
    totalStudyTime: 0,
    completedCourses: 0,
    createdAt: new Date().toISOString()
  };
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // 初始状态
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // 登录
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const user = await mockLogin(email, password);
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            error: null 
          });
        } catch (error) {
          set({ 
            isLoading: false, 
            error: error instanceof Error ? error.message : '登录失败' 
          });
        }
      },

      // 注册
      register: async (userData: RegisterData) => {
        set({ isLoading: true, error: null });
        try {
          const user = await mockRegister(userData);
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            error: null 
          });
        } catch (error) {
          set({ 
            isLoading: false, 
            error: error instanceof Error ? error.message : '注册失败' 
          });
        }
      },

      // 登出
      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false, 
          error: null 
        });
      },

      // 更新用户信息
      updateUser: (userData: Partial<User>) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ 
            user: { ...currentUser, ...userData } 
          });
        }
      },

      // 清除错误
      clearError: () => {
        set({ error: null });
      },

      // 设置加载状态
      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      })
    }
  )
);

// 选择器
export const useUser = () => useAuthStore((state) => state.user);
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);
export const useAuthError = () => useAuthStore((state) => state.error);
export const useAuthLoading = () => useAuthStore((state) => state.isLoading);
export const useAuthActions = () => {
  const login = useAuthStore((state) => state.login);
  const register = useAuthStore((state) => state.register);
  const logout = useAuthStore((state) => state.logout);
  const updateUser = useAuthStore((state) => state.updateUser);
  const clearError = useAuthStore((state) => state.clearError);
  
  return { login, register, logout, updateUser, clearError };
};