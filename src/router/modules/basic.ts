import { Operation, StarFilled } from "@element-plus/icons-vue";
import { RouteRecordRaw } from "vue-router";

const basicRoutes: RouteRecordRaw = {
  path: "/basic",
  name: "Basic",
  meta: {
    notClickBread: true,
    title: "基础组件",
    icon: Operation,
  },
  children: [
    {
      path: "/button",
      name: "Button",
      component: () => import("@/views/basic/Button.vue"),
      meta: { 
        title: "Button", 
        icon: StarFilled,
      },
    },
    {
      path: "/icon",
      name: "Icon",
      component: () => import("@/views/basic/Icon.vue"),
      meta: { 
        title: "Icon", 
        icon: StarFilled,
      },
    },
    {
      path: "/i18n",
      name: "I18n",
      component: () => import("@/views/basic/I18n.vue"),
      meta: { 
        title: "I18n", 
        icon: StarFilled,
      },
    },
    {
      path: "/autocomplete",
      name: "Autocomplete",
      component: () => import("@/views/basic/Autocomplete.vue"),
      meta: { 
        title: "Autocomplete", 
        icon: StarFilled,
      },
    },
    {
      path: "/cascader",
      name: "Cascader",
      component: () => import("@/views/basic/Cascader.vue"),
      meta: { 
        title: "Cascader", 
        icon: StarFilled,
      },
    },
    {
      path: "/datePicker",
      name: "DatePicker",
      component: () => import("@/views/basic/DatePicker.vue"),
      meta: { 
        title: "DatePicker", 
        icon: StarFilled,
      },
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("@/views/basic/Form.vue"),
      meta: { 
        title: "Form", 
        icon: StarFilled,
      },
    },
    {
      path: "/rate",
      name: "Rate",
      component: () => import("@/views/basic/Rate.vue"),
      meta: { 
        title: "Rate", 
        icon: StarFilled,
      },
    },
    {
      path: "/select",
      name: "Select",
      component: () => import("@/views/basic/Select.vue"),
      meta: { 
        title: "Select", 
        icon: StarFilled,
      },
    },
    {
      path: "/switch",
      name: "Switch",
      component: () => import("@/views/basic/Switch.vue"),
      meta: { 
        title: "Switch", 
        icon: StarFilled,
      },
    },
    {
      path: "/steps",
      name: "Steps",
      component: () => import("@/views/basic/Steps.vue"),
      meta: { 
        title: "Steps", 
        icon: StarFilled,
      },
    },
  ],
};

export default basicRoutes;
