module.exports = [{
    path: '/',
    component: require('./components/index.js'),
    
    children: [{
        path: 'tab1',
        component: require('./components/tab_1.js')
    },{
        path: 'tab2',
        component: require('./components/tab_2.js')
    }]
},{
    path: '/list',
    component: require('./components/list.js')
},{
    path: '/show/:id',
    name: 'show',
    component: require('./components/show.js')
},{
    path: '*',
    component: require('./components/notFound.js')
}]
