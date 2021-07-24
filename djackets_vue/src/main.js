import { createApp, h } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

createApp({
  axios,
  store,
  render: () => h(App),
}).use(store).use(router).mount('#app');
