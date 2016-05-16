
Movie_Store_App.controller('Movie_detailController',['$scope','$http','$filter','$routeParams','MovieFactory','$rootScope','$cookies','UserFactory','$location','EventFactory',
 function($scope, $http, $filter, $routeParams,MovieFactory , $rootScope, $cookies, UserFactory, $location,EventFactory){







$scope.movie = MovieFactory.get({ id: $routeParams._id }); //Get a single movie



$scope.quantity = 1;

$scope.addQuantity = function(){

	if ($scope.quantity == $scope.movie.InStock)
		{alert("Sorry we Only have " + $scope.movie.InStock + " DVD of "+$scope.movie.Title + " available right now ");}
	else
    {$scope.quantity++;}
}



$scope.removeQuantity = function(){
	if ($scope.quantity > 1)
$scope.quantity--;
}


$scope.addToCart = function(movie){

var bool = false;

	for(var i=0 ; i < $rootScope.cart.length ; i++)
		{ if ($rootScope.cart[i]._id == movie._id)
			{ bool = true; 
				break;}
		}

	if(bool)
		{alert("The movie : "+$scope.movie.Title + " is already in your Cart !");}
	else if ($scope.quantity > $scope.movie.InStock)
		{alert("Sorry we Only have " + $scope.movie.InStock + " DVD of "+$scope.movie.Title + " available right now ");}

	else
		{
		$rootScope.loggeduser.cart.push({movie_id : movie._id , quantity : $scope.quantity});

		UserFactory.update($rootScope.loggeduser);

		$location.path('/Cart/'+$rootScope.loggeduser._id);

		}

	}


$scope.rows = new Array(10);

$scope.movie_events = [];

$scope.movie.$promise.then(function (result) {
    

    EventFactory.query().$promise.then(function(data) {
    var e = angular.toJson(data);
    var m = JSON.parse(e);

for (var i = 0; i < m.length; i++) {



	if(m[i].movie_id == result._id)
      {$scope.movie_events.push(m[i]);}
}
});

});




$scope.BookEvent = function(event){

event.state ="Booked By " + $rootScope.loggeduser.username;
EventFactory.update(event);


};









}]);
