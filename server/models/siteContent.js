const mongoose = require("mongoose");

const { Schema } = mongoose;

const siteContent = new Schema({
  pageslug: { type: String},
  content_location: { type: String },
  content: [{ type: String }],
  content_title: [{ type: String }],
  content_image: [{ type: String }],
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("siteContent", siteContent);
