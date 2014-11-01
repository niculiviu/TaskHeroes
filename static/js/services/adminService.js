'use strict';

app.factory('adminService', ['$http', '$location', function ($http) {
    return {
        getProject: function (ID, $rootScope) {
            
            $http.post("php/getProjets.php?ID=" + ID).success(function (data) {
                $rootScope.proiecte = data;
                console.log($rootScope.proiecte);
            });

        }
    }
    
}]);