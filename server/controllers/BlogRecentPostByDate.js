const Blog = require("../models/blog");

exports.BlogRecentPostByDate = async (req, res) => {

    const limit  = req.params.limit;
    const total = await Blog.estimatedDocumentCount();
    var mysort = { created_at: -1 };
  
    await Blog.find()
      .limit(limit) 
      .sort(mysort)
      .then((response) => {
        return res.status(200).json({
          status: true,
          message: "fetch was successful",
          userData: response,
          total: total,
          limit: limit,
        });
      })
      .catch((error) => {
        return res.status(501).send({
          status: false,
          message: "No result found ",
        });
      });
  };