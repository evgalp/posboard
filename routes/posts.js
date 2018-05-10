const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const postSchema = require('../schemas/Post.js');

// @route GET routes/posts/test
// @desc Test posts route
// @access Public

router.get('/test', (req, res) => res.json({msg: 'Post route test'}));

// @route GET routes/posts/all
// @desc Get all posts
// @access Public
router.get('/all', (req, res) => {
    Post.find()
        .then(posts => {
            res.json(posts);
        })
        .catch(err => res.status(404).json({ nopost: 'to posts found'}))
});

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
});

// @route DELETE routes/posts/:id
// @desc Delete post by id
// @access Public

router.delete('/:id', (req, res) => {
    Post.remove({ _id: req.params.id })
        .then(res.json({ sucess: true }))
        .catch(err => res.status(404).json({error: err}));
});

module.exports = router;