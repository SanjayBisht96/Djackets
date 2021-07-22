import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

Vue.config.productionTip = false;

new Vue({
  router,
  axios,
  render: (h) => h(App),
}).$mount('#app');
