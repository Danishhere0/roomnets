import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../components/property/Rooms";
import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../layout/footers/FooterThree";
import NavbarThree from "../layout/headers/NavbarThree";
import GoogleAdsCard from "./GoogleAdsCard";
import SideAdsCard from "./SideAdsCard";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Property = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GoogleAdsCard />
      <BodyContent />
      <SideAdsCard />
      <FooterThree />
    </>
  );
};

export default Property;
