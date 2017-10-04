
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define requests sub-schema
var requestSchema = new Schema({
  bookId: {
    type: String
  }
});

// Define user schema
var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  requests: [{type: String}]
});


// Create User model using user schema
var Users = mongoose.model('User', userSchema);

// Make this available outside this module
module.exports = Users;