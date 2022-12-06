const HomepageModels = require("../models/homepageModel");
exports.updatePrivacy = async (req, res) => {
    const { body, title } = req.body;
    if (!body || !title) {
      return res.status(501).send({
        status: false,
        message: "Body or title provided",
      });
    }
  
    const isHomeExist = await HomepageModels.findOne({ name: "home" });
    if (isHomeExist) {
      // console.log(isHomeExist)
      await HomepageModels.findOneAndUpdate(
        { name: "home" },
        { privacy: [{ title, body }] },
        {
          returnOriginal: false,
          useFindAndModify: false,
        }
      ).then((response) => {
        console.log("success");
        return res.status(200).send({
          status: true,
          message: "Operation was successful",
        });
      });
    } else {
      const newhomepageModel = new HomepageModels({
        name: "home",
        privacy: [{ title, body }],
      });
      await newhomepageModel.save();
      return res.status(200).send({
        status: true,
        message: "Operation was successful",
        userData: newhomepageModel,
      });
    }
  };