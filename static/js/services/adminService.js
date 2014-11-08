'use strict';

app.factory('adminService', ['$http', '$location', function ($http, $rootScope) {
    var myFunctions =
    {
        getProject: function (ID, $rootScope) {

            $http.post("php/getProjets.php?ID=" + ID).success(function (data) {
                $rootScope.proiecte = data;
                console.log($rootScope.proiecte);
            });

        },
        getMembers: function (ID, $rootScope) {
            $http.post("php/getMembers.php?ID=" + ID).success(function (data) {
                $rootScope.members = data;
                console.log($rootScope.members);
            });
        },
        addProject: function (data, $rootScope) {
            $http.post('php/addProject.php', data).success(function (data) {
                if (data) {
                    $('#NewProjectModal').modal('hide');
                    myFunctions.getProject(data, $rootScope);
                    //location.reload();
                };
            });

        },
        removeProject: function (ID) {
            $http.post('php/removeProject.php?ID=' + ID).success(function (data) {
                if (data) {
                    $('#proiect_' + ID).remove();
                };
            });
        }

    }
    return myFunctions;

}]);