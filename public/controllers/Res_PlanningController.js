Movie_Store_App.controller('Res_PlannigController', ['$scope', '$timeout','EventFactory','$cookies','$q','$compile','uiCalendarConfig','$rootScope','$location','$route','MovieFactory', function ($scope, $timeout, EventFactory, $cookies, $q,$compile,uiCalendarConfig,$rootScope,$location,$route,MovieFactory) {

    $scope.eventSources = [$rootScope.evt];
    $scope.movies = MovieFactory.query();
    $scope.addEvent = function(event){
        event.state = "free";
        event.duration = moment(event.end).diff(moment(event.start), 'hours');
        event.url='';
        event.movie_title = $scope.mve.Title;
        event.movie_id = $scope.mve._id;
        EventFactory.save($scope.event);
        $rootScope.evt.push(event);
        $route.reload()
    };
    
    $scope.alertEvent = function (event, jsEvent, ui, view) {
        
        $timeout(function() {
            var sEvent = findCalendarEvent(event);
            sEvent.start = event.start.toDate();
            sEvent.end = event.end.toDate();
            sEvent.duration = moment(event.end.toDate()).diff(moment(event.start.toDate()), 'hours');
            sEvent.isDirty = true;
        });
    };

    function findCalendarEvent(event) {
        
        for (var i = 0;i < $scope.eventSources.length;i++){
            for(var x = 0;x < $scope.eventSources[i].length;x++){
                if ($scope.eventSources[i][x]._id === event._id) {
                    EventFactory.update($scope.eventSources[i][x]);
                    return $scope.eventSources[i][x];
                }
            }
        }
    };

    $scope.calendarConfig = {
        calendar: {
            allDaySlot: false,
            defaultView: 'month',
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