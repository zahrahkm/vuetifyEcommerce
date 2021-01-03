import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router';
import Routes from "./Router/routes.js"
import store from './store/index.js'
import "./vee-validate";
import axios from 'axios'

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false




new Vue({
  vuetify,
  render: h => h(App),
  router,
  store:store,
}).$mount('#app')
