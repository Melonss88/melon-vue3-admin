import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCachedViewsStore } from '@/stores/cachedViews';
import TabsView from '@/layout/components/tabsNav/TabsView.vue';
const route = useRoute();
const cachedStore = useCachedViewsStore();
const { cachedViews } = storeToRefs(cachedStore);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "app-main" },
});
/** @type {[typeof TabsView, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TabsView, new TabsView({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
const __VLS_3 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
{
    const { default: __VLS_thisSlot } = __VLS_6.slots;
    const [{ Component, route }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_7 = {}.transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        name: "fade-transform",
        mode: "out-in",
    }));
    const __VLS_9 = __VLS_8({
        name: "fade-transform",
        mode: "out-in",
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_10.slots.default;
    const __VLS_11 = {}.KeepAlive;
    /** @type {[typeof __VLS_components.KeepAlive, typeof __VLS_components.keepAlive, typeof __VLS_components.KeepAlive, typeof __VLS_components.keepAlive, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
        include: (__VLS_ctx.cachedViews),
    }));
    const __VLS_13 = __VLS_12({
        include: (__VLS_ctx.cachedViews),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_14.slots.default;
    const __VLS_15 = ((Component));
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
        key: (route.fullPath),
    }));
    const __VLS_17 = __VLS_16({
        key: (route.fullPath),
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    var __VLS_14;
    var __VLS_10;
    __VLS_6.slots['' /* empty slot name completion */];
}
var __VLS_6;
/** @type {__VLS_StyleScopedClasses['app-main']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TabsView: TabsView,
            cachedViews: cachedViews,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
