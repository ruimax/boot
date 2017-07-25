var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);

var routes = require('./routes')
console.log(routes);
var router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router
})
