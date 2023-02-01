import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Printer, Twitter } from "react-feather";
import { Container } from "reactstrap";
import ReviewStarr from "../../elements/ReviewStarr";

const TopTitle = ({ roomData }) => {
  const [like, setLike] = useState(false);
  const { state } = roomData;
  const { no_rooms, Approved_By_Admin, country,no_toilets, no_baths, media, isPaidAdd, isTopAdd, paid_add, location, expire_date, purchase_date, Building_type,rent, rent_method,no_occupants, email, i_am, building_location,  street_name, rooms_avail_date, ad_start_date, ad_end_date, living_rooms, furnished_rooms, broker_agent_fee, rooms_size,minimum_stay, maximum_stay, amenities_swim, amenities_internet, amenities_play_ground, amenities_parking_space, amenities_entry_disabled, amenities_balcony, amenities_others, amenities_private_toilets, existing_room_mates, new_room_mate, advert_title, advert_description, post_code, currency, plan, payment_response, posted_by, created_at, updated_at } = state || {};
  //console.log("Search Data" +roomData.advert_title);
  return (
    <div className="single-property-section">
      <Container>
        <div className="single-title">
          <div className="left-single">
            <div className="d-flex">
              <h2 className="mb-0">{roomData?.advert_title || "None"}</h2>
              <span>
                <span className="label label-shadow ms-2">For Rent</span>
              </span>
            </div>
            <p className="mt-1">{roomData?.building_location?.address || roomData?.street_name }</p>
            <ul>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                  <span>{roomData?.living_rooms || "Not listed"} Bedrooms</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                  <span>{roomData?.no_baths || "Not listed"} Bathrooms</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/sofa.svg" className="img-fluid" alt="" />
                  <span>{roomData?.no_toilets || "Not listed"} Toilets</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                  <span>{roomData?.rooms_size || "Not stated"}Sqr Ft Room Size</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/garage.svg" className="img-fluid" alt="" />
                  <span>{roomData?.amenities_parking_space || "No"} Parking Space</span>
                </div>
              </li>
            </ul>
            <div className="share-buttons">
              <div className="d-inline-block">
                <a className="btn btn-gradient btn-pill">
                  <i className="fas fa-share-square"></i>
                  share
                </a>
                <div className="share-hover">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" className="icon-facebook" target="_blank" rel="noreferrer">
                        <Facebook></Facebook>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="icon-twitter" target="_blank" rel="noreferrer">
                        <Twitter></Twitter>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" className="icon-instagram" rel="noreferrer">
                        <Instagram></Instagram>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a className="btn btn-dashed btn-pill ms-md-2 ms-1 save-btn" onClick={() => setLike(!like)}>
                <i className={`${like ? "fas" : "far"} fa-heart`}></i>
                Save
              </a>
              <a className="btn btn-dashed btn-pill ms-md-2 ms-1" onClick={() => window.print()}>
                <Printer />
                Print
              </a>
            </div>
          </div>
          <div className="right-single">
            <ReviewStarr rating={4} />
            <h2 className="price">
            {roomData.currency}{roomData?.rent || "Undisclosed"} <span>/ start From</span>
            </h2>
            <div className="feature-label">
            {roomData?.amenities_internet && ( <span className="btn btn-dashed btn-pill">Wi-fi</span>)}
            {roomData?.amenities_swim && (<span className="btn btn-dashed ms-1 btn-pill">Swimming Pool</span>)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopTitle;
