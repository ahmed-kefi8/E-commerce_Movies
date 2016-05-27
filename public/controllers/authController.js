Movie_Store_App.controller('authController', ['$scope','$http','$location','$rootScope','Upload','UserFactory', function($scope,$http,$location,$rootScope,Upload,UserFactory) {

    $scope.user  = {username:'',password:''};
    $scope.alert = '';

    

 
  $scope.strenth = 0;
  
 $scope.inputType = 'password';
  $scope.hideShowPassword = function(){
    if ($scope.inputType == 'password')
      $scope.inputType = 'text';
    else
      $scope.inputType = 'password';
  };
  


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
        
        user.strenth = $scope.strenth;

        $http.post('/auth/signup', user).
            success(function(data) {
                if(data.alert)
                {$scope.alert = data.alert;}
                else
                {$scope.errors = data;}

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
