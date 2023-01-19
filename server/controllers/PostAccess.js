const Accesibility = require("../models/accesibility");
exports.PostAccess = async (req, res) => {
    const { title, body } = req.body;
    // console.log(title,body)
    if (!title || !body) {
      console.log("no title and body");
      return res.status(400).send({
        message: "An error occured,unable to subscribe",
        status: false,
      });
    } else {
      await Accesibility.deleteMany({});
      const newAccess = new Accesibility({ title, body });
      await newAccess.save();
      return res.status(200).json({
        status: true,
        message: "success",
      });
    }
  };