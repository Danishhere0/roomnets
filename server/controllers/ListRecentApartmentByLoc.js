const Apartments = require("../models/apartments");

//list apartments when a user search by address string
exports.ListRecentApartmentByLoc = async (req, res) => {
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
    let total = await Apartments.countDocuments(params);
    const limit = 15;
  
    var pageNo = req.query.pageNo || 0;
    var skip = pageNo * limit;
  
    await Apartments.find(params)
    //  .populate("posted_by", "-Password")
      .limit(limit)
      .skip(skip)
      // .sort({ isTopAdd: -1, created_at: 1 })
      .sort({ isPaidAdd: -1, created_at: -1 })
      .then((response) => {
        return res.status(200).send({
          status: true,
          message: "Search Result Success",
          LatestPropertyData: response,
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
  