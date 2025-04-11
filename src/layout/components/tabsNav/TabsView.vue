<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { useTabStore } from "@/stores/useTabStore";
import { Close, ArrowDown, Refresh, CircleClose } from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();
const tabStore = useTabStore();
const moreVisible = ref(false);

// 关闭当前标签页
const closeCurrentTab = () => {
  if (route.path === "/home") return;
  
  const currentIndex = tabStore.tabs.findIndex(tab => tab.path === route.path);
  tabStore.removeTab(route.path);
  
  // 跳转到相邻标签页
  const newIndex = Math.min(currentIndex, tabStore.tabs.length - 1);
  router.push(tabStore.tabs[newIndex]?.path || "/home");
};

// 关闭所有标签页（保留首页）
const closeAllTabs = () => {
  tabStore.tabs = tabStore.tabs.filter(tab => tab.path === "/home");
  router.push("/home");
};

// 刷新当前页
const refreshPage = () => {
  ElMessage.success("刷新中...");
  router.replace({ path: "/redirect" + route.fullPath }).then(() => {
    router.replace(route.fullPath);
  });
};
</script>

<template>
  <div class="tab-container">
    <div class="tab-list">
      <div
        v-for="tab in tabStore.tabs"
        :key="tab.path"
        class="tab-item"
        :class="{ active: tab.path === route.path }"
        @click="router.push(tab.path)"
      >
        <span>{{ tab.title }}</span>
        <el-icon
          v-if="tab.path !== '/home'"
          class="close-icon"
          @click.stop="tabStore.removeTab(tab.path)"
        >
          <Close />
        </el-icon>
      </div>
    </div>

    <!-- 更多操作下拉菜单 -->
    <el-dropdown v-model:visible="moreVisible" trigger="click">
      <el-button class="more-btn" size="small">
        更多操作<el-icon><ArrowDown /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="refreshPage">
            <el-icon><Refresh /></el-icon>刷新当前页
          </el-dropdown-item>
          <el-dropdown-item 
            @click="closeCurrentTab" 
            :disabled="tabStore.tabs.length <= 1"
          >
            <el-icon><Close /></el-icon>关闭当前页
          </el-dropdown-item>
          <el-dropdown-item 
            @click="closeAllTabs" 
            :disabled="tabStore.tabs.length <= 1"
          >
            <el-icon><CircleClose /></el-icon>关闭所有页
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="less">
.tab-container {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 16px;
  border-bottom: 1px solid #e6e8eb;
  height: 40px;
}

.tab-list {
  display: flex;
  flex-grow: 1;
  gap: 6px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.tab-item {
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  height: 28px;
  border-radius: 3px;
  border: 1px solid #e4e7ed;
  cursor: pointer;
  font-size: 12px;
  background: #f0f2f5;
  color: #606266;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: #e6e8eb;
    .close-icon {
      opacity: 1;
    }
  }

  &.active {
    background: #1890ff;
    color: white;
    border-color: #1890ff;
    .close-icon {
      color: white;
      opacity: 1;
    }
  }
}

.close-icon {
  margin-left: 4px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s;
  padding: 1px;
  border-radius: 50%;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}

.more-btn {
  margin-left: 12px;
  padding: 6px 10px;
  font-size: 12px;
}
</style>