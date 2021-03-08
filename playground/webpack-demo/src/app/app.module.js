import { PRODUCTS } from './model/products';

angular.module("app", ["emp-app"])
    .controller("MainController", ["$scope", "$rootScope", function ($scope, $rootScope) {
        $scope.products = PRODUCTS;
        $scope.tab = 0
        $scope.title = "Awesome App"
        $scope.dob = new Date("Dec 21, 1985")
        $rootScope.favColor = "Green";

    }])
    
    .filter("countrycode", function(){
        return function(input, countryName){
            // console.log("Filter - ", input);
            switch (countryName) {
                case 'USA':
                    return "+1 " + input;
                case 'AUS':
                    return "+12 " + input;
                case 'EUR':
                    return "+32 " + input;
                default:
                    return "+91 " + input;
            }
        }
    } )


    // .controller("SecondController", ["$rootScope", function ($rootScope) {
    //     this.message = "Controller Message";
    //     console.log("Fav Color : ", $rootScope.favColor);
    // }])


