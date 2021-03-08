export function MainController ($scope, $rootScope, $log, $timeout, DataFactory) {
    $timeout(function(){
        $log.log("3 Seconds left...");
    }, 3000);
    console.log("Message - ", DataFactory.msg);

    // $scope.products = DataFactory.getData();
    DataFactory.getData()
        .then(function(products){
            $scope.products = products;
        }).catch(function(err){
            $log.error(err);
        })
    $scope.tab = 0
    $scope.title = "Awesome App"
    $scope.dob = new Date("Dec 21, 1985")
    $rootScope.favColor = "Green";
}