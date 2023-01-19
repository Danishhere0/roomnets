const Apartments = require("../models/apartments");
const UserSchema = require("../models/userModel");

//list  Apartments
exports.ListApartByState = async (req, res) => {
    console.log("apart");
    const params = req.params.state
      ? {
          Approved_By_Admin: true,
          "building_location.address": {
            $regex: req.params.state,
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
      .populate("posted_by", "-Password")
      .limit(limit)
      .skip(skip)
      // .sort({ isPaidAdd: -1, created_at: -1, isTopAdd: -1 })
      .sort({ isTopAdd: -1, created_at: 1 })
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
          message: "emty result",
        });
      });
    // const limit = 15;
    // // const params = {}
    // const params = req.params.state
    //   ? {"Approved_By_Admin":true,
    //       "building_location.address": {
    //         $regex: req.params.state,
    //         $options: "i",
    //       },
    //     }
    //   : {};
    // let total = await Apartments.countDocuments(params);
    // var pageNo = req.query.pageNo || 0;
  
    // var skip = pageNo * limit;
  
    // await Apartments.find(params)
    //   .populate("posted_by", "-Password")
    //   .limit(limit)
    //   .then((response) => {
    //     return res.status(200).send({
    //       status: true,
    //       message: "Search Result Success",
    //       userData: response,
    //       total: total,
    //       limit: limit,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return res.status(404).send({
    //       status: false,
    //       message: "emty result",
    //     });
    //   });
  };
  
  //list apartment by me
  exports.ListApartByMe = async (req, res) => {
    // console.log("called")
    const country = req.query.country;
  
    let params;
    // const params = { posted_by: req.body.id, country };
    //free users can see their add only if its 7 days old
    const user = await UserSchema.findById(req.body.id);
    if (user && user.plans == "Basic") {
      var now = new Date();
      now = new Date(now.setDate(now.getDate() - 7));
      params = { posted_by: req.body.id, country, created_at: { $lte: now } };
    } else {
      params = { posted_by: req.body.id, country };
    }
  
    let total = await Apartments.countDocuments(params);
    const limit = 15;
  
    var pageNo = req.query.pageNo || 0;
  
    var skip = pageNo * limit;
  
    await Apartments.find(params)
      .populate("posted_by", "-Password")
      .limit(limit)
      .skip(skip)
      .sort({})
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
          message: "emty result",
        });
      });
  };