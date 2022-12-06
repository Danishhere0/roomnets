// sliders
exports.createSliders = async (req, res) => {
    let newFiles = new Array();
    if (req.files.length > 0) {
      for (const file of req.files) {
        let img = {
          uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
        };
        newFiles.push(img);
      }
    }
    let params =
      req.files.length > 0
        ? {
            imagUri: newFiles[0]["uri"],
          }
        : {};
  
    const isHomeExist = await HomepageModels.findOne({ name: "home" });
    if (isHomeExist) {
      await isHomeExist.updateOne({ sliders: [...isHomeExist.sliders, params] });
  
      return res.status(201).send({
        status: true,
        message: "Operation was successful",
      });
    }
    if (!isHomeExist) {
      const newHomepageModels = new HomepageModels({
        name: "home",
        sliders: [params],
      });
      await newHomepageModels.save();
      return res.status(201).send({
        status: true,
        message: "Operation was successful",
      });
    }
  };