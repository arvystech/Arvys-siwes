// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

// Middlewares
const errorHandler = require("./middleware/errorMiddleware");
const rateLimiter = require("./middleware/rateLimiter");

// Routes
// const paymentRoutes = require("./routes/paymentRoutes");
const logbookRoutes = require("./modules/logbook/routes/logbookRoutes");

// Module Routes
const studentApiRoutes = require("./modules/student/routes/api");
const studentAuthRoutes = require("./modules/student/routes/auth");

const classApiRoutes = require("./modules/class/routes/api");
const projectRoutes = require("./modules/project/routes/projectRoutes");

const app = express();

const path = require("path");

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
// app.use(rateLimiter);

// Use external routes
// app.use("/payment", paymentRoutes);
app.use("/logbook", logbookRoutes);

// Student Module
// API & Auth
app.use("/student/api", studentApiRoutes);
app.use("/student/auth", studentAuthRoutes);

// Class Module
app.use('/class/api', classApiRoutes);

// Project Module
app.use('/project/api', projectRoutes);

// Main Frontend - Static Files
app.use('/assets', express.static(path.join(__dirname, "../frontend/assets")));

// Student UI - Static Files
app.use('/student', express.static(path.join(__dirname, "../frontend/student-it")));

// Student UI - Pages
app.get('/student/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/student-it', 'login.html'));
});

// Student UI - SPA Fallback
app.use('/student/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/student-it', 'index.html'));
});

// Root to industrial training page
app.get('/', (req, res) => {
  console.log('Accessing root route');
  res.sendFile(path.join(__dirname, '../frontend', 'industrial-training.html'));
});

// IT register page
app.get('/it-register', (req, res) => {
  console.log('Accessing it-register route');
  res.sendFile(path.join(__dirname, '../frontend', 'it-register.html'));
});

// 404 Handler
app.use((req, res, next) => {
  console.log(`404 - Not Found - ${req.originalUrl}`);
  res.status(404).send(`Cannot GET ${req.originalUrl} (Custom 404)`);
});

app.use(errorHandler);

module.exports = app;