const express = require('express');
const router = express.Router();

// @route GET routes/users/test
// @desc Test users route
// @access Public

router.get('/test', (req, res) => res.json({msg: 'Users route test'}));

module.exports = router;