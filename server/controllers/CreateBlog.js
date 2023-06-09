const Blog = require("../models/blog");
const functions = require("../functions");
exports.CreateBlog = async (req, res) => {
    // console.log("file is", req.files.length);
    //const file = req.files;
    const { userData } = req.body;
   // const { title, body, country } = JSON.parse(JSON.stringify(functions.trimContent(userData)));

    var title = req.body.title;
    var body = req.body.body;
    var country = req.body.country;
  
    if (!title || !body || !country) {
      return res.status(404).json({
        status: false,
        message: "All fields are not supplied",
      });
    }
  
    let newFiles = new Array();
    if (req.files?.length > 0) {
      for (const file of req.files) {
        let img = {
          uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
        };
        newFiles.push(img);
      }
    }
    let params =
      req.files?.length > 0
        ? {
            title,
            body,
            country,
            imagUri: newFiles[0]["uri"],
          }
        : {
            title,
            body,
            country,
          };
  
    const newBlogPost = new Blog(params);
    await newBlogPost.save((err, success) => {
      if (err) {
        console.log(err);
        return res.status(501).send({
          status: false,
          message: "Error saving the data" + err.message,
        });
      } else {
        return res.status(201).send({
          status: true,
          message: "Blog Post was successful",
        });
      }
    });
  };
  