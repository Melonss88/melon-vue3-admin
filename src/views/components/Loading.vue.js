import { ref } from 'vue';
import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const loading = ref(true);
const tableData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
];
const configData = [
    {
        name: 'target',
        declare: 'Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点',
        type: 'string / HTMLElement',
        default: 'document.body'
    },
    {
        name: 'body',
        declare: '同 v-loading 指令中的 body 修饰符',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'fullscreen',
        declare: '同 v-loading 指令中的 fullscreen 修饰符',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'lock',
        declare: '同 v-loading 指令中的 lock 修饰符',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'text',
        declare: '显示在加载图标下方的加载文案',
        type: 'string',
        default: '—'
    },
    {
        name: 'spinner',
        declare: '自定义加载图标类名',
        type: 'string',
        default: '—'
    },
    {
        name: 'background',
        declare: '遮罩背景色',
        type: 'string',
        default: '—'
    },
    {
        name: 'customClass',
        declare: 'Loading 的自定义类名',
        type: 'string',
        default: '—'
    },
    {
        name: 'svg',
        declare: '自定义 SVG 元素覆盖默认加载器',
        type: 'string',
        default: '—'
    },
    {
        name: 'svgViewBox',
        declare: '设置用于加载 svg 元素的 viewBox 属性',
        type: 'string',
        default: '—'
    },
    {
        name: 'beforeClose',
        declare: 'Loading 关闭之前执行的函数。如果此函数返回 false ，关闭过程将被中止。反之，loading 将被关闭。',
        type: 'Function',
        default: '—',
        version: '2.7.8'
    },
    {
        name: 'closed',
        declare: 'Loading 完全关闭后触发的函数',
        type: 'Function',
        default: '—',
        version: '2.7.8'
    }
];
const configData2 = [
    {
        name: 'v-loading',
        declare: '是否显示动画',
        type: 'boolean / LoadingOptions'
    },
    {
        name: 'element-loading-text',
        declare: '显示在加载图标下方的加载文案',
        type: 'string'
    },
    {
        name: 'element-loading-spinner',
        declare: '自定义加载图标',
        type: 'string'
    },
    {
        name: 'element-loading-svg',
        declare: '自定义加载图标 (与 element-loading-spinner 相同)',
        type: 'string'
    },
    {
        name: 'element-loading-svg-view-box',
        declare: '设置用于加载 svg 元素的 viewBox 属性',
        type: 'string'
    },
    {
        name: 'element-loading-background',
        declare: '背景遮罩的颜色',
        type: 'string'
    },
    {
        name: 'element-loading-custom-class',
        declare: 'loading 的自定义类名',
        type: 'string'
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
    title: "Loading 加载",
}));
const __VLS_5 = __VLS_4({
    title: "Loading 加载",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const __VLS_7 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    data: (__VLS_ctx.tableData),
    ...{ style: {} },
}));
const __VLS_9 = __VLS_8({
    data: (__VLS_ctx.tableData),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.loading) }, null, null);
__VLS_10.slots.default;
const __VLS_11 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    prop: "date",
    label: "Date",
    width: "180",
}));
const __VLS_13 = __VLS_12({
    prop: "date",
    label: "Date",
    width: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const __VLS_15 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    prop: "name",
    label: "Name",
    width: "180",
}));
const __VLS_17 = __VLS_16({
    prop: "name",
    label: "Name",
    width: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const __VLS_19 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    prop: "address",
    label: "Address",
}));
const __VLS_21 = __VLS_20({
    prop: "address",
    label: "Address",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
var __VLS_10;
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
const __VLS_30 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_33.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData2),
    isEvent: (true),
    configTtitle: "指令",
}));
const __VLS_35 = __VLS_34({
    tableData: (__VLS_ctx.configData2),
    isEvent: (true),
    configTtitle: "指令",
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
var __VLS_33;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            loading: loading,
            tableData: tableData,
            configData: configData,
            configData2: configData2,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
