const User = require('../models/userModel');
const passport = require('passport');
const authenticate = require('../middlewares/authenticate');
const limiter = require('../middlewares/limiter');


exports.signup = (req, res, next) => {
    const newUser = new User({
      identifier: req.body.identifier, 
      email: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      isFan: req.body.isFan,
      isAdmin: req.body.isAdmin
    })
    User.register(
      newUser,
      req.body.password,
      (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({ err: err });
        } else {
          passport.authenticate('local')(req, res, () => {
            var token = authenticate.getToken({ _id: user._id.valueOf() });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json'); 
            res.json({
              success: true,
              token: token,
              status: 'You are Successfully registered!',
            });
          })
        }
      }
    );
  };


exports.signin = (req, res, next) => {
    var token = authenticate.getToken({ _id: req.user._id.valueOf() });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json'); 
    res.json({
      success: true,
      token: token,
      status: 'You are successfully logged in!',
    });
  };
