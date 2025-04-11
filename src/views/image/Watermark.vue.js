import { reactive } from 'vue';
const font = reactive({
    color: 'rgba(0, 0, 0, .15)',
});
const configData = [
    {
        name: 'width',
        declare: '水印的宽度（content 的默认值是它自己的宽度）',
        type: 'number',
        default: 120
    },
    {
        name: 'height',
        declare: '水印的高度（content 的默认值是它自己的高度）',
        type: 'number',
        default: 64
    },
    {
        name: 'rotate',
        declare: '水印的旋转角度（单位 °）',
        type: 'number',
        default: -22
    },
    {
        name: 'zIndex',
        declare: '水印元素的 z-index 值',
        type: 'number',
        default: 9
    },
    {
        name: 'image',
        declare: '水印图片（建议使用 2x 或 3x 图像）',
        type: 'string',
        default: '—'
    },
    {
        name: 'content',
        declare: '水印文本内容',
        type: 'string | object',
        default: '—',
        // example: {
        //   text: '机密文件',  
        //   font: {
        //     color: 'rgba(0, 0, 0, 0.15)',
        //     fontSize: 16,
        //     fontFamily: 'sans-serif'
        //   }
        // }
    },
    {
        name: 'font',
        declare: '文字样式（当content为string时生效）',
        type: 'object',
        default: {
            color: 'rgba(0, 0, 0, 0.15)',
            fontSize: 16,
            fontFamily: 'sans-serif',
            fontWeight: 'normal'
        }
    },
    {
        name: 'gap',
        declare: '水印之间的间距',
        type: '[number, number]',
        default: [100, 100]
    },
    {
        name: 'offset',
        declare: '水印从容器左上角的偏移（默认值为 gap/2）',
        type: '[number, number]',
        default: '动态计算值',
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
const __VLS_4 = {}.Title;
/** @type {[typeof __VLS_components.Title, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    title: "Watermark 水印",
}));
const __VLS_6 = __VLS_5({
    title: "Watermark 水印",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.ElWatermark;
/** @type {[typeof __VLS_components.ElWatermark, typeof __VLS_components.elWatermark, typeof __VLS_components.ElWatermark, typeof __VLS_components.elWatermark, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    font: (__VLS_ctx.font),
    content: (['Vue3-Admin', 'Element Plus']),
}));
const __VLS_10 = __VLS_9({
    font: (__VLS_ctx.font),
    content: (['Vue3-Admin', 'Element Plus']),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
    ...{ style: {} },
});
var __VLS_11;
var __VLS_3;
const __VLS_12 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.Config;
/** @type {[typeof __VLS_components.Config, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_18 = __VLS_17({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
var __VLS_15;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            font: font,
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
