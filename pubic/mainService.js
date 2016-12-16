angular.module('review')
.service('mainService' , function($http){

  this.getUsers = function () {
    return $http.get('/api/users')
    .then(function(response) {
      return response.data
    })
  }
})
