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

        }
       
    }
    return myFunctions;

}]);