import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    isCollapse: false,
    activeTabs: [{ path: "/home", title: "Home" }],
    fontSize: "default",
    notifications: [
      { id: 1, title: "新订单", type: "order" },
      { id: 2, title: "系统更新", type: "system" },
    ],
  }),
  getters: {
    // 获取所有路由菜单项
    menuItems() {
      const router = useRouter();
      return router.getRoutes()
        .filter(route => route.meta?.title && !route.meta?.hidden)
        .map(route => ({
          path: route.path,
          title: route.meta.title,
        }));
    }
  },
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    addTab(route: { path: string; title: string }) {
      if (!this.activeTabs.find((tab) => tab.path === route.path)) {
        this.activeTabs.push(route);
      }
    },
    removeTab(path: string) {
      this.activeTabs = this.activeTabs.filter((tab) => tab.path !== path);
    },
    changeFontSize(size: string) {
      this.fontSize = size;
    },
  },
});
