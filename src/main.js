import './assets/main.css';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import { createI18n } from "vue-i18n";
// import messages from "./locales";
import App from './App.vue';
import router from './router';
const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
    legacy: false, // 关闭 legacy 模式，使用组合式 API
    locale: "zh-CN", // 默认语言
    // messages,
});
app.use(createPinia());
app.use(router);
app.use(ElementPlus, { zIndex: 3000 });
app.use(pinia);
app.use(i18n);
app.mount('#app');
