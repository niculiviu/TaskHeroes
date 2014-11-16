app.controller('membersCtrl', ['$scope', 'loginService', '$location', '$rootScope','membersService',
    function ($scope, loginService, $routeParams, $rootScope,membersService) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Members';
        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        membersService.getProject($scope.TeamID_root, $rootScope);
        membersService.getMembers($scope.TeamID_root, $rootScope);
        membersService.getDep($scope.TeamID_root, $rootScope);

        $scope.addMember = function (data) {
            console.log(data);
            membersService.newMember(data, $rootScope);
            $scope.newMember = '';
        }
        $scope.addDepartment = function (data) {
            console.log(data);
            membersService.newDep(data, $rootScope);
            
        }
        $scope.chooseDep = function (data) {
            $scope.searchText = data;
        }

        $scope.viewProject = function (ID) {
            $scope.value = ID;
            ngDialog.open({
                template: 'static/proiect.html',
                controller: 'projectCtrl',
                scope: $scope
            });
        }
    }]);