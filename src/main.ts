import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSocketIO from 'vue-socket.io';
import axios from 'axios';
import VueAxios from 'vue-axios';

// const baseURL = 'https://iot-midterm-backend.herokuapp.com';
const baseURL = 'http://localhost:3000';

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: false,
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
