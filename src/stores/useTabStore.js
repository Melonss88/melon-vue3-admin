import { defineStore } from "pinia";
import { ref } from "vue";
export const useTabStore = defineStore("tabStore", () => {
    const tabs = ref([
        { title: "Home", path: "/home" }
    ]);
    // 添加标签页
    const addTab = (tab) => {
        if (!tabs.value.some(t => t.path === tab.path)) {
            tabs.value.push(tab);
        }
    };
    // 移除标签页
    const removeTab = (path) => {
        tabs.value = tabs.value.filter(tab => tab.path !== path);
    };
    // 关闭所有标签（保留首页）
    const closeAllTabs = () => {
        tabs.value = tabs.value.filter(tab => tab.path === "/home");
    };
    return { tabs, addTab, removeTab, closeAllTabs };
});
