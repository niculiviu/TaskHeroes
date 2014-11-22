'use strict';

app.directive('project', function () {
    return {
        templateUrl: 'static/template/project_template.html'
    }
});

app.directive('projectMenu', function () {
    return {
        templateUrl: 'static/template/project_menu_template.html'
    }
});

app.directive('taskDialog', function () {
    return {
        templateUrl: 'static/template/TaskDialog.html'
    }
});