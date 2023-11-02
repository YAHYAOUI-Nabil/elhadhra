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
  summary: {type: String, required: true},
  imageUrl: {type: String, required: true},
  imageDescription: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required:true},
  author: {type: String, required:true},
  authorAvatar: {type: String, required:true},
  publishDate: {type: Date,  required:true},
  updateDate: {type: Date},
  contents: [contentSchema],
  likes: {type: [String], default: []},
  unlikes: {type: [String], default: []},
  comments: {type: [String], default: []},
});


module.exports = mongoose.model('Article', articleSchema);