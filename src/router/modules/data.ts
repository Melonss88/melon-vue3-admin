import { Opportunity, StarFilled } from "@element-plus/icons-vue";
import { RouteRecordRaw } from "vue-router";

const carouselRoutes: RouteRecordRaw = {
  path: "/data",
  name: "Data",
  meta: {
    notClickBread: true,
    title: "Data 数据",
    icon: Opportunity,
  },
  children: [
    {
      path: "/scroll",
      name: "Scroll",
      component: () => import("@/views/data/Scroll.vue"),
      meta: { 
        title: "Scroll", 
        icon: StarFilled,
      },
    },
    {
      path: "/pagination",
      name: "Pagination",
      component: () => import("@/views/data/Pagination.vue"),
      meta: { 
        title: "Pagination", 
        icon: StarFilled,
      },
    },
    {
      path: "/progress",
      name: "Progress",
      component: () => import("@/views/data/Progress.vue"),
      meta: { 
        title: "Progress", 
        icon: StarFilled,
      },
    },
    {
      path: "/card",
      name: "Card",
      component: () => import("@/views/data/Card.vue"),
      meta: { 
        title: "Card", 
        icon: StarFilled,
      },
    },
    {
      path: "/skeleton",
      name: "Skeleton",
      component: () => import("@/views/data/Skeleton.vue"),
      meta: { 
        title: "Skeleton", 
        icon: StarFilled,
      },
    },
  ],
};

export default carouselRoutes;
