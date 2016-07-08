Movie_Store_App.controller('chatController', ['$scope', 'Socket','$rootScope', function($scope, Socket, $rootScope){

	Socket.connect();
	$scope.users = [];
	$scope.messages = [];

	Socket.emit('add-user', {username: $rootScope.loggeduser.username, photo: $rootScope.loggeduser.photo });

	$scope.sendMessage = function(msg){
		if(msg != null && msg != '')
			var d = new Date();

		Socket.emit('message', {username: $rootScope.loggeduser.username, message: msg, photo: $rootScope.loggeduser.photo, date : d})
		$scope.msg = '';
	}

	Socket.emit('request-users', {});

	Socket.on('users', function(data){
		$scope.users = data.users;
	});

	Socket.on('message', function(data){
		$scope.messages.push(data);
	});

	Socket.on('add-user', function(data){
		var exist = false;
		for(var i = 0; i <$scope.users.length; i++) {
			if ($scope.users[i].username == data.username)
				{exist = true;
					break;}
				}

				if(exist == false)
					{$scope.users.push({username :data.username, photo : data.photo});}

				var d = new Date();
				$scope.messages.push({username: data.username, message: 'has entered the chat room', photo: data.photo, date : d});
			});

	Socket.on('remove-user', function(data){
		Socket.emit('request-users', {});

		for(var i = 0; i <$scope.users.length; i++) {
			if ($scope.users[i].username == data.username)
				{var ph = $scope.users[i].photo; }
		}
		var d = new Date();
		$scope.messages.push({username: data.username, message: 'has left the chat room', photo: ph, date : d});

	});

	$scope.$on('$locationChangeStart', function(event){
		Socket.disconnect(true);
	});

	$scope.SendEnterKey = function(keyEvent, msg) {
		if (keyEvent.which === 13)
			$scope.sendMessage(msg);
	}
}]);