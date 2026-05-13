// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = "3000";

app.get("/", (req, res) => {
  res.send(`
      _  ___      _  ___    _    ____ ___ 
     | |/ _ \    | |/ _ \  / \  |  _ \_ _|
  _  | | | | |_  | | | | |/ _ \ | |_) | | 
 | |_| | |_| | |_| | |_| / ___ \|  __/| | 
  \___/ \___/ \___/ \___/_/   \_\_|  |___|                              
    `);
  console.log("Response sent");
});

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});