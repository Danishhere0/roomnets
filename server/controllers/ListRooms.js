const Rooms = require("../models/rooms");

exports.ListLatestTopRooms = async (req, res) => {
  let limit = req.query.queryQty;
  if (!limit){
    const limit = 15;
  }
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
  //const limit = 15;

  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit;

  await Rooms.find(params)
    .populate("posted_by", "-Password")
    .limit(limit)
    .skip(skip)
    // .sort({ isTopAdd: -1, created_at: 1 })
    .sort({ isTopAdd: -1, created_at: -1 })
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

exports.ListLatestRooms = async (req, res) => {
    let limit = req.query.queryQty;
    if (!req.query.queryQty){
      let limit = 15;
    }
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
    //const limit = 15;
  
    var pageNo = req.query.pageNo || 0;
  
    var skip = pageNo * limit;
  
    await Rooms.find(params)
      .populate("posted_by", "-Password")
      .limit(limit)
      .skip(skip)
      // .sort({ isTopAdd: -1, created_at: 1 })
      .sort({ created_at: -1 })
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

  exports.ListLatestPaidRooms = async (req, res) => {
    if (!req.query.queryQty){
      const limit = 15;
    }else{
      let limit = req.query.queryQty;
    }
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

  exports.ListRandomRooms = async (req, res) => {
    if (!req.query.queryQty){
      const limit = 15;
    }else{
      let limit = req.query.queryQty;
    }
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
    var skip = Math.random()*total; 
  
    await Rooms.find(params)
      .populate("posted_by", "-Password")
      .limit(limit)
      .skip(skip)
      // .sort({ isTopAdd: -1, created_at: 1 })
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

  exports.ListRandomPaidRooms = async (req, res) => {
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
    var skip = Math.random()*total; 
    if (req.query.queryQty !== ""){
      let limit = 15;
    }else{
      let limit = req.query.queryQty;
    }
    let limit = req.query.queryQty;
    await Rooms.find(params)
      .populate("posted_by", "-Password")
      .limit(limit)
      .skip(skip)
      // .sort({ isTopAdd: -1, created_at: 1 })
      .sort({ isPaidAdd: -1})
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

  exports.ListRooms = async (req, res) => {
    if (!req.query.queryQty){
      const limit = 15;
    }else{
      let limit = req.query.queryQty;
    }
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