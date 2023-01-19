const siteContent = require("../models/siteContent");
exports.getSiteServices = async (req, res) => {
    
    const IsFound = await siteContent.findOne({ pageslug: 'servicetype', content_location: 'services'});
    if (IsFound) {
      //await siteContent.find({ pageslug: pageslug, content_location: content_location })
      await siteContent.find({ pageslug: 'servicetype', content_location: 'services'})
      .lean()
      .then(async (response) => {
          return res.status(200).json({
            status: true,
            message: "Fetch was successful",
            userData: response,
          });
      })
    } else {
      return res.status(200).send({
        status: false,
        message: "No Data Available Currently, Enter Data to continue. Error: " + res.message ,
      });
    }
    

  };