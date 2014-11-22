'use strict';

app.controller('projectCtrl', ['$scope', 'loginService', '$location', 'projectService', '$rootScope', 'adminService', '$routeParams',
    function ($scope, loginService, $routeParams, projectService, $rootScope,adminService) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Tasks';
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

        adminService.getMembers($scope.TeamID_root, $rootScope);
        adminService.getProject($scope.TeamID_root, $rootScope);

        $scope.isEmpty = function (obj) {
            for (var i in obj) if (obj.hasOwnProperty(i)) return false;
            return true;
        };

        projectService.getSingleProject(url[3], $scope.TeamID_root, $rootScope, $scope);
        projectService.getLists(url[3], $rootScope);
        projectService.getProjectMembers(url[3], $rootScope);

        $scope.newList = function (name, Project_ID) {
            var list_json = {
                'name': name,
                'project_id':Project_ID
            }
            projectService.newList(list_json, $rootScope);
        }
        $scope.addMemberToProject = function (user, Project_ID) {
            var json = {
                'id_user': user.id,
                'id_project':Project_ID
            }
            projectService.addMemberToProject(json,$rootScope);
        }

    }]);