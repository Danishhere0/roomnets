const Blog = require("../models/blog");
const path = require("path");

exports.BlogById = async (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(501).send({
        status: false,
        message: "Country code not provided",
      });
    }
    await Blog.findOne({ _id: id })
      .populate({
        path: "comments",
        model: "Blogcomments",
        populate: [
          { path: "commentedBy", model: "Users", select: "firstName lastName" },
        ],
      })
      .populate("comments.commentedBy")
      .then((response) => {
        return res.status(200).json({
          status: true,
          message: "fetch was successful",
          userData: response,
        });
      })
      .catch((error) => {
        return res.status(501).send({
          status: false,
          message: "not found",
        });
      });
  };