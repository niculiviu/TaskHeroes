app.controller('menuCtrl', ['$scope', 'loginService', '$location', '$rootScope', 'membersService',
    function ($scope, loginService, $routeParams, $rootScope, membersService) {
        
        $scope.logout = function () {
            loginService.logout();
        }
        
        loginService.TeamID;
        loginService.getLoggedUser($rootScope);
        

    }]);