
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define requests sub-schema
var ownerPinsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  }
});

// Define user schema
var userSchema = new Schema({
  pins: [ownerPinsSchema]
});


// Create User model using user schema
var Users = mongoose.model('User', userSchema);

// Make this available outside this module
module.exports = Users;