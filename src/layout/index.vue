<template>
    <el-container class="layout-container">
      <!-- 侧边栏 -->
      <el-aside :width="menuStore.isCollapse ? '80px' : '200px'">
        <SideBar :collapse="menuStore.isCollapse" />
      </el-aside>
  
      <el-container>
        <!-- 顶部导航 -->
        <el-header>
          <NavBar />
        </el-header>
  
        <!-- 主体内容 -->
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script setup>
    import SideBar from "./components/SideBar.vue";
    import NavBar from "./components/nav/NavBar.vue";
    import AppMain from "./components/AppMain.vue";
    import { useMenuStore } from "@/stores/menu";
    const menuStore = useMenuStore();

  </script>
  
  <style scoped>
  .layout-container {
    height: 100vh;
    display: flex;
  }

  .el-aside {
    background: #304156;
  }
  
  .el-header {
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    z-index: 1;
  }
  
  .el-main {
    background: #f5f7fa;
  }
  :deep(.el-main) {
    padding: 0;
  }
  </style>
  