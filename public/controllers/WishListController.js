Movie_Store_App.controller('WishListController',['$q','$scope','$cookies','MovieFactory','UserFactory','$rootScope','$location', function($q, $scope, $cookies, MovieFactory, UserFactory, $rootScope,$location){



$rootScope.wishlist = [];


$rootScope.loggeduser.wishlist.forEach(function(listItem, index){



MovieFactory.get({ id: listItem }, function(data) {

$scope.movie = data;
$rootScope.wishlist.push($scope.movie);


});


});




$scope.addToCart = function(movie){



var bool = false;

	for(var i=0 ; i < $rootScope.cart.length ; i++)
		{ if ($rootScope.cart[i]._id == movie._id)
			{ bool = true; 
				break;}
		}

	if(bool)
		{alert("The movie : "+ movie.Title + " is already in your Cart !");}

	else
		{
		$rootScope.loggeduser.cart.push({movie_id : movie._id , quantity : 1});

		//UserFactory.update($rootScope.loggeduser);

			$rootScope.wishlist.splice($rootScope.wishlist.indexOf(movie), 1);

for(var i=0; i<$rootScope.loggeduser.wishlist.length ; i++)
{
	if($rootScope.loggeduser.wishlist[i] == movie._id)
		{ $rootScope.loggeduser.wishlist.splice(i, 1);
		  break;}
}

		$location.path('/Cart/'+$rootScope.loggeduser._id);

		}

	}




$scope.deleteFromWishlist = function(movie){
	$rootScope.wishlist.splice($rootScope.wishlist.indexOf(movie), 1);

for(var i=0; i<$rootScope.loggeduser.wishlist.length ; i++)
{
	if($rootScope.loggeduser.wishlist[i] == movie._id)
		{ $rootScope.loggeduser.wishlist.splice(i, 1);
		  break;}
}




}



$scope.emptyWishlit = function(){
	$rootScope.wishlist = [];
	$rootScope.loggeduser.wishlist = [];
}

$scope.saveWishlit = function(){
UserFactory.update($rootScope.loggeduser);
alert("Your Wishlist has been Saved !")
}




	}]);