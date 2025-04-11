<template>
    <div class="forbidden-page">
      <div class="error-content">
        <div>
          <el-icon><QuestionFilled /></el-icon>
        </div>
        <div>
            <div class="error-code">404</div>
            <div class="error-message">抱歉，您访问的页面不存在~</div>
            <el-button 
                type="primary" 
                size="large" 
                @click="goHome"
                class="home-button"
                >
                返回首页
            </el-button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts" name='404'>
  import { useRouter } from 'vue-router'
  import { QuestionFilled } from '@element-plus/icons-vue';
  
  const router = useRouter()
  
  const goHome = () => {
    router.push('/')
  }
  </script>
  
  <style scoped>
  .forbidden-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 200px 50px;
  }
  
  .error-content {
    display: flex;
    align-items: center;
  }
  .el-icon {
    font-size: 150px;
    margin-right: 30px;
    color: #606266;
  }
  
  .error-code {
    font-size: 60px;
    color: #000;
  }
  
  .error-message {
    font-size: 24px;
    color: #606266;
    margin-bottom: 30px;
  }
  
  .home-button {
    padding: 12px 36px;
    font-size: 16px;
    border-radius: 4px;
  }
  </style>