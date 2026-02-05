// routes/classRoutes.js
const { Router } = require('express');
const classController = require('../controllers/classController');

// authentication middleware
const { authenticateStudentToken } = require('../middleware/authMiddleware');

// Check is_active middleware
const isActive = require('../middleware/checkIsActive');

const classRoutes = Router();

// Post route for creating class
classRoutes.post('/create', classController.create_class_post);

module.exports = classRoutes;