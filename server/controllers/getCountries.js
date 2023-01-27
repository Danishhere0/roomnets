const Countries = require("../models/Countries");
exports.getCountries = async (req, res) => {
    let country_code = req.query.country_code;
    let limit = req.query.limit;
    
    const IsFound = await Countries.find();
    if (IsFound) {
        await Countries.find()
        .lean()
        .limit(limit)
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