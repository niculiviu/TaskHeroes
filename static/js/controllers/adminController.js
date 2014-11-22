'use strict';

app.controller('adminCtrl', ['$scope', 'loginService', '$route', 'adminService', '$rootScope', 'ngDialog', 'sessionService',
    function ($scope, loginService, $routeParams, adminService, $rootScope, ngDialog, $route, sessionService) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Dashboard';
        $rootScope.projectID = ''
        //$route.reload();
        $scope.viewProject = function (ID) {
            $scope.value = ID;
            ngDialog.open({
                template: 'static/project.html',
                controller: 'projectCtrl',
                scope: $scope,
                className: 'ngdialog-theme-default'
            }).$result;
        }
        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        $scope.TeamID_root = loginService.TeamID;
        console.log();

        console.log($scope.TeamID_root);
        adminService.getMembers($scope.TeamID_root, $rootScope);
        adminService.getProject($scope.TeamID_root, $rootScope);


        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection


        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.open2 = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened2 = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.changeStartDate = function () {
            $scope.newProject = { StartDate: $scope.dt }
        }

        $scope.addProject = function (project) {
            console.log(project);
            adminService.addProject(project, $rootScope);

        }

        $scope.removeProject = function (ID) {
            console.log(ID);
            adminService.removeProject(ID);
        }

        $scope.goToProject = function (projectID) {
            $rootScope.ProjectID = projectID;
        }
    }]);