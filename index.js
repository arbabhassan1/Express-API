const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  let data = {
    name: "Express API for Video Downloader",
    version: "v 1.0.0",
    project: "testing",
  };
  res.send(data);
});

app.get("/fetch", (req, res) => {
  let { url, site } = req.query;
  console.log(url, site);
  res.send({
    url: url,
    site: site,
  });
});

app.listen(3434, () => {
  console.log("Server is Live!");
});
