﻿'use strict';

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
            console.log("Am intrat in functia newMember din memberService si vreau sa adaug un nou membru");
            $http.post("php/newMember.php", data).success(function (data) {
                console.log("Requestul a avut succes si am primit raspunsul:");
                if (data) {
                    console.log(data);
                    myFunctions.getMembers(data, $rootScope);
                }
            });
        },
        newDep: function (data, $rootScope) {
            console.log("Am intrat in functia newMember din memberService si vreau sa adaug un nou departament");
            $http.post("php/newDep.php", data).success(function (data) {
                console.log("Requestul a avut succes si am primit raspunsul:");
                if (data) {
                    console.log(data);
                    myFunctions.getDep(data, $rootScope);
                }
            });
        },
        
        removeDepa: function (data, $rootScope, TeamID) {
            console.log("Am intrat in functia removeDepa din membersService si vreaus a sterg un departament");
            $http.post("php/removeDep.php?ID=" + data).success(function (data) {
                console.log("Requestul a avut succes");
                myFunctions.getDep(TeamID, $rootScope);

            });
        },
        updateDep: function (idDep, idUser, TeamID,$rootScope) {
            $http.post("php/updateMemberDep.php?idDep=" + idDep+"&idUser="+idUser).success(function (data) {
                myFunctions.getMembers(TeamID, $rootScope);

            });
        },
        getSingleMember: function (id, $rootScope) {
            $http.post("php/getSingleMember.php?ID=" + id).success(function (data) {
                $rootScope.SingleMember = data;

            });
        },
        updateMember: function (memberInfo, $rootScope, TeamID) {
            $http.post("php/updateMember.php", memberInfo).success(function (data) {
                $rootScope.user_updated = true;
                myFunctions.getMembers(TeamID,$rootScope);
            });
        },
        deleteMember: function (memberID, TeamID, $rootScope) {
            $http.post("php/deleteMember.php?ID="+memberID).success(function (data) {
                myFunctions.getMembers(TeamID, $rootScope);
            });
        }
    }
    return myFunctions;

}]);