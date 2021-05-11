// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// const path = require('express').Router
const path = require("path");
const express = require("express");
const router = express.Router();
const root = {
  root: path.join(__dirname, "../public"),
};

// ROUTING

// module.exports = (app) => {
// => HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

router.get("/", (req, res) => {
  res.sendFile("./index.html", root);
});

router.get("/stats", (req, res) => {
  res.sendFile("./stats.html", root);
});

// If no matching route is found default to home
router.get("/exercise", (req, res) => {
  console.log("hello");
  res.sendFile("./exercise.html", root);
});

// };
module.exports = router;
