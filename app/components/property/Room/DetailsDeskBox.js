import React from "react";
import { Col, Row } from "reactstrap";
import { useHistory } from "react-router";


const DetailsDeskBox = (roomData) => {
  //const history = useHistory();
 // const state = history.location.state;
  return (
    <div className='desc-box' id='details'>
      <div className='page-section'>
        <h4 className='content-title'>
          Property Details
          <a
            href='https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en'
            target='_blank'
            rel='noreferrer'>
            <i className='fa fa-map-marker-alt'></i> view on map
          </a>
        </h4>
        <Row>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Building Type :</span> {roomData.Building_type}
              </li>
              {roomData.building_location && (
              <li>
                <span>Address: </span>  {roomData.building_location.address}
              </li>
              )}
              {roomData.building_location && (
              <li>
                <span>Street Name: </span>  {roomData.street_name}
              </li>
              )}
              {roomData.rooms_avail_date && (
              <li>
                <span>Available Date: </span>  {roomData.rooms_avail_date}
              </li>
              )}
              <li>
                <span>Number of Occupants :</span> {roomData.no_occupants}
              </li>
              <li>
                <span>Room Size :</span> {roomData.rooms_size}
              </li>
              <li>
                Minimum Stay : <span>{roomData.minimum_stay}</span>
              </li>
              <li>
                Maximum Stay : <span>{roomData.maximum_stay}</span>
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Price :</span> {roomData.currency} {numberWithCommas(roomData.rent)}/
                        {roomData.rent_method}
              </li>
              <li>
                <span>Broker/Agent fee :</span> {roomData.broker_agent_fee}
              </li>
              <li>
                <span>Balcony :</span> {roomData.no_balcony}
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              {/*<li>
                <span>City :</span> Newyork
              </li>*/}
              <li>
                <span>Bedrooms :</span> {roomData.no_rooms}
              </li>
              <li>
                <span>Bathrooms :</span> {roomData.bathrooms}
              </li>
              <li>
                <span>Toilets :</span> {roomData.no_toilets}
              </li>
              <li>
                <span>Living Rooms :</span> {roomData.living_rooms}
              </li>
            </ul>
          </Col>
        </Row>
      {/*  <h4 className='content-title mt-4'>Attachments</h4>
        <a className='attach-file'>
          <i className='far fa-file-pdf'></i>Demo Property Document{" "}
              </a> */}
      </div>
    </div>
  );
};

export default DetailsDeskBox;
