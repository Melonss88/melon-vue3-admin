<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useMenuStore } from "@/stores/menu";
import { Search } from "@element-plus/icons-vue";

const menuStore = useMenuStore();
const router = useRouter();

const searchQuery = ref("");

// 动态获取搜索结果
const searchResults = computed(() =>
  menuStore.menuItems.filter(item =>
    item.path.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const handleSearch = (path: string) => {
  router.push(path);
  searchQuery.value = "";
};

defineExpose({
  searchQuery,
  searchResults
});
</script>

<template>
  <div class="search-container">
    <!-- 搜索框 -->
    <el-input 
      v-model="searchQuery" 
      placeholder="搜索路由..." 
      clearable
      class="search-input"
    >
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>

    <!-- 搜索结果展示 -->
    <el-card v-if="searchQuery" class="search-results">
      <el-menu>
        <el-menu-item
          v-for="item in searchResults"
          :key="item.path"
          @click="handleSearch(item.path)"
        >
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<style scoped lang="less">
.search-container {
  position: relative;
  
  .search-input {
    width: 120px;
    
    :deep(.el-input__wrapper) {
      border-radius: 16px;
      background-color: #f5f7fa;
      
      &:hover {
        background-color: #e6e8eb;
      }
    }
  }

  .search-results {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 2000;
    margin-top: 5px;
    width: 300px;
    max-height: 400px;
    overflow-y: auto;
  }
}
</style>
