const HowItWorks = require("../models/howItWorks");
exports.fetchAsesibility = async (req, res) => {
    await Accesibility.find({})
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