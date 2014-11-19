﻿'use strict';

app.controller('projectCtrl', ['$scope', 'loginService', '$location', 'projectService', '$rootScope', 'adminService', '$routeParams',
    function ($scope, loginService, $routeParams, projectService, $rootScope,adminService) {
        $scope.txt = 'Page Home';
        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        console.log($scope.TeamID_root);

        $scope.projectID = $rootScope.ProjectID;

        $scope.param = $routeParams.$$url;
        var url = $scope.param.split('/');
        console.log(url[3]);

        adminService.getMembers($scope.TeamID_root, $rootScope);
        adminService.getProject($scope.TeamID_root, $rootScope);

        projectService.getSingleProject(url[3], $rootScope);
       
    }]);