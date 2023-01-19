/**
 * It returns the NavbarOne, BodyContent, and FooterOne components
 * @returns The NavbarOne, BodyContent, and FooterOne components are being returned.
 */
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import BodyContent from "../../components/home";
import { ConfigDB } from "../../config/themeCustomizerConfig";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarOne from "../../layout/headers/NavbarOne";
import { useHistory } from "react-router";
import AdSense from "react-adsense";
import Parser from "html-react-parser";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";


export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const SliderFilterSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#2c2e97");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#4b55c4");
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarOne />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default SliderFilterSearch;
