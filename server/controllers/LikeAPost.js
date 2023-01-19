const Blog = require("../models/blog");

exports.LikeAPost = async (req, res) => {
    const id = req.body.id;
    const postId = req.params.postId;
  
    const BlogPost = await Blog.findOne({ _id: postId });
  
    try {
      if (BlogPost) {
        var isInArray = BlogPost.likes.some(function (likes) {
          return likes.equals(id);
        });
  
        if (isInArray) {
          await BlogPost.likes.pull(id);
          await BlogPost.save();
          req.params.id = postId;
          await this.BlogById(req, res);
        } else {
          const user = await UserSchema.findOne({ _id: id });
          if (user) {
            await BlogPost.likes.push(user);
            await BlogPost.save();
            req.params.id = postId;
            await this.BlogById(req, res);
          }
        }
      }
    } catch (err) {
      // console.log(err)
      return res.status(501).send({
        status: false,
        message: "An error occured: " + err,
      });
    }
  };