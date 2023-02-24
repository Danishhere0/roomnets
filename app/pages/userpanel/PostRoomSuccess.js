import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterThree from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import PostRoomSuccessTab from "../../components/pages/userPanel/PostRoomSuccessTab";

const PostRoomSuccess = () => {
  return (
    <>
    <NavbarThree />
      <Breadcrumb />
      <PostRoomSuccessTab />
              <FooterThree />
    </>
  );
};

export default PostRoomSuccess;
