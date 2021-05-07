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

// db.exercises.create({ name: "Workout Plan" })
//   .then(dbExercise => {
//     console.log(dbExercise);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });
app.use(require("./route/apiRoute"));
app.use(require("./route/htmlRoute"));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

