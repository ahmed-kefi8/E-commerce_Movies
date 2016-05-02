Movie_Store_App.factory('UserLoginFactory', function($resource){

return $resource('/Movie_Store/users/email/:email', {email:'@email'},
     {
       'update': {method: 'PUT'}
     }
   );
});
