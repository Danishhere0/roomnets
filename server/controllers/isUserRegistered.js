const UserSchema = require("../models/userModel");
//check if user is registered

exports.isUserRegistered = async (req, res) => {
    const email = req.params.email;
  
    if (!email) {
      return res.status(501).send({
        status: false,
        message: "no email provided",
      });
    }
    const userEmail = String(email).toLowerCase();
    const Emailisregistered = await UserSchema.findOne({ Email: userEmail });
    if (Emailisregistered) {
      return res.status(200).send({
        status: true,
        message: "user email is registered",
      });
    } else {
      return res.status(501).send({
        status: false,
        message: "this email is not registered",
      });
    }
  };