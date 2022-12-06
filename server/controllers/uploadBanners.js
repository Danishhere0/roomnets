const HomepageModels = require("../models/homepageModel");
exports.uploadBanners = async (req, res) => {
    try {
      let Banners = new Array();
      const countryDaTa = req.body;
      const { country } = JSON.parse(req.body.countryData);
      console.log(country);
  
      // console.log(req.files);
      for (const file of req.files) {
        let img = {
          uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
        };
        Banners.push(img);
      }
      // console.log(Banners);
  
      const params =
        country == "KE"
          ? { Banners_KE: Banners }
          : country == "US"
          ? { Banners_US: Banners }
          : country == "NG"
          ? { Banners_NG: Banners }
          : country == "IE"
          ? { Banners_IE: Banners }
          : country == "ZA"
          ? { Banners_ZA: Banners }
          : country == "GB"
          ? { Banners_GB: Banners }
          : country == "GH"
          ? { Banners_GH: Banners }
          : {};
  
      // const key=`Banners_${country}`
      //   const params={key:Banners}
      const isHomeExist = await HomepageModels.findOne({ name: "home" });
      if (isHomeExist) {
        // console.log(isHomeExist)
  
        await HomepageModels.findOneAndUpdate({ name: "home" }, params, {
          returnOriginal: false,
          useFindAndModify: false,
        }).then((response) => {
          console.log("success");
          return res.status(200).send({
            status: true,
            message: "Operation was successfull",
            userData: response,
          });
        });
      } else {
        const newhomepageModel = new HomepageModels({ ...params, name: "home" });
        await newhomepageModel.save();
        return res.status(200).send({
          status: true,
          message: "Operation was successfull",
          userData: newhomepageModel,
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(501).send({
        status: false,
        message:
          "Operation failed, there was an error perfoming the requested operation",
      });
    }
  };