const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const html = require("./routes/html");
const api = require("./routes/api");
const router = require("express").Router();

const PORT = process.env.PORT || 3001;

// const db = require("./models"); goes in api.js

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
