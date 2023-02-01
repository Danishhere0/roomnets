const Apartments = require("../models/apartments");

//list apartments when a user search by address string
exports.FeaturedApartmentsByLoc = async (req, res) => {
    let limit = req.query.queryQty;
    if (!req.query.queryQty){
      let limit = 15;
    }
    
    const lng = parseInt(req.query.lng);
    const lat = parseInt(req.query.lat);
    //const limit = 15;
    var pageNo = req.query.pageNo || 0;
    var skip = pageNo * limit;
  
    // console.log(typeof(lng))
    const params = req.query.lng
      ? [
          {
            $geoNear: {
              near: {
                type: "Point",
                coordinates: [lng, lat],
              },
              maxDistance: 120000, //meters if search result disatcne
              key: "location",
              distanceField: "distance",
            },
          },
          // { $sort: { isPaidAdd: -1, distance: 1, created_at: -1 } },
          { $sort: { isTopAdd: -1, created_at: -1 } },
          { $limit: 7 },
          { $unset: "Password" },
          { $skip: skip },
          { $match: { Approved_By_Admin: true } },
  
          // {$count:"total"},
        ]
      : [];
    const paramCount = req.query.lng
      ? [
          {
            $geoNear: {
              near: {
                type: "Point",
                coordinates: [lng, lat],
              },
              maxDistance: 120000, //meters if search result disatcne
              key: "location",
              distanceField: "distance",
            },
          },
          // { $limit: 7 },
          { $match: { Approved_By_Admin: true } },
          { $unset: "Password" },
          { $count: "total" },
        ]
      : [];
    let total = await Apartments.aggregate(paramCount);
    totalCount = total[0] ? total[0]["total"] : 0;
  
    await Apartments.aggregate(params)
      //  .sort({ isPaidAdd: -1, created_at: -1 })
      //.sort({ isTopAdd: -1, created_at: -1 })      
      .then(async (response) => {
        // console.log(response)
        const populated = await UserSchema.populate(response, {
          path: "posted_by",
          select: "-Password",
        });
  
        return res.status(200).send({
          status: true,
          message: "Search Result Success",
          userData: populated,
          total: totalCount,
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
  