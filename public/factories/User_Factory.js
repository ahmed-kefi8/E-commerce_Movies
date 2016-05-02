Movie_Store_App.factory('UserFactory', function($resource){

return $resource('/Movie_Store/users/:id', {id:'@_id'},
     {
       'update': {method: 'PUT'}
     }
   );
});