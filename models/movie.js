const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
  title: String,
  genre: String,
  runtime: Number,
})

module.exports = mongoose.model('Movie', MovieSchema)