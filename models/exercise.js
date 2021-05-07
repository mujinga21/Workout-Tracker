
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: true
  },
    name: {
      type: String,
      trim: true,
      required: "Enter a name of the exercise"
    },
  duration: {
    type: Number
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  },
  distance: {
    type: Number
  }
  
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise ;