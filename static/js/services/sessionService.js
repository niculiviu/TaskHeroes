'use strict';

app.factory('sessionService', ['$http', '$location', function ($http) {
    return {
        set: function (key, value) {
            return sessionStorage.setItem(key, value);
        },
        get: function (key) {
            return sessionStorage.getItem(key);
        },
        destroy: function (key) {
            $http.post('php/destroy_session.php');
            return sessionStorage.removeItem(key);
        },
        destroy_value: function (key) {
            return sessionStorage.removeItem(key);
        }
    };
}])