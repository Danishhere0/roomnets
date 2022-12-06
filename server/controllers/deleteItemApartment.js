const Apartments = require("../models/apartments");
exports.deleteItemApartment = async (req, res) => {
    const item = req.query.item;
    await Apartments.findByIdAndDelete(item)
      .then((response) => {
        return res.status(200).json({ message: "success", status: true ,response:responses});
      })
      .catch((error) => {
        console.log(error);
        return res
          .status(404)
          .json({ message: "Operation not successful", status: false });
      });
  };