import { computed, ref } from 'vue';
const count = ref(10);
const loading = ref(false);
const noMore = computed(() => count.value >= 20);
const disabled = computed(() => loading.value || noMore.value);
const load = () => {
    loading.value = true;
    setTimeout(() => {
        count.value += 2;
        loading.value = false;
    }, 2000);
};
const configData = [
    {
        name: 'v-infinite-scroll',
        declare: '滚动到底部时，加载更多数据',
        type: 'Function',
        default: '—'
    },
    {
        name: 'infinite-scroll-disabled',
        declare: '是否禁用',
        type: 'boolean',
        default: false
    },
    {
        name: 'infinite-scroll-delay',
        declare: '节流时延，单位为ms',
        type: 'number',
        default: 200
    },
    {
        name: 'infinite-scroll-distance',
        declare: '触发加载的距离阈值，单位为px',
        type: 'number',
        default: 0
    },
    {
        name: 'infinite-scroll-immediate',
        declare: '是否立即执行加载方法，以防初始状态下内容无法撑满容器',
        type: 'boolean',
        default: true
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
const __VLS_4 = {}.Title;
/** @type {[typeof __VLS_components.Title, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    title: "Infinite Scroll 滚动",
}));
const __VLS_6 = __VLS_5({
    title: "Infinite Scroll 滚动",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "infinite-list-wrapper" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "list" },
    'infinite-scroll-disabled': (__VLS_ctx.disabled),
});
__VLS_asFunctionalDirective(__VLS_directives.vInfiniteScroll)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.load) }, null, null);
for (const [i] of __VLS_getVForSourceType((__VLS_ctx.count))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        key: (i),
        ...{ class: "list-item" },
    });
    (i);
}
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
if (__VLS_ctx.noMore) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
var __VLS_3;
const __VLS_8 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = {}.Config;
/** @type {[typeof __VLS_components.Config, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_14 = __VLS_13({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_11;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['infinite-list-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['list']} */ ;
/** @type {__VLS_StyleScopedClasses['list-item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            count: count,
            loading: loading,
            noMore: noMore,
            disabled: disabled,
            load: load,
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
