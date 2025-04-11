import { ref } from 'vue';
const tableRef = ref();
const resetDateFilter = () => {
    tableRef.value.clearFilter(['date']);
};
const clearFilter = () => {
    tableRef.value.clearFilter();
};
const formatter = (row, column) => {
    return row.address;
};
const filterTag = (value, row) => {
    return row.tag === value;
};
const filterHandler = (value, row, column) => {
    const property = column.property;
    return row[property] === value;
};
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office',
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
    title: "筛选",
}));
const __VLS_6 = __VLS_5({
    title: "筛选",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ 'onClick': {} },
}));
const __VLS_10 = __VLS_9({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onClick: (__VLS_ctx.resetDateFilter)
};
__VLS_11.slots.default;
var __VLS_11;
const __VLS_16 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ 'onClick': {} },
}));
const __VLS_18 = __VLS_17({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_20;
let __VLS_21;
let __VLS_22;
const __VLS_23 = {
    onClick: (__VLS_ctx.clearFilter)
};
__VLS_19.slots.default;
var __VLS_19;
const __VLS_24 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    ref: "tableRef",
    rowKey: "date",
    data: (__VLS_ctx.tableData),
    ...{ style: {} },
}));
const __VLS_26 = __VLS_25({
    ref: "tableRef",
    rowKey: "date",
    data: (__VLS_ctx.tableData),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
/** @type {typeof __VLS_ctx.tableRef} */ ;
var __VLS_28 = {};
__VLS_27.slots.default;
const __VLS_30 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    prop: "date",
    label: "Date",
    sortable: true,
    width: "180",
    columnKey: "date",
    filters: ([
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
    ]),
    filterMethod: (__VLS_ctx.filterHandler),
}));
const __VLS_32 = __VLS_31({
    prop: "date",
    label: "Date",
    sortable: true,
    width: "180",
    columnKey: "date",
    filters: ([
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
    ]),
    filterMethod: (__VLS_ctx.filterHandler),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const __VLS_34 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({
    prop: "name",
    label: "Name",
    width: "180",
}));
const __VLS_36 = __VLS_35({
    prop: "name",
    label: "Name",
    width: "180",
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
const __VLS_38 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({
    prop: "address",
    label: "Address",
    formatter: (__VLS_ctx.formatter),
}));
const __VLS_40 = __VLS_39({
    prop: "address",
    label: "Address",
    formatter: (__VLS_ctx.formatter),
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
const __VLS_42 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
    prop: "tag",
    label: "Tag",
    width: "100",
    filters: ([
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
    ]),
    filterMethod: (__VLS_ctx.filterTag),
    filterPlacement: "bottom-end",
}));
const __VLS_44 = __VLS_43({
    prop: "tag",
    label: "Tag",
    width: "100",
    filters: ([
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
    ]),
    filterMethod: (__VLS_ctx.filterTag),
    filterPlacement: "bottom-end",
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
__VLS_45.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_45.slots;
    const [scope] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_46 = {}.ElTag;
    /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
        type: (scope.row.tag === 'Home' ? 'primary' : 'success'),
        disableTransitions: true,
    }));
    const __VLS_48 = __VLS_47({
        type: (scope.row.tag === 'Home' ? 'primary' : 'success'),
        disableTransitions: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    __VLS_49.slots.default;
    (scope.row.tag);
    var __VLS_49;
}
var __VLS_45;
var __VLS_27;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
// @ts-ignore
var __VLS_29 = __VLS_28;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            tableRef: tableRef,
            resetDateFilter: resetDateFilter,
            clearFilter: clearFilter,
            formatter: formatter,
            filterTag: filterTag,
            filterHandler: filterHandler,
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
