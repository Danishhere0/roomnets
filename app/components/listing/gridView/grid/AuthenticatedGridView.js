/**
 * It takes in a bunch of props, and returns a bunch of JSX
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { Fragment, useEffect, useState } from "react";
import { X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Pagination from "../../../../layout/Pagination";
import Category from "../../../../layout/sidebarLayout/Category";
import ContactInfo from "../../../../layout/sidebarLayout/ContactInfo";
import Filter from "../../../../layout/sidebarLayout/Filter";
import Header from "../../../../layout/sidebarLayout/Header";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import { getData } from "../../../../utils/getData";
import GridLayout from "../../elements/GridLayout";
import { getCookie } from "cookies-next";
import axios from "axios";


const GridView = ({ side, size, gridType, listSize, mapModal, mapView, relativeSlider, gridBar, video, tabHeader, setMapModal, children, AdvancedSearchShow, infiniteScroll, myList, APIPage, userToken }) => {
  const [value, setValue] = useState();
  const [gridSize, setGridSize] = useState(size);
  const [gridStyle, setGridStyle] = useState(gridType);
  const [propertyTag, setPropertyTag] = useState("all");
  const [toPage, setToPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [productCount, setProductCount] = useState();
  const dispatch = useDispatch();
  const filterTag = useSelector((state) => state.inputsReducer);

  useEffect(async () => {
    const user_id = JSON.parse(getCookie("currentUser")).userData.user._id;
    const country = JSON.parse(getCookie("currentUser")).userData.country;
    console.log("Console log testing:"+country);
    //getData(`${process.env.API_URL}/${APIPage}?id=${user_id}`)
    await axios
      .get(`${process.env.API_URL}/${APIPage}?id=${user_id}&country=${country}`,{headers:{ Authorization:userToken}})
      .then((res) => {
        setValue(res.data?.userData);
        console.log("Console log testing:"+res.data?.userData)
      })
      .catch((error) => console.log("my list Error:", error));
  }, [relativeSlider]);

  const StringConvert = (str) => {
    var newStr = "";
    str
      .replace(str[0], str[0].toUpperCase())
      .split("")
      .map((character) => (character === character.toUpperCase() ? (newStr += " " + character) : (newStr += character)));
    return newStr;
  };
  return (
    <section className={`property-section  ${mapView && mapModal === "view" ? "section-sm" : ""}  ${relativeSlider ? "property-list-thumbnail" : ""}`}>
      <Container>
        <Row className=' ratio_63'>
          {side && (
            <Sidebar side={side}>
              <Filter value={value} sm={12} lg={12} /> <Category value={value} />
              <ContactInfo />
              <RecentlyAdded />
            </Sidebar>
          )}

          <Col xl={side ? "9" : ""} lg={side ? "8" : ""} className={`${relativeSlider ? "property-grid-3" : "property-grid-2"}  property-grid-slider`}>
            <Header setGridSize={setGridSize} setGridStyle={setGridStyle} gridStyle={gridStyle} mapModal={mapModal} gridBar={gridBar} tabHeader={tabHeader} propertyTag={propertyTag} setPropertyTag={setPropertyTag} title={"Properties Listing"} AdvancedSearchShow={AdvancedSearchShow} toPage={toPage} productCount={productCount} value={value} setMapModal={setMapModal} />
            <div className='filter-tag-div'>
              {filterTag &&
                Object.keys(filterTag).map((data, i) => (
                  <Fragment key={i}>
                    {filterTag[data] &&
                      (!Array.isArray(filterTag[data]) ? (
                        StringConvert(data).trim() !== filterTag[data] && (
                          <div className='filter-tag'>
                            {StringConvert(data)} : {filterTag[data]} <X onClick={() => dispatch({ type: data, dispatch: false })} />
                          </div>
                        )
                      ) : (
                        <div className='filter-tag'>
                          {StringConvert(data)} : {filterTag[data][0] + "-" + filterTag[data][1]} <span onClick={() => dispatch({ type: data, dispatch: [] })}></span>
                        </div>
                      ))}
                  </Fragment>
                ))}
            </div>
            {children}

            <div className={`property-wrapper-grid ${gridStyle ? "list-view" : ""}`}>
              <GridLayout myList={myList} value={value} gridSize={gridSize} listSize={listSize} gridStyle={gridStyle} relativeSlider={relativeSlider} video={video} propertyTag={propertyTag} setTotalPages={setTotalPages} toPage={toPage} setToPage={setToPage} setProductCount={setProductCount} infiniteScroll={infiniteScroll} />
            </div>
            {infiniteScroll ? (
              <a className='btn btn-solid btn-flat load-more' onClick={() => setToPage(toPage + 0.5)}>
                load more
              </a>
            ) : (
              <Pagination toPage={toPage} setToPage={setToPage} totalPages={totalPages} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GridView;
