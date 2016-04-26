
/* le rooting entre les différentes views*/

var Movie_shop_App = angular.module('Movie_shop_App', ['ngRoute']);

    Movie_shop_App.config(function($routeProvider) {
        $routeProvider
            .when('/', {
              redirectTo: 'home'
            })
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : 'homeCtrl'
            })

            .when('/Glasses', {
                templateUrl : 'views/Glasses.html',
                controller  : 'GlassesCtrl'
            })

            .when('/View_Glasses', {
                templateUrl : 'views/View_Glasses.html',
                controller  : 'View_GlassesCtrl'
            })
			 .when('/About_US', {
                templateUrl : 'views/About_US.html',
                controller  : 'About_USCtrl'
            })
			
			.otherwise({redirectTo: 'home'});

    });
	
	/*Movie_shop_App.controller('Sun_GlassesCtrl', ['$scope', function($scope) {

	


	}]);*/
