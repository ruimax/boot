module.exports = {
    template: require('../templates/item.html'),
    props: ['id','name'],
    ready: function(){
        console.log(id,name)
    }
}
