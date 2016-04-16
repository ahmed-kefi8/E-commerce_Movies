

GlassesApp.controller('Sun_GlassesCtrl',['$scope', '$http', function($scope, $http){
  

$http({method: 'POST', url: 'articles.json'}).success(function(data){
$scope.articles = data; // response data
});


}]);


