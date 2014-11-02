'use strict';

var app = angular.module('task_heroes', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', { templateUrl: 'static/login.html', controller: 'loginCtrl' });
    $routeProvider.when('/admin/:TeamID/', { templateUrl: 'static/dashboard.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/:TeamID/members/', { templateUrl: 'static/members.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/:TeamID/meetrings/', { templateUrl: 'static/meetings.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/:TeamID/organization/', { templateUrl: 'static/organization_admin.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/:TeamID/profile/:ID/', { templateUrl: 'static/profile.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/:TeamID/settings/', { templateUrl: 'static/settings.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/:TeamID/project/:ID/', { templateUrl: 'static/project.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/:TeamID/settings/', { templateUrl: 'static/settings.html', controller: 'adminCtrl' });
    $routeProvider.when('/', { templateUrl: 'static/index.html', controller: 'indexCtrl' });
    $routeProvider.otherwise({ redirectTo: '/login' });

}]);


app.run(function ($rootScope, $location, loginService) {
    var routespermission = ['/admin/:TeamID/'];  //route that require login
    $rootScope.$on('$routeChangeStart', function () {
        if (routespermission.indexOf($location.path()) != -1) {
            var connected = loginService.islogged();
            connected.then(function (msg) {
                if (!msg.data) $location.path('/login');
            });
        }
    });
});