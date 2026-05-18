const path = require('path');
const fs = require('fs');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const audioDir = path.join(process.cwd(), 'public', 'audio');

  fs.readdir(audioDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to read audio directory' });

    const audios = files.filter(f => /\.(mp3|wav|ogg|m4a|flac)$/i.test(f));
    if (audios.length === 0) return res.status(404).json({ error: 'No audio files found' });

    const randomAudio = audios[Math.floor(Math.random() * audios.length)];
    res.sendFile(path.join(audioDir, randomAudio));
  });
});

module.exports = router;