const mongoose = require("mongoose");

const { Schema } = mongoose;

const Brand = new Schema({
  brand_name: { type: String },
  brand_image: { type: String },
  detail: [{ type: String }],
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Brand", Brand);

