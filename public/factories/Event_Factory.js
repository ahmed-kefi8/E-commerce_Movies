Movie_Store_App.factory('EventFactory', function($resource){

return $resource('/Movie_Store/events/:id', {id:'@_id'},
     {
       'update': {method: 'PUT'}
     }
   );
});