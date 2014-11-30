'use strict';

var app = angular.module('task_heroes', ['ngRoute', 'ui.bootstrap', 'ngDialog', 'ui.sortable', 'ngDropdowns']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', { templateUrl: 'static/login.html', controller: 'loginCtrl' });
    $routeProvider.when('/admin/', { templateUrl: 'static/dashboard.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/members/', { templateUrl: 'static/members.html', controller: 'membersCtrl' });
    $routeProvider.when('/admin/meetings/', { templateUrl: 'static/meetings.html', controller: 'meetingsCtrl' });
    $routeProvider.when('/admin/organization/', { templateUrl: 'static/organization_admin.html', controller: 'orgCtrl' }); 
    $routeProvider.when('/admin/profile/:ID/', { templateUrl: 'static/profile.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/settings/', { templateUrl: 'static/settings.html', controller: 'adminCtrl' });
    $routeProvider.when('/admin/project/:ID', { templateUrl: 'static/project.html', controller: 'projectCtrl' });
    $routeProvider.when('/admin/project/:ID/edit', { templateUrl: 'static/edit_project.html', controller: 'editprojectCtrl' });
    $routeProvider.when('/admin/project/:ID/statistics', { templateUrl: 'static/statistics_project.html', controller: 'statisticsprojectCtrl' });
    $routeProvider.when('/admin/settings/', { templateUrl: 'static/settings.html', controller: 'adminCtrl' });
    $routeProvider.when('/', { templateUrl: 'static/index.html', controller: 'indexCtrl' });
    $routeProvider.when('/noPermision/', { templateUrl: 'static/noPermision.html', controller: 'indexCtrl' });
    $routeProvider.otherwise({ redirectTo: '/login' });

}]);

app.run(function ($rootScope, $location, loginService) {
    var routespermission = ['/admin/'];  //route that requires login
    $rootScope.$on('$routeChangeStart', function () {
        if (routespermission.indexOf($location.path()) != -1) {
            var connected = loginService.islogged();
            connected.then(function (msg) {
                if (!msg.data) $location.path('/login');
            });
        }
    });
});