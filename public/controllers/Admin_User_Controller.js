Movie_Store_App.controller('AdminUsersController',['$scope','UserFactory','$location','$route','$routeParams', function( $scope, UserFactory, $location, $route, $routeParams ){

	$scope.users = UserFactory.query();
	$scope.deleteUser = function(_id){ 
		console.log("delete user fired");
		UserFactory.delete({ id: _id });
		$route.reload();
		alert("User deleted");
	};

	$scope.AddUser = function(user){
		console.log("add User fired");
		alert("User added");
		return UserFactory.save($scope.user);
	};

	$scope.currentPage = 1;
	$scope.pageSize = 10;

}]);