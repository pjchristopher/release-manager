releaseManagerApp.controller('releaseManagerLoginController', ['$scope', function($scope) {
    $scope.login = function() {
        $scope.loggedIn = true;
    };

    $scope.home = function() {
        $scope.loggedIn = false;
        $scope.username = "";
        $scope.password = "";
    };
}]);