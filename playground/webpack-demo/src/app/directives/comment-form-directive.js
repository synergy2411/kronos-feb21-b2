import { CommentFormController } from "../controllers/CommentFormController";

export default function(){
    return {
        restrict : "E",
        templateUrl : "./app/views/comment-form.html",
        controller : CommentFormController
    }
}