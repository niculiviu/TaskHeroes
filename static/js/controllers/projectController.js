'use strict';

app.controller('projectCtrl', ['$scope', 'loginService', '$location', 'adminService', '$rootScope',
    function ($scope, loginService, $routeParams, adminService, $rootScope, $window, $location) {
        $scope.txt = 'Page Home';
        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        console.log();

        console.log($scope.TeamID_root);
        adminService.getMembers($scope.TeamID_root, $rootScope);
        adminService.getProject($scope.TeamID_root, $rootScope);
    }]);