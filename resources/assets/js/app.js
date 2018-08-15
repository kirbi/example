require('./bootstrap');
window.Vue = require('vue');
import store from './store'

Vue.component('vuex-example', require('./components/VuexExample.vue'));  

const app = new Vue({
    el: '#app',
    store
});
