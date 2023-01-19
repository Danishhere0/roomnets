const Rooms = require("../models/rooms");
exports.deleteItemRooms = async (req, res) => {
    const item = req.query.item;
    await Rooms.findByIdAndDelete(item)
      .then((response) => {
        return res.status(200).json({ message: "success", status: true });
      })
      .catch((error) => {
        return res
          .status(404)
          .json({ message: "Operation not successful", status: false });
      });
  };