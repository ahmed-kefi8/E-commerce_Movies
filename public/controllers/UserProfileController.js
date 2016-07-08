Movie_Store_App.controller('UserProfileController',['$scope','$rootScope','Upload','Formulator','UserFactory', function($scope, $rootScope,Upload,Formulator,UserFactory){

  $scope.genders = [
  {value: 'Male', text: 'Male'},
  {value: 'Female', text: 'Female'}
  ]; 
  $scope.loading = false;
  $scope.uploadPhoto = null;
  $scope.croppedPhoto = null;
  $scope.date = new Date();
  $scope.readFileImg = function(files){
    $scope.uploadPhoto = null;
    $scope.croppedPhoto = null;
    $scope.loggeduser.photo = null;
    if (files && files.length) {
      var readImgCallback = function(err, img){
        $scope.loading = false;
        if(err) {console.log(err);}
        $scope.$apply(function(){
          $scope.uploadPhoto = img;
        });
      };
      $scope.loading = true;
      Formulator.readImageFile(files[0], readImgCallback);
    }
  };

  $scope.upload = function () {
    if ($scope.croppedPhoto) {
      $rootScope.loggeduser.photo = $scope.croppedPhoto;
      UserFactory.update($rootScope.loggeduser);
    }

  };

  $scope.saveChanges = function() {
    UserFactory.update($rootScope.loggeduser);
  }
}]);