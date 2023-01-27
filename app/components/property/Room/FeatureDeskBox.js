import React from "react";
import { Col, Row } from "reactstrap";

const FeatureDeskBox = (roomData) => {
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
