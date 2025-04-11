import { UserFilled } from '@element-plus/icons-vue';
const configData = [
    {
        name: 'icon',
        declare: '设置 Avatar 的图标类型（具体参考 Icon 组件）',
        type: 'string | Component',
        default: '—',
        example: 'el-icon-user' // 示例值
    },
    {
        name: 'size',
        declare: 'Avatar 大小',
        type: 'number | enum',
        options: ['default', 'small', 'large'], // 枚举选项
        default: 'default',
        example: 40 // 数字示例
    },
    {
        name: 'shape',
        declare: 'Avatar 形状',
        type: 'enum',
        options: ['circle', 'square'], // 可选形状
        default: 'circle'
    },
    {
        name: 'src',
        declare: 'Avatar 图片的源地址',
        type: 'string',
        default: '—',
        example: 'https://example.com/avatar.png'
    },
    {
        name: 'src-set',
        declare: '图片 Avatar 的原生 srcset 属性',
        type: 'string',
        default: '—',
        example: 'avatar.png 1x, avatar@2x.png 2x'
    },
    {
        name: 'alt',
        declare: '图片 Avatar 的原生 alt 属性',
        type: 'string',
        default: '—',
        example: '用户头像'
    },
    {
        name: 'fit',
        declare: '当展示类型为图片的时候，设置图片如何适应容器',
        type: 'enum',
        options: ['fill', 'contain', 'cover', 'none', 'scale-down'], // CSS object-fit 值
        default: 'cover'
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['demo-type']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-type']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "common-main" },
});
const __VLS_0 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.Title;
/** @type {[typeof __VLS_components.Title, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    title: "Avatar 头像",
}));
const __VLS_6 = __VLS_5({
    title: "Avatar 头像",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-type" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_8 = {}.ElAvatar;
/** @type {[typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    icon: (__VLS_ctx.UserFilled),
}));
const __VLS_10 = __VLS_9({
    icon: (__VLS_ctx.UserFilled),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_12 = {}.ElAvatar;
/** @type {[typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
}));
const __VLS_14 = __VLS_13({
    src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_16 = {}.ElAvatar;
/** @type {[typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, typeof __VLS_components.ElAvatar, typeof __VLS_components.elAvatar, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
var __VLS_19;
var __VLS_3;
const __VLS_20 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
const __VLS_24 = {}.Config;
/** @type {[typeof __VLS_components.Config, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_26 = __VLS_25({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
var __VLS_23;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-type']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            UserFilled: UserFilled,
            configData: configData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
