const mongoose = require('mongoose')

const SessionSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  jwt: String,
  date: Date,
})

module.exports = mongoose.model('Session', SessionSchema)