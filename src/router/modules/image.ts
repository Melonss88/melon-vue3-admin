import { PictureFilled, StarFilled } from "@element-plus/icons-vue";
import { RouteRecordRaw } from "vue-router";

const carouselRoutes: RouteRecordRaw = {
  path: "/image",
  name: "Image",
  meta: {
    notClickBread: true,
    title: "Image",
    icon: PictureFilled,
  },
  children: [
    {
      path: "/avatar",
      name: "Avatar",
      component: () => import("@/views/image/Avatar.vue"),
      meta: { 
        title: "Avatar", 
        icon: StarFilled,
      },
    },
    {
      path: "/lazy",
      name: "Lazy",
      component: () => import("@/views/image/Lazy.vue"),
      meta: { 
        title: "Lazy", 
        icon: StarFilled,
      },
    },
    {
      path: "/watermark",
      name: "Watermark",
      component: () => import("@/views/image/Watermark.vue"),
      meta: { 
        title: "Watermark", 
        icon: StarFilled,
      },
    },
    {
      path: "/upload",
      name: "Upload",
      component: () => import("@/views/image/Upload.vue"),
      meta: { 
        title: "Upload", 
        icon: StarFilled,
      },
    },
  ],
};

export default carouselRoutes;
