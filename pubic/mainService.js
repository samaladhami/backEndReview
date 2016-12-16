angular.module('review')
.service('mainService' , function($http){

  this.getUsers = function () {
    return $http.get('/api/users')
    .then(function(response) {
      console.log(response.data);
      return response.data
    })
  }
})
