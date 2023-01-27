import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";
import { Container, Row } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../layout/footers/FooterThree";
import NavbarThree from "../layout/headers/NavbarThree";
import GoogleAdsCard from "./GoogleAdsCard";
import SideAdsCard from "./SideAdsCard";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const contactSuccess = () => {
  const [active, setActive] = useState(0);
  const [homepageData, setHomePageData] = React.useState({ privacy: [],googleAdsScript:"" });

  const handleClick = (value) => {
    setActive(value);
    active === value && setActive();
  };

  const fetchHomepageModels = async () => {
    return await axios
      .get(`/api/v1/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };

  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => {
          setHomePageData({ ...res.data.userData });
        })
        .catch((err) => console.log(err)),

    []
  );
   
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <GoogleAdsCard />
      <section className='faq-section log-in'>
        <Container>
          <Row>
            <div className='col-lg-6 order-lg-1'>
              <div className='faq-image text-center'>
                <img src='/assets/images/inner-pages/3.svg' className='img-fluid' alt='' />
                <h3>Contact Us</h3>
                <p className='font-roboto'>You can ask anything you want to know</p>
              </div>
                <p>Thanks for contacting us, we will get back to you soonest.</p>
            </div>
            <div className='col-lg-6'>
              <SideAdsCard/>
            </div>
          </Row>
        </Container>
      </section>
      <FooterThree />
    </>
  );
};

export default contactSuccess;
