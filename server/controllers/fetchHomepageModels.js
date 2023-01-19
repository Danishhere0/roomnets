const GoogleAdsense = require("../models/GoogleAdsense");
const homepageModels = require("../models/homepageModel");
exports.fetchHomepageModels = async (req, res) => {
  const GoogleAdsScript = await GoogleAdsense.findOne({});
    await homepageModels.findOne({ name: "home" })
    .lean()
    .then(async (response) => {
      
      if (GoogleAdsScript) {
        response.googleAdsScript = GoogleAdsScript.AdSenseCodeHtmlScript;

        const newResponse = {
          ...response,
          googleAdsScript: GoogleAdsScript.AdSenseCodeHtmlScript,
        };
        return res.status(200).json({
          status: true,
          message: "Fetch was successful",
          userData: newResponse,
        });
      } else {
        console.log(response);
        return res.status(200).json({
          status: true,
          message: "Data Fetch was successful",
          userData: response,
        });
        
      }
    })
    .catch((error) => {
      return res.status(501).send({
        status: false,
        message: "Not found" + error.message ,
      });
    });

  };