Movie_Store_App.controller('CartController',['$q','$scope','$cookies','MovieFactory','UserFactory','$rootScope','$location', function($q, $scope, $cookies, MovieFactory, UserFactory, $rootScope,$location){




$rootScope.cart = [];


$rootScope.loggeduser.cart.forEach(function(listItem, index){



MovieFactory.get({ id: listItem.movie_id }, function(data) {

$scope.movie = data;
$scope.movie.quantityInCart = listItem.quantity;
$rootScope.cart.push($scope.movie);
});


});



$scope.addQuantity = function(movie_id){

	for(var i=0 ; i < $rootScope.cart.length ; i++)
	{
		if ($rootScope.cart[i]._id == movie_id )
			{ 
				if($rootScope.cart[i].InStock == $rootScope.cart[i].quantityInCart)
					{alert("Sorry we Only have " +$rootScope.cart[i].InStock + " DVD of "+$rootScope.cart[i].Title + " available right now ");}
				else
				{$rootScope.cart[i].quantityInCart ++;
				 $rootScope.loggeduser.cart[i].quantity = $rootScope.cart[i].quantityInCart;}
			break;

			}
	}
}



$scope.removeQuantity = function(movie_id){

for(var i=0 ; i < $rootScope.cart.length ; i++)
	{
		if ($rootScope.cart[i]._id == movie_id && $rootScope.cart[i].quantityInCart > 1)
		{$rootScope.cart[i].quantityInCart--;
		 $rootScope.loggeduser.cart[i].quantity = $rootScope.cart[i].quantityInCart;
			break;}
	}
}




$scope.Total =  function(){
var sum =0;
for (var i=0 ; i <$rootScope.cart.length ; i++)
{
sum += $rootScope.cart[i].Price * $rootScope.cart[i].quantityInCart;

}

if ($rootScope.cart.length == 0)
{sum -= 6.94;}

return sum;



}


$scope.TotalItems =  function(){
var sumItems = 0;
for (var i=0 ; i <$rootScope.cart.length ; i++)
{
sumItems += parseInt($rootScope.cart[i].quantityInCart);

}


return sumItems;
	}


$scope.deleteFromCart = function(movie){
	$rootScope.cart.splice($rootScope.cart.indexOf(movie), 1);

for(var i=0; i<$rootScope.loggeduser.cart.length ; i++)
{
	if($rootScope.loggeduser.cart[i].movie_id == movie._id)
		{ $rootScope.loggeduser.cart.splice(i, 1);
		  break;}
}



	//UserFactory.update($rootScope.loggeduser);


}



$scope.emptyCart = function(){
	$rootScope.cart = [];
	$rootScope.loggeduser.cart = [];
	UserFactory.update($rootScope.loggeduser);
}

$scope.saveCart = function(){
UserFactory.update($rootScope.loggeduser);
alert("Your Cart has been Saved !")
}


$scope.order = function(){
	alert('YOUR ORDER HAS BEEN PLACED, THANK YOU');
}

	}]);