import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';
const dialogVisible = ref(false);
const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = '140px';
const handleClose = (done) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
        done();
    })
        .catch(() => {
        // catch error
    });
};
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
});
const gridData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
];
const configData = [
    {
        name: 'model-value / v-model',
        declare: '是否显示 Dialog',
        type: 'boolean',
        default: '—'
    },
    {
        name: 'title',
        declare: 'Dialog 对话框 Dialog 的标题，也可通过具名 slot 传入',
        type: 'string',
        default: "''"
    },
    {
        name: 'width',
        declare: '对话框的宽度，默认值为 50%',
        type: 'string / number',
        default: "''"
    },
    {
        name: 'fullscreen',
        declare: '是否为全屏 Dialog',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'top',
        declare: 'dialog CSS 中的 margin-top 值，默认为 15vh',
        type: 'string',
        default: "''"
    },
    {
        name: 'modal',
        declare: '是否需要遮罩层',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'modal-class',
        declare: '遮罩的自定义类名',
        type: 'string',
        default: '—'
    },
    {
        name: 'header-class',
        declare: 'header 部分的自定义 class 名',
        type: 'string',
        default: '—'
    },
    {
        name: 'body-class',
        declare: 'body 部分的自定义 class 名',
        type: 'string',
        default: '—'
    },
    {
        name: 'footer-class',
        declare: 'footer 部分的自定义 class 名',
        type: 'string',
        default: '—'
    },
    {
        name: 'append-to-body',
        declare: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'append-to',
        declare: 'Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body',
        type: 'string / HTMLElement',
        default: 'body'
    },
    {
        name: 'lock-scroll',
        declare: '是否在 Dialog 出现时将 body 滚动锁定',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'open-delay',
        declare: 'dialog 打开的延时时间，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        name: 'close-delay',
        declare: 'dialog 关闭的延时时间，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        name: 'close-on-click-modal',
        declare: '是否可以通过点击 modal 关闭 Dialog',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'close-on-press-escape',
        declare: '是否可以通过按下 ESC 关闭 Dialog',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'show-close',
        declare: '是否显示关闭按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'before-close',
        declare: '关闭前的回调，会暂停 Dialog 的关闭。回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候。',
        type: 'Function',
        default: '—'
    },
    {
        name: 'draggable',
        declare: '为 Dialog 启用可拖拽功能',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'overflow',
        declare: '拖动范围可以超出可视区',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'center',
        declare: '是否让 Dialog 的 header 和 footer 部分居中排列',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'align-center',
        declare: '是否水平垂直对齐对话框',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'destroy-on-close',
        declare: '当关闭 Dialog 时，销毁其中的元素',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'close-icon',
        declare: '自定义关闭图标，默认 Close',
        type: 'string / Component',
        default: '—'
    },
    {
        name: 'z-index',
        declare: '和原生的 CSS 的 z-index 相同，改变 z 轴的顺序',
        type: 'number',
        default: '—'
    },
    {
        name: 'header-aria-level',
        declare: 'header 的 aria-level 属性',
        type: 'string',
        default: '2'
    },
    {
        name: 'custom-class',
        declare: 'Dialog 的自定义类名',
        type: 'string',
        default: "''"
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
/** @type {[typeof Title, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Title, new Title({
    title: "对话框",
}));
const __VLS_5 = __VLS_4({
    title: "对话框",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
const __VLS_7 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    ...{ 'onClick': {} },
    plain: true,
}));
const __VLS_9 = __VLS_8({
    ...{ 'onClick': {} },
    plain: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_11;
let __VLS_12;
let __VLS_13;
const __VLS_14 = {
    onClick: (...[$event]) => {
        __VLS_ctx.dialogVisible = true;
    }
};
__VLS_10.slots.default;
var __VLS_10;
const __VLS_15 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.dialogVisible),
    title: "Tips",
    width: "500",
    beforeClose: (__VLS_ctx.handleClose),
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.dialogVisible),
    title: "Tips",
    width: "500",
    beforeClose: (__VLS_ctx.handleClose),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_18.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
{
    const { footer: __VLS_thisSlot } = __VLS_18.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "dialog-footer" },
    });
    const __VLS_19 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
        ...{ 'onClick': {} },
    }));
    const __VLS_21 = __VLS_20({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    let __VLS_23;
    let __VLS_24;
    let __VLS_25;
    const __VLS_26 = {
        onClick: (...[$event]) => {
            __VLS_ctx.dialogVisible = false;
        }
    };
    __VLS_22.slots.default;
    var __VLS_22;
    const __VLS_27 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
        ...{ 'onClick': {} },
        type: "primary",
    }));
    const __VLS_29 = __VLS_28({
        ...{ 'onClick': {} },
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    let __VLS_31;
    let __VLS_32;
    let __VLS_33;
    const __VLS_34 = {
        onClick: (...[$event]) => {
            __VLS_ctx.dialogVisible = false;
        }
    };
    __VLS_30.slots.default;
    var __VLS_30;
}
var __VLS_18;
var __VLS_3;
const __VLS_35 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
__VLS_38.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_39 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({
    ...{ 'onClick': {} },
    plain: true,
}));
const __VLS_41 = __VLS_40({
    ...{ 'onClick': {} },
    plain: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
let __VLS_43;
let __VLS_44;
let __VLS_45;
const __VLS_46 = {
    onClick: (...[$event]) => {
        __VLS_ctx.dialogTableVisible = true;
    }
};
__VLS_42.slots.default;
var __VLS_42;
const __VLS_47 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
    ...{ 'onClick': {} },
    plain: true,
}));
const __VLS_49 = __VLS_48({
    ...{ 'onClick': {} },
    plain: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
let __VLS_51;
let __VLS_52;
let __VLS_53;
const __VLS_54 = {
    onClick: (...[$event]) => {
        __VLS_ctx.dialogFormVisible = true;
    }
};
__VLS_50.slots.default;
var __VLS_50;
const __VLS_55 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
    modelValue: (__VLS_ctx.dialogTableVisible),
    title: "Shipping address",
    width: "800",
}));
const __VLS_57 = __VLS_56({
    modelValue: (__VLS_ctx.dialogTableVisible),
    title: "Shipping address",
    width: "800",
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
__VLS_58.slots.default;
const __VLS_59 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
    data: (__VLS_ctx.gridData),
}));
const __VLS_61 = __VLS_60({
    data: (__VLS_ctx.gridData),
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
__VLS_62.slots.default;
const __VLS_63 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({
    property: "date",
    label: "Date",
    width: "150",
}));
const __VLS_65 = __VLS_64({
    property: "date",
    label: "Date",
    width: "150",
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
const __VLS_67 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({
    property: "name",
    label: "Name",
    width: "200",
}));
const __VLS_69 = __VLS_68({
    property: "name",
    label: "Name",
    width: "200",
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
const __VLS_71 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({
    property: "address",
    label: "Address",
}));
const __VLS_73 = __VLS_72({
    property: "address",
    label: "Address",
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
var __VLS_62;
var __VLS_58;
const __VLS_75 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({
    modelValue: (__VLS_ctx.dialogFormVisible),
    title: "Shipping address",
    width: "500",
}));
const __VLS_77 = __VLS_76({
    modelValue: (__VLS_ctx.dialogFormVisible),
    title: "Shipping address",
    width: "500",
}, ...__VLS_functionalComponentArgsRest(__VLS_76));
__VLS_78.slots.default;
const __VLS_79 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({
    model: (__VLS_ctx.form),
}));
const __VLS_81 = __VLS_80({
    model: (__VLS_ctx.form),
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
__VLS_82.slots.default;
const __VLS_83 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({
    label: "Promotion name",
    labelWidth: (__VLS_ctx.formLabelWidth),
}));
const __VLS_85 = __VLS_84({
    label: "Promotion name",
    labelWidth: (__VLS_ctx.formLabelWidth),
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
__VLS_86.slots.default;
const __VLS_87 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({
    modelValue: (__VLS_ctx.form.name),
    autocomplete: "off",
}));
const __VLS_89 = __VLS_88({
    modelValue: (__VLS_ctx.form.name),
    autocomplete: "off",
}, ...__VLS_functionalComponentArgsRest(__VLS_88));
var __VLS_86;
const __VLS_91 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({
    label: "Zones",
    labelWidth: (__VLS_ctx.formLabelWidth),
}));
const __VLS_93 = __VLS_92({
    label: "Zones",
    labelWidth: (__VLS_ctx.formLabelWidth),
}, ...__VLS_functionalComponentArgsRest(__VLS_92));
__VLS_94.slots.default;
const __VLS_95 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({
    modelValue: (__VLS_ctx.form.region),
    placeholder: "Please select a zone",
}));
const __VLS_97 = __VLS_96({
    modelValue: (__VLS_ctx.form.region),
    placeholder: "Please select a zone",
}, ...__VLS_functionalComponentArgsRest(__VLS_96));
__VLS_98.slots.default;
const __VLS_99 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({
    label: "Zone No.1",
    value: "shanghai",
}));
const __VLS_101 = __VLS_100({
    label: "Zone No.1",
    value: "shanghai",
}, ...__VLS_functionalComponentArgsRest(__VLS_100));
const __VLS_103 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({
    label: "Zone No.2",
    value: "beijing",
}));
const __VLS_105 = __VLS_104({
    label: "Zone No.2",
    value: "beijing",
}, ...__VLS_functionalComponentArgsRest(__VLS_104));
var __VLS_98;
var __VLS_94;
var __VLS_82;
{
    const { footer: __VLS_thisSlot } = __VLS_78.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "dialog-footer" },
    });
    const __VLS_107 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({
        ...{ 'onClick': {} },
    }));
    const __VLS_109 = __VLS_108({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_108));
    let __VLS_111;
    let __VLS_112;
    let __VLS_113;
    const __VLS_114 = {
        onClick: (...[$event]) => {
            __VLS_ctx.dialogFormVisible = false;
        }
    };
    __VLS_110.slots.default;
    var __VLS_110;
    const __VLS_115 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({
        ...{ 'onClick': {} },
        type: "primary",
    }));
    const __VLS_117 = __VLS_116({
        ...{ 'onClick': {} },
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_116));
    let __VLS_119;
    let __VLS_120;
    let __VLS_121;
    const __VLS_122 = {
        onClick: (...[$event]) => {
            __VLS_ctx.dialogFormVisible = false;
        }
    };
    __VLS_118.slots.default;
    var __VLS_118;
}
var __VLS_78;
var __VLS_38;
const __VLS_123 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({}));
const __VLS_125 = __VLS_124({}, ...__VLS_functionalComponentArgsRest(__VLS_124));
__VLS_126.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_127 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_128 = __VLS_127({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_127));
var __VLS_126;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['dialog-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['dialog-footer']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            dialogVisible: dialogVisible,
            dialogTableVisible: dialogTableVisible,
            dialogFormVisible: dialogFormVisible,
            formLabelWidth: formLabelWidth,
            handleClose: handleClose,
            form: form,
            gridData: gridData,
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
