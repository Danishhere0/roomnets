const HowItWorks = require("../models/howItWorks");
exports.PostHow = async (req, res) => {
    const { title, body } = req.body;
    // console.log(title,body)
    if (!title || !body) {
      console.log("No title or body");
      return res.status(400).send({
        message: "An error occured, unable to Subscribe",
        status: false,
      });
    } else {
      await HowItWorks.deleteMany({});
      const newHow = new HowItWorks({ title, body });
      await newHow.save();
      return res.status(200).json({
        status: true,
        message: "success",
      });
    }
  };