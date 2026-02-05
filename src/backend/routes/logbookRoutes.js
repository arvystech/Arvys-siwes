// routes/logbookRoutes.js
const { Router } = require('express');
const logbookController = require('../controllers/logbookController');

// authentication middleware
const { authenticateStudentToken } = require('../middleware/authMiddleware');

// Check is_active middleware
const isActive = require('../middleware/checkIsActive');

const logbookRoutes = Router();

// Post route for creating logbook entry
logbookRoutes.post('/create', authenticateStudentToken, isActive, logbookController.create_logbook_entry_post);

// Get route for getting logbook entries by student ID
logbookRoutes.get('/entries', authenticateStudentToken, isActive, logbookController.get_logbook_entries_by_student_get);

module.exports = logbookRoutes;