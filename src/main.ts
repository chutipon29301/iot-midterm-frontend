import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSocketIO from 'vue-socket.io';
import axios from 'axios';
import VueAxios from 'vue-axios';

const baseURL = 'http://iotmidtermapi.chutipon.dev';

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: baseURL,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}));

Vue.use(VueAxios, axios.create({
  baseURL,
}));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
