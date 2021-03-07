import { PRODUCTS } from './model/products';

angular.module("app", ["emp-app"])
    .controller("MainController",["$scope", "$rootScope", function ($scope, $rootScope) {
        // $scope.product = product;
        $scope.products = PRODUCTS;
        
        $rootScope.favColor = "Green";
        $scope.onBtnClick = function () {
            alert("Who's this ?")
        }
    }])

    .controller("SecondController", function ($rootScope) {
        this.message = "Controller Message";
        console.log("Fav Color : ", $rootScope.favColor);
    })

