const UserSchema = require("../models/userModel");
exports.SyncronizeUserData = async (req, res) => {
    const { id } = req.body;
    if (!id) {
      return res.status(404).json({
        status: false,
        message: "not sign in or provided jwt",
      });
    }
    await UserSchema.findOne({ _id: id }).then(async (user) => {
      user.Password = "";
      return res.json({
        status: true,
        userData: {
          user,
        },
      });
    });
  };