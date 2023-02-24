/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { getData } from "../../../utils/getData";
import { DropdownInputFields } from "../../elements/DropdownInputFields";
import RangeInputFields from "../../elements/RangeInputFields";
import AutoCompletePlaces from "../../elements/AutoCompletePlaces";
import axios from "axios";
import useGeoLocation from '../../../hooks/useGeoLocation';
import { useRouter } from 'next/router';

const InputForm = ({ label, lg, sm, lastSm }) => {
  const router = useRouter();
  const [filterValues, setFilterValues] = useState({});
  const [SearchType, setSearchType] = React.useState("apartment");
  const [searchText, setSearchText] = React.useState();
  const [homePageData, setHomePageData] = React.useState();
  const [value, setValue] = useState();
  
  useEffect(() => {
    const fetchAboutIntro = async () => {
      try {
        const res1  = await axios.get(`${process.env.API_URL}/fetchHomepageModels`);
        setHomePageData(res1.data.userData);
      //  console.log('About page:' + res1.data.userData[0].content);
      } catch (err) {
        console.error('InputForm page Error is: '+ err);
      }
    };
    fetchAboutIntro();
  }, []);
  
  const handleSearch1 = () => {
    if (!searchText) {
      return alert("search field is empty");
    }

    SearchType === "rooms" &&
      router.push({
        pathname: '/SearchResult1',
        query: { location: searchText },
      });

    SearchType === "apartment" &&
      router.push({
        pathname: "/SearchResult2",
        query: { location: searchText },
      });
  };
  //search by auto complete drop down using longitude and latitude
  const handleSearch2 = async (places) => {
    //places.name mease we didnt select from  the drop down of auto
    //completet rather we clicked enter after searching location
    if (places.name) {
      return handleSearch1;
    }

    //const applocation = useGeoLocation();
    //const lat = applocation.coordinates.lat;
    //const lng = applocation.coordinates.lng;

    const place_id = places.place_id;
    const lng = await places.geometry.location.lng();
    const lat = await places.geometry.location.lat();
    const address = places.formatted_address;

    SearchType === "rooms" &&
      router.push({
        pathname: "/SearchResult1",
        query: { lng: lng, lat: lat, address: address },
      });
    SearchType === "apartment" &&
      router.push({
        query: "/SearchResult2",
        state: { lng: lng, lat: lat, address: address },
      });
  };

  useEffect(() => {
    getData(`${process.env.API_URL}/ListRooms`)
      .then((res) => {
        setValue(
          res.data &&
            res.data !== undefined &&
            Object.keys(res.data)
              .map((key) => [res.data[key]])
              .flat(2)
              .filter((arrData) => Array.isArray(arrData.img)),
        );
      })
      .catch((error) => console.log("Error", error));
  }, []);

  /*const minRent = 50;
  const maxRent = 1000000;
  const minSqft = 30;
  const maxSqft = 10000;*/

  let minRent =
    value?.length !== 0 &&
    value?.reduce(function (res, obj) {
      return Math.round(obj?.rent) < Math.round(res?.rent) ? obj : res;
    });
  let maxRent =
    value?.length !== 0 &&
    value?.reduce(function (res, obj) {
      return Math.round(obj?.rent) > Math.round(res?.rent) ? obj : res;
    });
  let minSqft =
    value?.length !== 0 &&
    value?.reduce(function (res, obj) {
      return Math.round(obj?.sqft) < Math.round(res?.sqft) ? obj : res;
    });
  let maxSqft =
    value?.length !== 0 &&
    value?.reduce(function (res, obj) {
      return Math.round(obj?.sqft) > Math.round(res?.sqft) ? obj : res;
    });

  return (
    <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch1();
              }}
              
            >
    <Row className="gx-3">
      
              <AutoCompletePlaces
                        value={searchText || null }
                        onChange={(e) => setSearchText(e.target.value)}
                        handleplaces={(places) => handleSearch2(places)}
                        className="form-control "
                        placeholder="Enter Address, State/City or Location"
                      />
        <DropdownInputFields filterValues={filterValues} setFilterValues={setFilterValues} label={label} start={0} end={6} lg={lg} sm={sm} lastSm={lastSm} />
        <RangeInputFields label="Rent" name="rent" filterValues={filterValues} setFilterValues={setFilterValues} min={minRent} onChange={(values) => setValues(values)} max={maxRent} lg={lg} sm={sm} />
        <RangeInputFields label="Area" name="area" filterValues={filterValues} setFilterValues={setFilterValues} min={minSqft}  max={maxSqft} onChange={(values) => setValues(values)} lg={lg} sm={sm} /> 
        
        <Col lg={lg || 12}>
        <button className="btn btn-gradient mt-3" type="submit">
                Search
              </button>
        </Col>
      
    </Row>
    </form>
  );
};

export default InputForm;
