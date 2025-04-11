import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
import { ref } from 'vue';
const value = ref('');
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
        disabled: true,
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
];
const configData = [
    {
        name: 'model-value / v-model',
        declare: '选中项绑定值',
        type: 'string / number / boolean / object / array',
        default: '—'
    },
    {
        name: 'multiple',
        declare: '是否多选',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'disabled',
        declare: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'value-key',
        declare: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
        type: 'string',
        default: 'value'
    },
    {
        name: 'size',
        declare: '输入框尺寸',
        type: 'enum',
        default: '—',
        options: ['large', 'default', 'small']
    },
    {
        name: 'clearable',
        declare: '是否可以清空选项',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'collapse-tags',
        declare: '多选时是否将选中值按文字的形式展示',
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
        name: 'multiple-limit',
        declare: 'multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数，为 0 则不限制',
        type: 'number',
        default: '0'
    },
    {
        name: 'name',
        declare: 'Select 输入框的原生 name 属性',
        type: 'string',
        default: '—'
    },
    {
        name: 'effect',
        declare: 'tooltip 主题，内置了 dark / light 两种',
        type: 'enum / string',
        default: 'light',
        options: ['dark', 'light']
    },
    {
        name: 'autocomplete',
        declare: 'Select 输入框的原生 autocomplete 属性',
        type: 'string',
        default: 'off'
    },
    {
        name: 'placeholder',
        declare: '占位符，默认为"Select"',
        type: 'string',
        default: '—'
    },
    {
        name: 'filterable',
        declare: 'Select 组件是否可筛选',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'allow-create',
        declare: '是否允许用户创建新条目，只有当 filterable 设置为 true 时才会生效',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'filter-method',
        declare: '自定义筛选方法',
        type: 'Function',
        default: '—'
    },
    {
        name: 'remote',
        declare: '其中的选项是否从服务器远程加载',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'remote-method',
        declare: '自定义远程搜索方法',
        type: 'Function',
        default: '—'
    },
    {
        name: 'remote-show-suffix',
        declare: '远程搜索方法显示后缀图标',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'loading',
        declare: '是否正在从远程获取数据',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'loading-text',
        declare: '从服务器加载数据时显示的文本，默认为"Loading"',
        type: 'string',
        default: '—'
    },
    {
        name: 'no-match-text',
        declare: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 "No matching data"',
        type: 'string',
        default: '—'
    },
    {
        name: 'no-data-text',
        declare: '无选项时显示的文字，也可以使用 empty 插槽设置自定义内容，默认是 "No data"',
        type: 'string',
        default: '—'
    },
    {
        name: 'popper-class',
        declare: '选择器下拉菜单的自定义类名',
        type: 'string',
        default: "''"
    },
    {
        name: 'reserve-keyword',
        declare: '当 multiple 和 filterable被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'default-first-option',
        declare: '是否在输入框按下回车时，选择第一个匹配项。需配合 filterable 或 remote 使用',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'teleported',
        declare: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'append-to',
        declare: '下拉框挂载到哪个 DOM 元素',
        type: 'string',
        default: '—'
    },
    {
        name: 'persistent',
        declare: '当下拉选择器未被激活并且persistent设置为false，选择器会被删除',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'automatic-dropdown',
        declare: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'clear-icon',
        declare: '自定义清除图标',
        type: 'string / object',
        default: 'CircleClose'
    },
    {
        name: 'fit-input-width',
        declare: '下拉框的宽度是否与输入框相同',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'suffix-icon',
        declare: '自定义后缀图标组件',
        type: 'string / object',
        default: 'ArrowDown'
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
        declare: '标签效果',
        type: 'enum',
        default: 'light',
        options: ['dark', 'light', 'plain']
    },
    {
        name: 'validate-event',
        declare: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'offset',
        declare: '下拉面板偏移量',
        type: 'number',
        default: '12'
    },
    {
        name: 'show-arrow',
        declare: '下拉菜单的内容是否有箭头',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'placement',
        declare: '下拉框出现的位置',
        type: 'enum',
        default: 'bottom-start',
        options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
    },
    {
        name: 'fallback-placements',
        declare: 'dropdown 可用的 positions 请查看popper.js 文档',
        type: 'array',
        default: "['bottom-start', 'top-start', 'right', 'left']"
    },
    {
        name: 'max-collapse-tags',
        declare: '需要显示的 Tag 的最大数量 只有当 collapse-tags 设置为 true 时才会生效',
        type: 'number',
        default: '1'
    },
    {
        name: 'popper-options',
        declare: 'popper.js 参数',
        type: 'object',
        default: '{}'
    },
    {
        name: 'aria-label',
        declare: '等价于原生 input aria-label 属性',
        type: 'string',
        default: '—'
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
        name: 'suffix-transition',
        declare: '下拉菜单显示/消失时后缀图标的动画',
        type: 'boolean',
        default: 'true',
        deprecated: true
    },
    {
        name: 'tabindex',
        declare: 'input 的 tabindex',
        type: 'string / number',
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
    title: "Select 选择器",
}));
const __VLS_5 = __VLS_4({
    title: "Select 选择器",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const __VLS_7 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    modelValue: (__VLS_ctx.value),
    placeholder: "Select",
    ...{ style: {} },
}));
const __VLS_9 = __VLS_8({
    modelValue: (__VLS_ctx.value),
    placeholder: "Select",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_10.slots.default;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.options))) {
    const __VLS_11 = {}.ElOption;
    /** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
        key: (item.value),
        label: (item.label),
        value: (item.value),
        disabled: (item.disabled),
    }));
    const __VLS_13 = __VLS_12({
        key: (item.value),
        label: (item.label),
        value: (item.value),
        disabled: (item.disabled),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
}
var __VLS_10;
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
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            value: value,
            options: options,
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
