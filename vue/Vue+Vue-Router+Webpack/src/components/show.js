module.exports = {
    template: require('../templates/show.html'),
    data: function(){
        return {
            "id":"",
            "name":"",
            "age":""
        };
    },
    created: function(){
        var id = this.$route.params.id;
        this.$data.id = id;
        if(id==1){
            this.$data.name = "id is 1";
            this.$data.age = 20;
        }else{
            this.$data.name = "id is not 1";
            this.$data.age = 30;
        }
    },
    ready: function(){
        console.log(this.$data);
    }
}
