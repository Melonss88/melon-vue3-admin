import Title from '@/components/Title.vue';
import Config from '@/components/Config.vue';
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';
const drawer = ref(false);
const drawer2 = ref(false);
const direction = ref('rtl');
const radio1 = ref('Option 1');
const handleClose = (done) => {
    ElMessageBox.confirm('Are you sure you want to close this?')
        .then(() => {
        done();
    })
        .catch(() => {
        // catch error
    });
};
function cancelClick() {
    drawer2.value = false;
}
function confirmClick() {
    ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
        .then(() => {
        drawer2.value = false;
    })
        .catch(() => {
        // catch error
    });
}
const configData = [
    {
        name: 'model-value / v-model',
        declare: '是否显示 Drawer',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'append-to-body',
        declare: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'append-to',
        declare: '挂载到哪个 DOM 元素 将覆盖 append-to-body',
        type: 'string',
        default: 'body'
    },
    {
        name: 'lock-scroll',
        declare: '是否在 Drawer 出现时将 body 滚动锁定',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'before-close',
        declare: '关闭前的回调，会暂停 Drawer 的关闭',
        type: 'Function',
        default: '—'
    },
    {
        name: 'close-on-click-modal',
        declare: '是否可以通过点击 modal 关闭 Drawer',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'close-on-press-escape',
        declare: '是否可以通过按下 ESC 关闭 Drawer',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'open-delay',
        declare: 'Drawer 打开的延时时间，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        name: 'close-delay',
        declare: 'Drawer 关闭的延时时间，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        name: 'destroy-on-close',
        declare: '控制是否在关闭 Drawer 之后将子元素全部销毁',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'modal',
        declare: '是否需要遮罩层',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'direction',
        declare: 'Drawer 打开的方向',
        type: 'enum',
        default: 'rtl',
        options: ['rtl', 'ltr', 'ttb', 'btt'] // 添加可能的枚举值
    },
    {
        name: 'show-close',
        declare: '是否显示关闭按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'size',
        declare: 'Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 \'x%\', 否则便会以 number 类型解释',
        type: 'number / string',
        default: '30%'
    },
    {
        name: 'title',
        declare: 'Drawer 的标题，也可通过具名 slot 传入',
        type: 'string',
        default: '—'
    },
    {
        name: 'with-header',
        declare: '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'modal-class',
        declare: '遮罩层的自定义类名',
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
        name: 'z-index',
        declare: '设置 z-index',
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
        declare: 'Drawer 的自定义类名',
        type: 'string',
        default: '—'
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
    title: "抽屉",
}));
const __VLS_5 = __VLS_4({
    title: "抽屉",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_7 = {}.ElRadioGroup;
/** @type {[typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    modelValue: (__VLS_ctx.direction),
}));
const __VLS_9 = __VLS_8({
    modelValue: (__VLS_ctx.direction),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
__VLS_10.slots.default;
const __VLS_11 = {}.ElRadio;
/** @type {[typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    value: "ltr",
}));
const __VLS_13 = __VLS_12({
    value: "ltr",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_14.slots.default;
var __VLS_14;
const __VLS_15 = {}.ElRadio;
/** @type {[typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    value: "rtl",
}));
const __VLS_17 = __VLS_16({
    value: "rtl",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_18.slots.default;
var __VLS_18;
const __VLS_19 = {}.ElRadio;
/** @type {[typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    value: "ttb",
}));
const __VLS_21 = __VLS_20({
    value: "ttb",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_22.slots.default;
var __VLS_22;
const __VLS_23 = {}.ElRadio;
/** @type {[typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    value: "btt",
}));
const __VLS_25 = __VLS_24({
    value: "btt",
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_26.slots.default;
var __VLS_26;
var __VLS_10;
const __VLS_27 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
    ...{ 'onClick': {} },
    type: "primary",
    ...{ style: {} },
}));
const __VLS_29 = __VLS_28({
    ...{ 'onClick': {} },
    type: "primary",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
let __VLS_31;
let __VLS_32;
let __VLS_33;
const __VLS_34 = {
    onClick: (...[$event]) => {
        __VLS_ctx.drawer = true;
    }
};
__VLS_30.slots.default;
var __VLS_30;
const __VLS_35 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    ...{ 'onClick': {} },
    type: "primary",
    ...{ style: {} },
}));
const __VLS_37 = __VLS_36({
    ...{ 'onClick': {} },
    type: "primary",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
let __VLS_39;
let __VLS_40;
let __VLS_41;
const __VLS_42 = {
    onClick: (...[$event]) => {
        __VLS_ctx.drawer2 = true;
    }
};
__VLS_38.slots.default;
var __VLS_38;
const __VLS_43 = {}.ElDrawer;
/** @type {[typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ]} */ ;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({
    modelValue: (__VLS_ctx.drawer),
    title: "I am the title",
    direction: (__VLS_ctx.direction),
    beforeClose: (__VLS_ctx.handleClose),
}));
const __VLS_45 = __VLS_44({
    modelValue: (__VLS_ctx.drawer),
    title: "I am the title",
    direction: (__VLS_ctx.direction),
    beforeClose: (__VLS_ctx.handleClose),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
__VLS_46.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
var __VLS_46;
const __VLS_47 = {}.ElDrawer;
/** @type {[typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ]} */ ;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
    modelValue: (__VLS_ctx.drawer2),
    direction: (__VLS_ctx.direction),
}));
const __VLS_49 = __VLS_48({
    modelValue: (__VLS_ctx.drawer2),
    direction: (__VLS_ctx.direction),
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
__VLS_50.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_50.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
}
{
    const { default: __VLS_thisSlot } = __VLS_50.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_51 = {}.ElRadio;
    /** @type {[typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, ]} */ ;
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
        modelValue: (__VLS_ctx.radio1),
        value: "Option 1",
        size: "large",
    }));
    const __VLS_53 = __VLS_52({
        modelValue: (__VLS_ctx.radio1),
        value: "Option 1",
        size: "large",
    }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    __VLS_54.slots.default;
    var __VLS_54;
    const __VLS_55 = {}.ElRadio;
    /** @type {[typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, typeof __VLS_components.ElRadio, typeof __VLS_components.elRadio, ]} */ ;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
        modelValue: (__VLS_ctx.radio1),
        value: "Option 2",
        size: "large",
    }));
    const __VLS_57 = __VLS_56({
        modelValue: (__VLS_ctx.radio1),
        value: "Option 2",
        size: "large",
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    __VLS_58.slots.default;
    var __VLS_58;
}
{
    const { footer: __VLS_thisSlot } = __VLS_50.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: {} },
    });
    const __VLS_59 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
        ...{ 'onClick': {} },
    }));
    const __VLS_61 = __VLS_60({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    let __VLS_63;
    let __VLS_64;
    let __VLS_65;
    const __VLS_66 = {
        onClick: (__VLS_ctx.cancelClick)
    };
    __VLS_62.slots.default;
    var __VLS_62;
    const __VLS_67 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({
        ...{ 'onClick': {} },
        type: "primary",
    }));
    const __VLS_69 = __VLS_68({
        ...{ 'onClick': {} },
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    let __VLS_71;
    let __VLS_72;
    let __VLS_73;
    const __VLS_74 = {
        onClick: (__VLS_ctx.confirmClick)
    };
    __VLS_70.slots.default;
    var __VLS_70;
}
var __VLS_50;
var __VLS_3;
const __VLS_75 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({}));
const __VLS_77 = __VLS_76({}, ...__VLS_functionalComponentArgsRest(__VLS_76));
__VLS_78.slots.default;
/** @type {[typeof Config, ]} */ ;
// @ts-ignore
const __VLS_79 = __VLS_asFunctionalComponent(Config, new Config({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_80 = __VLS_79({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_79));
var __VLS_78;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            Config: Config,
            drawer: drawer,
            drawer2: drawer2,
            direction: direction,
            radio1: radio1,
            handleClose: handleClose,
            cancelClick: cancelClick,
            confirmClick: confirmClick,
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
