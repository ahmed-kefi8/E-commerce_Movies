Movie_Store_App.controller('CartController',['$scope','CartService', function($scope, CartService){


$scope.cart = CartService.cart;

$scope.deleteFromCart = function(){
	CartService.deleteFromCart($scope.cart.indexOf($scope.movie));
}

$scope.order = function(){
	alert('YOUR ORDER HAS BEEN PLACED, THANK YOU');
}

	}]);