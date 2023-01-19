const mongoose = require("mongoose");

const { Schema } = mongoose;

const BlogImg = new Schema({
    title: { type: String, required: true }, // String is shorthand for {type: String}
    blog_id: { type: String, required: true },
    imagUri: { type: String, required: true },
  
})
module.exports = mongoose.model("BlogImg", BlogImg);
