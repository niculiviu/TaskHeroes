'use strict';

app.factory('adminService', ['$http', '$location', function ($http) {
    return {
        getProject: function (ID,scope) {
            
            $http.post("php/getProjets.php?ID=" + ID).success(function (data) {
               scope.proiecte = data;
               console.log(scope.proiecte);
            });

        }
    }
    
}]);