const express = require('express');
const router = express.Router();

// Contoh endpoint
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

module.exports = router;