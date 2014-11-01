'use strict';

app.controller('adminCtrl', ['$scope', 'loginService', '$location', function ($scope, loginService) {
    $scope.txt = 'Page Home';
    $scope.logout = function () {
        loginService.logout();
    }
}])