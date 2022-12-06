const WhyChooseUs = require("../models/whyChooseUs");
exports.fetchWhyChooseUs = async (req, res) => {
    await WhyChooseUs.find({})
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
          message: "An error occurred,unable to subscribe",
          status: false,
        });
      });
  };
  