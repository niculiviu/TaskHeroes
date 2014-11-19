'use strict';

var app = angular.module('task_heroes', ['ngRoute', 'ui.bootstrap','ngDialog']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', { templateUrl: 'static/login.html', controller: 'loginCtrl' });
    $routeProvider.when('/admin/', { templateUrl: 'static/dashboard.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/members/', { templateUrl: 'static/members.html', controller: 'membersCtrl' });
    $routeProvider.when('/admin/meetrings/', { templateUrl: 'static/meetings.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/organization/', { templateUrl: 'static/organization_admin.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/profile/:ID/', { templateUrl: 'static/profile.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/settings/', { templateUrl: 'static/settings.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/project/:ID', { templateUrl: 'static/project.html', controller: 'projectCtrl' });
    $routeProvider.when('/admin/settings/', { templateUrl: 'static/settings.html', controller: 'adminCtrl' });
    $routeProvider.when('/', { templateUrl: 'static/index.html', controller: 'indexCtrl' });
    $routeProvider.otherwise({ redirectTo: '/login' });

}]);


app.run(function ($rootScope, $location, loginService) {
    var routespermission = ['/admin/'];  //route that require login
    $rootScope.$on('$routeChangeStart', function () {
        if (routespermission.indexOf($location.path()) != -1) {
            var connected = loginService.islogged();
            connected.then(function (msg) {
                if (!msg.data) $location.path('/login');
            });
        }
    });
});