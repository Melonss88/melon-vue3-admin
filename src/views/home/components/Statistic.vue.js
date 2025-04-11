import { ref } from 'vue';
import { useTransition } from '@vueuse/core';
import { CaretBottom, CaretTop, } from '@element-plus/icons-vue';
const statisticCards = [
    {
        title: '每日活跃用户',
        value: 100,
        footers: [
            { label: '昨日', trend: 24 }
        ]
    },
    {
        title: '每月活跃用户',
        value: 5000,
        footers: [
            { label: '月增长', trend: -12 }
        ]
    },
    {
        title: '今日交易额',
        value: 1500,
        footers: [
            { label: '昨日', trend: 16 },
        ]
    },
    {
        title: '分享量',
        value: 10,
        footers: [
            { label: '昨日', trend: 4 }
        ]
    }
];
const source = ref(0);
const source2 = ref(0);
const source3 = ref(0);
const source4 = ref(0);
const valArr = [statisticCards[0].value, statisticCards[1].value, statisticCards[2].value, statisticCards[3].value];
const outputValue = useTransition(source, {
    duration: valArr[0],
});
const outputValue2 = useTransition(source2, {
    duration: valArr[1],
});
const outputValue3 = useTransition(source3, {
    duration: valArr[2],
});
const outputValue4 = useTransition(source4, {
    duration: valArr[3],
});
source.value = valArr[0];
source2.value = valArr[1];
source3.value = valArr[2];
source4.value = valArr[3];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['footer-item']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    gutter: (16),
}));
const __VLS_2 = __VLS_1({
    gutter: (16),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
for (const [card, index] of __VLS_getVForSourceType((__VLS_ctx.statisticCards))) {
    const __VLS_5 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        key: (index),
        span: (6),
    }));
    const __VLS_7 = __VLS_6({
        key: (index),
        span: (6),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_8.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "statistic-card" },
    });
    const __VLS_9 = {}.ElStatistic;
    /** @type {[typeof __VLS_components.ElStatistic, typeof __VLS_components.elStatistic, typeof __VLS_components.ElStatistic, typeof __VLS_components.elStatistic, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        value: (index == 0 ? __VLS_ctx.outputValue : index == 1 ? __VLS_ctx.outputValue2 : index == 2 ? __VLS_ctx.outputValue3 : __VLS_ctx.outputValue4),
    }));
    const __VLS_11 = __VLS_10({
        value: (index == 0 ? __VLS_ctx.outputValue : index == 1 ? __VLS_ctx.outputValue2 : index == 2 ? __VLS_ctx.outputValue3 : __VLS_ctx.outputValue4),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_12.slots.default;
    {
        const { title: __VLS_thisSlot } = __VLS_12.slots;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ style: {} },
        });
        (card.title);
    }
    var __VLS_12;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "statistic-footer" },
    });
    for (const [footer, i] of __VLS_getVForSourceType((card.footers))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (i),
            ...{ class: "footer-item" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (footer.label);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: (footer.trend > 0 ? 'green' : 'red') },
        });
        (Math.abs(footer.trend));
        const __VLS_13 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
        const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
        __VLS_16.slots.default;
        const __VLS_17 = ((footer.trend > 0 ? __VLS_ctx.CaretTop : __VLS_ctx.CaretBottom));
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
        const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
        var __VLS_16;
    }
    var __VLS_8;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['statistic-card']} */ ;
/** @type {__VLS_StyleScopedClasses['statistic-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CaretBottom: CaretBottom,
            CaretTop: CaretTop,
            statisticCards: statisticCards,
            outputValue: outputValue,
            outputValue2: outputValue2,
            outputValue3: outputValue3,
            outputValue4: outputValue4,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
