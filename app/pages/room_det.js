/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../components/property/Room";
import FooterThree from "../layout/footers/FooterThree";
import NavbarThree from "../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const RoomsDetails = () => {
  return (
    <>
      <NavbarThree />
      <BodyContent side={"right"} />
      <FooterThree />
    </>
  );
};

export default RoomsDetails;
