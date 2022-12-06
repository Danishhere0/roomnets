const Subscribers = require("../models/subscribers");
exports.Subscribers = async (req, res) => {
    try {
      const newSubscribers = new Subscribers({ Email: req.body.email });
      const isExist = await Subscribers.findOne({ Email: req.body.email });
      if (isExist) {
        return res.status(404).send({
          message: "You have already subscribed before,thank you for subscribing",
          status: false,
        });
      }
      await newSubscribers.save();
      return res.status(200).json({
        status: true,
        message: "Thank you for subscribing",
      });
    } catch (err) {
      console.log(err);
      return res.status(501).send({
        message: "An error occured,unable to subscribe",
        status: false,
      });
    }
  };