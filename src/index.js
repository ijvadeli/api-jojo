// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = "3000";

app.get("/", (req, res) => {
  res.send(`
   __     ______       __     ______     ______     ______   __    
  /\ \   /\  __ \     /\ \   /\  __ \   /\  __ \   /\  == \ /\ \   
 _\_\ \  \ \ \/\ \   _\_\ \  \ \ \/\ \  \ \  __ \  \ \  _-/ \ \ \  
/\_____\  \ \_____\ /\_____\  \ \_____\  \ \_\ \_\  \ \_\    \ \_\ 
\/_____/   \/_____/ \/_____/   \/_____/   \/_/\/_/   \/_/     \/_/ 
                                                                                               
    `);
  console.log("Response sent");
});

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});