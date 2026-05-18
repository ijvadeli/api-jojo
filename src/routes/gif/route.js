const path = require('path');
const fs = require('fs');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const gifsDir = path.join(process.cwd(), 'public', 'gif'); // root/public/gif

  fs.readdir(gifsDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to read gifs directory' });

    const gifs = files.filter(f => f.toLowerCase().endsWith('.gif'));
    if (gifs.length === 0) return res.status(404).json({ error: 'No gifs found' });

    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    res.sendFile(path.join(gifsDir, randomGif)); // absolute path
  });
});

module.exports = router;