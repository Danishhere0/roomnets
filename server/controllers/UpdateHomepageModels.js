const HomepageModels = require("../models/homepageModel");
exports.UpdateHomepageModels = async (req, res) => {
    const { videoUrl } = req.body;
    //set to false to allow update with empty string to delete existing records
    if (false) {
      return res.status(501).send({
        status: false,
        message: "required parameters not provided",
      });
    } else {
      const exist = await HomepageModels.findOne({ videoUrl: { $exists: true } });
      if (exist) {
        exist.videoUrl = videoUrl;
        await exist.save();
        return res.status(200).json({
          status: true,
          message: "updated successfully",
        });
      } else {
        const updateHomepageModels = new HomepageModels({ videoUrl: videoUrl });
        await updateHomepageModels.save();
        return res.status(200).json({
          status: true,
          message: "updated successfully",
        });
      }
    }
  };