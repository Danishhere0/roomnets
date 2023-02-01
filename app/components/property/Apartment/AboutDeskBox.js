/**
 * It takes an array of data and returns a row of columns with the data
 * @returns An array of objects.
 */
import React from "react";
import { Col, Row } from "reactstrap";

const AboutDeskBox = ({apartData}) => {
  const { state } = apartData;
  const { advert_title, advert_description } = state || {};

  return (
    <div className='about page-section' id='about'>
      <h4>Property Brief</h4>
      <h5>{apartData.advert_title}</h5>
      <Row>
          <Col sm='12'>
            <p>{apartData.advert_description}</p>
          </Col>
      </Row>
    </div>
  );
};

export default AboutDeskBox;
