const express = require('express');
const router = express.Router();
const a03Controller = require('../controllers/a03.js');

router.get('/', a03Controller.getProducts);
router.get('/search', a03Controller.getSearchProducts);

module.exports = router;