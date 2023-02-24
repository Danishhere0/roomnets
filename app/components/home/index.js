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
import CitiesSection from "./CitiesSection";
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
import useGeoLocation from '../../hooks/useGeoLocation';

const BodyContent = ({ vlat, vlng }) => {
  const [recentApart, setRecApart] = useState([]);
  const [recentRooms, setRecRooms] = useState([]);
  const [FeaturedData, setFeaturedData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
const [ClientTestimonialShortDescript, setShortAboutTestIntro] = useState([]);
/*//const history = useHistory();
// const state = history.location.state;
//  const country = useSelector((state) => state.countryReducer);
const [homepageData, setHomePageData] = React.useState({
  Banners: [],
  googleAdsScript: "",
});
const [open, setOpen] = React.useState(false);
const [SearchType, setSearchType] = React.useState("apartment");
const [searchText, setSearchText] = React.useState();*/
 useEffect(() => {
   
    
        navigator.geolocation.getCurrentPosition(function(position) {

         if(position.coords.latitude !== undefined){
           const lat =position.coords.latitude;
           const lng = position.coords.longitude;

            const fetchR = async () => {
              console.log("Test data-::"+lng);
              const res  = await axios.get(`${process.env.API_URL}/ListRecentApartmentByLoc?lng=${lng}&lat=${lat}`);
              setRecApart(res.data);

              const res1  = await axios.get(`${process.env.API_URL}/ListApartByLnglat?lng=${lng}&lat=${lat}`);
              setFeaturedData(res1.data);

              const res2  = await axios.get(`${process.env.API_URL}/ListApartByLnglat?lng=${lng}&lat=${lat}`);
              setFeaturedData(res2.data);
            };
            fetchR();
         }
       })
 }, []);
 /*
 useEffect(() => {
  const fetchLA = async () => {
    try {
      const res  = await axios.get(`${process.env.API_URL}/ListApartByLnglat?lng=${lng}&lat=${lat}`);
      setFeaturedData(res.data);
      console.log('Feat Room Data page:' + res.data.userData);
    } catch (err) {
      console.error('Room Data page Error is: '+ err);
    }
  };
  fetchLA();
}, []);
useEffect(() => {
  const fetchLAR = async () => {
    try {
      const res  = await axios.get(`${process.env.API_URL}/ListRoomsByLnglat?lng=${lng}&lat=${lat}`);
      setRecRooms(res.data);
      console.log('Feat Room Data page:' + res.data.userData);
    } catch (err) {
      console.error('Room Data page Error is: '+ err);
    }
  };
  fetchLAR();
}, []);
*/
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
      <RecentApartmentSection value={recentApart?.userData} />
      <FeatureSection value={FeaturedData?.userData} />
      <PropertySection value={recentRooms?.userData} />
      <OfferSection value={AppPropertyData.OurNewOffer} />
      {/*<CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} /> */}
      <CitiesSection />
      <BannerSection />
      
      <TestimonialSection value={testimonialData} ClientTestimonialShortDescript={ClientTestimonialShortDescript} normal={true} />
      <BrandSection />
    </>
  );
};

export default BodyContent;
