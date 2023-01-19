const Apartments = require("../models/apartments");
const axios = require("axios");
exports.handleUpgradeApart = async (req, res) => {
    const { post_id, payment_response, plan } = req.body;
    if (!post_id || !payment_response || !plan) {
      return res.status(501).send({
        status: false,
        message: "An error occured: ",
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
        .json({ message: "Payment wasn't successfull, try again", status: false });
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
      await Apartments.findByIdAndUpdate(
        { _id: post_id },
        {
          // $inc: params,
          isPaidAdd: true,
          expire_date: expire_date,
          purchase_date: today,
          plan: plan,
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
            message: "an error occured,unable update post to premiumt",
            status: false,
          });
        });
    }
  };