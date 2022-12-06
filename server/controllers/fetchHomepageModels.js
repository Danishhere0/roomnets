const GoogleAdsense = require("../models/GoogleAdsense");
exports.fetchHomepageModels = async (req, res) => {
    await HomepageModels.findOne({ name: "home" })
      .lean()
      .then(async (response) => {
        const GoogleAdsScript = await GoogleAdsense.findOne({});
        if (GoogleAdsScript) {
          response.googleAdsScript = GoogleAdsScript.AdSenseCodeHtmlScript;
  
          const newResponse = {
            ...response,
            googleAdsScript: GoogleAdsScript.AdSenseCodeHtmlScript,
          };
          return res.status(200).json({
            status: true,
            message: "Result was successful",
            userData: newResponse,
          });
        } else {
          return res.status(200).json({
            status: true,
            message: "Result was successful",
            userData: response,
          });
        }
      })
      .catch((error) => {
        return res.status(501).send({
          status: false,
          message: "Not found",
        });
      });
  };