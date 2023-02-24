import React, { useEffect, useState } from "react";
import { getData } from "../../utils/getData";
import LatestPropertySection from "./LatestRoomSection";
import LatestPropertySectionOne from "./LatestRoomSectionOne";
import PropertySection from "./RoomSection";
import PropertySectionOne from "./RoomSectionOne";
import SalePropertySection from "./SaleRoomSection";
import useGeoLocation from '../../../hooks/useGeoLocation';

const BodyContent = () => {
  const [ListRandomPaidRooms, setListRandomPaidRooms] = useState();
  const [ListRooms, setListRooms] = useState();
  const [ListRandomRooms, setListRandomRooms] = useState();
  const applocation = useGeoLocation();
 const lat = applocation.coordinates.lat;
 const lng = applocation.coordinates.lng;

  useEffect(() => {
    getData(`${process.env.API_URL}/ListRandomPaidRooms?lng=${lng}&lat=${lat}`)
      .then((res) => {
        setListRandomPaidRooms(res.data.userData);
      })
      .catch((error) => console.log("Error", error));

    getData(`${process.env.API_URL}/ListRooms?lng=${lng}&lat=${lat}`)
      .then((res) => {
        setListRooms(res.data.userData);
      })
      .catch((error) => console.log("Error", error)); 
      
    getData(`${process.env.API_URL}/ListRandomRooms?lng=${lng}&lat=${lat}`)
      .then((res) => {
        setListRandomRooms(res.data.userData);
      })
      .catch((error) => console.log("Error", error)); 
  }, []);

  return (
    <> 
      <LatestPropertySection value={ListRandomPaidRooms?.slice(0, 3)} />
      <div className="bg-light">
        <PropertySection value={ListRooms} />
      </div>
      <div className="bg-light section-pb">
        <PropertySectionOne value={ListRandomRooms} size={15} />
      </div>
      
      {/*<div className="bg-light section-pb">
        <PropertySectionOne value={value?.PropertyListing} size={3} />
      </div>
      <LatestPropertySectionOne value={value?.LatestPropertyInClassicLayout} />
      <div className="bg-light">
        <SalePropertySection value={value?.LatestForSalePropertyData} />
      </div>*/}
    </>
  );
};

export default BodyContent;
