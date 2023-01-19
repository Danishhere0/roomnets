const ContactMessages = require("../models/contactMessages");

exports.contactForm = async (req, res) => {
    const {
      firstName,
      message,
      lastName,
      company,
      mobileNumber,
      subject,
      email,
    } = req.body;
  
    if (!firstName || !message || !subject || !lastName || !mobileNumber) {
      return res.status(404).json({
        status: false,
        message: " All compulsory fields are not supplied",
      });
    } else {
      const newContactMessage = new ContactMessages({
        message,
        lastName,
        company,
        firstName,
        mobileNumber,
        subject,
      });
  
      await newContactMessage.save();
      return res.status(200).send({
        status: true,
        message: "Operation was successful",
      });
    }
  };
  