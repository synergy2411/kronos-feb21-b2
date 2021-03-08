export function CommentFormController($scope){
    $scope.comment = {};
    $scope.onAddComment = function(product){
        product.comments.push($scope.comment);
        $scope.comment = {};
    }
}