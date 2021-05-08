const router = require("express").Router();
const { Exercise } = require("../models/index.js");
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

app.post("/api/:exercise/:_id", (req, res) => {
  Exercise.create({
    exercise_name: req.body.Exercise,
    duration: req.body.duration,
    weight:req.body.weight,
    reps:req.body.reps,
    sets:req.body.sets,
   }).then(exercise => {
     console.log("new workout");
     res.redirect("/api/:exercise/:_id")
   });
});
db.workout.aggregate( 
  {
    $group: {
    _id: {
      weight: '$weight',
    },
count:{
  $sum:[0,1,2,3,4,5,6,7]
}
    }
  }

)

db.workout.aggregate( 
  {
    $group: {
    _id: {
      weight: '$duration',
    },
count:{
  $sum:[0,1,2,3,4,5,6]
}
    }
  }

)
module.exports = router;