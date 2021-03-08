export function MainController($scope, $rootScope, $log,
    $timeout, DataFactory, MyService, Configurable, 
    CompanyName, CompanyAddress) {
    $timeout(function () {
        $log.log("3 Seconds left...");
    }, 3000);
    console.log("Message - ", DataFactory.msg);
    console.log("Service Message - ", MyService.msg)
    console.log("Configurable - ", Configurable);
    console.log("Value Service - ", CompanyName);
    console.log("Constant Service - ", CompanyAddress);
    // $scope.products = DataFactory.getData();
    DataFactory.getData()
        .then(function (products) {
            $scope.products = products;
        }).catch(function (err) {
            $log.error(err);
        })
    $scope.tab = 0
    $scope.title = "Awesome App"
    $scope.dob = new Date("Dec 21, 1985")
    $rootScope.favColor = "Green";
}