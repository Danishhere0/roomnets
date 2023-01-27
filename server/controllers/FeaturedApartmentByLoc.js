const Apartments = require("../models/apartments");

//list apartments when a user search by address string
exports.FeaturedApartmentByLoc = async (req, res) => {
    let limit = req.query.queryQty;
    if (!req.query.queryQty){
      let limit = 15;
    }
    const params = req.query.location
      ? {
          Approved_By_Admin: true,
          "building_location.address": {            $regex: req.query.location,
            $options: "i",
          },
        }
      : {};
    // console.log(req.query.location)
    let total = await Apartments.countDocuments(params);
    
  
    var pageNo = req.query.pageNo || 0;
    var skip = pageNo * limit;
  
    await Apartments.find(params)
    //  .populate("posted_by", "-Password")
      .limit(limit)
      .skip(skip)
    //  .sort({ isPaidAdd: -1, created_at: -1 })
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
  