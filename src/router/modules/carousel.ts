import { Opportunity, StarFilled } from "@element-plus/icons-vue";
import { RouteRecordRaw } from "vue-router";

const carouselRoutes: RouteRecordRaw = {
  path: "/carousel",
  name: "Carousel",
  meta: {
    notClickBread: true,
    title: "走马灯",
    icon: Opportunity,
  },
  children: [
    {
      path: "/carousel-basic",
      name: "CarouselBasic",
      component: () => import("@/views/carousel/CarouselBasic.vue"),
      meta: { 
        title: "Basic Carousel", 
        icon: StarFilled,
      },
    },
    {
      path: "/carousel-card",
      name: "CarouselCard",
      component: () => import("@/views/carousel/CarouselCard.vue"),
      meta: { 
        title: "Card Carousel", 
        icon: StarFilled,
      },
    },
  ],
};

export default carouselRoutes;
