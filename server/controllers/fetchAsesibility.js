const Accesibility = require("../models/accesibility");
exports.fetchAsesibility = async (req, res) => {
    await Accesibility.find({})
      .then((rest) => {
        console.log(rest);
        return res.status(200).json({
          userData: rest,
          status: true,
          message: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(501).send({
          message: "An error occurred, unable to subscribe." + err.message,
          status: false,
        });
      });
  };