'use strict';

app.factory('membersService', ['$http', '$location', function ($http, $rootScope) {
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
        getDep: function (ID, $rootScope) {
            $http.post("php/getDep.php?ID=" + ID).success(function (data) {
                $rootScope.all_dep = data;
                console.log($rootScope.all_dep);
            });
        },
        newMember: function (data, $rootScope) {
            $http.post("php/newMember.php",data).success(function (data) {
                if (data) {
                    console.log(data);
                    myFunctions.getMembers(data, $rootScope);
                }
            });
        },
        newDep: function (data, $rootScope) {
            $http.post("php/newDep.php", data).success(function (data) {
                if (data) {
                    console.log(data);
                    myFunctions.getDep(data, $rootScope);
                }
            });
        },
        
        removeDepa: function (data, $rootScope,TeamID) {
            $http.post("php/removeDep.php?ID=" + data).success(function (data) {    		
                myFunctions.getDep(TeamID, $rootScope);

            });
        },
        updateDep: function (idDep, idUser, TeamID,$rootScope) {
            $http.post("php/updateMemberDep.php?idDep=" + idDep+"&idUser="+idUser).success(function (data) {
                myFunctions.getMembers(TeamID, $rootScope);

            });
        }
    }
    return myFunctions;

}]);