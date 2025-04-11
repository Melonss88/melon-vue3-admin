import { Opportunity, StarFilled } from "@element-plus/icons-vue";
const tableRoutes = {
    path: "/table",
    name: "Table",
    meta: {
        notClickBread: true,
        title: "表格",
        icon: Opportunity,
    },
    children: [
        {
            path: "/table/basic",
            name: "TableBasic",
            component: () => import("@/views/table/TableBasic.vue"),
            meta: {
                title: "Basic Table",
                icon: StarFilled,
            },
        },
        {
            path: "/table/highlight",
            name: "TableHighlight",
            component: () => import("@/views/table/TableHighlight.vue"),
            meta: {
                title: "Highlight Table",
                icon: StarFilled,
            },
        },
        {
            path: "/table/overflow",
            name: "TableOverflow",
            component: () => import("@/views/table/TableOverflow.vue"),
            meta: {
                title: "Overflow Table",
                icon: StarFilled,
            },
        },
        {
            path: "/table/fix",
            name: "TableFix",
            component: () => import("@/views/table/TableFix.vue"),
            meta: {
                title: "Fix Table",
                icon: StarFilled,
            },
        },
        {
            path: "/table/selection",
            name: "TableSelection",
            component: () => import("@/views/table/TableSelection.vue"),
            meta: {
                title: "Selection Table",
                icon: StarFilled,
            },
        },
        {
            path: "/table/filter",
            name: "TableFilter",
            component: () => import("@/views/table/TableFilter.vue"),
            meta: {
                title: "Filter Table",
                icon: StarFilled,
            },
        },
    ],
};
export default tableRoutes;
