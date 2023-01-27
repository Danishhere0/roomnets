import React from "react";
import { Col, Row } from "reactstrap";
import { useHistory } from "react-router";


const DetailsDeskBox = (props) => {
  const history = useHistory();
  const state = history.location.state;
  return (
    <div className='desc-box' id='details'>
      <div className='page-section'>
        <h4 className='content-title'>
          Apartment Details
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
                <span>Building Type :</span> {state.Building_type}
              </li>
              {state.building_location && (
              <li>
                <span>Address: </span>  {state.building_location.address}
              </li>
              )}
              {state.building_location && (
              <li>
                <span>Street Name: </span>  {state.street_name}
              </li>
              )}
              {state.rooms_avail_date && (
              <li>
                <span>Date Posted: </span>  {state.created_at}
              </li>
              )}
              {state.rooms_avail_date && (
              <li>
                <span>Available Date: </span>  {state.rooms_avail_date}
              </li>
              )}
              <li>
                <span>Number of Occupants :</span> {state.no_occupants}
              </li>
              <li>
                <span>Room Size :</span> {state.rooms_size}
              </li>
              <li>
                Minimum Stay : <span>{state.minimum_stay}</span>
              </li>
              <li>
                Maximum Stay : <span>{state.maximum_stay}</span>
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Price :</span> {state.currency} {numberWithCommas(state.rent)}/
                        {state.rent_method}
              </li>
              <li>
                <span>Broker/Agent fee :</span> {state.broker_agent_fee}
              </li>
              <li>
                <span>Balcony :</span> {state.no_balcony}
              </li>
              {state.amenities_others && (
              <li>
                <span>Others</span>
              </li>
              )}
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              {/*<li>
                <span>City :</span> Newyork
              </li>*/}
              <li>
                <span>Bedrooms :</span> {state.no_rooms}
              </li>
              <li>
                <span>Bathrooms :</span> {state.bathrooms}
              </li>
              <li>
                <span>Toilets :</span> {state.no_toilets}
              </li>
              <li>
                <span>Living Rooms :</span> {state.living_rooms}
              </li>
            </ul>
            </Col>
            <Col md='6' xl='4'>
            <h3 className="color-secondary line-bottom pb-15 mb-20">
                  New occupant/tenant preferences
              </h3>
            <ul className='property-list-details'>
                      <li>
                        Gender:{" "}
                        <span>{state.new_room_mate.gender || "Any"}</span>
                      </li>
                      <li>
                        Language Spoken:{" "}
                        <span>
                          {state.new_room_mate.language_spoken || "Any"}
                        </span>
                      </li>
                      <li>
                        Maximum Age:{" "}
                        <span>{state.new_room_mate.maximum_age || "Any"}</span>
                      </li>
                      <li>
                        Minimum Age:{" "}
                        <span>{state.new_room_mate.minimum_age || "Any"}</span>
                      </li>
                      <li>
                        Nationality:{" "}
                        <span>{state.new_room_mate.nationality || "Any"}</span>
                      </li>
                      <li>
                        Occupation:{" "}
                        <span>{state.new_room_mate.occupation || "Any"}</span>
                      </li>
                      <li>
                        Pets Welcomed?:{" "}
                        <span>{state.new_room_mate.pets || "Any"}</span>
                      </li>
                      <li>
                        Sexual Orientation:{" "}
                        <span>
                          {state.new_room_mate.sexual_orientation || "Any"}
                        </span>
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
