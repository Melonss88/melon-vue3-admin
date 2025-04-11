import SideBar from "./components/SideBar.vue";
import NavBar from "./components/nav/NavBar.vue";
import AppMain from "./components/AppMain.vue";
import { useMenuStore } from "@/stores/menu";
const menuStore = useMenuStore();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['el-main']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.ElContainer;
/** @type {[typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "layout-container" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "layout-container" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.ElAside;
/** @type {[typeof __VLS_components.ElAside, typeof __VLS_components.elAside, typeof __VLS_components.ElAside, typeof __VLS_components.elAside, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    width: (__VLS_ctx.menuStore.isCollapse ? '80px' : '200px'),
}));
const __VLS_7 = __VLS_6({
    width: (__VLS_ctx.menuStore.isCollapse ? '80px' : '200px'),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
/** @type {[typeof SideBar, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(SideBar, new SideBar({
    collapse: (__VLS_ctx.menuStore.isCollapse),
}));
const __VLS_10 = __VLS_9({
    collapse: (__VLS_ctx.menuStore.isCollapse),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_8;
const __VLS_12 = {}.ElContainer;
/** @type {[typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.ElHeader;
/** @type {[typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
/** @type {[typeof NavBar, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
var __VLS_19;
const __VLS_23 = {}.ElMain;
/** @type {[typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({}));
const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_26.slots.default;
/** @type {[typeof AppMain, ]} */ ;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(AppMain, new AppMain({}));
const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
var __VLS_26;
var __VLS_15;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['layout-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SideBar: SideBar,
            NavBar: NavBar,
            AppMain: AppMain,
            menuStore: menuStore,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
