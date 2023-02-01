/**
 * It renders a slider with a background image and a title
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import Slider from "react-slick";
import { mainPropertySlider } from "../../../data/slickSlider";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";
import TopTitle from "./TopTitle";
import axios from "axios";

const SliderBreadcrumbSection = ({apartData}) => {
  //const breadcrumbBg = ["/assets/images/property/4.jpg", "/assets/images/property/5.jpg", "/assets/images/property/4.jpg", "/assets/images/property/2.jpg"];
  const fetchHomepageModels = async () => {
    return await axios
      .get(`${process.env.API_URL}/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
  
  const [homepageData, setHomePageData] = React.useState({
    Banners: [],
    partners:[],
    googleAdsScript: "",
  });

  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => {
          console.log("breadcrumb:" + res.data.userData);
          setHomePageData({ ...res.data.userData });
        })
        .catch((err) => console.log(err)),
  
    []
  );
  return ( 
    <section className="ratio_40 breadcrumb-section p-0 single-property-images">
      <NoSsr>
        <Slider className="main-property-slider arrow-image" {...mainPropertySlider}>
        {/*  {breadcrumbBg.map((item, index) => (
            <div key={index}>  */}
              <div>
                <img src={"/assets/images/property/"+ `${homepageData.BreadcrumbImage1 || ""}`} className="bg-img" alt="" style="max-height='200px'" />
              </div>
           {/* </div>
          ))}  */}
        </Slider>                                                   
      </NoSsr>
      <TopTitle apartData={apartData} />
    </section>
  );
};            


export default SliderBreadcrumbSection;
