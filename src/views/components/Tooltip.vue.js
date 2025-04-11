import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const configData = [
    {
        name: 'append-to',
        declare: '指示 Tooltip 的内容将附加在哪一个网页元素上',
        type: 'CSSSelector / HTMLElement',
        default: '—'
    },
    {
        name: 'effect',
        declare: 'Tooltip 主题，内置了 dark / light 两种',
        type: 'enum',
        default: "'dark'",
        options: ['dark', 'light']
    },
    {
        name: 'content',
        declare: '显示的内容，也可被 slot#content 覆盖',
        type: 'string',
        default: "''"
    },
    {
        name: 'raw-content',
        declare: 'content 中的内容是否作为 HTML 字符串处理',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'placement',
        declare: 'Tooltip 组件出现的位置',
        type: 'enum',
        default: "'bottom'",
        options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
    },
    {
        name: 'fallback-placements',
        declare: 'Tooltip 可用的 positions 请查看popper.js 文档',
        type: 'array',
        default: '—'
    },
    {
        name: 'visible / v-model:visible',
        declare: 'Tooltip 组件可见性',
        type: 'boolean',
        default: '—'
    },
    {
        name: 'disabled',
        declare: 'Tooltip 组件是否禁用',
        type: 'boolean',
        default: '—'
    },
    {
        name: 'offset',
        declare: '出现位置的偏移量',
        type: 'number',
        default: '12'
    },
    {
        name: 'transition',
        declare: '动画名称',
        type: 'string',
        default: '—'
    },
    {
        name: 'popper-options',
        declare: 'popper.js 参数',
        type: 'object',
        default: '{}'
    },
    {
        name: 'show-after',
        declare: '在触发后多久显示内容，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        name: 'show-arrow',
        declare: 'tooltip 的内容是否有箭头',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'hide-after',
        declare: '延迟关闭，单位毫秒',
        type: 'number',
        default: '200'
    },
    {
        name: 'auto-close',
        declare: 'tooltip 出现后自动隐藏延时，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        name: 'popper-class',
        declare: '为 Tooltip 的 popper 添加类名',
        type: 'string',
        default: "''"
    },
    {
        name: 'enterable',
        declare: '鼠标是否可进入到 tooltip 中',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'teleported',
        declare: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'trigger',
        declare: '如何触发 Tooltip',
        type: 'enum',
        default: "'hover'",
        options: ['hover', 'click', 'focus', 'contextmenu']
    },
    {
        name: 'virtual-triggering',
        declare: '用来标识虚拟触发是否被启用',
        type: 'boolean',
        default: '—'
    },
    {
        name: 'virtual-ref',
        declare: '标识虚拟触发时的触发元素',
        type: 'HTMLElement',
        default: '—'
    },
    {
        name: 'trigger-keys',
        declare: '当鼠标点击或者聚焦在触发元素上时，可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示',
        type: 'Array',
        default: "['Enter','Space']"
    },
    {
        name: 'persistent',
        declare: '当 tooltip 组件长时间不触发且 persistent 属性设置为 false 时, popconfirm 将会被删除',
        type: 'boolean',
        default: '—'
    },
    {
        name: 'aria-label',
        declare: '和 aria-label 属性保持一致',
        type: 'string',
        default: '—'
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
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
/** @type {[typeof Title, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Title, new Title({
    title: "Tooltip 文字提示",
}));
const __VLS_5 = __VLS_4({
    title: "Tooltip 文字提示",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const __VLS_7 = {}.ElTooltip;
/** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    content: "Top center",
    placement: "top",
}));
const __VLS_9 = __VLS_8({
    content: "Top center",
    placement: "top",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_10.slots.default;
const __VLS_11 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_14.slots.default;
var __VLS_14;
var __VLS_10;
const __VLS_15 = {}.ElTooltip;
/** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    content: "Bottom center",
    placement: "bottom",
    effect: "light",
}));
const __VLS_17 = __VLS_16({
    content: "Bottom center",
    placement: "bottom",
    effect: "light",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_18.slots.default;
const __VLS_19 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_22.slots.default;
var __VLS_22;
var __VLS_18;
const __VLS_23 = {}.ElTooltip;
/** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    content: "Bottom center",
    effect: "customized",
}));
const __VLS_25 = __VLS_24({
    content: "Bottom center",
    effect: "customized",
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_26.slots.default;
const __VLS_27 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({}));
const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
__VLS_30.slots.default;
var __VLS_30;
var __VLS_26;
var __VLS_3;
const __VLS_31 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({}));
const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
__VLS_34.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_36 = __VLS_35({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
var __VLS_34;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
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
