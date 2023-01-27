/**
 * It returns a section with a container with a row with a sidebar and a single property section
 * @returns The return statement is used to return a value from a function.
 */
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import ContactInfo from "../../../layout/sidebarLayout/ContactInfo";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import Featured from "../../../layout/sidebarLayout/Featured";
import Filter from "../../../layout/sidebarLayout/Filter";
import Mortgage from "../../../layout/sidebarLayout/Mortgage";
import RecentlyAdded from "../../../layout/sidebarLayout/RecentlyAdded";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import NoSsr from "../../../utils/NoSsr";
import RelatedProperty from "./RelatedProperty";
import SinglePropertySection from "./SingleProperty";
import SliderBreadcrumbSection from "./SliderBreadcrumb";
import axios from "axios";

const BodyContent = ({ side, roomId }) => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    const fetchAboutIntro2 = async () => {
      try {
        const res2  = await axios.get(`${process.env.API_URL}/getPostRoomsById/${roomId}`, {
          params: {
            postId: roomId
          },
        });
        setRoomData(res2.data.userData[0]);
        console.log('About page:' + roomId);
      } catch (err) {
        console.error('About page Error is: '+ roomId);
      }
    };
    fetchAboutIntro2();
  }, []);


  return (
    <NoSsr>
      <SliderBreadcrumbSection />
      <section className="single-property">
        <Container>
          <Row className=" ratio_65">
            <Sidebar mortgage={true} side={side} singleProperty={true}>
              <ContactInfo data={roomData} />
              <Exploration />
              <Filter sm={12} />
              <Featured />
              <RecentlyAdded />
              <Mortgage />
            </Sidebar>
            <SinglePropertySection roomData={roomData}/>
          </Row>
        </Container>
      </section>
      <RelatedProperty />
    </NoSsr>
  );
};

export default BodyContent;
