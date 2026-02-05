// routes/paymentRoutes.js
const { Router } = require('express');
const paymentController = require('../controllers/paymentController');

// authentication middleware
const { authenticateStudentToken } = require('../middleware/authMiddleware');

const paymentRoutes = Router();

// Post route to initiate payment
paymentRoutes.post('/initiate', authenticateStudentToken, paymentController.simulate_payment_post);

// Post route to initiate IT charge payment
paymentRoutes.post('/IT/initiate', authenticateStudentToken, paymentController.initiate_it_payment_post);

// Callback Post route for IT charge payment
paymentRoutes.post('/callback/IT', authenticateStudentToken, paymentController.IT_payment_callback);

// Post route to initiate OPay payment
paymentRoutes.post('/opay/initiate', paymentController.initiate_opay_payment_post);

module.exports = paymentRoutes;