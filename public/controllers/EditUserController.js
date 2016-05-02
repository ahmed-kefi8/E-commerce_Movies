Movie_Store_App.controller('EditUserController',['$scope','UserFactory','$location','$route','$routeParams','$http', function( $scope, UserFactory, $location, $route, $routeParams, $http ){

//console.log($routeParams._id);



  UserFactory.get({ id: $routeParams._id }, function(data) {
     $scope.user = data;
     //console.log($scope.user);
    }); 







$scope.updateUser = function(){

UserFactory.update($scope.user);
                                }



}]);