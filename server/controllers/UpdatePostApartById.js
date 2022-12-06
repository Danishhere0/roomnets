const Apartments = require("../models/apartments");
exports.UpdatePostApartById = async (req, res) => {
    const { dataInfo, postId } = req.body;
  
    await Apartments.findByIdAndUpdate(postId, dataInfo)
      .then((response) => {
        return res.status(200).json({ message: "success", status: true });
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(404)
          .json({ message: "Operation not successful", status: false });
      });
  };