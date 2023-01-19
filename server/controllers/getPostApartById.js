const Apartments = require("../models/apartments");
exports.getPostApartById = async (req, res) => {
    const id = req.body.id;
    const postId = req.params.postId;
    //get user only post
    await Apartments.findOne({ _id: postId })
      .select("-Approved_By_Admin -location -media -building_location")
      .then((item) => {
        return res
          .status(200)
          .json({ userData: item, message: "success", status: true });
      })
      .catch((err) => {
        return res
          .status(404)
          .json({ message: "Operation not successful", status: false });
      });
  };