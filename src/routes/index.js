const express = require('express');
const router = express.Router();

router.use('/gif', require('./gif/route'));
router.use('/image', require('./image/route'));

module.exports = router;