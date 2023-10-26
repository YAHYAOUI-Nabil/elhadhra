const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  identifier: {type: String, required:true}, // String is shorthand for {type: String}
  email: {type: String, required:true},
  password: {type: String, required:true},
  firsName: {type: String, required:true},
  lastName: {type: String, required:true},
  phone: {type: String, required:true},
  isFan: {type: Boolean, default: false},
  isAdmin: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);