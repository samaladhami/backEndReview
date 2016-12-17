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

  this.postUser = function(name , phone , email) {

    const _name = document.getElementById('name');
    const _phone = document.getElementById('phone');
    const _email = document.getElementById('email');

    if (name && phone && email){
      _name.style.background = '#F7F6F6'
      _phone.style.background = '#F7F6F6'
      _email.style.background = '#F7F6F6'
      return $http({
           method : 'POST'
        ,  url    : '/api/user'
        ,  data   : {
                name      : name
              , cellPhone : phone
              , email     : email
          }
        , headers: {
            'Content-type': 'application/json;charset=utf-8'
        }
      })
    }
    else {
      if (!name){
        _name.style.background = '#ffcaca';
      }
      else{
        _name.style.background = '#F7F6F6'
      }
      if (!phone){
        _phone.style.background= '#ffcaca'
      }
      else{
        _phone.style.background = '#F7F6F6'
      }
      if (!email){
        _email.style.background= '#ffcaca'
      }
      else{
        _email.style.background = '#F7F6F6'
      }
    }
  }
})
