const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello!!!");
});

app.listen(port);

console.log(`[app]: running on port ${port}`);