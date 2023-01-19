exports.createPartner = async (req, res) => {
    const { userData } = req.body;
    const { name, url } = JSON.parse(userData);
  
    if (!name || !url) {
      return res.status(404).json({
        status: false,
        message: " All field s not supplied",
      });
    }
  
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
            name,
            url,
  
            imagUri: newFiles[0]["uri"],
          }
        : {
            name,
            url,
          };
  
    const isHomeExist = await HomepageModels.findOne({ name: "home" });
    if (isHomeExist) {
      await isHomeExist.updateOne({
        partners: [...isHomeExist.partners, params],
      });
  
      return res.status(201).send({
        status: true,
        message: "Operation was successful",
      });
    }
    if (!isHomeExist) {
      const newHomepageModels = new HomepageModels({
        name: "home",
        partners: [params],
      });
  
      await newHomepageModels.save();
      return res.status(201).send({
        status: true,
        message: "Operation was successful",
      });
    }
  };