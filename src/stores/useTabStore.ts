import { defineStore } from "pinia";
import { ref } from "vue";

interface TabItem {
  title: string;
  path: string;
}

export const useTabStore = defineStore("tabStore", () => {
  const tabs = ref<TabItem[]>([
    { title: "Home", path: "/home" }
  ]);

  // 添加标签页
  const addTab = (tab: TabItem) => {
    if (!tabs.value.some(t => t.path === tab.path)) {
      tabs.value.push(tab);
    }
  };

  // 移除标签页
  const removeTab = (path: string) => {
    tabs.value = tabs.value.filter(tab => tab.path !== path);
  };

  // 关闭所有标签（保留首页）
  const closeAllTabs = () => {
    tabs.value = tabs.value.filter(tab => tab.path === "/home");
  };

  return { tabs, addTab, removeTab, closeAllTabs };
});