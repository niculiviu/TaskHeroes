app.controller('menuCtrl', ['$scope', 'loginService', '$location', '$rootScope', 'membersService',
    function ($scope, loginService, $routeParams, $rootScope, membersService) {
        
        $scope.logout = function () {
            loginService.logout();
        }
        
        loginService.TeamID;
        loginService.getLoggedUser().success(function (response) {
            $scope.LoggedUserJson = response[0];
        });
        

    }]);