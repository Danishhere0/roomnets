/**
 * It returns a section with a container with a row with a column with a slider with a div with an
 * anchor with an image
 * @returns A function that returns a section element.
 */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { slide2 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import axios from "axios";

const BrandSection = () => {
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    const fetchAboutBrand = async () => {
      try {
        const res4  = await axios.get(`${process.env.API_URL}/getBrands`);
        setBrandData(res4.data.userData.brand_image);
       // console.log('Brand page:' + res4.data.userData);
      } catch (err) {
        console.error('Brand page Error is: '+ err);
      }
    };
    fetchAboutBrand();
  }, []);

  return (
    <section className="small-section bg-light brand-wrap">
      <Container>
        <Row>
          <Col>
            <NoSsr>
              <Slider className="slide-2 brand-slider" {...slide2}>
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
