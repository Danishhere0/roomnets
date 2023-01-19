const Blog = require("../models/blog");
const BlogComments = require("../models/BlogComments");
const path = require("path");

exports.BlogById = async (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(501).send({
        status: false,
        message: "Country code not provided",
      });
    }

    const totalComments = await BlogComments.countDocuments( { blog_id : id });
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
        totalComments: totalComments;
        //response.push(totalComments);
        const newResponse = [...response, totalComments] ;
        return res.status(200).json({
          status: true,
          message: "fetch was successful",
          userData: newResponse,
        });
      })
      .catch((error) => {
        return res.status(501).send({
          status: false,
          message: "Not found",
        });
      });
  };