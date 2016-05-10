Movie_Store_App.controller('authController', ['$scope','$http','$location','$rootScope', function($scope,$http,$location,$rootScope) {

    $scope.user  = {username:'',password:''};
    $scope.alert = '';

    $scope.login = function(user){
                        console.log("login   "+ user.password);
        $http.post('/auth/login', user).
            success(function(data) {
                $rootScope.loggeduser = data;
                $scope.alert = 'Login Success';
               // $location.path('/user');
            }).
            error(function() {
                $scope.alert = 'Login failed';
            });

    };

    $scope.signup = function(user){
        $scope.errors = {};

        $http.post('/auth/signup', user).
            success(function(data) {
                if(data.alert)
                {$scope.alert = data.alert;}
                else
                {$scope.errors = data;
                console.log(data);}
             }).
            error(function() {
                console.log("http failed");
                $scope.alert = 'Registration failed'
            });

    };




    $scope.logout = function(){
        $http.get('/auth/logout')
            .success(function() {
                console.log("logout fired");
                $rootScope.loggeduser = undefined;
                $location.path('/');

            })
            .error(function() {
                $scope.alert = 'Logout failed'
            });
    };
}]);
