// Complete Code for AI Knowledge Search - Final Version

// Backend - Express Server Setup
// server.js - Main Express Server
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const { connectDB } = require('./config/db');
const uploadRoutes = require('./routes/upload');
const queryRoutes = require('./routes/query');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Connect to MongoDB
connectDB();

// Routes
app.use('/upload', uploadRoutes);
app.use('/query', queryRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));










