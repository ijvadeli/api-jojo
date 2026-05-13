// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = "3000";
const routes = require('./routes');

app.get("/", (req, res) => {
  res.send("\n      _  ___      _  ___    _    ____ ___ \r\n     | |\/ _ \\    | |\/ _ \\  \/ \\  |  _ \\_ _|\r\n  _  | | | | |_  | | | | |\/ _ \\ | |_) | | \r\n | |_| | |_| | |_| | |_| \/ ___ \\|  __\/| | \r\n  \\___\/ \\___\/ \\___\/ \\___\/_\/   \\_\\_|  |___| \n");
  console.log("Response sent");
});

app.use(express.json());
app.use('/', routes);

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});