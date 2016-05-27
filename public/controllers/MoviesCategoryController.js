Movie_Store_App.controller('MoviesCategoryController',['$scope','$http','$filter','$routeParams','MovieFactory','$rootScope','$cookies','UserFactory','$location','EventFactory',
 function($scope, $http, $filter, $routeParams,MovieFactory , $rootScope, $cookies, UserFactory, $location,EventFactory){





$scope.currentPage = 1;
$scope.pageSize = 8;
$scope.orderBy ="Price";






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