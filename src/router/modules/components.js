import { Opportunity, StarFilled } from "@element-plus/icons-vue";
const componentRoutes = {
    path: "/components",
    name: "Components",
    meta: {
        notClickBread: true,
        title: "反馈组件",
        icon: Opportunity,
    },
    children: [
        {
            path: "/message",
            name: "Message",
            component: () => import("@/views/components/Message.vue"),
            meta: {
                title: "Message",
                icon: StarFilled,
            },
        },
        {
            path: "/alert",
            name: "Alert",
            component: () => import("@/views/components/Alert.vue"),
            meta: {
                title: "Alert",
                icon: StarFilled,
            },
        },
        {
            path: "/dialog",
            name: "Dialog",
            component: () => import("@/views/components/Dialog.vue"),
            meta: {
                title: "Dialog",
                icon: StarFilled,
            },
        },
        // {
        //   path: "/drawer",
        //   name: "DrawerDemo",
        //   component: () => import("@/views/components/drawer/index.vue"),
        //   meta: { 
        //     title: "Drawer", 
        //     icon: StarFilled,
        //   },
        // },
        {
            path: "/loading",
            name: "Loading",
            component: () => import("@/views/components/Loading.vue"),
            meta: {
                title: "Loading",
                icon: StarFilled,
            },
        },
        {
            path: "/messageBox",
            name: "MessageBox",
            component: () => import("@/views/components/MessageBox.vue"),
            meta: {
                title: "MessageBox",
                icon: StarFilled,
            },
        },
        {
            path: "/popconfirm",
            name: "Popconfirm",
            component: () => import("@/views/components/Popconfirm.vue"),
            meta: {
                title: "Popconfirm",
                icon: StarFilled,
            },
        },
        {
            path: "/popover",
            name: "Popover",
            component: () => import("@/views/components/Popover.vue"),
            meta: {
                title: "Popover",
                icon: StarFilled,
            },
        },
        {
            path: "/tooltip",
            name: "Tooltip",
            component: () => import("@/views/components/Tooltip.vue"),
            meta: {
                title: "Tooltip",
                icon: StarFilled,
            },
        },
    ],
};
export default componentRoutes;
