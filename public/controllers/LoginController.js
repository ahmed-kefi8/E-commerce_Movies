
Movie_Store_App.controller('LoginController',['$scope','$location','$rootScope','UserLoginFactory', function($scope, $location, $rootScope, UserLoginFactory){
$scope.user = {};



$scope.submitLogin = function(){

console.log("submit login fired");




$scope.user = UserLoginFactory.get({ email: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" }); //Get a single user
 console.log($scope.user);


if ($scope.user.password != "0")
{   $rootScope.loggedIn = true;
	$location.path('/Cart');}


else
{alert('Wrong email or password');}


};

}]);




