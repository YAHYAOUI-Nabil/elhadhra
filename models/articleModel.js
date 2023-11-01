const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({
    title: {
      type: String,
    },
    paragraph: {
      type: String,
    },
    imageUrl: {
      type: String,
    }
  });

const articleSchema = new Schema({
  title: {type: String, required: true},
  summary: {type: String, default: false},
  imageUrl: {type: String, default: false},
  imageDescription: {type: String, default: false},
  description: {type: String, default: false},
  category: {type: String, required:true},
  author: {type: String, required:true},
  authorAvatar: {type: String, required:true},
  publishDate: {type: String,  required:true},
  updateDate: {type: String},
  contents: [contentSchema],
  likes: {type: [String], default: []},
  unlikes: {type: [String], default: []},
  comments: {type: [String], default: []},
});


module.exports = mongoose.model('Article', articleSchema);