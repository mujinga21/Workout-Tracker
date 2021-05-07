const router = require("express").Router();
// const { Exercise } = require("../models/index.js");
const Workout = require("../models/workout.js");


router.post("/api/workouts", (req, res) => {
  Workout.create({}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
  
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {$push: {exercises: req.body}},
  ).then((data) => {
    console.log("HELLO",data)
    res.json(data);
  }).catch(err => {
    RES.JSON(ERR);
})
  
})

