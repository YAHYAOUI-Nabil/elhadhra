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
      isAdmin: req.body.isAdmin,
      isSuperAdmin: req.body.isSuperAdmin
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
              identifier: user.identifier,
              email: user.email,
              firsName: user.firstName,
              lastName: user.lastName,
              phone: user.phone,
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
      identifier: req.user.identifier,
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      phone: req.user.phone,
      status: 'You are successfully logged in!',
    });
  };

exports.editUser = (req, res, next) => {
  const token =  req.headers.authorization.split(" ")[1];
    const updatedUser = {
      identifier: req.body.identifier,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      isFan: req.body.isFan,
      isAdmin: req.body.isAdmin,
      isSuperAdmin: req.body.isSuperAdmin
    }
    User.findByIdAndUpdate(req.user._id, updatedUser, { new: true })
        .then((user) => {
          if(user) {
            res.statusCode= 201;
            res.setHeader('Content-Type', 'application/json'); 
            res.json({
              success: true,
              token: token,
              identifier: req.user.identifier,
              email: req.user.email,
              firstName: req.user.firstName,
              lastName: req.user.lastName,
              phone: req.user.phone,
              status: 'User infos successfully updated',
            });
          }
          else {
            res.statusCode= 404;
            res.setHeader('Content-Type', 'application/json'); 
            res.json({message: "user not found"});
          }
        })
        .catch((err) => {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json'); 
          res.json(err);
        })
}

exports.deleteAccount = (req, res, next) => {
    User.findOneAndRemove({email: req.user.email})
        .then((user) => {
          if(user) {
            res.statusCode= 200;
            res.setHeader('Content-Type', 'application/json'); 
            res.json({message: "Account deleted successfully"});
          }
          else {
            res.statusCode= 404;
            res.setHeader('Content-Type', 'application/json'); 
            res.json({message: "user not found"});
          }
        })
        .catch((err) => {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json'); 
          res.json(err);
        })
}
