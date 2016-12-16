const User = require('./User.js');

module.exports = {
  postUser( req, res ) {
    new User(req.body).save( (err, response) => {
      if (err) {
        return res.status( 500 ).json( err );
      }
      console.log(req.body);
      return res.status( 200 ).json( response );
    } )
  }

,getUsers( req, res ) {
    return User.find({} , ( err, response) => {
          if (err) {
            return res.status( 500 ).json( err );
          }
          return res.status( 200 ).json( response )
        })
  }

,deleteUser(req , res) {
  console.log(req.body.id);
  return User.remove({'_id': req.body.id} , ( err , response ) =>{
    if(err) {
      return res.status( 500 ).json( err );
    }
    return res.status( 200 ).json(response);
  });
}
}
