
Movie_Store_App.controller('loginController',['$scope','$location','$rootScope', function($scope, $location, $rootScope){


$scope.submitLogin = function(){
	
  

	if ($scope.email == "ahmed@gmail.com" && $scope.password == '12345')
		{ 
			$rootScope.loggedIn = true;
			$location.path('/Cart');
		}
	else
		alert('Wrong email or password');




};

}]);