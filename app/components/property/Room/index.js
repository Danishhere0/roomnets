/**
 * It returns a section with a container with a row with a sidebar and a single property section
 * @returns The return statement is used to return a value from a function.
 */
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import ContactInfo from "../../../layout/sidebarLayout/ContactInfo";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import Featured from "../../../layout/sidebarLayout/FeaturedRooms";
import Filter from "../../../layout/sidebarLayout/Filter";
import Mortgage from "../../../layout/sidebarLayout/Mortgage";
import RecentlyAdded from "../../../layout/sidebarLayout/RecentlyAdded";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import NoSsr from "../../../utils/NoSsr";
import RelatedProperty from "./RelatedProperty";
import SinglePropertySection from "./SingleProperty";
import SliderBreadcrumbSection from "./SliderBreadcrumb";
import axios from "axios";
import { getData } from "../../../utils/getData";


const BodyContent = ({ side, roomId }) => {
  const [roomData, setRoomData] = useState([]);
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res4  = await axios.get(`${process.env.API_URL}/getPostRoomsById/${roomId}`);
        setRoomData(res4.data.userData);
        console.log('Room Data page:' + res4.data.userData);
      } catch (err) {
        console.error('Room Data page Error is: '+ err);
      }
    };
    fetchRoom();
  }, []);

  useEffect(() => {
    const fetchAboutBrand = async () => {
      try {
        const res4  = await axios.get(`${process.env.API_URL}/getBrands`);
        setBrandData(res4.data.userData.brand_image);
        console.log('Brand page:' + res4.data.userData);
      } catch (err) {
        console.error('Brand page Error is: '+ err);
      }
    };
    fetchAboutBrand();
  }, []);
  return (
    <NoSsr>
      <SliderBreadcrumbSection roomData={roomData}/>
      <section className="single-property">
        <Container>
          <Row className=" ratio_65">
            <Sidebar mortgage={true} side={side} singleProperty={true}>
              <ContactInfo data={roomData} />
              <Exploration />
              <Filter sm={12} />
              <Featured roomData={roomData}/>
              <RecentlyAdded roomData={roomData}/>
              <Mortgage />
            </Sidebar>
            <SinglePropertySection roomData={roomData}/>
          </Row>
        </Container>
      </section>
      <RelatedProperty roomData={roomData}/>
    </NoSsr>
  );
};

export default BodyContent;
