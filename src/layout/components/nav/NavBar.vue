<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMenuStore } from "@/stores/menu";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";
import {
  Fold,
  Expand,
  Bell,
  FullScreen,
  User,
} from "@element-plus/icons-vue";
import SearchInput from "./SearchInput.vue"; 
import {useUserStore} from '@/stores/user'

const menuStore = useMenuStore();
const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();
const userStore = useUserStore()

const isFullScreen = ref(false);

// 面包屑导航
const breadcrumb = computed(() => route.path.split("/").filter(Boolean));

// 全屏切换
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  } else {
    document.exitFullscreen();
    isFullScreen.value = false;
  }
};

// 多语言切换
const toggleLanguage = () => {
  locale.value = locale.value === "zh-CN" ? "en" : "zh-CN";
};

// 退出登录
const logoutFn = async () => {
  userStore.logout();
  ElMessage.success(t("logout.success"));
  router.push("/login");
};
// 切换折叠状态
const toggleCollapse = () => {
  menuStore.toggleCollapse();
};

// 首字母大写
const capitalize = (info:string) => {
  return info.charAt(0).toUpperCase() + info.slice(1);
};
</script>

<template>
  <div class="nav-bar">
    <el-row justify="space-between" align="middle">
      <el-col :xs="8" :sm="6" :md="5">
        <div class="nar-l">
          <div class="collapse-btn" @click="toggleCollapse">
            <el-icon :size="20">
              <component :is="menuStore.isCollapse ? Expand : Fold" />
            </el-icon>
          </div>

          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
              <el-button v-if="index === 0" type="primary" link @click="router.push('/')">
                {{ capitalize(item) }}
              </el-button>
              <span v-else>{{ capitalize(item) }}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>

      <el-col :xs="16" :sm="18" :md="19">
        <div class="nav-r">
          <!-- 使用搜索组件 -->
          <SearchInput />

          <!-- 通知 -->
          <el-dropdown>
            <el-button>
              <el-icon><Bell /></el-icon>
              <el-badge :value="menuStore.notifications.length" />
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="item in menuStore.notifications" :key="item.id">
                  {{ item.title }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <!-- 全屏 -->
          <el-button @click="toggleFullScreen">
            <el-icon><FullScreen /></el-icon>
          </el-button>

          <!-- 语言切换 -->
          <el-button @click="toggleLanguage">
            {{ locale === 'zh-CN' ? '简体中文' : 'English' }}
          </el-button>

          <!-- 用户菜单 -->
          <el-dropdown>
            <el-button>
              <el-icon><User /></el-icon> visitor
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/user')">我的主页</el-dropdown-item>
                <!-- <el-dropdown-item @click="router.push('/messages')">我的消息</el-dropdown-item>
                <el-dropdown-item @click="router.push('/settings')">我的设置</el-dropdown-item> -->
                <el-dropdown-item divided @click="logoutFn">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.nav-bar {
  height: inherit;
  :deep(.el-row) {
    flex-wrap: nowrap;
    min-width: 0; 
    height: inherit;
  }

  .nar-l {
    display: flex;
    .collapse-btn {
      cursor: pointer;
      margin-right: 10px;
    }
  }
  .nav-r {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    .el-button, .el-dropdown {
      flex-shrink: 0;
      padding: 8px 12px;
    }
  }
}
</style>