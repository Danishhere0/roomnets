const mongoose = require("mongoose");

const { Schema } = mongoose;

const siteData = new Schema({
 // pageslug: { type: String},
  content_type: { type: String },
  quantity: [{ type: String }],
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("siteData", siteData);
