
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define books sub-schema
var bookSchema = new Schema({
  name: {
    type: String,
    unique: true
  }
});

// Define user schema
var userSchema = new Schema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  books: [booksSchema]});

// Create User model using user schema
var Users = mongoose.model('User', userSchema);

// Make this available outside this module
module.exports = Users;