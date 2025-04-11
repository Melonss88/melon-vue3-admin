import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const configData = [
    {
        name: 'title',
        declare: '标题',
        type: 'string',
        default: '—'
    },
    {
        name: 'confirm-button-text',
        declare: '确认按钮文字',
        type: 'string',
        default: '—'
    },
    {
        name: 'cancel-button-text',
        declare: '取消按钮文字',
        type: 'string',
        default: '—'
    },
    {
        name: 'confirm-button-type',
        declare: '确认按钮类型',
        type: 'enum',
        default: "'primary'",
        options: ['primary', 'success', 'warning', 'danger', 'info', 'text']
    },
    {
        name: 'cancel-button-type',
        declare: '取消按钮类型',
        type: 'enum',
        default: "'text'",
        options: ['primary', 'success', 'warning', 'danger', 'info', 'text']
    },
    {
        name: 'icon',
        declare: '自定义图标',
        type: 'string / Component',
        default: 'QuestionFilled'
    },
    {
        name: 'icon-color',
        declare: 'Icon 颜色',
        type: 'string',
        default: "'#f90'"
    },
    {
        name: 'hide-icon',
        declare: '是否隐藏 Icon',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'hide-after',
        declare: '关闭时的延迟',
        type: 'number',
        default: '200'
    },
    {
        name: 'teleported',
        declare: '是否将 popover 的下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'persistent',
        declare: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时，popover 将会被删除',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'width',
        declare: '弹层宽度，最小宽度 150px',
        type: 'string / number',
        default: '150'
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
    title: "Popconfirm 气泡确认框",
}));
const __VLS_5 = __VLS_4({
    title: "Popconfirm 气泡确认框",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "popconfirm-base-box" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row center" },
});
const __VLS_7 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    ...{ class: "box-item" },
    title: "Top Left prompts info",
    placement: "top-start",
}));
const __VLS_9 = __VLS_8({
    ...{ class: "box-item" },
    title: "Top Left prompts info",
    placement: "top-start",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_10.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_10.slots;
    const __VLS_11 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
    const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_14.slots.default;
    var __VLS_14;
}
var __VLS_10;
const __VLS_15 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    ...{ class: "box-item" },
    title: "Top Center prompts info",
    placement: "top",
}));
const __VLS_17 = __VLS_16({
    ...{ class: "box-item" },
    title: "Top Center prompts info",
    placement: "top",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_18.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_18.slots;
    const __VLS_19 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_22.slots.default;
    var __VLS_22;
}
var __VLS_18;
const __VLS_23 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    ...{ class: "box-item" },
    title: "Top Right prompts info",
    placement: "top-end",
}));
const __VLS_25 = __VLS_24({
    ...{ class: "box-item" },
    title: "Top Right prompts info",
    placement: "top-end",
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_26.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_26.slots;
    const __VLS_27 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({}));
    const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
    __VLS_30.slots.default;
    var __VLS_30;
}
var __VLS_26;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row" },
});
const __VLS_31 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({
    ...{ class: "box-item" },
    title: "Left Top prompts info",
    placement: "left-start",
}));
const __VLS_33 = __VLS_32({
    ...{ class: "box-item" },
    title: "Left Top prompts info",
    placement: "left-start",
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
__VLS_34.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_34.slots;
    const __VLS_35 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    __VLS_38.slots.default;
    var __VLS_38;
}
var __VLS_34;
const __VLS_39 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({
    ...{ class: "box-item" },
    title: "Right Top prompts info",
    placement: "right-start",
}));
const __VLS_41 = __VLS_40({
    ...{ class: "box-item" },
    title: "Right Top prompts info",
    placement: "right-start",
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
__VLS_42.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_42.slots;
    const __VLS_43 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
    const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
    __VLS_46.slots.default;
    var __VLS_46;
}
var __VLS_42;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row" },
});
const __VLS_47 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
    ...{ class: "box-item" },
    title: "Left Center prompts info",
    placement: "left",
}));
const __VLS_49 = __VLS_48({
    ...{ class: "box-item" },
    title: "Left Center prompts info",
    placement: "left",
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
__VLS_50.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_50.slots;
    const __VLS_51 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
        ...{ class: "mt-3 mb-3" },
    }));
    const __VLS_53 = __VLS_52({
        ...{ class: "mt-3 mb-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    __VLS_54.slots.default;
    var __VLS_54;
}
var __VLS_50;
const __VLS_55 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
    ...{ class: "box-item" },
    title: "Right Center prompts info",
    placement: "right",
}));
const __VLS_57 = __VLS_56({
    ...{ class: "box-item" },
    title: "Right Center prompts info",
    placement: "right",
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
__VLS_58.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_58.slots;
    const __VLS_59 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({}));
    const __VLS_61 = __VLS_60({}, ...__VLS_functionalComponentArgsRest(__VLS_60));
    __VLS_62.slots.default;
    var __VLS_62;
}
var __VLS_58;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row" },
});
const __VLS_63 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({
    ...{ class: "box-item" },
    title: "Left Bottom prompts info",
    placement: "left-end",
}));
const __VLS_65 = __VLS_64({
    ...{ class: "box-item" },
    title: "Left Bottom prompts info",
    placement: "left-end",
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
__VLS_66.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_66.slots;
    const __VLS_67 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({}));
    const __VLS_69 = __VLS_68({}, ...__VLS_functionalComponentArgsRest(__VLS_68));
    __VLS_70.slots.default;
    var __VLS_70;
}
var __VLS_66;
const __VLS_71 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({
    ...{ class: "box-item" },
    title: "Right Bottom prompts info",
    placement: "right-end",
}));
const __VLS_73 = __VLS_72({
    ...{ class: "box-item" },
    title: "Right Bottom prompts info",
    placement: "right-end",
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
__VLS_74.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_74.slots;
    const __VLS_75 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({}));
    const __VLS_77 = __VLS_76({}, ...__VLS_functionalComponentArgsRest(__VLS_76));
    __VLS_78.slots.default;
    var __VLS_78;
}
var __VLS_74;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row center" },
});
const __VLS_79 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({
    ...{ class: "box-item" },
    title: "Bottom Left prompts info",
    placement: "bottom-start",
}));
const __VLS_81 = __VLS_80({
    ...{ class: "box-item" },
    title: "Bottom Left prompts info",
    placement: "bottom-start",
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
__VLS_82.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_82.slots;
    const __VLS_83 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({}));
    const __VLS_85 = __VLS_84({}, ...__VLS_functionalComponentArgsRest(__VLS_84));
    __VLS_86.slots.default;
    var __VLS_86;
}
var __VLS_82;
const __VLS_87 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({
    ...{ class: "box-item" },
    title: "Bottom Center prompts info",
    placement: "bottom",
}));
const __VLS_89 = __VLS_88({
    ...{ class: "box-item" },
    title: "Bottom Center prompts info",
    placement: "bottom",
}, ...__VLS_functionalComponentArgsRest(__VLS_88));
__VLS_90.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_90.slots;
    const __VLS_91 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({}));
    const __VLS_93 = __VLS_92({}, ...__VLS_functionalComponentArgsRest(__VLS_92));
    __VLS_94.slots.default;
    var __VLS_94;
}
var __VLS_90;
const __VLS_95 = {}.ElPopconfirm;
/** @type {[typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, typeof __VLS_components.ElPopconfirm, typeof __VLS_components.elPopconfirm, ]} */ ;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({
    ...{ class: "box-item" },
    title: "Bottom Right prompts info",
    placement: "bottom-end",
}));
const __VLS_97 = __VLS_96({
    ...{ class: "box-item" },
    title: "Bottom Right prompts info",
    placement: "bottom-end",
}, ...__VLS_functionalComponentArgsRest(__VLS_96));
__VLS_98.slots.default;
{
    const { reference: __VLS_thisSlot } = __VLS_98.slots;
    const __VLS_99 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({}));
    const __VLS_101 = __VLS_100({}, ...__VLS_functionalComponentArgsRest(__VLS_100));
    __VLS_102.slots.default;
    var __VLS_102;
}
var __VLS_98;
var __VLS_3;
const __VLS_103 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({}));
const __VLS_105 = __VLS_104({}, ...__VLS_functionalComponentArgsRest(__VLS_104));
__VLS_106.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_107 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_108 = __VLS_107({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_107));
var __VLS_106;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['popconfirm-base-box']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['center']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['center']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
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
