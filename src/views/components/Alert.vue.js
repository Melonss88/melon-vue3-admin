import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const configData = [
    {
        name: 'title',
        declare: 'Alert 标题',
        type: 'string',
        default: '—'
    },
    {
        name: 'type',
        declare: 'Alert 类型',
        type: 'enum',
        default: 'info',
        options: ['success', 'warning', 'info', 'error']
    },
    {
        name: 'description',
        declare: '描述性文本',
        type: 'string',
        default: '—'
    },
    {
        name: 'closable',
        declare: '是否可以关闭',
        type: 'boolean',
        default: true
    },
    {
        name: 'center',
        declare: '文字是否居中',
        type: 'boolean',
        default: false
    },
    {
        name: 'close-text',
        declare: '自定义关闭按钮文本',
        type: 'string',
        default: '—'
    },
    {
        name: 'show-icon',
        declare: '是否显示类型图标',
        type: 'boolean',
        default: false
    },
    {
        name: 'effect',
        declare: '主题样式',
        type: 'enum',
        default: 'light',
        options: ['light', 'dark']
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['el-alert']} */ ;
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
    title: "提示弹窗",
}));
const __VLS_5 = __VLS_4({
    title: "提示弹窗",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
const __VLS_7 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    title: "Success alert",
    type: "success",
    effect: "dark",
}));
const __VLS_9 = __VLS_8({
    title: "Success alert",
    type: "success",
    effect: "dark",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const __VLS_11 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    title: "Info alert",
    type: "info",
    effect: "dark",
}));
const __VLS_13 = __VLS_12({
    title: "Info alert",
    type: "info",
    effect: "dark",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const __VLS_15 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    title: "Warning alert",
    type: "warning",
    effect: "dark",
}));
const __VLS_17 = __VLS_16({
    title: "Warning alert",
    type: "warning",
    effect: "dark",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const __VLS_19 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    title: "Error alert",
    type: "error",
    effect: "dark",
}));
const __VLS_21 = __VLS_20({
    title: "Error alert",
    type: "error",
    effect: "dark",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
var __VLS_3;
const __VLS_23 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({}));
const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_26.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
const __VLS_27 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
    title: "Success alert",
    type: "success",
    description: "More text description",
    showIcon: true,
}));
const __VLS_29 = __VLS_28({
    title: "Success alert",
    type: "success",
    description: "More text description",
    showIcon: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
const __VLS_31 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({
    title: "Info alert",
    type: "info",
    description: "More text description",
    showIcon: true,
}));
const __VLS_33 = __VLS_32({
    title: "Info alert",
    type: "info",
    description: "More text description",
    showIcon: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const __VLS_35 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    title: "Warning alert",
    type: "warning",
    description: "More text description",
    showIcon: true,
}));
const __VLS_37 = __VLS_36({
    title: "Warning alert",
    type: "warning",
    description: "More text description",
    showIcon: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
const __VLS_39 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({
    title: "Error alert",
    type: "error",
    description: "More text description",
    showIcon: true,
}));
const __VLS_41 = __VLS_40({
    title: "Error alert",
    type: "error",
    description: "More text description",
    showIcon: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
var __VLS_26;
const __VLS_43 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
__VLS_46.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_47 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_48 = __VLS_47({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_47));
var __VLS_46;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
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
