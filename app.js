const articles = require("./app/articles/index");
const categories = require("./app/categories/index");
const dates = require("./app/dates/index");
const tags = require("./app/tags/index");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(function (req, res, next) {
  console.log(`${req.method} request for route : ${req.url}`);

  next();
});

app.get("/api/server-running", function (req, res) {
  res.json({ status: "ok" });
});

app.listen(2000);
console.log("\n\nListining on : http://localhost:2000\n\n");

module.exports = app;
