/**
 * It takes an array of data and returns a row of columns with the data
 * @returns An array of objects.
 */
import React from "react";
import { Col, Row } from "reactstrap";
import { useHistory } from "react-router";

const AboutDeskBox = () => {
  const history = useHistory();
  const state = history.location.state;
  return (
    <div className='about page-section' id='about'>
      <h4>Property Brief</h4>
      <h5>{state.advert_title}</h5>
      <Row>
          <Col sm='12'>
            <p>{state.advert_description}</p>
          </Col>
      </Row>
    </div>
  );
};

export default AboutDeskBox;
