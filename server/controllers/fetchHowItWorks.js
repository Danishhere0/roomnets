const HowItWorks = require("../models/howItWorks");
exports.fetchHowItWorks = async (req, res) => {
    await HowItWorks.find({})
      .then((rest) => {
        return res.status(200).json({
          userData: rest,
          status: true,
          message: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(501).send({
          message: "An error occured,unable to subscribe",
          status: false,
        });
      });
  };