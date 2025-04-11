import { ref } from 'vue';
import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const value1 = ref(0);
const value2 = ref(0);
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']);
const configData = [
    {
        name: 'model-value / v-model',
        declare: '选中项绑定值',
        type: 'number',
        default: '0'
    },
    {
        name: 'max',
        declare: '最大分值',
        type: 'number',
        default: '5'
    },
    {
        name: 'size',
        declare: '尺寸',
        type: 'enum',
        default: '—',
        options: ['large', 'default', 'small']
    },
    {
        name: 'disabled',
        declare: '是否为只读',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'allow-half',
        declare: '是否允许半选',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'low-threshold',
        declare: '低分和中等分数的界限值，值本身被划分在低分中',
        type: 'number',
        default: '2'
    },
    {
        name: 'high-threshold',
        declare: '高分和中等分数的界限值，值本身被划分在高分中',
        type: 'number',
        default: '4'
    },
    {
        name: 'colors',
        declare: 'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色',
        type: 'object',
        default: "['#f7ba2a', '#f7ba2a', '#f7ba2a']"
    },
    {
        name: 'void-color',
        declare: '未选中 icon 的颜色',
        type: 'string',
        default: "'#c6d1de'"
    },
    {
        name: 'disabled-void-color',
        declare: '只读时未选中 icon 的颜色',
        type: 'string',
        default: "'#eff2f7'"
    },
    {
        name: 'icons',
        declare: '图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名',
        type: 'object',
        default: '[StarFilled, StarFilled, StarFilled]'
    },
    {
        name: 'void-icon',
        declare: '未被选中的图标组件',
        type: 'string / Component',
        default: 'Star'
    },
    {
        name: 'disabled-void-icon',
        declare: '禁用状态的未选择图标',
        type: 'string / Component',
        default: 'StarFilled'
    },
    {
        name: 'show-text',
        declare: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'show-score',
        declare: '是否显示当前分数，show-score 和 show-text 不能同时为真',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'text-color',
        declare: '辅助文字的颜色',
        type: 'string',
        default: "''"
    },
    {
        name: 'texts',
        declare: '辅助文字数组',
        type: 'array',
        default: "['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise']"
    },
    {
        name: 'score-template',
        declare: '分数显示模板',
        type: 'string',
        default: "''"
    },
    {
        name: 'clearable',
        declare: '是否可以重置值为 0',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'id',
        declare: '原生 id 属性',
        type: 'string',
        default: '—'
    },
    {
        name: 'aria-label',
        declare: '和 Rate 的 aria-label 属性保持一致',
        type: 'string',
        default: '—'
    },
    {
        name: 'label',
        declare: '和 Rate 的 aria-label 属性保持一致',
        type: 'string',
        default: '—',
        deprecated: true
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['demo-rate-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-rate-block']} */ ;
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
    title: "Rate评分",
}));
const __VLS_5 = __VLS_4({
    title: "Rate评分",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-rate-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_7 = {}.ElRate;
/** @type {[typeof __VLS_components.ElRate, typeof __VLS_components.elRate, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    modelValue: (__VLS_ctx.value1),
}));
const __VLS_9 = __VLS_8({
    modelValue: (__VLS_ctx.value1),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-rate-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "demonstration" },
});
const __VLS_11 = {}.ElRate;
/** @type {[typeof __VLS_components.ElRate, typeof __VLS_components.elRate, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    modelValue: (__VLS_ctx.value2),
    colors: (__VLS_ctx.colors),
}));
const __VLS_13 = __VLS_12({
    modelValue: (__VLS_ctx.value2),
    colors: (__VLS_ctx.colors),
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
/** @type {__VLS_StyleScopedClasses['demo-rate-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-rate-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            value1: value1,
            value2: value2,
            colors: colors,
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
