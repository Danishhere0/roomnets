import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import TestimonialSection from "../aboutUs1/Testimonial";
import BlogSection from "../Blog";
import BrandSection from "../aboutUs1/Brand";
import AccessibilitySection from "./AccessibilitySection";

const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();
  
  return (
    <>
      <AccessibilitySection />
      <TestimonialSection  />
      <div className="bg-light">
        <BlogSection/>
      </div>
      <BrandSection />
    </>
  );
};

export default BodyContent;
