'use strict';

app.controller('loginCtrl', function ($scope, loginService) {
    $scope.msgtxt = '';
    $scope.login = function (user) {
        console.log('am intrat in loginCtrl');
        loginService.login(user, $scope);
    }
})