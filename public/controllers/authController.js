

Movie_Store_App.controller('authController', ['$scope','$http','$location','$rootScope', function($scope,$http,$location,$rootScope) {

    $scope.user  = {username:'',password:''};
    $scope.alert = '';

    $scope.login = function(user){
                        console.log("login   "+ user.password);
        $http.post('/auth/login', user).
            success(function(data) {
                $rootScope.loggeduser = data;
                $scope.alert = 'Login Success'
               // $location.path('/user');
            }).
            error(function() {
                $scope.alert = 'Login failed'
            });

    };

    $scope.signup = function(user){

        $http.post('/auth/signup', user).
            success(function(data) {
                console.log("http lunched");
                $scope.alert = data.alert;
             }).
            error(function() {
                console.log("http failed");
                $scope.alert = 'Registration failed'
            });

    };

    $scope.userinfo = function() {
        $http.get('/auth/currentuser').
            success(function (data) {
                $scope.loggeduser = data;
            }).
            error(function () {
                $scope.alert = 'Login failed'
            });
    };



    $scope.logout = function(){
        $http.get('/auth/logout')
            .success(function() {
                console.log("logout fired");
                $rootScope.loggeduser = undefined;
                $location.path('/signin');

            })
            .error(function() {
                $scope.alert = 'Logout failed'
            });
    };
}]);
