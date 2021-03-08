import { PRODUCTS } from '../model/products';

export function MainController ($scope, $rootScope) {
    $scope.products = PRODUCTS;
    $scope.tab = 0
    $scope.title = "Awesome App"
    $scope.dob = new Date("Dec 21, 1985")
    $rootScope.favColor = "Green";
}