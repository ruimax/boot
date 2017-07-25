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
    ready: function(){}
}
