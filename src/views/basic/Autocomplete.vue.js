import { onMounted, ref } from 'vue';
import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const state1 = ref('');
const state2 = ref('');
const restaurants = ref([]);
const querySearch = (queryString, cb) => {
    const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
    // call callback function to return suggestions
    cb(results);
};
const createFilter = (queryString) => {
    return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
};
const loadAll = () => {
    return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
    ];
};
const handleSelect = (item) => {
    console.log(item);
};
onMounted(() => {
    restaurants.value = loadAll();
});
const configData = [
    {
        name: 'model-value / v-model',
        declare: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        name: 'placeholder',
        declare: '占位文本',
        type: 'string',
        default: '—'
    },
    {
        name: 'clearable',
        declare: '是否可清空',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'disabled',
        declare: '自动补全组件是否被禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'value-key',
        declare: '输入建议对象中用于显示的键名',
        type: 'string',
        default: 'value'
    },
    {
        name: 'debounce',
        declare: '获取输入建议的防抖延时，单位为毫秒',
        type: 'number',
        default: '300'
    },
    {
        name: 'placement',
        declare: '菜单弹出位置',
        type: 'enum',
        default: 'bottom-start',
        options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end']
    },
    {
        name: 'fetch-suggestions',
        declare: '获取输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
        type: 'Function',
        default: '—'
    },
    {
        name: 'trigger-on-focus',
        declare: 'whether show suggestions when input focus',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'select-when-unmatched',
        declare: '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'name',
        declare: '等价于原生 input name 属性',
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
        name: 'hide-loading',
        declare: '是否隐藏远程加载时的加载图标',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'popper-class',
        declare: '下拉列表的类名',
        type: 'string',
        default: '—'
    },
    {
        name: 'teleported',
        declare: '是否将下拉列表元素插入 append-to 指向的元素下',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'highlight-first-item',
        declare: '是否默认高亮远程搜索结果的第一项',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'fit-input-width',
        declare: '下拉框的宽度是否与输入框相同',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'popper-append-to-body',
        declare: '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
        type: 'boolean',
        default: 'false',
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
    title: "自动补全输入框",
}));
const __VLS_5 = __VLS_4({
    title: "自动补全输入框",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "common-main" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex gap-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "sub-title my-2 text-sm text-gray-600" },
});
const __VLS_7 = {}.ElAutocomplete;
/** @type {[typeof __VLS_components.ElAutocomplete, typeof __VLS_components.elAutocomplete, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    ...{ 'onSelect': {} },
    modelValue: (__VLS_ctx.state1),
    fetchSuggestions: (__VLS_ctx.querySearch),
    clearable: true,
    ...{ class: "inline-input w-50" },
    placeholder: "Please Input",
}));
const __VLS_9 = __VLS_8({
    ...{ 'onSelect': {} },
    modelValue: (__VLS_ctx.state1),
    fetchSuggestions: (__VLS_ctx.querySearch),
    clearable: true,
    ...{ class: "inline-input w-50" },
    placeholder: "Please Input",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_11;
let __VLS_12;
let __VLS_13;
const __VLS_14 = {
    onSelect: (__VLS_ctx.handleSelect)
};
var __VLS_10;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "sub-title my-2 text-sm text-gray-600" },
});
const __VLS_15 = {}.ElAutocomplete;
/** @type {[typeof __VLS_components.ElAutocomplete, typeof __VLS_components.elAutocomplete, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    ...{ 'onSelect': {} },
    modelValue: (__VLS_ctx.state2),
    fetchSuggestions: (__VLS_ctx.querySearch),
    triggerOnFocus: (false),
    clearable: true,
    ...{ class: "inline-input w-50" },
    placeholder: "Please Input",
}));
const __VLS_17 = __VLS_16({
    ...{ 'onSelect': {} },
    modelValue: (__VLS_ctx.state2),
    fetchSuggestions: (__VLS_ctx.querySearch),
    triggerOnFocus: (false),
    clearable: true,
    ...{ class: "inline-input w-50" },
    placeholder: "Please Input",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_19;
let __VLS_20;
let __VLS_21;
const __VLS_22 = {
    onSelect: (__VLS_ctx.handleSelect)
};
var __VLS_18;
var __VLS_3;
const __VLS_23 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({}));
const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_26.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_28 = __VLS_27({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
var __VLS_26;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
/** @type {__VLS_StyleScopedClasses['my-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-input']} */ ;
/** @type {__VLS_StyleScopedClasses['w-50']} */ ;
/** @type {__VLS_StyleScopedClasses['sub-title']} */ ;
/** @type {__VLS_StyleScopedClasses['my-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-input']} */ ;
/** @type {__VLS_StyleScopedClasses['w-50']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            state1: state1,
            state2: state2,
            querySearch: querySearch,
            handleSelect: handleSelect,
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
