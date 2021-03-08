export default function(){
    return {
        restrict : "ACE",
        templateUrl : "./app/views/comment-item.html",
        scope : {
            comment : "=",           // @ | =
            title : "@"
        }
    }
}