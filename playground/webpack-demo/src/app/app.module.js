
angular.module("app", ["emp-app"])
.controller("MainController", function($scope){
    $scope.product = product;
    $scope.onBtnClick = function(){
        alert("Who's this ?")
    }
})

.controller("SecondController", function(){
    this.message = "Controller Message";
    
})

const product = {
    name : "iPhone",
    company : "Apple",
    price : 70000,
    description : "Awesome Camera",
    isAvailabe : true
}