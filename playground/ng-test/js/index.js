angular.module("notesApp", [])
.controller("ListController", function(){
    this.items = [
        {label : "Pot the plant", done : true},
        {label : "Renew Car insurance", done : false}
    ]
    this.getDoneClass = function(item){
        return {
            finished : item.done,
            unfinished : !item.done
        }
    }
})