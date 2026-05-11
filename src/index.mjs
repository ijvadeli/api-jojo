// index.js
import express from "express";
const app = express();
const port = "3000";
var path = require('path');

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.send("./cat.png");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});