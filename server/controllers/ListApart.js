const Apartments = require("../models/apartments");

//list all apartments 
exports.ListApart = async (req, res) => {
    let limit = req.query.queryQty;
    // console.log(req.query.location)
  
    await Apartments.find()
      .populate("posted_by", "-Password")
      .limit(limit)
     // .skip(skip)
      // .sort({ isPaidAdd: -1, created_at: -1 })
      .sort({ isTopAdd: -1, created_at: 1 })
      .then((response) => {
        return res.status(200).send({
          status: true,
          message: "Search Result Success",
          userData: response,
         // total: total,
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
  