Movie_Store_App.controller('AdminMoviesController',['$scope','MovieFactory','$location','$route','$routeParams', function( $scope, MovieFactory, $location, $route, $routeParams ){

	$scope.movies = MovieFactory.query();

	$scope.deleteMovie = function(_id){ 
		console.log("delete fired");
		MovieFactory.delete({ id: _id });
		$route.reload();
		alert("Movie deleted");
	};

	$scope.AddMovie = function(movie){
		console.log("add fired");
		alert("Movie added");
		return MovieFactory.save($scope.movie);
	};

	$scope.currentPage = 1;
	$scope.pageSize = 10;

}]);