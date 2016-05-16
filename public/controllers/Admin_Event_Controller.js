Movie_Store_App.controller('AdminEventsController',['$scope','EventFactory','$location','$route','$routeParams','$rootScope', function( $scope, EventFactory, $location, $route, $routeParams,$rootScope ){





	$scope.events  = EventFactory.query();
    
    $scope.deleteEvent = function(_id){
    EventFactory.delete({ id: _id });
    alert("Event deleted");
    $route.reload()
    };


  EventFactory.get({ id: $routeParams._id }, function(data) {
     $scope.ev = data;
     $scope.ev.start = new Date($scope.ev.start);
       $scope.ev.end = new Date($scope.ev.end);
    }); 





$scope.updateEvent = function(){
EventFactory.update($scope.ev);
alert("changement saved");
                                }



    }]);