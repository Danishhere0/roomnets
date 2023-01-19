const { v4: uuidv4 } = require("uuid");

const { LoginbyJWT } = require("../middlewares/auth");
const express = require("express");
const multer = require("multer");
const path = require("path");
const { multerUpload } = require("../middlewares/multerUpload");
const Router = express.Router();
//const uploadImage = require("../middlewares/grfsUpload");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEYS_CLOUD,
  api_secret: process.env.API_SECRET_CLOUD,
});
const fs = require("fs");

const { Login } = require("../controllers/Login");
const { ListRoomsByLocation } = require("../controllers/ListRoomsByLocation");
const { Register } = require("../controllers/register");
const { Subscribers } = require("../controllers/Subscribers");
const { updateProfile } = require("../controllers/updateProfile");
const { UpdateHomepageModels } = require("../controllers/UpdateHomepageModels");
const { ListRoomsByLnglat } = require("../controllers/ListRoomsByLnglat");
const { fetchHomepageModels } = require("../controllers/fetchHomepageModels");
const { isUserRegistered } = require("../controllers/isUserRegistered");
const { MediaImage } = require("../controllers/MediaImage");
const { fetchWhyChooseUs } = require("../controllers/fetchWhyChooseUs");
const { PostHow } = require("../controllers/PostHow");
const { PostAccess } = require("../controllers/PostAccess");
const { PostWhyChooseUs } = require("../controllers/PostWhyChooseUs");
const { fetchAsesibility } = require("../controllers/fetchAsesibility");
const { countDocuments } = require("../controllers/countDocuments");
const { fetchHowItWorks } = require("../controllers/fetchHowItWorks");
const { BlogById } = require("../controllers/BlogById");
const { postComment } = require("../controllers/postComment");
const { ListApartByLocation } = require("../controllers/ListApartByLocation");
const { ListApartByLnglat } = require("../controllers/ListApartByLnglat");
const { media } = require("../controllers/media");
const { uploadBanners } = require("../controllers/uploadBanners");
const { PostAddRooms } = require("../controllers/PostAddRooms");
const { ListRoomsByState } = require("../controllers/ListRoomsByState");
const { PostAddApart } = require("../controllers/PostAddApart");
const { LikeAPost } = require("../controllers/LikeAPost");
const { createSliders } = require("../controllers/createSliders");
const { SyncronizeUserData } = require("../controllers/SyncronizeUserData");
const { ListApartByState } = require("../controllers/ListApartByState");
const { updatePrivacy } = require("../controllers/updatePrivacy");
const { contactForm } = require("../controllers/contactForm");
const { updateFaq } = require("../controllers/updateFaq");
const { updateAboutUs } = require("../controllers/updateAboutUs");
const { CreateBlog } = require("../controllers/CreateBlog");
const { createPartner } = require("../controllers/createPartner");
const { BlogPostAllRecent } = require("../controllers/BlogPostAllRecent");
const { BlogPostAll } = require("../controllers/BlogPostAll");
const { BlogPostAllCountries } = require("../controllers/BlogPostAllCountries");
const { handleUpgradeRooms } = require("../controllers/handleUpgradeRooms");
const { handleUpgradeApart } = require("../controllers/handleUpgradeApart");
const { getPricesRates }= require("../controllers/getPricesRates");
const { handleUpgradesRoomPayPal }= require("../controllers/handleUpgradesRoomPayPal");
const { handleUpgradesApartPayPal } = require("../controllers/handleUpgradesApartPayPal");
const { handleUpgradeAccount } = require("../controllers/handleUpgradeAccount");
const { handleUpgradesAccountPayPal } = require("../controllers/handleUpgradesAccountPayPal");
const { sendMessages } = require("../controllers/sendMessages");
const { FetchReceivedMessages } = require("../controllers/FetchReceivedMessages");
const { FetchSentMessages } = require("../controllers/FetchSentMessages");
const { ListRoomsByMe } = require("../controllers/ListRoomsByMe");
const { deleteItemApartment } = require("../controllers/deleteItemApartment");
const { deleteItemRooms } = require("../controllers/deleteItemRooms");
const { ListApartByMe } = require("../controllers/ListApartByMe");
const { getPostApartById } = require("../controllers/getPostApartById");
const { UpdatePostApartById } = require("../controllers/UpdatePostApartById");
const { UpdatePostRoomsById } = require("../controllers/UpdatePostRoomsById");
const { getPostRoomsById } = require("../controllers/getPostRoomsById");
const { updateMyProfile } = require("../controllers/updateMyProfile");
const { getSiteContent } = require("../controllers/getsiteContent");
const { getSiteData } = require("../controllers/getsiteData");
const { getSiteServices } = require("../controllers/getSiteServices");
const { getTestimonial } = require("../controllers/getTestimonial");
const { getBrands } = require("../controllers/getBrands");
const { ListApart } = require("../controllers/ListApart");
const { BlogRecentPostByDate } = require("../controllers/BlogRecentPostByDate");
const { ListRecentApartmentByLoc } = require("../controllers/ListRecentApartmentByLoc");
const { ListRecentRoomsByLoc } = require("../controllers/ListRecentRoomsByLoc");
const { FeaturedApartmentByLoc } = require("../controllers/FeaturedApartmentByLoc");
const { FeaturedRoomsByLoc } = require("../controllers/FeaturedRoomsByLoc");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "./upload"
      //  path.join(__dirname, "../public/image")
    );
  },
  filename: function (req, file, cb) {
    cb(
      null,

      file.fieldname + "-" + `${uuidv4()}` + path.extname(file.originalname)
    );
  },
});

const fileFilter = async (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  // dest: "public/image/uploaded",
  storage: storage,

  fileFilter: fileFilter,
});

Router.post("/login", Login);
Router.post("/Register", Register);
Router.post("/updateProfile", LoginbyJWT, updateProfile);
Router.get("/upload/:filename", MediaImage);
Router.post("/UpdateHomepageModels", LoginbyJWT, UpdateHomepageModels);
Router.post(
  "/PostAddRoms",
  LoginbyJWT,
  multerUpload.array("file"),
  LoginbyJWT,
  PostAddRooms
);
Router.post(
  "/PostAddApart",
  LoginbyJWT,
  multerUpload.array("file"),
  LoginbyJWT,
  PostAddApart
);
Router.get("/fetchHomepageModels", fetchHomepageModels);
Router.get("/getSiteData", getSiteData);
Router.get("/getSiteContent", getSiteContent);
Router.get("/getSiteServices", getSiteServices);
Router.get("/getTestimonial", getTestimonial);
Router.get("/getBrands", getBrands);
Router.get("/ListApart", ListApart);
Router.get("/fetchHowItWorks", fetchHowItWorks);
Router.get("/fetchWhyChooseUs", fetchWhyChooseUs);
Router.get("/fetchAsesibility", fetchAsesibility);
Router.get("/isUserRegistered/:email", isUserRegistered);
Router.get("/media/:fileName", media);
Router.get("/ListRoomsByState/:state", ListRoomsByState);
Router.get("/BlogPostAll/:country", BlogPostAll);
Router.get("/BlogPostAllCountries", BlogPostAllCountries);
Router.get("/BlogById/:id", BlogById);
Router.get("/ListApartByState/:state", ListApartByState);
Router.get("/ListRoomsByLocation", ListRoomsByLocation);
Router.get("/ListApartByLocation", ListApartByLocation);
Router.get("/ListRoomsByLnglat", ListRoomsByLnglat);
Router.get("/BlogPostAllRecent/:country", BlogPostAllRecent);
Router.get("/getPricesRates/:country", getPricesRates);
Router.get("/LikeAPost/:postId", LoginbyJWT, LikeAPost);
Router.get("/getPostApartById/:postId", LoginbyJWT, getPostApartById);
Router.get("/getPostRoomsById/:postId", LoginbyJWT, getPostRoomsById);
Router.get("/ListApartByLnglat", ListApartByLnglat);
Router.get("/countDocuments", countDocuments);
Router.post("/uploadBanners", multerUpload.array("file"), uploadBanners);
Router.post("/createBlog", multerUpload.array("file"), CreateBlog);
Router.post("/createPartner", multerUpload.array("file"), createPartner);
Router.post("/createSliders", multerUpload.array("file"), createSliders);
Router.post("/updatePrivacy", updatePrivacy);
Router.post("/contactForm", contactForm);
Router.post("/updateFaq", updateFaq);
Router.post("/PostWhyChooseUs", PostWhyChooseUs);
Router.post("/PostHow", PostHow);
Router.post("/PostAccess", PostAccess);
Router.post("/updateAboutUs", updateAboutUs);
Router.post("/postComment", postComment);
Router.get("/ListRecentApartmentByLoc", ListRecentApartmentByLoc);
Router.get("/ListRecentRoomsByLoc", ListRecentRoomsByLoc);
Router.get("/FeaturedApartmentByLoc", FeaturedApartmentByLoc);
Router.get("/FeaturedRoomsByLoc", FeaturedRoomsByLoc);
Router.post(
  "/updateMyProfile",
  LoginbyJWT,
  multerUpload.single("file"),
  LoginbyJWT,
  updateMyProfile
);
Router.post("/handleUpgradeRooms", handleUpgradeRooms);
Router.post("/handleUpgradeApart", handleUpgradeApart);
Router.post("/handleUpgradesRoomPayPal", handleUpgradesRoomPayPal);
Router.post("/handleUpgradesApartPayPal", handleUpgradesApartPayPal);
Router.post("/handleUpgradeAccount", handleUpgradeAccount);
Router.post("/handleUpgradesAccountPayPal", handleUpgradesAccountPayPal);
Router.post("/sendMessages", LoginbyJWT, sendMessages);
Router.get("/FetchReceivedMessages", LoginbyJWT, FetchReceivedMessages);
Router.get("/FetchSentMessages", LoginbyJWT, FetchSentMessages);ListApart
Router.get("/ListRoomsByMe", LoginbyJWT, ListRoomsByMe);
Router.get("/ListApartByMe", LoginbyJWT, ListApartByMe);
Router.get("/deleteItemApartment", LoginbyJWT, deleteItemApartment);
Router.get("/deleteItemRooms", LoginbyJWT, deleteItemRooms);
Router.put("/UpdatePostApartById", LoginbyJWT, UpdatePostApartById);
Router.put("/UpdatePostRoomsById", LoginbyJWT, UpdatePostRoomsById);
Router.post("/Subscribers", Subscribers);
Router.get("/BlogRecentPostByDate", BlogRecentPostByDate);

module.exports = Router;