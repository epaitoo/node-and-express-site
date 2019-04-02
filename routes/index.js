const express = require('express');
const router = express.Router();
const data = require('../data/data.json').data
const projects = data.projects;


router.get('/', (req, res) => {
    res.render("index");
    
});

router.get('/about', (req, res) => {
    res.render("about");
});


module.exports = router