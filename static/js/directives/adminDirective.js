'use strict';

app.directive('menuBar', function () {
    return {
        templateUrl: 'static/template/menu_bar.html'
    }
});

app.directive('sideBar', function () {
    return {
        templateUrl: 'static/template/side_bar.html'
    }
});

app.directive('dashboard', function () {
    return {
        templateUrl: 'static/template/dashboard_template.html'
    }
});