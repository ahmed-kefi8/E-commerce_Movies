Movie_Store_App.controller('AdminMoviesController',['$scope','MovieFactory','$location','$route', function($scope, MovieFactory, $location, $route){



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






/*

$scope.updateMovie = function(){

MovieFactory.get({ id: $routeParams.id }, function(data) {
      MovieFactory.update($scope.movie);

};





*/




}]);