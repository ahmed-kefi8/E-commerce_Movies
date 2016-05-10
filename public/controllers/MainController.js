Movie_Store_App.controller('mainController', ['$scope','$http','$location', '$rootScope', function($scope,$http,$location,$rootScope) {



    $scope.userinfo = function() {
        $http.get('/auth/currentuser').
            success(function (data) {
                $rootScope.loggeduser = data;
            }).
            error(function () {
                $scope.alert = 'Login failed'
            });
    };





	}]);