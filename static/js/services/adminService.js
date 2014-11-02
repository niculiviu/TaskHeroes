'use strict';

app.factory('adminService', ['$http', '$location', function ($http,$rootScope) {
    return {
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
        }

    }
    
}]);