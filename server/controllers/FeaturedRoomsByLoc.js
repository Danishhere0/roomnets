const Rooms = require("../models/rooms");

exports.FeaturedRoomsByLoc = async (req, res) => {
    const params = req.query.location
      ? {
          Approved_By_Admin: true,
          "building_location.address": {
            $regex: req.query.location,
            $options: "i",
          },
        }
      : {};
    // console.log(req.query.location)
    let total = await Rooms.countDocuments(params);
    const limit = 15;
  
    var pageNo = req.query.pageNo || 0;
  
    var skip = pageNo * limit;
  
    await Rooms.find(params)
      .populate("posted_by", "-Password")
      .limit(limit)
      .skip(skip)
    //  .sort({ isPaidAdd: 1, created_at: -1 })
      .sort({ isTopAdd: -1, created_at: -1 })
      .then((response) => {
        return res.status(200).send({
          status: true,
          message: "Search Result Success",
          userData: response,
          total: total,
          limit: limit,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(404).send({
          status: false,
          message: "No result found.",
        });
      });
  };