var GlassesApp = angular.module('GlassesApp', ['ngRoute']);

    GlassesApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
              redirectTo: 'home'
            })
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : 'homeCtrl'
            })

            .when('/Sun_Glasses', {
                templateUrl : 'views/Sun_Glasses.html',
                controller  : 'Sun_GlassesCtrl'
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
	
	GlassesApp.controller('Sun_GlassesCtrl', ['$scope', function($scope) {

	


	}]);