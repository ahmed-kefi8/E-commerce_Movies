Movie_Store_App.controller('chatController', ['$scope', 'Socket','$rootScope', function($scope, Socket, $rootScope){




	Socket.connect();
	$scope.users = [];
	$scope.messages = [];




Socket.emit('add-user', {username: $rootScope.loggeduser.username})


$scope.sendMessage = function(msg){
	if(msg != null && msg != '')
		$scope.date = new Date();
		Socket.emit('message', {message: msg})
	$scope.msg = '';
}



Socket.emit('request-users', {});

Socket.on('users', function(data){
	$scope.users = data.users;
});


Socket.on('users', function(data){
	$scope.users = data.users;
});


Socket.on('message', function(data){
	$scope.messages.push(data);
});


Socket.on('add-user', function(data){
	$scope.users.push(data.username);
	$scope.messages.push({username: data.username, message: 'has entered the chat room'});
});


Socket.on('remove-user', function(data){
	$scope.users.splice($scope.users.indexOf(data.username), 1);
	$scope.messages.push({username: data.username, message: 'has left the chat room'});
});


$scope.$on('$locationChangeStart', function(event){
	Socket.disconnect(true);
});


$scope.SendEnterKey = function(keyEvent, msg) {
  if (keyEvent.which === 13)
    $scope.sendMessage(msg);
}

}]);
