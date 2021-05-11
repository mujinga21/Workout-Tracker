const router = require("express").Router();
// const { Exercise } = require("../models/index.js");
// const { Exercise } = require("../models/index.js");
const Workout = require("../models/workout.js");

router.post("/workouts", (req, res) => {
  Workout.create(req.body)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  // Exercise.create({
  //   type: req.body.type,
  //   name: req.body.name,
  //   duration: req.body.duration,
  //   weight: req.body.weight,
  //   reps: req.body.reps,
  //   sets: req.body.sets,
  // }).then((exercise) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
      // $inc: { workoutDuration: exercise.duration },
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((data) => {
      console.log("HELLO", data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts", (req, res) => {
  Workout.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.find({})
    .populate("exercises")
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
