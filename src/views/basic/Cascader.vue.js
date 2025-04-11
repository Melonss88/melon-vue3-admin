import { ref } from 'vue';
import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const value = ref([]);
const props = {
    expandTrigger: 'hover',
};
const handleChange = (value) => {
    console.log(value);
};
const options = [
    {
        value: 'guide',
        label: 'Guide',
        children: [
            {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                    {
                        value: 'consistency',
                        label: 'Consistency',
                    },
                    {
                        value: 'feedback',
                        label: 'Feedback',
                    },
                    {
                        value: 'efficiency',
                        label: 'Efficiency',
                    },
                    {
                        value: 'controllability',
                        label: 'Controllability',
                    },
                ],
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'side nav',
                        label: 'Side Navigation',
                    },
                    {
                        value: 'top nav',
                        label: 'Top Navigation',
                    },
                ],
            },
        ],
    },
    {
        value: 'component',
        label: 'Component',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout',
                    },
                    {
                        value: 'color',
                        label: 'Color',
                    },
                    {
                        value: 'typography',
                        label: 'Typography',
                    },
                    {
                        value: 'icon',
                        label: 'Icon',
                    },
                    {
                        value: 'button',
                        label: 'Button',
                    },
                ],
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio',
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox',
                    },
                    {
                        value: 'input',
                        label: 'Input',
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber',
                    },
                    {
                        value: 'select',
                        label: 'Select',
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader',
                    },
                    {
                        value: 'switch',
                        label: 'Switch',
                    },
                    {
                        value: 'slider',
                        label: 'Slider',
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker',
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker',
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker',
                    },
                    {
                        value: 'upload',
                        label: 'Upload',
                    },
                    {
                        value: 'rate',
                        label: 'Rate',
                    },
                    {
                        value: 'form',
                        label: 'Form',
                    },
                ],
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table',
                    },
                    {
                        value: 'tag',
                        label: 'Tag',
                    },
                    {
                        value: 'progress',
                        label: 'Progress',
                    },
                    {
                        value: 'tree',
                        label: 'Tree',
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination',
                    },
                    {
                        value: 'badge',
                        label: 'Badge',
                    },
                ],
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert',
                    },
                    {
                        value: 'loading',
                        label: 'Loading',
                    },
                    {
                        value: 'message',
                        label: 'Message',
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox',
                    },
                    {
                        value: 'notification',
                        label: 'Notification',
                    },
                ],
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'Menu',
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs',
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb',
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown',
                    },
                    {
                        value: 'steps',
                        label: 'Steps',
                    },
                ],
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog',
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip',
                    },
                    {
                        value: 'popover',
                        label: 'Popover',
                    },
                    {
                        value: 'card',
                        label: 'Card',
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel',
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse',
                    },
                ],
            },
        ],
    },
    {
        value: 'resource',
        label: 'Resource',
        children: [
            {
                value: 'axure',
                label: 'Axure Components',
            },
            {
                value: 'sketch',
                label: 'Sketch Templates',
            },
            {
                value: 'docs',
                label: 'Design Documentation',
            },
        ],
    },
];
const configData = [
    {
        name: 'model-value / v-model',
        declare: '选中项绑定值',
        type: 'string / number / object',
        default: '—'
    },
    {
        name: 'options',
        declare: '选项的数据源，value 和 label 可以通过 CascaderProps 自定义',
        type: 'object',
        default: '—'
    },
    {
        name: 'props',
        declare: '配置选项，请参阅下面 CascaderProps 表',
        type: 'object',
        default: '—'
    },
    {
        name: 'size',
        declare: '尺寸',
        type: 'enum',
        default: '—',
        options: ['large', 'default', 'small']
    },
    {
        name: 'placeholder',
        declare: '输入框占位文本',
        type: 'string',
        default: '—'
    },
    {
        name: 'disabled',
        declare: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'clearable',
        declare: '是否支持清空选项',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'show-all-levels',
        declare: '输入框中是否显示选中值的完整路径',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'collapse-tags',
        declare: '多选模式下是否折叠Tag',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'collapse-tags-tooltip',
        declare: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。要使用此属性，collapse-tags属性必须设定为 true',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'separator',
        declare: '用于分隔选项的字符',
        type: 'string',
        default: "' / '"
    },
    {
        name: 'filterable',
        declare: '该选项是否可以被搜索',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'filter-method',
        declare: '自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项',
        type: 'Function',
        default: '—'
    },
    {
        name: 'debounce',
        declare: '搜索关键词正在输入时的去抖延迟，单位为毫秒',
        type: 'number',
        default: '300'
    },
    {
        name: 'before-filter',
        declare: '过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。',
        type: 'Function',
        default: '—'
    },
    {
        name: 'popper-class',
        declare: '弹出内容的自定义类名',
        type: 'string',
        default: "''"
    },
    {
        name: 'teleported',
        declare: '弹层是否使用 teleport',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'tag-type',
        declare: '标签类型',
        type: 'enum',
        default: 'info',
        options: ['success', 'info', 'warning', 'danger']
    },
    {
        name: 'tag-effect',
        declare: 'tag effect',
        type: 'enum',
        default: 'light',
        options: ['dark', 'light', 'plain']
    },
    {
        name: 'validate-event',
        declare: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'max-collapse-tags',
        declare: '需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效。',
        type: 'number',
        default: '1'
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
        name: 'persistent',
        declare: '当下拉框未被激活并且persistent设置为false，下拉框容器会被删除。',
        type: 'boolean',
        default: 'true'
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
        default: 'bottom-start',
        options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
    },
    {
        name: 'popper-append-to-body',
        declare: '是否将弹出的内容直接插入到 body 元素。在弹出内容的边框定位出现问题时，可将该属性设置为 false',
        type: 'boolean',
        default: 'true',
        deprecated: true
    }
];
const configData2 = [
    {
        name: 'change',
        declare: '当绑定值变化时触发的事件',
        type: 'Function',
    },
    {
        name: 'expand-change',
        declare: '当展开节点发生变化时触发',
        type: 'Function',
    },
    {
        name: 'blur',
        declare: '当失去焦点时触发',
        type: 'Function',
    },
    {
        name: 'focus',
        declare: '当获得焦点时触发',
        type: 'Function',
    },
    {
        name: 'clear 2.7.7',
        declare: '可清空的单选模式下用户点击清空按钮时触发',
        type: 'Function',
    },
    {
        name: 'visible-change',
        declare: '下拉框出现/隐藏时触发',
        type: 'Function',
    },
    {
        name: 'remove-tag',
        declare: '在多选模式下，移除Tag时触发',
        type: 'Function',
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
    title: "级联选择器",
}));
const __VLS_5 = __VLS_4({
    title: "级联选择器",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "m-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
const __VLS_7 = {}.ElCascader;
/** @type {[typeof __VLS_components.ElCascader, typeof __VLS_components.elCascader, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    ...{ 'onChange': {} },
    modelValue: (__VLS_ctx.value),
    options: (__VLS_ctx.options),
}));
const __VLS_9 = __VLS_8({
    ...{ 'onChange': {} },
    modelValue: (__VLS_ctx.value),
    options: (__VLS_ctx.options),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_11;
let __VLS_12;
let __VLS_13;
const __VLS_14 = {
    onChange: (__VLS_ctx.handleChange)
};
var __VLS_10;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "m-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
const __VLS_15 = {}.ElCascader;
/** @type {[typeof __VLS_components.ElCascader, typeof __VLS_components.elCascader, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    ...{ 'onChange': {} },
    modelValue: (__VLS_ctx.value),
    options: (__VLS_ctx.options),
    props: (__VLS_ctx.props),
}));
const __VLS_17 = __VLS_16({
    ...{ 'onChange': {} },
    modelValue: (__VLS_ctx.value),
    options: (__VLS_ctx.options),
    props: (__VLS_ctx.props),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_19;
let __VLS_20;
let __VLS_21;
const __VLS_22 = {
    onChange: (__VLS_ctx.handleChange)
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
    configTtitle: "事件",
}));
const __VLS_35 = __VLS_34({
    tableData: (__VLS_ctx.configData2),
    isEvent: (true),
    configTtitle: "事件",
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
var __VLS_33;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['m-4']} */ ;
/** @type {__VLS_StyleScopedClasses['m-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            value: value,
            props: props,
            handleChange: handleChange,
            options: options,
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
