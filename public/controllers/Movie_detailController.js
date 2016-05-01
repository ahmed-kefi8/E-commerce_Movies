
Movie_Store_App.controller('Movie_detailController',['$scope','$http','$filter','$routeParams','MovieFactory','CartService', function($scope, $http, $filter, $routeParams,MovieFactory , CartService){






console.log($routeParams._id);

$scope.movie = MovieFactory.get({ id: $routeParams._id }); //Get a single movie





/*
$http({method: 'GET', url: 'movies.json'}).success(function(data){
$scope.movies = data; // response data
for(var i = 0; i < $scope.movies.length; i++) {
        $scope.movie = $scope.movies[i];
        if($scope.movie.imdbID === $routeParams.imdbID) {
        break;
        }
        }
});
*/
$scope.addToCart = function(){
	CartService.addToCart($scope.movie);
}



}]);
