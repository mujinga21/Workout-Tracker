const router = require("express").Router();
const { Exercise } = require("../models/index.js");
// const { Exercise } = require("../models/index.js");
const Workout = require("../models/workout.js");


router.post("/workouts", (req, res) => {
  Workout.create({}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
  
});

router.put("/workouts/:id", (req, res) => {
  Exercise.create({
    type:req.body.type,
    name: req.body.name,
    duration: req.body.duration,
    weight:req.body.weight,
    reps:req.body.reps,
    sets:req.body.sets,
   }).then(exercise => {
  Workout.findByIdAndUpdate(
    {_id:req.params.id},
    {$push: {exercises: exercise._id},
    $inc:{workoutDuration:exercise.duration}
  },
  ).then((data) => {
    console.log("HELLO",data)
    res.json(data);
  }).catch(err => {
    res.JSON(err);
})
  
})
})

router.get("/workouts",(req, res)=>{
Workout.find({}).then(data => {
  console.log(data);
  res.json(data);
}).catch(err => {
  res.json(err);
})
})

router.get("/workouts/range",(req, res)=>{
  Workout.find({})
  .populate("exercises")
  .then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
  })
// app.post("/api/:exercise/:_name", (req, res) => {
  // Exercise.create({
  //   exercise_name: req.body.Exercise,
  //   duration: req.body.duration,
  //   weight:req.body.weight,
  //   reps:req.body.reps,
  //   sets:req.body.sets,
  //  }).then(exercise => {
//      console.log("new workout");
//      res.redirect("/api/:exercise/:_id")
//    });
// // });
// db.workout.aggregate( 
//   {
//     $group: {
//     _id: {
//       weight: '$weight',
//     },
// count:{
//   $sum:[0,1,2,3,4,5,6,7]
// }
//     }
//   }

// )

// db.workout.aggregate( 
//   {
//     $group: {
//     _id: {
//       weight: '$duration',
//     },
// count:{
//   $sum:[0,1,2,3,4,5,6]
// }
//     }
//   }

// )
module.exports = router;