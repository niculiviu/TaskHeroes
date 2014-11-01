'use strict';

app.controller('adminCtrl', ['$scope', 'loginService', '$location','adminService', function ($scope, loginService, $routeParams, adminService) {
    
    $scope.txt = 'Page Home';
    $scope.logout = function () {
        loginService.logout();
    }

    $scope.Route = $routeParams.path();
    var res = $scope.Route.split('/');
    $scope.ID = res[2];
    console.log($scope.ID);

    adminService.getProject($scope.ID,$scope);
}])