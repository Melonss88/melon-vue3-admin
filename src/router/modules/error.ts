import { WarnTriangleFilled,StarFilled } from "@element-plus/icons-vue";
import { RouteRecordRaw } from "vue-router";

const errorRoutes: RouteRecordRaw = {
  path: "/error",
  name: "Error",
  redirect: "/error/404",
  meta: {
    notClickBread: true,
    title: "Error",
    icon: WarnTriangleFilled,
  },
  children: [
    {
        path: "/403",
        name: "403",
        component: () => import("@/views/error-page/403.vue"),
        meta: { 
            title: "403", 
            icon: StarFilled,
        }
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/error-page/404.vue"),
      meta: { 
          title: "404", 
          icon: StarFilled,
      }
    },
    {
      path: "/500",
      name: "500",
      component: () => import("@/views/error-page/500.vue"),
      meta: { 
          title: "500", 
          icon: StarFilled,
      }
    },
  ],
};

export default errorRoutes;
