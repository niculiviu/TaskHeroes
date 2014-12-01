'use strict';

app.factory('loginService', function ($http, $location, sessionService,$rootScope) {
    var TeamID, userID;
    var myFunctions =
    {
        login: function (user,scope,rootScope) {
            console.log('Am intrat in loginService');
            var $promise = $http.post('php/login.php', user);
            $promise.then(function (msg) {
                console.log(msg);
                TeamID = msg.data[0];
                userID = msg.data[1];
                scope.TeamID = msg.data[0];
                if (msg.data) {
                    scope.msgtxt = 'Success!';
                    console.log('succes login');   
                    sessionService.set('TeamID', TeamID);
                    sessionService.set('UserID', userID);
                    $location.path('/admin/');
                    location.reload(); 
                }
                else {
                    scope.msgtxt = 'Email-ul sau parola sunt incorecte';
                    console.log('error');
                    $location.path('/login');
                }
            });
        },
        TeamID: sessionService.get('TeamID'),

        logout: function () {
            sessionService.destroy('TeamID');
            $location.path('/login');
        },
        islogged: function () {
            var $checkSessionServer = $http.post('php/check_session.php');
            return $checkSessionServer;
            /*
			if(sessionService.get('user')) return true;
			else return false;
			*/
        },
        register: function (user,scope){
            console.log('Am intrat in register service');
            var $promise = $http.post('php/register.php', user);
            $promise.then(function (msg) {
                if (msg == 'succes') {
                    $('#RegisterModal').modal('hide');
                } else {
                    $('#RegisterModal').modal('hide');
                    scope.msgtxt = 'succes! Acum te poti loga'
                }
                
            });
        },
        getLoggedUser: function ($rootScope) {
            console.log("logged user");
            var user = sessionService.get('UserID');
            $http.post('php/getLoggedUser.php?ID=' + user).success(function (data) {
                if (data) {
                    $rootScope.LoggedUserJson = data;
                    console.log($rootScope.LoggedUserJson);
                };
            });

        }
    }

    return myFunctions;
});