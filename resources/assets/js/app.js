require('./bootstrap');
window.Vue = require('vue');

Vue.component('example', require('./components/Example.vue'));  
// Vue.component('example', <h1>Hello</h1>');  

const app = new Vue({
    el: '#app',
});
