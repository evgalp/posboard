const express = require('express');
const router = express.Router();

// @route GET routes/posts/test
// @desc Test posts route
// @access Public

router.get('/test', (req, res) => res.json({msg: 'Post route test'}));

module.exports = router;