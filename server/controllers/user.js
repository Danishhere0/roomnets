const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/userModel");
const MessagesSchema = require("../models/messagesModel");
const ContactMessages = require("../models/contactMessages");
const Rooms = require("../models/rooms");
const Blog = require("../models/blog");
const HowItWorks = require("../models/howItWorks");
const Accesibility = require("../models/accesibility");
const WhyChooseUs = require("../models/whyChooseUs");
const AdRates = require("../models/AdRates");
const Apartments = require("../models/apartments");
const Subscribers = require("../models/subscribers");
const GoogleAdsense = require("../models/GoogleAdsense");
const BlogComments = require("../models/BlogComments");
var querystring = require("querystring");

const HomepageModels = require("../models/homepageModel");

const axios = require("axios");
const path = require("path");
require("dotenv").config("../.env");
const fs = require("fs");
// var child_process = require("child_process");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const howItWorks = require("../models/howItWorks");
// const homepageModel = require("../models/homepageModel");

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function getYear() {
  const d = new Date();
  var amountOfYearsRequired = 1;
  const time = d.setFullYear(d.getFullYear() + amountOfYearsRequired);
  const year = new Date(time);
  return year;
}
function getDays(days) {
  var d = new Date();
  const time = d.setDate(d.getDate() + days);
  const times = new Date(time);
  return times;
}
