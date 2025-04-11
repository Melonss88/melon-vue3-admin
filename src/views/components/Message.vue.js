import { h } from 'vue';
import { ElMessage } from 'element-plus';
import Title from '@/components/Title.vue';
const open = () => {
    ElMessage('This is a message.');
};
const openVn = () => {
    ElMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
        ]),
    });
};
const open1 = () => {
    ElMessage('This is a message.');
};
const open2 = () => {
    ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
    });
};
const open3 = () => {
    ElMessage({
        message: 'Warning, this is a warning message.',
        type: 'warning',
    });
};
const open4 = () => {
    ElMessage.error('Oops, this is a error message.');
};
const open11 = () => {
    ElMessage({
        showClose: true,
        message: 'This is a message.',
    });
};
const open12 = () => {
    ElMessage({
        showClose: true,
        message: 'Congrats, this is a success message.',
        type: 'success',
    });
};
const open13 = () => {
    ElMessage({
        showClose: true,
        message: 'Warning, this is a warning message.',
        type: 'warning',
    });
};
const open14 = () => {
    ElMessage({
        showClose: true,
        message: 'Oops, this is a error message.',
        type: 'error',
    });
};
const open5 = () => {
    ElMessage({
        showClose: true,
        message: 'Oops, this is a message that does not automatically close.',
        duration: 0,
    });
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "message-container common-main" },
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
    title: "消息提示",
}));
const __VLS_5 = __VLS_4({
    title: "消息提示",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
const __VLS_7 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_9 = __VLS_8({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_11;
let __VLS_12;
let __VLS_13;
const __VLS_14 = {
    onClick: (__VLS_ctx.open)
};
__VLS_10.slots.default;
var __VLS_10;
const __VLS_15 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_17 = __VLS_16({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_19;
let __VLS_20;
let __VLS_21;
const __VLS_22 = {
    onClick: (__VLS_ctx.openVn)
};
__VLS_18.slots.default;
var __VLS_18;
var __VLS_3;
const __VLS_23 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({}));
const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_26.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
const __VLS_27 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_29 = __VLS_28({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
let __VLS_31;
let __VLS_32;
let __VLS_33;
const __VLS_34 = {
    onClick: (__VLS_ctx.open2)
};
__VLS_30.slots.default;
var __VLS_30;
const __VLS_35 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_37 = __VLS_36({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
let __VLS_39;
let __VLS_40;
let __VLS_41;
const __VLS_42 = {
    onClick: (__VLS_ctx.open3)
};
__VLS_38.slots.default;
var __VLS_38;
const __VLS_43 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_45 = __VLS_44({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
let __VLS_47;
let __VLS_48;
let __VLS_49;
const __VLS_50 = {
    onClick: (__VLS_ctx.open1)
};
__VLS_46.slots.default;
var __VLS_46;
const __VLS_51 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_53 = __VLS_52({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
let __VLS_55;
let __VLS_56;
let __VLS_57;
const __VLS_58 = {
    onClick: (__VLS_ctx.open4)
};
__VLS_54.slots.default;
var __VLS_54;
var __VLS_26;
const __VLS_59 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({}));
const __VLS_61 = __VLS_60({}, ...__VLS_functionalComponentArgsRest(__VLS_60));
__VLS_62.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
const __VLS_63 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_65 = __VLS_64({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
let __VLS_67;
let __VLS_68;
let __VLS_69;
const __VLS_70 = {
    onClick: (__VLS_ctx.open11)
};
__VLS_66.slots.default;
var __VLS_66;
const __VLS_71 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_73 = __VLS_72({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
let __VLS_75;
let __VLS_76;
let __VLS_77;
const __VLS_78 = {
    onClick: (__VLS_ctx.open12)
};
__VLS_74.slots.default;
var __VLS_74;
const __VLS_79 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_81 = __VLS_80({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
let __VLS_83;
let __VLS_84;
let __VLS_85;
const __VLS_86 = {
    onClick: (__VLS_ctx.open13)
};
__VLS_82.slots.default;
var __VLS_82;
const __VLS_87 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_89 = __VLS_88({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_88));
let __VLS_91;
let __VLS_92;
let __VLS_93;
const __VLS_94 = {
    onClick: (__VLS_ctx.open14)
};
__VLS_90.slots.default;
var __VLS_90;
const __VLS_95 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({
    ...{ 'onClick': {} },
    plain: (true),
}));
const __VLS_97 = __VLS_96({
    ...{ 'onClick': {} },
    plain: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_96));
let __VLS_99;
let __VLS_100;
let __VLS_101;
const __VLS_102 = {
    onClick: (__VLS_ctx.open5)
};
__VLS_98.slots.default;
var __VLS_98;
var __VLS_62;
/** @type {__VLS_StyleScopedClasses['message-container']} */ ;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Title: Title,
            open: open,
            openVn: openVn,
            open1: open1,
            open2: open2,
            open3: open3,
            open4: open4,
            open11: open11,
            open12: open12,
            open13: open13,
            open14: open14,
            open5: open5,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
