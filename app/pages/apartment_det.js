/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../components/property/Apartment";
import FooterThree from "../layout/footers/FooterThree";
import NavbarThree from "../layout/headers/NavbarThree";
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const ApartmentDetails = () => {
  const router = useRouter();
  const { AprtId } = router.query;
  return (
    <>
      <NavbarThree />
      <BodyContent side={"right"} AprtId={AprtId} />
      <FooterThree />
    </>
  );
};

export default ApartmentDetails;
