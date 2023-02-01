const UserSchema = require("../models/userModel");
const functions = require("../functions");
const Login = require("./login");

var bcrypt = require('bcryptjs');

exports.Register = async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      password2,
      // Gender,
      mobileNumber,
      city_name,
      state_name,
      country,
      pin_code,
    } = req.body;
    // console.log(req.body);
    const Email = email;
    const Password = password;
    const Password2 = password2;
    if (!functions.validateEmail(Email)) {
      return res
        .status(501)
        .json({ message: "Please use a valid email address to register" });
    }
    if (Password2 != Password) {
      return res.status(501).json({ message: "both password dont match" });
    }
    // console.log(firstName, lastName, email, Password, Password2);
    if (
      !Password2 ||
      !Password ||
      !lastName ||
      !firstName ||
      !Email ||
      !country
    ) {
      return res.status(501).json({
        message: "You didn't fill all values required, kindly try again",
      });
    }
    await UserSchema.findOne({ Email: Email }).then(async (user) => {
      if (user) {
        return res.status(501).send({
          message: `a user with email ${Email}is already registred, proceed to login`,
        });
      } else {
        try {
            const registeredDate = new Date();
    
            const Passwordhash = bcrypt.hashSync(Password, 10);
            const newUser = new UserSchema({
              firstName,
              mobileNumber,
              lastName,
              Email,
              Password: Passwordhash,
              city_name,
              state_name,
              registeredDate,
              pin_code,
              country,
            });
            await newUser.save();
    
           // this.Login({ body: { Email, Password } }, res);
            return res.status(200).send({ message: "account registered successfully", ok: "true" });
        } catch (err) {
          console.log(err);
          return res.status(501).send({
            message: "error occured pls try again or contact admin",
            err: err,
          });
        }
      }
    });
  };