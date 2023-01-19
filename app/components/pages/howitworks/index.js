import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import TestimonialSection from "../aboutUs1/Testimonial";
import BlogSection from "../Blog";
import BrandSection from "../aboutUs1/Brand";
import PrivacySection from "./HowitWorksSection";
import Parser from 'html-react-parser'; 
import {Helmet} from "react-helmet"


const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();
  
  return (
    <>
      <Helmet>{ Parser (homepageData.googleAdsScript)}</Helmet>
      <PrivacySection />
      <TestimonialSection  />
      <div className="bg-light">
        <BlogSection/>
      </div>
      <BrandSection />
    </>
  );
};

export default BodyContent;