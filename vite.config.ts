import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    // Element Plus 自动导入
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts', // 生成自动导入的声明文件
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'icon',
          enabledCollections: ['ep'], // Element Plus 图标集
        }),
      ],
      dts: 'src/components.d.ts', // 生成组件声明的文件
    }),
    // 图标自动导入
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@layout': fileURLToPath(new URL('./src/layout/components', import.meta.url))
    },
    // extensions: ['.ts','.mjs', '.js', '.jsx', '.tsx', '.json', '.vue']
    extensions: ['.ts', '.js', '.vue']
  },
  // 开发服务器配置
  server: {
    host: true, // 监听所有地址
    port: 5173, // 开发服务器端口
    open: true, // 自动打开浏览器
    proxy: { // 代理配置示例
      '/api': {
        target: 'http://your-api-domain.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    watch: {
      usePolling: true,  // 解决WSL/Docker下的文件监听问题
      interval: 1000
    }
  },
  // 构建配置
  base: '/melon-vue3-admin/',
  build: {
    chunkSizeWarningLimit: 2000, // 调整块大小警告限制
    assetsInlineLimit: 4096, // 小于此值的资源将内联为 base64
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  // 环境变量配置
  define: {
    'process.env': process.env
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, 
        // additionalData: `@import "@/styles/variables.less";`, 
      },
    },
  },
})