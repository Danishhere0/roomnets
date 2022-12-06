const UserSchema = require("../models/userModel");
const Rooms = require("../models/rooms");
const Apartments = require("../models/apartments");
exports.countDocuments = async (req, res) => {
    try {
      const no_Rooms = await Rooms.estimatedDocumentCount();
      const no_Apart = await Apartments.estimatedDocumentCount();
      const no_Users = await UserSchema.estimatedDocumentCount();
      return res.status(200).send({
        status: true,
        message: "Result Success",
        userData: { no_Rooms, no_Apart, no_Users },
      });
    } catch (error) {
      return res.status(501).send({
        status: false,
        message: "Result failed",
        userData: { no_Rooms: 0, no_Apart: 0, no_Users: 0 },
      });
    }
  };