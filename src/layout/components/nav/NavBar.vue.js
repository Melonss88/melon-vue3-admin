import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMenuStore } from "@/stores/menu";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";
import { Fold, Expand, Bell, FullScreen, User, } from "@element-plus/icons-vue";
import SearchInput from "./SearchInput.vue";
import { useUserStore } from '@/stores/user';
const menuStore = useMenuStore();
const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();
const userStore = useUserStore();
const isFullScreen = ref(false);
// 面包屑导航
const breadcrumb = computed(() => route.path.split("/").filter(Boolean));
// 全屏切换
const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        isFullScreen.value = true;
    }
    else {
        document.exitFullscreen();
        isFullScreen.value = false;
    }
};
// 多语言切换
const toggleLanguage = () => {
    locale.value = locale.value === "zh-CN" ? "en" : "zh-CN";
};
// 退出登录
const logoutFn = async () => {
    userStore.logout();
    ElMessage.success(t("logout.success"));
    router.push("/login");
};
// 切换折叠状态
const toggleCollapse = () => {
    menuStore.toggleCollapse();
};
// 首字母大写
const capitalize = (info) => {
    return info.charAt(0).toUpperCase() + info.slice(1);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-bar" },
});
const __VLS_0 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    justify: "space-between",
    align: "middle",
}));
const __VLS_2 = __VLS_1({
    justify: "space-between",
    align: "middle",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    xs: (8),
    sm: (6),
    md: (5),
}));
const __VLS_6 = __VLS_5({
    xs: (8),
    sm: (6),
    md: (5),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nar-l" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.toggleCollapse) },
    ...{ class: "collapse-btn" },
});
const __VLS_8 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    size: (20),
}));
const __VLS_10 = __VLS_9({
    size: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = ((__VLS_ctx.menuStore.isCollapse ? __VLS_ctx.Expand : __VLS_ctx.Fold));
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_11;
const __VLS_16 = {}.ElBreadcrumb;
/** @type {[typeof __VLS_components.ElBreadcrumb, typeof __VLS_components.elBreadcrumb, typeof __VLS_components.ElBreadcrumb, typeof __VLS_components.elBreadcrumb, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    separator: "/",
}));
const __VLS_18 = __VLS_17({
    separator: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.breadcrumb))) {
    const __VLS_20 = {}.ElBreadcrumbItem;
    /** @type {[typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        key: (index),
    }));
    const __VLS_22 = __VLS_21({
        key: (index),
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    if (index === 0) {
        const __VLS_24 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
            ...{ 'onClick': {} },
            type: "primary",
            link: true,
        }));
        const __VLS_26 = __VLS_25({
            ...{ 'onClick': {} },
            type: "primary",
            link: true,
        }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        let __VLS_28;
        let __VLS_29;
        let __VLS_30;
        const __VLS_31 = {
            onClick: (...[$event]) => {
                if (!(index === 0))
                    return;
                __VLS_ctx.router.push('/');
            }
        };
        __VLS_27.slots.default;
        (__VLS_ctx.capitalize(item));
        var __VLS_27;
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.capitalize(item));
    }
    var __VLS_23;
}
var __VLS_19;
var __VLS_7;
const __VLS_32 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    xs: (16),
    sm: (18),
    md: (19),
}));
const __VLS_34 = __VLS_33({
    xs: (16),
    sm: (18),
    md: (19),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-r" },
});
/** @type {[typeof SearchInput, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(SearchInput, new SearchInput({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
const __VLS_39 = {}.ElDropdown;
/** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({}));
const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
__VLS_42.slots.default;
const __VLS_43 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
__VLS_46.slots.default;
const __VLS_47 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({}));
const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
__VLS_50.slots.default;
const __VLS_51 = {}.Bell;
/** @type {[typeof __VLS_components.Bell, ]} */ ;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({}));
const __VLS_53 = __VLS_52({}, ...__VLS_functionalComponentArgsRest(__VLS_52));
var __VLS_50;
const __VLS_55 = {}.ElBadge;
/** @type {[typeof __VLS_components.ElBadge, typeof __VLS_components.elBadge, ]} */ ;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
    value: (__VLS_ctx.menuStore.notifications.length),
}));
const __VLS_57 = __VLS_56({
    value: (__VLS_ctx.menuStore.notifications.length),
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
var __VLS_46;
{
    const { dropdown: __VLS_thisSlot } = __VLS_42.slots;
    const __VLS_59 = {}.ElDropdownMenu;
    /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({}));
    const __VLS_61 = __VLS_60({}, ...__VLS_functionalComponentArgsRest(__VLS_60));
    __VLS_62.slots.default;
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuStore.notifications))) {
        const __VLS_63 = {}.ElDropdownItem;
        /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
        // @ts-ignore
        const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({
            key: (item.id),
        }));
        const __VLS_65 = __VLS_64({
            key: (item.id),
        }, ...__VLS_functionalComponentArgsRest(__VLS_64));
        __VLS_66.slots.default;
        (item.title);
        var __VLS_66;
    }
    var __VLS_62;
}
var __VLS_42;
const __VLS_67 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({
    ...{ 'onClick': {} },
}));
const __VLS_69 = __VLS_68({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
let __VLS_71;
let __VLS_72;
let __VLS_73;
const __VLS_74 = {
    onClick: (__VLS_ctx.toggleFullScreen)
};
__VLS_70.slots.default;
const __VLS_75 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({}));
const __VLS_77 = __VLS_76({}, ...__VLS_functionalComponentArgsRest(__VLS_76));
__VLS_78.slots.default;
const __VLS_79 = {}.FullScreen;
/** @type {[typeof __VLS_components.FullScreen, ]} */ ;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({}));
const __VLS_81 = __VLS_80({}, ...__VLS_functionalComponentArgsRest(__VLS_80));
var __VLS_78;
var __VLS_70;
const __VLS_83 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({
    ...{ 'onClick': {} },
}));
const __VLS_85 = __VLS_84({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
let __VLS_87;
let __VLS_88;
let __VLS_89;
const __VLS_90 = {
    onClick: (__VLS_ctx.toggleLanguage)
};
__VLS_86.slots.default;
(__VLS_ctx.locale === 'zh-CN' ? '简体中文' : 'English');
var __VLS_86;
const __VLS_91 = {}.ElDropdown;
/** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({}));
const __VLS_93 = __VLS_92({}, ...__VLS_functionalComponentArgsRest(__VLS_92));
__VLS_94.slots.default;
const __VLS_95 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({}));
const __VLS_97 = __VLS_96({}, ...__VLS_functionalComponentArgsRest(__VLS_96));
__VLS_98.slots.default;
const __VLS_99 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({}));
const __VLS_101 = __VLS_100({}, ...__VLS_functionalComponentArgsRest(__VLS_100));
__VLS_102.slots.default;
const __VLS_103 = {}.User;
/** @type {[typeof __VLS_components.User, ]} */ ;
// @ts-ignore
const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({}));
const __VLS_105 = __VLS_104({}, ...__VLS_functionalComponentArgsRest(__VLS_104));
var __VLS_102;
var __VLS_98;
{
    const { dropdown: __VLS_thisSlot } = __VLS_94.slots;
    const __VLS_107 = {}.ElDropdownMenu;
    /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
    // @ts-ignore
    const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({}));
    const __VLS_109 = __VLS_108({}, ...__VLS_functionalComponentArgsRest(__VLS_108));
    __VLS_110.slots.default;
    const __VLS_111 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({
        ...{ 'onClick': {} },
    }));
    const __VLS_113 = __VLS_112({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_112));
    let __VLS_115;
    let __VLS_116;
    let __VLS_117;
    const __VLS_118 = {
        onClick: (...[$event]) => {
            __VLS_ctx.router.push('/profile');
        }
    };
    __VLS_114.slots.default;
    var __VLS_114;
    const __VLS_119 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({
        ...{ 'onClick': {} },
    }));
    const __VLS_121 = __VLS_120({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_120));
    let __VLS_123;
    let __VLS_124;
    let __VLS_125;
    const __VLS_126 = {
        onClick: (...[$event]) => {
            __VLS_ctx.router.push('/messages');
        }
    };
    __VLS_122.slots.default;
    var __VLS_122;
    const __VLS_127 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({
        ...{ 'onClick': {} },
    }));
    const __VLS_129 = __VLS_128({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_128));
    let __VLS_131;
    let __VLS_132;
    let __VLS_133;
    const __VLS_134 = {
        onClick: (...[$event]) => {
            __VLS_ctx.router.push('/settings');
        }
    };
    __VLS_130.slots.default;
    var __VLS_130;
    const __VLS_135 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({
        ...{ 'onClick': {} },
        divided: true,
    }));
    const __VLS_137 = __VLS_136({
        ...{ 'onClick': {} },
        divided: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_136));
    let __VLS_139;
    let __VLS_140;
    let __VLS_141;
    const __VLS_142 = {
        onClick: (__VLS_ctx.logoutFn)
    };
    __VLS_138.slots.default;
    var __VLS_138;
    var __VLS_110;
}
var __VLS_94;
var __VLS_35;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['nav-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['nar-l']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-r']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Fold: Fold,
            Expand: Expand,
            Bell: Bell,
            FullScreen: FullScreen,
            User: User,
            SearchInput: SearchInput,
            menuStore: menuStore,
            router: router,
            locale: locale,
            breadcrumb: breadcrumb,
            toggleFullScreen: toggleFullScreen,
            toggleLanguage: toggleLanguage,
            logoutFn: logoutFn,
            toggleCollapse: toggleCollapse,
            capitalize: capitalize,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
