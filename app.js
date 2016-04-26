
/* le rooting entre les différentes views*/

var Movie_Store_App = angular.module('Movie_Store_App', ['ngRoute']);

    Movie_Store_App.config(function($routeProvider) {
        $routeProvider
            .when('/', {
              redirectTo: 'Home'
            })
            .when('/Home', {
                templateUrl : 'views/Home.html',
            })

            .when('/Movies', {
                templateUrl : 'views/Movies.html',
            })

            .when('/Movie_detail', {
                templateUrl : 'views/Movie_detail.html',
            })
             .when('/Cart', {
                templateUrl : 'views/Cart.html',
            })
            .when('/Login', {
                templateUrl : 'views/Login.html',
            })
            .when('/About_US', {
                templateUrl : 'views/About_US.html',
            })
            .otherwise({redirectTo: 'Home'});

    });