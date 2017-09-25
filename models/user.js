
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define user schema
var userSchema = new Schema({
  name: {
    type: String,
    unique: true
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