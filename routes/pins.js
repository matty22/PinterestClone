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

// Find all pins for a specific user
pinRouter.route('/pinboard/:owner')
         .get(function(req, res, next) {
          Pins.find({ ownerId: req.params.owner }, function(err, pins) {
            res.send(pins);
          });
        });

pinRouter.route('/pinboard/delete')
         .delete(function(req, res, next) {
            Pins.findByIdAndRemove(req.body._id, function(err, response) {
              res.send(response);
            });
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
            console.log(req.body);
            Pins.create({title: req.body.title, image_url: req.body.image_url, ownerId: req.body.ownerId}, function(err, pin) {
              if (err) throw err;
              if (pin) {
                res.send(pin);
              }
              else {
                res.writeHead(401);
                res.end("Did not add");
              }
            });
          });         

module.exports = pinRouter;


