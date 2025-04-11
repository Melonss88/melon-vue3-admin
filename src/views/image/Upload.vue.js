import { ref } from 'vue';
import { Plus, Delete, Download, ZoomIn } from "@element-plus/icons-vue";
import { genFileId } from 'element-plus/es/components/upload/src/upload';
const upload = ref();
const handleExceed = (files) => {
    upload.value.clearFiles();
    const file = files[0];
    file.uid = genFileId();
    upload.value.handleStart(file);
};
const submitUpload = () => {
    upload.value.submit();
};
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const disabled = ref(false);
const handleRemove = (file) => {
    console.log(file);
};
const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url;
    dialogVisible.value = true;
};
const handleDownload = (file) => {
    console.log(file);
};
const configData = [
    {
        name: 'action',
        declare: '请求 URL',
        type: 'string',
        default: "'#'",
        required: true
    },
    {
        name: 'headers',
        declare: '设置上传的请求头部',
        type: 'object',
        default: '—'
    },
    {
        name: 'method',
        declare: '设置上传请求方法',
        type: 'string',
        default: "'post'"
    },
    {
        name: 'multiple',
        declare: '是否支持多选文件',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'data',
        declare: '上传时附带的额外参数（从 v2.3.13 支持 Awaitable 数据，和 Function）',
        type: 'object / Function',
        default: '{}'
    },
    {
        name: 'name',
        declare: '上传的文件字段名',
        type: 'string',
        default: "'file'"
    },
    {
        name: 'with-credentials',
        declare: '支持发送 cookie 凭证信息',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'show-file-list',
        declare: '是否显示已上传文件列表',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'drag',
        declare: '是否启用拖拽上传',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'accept',
        declare: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
        type: 'string',
        default: "''"
    },
    {
        name: 'crossorigin',
        declare: '原生属性 crossorigin',
        type: 'enum',
        default: '—',
        options: ['anonymous', 'use-credentials']
    },
    {
        name: 'on-preview',
        declare: '点击文件列表中已上传的文件时的钩子',
        type: 'Function',
        default: '—'
    },
    {
        name: 'on-remove',
        declare: '文件列表移除文件时的钩子',
        type: 'Function',
        default: '—'
    },
    {
        name: 'on-success',
        declare: '文件上传成功时的钩子',
        type: 'Function',
        default: '—'
    },
    {
        name: 'on-error',
        declare: '文件上传失败时的钩子',
        type: 'Function',
        default: '—'
    },
    {
        name: 'on-progress',
        declare: '文件上传时的钩子',
        type: 'Function',
        default: '—'
    },
    {
        name: 'on-change',
        declare: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
        type: 'Function',
        default: '—'
    },
    {
        name: 'on-exceed',
        declare: '当超出限制时，执行的钩子函数',
        type: 'Function',
        default: '—'
    },
    {
        name: 'before-upload',
        declare: '上传文件之前的钩子，参数为上传的文件，若返回false或者返回 Promise 且被 reject，则停止上传',
        type: 'Function',
        default: '—'
    },
    {
        name: 'before-remove',
        declare: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除',
        type: 'Function',
        default: '—'
    },
    {
        name: 'file-list / v-model:file-list',
        declare: '默认上传文件',
        type: 'object',
        default: '[]'
    },
    {
        name: 'list-type',
        declare: '文件列表的类型',
        type: 'enum',
        default: "'text'",
        options: ['text', 'picture', 'picture-card']
    },
    {
        name: 'auto-upload',
        declare: '是否自动上传文件',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'http-request',
        declare: '覆盖默认的 Xhr 行为，允许自行实现上传文件的请求',
        type: 'Function',
        default: '参考ajaxUpload'
    },
    {
        name: 'disabled',
        declare: '是否禁用上传',
        type: 'boolean',
        default: 'false'
    },
    {
        name: 'limit',
        declare: '允许上传文件的最大数量',
        type: 'number',
        default: '—'
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
    title: "Upload 上传",
}));
const __VLS_6 = __VLS_5({
    title: "Upload 上传",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.ElUpload;
/** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ class: "upload-demo" },
    drag: true,
    action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
    multiple: true,
}));
const __VLS_10 = __VLS_9({
    ...{ class: "upload-demo" },
    drag: true,
    action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
    multiple: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ class: "el-icon--upload" },
}));
const __VLS_14 = __VLS_13({
    ...{ class: "el-icon--upload" },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.Plus;
/** @type {[typeof __VLS_components.Plus, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "el-upload__text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.em, __VLS_intrinsicElements.em)({});
{
    const { tip: __VLS_thisSlot } = __VLS_11.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "el-upload__tip" },
    });
}
var __VLS_11;
var __VLS_3;
const __VLS_20 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
const __VLS_24 = {}.ElUpload;
/** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    ref: "upload",
    ...{ class: "upload-demo" },
    action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
    limit: (1),
    onExceed: (__VLS_ctx.handleExceed),
    autoUpload: (false),
}));
const __VLS_26 = __VLS_25({
    ref: "upload",
    ...{ class: "upload-demo" },
    action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
    limit: (1),
    onExceed: (__VLS_ctx.handleExceed),
    autoUpload: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
/** @type {typeof __VLS_ctx.upload} */ ;
var __VLS_28 = {};
__VLS_27.slots.default;
{
    const { trigger: __VLS_thisSlot } = __VLS_27.slots;
    const __VLS_30 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
        type: "primary",
    }));
    const __VLS_32 = __VLS_31({
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_33.slots.default;
    var __VLS_33;
}
const __VLS_34 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({
    ...{ 'onClick': {} },
    ...{ class: "ml-3" },
    type: "success",
}));
const __VLS_36 = __VLS_35({
    ...{ 'onClick': {} },
    ...{ class: "ml-3" },
    type: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_35));
let __VLS_38;
let __VLS_39;
let __VLS_40;
const __VLS_41 = {
    onClick: (__VLS_ctx.submitUpload)
};
__VLS_37.slots.default;
var __VLS_37;
{
    const { tip: __VLS_thisSlot } = __VLS_27.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "el-upload__tip text-red" },
    });
}
var __VLS_27;
var __VLS_23;
const __VLS_42 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
__VLS_45.slots.default;
const __VLS_46 = {}.ElUpload;
/** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
// @ts-ignore
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
    action: "#",
    listType: "picture-card",
    autoUpload: (false),
}));
const __VLS_48 = __VLS_47({
    action: "#",
    listType: "picture-card",
    autoUpload: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_47));
__VLS_49.slots.default;
const __VLS_50 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
__VLS_53.slots.default;
const __VLS_54 = {}.Plus;
/** @type {[typeof __VLS_components.Plus, ]} */ ;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
var __VLS_53;
{
    const { file: __VLS_thisSlot } = __VLS_49.slots;
    const [{ file }] = __VLS_getSlotParams(__VLS_thisSlot);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "el-upload-list__item-thumbnail" },
        src: (file.url),
        alt: "",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "el-upload-list__item-actions" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handlePictureCardPreview(file);
            } },
        ...{ class: "el-upload-list__item-preview" },
    });
    const __VLS_58 = {}.ElIcon;
    /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({}));
    const __VLS_60 = __VLS_59({}, ...__VLS_functionalComponentArgsRest(__VLS_59));
    __VLS_61.slots.default;
    const __VLS_62 = {}.ZoomIn;
    /** @type {[typeof __VLS_components.ZoomIn, typeof __VLS_components.zoomIn, ]} */ ;
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({}));
    const __VLS_64 = __VLS_63({}, ...__VLS_functionalComponentArgsRest(__VLS_63));
    var __VLS_61;
    if (!__VLS_ctx.disabled) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ onClick: (...[$event]) => {
                    if (!(!__VLS_ctx.disabled))
                        return;
                    __VLS_ctx.handleDownload(file);
                } },
            ...{ class: "el-upload-list__item-delete" },
        });
        const __VLS_66 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
        const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_69.slots.default;
        const __VLS_70 = {}.Download;
        /** @type {[typeof __VLS_components.Download, ]} */ ;
        // @ts-ignore
        const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({}));
        const __VLS_72 = __VLS_71({}, ...__VLS_functionalComponentArgsRest(__VLS_71));
        var __VLS_69;
    }
    if (!__VLS_ctx.disabled) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ onClick: (...[$event]) => {
                    if (!(!__VLS_ctx.disabled))
                        return;
                    __VLS_ctx.handleRemove(file);
                } },
            ...{ class: "el-upload-list__item-delete" },
        });
        const __VLS_74 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
        const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
        __VLS_77.slots.default;
        const __VLS_78 = {}.Delete;
        /** @type {[typeof __VLS_components.Delete, ]} */ ;
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({}));
        const __VLS_80 = __VLS_79({}, ...__VLS_functionalComponentArgsRest(__VLS_79));
        var __VLS_77;
    }
}
var __VLS_49;
const __VLS_82 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({
    modelValue: (__VLS_ctx.dialogVisible),
}));
const __VLS_84 = __VLS_83({
    modelValue: (__VLS_ctx.dialogVisible),
}, ...__VLS_functionalComponentArgsRest(__VLS_83));
__VLS_85.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.dialogImageUrl),
    alt: "Preview Image",
});
var __VLS_85;
var __VLS_45;
const __VLS_86 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({}));
const __VLS_88 = __VLS_87({}, ...__VLS_functionalComponentArgsRest(__VLS_87));
__VLS_89.slots.default;
const __VLS_90 = {}.Config;
/** @type {[typeof __VLS_components.Config, ]} */ ;
// @ts-ignore
const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({
    tableData: (__VLS_ctx.configData),
}));
const __VLS_92 = __VLS_91({
    tableData: (__VLS_ctx.configData),
}, ...__VLS_functionalComponentArgsRest(__VLS_91));
var __VLS_89;
/** @type {__VLS_StyleScopedClasses['common-main']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['el-icon--upload']} */ ;
/** @type {__VLS_StyleScopedClasses['el-upload__text']} */ ;
/** @type {__VLS_StyleScopedClasses['el-upload__tip']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-3']} */ ;
/** @type {__VLS_StyleScopedClasses['el-upload__tip']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red']} */ ;
/** @type {__VLS_StyleScopedClasses['el-upload-list__item-thumbnail']} */ ;
/** @type {__VLS_StyleScopedClasses['el-upload-list__item-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['el-upload-list__item-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['el-upload-list__item-delete']} */ ;
/** @type {__VLS_StyleScopedClasses['el-upload-list__item-delete']} */ ;
// @ts-ignore
var __VLS_29 = __VLS_28;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Plus: Plus,
            Delete: Delete,
            Download: Download,
            ZoomIn: ZoomIn,
            upload: upload,
            handleExceed: handleExceed,
            submitUpload: submitUpload,
            dialogImageUrl: dialogImageUrl,
            dialogVisible: dialogVisible,
            disabled: disabled,
            handleRemove: handleRemove,
            handlePictureCardPreview: handlePictureCardPreview,
            handleDownload: handleDownload,
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
