'use strict';

app.controller('adminCtrl', ['$scope', 'loginService', '$location', 'adminService', '$rootScope',
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
    

    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

        // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.changeStartDate = function () {
        $scope.newProject = {StartDate: $scope.dt}
    }
   

    }]);