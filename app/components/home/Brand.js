import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import { AppPropertyData } from "../../data/appPropertyData";
import { slide1 } from "../../data/slickSlider";
import NoSsr from "../../utils/NoSsr";
import axios from "axios";

const BrandSection = () => {
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    const fetchAboutBrand = async () => {
      try {
        const res4  = await axios.get(`${process.env.API_URL}/getBrands`);
        setBrandData(res4.data.userData.brand_image);
        console.log('Brand page:' + res4.data.userData);
      } catch (err) {
        console.error('Brand page Error is: '+ err);
      }
    };
    fetchAboutBrand();
  }, []);
  
  return (

    <section className="small-section">
      <Container>
        <Row>
          <Col>
            <NoSsr>
              <Slider className="slide-1 brand-slider" {...slide1}>
              {brandData.map((data, i) => (
                  <div key={i}>
                    <a className="logo-box">
                      <img src={"/assets/images/brands/"+ data.brand_image} alt="" className="img-fluid" />
                    </a>
                  </div>
                ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandSection;
