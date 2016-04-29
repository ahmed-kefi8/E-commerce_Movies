Movie_Store_App.factory('MovieFactory', function($resource){

return $resource('/Movie_Store/:id', {id:'@_id'},
     {
       'update': {method: 'PUT'}
     }
   );
});
