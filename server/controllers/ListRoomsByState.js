const Rooms = require("../models/rooms");

//list rooms
exports.ListRoomsByState = async (req, res) => {
    // console.log("called");
    const params = req.params.state
      ? {
          Approved_By_Admin: true,
          "building_location.address": {
            // $regex: req.params.state,
            $regex: req.params.state,
            $options: "i",
          },
        }
      : {};
  
    let total = await Rooms.countDocuments(params);
    const limit = 15;
  
    var pageNo = req.query.pageNo || 0;
  
    var skip = pageNo * limit;
  
    await Rooms.find(params)
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
          message: "empty result",
        });
      });
  };
  
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
          message: "No result found.",
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