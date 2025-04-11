<template>
    <div class="login-container">
      <div class="login-box">
        <div class="title">Melon-Vue3-admin</div>
        <el-form :model="form" :rules="rules" ref="loginFormRef" class="form" label-position="top">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="用户名（任意）" prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="密码（任意）" show-password prefix-icon="Lock" />
          </el-form-item>
          <el-form-item prop="captcha">
            <div class="captcha-row">
              <el-input v-model="form.captcha" placeholder="验证码" prefix-icon="Warning" />
              <SimpleCaptcha v-model:code="generatedCaptcha" />
            </div>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.rememberMe">记住密码</el-checkbox>
            <span class="forgot">忘记密码？</span>
          </el-form-item>
          <el-form-item>
            <el-button @click="onReset">重置</el-button>
            <el-button type="primary" @click="onLogin">登录</el-button>
          </el-form-item>
  
          <div class="login-options">
            <el-button plain>手机号登录</el-button>
            <el-button plain>二维码登录</el-button>
            <el-button plain>注册登录</el-button>
          </div>
  
          <div class="third-login">
            <span>第三方登录</span>
            <div class="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.048 3.323c.022.277-.13.523-.338.55c-.21.026-.397-.176-.419-.453s.13-.523.338-.55c.21-.026.397.176.42.453Zm2.265-.24c-.603-.146-.894.256-.936.333c-.027.048-.008.117.037.15c.045.035.092.025.119-.003c.361-.39.751-.172.829-.129l.011.007c.053.024.147.028.193-.098c.023-.063.017-.11-.006-.142c-.016-.023-.089-.08-.247-.118"/><path d="M11.727 6.719c0-.022.01-.375.01-.557c0-3.07-1.45-6.156-5.015-6.156S1.708 3.092 1.708 6.162c0 .182.01.535.01.557l-.72 1.795a26 26 0 0 0-.534 1.508c-.68 2.187-.46 3.093-.292 3.113c.36.044 1.401-1.647 1.401-1.647c0 .979.504 2.256 1.594 3.179c-.408.126-.907.319-1.228.556c-.29.213-.253.43-.201.518c.228.386 3.92.246 4.985.126c1.065.12 4.756.26 4.984-.126c.052-.088.088-.305-.2-.518c-.322-.237-.822-.43-1.23-.557c1.09-.922 1.594-2.2 1.594-3.178c0 0 1.041 1.69 1.401 1.647c.168-.02.388-.926-.292-3.113a26 26 0 0 0-.534-1.508l-.72-1.795ZM9.773 5.53a.1.1 0 0 1-.009.096c-.109.159-1.554.943-3.033.943h-.017c-1.48 0-2.925-.784-3.034-.943a.1.1 0 0 1-.018-.055q0-.022.01-.04c.13-.287 1.43-.606 3.042-.606h.017c1.611 0 2.912.319 3.042.605m-4.32-.989c-.483.022-.896-.529-.922-1.229s.344-1.286.828-1.308c.483-.022.896.529.922 1.23c.027.7-.344 1.286-.827 1.307Zm2.538 0c-.484-.022-.854-.607-.828-1.308c.027-.7.44-1.25.923-1.23c.483.023.853.608.827 1.309c-.026.7-.439 1.251-.922 1.23ZM2.928 8.99q.32.063.639.117v2.336s1.104.222 2.21.068V9.363q.49.027.937.023h.017c1.117.013 2.474-.136 3.786-.396c.097.622.151 1.386.097 2.284c-.146 2.45-1.6 3.99-3.846 4.012h-.091c-2.245-.023-3.7-1.562-3.846-4.011c-.054-.9 0-1.663.097-2.285"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018c0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117a.166.166 0 0 1-.162.162a.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074a.5.5 0 0 0-.142.021a5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1a.645.645 0 0 0-.646.647a.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1a.645.645 0 0 0-.644.644a.63.63 0 0 0 .098.356"/><path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6l-.1.373a.5.5 0 0 0-.032.14a.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26a4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2C2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0a.77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0a.77.77 0 0 1 1.54 0"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor"><path d="M10.878 1.093a4.23 4.23 0 0 1 4.031 1.305a4.22 4.22 0 0 1 .886 4.14v.001a.612.612 0 0 1-1.166-.377a3.01 3.01 0 0 0-3.495-3.873a.611.611 0 1 1-.256-1.196M3.753 9.465c.548-1.11 1.972-1.74 3.233-1.411c1.304.338 1.971 1.568 1.437 2.764c-.541 1.221-2.095 1.875-3.416 1.449c-1.271-.411-1.812-1.67-1.254-2.802m2.658.567c.16.066.365-.009.458-.168c.088-.16.03-.34-.129-.397c-.156-.062-.353.013-.446.168c-.09.154-.041.333.117.397m-1.607 1.314c.413.188.963.009 1.219-.4c.252-.413.12-.883-.296-1.062c-.41-.172-.94.005-1.194.402c-.256.4-.135.874.271 1.06"/><path d="m12.014 7.238l.005.001c.919.285 1.941.974 1.939 2.188c0 2.007-2.895 4.535-7.246 4.535C3.393 13.962 0 12.352 0 9.708c0-1.385.876-2.985 2.384-4.493C4.4 3.199 6.751 2.28 7.634 3.165c.39.392.427 1.065.177 1.87c-.132.405.38.182.38.182c1.63-.682 3.051-.722 3.57.02c.278.397.252.951-.004 1.594c-.116.293.035.34.257.407m-10.4 3.101c.172 1.738 2.46 2.936 5.109 2.674c2.647-.26 4.656-1.883 4.482-3.623c-.17-1.738-2.458-2.937-5.107-2.674c-2.647.263-4.656 1.883-4.484 3.623m11.681-6.484a2.06 2.06 0 0 0-1.962-.634a.526.526 0 1 0 .219 1.031a1.008 1.008 0 0 1 1.17 1.296a.528.528 0 0 0 1.005.325a2.06 2.06 0 0 0-.432-2.018"/></g></svg>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { useUserStore } from '@/stores/user'
  import { useRouter, useRoute } from 'vue-router'
  import SimpleCaptcha from './SimpleCaptcha.vue'
  
  const router = useRouter()
  const route = useRoute()
  const userStore = useUserStore()
  
  const form = ref({
    username: 'admin',
    password: '123456',
    captcha: '',
    rememberMe: false
  })

  const rules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
  };
  
  // 记录当前图形验证码
  const generatedCaptcha = ref('')
  
  const onLogin = async () => {
    const input = form.value.captcha?.toLowerCase()
    const actual = generatedCaptcha.value?.toLowerCase()

    if (!input || input !== actual) {
      ElMessage.error('验证码错误，请重新输入')
      return
    }
  
    try {
      const { username, password, captcha } = form.value
      const success = await userStore.login(username, password, captcha)
      
      if (success) {
        ElMessage.success('登录成功')
        const redirect = route.query.redirect?.toString() || '/home'
        router.push(redirect)
      }
    } catch (error) {
      ElMessage.error('登录失败')
    }
  }
  
  const onReset = () => {
    form.value.username = ''
    form.value.password = ''
    form.value.captcha = ''
  }
  </script>
  
  <style lang="less">
  .login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f7fa;

  .login-box {
    width: 400px;
    padding: 30px;
    background: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .captcha-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .forgot {
    float: right;
    color: #409EFF;
    font-size: 12px;
    cursor: pointer;
  }
  .login-options {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .third-login {
    text-align: center;
    margin-top: 20px;
  }
  .icons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
    svg {
        font-size: 20px;
        cursor: pointer;
    }
  }
  .el-form-item__content {
    justify-content: space-between;
    button {
        flex: 1;
    }
  }
}
  </style>
  