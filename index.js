const express = require('express')
      ,{json} = require('body-parser')
        ,cors = require('cors')
     ,session = require('express-session')
    ,mongoose = require('mongoose')
      ,config = require('./config.js');

const app = express();
const port = 8989;

const mongoUri = 'mongodb://localhost:27017/review';

mongoose.Promise = global.Promise;
mongoose.connect( mongoUri, err => {
  if (err) {
    console.log(err);
  }
  return;
} );



app.use( json() );
app.use(session( { secret:config.secret } ) );
app.use(express.static(__dirname + '/pubic'));
app.use( cors() );

require('./User/userRoutes.js')( app );

mongoose.connection.once('open' , () => console.log( `Connected to MongoDB at ${ mongoUri }` ))
app.listen( port , () => console.log(`listening on ${ port }`) );
