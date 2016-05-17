Movie_Store_App.controller('MoviesController',['$scope', '$http','MovieFactory','$rootScope','UserFactory','$location', function($scope, $http, MovieFactory,$rootScope,UserFactory,$location){

  
  
$scope.movies = MovieFactory.query();

$scope.genres=["Action","Adventure","Animation","Biography","Comedy","Crime","Drama","Family","Fantasy","History","Horror","Music",
				"Musical","Mystery","Romance","Sci-Fi","Sport","Thriller","War","Western"];



$scope.currentPage = 1;
$scope.pageSize = 8;



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

		UserFactory.update($rootScope.loggeduser);

		$location.path('/Cart/'+$rootScope.loggeduser._id);

		}

	}










}]);

