'use strict';

app.factory('projectService', ['$http', '$location','sessionService', function ($http, $rootScope,sessionService,$scope) {
    var myFunctions =
    {
        getSingleProject: function (ID, $rootScope) {
            $http.post("php/getSigleProject.php?ID=" + ID).success(function (data) {
                $rootScope.SingleProiect = data;
                console.log($rootScope.SingleProiect);
            });

        }
       
    }
    return myFunctions;

}]);