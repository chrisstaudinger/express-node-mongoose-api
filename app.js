const express = require('express');
const mongoose = require('mongoose');

const app = express();
// Additional Imports
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.json());
app.listen(3000, console.log('Listening on Port 3000'));


mongoose.connect('mongodb://localhost:27017/sample_mflix', {useUnifiedTopology: true, useNewUrlParser: true}, (err, success) => {
  if (err) { return console.error(err)}
  console.log('Connection Status: Success');
})