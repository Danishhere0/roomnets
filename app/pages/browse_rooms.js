import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../components/property/Rooms";
import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../layout/footers/FooterThree";
import NavbarThree from "../layout/headers/NavbarThree";
import GoogleAdsCard from "./GoogleAdsCard";
import SideAdsCard from "./SideAdsCard";
import { useRouter } from 'next/router';


export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const browseRooms = () => {
  const router = useRouter();
  const { adswidth, gawidth } = router.query;

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GoogleAdsCard width = { gawidth }/>
      <BodyContent />
      <SideAdsCard  adswidth = { adswidth }/>
      <FooterThree />
    </>
  );
};

export default browseRooms;
