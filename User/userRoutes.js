const userCtrl = require('./userCtrl.js');

module.exports = app => {
  app.post( '/api/user' , userCtrl.postUser );
  app.get( '/api/users' , userCtrl.getUsers );
  app.delete('/api/user' , userCtrl.deleteUser )
}
