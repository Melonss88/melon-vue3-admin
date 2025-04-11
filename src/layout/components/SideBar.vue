<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTabStore } from "@/stores/useTabStore";
import {
  HomeFilled,
  Document,
  Grid,
  Lock,
  Star,
  Link,
  WarnTriangleFilled,
  StarFilled,
  Opportunity
} from "@element-plus/icons-vue";
import { routes as rawRoutes } from "@/router";

const router = useRouter();
const route = useRoute();
const tabStore = useTabStore();

// 定义菜单项类型
interface MenuItem {
  path: string;
  title: string;
  icon: any;
  children?: MenuItem[];
}

// 图标名称到组件的映射
const iconMap: Record<string, any> = {
  home: HomeFilled,
  document: Document,
  components: Grid,
  lock: Lock,
  star: Star,
  link: Link,
  default: Document,
};

// 从路由生成菜单项
const menuItems = computed<MenuItem[]>(() => {
  const layoutRoute = rawRoutes.find(r => r.path === "/");
  if (!layoutRoute || !layoutRoute.children) return [];

  return layoutRoute.children
    .filter(route => !route.meta?.hidden)
    .map(route => {
      const menuItem: MenuItem = {
        path: route.path,
        title: route.meta?.title?.toString() || route.name?.toString() || "未命名页面",
        icon: route.meta?.icon || iconMap.default,
        children: route.children?.filter(child => !child.meta?.hidden).map(child => ({
          path: child.path,
          title: child.meta?.title?.toString() || child.name?.toString() || "未命名页面",
          icon: child.meta?.icon || iconMap.default,
        }))
      };

      return menuItem;
    });
});

const handleMenuClick = (item: MenuItem) => {
  // 如果是没有子菜单的路由，执行跳转并添加 tab
  if (!item.children) {
    tabStore.addTab({
      title: item.title,
      path: item.path,
    });

    // 确保不重复跳转相同路径
    if (route.path !== item.path) {
      router.push(item.path).catch(err => {
        console.error("路由跳转失败", err);
      });
    }
  }
};

defineProps<{ collapse: boolean }>();
</script>

<template>
  <el-aside width="auto">
    <div class="aside-admin" :class="{ 'collapsed': collapse }">
      {{ collapse ? 'M' : 'Melon-Vue3-admin' }}
    </div>
    <el-menu
      :default-active="route.path"
      :collapse="collapse"
      class="sidebar"
      :router="true"
    >
      <template v-for="item in menuItems" :key="item.path">
        <!-- 有子菜单的情况 -->
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.path"
            :index="child.path"
            @click="() => handleMenuClick(child)"
          >
            <el-icon>
              <component :is="child.icon" />
            </el-icon>
            <span>{{ child.title }}</span>
          </el-menu-item>
        </el-sub-menu>
        
        <!-- 没有子菜单的情况 -->
        <el-menu-item
          v-else
          :index="item.path"
          @click="() => handleMenuClick(item)"
        >
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<style lang="less">
.sidebar-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; 
}

.aside-admin {
  text-align: center;
  font-size: 20px;
  padding: 15px 0;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s;
  color: #fff;
  background-color: #304156;

  &.collapsed {
    font-size: 24px;
    padding: 12px 0;
  }
}

.sidebar {
  flex: 1;
  border-right: none;
  overflow: hidden;
  
  &:hover {
    overflow-y: auto;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 3px;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(144, 147, 153, 0.5);
    }
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
}

.el-menu {
  background-color: #304156;
  border-right: none;
  
  .el-menu-item, .el-sub-menu__title {
    color: #bfcbd9;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.1) !important;
    }
  }
  
  .el-menu-item.is-active {
    color: #409EFF;
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  
  .el-icon {
    color: inherit;
  }
}

.el-menu--collapse {
  .el-menu-item, .el-sub-menu__title {
    padding: 0 calc(50% - 12px);
  }
  
  .el-sub-menu {
    position: relative;
    
    :deep(.el-sub-menu__icon-arrow) {
      display: none;
    }
  }
}
</style>