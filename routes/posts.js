const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const postSchema = require('../schemas/Post.js');

// @route GET routes/posts/test
// @desc Test posts route
// @access Public

router.get('/test', (req, res) => res.json({msg: 'Post route test'}));

// @route POST routes/posts/add
// @desc Add a new post
// @access Public

router.post('/add', (req, res) => {
    Post.findOne()
        .then(post => {
            const newPost = new Post({
                title: req.body.title,
                content: req.body.content
            });

            newPost.save()
                .then(post => res.json(post))
                .catch(err => console.log(err))
        })
})

module.exports = router;