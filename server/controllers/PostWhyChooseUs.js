const WhyChooseUs = require("../models/whyChooseUs");
exports.PostWhyChooseUs = async (req, res) => {
    const { title, body } = req.body;
    // console.log(title,body)
    if (!title || !body) {
      console.log("no title and body");
      return res.status(400).send({
        message: "An error occured,unable to subscribe",
        status: false,
      });
    } else {
      await WhyChooseUs.deleteMany({});
      const newWhyUs = new WhyChooseUs({ title, body });
      await newWhyUs.save();
      return res.status(200).json({
        status: true,
        message: "success",
      });
    }
  };