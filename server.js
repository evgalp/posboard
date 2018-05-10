const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Establish DB connection
const dbUrl = require('./config/keys').dbUrl;

mongoose
    .connect(dbUrl)
    .then(() => console.log('Mongo database connected'))
    .catch(err => console.log(err));

// Routes
const posts = require('./routes/posts');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Express server is up on port ${port}`));

// Set client public folder
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/routes/posts', posts);
