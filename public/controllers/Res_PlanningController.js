Movie_Store_App.controller('Res_PlannigController', ['$scope', '$timeout','EventFactory','$rootScope', function ($scope, $timeout, EventFactory, $rootScope) {
/*
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

*/

/*

    $scope.events = [{
        title: 'Move or Resize me',
        start: new Date(y, m, d, 8, 0),
        end: new Date(y, m, d, 10, 0)
    }];

*/
$scope.events = [];

EventFactory.query().$promise.then(function(events) {

  $scope.eventSources = angular.toJson(events);
  return $scope.eventSources;

});



$scope.eventSources = [$scope.events];












    


    $scope.addEvent = function(event){

    alert("Event added");
    event.state = "free";
 return EventFactory.save($scope.event);


    };











    $scope.alertEvent = function (event, jsEvent, ui, view) {
        
        $timeout(function() {
        var sEvent = findCalendarEvent(event);
        sEvent.start = event.start.toDate();
        sEvent.end = event.end.toDate();
        // by making this dirty we tell uiCalendar to not send updates
        // to fullCalendar.
        sEvent.isDirty = true;
        });
    };
    
    function findCalendarEvent(event) {
        
        for (var i = 0;i < $scope.eventSources.length;i++){
            for(var x = 0;x < $scope.eventSources[i].length;x++){
                if ($scope.eventSources[i][x]._id === event._id) {
                    return $scope.eventSources[i][x];
                }
            }
        }
        
    }

    $scope.calendarConfig = {
        calendar: {
            allDaySlot: false,
            defaultView: 'agendaWeek',
            timezone: 'local',
            editable: true,
            eventLimit: 3,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            eventResizeStop: $scope.alertEvent,
            eventDragStop: $scope.alertEvent
        }
    };

}]);