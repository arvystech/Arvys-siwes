// routes/authRoutes.js
const { Router } = require('express');
const authController = require('../controllers/authController');

const authRoutes = Router();

// Post route for student login
authRoutes.post('/login', authController.student_login_post);

// Post route for student logout
authRoutes.post('/logout', authController.student_logout_post);


module.exports = authRoutes;