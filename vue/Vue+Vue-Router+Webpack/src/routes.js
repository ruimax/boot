// module.exports = {
//     '/': {
//         component: require('./components/index')
//     },
//     '/list': {
//         component: require('./components/list')
//     },
//     '*': {
//         component: require('./components/notFound')
//     }
// }
module.exports = [{
    path: '/',
    component: require('./components/index.js')
},{
    path: '/list',
    component: require('./components/list.js')
},{
    path: '*',
    component: require('./components/notFound.js')
}]
