const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

exercise: [{
    type: Schema.Types.ObjectId,
    ref: "Exercise"
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout ;