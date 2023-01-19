/**
 * It takes in an array of objects and returns a slider with each object's data
 * @returns An array of objects.
 */
/**
 * It takes in an array of objects and returns a slider with each object's data
 * @returns An array of objects.
 */
import Link from "next/link";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { feature3 } from "../../data/slickSlider";
import Img from "../../utils/BackgroundImageRatio";
import NoSsr from "../../utils/NoSsr";

const FeaturePropertySection = ({ value }) => {
  return (
    <section className="feature-section ratio_landscape pt-0">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Featured <span>Property</span>
              </h2>
              <p className="font-roboto">Residences can be classified into different type of housing tenure can used for same physical type.</p>
            </div>
            <Gallery>
              <NoSsr>
                <Slider className="feature-3 classic-feature arrow-image zoom-gallery" {...feature3}>
                  {value &&
                    value.map((data, i) => (
                      <div data-title="classic-image1" className="feature-style" key={i}>
                        <div className="feature-wrap">
                          <Row>
                            <Col xl="6" lg="5">
                              <div className="feature-image">
                                <div className="zoom">
                                  <Item original={data.img} width="1000" height="600" key={i}>
                                    {({ ref, open }) => (
                                      <div className="feature-overlay" ref={ref} onClick={open}>
                                        <span>+</span>
                                      </div>
                                    )}
                                  </Item>
                                  <Img src={data.img} className="bg-img" />
                                </div>

                                <span className="label label-solid label-lg label-flat">Featured</span>
                              </div>
                            </Col>
                            <Col xl="6" lg="7">
                              <div className="feature-content">
                                <div className="details">
                                  <h3>
                                    <Link href={`/apartment_det/?id=${data._id}`}>{data.title}</Link>
                                  </h3>
                                  <span>{data.details}</span>
                                  <p className="font-roboto">{data.moreDetails}</p>
                                </div>
                                <ul className="detail-list">
                                  <li>
                                    <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                                    Room(s) : {data.no_rooms}
                                  </li>
                                  <li>
                                    <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                                    Bath(s) : {data.baths}
                                  </li>
                                  <li>
                                    <img src="/assets/images/svg/icon/toilet.svg" className="img-fluid" alt="" />
                                    Toilet : {data.no_toilets}
                                  </li>
                                  <li>
                                    <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                                    Sq Ft : {data.rooms_size}
                                  </li>
                                </ul>
                                <ul className="feature-price">
                                  <li>
                                    <h3>${data.rent}</h3>
                                    <h6>Apartment for Rent</h6>
                                  </li>
                                  <li>
                                    <Link href="/post_ad">
                                      <button type="button" className="btn btn-solid btn-flat">
                                        Submit property
                                      </button>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    ))}
                </Slider>
              </NoSsr>
            </Gallery>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturePropertySection;
