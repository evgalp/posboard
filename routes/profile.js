const express = require('express');
const router = express.Router();

// @route GET routes/profile/test
// @desc Test profile route
// @access Public

router.get('/test', (req, res) => res.json({msg: 'Profile route test'}));

module.exports = router;