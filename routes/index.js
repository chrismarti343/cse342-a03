const express = require('express');
const routes = express.Router();
const a03Controller = require('../controllers/a03.js');

routes

.get('/', (req, res, next) => {
    // This is the primary index, always handled last.
    res.render('home', {
    title: 'Prove03',
    path: '/',
    });
})

.use('/a03',a03Controller)



module.exports = routes;