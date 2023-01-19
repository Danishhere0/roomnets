const mongoose = require("mongoose");

const { Schema } = mongoose;

const Countries = new Schema({
  country_name: { type: String },
  country_code: { type: String },
  flag_name: [{ type: String }],
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Countries", Countries);

