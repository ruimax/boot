var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);

var routes = require('./routes')

var router = new VueRouter({
    //mode: 'history',
    routes
});

new Vue({
    el: '#app',
    router
})
