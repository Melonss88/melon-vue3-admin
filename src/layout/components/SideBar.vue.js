import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTabStore } from "@/stores/useTabStore";
import { HomeFilled, Document, Grid, Lock, Star, Link, } from "@element-plus/icons-vue";
import { routes as rawRoutes } from "@/router";
const router = useRouter();
const route = useRoute();
const tabStore = useTabStore();
// 图标名称到组件的映射
const iconMap = {
    home: HomeFilled,
    document: Document,
    components: Grid,
    lock: Lock,
    star: Star,
    link: Link,
    default: Document,
};
const typedRoutes = rawRoutes;
const menuItems = computed(() => {
    const layoutRoute = typedRoutes.find(r => r.path === "/");
    if (!layoutRoute || !layoutRoute.children)
        return [];
    return layoutRoute.children
        .filter(route => !route.meta?.hidden)
        .map(route => {
        const children = (route.children ?? [])
            .filter((child) => !!child && !child.meta?.hidden)
            .map(child => ({
            path: child.path,
            title: child.meta?.title?.toString() || child.name?.toString() || "未命名页面",
            icon: iconMap[child.meta?.icon || "default"],
        })) || [];
        const menuItem = {
            path: route.path,
            title: route.meta?.title?.toString() || route.name?.toString() || "未命名页面",
            icon: iconMap[route.meta?.icon || "default"],
            ...(children.length > 0 ? { children } : {})
        };
        return menuItem;
    });
});
const handleMenuClick = (item) => {
    // 如果是没有子菜单的路由，执行跳转并添加 tab
    if (!item.children) {
        tabStore.addTab({
            title: item.title,
            path: item.path,
        });
        // 确保不重复跳转相同路径
        // if (route.path !== item.path) {
        //   router.push(item.path).catch(err => {
        //     console.error("路由跳转失败", err);
        //   });
        // }
    }
};
const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.ElAside;
/** @type {[typeof __VLS_components.ElAside, typeof __VLS_components.elAside, typeof __VLS_components.ElAside, typeof __VLS_components.elAside, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    width: "auto",
}));
const __VLS_2 = __VLS_1({
    width: "auto",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "aside-admin" },
    ...{ class: ({ 'collapsed': __VLS_ctx.collapse }) },
});
(__VLS_ctx.collapse ? 'M' : 'Melon-Vue3-admin');
const __VLS_5 = {}.ElMenu;
/** @type {[typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    defaultActive: (__VLS_ctx.route.path),
    collapse: (__VLS_ctx.collapse),
    ...{ class: "sidebar" },
    router: (true),
}));
const __VLS_7 = __VLS_6({
    defaultActive: (__VLS_ctx.route.path),
    collapse: (__VLS_ctx.collapse),
    ...{ class: "sidebar" },
    router: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
    (item.path);
    if (item.children) {
        const __VLS_9 = {}.ElSubMenu;
        /** @type {[typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, ]} */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
            index: (item.path),
        }));
        const __VLS_11 = __VLS_10({
            index: (item.path),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        __VLS_12.slots.default;
        {
            const { title: __VLS_thisSlot } = __VLS_12.slots;
            const __VLS_13 = {}.ElIcon;
            /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
            // @ts-ignore
            const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
            const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
            __VLS_16.slots.default;
            const __VLS_17 = ((item.icon));
            // @ts-ignore
            const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
            const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
            var __VLS_16;
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (item.title);
        }
        for (const [child] of __VLS_getVForSourceType((item.children))) {
            const __VLS_21 = {}.ElMenuItem;
            /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
            // @ts-ignore
            const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
                ...{ 'onClick': {} },
                key: (child.path),
                index: (child.path),
            }));
            const __VLS_23 = __VLS_22({
                ...{ 'onClick': {} },
                key: (child.path),
                index: (child.path),
            }, ...__VLS_functionalComponentArgsRest(__VLS_22));
            let __VLS_25;
            let __VLS_26;
            let __VLS_27;
            const __VLS_28 = {
                onClick: (() => __VLS_ctx.handleMenuClick(child))
            };
            __VLS_24.slots.default;
            const __VLS_29 = {}.ElIcon;
            /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
            // @ts-ignore
            const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
            const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
            __VLS_32.slots.default;
            const __VLS_33 = ((child.icon));
            // @ts-ignore
            const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
            const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
            var __VLS_32;
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (child.title);
            var __VLS_24;
        }
        var __VLS_12;
    }
    else {
        const __VLS_37 = {}.ElMenuItem;
        /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
            ...{ 'onClick': {} },
            index: (item.path),
        }));
        const __VLS_39 = __VLS_38({
            ...{ 'onClick': {} },
            index: (item.path),
        }, ...__VLS_functionalComponentArgsRest(__VLS_38));
        let __VLS_41;
        let __VLS_42;
        let __VLS_43;
        const __VLS_44 = {
            onClick: (() => __VLS_ctx.handleMenuClick(item))
        };
        __VLS_40.slots.default;
        const __VLS_45 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
        const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
        __VLS_48.slots.default;
        const __VLS_49 = ((item.icon));
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({}));
        const __VLS_51 = __VLS_50({}, ...__VLS_functionalComponentArgsRest(__VLS_50));
        var __VLS_48;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item.title);
        var __VLS_40;
    }
}
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['aside-admin']} */ ;
/** @type {__VLS_StyleScopedClasses['collapsed']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            route: route,
            menuItems: menuItems,
            handleMenuClick: handleMenuClick,
        };
    },
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
