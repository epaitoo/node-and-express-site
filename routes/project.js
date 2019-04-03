const express = require('express');
const router = express.Router();
const data = require('../data/data.json').data
const projects = data.projects;

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const chosenProject = projects[id];

    res.render("project", chosenProject);   
});

module.exports =router;