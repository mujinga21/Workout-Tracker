const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
exercise: [
  {
  type: {
    type: String,
    trim: true,
    required: "Enter a type of exercise"
  },
    name: {
      type: String,
      trim: true,
      required: "Enter a name for the exercise"
    },
  duration: {
    type: Number,
    required:"enter the duration of the exercise in minutes"
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  }
  
  }],
workoutDuration:{
  type: Number,
  default: 0
}
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout ;