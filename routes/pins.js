var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Set up Mongoose schema
var Pins = require('../models/pin');

var pinRouter = express.Router();
pinRouter.use(bodyParser.json());

// This route just renders the user board page
pinRouter.get('/pinboard', function(req, res, next) {
  res.render('../public/pinboard');
});

// This route just renders the all board page
pinRouter.get('/allboard', function(req, res, next) {
  res.render('../public/allboard');
});

// Route for client JS to hit to retrieve data
pinRouter.route('/all')
          // Method to get all pins
          .get(function(req, res, next) {
            Pins.find({}, function(err, book) {
              if (err) throw err;
              res.json(book);
            });
});

// This route serves the HTML when someone hits the /add route
pinRouter.get('/add', function(req, res, next) {
  res.render('../public/addpin');
});

// This route handles the actual adding of pins to the board
pinRouter.route('/add/data')
          .post(function(req, res, next) {
            Pins.create({name: req.body.name, image_url: req.body.image_url, owner: req.body.owner}, function(err, book) {
              if (err) throw err;
              if (book) {
                res.send(book);
              }
              else {
                res.writeHead(401);
                res.end("Did not add");
              }
            });
          });         

module.exports = pinRouter;


