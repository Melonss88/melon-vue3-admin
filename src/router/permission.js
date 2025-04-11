import router from './index';
import { useUserStore } from '@/stores/user';
import { ElMessage } from 'element-plus';
const whiteList = ['/login']; // 白名单路由
router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    // 1. 已登录状态访问登录页 → 跳首页
    if (userStore.token && to.path === '/login') {
        next('/home');
        return;
    }
    // 2. 白名单路由直接放行
    if (whiteList.includes(to.path)) {
        next();
        return;
    }
    // 3. 需要登录但未登录 → 跳登录页
    if (!userStore.token) {
        ElMessage.warning('请先登录');
        next(`/login?redirect=${to.path}`); // 携带重定向路径
        return;
    }
    // 4. 正常放行
    next();
});
