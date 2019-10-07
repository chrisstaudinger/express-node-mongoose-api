// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.send('Successful Req to /comments');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const mongoose = require('mongoose');

router.get('/', async (req, res, next) => {
  try {
    const comments = await Comment.find().limit(20); // returns all comments
    res.send(comments)
  }
  catch (err) {
    res.status(500).send(err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const comment = await Comment.findById(id)
    res.send(comment)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/name/:name', async (req, res, next) => {
  try {
    const name = req.params.name
    const comment = await Comment.find({name: name})
    console.log(comment)
    res.send(comment)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/', async (req, res, next) => {
 
  const comment = new Comment({
    name: req.body.name,
    email: req.body.email,
    movie_id: mongoose.Types.ObjectId(),
    text: req.body.text,
    date: Date.now()
  });

  // Mongoose async operations like .save, return thenables
  try {
    let newComment = await comment.save();
    res.send(newComment)
  }
  catch(err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
      if(err){
        console.log(err)
      }
    })
    res.send(comment)
  } catch (err) {
    res.status(500).send(err)
    console.log(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id, (err, res) => {})
    res.send("Comment has been deleted")
  } catch (err) {
    res.status(500).send(err)
  }
})


module.exports = router;