import { PRODUCTS } from './model/products';

angular.module("app", ["emp-app"])
    .controller("MainController",["$scope", "$rootScope", function ($scope, $rootScope) {
        $scope.products = PRODUCTS;
        $scope.tab = 0
        $scope.title = "Awesome App"
        $rootScope.favColor = "Green";
    }])

    .controller("SecondController", function ($rootScope) {
        this.message = "Controller Message";
        console.log("Fav Color : ", $rootScope.favColor);
    })

