
Movie_Store_App.controller('Movie_detailController',['$scope','$http','$filter','$routeParams','MovieFactory','$rootScope','$cookies','UserFactory','$location', function($scope, $http, $filter, $routeParams,MovieFactory , $rootScope, $cookies, UserFactory, $location){




$scope.userId = $cookies.get('userId');




//console.log($routeParams._id);

$scope.movie = MovieFactory.get({ id: $routeParams._id }); //Get a single movie





$scope.addToCart = function(){

	UserFactory.get({ id: $cookies.get('userId') }, function(data) {
	$scope.user = data;

	$scope.user.Cart.push($scope.movie._id);

	UserFactory.update($scope.user);


});
}



}]);
