angular.module('review')
.controller('mainCtrl' , function($scope , mainService){

  $scope.getUsers = function(){
    mainService.getUsers().then(function(result){
      $scope.users = result
    })
  }

  $scope.getUsers();

  $scope.deleteUser = function(id){
    mainService.deleteUser(id);
    $scope.getUsers();

  }
})
