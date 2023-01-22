/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../utils/getData";
import { AppPropertyData } from "../../data/appPropertyData";
import AboutSection from "./About";
import BannerSection from "./Banner";
import BrandSection from "./Brand";
import CitiesWisePropertySection from "./CitiesWiseProperty";
import FeatureSection from "./FeatureSection";
import HomeBannerSection from "./HomeBanner";
import OfferSection from "./Offer";
import PropertySection from "./Property";
import RecentApartmentSection from "./RecentApartment";
import TestimonialSection from "./Testimonial";
import AdSense from "react-adsense";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const BodyContent = () => {
  const [value, setValue] = useState();
  const [FeaturedData, setFeaturedData] = useState();
  const [testimonialData, setTestimonialData] = useState([]);
const [ClientTestimonialShortDescript, setShortAboutTestIntro] = useState([]);
const history = useHistory();
// const state = history.location.state;
const country = useSelector(({ CountryReducer }) => CountryReducer.country);
const [homepageData, setHomePageData] = React.useState({
  Banners: [],
  googleAdsScript: "",
});
const [open, setOpen] = React.useState(false);
const [SearchType, setSearchType] = React.useState("apartment");
const [searchText, setSearchText] = React.useState();


  useEffect(() => {
    getData(`${process.env.API_URL}/ListRecentApartmentByLoc`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`${process.env.API_URL}/FeaturedApartmentByLoc`)
      .then((res) => {
        setFeaturedData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    getData(`${process.env.API_URL}/getTestimonial`)
      .then((res) => {
        setTestimonialData(res.data.userData);
        //console.log('Testimonial page:' + res.data.userData);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    const fetchAboutIntro1 = async () => {
      try {
       // const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
          params: {
            pageslug: 'ClientTestimonialShortDescript',
            content_location: 'about'
          },
        });
        setShortAboutTestIntro(res2.data.userData);
        console.log('About page:' + res2.data.userData);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetchAboutIntro1();
  }, []);

  return (
    <>
      <HomeBannerSection />
      <RecentApartmentSection value={value?.userData} />
      <FeatureSection value={FeaturedData?.userData} />
      <PropertySection value={value?.LatestPropertyData} />
      <OfferSection value={AppPropertyData.OurNewOffer} />
      <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} />
      <BannerSection />
      
      <TestimonialSection value={testimonialData} ClientTestimonialShortDescript={ClientTestimonialShortDescript} normal={true} />
      <BrandSection />
    </>
  );
};

export default BodyContent;
