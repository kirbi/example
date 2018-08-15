require('./bootstrap');
window.Vue = require('vue');
import store from './store'

Vue.component('vuex-bahasa', require('./components/VuexBahasa.vue'));  

const app = new Vue({
    el: '#app',
    store
});
