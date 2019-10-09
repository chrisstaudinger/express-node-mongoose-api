const express = require('express');
const router = express.Router();
const Session = require('../models/session');
const mongoose = require('mongoose');

//routes
router.get('/', async (req, res, next) => {
  try {
    const sessions = await Session.find()
    res.send(sessions)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/users', async (req, res, next) => {
  try {
    // const sessions = await Session.findOne(mongoose.Types.ObjectId("5a97f9c91c807bb9c6eb5fb4"))
    const users = await Session.find().populate('user_id')
    res.send(users)
  } catch (error) {
    res.status(500).send(error)
    console.log(error)
  }
})

module.exports = router;


// db.sessions.update({_id: ObjectId("5a97f9c91c807bb9c6eb5fb4")}, {
//   $set: {
//     user_id: ObjectId("59b99db4cfa9a34dcd7885b6")
//   }
// })