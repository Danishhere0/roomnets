const MessagesSchema = require("../models/messagesModel");
exports.FetchSentMessages = async (req, res) => {
    const id = req.body.id;
    MessagesSchema.find({ sender: id })
      .populate("receiver", "-Password")
      .then((items) => {
        res.status(200).json({ userData: items });
      })
      .catch((err) => {
        return res.status(404).json({ message: "empty" });
      });
  };