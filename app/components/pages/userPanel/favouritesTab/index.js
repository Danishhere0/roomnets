import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import Pagination from "../../../../layout/Pagination";
import Header from "../../../../layout/sidebarLayout/Header";
import { getData } from "../../../../utils/getData";
import GridLayout from "../../../listing/elements/GridLayout";
import useGeoLocation from '../../../../hooks/useGeoLocation';

const FavoritesTab = () => {
  const [value, setValue] = useState();
  const [gridStyle, setGridStyle] = useState("list-view");
  const [toPage, setToPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [gridSize, setGridSize] = useState(2);
  const [productCount, setProductCount] = useState();
  const { likedProducts } = useSelector((state) => state.addToWishListReducer);

  const applocation = useGeoLocation();
  const lat = applocation.coordinates.lat;
  const lng = applocation.coordinates.lng;

  useEffect(() => {
    getData(`${process.env.API_URL}/FeaturedRoomsByLoc?lng=${lng}&lat=${lat}`)
      .then((res) => {
        setValue(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2)
            .filter((cartData) => likedProducts.includes(cartData.id)),
        );
      })
      .catch((error) => console.log("Error", error));
  }, [likedProducts]);
  return (
    <div className='dashboard-content'>
      <div className='tab-listing' id='favouritesTab'>
        <div className='property-section'>
          <div className='property-grid-2 ratio_63'>
            <section className='property-section p-0'>
              <Container>
                <div className='property-grid-2 property-grid-slider'>
                  <Header
                    setGridStyle={setGridStyle}
                    gridStyle={gridStyle}
                    gridBar={true}
                    toPage={toPage}
                    productCount={productCount}
                    value={value}
                    title={"Favorites Listing"}
                    setGridSize={setGridSize}
                  />
                  <div className={`property-wrapper-grid ${gridStyle ? "list-view" : ""}`}>
                    <GridLayout value={value} gridSize={gridSize} gridStyle={gridStyle} setTotalPages={setTotalPages} toPage={toPage} setToPage={setToPage} setProductCount={setProductCount} />
                  </div>
                  <Pagination toPage={toPage} setToPage={setToPage} totalPages={totalPages} />
                </div>
              </Container>
            </section>
            {/* <GridView size={2} gridType={'list-view'} gridBar={true} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesTab;
