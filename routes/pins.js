var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Set up Mongoose schema
var Pins = require('../models/pin');

var pinRouter = express.Router();
pinRouter.use(bodyParser.json());

// This route just renders the signup page
pinRouter.get('/', function(req, res, next) {
  res.render('../public/pinboard');
});

// Route for client JS to hit to retrieve data
pinRouter.route('/data')
          // Method to get all pins
          .get(function(req, res, next) {
            Pins.find({}, function(err, book) {
              if (err) throw err;
              res.json(book);
            });
});

// Route for client JS to hit to retrieve data
pinRouter.route('/data/request/:id')
          // Method to get all pins
          .get(function(req, res, next) {
            Pins.find({_id: req.params.id}, function(err, book) {
              if (err) throw err;
              res.json(book);
            });
});

// This route serves the HTML when someone hits the /add route
pinRouter.get('/add', function(req, res, next) {
  res.render('../public/addbook');
});

// This route handles the actual adding of pins to the library
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

// Route to render trade approval page
pinRouter.get('/approve', function(req, res, next) {
  res.render('../public/approve');
});

// Route to show the user how many trade requests they have pending
pinRouter.route('/approve/data')
          .get(function(req, res, next) {
            Pins.find({}, function(err, book) {
              if (err) throw err;
              res.json(book);
            });
          });

pinRouter.route('/approve/confirm')
          .get(function(req, res, next) {
            Pins.findById(req.query.book, function(err, book) {
              if (err) throw err;
              res.send(book)
            });
          });          

module.exports = pinRouter;


