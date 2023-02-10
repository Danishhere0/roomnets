/**
 * It takes an array of objects, and returns a new array of objects with the same keys, but with the
 * values transformed by the function you pass in
 * @returns The data is being returned as an array of objects.
 */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import PropertyBox from "../../property/propertyBoxs/PropertyBox";
import useGeoLocation from '../../../hooks/useGeoLocation';
import axios from "axios";

const RelatedProperty = ({roomData}) => {
  const [roomsList, setRoomList] = useState([]);
  const { state } = roomData;
  const { no_rooms, Approved_By_Admin, country,no_toilets, no_baths, media, isPaidAdd, isTopAdd, paid_add, location, expire_date, purchase_date, Building_type,rent, rent_method,no_occupants, email, i_am, building_location,  street_name, rooms_avail_date, ad_start_date, ad_end_date, living_rooms, furnished_rooms, broker_agent_fee, rooms_size,minimum_stay, maximum_stay, amenities_swim, amenities_internet, amenities_play_ground, amenities_parking_space, amenities_entry_disabled, amenities_balcony, amenities_others, amenities_private_toilets, existing_room_mates, new_room_mate, advert_title, advert_description, post_code, currency, plan, payment_response, posted_by, created_at, updated_at } = state || {};
  const applocation = useGeoLocation();
  /*{location.loaded
    ? JSON.stringify(location)
    : "Location data not available yet."
 }*/
 const lat = applocation.coordinates.lat;
 const lng = applocation.coordinates.lng;
 console.log("my loc here is:"+ lat)

 useEffect(() => {
   const fetchAboutIntro = async () => {
     try {
       const url =`${process.env.API_URL}/ListRoomsByLnglat?lng=${lng}&lat=${lat}`;
       const res11  = await axios.get(url);
       setRoomList(res11.data.userData);
       console.log('About page:' + url);
     } catch (err) {
       console.error('About page Error is: '+ err);
     }
   };
   fetchAboutIntro();
 }, []);

   
  return (
    <section className="property-section pt-0">
      <Container>
        <div className="title-3 text-start inner-title">
          <h2>Related Properties</h2>
        </div>
        <Row className=" ratio_55">
          <Col sm="12" className=" property-grid-3">
            <Row className="property-2  column-sm zoom-gallery property-label property-grid">
              {roomsList &&
                roomsList.slice(0, 3).map((data, i) => (
                  <Col xl="4" md="6" className="wow fadeInUp" key={i}>
                    <PropertyBox data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RelatedProperty;
