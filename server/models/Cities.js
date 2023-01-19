const mongoose = require("mongoose");

const { Schema } = mongoose;

const Cities = new Schema({
  city_name: { type: String },
  city_img: { type: String },
  country_code: { type: String },
  featured: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Cities", Cities);

