  const Apartments = require("../models/apartments");
  const UserSchema = require("../models/userModel");
  const path = require("path");

  //list apartments when a user search by address string
  exports.ListRecentApartmentByLoc = async (req, res) => {

  let limit = 15;
    if (req.query.queryQty){
      let limit = req.query.queryQty;
    }
    if (!req.query.lng && !req.query.lat && !req.param.lng && !req.param.lat) {
      return res.status(404).send({
        status: false,
        message: "Longititude and Latitude not provided",
      });
    }
    const lng = parseInt(req.query.lng);
    const lat = parseInt(req.query.lat);
    //const limit = 15;
  
    
  };
  