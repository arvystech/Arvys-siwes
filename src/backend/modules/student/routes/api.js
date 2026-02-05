// routes/studentRoutes.js
const { Router } = require('express');
const studentController = require('../controllers/studentController');

// authentication middleware
const { authenticateStudentToken } = require('../../../middleware/authMiddleware');

// Check is_active middleware
const isActive = require('../../../middleware/checkIsActive');

const studentRoutes = Router();

// Get route for student dashboard
studentRoutes.get('/dashboard', authenticateStudentToken, isActive, studentController.student_dashboard_get);

// Get route for student attendance
studentRoutes.get('/mark-attendance', authenticateStudentToken, studentController.mark_student_attendance_get);

module.exports = studentRoutes;