const fs = require("fs");
const path = require("path");
exports.media = async (req, res) => {
    const fileName = req.params.fileName;
  
    if (!fileName) {
      return res.status(501).send({
        status: false,
        message: "Longitude/Latitude not provided",
      });
    }
    try {
      const imageFile = fs.createReadStream(
        path.join(__dirname, "../upload/", fileName)
      );
      imageFile.on("error", (error) => {
        return res.status(404).send({
          status: false,
          message: "Image not found",
        });
      });
  
      return imageFile.pipe(res);
    } catch (err) {
      return res.status(404).send({
        status: false,
        message: "Image not found",
    });
    }
  };
  