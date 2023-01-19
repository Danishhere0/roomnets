const Brand = require("../models/Brand");
exports.getBrands = async (req, res) => {
    
    const IsFound = await Brand.findOne();
    if (IsFound) {
      await Brand.find()
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
        message: "No Data Available Currently, Enter Data to continue. Error: " + res.message ,
      });
    }
    

  };