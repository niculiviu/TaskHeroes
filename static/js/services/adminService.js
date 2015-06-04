'use strict';

app.factory('adminService', ['$http', '$location', function ($http, $rootScope) {
    var myFunctions =
    {
        getProject: function (ID, $rootScope) {
            console.log("Am intrat in adminService in functia getProject!");
            $http.post("php/getProjets.php?ID=" + ID).success(function (data) {
                $rootScope.proiecte = data;
                console.log("Am luat toate proiectele:");
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
            console.log("Adauga un proiect: Am intrat in adminService")
            $http.post('php/addProject.php', data).success(function (data) {
                console.log("Adauga un proiect: Requestul a la addProject.php a avut succes si am primit ca raspuns:");
                console.log(data);
                if (data) {
                    myFunctions.getProject(data, $rootScope);
                };
            });

        },
        removeProject: function (ID) {
            console.log("Am intrat in functia remocveProject din adminService");
            $http.post('php/removeProject.php?ID=' + ID).success(function (data) {
                if (data) {
                    console.log("Requestul a avut succes si am sters proiectul cu ID-ul"+ID);
                    $('#proiect_' + ID).remove();
                };
            });
        },
        post_request: function () {
          
        }

    }
    return myFunctions;

}]);