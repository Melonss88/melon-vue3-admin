import { defineStore } from "pinia";
import { ref, watch } from "vue";

interface TabItem {
  title: string;
  path: string;
}

const loadTabs = (): TabItem[] => {
  const saved = localStorage.getItem('tabStore');
  return saved ? JSON.parse(saved) : [{ title: "Home", path: "/home" }];
};

export const useTabStore = defineStore("tabStore", () => {
  const tabs = ref<TabItem[]>(loadTabs());
  const activeTab = ref<string>(localStorage.getItem('activeTab') || '/home');

  const persistTabs = () => {
    localStorage.setItem('tabStore', JSON.stringify(tabs.value));
    localStorage.setItem('activeTab', activeTab.value);
  };

  watch([tabs, activeTab], () => {
    persistTabs();
  }, { deep: true });

  // 添加标签页
  const addTab = (tab: TabItem) => {
    // 标准化路径（确保以/开头）
    const normalizedPath = tab.path.startsWith('/') ? tab.path : `/${tab.path}`;
    
    if (!tabs.value.some(t => t.path === normalizedPath)) {
      tabs.value.push({
        ...tab,
        path: normalizedPath
      });
    }
    activeTab.value = normalizedPath;
  };

  // 移除标签页
  const removeTab = (path: string) => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    tabs.value = tabs.value.filter(tab => tab.path !== normalizedPath);
    
    // 如果删除的是当前活动标签，自动激活上一个标签
    if (activeTab.value === normalizedPath) {
      activeTab.value = tabs.value[tabs.value.length - 1]?.path || '/home';
    }
  };

  // 关闭所有标签
  const closeAllTabs = () => {
    tabs.value = [{ title: "Home", path: "/home" }];
    activeTab.value = '/home';
  };

  return { 
    tabs, 
    activeTab,
    addTab, 
    removeTab, 
    closeAllTabs 
  };
});