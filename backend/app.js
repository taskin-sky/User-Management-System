const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Root route
app.get('/', (_req, res) => {
  console.log('Welcome to User Management System \n©Taskin_M_Mubassir');
  res.status(200).json({
    message: 'Welcome to User Management System',
    author: 'Taskin_M_Mubassir',
    description: 'Ostad MERN Course - Module 16 Assignment',
  });
});

// ERROR 404 Handler
app.use((req, res) => {
  const response = { message: 'Route not found' };
  if (!req.originalUrl.startsWith('/api/users')) {
    response.note = 'Please refer to /api/users for user management endpoints';
  }
  res.status(404).json(response);
});

module.exports = app;
