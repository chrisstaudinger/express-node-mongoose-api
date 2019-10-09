const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const mongoose = require('mongoose');

// routes
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find().limit(20)
    res.send(movies)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router;