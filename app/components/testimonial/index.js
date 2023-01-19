import React, { useEffect, useState } from "react";
import { getData } from "../../utils/getData";
import TestimonialSectionOne from "./TestimonialSectionOne";
import TestimonialSectionTwo from "./TestimonialSectionTwo";
import TestimonialSectionThree from "./TestimonialSectionThree";
import TestimonialSectionFour from "./TestimonialSectionFour";

const BodyContent = () => {
  const [clientData, setClientData] = useState();
  useEffect(() => {
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <TestimonialSectionOne value={clientData?.WhatPeopleSay} />
      <TestimonialSectionTwo value={clientData?.HappyClient} normal={false} />
      <TestimonialSectionThree value={clientData?.OurClientInCorporateLayout} />
      <TestimonialSectionFour value={clientData?.OurHappyClientInClassicLayout} />
    </>
  );
};

export default BodyContent;
