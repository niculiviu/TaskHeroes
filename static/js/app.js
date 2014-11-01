'use strict';

var app = angular.module('task_heroes', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', { templateUrl: 'static/login.html', controller: 'loginCtrl' });
    $routeProvider.when('/admin/:TeamID/', { templateUrl: 'static/dashboard.html', controller: 'adminCtrl' });
    $routeProvider.otherwise({ redirectTo: '/login' });

}]);


app.run(function ($rootScope, $location, loginService) {
    var routespermission = ['/admin'];  //route that require login
    $rootScope.$on('$routeChangeStart', function () {
        if (routespermission.indexOf($location.path()) != -1) {
            var connected = loginService.islogged();
            connected.then(function (msg) {
                if (!msg.data) $location.path('/login');
            });
        }
    });
});