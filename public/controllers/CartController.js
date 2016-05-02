Movie_Store_App.controller('CartController',['$scope','$cookies','MovieFactory','UserFactory','$rootScope','$location', function($scope, $cookies, MovieFactory, UserFactory, $rootScope,$location){




$scope.userId = $cookies.get('userId');

UserFactory.get({ id: $cookies.get('userId') }, function(data) {

	$scope.user = data;

	$scope.moviesInUserCart = $scope.user.Cart;

	console.log("$scope.moviesInUserCart  " + $scope.moviesInUserCart);

	$rootScope.cart = [];

	for(var i=0 ; i<$scope.moviesInUserCart.length ; i++)
	{

		MovieFactory.get({ id: $scope.moviesInUserCart[i] }, function(data) {
		     $scope.movie = data;
		     console.log("$scope.movie   "  +$scope.movie);
		     $rootScope.cart.push($scope.movie);
																	


																	});
	}

	console.log($rootScope.cart);



																});










$scope.deleteFromCart = function(movie){
	$rootScope.cart.splice($rootScope.cart.indexOf(movie), 1);

UserFactory.get({ id: $cookies.get('userId') }, function(data) {
	$scope.user = data;
	$scope.user.Cart = $rootScope.cart;

	UserFactory.update($scope.user);

});

}

$scope.order = function(){
	alert('YOUR ORDER HAS BEEN PLACED, THANK YOU');
}

	}]);