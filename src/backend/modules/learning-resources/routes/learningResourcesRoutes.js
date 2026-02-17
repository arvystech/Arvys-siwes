const express = require('express');
const router = express.Router();
const learningResourcesController = require('../controllers/learningResourcesController');
const upload = require('../../../middleware/uploadMiddleware'); // Import existing middleware
const { authenticateStudentToken } = require('../../../middleware/authMiddleware');

// POST /api/learning-resources/ - Add new resource (supports 'file' field for PDF)
router.post('/', upload.single('file'), learningResourcesController.addResource);

// GET /api/learning-resources/student - Get resources for authenticated student
router.get('/student', authenticateStudentToken, learningResourcesController.getStudentResources);

// GET /api/learning-resources/class/:classId - Get resources for a class
router.get('/class/:classId', learningResourcesController.getClassResources);

// DELETE /api/learning-resources/:id - Remove a resource
router.delete('/:id', learningResourcesController.removeResource);

module.exports = router;
