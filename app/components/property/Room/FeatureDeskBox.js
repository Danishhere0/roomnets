import React from "react";
import { Col, Row } from "reactstrap";

const FeatureDeskBox = ({roomData}) => {
  const { state } = roomData;
  const { no_rooms, Approved_By_Admin, country,no_toilets, no_baths, media, isPaidAdd, isTopAdd, paid_add, location, expire_date, purchase_date, Building_type,rent, rent_method,no_occupants, email, i_am, building_location,  street_name, rooms_avail_date, ad_start_date, ad_end_date, living_rooms, furnished_rooms, broker_agent_fee, rooms_size,minimum_stay, maximum_stay, amenities_swim, amenities_internet, amenities_play_ground, amenities_parking_space, amenities_entry_disabled, amenities_balcony, amenities_others, amenities_private_toilets, existing_room_mates, new_room_mate, advert_title, advert_description, post_code, currency, plan, payment_response, posted_by, created_at, updated_at } = state || {};

  return (
    <div className='desc-box' id='feature'>
      <div className='page-section feature-dec'>
        <h4 className='content-title'>Features/Amenities</h4>
        <Row className='single-feature '>
          <Col xxl='3' xl='4' sm='6'>
            <ul>
              {roomData.amenities_internet && (
              <li>
                <i className='fas fa-wifi'></i> Wi-Fi
              </li>
              )}
              {roomData.elevator && (
              <li>
                <i className='fas fa-hands'></i> Elevator Lift
              </li>
              )}
              <li>
                <i className='fas fa-power-off'></i> Power Backup
              </li>
              {roomData.amenities_swim && (
              <li>
                <i className='fas fa-monument'></i> Swimming Pool
              </li>
              )}
            </ul>
          </Col>
          <Col xxl='3' xl='4' sm='6'>
            <ul>
              {roomData.security_guard && (
              <li>
                <i className='fas fa-user-shield'></i> Security Guard
              </li>
              )}
              {roomData.cctv && (
              <li>
                <i className='fas fa-video'></i> CCTV
              </li>
              )}
              {roomData.emergency_exit && (
              <li>
                <i className='fas fa-door-open'></i> Emergency Exit
              </li>
              )}
              <li>
                <i className='fas fa-first-aid'></i> Doctor On Call
              </li>
            </ul>
          </Col>
          <Col xxl='3' xl='4' sm='6'>
            <ul>
            {roomData.amenities_balcony && (
              <li>
                <i className='fas fa-shower'></i> Balcony
              </li>
              )}
              {roomData.amenities_play_ground && (
              <li>
                <i className='fas fa-shower'></i> Play Ground
              </li>
              )}
              <li>
                <i className='fas fa-shower'></i> Shower
              </li>
              {roomData.amenities_parking_space && (
              <li>
                <i className='fas fa-car'></i> Parking Space
              </li>
              )}
              {roomData.air_conditioning && (
              <li>
                <i className='fas fa-fan'></i> Air Conditioning
              </li>
              )}
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeatureDeskBox;
