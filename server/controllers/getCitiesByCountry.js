const Cities = require("../models/Cities");
exports.getCitiesByCountry = async (req, res) => {
    let country_code = req.query.country_code;
    let featured = req.query.featured;
    let limit = req.query.limit;


    if (!country_code || !featured) {
      let country_code = req.body.country_code;
      let featured = req.body.featured;
      if (!country_code || !featured) {
        let country_code = req.param.country_code;
        let featured = req.param.featured;
        if (!country_code || !featured) {
          return res.status(501).send({
            status: false,
            message: "Parameters not complete!",
          });
        }
      }
    }
    
    const IsFound = await Cities.findOne({ country_code: country_code});
    if (IsFound) {
        await Cities.find({ country_code: country_code, featured: featured })
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