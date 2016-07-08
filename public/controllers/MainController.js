Movie_Store_App.controller('mainController', ['$scope','$http','$location', '$cookies','EventFactory','$rootScope', function($scope,$http,$location,$cookies,EventFactory,$rootScope) {

    $scope.userinfo = function() {
        $http.get('/auth/currentuser').
        success(function (data) {
            $rootScope.loggeduser = data;
            $rootScope.loggeduser.birth_date = new Date($rootScope.loggeduser.birth_date);
        }).
        error(function () {
            $scope.alert = 'Login failed'
        });
    };
    EventFactory.query().$promise.then(function(data) {
        var e = angular.toJson(data);
        $rootScope.evt = JSON.parse(e);
    });
}]);