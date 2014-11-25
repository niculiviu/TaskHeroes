app.controller('menuCtrl', ['$scope', 'loginService', '$location', '$rootScope', 'membersService',
    function ($scope, loginService, $routeParams, $rootScope, membersService) {
        $scope.txt = 'Page Home';
        //$rootScope.PageName = 'Meetings';
        $scope.logout = function () {
            loginService.logout();
        }
        //alert('lool');
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        membersService.getProject($scope.TeamID_root, $rootScope);
        

    }]);