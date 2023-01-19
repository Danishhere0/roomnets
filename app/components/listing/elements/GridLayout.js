/**
 * It takes in a list of properties and returns a list of property boxes
 * @returns A div with a className of property-2 row column-sm zoom-gallery property-label
 * property-grid.
 */
import React, { Fragment, useEffect } from "react";
import { Col, Row } from "reactstrap";
import useFilterProducts from "../../../utils/useFilterProducts";
import PropertyBox from "../../elements/propertyBoxs/PropertyBox";

const GridLayout = ({ gridStyle, value, gridSize, listSize, relativeSlider, video, setTotalPages, toPage, setToPage, setProductCount, infiniteScroll, myList }) => {
  let cardToShow = 6;
  const showProduct = useFilterProducts({ value, myList });

  useEffect(() => {
    setTotalPages(Math.ceil(showProduct?.length / cardToShow));
    setProductCount(showProduct?.length);
    setToPage(1);
  }, [showProduct, cardToShow, setTotalPages, setProductCount, setToPage]);

  return (
    <>
      <Row className={`property-2 column-sm zoom-gallery property-label property-grid ${gridStyle === "list-view" ? "list-view" : ""}`}>
        {showProduct &&
          showProduct.slice(!infiniteScroll && cardToShow * toPage - cardToShow, cardToShow * toPage).map((data, i) => (
            <Fragment key={i}>
              <Col
                sm={gridStyle === "grid-view" && (gridSize === 3 || 4) && "6"}
                md={gridStyle === "list-view" && "12"}
                lg={gridStyle === "grid-view" && ((gridSize === 2 && "6") || ((gridSize === 3 || 4) && "4"))}
                xl={gridStyle === "list-view" && listSize === 2 && "6"}
                xxl={gridStyle === "grid-view" && gridSize === 4 && "3"}
                className={`${gridStyle === "list-view" ? "list-view" : ""} wow fadeInUp grid-view `}
                key={i}>
                <PropertyBox data={data} relativeSlider={relativeSlider} video={video} />
              </Col>
            </Fragment>
          ))}
      </Row>
    </>
  );
};

export default GridLayout;
