/* le rooting entre les différentes views*/
    Movie_Store_App.config(function($routeProvider) {
        $routeProvider
            .when('/', {
              redirectTo: 'Home'
            })
            .when('/Home', {
                templateUrl : 'views/Home.html',
            })

            .when('/ManageMovies', {
                templateUrl : 'views/ManageMovies.html',
            })

            .when('/ManageUsers', {
                templateUrl : 'views/ManageUsers.html',
            })

            .when('/Movies', {
                templateUrl : 'views/Movies.html',
            })

            .when('/EditMovie/:_id', {
                templateUrl : 'views/EditMovie.html',
            })

            .when('/AddMovie', {
                templateUrl : 'views/AddMovie.html',
            })

            .when('/Movie_detail/:_id', {
                templateUrl : 'views/Movie_detail.html',
            })
            .when('/Cart/:_id', {
                resolve: {
                    "check": function($location, $rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/Login');
                            alert("You have to login to access your Cart");
                        }
                    }
                },
                templateUrl : 'views/Cart.html',
            })

            .when('/About_US', {
                templateUrl : 'views/About_US.html',
            })
            .otherwise({redirectTo: 'Home'});

    });