/**
 * It renders a section with a container, row, and two columns. The first column has an image and the
 * second column has a ContactUsCard
 * @returns A section with a container with a row with two columns. The first column has an image and
 * the second column has a login card.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import ContactUsCard from "./ContactUsCard";

const GetInTouchSection = () => {
  const fetchHomepageModels = async () => {
    return await axios
      .get(`${process.env.API_URL}/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
  
  const [homepageData, setHomePageData] = React.useState({
    Banners: [],
    partners:[],
    googleAdsScript: "",
  });
  
  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => {
          console.log(res.data.userData);
          setHomePageData({ ...res.data.userData });
        })
        .catch((err) => console.log(err)),
  
    []
  );

  return (
    <section className="small-section get-in-touch">
      <Container>
        <Row>
          <Col lg="6" className="contact-img">
            <img src={"/assets/images/contact/"+ `${homepageData.contactPageSideImage || ""}`} className="img-fluid" alt="" />
          </Col>
          <Col lg="6">
            <ContactUsCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInTouchSection;
