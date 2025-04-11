import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
import { ref } from 'vue';
const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref(0);
const formatTooltip = (val) => {
    return val / 100;
};
const configData = [
    {
        name: 'model-value / v-model',
        declare: '选中项绑定值',
        type: 'number / object',
        default: '0'
    },
    {
        name: 'min',
        declare: '最小值',
        type: 'number',
        default: '0'
    },
    {
        name: 'max',
        declare: '最大值',
        type: 'number',
        default: '100'
    },
    {
        name: 'disabled',
        declare: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'step',
        declare: '步长',
        type: 'number',
        default: '1'
    },
    {
        name: 'show-input',
        declare: '是否显示输入框，仅在非范围选择时有效',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'show-input-controls',
        declare: '在显示输入框的情况下，是否显示输入框的控制按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'size',
        declare: 'slider 包装器的大小，垂直模式下该属性不可用',
        type: 'enum',
        default: 'default',
        options: ['large', 'default', 'small']
    },
    {
        name: 'input-size',
        declare: '输入框的大小，如果设置了 size 属性，默认值自动取 size',
        type: 'enum',
        default: 'default',
        options: ['large', 'default', 'small']
    },
    {
        name: 'show-stops',
        declare: '是否显示间断点',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'show-tooltip',
        declare: '是否显示提示信息',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'format-tooltip',
        declare: '格式化提示信息',
        type: 'Function',
        default: '—'
    },
    {
        name: 'range',
        declare: '是否开启选择范围',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'vertical',
        declare: '垂直模式',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'height',
        declare: '滑块高度，垂直模式必填',
        type: 'string',
        default: '—'
    },
    {
        name: 'aria-label',
        declare: '原生 aria-label属性',
        type: 'string',
        default: '—'
    },
    {
        name: 'range-start-label',
        declare: '当 range 为true时，屏幕阅读器标签开始的标记',
        type: 'string',
        default: '—'
    },
    {
        name: 'range-end-label',
        declare: '当 range 为true时，屏幕阅读器标签结尾的标记',
        type: 'string',
        default: '—'
    },
    {
        name: 'format-value-text',
        declare: '显示屏幕阅读器的 aria-valuenow 属性的格式',
        type: 'Function',
        default: '—'
    },
    {
        name: 'debounce',
        declare: '输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效',
        type: 'number',
        default: '300'
    },
    {
        name: 'tooltip-class',
        declare: 'tooltip 的自定义类名',
        type: 'string',
        default: '—'
    },
    {
        name: 'placement',
        declare: 'Tooltip 出现的位置',
        type: 'enum',
        default: 'top',
        options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right']
    },
    {
        name: 'marks',
        declare: '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式',
        type: 'object',
        default: '—'
    },
    {
        name: 'validate-event',
        declare: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'persistent',
        declare: '当 slider 的 tooltip 处于非活动状态且 persistent 为 false 时，Popconfirm 将被销毁。当 show-tooltip 为 false 时，persistent 将始终为 false。',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'label',
        declare: '原生 aria-label属性',
        type: 'string',
        default: '—',
        deprecated: true
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['slider-demo-block']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-demo-block']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-demo-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['el-slider']} */ ;
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
    title: "Slider 滑块",
}));
const __VLS_5 = __VLS_4({
    title: "Slider 滑块",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "slider-demo-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_7 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    modelValue: (__VLS_ctx.value1),
}));
const __VLS_9 = __VLS_8({
    modelValue: (__VLS_ctx.value1),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "slider-demo-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_11 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    modelValue: (__VLS_ctx.value2),
}));
const __VLS_13 = __VLS_12({
    modelValue: (__VLS_ctx.value2),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "slider-demo-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_15 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.value3),
    showTooltip: (false),
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.value3),
    showTooltip: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "slider-demo-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_19 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    modelValue: (__VLS_ctx.value4),
    formatTooltip: (__VLS_ctx.formatTooltip),
}));
const __VLS_21 = __VLS_20({
    modelValue: (__VLS_ctx.value4),
    formatTooltip: (__VLS_ctx.formatTooltip),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "slider-demo-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_23 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    modelValue: (__VLS_ctx.value5),
    disabled: true,
}));
const __VLS_25 = __VLS_24({
    modelValue: (__VLS_ctx.value5),
    disabled: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
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
/** @type {__VLS_StyleScopedClasses['slider-demo-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-demo-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-demo-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-demo-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-demo-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            value1: value1,
            value2: value2,
            value3: value3,
            value4: value4,
            value5: value5,
            formatTooltip: formatTooltip,
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
