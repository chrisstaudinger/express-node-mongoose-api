const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find().limit(20)
    res.send(users)
    console.log(users)
  } catch (err) {
    res.status(500).send(err)
    console.log(users)
  }
})

router.post('/', async (req, res, next) => {
 
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    date: Date.now()
  });

  // Mongoose async operations like .save, return thenables
  try {
    let newUser = await user.save();
    res.send(newUser)
  }
  catch(err) {
    console.log(err)
    res.status(500).send(err)
  }
})

module.exports = router;