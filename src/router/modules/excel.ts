import { Document, StarFilled } from "@element-plus/icons-vue";
import { RouteRecordRaw } from "vue-router";

const carouselRoutes: RouteRecordRaw = {
  path: "/excel",
  name: "Excel",
  meta: {
    notClickBread: true,
    title: "Excel 表格",
    icon: Document,
  },
  children: [
    {
      path: "/excel/export",
      name: "ExcelExport",
      component: () => import("@/views/excel/ExcelExport.vue"),
      meta: { 
        title: "Export Excel", 
        icon: StarFilled,
      },
    },
    {
      path: "/excel/upload",
      name: "ExcelUpload",
      component: () => import("@/views/excel/ExcelUpload.vue"),
      meta: { 
        title: "Export Upload", 
        icon: StarFilled,
      },
    },
  ],
};

export default carouselRoutes;
