const UserSchema = require("../models/userModel");
exports.updateMyProfile = async (req, res) => {
    const data = req.body.formReponse;
  
    const { firstName, lastName, mobileNumber } = JSON.parse(data);
  
    const id = req.body.id;
    const params = req.file
      ? {
          imgUrl: `${process.env.WEB_URL}` + "/api/v1/media/" + req.file.filename,
          firstName,
          lastName,
          mobileNumber,
        }
      : {
          firstName,
          lastName,
          mobileNumber,
        };
  
    for (let key in params) {
      if (!params[key]) {
        delete params[key];
      }
    }
    await UserSchema.findByIdAndUpdate({ _id: id }, params, {
      new: true,
      useFindAndModify: false,
    })
      .then((data) => {
        return res.json({
          userData: data,
          status: true,
          message: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(501).send({
          message: "an error occured,unable update post to premiumt",
          status: false,
        });
      });
  };