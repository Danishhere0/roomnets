import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterLink from "./elements/FooterLink";
import FooterBlog from "./footerThreeElements/FooterBlog";
import FooterContactUsDetails from "./footerThreeElements/FooterContactUsDetails";
import SubFooterTwo from "./elements/SubFooterTwo";
import axios from "axios";


const FooterThree = () => {
  const [isActive, setIsActive] = useState();
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
          
          setHomePageData({ ...res.data.userData });
          console.log(res.data.userData);
        })
        .catch((err) => console.log(err)),

    []
  );

  return (
    <footer>
      <div className="footer footer-bg">
        <Container>
          <Row>
            <FooterContactUsDetails />
            <Col xl="9">
              <Row>
                <FooterLink value={FooterData.usefulLinks} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterData.feature} isActive={isActive} setIsActive={setIsActive} />
                <FooterLink value={FooterData.quicklinks} isActive={isActive} setIsActive={setIsActive} />
                <Col lg="3" xl="4">
                  <div className="footer-links">
                    <h5
                      className={`footer-title ${isActive === "subscribe" ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsActive("subscribe");
                        isActive === "subscribe" && setIsActive();
                      }}>
                      subscribe
                      <span className="according-menu">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </h5>
                    <div className={`footer-content ${isActive === "subscribe" ? "d-block" : "d-none d-md-block"}`}>
                      <p className="mb-0">{`${ homepageData.FooterSubscriptionContent || ""}`}</p>
                      <form>
                        <div className="input-group">
                          <input type="email" className="form-control" placeholder="Email Address" required />
                          <span className="input-group-apend">
                            <button type="submit" className="input-group-text" id="basic-addon2">
                              <i className="fas fa-paper-plane"></i>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
              <FooterBlog />
            </Col>
          </Row>
        </Container>
      </div>
      <SubFooterTwo />
    </footer>
  );
};

export default FooterThree;
