require('./bootstrap');
window.Vue = require('vue');

Vue.component('vuex-example', require('./components/VuexExample.vue'));  

const app = new Vue({
    el: '#app',
});
