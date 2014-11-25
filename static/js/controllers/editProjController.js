app.controller('editprojectCtrl', ['$scope', 'loginService', '$location', 'projectService', '$rootScope', 'adminService', 'ngDialog',
    function ($scope, loginService, $routeParams, projectService, $rootScope, adminService, ngDialog) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Edit Project';
        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        $rootScope.permision = true;
        console.log($scope.TeamID_root);
       
        $scope.projectID = $rootScope.ProjectID;

        $scope.param = $routeParams.$$url;
        var url = $scope.param.split('/');
        console.log(url[3]);
        projectService.getSingleProject(url[3], $scope.TeamID_root, $rootScope, $scope);
        adminService.getMembers($scope.TeamID_root, $rootScope);
        adminService.getProject($scope.TeamID_root, $rootScope);
        projectService.getLists(url[3], $rootScope);
    }]);