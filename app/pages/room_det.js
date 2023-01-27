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
import  queryString  from "query-string";
import { useRouter } from 'next/router';

export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const RoomsDetails = () => {
  const router = useRouter();
  const { roomId } = router.query;
  //console.log('Console page:' + id);

  return (
    <>
      <NavbarThree />
      <BodyContent side={"right"} roomId={roomId} />
      <FooterThree />
    </>
  );
};

export default RoomsDetails;
