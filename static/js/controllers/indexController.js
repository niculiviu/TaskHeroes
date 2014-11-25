'use strict';

app.controller('indexCtrl', ['$scope', 'loginService', '$location', 'adminService', '$rootScope', 'ngDialog',
    function ($scope, loginService, $routeParams, adminService, $rootScope, ngDialog) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Dashboard';
    }]);

    
 