const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
