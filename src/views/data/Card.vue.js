import Config from '@/components/Config.vue';
const configData = [
    {
        name: 'header',
        declare: '卡片的标题。既可以通过设置 header 修改标题，也可以通过 slot#header 传入 DOM 节点',
        type: 'string',
        default: '—'
    },
    {
        name: 'footer',
        declare: '卡片页脚。既可以通过设置 footer 修改卡片底部内容，也可以通过 slot#footer 传入 DOM 节点',
        type: 'string',
        default: '—',
    },
    {
        name: 'body-style',
        declare: 'body 的 CSS 样式',
        type: 'object',
        default: ''
    },
    {
        name: 'body-class',
        declare: 'body 的自定义类名',
        type: 'string',
        default: '',
    },
    {
        name: 'shadow',
        declare: '卡片阴影显示时机',
        type: 'enum',
        default: 'always'
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
    title: "Card 卡片",
}));
const __VLS_6 = __VLS_5({
    title: "Card 卡片",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ style: {} },
}));
const __VLS_10 = __VLS_9({
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_11.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card-header" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
for (const [o] of __VLS_getVForSourceType((4))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        key: (o),
        ...{ class: "text item" },
    });
    ('List item ' + o);
}
{
    const { footer: __VLS_thisSlot } = __VLS_11.slots;
}
var __VLS_11;
var __VLS_3;
const __VLS_12 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ style: {} },
}));
const __VLS_14 = __VLS_13({
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_15.slots;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    ...{ style: {} },
});
var __VLS_15;
const __VLS_16 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_21 = __VLS_20({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
var __VLS_19;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
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
