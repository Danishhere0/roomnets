const siteData = require("../models/siteData");
exports.getSiteData = async (req, res) => {
    const { params } = req.params;
    await siteData.find({ pageslug: params, content_location: params })
    .lean()
    .then(async (response) => {
        return res.status(200).json({
          status: true,
          message: "Fetch was successful",
          userData: response,
        });
    })
    .catch((error) => {
      return res.status(501).send({
        status: false,
        message: "Not found" + error.message ,
      });
    });

  };