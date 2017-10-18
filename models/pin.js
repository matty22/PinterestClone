
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define pin schema
var pinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  ownerId: {
    type: String
  }
});

// Create Pin model using pin schema
var Pins = mongoose.model('Pin', pinSchema);

// Make this available outside this module
module.exports = Pins;

// Example data set for pins
// [{'name': 'Test Name', 'image_url': 'TestURL', 'ownerId': 'Test Owner' }]