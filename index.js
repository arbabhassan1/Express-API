const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  let data = {
    name: "Express API",
    version: "v 1.0.0",
    project: "testing",
  };
  res.send(data);
});

app.listen(3434, () => {
  console.log("Server is Live!");
});
