Movie_Store_App.controller('EditMovieController',['$scope','MovieFactory','$location','$route','$routeParams','$http', function( $scope, MovieFactory, $location, $route, $routeParams, $http ){

	MovieFactory.get({ id: $routeParams._id }, function(data) {
		$scope.movie = data;
		console.log($scope.movie);
	}); 

	$scope.updateMovie = function(){
		console.log($scope.movie.Title);
		MovieFactory.update($scope.movie);
		alert("changement saved");
	}

}]);