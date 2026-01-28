const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/projects', projectController.getAllProjects);
router.post('/project', projectController.createProject);
router.get('/project/:id', projectController.getProjectById);
router.put('/project/:id', projectController.updateProject);
router.delete('/project/:id', projectController.deleteProject);

module.exports = router;