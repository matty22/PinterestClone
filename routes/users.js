var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Set up Mongoose schema
var Users = require('../models/user');

var userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.route('/user')
          .get(function(req, res, next) {
            Users.findById(req.query.owner, function(err, owner) {
              if (err) throw err;
              res.send(owner);
            })
          });


module.exports = userRouter;