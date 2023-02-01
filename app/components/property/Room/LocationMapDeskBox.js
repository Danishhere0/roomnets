/**
 * It returns a div with a class of desc-box and an id of location-map. Inside that div is another div
 * with a class of page-section. Inside that div is an h4 with a class of content-title and the text
 * "Location". Inside that div is an iframe with a title of "realestate location", a src of
 * "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06
 * @returns A div with a class of desc-box and an id of location-map.
 */
import React from "react";

const LocationMapDeskBox = ({roomData}) => {
  const { state } = roomData;
  const { no_rooms, Approved_By_Admin, country,no_toilets, no_baths, media, isPaidAdd, isTopAdd, paid_add, location, expire_date, purchase_date, Building_type,rent, rent_method,no_occupants, email, i_am, building_location,  street_name, rooms_avail_date, ad_start_date, ad_end_date, living_rooms, furnished_rooms, broker_agent_fee, rooms_size,minimum_stay, maximum_stay, amenities_swim, amenities_internet, amenities_play_ground, amenities_parking_space, amenities_entry_disabled, amenities_balcony, amenities_others, amenities_private_toilets, existing_room_mates, new_room_mate, advert_title, advert_description, post_code, currency, plan, payment_response, posted_by, created_at, updated_at } = state || {};

  return (
    <div className='desc-box' id='location-map'>
      <div className='page-section'>
        <h4 className='content-title'>Location</h4>
        <iframe
          title='realestate location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin'
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default LocationMapDeskBox;
