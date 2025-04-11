import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
import { computed, ref } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));
const toggle = () => {
    language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn';
};
const configData = [
    {
        name: 'locale',
        declare: '翻译文本对象',
        type: 'object',
        default: '{ languages: "en" }'
    },
    {
        name: 'size',
        declare: '全局组件大小',
        type: 'enum',
        default: 'default',
        options: ['large', 'default', 'small']
    },
    {
        name: 'zIndex',
        declare: '全局初始化 zIndex 的值',
        type: 'number',
        default: '—'
    },
    {
        name: 'namespace',
        declare: '全局组件类名称前缀 (需要配合 $namespace 使用)',
        type: 'string',
        default: 'el'
    },
    {
        name: 'button',
        declare: '按钮相关配置，',
        type: 'object',
        default: '',
        children: [
            {
                name: 'autoInsertSpace',
                declare: '自动在两个中文字符之间插入空格',
                type: 'boolean',
                default: 'false'
            },
            // 可以继续添加其他button配置项
        ]
    },
    {
        name: 'message',
        declare: '消息相关配置，',
        type: 'object',
        default: '',
        children: [
            {
                name: 'max',
                declare: '可同时显示的消息最大数量',
                type: 'number',
                default: '—'
            },
            // 可以继续添加其他message配置项
        ]
    },
    {
        name: 'experimental-features',
        declare: '将要添加的实验阶段的功能，所有功能都是默认设置为 false',
        type: 'object',
        default: '—'
    },
    {
        name: 'empty-values',
        declare: '输入类组件空值',
        type: 'array',
        default: '—'
    },
    {
        name: 'value-on-clear',
        declare: '输入类组件清空值',
        type: 'string / number / boolean / Function',
        default: '—'
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "common-main" },
});
const __VLS_0 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
/** @type {[typeof Title, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Title, new Title({
    title: "i18n 配置",
}));
const __VLS_5 = __VLS_4({
    title: "i18n 配置",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const __VLS_7 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    ...{ 'onClick': {} },
    mb2: true,
}));
const __VLS_9 = __VLS_8({
    ...{ 'onClick': {} },
    mb2: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_11;
let __VLS_12;
let __VLS_13;
const __VLS_14 = {
    onClick: (__VLS_ctx.toggle)
};
__VLS_10.slots.default;
var __VLS_10;
__VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
const __VLS_15 = {}.ElConfigProvider;
/** @type {[typeof __VLS_components.ElConfigProvider, typeof __VLS_components.elConfigProvider, typeof __VLS_components.ElConfigProvider, typeof __VLS_components.elConfigProvider, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    locale: (__VLS_ctx.locale),
}));
const __VLS_17 = __VLS_16({
    locale: (__VLS_ctx.locale),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_18.slots.default;
const __VLS_19 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    mb1: true,
    data: ([]),
}));
const __VLS_21 = __VLS_20({
    mb1: true,
    data: ([]),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const __VLS_23 = {}.ElPagination;
/** @type {[typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    total: (100),
}));
const __VLS_25 = __VLS_24({
    total: (100),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
var __VLS_18;
var __VLS_3;
const __VLS_27 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({}));
const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
__VLS_30.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_32 = __VLS_31({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
var __VLS_30;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            locale: locale,
            toggle: toggle,
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
