'use strict';

app.factory('projectService', ['$http', '$location', 'sessionService', function ($http, $location, $rootScope, sessionService, $scope) {
    var myFunctions =
    {
        getSingleProject: function (ID,teamID,$rootScope) {
            $http.post("php/getSigleProject.php?ID=" + ID+"&team="+teamID).success(function (data) {
                $rootScope.SingleProiect = data;
                console.log($rootScope.SingleProiect.length);
                if ($rootScope.SingleProiect.length == 0) {
                    $location.path('/noPermision/');
                }   
            });

        },
        getLists: function (ID,$rootScope) {
            $http.post("php/getLists.php?ID="+ID).success(function (data) {
                $rootScope.activities = data;
                console.log($rootScope.activities);
            });
        },
        newList: function (json,$rootScope) {
            $http.post("php/newList.php",json).success(function (data) {
                myFunctions.getLists(data, $rootScope);
            });
        },
        addMemberToProject: function (json, $rootScope) {
            $http.post("php/addMemberToProject.php", json).success(function (data) {
                myFunctions.getProjectMembers(data, $rootScope);
            });
        },
        getProjectMembers: function (ID, $rootScope) {
            $http.post("php/getProjectMembers.php?ID="+ID).success(function (data) {
                $rootScope.ProjectMembers = data;
            });
        },
        addTask: function (json, $rootScope) {
            $http.post("php/addTask.php", json).success(function (data) {
                myFunctions.getTasks(data, $rootScope);
            });
        },
        getTasks: function (ID, $rootScope) {
            $http.post("php/getTasks.php?ID=" + ID).success(function (data) {
                $rootScope.Tasks = data;
            });
        },
        addDif: function (json, $rootScope,project_ID) {
            $http.post("php/addDif.php", json).success(function (data) {
                myFunctions.getTasks(project_ID, $rootScope);
                
            });
        }
        
    }
    return myFunctions;

}]);