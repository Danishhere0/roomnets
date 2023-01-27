/**
 * It takes an array of objects, and returns a new array of objects with the same keys, but with the
 * values transformed by the function you pass in
 * @returns The data is being returned as an array of objects.
 */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { getData } from "../../../utils/getData";
import PropertyBox from "../../property/propertyBoxs/PropertyBox";

const RelatedProperty = () => {
  const history = useHistory();
  const state = history.location.state;
  const [apartList, setApartList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState({ total: 0, limit: "" });
  const [pageNo, setpageNo] = React.useState(0);

  React.useEffect(() => {
    state.location && ListApartmentsByLocation();
    state.lat && ListApartByLnglat(state.lng, state.lat);
  }, []);
  const handleNextPage = () => {
    setApartmentList([]);
    state.location && ListApartmentsByLocation();
    state.lat && ListApartByLnglat(state.lng, state.lat);
  };
  const handleFormsearch = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const ListApartByLnglat = async (lng, lat) => {
    // const states = "lagos";
    setLoading(true)
    await axios
      .get(`/api/v1/ListApartByLnglat/?lng=${lng}&lat=${lat}&pageNo=${pageNo}`)
      .then((response) => {
        console.log(response.data);
        setLoading(false)
        response.data.userData &&
          response.data.userData.length > 0 &&
          setApartList(response.data.userData);
        response.data.userData &&
          response.data.userData.length > 0 &&
          setPagination({
            ...pagination,
            limit: response.data.limit,
            total: response.data.total,
          });
        response.data.userData.length > 0 && setpageNo(pageNo + 1);
      })
      .catch((err) => {
        setLoading(false)

        if (err.response.data.message) {
        } else {
          console.log("error occured");
        }
        // console.log(err);
      });
  };

  return (
    <section className="property-section pt-0">
      <Container>
        <div className="title-3 text-start inner-title">
          <h2>Related Properties</h2>
        </div>
        <Row className=" ratio_55">
          <Col sm="12" className=" property-grid-3">
            <Row className="property-2  column-sm zoom-gallery property-label property-grid">
              {apartList &&
                apartList.slice(0, 3).map((data, i) => (
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
