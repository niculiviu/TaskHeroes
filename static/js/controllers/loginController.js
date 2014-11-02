'use strict';

app.controller('loginCtrl', ['$scope', 'loginService', '$location', function ($scope, loginService) {
    $scope.msgtxt = '';
    $scope.msgtxt_register = '';
    $scope.login = function (data) {
        loginService.login(data, $scope); //call login service
    };
    $scope.register = function (data) {
        if (data.pass1 != data.pass2 || ((data.pass1=='')&&(data.pass2=='')) ) {
            alert("Nu ai aceleasi parole");
        }
        else {
            loginService.register(data, $scope);
        }
    }
}]);