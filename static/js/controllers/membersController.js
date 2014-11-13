app.controller('membersCtrl', ['$scope', 'loginService', '$location', '$rootScope','membersService',
    function ($scope, loginService, $routeParams, $rootScope,membersService) {
        $scope.txt = 'Page Home';
        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        membersService.getProject($scope.TeamID_root, $rootScope);
        membersService.getMembers($scope.TeamID_root, $rootScope);
        membersService.getDep($scope.TeamID_root, $rootScope);

        $scope.newMember = function (data) {
            console.log(data);
            membersService.newMember(data, $rootScope);
        }
        $scope.addDepartment = function (data) {
            console.log(data);
            membersService.newDep(data, $rootScope);
            
        }
    }]);