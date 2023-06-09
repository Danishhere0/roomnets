const mongoose = require("mongoose");

const { Schema } = mongoose;

const Blogs = new Schema({
    title: { type: String, required: true }, // String is shorthand for {type: String}
    body: { type: String, required: true },
    likes:[{
      type: Schema.Types.ObjectId,
        ref: 'Users'
  }],
    country:{type:String,default:"All"},
    postedBy: { type: String, default: "Admin" },
    imagUri: { type: String },
    place: { type: String},
    day: { type: String},
    month: { type: String},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Blogcomments'
    }],
  
})

Blogs.pre("save", next => {
  this.updated_at = Date.now()
  next()
})
module.exports = mongoose.model("Blogs", Blogs);
