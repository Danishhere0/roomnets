/**
 * It returns a div with a class of 'advance-card feature-card' that contains a h6 tag with the text
 * 'Featured', a Slider component with a class of 'feature-slider' and the featureSlider object from
 * the data/slickSlider.js file, and a div with a class of 'labels-left' that contains a span with a
 * class of 'label label-success' and the text 'featured'
 * @returns A React component
 */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { featureSlider } from "../../data/slickSlider";
import Img from "../../utils/BackgroundImageRatio";
import NoSsr from "../../utils/NoSsr";
import axios from "axios";

const Featured = () => {
  const [FeaturedData, setFeaturedData] = useState();
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res  = await axios.get(`${process.env.API_URL}/FeaturedApartmentsByLoc?queryQty=3`);
        setFeaturedData(res.data.userData);
        //console.log('Feat Apt Data page:' + res.data.userData);
      } catch (err) {
        console.error('Apt Data page Error is: '+ err);
      }
    };
    fetchRoom();
  }, []);

  return (
    <div className="advance-card feature-card">
      <h6>Featured</h6>
      <NoSsr>
        <Slider className="feature-slider" {...featureSlider}>
        {FeaturedData &&
                  FeaturedData.map((data, i) => (
          <div>
            <Img src={`/assets/images/apartments/${data.media[0]}`} className="bg-img" alt={data.title} />
            <div className="bottom-feature">
              <h5>{data.title}</h5>
              <h6>
                  {data.currency}{data.rent} <small>/ start from</small>
              </h6>
            </div>
          </div>
        ))}
        </Slider>
      </NoSsr>
      <div className="labels-left">
        <span className="label label-success">featured</span>
      </div>
    </div>
  );
};

export default Featured;
