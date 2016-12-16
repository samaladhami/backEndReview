angular.module('review')
.service('mainService' , function($http){

  this.getUsers = function () {
    return $http.get('/api/users')
    .then(function(response) {
      console.log(response.data);
      return response.data
    })
  }

  this.deleteUser = function(id){

    return $http({
        method : 'DELETE'
      , url    : '/api/user'
      , data   : { id: id }
      , headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
    }).then(function(response){
      console.log(response);
    })


  }
})
