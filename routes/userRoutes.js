const express = require('express');
const router = express.Router();
var passport = require('passport');
var authenticate = require('../middlewares/authenticate');
const limiter = require('../middlewares/limiter');

const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.post('/signin', limiter, passport.authenticate('local'), userController.signin);

module.exports = router;