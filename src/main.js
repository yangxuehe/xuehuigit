
import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入仓库
import store from './store'
// 导入base样式
import './styles/base.css'
// 导入iconfont字体图标
import './styles/iconfont.css'
// 导入饿了么ui
import ElementUI from 'element-ui';
// 导入饿了么ui样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')