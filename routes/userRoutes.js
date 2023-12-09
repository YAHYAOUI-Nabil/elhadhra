const express = require('express');
const router = express.Router();
var passport = require('passport');
var authenticate = require('../middlewares/authenticate');
const limiter = require('../middlewares/limiter');

const userController = require('../controllers/userController');
const checkUserValidity = require('../middlewares/checkUserValidity');

router.post('/signup', userController.signup);
router.post('/signin', limiter, checkUserValidity.checkUserIsValid, passport.authenticate('local'), userController.signin);
router.put('/edit-user', limiter, authenticate.verifyUser, userController.editUser);
router.put('/validate-user', limiter, checkUserValidity.checkUserIsNotValid, userController.validateUser);
router.delete('/delete-account', limiter, authenticate.verifyUser, userController.deleteAccount);

module.exports = router;