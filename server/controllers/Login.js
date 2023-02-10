const UserSchema = require("../models/userModel");
const functions = require("../functions");
const jwt = require("jsonwebtoken");
exports.Login = async function (req, res) {
    const { Email, Password } = req.body;
    if (!Password || !Email) {
      return res
        .status(404)
        .send({ message: "Please provide a valid password and email." });
    }
  
    if (!functions.validateEmail(Email)) {
      return res.status(404).json({ message: "Please use a valid email address." });
    }
  
    UserSchema.findOne({ Email }, async function (err, user) {
      if (err) throw err;
      if (!user) {
        res.status(404).json({
          status: 404,
          message: " A user with this account does not exist.",
        });
      } else if (user) {
        const match = await user.verifyPassword(Password);
        if (!match) {
          return res
            .status(401)
            .json({status: 401, message: "The password is not correct." });
        } else {
          user.Password = "";
          return res.json({
            
            userData: {
              status: true, userToken: jwt.sign({ user: user }, process.env.JWTKEY, {
                expiresIn: "17520hr",
              }),
              user,
            },
          });
        }
      }
    });
  };
