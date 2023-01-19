const MessagesSchema = require("../models/messagesModel");

exports.sendMessages = async (req, res) => {
    const { body, receiver } = req.body;
    const sender = req.body.id;
    let { title } = req.body;
    if (!receiver || !sender) {
      return res.status(501).json({
        status: false,
        message: "receiver  or Sender cant not be blank",
      });
    }
    if (!title) {
      title = "untitled";
    }
    if (!body) {
      return res
        .status(501)
        .json({ status: false, message: "message body can not be blank" });
    } else {
      const newMessages = new MessagesSchema({ title, body, receiver, sender });
      await newMessages.save((err, success) => {
        if (err) {
          console.log("unable to save", err);
          return res.status(501).json({ message: "unable to save" });
        } else {
          return res.status(200).json({
            message: "sent",
          });
        }
      });
    }
  };