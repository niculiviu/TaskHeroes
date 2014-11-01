'use strict';

app.factory('loginService', function ($http,$location,sessionService) {
    return {
        login: function (user,scope) {
            console.log('Am intrat in loginService');
            var $promise = $http.post('php/login.php', user);
            $promise.then(function (msg) {
                console.log(msg);
                var TeamID = msg.data;
                
                if (msg.data) {
                    scope.msgtxt = 'Success!';
                    console.log('succes login');
                    //sessionService.set('uid', uid);
                    sessionService.set('TeamID', TeamID);
                    $location.path('/admin/' + TeamID);
                }
                else {
                    scope.msgtxt = 'Email-ul sau parola sunt incorecte';
                    console.log('error');
                    $location.path('/login');
                }
            });
        },

        logout: function () {
            sessionService.destroy('uid');
            $location.path('/login');
        },
        islogged: function () {
            var $checkSessionServer = $http.post('php/check_session.php');
            return $checkSessionServer;
            /*
			if(sessionService.get('user')) return true;
			else return false;
			*/
        }
    }
});