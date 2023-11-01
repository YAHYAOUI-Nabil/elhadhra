const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  identifier: {type: String, required: true},
  email: {type: String, required:true},
  firstName: {type: String, required:true,},
  lastName: {type: String,  required:true,},
  phone: {type: String,  required:true,},
  isFan: {type: Boolean, default: false},
  isAdmin: {type: Boolean, default: false}
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports = mongoose.model('User', userSchema);