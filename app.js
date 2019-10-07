const express = require('express');
const mongoose = require('mongoose');

const app = express();
// Additional Imports
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.json());
app.listen(3000, console.log('Listening on Port 3000'));