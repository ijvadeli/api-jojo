const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(process.cwd(), 'public', 'quotes.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read quotes file' });

    const quotes = data.split('\n').map(q => q.trim()).filter(Boolean);
    if (quotes.length === 0) return res.status(404).json({ error: 'No quotes found' });

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
  });
});

module.exports = router;