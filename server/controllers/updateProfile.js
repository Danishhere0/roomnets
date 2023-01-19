const UserSchema = require("../models/userModel");
exports.updateProfile = async (req, res) => {
    const { firstName, lastName, maritalStatus, mobileNumber, dateOfBirth } =
      req.body;
    const params = {
      firstName,
      lastName,
      maritalStatus,
      mobileNumber,
      dateOfBirth,
    };
    // console.log(req.body);
    //we dont wan to update undefined or null to a users data to our database
    Object.keys(params).map((xxx) =>
      params[xxx] === null || typeof params[xxx] === "undefined"
        ? delete params[xxx]
        : null
    );
    // console.log(params);
    await UserSchema.findOneAndUpdate({ _id: req.body.id }, params, {
      returnOriginal: false,
      useFindAndModify: false,
    }).then(async () => {
      await this.SyncronizeUserData(req, res);
    });
  };