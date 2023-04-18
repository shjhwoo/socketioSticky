const express = require("express");
const app = express();
let port = 3000;

process.argv.forEach((val, idx) => {
  if (idx === 2) {
    port = parseInt(val);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!" + `from ${port}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
