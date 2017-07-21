var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);
Vue.config.debug = true;
Vue.config.delimriters = ['${','}'];
Vue.config.devtools = true;

var app = Vue.extend({});
var router = new VueRouter();

router.map(require('./routes'));
router.start(App,'#app');
router.go({"path":"/"});
