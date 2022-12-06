const Blog = require("../models/blog");
const BlogComments = require("../models/BlogComments");

exports.postComment = async (req, res) => {

    const { title, body, commentedBy, comments_for_post } = req.body;
  
    if (!title || !body || !commentedBy || !comments_for_post) {
      return res.status(501).send({
        status: false,
        message: "no title or body or comment id or current user id",
      });
    } else {
      try {
        const newComment = new BlogComments({
          body,
          title,
          commentedBy,
          comments_for_post,
        });
        await newComment.save();
        await Blog.findOne({ _id: comments_for_post }).then(async (post) => {
          post.comments.push(newComment);
          await post.save();
          // return res.status(200).send({
          //   status: true,
          //   message: "Post was successfull",
          // });
          req["params"]["id"] = comments_for_post;
          await this.BlogById(req, res);
        });
      } catch (err) {
        console.log(err);
        return res.status(501).send({
          status: false,
          message: "An error occured: " + err,
        });
      }
    }
  };