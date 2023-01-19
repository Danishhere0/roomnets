const siteContent = require("../models/siteContent");
exports.getSiteContent = async (req, res) => {
    let pageslug = req.query.pageslug;
    let content_location = req.query.content_location;

    if (!pageslug || !content_location) {
      let pageslug = req.body.pageslug;
      let content_location = req.body.content_location;
      if (!pageslug || !content_location) {
        let pageslug = req.param.pageslug;
        let content_location = req.param.content_location;
        if (!pageslug || !content_location) {
          return res.status(501).send({
            status: false,
            message: "Parameters not complete!",
          });
        }
      }
    }
    
    const IsFound = await siteContent.findOne({ pageslug: pageslug, content_location: content_location});
    if (IsFound) {
      await siteContent.find({ pageslug: pageslug, content_location: content_location })
      .lean()
      .then(async (response) => {
          return res.status(200).json({
            status: true,
            message: "Fetch was successful",
            userData: response,
          });
      })
    } else {
      return res.status(404).send({
        status: false,
        message: "Not found, Error: " + res.message ,
      });
    }
    

  };