// server.js
// Express server implementation for Lab 01 assignment

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Root route - welcome message
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Node.js and Express Server!');
});

// About route - returns student info as JSON
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Reddy Mahitha',
    section: 'CSE-DS-2B'
  });
});

// Time route - returns current server date and time
app.get('/time', (req, res) => {
  res.status(200).json({
    datetime: new Date().toISOString()
  });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
