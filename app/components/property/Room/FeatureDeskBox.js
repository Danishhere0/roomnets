import React from "react";
import { Col, Row } from "reactstrap";

const FeatureDeskBox = () => {
  return (
    <div className='desc-box' id='feature'>
      <div className='page-section feature-dec'>
        <h4 className='content-title'>Features/Amenities</h4>
        <Row className='single-feature '>
          <Col xxl='3' xl='4' sm='6'>
            <ul>
              {state.amenities_internet && (
              <li>
                <i className='fas fa-wifi'></i> Wi-Fi
              </li>
              )}
              {state.elevator && (
              <li>
                <i className='fas fa-hands'></i> Elevator Lift
              </li>
              )}
              <li>
                <i className='fas fa-power-off'></i> Power Backup
              </li>
              {state.amenities_swim && (
              <li>
                <i className='fas fa-monument'></i> Swimming Pool
              </li>
              )}
            </ul>
          </Col>
          <Col xxl='3' xl='4' sm='6'>
            <ul>
              {state.security_guard && (
              <li>
                <i className='fas fa-user-shield'></i> Security Guard
              </li>
              )}
              {state.cctv && (
              <li>
                <i className='fas fa-video'></i> CCTV
              </li>
              )}
              {state.emergency_exit && (
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
            {state.amenities_balcony && (
              <li>
                <i className='fas fa-shower'></i> Balcony
              </li>
              )}
              {state.amenities_play_ground && (
              <li>
                <i className='fas fa-shower'></i> Play Ground
              </li>
              )}
              <li>
                <i className='fas fa-shower'></i> Shower
              </li>
              {state.amenities_parking_space && (
              <li>
                <i className='fas fa-car'></i> Parking Space
              </li>
              )}
              {state.air_conditioning && (
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
