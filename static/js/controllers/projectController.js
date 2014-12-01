'use strict';

app.controller('projectCtrl', ['$scope', 'loginService', '$location', 'projectService', '$rootScope', 'adminService', 'ngDialog',
    function ($scope, loginService, $routeParams, projectService, $rootScope, adminService, ngDialog) {
        $scope.txt = 'Page Home';
        $rootScope.PageName = 'Tasks';

        $scope.logout = function () {
            loginService.logout();
        }
        loginService.TeamID;
        loginService.getLoggedUser().success(function (response) {
            $scope.LoggedUserJson = response[0];
        });
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
        
       
        projectService.getProjectMembers(url[3],$rootScope.ProjectMembers).then(function (response) {
            $rootScope.ProjectMembers = response.data;
            $scope.number_of_members = $rootScope.ProjectMembers.length;
            console.log("Project Members: " + $rootScope.ProjectMembers);
        });
        
        

        projectService.getTasks(url[3], $rootScope);

        $scope.newList = function (name, Project_ID) {
            var list_json = {
                'name': name,
                'project_id': Project_ID
            }
            projectService.newList(list_json, $rootScope);
        }
        
        $scope.addMemberToProject = function (user, Project_ID) {
            var json = {
                'id_user': user,
                'id_project': Project_ID
            }
            var i = 0, exist = 0, obj = $rootScope.ProjectMembers;
            
            for (i = 0; i < obj.length; i++) {
                
                if (obj[i].id == json.id_user) {
                    exist++;
                    
                }
            }
            if (exist == 0) {
                projectService.addMemberToProject(json, $rootScope);
                $scope.customSelected = '';
                $rootScope.ProjectMembers.push(json);
                $scope.number_of_members++;
            }
            else {
                ngDialog.open({ templateUrl: 'static/alerts/AlreadyMember.html' })
            }
        }

        $scope.addTask = function (task, activityID, Project_ID) {
            var json = {
                'task': task,
                'activity': activityID.ID,
                'project': Project_ID
            }
            projectService.addTask(json, $rootScope);
            $scope.taskName = '';
            $scope.taskActivity = '';
        }

        $scope.viewTask = function (task) {
            $scope.task = task;
            ngDialog.open({
                templateUrl: 'TaskDialog.html',
                scope: $scope,
                controller: 'projectCtrl'
            });
        }

        $scope.addDif = function (dif, ID, task) {
            var json = {
                'dif': dif,
                'ID': ID
            }
            projectService.addDif(json, $rootScope, url[3]);
            $scope.task.punctaj_dificultate = dif;
        }

        $scope.goToActivity = function (name) {
            $scope.search = name;

        }

        $scope.goToAll = function () {
            $scope.search = '';
        }

        $scope.howManyTasks = function (json, nume) {
            var i, k = 0;
            for (i = 0; i < json.length; i++) {
                if (json[i].nume_activitate == nume)
                    k++;
            }
            return k;
        }

        $scope.adddescription = false;
        $scope.showDescriptionInput = function () {
            $scope.adddescription = true;
            $scope.addDescriptionTextArea = true;
        }

        $scope.cancel = function () {
            $scope.adddescription = false;
            $scope.addDescriptionTextArea = false;
        }

        $scope.updateTask = function (title, activity, description, ID_Task) {
            var json = {
                'title': title,
                'activity': activity,
                'description': description,
                'ID': ID_Task
            }
            console.log(json);
            projectService.updateTask(json, $rootScope, url[3]);
            $scope.updateTaskAlert = true;
        }

    }]);