Movie_Store_App.controller('MoviesController',['$scope', '$http','$filter','MovieFactory', function($scope, $http, $filter, MovieFactory){

  
  


$scope.movies = MovieFactory.query();



/* La pagination, on va limiter le nombre de movies par page à 6 */
$scope.currentPage = 0;
$scope.pageSize = 4;
$scope.numberOfPages=function(){
        return Math.ceil($scope.movies.length/$scope.pageSize);                
    }

}]);





/*on a déja un filtre 'limitTo' dans Angular,
on va construire un filtre pour s'avoir ou débuter la prochiane page*/
Movie_Store_App.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
