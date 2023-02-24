import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterThree from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import upgradeRoomTab from "../../components/pages/userPanel/upgradeRoomTab";

const upgradeRoomTab = () => {
  return (
    <>
    <NavbarThree />
      <Breadcrumb />
      <UpgradeRoom />
      <FooterThree />
    </>
  );
};

export default upgradeRoomTab;
