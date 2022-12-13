const Apartments = require("../models/apartments");
exports.PostAddApart = async (req, res) => {
    console.log("file is", req.files.length);
    // const file = req.files;
    const { userData } = req.body;
    const DataInfo = JSON.parse(userData);
    // console.log(DataInfo);
    let newFiles = new Array();
    for (const file of req.files) {
      let img = {
        uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
      };
      newFiles.push(img);
    }
  
    const { building_location } = DataInfo;
    if (!building_location) {
      return res.status(501).send({
        status: false,
        message: "Building location not supplied",
      });
    }
    const { lat, lng } = building_location;
    if (!lat || !lng) {
      return res.status(501).send({
        status: false,
        message: "Longitude/Latitude not provided",
      });
    }
  
    const newApartments = new Apartments({
      media: newFiles,
      ...DataInfo,
      posted_by: req.body.id,
      location: {
        type: "Point",
        coordinates: [lng, lat],
      },
    });
  
    await newApartments.save((err, success) => {
      if (err) {
        console.log(err);
        return res.status(501).send({
          status: false,
          message: "Unable to process the requested operation",
        });
      } else {
        return res.status(201).send({
          status: true,
          message: "Post was added successfully.",
          usadData: success,
        });
      }
    });
  };