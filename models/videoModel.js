const mongoose = require('mongoose');
const { Schema } = mongoose;


const videoSchema = new Schema({
  title: {type: String, required: true},
  imageUrl: {type: String, required: true},
  videoUrl: {type: String, required: true}
});


module.exports = mongoose.model('Video', videoSchema);