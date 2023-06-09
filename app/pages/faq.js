import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "react-feather";
import { Container, Row } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../layout/footers/FooterThree";
import NavbarThree from "../layout/headers/NavbarThree";
import axios from "axios";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Faq = () => {
  const [active, setActive] = useState(0);
  const [homepageData, setHomePageData] = React.useState({ privacy: [],googleAdsScript:"" });

  const handleClick = (value) => {
    setActive(value);
    active === value && setActive();
  };

  const fetchHomepageModels = async () => {
    return await axios
      .get(`${process.env.API_URL}/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };

  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => {
          console.log("home data"+res.data.userData);
          setHomePageData({ ...res.data.userData });
          
        })
        .catch((err) => console.log("home data"+err)),

    []
  );
   
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <section className='faq-section log-in'>
        <Container>
          <Row>
            <div className='col-lg-6 order-lg-1'>
              <div className='faq-image text-center'>
                <img src='/assets/images/inner-pages/3.svg' className='img-fluid' alt='' />
                <h3>Have Any Questions ?</h3>
                <p className='font-roboto'>You can ask anything you want to know</p>
              </div>
              <form>
                <div className='form-group mb-0'>
                  <label>Let me know</label>
                  <input type='text' className='form-control' placeholder='Ask a question' required />
                </div>
                <button type='submit' className='btn btn-gradient'>
                  Send
                </button>
              </form>
            </div>
            <div className='col-lg-6'>
              <div className='faq-questions'>
                <div className='title-3 text-start'>
                  <h2>Frequently Asked Questions</h2>
                </div>

                <div id='accordion' className='accordion'>
                  {homepageData?.faq?.length > 0 &&
                    homepageData?.faq?.map((data, i) => (
                    <div className='card' key={i}>
                      <div className='card-header'>
                        <a className='card-link ' onClick={() => handleClick(i)}>
                          {data.title}
                          {active === i ? <ChevronDown className='float-end' /> : <ChevronRight className='float-end' />}
                        </a>
                      </div>
                      <div className={`collapse ${active === i ? "show" : ""}`}>
                        <div className='card-body'>{data.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <FooterThree />
    </>
  );
};

export default Faq;
