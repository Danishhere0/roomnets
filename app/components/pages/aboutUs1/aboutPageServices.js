/**
 * It takes in an array of objects and returns a section with a title and a row of columns with the
 * data from the array
 * @returns A section with a container, row, and col.
 */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";

const AboutServicesSection = ({ value }) => {

  const [servicesData, setServicesData] = useState([]);
  const [shortAboutIntro, setShortAboutIntro] = useState([]);
  const [aboutPageServiceDescription, setAboutPageServiceDescription] = useState([]);

  useEffect(() => {
    getData(`${process.env.API_URL}/getSiteServices`)
      .then((res) => {
        setServicesData(res.data.userData);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res1  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
          params: {
            pageslug: 'AboutPageServiceDescription',
            content_location: 'about'
          },
        });
        setAboutPageServiceDescription(res1.data.userData[0].content);
        //console.log('About page:' + res1.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetchAboutIntro = async () => {
      try {
        const res1  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
          params: {
            pageslug: 'shortAboutIntro',
            content_location: 'about'
          },
        });
        setShortAboutIntro(res1.data.userData[0].content);
      //  console.log('About page:' + res1.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetchAboutIntro();
  }, []);

  return (
    <section className="service-section service-1">
      <Container>
        <Row>
          <Col>
            <div className="title-2">
            <h2>{`${ shortAboutIntro || ""}`}</h2>
            <p>{`${ aboutPageServiceDescription || ""}`}</p>
              
            </div>
            <Row className=" property-service column-space">
              {servicesData?.map((data, i) => (
                <Col xl="4" md="6" className=" wow fadeInUp" key={i}>
                  <div className="service-box">
                    <div className="icon-round"><img src={"./public/assets/images/about/"+ data.content_image} /></div>
                    <h3>
                      <Link href="#">{data.content_title}</Link>
                    </h3>
                    <p>{data.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutServicesSection;
