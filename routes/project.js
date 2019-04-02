const express = require('express');
const router = express.Router();
const data = require('../data/data.json').data
const projects = data.projects;

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const projectName = projects[id].project_name;
    const description = projects[id].description;
    const technologies= projects[id].technologies;
    const liveLink = projects[id].live_link;
    const githubLink = projects[id].github_link;
    const firstImage = projects[id].image_urls[0];
    const secondImage= projects[id].image_urls[1];
    const thirdImage = projects[id].image_urls[2];

    const tempelateData = { projectName, description, technologies,
                            liveLink, githubLink, firstImage, secondImage, thirdImage
                         };
    res.render("project", tempelateData);   
});

module.exports =router;