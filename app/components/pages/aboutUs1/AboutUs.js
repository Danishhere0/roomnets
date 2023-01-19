import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
//import Img from "../../../utils/BackgroundImageRatio";
import { NumericFormat } from "react-number-format";

const AboutUsSection = () => {
const [siteData, setsiteData ] = React.useState([]);
const [shortAboutIntro, setShortAboutIntro] = useState([]);
const [shortAboutDescription, setShortAboutDescription] = useState([]);
const [AboutDescription, setAboutDescription] = useState([]);
const [AboutHeaderImg, setAboutHeaderImg] = useState([]);

const fetchsiteData = async () => {
  return await axios
    .get(`${process.env.API_URL}/getSiteData`)
    .then((response) => response)
    .catch((err) => err);
};
React.useEffect(
  () =>
    fetchsiteData()
      .then((res) => {
       // console.log("Site Data " + res.data.userData[0].property_count);
        setsiteData(res.data.userData[0]);
      })
      .catch((err) => console.log(err)),

  []
);

useEffect(() => {
  const fetchAboutIntro1 = async () => {
    try {
      const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'shortAboutIntro',
          content_location: 'about'
        },
      });
      setShortAboutIntro(res2.data.userData[0].content);
      //console.log('About page:' + res2.data.userData[0].content);
    } catch (err) {
      console.error('About page Error is: '+ err);
    }
  };
  fetchAboutIntro1();
}, []);

useEffect(() => {
  const fetchAboutIntro2 = async () => {
    try {
      const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'shortAboutDescription',
          content_location: 'about'
        },
      });
      setShortAboutDescription(res2.data.userData[0].content);
      //console.log('About page:' + res2.data.userData[0].content);
    } catch (err) {
      console.error('About page Error is: '+ err);
    }
  };
  fetchAboutIntro2();
}, []);

useEffect(() => {
  const fetchAboutIntro3 = async () => {
    try {
      const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'AboutDescription',
          content_location: 'about'
        },
      });
      setAboutDescription(res2.data.userData[0].content);
      //console.log('About page:' + res2.data.userData[0].content);
    } catch (err) {
      console.error('About page Error is: '+ err);
    }
  };
  fetchAboutIntro3();
}, []);

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

  return (
    <section className='about-main ratio_36'>
      <Container>
        <Row>
          <div className='col'>
            <div className='title-2'>
              <h2>About Us</h2>
              <p className='font-roboto'>{`${ shortAboutIntro || ""}`}</p>
            </div>
            <div className='user-about'>
              <Row>
                <div className='col-xl-5 col-lg-7'>
                  <div className='about-content'>
                    <h3>
                      {`${ shortAboutDescription || ""}`}
                    </h3>
                    <p className='font-roboto'>{`${ AboutDescription || ""}`}</p>
                  </div>
                  <div className='about-listing'>
                    <ul>
                      <li>
                        <h4><NumericFormat value={siteData.property_count} displayType={"text"} allowLeadingZeros thousandSeparator="," /></h4>
                        <p>Total property</p>
                      </li>
                      <li>
                        <h4><NumericFormat value={siteData.agent_count} displayType={"text"} allowLeadingZeros thousandSeparator="," /></h4>
                        <p>Agents</p>
                      </li>
                      <li>
                        <h4><NumericFormat value={siteData.companies_count} displayType={"text"} allowLeadingZeros thousandSeparator="," /></h4>
                        <p>Companies</p>
                      </li>
                      <li>
                        <h4><NumericFormat value={siteData.property_sold_count} displayType={"text"} allowLeadingZeros thousandSeparator="," /></h4>
                        <p>Sold out property</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-xl-7 map-image col-lg-5'>
                  <img src={`${ AboutHeaderImg || ""}`} className='img-fluid bg-img' alt='' />
                  <div className='marker-icons'>
                    <ul>
                      <li>
                        <img className='img-fluid marker-1' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-2' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-3' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                      <li>
                        <img className='img-fluid marker-4' src='/assets/images/leaflet/marker-icon.png' alt='' />
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
