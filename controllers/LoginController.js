
Movie_Store_App.controller('loginController',['$scope','$location','$rootScope', function($scope, $location, $rootScope){


$scope.submitLogin = function(){
	
	var user_email = $scope.email;
	var user_password = $scope.password;

	if ($scope.email == "ahmed@gmail.com" && $scope.password == '12345')
		{ 
			$rootScope.loggedIn = true;
			$location.path('/Cart');
		}
	else
		alert('Wrong email or password');




};

}]);