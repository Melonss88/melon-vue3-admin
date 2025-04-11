import { ref } from 'vue';
const currentPage1 = ref(5);
const currentPage2 = ref(5);
const currentPage3 = ref(5);
const currentPage4 = ref(4);
const pageSize2 = ref(100);
const pageSize3 = ref(100);
const pageSize4 = ref(100);
const size = ref('default');
const background = ref(false);
const disabled = ref(false);
const handleSizeChange = (val) => {
    console.log(`${val} items per page`);
};
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`);
};
const configData = [
    {
        name: 'size',
        declare: '分页大小',
        type: "['default', 'small', 'large']",
        default: 'default',
    },
    {
        name: 'background',
        declare: '是否为分页按钮添加背景色',
        type: 'boolean',
        default: false
    },
    {
        name: 'page-size / v-model:page-size',
        declare: '每页显示条目个数',
        type: 'number',
        default: '—'
    },
    {
        name: 'default-page-size',
        declare: '每页默认的条目个数，不设置时默认为10',
        type: 'number',
        default: '—'
    },
    {
        name: 'total',
        declare: '总条目数',
        type: 'number',
        default: '—'
    },
    {
        name: 'page-count',
        declare: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能',
        type: 'number',
        default: '—'
    },
    {
        name: 'pager-count',
        declare: '设置最大页码按钮数。页码按钮的数量，当总页数超过该值时会折叠',
        type: 'number',
        default: 7
    },
    {
        name: 'current-page / v-model:current-page',
        declare: '当前页数',
        type: 'number',
        default: '—'
    },
    {
        name: 'default-current-page',
        declare: '当前页数的默认初始值，不设置时默认为 1',
        type: 'number',
        default: '—'
    },
    {
        name: 'layout',
        declare: '组件布局，子组件名用逗号分隔',
        type: 'string',
        default: 'prev, pager, next, jumper, ->, total'
    },
    {
        name: 'page-sizes',
        declare: '每页显示个数选择器的选项设置',
        type: 'number[]',
        default: [10, 20, 30, 40, 50, 100]
    },
    {
        name: 'append-size-to',
        declare: '下拉框挂载到哪个 DOM 元素',
        type: 'string',
        default: '—',
    },
    {
        name: 'popper-class',
        declare: '每页显示个数选择器的下拉框类名',
        type: 'string',
        default: ''
    },
    {
        name: 'prev-text',
        declare: '替代图标显示的上一页文字',
        type: 'string',
        default: ''
    },
    {
        name: 'prev-icon',
        declare: '上一页的图标，比 prev-text 优先级更高',
        type: 'string | Component',
        default: 'ArrowLeft'
    },
    {
        name: 'next-text',
        declare: '替代图标显示的下一页文字',
        type: 'string',
        default: ''
    },
    {
        name: 'next-icon',
        declare: '下一页的图标，比 next-text 优先级更低',
        type: 'string | Component',
        default: 'ArrowRight'
    },
    {
        name: 'disabled',
        declare: '是否禁用分页',
        type: 'boolean',
        default: false
    },
    {
        name: 'teleported',
        declare: '是否将下拉菜单 teleport 至 body',
        type: 'boolean',
        default: true,
    },
    {
        name: 'hide-on-single-page',
        declare: '只有一页时是否隐藏',
        type: 'boolean',
        default: false
    },
    {
        name: 'small',
        declare: '是否使用小型分页样式（已废弃）',
        type: 'boolean',
        default: false,
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['demo-pagination-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-pagination-block']} */ ;
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
    title: "Pagination 分页",
}));
const __VLS_6 = __VLS_5({
    title: "Pagination 分页",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center mb-4" },
});
const __VLS_8 = {}.ElRadioGroup;
/** @type {[typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    modelValue: (__VLS_ctx.size),
    ...{ class: "mr-4" },
}));
const __VLS_10 = __VLS_9({
    modelValue: (__VLS_ctx.size),
    ...{ class: "mr-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = {}.ElRadioButton;
/** @type {[typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    value: "default",
}));
const __VLS_14 = __VLS_13({
    value: "default",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
var __VLS_15;
const __VLS_16 = {}.ElRadioButton;
/** @type {[typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    value: "large",
}));
const __VLS_18 = __VLS_17({
    value: "large",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
var __VLS_19;
const __VLS_20 = {}.ElRadioButton;
/** @type {[typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    value: "small",
}));
const __VLS_22 = __VLS_21({
    value: "small",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
var __VLS_23;
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_24 = {}.ElSwitch;
/** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    modelValue: (__VLS_ctx.background),
    ...{ class: "ml-2" },
}));
const __VLS_26 = __VLS_25({
    modelValue: (__VLS_ctx.background),
    ...{ class: "ml-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "ml-4" },
});
const __VLS_28 = {}.ElSwitch;
/** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    modelValue: (__VLS_ctx.disabled),
    ...{ class: "ml-2" },
}));
const __VLS_30 = __VLS_29({
    modelValue: (__VLS_ctx.disabled),
    ...{ class: "ml-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_asFunctionalElement(__VLS_intrinsicElements.hr)({
    ...{ class: "my-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-pagination-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demonstration" },
});
const __VLS_32 = {}.ElPagination;
/** @type {[typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ 'onSizeChange': {} },
    ...{ 'onCurrentChange': {} },
    currentPage: (__VLS_ctx.currentPage1),
    pageSize: (100),
    size: (__VLS_ctx.size),
    disabled: (__VLS_ctx.disabled),
    background: (__VLS_ctx.background),
    layout: "total, prev, pager, next",
    total: (1000),
}));
const __VLS_34 = __VLS_33({
    ...{ 'onSizeChange': {} },
    ...{ 'onCurrentChange': {} },
    currentPage: (__VLS_ctx.currentPage1),
    pageSize: (100),
    size: (__VLS_ctx.size),
    disabled: (__VLS_ctx.disabled),
    background: (__VLS_ctx.background),
    layout: "total, prev, pager, next",
    total: (1000),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onSizeChange: (__VLS_ctx.handleSizeChange)
};
const __VLS_40 = {
    onCurrentChange: (__VLS_ctx.handleCurrentChange)
};
var __VLS_35;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-pagination-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demonstration" },
});
const __VLS_41 = {}.ElPagination;
/** @type {[typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    ...{ 'onSizeChange': {} },
    ...{ 'onCurrentChange': {} },
    currentPage: (__VLS_ctx.currentPage2),
    pageSize: (__VLS_ctx.pageSize2),
    pageSizes: ([100, 200, 300, 400]),
    size: (__VLS_ctx.size),
    disabled: (__VLS_ctx.disabled),
    background: (__VLS_ctx.background),
    layout: "sizes, prev, pager, next",
    total: (1000),
}));
const __VLS_43 = __VLS_42({
    ...{ 'onSizeChange': {} },
    ...{ 'onCurrentChange': {} },
    currentPage: (__VLS_ctx.currentPage2),
    pageSize: (__VLS_ctx.pageSize2),
    pageSizes: ([100, 200, 300, 400]),
    size: (__VLS_ctx.size),
    disabled: (__VLS_ctx.disabled),
    background: (__VLS_ctx.background),
    layout: "sizes, prev, pager, next",
    total: (1000),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
let __VLS_45;
let __VLS_46;
let __VLS_47;
const __VLS_48 = {
    onSizeChange: (__VLS_ctx.handleSizeChange)
};
const __VLS_49 = {
    onCurrentChange: (__VLS_ctx.handleCurrentChange)
};
var __VLS_44;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-pagination-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demonstration" },
});
const __VLS_50 = {}.ElPagination;
/** @type {[typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ]} */ ;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
    ...{ 'onSizeChange': {} },
    ...{ 'onCurrentChange': {} },
    currentPage: (__VLS_ctx.currentPage3),
    pageSize: (__VLS_ctx.pageSize3),
    size: (__VLS_ctx.size),
    disabled: (__VLS_ctx.disabled),
    background: (__VLS_ctx.background),
    layout: "prev, pager, next, jumper",
    total: (1000),
}));
const __VLS_52 = __VLS_51({
    ...{ 'onSizeChange': {} },
    ...{ 'onCurrentChange': {} },
    currentPage: (__VLS_ctx.currentPage3),
    pageSize: (__VLS_ctx.pageSize3),
    size: (__VLS_ctx.size),
    disabled: (__VLS_ctx.disabled),
    background: (__VLS_ctx.background),
    layout: "prev, pager, next, jumper",
    total: (1000),
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
let __VLS_54;
let __VLS_55;
let __VLS_56;
const __VLS_57 = {
    onSizeChange: (__VLS_ctx.handleSizeChange)
};
const __VLS_58 = {
    onCurrentChange: (__VLS_ctx.handleCurrentChange)
};
var __VLS_53;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-pagination-block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demonstration" },
});
const __VLS_59 = {}.ElPagination;
/** @type {[typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ]} */ ;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
    ...{ 'onSizeChange': {} },
    ...{ 'onCurrentChange': {} },
    currentPage: (__VLS_ctx.currentPage4),
    pageSize: (__VLS_ctx.pageSize4),
    pageSizes: ([100, 200, 300, 400]),
    size: (__VLS_ctx.size),
    disabled: (__VLS_ctx.disabled),
    background: (__VLS_ctx.background),
    layout: "total, sizes, prev, pager, next, jumper",
    total: (400),
}));
const __VLS_61 = __VLS_60({
    ...{ 'onSizeChange': {} },
    ...{ 'onCurrentChange': {} },
    currentPage: (__VLS_ctx.currentPage4),
    pageSize: (__VLS_ctx.pageSize4),
    pageSizes: ([100, 200, 300, 400]),
    size: (__VLS_ctx.size),
    disabled: (__VLS_ctx.disabled),
    background: (__VLS_ctx.background),
    layout: "total, sizes, prev, pager, next, jumper",
    total: (400),
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
let __VLS_63;
let __VLS_64;
let __VLS_65;
const __VLS_66 = {
    onSizeChange: (__VLS_ctx.handleSizeChange)
};
const __VLS_67 = {
    onCurrentChange: (__VLS_ctx.handleCurrentChange)
};
var __VLS_62;
var __VLS_3;
const __VLS_68 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
const __VLS_70 = __VLS_69({}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_71.slots.default;
const __VLS_72 = {}.Config;
/** @type {[typeof __VLS_components.Config, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_74 = __VLS_73({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
var __VLS_71;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-pagination-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-pagination-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-pagination-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-pagination-block']} */ ;
/** @type {__VLS_StyleScopedClasses['demonstration']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            currentPage1: currentPage1,
            currentPage2: currentPage2,
            currentPage3: currentPage3,
            currentPage4: currentPage4,
            pageSize2: pageSize2,
            pageSize3: pageSize3,
            pageSize4: pageSize4,
            size: size,
            background: background,
            disabled: disabled,
            handleSizeChange: handleSizeChange,
            handleCurrentChange: handleCurrentChange,
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
