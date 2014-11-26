app.controller('orgCtrl', ['$scope', 'loginService', '$location', '$rootScope', 'membersService',
    function ($scope, loginService, $routeParams, $rootScope, membersService) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Organization Profile';
        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        membersService.getProject($scope.TeamID_root, $rootScope);
        membersService.getMembers($scope.TeamID_root, $rootScope);
        membersService.getDep($scope.TeamID_root, $rootScope);

    }]);
    