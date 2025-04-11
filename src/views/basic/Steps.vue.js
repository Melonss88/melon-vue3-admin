import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
const configData = [
    {
        name: 'space',
        declare: '每个 step 的间距，不填写将自适应间距。支持百分比',
        type: 'number / string',
        default: "''"
    },
    {
        name: 'direction',
        declare: '显示方向',
        type: 'enum',
        default: "'horizontal'",
        options: ['horizontal', 'vertical']
    },
    {
        name: 'active',
        declare: '设置当前激活步骤',
        type: 'number',
        default: '0'
    },
    {
        name: 'process-status',
        declare: '设置当前步骤的状态',
        type: 'enum',
        default: "'process'",
        options: ['wait', 'process', 'finish', 'error', 'success']
    },
    {
        name: 'finish-status',
        declare: '设置结束步骤的状态',
        type: 'enum',
        default: "'finish'",
        options: ['wait', 'process', 'finish', 'error', 'success']
    },
    {
        name: 'align-center',
        declare: '进行居中对齐',
        type: 'boolean',
        default: '—'
    },
    {
        name: 'simple',
        declare: '是否应用简洁风格',
        type: 'boolean',
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
    title: "Steps 步骤条",
}));
const __VLS_5 = __VLS_4({
    title: "Steps 步骤条",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const __VLS_7 = {}.ElSteps;
/** @type {[typeof __VLS_components.ElSteps, typeof __VLS_components.elSteps, typeof __VLS_components.ElSteps, typeof __VLS_components.elSteps, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    ...{ style: {} },
    active: (2),
    alignCenter: true,
}));
const __VLS_9 = __VLS_8({
    ...{ style: {} },
    active: (2),
    alignCenter: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_10.slots.default;
const __VLS_11 = {}.ElStep;
/** @type {[typeof __VLS_components.ElStep, typeof __VLS_components.elStep, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    title: "Step 1",
    description: "Some description",
}));
const __VLS_13 = __VLS_12({
    title: "Step 1",
    description: "Some description",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const __VLS_15 = {}.ElStep;
/** @type {[typeof __VLS_components.ElStep, typeof __VLS_components.elStep, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    title: "Step 2",
    description: "Some description",
}));
const __VLS_17 = __VLS_16({
    title: "Step 2",
    description: "Some description",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const __VLS_19 = {}.ElStep;
/** @type {[typeof __VLS_components.ElStep, typeof __VLS_components.elStep, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    title: "Step 3",
    description: "Some description",
}));
const __VLS_21 = __VLS_20({
    title: "Step 3",
    description: "Some description",
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
