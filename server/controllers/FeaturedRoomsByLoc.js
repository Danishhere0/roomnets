const Rooms = require("../models/rooms");
const UserSchema = require("../models/userModel");
const ipInfo = require("ipinfo")
//list Rooms when a user search by address string
exports.FeaturedRoomsByLoc = async (req, res) => {
  let limit = 15;
  if (req.query.queryQty){
    let limit = req.query.queryQty;
  }
    
 // const lng = parseInt(req.query.lng ? req.query.lng : req.param.lng );
 // const lat = parseInt(req.query.lat ? req.query.lat : req.param.lat);
  
    var https = require('https');

      const options = {
        path: '/json/',
        host: 'ipapi.co',
        port: 443,
        headers: { 'User-Agent': 'nodejs-ipapi-v1.02' }
      };
      https.get(options, function(resp){
        var body = ''
        resp.on('data', function(data){
            body += data;
        });

        resp.on('end', async function(){
            var loc = JSON.parse(body);
            console.log(loc);
            const lng = loc.longitude
            const lat = loc.latitude;

            console.log(lng);        

        //const limit = 15;
        var pageNo = req.query.pageNo || 0;
        var skip = pageNo * limit;
      
        // console.log(typeof(lng))
        const params = lng
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
              { $limit: limit },
              { $unset: "Password" },
              { $skip: skip },
              { $match: { Approved_By_Admin: true } },
      
              // {$count:"total"},
            ]
          : []; 
          

        const paramCount = lng
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
        let total = await Rooms.aggregate(paramCount);
        totalCount = total[0] ? total[0]["total"] : 0;
        
        await Rooms.aggregate(params)
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
      });
    });
  };
  