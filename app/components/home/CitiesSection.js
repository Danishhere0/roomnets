/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values multiplied by 2
 * @returns A React component.
 */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { City, FindPropertiesInTheseCities } from "../../constValues/constValues";
import Img from "../../utils/BackgroundImageRatio";
import NoSsr from "../../utils/NoSsr";
import axios from "axios";
import { getCookie } from 'cookies-next';
import { useSelector } from 'react-redux';

const CitiesSection = ({ value }) => {
  const [citiesData, setCitiesData] = useState([]);  
  const { country } = useSelector((state) => state.countryReducer?.country);

  useEffect(() => {
    const user_country = getCookie("currentUser") ? JSON.parse(getCookie("currentUser")).userData.user.country : "NG";
    const sel_country = getCookie("selCountryCode") ? getCookie("selCountryCode") : user_country;
    const fetch = async () => {
      try {
        const res1  = await axios.get(`${process.env.API_URL}/getCitiesByCountry`, {
          params: {
            country_code: sel_country,
            featured: "1",
            limit:"6"
          },
        });
        setCitiesData(res1.data.userData);
        console.log('Cities section:' + res1.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetch();
  }, []);


  return (

    <section className='my-gallery gallery-6'>
      <Container>
        <Row>
          <Col>
            <div className='title-1'>
              <span className='label label-gradient'>{City}</span>
              <h2>{FindPropertiesInTheseCities}</h2>
              <hr />
            </div>

            <Row>
              {citiesData &&
                citiesData.map((data, i) => (
                  <Col xl={i === 2 || i === 3 ? "6" : "3"} lg={i === 2 || i === 3 ? "8" : "4"} md={i === 2 || i === 3 ? "7" : "5"} sm={i === 2 || i === 3 ? "" : "6"} className='wow fadeInUp' key={i}>
                    <div className='find-cities '>
                      <Img src={data.city_img} className='bg-img' />
                      <div className='citi-overlay'>
                        <div>
                          <NoSsr>
                            <h4>{Math.floor(Math.random() * 10000)}+ Property</h4>
                          </NoSsr>
                          <h2>{data.city_name}</h2>
                          <h6 className='font-roboto'>{data.title}</h6>
                          <h6 className='font-roboto'> 
                            <Link to={{ pathname: "/browse_rooms", state: city.name,  }}>
                              Rooms
                            </Link>{" "}
                            <span className="mx-2">|</span>
                            <Link to={{ pathname: "/browse_apart", state: city.name, }}>
                              Apartments
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CitiesSection;
