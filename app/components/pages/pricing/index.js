import React from "react";
import { AppPropertyData } from "../../../data/appPropertyData";
import PricingSection from "./Pricing";

const BodyContent = () => {
  return (
    <>
      <PricingSection value={AppPropertyData.PricingPlan} />
    </>
  );
};

export default BodyContent;
