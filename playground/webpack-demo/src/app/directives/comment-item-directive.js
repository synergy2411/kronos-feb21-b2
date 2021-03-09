export default function(){
    return {
        restrict : "ACE",
        templateUrl : "./app/views/comment-item.html",
        scope : {
            comment : "=",           // @ | = | &
            title : "@"
        },
        link : function(scope, element, attrs, ctrl){
            
            scope.msg = "The Scope message";

            // console.log("Scope - ", scope)
            // console.log("Element - ", element)
            // console.log("Attributes - ", attrs)
            // console.log("Controller - ", ctrl )
        }
    }
}