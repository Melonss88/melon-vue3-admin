import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
import { ref } from 'vue';
const value1 = ref(true);
const value2 = ref(true);
const configData = [
    {
        name: 'model-value / v-model',
        declare: '绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型',
        type: 'boolean / string / number',
        default: 'false'
    },
    {
        name: 'disabled',
        declare: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'loading',
        declare: '是否显示加载中',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'size',
        declare: 'switch 的大小',
        type: 'enum',
        default: "''",
        options: ['large', 'default', 'small']
    },
    {
        name: 'width',
        declare: 'switch 的宽度',
        type: 'number / string',
        default: "''"
    },
    {
        name: 'inline-prompt',
        declare: '无论图标或文本是否显示在点内，只会呈现文本的第一个字符',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'active-icon',
        declare: 'switch 状态为 on 时所显示图标，设置此项会忽略 active-text',
        type: 'string / Component',
        default: '—'
    },
    {
        name: 'inactive-icon',
        declare: 'switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text',
        type: 'string / Component',
        default: '—'
    },
    {
        name: 'active-action-icon',
        declare: 'on状态下显示的图标组件',
        type: 'string / Component',
        default: '—'
    },
    {
        name: 'inactive-action-icon',
        declare: 'off状态下显示的图标组件',
        type: 'string / Component',
        default: '—'
    },
    {
        name: 'active-text',
        declare: 'switch 打开时的文字描述',
        type: 'string',
        default: "''"
    },
    {
        name: 'inactive-text',
        declare: 'switch 的状态为 off 时的文字描述',
        type: 'string',
        default: "''"
    },
    {
        name: 'active-value',
        declare: 'switch 状态为 on 时的值',
        type: 'boolean / string / number',
        default: 'true'
    },
    {
        name: 'inactive-value',
        declare: 'switch的状态为 off 时的值',
        type: 'boolean / string / number',
        default: 'false'
    },
    {
        name: 'name',
        declare: 'switch 对应的 name 属性',
        type: 'string',
        default: "''"
    },
    {
        name: 'validate-event',
        declare: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'before-change',
        declare: 'switch 状态改变前的钩子，返回 false 或者返回 Promise 且被 reject 则停止切换',
        type: 'boolean / Function',
        default: '—'
    },
    {
        name: 'id',
        declare: 'input 的 id',
        type: 'string',
        default: '—'
    },
    {
        name: 'tabindex',
        declare: 'input 的 tabindex',
        type: 'string / number',
        default: '—'
    },
    {
        name: 'aria-label',
        declare: '等价于原生 input aria-label 属性',
        type: 'string',
        default: '—'
    },
    {
        name: 'active-color',
        declare: '当在 on 状态时的背景颜色(推荐使用 CSS var --el-switch-on-color)',
        type: 'string',
        default: "''",
        deprecated: true
    },
    {
        name: 'inactive-color',
        declare: 'off 状态时的背景颜色(推荐使用 CSS var --el-switch-off-color)',
        type: 'string',
        default: "''",
        deprecated: true
    },
    {
        name: 'border-color',
        declare: '开关的边框颜色 (推荐使用 CSS var --el-switch-border-color)',
        type: 'string',
        default: "''",
        deprecated: true
    },
    {
        name: 'label',
        declare: '等价于原生 input aria-label 属性',
        type: 'string',
        default: '—',
        deprecated: true
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
    title: "Switch 开关",
}));
const __VLS_5 = __VLS_4({
    title: "Switch 开关",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const __VLS_7 = {}.ElSwitch;
/** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    modelValue: (__VLS_ctx.value1),
}));
const __VLS_9 = __VLS_8({
    modelValue: (__VLS_ctx.value1),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const __VLS_11 = {}.ElSwitch;
/** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    modelValue: (__VLS_ctx.value2),
    ...{ class: "ml-2" },
    ...{ style: {} },
}));
const __VLS_13 = __VLS_12({
    modelValue: (__VLS_ctx.value2),
    ...{ class: "ml-2" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
var __VLS_3;
const __VLS_15 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_18.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_20 = __VLS_19({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
var __VLS_18;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            value1: value1,
            value2: value2,
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
