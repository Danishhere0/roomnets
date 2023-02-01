import React, { useState, useEffect} from "react";
import { Col, Row } from "reactstrap";
import { formatNumber } from "../../../data/NumberFormat";
import { NumericFormat } from 'react-number-format';

const numberWithComma = ({x}) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const DetailsDeskBox = ({roomData}) => {
  const [like, setLike] = useState(false);
  const { state } = roomData;
  const { no_rooms, Approved_By_Admin, country,no_toilets, no_baths, media, isPaidAdd, isTopAdd, paid_add, location, expire_date, purchase_date, Building_type,rent, rent_method,no_occupants, email, i_am, building_location,  street_name, rooms_avail_date, ad_start_date, ad_end_date, living_rooms, furnished_rooms, broker_agent_fee, rooms_size,minimum_stay, maximum_stay, amenities_swim, amenities_internet, amenities_play_ground, amenities_parking_space, amenities_entry_disabled, amenities_balcony, amenities_others, amenities_private_toilets, existing_room_mates, new_room_mate, advert_title, advert_description, post_code, currency, plan, payment_response, posted_by, created_at, updated_at } = state || {};

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
                <span>Address: </span>  {roomData.building_location.address || roomData.building_location}
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
                <span>Minimum Stay :</span> {roomData.minimum_stay}
              </li>
              <li>
               <span> Maximum Stay :</span> {roomData.maximum_stay}
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Price :</span> {roomData.currency} { roomData?.rent?.toLocaleString(undefined, {maximumFractionDigits:2}) }/ {roomData?.rent_method}
              </li>
              <li>
                <span>Broker/Agent fee :</span> { roomData?.broker_agent_fee?.toLocaleString(undefined, {maximumFractionDigits:2}) }
              </li>
              {roomData.amenities_balcony && ( 
              <li>
                <span>Balcony :</span> {roomData.no_balcony}
              </li>)}
              {roomData.amenities_play_ground && ( 
              <li>
                <span>Play ground :</span> Yes
              </li>)}
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
