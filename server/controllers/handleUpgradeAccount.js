const UserSchema = require("../models/userModel");
const axios = require("axios");
exports.handleUpgradeAccount = async (req, res) => {
    const { user_id, payment_response, plan } = req.body;
    if (!user_id || !payment_response || !plan) {
      console.log(req.body);
      return res.status(501).send({
        status: false,
        message: "An error occured: all parameters not supplied",
      });
    }
  
    const isPaid = await axios.get(
      `https://api.flutterwave.com/v3/transactions/${payment_response.transaction_id}/verify`,
      {
        headers: { Authorization: `Bearer ${process.env.FLUTTER_SECRET_KEY}` },
      }
    );
    if (!isPaid.data.status === "success") {
      return res
        .status(404)
        .json({ message: "payment wasnt successfull, try again", status: false });
    }
    if (isPaid.data.status === "success") {
      const today = new Date();
      const expire_date =
        plan === "month"
          ? getDays(30)
          : plan === "week"
          ? getDays(7)
          : plan === "year"
          ? getYear()
          : "";
      await UserSchema.findByIdAndUpdate(
        { _id: user_id },
        {
          // $inc: params,
  
          expire_date: expire_date,
          purchase_date: today,
          plans: "Premium",
          payment_response: payment_response,
        },
        { new: true, useFindAndModify: false }
      )
        .then((data) => {
          return res.json({
            userData: data,
            status: true,
            message: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(501).send({
            message: "an error occured,unable update account premiumt",
            status: false,
          });
        });
    }
  };
  