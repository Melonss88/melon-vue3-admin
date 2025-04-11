const props = withDefaults(defineProps(), {
    isEvent: false
});
const { isEvent, tableData } = props;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    isEvent: false
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
(!__VLS_ctx.isEvent ? "配置项" : '');
if (!__VLS_ctx.isEvent) {
    const __VLS_0 = {}.ElTable;
    /** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        data: (__VLS_ctx.tableData),
        ...{ style: {} },
    }));
    const __VLS_2 = __VLS_1({
        data: (__VLS_ctx.tableData),
        ...{ style: {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_3.slots.default;
    const __VLS_4 = {}.ElTableColumn;
    /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        prop: "name",
        label: "名称",
        width: "180",
    }));
    const __VLS_6 = __VLS_5({
        prop: "name",
        label: "名称",
        width: "180",
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    const __VLS_8 = {}.ElTableColumn;
    /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        prop: "declare",
        label: "说明",
        width: "260",
    }));
    const __VLS_10 = __VLS_9({
        prop: "declare",
        label: "说明",
        width: "260",
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const __VLS_12 = {}.ElTableColumn;
    /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        prop: "type",
        label: "类型",
        width: "180",
    }));
    const __VLS_14 = __VLS_13({
        prop: "type",
        label: "类型",
        width: "180",
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_16 = {}.ElTableColumn;
    /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        prop: "default",
        label: "默认值",
    }));
    const __VLS_18 = __VLS_17({
        prop: "default",
        label: "默认值",
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    var __VLS_3;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
(__VLS_ctx.configTtitle);
if (__VLS_ctx.isEvent) {
    const __VLS_20 = {}.ElTable;
    /** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        data: (__VLS_ctx.tableData),
        ...{ style: {} },
    }));
    const __VLS_22 = __VLS_21({
        data: (__VLS_ctx.tableData),
        ...{ style: {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    const __VLS_24 = {}.ElTableColumn;
    /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        prop: "name",
        label: "名称",
        width: "180",
    }));
    const __VLS_26 = __VLS_25({
        prop: "name",
        label: "名称",
        width: "180",
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_28 = {}.ElTableColumn;
    /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
        prop: "declare",
        label: "说明",
        width: "300",
    }));
    const __VLS_30 = __VLS_29({
        prop: "declare",
        label: "说明",
        width: "300",
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    const __VLS_32 = {}.ElTableColumn;
    /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
        prop: "type",
        label: "类型",
        width: "180",
    }));
    const __VLS_34 = __VLS_33({
        prop: "type",
        label: "类型",
        width: "180",
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    var __VLS_23;
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isEvent: isEvent,
            tableData: tableData,
        };
    },
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
