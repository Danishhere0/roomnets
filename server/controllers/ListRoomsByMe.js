const Rooms = require("../models/rooms");
const UserSchema = require("../models/userModel");
//list room by me
  
exports.ListRoomsByMe = async (req, res) => {
    const country = req.query.country;
    let params;
    // const params = { posted_by: req.body.id, country };

    //free users can see their add only if its 7 days old
    const user = await UserSchema.findById(req.body.id);
    if (user && user.plans == "Basic") {
      var now = new Date();
      now = new Date(now.setDate(now.getDate() - 1));
      params = { posted_by: req.body.id, created_at: { $lte: now } };
    } else {
      params = { posted_by: req.body.id };
    }
    
    let total = await Rooms.countDocuments(params);
    const limit = 15;
    var pageNo = req.query.pageNo || 0;
  
    var skip = pageNo * limit;
  
    await Rooms.find(params)
      .populate("posted_by", "-Password")
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