/**
 * It returns a section with a container with a row with three columns, each of which has a div with a
 * contact icon, a heading, and a paragraph
 * @returns The ContactDetailsSection component is being returned.
 */
import React from "react";
import { Mail, MapPin } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory, Link ,useParams} from "react-router-dom";

const ContactDetailsSection = () => {
  const history=useHistory()
  const [loading, setLoading] = React.useState(false);
  const [homepageData, setHomePageData] = React.useState([]);
  const fetchHomepageModels = async () => {
    return await axios
      .get(`${process.env.API_URL}/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
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
    <section className='small-section contact_section pt-0 contact_bottom'>
      <Container>
        <Row>
          <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <MapPin />
              <h4>Where ?</h4>
              <p className='font-roboto'>
              {`${homepageData.SiteOfficeAddress || ""}`}<br></br>
                {`${homepageData.SitePhone || ""}`}
              </p>
            </div>
          </Col>
         <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <MapPin />
              <h4>Second branch</h4>
              <p className='font-roboto'>
              {`${homepageData.SiteOfficeAddress || ""}`}
              </p>
            </div>
          </Col>
          <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <Mail />
              <h4>Online service</h4>
              <ul>
                <li>Inquiries: {`${homepageData.inquiryEmail || ""}`}</li>
                <li>Support: {`${homepageData.supportEmail || ""}`}</li>
                <li>{`${homepageData.SitePhone || ""}`}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetailsSection;
