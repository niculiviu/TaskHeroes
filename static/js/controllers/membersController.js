app.controller('membersCtrl', ['$scope', 'loginService', '$location', '$rootScope','membersService',
    function ($scope, loginService, $routeParams, $rootScope,membersService) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Members';
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

        $scope.addMember = function (data) {
            console.log("Sunt in membersController si vreau sa adaug membrul:");
            console.log(data);
            membersService.newMember(data, $rootScope);
            $scope.newMember = '';
        }
        
        $scope.addDepartment = function (data) {
            console.log("Sunt in membersController si vreau sa adaug departamentul:");
            console.log(data);
            membersService.newDep(data, $rootScope);
            
        }
        
        $scope.removeDep = function (data) {
            console.log("Sunt in membersController si vreau sa sterg departamentul:");
            console.log(data);
            membersService.removeDepa(data, $rootScope, $scope.TeamID_root);
            
        }
        
        
        $scope.chooseDep = function (data) {
            $scope.searchText = data;
        }
        
        $scope.showAll = function () {
            $scope.searchText = '';
        }

        $scope.changeDep = function (idDep, idUser) {
            console.log("Userul cu ID-ul" + idUser + "vrea sa treaca in departamentul" + idDep);
            membersService.updateDep(idDep, idUser, $scope.TeamID_root, $rootScope);
        }

        $scope.getSingleMember = function (id) {
            membersService.getSingleMember(id,$rootScope);
        }

        $scope.updateMember = function (memberInfo) {
            $rootScope.user_updated = false;
            membersService.updateMember(memberInfo, $rootScope,$scope.TeamID_root);
        }
        $scope.deleteMember = function (memberID) {
            console.log("Sunt in membersController si vreau sa sterg membrul:"+memberID);
            membersService.deleteMember(memberID,$scope.TeamID_root, $rootScope);
        }
        
    }]);