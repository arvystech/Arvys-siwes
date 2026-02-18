// routes/studentRoutes.js
const { Router } = require('express');
const studentController = require('../controllers/studentController');

// authentication middleware
const { authenticateStudentToken } = require('../../../middleware/authMiddleware');

// Check is_active middleware
const isActive = require('../../../middleware/checkIsActive');

const studentRoutes = Router();

// Auth check route - verifies if user is authenticated
studentRoutes.get('/auth-check', authenticateStudentToken, studentController.auth_check_get);

// Get route for student dashboard
studentRoutes.get('/dashboard', authenticateStudentToken, studentController.student_dashboard_get);

// Get route for student attendance
studentRoutes.get('/mark-attendance', authenticateStudentToken, studentController.mark_student_attendance_get);

// Get route for student profile
studentRoutes.get('/profile', authenticateStudentToken, studentController.student_profile_get);

module.exports = studentRoutes;