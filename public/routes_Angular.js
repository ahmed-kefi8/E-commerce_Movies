/* le rooting entre les différentes views*/
Movie_Store_App.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      redirectTo: 'Home'
  })
    .when('/Home', {
        templateUrl : 'views/Home.html',
    })

    .when('/Chat', {
        resolve: {
            "check": function($location, $rootScope){
                if(!$rootScope.loggeduser){
                    $location.path('/signin');
                    alert("You have to login to access the chat room");
                }
            }
        },
        templateUrl : 'views/Chat.html',
    })

    .when('/ReservationPlanning', {
        templateUrl: 'views/Reservation_Planning.html',
    })

    .when('/Upd_Del_Event', {
        templateUrl: 'views/Upd_Del_Event.html',
    })

    .when('/signin', {
        templateUrl: 'views/signin.html'
    })

    .when('/MyProfile', {
        templateUrl: 'views/UserProfile.html',
    })

    .when('/signup', {
        templateUrl: 'views/signup.html'
    })

    .when('/ManageMovies', {
        templateUrl : 'views/ManageMovies.html',
    })

    .when('/ManageUsers', {
        templateUrl : 'views/ManageUsers.html',
    })

    .when('/wishlist', {
        resolve: {
            "check": function($location, $rootScope){
                if(!$rootScope.loggeduser){
                    $location.path('/signin');
                    alert("You have to login to access your Wishlist");
                }
            }
        },
        templateUrl : 'views/wishlist.html',
    })

    .when('/Movies', {
        templateUrl : 'views/Movies.html',
    })

    .when('/Categories', {
        templateUrl : 'views/Categories.html',
    })

    .when('/EditMovie/:_id', {
        templateUrl : 'views/EditMovie.html',
    })

    .when('/EditEvent/:_id', {
        templateUrl : 'views/EditEvent.html',
    })

    .when('/EditUser/:_id', {
        templateUrl : 'views/EditUser.html',
    })

    .when('/AddMovie', {
        templateUrl : 'views/AddMovie.html',
    })

    .when('/Movie_detail/:_id', {
        templateUrl : 'views/Movie_detail.html',
    })

    .when('/MoviesCategory/:genre', {
        templateUrl : 'views/MoviesCategory.html',
    })


    .when('/Cart', {
        resolve: {
            "check": function($location, $rootScope){
                if(!$rootScope.loggeduser){
                    $location.path('/signin');
                    alert("You have to login to access your Cart");
                }
            }
        },
        templateUrl : 'views/Cart.html',
    })


    .when('/wishlist/:_id', {
        resolve: {
            "check": function($location, $rootScope){
                if(!$rootScope.loggeduser){
                    $location.path('/signin');
                    alert("You have to login to access your Wishlist");
                }
            }
        },
        templateUrl : 'views/wishlist.html',
    })

    .when('/Cart/:_id', {
        resolve: {
            "check": function($location, $rootScope){
                if(!$rootScope.loggeduser){
                    $location.path('/signin');
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