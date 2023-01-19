const Blog = require("../models/blog");

exports.BlogPostAllCountries = async (req, res) => {
    const total = await Blog.estimatedDocumentCount();
    var limit = 15;
    var pageNo = req.query.pageNo || 0;
  
    var skip = pageNo * limit;
  
    await Blog.find()
      .skip(skip)
      .limit(limit)
      .then((response) => {
        return res.status(200).json({
          status: true,
          message: "fetch was successful",
          userData: response,
          total: total,
          limit: limit,
          pageNo,
        });
      })
      .catch((error) => {
        return res.status(501).send({
          status: false,
          message: "No result found ",
        });
      });
  };