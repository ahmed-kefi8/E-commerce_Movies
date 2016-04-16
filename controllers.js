

GlassesApp.controller('GlassesCtrl',['$scope', '$http','$filter', function($scope, $http, $filter){
  
/* Parsing du fichier articles.json et récupération des données dans la variable articles */
$http({method: 'POST', url: 'articles.json'}).success(function(data){
$scope.articles = data; // response data
});



/* La pagination, on va limiter le nombre de lunettes par pages à 6 donc
on aura 3 pages ... */




$scope.currentPage = 0;
$scope.pageSize = 6;
$scope.numberOfPages=function(){
        return Math.ceil($scope.articles.length/$scope.pageSize);                
    }





}]);



/*on a déja un filtre 'limitTo' dans Angular,
on va construire un filtre pour s'avoir ou débuter la prochiane page*/

GlassesApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
