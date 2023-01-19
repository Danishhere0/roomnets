const mongoose = require("mongoose");

const { Schema } = mongoose;

const Testimonial = new Schema({
  name: { type: String },
  title: { type: String },
  image: { type: String },
  detail: [{ type: String }],
  email: [{type: String}],
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Testimonial", Testimonial);

