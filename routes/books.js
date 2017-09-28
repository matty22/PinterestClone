var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Set up Mongoose schema
var Books = require('../models/book');

var bookRouter = express.Router();
bookRouter.use(bodyParser.json());

// This route just renders the signup page
bookRouter.get('/', function(req, res, next) {
  res.render('../public/books');
});

// Route for client JS to hit to retrieve data
bookRouter.route('/data')
          // Method to get all books
          .get(function(req, res, next) {
            Books.find({}, function(err, book) {
              if (err) throw err;
              res.json(book);
            });
});

bookRouter.get('/add', function(req, res, next) {
  res.render('../public/addbook');
});

bookRouter.route('/add/data')
          .post(function(req, res, next) {
            Books.create({name: req.body.name, owner: req.body.owner}, function(err, book) {
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

module.exports = bookRouter;