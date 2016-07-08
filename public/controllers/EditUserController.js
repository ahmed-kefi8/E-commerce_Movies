Movie_Store_App.controller('EditUserController',['$scope','UserFactory','$location','$route','$routeParams','$http', function( $scope, UserFactory, $location, $route, $routeParams, $http ){

	UserFactory.get({ id: $routeParams._id }, function(data) {
		$scope.user = data;
	}); 

	$scope.updateUser = function(){
		UserFactory.update($scope.user);
		alert("changes has been saved !");
	}
}]);