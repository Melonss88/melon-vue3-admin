const configData = [
    {
        name: 'percentage',
        declare: '进度百分比（必填）',
        type: 'number',
        default: 0,
        required: true
    },
    {
        name: 'type',
        declare: '进度条类型',
        type: 'enum',
        options: ['line', 'circle', 'dashboard'],
        default: 'line'
    },
    {
        name: 'stroke-width',
        declare: '进度条的宽度',
        type: 'number',
        default: 6
    },
    {
        name: 'text-inside',
        declare: '进度条显示文字内置在进度条内（仅 type 为 line 时可用）',
        type: 'boolean',
        default: false
    },
    {
        name: 'status',
        declare: '进度条当前状态',
        type: 'enum',
        options: ['success', 'exception', 'warning'],
        default: '—'
    },
    {
        name: 'indeterminate',
        declare: '是否为动画进度条',
        type: 'boolean',
        default: false
    },
    {
        name: 'duration',
        declare: '控制动画进度条速度和条纹进度条流动速度',
        type: 'number',
        default: 3
    },
    {
        name: 'color',
        declare: '进度条背景色（会覆盖 status 状态颜色）',
        type: 'string | Function | Array<string>',
        default: ''
    },
    {
        name: 'width',
        declare: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
        type: 'number',
        default: 126
    },
    {
        name: 'show-text',
        declare: '是否显示进度条文字内容',
        type: 'boolean',
        default: true
    },
    {
        name: 'stroke-linecap',
        declare: 'circle/dashboard 类型路径两端的形状',
        type: 'enum',
        options: ['round', 'square'],
        default: 'round'
    },
    {
        name: 'format',
        declare: '指定进度条文字内容',
        type: 'Function',
        default: '—'
    },
    {
        name: 'striped',
        declare: '在进度条上增加条纹',
        type: 'boolean',
        default: false,
        since: '2.3.4'
    },
    {
        name: 'striped-flow',
        declare: '让进度条上的条纹流动起来',
        type: 'boolean',
        default: false,
        since: '2.3.4'
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['demo-progress']} */ ;
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
    title: "Progress 进度条",
}));
const __VLS_6 = __VLS_5({
    title: "Progress 进度条",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-progress" },
});
const __VLS_8 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    textInside: (true),
    strokeWidth: (26),
    percentage: (70),
}));
const __VLS_10 = __VLS_9({
    textInside: (true),
    strokeWidth: (26),
    percentage: (70),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_12 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    textInside: (true),
    strokeWidth: (24),
    percentage: (100),
    status: "success",
}));
const __VLS_14 = __VLS_13({
    textInside: (true),
    strokeWidth: (24),
    percentage: (100),
    status: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_16 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    textInside: (true),
    strokeWidth: (22),
    percentage: (80),
    status: "warning",
}));
const __VLS_18 = __VLS_17({
    textInside: (true),
    strokeWidth: (22),
    percentage: (80),
    status: "warning",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_20 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    textInside: (true),
    strokeWidth: (20),
    percentage: (50),
    status: "exception",
}));
const __VLS_22 = __VLS_21({
    textInside: (true),
    strokeWidth: (20),
    percentage: (50),
    status: "exception",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_3;
const __VLS_24 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-progress" },
});
const __VLS_28 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    type: "circle",
    percentage: (0),
}));
const __VLS_30 = __VLS_29({
    type: "circle",
    percentage: (0),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_32 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    type: "circle",
    percentage: (25),
}));
const __VLS_34 = __VLS_33({
    type: "circle",
    percentage: (25),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_36 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    type: "circle",
    percentage: (100),
    status: "success",
}));
const __VLS_38 = __VLS_37({
    type: "circle",
    percentage: (100),
    status: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
const __VLS_40 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    type: "circle",
    percentage: (70),
    status: "warning",
}));
const __VLS_42 = __VLS_41({
    type: "circle",
    percentage: (70),
    status: "warning",
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_44 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    type: "circle",
    percentage: (50),
    status: "exception",
}));
const __VLS_46 = __VLS_45({
    type: "circle",
    percentage: (50),
    status: "exception",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
var __VLS_27;
const __VLS_48 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_51.slots.default;
const __VLS_52 = {}.Config;
/** @type {[typeof __VLS_components.Config, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_54 = __VLS_53({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
var __VLS_51;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-progress']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-progress']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
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
