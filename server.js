const express = require('express');
const app = express();

// Routes
const posts = require('./routes/posts');
const profile = require('./routes/profile');
const users = require('./routes/users');


app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express server is up on port ${port}`));

// use routes
app.use('/routes/posts', posts);
app.use('/routes/profile', profile);
app.use('/routes/users', users);
