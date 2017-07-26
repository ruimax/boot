import item from "./item"

module.exports = {
    template: require('../templates/list.html'),
    data: function(){
        return {
            items:[{
                "id":1,
                "name":"hello11"
            },{
                "id":2,
                "name":"hello22"
            }]
        }
    },
    components: {
        'item': item
    },
    ready: function(){}
}
