export default function(){
    return {
        restrict : "ACE",
        templateUrl : "./app/views/comment-item.html",
        scope : {
            comment : "=",           // @ | = | &
            title : "@"
        },
        link : function(scope, element, attrs){
            console.log("Scope - ", scope)
            console.log("Element - ", element)
            console.log("Attributes - ", attrs)
        }
    }
}