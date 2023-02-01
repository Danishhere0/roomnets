/**
 * It returns a section with a container with a row with a sidebar and a single property section
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
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

const BodyContent = ({ side, AprtId }) => {
  const [apartData, setApartData] = useState([]);

  useEffect(() => {
    const fetchAboutIntro2 = async () => {
      try {
        const res2  = await axios.get(`${process.env.API_URL}/getPostApartById/${AprtId}`);
        setApartData(res2.data.userData);
       // console.log('Room Data page:' + res2.data.userData);
      } catch (err) {
        console.error('About page Error is: '+ AprtId);
      }
    };
    fetchAboutIntro2();
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
      <SliderBreadcrumbSection apartData={apartData} />
      <section className="single-property">
        <Container>
          <Row className=" ratio_65">
            <Sidebar mortgage={true} side={side} singleProperty={true}>
              <ContactInfo data={apartData}/>
              <Exploration apartData={apartData}/>
              <Filter sm={12} />
              <Featured apartData={apartData}/>
              <RecentlyAdded apartData={apartData} />
              <Mortgage apartData={apartData} />
            </Sidebar>
            <SinglePropertySection apartData={apartData}/>
          </Row>
        </Container>
      </section>
      <RelatedProperty />
    </NoSsr>
  );
};

export default BodyContent;
