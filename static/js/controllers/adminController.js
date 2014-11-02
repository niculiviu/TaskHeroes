'use strict';

app.controller('adminCtrl', ['$scope', 'loginService', '$location', 'adminService','$rootScope', function ($scope, loginService, $routeParams, adminService, $rootScope) {
    $scope.txt = 'Page Home';
    $scope.logout = function () {
        loginService.logout();
    }

    $scope.Route = $routeParams.path();
    var res = $scope.Route.split('/');
    $scope.ID = res[2];
  
    console.log($scope.ID);

    
    
    adminService.getMembers($scope.ID, $rootScope);
    adminService.getProject($scope.ID, $rootScope);
    
    

   

    }]);