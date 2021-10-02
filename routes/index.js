const express = require('express');
const router = express.Router();
const a03Controller = require('../controllers/a03.js');

router.get('/a03', a03Controller);
router.get('/search', a03Controller);

module.exports = router;