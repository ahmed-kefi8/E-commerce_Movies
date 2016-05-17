Movie_Store_App.controller('MoviesCategoryController',['$scope','$http','$filter','$routeParams','MovieFactory','$rootScope','$cookies','UserFactory','$location','EventFactory',
 function($scope, $http, $filter, $routeParams,MovieFactory , $rootScope, $cookies, UserFactory, $location,EventFactory){





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







    MovieFactory.query().$promise.then(function(data) {

    var m = angular.toJson(data);
    var movies = JSON.parse(m);

    $scope.moviesInGenre = [];

    for ( var i =0 ; i < movies.length ; i++){ 

    	if (movies[i].Genre.indexOf($routeParams.genre) > -1)

    			{$scope.moviesInGenre.push(movies[i]);}


    	}



});










}]);