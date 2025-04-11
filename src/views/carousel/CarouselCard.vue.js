const configData = [
    {
        name: 'height',
        declare: 'carousel 的高度',
        type: 'string',
        default: ''
    },
    {
        name: 'initial-index',
        declare: '初始状态激活的幻灯片的索引，从 0 开始',
        type: 'number',
        default: 0
    },
    {
        name: 'trigger',
        declare: '指示器的触发方式',
        type: 'enum',
        options: ['hover', 'click'],
        default: 'hover'
    },
    {
        name: 'autoplay',
        declare: '是否自动切换',
        type: 'boolean',
        default: true
    },
    {
        name: 'interval',
        declare: '自动切换的时间间隔，单位为毫秒',
        type: 'number',
        default: 3000
    },
    {
        name: 'indicator-position',
        declare: '指示器的位置',
        type: 'enum',
        options: ['', 'outside', 'none'],
        default: ''
    },
    {
        name: 'arrow',
        declare: '切换箭头的显示时机',
        type: 'enum',
        options: ['hover', 'always', 'never'],
        default: 'hover'
    },
    {
        name: 'type',
        declare: 'carousel 的类型',
        type: 'enum',
        options: ['', 'card'],
        default: ''
    },
    {
        name: 'cardScale',
        declare: '当 type 为 card 时，二级卡的缩放大小',
        type: 'number',
        default: 0.83,
        since: '2.7.8'
    },
    {
        name: 'loop',
        declare: '是否循环显示',
        type: 'boolean',
        default: true
    },
    {
        name: 'direction',
        declare: '展示的方向',
        type: 'enum',
        options: ['horizontal', 'vertical'],
        default: 'horizontal'
    },
    {
        name: 'pause-on-hover',
        declare: '鼠标悬浮时暂停自动切换',
        type: 'boolean',
        default: true
    },
    {
        name: 'motion-blur',
        declare: '添加动态模糊以给走马灯注入活力和流畅性',
        type: 'boolean',
        default: false,
        since: '2.6.8'
    }
];
const configData2 = [
    {
        name: 'change',
        declare: '当前展示的幻灯片切换时触发，它有两个参数， 一个是新幻灯片的索引，另一个是旧幻灯片的索引',
        type: 'Function',
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['el-carousel__item']} */ ;
/** @type {__VLS_StyleScopedClasses['el-carousel__item']} */ ;
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
    title: "卡片模式",
}));
const __VLS_6 = __VLS_5({
    title: "卡片模式",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.ElCarousel;
/** @type {[typeof __VLS_components.ElCarousel, typeof __VLS_components.elCarousel, typeof __VLS_components.ElCarousel, typeof __VLS_components.elCarousel, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    interval: (4000),
    type: "card",
    height: "200px",
}));
const __VLS_10 = __VLS_9({
    interval: (4000),
    type: "card",
    height: "200px",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
for (const [item] of __VLS_getVForSourceType((6))) {
    const __VLS_12 = {}.ElCarouselItem;
    /** @type {[typeof __VLS_components.ElCarouselItem, typeof __VLS_components.elCarouselItem, typeof __VLS_components.ElCarouselItem, typeof __VLS_components.elCarouselItem, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        key: (item),
    }));
    const __VLS_14 = __VLS_13({
        key: (item),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_15.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        text: "2xl",
        justify: "center",
    });
    (item);
    var __VLS_15;
}
var __VLS_11;
var __VLS_3;
const __VLS_16 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.Config;
/** @type {[typeof __VLS_components.Config, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_22 = __VLS_21({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_19;
const __VLS_24 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.Config;
/** @type {[typeof __VLS_components.Config, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    tableData: (__VLS_ctx.configData2),
    isEvent: (true),
    configTtitle: "事件",
}));
const __VLS_30 = __VLS_29({
    tableData: (__VLS_ctx.configData2),
    isEvent: (true),
    configTtitle: "事件",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
var __VLS_27;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
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
