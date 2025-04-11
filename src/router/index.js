import { createRouter, createWebHistory } from "vue-router";
import { HomeFilled } from "@element-plus/icons-vue";
import Layout from "@/layout/index.vue";
import basic from './modules/basic';
import components from './modules/components';
import table from './modules/table';
import carousel from './modules/carousel';
import data from './modules/data';
import image from './modules/image';
import error from './modules/error';
import { useUserStore } from '@/stores/user';
export const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/user/Login.vue"),
        meta: {
            hidden: true,
            title: '登录'
        }
    },
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        meta: { requiresAuth: true },
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import("@/views/home/index.vue"),
                meta: {
                    title: "首页",
                    icon: HomeFilled,
                    affix: true,
                    hidden: false
                }
            },
            { ...basic },
            { ...components },
            { ...table },
            { ...carousel },
            { ...data },
            { ...image },
            { ...error },
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
        hidden: true
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const token = localStorage.getItem('token') || userStore.token;
    if (to.path === '/login') {
        next();
        return;
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (token) {
            if (!userStore.token && token) {
                userStore.token = token;
            }
            next();
        }
        else {
            next('/login');
        }
    }
    else {
        next();
    }
});
export default router;
