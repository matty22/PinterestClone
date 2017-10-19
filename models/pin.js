
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define pin schema
var pinSchema = new Schema({
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

// Create Pin model using pin schema
var Pins = mongoose.model('Pin', pinSchema);

// Make this available outside this module
module.exports = Pins;

// Example data set for pins
// [
// {'title': 'NMBC Painting', 'image_url': 'https://i.pinimg.com/736x/07/0f/44/070f443f628abab840ebab58306fff1b--halloween-movies-disney-halloween.jpg', 'ownerId': '105884340713334870000' },
// {'title': 'Jack-o-lanterns', 'image_url': 'http://cdn.history.com/sites/2/2013/11/Halloween-Hero-1-A.jpeg', 'ownerId': '105884340713334864919' },
// {'title': 'Wicked Witch', 'image_url': 'http://www.slate.com/content/dam/slate/blogs/the_eye/2013/10/131017_EYE_WickedWitch.jpg.CROP.original-original.jpg', 'ownerId': '105884340713334870000' },
// {'title': 'Zombie', 'image_url': 'https://i.pinimg.com/736x/68/d3/bc/68d3bccc93b1c64bd46c80e95bd400ee--zombie-attack-zombie-art.jpg', 'ownerId': '105884340713334864919' }
// ]