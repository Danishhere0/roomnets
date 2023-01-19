const MessagesSchema = require("../models/messagesModel");
exports.FetchReceivedMessages = async (req, res) => {
    const id = req.body.id;
    MessagesSchema.find({ receiver: id })
      .populate("sender", "-Password")
      .then((items) => {
        res.status(200).json({ userData: items, status: true });
      })
      .catch((err) => {
        return res.status(404).json({ message: "empty", status: false });
      });
  };