const mongoose = require("mongoose")

// Mongoose Schema setup
const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

// Mongoose Model
module.exports = mongoose.model("Campground", campgroundSchema);
