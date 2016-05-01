Movie_Store_App.controller('EditMovieController',['$scope','MovieFactory','$location','$route','$routeParams','$http', function( $scope, MovieFactory, $location, $route, $routeParams, $http ){

console.log($routeParams._id);
/*
$scope.movie = MovieFactory.get({ id: $routeParams._id }); //Get a single movie
console.log($scope.movie +'888');
*/




  MovieFactory.get({ id: $routeParams._id }, function(data) {
      return $scope.movie = data;
            console.log($scope.movie);

    });









$scope.updateMovie = function(){


console.log("update fired" + $scope.movie);

      MovieFactory.update($scope.movie);

                                };
















}]);