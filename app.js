const express = require('express');
const mongoose = require('mongoose');

const app = express();
// Additional Imports
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.json());



mongoose.connect('mongodb://localhost:27017/sample_mflix', {useUnifiedTopology: true, useNewUrlParser: true}, (err, success) => {
  if (err) { return console.error(err)}
  console.log('Connection Status: Success');
})


// Import Routes
const commentRoutes = require('./routes/comments');
const userRoutes = require('./routes/users');


app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

app.listen(3000, console.log('Listening on Port 3000'));
