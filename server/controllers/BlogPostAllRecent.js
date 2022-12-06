//get All REecent Post
const Blog = require("../models/blog");

exports.BlogPostAllRecent = async (req, res) => {
    const { country } = req.params;
    // console.log(country)
    if (!country) {
      return res.status(501).send({
        status: false,
        message: "Country code not provided",
      });
    }
    await Blog.find({ country: country })
      .sort({ id: -1 })
      .then((response) => {
        // console.log(response)
        return res.status(200).json({
          status: true,
          message: "fetch was successful",
          userData: new Array(...response).slice(0, 4),
        });
      })
      .catch((error) => {
        return res.status(501).send({
          status: false,
          message: "not found",
        });
      });
  };