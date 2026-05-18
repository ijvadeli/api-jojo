const path = require('path');
const fs = require('fs');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const imagesDir = path.join(process.cwd(), 'public', 'image');

  fs.readdir(imagesDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to read images directory' });

    const images = files.filter(f => /\.(png|jpe?g|gif|webp)$/i.test(f));
    if (images.length === 0) return res.status(404).json({ error: 'No images found' });

    const randomImage = images[Math.floor(Math.random() * images.length)];
    res.sendFile(path.join(imagesDir, randomImage));
  });
});

module.exports = router;