// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// authentication middleware
const { authenticateStudentToken } = require('../../../middleware/authMiddleware');

// All routes require student authentication
router.use(authenticateStudentToken);

// Get all projects for the logged-in student
router.get('/', projectController.getStudentProjects);

// Get a single project by ID
router.get('/:projectId', projectController.getProjectDetails);

// Submit a project
router.post('/:projectId/submit', projectController.submitProject);

// Update a project submission
router.put('/:projectId/submit', projectController.updateProjectSubmission);

module.exports = router;
