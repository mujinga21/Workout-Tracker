const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

// const db = require("./models"); goes in api.js

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify:false
 });


app.use(require("./routes/api"));
app.use(require("./routes/html"));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

