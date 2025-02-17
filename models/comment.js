const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
  name: String,
  email: String,
  text: String,
  date: Date,
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  },
})

module.exports = mongoose.model('Comment', CommentSchema)