Movie_Store_App.controller('AdminMoviesController',['$scope','MovieFactory','$location','$route', function($scope, MovieFactory, $location, $route){



$scope.movies = MovieFactory.query();

$scope.deleteMovie = function(_id){ 
	console.log("delete fired");
	MovieFactory.delete({ id: _id });
	$route.reload();
	};


/*
  $scope.deleteMovie = function(movie) { // Delete a movie. Issues a DELETE to /api/movies/:id
      movie.$delete(function() {

      });
    }

*/






/*

$scope.updateMovie = function(){

MovieFactory.get({ id: $routeParams.id }, function(data) {
      MovieFactory.update($scope.movie);

};

$scope.AddMovie = function(){ return MovieFactory.save($scope.movie);};



*/




}]);