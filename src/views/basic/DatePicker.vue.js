import { ref } from 'vue';
import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
const value6 = ref('');
const configData = [
    {
        name: 'model-value / v-model',
        declare: '绑定值，如果它是数组，长度应该是 2',
        type: 'number / string / object',
        default: "''"
    },
    {
        name: 'readonly',
        declare: '只读',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'disabled',
        declare: '禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'size',
        declare: '输入框尺寸',
        type: 'enum',
        default: '—',
        options: ['large', 'default', 'small']
    },
    {
        name: 'editable',
        declare: '文本框可输入',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'clearable',
        declare: '是否显示清除按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'placeholder',
        declare: '非范围选择时的占位内容',
        type: 'string',
        default: "''"
    },
    {
        name: 'start-placeholder',
        declare: '范围选择时开始日期的占位内容',
        type: 'string',
        default: '—'
    },
    {
        name: 'end-placeholder',
        declare: '范围选择时结束日期的占位内容',
        type: 'string',
        default: '—'
    },
    {
        name: 'type',
        declare: '显示类型',
        type: 'enum',
        default: 'date',
        options: ['year', 'month', 'date', 'datetime', 'week', 'datetimerange', 'daterange']
    },
    {
        name: 'format',
        declare: '显示在输入框中的格式',
        type: 'string',
        default: "'YYYY-MM-DD'"
    },
    {
        name: 'popper-class',
        declare: 'DatePicker 下拉框的类名',
        type: 'string',
        default: "''"
    },
    {
        name: 'popper-options',
        declare: '自定义 popper 选项，更多请参考 popper.js',
        type: 'object',
        default: '{}'
    },
    {
        name: 'range-separator',
        declare: '选择范围时的分隔符',
        type: 'string',
        default: "'-'"
    },
    {
        name: 'default-value',
        declare: '可选，选择器打开时默认显示的时间',
        type: 'object',
        default: '—'
    },
    {
        name: 'default-time',
        declare: '范围选择时选中日期所使用的当日内具体时刻',
        type: 'object',
        default: '—'
    },
    {
        name: 'value-format',
        declare: '可选，绑定值的格式。 不指定则绑定值为 Date 对象',
        type: 'string',
        default: '—'
    },
    {
        name: 'id',
        declare: '等价于原生 input id 属性',
        type: 'string / object',
        default: '—'
    },
    {
        name: 'name',
        declare: '等价于原生 input name 属性',
        type: 'string / object',
        default: "''"
    },
    {
        name: 'unlink-panels',
        declare: '在范围选择器里取消两个日期面板之间的联动',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'prefix-icon',
        declare: '自定义前缀图标 如果 type的值是TimeLikeType，那么就是 Clock，不然就是 Calendar',
        type: 'string / object',
        default: "''"
    },
    {
        name: 'clear-icon',
        declare: '自定义清除图标',
        type: 'string / object',
        default: 'CircleClose'
    },
    {
        name: 'validate-event',
        declare: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'disabled-date',
        declare: '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。',
        type: 'Function',
        default: '—'
    },
    {
        name: 'shortcuts',
        declare: '设置快捷选项，需要传入数组对象',
        type: 'object',
        default: '[]'
    },
    {
        name: 'cell-class-name',
        declare: '设置自定义类名',
        type: 'Function',
        default: '—'
    },
    {
        name: 'teleported',
        declare: '是否将 date-picker 的下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'empty-values',
        declare: '组件的空值配置 参考config-provider',
        type: 'array',
        default: '—'
    },
    {
        name: 'value-on-clear',
        declare: '清空选项的值 参考 config-provider',
        type: 'string / number / boolean / Function',
        default: '—'
    },
    {
        name: 'fallback-placements',
        declare: 'Tooltip 可用的 positions 请查看popper.js 文档',
        type: 'array',
        default: '—'
    },
    {
        name: 'placement',
        declare: '下拉框出现的位置',
        type: 'enum',
        default: 'bottom',
        options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['demo-date-picker']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-date-picker']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-date-picker']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-date-picker']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-date-picker']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-date-picker']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-date-picker']} */ ;
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
    title: "日期选择器",
}));
const __VLS_5 = __VLS_4({
    title: "日期选择器",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-date-picker" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_7 = {}.ElDatePicker;
/** @type {[typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    modelValue: (__VLS_ctx.value1),
    type: "week",
    format: "[Week] ww",
    placeholder: "Pick a week",
}));
const __VLS_9 = __VLS_8({
    modelValue: (__VLS_ctx.value1),
    type: "week",
    format: "[Week] ww",
    placeholder: "Pick a week",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_11 = {}.ElDatePicker;
/** @type {[typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    modelValue: (__VLS_ctx.value2),
    type: "dates",
    placeholder: "Pick one or more dates",
}));
const __VLS_13 = __VLS_12({
    modelValue: (__VLS_ctx.value2),
    type: "dates",
    placeholder: "Pick one or more dates",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_15 = {}.ElDatePicker;
/** @type {[typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.value3),
    type: "year",
    placeholder: "Pick a year",
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.value3),
    type: "year",
    placeholder: "Pick a year",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_19 = {}.ElDatePicker;
/** @type {[typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    modelValue: (__VLS_ctx.value4),
    type: "years",
    placeholder: "Pick one or more years",
}));
const __VLS_21 = __VLS_20({
    modelValue: (__VLS_ctx.value4),
    type: "years",
    placeholder: "Pick one or more years",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_23 = {}.ElDatePicker;
/** @type {[typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    modelValue: (__VLS_ctx.value5),
    type: "month",
    placeholder: "Pick a month",
}));
const __VLS_25 = __VLS_24({
    modelValue: (__VLS_ctx.value5),
    type: "month",
    placeholder: "Pick a month",
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_27 = {}.ElDatePicker;
/** @type {[typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
    modelValue: (__VLS_ctx.value6),
    type: "months",
    placeholder: "Pick one or more months",
}));
const __VLS_29 = __VLS_28({
    modelValue: (__VLS_ctx.value6),
    type: "months",
    placeholder: "Pick one or more months",
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
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
/** @type {__VLS_StyleScopedClasses['demo-date-picker']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
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
            value6: value6,
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
