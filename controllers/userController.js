const User = require('../models/userModel');


exports.signup = (req, res, next) => {
    console.log(req.body);
    // User.register(
    //   new User({ email: req.body.username }),
    //   req.body.password,
    //   (err, user) => {
    //     if (err) {
    //       res.statusCode = 500;
    //       res.setHeader('Content-Type', 'application/json');
    //       res.json({ err: err });
    //     } else {
    //       if (req.body.name) user.name = req.body.name;
    //       user.save((err, user) => {
    //         if (err) {
    //           res.statusCode = 500;
    //           res.setHeader('Content-Type', 'application/json');
    //           res.json({ err: err });
    //           return;
    //         }
    //         passport.authenticate('local')(req, res, () => {
    //           var token = authenticate.getToken({ _id: user._id.valueOf() });
    //           res.statusCode = 200;
    //           res.setHeader('Content-Type', 'application/json');
    //           res.json({
    //             success: true,
    //             token: token,
    //             status: 'Registration Successful!',
    //           });
    //         });
    //       });
    //     }
    //   }
    // );
  };