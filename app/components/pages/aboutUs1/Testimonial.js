/**
 * It's a function that returns a section with a container, a row, a column, a div, a div, a div
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { commentRight, imgTestimonial } from "../../../data/slickSlider";
import ReviewStarr from "../../../components/elements/ReviewStarr";
import NoSsr from "../../../utils/NoSsr";
import { getData } from "../../../utils/getData";
import axios from "axios";



const TestimonialSection = ({ value }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [testimonialData, setTestimonialData] = useState([]);
  const [ClientTestimonialShortDescript, setShortAboutTestIntro] = useState([]);

  useEffect(() => {
    getData(`${process.env.API_URL}/getTestimonial`)
      .then((res) => {
        setTestimonialData(res.data.userData);
        //console.log('Testimonial page:' + res.data.userData);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    const fetchAboutIntro1 = async () => {
      try {
        const res2  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
          params: {
            pageslug: 'ClientTestimonialShortDescript',
            content_location: 'about'
          },
        });
        setShortAboutTestIntro(res2.data.userData[0]);
        //console.log('About page:' + res2.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetchAboutIntro1();
  }, []);

  return (
    <section className="testimonial-client">
      <Container>
        <Row>
          <Col>
            <div className="title-3 text-start">
              <h2>What Our Clients Are Saying</h2>
              <p className="font-roboto">{`${ ClientTestimonialShortDescript.content || ""}`}</p>
            </div>
            <div className="testimonial-4">
              <NoSsr>
                <Row className="modern-client">
                  <Col lg="6">
                    <Slider className="img-testimonial" {...imgTestimonial} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                      {testimonialData &&
                        testimonialData.map((data, i) => (
                          <div key={i}>
                            <div className="img-left">
                              <img src={"./public/assets/images/testimonial/"+ data.image} alt="" className="img-fluid" />
                            </div>
                          </div>
                        ))}
                    </Slider>
                  </Col>
                  <Col xl="5" lg="6" md="9" sm="10">
                    <div className="right-height">
                      <Slider className="comment-right" {...commentRight} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
                        {testimonialData &&
                          testimonialData.map((data, i) => (
                            <div key={i}>
                              <div className="media">
                                <div className="media-body">
                                  <Link href="#">
                                    <h3 className="d-flex">
                                      {data.name}
                                      <span className="label-heart ms-2">
                                        <i className="fas fa-heart"></i>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                                <ul className="client-rating">
                                  <ReviewStarr />
                                </ul>
                              </div>
                              <h6>{data.title}</h6>
                              <p className="font-roboto">{data.detail}</p>
                              <span className="font-roboto">{data.email}</span>
                            </div>
                          ))}
                      </Slider>
                    </div>
                  </Col>
                </Row>
              </NoSsr>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;
