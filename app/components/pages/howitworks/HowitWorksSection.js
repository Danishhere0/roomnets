import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
//import Img from "../../../utils/BackgroundImageRatio";
import { NumericFormat } from "react-number-format";
import Parser from 'html-react-parser'; 

const HowitWorksSection = () => {
const [shortPrivacyIntro, setShortPrivacyIntro] = useState([]);
const [homepageData, setHomePageData] = React.useState({ privacy: [],googleAdsScript:"" });
const [AboutHeaderImg, setAboutHeaderImg] = useState([]);

useEffect(() => {
  const fetchAboutIntro2 = async () => {
    try {
      const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'ShortHowitWorksIntro',
          content_location: 'howitworks_page'
        },
      });
      setShortAccessibilityIntro(res2.data.userData[0].content);
      //console.log('About page:' + res2.data.userData[0].content);
    } catch (err) {
      console.error('About page Error is: '+ err);
    }
  };
  fetchAboutIntro2();
}, []);

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

useEffect(() => {
  const fetchAboutIntro4 = async () => {
    try {
      const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'AboutHeaderImg',
          content_location: 'about'
        },
      });
      setAboutHeaderImg(res2.data.userData[0].content);
      //console.log('About page:' + res2.data.userData[0].content);
    } catch (err) {
      console.error('About page Error is: '+ err);
    }
  };
  fetchAboutIntro4();
}, []);
const mapHowitworks = () => {
  return (
    homepageData.howitworks.length > 0 &&
    homepageData.howitworks.map((xxx, index) => (
      <div className="card border-0">
        <div
          className="st-top d-inline-block position-relative card-header px-0 border-0 rounded-0 bg-transparent"
          id="headingone"
        >
          <h3 className="mb-0">{xxx.title}</h3>
        </div>
        <div
          id="collapseone"
          className="collapse show"
          aria-labelledby="headingone"
          data-parent="#accordion"
        >
          <div className="card-body mb-15">{xxx.body}</div>
        </div>
      </div>
    ))
  );
};

  return (
    <section className='about-main ratio_36'>
      <Container>
        <Row>
          <div className='col'>
            <div className='title-2'>
              <h2>How It Works</h2>
              <p className='font-roboto'>{`${ setShortHowitWorksIntro || ""}`}</p>
            </div>
            <div className='user-about'>
              <Row>
                <div className='col-xl-9 col-lg-8'>
                  <div className='about-content'>
                     {mapHowitworks()}

                    {/*<p className='font-roboto'>{`${ PrivacyDescription || ""}`}</p>*/}
                  </div>
                </div>
                <div className='col-xl-3 map-image col-lg-'>
                    {homepageData && homepageData.Banners.length > 1 ? (
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={homepageData["Banners"][1]["uri"]}
                    alt="add"
                  />
                ) : null} 
                  <img src={`${ AboutHeaderImg || ""}`} className='img-fluid bg-img' alt='' />
                  
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HowitWorksSection;
