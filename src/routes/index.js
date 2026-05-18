const express = require('express');
const router = express.Router();

router.use('/gif', require('./gif/route'));
router.use('/image', require('./image/route'));
router.use('/audio', require('./audio/route'));
router.use('/quotes', require('./quotes/route'));

module.exports = router;