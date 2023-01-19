const UserSchema = require("../models/userModel");
const Rooms = require("../models/rooms");
var querystring = require("querystring");
const axios = require("axios");

exports.handleUpgradesAccountPayPal = async (req, res) => {
    const { user_id, plan, orderID } = req.body;
    // console.log(req.body)
    // PAYPAL_OAUTH_API = 'https://api-m.sandbox.paypal.com/v1/oauth2/token/';
    // PAYPAL_ORDER_API = 'https://api-m.sandbox.paypal.com/v2/checkout/orders/';
    const PAYPAL_OAUTH_API = process.env.PAYPAL_OAUTH_API;
    const PAYPAL_ORDER_API = process.env.PAYPAL_ORDER_API;
    basicAuth = Buffer.from(
      `${process.env.PAYPAL_CLIENT}:${process.env.PAYPAL_SECRET}`
    ).toString("base64");
    // const auth = await axios.post(PAYPAL_OAUTH_API ,{"grant_type": "client_credentials"},{
    //   headers: {
    //     // Accept:        `application/json`,
    //     'Content-Type':'application/x-www-form-urlencoded',
    //     Authorization: `Basic ${ basicAuth }`
    //   },
    //   // data: `grant_type=client_credentials`
    // }).
  
    const auth = await axios
      .post(
        PAYPAL_OAUTH_API,
        // note the use of querystring
        querystring.stringify({ grant_type: "client_credentials" }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${basicAuth}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  
    // const orderID = req.body.orderID;
    const details = await axios
      .get(PAYPAL_ORDER_API + orderID, {
        headers: {
          Accept: `application/json`,
          Authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return err;
      });
    // console.log(details)
    // if (details.purchase_units[0].amount.value !== '5.77') {
    if (!details.purchase_units[0].amount.value) {
      console.log(details);
      return res.send(400);
    } else {
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
          expire_date: expire_date,
          purchase_date: today,
          plans: "Premium",
          // payment_response:details
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
            message: "An error occurred, unable to update this post to premium",
            status: false,
          });
        });
    }
  };