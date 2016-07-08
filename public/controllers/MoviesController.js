Movie_Store_App.controller('MoviesController',['$scope', '$http','MovieFactory','$rootScope','UserFactory','$location', function($scope, $http, MovieFactory,$rootScope,UserFactory,$location){

	$scope.movies = MovieFactory.query();
	$scope.orderBy ="Price";

	$scope.genres=["Action","Adventure","Animation","Biography","Comedy","Crime","Drama","Family","Fantasy","History","Horror","Music",
	"Musical","Mystery","Romance","Sci-Fi","Sport","Thriller","War","Western"];

	$scope.yearLimits = function(movie){
		if (($scope.minYear == undefined || $scope.minYear == ""  ) && ($scope.maxYear == undefined || $scope.maxYear == "" ))
			return movie;
		else if ($scope.minYear != undefined && ($scope.maxYear == undefined || $scope.maxYear == ""))
			return parseInt(movie.Year) >= parseInt($scope.minYear);
		else if (($scope.minYear == undefined  || $scope.minYear == "" )&& $scope.maxYear != undefined)
			return parseInt(movie.Year) <= parseInt($scope.maxYear);
		else
			return parseInt(movie.Year) >= parseInt($scope.minYear) && parseInt(movie.Year) <= parseInt($scope.maxYear);
	}

	$scope.minImdbRating = function(movie){
		if ($scope.minImdb == undefined || $scope.minImdb == ""  )
			return movie;
		else
			return parseFloat(movie.imdbRating) >= parseFloat($scope.minImdb);
	}

	$scope.priceLimits = function(movie){
		if (($scope.minPrice == undefined || $scope.minPrice == ""  ) && ($scope.maxPrice == undefined || $scope.maxPrice == "" ))
			return movie;
		else if ($scope.minPrice != undefined && ($scope.maxPrice == undefined || $scope.maxPrice == ""))
			return parseFloat(movie.Price) >= parseFloat($scope.minPrice);
		else if (($scope.minPrice == undefined  || $scope.minPrice == "" )&& $scope.maxPrice != undefined)
			return parseFloat(movie.Price) <= parseFloat($scope.maxPrice);
		else
			return parseFloat(movie.Price) >= parseFloat($scope.minPrice) && parseFloat(movie.Price) <= parseFloat($scope.maxPrice);
	}

	$scope.currentPage = 1;
	$scope.pageSize = 8;

	$scope.addToCart = function(movie){

		if(!$rootScope.loggeduser)
			alert("You have to login to access your Cart");

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

		$location.path('/Cart/'+$rootScope.loggeduser._id);
	}
}

$scope.addToWishlist = function(movie){
	console.log($rootScope.loggeduser)

	var bool = false;

	for(var i=0 ; i < $rootScope.wishlist.length ; i++)
		{ if ($rootScope.wishlist[i]._id == movie._id)
			{ bool = true; 
				break;}
			}
			if(bool)
				{alert("The movie : "+ movie.Title + " is already in your Wishlist !");}
			else
			{
				$rootScope.loggeduser.wishlist.push(movie._id);

				$location.path('/wishlist/'+$rootScope.loggeduser._id);

			}
		}
	}]);

