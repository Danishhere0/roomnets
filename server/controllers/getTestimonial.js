const Testimonial = require("../models/Testimonial");
exports.getTestimonial = async (req, res) => {
    
    const IsFound = await Testimonial.findOne();
    if (IsFound) {
      await Testimonial.find()
      .lean()
      .then(async (response) => {
          return res.status(200).json({
            status: true,
            message: "Fetch was successful",
            userData: response,
          });
      })
    } else {
      return res.status(404).send({
        status: false,
        message: "No Data Available Currently, Enter Data to continue. Error: " + res.message ,
      });
    }
    

  };