import React from "react";
import { Col, Row } from "reactstrap";

const DetailsDeskBox = ({apartData}) => {
  const { state } = apartData;
  const { title, no_rooms, Approved_By_Admin, country,no_toilets, no_baths, media, isPaidAdd, isTopAdd, paid_add, location, expire_date, purchase_date, Building_type,rent, rent_method,no_occupants, email, i_am, building_location,  street_name, rooms_avail_date, ad_start_date, ad_end_date, living_rooms, furnished_rooms, broker_agent_fee, rooms_size,minimum_stay, maximum_stay, amenities_swim, amenities_internet, amenities_play_ground, amenities_parking_space, amenities_entry_disabled, amenities_balcony, amenities_others, amenities_private_toilets, existing_room_mates, new_room_mate, advert_title, advert_description, post_code, currency, plan, payment_response, posted_by, created_at, updated_at } = state || {};
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
                <span>Building Type :</span> {apartData.Building_type}
              </li>
              {apartData.building_location && (
              <li>
                <span>Address: </span>  {roomData.building_location.address || roomData.building_location}
              </li>
              )}
              {apartData.building_location && (
              <li>
                <span>Street Name: </span>  {apartData.street_name}
              </li>
              )}
              {apartData.rooms_avail_date && (
              <li>
                <span>Date Posted: </span>  {apartData.created_at}
              </li>
              )}
              {apartData.rooms_avail_date && (
              <li>
                <span>Available Date: </span>  {apartData.rooms_avail_date}
              </li>
              )}
              <li>
                <span>Number of Occupants :</span> {apartData.no_occupants}
              </li>
              <li>
                <span>Room Size :</span> {apartData.rooms_size}
              </li>
              <li>
                Minimum Stay : <span>{apartData.minimum_stay}</span>
              </li>
              <li>
                Maximum Stay : <span>{apartData.maximum_stay}</span>
              </li>
            </ul>
          </Col>
          <Col md='6' xl='4'>
            <ul className='property-list-details'>
              <li>
                <span>Price :</span> {apartData.currency} { apartData?.rent?.toLocaleString(undefined, {maximumFractionDigits:2}) }/
                        {apartData.rent_method}
              </li>
              <li>
                <span>Broker/Agent fee :</span> { apartData?.broker_agent_fee?.toLocaleString(undefined, {maximumFractionDigits:2}) }
              </li>
              <li>
                <span>Balcony :</span> {apartData.no_balcony}
              </li>
              {apartData.amenities_others && (
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
                <span>Bedrooms :</span> {apartData.no_rooms}
              </li>
              <li>
                <span>Bathrooms :</span> {apartData.bathrooms}
              </li>
              <li>
                <span>Toilets :</span> {apartData.no_toilets}
              </li>
              <li>
                <span>Living Rooms :</span> {apartData.living_rooms}
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
                        <span>{apartData.new_room_mate.gender || "Any"}</span>
                      </li>
                      <li>
                        Language Spoken:{" "}
                        <span>
                          {apartData.new_room_mate.language_spoken || "Any"}
                        </span>
                      </li>
                      <li>
                        Maximum Age:{" "}
                        <span>{apartData.new_room_mate.maximum_age || "Any"}</span>
                      </li>
                      <li>
                        Minimum Age:{" "}
                        <span>{apartData.new_room_mate.minimum_age || "Any"}</span>
                      </li>
                      <li>
                        Nationality:{" "}
                        <span>{apartData.new_room_mate.nationality || "Any"}</span>
                      </li>
                      <li>
                        Occupation:{" "}
                        <span>{apartData.new_room_mate.occupation || "Any"}</span>
                      </li>
                      <li>
                        Pets Welcomed?:{" "}
                        <span>{apartData.new_room_mate.pets || "Any"}</span>
                      </li>
                      <li>
                        Sexual Orientation:{" "}
                        <span>
                          {apartData.new_room_mate.sexual_orientation || "Any"}
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
