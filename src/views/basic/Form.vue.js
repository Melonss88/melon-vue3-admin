import { reactive } from 'vue';
import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});
const onSubmit = () => {
    console.log('submit!');
};
const configData = [
    {
        name: 'model',
        declare: '表单数据对象',
        type: 'object',
        default: '—'
    },
    {
        name: 'rules',
        declare: '表单验证规则',
        type: 'object',
        default: '—'
    },
    {
        name: 'inline',
        declare: '行内表单模式',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'label-position',
        declare: '表单域标签的位置，当设置为 left 或 right 时，则也需要设置 label-width 属性',
        type: 'enum',
        default: 'right',
        options: ['left', 'right', 'top']
    },
    {
        name: 'label-width',
        declare: '标签的长度，例如 "50px"。作为 Form 直接子元素的 form-item 会继承该值。可以使用 auto。',
        type: 'string / number',
        default: "''"
    },
    {
        name: 'label-suffix',
        declare: '表单域标签的后缀',
        type: 'string',
        default: "''"
    },
    {
        name: 'hide-required-asterisk',
        declare: '是否隐藏必填字段标签旁边的红色星号。',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'require-asterisk-position',
        declare: '星号的位置。',
        type: 'enum',
        default: 'left',
        options: ['left', 'right']
    },
    {
        name: 'show-message',
        declare: '是否显示校验错误信息',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'inline-message',
        declare: '是否以行内形式展示校验信息',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'status-icon',
        declare: '是否在输入框中显示校验结果反馈图标',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'validate-on-rule-change',
        declare: '是否在 rules 属性改变后立即触发一次验证',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'size',
        declare: '用于控制该表单内组件的尺寸',
        type: 'enum',
        default: '—',
        options: ['large', 'default', 'small']
    },
    {
        name: 'disabled',
        declare: '是否禁用该表单内的所有组件。如果设置为 true，它将覆盖内部组件的 disabled 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'scroll-to-error',
        declare: '当校验失败时，滚动到第一个错误表单项',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'scroll-into-view-options',
        declare: '当校验有失败结果时，滚动到第一个失败的表单项目 可通过 scrollIntoView 配置',
        type: 'object / boolean',
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
    title: "Form表单",
}));
const __VLS_5 = __VLS_4({
    title: "Form表单",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const __VLS_7 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    model: (__VLS_ctx.form),
    labelWidth: "auto",
    ...{ style: {} },
}));
const __VLS_9 = __VLS_8({
    model: (__VLS_ctx.form),
    labelWidth: "auto",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_10.slots.default;
const __VLS_11 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    label: "Activity name",
}));
const __VLS_13 = __VLS_12({
    label: "Activity name",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_14.slots.default;
const __VLS_15 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.form.name),
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.form.name),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
var __VLS_14;
const __VLS_19 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    label: "Activity zone",
}));
const __VLS_21 = __VLS_20({
    label: "Activity zone",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_22.slots.default;
const __VLS_23 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    modelValue: (__VLS_ctx.form.region),
    placeholder: "please select your zone",
}));
const __VLS_25 = __VLS_24({
    modelValue: (__VLS_ctx.form.region),
    placeholder: "please select your zone",
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_26.slots.default;
const __VLS_27 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
    label: "Zone one",
    value: "shanghai",
}));
const __VLS_29 = __VLS_28({
    label: "Zone one",
    value: "shanghai",
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
const __VLS_31 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({
    label: "Zone two",
    value: "beijing",
}));
const __VLS_33 = __VLS_32({
    label: "Zone two",
    value: "beijing",
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
var __VLS_26;
var __VLS_22;
const __VLS_35 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    label: "Activity time",
}));
const __VLS_37 = __VLS_36({
    label: "Activity time",
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
__VLS_38.slots.default;
const __VLS_39 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({
    span: (11),
}));
const __VLS_41 = __VLS_40({
    span: (11),
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
__VLS_42.slots.default;
const __VLS_43 = {}.ElDatePicker;
/** @type {[typeof __VLS_components.ElDatePicker, typeof __VLS_components.elDatePicker, ]} */ ;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({
    modelValue: (__VLS_ctx.form.date1),
    type: "date",
    placeholder: "Pick a date",
    ...{ style: {} },
}));
const __VLS_45 = __VLS_44({
    modelValue: (__VLS_ctx.form.date1),
    type: "date",
    placeholder: "Pick a date",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
var __VLS_42;
const __VLS_47 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
    span: (2),
    ...{ class: "text-center" },
}));
const __VLS_49 = __VLS_48({
    span: (2),
    ...{ class: "text-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
__VLS_50.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-gray-500" },
});
var __VLS_50;
const __VLS_51 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
    span: (11),
}));
const __VLS_53 = __VLS_52({
    span: (11),
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
__VLS_54.slots.default;
const __VLS_55 = {}.ElTimePicker;
/** @type {[typeof __VLS_components.ElTimePicker, typeof __VLS_components.elTimePicker, ]} */ ;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
    modelValue: (__VLS_ctx.form.date2),
    placeholder: "Pick a time",
    ...{ style: {} },
}));
const __VLS_57 = __VLS_56({
    modelValue: (__VLS_ctx.form.date2),
    placeholder: "Pick a time",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
var __VLS_54;
var __VLS_38;
const __VLS_59 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
    label: "Instant delivery",
}));
const __VLS_61 = __VLS_60({
    label: "Instant delivery",
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
__VLS_62.slots.default;
const __VLS_63 = {}.ElSwitch;
/** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({
    modelValue: (__VLS_ctx.form.delivery),
}));
const __VLS_65 = __VLS_64({
    modelValue: (__VLS_ctx.form.delivery),
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
var __VLS_62;
const __VLS_67 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({
    label: "Activity type",
}));
const __VLS_69 = __VLS_68({
    label: "Activity type",
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
__VLS_70.slots.default;
const __VLS_71 = {}.ElCheckboxGroup;
/** @type {[typeof __VLS_components.ElCheckboxGroup, typeof __VLS_components.elCheckboxGroup, typeof __VLS_components.ElCheckboxGroup, typeof __VLS_components.elCheckboxGroup, ]} */ ;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({
    modelValue: (__VLS_ctx.form.type),
}));
const __VLS_73 = __VLS_72({
    modelValue: (__VLS_ctx.form.type),
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
__VLS_74.slots.default;
const __VLS_75 = {}.ElCheckbox;
/** @type {[typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, ]} */ ;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({
    value: "Online activities",
    name: "type",
}));
const __VLS_77 = __VLS_76({
    value: "Online activities",
    name: "type",
}, ...__VLS_functionalComponentArgsRest(__VLS_76));
__VLS_78.slots.default;
var __VLS_78;
const __VLS_79 = {}.ElCheckbox;
/** @type {[typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, ]} */ ;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({
    value: "Promotion activities",
    name: "type",
}));
const __VLS_81 = __VLS_80({
    value: "Promotion activities",
    name: "type",
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
__VLS_82.slots.default;
var __VLS_82;
const __VLS_83 = {}.ElCheckbox;
/** @type {[typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, ]} */ ;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({
    value: "Offline activities",
    name: "type",
}));
const __VLS_85 = __VLS_84({
    value: "Offline activities",
    name: "type",
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
__VLS_86.slots.default;
var __VLS_86;
const __VLS_87 = {}.ElCheckbox;
/** @type {[typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, ]} */ ;
// @ts-ignore
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({
    value: "Simple brand exposure",
    name: "type",
}));
const __VLS_89 = __VLS_88({
    value: "Simple brand exposure",
    name: "type",
}, ...__VLS_functionalComponentArgsRest(__VLS_88));
__VLS_90.slots.default;
var __VLS_90;
var __VLS_74;
var __VLS_70;
const __VLS_91 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({
    label: "Resources",
}));
const __VLS_93 = __VLS_92({
    label: "Resources",
}, ...__VLS_functionalComponentArgsRest(__VLS_92));
__VLS_94.slots.default;
const __VLS_95 = {}.ElRadioGroup;
/** @type {[typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, ]} */ ;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({
    modelValue: (__VLS_ctx.form.resource),
}));
const __VLS_97 = __VLS_96({
    modelValue: (__VLS_ctx.form.resource),
}, ...__VLS_functionalComponentArgsRest(__VLS_96));
__VLS_98.slots.default;
const __VLS_99 = {}.ElRadio;
/** @type {[typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, ]} */ ;
// @ts-ignore
const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({
    value: "Sponsor",
}));
const __VLS_101 = __VLS_100({
    value: "Sponsor",
}, ...__VLS_functionalComponentArgsRest(__VLS_100));
__VLS_102.slots.default;
var __VLS_102;
const __VLS_103 = {}.ElRadio;
/** @type {[typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, ]} */ ;
// @ts-ignore
const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({
    value: "Venue",
}));
const __VLS_105 = __VLS_104({
    value: "Venue",
}, ...__VLS_functionalComponentArgsRest(__VLS_104));
__VLS_106.slots.default;
var __VLS_106;
var __VLS_98;
var __VLS_94;
const __VLS_107 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({
    label: "Activity form",
}));
const __VLS_109 = __VLS_108({
    label: "Activity form",
}, ...__VLS_functionalComponentArgsRest(__VLS_108));
__VLS_110.slots.default;
const __VLS_111 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({
    modelValue: (__VLS_ctx.form.desc),
    type: "textarea",
}));
const __VLS_113 = __VLS_112({
    modelValue: (__VLS_ctx.form.desc),
    type: "textarea",
}, ...__VLS_functionalComponentArgsRest(__VLS_112));
var __VLS_110;
const __VLS_115 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({}));
const __VLS_117 = __VLS_116({}, ...__VLS_functionalComponentArgsRest(__VLS_116));
__VLS_118.slots.default;
const __VLS_119 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({
    ...{ 'onClick': {} },
    type: "primary",
}));
const __VLS_121 = __VLS_120({
    ...{ 'onClick': {} },
    type: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_120));
let __VLS_123;
let __VLS_124;
let __VLS_125;
const __VLS_126 = {
    onClick: (__VLS_ctx.onSubmit)
};
__VLS_122.slots.default;
var __VLS_122;
const __VLS_127 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({}));
const __VLS_129 = __VLS_128({}, ...__VLS_functionalComponentArgsRest(__VLS_128));
__VLS_130.slots.default;
var __VLS_130;
var __VLS_118;
var __VLS_10;
var __VLS_3;
const __VLS_131 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_132 = __VLS_asFunctionalComponent(__VLS_131, new __VLS_131({}));
const __VLS_133 = __VLS_132({}, ...__VLS_functionalComponentArgsRest(__VLS_132));
__VLS_134.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_135 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_136 = __VLS_135({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_135));
var __VLS_134;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            form: form,
            onSubmit: onSubmit,
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
