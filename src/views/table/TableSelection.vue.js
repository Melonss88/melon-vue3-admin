import { ref } from 'vue';
const multipleTableRef = ref();
const multipleSelection = ref([]);
const selectable = (row) => ![1, 2].includes(row.id);
const toggleSelection = (rows, ignoreSelectable) => {
    if (rows) {
        rows.forEach((row) => {
            multipleTableRef.value.toggleRowSelection(row, undefined, ignoreSelectable);
        });
    }
    else {
        multipleTableRef.value.clearSelection();
    }
};
const handleSelectionChange = (val) => {
    multipleSelection.value = val;
};
const tableData = [
    {
        id: 1,
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 2,
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 3,
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 4,
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 5,
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 6,
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 7,
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
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
    title: "多选",
}));
const __VLS_6 = __VLS_5({
    title: "多选",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ 'onSelectionChange': {} },
    ref: "multipleTableRef",
    data: (__VLS_ctx.tableData),
    rowKey: "id",
    ...{ style: {} },
}));
const __VLS_10 = __VLS_9({
    ...{ 'onSelectionChange': {} },
    ref: "multipleTableRef",
    data: (__VLS_ctx.tableData),
    rowKey: "id",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onSelectionChange: (__VLS_ctx.handleSelectionChange)
};
/** @type {typeof __VLS_ctx.multipleTableRef} */ ;
var __VLS_16 = {};
__VLS_11.slots.default;
const __VLS_18 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
    type: "selection",
    selectable: (__VLS_ctx.selectable),
    width: "55",
}));
const __VLS_20 = __VLS_19({
    type: "selection",
    selectable: (__VLS_ctx.selectable),
    width: "55",
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const __VLS_22 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({
    label: "Date",
    width: "120",
}));
const __VLS_24 = __VLS_23({
    label: "Date",
    width: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
__VLS_25.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_25.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    (scope.row.date);
}
var __VLS_25;
const __VLS_26 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
    property: "name",
    label: "Name",
    width: "120",
}));
const __VLS_28 = __VLS_27({
    property: "name",
    label: "Name",
    width: "120",
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
const __VLS_30 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    property: "address",
    label: "Address",
}));
const __VLS_32 = __VLS_31({
    property: "address",
    label: "Address",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
const __VLS_34 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({
    ...{ 'onClick': {} },
}));
const __VLS_36 = __VLS_35({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
let __VLS_38;
let __VLS_39;
let __VLS_40;
const __VLS_41 = {
    onClick: (...[$event]) => {
        __VLS_ctx.toggleSelection([__VLS_ctx.tableData[1], __VLS_ctx.tableData[2]]);
    }
};
__VLS_37.slots.default;
var __VLS_37;
const __VLS_42 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
    ...{ 'onClick': {} },
}));
const __VLS_44 = __VLS_43({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
let __VLS_46;
let __VLS_47;
let __VLS_48;
const __VLS_49 = {
    onClick: (...[$event]) => {
        __VLS_ctx.toggleSelection([__VLS_ctx.tableData[1], __VLS_ctx.tableData[2]], false);
    }
};
__VLS_45.slots.default;
var __VLS_45;
const __VLS_50 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
    ...{ 'onClick': {} },
}));
const __VLS_52 = __VLS_51({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
let __VLS_54;
let __VLS_55;
let __VLS_56;
const __VLS_57 = {
    onClick: (...[$event]) => {
        __VLS_ctx.toggleSelection();
    }
};
__VLS_53.slots.default;
var __VLS_53;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
// @ts-ignore
var __VLS_17 = __VLS_16;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            multipleTableRef: multipleTableRef,
            selectable: selectable,
            toggleSelection: toggleSelection,
            handleSelectionChange: handleSelectionChange,
            tableData: tableData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
