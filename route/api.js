const router = require("express").Router();
const { Exercise } = require("../models/index.js");
const Workout = require("../models/workout.js");

rdb.Workout.create({ name: "New Workout Plan" })
.then(dbWorkout => {
  console.log(dbWorkout);
})
.catch(({message}) => {
  console.log(message);
});

app.post("/submit", ({body}, res) => {
db.Exercise.create(body)
  .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { Exercise: _id } }, { new: true }))
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

app.get("/exercises", (req, res) => {
db.Exercise.find({})
  .then(dbExercise => {
    res.json(dbExercise);
  })
  .catch(err => {
    res.json(err);
  });
});

app.get("/Workout", (req, res) => {
db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

app.get("/populated", (req, res) => {
db.Workout.find({})
  .populate("exercises")
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

app.listen(PORT, () => {
console.log(`App running on port ${PORT}!`);
});