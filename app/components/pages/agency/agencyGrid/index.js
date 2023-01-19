/**
 * It takes in a list of data and returns a list of components
 * @returns The return statement is used to return a value from a function.
 */
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import Exploration from "../../../../layout/sidebarLayout/Exploration";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import Featured from "../../../../layout/sidebarLayout/Featured";
import PropertyBoxFour from "../../../elements/propertyBoxs/PropertyBoxFour";
import Header from "../../../../layout/sidebarLayout/Header";

const BodyContent = ({ clientData, listSize, size, style }) => {
  const [gridSize, setGridSize] = useState(size || 3);
  const [gridStyle, setGridStyle] = useState(style || "grid-view");

  return (
    <section className="agent-section property-section">
      <Container>
        <Row className="row ratio2_3">
          <Col xl="9" lg="8" className="property-grid-3 agent-grids">
            <Header title={"Agency Listing"} setGridSize={setGridSize} setGridStyle={setGridStyle} gridStyle={gridStyle} gridBar={true} />
            <div className={`property-wrapper-grid ${gridStyle === "list-view" ? "list-view" : ""}`}>
              <div className={`property-2 row column-sm property-label property-grid ${gridStyle === "list-view" ? "list-view" : ""} `}>
                {clientData &&
                  clientData.map((data, i) => (
                    <Col
                      sm={gridStyle === "grid-view" && (gridSize === 3 || 4) && "6"}
                      // md={gridStyle === 'list-view' && '12'}
                      lg={gridStyle === "grid-view" && ((gridSize === 2 && "6") || ((gridSize === 3 || 4) && "4"))}
                      xl={gridStyle === "list-view" && listSize === 2 && "6"}
                      xxl={gridStyle === "grid-view" && gridSize === 4 && "3"}
                      className={`${gridStyle === "list-view" ? "list-view" : ""} wow fadeInUp grid-view `}
                      key={i}>
                      <PropertyBoxFour data={data} />
                    </Col>
                  ))}
              </div>
            </div>
          </Col>
          <Sidebar>
            <Exploration />
            <Featured />
            <RecentlyAdded />
          </Sidebar>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
