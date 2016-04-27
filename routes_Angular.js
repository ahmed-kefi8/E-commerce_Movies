/* le rooting entre les différentes views*/
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

            .when('/Movie_detail/:imdbID', {
                templateUrl : 'views/Movie_detail.html',
            })
            .when('/Cart', {
                resolve: {
                    "check": function($location, $rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/Login');
                        }
                    }
                },
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