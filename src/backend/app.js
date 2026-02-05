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
// Routes
const paymentRoutes = require("./routes/paymentRoutes");
const classRoutes = require("./routes/classRoutes");
const logbookRoutes = require("./routes/logbookRoutes");

// Module Routes
const studentApiRoutes = require("./modules/student/routes/api");
const studentAuthRoutes = require("./modules/student/routes/auth");

const app = express();

const path = require("path");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
// app.use(errorHandler); // Moved to bottom
// app.use(rateLimiter);

// Use external routes
app.use("/payment", paymentRoutes);
app.use("/class", classRoutes);
app.use("/logbook", logbookRoutes);

// Student Module
// API & Auth
app.use("/student/api", studentApiRoutes);
app.use("/student/auth", studentAuthRoutes);

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