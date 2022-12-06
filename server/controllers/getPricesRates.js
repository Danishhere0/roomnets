const AdRates = require("../models/AdRates");
exports.getPricesRates = async (req, res) => {
    const country = req.params.country;
    if (!country) {
      return res.status(501).send({
        status: false,
        message: "No country provided: ",
      });
    }
  
    await AdRates.findOne({ country })
      .then((rates) => {
        // if the country ad rates is not set we return default which is the else statement
        if (rates) {
          return res.status(200).json({
            userData: rates,
            status: true,
            message: "success",
          });
        } else {
          return res.status(200).json({
            userData: {
              currency: "USD",
              WeeklyPrice: 70,
              MonthlyPrice: 200,
              YearlyPrice: 350,
              country: "Default",
            },
            status: true,
            message: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        //we return a default if not set by admin, any any circumstancees
        //is used status 200 to return success to client an in means
        return res.status(200).json({
          userData: {
            currency: "USD",
            WeeklyPrice: 70,
            MonthlyPrice: 200,
            YearlyPrice: 350,
            country: "Default",
          },
          status: true,
          message: "success",
        });
      });
  };
  