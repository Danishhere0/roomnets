import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterThree from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/userPanel";

const UserDashboard = () => {

  useEffect(() => {
    {localStorage.getItem('userToken') !== null ?
    `Logged in as ${localStorage.getItem('userToken').email}` :
      router.push({
        pathname: '/login',
        query: { message: `You are not Logged in` },
      }) }

  });
  
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent active={"Dashboard"} />
      <FooterThree />
    </>
  );
};

export default UserDashboard;
