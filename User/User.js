const mongoose = require('mongoose');

const User = new mongoose.Schema({

    name: { type: String}
  , cellPhone: { type: Number}
  , email: { type: String}
  , password: {type: String}

})

module.exports = mongoose.model('User' , User)
