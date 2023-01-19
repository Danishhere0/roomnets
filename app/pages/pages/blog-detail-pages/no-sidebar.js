import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/pages/blogDetailPages";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../../layout/footers/FooterThree";
import NavbarThree from "../../../layout/headers/NavbarThree";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const NoSidebar = () => {
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={false} />
      <FooterThree />
    </>
  );
};
export default NoSidebar;
