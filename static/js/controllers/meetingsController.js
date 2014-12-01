app.controller('meetingsCtrl', ['$scope', 'loginService', '$location', '$rootScope', 'membersService',
    function ($scope, loginService, $routeParams, $rootScope, membersService) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Meetings';
        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        loginService.getLoggedUser().success(function (response) {
            $scope.LoggedUserJson = response[0];
        });
        membersService.getProject($scope.TeamID_root, $rootScope);
        membersService.getMembers($scope.TeamID_root, $rootScope);
        membersService.getDep($scope.TeamID_root, $rootScope);

    }]);
    
    
    