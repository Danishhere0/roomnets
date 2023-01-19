import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
//import Img from "../../../utils/BackgroundImageRatio";
import { NumericFormat } from "react-number-format";

const AccessibilitySection = () => {
const [shortAccessibilityIntro, setShortAccessibilityIntro] = useState([]);
const [AccessibilityDescription, setAccessibilityDescription] = useState([]);
const [AboutHeaderImg, setAboutHeaderImg] = useState([]);

useEffect(() => {
  const fetchAboutIntro2 = async () => {
    try {
      const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'shortAccessibilityIntro',
          content_location: 'accessbility_page'
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

useEffect(() => {
  const fetchAboutIntro3 = async () => {
    try {
      const res2  = await axios.get(`${process.env.API_URL}/fetchAsesibility`);
      setAccessibilityDescription(res2.data.userData);
      //console.log('About page:' + res2.data.userData[0].content);
    } catch (err) {
      //console.error('About page Error is: '+ err);
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
              <h2>Accessibility Statement</h2>
              <p className='font-roboto'>{`${ shortAccessibilityIntro || ""}`}</p>
            </div>
            <div className='user-about'>
              <Row>
                <div className='col-xl-8 col-lg-8'>
                  <div className='about-content'>

                    <p className='font-roboto'>{`${ AccessibilityDescription || ""}`}</p>
                  </div>
                </div>
                <div className='col-xl-4 map-image col-lg-4'>
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

export default AccessibilitySection;
