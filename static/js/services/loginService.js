'use strict';

app.factory('loginService', function ($http) {
    return {
        login: function (user,scope) {
            console.log('Am intrat in loginService');
            var $promise = $http.post('php/login.php', user);
            $promise.then(function (msg) {
                console.log(msg);
                if (msg.data == 'succes') {
                    scope.msgtxt = 'Success!';
                    console.log('succes login');
                }
                else {
                    scope.msgtxt = 'Error!';
                    console.log('error');
                }
            });
        }
    }
});