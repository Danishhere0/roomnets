import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import FeaturedPropertySection from "../../home/FeaturedProperty";
import FeaturedPropertySectionOne from "../../home/FeatureProperty";
import FeatureSection from "../../home/FeatureSection";
import FeatureSectionOne from "../../home/FeatureSectionOne";
import { AppPropertyData } from "../../../data/appPropertyData";

const BodyContent = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
      <FeaturedPropertySection value={value?.FeaturedPropertyInClassicLayout} />
      <div className="section-pb">
        <FeatureSection value={value?.FeaturedProperty} />
      </div>
      <FeaturedPropertySectionOne value={value?.FeaturedPropertyInCorporateLayout} />
      <FeatureSectionOne value={AppPropertyData.FeaturedCitiesInEnterprise} />
    </>
  );
};

export default BodyContent;
