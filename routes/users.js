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

router.get('/index', (req, res, next) => {
  // console.log('../'+__dirname)
  console.log(process.cwd())
  try {
    res.sendFile(process.cwd()+'/static/users/allUsers.html')
  } catch (err) {
    res.status(500).send(err)
    console.log(err)
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

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/name/:name', async (req, res, next) => {
  try {
    const name = req.params.name
    const user = await User.find({name: name})
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
      if(err){
        console.log(err)
      }
    })
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
    console.log(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id, (err, res) => {})
    res.send("User has been deleted")
  } catch (err) {
    res.status(500).send(err)
  }
})


module.exports = router;