/**
 * It renders a map and a grid of properties
 * @param props - This is the props that are passed to the component.
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "../../../../layout/sidebarLayout/Header";
import Pagination from "../../../../layout/Pagination";
import { getData } from "../../../../utils/getData";
import GridLayout from "../../elements/GridLayout";

const MapView = (props) => {
  const [value, setValue] = useState();
  const [gridStyle, setGridStyle] = useState(props.gridType);
  const [toPage, setToPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [productCount, setProductCount] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data?.LatestPropertyListingInEnterprise);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <section className='property-section section-sm'>
      <Container fluid={true}>
        <Row className=' ratio_70 property-grid-2 property-map'>
          <Col lg='12'>
            <Header
              setGridStyle={setGridStyle}
              gridStyle={gridStyle}
              mapView={true}
              gridBar={true}
              toPage={toPage}
              productCount={productCount}
              value={value}
              title={"Properties Listing"}
              AdvancedSearchShow={true}
            />
          </Col>
          <Col xl='5' className={`map-section  ${props.side === "right" ? "order-1" : ""}`}>
            {props.children}
          </Col>
          <Col xl='7'>
            <GridLayout value={value} gridStyle={gridStyle} gridSize={2} propertyTag={"all"} toPage={toPage} setToPage={setToPage} setTotalPages={setTotalPages} setProductCount={setProductCount} />
            <Pagination toPage={toPage} setToPage={setToPage} totalPages={totalPages} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MapView;
