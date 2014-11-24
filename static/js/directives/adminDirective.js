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

app.directive('members', function () {
    return {
        templateUrl: 'static/template/members_template.html'
    }
});

app.directive('meetings', function () {
    return {
        templateUrl: 'static/template/meetings_template.html'
    }
});

app.directive('data-lining', function () {
    return {
        templateUrl: 'static/js/lining.min.js'
    }
});

app.directive('data-effect', function () {
    return {
        templateUrl: 'static/js/lining.effect.min.js'
    }
});