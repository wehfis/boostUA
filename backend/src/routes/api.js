const express = require('express');
const router = express.Router();

// Sample API endpoint
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from boostUA API!' });
});

// Sample data endpoint
router.get('/data', (req, res) => {
  res.json({
    data: [
      { id: 1, name: 'Item 1', description: 'First item' },
      { id: 2, name: 'Item 2', description: 'Second item' },
      { id: 3, name: 'Item 3', description: 'Third item' }
    ]
  });
});

// POST endpoint example
router.post('/data', (req, res) => {
  const { name, description } = req.body;
  res.status(201).json({
    message: 'Data received successfully',
    data: { name, description }
  });
});

module.exports = router;
