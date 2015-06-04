'use strict';

app.controller('adminCtrl', ['$scope', 'loginService', '$route', 'adminService', '$rootScope', 'ngDialog', 'sessionService',
    function ($scope, loginService, $routeParams, adminService, $rootScope, ngDialog, $route, sessionService) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Dashboard';
        $rootScope.projectID = '';
        adminService.post_request();
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

        $scope.LoggedUserJson = [{
            'nume_user': 'Lool',
            'prenume_user':'lool'
        }];

        loginService.getLoggedUser().success(function (response) {
            console.log("Am luat informatiile despre userul logat:");
            $scope.LoggedUserJson = response[0];
            console.log($scope.LoggedUserJson);
        });
        //console.log($scope.TeamID_root + ' ' + loginService.getLoggedUser());
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
            console.log("Trimit requestul din adminController, vreau sa adaug proiectul:");
            console.log(project);
            adminService.addProject(project, $rootScope);

        }

        $scope.removeProject = function (ID) {
            //console.log(ID);
            console.log("Trimit requestul din adminController, vreau sa sterg proiectul cu ID-ul:"+ID);
            adminService.removeProject(ID);
        }

        $scope.goToProject = function (projectID) {
            $rootScope.ProjectID = projectID;
        }

        $scope.DaysRemaining = function (start, end) {
            var start_date = new Date(start).getTime();
            var end_date = new Date(end).getTime();

            return parseInt((end_date - start_date) / (24 * 3600 * 1000));
            
        }
    }]);