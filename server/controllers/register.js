const UserSchema = require("../models/userModel");

exports.Register = async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      password2,
      // Gender,
      mobileNumber,
      country,
    } = req.body;
    // console.log(req.body);
    const Email = email;
    const Password = password;
    const Password2 = password2;
    if (!validateEmail(Email)) {
      return res
        .status(501)
        .json({ message: "pls use a valid email address to register" });
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
        message: "You didnt fill all values required,kindly try again",
      });
    }
    await UserSchema.findOne({ Email: Email }).then(async (user) => {
      if (user) {
        return res.status(501).send({
          message: `a user with email ${Email}is already registred, proceed to login`,
        });
      } else {
        try {
          const RegisterdDate = new Date();
  
          const Passwordhash = bcrypt.hashSync(Password, 10);
          const newUser = new UserSchema({
            firstName,
            mobileNumber,
            lastName,
            Email,
            Password: Passwordhash,
            RegisterdDate,
            country,
          });
          await newUser.save();
  
          this.Login({ body: { Email, Password } }, res);
          // return res.status(200).send({ message: "account registered successfully" });
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