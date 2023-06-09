const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

//serve media image from mongodb grfs database
exports.MediaImage = async (req, res) => {
    try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
  
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } catch (error) {
      res.send("not found");
    }
  };
  