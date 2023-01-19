import React from "react";
import { AppPropertyData } from "../../data/appPropertyData";
import PropertyServicesSectionTwo from "./PropertyServicesSectionTwo";
import ServiceSection from "./ServiceSection";
import PropertyServicesSectionOne from "./PropertyServicesSectionOne";

const BodyContent = () => {
  return (
    <>
      <div className="bg-light">
        <PropertyServicesSectionOne value={AppPropertyData.PropertyServices} />
      </div>
      <ServiceSection value={AppPropertyData.ProvidedServices} />
      <PropertyServicesSectionTwo value={AppPropertyData.PropertyServicesInClassic} />
    </>
  );
};

export default BodyContent;
