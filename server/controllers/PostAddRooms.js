const Rooms = require("../models/rooms");
exports.PostAddRooms = async (req, res) => {
    // console.log("file is", req.files.length);
    // const file = req.files;
    const { userData } = req.body;
    const DataInfo = JSON.parse(userData);
    let newFiles = new Array();
    for (const file of req.files) {
      let img = {
        uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
      };
      newFiles.push(img);
    }
    // console.log(newFiles);
    // console.log(DataInfo);
    const { building_location } = DataInfo;
    if (!building_location) {
      return res.status(501).send({
        status: false,
        message: "Building location not found",
      });
    }
    const { lat, lng } = building_location;
    if (!lat || !lng) {
      return res.status(501).send({
        status: false,
        message: "Longitude/Latitude is not provided",
      });
    }
  
    const newRooms = new Rooms({
      media: newFiles,
      ...DataInfo,
      posted_by: req.body.id,
      location: {
        type: "Point",
        coordinates: [lng, lat],
      },
    });
  
    await newRooms.save((err, success) => {
      if (err) {
        console.log(err);
        return res.status(501).send({
          status: false,
          message: "Longitude/Latitude is not provided",
        });
      } else {
        return res.status(201).send({
          status: true,
          message: "New Room was added successfully",
          usadData: success,
        });
      }
    });
  };