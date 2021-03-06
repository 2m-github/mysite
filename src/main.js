import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
window.$ = require('jquery');

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
Vue.component('fa', FontAwesomeIcon);

import './assets/js/common.js';

import './assets/scss/style.scss';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
