'use strict';

var app = angular.module('task_heroes', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', { templateUrl: 'static/login.html', controller: 'loginCtrl' });
    $routeProvider.otherwise({ redirectTo: '/login' });

}]);