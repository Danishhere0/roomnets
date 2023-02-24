import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterThree from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import PostApartSuccessTab from "../../components/pages/userPanel/PostApartSuccessTab";

const PostApartSuccess = () => {
  return (
    <>
    <NavbarThree />
      <Breadcrumb />
      <PostApartSuccessTab />
              <FooterThree />
    </>
  );
};

export default PostApartSuccess;
