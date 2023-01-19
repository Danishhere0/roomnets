/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values transformed by the function you pass in
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail } from "../../../constValues/constValues";
import { blog2 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import BlogWrapBox from "../../property/propertyBoxs/BlogWrapBox";
import { getData } from "../../../utils/getData";
import axios from "axios";


const BlogSection = ({ value }) => {
  const [isActive, setIsActive] = useState();
  const [BlogData, setBlogData] = useState([]);
  const [BlogHeaderDescript, setBlogDes] = useState([]);

  useEffect(() => {
    const fetchAboutBloIntro1 = async () => {
      try {
        const res3  = await axios.get(`${process.env.API_URL}/BlogPostAllCountries`);
        setBlogData(res3.data.userData);
        //console.log('Blog page:' + res3.data.userData);
      } catch (err) {
        console.error('Blog page Error is: '+ err);
      }
    };
    fetchAboutBloIntro1();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res8  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
          params: {
            pageslug: 'BlogHeaderDescript',
            content_location: 'blog'
          },
        });
        setBlogDes(res8.data.userData[0].content);
      //  console.log('About page:' + res1.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetch();
  }, []);
  
  return (
    <section className="ratio2_1 simple-blog">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Latest <span>Blog</span>
              </h2>
              <p className="font-roboto">{`${ BlogHeaderDescript || ""}`}</p>
            </div>
            <NoSsr>
              <Slider className="blog-2" {...blog2}>
                {BlogData &&
                  BlogData.map((data, i) => (
                    <div key={i}>
                      <BlogWrapBox data={data} />
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

export default BlogSection;
