import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import TDesign from 'tdesign-vue-next';

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import '@/styles/index.scss';

// 导入 svgIcon
import SvgIcon from '@/components/SvgIcon/index.vue';

const app = createApp(App);
app.component('SvgIcon', SvgIcon);
app.use(router).use(store).use(TDesign).mount('#app');
