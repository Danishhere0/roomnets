const Countries = require("../models/Countries");
exports.getCountryById = async (req, res) => {
    let country_code = req.query.country_code;
    let countryId = req.query.countryId;


    if (!country_code && !countryId) {
      let country_code = req.body.country_code;
      let countryId = req.body.countryId;
      if (!country_code && !countryId) {
        let country_code = req.param.country_code;
        let countryId = req.param.countryId;
        if (!country_code && !countryId) {
          return res.status(501).send({
            status: false,
            message: "Parameters not complete!",
          });
        }
      }
    }
    await Countries.findOne({  
      $or:[ 
      {_id: countryId}, {country_code: country_code} 
    ] })
      .then((item) => {
        return res
          .status(200)
          .json({ userData: item, message: "success", status: true });
      })
      .catch((err) => {
        return res
          .status(404)
          .json({ message: "Operation not successful", status: false });
      });

  };